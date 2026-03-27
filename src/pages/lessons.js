import { STATE, saveState, addXP, updateStreak } from '../core/state.js';
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

const SCORE_THRESHOLD = 70;

// ── Pedagogical metadata (chapter + skill type per lesson) ────────────────────
const LESSON_META = {
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
  A2: () => DATA.lessons.filter(l => l.level === 'A1' && STATE.completedLessons.includes(l.id)).length >= 5,
  B1: () => DATA.lessons.filter(l => l.level === 'A2' && STATE.completedLessons.includes(l.id)).length >= 7,
  B2: () => DATA.lessons.filter(l => l.level === 'B1' && STATE.completedLessons.includes(l.id)).length >= 5,
};

// ── Main renderer ─────────────────────────────────────────────────────────────
export function renderLessons() {
  const container = document.getElementById('lessons-roadmap');
  if (!container) return;

  const nextLesson = findNextLesson();
  const levels = ['A1', 'A2', 'B1', 'B2'];
  const levelDescs = {
    A1: 'Les bases absolues — pour débuter avec confiance',
    A2: 'Vie quotidienne — pour communiquer au quotidien',
    B1: 'Conversations — pour exprimer vos idées',
    B2: "Maîtrise — pour atteindre l'aisance",
  };
  const levelUnlockHints = {
    A2: 'Complétez 5 leçons A1 (≥70%) pour débloquer',
    B1: 'Complétez 7 leçons A2 (≥70%) pour débloquer',
    B2: 'Complétez 5 leçons B1 (≥70%) pour débloquer',
  };

  let html = '';
  if (nextLesson) html += renderNextBanner(nextLesson);
  html += levels.map(lvl => renderLevelSection(lvl, nextLesson, levelDescs, levelUnlockHints)).join('');

  container.innerHTML = html;
  observeFadeIns();
}

function findNextLesson() {
  for (const lvl of ['A1', 'A2', 'B1', 'B2']) {
    if (!LEVEL_UNLOCK[lvl]()) continue;
    const next = DATA.lessons.filter(l => l.level === lvl).find(l => !STATE.completedLessons.includes(l.id));
    if (next) return next;
  }
  return null;
}

function renderNextBanner(lesson) {
  const meta = LESSON_META[lesson.id] || {};
  const skill = SKILLS[meta.skill] || SKILLS.vocabulaire;
  const score = STATE.lessonScores?.[lesson.id];
  const label = score !== undefined ? `↩️ Reprendre (${score}%)` : '▶ Commencer';
  return `
    <div class="next-lesson-banner fade-in" onclick="openLesson('${lesson.id}')">
      <div class="nlb-eyebrow">✨ Prochaine leçon recommandée</div>
      <div class="nlb-body">
        <span class="nlb-icon">${lesson.icon}</span>
        <div class="nlb-info">
          <div class="nlb-title">${lesson.title}</div>
          <div class="nlb-meta">
            <span class="nlb-level-badge nlb-${lesson.level}">${lesson.level}</span>
            <span class="nlb-skill" style="color:${skill.color}">${skill.icon} ${skill.label}</span>
            <span class="nlb-xp">⭐ ${lesson.xp} XP</span>
          </div>
        </div>
        <button class="nlb-btn">${label} →</button>
      </div>
    </div>
  `;
}

