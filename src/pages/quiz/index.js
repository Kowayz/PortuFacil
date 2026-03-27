import { qs } from './_state.js';
import { buildQuizQuestions } from './build.js';
import { renderQuizQuestion } from './render.js';

import { STATE, saveState, addXP, updateStreak, recordError } from '../../core/state.js';
import { showToast } from '../../components/toast.js';
import { normalize } from '../../utils/text.js';
import { triggerConfetti } from '../../components/confetti.js';
import { checkBadges } from '../../utils/badges.js';
import { updateAfterReview, getStatus } from '../../utils/srs.js';

export function startQuiz(mode) {
  document.getElementById('quiz-modes-section').style.display = 'none';
  document.getElementById('quiz-active').classList.add('show');
  document.getElementById('quiz-result').classList.remove('show');

  qs.active = mode;
  qs.currentIndex = 0;
  qs.score = 0;
  qs.answered = false;

  qs.questions = buildQuizQuestions(mode);
  if (!qs.questions.length) {
    document.getElementById('quiz-active').classList.remove('show');
    document.getElementById('quiz-modes-section').style.display = 'block';
    showToast('info', 'Aucune question', 'Aucun mot disponible pour ce mode.');
    return;
  }
  updateStreak();
  renderQuizQuestion();
}

export function placeDragWord(btn, word) {
  if (qs.answered) return;
  btn.classList.add('used');
  qs.dragPlaced.push(word);

  const zone = document.getElementById('drag-zone');
  const placeholder = zone.querySelector('.drag-placeholder');
  if (placeholder) placeholder.remove();
  zone.classList.add('has-words');

  const placed = document.createElement('button');
  placed.className = 'drag-placed-word';
  placed.textContent = word;
  placed.onclick = () => {
    placed.remove();
    btn.classList.remove('used');
    if (zone.querySelectorAll('.drag-placed-word').length === 0) {
      zone.classList.remove('has-words');
      zone.innerHTML = '<span class="drag-placeholder">Cliquez les mots dans le bon ordre...</span>';
    }
    qs.dragPlaced = [...zone.querySelectorAll('.drag-placed-word')].map(el => el.textContent.trim());
  };
  zone.appendChild(placed);
  qs.dragPlaced = [...zone.querySelectorAll('.drag-placed-word')].map(el => el.textContent.trim());
}

export function answerDrag(correctAnswer) {
  if (qs.answered) return;
  qs.answered = true;
  const isCorrect = JSON.stringify(qs.dragPlaced) === JSON.stringify(correctAnswer);
  if (isCorrect) qs.score++;
  else if (qs.currentKey) recordError(qs.currentKey, 'drag');
  document.getElementById('quiz-submit-btn').disabled = true;
  showQuizFeedback(isCorrect, isCorrect ? '' : `Ordre correct : <strong>${correctAnswer.join(' ')}</strong>`);
}

export function answerMCQ(chosen, correct) {
  if (qs.answered) return;
  qs.answered = true;
  const btns = document.querySelectorAll('.quiz-mcq-btn');
  btns.forEach((btn, i) => {
    btn.classList.add('answered');
    if (i === correct) btn.classList.add('correct-ans');
    else if (i === chosen) btn.classList.add('wrong-ans');
  });
  const isCorrect = chosen === correct;
  if (isCorrect) qs.score++;
  else if (qs.currentKey) recordError(qs.currentKey, 'mcq');

  const q = qs.questions[qs.currentIndex];
  if (q._srs && qs.currentKey) {
    const entry = STATE.learnedWords[qs.currentKey];
    STATE.learnedWords[qs.currentKey] = updateAfterReview(entry, isCorrect);
    saveState();
  }
  showQuizFeedback(isCorrect, q?.explanation || '');
}

export function answerFill(answer) {
  if (qs.answered) return;
  const input = document.getElementById('quiz-fill-input');
  if (!input) return;
  const alternatives = (answer || '').split('/').map(a => normalize(a.trim()));
  const isCorrect = alternatives.some(alt => normalize(input.value) === alt);

  qs.answered = true;
  input.classList.add(isCorrect ? 'correct' : 'wrong');
  input.disabled = true;
  document.getElementById('quiz-submit-btn').disabled = true;
  if (isCorrect) qs.score++;
  else if (qs.currentKey) recordError(qs.currentKey, 'fill');

  const q = qs.questions[qs.currentIndex];
  if (q._srs && qs.currentKey) {
    const entry = STATE.learnedWords[qs.currentKey];
    STATE.learnedWords[qs.currentKey] = updateAfterReview(entry, isCorrect);
    saveState();
  }
  // On correct fill/cloze, promote word to mastered (Axe 5)
  if (isCorrect && qs.currentKey && STATE.learnedWords[qs.currentKey]) {
    const entry = STATE.learnedWords[qs.currentKey];
    if (getStatus(entry) === 'learning') {
      STATE.learnedWords[qs.currentKey] = updateAfterReview(entry, true);
      saveState();
    }
  }
  showQuizFeedback(isCorrect, isCorrect ? '' : `Réponse correcte : "<strong>${answer}</strong>"`);
}

