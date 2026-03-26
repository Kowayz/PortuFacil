import { STATE, saveState } from './state.js';

let currentPage = 'home';
let _pageStartTime = Date.now();

// Registry populated by main.js — avoids circular imports with page modules.
const _pageRenderers = {};

export function registerPageRenderer(name, fn) {
  _pageRenderers[name] = fn;
}

export function navigate(page) {
  // Track time spent on previous page
  const elapsed = Math.floor((Date.now() - _pageStartTime) / 1000);
  if (elapsed > 5 && elapsed < 3600) {
    STATE.totalSeconds = (STATE.totalSeconds || 0) + elapsed;
    saveState();
  }
  _pageStartTime = Date.now();

  // Silently reset any in-progress quiz when navigating away
  if (currentPage === 'quiz' && _pageRenderers._resetQuizState) {
    _pageRenderers._resetQuizState();
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.s-link, .bn-link').forEach(l => l.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  document.querySelectorAll(`.s-link[data-page="${page}"], .bn-link[data-page="${page}"]`).forEach(l => l.classList.add('active'));
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (_pageRenderers[page]) _pageRenderers[page]();

  if (page === 'quiz') {
    document.getElementById('quiz-modes-section').style.display = 'block';
    document.getElementById('quiz-active')?.classList.remove('show');
    document.getElementById('quiz-result')?.classList.remove('show');
    const streakEl = document.getElementById('quiz-streak-display');
    if (streakEl) streakEl.textContent = STATE.streak || 0;
  }
}
