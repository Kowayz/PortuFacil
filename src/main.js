import './styles/index.css';
import { STATE, DEFAULT_STATE, loadState, saveState, setStateFrom, _cb } from './core/state.js';
import { navigate, registerPageRenderer, registerNavActiveCallback } from './core/router.js';

import { initNav, updateNavActive, updateNavXP, updateNavStreak, toggleTheme } from './components/nav.js';
import { showToast } from './components/toast.js';
import { showLevelUpModal, hideLoadingScreen } from './components/modal.js';

import { renderProgress, filterBadges } from './pages/progress.js';
import { checkBadges } from './utils/badges.js';
import { initHome, trackCulturalFact, renderSRSWidget } from './pages/home.js';
import {
  renderLessons, openLesson, closeLesson,
  answerLessonMCQ, checkLessonTranslate, nextLessonQuestion, resetLessonQuiz, completeLesson,
  startConv, answerConvLine, playSingleLine, nextLessonSection,
  answerWarmup, skipWarmup,
  answerMatchPt, answerMatchFr,
  clickOrderWord, removeLastOrderWord, checkOrderAnswer,
  openCheckpoint, openQuickReview,
  playListenQuestion, toggleListenHint, toggleImmersionMode,
  openBoss,
} from './pages/lessons.js';
import {
  renderVocabulary, selectVocabCategory, handleFlipCard, filterVocabCards,
} from './pages/vocabulary.js';
import { renderConjugation, searchVerb, showVerbConjugation, switchTense } from './pages/conjugation.js';
import { renderPronunciation } from './pages/pronunciation.js';
import { renderGrammar } from './pages/grammar.js';
import { startPlacementTest, answerPlacement, skipPlacementTest } from './pages/placement.js';
import { startSRSSession, revealSRSCard, answerSRS, adjustDailyGoal } from './pages/progress.js';
import { startGrammarPractice, answerGrammarExercise } from './pages/grammar.js';
import {
  startQuiz, placeDragWord, answerDrag, answerMCQ, answerFill,
  nextQuizQuestion, backToQuizModes, _resetQuizState, handleMatchClick,
} from './pages/quiz/index.js';
import { speakWord, speakLetter, getTTSSpeed, setTTSSpeed } from './utils/speech.js';
import { openDictModal, closeDictModal } from './components/dictModal.js';

// ── Wire _cb callbacks (breaks circular deps in state.js) ─────────────────────
_cb.updateNavXP      = updateNavXP;
_cb.updateNavStreak  = updateNavStreak;
_cb.showLevelUpModal = showLevelUpModal;
_cb.checkBadges      = checkBadges;
_cb.showToast        = showToast;

// ── Register nav active callback ──────────────────────────────────────────────
registerNavActiveCallback(updateNavActive);

// ── Register page renderers (breaks circular deps in router.js) ───────────────
registerPageRenderer('lessons',       renderLessons);
registerPageRenderer('vocabulary',    renderVocabulary);
registerPageRenderer('conjugation',   renderConjugation);
registerPageRenderer('pronunciation', renderPronunciation);
registerPageRenderer('grammar',       renderGrammar);
registerPageRenderer('progress',      renderProgress);
registerPageRenderer('_resetQuizState', _resetQuizState);

// ── Progress export / import (need both STATE + showToast + navigate) ─────────
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
      setStateFrom(data);
      saveState();
      showToast('success', '✅ Import réussi', 'Votre progression a été restaurée !');
      navigate('progress');
    } catch {
      showToast('error', '❌ Erreur', 'Fichier invalide.');
    }
  };
  reader.readAsText(file);
}

// ── Expose globals for inline onclick handlers in HTML ────────────────────────
Object.assign(window, {
  navigate,
  openLesson, closeLesson, answerLessonMCQ, checkLessonTranslate,
  nextLessonQuestion, resetLessonQuiz, completeLesson, startConv, answerConvLine, playSingleLine, nextLessonSection,
  answerWarmup, skipWarmup,
  answerMatchPt, answerMatchFr,
  clickOrderWord, removeLastOrderWord, checkOrderAnswer,
  openCheckpoint, openQuickReview,
  selectVocabCategory, handleFlipCard, filterVocabCards,
  searchVerb, showVerbConjugation, switchTense,
  startQuiz, placeDragWord, answerDrag, answerMCQ, answerFill,
  handleMatchClick, backToQuizModes, trackCulturalFact, renderSRSWidget,
  speakWord, speakLetter, getTTSSpeed, setTTSSpeed, toggleTheme,
  exportProgress, importProgress, filterBadges,
  answerPlacement, skipPlacementTest,
  openDictModal, closeDictModal,
  playListenQuestion, toggleListenHint, toggleImmersionMode,
  openBoss,
  startSRSSession, revealSRSCard, answerSRS, adjustDailyGoal,
  startGrammarPractice, answerGrammarExercise,
});

// ── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();

  if (STATE.theme === 'dark') {
    document.documentElement.dataset.theme = 'dark';
    ['btn-theme', 'btn-theme-mob'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.textContent = '☀️';
    });
  }

  initNav();
  initHome();

  // Returning users go straight to their dashboard; new users see the landing page
  const hasStarted = STATE.completedLessons.length > 0 || Object.keys(STATE.learnedWords).length > 0;
  navigate(hasStarted ? 'progress' : 'home');
  hideLoadingScreen();

  if (!STATE.placementDone && !hasStarted) {
    setTimeout(startPlacementTest, 800);
  }

  document.getElementById('quiz-next-btn')?.addEventListener('click', nextQuizQuestion);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('xp-level-modal')?.classList.remove('show');
      document.getElementById('dict-modal')?.classList.remove('show');
      document.getElementById('nav-links')?.classList.remove('open');
    }
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
});