function renderLevelSection(lvl, nextLesson, levelDescs, levelUnlockHints) {
  const lessons = DATA.lessons.filter(l => l.level === lvl);
  const unlocked = LEVEL_UNLOCK[lvl] ? LEVEL_UNLOCK[lvl]() : false;

  if (!lessons.length || (!unlocked && lvl !== 'A1')) {
    return renderLockedLevel(lvl, levelDescs, levelUnlockHints);
  }

  const completedCount = lessons.filter(l => STATE.completedLessons.includes(l.id)).length;
  const pct = Math.round((completedCount / lessons.length) * 100);

  // Group by chapter, maintaining lesson order
  const chapterMap = new Map();
  lessons.forEach(l => {
    const ch = LESSON_META[l.id]?.chapter ?? 0;
    if (!chapterMap.has(ch)) chapterMap.set(ch, []);
    chapterMap.get(ch).push(l);
  });

  const levelColors = { A1: 'var(--green)', A2: 'var(--blue)', B1: 'var(--ochre)', B2: 'var(--red)' };

  return `
    <div class="level-section level-${lvl} fade-in">
      <div class="level-header">
        <div class="level-badge">${lvl}</div>
        <div class="level-header-info">
          <div class="level-title">${getLevelTitle(lvl)}</div>
          <div class="level-desc">${levelDescs[lvl]}</div>
        </div>
        <div class="level-progress-wrap">
          <div class="level-progress-bar">
            <div class="level-progress-fill" style="width:${pct}%;background:${levelColors[lvl]}"></div>
          </div>
          <div class="level-progress-label">${completedCount}/${lessons.length} <span class="level-progress-pct">${pct}%</span></div>
        </div>
      </div>

      ${[...chapterMap.entries()].sort(([a], [b]) => a - b).map(([chNum, chLessons]) => {
        const ch = CHAPTERS[chNum] || { name: 'Général', icon: '📚', desc: '' };
        const skillKey = LESSON_META[chLessons[0].id]?.skill || 'vocabulaire';
        const skill = SKILLS[skillKey] || SKILLS.vocabulaire;
        const chDone = chLessons.every(l => STATE.completedLessons.includes(l.id));
        return `
          <div class="chapter-group">
            <div class="chapter-divider">
              <span class="chapter-divider-icon">${chDone ? '✅' : ch.icon}</span>
              <div class="chapter-divider-info">
                <span class="chapter-divider-name">${ch.name}</span>
                <span class="chapter-divider-desc">${ch.desc}</span>
              </div>
              <span class="chapter-skill-tag" style="background:${skill.bg};color:${skill.color}">${skill.icon} ${skill.label}</span>
            </div>
            <div class="lessons-grid">
              ${chLessons.map(lesson => renderLessonCard(lesson, nextLesson)).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderLockedLevel(lvl, levelDescs, levelUnlockHints) {
  const hint = levelUnlockHints[lvl] || 'Bientôt disponible !';
  const a1Count = DATA.lessons.filter(l => l.level === 'A1' && STATE.completedLessons.includes(l.id)).length;
  const a2Count = DATA.lessons.filter(l => l.level === 'A2' && STATE.completedLessons.includes(l.id)).length;
  const needed = lvl === 'A2' ? 5 : lvl === 'B1' ? 7 : null;
  const current = lvl === 'A2' ? a1Count : lvl === 'B1' ? a2Count : 0;
  const lockPct = needed ? Math.min(100, Math.round((current / needed) * 100)) : 0;

  return `
    <div class="level-section level-${lvl} fade-in">
      <div class="level-header">
        <div class="level-badge" style="opacity:0.45">${lvl}</div>
        <div class="level-header-info">
          <div class="level-title" style="color:var(--text-light)">${getLevelTitle(lvl)}</div>
          <div class="level-desc">${levelDescs[lvl]}</div>
        </div>
      </div>
      <div class="level-locked-card">
        <div class="level-locked-inner">
          <span class="level-locked-icon">🔒</span>
          <div class="level-locked-text">
            <strong>${hint}</strong>
            ${needed ? `<div class="level-lock-progress">
              <div class="level-lock-bar"><div class="level-lock-fill" style="width:${lockPct}%"></div></div>
              <span>${current}/${needed} complétées</span>
            </div>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderLessonCard(lesson, nextLesson) {
  const completed = STATE.completedLessons.includes(lesson.id);
  const score = STATE.lessonScores?.[lesson.id];
  const inProgress = score !== undefined && !completed;
  const isNext = nextLesson?.id === lesson.id;
  const meta = LESSON_META[lesson.id] || {};
  const skill = SKILLS[meta.skill] || SKILLS.vocabulaire;
  const duration = meta.duration || Math.max(5, Math.round((lesson.quiz?.length || 4) * 1.5));
  const num = String(meta.num || '').padStart(2, '0');

  const scoreColor = score >= 80 ? 'var(--green)' : score >= 60 ? 'var(--ochre)' : 'var(--red)';
  const stateClass = completed ? 'completed' : inProgress ? 'in-progress' : isNext ? 'next-up' : '';

  let stateIcon;
  if (completed)        stateIcon = `<span class="lc-state-icon lc-done">✓</span>`;
  else if (inProgress)  stateIcon = `<span class="lc-state-icon lc-partial" style="color:${scoreColor};border-color:${scoreColor}">${score}%</span>`;
  else if (isNext)      stateIcon = `<span class="lc-state-icon lc-next">▶</span>`;
  else                  stateIcon = `<span class="lc-state-icon lc-locked">○</span>`;

  return `
    <div class="lesson-card ${stateClass} fade-in" onclick="openLesson('${lesson.id}')">
      <div class="lesson-card-top">
        <span class="lesson-num">${num}</span>
        <span class="lesson-skill-tag" style="background:${skill.bg};color:${skill.color}">${skill.icon}</span>
        ${stateIcon}
      </div>
      <div class="lesson-card-icon">${lesson.icon}</div>
      <div class="lesson-card-content">
        <h3>${lesson.title}</h3>
        <div class="lesson-card-sub">${lesson.titlePT}</div>
      </div>
      <div class="progress-bar-sm">
        <div class="progress-bar-sm-fill" style="width:${completed ? 100 : score ?? 0}%;${inProgress && score < 70 ? 'background:var(--red)' : ''}"></div>
      </div>
      <div class="lesson-card-footer">
        <span class="lesson-xp">⭐ ${lesson.xp} XP</span>
        <span class="lesson-duration">⏱ ~${duration} min</span>
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
  document.getElementById('lessons-roadmap').style.display = 'block';
  document.getElementById('lesson-detail').classList.remove('active');
}

function renderLessonDetail(lesson) {
  const detail = document.getElementById('lesson-detail');
  const completed = STATE.completedLessons.includes(lesson.id);
  const score = STATE.lessonScores?.[lesson.id];
  const meta = LESSON_META[lesson.id] || {};
  const skill = SKILLS[meta.skill] || SKILLS.vocabulaire;

  detail.innerHTML = `
    <div class="container">
      <button class="lesson-back-btn" onclick="closeLesson()">← Retour aux leçons</button>

      <div class="lesson-header-card">
        <span class="lesson-header-icon">${lesson.icon}</span>
        <h1>${lesson.title}</h1>
        <p class="sub">${lesson.titlePT}</p>
        <div class="lesson-header-meta">
          <span class="lesson-meta-badge">🎯 Niveau ${lesson.level}</span>
          <span class="lesson-meta-badge" style="background:${skill.bg};color:${skill.color}">${skill.icon} ${skill.label}</span>
          <span class="lesson-meta-badge">📚 ${lesson.sections.length} sections</span>
          <span class="lesson-meta-badge">⭐ ${lesson.xp} XP</span>
          ${completed ? '<span class="lesson-meta-badge" style="background:var(--green-pale);color:var(--green)">✅ Complétée</span>' : ''}
          ${score !== undefined ? `<span class="lesson-meta-badge" style="color:${score >= 70 ? 'var(--green)' : 'var(--red)'}">📊 ${score}%</span>` : ''}
        </div>
      </div>

      <div class="lesson-progress">
        <div class="lesson-progress-header">
          <span>Progression de la leçon</span>
          <span id="lesson-prog-pct">${completed ? '100' : '0'}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" id="lesson-progress-fill" style="width:${completed ? '100' : '0'}%"></div>
        </div>
      </div>

      ${lesson.sections.map((section, i) => renderLessonSection(section, i, lesson.id)).join('')}
      ${lesson.phrases && lesson.phrases.length ? renderPhrasebook(lesson.phrases) : ''}
      ${lesson.quiz && lesson.quiz.length ? renderLessonQuizContainer() : ''}

      <div class="lesson-next-btn">
        <button class="btn-complete-lesson" onclick="completeLesson('${lesson.id}')">
          ${completed ? '✅ Déjà complétée — Réviser' : '🎉 Terminer la leçon → +' + lesson.xp + ' XP'}
        </button>
        ${!completed ? `<div class="lesson-score-hint">💡 Score minimum requis : ${SCORE_THRESHOLD}% au quiz</div>` : ''}
      </div>
    </div>
  `;

  if (lesson.quiz && lesson.quiz.length) initLessonQuiz(lesson);
  observeFadeIns();
}

function renderLessonSection(section, index, lessonId) {
  if (section.type === 'conversation') return renderConversationSection(section, index, lessonId);
  const isSERvESTAR = lessonId === 'a1-7' && index === 2;
  return `
    <div class="lesson-section-card fade-in">
      <h2 class="lesson-section-title">${index + 1}. ${section.title}</h2>
      <div class="lesson-section-text">💡 ${section.content}</div>
      ${isSERvESTAR ? renderSerEstarTable(section.vocabulary) : renderVocabGrid(section.vocabulary)}
    </div>
  `;
}

function renderConversationSection(section, index, lessonId) {
  const linesHtml = section.lines.map(line => {
    const isRight = line.speaker === 1;
    const sp = section.speakers[line.speaker];
    let ptHtml = line.pt;

    // Replace blank marker with styled box
    if (line.blank) {
      ptHtml = ptHtml.replace('___', `<span class="conv-blank" id="conv-blank-${index}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`);
    }
    // Highlight vocabulary words (skip if line has blank — avoid conflicts)
    if (!line.blank && line.hl && line.hl.length) {
      line.hl.forEach(h => {
        ptHtml = ptHtml.replace(h, `<span class="conv-hl">${h}</span>`);
      });
    }

    let frHtml = line.fr.replace('___', '<span class="conv-blank-fr">___</span>');

    return `
      <div class="conv-row ${isRight ? 'conv-row-r' : 'conv-row-l'}">
        ${!isRight ? `<div class="conv-avatar">${sp.avatar}</div>` : ''}
        <div class="conv-msg ${isRight ? 'conv-msg-r' : ''}">
          <div class="conv-name">${sp.name}</div>
          <div class="conv-bubble ${isRight ? 'conv-bubble-r' : 'conv-bubble-l'}">${ptHtml}</div>
          <div class="conv-trans">${frHtml}</div>
        </div>
        ${isRight ? `<div class="conv-avatar">${sp.avatar}</div>` : ''}
      </div>`;
  }).join('');

  const hasBlank = section.lines.some(l => l.blank);
  const choicesHtml = hasBlank ? `
    <div class="conv-choices" id="conv-choices-${index}">
      ${section.options.map((opt, oi) => `
        <button class="conv-choice conv-opt-${index}" data-answer="${opt}"
          onclick="answerConv('${opt.replace(/'/g, "\\'")}', ${index}, '${lessonId}')">
          <span class="conv-choice-num">${oi + 1}</span>${opt}
        </button>`).join('')}
    </div>` : '';

  return `
    <div class="lesson-section-card conv-section fade-in">
      <h2 class="lesson-section-title">${index + 1}. ${section.title}</h2>
      <div class="conv-setup">${section.setup}</div>
      <div class="conv-listen-wrap">
        <button class="conv-listen-btn" data-conv="${index}" onclick="playConversation('${lessonId}', ${index})">
          ▶ Écouter le dialogue
        </button>
      </div>
      <div class="conv-thread">${linesHtml}</div>
      ${choicesHtml}
    </div>`;
}

