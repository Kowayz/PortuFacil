import { STATE, saveState, addXP, updateStreak } from '../core/state.js';
import { getTTSSpeed, speakWithCallback } from '../utils/speech.js';
import { generateVocabQuestions, generateMatchQuestion, generateOrderQuestion, generateListenQuestion } from '../utils/quizGen.js';
import { DATA } from '../data/index.js';
import { normalize, getLevelTitle } from '../utils/text.js';
import { observeFadeIns } from '../utils/observers.js';
import { showToast } from '../components/toast.js';
import { triggerConfetti } from '../components/confetti.js';
import { checkBadges } from '../utils/badges.js';

let currentLessonId = null;
let currentLessonQuizIndex = 0;
let lessonQuizAnswered = 0;
let lessonQuizCorrect = 0;

const SCORE_THRESHOLD = 75;
const CHUNK_SIZE = 5;

const _quizPool  = {};         // lessonId → quiz augmenté (authored + generated)
const _warmupDone = new Set(); // leçons dont l'échauffement est fait/passé
const _warmupIdx  = {};        // lessonId → index question warmup courant

let _matchState  = null;  // { q, lessonId, selectedPt, matched: Set, wrongFlash: Set }
let _orderState  = null;  // { q, lessonId, remaining: [], chosen: [] }
let _quizCombo   = 0;     // réponses correctes consécutives
let _quickReview = false; // true = mode révision rapide (pas de sauvegarde score)

// Feature B — Quiz de vitesse
let _timerInterval = null;
let _speedMode = true; // activé par défaut sur les questions générées

// Feature A — Dictée active
let _currentListenPhrase = null;

// Feature F — Mode Immersion
let _immersionMode = false;

// Feature J — Mode Boss
let _bossMode = false;
let _bossHearts = 3;

// ── Pedagogical metadata (chapter + skill type per lesson) ────────────────────
const LESSON_META = {
  'a1-1a': { num: 1, skill: 'conversation', chapter: 1, duration: 4 },
  'a1-1b': { num: 2, skill: 'conversation', chapter: 1, duration: 3 },
  'a1-1c': { num: 3, skill: 'conversation', chapter: 1, duration: 4 },
  'a1-1d': { num: 4, skill: 'conversation', chapter: 1, duration: 5 },
  'a1-2a': { num: 5, skill: 'conversation', chapter: 1, duration: 4 },
  'a1-2b': { num: 6, skill: 'conversation', chapter: 1, duration: 5 },
  'a1-3a': { num: 7, skill: 'vocabulaire',  chapter: 2, duration: 3 },
  'a1-3b': { num: 8, skill: 'vocabulaire',  chapter: 2, duration: 3 },
  'a1-3c': { num: 9, skill: 'vocabulaire',  chapter: 2, duration: 4 },
  'a1-1': { num: 1, skill: 'conversation', chapter: 1, duration: 5 },
  'a1-2': { num: 2, skill: 'conversation', chapter: 1, duration: 5 },
  'a1-3': { num: 3, skill: 'vocabulaire',  chapter: 2, duration: 6 },
  'a1-4': { num: 4, skill: 'vocabulaire',  chapter: 2, duration: 6 },
  'a1-5': { num: 5, skill: 'vocabulaire',  chapter: 3, duration: 5 },
  'a1-6': { num: 6, skill: 'vocabulaire',  chapter: 3, duration: 6 },
  'a1-7': { num: 7, skill: 'grammaire',    chapter: 4, duration: 8 },
  'a1-8': { num: 8, skill: 'grammaire',    chapter: 4, duration: 6 },
  'a2-1': { num: 1, skill: 'vocabulaire',  chapter: 5, duration: 6 },
  'a2-2': { num: 2, skill: 'vocabulaire',  chapter: 5, duration: 6 },
  'a2-3': { num: 3, skill: 'vocabulaire',  chapter: 5, duration: 6 },
  'a2-4': { num: 4, skill: 'vocabulaire',  chapter: 6, duration: 7 },
  'a2-5': { num: 5, skill: 'vocabulaire',  chapter: 6, duration: 6 },
  'a2-6': { num: 6, skill: 'conversation', chapter: 7, duration: 6 },
  'a2-7': { num: 7, skill: 'grammaire',    chapter: 8, duration: 8 },
  'a2-8': { num: 8, skill: 'conversation', chapter: 7, duration: 6 },
  'a2-9': { num: 9, skill: 'conversation', chapter: 7, duration: 6 },
  'b1-1': { num: 1, skill: 'expression',   chapter: 9,  duration: 7 },
  'b1-2': { num: 2, skill: 'grammaire',    chapter: 10, duration: 8 },
  'b1-3': { num: 3, skill: 'grammaire',    chapter: 10, duration: 8 },
  'b1-4': { num: 4, skill: 'grammaire',    chapter: 11, duration: 8 },
  'b1-5': { num: 5, skill: 'expression',   chapter: 9,  duration: 8 },
  'b1-6': { num: 6, skill: 'grammaire',    chapter: 11, duration: 8 },
  'b1-7': { num: 7, skill: 'grammaire',    chapter: 10, duration: 7 },
  'b1-8': { num: 8, skill: 'grammaire',    chapter: 10, duration: 7 },
};

const CHAPTERS = {
  1:  { name: 'Premiers Pas',          icon: '🌱', desc: 'Se saluer et se présenter' },
  2:  { name: 'Nombres & Temps',       icon: '⏰', desc: 'Compter, jours et saisons' },
  3:  { name: 'Vocabulaire de Base',   icon: '🎨', desc: 'Couleurs et famille' },
  4:  { name: 'Grammaire Essentielle', icon: '📐', desc: 'SER/ESTAR, articles, genre' },
  5:  { name: 'Vie Quotidienne',       icon: '☀️', desc: 'Nourriture, transports, météo' },
  6:  { name: 'Corps & Intérieur',     icon: '🏠', desc: 'Santé et maison' },
  7:  { name: 'Sorties & Voyages',     icon: '🌍', desc: 'Restaurant, ville, pharmacie' },
  8:  { name: 'Passé & Récit',         icon: '📜', desc: 'Raconter au passé composé' },
  9:  { name: 'Opinions & Liens',      icon: '💬', desc: 'Exprimer ses idées, connecteurs' },
  10: { name: 'Temps & Modalité',      icon: '⌛', desc: 'Imparfait, futur, conditionnel' },
  11: { name: 'Grammaire Avancée',     icon: '🎓', desc: 'Pronoms et subjonctif' },
};

const SKILLS = {
  conversation: { label: 'Conversation', icon: '🗣️', bg: 'var(--blue-pale)',   color: 'var(--blue)' },
  vocabulaire:  { label: 'Vocabulaire',  icon: '📖', bg: 'var(--green-pale)',  color: 'var(--green)' },
  grammaire:    { label: 'Grammaire',    icon: '📐', bg: 'var(--ochre-pale)',  color: 'var(--ochre)' },
  expression:   { label: 'Expression',  icon: '✍️', bg: 'var(--red-pale)',    color: 'var(--red)' },
};

// ── Unlock rules ──────────────────────────────────────────────────────────────
const LEVEL_UNLOCK = {
  A1: () => true,
  A2: () => DATA.lessons.filter(l => l.level === 'A1' && !l.hidden && STATE.completedLessons.includes(l.id)).length >= 8,
  B1: () => DATA.lessons.filter(l => l.level === 'A2' && STATE.completedLessons.includes(l.id)).length >= 7,
  B2: () => DATA.lessons.filter(l => l.level === 'B1' && STATE.completedLessons.includes(l.id)).length >= 5,
};


// ── Trail display constants ────────────────────────────────────────────────────
const LEVEL_COLORS = {
  A1: 'linear-gradient(135deg, #3d7a52 0%, #5ca06e 100%)',
  A2: 'linear-gradient(135deg, #1a3a5c 0%, #2a5298 100%)',
  B1: 'linear-gradient(135deg, #a06808 0%, #c88a18 100%)',
  B2: 'linear-gradient(135deg, #8a2020 0%, #b84040 100%)',
};
const LEVEL_DESCS_TRAIL = {
  A1: 'Saluer, compter, se présenter',
  A2: 'Communiquer au quotidien',
  B1: 'Exprimer vos idées librement',
  B2: "Atteindre l'aisance naturelle",
};
const LEVEL_DECOS = { A1: '🌿', A2: '🌊', B1: '💬', B2: '🎓' };

// ── Main renderer ─────────────────────────────────────────────────────────────
export function renderLessons() {
  const container = document.getElementById('lessons-roadmap');
  if (!container) return;

  const nextLesson = findNextLesson();
  const allLessons = DATA.lessons.filter(l => !l.hidden);
  const doneCount = allLessons.filter(l => STATE.completedLessons.includes(l.id)).length;
  const totalXP = allLessons.filter(l => STATE.completedLessons.includes(l.id)).reduce((s, l) => s + (l.xp || 0), 0);
  const pct = allLessons.length ? Math.round(doneCount / allLessons.length * 100) : 0;

  let html = `
    <div class="trail-header fade-in">
      <div class="trail-header-stat">
        <span class="ths-num">${doneCount}</span>
        <span class="ths-lbl">leçons</span>
      </div>
      <div class="trail-header-bar">
        <div class="thb-label">${pct}% complété</div>
        <div class="thb-track"><div class="thb-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="trail-header-stat trail-header-stat-r">
        <span class="ths-num">${totalXP}</span>
        <span class="ths-lbl">XP gagné</span>
      </div>
    </div>
  `;
  if (nextLesson) html += renderNextHero(nextLesson);
  html += ['A1', 'A2', 'B1', 'B2'].map(lvl => renderTrailLevel(lvl, nextLesson)).join('');

  container.innerHTML = html;
  observeFadeIns();
}

function findNextLesson() {
  for (const lvl of ['A1', 'A2', 'B1', 'B2']) {
    if (!LEVEL_UNLOCK[lvl]()) continue;
    const next = DATA.lessons.filter(l => l.level === lvl && !l.hidden).find(l => !STATE.completedLessons.includes(l.id));
    if (next) return next;
  }
  return null;
}

