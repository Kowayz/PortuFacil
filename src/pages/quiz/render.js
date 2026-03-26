import { qs } from './_state.js';

const TYPE_LABELS = {
  mcq:       { label: '📝 QCM',               bg: 'var(--blue-pale)',  color: 'var(--blue)' },
  fill:      { label: '✏️ Compléter',         bg: 'var(--ochre-pale)', color: 'var(--ochre)' },
  drag:      { label: '🔀 Remettre en ordre', bg: 'var(--green-pale)', color: 'var(--green)' },
  cloze:     { label: '📝 Lacune',            bg: 'var(--blue-pale)',  color: 'var(--blue)' },
  match:     { label: '🔗 Appariement',       bg: 'var(--green-pale)', color: 'var(--green)' },
  dictation: { label: '🎤 Dictée',            bg: 'var(--red-pale)',   color: 'var(--red)' },
  dialogue:  { label: '💬 Dialogue',          bg: 'var(--ochre-pale)', color: 'var(--ochre)' },
  conjugate: { label: '🔤 Conjugaison',       bg: 'var(--blue-pale)',  color: 'var(--blue)' },
};

export function renderQuizQuestion() {
  const q = qs.questions[qs.currentIndex];
  qs.answered = false;
  qs.dragPlaced = [];
  qs.currentKey = q._wordKey || null;
  qs.matchSelected = null;
  qs.matchCorrect = [];

  const pct = Math.round((qs.currentIndex / qs.questions.length) * 100);
  document.getElementById('quiz-progress-bar-fill').style.width = pct + '%';
  document.getElementById('quiz-progress-text').textContent = `${qs.currentIndex + 1} / ${qs.questions.length}`;

  const cardEl = document.getElementById('quiz-card-body');
  const typeInfo = TYPE_LABELS[q.type] || TYPE_LABELS.mcq;

  document.getElementById('quiz-submit-btn').style.display = 'none';
  document.getElementById('quiz-next-btn').classList.remove('show');

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

  } else if (q.type === 'fill' || q.type === 'conjugate') {
    cardEl.innerHTML = `
      <span class="quiz-type-label" style="background:${typeInfo.bg};color:${typeInfo.color}">${typeInfo.label}</span>
      <div class="quiz-card-question">${q.question}</div>
      <input type="text" class="quiz-fill-input" id="quiz-fill-input" placeholder="Votre réponse..." autocomplete="off" />
      <div class="quiz-feedback-banner" id="quiz-feedback" style="margin-top:12px"></div>
    `;
    const input = document.getElementById('quiz-fill-input');
    input.focus();
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !qs.answered) window.answerFill(q.answer);
    });
    const submitBtn = document.getElementById('quiz-submit-btn');
    submitBtn.style.display = 'block';
    submitBtn.onclick = () => window.answerFill(q.answer);

  } else if (q.type === 'cloze') {
    const parts = q.sentence.split('___');
    cardEl.innerHTML = `
      <span class="quiz-type-label" style="background:${typeInfo.bg};color:${typeInfo.color}">${typeInfo.label}</span>
      <div class="quiz-card-question">${q.question || 'Complétez la phrase :'}</div>
      <div class="cloze-sentence">
        ${parts[0]}<input type="text" class="cloze-input" id="quiz-fill-input" placeholder="..." autocomplete="off" />${parts[1] || ''}
      </div>
      ${q.hint ? `<div class="cloze-hint">💡 Indice : ${q.hint}</div>` : ''}
      <div class="quiz-feedback-banner" id="quiz-feedback" style="margin-top:12px"></div>
    `;
    const input = document.getElementById('quiz-fill-input');
    input.focus();
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !qs.answered) window.answerFill(q.answer);
    });
    const submitBtn = document.getElementById('quiz-submit-btn');
    submitBtn.style.display = 'block';
    submitBtn.onclick = () => window.answerFill(q.answer);

  } else if (q.type === 'drag') {
    const words = shuffle([...q.answer]);
    cardEl.innerHTML = `
      <span class="quiz-type-label" style="background:${typeInfo.bg};color:${typeInfo.color}">${typeInfo.label}</span>
      <div class="quiz-card-question">${q.question}</div>
      <div class="drag-zone" id="drag-zone"><span class="drag-placeholder">Cliquez les mots dans le bon ordre...</span></div>
      <div class="drag-words" id="drag-words-pool">
        ${words.map((w, i) => `
          <button class="drag-word" data-index="${i}" onclick="placeDragWord(this, '${w.replace(/'/g, "\\'")}')">
            ${w}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback-banner" id="quiz-feedback" style="margin-top:12px"></div>
    `;
    const submitBtn = document.getElementById('quiz-submit-btn');
    submitBtn.style.display = 'block';
    submitBtn.onclick = () => window.answerDrag(q.answer);

  } else if (q.type === 'match') {
    renderMatchQuestion(q, cardEl, typeInfo);

  } else if (q.type === 'dictation') {
    cardEl.innerHTML = `
      <span class="quiz-type-label" style="background:${typeInfo.bg};color:${typeInfo.color}">${typeInfo.label}</span>
      <div class="quiz-card-question">Écoutez et écrivez ce que vous entendez :</div>
      <div style="text-align:center;margin:16px 0">
        <button class="btn-dictation-play" onclick="speakWord('${q.word.replace(/'/g, "\\'")}')">🔊 Écouter</button>
      </div>
      <input type="text" class="quiz-fill-input" id="quiz-fill-input" placeholder="Écrivez le mot..." autocomplete="off" />
      <div class="quiz-feedback-banner" id="quiz-feedback" style="margin-top:12px"></div>
    `;
    setTimeout(() => window.speakWord && window.speakWord(q.word), 400);
    const input = document.getElementById('quiz-fill-input');
    input.focus();
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !qs.answered) window.answerFill(q.word);
    });
    const submitBtn = document.getElementById('quiz-submit-btn');
    submitBtn.style.display = 'block';
    submitBtn.onclick = () => window.answerFill(q.word);

  } else if (q.type === 'dialogue') {
    cardEl.innerHTML = `
      <span class="quiz-type-label" style="background:${typeInfo.bg};color:${typeInfo.color}">${typeInfo.label}</span>
      ${q.context ? `<div class="dialogue-context">📍 ${q.context}</div>` : ''}
      <div class="dialogue-bubble npc">
        <span class="dialogue-speaker">👤</span>
        <div class="dialogue-text">${q.npc}</div>
      </div>
      <div class="quiz-card-question" style="margin-top:16px">Quelle est la bonne réponse ?</div>
      <div class="quiz-mcq-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-mcq-btn" onclick="answerMCQ(${i}, ${q.correct})">
            ${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback-banner" id="quiz-feedback"></div>
    `;
  }
}

export function renderMatchQuestion(q, cardEl, typeInfo) {
  const shuffledPairs = shuffle([...q.pairs]);
  const lefts = shuffledPairs.map(p => p[0]);
  const rights = shuffle(shuffledPairs.map(p => p[1]));

  cardEl.innerHTML = `
    <span class="quiz-type-label" style="background:${typeInfo.bg};color:${typeInfo.color}">${typeInfo.label}</span>
    <div class="quiz-card-question">Reliez chaque mot portugais à sa traduction :</div>
    <div class="match-grid">
      <div class="match-col" id="match-col-left">
        ${lefts.map((w, i) => `
          <button class="match-btn match-left" data-idx="${i}" data-val="${w}" onclick="handleMatchClick(this,'left')">
            ${w}
          </button>
        `).join('')}
      </div>
      <div class="match-col" id="match-col-right">
        ${rights.map((w, i) => `
          <button class="match-btn match-right" data-idx="${i}" data-val="${w}" onclick="handleMatchClick(this,'right')">
            ${w}
          </button>
        `).join('')}
      </div>
    </div>
    <div class="quiz-feedback-banner" id="quiz-feedback" style="margin-top:12px"></div>
  `;
  cardEl._matchPairs = shuffledPairs;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