function renderVocabGrid(vocab) {
  return `
    <div class="vocab-grid">
      ${vocab.map(v => `
        <div class="vocab-item">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div class="vocab-pt">${v.pt}</div>
            <button onclick="speakWord('${v.pt.replace(/'/g, "\\'")}')" title="Écouter"
              style="background:none;border:none;cursor:pointer;font-size:1rem;padding:2px 4px;opacity:0.65;transition:opacity 0.2s"
              onmouseenter="this.style.opacity='1'" onmouseleave="this.style.opacity='0.65'">🔊</button>
          </div>
          <div class="vocab-fr">${v.fr}</div>
          ${v.phonetic ? `<span class="vocab-phonetic">[${v.phonetic}]</span>` : ''}
          ${v.ptBR && v.ptBR !== v.pt ? `<div class="vocab-ptbr"><img src="https://flagcdn.com/14x11/br.png" alt="BR" width="14" height="11" style="vertical-align:middle;border-radius:1px;margin-right:3px"> ${v.ptBR}</div>` : ''}
          ${v.example ? `<div class="vocab-example">"${v.example}"</div>` : ''}
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
      <h3>🧠 Mini-Quiz — Testez vos connaissances !</h3>
      <div id="lesson-quiz-body"></div>
    </div>
  `;
}

// ── Quiz logic (unchanged) ────────────────────────────────────────────────────
function initLessonQuiz(lesson) {
  if (!lesson.quiz || !lesson.quiz.length) return;
  renderCurrentLessonQuestion(lesson);
}

function renderCurrentLessonQuestion(lesson) {
  const quizBody = document.getElementById('lesson-quiz-body');
  if (!quizBody) return;

  if (currentLessonQuizIndex >= lesson.quiz.length) {
    const pct = Math.round((lessonQuizCorrect / lesson.quiz.length) * 100);
    const stars = pct >= 90 ? '⭐⭐⭐' : pct >= 60 ? '⭐⭐' : '⭐';
    const fill = document.getElementById('lesson-progress-fill');
    const pctEl = document.getElementById('lesson-prog-pct');
    if (fill) fill.style.width = '100%';
    if (pctEl) pctEl.textContent = '100%';

    if (!STATE.lessonScores) STATE.lessonScores = {};
    STATE.lessonScores[lesson.id] = pct;
    saveState();

    if (pct >= SCORE_THRESHOLD && !STATE.completedLessons.includes(lesson.id)) {
      STATE.completedLessons.push(lesson.id);
      addXP(lesson.xp);
      triggerConfetti();
      checkBadges();
      saveState();
    }

    const passed = pct >= SCORE_THRESHOLD;
    quizBody.innerHTML = `
      <div style="text-align:center;padding:28px 16px">
        <div style="font-size:2.5rem;margin-bottom:8px">${stars}</div>
        <h4 style="color:${passed ? 'var(--green)' : 'var(--red)'};font-size:1.2rem;margin-bottom:8px">
          ${pct >= 80 ? 'Excelente! 🎉' : pct >= 50 ? 'Bom trabalho! 👍' : 'Continue a praticar! 📚'}
        </h4>
        <p style="color:var(--text-mid);margin-bottom:8px">Score : <strong>${lessonQuizCorrect}/${lesson.quiz.length}</strong> (${pct}%)</p>
        ${passed
          ? `<p style="color:var(--green);font-weight:700;margin-bottom:16px">✅ Leçon validée ! +${lesson.xp} XP</p>`
          : `<p style="color:var(--red);font-size:0.875rem;margin-bottom:16px">⚠️ Score minimum requis : ${SCORE_THRESHOLD}%. Réessayez !</p>`
        }
        <button onclick="resetLessonQuiz('${lesson.id}')"
          style="padding:10px 24px;background:var(--blue);color:white;border-radius:var(--radius);font-weight:700;border:none;cursor:pointer">
          🔄 Recommencer le quiz
        </button>
      </div>
    `;
    return;
  }

  const q = lesson.quiz[currentLessonQuizIndex];
  const pct = Math.round((currentLessonQuizIndex / lesson.quiz.length) * 100);
  const fill = document.getElementById('lesson-progress-fill');
  const pctEl = document.getElementById('lesson-prog-pct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';

  if (q.type === 'mcq') {
    quizBody.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-question-text">Question ${currentLessonQuizIndex + 1}/${lesson.quiz.length} : ${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option" onclick="answerLessonMCQ(${i}, ${q.correct}, '${lesson.id}', \`${(q.explanation || '').replace(/`/g, "'")}\`)">
              ${opt}
            </button>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="lesson-q-feedback"></div>
      </div>
      <div class="quiz-nav">
        <span class="quiz-counter">${currentLessonQuizIndex + 1} / ${lesson.quiz.length}</span>
        <button class="btn-next-q" id="lesson-next-btn" onclick="nextLessonQuestion('${lesson.id}')" style="display:none">Suivant →</button>
      </div>
    `;
  } else if (q.type === 'translate' || q.type === 'fill') {
    quizBody.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-question-text">Question ${currentLessonQuizIndex + 1}/${lesson.quiz.length} : ${q.question}</div>
        <input type="text" class="quiz-translate-input" id="lesson-translate-input" placeholder="Votre réponse en portugais..." autocomplete="off" />
        <button class="btn-check-answer" onclick="checkLessonTranslate('${lesson.id}', \`${(q.answer || '').replace(/`/g, "'")}\`)">Vérifier ✓</button>
        <div class="quiz-feedback" id="lesson-q-feedback"></div>
      </div>
      <div class="quiz-nav">
        <span class="quiz-counter">${currentLessonQuizIndex + 1} / ${lesson.quiz.length}</span>
        <button class="btn-next-q" id="lesson-next-btn" onclick="nextLessonQuestion('${lesson.id}')" style="display:none">Suivant →</button>
      </div>
    `;
    const input = document.getElementById('lesson-translate-input');
    if (input) {
      input.focus();
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') checkLessonTranslate(lesson.id, q.answer);
      });
    }
  } else if (q.type === 'cloze') {
    const parts = (q.sentence || q.question).split('___');
    quizBody.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-question-text">Question ${currentLessonQuizIndex + 1}/${lesson.quiz.length} : Complétez la phrase :</div>
        <div class="cloze-sentence" style="margin:12px 0;font-size:1rem">
          ${parts[0]}<input type="text" class="cloze-input" id="lesson-translate-input" placeholder="..." autocomplete="off" style="width:120px" />${parts[1] || ''}
        </div>
        ${q.hint ? `<div class="cloze-hint">💡 ${q.hint}</div>` : ''}
        <button class="btn-check-answer" onclick="checkLessonTranslate('${lesson.id}', \`${(q.answer || '').replace(/`/g, "'")}\`)">Vérifier ✓</button>
        <div class="quiz-feedback" id="lesson-q-feedback"></div>
      </div>
      <div class="quiz-nav">
        <span class="quiz-counter">${currentLessonQuizIndex + 1} / ${lesson.quiz.length}</span>
        <button class="btn-next-q" id="lesson-next-btn" onclick="nextLessonQuestion('${lesson.id}')" style="display:none">Suivant →</button>
      </div>
    `;
    const input = document.getElementById('lesson-translate-input');
    if (input) {
      input.focus();
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') checkLessonTranslate(lesson.id, q.answer);
      });
    }
  }
}