function renderNextHero(lesson) {
  const meta = LESSON_META[lesson.id] || {};
  const skill = SKILLS[meta.skill] || SKILLS.vocabulaire;
  const score = STATE.lessonScores?.[lesson.id];
  const isResume = score !== undefined;
  const bg = LEVEL_COLORS[lesson.level] || LEVEL_COLORS.A1;

  return `
    <div class="trail-hero fade-in" onclick="openLesson('${lesson.id}')" data-level="${lesson.level}">
      <div class="th-bg" style="background:${bg}"><div class="th-dots"></div></div>
      <div class="th-content">
        <div class="th-eyebrow">${isResume ? '↩ Reprendre' : '✨ Prochaine leçon'}</div>
        <div class="th-main">
          <div class="th-icon-wrap"><span class="th-icon">${lesson.icon}</span></div>
          <div class="th-text">
            <div class="th-title">${lesson.title}</div>
            <div class="th-sub">${lesson.description}</div>
            <div class="th-chips">
              <span class="th-chip th-chip-level">${lesson.level}</span>
              <span class="th-chip" style="background:${skill.bg};color:${skill.color}">${skill.icon} ${skill.label}</span>
              <span class="th-chip th-chip-xp">⭐ ${lesson.xp} XP</span>
              ${meta.duration ? `<span class="th-chip th-chip-time">⏱ ~${meta.duration} min</span>` : ''}
            </div>
          </div>
        </div>
        <button class="th-cta">${isResume ? 'Reprendre' : 'Commencer'} <span class="th-cta-arrow">→</span></button>
      </div>
      ${isResume ? `<div class="th-resume-bar"><div class="th-resume-fill" style="width:${score}%"></div></div>` : ''}
    </div>
  `;
}

function renderBossNode(lvl, done) {
  return `
    <div class="trail-boss-node ${done ? 'boss-done' : ''} fade-in"
         onclick="${done ? '' : `openBoss('${lvl}')`}">
      <div class="boss-node-icon">${done ? '🏆' : '⚔️'}</div>
      <div class="boss-node-content">
        <div class="boss-node-label">${done ? 'Boss vaincu !' : `⚔️ Boss ${lvl}`}</div>
        <div class="boss-node-sub">${done ? '🐉 +100 XP · Badge débloqué' : '3 cœurs · 15 questions · +100 XP'}</div>
      </div>
      ${!done ? '<button class="boss-node-cta">Affronter →</button>' : ''}
    </div>
  `;
}

