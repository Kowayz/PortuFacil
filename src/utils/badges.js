import { STATE, saveState } from '../core/state.js';
import { DATA } from '../data/index.js';
import { showToast } from '../components/toast.js';
import { getStatus, getDueWords } from './srs.js';

export function checkBadges() {
  const learnedCount = Object.keys(STATE.learnedWords).filter(k =>
    getStatus(STATE.learnedWords[k]) === 'mastered'
  ).length;
  const a1Lessons = DATA.lessons.filter(l => l.level === 'A1');
  const voyageWords = Object.keys(STATE.learnedWords).filter(k =>
    k.startsWith('voyage_') && getStatus(STATE.learnedWords[k]) === 'mastered'
  ).length;
  const voyageCat = DATA.vocabulary.categories.find(c => c.id === 'voyage');
  const voyageTotal = voyageCat ? voyageCat.words.length : 12;
  const activeAllWeek = STATE.weekActivity.every(v => v > 0);
  const dueWords = getDueWords(STATE.learnedWords);
  const b1Lessons = DATA.lessons.filter(l => l.level === 'B1');

  const badgeConditions = {
    first_word:      learnedCount >= 1,
    ten_words:       learnedCount >= 10,
    fifty_words:     learnedCount >= 50,
    hundred_words:   learnedCount >= 100,
    polyglotte:      learnedCount >= 200,
    vocab_500:       learnedCount >= 500,
    first_lesson:    STATE.completedLessons.length >= 1,
    five_lessons:    STATE.completedLessons.length >= 5,
    all_a1:          a1Lessons.every(l => STATE.completedLessons.includes(l.id)),
    b1_complete:     b1Lessons.length > 0 && b1Lessons.every(l => STATE.completedLessons.includes(l.id)),
    streak_3:        STATE.streak >= 3,
    streak_7:        STATE.streak >= 7,
    streak_30:       STATE.streak >= 30,
    first_quiz:      STATE.quizzesCompleted >= 1,
    perfect_quiz:    STATE.perfectQuizzes >= 1,
    quiz_master_5:   STATE.perfectQuizzes >= 5,
    all_correct:     STATE.perfectQuizzes >= 3,
    ser_estar:       STATE.completedLessons.includes('a1-7'),
    culturalist:     STATE.culturalFactsSeen >= 5,
    early_bird:      new Date().getHours() < 8,
    night_owl:       new Date().getHours() >= 22,
    night_study:     new Date().getHours() >= 22 && STATE.streak >= 5,
    vocab_traveller: voyageCat && voyageWords >= voyageTotal,
    week_warrior:    activeAllWeek,
    srs_streak_7:    dueWords.length === 0 && STATE.streak >= 7,
    speed_learner:   STATE.completedLessons.length >= 1,
  };

  const newBadges = [];
  Object.entries(badgeConditions).forEach(([id, condition]) => {
    if (condition && !STATE.earnedBadges.includes(id)) {
      STATE.earnedBadges.push(id);
      newBadges.push(id);
    }
  });

  if (newBadges.length) {
    newBadges.forEach(id => {
      const badge = DATA.badges.find(b => b.id === id);
      if (badge) setTimeout(() => showToast('success', '🏅 Badge débloqué !', `${badge.icon} ${badge.name}`), 500);
    });
    saveState();
  }
}