export function answerLessonMCQ(chosen, correct, _lessonId, explanation) {
  const opts = document.querySelectorAll('#lesson-quiz-body .quiz-option');
  opts.forEach((o, i) => {
    o.classList.add('disabled');
    if (i === correct) o.classList.add('correct');
    else if (i === chosen) o.classList.add('wrong');
  });
  const isCorrect = chosen === correct;
  if (isCorrect) lessonQuizCorrect++;
  const feedback = document.getElementById('lesson-q-feedback');
  feedback.className = `quiz-feedback show ${isCorrect ? 'success' : 'error'}`;
  feedback.innerHTML = `${isCorrect ? '✅ Correct !' : '❌ Pas tout à fait.'} ${explanation}`;
  document.getElementById('lesson-next-btn').style.display = 'block';
  lessonQuizAnswered++;
}

export function checkLessonTranslate(_lessonId, answer) {
  const input = document.getElementById('lesson-translate-input');
  if (!input) return;
  const val = input.value.trim();
  const alternatives = (answer || '').split('/').map(a => normalize(a.trim()));
  const isCorrect = alternatives.some(alt => normalize(val) === alt || normalize(val).includes(alt));

  if (isCorrect) lessonQuizCorrect++;
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
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  renderCurrentLessonQuestion(lesson);
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
  } else {
    showToast('info', '📚 Révision complète !', 'Bonne révision !');
  }
  checkBadges();
  saveState();
  closeLesson();
}