export function openBoss(lvl) {
  const bossId = `boss-${lvl}`;
  if ((STATE.completedBosses || []).includes(bossId)) return;

  const levelLessons = DATA.lessons.filter(l => l.level === lvl && !l.hidden);
  const allVocab = levelLessons.flatMap(l => l.sections.flatMap(s => s.vocabulary || []));
  const allMCQ   = levelLessons.flatMap(l => (l.quiz || []).filter(q => q.type === 'mcq'));
  const generated = generateVocabQuestions(allVocab, 10);
  const pool = [...allMCQ.slice(0, 5), ...generated].slice(0, 15);
  if (!pool.length) return;

  _bossMode = true;
  _bossHearts = 3;
  currentLessonId = bossId;
  currentLessonQuizIndex = 0;
  lessonQuizAnswered = 0;
  lessonQuizCorrect = 0;
  _quizCombo = 0;
  _quickReview = false;

  document.getElementById('lessons-roadmap').style.display = 'none';
  document.getElementById('lesson-detail').classList.add('active');

  const detail = document.getElementById('lesson-detail');
  detail.innerHTML = `
    <div class="container">
      <button class="lesson-back-btn" onclick="closeLesson()">← Retour aux leçons</button>
      <div class="lesson-header-card boss-header" style="background:linear-gradient(135deg,#4a0080,#8b00c8)" data-level="${lvl}">
        <span class="lesson-header-icon">⚔️</span>
        <h1>Boss ${lvl}</h1>
        <p class="sub">Le dernier défi du niveau ${lvl}</p>
        <div class="lesson-header-meta">
          <span class="lesson-meta-badge">🐉 Boss Final</span>
          <span class="lesson-meta-badge">⭐ 100 XP</span>
          <span class="lesson-meta-badge">📝 15 questions</span>
        </div>
      </div>
      <div id="lesson-steps-container">
        <div class="lesson-quiz" id="lesson-quiz-section">
          <div class="quiz-header-row">
            <h3 class="quiz-title">⚔️ Mode Boss</h3>
            <div class="boss-hearts" id="boss-hearts">💗💗💗</div>
            <div class="combo-badge" id="lesson-combo-badge"></div>
          </div>
          <div class="quiz-internal-progress">
            <div class="quiz-internal-fill" id="lesson-quiz-fill" style="width:0%"></div>
          </div>
          <div id="lesson-quiz-body"></div>
        </div>
      </div>
    </div>
  `;

  const virtualLesson = { id: bossId, title: `Boss ${lvl}`, titlePT: `Boss ${lvl}`, icon: '⚔️', level: lvl, xp: 100, sections: [], quiz: pool };
  _quizPool[bossId] = pool;
  renderCurrentLessonQuestion(virtualLesson);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCheckpointNode(cpId, done, ready, lvl) {
  if (!ready && !done) return '';
  return `
    <div class="trail-checkpoint-node ${done ? 'cp-done' : 'cp-ready'} fade-in"
         onclick="openCheckpoint('${cpId}', '${lvl}')">
      <div class="cp-icon">${done ? '🏆' : '📋'}</div>
      <div class="cp-content">
        <div class="cp-label">${done ? 'Révision complétée !' : 'Quiz de révision'}</div>
        <div class="cp-sub">${done ? '✅ +50 XP obtenus' : '10 questions · +50 XP · 4 leçons'}</div>
      </div>
      ${!done ? '<button class="cp-cta">Commencer →</button>' : ''}
    </div>
  `;
}

export function openCheckpoint(cpId, lvl) {
  if (STATE.completedCheckpoints?.includes(cpId)) return;

  // Collect vocab + quiz from the preceding lessons of this level
  const levelLessons = DATA.lessons
    .filter(l => l.level === lvl && !l.hidden && STATE.completedLessons.includes(l.id))
    .sort((a, b) => (LESSON_META[a.id]?.num || 0) - (LESSON_META[b.id]?.num || 0));

  const allVocab = levelLessons.flatMap(l => l.sections.flatMap(s => s.vocabulary || []));
  const allMCQ   = levelLessons.flatMap(l => (l.quiz || []).filter(q => q.type === 'mcq'));

  const generated = generateVocabQuestions(allVocab, 8);
  const sample    = allMCQ.slice(0, 4);
  const pool      = [...sample, ...generated].slice(0, 10);
  if (!pool.length) return;

  // Reuse lesson quiz UI with a virtual lesson object
  const virtualLesson = {
    id: cpId,
    title: 'Quiz de révision',
    titlePT: `Revisão ${lvl}`,
    icon: '📋',
    level: lvl,
    xp: 50,
    sections: [],
    quiz: pool,
  };

  currentLessonId = cpId;
  currentLessonQuizIndex = 0;
  lessonQuizAnswered = 0;
  lessonQuizCorrect = 0;
  _quizCombo = 0;
  _quickReview = false;

  document.getElementById('lessons-roadmap').style.display = 'none';
  document.getElementById('lesson-detail').classList.add('active');

  const bg = LEVEL_COLORS[lvl] || LEVEL_COLORS.A1;
  const detail = document.getElementById('lesson-detail');
  detail.innerHTML = `
    <div class="container">
      <button class="lesson-back-btn" onclick="closeLesson()">← Retour aux leçons</button>
      <div class="lesson-header-card" style="background:${bg}" data-level="${lvl}">
        <span class="lesson-header-icon">📋</span>
        <h1>Quiz de révision ${lvl}</h1>
        <p class="sub">Révisão ${lvl}</p>
        <div class="lesson-header-meta">
          <span class="lesson-meta-badge">🎯 Niveau ${lvl}</span>
          <span class="lesson-meta-badge">⭐ 50 XP</span>
          <span class="lesson-meta-badge">📝 ${pool.length} questions</span>
        </div>
      </div>
      <div id="lesson-steps-container">
        <div class="lesson-quiz" id="lesson-quiz-section">
          <div class="quiz-header-row">
            <h3 class="quiz-title">🏆 Révision ${lvl}</h3>
            <div class="combo-badge" id="lesson-combo-badge"></div>
          </div>
          <div class="quiz-internal-progress">
            <div class="quiz-internal-fill" id="lesson-quiz-fill" style="width:0%"></div>
          </div>
          <div id="lesson-quiz-body"></div>
        </div>
      </div>
    </div>
  `;

  _quizPool[cpId] = pool;
  renderCurrentLessonQuestion(virtualLesson);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function openQuickReview(lessonId) {
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  _quickReview = true;
  const vocabItems = lesson.sections.flatMap(s => s.vocabulary || []);
  _quizPool[lessonId] = generateVocabQuestions(vocabItems, 5);
  openLesson(lessonId);
  // After openLesson renders, advance past content steps directly to quiz
  const steps = _getLessonSteps(lesson);
  _lessonStep[lessonId] = steps.length; // jump to quiz step
  const container = document.getElementById('lesson-steps-container');
  if (container) container.innerHTML = '';
  _appendLessonStep(lesson);
}

function renderTrailLevel(lvl, nextLesson) {
  const lessons = DATA.lessons.filter(l => l.level === lvl && !l.hidden);
  const unlocked = LEVEL_UNLOCK[lvl]?.() ?? false;

  if (!unlocked && lvl !== 'A1') return renderLockedTrailLevel(lvl, lessons.length);

  const completedCount = lessons.filter(l => STATE.completedLessons.includes(l.id)).length;
  const pct = lessons.length ? Math.round(completedCount / lessons.length * 100) : 0;

  const chapterMap = new Map();
  lessons.forEach(l => {
    const ch = LESSON_META[l.id]?.chapter ?? 0;
    if (!chapterMap.has(ch)) chapterMap.set(ch, []);
    chapterMap.get(ch).push(l);
  });

  // Build checkpoint nodes every 4 lessons within this level
  const sortedLessons = [...lessons].sort((a, b) => (LESSON_META[a.id]?.num || 0) - (LESSON_META[b.id]?.num || 0));
  const checkpointBlocks = [];
  let cpAccum = 0;
  for (let ci = 0; ci < sortedLessons.length; ci++) {
    cpAccum++;
    if (cpAccum === 4 && ci < sortedLessons.length - 1) {
      const cpId = `cp-${lvl}-${ci + 1}`;
      const cpDone = STATE.completedCheckpoints?.includes(cpId);
      const cpReady = sortedLessons.slice(0, ci + 1).every(l => STATE.completedLessons.includes(l.id));
      checkpointBlocks.push({ afterLesson: sortedLessons[ci].id, cpId, cpDone, cpReady });
      cpAccum = 0;
    }
  }

  const chapters = [...chapterMap.entries()].sort(([a],[b]) => a-b);

  // Collect all lesson IDs in order for interleaving checkpoints
  const chaptersHtml = chapters.map(([chNum, chLessons]) => {
    const ch = CHAPTERS[chNum] || { name: 'Général', icon: '📚', desc: '' };
    const chDone = chLessons.every(l => STATE.completedLessons.includes(l.id));
    const skillKey = LESSON_META[chLessons[0]?.id]?.skill || 'vocabulaire';
    const skill = SKILLS[skillKey] || SKILLS.vocabulaire;
    const nodesHtml = chLessons.map((lesson, i) => renderTrailNode(lesson, nextLesson, i)).join('');
    const cpAfter = checkpointBlocks.find(cp => cp.afterLesson === chLessons[chLessons.length - 1]?.id);
    const cpHtml = cpAfter ? renderCheckpointNode(cpAfter.cpId, cpAfter.cpDone, cpAfter.cpReady, lvl) : '';
    return `
      <div class="trail-chapter">
        <div class="trail-ch-hdr ${chDone ? 'tch-done' : ''}" style="--tch-accent:${skill.color}">
          <span class="tch-icon">${chDone ? '🏆' : ch.icon}</span>
          <div class="tch-text">
            <span class="tch-name">${ch.name}</span>
            <span class="tch-desc">${ch.desc}</span>
          </div>
          <span class="tch-skill" style="background:${skill.bg};color:${skill.color}">${skill.icon} ${skill.label}</span>
        </div>
        <div class="trail-nodes">${nodesHtml}</div>
      </div>
      ${cpHtml}
    `;
  }).join('');

  // Boss node: visible when ALL checkpoints of this level are done
  const allCpsDone = checkpointBlocks.length > 0 &&
    checkpointBlocks.every(cp => STATE.completedCheckpoints?.includes(cp.cpId));
  const bossId = `boss-${lvl}`;
  const bossDone = (STATE.completedBosses || []).includes(bossId);
  const bossHtml = allCpsDone ? renderBossNode(lvl, bossDone) : '';

  return `
    <div class="trail-level fade-in" data-level="${lvl}">
      <div class="tl-banner" style="background:${LEVEL_COLORS[lvl]}">
        <span class="tl-banner-deco">${LEVEL_DECOS[lvl] || ''}</span>
        <div class="tl-banner-left">
          <span class="tl-lvl-badge">${lvl}</span>
          <div>
            <div class="tl-lvl-name">${getLevelTitle(lvl)}</div>
            <div class="tl-lvl-desc">${LEVEL_DESCS_TRAIL[lvl]}</div>
          </div>
        </div>
        <div class="tl-ring-block">
          <svg class="tl-ring-svg" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3"/>
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="white" stroke-width="3"
              stroke-dasharray="${pct} ${100 - pct}" stroke-dashoffset="25" stroke-linecap="round"/>
          </svg>
          <div class="tl-ring-text">
            <span class="tl-ring-pct">${pct}%</span>
            <span class="tl-ring-sub">${completedCount}/${lessons.length}</span>
          </div>
        </div>
      </div>
      ${chaptersHtml}
      ${bossHtml}
    </div>
  `;
}

function renderLockedTrailLevel(lvl, totalCount) {
  const fromLvl = { A2: 'A1', B1: 'A2', B2: 'B1' }[lvl] || 'A1';
  const needed  = { A2: 8, B1: 7, B2: 5 }[lvl] || 5;
  const current = DATA.lessons.filter(l => l.level === fromLvl && !l.hidden && STATE.completedLessons.includes(l.id)).length;
  const lockPct = Math.min(100, Math.round(current / needed * 100));

  return `
    <div class="trail-level trail-level-locked fade-in" data-level="${lvl}">
      <div class="tl-banner tl-banner-locked" style="background:${LEVEL_COLORS[lvl]}">
        <span class="tl-banner-deco">${LEVEL_DECOS[lvl] || ''}</span>
        <div class="tl-banner-left">
          <span class="tl-lvl-badge tl-lvl-badge-dim">${lvl}</span>
          <div>
            <div class="tl-lvl-name">${getLevelTitle(lvl)}</div>
            <div class="tl-lvl-desc">${LEVEL_DESCS_TRAIL[lvl]}</div>
          </div>
        </div>
        <span class="tl-lock-ico">🔒</span>
      </div>
      <div class="tl-lock-body">
        <div class="tl-lock-hint">📚 Complétez <strong>${needed}</strong> leçons ${fromLvl} pour débloquer</div>
        <div class="tl-lock-progress">
          <div class="tl-lock-bar"><div class="tl-lock-fill" style="width:${lockPct}%"></div></div>
          <span class="tl-lock-count">${current}/${needed}</span>
        </div>
        <div class="tl-ghost-row">
          ${Array.from({length: Math.min(6, totalCount)}, () => `<div class="tl-ghost-node">?</div>`).join('')}
          ${totalCount > 6 ? `<div class="tl-ghost-node">+${totalCount - 6}</div>` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderTrailNode(lesson, nextLesson, index) {
  const completed  = STATE.completedLessons.includes(lesson.id);
  const score      = STATE.lessonScores?.[lesson.id];
  const stars      = STATE.lessonStars?.[lesson.id] || 0;
  const inProgress = score !== undefined && !completed;
  const isNext     = nextLesson?.id === lesson.id;

  let stateClass = 'tn-idle';
  if (completed)       stateClass = `tn-done${stars === 3 ? ' tn-perfect' : ''}`;
  else if (inProgress) stateClass = 'tn-partial';
  else if (isNext)     stateClass = 'tn-next';

  const scoreColor = !score ? 'var(--ochre)' : score >= 80 ? 'var(--green)' : score >= 60 ? 'var(--ochre)' : 'var(--red)';

  let badge = '';
  if (completed) {
    const starLabel = stars === 3 ? '★★★' : stars === 2 ? '★★' : '★';
    badge = `<div class="tn-badge tn-stars-${stars || 1}">${starLabel}</div>`;
  } else if (isNext) {
    badge = `<div class="tn-badge tn-badge-next">▶</div>`;
  } else if (inProgress) {
    badge = `<div class="tn-badge tn-badge-partial" style="background:${scoreColor}">${score}%</div>`;
  }

  const cols = ['tn-col-a', 'tn-col-b', 'tn-col-c', 'tn-col-b'];
  const colClass = cols[index % 4];

  return `
    <div class="trail-node ${stateClass} ${colClass} fade-in" onclick="openLesson('${lesson.id}')">
      ${isNext ? '<div class="tn-pulse-ring"></div>' : ''}
      <div class="tn-circle">
        <span class="tn-emoji">${lesson.icon}</span>
        ${badge}
      </div>
      <div class="tn-info">
        <div class="tn-label">${lesson.title}</div>
        <div class="tn-meta">⭐ ${lesson.xp} XP</div>
        ${isNext ? '<div class="tn-next-flag">À toi !</div>' : ''}
        ${completed ? `<button class="tn-review-btn" onclick="event.stopPropagation();openQuickReview('${lesson.id}')">🔄 Réviser</button>` : ''}
      </div>
    </div>
  `;
}

// ── Lesson detail ─────────────────────────────────────────────────────────────
export function openLesson(id) {
  const lesson = DATA.lessons.find(l => l.id === id);
  if (!lesson) return;
  currentLessonId = id;
  currentLessonQuizIndex = 0;
  lessonQuizAnswered = 0;
  lessonQuizCorrect = 0;

  document.getElementById('lessons-roadmap').style.display = 'none';
  document.getElementById('lesson-detail').classList.add('active');

  renderLessonDetail(lesson);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateStreak();
}

export function closeLesson() {
  _quickReview = false;
  _bossMode = false;
  _stopTimer();
  document.getElementById('lessons-roadmap').style.display = 'block';
  document.getElementById('lesson-detail').classList.remove('active');
}

const _lessonStep = {};

function _getLessonSteps(lesson) {
  const steps = [];
  lesson.sections.forEach((section, sectionIndex) => {
    const isVocab = !section.type && section.vocabulary?.length > CHUNK_SIZE;
    if (isVocab) {
      const total = Math.ceil(section.vocabulary.length / CHUNK_SIZE);
      for (let i = 0; i < section.vocabulary.length; i += CHUNK_SIZE) {
        const n = Math.floor(i / CHUNK_SIZE) + 1;
        steps.push({
          type: 'vocab-chunk',
          title: section.title,
          content: section.content,
          vocabulary: section.vocabulary.slice(i, i + CHUNK_SIZE),
          sectionIndex,
          chunkLabel: total > 1 ? `${n}/${total}` : null,
        });
      }
    } else {
      steps.push({ ...section, sectionIndex });
    }
  });
  if (lesson.phrases?.length) steps.push({ type: 'phrases', phrases: lesson.phrases });
  return steps;
}

function _appendLessonStep(lesson) {
  const steps = _getLessonSteps(lesson);
  const step = _lessonStep[lesson.id] ?? 0;
  const hasQuiz = lesson.quiz?.length > 0;
  const totalSteps = steps.length + (hasQuiz ? 1 : 0);
  const container = document.getElementById('lesson-steps-container');
  if (!container) return;

  const progEl = document.getElementById('lesson-progress-fill');
  const pctEl = document.getElementById('lesson-prog-pct');
  const pct = Math.round((step / totalSteps) * 100);
  if (progEl) progEl.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';

  if (step < steps.length) {
    const section = steps[step];
    const isLastContent = step === steps.length - 1;

    let ctaLabel;
    if (isLastContent && hasQuiz) ctaLabel = '📝 Passer au quiz';
    else if (isLastContent) ctaLabel = '🎉 Terminer la leçon';
    else ctaLabel = `Continuer <span class="step-num">${step + 2}<span class="step-total"> / ${totalSteps}</span></span>`;

    let sectionHtml;
    if (section.type === 'phrases') sectionHtml = renderPhrasebook(section.phrases);
    else sectionHtml = renderLessonSection(section, section.sectionIndex ?? step, lesson.id);

    const dotsHtml = Array.from({ length: totalSteps }, (_, i) =>
      `<div class="step-circle ${i < step ? 'sc-done' : i === step ? 'sc-active' : 'sc-idle'}">${i < step ? '✓' : i + 1}</div>`
    ).join('');

    const block = document.createElement('div');
    block.id = `lesson-step-${lesson.id}-${step}`;
    block.className = 'lesson-step-block';
    block.innerHTML = sectionHtml + `
      <div class="lesson-continue-row" id="lesson-continue-${lesson.id}-${step}">
        <div class="lesson-step-dots">${dotsHtml}</div>
        <button class="lesson-continue-btn" onclick="nextLessonSection('${lesson.id}')">
          ${ctaLabel} →
        </button>
      </div>
    `;
    block.style.cssText = 'opacity:0;transform:translateY(24px)';
    container.appendChild(block);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      block.style.cssText = 'transition:opacity 0.4s ease,transform 0.4s ease;opacity:1;transform:translateY(0)';
    }));
    setTimeout(() => block.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    observeFadeIns();

  } else if (hasQuiz) {
    const quizBlock = document.createElement('div');
    quizBlock.className = 'lesson-step-block';
    quizBlock.style.cssText = 'opacity:0;transform:translateY(24px)';
    quizBlock.innerHTML = renderLessonQuizContainer();
    container.appendChild(quizBlock);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      quizBlock.style.cssText = 'transition:opacity 0.4s ease,transform 0.4s ease;opacity:1;transform:translateY(0)';
    }));
    setTimeout(() => quizBlock.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    initLessonQuiz(lesson);

    const completed = STATE.completedLessons.includes(lesson.id);
    const completeBlock = document.createElement('div');
    completeBlock.innerHTML = `
      <div class="lesson-next-btn">
        <button class="btn-complete-lesson" onclick="completeLesson('${lesson.id}')">
          ${completed ? '✅ Déjà complétée — Réviser' : '🎉 Terminer la leçon → +' + lesson.xp + ' XP'}
        </button>
        ${!completed ? `<div class="lesson-score-hint">💡 Score minimum requis : ${SCORE_THRESHOLD}% au quiz</div>` : ''}
      </div>`;
    container.appendChild(completeBlock);

    if (progEl) progEl.style.width = '100%';
    if (pctEl) pctEl.textContent = '100%';

  } else {
    const completed = STATE.completedLessons.includes(lesson.id);
    const completeBlock = document.createElement('div');
    completeBlock.innerHTML = `
      <div class="lesson-next-btn">
        <button class="btn-complete-lesson" onclick="completeLesson('${lesson.id}')">
          ${completed ? '✅ Déjà complétée — Réviser' : '🎉 Terminer la leçon → +' + lesson.xp + ' XP'}
        </button>
      </div>`;
    container.appendChild(completeBlock);
    if (progEl) progEl.style.width = '100%';
    if (pctEl) pctEl.textContent = '100%';
  }
}

export function nextLessonSection(lessonId) {
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  const step = _lessonStep[lessonId] ?? 0;
  document.getElementById(`lesson-continue-${lessonId}-${step}`)?.remove();
  _lessonStep[lessonId] = step + 1;
  _appendLessonStep(lesson);
}

// ── Warmup (révision rapide de la leçon précédente) ───────────────────────────

function _renderWarmupQuestion(lessonId, idx) {
  const qs = _quizPool[`warmup-${lessonId}`];
  if (!qs || idx >= qs.length) return '';
  const q = qs[idx];
  return `
    <p class="warmup-question">${q.question}</p>
    <div class="warmup-options">
      ${q.options.map((opt, i) => `
        <button class="warmup-option" onclick="answerWarmup('${lessonId}', ${idx}, ${i}, ${q.correct})">${opt}</button>
      `).join('')}
    </div>
    <div id="warmup-feedback-${lessonId}" style="min-height:18px;margin-top:8px;font-size:0.8rem;font-weight:600"></div>
  `;
}

export function answerWarmup(lessonId, idx, chosen, correct) {
  const btns = document.querySelectorAll(`#warmup-card-${lessonId} .warmup-option`);
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('correct');
    else if (i === chosen) b.classList.add('wrong');
  });
  const fb = document.getElementById(`warmup-feedback-${lessonId}`);
  if (fb) fb.textContent = chosen === correct ? '✅ Correct !' : '❌ Incorrect';

  const qs = _quizPool[`warmup-${lessonId}`];
  setTimeout(() => {
    if (idx + 1 < qs.length) {
      const body = document.getElementById(`warmup-body-${lessonId}`);
      if (body) {
        _warmupIdx[lessonId] = idx + 1;
        body.innerHTML = _renderWarmupQuestion(lessonId, idx + 1);
      }
    } else {
      skipWarmup(lessonId);
    }
  }, 700);
}

