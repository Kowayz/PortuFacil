// PortuFácil — Main Application (v2)

// ============================
// STATE & STORAGE
// ============================
const DEFAULT_STATE = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActivity: null,
  completedLessons: [],
  learnedWords: {},       // { wordKey: 'new' | 'learning' | 'mastered' }
  quizzesCompleted: 0,
  perfectQuizzes: 0,
  earnedBadges: [],
  totalSeconds: 0,        // learning time tracker
  weekActivity: [0, 0, 0, 0, 0, 0, 0],
  culturalFactsSeen: 0,
  seenCulturalFacts: [],  // track which facts were seen
  favorites: [],          // saved words
  theme: 'light',
};

let STATE = {};

function loadState() {
  try {
    const saved = localStorage.getItem('portufacil_state');
    STATE = saved ? { ...DEFAULT_STATE, ...JSON.parse(saved) } : { ...DEFAULT_STATE };
  } catch {
    STATE = { ...DEFAULT_STATE };
  }
}

function saveState() {
  localStorage.setItem('portufacil_state', JSON.stringify(STATE));
}

function addXP(amount) {
  STATE.xp += amount;
  const newLevel = Math.floor(STATE.xp / 200) + 1;
  const leveledUp = newLevel > STATE.level;
  STATE.level = newLevel;
  updateNavXP();
  if (leveledUp) showLevelUpModal(STATE.level);
  checkBadges();
  saveState();
}

function updateStreak() {
  const today = new Date().toDateString();
  if (STATE.lastActivity === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  STATE.streak = STATE.lastActivity === yesterday ? STATE.streak + 1 : 1;
  STATE.lastActivity = today;
  const day = new Date().getDay();
  STATE.weekActivity[day] = (STATE.weekActivity[day] || 0) + 1;
  updateNavStreak();
  checkBadges();
  saveState();
}

// ============================
// HELPERS
// ============================

// Accent-insensitive, case-insensitive comparison for quiz answers
function normalize(str) {
  return (str || '').toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

// Fisher-Yates shuffle — no bias, doesn't mutate source
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds) {
  if (seconds < 60) return seconds + 's';
  if (seconds < 3600) return Math.floor(seconds / 60) + 'min';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return h + 'h' + (m > 0 ? m + 'min' : '');
}

// ============================
// NAVIGATION
// ============================
let currentPage = 'home';
let _pageStartTime = Date.now();

function navigate(page) {
  // Track time on previous page
  const elapsed = Math.floor((Date.now() - _pageStartTime) / 1000);
  if (elapsed > 5 && elapsed < 3600) {
    STATE.totalSeconds = (STATE.totalSeconds || 0) + elapsed;
    saveState();
  }
  _pageStartTime = Date.now();

  // If navigating away from an active quiz, silently reset
  if (currentPage === 'quiz' && quizCurrentIndex > 0 && quizCurrentIndex < quizQuestions.length) {
    _resetQuizState();
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'lessons') renderLessons();
  if (page === 'vocabulary') renderVocabulary();
  if (page === 'conjugation') renderConjugation();
  if (page === 'pronunciation') renderPronunciation();
  if (page === 'quiz') {
    _ensureQuizModesVisible();
    const el = document.getElementById('quiz-streak-display');
    if (el) el.textContent = STATE.streak || 0;
  }
  if (page === 'progress') renderProgress();
}

function _ensureQuizModesVisible() {
  document.getElementById('quiz-modes-section').style.display = 'block';
  document.getElementById('quiz-active')?.classList.remove('show');
  document.getElementById('quiz-result')?.classList.remove('show');
}

function _resetQuizState() {
  quizCurrentIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  quizQuestions = [];
  activeQuiz = null;
}

// ============================
// GLOBAL INTERSECTION OBSERVER
// ============================
// Single observer reused across all pages — no memory leak
let _fadeObserver = null;

function observeFadeIns() {
  if (!_fadeObserver) {
    _fadeObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          _fadeObserver.unobserve(e.target); // stop observing once visible
        }
      });
    }, { threshold: 0.1 });
  }
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => _fadeObserver.observe(el));
}

// ============================
// NAVBAR
// ============================
function initNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navigate(link.dataset.page);
      document.getElementById('nav-links').classList.remove('open');
    });
  });

  document.getElementById('nav-hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });

  document.getElementById('btn-theme').addEventListener('click', toggleTheme);

  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 10);
  });

  updateNavXP();
  updateNavStreak();
}

function updateNavXP() {
  document.getElementById('nav-xp-val').textContent = STATE.xp + ' XP';
}

function updateNavStreak() {
  document.getElementById('nav-streak-val').textContent = STATE.streak;
}

function toggleTheme() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  document.getElementById('btn-theme').textContent = isDark ? '🌙' : '☀️';
  STATE.theme = isDark ? 'light' : 'dark';
  saveState();
}

// ============================
// HOME PAGE
// ============================
function initHome() {
  const wod = DATA.wordOfDay[new Date().getDay() % DATA.wordOfDay.length];
  document.getElementById('wod-word').textContent = wod.word;
  document.getElementById('wod-trans').textContent = wod.translation;
  document.getElementById('wod-example').textContent = wod.example;
  document.getElementById('wod-emoji').textContent = wod.emoji;

  // Interactive word of day: listen + save to favorites
  const wodCard = document.querySelector('.hero-word-card');
  if (wodCard) {
    // Add 🔊 button
    const speakBtn = document.createElement('button');
    speakBtn.innerHTML = '🔊 Écouter';
    speakBtn.style.cssText = 'margin-top:10px;padding:6px 14px;background:rgba(255,255,255,0.2);color:white;border:1px solid rgba(255,255,255,0.4);border-radius:20px;font-size:0.78rem;font-weight:700;cursor:pointer;transition:background 0.2s';
    speakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakWord(wod.word);
    });
    speakBtn.addEventListener('mouseenter', () => speakBtn.style.background = 'rgba(255,255,255,0.35)');
    speakBtn.addEventListener('mouseleave', () => speakBtn.style.background = 'rgba(255,255,255,0.2)');

    // Add ❤️ favorite button
    const favBtn = document.createElement('button');
    const isFav = STATE.favorites.includes(wod.word);
    favBtn.innerHTML = isFav ? '❤️ Sauvegardé' : '🤍 Sauvegarder';
    favBtn.style.cssText = 'margin-top:6px;margin-left:8px;padding:6px 14px;background:rgba(255,255,255,0.2);color:white;border:1px solid rgba(255,255,255,0.4);border-radius:20px;font-size:0.78rem;font-weight:700;cursor:pointer;transition:background 0.2s';
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!STATE.favorites.includes(wod.word)) {
        STATE.favorites.push(wod.word);
        favBtn.innerHTML = '❤️ Sauvegardé';
        showToast('success', '❤️ Ajouté !', `"${wod.word}" dans vos favoris.`);
        saveState();
      }
    });

    const btnRow = document.createElement('div');
    btnRow.style.cssText = 'display:flex;gap:0;flex-wrap:wrap;margin-top:4px';
    btnRow.appendChild(speakBtn);
    btnRow.appendChild(favBtn);
    wodCard.appendChild(btnRow);
  }

  // Quote
  const q = DATA.quotes[Math.floor(Math.random() * DATA.quotes.length)];
  document.getElementById('quote-text').textContent = q.text;
  document.getElementById('quote-author').textContent = '— ' + q.author;

  document.getElementById('hero-cta-btn').addEventListener('click', () => navigate('lessons'));
  document.getElementById('hero-demo-btn').addEventListener('click', () => navigate('quiz'));

  renderCulturalFacts();
  observeFadeIns();
}