export function handleMatchClick(btn, side) {
  if (qs.answered) return;
  const q = qs.questions[qs.currentIndex];
  const cardEl = document.getElementById('quiz-card-body');

  if (!qs.matchSelected) {
    document.querySelectorAll('.match-btn.selected').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    qs.matchSelected = { btn, side, val: btn.dataset.val };
    return;
  }

  if (qs.matchSelected.side === side) {
    document.querySelectorAll('.match-btn.selected').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    qs.matchSelected = { btn, side, val: btn.dataset.val };
    return;
  }

  const leftVal  = side === 'left'  ? btn.dataset.val : qs.matchSelected.val;
  const rightVal = side === 'right' ? btn.dataset.val : qs.matchSelected.val;
  const leftBtn  = side === 'left'  ? btn : qs.matchSelected.btn;
  const rightBtn = side === 'right' ? btn : qs.matchSelected.btn;

  const pairs = cardEl._matchPairs || q.pairs;
  const isCorrect = pairs.some(p => p[0] === leftVal && p[1] === rightVal);

  if (isCorrect) {
    leftBtn.classList.remove('selected');
    leftBtn.classList.add('match-correct');
    leftBtn.disabled = true;
    rightBtn.classList.add('match-correct');
    rightBtn.disabled = true;
    qs.matchCorrect.push(leftVal);
    qs.matchSelected = null;

    if (qs.matchCorrect.length === pairs.length) {
      qs.score++;
      qs.answered = true;
      showQuizFeedback(true, '');
    }
  } else {
    leftBtn.classList.add('match-wrong');
    rightBtn.classList.add('match-wrong');
    setTimeout(() => {
      leftBtn.classList.remove('match-wrong', 'selected');
      rightBtn.classList.remove('match-wrong', 'selected');
    }, 600);
    qs.matchSelected = null;
    if (qs.currentKey) recordError(qs.currentKey, 'match');
  }
}

export function nextQuizQuestion() {
  qs.currentIndex++;
  document.getElementById('quiz-submit-btn').disabled = false;
  if (qs.currentIndex >= qs.questions.length) {
    showQuizResult();
  } else {
    renderQuizQuestion();
  }
}

export function backToQuizModes() {
  document.getElementById('quiz-result').classList.remove('show');
  document.getElementById('quiz-active').classList.remove('show');
  document.getElementById('quiz-modes-section').style.display = 'block';
  _resetQuizState();
}

export function _resetQuizState() {
  qs.currentIndex = 0;
  qs.score = 0;
  qs.answered = false;
  qs.questions = [];
  qs.active = null;
  qs.currentKey = null;
  qs.matchSelected = null;
  qs.matchCorrect = [];
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

function showQuizResult() {
  document.getElementById('quiz-active').classList.remove('show');
  const result = document.getElementById('quiz-result');
  result.classList.add('show');

  const total = qs.questions.length || 1;
  const pct = Math.round((qs.score / total) * 100);
  const xpEarned = qs.score * 10;
  addXP(xpEarned);
  STATE.quizzesCompleted++;
  if (pct === 100) STATE.perfectQuizzes++;

  if (qs.active === 'daily') {
    const today = new Date().toISOString().slice(0, 10);
    if (STATE.lastDailyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      STATE.dailyStreak = (STATE.dailyHistory || []).includes(yesterday)
        ? (STATE.dailyStreak || 0) + 1 : 1;
      STATE.dailyHistory = [...(STATE.dailyHistory || []).slice(-6), today];
      STATE.lastDailyDate = today;
      STATE.xp = (STATE.xp || 0) + 30;
      saveState();
      showToast('success', '🎯 Défi quotidien !', `+30 XP bonus ! Série : ${STATE.dailyStreak} jour${STATE.dailyStreak > 1 ? 's' : ''}`);
    }
  }

  checkBadges();
  saveState();

  const stars = pct === 100 ? '⭐⭐⭐' : pct >= 70 ? '⭐⭐' : '⭐';
  result.innerHTML = `
    <span class="quiz-result-emoji">${pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📚'}</span>
    <h2>${pct >= 80 ? 'Fantástico!' : pct >= 50 ? 'Bom trabalho!' : 'Continue a praticar!'}</h2>
    <div style="font-size:1.8rem;margin:8px 0">${stars}</div>
    <p style="color:var(--text-mid);margin-bottom:12px">${pct >= 80 ? 'Excellent résultat !' : 'Continuez à pratiquer, vous progressez !'}</p>
    <div class="quiz-result-score" style="color:${pct >= 80 ? 'var(--green)' : pct >= 50 ? 'var(--ochre)' : 'var(--red)'}">${qs.score}/${total}</div>
    <div style="font-size:1.1rem;color:var(--text-mid);margin-bottom:16px">${pct}% de réussite</div>
    <div class="quiz-result-xp">⭐ +${xpEarned} XP gagnés !</div>
    <br>
    <button class="btn-retry" onclick="startQuiz('${qs.active}')">🔄 Réessayer</button>
    <button class="btn-retry" style="background:var(--green)" onclick="backToQuizModes()">✅ Menu Quiz</button>
  `;

  if (pct === 100) triggerConfetti();
}