export function skipWarmup(lessonId) {
  _warmupDone.add(lessonId);
  const card = document.getElementById(`warmup-card-${lessonId}`);
  if (card) {
    card.style.transition = 'opacity 0.3s';
    card.style.opacity = '0';
    setTimeout(() => card.remove(), 300);
  }
}

function _renderWarmupCard(lesson) {
  if (_warmupDone.has(lesson.id)) return;

  const lastId = [...STATE.completedLessons].reverse().find(id => id !== lesson.id);
  if (!lastId) return;

  const prevLesson = DATA.lessons.find(l => l.id === lastId);
  if (!prevLesson) return;

  const vocabItems = prevLesson.sections.flatMap(s => s.vocabulary || []);
  if (vocabItems.length < 2) return;

  const warmupQs = generateVocabQuestions(vocabItems, 3);
  if (!warmupQs.length) return;

  _quizPool[`warmup-${lesson.id}`] = warmupQs;
  _warmupIdx[lesson.id] = 0;

  const container = document.getElementById('lesson-warmup-container');
  if (!container) return;

  container.innerHTML = `
    <div class="warmup-card" id="warmup-card-${lesson.id}">
      <div class="warmup-header">
        <span class="warmup-icon">🔁</span>
        <div>
          <div class="warmup-title">Révision rapide</div>
          <div class="warmup-sub">3 questions sur « ${prevLesson.title} » avant de commencer</div>
        </div>
        <button class="warmup-skip" onclick="skipWarmup('${lesson.id}')">Passer →</button>
      </div>
      <div id="warmup-body-${lesson.id}">
        ${_renderWarmupQuestion(lesson.id, 0)}
      </div>
    </div>
  `;
}

// ── Lesson detail renderer ─────────────────────────────────────────────────────

function renderLessonDetail(lesson) {
  const detail    = document.getElementById('lesson-detail');
  const score  = STATE.lessonScores?.[lesson.id];
  const stars  = STATE.lessonStars?.[lesson.id] || 0;
  const meta   = LESSON_META[lesson.id] || {};
  const skill     = SKILLS[meta.skill] || SKILLS.vocabulaire;
  const steps     = _getLessonSteps(lesson);
  const hasQuiz   = lesson.quiz?.length > 0;
  const totalSteps = steps.length + (hasQuiz ? 1 : 0);
  const bg        = LEVEL_COLORS[lesson.level] || LEVEL_COLORS.A1;
  const azulejo   = `/azulejo-${lesson.level?.toLowerCase() || 'a1'}.svg`;
  const starLabel  = stars === 3 ? '★★★' : stars === 2 ? '★★' : stars === 1 ? '★' : '';

  detail.innerHTML = `
    <div class="container">
      <button class="lesson-back-btn" onclick="closeLesson()">← Retour aux leçons</button>

      <div class="lesson-header-card" style="background:${bg}" data-level="${lesson.level}">
        <span class="lesson-header-icon">${lesson.icon}</span>
        <h1>${lesson.title}</h1>
        <p class="sub">${lesson.titlePT}</p>
        <div class="lesson-header-meta">
          <span class="lesson-meta-badge">🎯 ${lesson.level}</span>
          <span class="lesson-meta-badge" style="background:${skill.bg};color:${skill.color}">${skill.icon} ${skill.label}</span>
          <span class="lesson-meta-badge">📚 ${totalSteps} étapes</span>
          <span class="lesson-meta-badge">⭐ ${lesson.xp} XP</span>
          ${starLabel ? `<span class="lesson-meta-badge lesson-meta-stars">${starLabel}</span>` : ''}
          ${score !== undefined ? `<span class="lesson-meta-badge" style="color:${score >= 75 ? 'var(--green)' : 'var(--red)'}">📊 ${score}%</span>` : ''}
          <div class="tts-speed-pill">
            <span class="tts-speed-label">🔊</span>
            <button class="tts-speed-btn ${getTTSSpeed() === 'normal' ? 'active' : ''}" data-speed="normal" onclick="setTTSSpeed('normal')">Normal</button>
            <button class="tts-speed-btn ${getTTSSpeed() === 'slow' ? 'active' : ''}" data-speed="slow" onclick="setTTSSpeed('slow')">🐢 Lent</button>
          </div>
          <button class="immersion-toggle-btn" id="immersion-toggle-btn" onclick="toggleImmersionMode()">🔭 Mode Immersion</button>
        </div>
      </div>

      <div class="lesson-progress">
        <div class="lesson-progress-header">
          <span>Progression de la leçon</span>
          <span id="lesson-prog-pct">0%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" id="lesson-progress-fill" style="width:0%"></div>
        </div>
      </div>

      <div id="lesson-warmup-container"></div>
      <div id="lesson-steps-container"></div>
    </div>
  `;

  _lessonStep[lesson.id] = 0;
  _renderWarmupCard(lesson);
  _appendLessonStep(lesson);
}

function renderLessonSection(section, index, lessonId) {
  if (section.type === 'vocab-chunk') {
    const suffix = section.chunkLabel ? ` <span class="section-chunk-label">${section.chunkLabel}</span>` : '';
    const isSERvESTAR = lessonId === 'a1-7' && section.sectionIndex === 2;
    return `
      <div class="lesson-section-card fade-in">
        <h2 class="lesson-section-title">${section.title}${suffix}</h2>
        <div class="lesson-section-text">💡 ${section.content}</div>
        ${isSERvESTAR ? renderSerEstarTable(section.vocabulary) : renderVocabGrid(section.vocabulary)}
      </div>
    `;
  }
  if (section.type === 'conversation') return renderConversationSection(section, index, lessonId);
  if (section.type === 'note') return `
    <div class="lesson-section-card lesson-note-card fade-in">
      <h2 class="lesson-section-title">📌 ${section.title}</h2>
      <div class="lesson-note-body">${section.content}</div>
    </div>
  `;
  const isSERvESTAR = lessonId === 'a1-7' && index === 2;
  return `
    <div class="lesson-section-card fade-in">
      <h2 class="lesson-section-title">${index + 1}. ${section.title}</h2>
      <div class="lesson-section-text">💡 ${section.content}</div>
      ${isSERvESTAR ? renderSerEstarTable(section.vocabulary) : renderVocabGrid(section.vocabulary)}
    </div>
  `;
}

// ── Progressive conversation state ────────────────────────────────────────────
const _convState = {};

function renderConversationSection(section, index, lessonId) {
  const speakersHtml = section.speakers.map(sp =>
    `<div class="conv-speaker-chip"><span class="conv-speaker-avatar">${sp.avatar}</span><span class="conv-speaker-name">${sp.name}</span></div>`
  ).join('');
  const blanksCount = section.lines.filter(l => l.blank).length;

  return `
    <div class="lesson-section-card conv-section fade-in" id="conv-section-${lessonId}-${index}">
      <h2 class="lesson-section-title">${section.title || 'Dialogue'}</h2>
      <div class="conv-setup">${section.setup}</div>
      <div class="conv-speakers-row">${speakersHtml}</div>
<div class="conv-progress-wrap">
        <div class="conv-progress-bar" id="conv-progress-${lessonId}-${index}" style="width:0%"></div>
      </div>
      <div class="conv-thread" id="conv-thread-${lessonId}-${index}"></div>
      <div class="conv-interaction" id="conv-interaction-${lessonId}-${index}"></div>
      <div class="conv-start-wrap" id="conv-start-${lessonId}-${index}">
        <button class="conv-start-btn" onclick="startConv('${lessonId}', ${index})">
          💬 Démarrer le dialogue
          <span class="conv-blanks-badge">${blanksCount} exercice${blanksCount > 1 ? 's' : ''}</span>
        </button>
      </div>
    </div>`;
}

