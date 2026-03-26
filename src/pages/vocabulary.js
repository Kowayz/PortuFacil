import { STATE, saveState, addXP, updateStreak } from '../core/state.js';
import { DATA } from '../data/index.js';
import { shuffle } from '../utils/text.js';
import { showToast } from '../components/toast.js';
import { checkBadges } from '../utils/badges.js';
import { getStatus, isDueToday, migrateEntry } from '../utils/srs.js';

let currentCategory = null;
let vocabFilter = 'all';
let vocabDisplayOrders = {};

export function renderVocabulary() {
  const container = document.getElementById('vocab-categories');
  if (!container) return;

  container.innerHTML = DATA.vocabulary.categories.map(cat => {
    const learnedCount = Object.keys(STATE.learnedWords).filter(k =>
      k.startsWith(cat.id + '_') && getStatus(STATE.learnedWords[k]) === 'mastered'
    ).length;
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
      const cat = DATA.vocabulary.categories.find(c => c.id === currentCategory);
      if (!cat) return;
      vocabDisplayOrders[currentCategory] = shuffle(cat.words.map((_, i) => i));
      renderFlipCards(currentCategory);
    });
    shuffleBtn.dataset.bound = 'true';
  }
}

export function selectVocabCategory(catId) {
  currentCategory = catId;
  document.querySelectorAll('.vocab-category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick')?.includes(`'${catId}'`));
  });
  renderFlipCards(catId);
}

export function renderFlipCards(catId) {
  const cat = DATA.vocabulary.categories.find(c => c.id === catId);
  if (!cat) return;

  let words = vocabDisplayOrders[catId]
    ? vocabDisplayOrders[catId].map(i => cat.words[i])
    : [...cat.words];

  const search = (document.getElementById('vocab-search')?.value || '').toLowerCase();
  if (search) {
    words = words.filter(w => w.pt.toLowerCase().includes(search) || w.fr.toLowerCase().includes(search));
  }

  if (vocabFilter === 'learned') {
    words = words.filter(w => getStatus(STATE.learnedWords[catId + '_' + w.pt]) === 'mastered');
  } else if (vocabFilter === 'review') {
    words = words.filter(w => {
      const s = getStatus(STATE.learnedWords[catId + '_' + w.pt]);
      return s === 'new' || s === 'learning';
    });
  } else if (vocabFilter === 'hard') {
    words = words.filter(w => {
      const key = catId + '_' + w.pt;
      return STATE.errors[key] && STATE.errors[key].count >= 2;
    });
  } else if (vocabFilter === 'srs') {
    words = words.filter(w => {
      const key = catId + '_' + w.pt;
      return isDueToday(STATE.learnedWords[key]);
    });
  }

  const container = document.getElementById('flip-cards-container');
  if (!container) return;

  const allMastered = cat.words.filter(w => getStatus(STATE.learnedWords[catId + '_' + w.pt]) === 'mastered').length;
  const allLearning = cat.words.filter(w => getStatus(STATE.learnedWords[catId + '_' + w.pt]) === 'learning').length;
  const dueCount = cat.words.filter(w => isDueToday(STATE.learnedWords[catId + '_' + w.pt])).length;
  const statsBar = document.getElementById('vocab-stats-bar');
  if (statsBar) {
    statsBar.innerHTML = `
      <div class="vocab-stat"><span class="vocab-stat-dot" style="background:var(--red)"></span>${cat.words.length - allMastered - allLearning} nouveau(x)</div>
      <div class="vocab-stat"><span class="vocab-stat-dot" style="background:var(--ochre)"></span>${allLearning} en cours</div>
      <div class="vocab-stat"><span class="vocab-stat-dot" style="background:var(--green)"></span>${allMastered} maîtrisé(s)</div>
      ${dueCount > 0 ? `<div class="vocab-stat" style="color:var(--blue)"><span class="vocab-stat-dot" style="background:var(--blue)"></span>${dueCount} à réviser</div>` : ''}
      <div class="vocab-stat" style="margin-left:auto;font-weight:700;color:var(--text-dark)">${allMastered}/${cat.words.length}</div>
    `;
  }

  if (!words.length) {
    container.innerHTML = '<p style="color:var(--text-light);font-style:italic;padding:20px 0">Aucun mot trouvé.</p>';
    return;
  }

  container.innerHTML = `
    <div class="flip-cards-grid">
      ${words.map(w => {
        const key = catId + '_' + w.pt;
        const entry = STATE.learnedWords[key];
        const mastery = getStatus(entry);
        const isDue = isDueToday(entry);
        const errorCount = STATE.errors[key]?.count || 0;
        return `
          <div class="flip-card-wrap" onclick="handleFlipCard(this, '${key}')">
            <div class="flip-card">
              <div class="flip-card-front">
                <div class="flip-card-mastery ${mastery}"></div>
                ${isDue ? '<div class="srs-due-badge" title="À réviser aujourd\'hui">📅</div>' : ''}
                ${errorCount >= 2 ? '<div class="error-badge" title="Mot difficile">⚠️</div>' : ''}
                <button onclick="event.stopPropagation();speakWord('${w.pt.replace(/'/g, "\\'")}')"
                  title="Écouter" style="position:absolute;top:8px;left:8px;background:rgba(26,58,92,0.07);border:none;border-radius:50%;width:28px;height:28px;cursor:pointer;font-size:0.85rem;display:flex;align-items:center;justify-content:center;transition:background 0.2s"
                  onmouseenter="this.style.background='rgba(26,58,92,0.18)'" onmouseleave="this.style.background='rgba(26,58,92,0.07)'">🔊</button>
                <button onclick="event.stopPropagation();openDictModal('${w.pt.replace(/'/g, "\\'")}')"
                  title="Définition" style="position:absolute;top:8px;right:8px;background:rgba(26,58,92,0.07);border:none;border-radius:50%;width:28px;height:28px;cursor:pointer;font-size:0.85rem;display:flex;align-items:center;justify-content:center;transition:background 0.2s"
                  onmouseenter="this.style.background='rgba(26,58,92,0.18)'" onmouseleave="this.style.background='rgba(26,58,92,0.07)'">📖</button>
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

export function handleFlipCard(wrap, key) {
  const card = wrap.querySelector('.flip-card');
  card.classList.toggle('flipped');
  if (card.classList.contains('flipped')) {
    const entry = STATE.learnedWords[key];
    const status = getStatus(entry);
    if (status === 'new') {
      // new → learning (flip card only gives recognition, not mastery — Axe 5)
      STATE.learnedWords[key] = { ...(typeof entry === 'object' && entry ? entry : migrateEntry('new')), status: 'learning' };
      saveState();
      checkBadges();
      updateStreak();
    }
    // 'learning' → 'mastered' only via quiz (Axe 5), not flip card
  }
}

export function filterVocabCards() {
  renderFlipCards(currentCategory);
}