function renderCulturalFacts() {
  const container = document.getElementById('cultural-facts-container');
  if (!container) return;
  container.innerHTML = DATA.culturalFacts.map((f, i) => `
    <div class="cultural-card fade-in" data-fact-index="${i}" style="cursor:pointer" onclick="trackCulturalFact(${i})">
      <span class="cultural-card-icon">${f.emoji}</span>
      <h3>${f.title}</h3>
      <p>${f.text}</p>
    </div>
  `).join('');
  observeFadeIns();
}

// Bug 1d fix: track when a cultural fact is viewed
function trackCulturalFact(index) {
  if (!STATE.seenCulturalFacts.includes(index)) {
    STATE.seenCulturalFacts.push(index);
    STATE.culturalFactsSeen = STATE.seenCulturalFacts.length;
    saveState();
    checkBadges();
  }
}

// ============================
// LESSONS PAGE
// ============================
let currentLessonId = null;
let currentLessonQuizIndex = 0;
let lessonQuizAnswered = 0;
let lessonQuizCorrect = 0;

// Level unlock thresholds
const LEVEL_UNLOCK = {
  A1: () => true,
  A2: () => STATE.completedLessons.filter(id => id.startsWith('a1-')).length >= 4,
  B1: () => DATA.lessons.filter(l => l.level === 'A2').every(l => STATE.completedLessons.includes(l.id)),
  B2: () => false,
};