window.markVocabStatus = function(btn, pt, status) {
  event.stopPropagation();
  const key = pt.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
  window.STATE = window.STATE || {};
  window.STATE.learnedWords = window.STATE.learnedWords || {};
  window.STATE.learnedWords[key] = { status: status, date: Date.now() };
  if (typeof saveState === 'function') saveState();
  
  const card = btn.closest('.vocab-item');
  if (!card) return;
  const badge = card.querySelector('.vocab-srs-badge');
  if (badge) {
    if (status === 'learned') {
       badge.className = 'vocab-srs-badge srs-learned';
       badge.textContent = '✅ Maîtrisé';
    } else {
       badge.className = 'vocab-srs-badge srs-review';
       badge.textContent = '🔄 À revoir';
    }
  }
  card.classList.remove('revealed');
  
  if (status === 'learned' && window.createConfetti) {
     const rect = card.getBoundingClientRect();
     createConfetti(rect.left + rect.width/2, rect.top + rect.height/2);
  }
};

function _speakableExample(sentence, targetWordStr = '') {
  const targets = targetWordStr.toLowerCase()
    .replace(/[()]/g, '')
    .split(/[\s/,-]+/)
    .filter(w => w.length > 2);

  return sentence.split(/(\s+)/).map(tok => {
    if (!tok.trim()) return tok;
    const cleanTok = tok.toLowerCase().replace(/[.,!?;:\"']/g, '');
    let isHighlight = targets.some(tgt => {
      if (cleanTok === tgt) return true;
      const stem = tgt.substring(0, Math.max(3, tgt.length - 2));
      return stem.length >= 3 && cleanTok.startsWith(stem);
    });
    return `<span class="vocab-example-word${isHighlight ? ' vocab-highlight' : ''}" onclick="event.stopPropagation();speakWord('${tok.replace(/['"]/g, '').trim()}')">${tok}</span>`;
  }).join('');
}

function _vocabSrsBadge(v) {
  const key = v.pt.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
  const srs = STATE.learnedWords?.[key];
  const err = STATE.errors?.[key];
  if (srs?.status === 'learned') return '<span class="vocab-srs-badge srs-learned">✅ Maîtrisé</span>';
  if (srs?.status === 'review')  return '<span class="vocab-srs-badge srs-review">🔄 À revoir</span>';
  if ((err?.count || 0) >= 2)   return '<span class="vocab-srs-badge srs-error">⚠️ Difficile</span>';
  return '<span class="vocab-srs-badge srs-new">🆕 Nouveau</span>';
}

function renderVocabGrid(vocab) {
  return `
    <div class="vocab-grid">
      ${vocab.map(v => `
        <div class="vocab-item" onclick="this.classList.toggle('revealed')">
          ${_vocabSrsBadge(v)}
          <div class="vocab-item-inner">
            <div class="vocab-front">
              <div class="vocab-front-top">
                <div class="vocab-pt">${v.pt}</div>
                <button onclick="event.stopPropagation();speakWord('${v.pt.replace(/'/g, "\\'")}')" title="Écouter" class="vocab-audio-btn">🔊</button>
              </div>
              <div class="vocab-reveal-chip">Voir la traduction <span class="vocab-reveal-arrow">▾</span></div>
            </div>
            <div class="vocab-back">
              <div class="vocab-back-inner">
                <div class="vocab-fr">${v.fr}</div>
                ${v.phonetic ? `<span class="vocab-phonetic">[${v.phonetic}]</span>` : ''}
                ${v.ptBR && v.ptBR !== v.pt ? `<div class="vocab-ptbr">🇧🇷 ${v.ptBR}</div>` : ''}
                ${v.example ? `
                  <div class="vocab-example-container">
                    <button onclick="event.stopPropagation();speakWord('${v.example.replace(/['"]/g, "\\'")}')" class="vocab-full-audio-btn" title="Écouter la phrase entière">▶️</button>
                    <div class="vocab-example-texts">
                      <div class="vocab-example">"${_speakableExample(v.example, v.pt)}"</div>
                      ${v.exampleFr ? `<div class="vocab-example-fr">${v.exampleFr}</div>` : ''}
                    </div>
                  </div>
                ` : ''}
                <div class="vocab-action-bar">
                  <button class="btn-srs-review" onclick="window.markVocabStatus(this, '${v.pt.replace(/'/g, "\\'")}', 'review')">🔄 À revoir</button>
                  <button class="btn-srs-known" onclick="window.markVocabStatus(this, '${v.pt.replace(/'/g, "\\'")}', 'learned')">✅ Je connais</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderSerEstarTable(vocab) {
  return `
    <div class="ser-estar-visual">
      <div class="ser-box">
        <h3>SER — Permanent</h3>
        <ul class="use-list">
          ${vocab.filter(v => v.pt.startsWith('SER')).map(v =>
            `<li><strong>${v.fr.replace(/\(.*?\)/g, '').trim()}</strong> — <em>${v.example}</em></li>`
          ).join('')}
        </ul>
      </div>
      <div class="estar-box">
        <h3>ESTAR — Temporaire</h3>
        <ul class="use-list">
          ${vocab.filter(v => v.pt.startsWith('ESTAR')).map(v =>
            `<li><strong>${v.fr.replace(/\(.*?\)/g, '').trim()}</strong> — <em>${v.example}</em></li>`
          ).join('')}
        </ul>
      </div>
    </div>
  `;
}

function renderPhrasebook(phrases) {
  return `
    <div class="lesson-section-card fade-in">
      <h2 class="lesson-section-title">💬 Phrases-clés</h2>
      <div style="display:flex;flex-direction:column;gap:14px;margin-top:8px">
        ${phrases.map((p, i) => `
          <div style="display:flex;flex-direction:column;gap:4px;align-items:${i % 2 === 0 ? 'flex-start' : 'flex-end'}">
            <div style="max-width:85%;background:${i % 2 === 0 ? 'var(--blue)' : 'var(--green)'};color:white;padding:12px 18px;border-radius:${i % 2 === 0 ? '4px 18px 18px 18px' : '18px 4px 18px 18px'};font-size:0.95rem;position:relative">
              <strong>${p.pt}</strong>
              <button onclick="speakWord('${p.pt.replace(/'/g, "\\'")}')" style="background:rgba(255,255,255,0.2);border:none;border-radius:12px;padding:2px 8px;font-size:0.75rem;cursor:pointer;color:white;margin-left:8px">🔊</button>
            </div>
            <div style="font-size:0.82rem;color:var(--text-light);padding:0 4px;font-style:italic">${p.fr}${p.context ? ' — ' + p.context : ''}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderLessonQuizContainer() {
  return `
    <div class="lesson-quiz" id="lesson-quiz-section">
      <div class="quiz-header-row">
        <h3 class="quiz-title">🧠 Mini-Quiz</h3>
        <div class="combo-badge" id="lesson-combo-badge"></div>
      </div>
      <div class="quiz-internal-progress">
        <div class="quiz-internal-fill" id="lesson-quiz-fill" style="width:0%"></div>
      </div>
      <div id="lesson-quiz-body"></div>
    </div>
  `;
}

// ── Quiz logic (unchanged) ────────────────────────────────────────────────────
function initLessonQuiz(lesson) {
  if (!lesson.quiz || !lesson.quiz.length) return;
  _quizCombo = 0;
  const vocabItems = lesson.sections.flatMap(s => s.vocabulary || []);
  const generated  = generateVocabQuestions(vocabItems, 7);
  const matchQ     = generateMatchQuestion(vocabItems);
  const orderQ     = generateOrderQuestion(vocabItems);
  const listenQ    = generateListenQuestion(vocabItems);
  _quizPool[lesson.id] = [
    ...lesson.quiz,
    ...generated,
    ...(matchQ   ? [matchQ]   : []),
    ...(orderQ   ? [orderQ]   : []),
    ...(listenQ  ? [listenQ]  : []),
  ];
  renderCurrentLessonQuestion(lesson);
}