// ── Conversation exercises ─────────────────────────────────────────────────────
export function playConversation(lessonId, sectionIndex) {
  if (!window.speechSynthesis) return;
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  const section = lesson.sections[sectionIndex];
  if (!section || section.type !== 'conversation') return;

  const btn = document.querySelector(`[data-conv="${sectionIndex}"]`);
  window.speechSynthesis.cancel();

  let i = 0;
  function speakNext() {
    if (i >= section.lines.length) {
      if (btn) { btn.textContent = '▶ Écouter le dialogue'; btn.disabled = false; }
      return;
    }
    const line = section.lines[i];
    const text = line.pt.replace('___', line.blank || '');
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'pt-PT';
    utt.rate = 0.82;
    utt.onend = () => { i++; setTimeout(speakNext, 450); };
    if (i === 0 && btn) { btn.textContent = '⏸ Lecture…'; btn.disabled = true; }
    window.speechSynthesis.speak(utt);
  }
  speakNext();
}

export function answerConv(answer, sectionIndex, lessonId) {
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  const section = lesson.sections[sectionIndex];
  if (!section || section.type !== 'conversation') return;

  const blankLine = section.lines.find(l => l.blank);
  const correct = answer === blankLine?.blank;

  // Fill the blank
  const blankEl = document.getElementById(`conv-blank-${sectionIndex}`);
  if (blankEl) {
    blankEl.textContent = answer;
    blankEl.classList.add(correct ? 'conv-blank-correct' : 'conv-blank-wrong');
    if (!correct) {
      // Show correct answer after a beat
      setTimeout(() => {
        blankEl.textContent = blankLine.blank;
        blankEl.classList.remove('conv-blank-wrong');
        blankEl.classList.add('conv-blank-correct');
      }, 1200);
    }
  }

  // Style all choices
  document.querySelectorAll(`.conv-opt-${sectionIndex}`).forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === answer && correct)       btn.classList.add('conv-choice-correct');
    if (btn.dataset.answer === answer && !correct)      btn.classList.add('conv-choice-wrong');
    if (btn.dataset.answer === blankLine?.blank && !correct) btn.classList.add('conv-choice-correct');
  });
}