function renderLessons() {
  const container = document.getElementById('lessons-roadmap');
  if (!container) return;

  const levels = ['A1', 'A2', 'B1', 'B2'];
  const levelDescs = {
    A1: 'Les bases absolues — pour débuter avec confiance',
    A2: 'Vie quotidienne — pour communiquer au quotidien',
    B1: 'Conversations — pour exprimer vos idées',
    B2: 'Maîtrise — pour atteindre l\'aisance',
  };
  const levelUnlockHints = {
    A2: 'Complétez 4 leçons A1 pour débloquer',
    B1: 'Complétez toutes les leçons A2 pour débloquer',
    B2: 'Bientôt disponible !',
  };

  container.innerHTML = levels.map(lvl => {
    const lessons = DATA.lessons.filter(l => l.level === lvl);
    const unlocked = LEVEL_UNLOCK[lvl] ? LEVEL_UNLOCK[lvl]() : false;

    if (!lessons.length || (!unlocked && lvl !== 'A1')) {
      const hint = levelUnlockHints[lvl] || 'Bientôt disponible !';
      return `
        <div class="level-section level-${lvl} fade-in">
          <div class="level-header">
            <div class="level-badge">${lvl}</div>
            <div>
              <div class="level-title">${getLevelTitle(lvl)}</div>
              <div class="level-desc">${levelDescs[lvl]}</div>
            </div>
          </div>
          <div class="lessons-grid">
            <div class="lesson-card" style="opacity:0.45;cursor:not-allowed;border:2px dashed var(--cream-dark)">
              <div class="lesson-card-icon">🔒</div>
              <div class="lesson-card-content">
                <h3 style="color:var(--text-light)">${hint}</h3>
                <p class="lesson-card-desc">Continuez votre progression pour débloquer ce niveau !</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    const completedCount = lessons.filter(l => STATE.completedLessons.includes(l.id)).length;
    return `
      <div class="level-section level-${lvl} fade-in">
        <div class="level-header">
          <div class="level-badge">${lvl}</div>
          <div>
            <div class="level-title">${getLevelTitle(lvl)}
              <span style="font-family:'DM Mono',monospace;font-size:0.75rem;color:var(--text-light);margin-left:10px">${completedCount}/${lessons.length}</span>
            </div>
            <div class="level-desc">${levelDescs[lvl]}</div>
          </div>
        </div>
        <div class="lessons-grid">
          ${lessons.map(lesson => renderLessonCard(lesson)).join('')}
        </div>
      </div>
    `;
  }).join('');

  observeFadeIns();
}

function getLevelTitle(lvl) {
  return { A1: 'Débutant', A2: 'Élémentaire', B1: 'Intermédiaire', B2: 'Avancé' }[lvl] || lvl;
}

function renderLessonCard(lesson) {
  const completed = STATE.completedLessons.includes(lesson.id);
  return `
    <div class="lesson-card ${completed ? 'completed' : ''} fade-in" onclick="openLesson('${lesson.id}')">
      <div class="lesson-card-icon">${lesson.icon}</div>
      <div class="lesson-card-content">
        <h3>${lesson.title}</h3>
        <div class="lesson-card-sub">${lesson.titlePT}</div>
        <p class="lesson-card-desc">${lesson.description}</p>
      </div>
      <div class="progress-bar-sm">
        <div class="progress-bar-sm-fill" style="width:${completed ? 100 : 0}%"></div>
      </div>
      <div class="lesson-card-footer">
        <span class="lesson-xp">⭐ ${lesson.xp} XP</span>
        <span class="lesson-status">${completed ? '✅' : '▶️'}</span>
      </div>
    </div>
  `;
}

function openLesson(id) {
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

function closeLesson() {
  document.getElementById('lessons-roadmap').style.display = 'block';
  document.getElementById('lesson-detail').classList.remove('active');
}

function renderLessonDetail(lesson) {
  const detail = document.getElementById('lesson-detail');
  const completed = STATE.completedLessons.includes(lesson.id);

  detail.innerHTML = `
    <div class="container">
      <button class="lesson-back-btn" onclick="closeLesson()">← Retour aux leçons</button>

      <div class="lesson-header-card">
        <span class="lesson-header-icon">${lesson.icon}</span>
        <h1>${lesson.title}</h1>
        <p class="sub">${lesson.titlePT}</p>
        <div class="lesson-header-meta">
          <span class="lesson-meta-badge">📚 ${lesson.sections.length} sections</span>
          <span class="lesson-meta-badge">⭐ ${lesson.xp} XP</span>
          <span class="lesson-meta-badge">🎯 Niveau ${lesson.level}</span>
          ${completed ? '<span class="lesson-meta-badge">✅ Complétée</span>' : ''}
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
      </div>
    </div>
  `;

  if (lesson.quiz && lesson.quiz.length) initLessonQuiz(lesson);
}

function renderLessonSection(section, index, lessonId) {
  const isSERvESTAR = lessonId === 'a1-7' && index === 2;
  return `
    <div class="lesson-section-card fade-in">
      <h2 class="lesson-section-title">${index + 1}. ${section.title}</h2>
      <div class="lesson-section-text">💡 ${section.content}</div>
      ${isSERvESTAR ? renderSerEstarTable(section.vocabulary) : renderVocabGrid(section.vocabulary)}
    </div>
  `;
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
          ${v.ptBR && v.ptBR !== v.pt ? `<div class="vocab-ptbr">🇧🇷 ${v.ptBR}</div>` : ''}
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
            `<li><strong>${v.fr.replace(/\(.*?\)/g,'').trim()}</strong> — <em>${v.example}</em></li>`
          ).join('')}
        </ul>
      </div>
      <div class="estar-box">
        <h3>ESTAR — Temporaire</h3>
        <ul class="use-list">
          ${vocab.filter(v => v.pt.startsWith('ESTAR')).map(v =>
            `<li><strong>${v.fr.replace(/\(.*?\)/g,'').trim()}</strong> — <em>${v.example}</em></li>`
          ).join('')}
        </ul>
      </div>
    </div>
  `;
}

// 2b: Phrasebook in dialogue bubbles
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

    quizBody.innerHTML = `
      <div style="text-align:center;padding:28px 16px">
        <div style="font-size:2.5rem;margin-bottom:8px">${stars}</div>
        <h4 style="color:var(--blue);font-size:1.2rem;margin-bottom:8px">
          ${pct >= 80 ? 'Excelente! 🎉' : pct >= 50 ? 'Bom trabalho! 👍' : 'Continue a praticar! 📚'}
        </h4>
        <p style="color:var(--text-mid);margin-bottom:16px">Score : <strong>${lessonQuizCorrect}/${lesson.quiz.length}</strong> (${pct}%)</p>
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
  }
}

function answerLessonMCQ(chosen, correct, _lessonId, explanation) {
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

function checkLessonTranslate(_lessonId, answer) {
  const input = document.getElementById('lesson-translate-input');
  if (!input) return;
  const val = input.value.trim();
  // Bug 1e fix: accent-insensitive comparison, also accept alternatives separated by /
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

function nextLessonQuestion(lessonId) {
  currentLessonQuizIndex++;
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  renderCurrentLessonQuestion(lesson);
}

function resetLessonQuiz(lessonId) {
  currentLessonQuizIndex = 0;
  lessonQuizAnswered = 0;
  lessonQuizCorrect = 0;
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  renderCurrentLessonQuestion(lesson);
}

function completeLesson(lessonId) {
  const lesson = DATA.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  updateStreak();
  if (!STATE.completedLessons.includes(lessonId)) {
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

// ============================
// VOCABULARY PAGE
// ============================
let currentCategory = null;
let vocabFilter = 'all';
let vocabDisplayOrders = {}; // Bug 1f: store shuffled orders without mutating DATA

function renderVocabulary() {
  const container = document.getElementById('vocab-categories');
  if (!container) return;

  container.innerHTML = DATA.vocabulary.categories.map(cat => {
    const learnedCount = Object.keys(STATE.learnedWords).filter(k => k.startsWith(cat.id + '_') && STATE.learnedWords[k] === 'mastered').length;
    return `
      <button class="vocab-category-btn ${currentCategory === cat.id ? 'active' : ''}" onclick="selectVocabCategory('${cat.id}')">
        <span class="vocab-cat-icon">${cat.icon}</span>
        <div class="vocab-cat-name">${cat.name}</div>
        <div class="vocab-cat-count">${learnedCount}/${cat.words.length}</div>
      </button>
    `;
  }).join('');

  if (currentCategory) {
    renderFlipCards(currentCategory);
  } else {
    selectVocabCategory(DATA.vocabulary.categories[0].id);
  }

  // Bug 1b fix: use dataset flag to avoid stacking event listeners
  const searchEl = document.getElementById('vocab-search');
  if (searchEl && !searchEl.dataset.bound) {
    searchEl.addEventListener('input', filterVocabCards);
    searchEl.dataset.bound = 'true';
  }

  document.querySelectorAll('.vocab-filter-tab').forEach(tab => {
    if (!tab.dataset.bound) {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.vocab-filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        vocabFilter = tab.dataset.filter;
        renderFlipCards(currentCategory);
      });
      tab.dataset.bound = 'true';
    }
  });

  const shuffleBtn = document.getElementById('btn-shuffle');
  if (shuffleBtn && !shuffleBtn.dataset.bound) {
    shuffleBtn.addEventListener('click', () => {
      // Bug 1f fix: shuffle only the display order, not DATA
      const cat = DATA.vocabulary.categories.find(c => c.id === currentCategory);
      if (!cat) return;
      vocabDisplayOrders[currentCategory] = shuffle(cat.words.map((_, i) => i));
      renderFlipCards(currentCategory);
    });
    shuffleBtn.dataset.bound = 'true';
  }
}

function selectVocabCategory(catId) {
  currentCategory = catId;
  document.querySelectorAll('.vocab-category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick')?.includes(`'${catId}'`));
  });
  renderFlipCards(catId);
}

function renderFlipCards(catId) {
  const cat = DATA.vocabulary.categories.find(c => c.id === catId);
  if (!cat) return;

  // Apply display order (shuffle or natural)
  let words = vocabDisplayOrders[catId]
    ? vocabDisplayOrders[catId].map(i => cat.words[i])
    : [...cat.words];

  const search = (document.getElementById('vocab-search')?.value || '').toLowerCase();
  if (search) {
    words = words.filter(w => w.pt.toLowerCase().includes(search) || w.fr.toLowerCase().includes(search));
  }

  if (vocabFilter === 'learned') {
    words = words.filter(w => STATE.learnedWords[catId + '_' + w.pt] === 'mastered');
  } else if (vocabFilter === 'review') {
    words = words.filter(w => !STATE.learnedWords[catId + '_' + w.pt] || STATE.learnedWords[catId + '_' + w.pt] === 'new');
  }

  const container = document.getElementById('flip-cards-container');
  if (!container) return;

  const allMastered = cat.words.filter(w => STATE.learnedWords[catId + '_' + w.pt] === 'mastered').length;
  const allLearning = cat.words.filter(w => STATE.learnedWords[catId + '_' + w.pt] === 'learning').length;
  const statsBar = document.getElementById('vocab-stats-bar');
  if (statsBar) {
    statsBar.innerHTML = `
      <div class="vocab-stat"><span class="vocab-stat-dot" style="background:var(--red)"></span>${cat.words.length - allMastered - allLearning} nouveau(x)</div>
      <div class="vocab-stat"><span class="vocab-stat-dot" style="background:var(--ochre)"></span>${allLearning} en cours</div>
      <div class="vocab-stat"><span class="vocab-stat-dot" style="background:var(--green)"></span>${allMastered} maîtrisé(s)</div>
      <div class="vocab-stat" style="margin-left:auto;font-weight:700;color:var(--text-dark)">${allMastered}/${cat.words.length}</div>
    `;
  }

  if (!words.length) {
    container.innerHTML = '<p style="color:var(--text-light);font-style:italic;padding:20px 0">Aucun mot trouvé.</p>';
    return;
  }

  // 2c: Add 🔊 button on front of each flip card
  container.innerHTML = `
    <div class="flip-cards-grid">
      ${words.map(w => {
        const key = catId + '_' + w.pt;
        const mastery = STATE.learnedWords[key] || 'new';
        return `
          <div class="flip-card-wrap" onclick="handleFlipCard(this, '${key}')">
            <div class="flip-card">
              <div class="flip-card-front">
                <div class="flip-card-mastery ${mastery}"></div>
                <button onclick="event.stopPropagation();speakWord('${w.pt.replace(/'/g, "\\'")}')"
                  title="Écouter" style="position:absolute;top:8px;left:8px;background:rgba(26,58,92,0.07);border:none;border-radius:50%;width:28px;height:28px;cursor:pointer;font-size:0.85rem;display:flex;align-items:center;justify-content:center;transition:background 0.2s"
                  onmouseenter="this.style.background='rgba(26,58,92,0.18)'" onmouseleave="this.style.background='rgba(26,58,92,0.07)'">🔊</button>
                <span class="flip-card-emoji">${w.img}</span>
                <div class="flip-card-pt">${w.pt}</div>
                <div style="font-size:0.68rem;color:var(--text-light);margin-top:4px">Cliquez pour retourner</div>
              </div>
              <div class="flip-card-back">
                <div class="flip-card-mastery ${mastery}"></div>
                <span class="flip-card-emoji">${w.img}</span>
                <div class="flip-card-fr">${w.fr}</div>
                <div style="font-size:0.75rem;opacity:0.8;text-align:center">${w.pt}</div>
                <div style="font-size:0.68rem;opacity:0.6;margin-top:6px">${mastery === 'mastered' ? '✅ Maîtrisé' : mastery === 'learning' ? '🟡 En cours' : '🔴 Nouveau'}</div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function handleFlipCard(wrap, key) {
  const card = wrap.querySelector('.flip-card');
  card.classList.toggle('flipped');
  if (card.classList.contains('flipped')) {
    if (!STATE.learnedWords[key] || STATE.learnedWords[key] === 'new') {
      STATE.learnedWords[key] = 'learning';
    } else if (STATE.learnedWords[key] === 'learning') {
      STATE.learnedWords[key] = 'mastered';
      addXP(5);
      showToast('success', '✅ Mot maîtrisé !', '+5 XP');
    }
    saveState();
    checkBadges();
    updateStreak();
  }
}

function filterVocabCards() {
  renderFlipCards(currentCategory);
}

// ============================
// CONJUGATION PAGE
// ============================
function renderConjugation() {
  renderEssentialVerbs();
  renderRegularVerbGroups();

  // Bug 1b fix: bind only once
  const searchInput = document.getElementById('conjugation-search');
  const searchBtn = document.getElementById('conjugation-search-btn');
  if (searchBtn && !searchBtn.dataset.bound) {
    searchBtn.addEventListener('click', () => searchVerb(searchInput.value.trim().toLowerCase()));
    searchBtn.dataset.bound = 'true';
  }
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') searchVerb(searchInput.value.trim().toLowerCase());
    });
    searchInput.dataset.bound = 'true';
  }
}

function renderEssentialVerbs() {
  const container = document.getElementById('essential-verbs-container');
  if (!container) return;
  container.innerHTML = DATA.conjugation.essential.map(v => `
    <div class="essential-verb-card" onclick="showVerbConjugation('${v.verb}')">
      <div class="essential-verb-name">${v.verb}</div>
      <div class="essential-verb-meaning">${v.meaning}</div>
      ${v.irregular ? '<span class="essential-verb-badge badge-irreg">Irrégulier</span>' : ''}
    </div>
  `).join('');
}

function renderRegularVerbGroups() {
  const container = document.getElementById('verb-groups-container');
  if (!container) return;
  const groups = ['ar', 'er', 'ir'];
  const colors = ['ar-header', 'er-header', 'ir-header'];
  container.innerHTML = `
    <div class="verb-groups-grid">
      ${groups.map((g, i) => {
        const group = DATA.conjugation.regular[g];
        const tense = group.tenses.presente;
        const pronouns = Object.keys(tense);
        return `
          <div class="verb-group-card">
            <div class="verb-group-header ${colors[i]}">${group.infinitive}</div>
            <div class="verb-group-body">
              ${pronouns.map(p => `
                <div class="verb-group-row">
                  <span class="vg-pronoun">${p}</span>
                  <span class="vg-ending">${tense[p]}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function searchVerb(verb) {
  if (!verb) return;
  const found = DATA.conjugation.essential.find(v => v.verb === verb);
  if (found) {
    showVerbConjugation(found.verb);
  } else {
    showToast('warning', '🔍 Verbe introuvable', 'Essayez : ser, estar, ter, ir, fazer, poder, querer, dizer');
  }
}

let currentTense = 'presente';

function showVerbConjugation(verbName) {
  const verb = DATA.conjugation.essential.find(v => v.verb === verbName);
  if (!verb) return;
  const result = document.getElementById('conjugation-result');
  result.classList.add('show');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const tenses = Object.keys(verb.tenses);
  const tenseNames = {
    presente: 'Présent', preteritoPerfeito: 'Passé simple',
    preteritoImperfeito: 'Imparfait', futuro: 'Futur',
  };

  result.innerHTML = `
    <div class="conjugation-verb-header">
      <div class="conjugation-verb-name">${verb.verb}</div>
      <div class="conjugation-verb-meaning">${verb.meaning}</div>
      ${verb.irregular ? '<div class="conj-irregular-badge">⚡ Verbe irrégulier</div>' : ''}
    </div>
    <div class="tense-tabs">
      ${tenses.map(t => `
        <button class="tense-tab ${t === currentTense ? 'active' : ''}" onclick="switchTense('${verbName}', '${t}')">
          ${tenseNames[t] || t}
        </button>
      `).join('')}
    </div>
    <div id="tense-table-container">${renderTenseTable(verb, currentTense)}</div>
  `;
}

function switchTense(verbName, tense) {
  currentTense = tense;
  document.querySelectorAll('.tense-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('onclick')?.includes(`'${tense}'`));
  });
  const container = document.getElementById('tense-table-container');
  if (container) {
    const verb = DATA.conjugation.essential.find(v => v.verb === verbName);
    container.innerHTML = renderTenseTable(verb, tense);
  }
}

function renderTenseTable(verb, tense) {
  const conjugations = verb.tenses[tense];
  if (!conjugations) return '';
  const pronouns = Object.keys(conjugations);
  const tenseNames = {
    presente: 'Présent', preteritoPerfeito: 'Passé simple',
    preteritoImperfeito: 'Imparfait', futuro: 'Futur',
  };
  const exampleSentences = {
    ser: { presente: 'Eu sou português.', preteritoPerfeito: 'Eu fui a Lisboa.', preteritoImperfeito: 'Eu era jovem.', futuro: 'Eu serei médico.' },
    estar: { presente: 'Eu estou bem.', preteritoPerfeito: 'Eu estive em Paris.', preteritoImperfeito: 'Eu estava cansado.', futuro: 'Eu estarei lá.' },
    ter: { presente: 'Eu tenho um cão.', preteritoPerfeito: 'Eu tive uma ideia.', preteritoImperfeito: 'Eu tinha fome.', futuro: 'Eu terei tempo.' },
    ir: { presente: 'Eu vou ao mercado.', preteritoPerfeito: 'Eu fui ao cinema.', preteritoImperfeito: 'Eu ia à escola.', futuro: 'Eu irei a Portugal.' },
    fazer: { presente: 'Eu faço o jantar.', preteritoPerfeito: 'Eu fiz os trabalhos.', preteritoImperfeito: 'Eu fazia exercício.', futuro: 'Eu farei uma viagem.' },
    poder: { presente: 'Eu posso ajudar.', preteritoPerfeito: 'Eu pude vir.', preteritoImperfeito: 'Eu podia nadar.', futuro: 'Eu poderei participar.' },
    querer: { presente: 'Eu quero aprender.', preteritoPerfeito: 'Eu quis ficar.', preteritoImperfeito: 'Eu queria ser feliz.', futuro: 'Eu quererei viajar.' },
    dizer: { presente: 'Eu digo a verdade.', preteritoPerfeito: 'Eu disse tudo.', preteritoImperfeito: 'Eu dizia sempre.', futuro: 'Eu direi obrigado.' },
  };
  const example = exampleSentences[verb.verb]?.[tense] || '';
  return `
    <div class="conj-table">
      <table>
        <thead><tr><th>Pronom</th><th>${tenseNames[tense] || tense}</th></tr></thead>
        <tbody>
          ${pronouns.map(p => `
            <tr>
              <td class="conj-pronoun">${p}</td>
              <td class="conj-form">${conjugations[p]}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ${example ? `<div class="lesson-section-text" style="margin-top:16px">💬 Exemple : <em>${example}</em></div>` : ''}
  `;
}

// ============================
// PRONUNCIATION PAGE
// ============================
function renderPronunciation() {
  renderAlphabet();
  renderSpecialSounds();
  renderTraps();
  renderPracticePhrases();
}

function renderAlphabet() {
  const container = document.getElementById('alphabet-container');
  if (!container) return;
  container.innerHTML = `
    <div class="alphabet-grid">
      ${DATA.pronunciation.alphabet.map(l => `
        <div class="alphabet-card fade-in" onclick="speakLetter('${l.letter}', '${l.example}')">
          <span class="alphabet-letter">${l.letter}</span>
          <div class="alphabet-sound">${l.sound}</div>
          <div class="alphabet-example">${l.example}</div>
          <div style="font-size:0.72rem;color:var(--text-light)">${l.translation}</div>
        </div>
      `).join('')}
    </div>
  `;
  observeFadeIns();
}

function renderSpecialSounds() {
  const container = document.getElementById('special-sounds-container');
  if (!container) return;
  container.innerHTML = `
    <div class="special-sounds-grid">
      ${DATA.pronunciation.specialSounds.map(s => `
        <div class="special-sound-card fade-in">
          <div class="special-sound-name">${s.sound}</div>
          <div class="special-sound-desc">${s.description}</div>
          <span class="special-sound-example">${s.example}</span>
          <div class="special-sound-tip">💡 ${s.tip}</div>
        </div>
      `).join('')}
    </div>
  `;
  observeFadeIns();
}

function renderTraps() {
  const container = document.getElementById('traps-container');
  if (!container) return;
  container.innerHTML = DATA.pronunciation.traps.map(t => `
    <div class="trap-card fade-in">
      <div class="trap-emoji">${t.emoji}</div>
      <div class="trap-content">
        <h4>${t.trap}</h4>
        <p>${t.explanation}</p>
        <span class="trap-example">Ex: ${t.example}</span>
      </div>
    </div>
  `).join('');
  observeFadeIns();
}

function renderPracticePhrases() {
  const container = document.getElementById('practice-phrases-container');
  if (!container) return;
  const phrases = [
    { phrase: "A janela está aberta.", trans: "La fenêtre est ouverte.", note: "j=zh, nh=gn, st=sht (PT)" },
    { phrase: "O meu coração bate forte.", trans: "Mon cœur bat fort.", note: "Nasale 'ção', 'meu'=mew" },
    { phrase: "Quanto custa este pastel de nata?", trans: "Combien coûte ce pastel de nata ?", note: "c+u=k, s entre voyelles=z" },
    { phrase: "Tenho saudade de Portugal.", trans: "J'ai la nostalgie du Portugal.", note: "nh=gn, saudade = âme portugaise" },
    { phrase: "Bom dia! Como está a sua família?", trans: "Bonjour ! Comment va votre famille ?", note: "lh=ly, final 'ia' se réduit en PT-PT" },
  ];
  container.innerHTML = phrases.map(p => `
    <div style="background:var(--cream);border-radius:var(--radius);padding:14px 18px;border:1px solid rgba(26,58,92,0.06)">
      <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:8px">
        <div>
          <div style="font-family:'Playfair Display',serif;font-size:1.05rem;color:var(--blue);margin-bottom:4px">${p.phrase}</div>
          <div style="font-size:0.85rem;color:var(--text-mid);font-style:italic">${p.trans}</div>
          <div style="font-size:0.75rem;color:var(--green);margin-top:4px">💡 ${p.note}</div>
        </div>
        <button onclick="speakWord(this.dataset.phrase)" data-phrase="${p.phrase}"
          style="padding:8px 14px;background:var(--blue);color:white;border:none;border-radius:var(--radius);cursor:pointer;font-size:0.8rem;flex-shrink:0">
          🔊 Écouter
        </button>
      </div>
    </div>
  `).join('');
}

function speakLetter(_letter, example) {
  speakWord(example);
  showToast('info', '🔊 Prononciation', `"${example}" — Écoutez !`);
}

function speakWord(word, lang = 'pt-PT') {
  if (!window.speechSynthesis) {
    showToast('warning', '🔇 Audio indisponible', 'Votre navigateur ne supporte pas la synthèse vocale.');
    return;
  }
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = lang;
  utterance.rate = 0.75;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

// ============================
// QUIZ PAGE
// ============================
let activeQuiz = null;
let quizQuestions = [];
let quizCurrentIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let _dragPlaced = []; // for drag & drop questions

function startQuiz(mode) {
  document.getElementById('quiz-modes-section').style.display = 'none';
  document.getElementById('quiz-active').classList.add('show');
  document.getElementById('quiz-result').classList.remove('show');

  activeQuiz = mode;
  quizCurrentIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  quizQuestions = buildQuizQuestions(mode);
  updateStreak();
  renderQuizQuestion();
}

function buildQuizQuestions(mode) {
  let questions = [];

  if (mode === 'quick' || mode === 'daily') {
    DATA.lessons.forEach(l => {
      (l.quiz || []).filter(q => q.type === 'mcq').forEach(q => {
        questions.push({ ...q, lessonTitle: l.title });
      });
    });
    questions = shuffle(questions).slice(0, mode === 'daily' ? 5 : 10);
  } else if (mode === 'vocab') {
    DATA.vocabulary.categories.forEach(cat => {
      cat.words.forEach(w => {
        questions.push({
          type: 'mcq',
          question: `Que signifie "${w.pt}" ?`,
          options: buildVocabOptions(w, cat),
          correct: 0,
          explanation: `"${w.pt}" signifie "${w.fr}".`,
          lessonTitle: cat.name,
        });
      });
    });
    // Recompute correct index after shuffle
    questions = shuffle(questions).slice(0, 10).map(q => {
      if (q.type === 'mcq' && q.options) {
        const correctAnswer = q.explanation.match(/"([^"]+)"\.$/)?.[1];
        q.correct = q.options.indexOf(correctAnswer);
        if (q.correct === -1) q.correct = 0;
      }
      return q;
    });
  } else if (mode === 'conjugation') {
    DATA.conjugation.essential.forEach(v => {
      const pronouns = Object.keys(v.tenses.presente);
      const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
      questions.push({
        type: 'fill',
        question: `Conjuguez <strong>${v.verb}</strong> (${v.meaning}) au présent pour "<strong>${randomPronoun}</strong>"`,
        answer: v.tenses.presente[randomPronoun],
        lessonTitle: 'Conjugaison',
      });
    });
    questions = shuffle(questions).slice(0, 8);
  }

  return questions;
}

function buildVocabOptions(word, cat) {
  const otherWords = cat.words.filter(w => w.fr !== word.fr);
  const distractors = shuffle(otherWords).slice(0, 3).map(w => w.fr);
  return shuffle([word.fr, ...distractors]);
}

function renderQuizQuestion() {
  if (quizCurrentIndex >= quizQuestions.length) {
    showQuizResult();
    return;
  }

  const q = quizQuestions[quizCurrentIndex];
  quizAnswered = false;
  _dragPlaced = [];

  const pct = Math.round((quizCurrentIndex / quizQuestions.length) * 100);
  document.getElementById('quiz-progress-bar-fill').style.width = pct + '%';
  document.getElementById('quiz-progress-text').textContent = `${quizCurrentIndex + 1} / ${quizQuestions.length}`;

  const cardEl = document.getElementById('quiz-card-body');
  const typeLabels = {
    mcq:  { label: '📝 QCM',              bg: 'var(--blue-pale)',  color: 'var(--blue)' },
    fill: { label: '✏️ Compléter',        bg: 'var(--ochre-pale)', color: 'var(--ochre)' },
    drag: { label: '🔀 Remettre en ordre', bg: 'var(--green-pale)', color: 'var(--green)' },
  };
  const typeInfo = typeLabels[q.type] || typeLabels.mcq;

  // Bug 1a fix: single clean render per type
  if (q.type === 'mcq') {
    cardEl.innerHTML = `
      <span class="quiz-type-label" style="background:${typeInfo.bg};color:${typeInfo.color}">${typeInfo.label}</span>
      <div class="quiz-card-question">${q.question}</div>
      <div class="quiz-mcq-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-mcq-btn" onclick="answerMCQ(${i}, ${q.correct})">
            ${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback-banner" id="quiz-feedback"></div>
    `;
    document.getElementById('quiz-submit-btn').style.display = 'none';

  } else if (q.type === 'fill') {
    cardEl.innerHTML = `
      <span class="quiz-type-label" style="background:${typeInfo.bg};color:${typeInfo.color}">${typeInfo.label}</span>
      <div class="quiz-card-question">${q.question}</div>
      <input type="text" class="quiz-fill-input" id="quiz-fill-input" placeholder="Votre réponse..." autocomplete="off" />
      <div class="quiz-feedback-banner" id="quiz-feedback" style="margin-top:12px"></div>
    `;
    const input = document.getElementById('quiz-fill-input');
    input.focus();
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !quizAnswered) answerFill(q.answer);
    });
    const submitBtn = document.getElementById('quiz-submit-btn');
    submitBtn.style.display = 'block';
    submitBtn.onclick = () => answerFill(q.answer);

  } else if (q.type === 'drag') {
    // 2a: Drag & drop (click-to-place) question
    const words = shuffle(q.answer);
    cardEl.innerHTML = `
      <span class="quiz-type-label" style="background:${typeInfo.bg};color:${typeInfo.color}">${typeInfo.label}</span>
      <div class="quiz-card-question">${q.question}</div>
      <div class="drag-zone" id="drag-zone"><span class="drag-placeholder">Cliquez les mots dans le bon ordre...</span></div>
      <div class="drag-words" id="drag-words-pool">
        ${words.map((w, i) => `
          <button class="drag-word" data-index="${i}" onclick="placeDragWord(this, '${w.replace(/'/g,"\\'")}')">
            ${w}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback-banner" id="quiz-feedback" style="margin-top:12px"></div>
    `;
    const submitBtn = document.getElementById('quiz-submit-btn');
    submitBtn.style.display = 'block';
    submitBtn.onclick = () => answerDrag(q.answer);
  }

  document.getElementById('quiz-next-btn').classList.remove('show');
}

// 2a: Drag & drop — place a word
function placeDragWord(btn, word) {
  if (quizAnswered) return;
  btn.classList.add('used');
  _dragPlaced.push(word);

  const zone = document.getElementById('drag-zone');
  const placeholder = zone.querySelector('.drag-placeholder');
  if (placeholder) placeholder.remove();
  zone.classList.add('has-words');

  const placed = document.createElement('button');
  placed.className = 'drag-placed-word';
  placed.textContent = word;
  placed.onclick = () => {
    // Remove from placed
    _dragPlaced = _dragPlaced.filter((_, i) => i !== _dragPlaced.lastIndexOf(word) || (_dragPlaced.splice(_dragPlaced.lastIndexOf(word), 1), false));
    _dragPlaced = [...zone.querySelectorAll('.drag-placed-word')]
      .map(el => el.textContent).filter(t => t !== word);
    placed.remove();
    btn.classList.remove('used');
    if (zone.querySelectorAll('.drag-placed-word').length === 0) {
      zone.classList.remove('has-words');
      zone.innerHTML = '<span class="drag-placeholder">Cliquez les mots dans le bon ordre...</span>';
    }
    // Rebuild placed array from DOM
    _dragPlaced = [...zone.querySelectorAll('.drag-placed-word')].map(el => el.textContent.trim());
  };
  zone.appendChild(placed);
  _dragPlaced = [...zone.querySelectorAll('.drag-placed-word')].map(el => el.textContent.trim());
}

function answerDrag(correctAnswer) {
  if (quizAnswered) return;
  quizAnswered = true;
  const isCorrect = JSON.stringify(_dragPlaced) === JSON.stringify(correctAnswer);
  if (isCorrect) quizScore++;
  document.getElementById('quiz-submit-btn').disabled = true;
  showQuizFeedback(isCorrect,
    isCorrect ? '' : `Ordre correct : <strong>${correctAnswer.join(' ')}</strong>`
  );
}

function answerMCQ(chosen, correct) {
  if (quizAnswered) return;
  quizAnswered = true;
  const btns = document.querySelectorAll('.quiz-mcq-btn');
  btns.forEach((btn, i) => {
    btn.classList.add('answered');
    if (i === correct) btn.classList.add('correct-ans');
    else if (i === chosen) btn.classList.add('wrong-ans');
  });
  const isCorrect = chosen === correct;
  if (isCorrect) quizScore++;
  showQuizFeedback(isCorrect, quizQuestions[quizCurrentIndex]?.explanation || '');
}

function answerFill(answer) {
  if (quizAnswered) return;
  const input = document.getElementById('quiz-fill-input');
  if (!input) return;
  // Bug 1e fix: accent-insensitive
  const alternatives = (answer || '').split('/').map(a => normalize(a.trim()));
  const isCorrect = alternatives.some(alt => normalize(input.value) === alt);

  quizAnswered = true;
  input.classList.add(isCorrect ? 'correct' : 'wrong');
  input.disabled = true;
  document.getElementById('quiz-submit-btn').disabled = true;
  if (isCorrect) quizScore++;
  showQuizFeedback(isCorrect, isCorrect ? '' : `Réponse correcte : "<strong>${answer}</strong>"`);
}

function showQuizFeedback(isCorrect, explanation) {
  const fb = document.getElementById('quiz-feedback');
  if (!fb) return;
  fb.className = `quiz-feedback-banner show ${isCorrect ? 'success' : 'error'}`;
  fb.innerHTML = `
    <div class="quiz-feedback-icon">${isCorrect ? '🎉' : '📚'}</div>
    <div class="quiz-feedback-text">
      <h4 class="${isCorrect ? 'success-text' : 'error-text'}">${isCorrect ? 'Correto!' : 'Não exatamente...'}</h4>
      ${explanation ? `<p>${explanation}</p>` : ''}
    </div>
  `;
  document.getElementById('quiz-next-btn').classList.add('show');
}

function nextQuizQuestion() {
  quizCurrentIndex++;
  document.getElementById('quiz-submit-btn').disabled = false;
  renderQuizQuestion();
}

function showQuizResult() {
  document.getElementById('quiz-active').classList.remove('show');
  const result = document.getElementById('quiz-result');
  result.classList.add('show');

  const total = quizQuestions.length || 1;
  const pct = Math.round((quizScore / total) * 100);
  const xpEarned = quizScore * 10;
  addXP(xpEarned);
  STATE.quizzesCompleted++;
  if (pct === 100) STATE.perfectQuizzes++;
  checkBadges();
  saveState();

  const stars = pct === 100 ? '⭐⭐⭐' : pct >= 70 ? '⭐⭐' : '⭐';
  result.innerHTML = `
    <span class="quiz-result-emoji">${pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📚'}</span>
    <h2>${pct >= 80 ? 'Fantástico!' : pct >= 50 ? 'Bom trabalho!' : 'Continue a praticar!'}</h2>
    <div style="font-size:1.8rem;margin:8px 0">${stars}</div>
    <p style="color:var(--text-mid);margin-bottom:12px">${pct >= 80 ? 'Excellent résultat !' : 'Continuez à pratiquer, vous progressez !'}</p>
    <div class="quiz-result-score" style="color:${pct >= 80 ? 'var(--green)' : pct >= 50 ? 'var(--ochre)' : 'var(--red)'}">${quizScore}/${total}</div>
    <div style="font-size:1.1rem;color:var(--text-mid);margin-bottom:16px">${pct}% de réussite</div>
    <div class="quiz-result-xp">⭐ +${xpEarned} XP gagnés !</div>
    <br>
    <button class="btn-retry" onclick="startQuiz('${activeQuiz}')">🔄 Réessayer</button>
    <button class="btn-retry" style="background:var(--green)" onclick="backToQuizModes()">✅ Menu Quiz</button>
  `;

  if (pct === 100) triggerConfetti();
}

function backToQuizModes() {
  document.getElementById('quiz-result').classList.remove('show');
  document.getElementById('quiz-active').classList.remove('show');
  document.getElementById('quiz-modes-section').style.display = 'block';
  _resetQuizState();
}

// ============================
// PROGRESS PAGE
// ============================
function renderProgress() {
  renderProgressStats();
  renderWeeklyActivity();
  renderBadges();
  renderLevelTrack();
}

function renderProgressStats() {
  const learnedCount = Object.keys(STATE.learnedWords).filter(k => STATE.learnedWords[k] === 'mastered').length;
  document.getElementById('stat-xp').textContent = STATE.xp;
  document.getElementById('stat-streak').textContent = STATE.streak;
  document.getElementById('stat-words').textContent = learnedCount;
  document.getElementById('stat-lessons').textContent = STATE.completedLessons.length;
  document.getElementById('stat-quizzes').textContent = STATE.quizzesCompleted;
  document.getElementById('stat-level').textContent = 'Niveau ' + STATE.level;

  const xpInLevel = STATE.xp % 200;
  const levelPct = Math.round((xpInLevel / 200) * 100);
  document.getElementById('xp-progress-fill').style.width = levelPct + '%';
  document.getElementById('xp-progress-text').textContent = `${xpInLevel}/200 XP vers le niveau ${STATE.level + 1}`;

  // 2d: Show learning time
  const timeEl = document.getElementById('stat-time');
  if (timeEl) timeEl.textContent = formatTime(STATE.totalSeconds || 0);
}

function renderWeeklyActivity() {
  const container = document.getElementById('activity-bars-container');
  if (!container) return;
  const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const today = new Date().getDay();
  const maxVal = Math.max(...STATE.weekActivity, 1);
  container.innerHTML = STATE.weekActivity.map((val, i) => {
    const pct = Math.round((val / maxVal) * 100);
    const isToday = i === today;
    const isActive = val > 0;
    return `
      <div class="activity-bar-wrap">
        <div class="activity-bar ${isToday ? 'today' : isActive ? 'active' : ''}"
          style="height:${Math.max(pct, 8)}%" title="${val} activité(s)"></div>
        <span class="activity-bar-label">${days[i]}</span>
      </div>
    `;
  }).join('');
}

function renderBadges() {
  const container = document.getElementById('badges-container');
  if (!container) return;
  container.innerHTML = DATA.badges.map(b => {
    const earned = STATE.earnedBadges.includes(b.id);
    return `
      <div class="badge-card ${earned ? 'earned' : 'locked'}" title="${b.description}">
        <span class="badge-icon">${b.icon}</span>
        <div class="badge-name">${b.name}</div>
        <div class="badge-desc">${b.description}</div>
        ${earned ? '<span class="badge-earned-label">✓ Obtenu</span>' : ''}
      </div>
    `;
  }).join('');
}

function renderLevelTrack() {
  const container = document.getElementById('level-track-container');
  if (!container) return;
  const levels = ['A1', 'A2', 'B1', 'B2'];

  const a1Count = STATE.completedLessons.filter(id => id.startsWith('a1-')).length;

  let ci = 0;
  if (a1Count >= 8) ci = 2;
  else if (a1Count >= 4) ci = 1;

  let html = '<div class="level-track">';
  levels.forEach((lvl, i) => {
    const status = i < ci ? 'node-done' : i === ci ? 'node-current' : 'node-locked';
    html += `<div class="level-track-node ${status}" title="Niveau ${lvl}" onclick="navigate('lessons')">
      ${lvl}
      <span class="level-node-label">${getLevelTitle(lvl)}</span>
    </div>`;
    if (i < levels.length - 1) {
      const lineStatus = i < ci ? 'line-done' : i === ci ? 'line-partial' : 'line-locked';
      html += `<div class="level-track-line ${lineStatus}"></div>`;
    }
  });
  html += '</div>';
  container.innerHTML = html;
}

// ============================
// BADGES
// ============================
function checkBadges() {
  const learnedCount = Object.keys(STATE.learnedWords).filter(k => STATE.learnedWords[k] === 'mastered').length;
  const a1Lessons = DATA.lessons.filter(l => l.level === 'A1');
  const voyageWords = Object.keys(STATE.learnedWords).filter(k => k.startsWith('voyage_') && STATE.learnedWords[k] === 'mastered').length;
  const voyageCat = DATA.vocabulary.categories.find(c => c.id === 'voyage');
  const voyageTotal = voyageCat ? voyageCat.words.length : 12;

  // Check if active all 7 days this week
  const activeAllWeek = STATE.weekActivity.every(v => v > 0);

  const badgeConditions = {
    first_word:       learnedCount >= 1,
    ten_words:        learnedCount >= 10,
    fifty_words:      learnedCount >= 50,
    hundred_words:    learnedCount >= 100,
    polyglotte:       learnedCount >= 200,
    first_lesson:     STATE.completedLessons.length >= 1,
    five_lessons:     STATE.completedLessons.length >= 5,
    all_a1:           a1Lessons.every(l => STATE.completedLessons.includes(l.id)),
    streak_3:         STATE.streak >= 3,
    streak_7:         STATE.streak >= 7,
    streak_30:        STATE.streak >= 30,
    first_quiz:       STATE.quizzesCompleted >= 1,
    perfect_quiz:     STATE.perfectQuizzes >= 1,
    quiz_master_5:    STATE.perfectQuizzes >= 5,
    ser_estar:        STATE.completedLessons.includes('a1-7'),
    culturalist:      STATE.culturalFactsSeen >= 5,
    early_bird:       new Date().getHours() < 8,
    night_owl:        new Date().getHours() >= 22,
    vocab_traveller:  voyageCat && voyageWords >= voyageTotal,
    week_warrior:     activeAllWeek,
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
      if (badge) setTimeout(() => showToast('success', `🏅 Badge débloqué !`, `${badge.icon} ${badge.name}`), 500);
    });
    saveState();
  }
}

// ============================
// TOAST NOTIFICATIONS
// ============================
function showToast(type, title, message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: '💡' };
  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || '💬'}</div>
    <div class="toast-content">
      <h4>${title}</h4>
      ${message ? `<p>${message}</p>` : ''}
    </div>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('show')));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ============================
// CONFETTI
// ============================
function triggerConfetti() {
  const container = document.getElementById('confetti-container');
  const colors = ['#E8A838', '#1A3A5C', '#4A7C59', '#C84B31', '#FAF7F2', '#F5C96A'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left:${Math.random() * 100}%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      width:${6 + Math.random() * 10}px;height:${6 + Math.random() * 10}px;
      border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration:${1.5 + Math.random() * 2}s;
      animation-delay:${Math.random() * 0.5}s;
    `;
    container.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}

// ============================
// LEVEL UP MODAL
// ============================
function showLevelUpModal(level) {
  const modal = document.getElementById('xp-level-modal');
  const content = document.getElementById('xp-level-content');
  content.innerHTML = `
    <span class="xp-level-emoji">🎊</span>
    <h2 style="color:var(--blue);margin-bottom:8px">Niveau ${level} !</h2>
    <p style="color:var(--text-mid);margin-bottom:24px">Parabéns ! Você subiu de nível !<br>Continuez comme ça !</p>
    <div style="background:var(--ochre-pale);padding:12px 24px;border-radius:20px;display:inline-block;color:var(--ochre);font-weight:700">
      ⭐ Niveau ${level} atteint
    </div><br><br>
    <button onclick="document.getElementById('xp-level-modal').classList.remove('show')"
      style="padding:12px 32px;background:var(--blue);color:white;border-radius:50px;font-weight:700;border:none;cursor:pointer;font-size:0.95rem">
      Continuer ! →
    </button>
  `;
  modal.classList.add('show');
  triggerConfetti();
}

// ============================
// LOADING SCREEN
// ============================
function hideLoadingScreen() {
  setTimeout(() => {
    const screen = document.getElementById('loading-screen');
    if (!screen) return;
    screen.classList.add('fade-out');
    setTimeout(() => screen.remove(), 600);
  }, 1200);
}

// ============================
// EXPORT / IMPORT
// ============================
function exportProgress() {
  const data = JSON.stringify(STATE, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'portufacil-progression.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('success', '📦 Export réussi', 'Votre progression a été exportée !');
}

function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      STATE = { ...DEFAULT_STATE, ...data };
      saveState();
      showToast('success', '✅ Import réussi', 'Votre progression a été restaurée !');
      navigate('progress');
    } catch {
      showToast('error', '❌ Erreur', 'Fichier invalide.');
    }
  };
  reader.readAsText(file);
}

// ============================
// INIT
// ============================
document.addEventListener('DOMContentLoaded', () => {
  loadState();

  if (STATE.theme === 'dark') {
    document.documentElement.dataset.theme = 'dark';
    const btn = document.getElementById('btn-theme');
    if (btn) btn.textContent = '☀️';
  }

  initNav();
  initHome();
  navigate('home');
  hideLoadingScreen();

  document.getElementById('quiz-next-btn')?.addEventListener('click', nextQuizQuestion);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('xp-level-modal')?.classList.remove('show');
      document.getElementById('nav-links')?.classList.remove('open');
    }
  });
});