function renderCurrentLessonQuestion(lesson) {
  const quizBody = document.getElementById('lesson-quiz-body');
  if (!quizBody) return;

  const quiz = _quizPool[lesson.id] || lesson.quiz;

  // ── Update internal quiz progress bar ────────────────────────────────────
  const internalFill = document.getElementById('lesson-quiz-fill');
  if (internalFill) {
    const qPct = Math.round((Math.min(currentLessonQuizIndex, quiz.length) / quiz.length) * 100);
    internalFill.style.width = qPct + '%';
  }

  // ── Results screen ────────────────────────────────────────────────────────
  if (currentLessonQuizIndex >= quiz.length) {
    const pct   = Math.round((lessonQuizCorrect / quiz.length) * 100);
    const stars  = pct >= 95 ? 3 : pct >= 85 ? 2 : pct >= 75 ? 1 : 0;
    if (internalFill) internalFill.style.width = '100%';

    if (!_quickReview) {
      if (!STATE.lessonScores) STATE.lessonScores = {};
      STATE.lessonScores[lesson.id] = pct;

      if (stars > 0) {
        const prev = STATE.lessonStars?.[lesson.id] || 0;
        STATE.lessonStars[lesson.id] = Math.max(prev, stars);
        if (stars > prev && prev > 0) {
          addXP(10);
          showToast('success', '⭐ Record battu !', `+10 XP bonus pour avoir amélioré ton score !`);
        }
      }
      saveState();

      // Boss victory
      if (lesson.id.startsWith('boss-')) {
        _bossMode = false;
        const bossLvl = lesson.id.replace('boss-', '');
        if (!STATE.completedBosses) STATE.completedBosses = [];
        if (!STATE.completedBosses.includes(lesson.id)) {
          STATE.completedBosses.push(lesson.id);
          addXP(100);
          triggerConfetti();
          showToast('success', '🐉 Boss vaincu !', '+100 XP · Badge 🐉 débloqué !');
          checkBadges();
          saveState();
        }
        quizBody.innerHTML = `
          <div class="quiz-result-card boss-victory">
            <div style="font-size:2.5rem;margin-bottom:12px">🏆</div>
            <h4 class="result-msg" style="color:var(--green)">Boss vaincu !</h4>
            <p style="color:var(--text-mid);margin-bottom:8px">Niveau ${bossLvl} terminé — ${pct}% · +100 XP</p>
            <button class="btn-quiz-retry" onclick="closeLesson()">← Retour aux leçons</button>
          </div>
        `;
        return;
      }

      if (pct >= SCORE_THRESHOLD && !STATE.completedLessons.includes(lesson.id)) {
        STATE.completedLessons.push(lesson.id);
        if (lesson.id.startsWith('cp-') && !STATE.completedCheckpoints.includes(lesson.id)) {
          STATE.completedCheckpoints.push(lesson.id);
        }
        addXP(lesson.xp);
        triggerConfetti();
        checkBadges();
        saveState();
      }
    }

    const passed  = pct >= SCORE_THRESHOLD;
    const msg     = pct >= 90 ? 'Excelente! 🎉' : pct >= 75 ? 'Muito bem! 👏' : pct >= 50 ? 'Bom trabalho! 👍' : 'Continue a praticar! 📚';
    const starHtml = [1,2,3].map(n =>
      `<span class="result-star ${stars >= n ? 'earned' : ''}" style="--d:${(n-1)*0.18}s">★</span>`
    ).join('');

    quizBody.innerHTML = `
      <div class="quiz-result-card">
        <div class="result-stars">${starHtml}</div>
        <h4 class="result-msg" style="color:${passed ? 'var(--green)' : 'var(--red)'}">${msg}</h4>
        <p class="result-score">Score : <strong>${lessonQuizCorrect}/${quiz.length}</strong> (${pct}%)</p>
        ${passed && !_quickReview
          ? `<p class="result-xp">+${lesson.xp} XP ✨</p>`
          : !passed
          ? `<p style="color:var(--red);font-size:0.85rem;margin-bottom:4px">⚠️ Score minimum requis : ${SCORE_THRESHOLD}%</p>`
          : ''}
        <button class="btn-quiz-retry" onclick="resetLessonQuiz('${lesson.id}')">🔄 Recommencer le quiz</button>
      </div>
    `;
    return;
  }

  const q     = quiz[currentLessonQuizIndex];
  const LETTERS = ['A', 'B', 'C', 'D'];

  if (q.type === 'mcq') {
    const showTimer = _speedMode && q._generated;
    quizBody.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-question-num">Question ${currentLessonQuizIndex + 1} / ${quiz.length}</div>
        ${showTimer ? `
        <div class="quiz-timer">
          <div class="quiz-timer-bar"><div class="quiz-timer-fill" id="quiz-timer-fill" style="width:100%"></div></div>
          <span class="quiz-timer-val" id="quiz-timer-val">15</span>
        </div>` : ''}
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option" onclick="answerLessonMCQ(${i}, ${q.correct}, '${lesson.id}', \`${(q.explanation || '').replace(/`/g, "'")}\`)">
              <span class="quiz-option-letter">${LETTERS[i] || i + 1}</span>
              <span class="quiz-option-text">${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="lesson-q-feedback"></div>
      </div>
      <div class="quiz-nav">
        <span class="quiz-counter">${currentLessonQuizIndex + 1} / ${quiz.length}</span>
        <button class="btn-next-q" id="lesson-next-btn" onclick="nextLessonQuestion('${lesson.id}')" style="display:none">Suivant →</button>
      </div>
    `;
    if (showTimer) _startQuizTimer(lesson.id, q.correct);

  } else if (q.type === 'translate' || q.type === 'fill') {
    quizBody.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-question-num">Question ${currentLessonQuizIndex + 1} / ${quiz.length}</div>
        <div class="quiz-question-text">${q.question}</div>
        <input type="text" class="quiz-translate-input" id="lesson-translate-input" placeholder="Votre réponse en portugais..." autocomplete="off" />
        <button class="btn-check-answer" onclick="checkLessonTranslate('${lesson.id}', \`${(q.answer || '').replace(/`/g, "'")}\`)">Vérifier ✓</button>
        <div class="quiz-feedback" id="lesson-q-feedback"></div>
      </div>
      <div class="quiz-nav">
        <span class="quiz-counter">${currentLessonQuizIndex + 1} / ${quiz.length}</span>
        <button class="btn-next-q" id="lesson-next-btn" onclick="nextLessonQuestion('${lesson.id}')" style="display:none">Suivant →</button>
      </div>
    `;
    const input = document.getElementById('lesson-translate-input');
    if (input) {
      input.focus();
      input.addEventListener('keydown', e => { if (e.key === 'Enter') checkLessonTranslate(lesson.id, q.answer); });
    }

  } else if (q.type === 'cloze') {
    const parts = (q.sentence || q.question).split('___');
    quizBody.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-question-num">Question ${currentLessonQuizIndex + 1} / ${quiz.length}</div>
        <div class="quiz-question-text">Complétez la phrase :</div>
        <div class="cloze-sentence">
          ${parts[0]}<input type="text" class="cloze-input" id="lesson-translate-input" placeholder="..." autocomplete="off" style="width:120px" />${parts[1] || ''}
        </div>
        ${q.hint ? `<div class="cloze-hint">💡 ${q.hint}</div>` : ''}
        <button class="btn-check-answer" onclick="checkLessonTranslate('${lesson.id}', \`${(q.answer || '').replace(/`/g, "'")}\`)">Vérifier ✓</button>
        <div class="quiz-feedback" id="lesson-q-feedback"></div>
      </div>
      <div class="quiz-nav">
        <span class="quiz-counter">${currentLessonQuizIndex + 1} / ${quiz.length}</span>
        <button class="btn-next-q" id="lesson-next-btn" onclick="nextLessonQuestion('${lesson.id}')" style="display:none">Suivant →</button>
      </div>
    `;
    const input = document.getElementById('lesson-translate-input');
    if (input) {
      input.focus();
      input.addEventListener('keydown', e => { if (e.key === 'Enter') checkLessonTranslate(lesson.id, q.answer); });
    }

  } else if (q.type === 'match') {
    _matchState = { q, lessonId: lesson.id, selectedPt: null, matched: new Set(), wrongFlash: new Set() };
    quizBody.innerHTML = renderMatchQuestion(q, lesson.id);

  } else if (q.type === 'order') {
    _orderState = { q, lessonId: lesson.id, remaining: [...q.shuffled], chosen: [] };
    quizBody.innerHTML = renderOrderQuestion(q, lesson.id);

  } else if (q.type === 'listen') {
    _currentListenPhrase = q.phrase;
    quizBody.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-question-num">Question ${currentLessonQuizIndex + 1} / ${quiz.length}</div>
        <div class="listen-prompt">🎧 Écoutez et écrivez ce que vous entendez :</div>
        <button class="listen-play-btn" onclick="playListenQuestion()">🔊 Écouter</button>
        <input id="lesson-translate-input" class="quiz-translate-input" placeholder="Écrivez en portugais..." autocomplete="off" />
        <div class="listen-hint-row">
          <button class="listen-hint-btn" onclick="toggleListenHint()">💡 Voir la traduction</button>
          <div class="listen-hint" id="listen-hint" style="display:none">${q.hint}</div>
        </div>
        <button class="btn-check-answer" onclick="checkLessonTranslate('${lesson.id}', \`${(q.answer || '').replace(/`/g, "'")}\`)">Vérifier ✓</button>
        <div class="quiz-feedback" id="lesson-q-feedback"></div>
      </div>
      <div class="quiz-nav">
        <span class="quiz-counter">${currentLessonQuizIndex + 1} / ${quiz.length}</span>
        <button class="btn-next-q" id="lesson-next-btn" onclick="nextLessonQuestion('${lesson.id}')" style="display:none">Suivant →</button>
      </div>
    `;
    const input = document.getElementById('lesson-translate-input');
    if (input) {
      input.focus();
      input.addEventListener('keydown', e => { if (e.key === 'Enter') checkLessonTranslate(lesson.id, q.answer); });
    }
    setTimeout(() => window.speakWord?.(q.phrase), 300);
  }
}

export function answerLessonMCQ(chosen, correct, lessonId, explanation) {
  _stopTimer();
  const opts = document.querySelectorAll('#lesson-quiz-body .quiz-option');
  opts.forEach((o, i) => {
    o.classList.add('disabled');
    if (i === correct) { o.classList.add('correct'); o.classList.add('quiz-anim-bounce'); }
    else if (i === chosen) { o.classList.add('wrong'); o.classList.add('quiz-anim-shake'); }
  });
  setTimeout(() => opts.forEach(o => { o.classList.remove('quiz-anim-bounce'); o.classList.remove('quiz-anim-shake'); }), 500);

  const isCorrect = chosen === correct;
  if (isCorrect) {
    lessonQuizCorrect++;
    _quizCombo++;
    if (_quizCombo === 3) {
      addXP(5);
      showToast('success', '🔥 Combo ×3 !', '+5 XP bonus !');
      _quizCombo = 0;
    }
  } else {
    _quizCombo = 0;
    if (_bossMode) {
      _bossHearts--;
      _updateBossHearts();
      if (_bossHearts <= 0) {
        setTimeout(() => _bossDefeat(lessonId), 700);
        lessonQuizAnswered++;
        return;
      }
    }
  }
  _updateComboBadge();

  const feedback = document.getElementById('lesson-q-feedback');
  feedback.className = `quiz-feedback show ${isCorrect ? 'success' : 'error'}`;
  feedback.innerHTML = `${isCorrect ? '✅ Correct !' : '❌ Pas tout à fait.'} ${explanation || ''}`;
  document.getElementById('lesson-next-btn').style.display = 'block';
  lessonQuizAnswered++;
}

function _updateComboBadge() {
  const badge = document.getElementById('lesson-combo-badge');
  if (!badge) return;
  if (_quizCombo >= 2) {
    badge.textContent = `🔥 ×${_quizCombo}`;
    badge.classList.add('show');
  } else {
    badge.textContent = '';
    badge.classList.remove('show');
  }
}

// Feature B — Timer
function _startQuizTimer(lessonId, correct) {
  _stopTimer();
  let remaining = 15;
  const update = () => {
    const fill = document.getElementById('quiz-timer-fill');
    const val  = document.getElementById('quiz-timer-val');
    if (fill) fill.style.width = `${(remaining / 15) * 100}%`;
    if (val)  val.textContent = remaining;
  };
  update();
  _timerInterval = setInterval(() => {
    remaining--;
    update();
    if (remaining <= 0) {
      _stopTimer();
      answerLessonMCQ(99, correct, lessonId, '');
    }
  }, 1000);
}

function _stopTimer() {
  if (_timerInterval) { clearInterval(_timerInterval); _timerInterval = null; }
}

// Feature A — Dictée
export function playListenQuestion() {
  if (_currentListenPhrase) window.speakWord?.(_currentListenPhrase);
}

export function toggleListenHint() {
  const hint = document.getElementById('listen-hint');
  if (hint) hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
}

// Feature F — Immersion mode
export function toggleImmersionMode() {
  _immersionMode = !_immersionMode;
  if (_immersionMode) STATE.immersionSessions = (STATE.immersionSessions || 0) + 1;
  // Update button label
  const btn = document.getElementById('immersion-toggle-btn');
  if (btn) btn.textContent = _immersionMode ? '🔭 Mode Immersion ON' : '🔭 Mode Immersion';
  // Re-render vocab grids if visible
  document.querySelectorAll('.vocab-fr, .vocab-ptbr').forEach(el => {
    el.style.visibility = _immersionMode ? 'hidden' : '';
  });
  saveState();
}

// Feature J — Boss helpers
function _updateBossHearts() {
  const el = document.getElementById('boss-hearts');
  if (!el) return;
  el.textContent = ['💗','💗','💗'].map((h, i) => i < _bossHearts ? h : '🖤').join('');
}

function _bossDefeat(lessonId) {
  const quizBody = document.getElementById('lesson-quiz-body');
  if (!quizBody) return;
  _bossMode = false;
  quizBody.innerHTML = `
    <div class="quiz-result-card boss-defeat">
      <div style="font-size:2.5rem;margin-bottom:12px">💀</div>
      <h4 class="result-msg" style="color:var(--red)">Défaite !</h4>
      <p style="color:var(--text-mid);margin-bottom:16px">Le Boss vous a vaincu. Réessayez !</p>
      <button class="btn-quiz-retry" onclick="openBoss('${lessonId.replace('boss-', '')}')">🗡️ Réessayer</button>
    </div>
  `;
}

// Feature D — Cultural facts
function _showCulturalFactAfterLesson() {
  const facts = DATA.culturalFacts;
  if (!facts?.length) return;
  const unseen = facts.filter((_, i) => !(STATE.seenCulturalFacts || []).includes(i));
  if (!unseen.length) return;
  const fact = unseen[Math.floor(Math.random() * unseen.length)];
  const idx  = facts.indexOf(fact);
  STATE.seenCulturalFacts = STATE.seenCulturalFacts || [];
  STATE.seenCulturalFacts.push(idx);
  STATE.culturalFactsSeen = (STATE.culturalFactsSeen || 0) + 1;
  saveState();
  checkBadges();

  const container = document.getElementById('lesson-steps-container');
  if (!container) return;
  const card = document.createElement('div');
  card.className = 'cultural-fact-lesson-card fade-in';
  card.innerHTML = `
    <div class="cfl-header">
      <span class="cfl-emoji">${fact.emoji || '🇵🇹'}</span>
      <div>
        <div class="cfl-title">${fact.title}</div>
        <div class="cfl-sub">🇵🇹 Le saviez-vous ?</div>
      </div>
    </div>
    <p class="cfl-text">${fact.text}</p>
  `;
  container.appendChild(card);
  setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 200);
}

export function checkLessonTranslate(_lessonId, answer) {
  const input = document.getElementById('lesson-translate-input');
  if (!input) return;
  const val = input.value.trim();
  const alternatives = (answer || '').split('/').map(a => normalize(a.trim()));
  const isCorrect = alternatives.some(alt => normalize(val) === alt || normalize(val).includes(alt));

  if (isCorrect) {
    lessonQuizCorrect++;
    _quizCombo++;
    if (_quizCombo === 3) {
      addXP(5);
      showToast('success', '🔥 Combo ×3 !', '+5 XP bonus !');
      _quizCombo = 0;
    }
  } else {
    _quizCombo = 0;
  }
  _updateComboBadge();

  input.style.borderColor = isCorrect ? 'var(--green)' : 'var(--red)';
  input.disabled = true;
  const feedback = document.getElementById('lesson-q-feedback');
  feedback.className = `quiz-feedback show ${isCorrect ? 'success' : 'error'}`;
  feedback.innerHTML = isCorrect ? '✅ Parfait !' : `❌ La bonne réponse est : <strong>${answer}</strong>`;
  const btn = document.querySelector('.btn-check-answer');
  if (btn) btn.disabled = true;
  document.getElementById('lesson-next-btn').style.display = 'block';
  lessonQuizAnswered++;
}

export function nextLessonQuestion(lessonId) {
  currentLessonQuizIndex++;
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  renderCurrentLessonQuestion(lesson);
}

export function resetLessonQuiz(lessonId) {
  currentLessonQuizIndex = 0;
  lessonQuizAnswered = 0;
  lessonQuizCorrect = 0;
  _quizCombo = 0;
  _matchState = null;
  _orderState = null;
  delete _quizPool[lessonId];
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  initLessonQuiz(lesson);
}

// ── Match question (associer paires PT↔FR) ────────────────────────────────────

function renderMatchQuestion(q, lessonId) {
  const ptHtml = q.ptWords.map((w, i) => `
    <button class="match-item match-pt" id="match-pt-${lessonId}-${i}"
      onclick="answerMatchPt(${i}, '${lessonId}')">${w}</button>
  `).join('');
  const frHtml = q.frWords.map((w, i) => `
    <button class="match-item match-fr" id="match-fr-${lessonId}-${i}"
      onclick="answerMatchFr(${i}, '${lessonId}')">${w}</button>
  `).join('');
  return `
    <div class="quiz-question">
      <div class="quiz-question-num">Question ${currentLessonQuizIndex + 1} / ${(_quizPool[lessonId] || []).length}</div>
      <div class="quiz-question-text">${q.question}</div>
      <div class="match-grid">
        <div class="match-col">${ptHtml}</div>
        <div class="match-col">${frHtml}</div>
      </div>
    </div>
  `;
}

export function answerMatchPt(ptIdx, lessonId) {
  if (!_matchState || _matchState.lessonId !== lessonId) return;
  if (_matchState.matched.has(`pt-${ptIdx}`)) return;
  const prev = _matchState.selectedPt;
  if (prev !== null) {
    document.getElementById(`match-pt-${lessonId}-${prev}`)?.classList.remove('match-selected');
  }
  if (prev === ptIdx) { _matchState.selectedPt = null; return; }
  _matchState.selectedPt = ptIdx;
  document.getElementById(`match-pt-${lessonId}-${ptIdx}`)?.classList.add('match-selected');
}

export function answerMatchFr(frIdx, lessonId) {
  if (!_matchState || _matchState.lessonId !== lessonId) return;
  if (_matchState.matched.has(`fr-${frIdx}`)) return;
  const ptIdx = _matchState.selectedPt;
  if (ptIdx === null) return;

  const ptEl = document.getElementById(`match-pt-${lessonId}-${ptIdx}`);
  const frEl = document.getElementById(`match-fr-${lessonId}-${frIdx}`);
  ptEl?.classList.remove('match-selected');

  const correct = _matchState.q.correct[ptIdx] === frIdx;
  if (correct) {
    ptEl?.classList.add('match-correct');
    frEl?.classList.add('match-correct');
    ptEl?.setAttribute('disabled', 'true');
    frEl?.setAttribute('disabled', 'true');
    _matchState.matched.add(`pt-${ptIdx}`);
    _matchState.matched.add(`fr-${frIdx}`);
    _matchState.selectedPt = null;
    if (_matchState.matched.size === _matchState.q.ptWords.length * 2) {
      lessonQuizCorrect++;
      lessonQuizAnswered++;
      const lesson = DATA.lessons.find(l => l.id === lessonId);
      setTimeout(() => { currentLessonQuizIndex++; renderCurrentLessonQuestion(lesson); }, 600);
    }
  } else {
    ptEl?.classList.add('match-wrong');
    frEl?.classList.add('match-wrong');
    _matchState.selectedPt = null;
    setTimeout(() => {
      ptEl?.classList.remove('match-wrong');
      frEl?.classList.remove('match-wrong');
    }, 500);
  }
}

// ── Order question (remettre les mots dans l'ordre) ───────────────────────────

function renderOrderQuestion(q, lessonId) {
  const state = _orderState;
  const sourceHtml = state.remaining.map((w, i) => `
    <button class="order-chip order-chip-source" id="order-src-${lessonId}-${i}"
      onclick="clickOrderWord(${i}, '${lessonId}')">${w}</button>
  `).join('');
  const chosenHtml = state.chosen.map(w => `
    <span class="order-chip order-chip-chosen">${w}</span>
  `).join('');
  const quizLen = (_quizPool[lessonId] || []).length;
  return `
    <div class="quiz-question" id="order-question-${lessonId}">
      <div class="quiz-question-num">Question ${currentLessonQuizIndex + 1} / ${quizLen}</div>
      <div class="quiz-question-text">${q.question}</div>
      <div class="order-hint">🇫🇷 ${q.hint}</div>
      <div class="order-answer-zone" id="order-answer-${lessonId}">
        ${state.chosen.length ? chosenHtml : '<span class="order-placeholder">Cliquez les mots dans l\'ordre...</span>'}
      </div>
      <div class="order-source-zone" id="order-source-${lessonId}">${sourceHtml}</div>
      <div class="order-actions">
        <button class="order-btn-remove" onclick="removeLastOrderWord('${lessonId}')">← Effacer</button>
        <button class="order-btn-check" onclick="checkOrderAnswer('${lessonId}')">✓ Vérifier</button>
      </div>
      <div class="quiz-feedback" id="lesson-q-feedback"></div>
    </div>
  `;
}

function _rerenderOrderZones(lessonId) {
  const state = _orderState;
  if (!state) return;
  const answerZone = document.getElementById(`order-answer-${lessonId}`);
  const sourceZone = document.getElementById(`order-source-${lessonId}`);
  if (answerZone) {
    answerZone.innerHTML = state.chosen.length
      ? state.chosen.map(w => `<span class="order-chip order-chip-chosen">${w}</span>`).join('')
      : '<span class="order-placeholder">Cliquez les mots dans l\'ordre...</span>';
  }
  if (sourceZone) {
    sourceZone.innerHTML = state.remaining.map((w, i) => `
      <button class="order-chip order-chip-source" id="order-src-${lessonId}-${i}"
        onclick="clickOrderWord(${i}, '${lessonId}')">${w}</button>
    `).join('');
  }
}

export function clickOrderWord(wordIdx, lessonId) {
  if (!_orderState || _orderState.lessonId !== lessonId) return;
  const word = _orderState.remaining[wordIdx];
  if (!word) return;
  _orderState.remaining.splice(wordIdx, 1);
  _orderState.chosen.push(word);
  _rerenderOrderZones(lessonId);
}

export function removeLastOrderWord(lessonId) {
  if (!_orderState || _orderState.lessonId !== lessonId) return;
  if (!_orderState.chosen.length) return;
  const word = _orderState.chosen.pop();
  _orderState.remaining.push(word);
  _rerenderOrderZones(lessonId);
}

export function checkOrderAnswer(lessonId) {
  if (!_orderState || _orderState.lessonId !== lessonId) return;
  const { q, chosen } = _orderState;
  if (!chosen.length) return;
  const isCorrect = chosen.join(' ') === q.sentence.join(' ');
  const feedback = document.getElementById('lesson-q-feedback');
  const answerZone = document.getElementById(`order-answer-${lessonId}`);

  if (isCorrect) {
    if (answerZone) answerZone.classList.add('order-correct');
    if (feedback) { feedback.className = 'quiz-feedback show success'; feedback.textContent = '✅ Parfait !'; }
    lessonQuizCorrect++;
    lessonQuizAnswered++;
    _quizCombo++;
    if (_quizCombo === 3) { addXP(5); showToast('success', '🔥 Combo ×3 !', '+5 XP bonus !'); _quizCombo = 0; }
    _updateComboBadge();
    const lesson = DATA.lessons.find(l => l.id === lessonId);
    setTimeout(() => { currentLessonQuizIndex++; renderCurrentLessonQuestion(lesson); }, 800);
  } else {
    _quizCombo = 0;
    _updateComboBadge();
    if (answerZone) {
      answerZone.classList.add('order-wrong');
      setTimeout(() => answerZone.classList.remove('order-wrong'), 500);
    }
    if (feedback) { feedback.className = 'quiz-feedback show error'; feedback.textContent = '❌ Pas tout à fait, réessayez !'; }
    // Reset chosen back to source for retry
    _orderState.remaining = [..._orderState.remaining, ..._orderState.chosen];
    _orderState.chosen = [];
    setTimeout(() => {
      _rerenderOrderZones(lessonId);
      if (feedback) feedback.className = 'quiz-feedback';
    }, 700);
  }
}

export function completeLesson(lessonId) {
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  updateStreak();

  const score = STATE.lessonScores?.[lessonId];

  if (!STATE.completedLessons.includes(lessonId)) {
    if (score === undefined || score < SCORE_THRESHOLD) {
      showToast('warning', '⚠️ Quiz requis', `Obtenez ${SCORE_THRESHOLD}% au mini-quiz pour valider la leçon !`);
      return;
    }
    STATE.completedLessons.push(lessonId);
    addXP(lesson.xp);
    showToast('success', '🎉 Leçon complétée !', `+${lesson.xp} XP gagnés !`);
    triggerConfetti();
    STATE.quizzesCompleted++;
    _showCulturalFactAfterLesson();
  } else {
    showToast('info', '📚 Révision complète !', 'Bonne révision !');
  }
  checkBadges();
  saveState();
  setTimeout(closeLesson, 1800);
}

// ── Progressive conversation engine ───────────────────────────────────────────

export function startConv(lessonId, sectionIndex) {
  const key = `${lessonId}:${sectionIndex}`;
  _convState[key] = { step: 0 };
  window.speechSynthesis?.cancel();

  const thread = document.getElementById(`conv-thread-${lessonId}-${sectionIndex}`);
  const interaction = document.getElementById(`conv-interaction-${lessonId}-${sectionIndex}`);
  if (thread) thread.innerHTML = '';
  if (interaction) interaction.innerHTML = '';

  const startWrap = document.getElementById(`conv-start-${lessonId}-${sectionIndex}`);
  if (startWrap) startWrap.style.display = 'none';

  _showConvLine(lessonId, sectionIndex);
}

function _showConvLine(lessonId, sectionIndex) {
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  const section = lesson.sections[sectionIndex];
  if (!section) return;
  const key = `${lessonId}:${sectionIndex}`;
  const state = _convState[key];
  if (!state) return;

  const { step } = state;
  const total = section.lines.length;
  const bar = document.getElementById(`conv-progress-${lessonId}-${sectionIndex}`);
  if (bar) bar.style.width = `${Math.round((step / total) * 100)}%`;

  if (step >= total) { _convComplete(lessonId, sectionIndex); return; }

  const line = section.lines[step];
  const isRight = line.speaker === 1;
  const sp = section.speakers[line.speaker];

  let ptHtml = line.pt;
  if (line.blank) {
    ptHtml = ptHtml.replace('___', `<span class="conv-blank" id="conv-blank-${lessonId}-${sectionIndex}-${step}">&nbsp;&nbsp;&nbsp;&nbsp;</span>`);
  } else if (line.hl && line.hl.length) {
    line.hl.forEach(h => {
      ptHtml = ptHtml.replace(h, `<span class="conv-hl">${h}</span>`);
    });
  }
  const frHtml = line.fr.replace('___', '<span class="conv-blank-fr">___</span>');

  const lineHtml = `
    <div class="conv-row conv-row-enter ${isRight ? 'conv-row-r' : 'conv-row-l'}" id="conv-line-${lessonId}-${sectionIndex}-${step}">
      ${!isRight ? `<div class="conv-avatar">${sp.avatar}</div>` : ''}
      <div class="conv-msg ${isRight ? 'conv-msg-r' : ''}">
        <div class="conv-name">${sp.name}</div>
        <div class="conv-bubble ${isRight ? 'conv-bubble-r' : 'conv-bubble-l'}"
             onclick="playSingleLine('${lessonId}', ${sectionIndex}, ${step})"
             title="🔊 Écouter">${ptHtml}</div>
        <div class="conv-trans">${frHtml}</div>
      </div>
      ${isRight ? `<div class="conv-avatar">${sp.avatar}</div>` : ''}
    </div>`;

  const thread = document.getElementById(`conv-thread-${lessonId}-${sectionIndex}`);
  if (thread) {
    thread.insertAdjacentHTML('beforeend', lineHtml);
    const lineEl = document.getElementById(`conv-line-${lessonId}-${sectionIndex}-${step}`);
    requestAnimationFrame(() => requestAnimationFrame(() => lineEl?.classList.add('conv-row-visible')));
    setTimeout(() => lineEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 150);
  }

  // Mark bubble as speaking while TTS plays
  const bubbleEl = document.querySelector(`#conv-line-${lessonId}-${sectionIndex}-${step} .conv-bubble`);
  if (bubbleEl) bubbleEl.classList.add('conv-bubble-speaking');
  const clearSpeaking = () => bubbleEl?.classList.remove('conv-bubble-speaking');

  const speakLine = (onDone) => {
    if (!window.speechSynthesis) { setTimeout(() => { clearSpeaking(); onDone(); }, line.blank ? 600 : 1200); return; }
    const text = line.pt.replace('___', line.blank || '…');
    speakWithCallback(text, () => { clearSpeaking(); onDone(); });
  };

  if (line.blank) {
    speakLine(() => setTimeout(() => _showConvChoices(lessonId, sectionIndex, step, line), 350));
  } else {
    speakLine(() => setTimeout(() => { state.step++; _showConvLine(lessonId, sectionIndex); }, 600));
  }
}

