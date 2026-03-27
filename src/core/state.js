import { migrateEntry } from '../utils/srs.js';

export const DEFAULT_STATE = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActivity: null,
  completedLessons: [],
  learnedWords: {},       // { wordKey: { status, interval, nextReview, easeFactor, lapses } }
  errors: {},             // { wordKey: { count, lastWrong, quizTypes[] } }
  lessonScores: {},       // { lessonId: score% }
  quizzesCompleted: 0,
  perfectQuizzes: 0,
  earnedBadges: [],
  totalSeconds: 0,
  weekActivity: [0, 0, 0, 0, 0, 0, 0],
  culturalFactsSeen: 0,
  seenCulturalFacts: [],
  favorites: [],
  theme: 'light',
  lastDailyDate: null,
  dailyStreak: 0,
  dailyHistory: [],
};

export let STATE = {};

// Callback injection — avoids circular dependencies.
// main.js sets real implementations at init time.
export const _cb = {
  updateNavXP:     () => {},
  updateNavStreak: () => {},
  showLevelUpModal: () => {},
  checkBadges:     () => {},
};

export function loadState() {
  try {
    const saved = localStorage.getItem('portufacil_state');
    STATE = saved ? { ...DEFAULT_STATE, ...JSON.parse(saved) } : { ...DEFAULT_STATE };
    // Migrate learnedWords from old string format to SRS object format
    if (STATE.learnedWords) {
      Object.keys(STATE.learnedWords).forEach(k => {
        if (typeof STATE.learnedWords[k] === 'string') {
          STATE.learnedWords[k] = migrateEntry(STATE.learnedWords[k]);
        }
      });
    }
    if (!STATE.errors) STATE.errors = {};
    if (!STATE.lessonScores) STATE.lessonScores = {};
  } catch {
    STATE = { ...DEFAULT_STATE };
  }
}

export function saveState() {
  localStorage.setItem('portufacil_state', JSON.stringify(STATE));
}

// Mutates STATE in-place so all modules see the updated values.
export function setStateFrom(data) {
  Object.keys(STATE).forEach(k => delete STATE[k]);
  Object.assign(STATE, { ...DEFAULT_STATE, ...data });
}

export function addXP(amount) {
  STATE.xp += amount;
  const newLevel = Math.floor(STATE.xp / 200) + 1;
  const leveledUp = newLevel > STATE.level;
  STATE.level = newLevel;
  _cb.updateNavXP();
  if (leveledUp) _cb.showLevelUpModal(STATE.level);
  _cb.checkBadges();
  saveState();
}

export function updateStreak() {
  const today = new Date().toDateString();
  if (STATE.lastActivity === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  STATE.streak = STATE.lastActivity === yesterday ? STATE.streak + 1 : 1;
  STATE.lastActivity = today;
  const day = new Date().getDay();
  STATE.weekActivity[day] = (STATE.weekActivity[day] || 0) + 1;
  _cb.updateNavStreak();
  _cb.checkBadges();
  saveState();
}

export function recordError(key, quizType) {
  if (!STATE.errors[key]) {
    STATE.errors[key] = { count: 0, lastWrong: null, quizTypes: [] };
  }
  STATE.errors[key].count++;
  STATE.errors[key].lastWrong = Date.now();
  if (quizType && !STATE.errors[key].quizTypes.includes(quizType)) {
    STATE.errors[key].quizTypes.push(quizType);
  }
}