function _showConvChoices(lessonId, sectionIndex, lineIdx, line) {
  // Use per-line options, or fall back to conv-level options
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  const section = lesson?.sections[sectionIndex];
  const options = line.options || section?.options || [];
  const interaction = document.getElementById(`conv-interaction-${lessonId}-${sectionIndex}`);
  if (!interaction || !options.length) return;

  const key = `${lessonId}-${sectionIndex}-${lineIdx}`;
  interaction.innerHTML = `
    <div class="conv-choices conv-choices-enter">
      <div class="conv-choices-hint">Complétez la phrase :</div>
      ${options.map((opt, i) => `
        <button class="conv-choice" data-conv-key="${key}" data-answer="${opt}"
          onclick="answerConvLine('${opt.replace(/'/g, "\\'")}', '${lessonId}', ${sectionIndex}, ${lineIdx})">
          <span class="conv-choice-num">${i + 1}</span>${opt}
        </button>`).join('')}
    </div>`;

  requestAnimationFrame(() => requestAnimationFrame(() =>
    interaction.querySelector('.conv-choices')?.classList.add('conv-choices-visible')
  ));
}

export function answerConvLine(answer, lessonId, sectionIndex, lineIdx) {
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  const section = lesson.sections[sectionIndex];
  if (!section) return;
  const line = section.lines[lineIdx];
  if (!line) return;
  const key = `${lessonId}:${sectionIndex}`;
  const state = _convState[key];
  if (!state) return;

  const correct = answer === line.blank;

  // Fill blank
  const blankEl = document.getElementById(`conv-blank-${lessonId}-${sectionIndex}-${lineIdx}`);
  if (blankEl) {
    blankEl.style.animation = 'none';
    blankEl.textContent = answer;
    blankEl.classList.add(correct ? 'conv-blank-correct' : 'conv-blank-wrong');
    if (!correct) {
      setTimeout(() => {
        blankEl.style.transition = 'opacity 0.25s';
        blankEl.style.opacity = '0';
        setTimeout(() => {
          blankEl.textContent = line.blank;
          blankEl.classList.remove('conv-blank-wrong');
          blankEl.classList.add('conv-blank-correct');
          blankEl.style.opacity = '1';
        }, 250);
      }, 1200);
    }
  }

  // Style choices
  const convKey = `${lessonId}-${sectionIndex}-${lineIdx}`;
  document.querySelectorAll(`[data-conv-key="${convKey}"]`).forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === answer && correct)  btn.classList.add('conv-choice-correct');
    if (btn.dataset.answer === answer && !correct) btn.classList.add('conv-choice-wrong');
    if (btn.dataset.answer === line.blank && !correct) btn.classList.add('conv-choice-correct');
  });

  // Feedback
  if (correct) {
    triggerConfetti();
    showToast('success', '🎉 Correct !', '+10 XP');
    addXP(10);
  } else {
    showToast('error', '❌ Incorrect', `La bonne réponse : ${line.blank}`);
  }

  // Advance after delay
  setTimeout(() => {
    const interaction = document.getElementById(`conv-interaction-${lessonId}-${sectionIndex}`);
    if (interaction) interaction.innerHTML = '';
    state.step++;
    _showConvLine(lessonId, sectionIndex);
  }, correct ? 1300 : 2300);
}

function _convComplete(lessonId, sectionIndex) {
  const bar = document.getElementById(`conv-progress-${lessonId}-${sectionIndex}`);
  if (bar) bar.style.width = '100%';
  const interaction = document.getElementById(`conv-interaction-${lessonId}-${sectionIndex}`);
  if (interaction) {
    interaction.innerHTML = `
      <div class="conv-complete">
        <span class="conv-complete-icon">✅</span>
        <span>Dialogue terminé !</span>
        <button class="conv-replay-btn" onclick="startConv('${lessonId}', ${sectionIndex})">↺ Rejouer</button>
      </div>`;
  }
}

export function playSingleLine(lessonId, sectionIndex, lineIdx) {
  if (!window.speechSynthesis) return;
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  const section = lesson.sections[sectionIndex];
  if (!section || section.type !== 'conversation') return;
  const line = section.lines[lineIdx];
  if (!line) return;

  const text = line.pt.replace('___', line.blank || '…');
  const bubbles = document.querySelectorAll(`#conv-line-${lessonId}-${sectionIndex}-${lineIdx} .conv-bubble`);
  bubbles.forEach(b => b.classList.add('conv-bubble-playing'));
  speakWithCallback(text, () => bubbles.forEach(b => b.classList.remove('conv-bubble-playing')));
}

// ── Skill breakdown for progress page ─────────────────────────────────────────
export function getSkillBreakdown() {
  const skillTotals = { conversation: 0, vocabulaire: 0, grammaire: 0, expression: 0 };
  const skillDone   = { conversation: 0, vocabulaire: 0, grammaire: 0, expression: 0 };
  DATA.lessons.filter(l => !l.hidden).forEach(l => {
    const skill = LESSON_META[l.id]?.skill || 'vocabulaire';
    if (skill in skillTotals) {
      skillTotals[skill]++;
      if (STATE.completedLessons.includes(l.id)) skillDone[skill]++;
    }
  });
  return Object.entries(SKILLS).map(([key, meta]) => ({
    key, label: meta.label, icon: meta.icon, color: meta.color, bg: meta.bg,
    done: skillDone[key] || 0,
    total: skillTotals[key] || 0,
    pct: skillTotals[key] > 0 ? Math.round((skillDone[key] / skillTotals[key]) * 100) : 0,
  }));
}
