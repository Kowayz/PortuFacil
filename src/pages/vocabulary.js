import { STATE, saveState, updateStreak } from '../core/state.js';
import { DATA } from '../data/index.js';
import { shuffle } from '../utils/text.js';
import { showToast } from '../components/toast.js';
import { checkBadges } from '../utils/badges.js';
import { getStatus, isDueToday, migrateEntry, updateAfterReview } from '../utils/srs.js';

let currentCategory = null;
let vocabFilter = 'all';
let vocabDisplayOrders = {};

export function renderVocabulary() {
  // === Global function for flip-card mastery marking ===
  window.markFlipCardStatus = function(event, key, correct) {
    event.stopPropagation();
    let entry = STATE.learnedWords[key];
    if (!entry) entry = migrateEntry('new');
    STATE.learnedWords[key] = { ...updateAfterReview(entry, correct) };
    saveState();
    checkBadges();
    updateStreak();

    const wrap = event.target.closest('.flip-card-wrap');
    if (!wrap) return;
    
    // Auto unflip after a small delay
    setTimeout(() => {
      const card = wrap.querySelector('.flip-card');
      card.classList.remove('flipped');
    }, 400);
    
    // Update mastery visual immediately on this card
    const newStatus = getStatus(STATE.learnedWords[key]);
    wrap.querySelectorAll('.flip-card-mastery').forEach(el => el.className = `flip-card-mastery ${newStatus}`);
    
    const statusLabel = wrap.querySelector('.flip-card-status-label');
    if (statusLabel) {
      const labels = {
        mastered: '✅ Maîtrisé',
        learning: '🔄 En cours',
        new: '🆕 Nouveau'
      };
      statusLabel.textContent = labels[newStatus] || labels.new;
    }
    
    // Show toast feedback
    if (correct) {
      showToast('success', '✅ Bien joué !', 'Mot marqué comme connu');
      if (window.createConfetti) {
        const rect = wrap.getBoundingClientRect();
        createConfetti(rect.left + rect.width/2, rect.top + rect.height/2);
      }
    } else {
      showToast('info', '🔄 À revoir', 'Ce mot sera reproposé');
    }

    // Update stats bar and categories after action
    updateStatsBar(currentCategory);
    updateCategoryCounts();
    updateTotalBadge();
  };

  const container = document.getElementById('vocab-categories');
  if (!container) return;

  // Update total word badge in header
  updateTotalBadge();

  // Render category buttons with progress indicators
  container.innerHTML = DATA.vocabulary.categories.map(cat => {
    const total = cat.words.length;
    const learnedCount = Object.keys(STATE.learnedWords).filter(k =>
      k.startsWith(cat.id + '_') && getStatus(STATE.learnedWords[k]) === 'mastered'
    ).length;
    const pct = total > 0 ? Math.round((learnedCount / total) * 100) : 0;
    return `
      <button class="vocab-category-btn ${currentCategory === cat.id ? 'active' : ''}" onclick="selectVocabCategory('${cat.id}')">
        <span class="vocab-cat-icon">${cat.icon}</span>
        <div class="vocab-cat-name">${cat.name}</div>
        <div class="vocab-cat-count">${learnedCount}/${total}</div>
        <div class="vocab-cat-progress">
          <div class="vocab-cat-progress-fill" style="width:${pct}%"></div>
        </div>
      </button>
    `;
  }).join('');

  if (currentCategory) {
    renderFlipCards(currentCategory);
  } else {
    selectVocabCategory(DATA.vocabulary.categories[0].id);
  }

  // Bind search input
  const searchEl = document.getElementById('vocab-search');
  if (searchEl && !searchEl.dataset.bound) {
    searchEl.addEventListener('input', filterVocabCards);
    searchEl.dataset.bound = 'true';
  }

  // Bind filter tabs
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

  // Bind shuffle button
  const shuffleBtn = document.getElementById('btn-shuffle');
  if (shuffleBtn && !shuffleBtn.dataset.bound) {
    shuffleBtn.addEventListener('click', () => {
      const cat = DATA.vocabulary.categories.find(c => c.id === currentCategory);
      if (!cat) return;
      vocabDisplayOrders[currentCategory] = shuffle(cat.words.map((_, i) => i));
      renderFlipCards(currentCategory);
      showToast('info', '🔀 Mélangé !', 'Cartes dans un nouvel ordre');
    });
    shuffleBtn.dataset.bound = 'true';
  }
}

function updateTotalBadge() {
  const totalEl = document.getElementById('vocab-total-count');
  if (totalEl) {
    const totalWords = DATA.vocabulary.categories.reduce((sum, cat) => sum + cat.words.length, 0);
    totalEl.textContent = totalWords;
  }
}

function updateCategoryCounts() {
  document.querySelectorAll('.vocab-category-btn').forEach(btn => {
    const onclickAttr = btn.getAttribute('onclick');
    if (!onclickAttr) return;
    const match = onclickAttr.match(/selectVocabCategory\('([^']+)'\)/);
    if (!match) return;
    const catId = match[1];
    const cat = DATA.vocabulary.categories.find(c => c.id === catId);
    if (!cat) return;

    const total = cat.words.length;
    const learned = Object.keys(STATE.learnedWords).filter(k =>
      k.startsWith(catId + '_') && getStatus(STATE.learnedWords[k]) === 'mastered'
    ).length;
    const pct = total > 0 ? Math.round((learned / total) * 100) : 0;

    const countEl = btn.querySelector('.vocab-cat-count');
    if (countEl) countEl.textContent = `${learned}/${total}`;

    const fillEl = btn.querySelector('.vocab-cat-progress-fill');
    if (fillEl) fillEl.style.width = `${pct}%`;
  });
}

export function selectVocabCategory(catId) {
  currentCategory = catId;
  document.querySelectorAll('.vocab-category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick')?.includes(`'${catId}'`));
  });
  renderFlipCards(catId);
}

function updateStatsBar(catId) {
  const cat = DATA.vocabulary.categories.find(c => c.id === catId);
  if (!cat) return;

  const allMastered = cat.words.filter(w => getStatus(STATE.learnedWords[catId + '_' + w.pt]) === 'mastered').length;
  const allLearning = cat.words.filter(w => getStatus(STATE.learnedWords[catId + '_' + w.pt]) === 'learning').length;
  const allNew = cat.words.length - allMastered - allLearning;
  const dueCount = cat.words.filter(w => isDueToday(STATE.learnedWords[catId + '_' + w.pt])).length;
  const pct = cat.words.length > 0 ? Math.round((allMastered / cat.words.length) * 100) : 0;

  // SVG ring parameters
  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  const statsBar = document.getElementById('vocab-stats-bar');
  if (statsBar) {
    statsBar.innerHTML = `
      <div class="vocab-stat"><span class="vocab-stat-dot" style="background:var(--red)"></span>${allNew} nouveau${allNew > 1 ? 'x' : ''}</div>
      <div class="vocab-stat"><span class="vocab-stat-dot" style="background:var(--ochre)"></span>${allLearning} en cours</div>
      <div class="vocab-stat"><span class="vocab-stat-dot" style="background:var(--green)"></span>${allMastered} maîtrisé${allMastered > 1 ? 's' : ''}</div>
      ${dueCount > 0 ? `<div class="vocab-stat" style="color:var(--blue)"><span class="vocab-stat-dot" style="background:var(--blue)"></span>${dueCount} à réviser</div>` : ''}
      <div class="vocab-progress-ring">
        <svg viewBox="0 0 42 42">
          <circle class="vocab-progress-ring-bg" cx="21" cy="21" r="${radius}" />
          <circle class="vocab-progress-ring-fill" cx="21" cy="21" r="${radius}"
            stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" />
        </svg>
        <span class="vocab-progress-text">${pct}%</span>
      </div>
    `;
  }
}

export function renderFlipCards(catId) {
  const cat = DATA.vocabulary.categories.find(c => c.id === catId);
  if (!cat) return;

  let words = vocabDisplayOrders[catId]
    ? vocabDisplayOrders[catId].map(i => cat.words[i])
    : [...cat.words];

  // Apply search filter
  const search = (document.getElementById('vocab-search')?.value || '').toLowerCase();
  if (search) {
    words = words.filter(w => w.pt.toLowerCase().includes(search) || w.fr.toLowerCase().includes(search));
  }

  // Apply status filter
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

  // Update stats bar
  updateStatsBar(catId);

  const container = document.getElementById('flip-cards-container');
  if (!container) return;

  if (!words.length) {
    const messages = {
      all: 'Aucun mot trouvé.',
      review: 'Aucun mot à réviser. Bien joué ! 🎉',
      learned: 'Aucun mot maîtrisé pour l\'instant. Continuez à pratiquer !',
      srs: 'Aucune révision SRS prévue aujourd\'hui. 📅',
      hard: 'Aucun mot difficile repéré. Bravo ! 💪'
    };
    container.innerHTML = `
      <div class="vocab-empty-state">
        <span class="vocab-empty-state-icon">📭</span>
        <p>${messages[vocabFilter] || messages.all}</p>
      </div>
    `;
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
        const statusLabels = {
          mastered: '✅ Maîtrisé',
          learning: '🔄 En cours',
          new: '🆕 Nouveau'
        };
        return `
          <div class="flip-card-wrap" onclick="handleFlipCard(this, '${key}')">
            <div class="flip-card">
              <div class="flip-card-front">
                <div class="flip-card-mastery ${mastery}"></div>
                <div class="flip-card-actions">
                  <button class="flip-card-action-btn" onclick="event.stopPropagation();speakWord('${w.pt.replace(/'/g, "\\\\'")}')" title="Écouter la prononciation">🔊</button>
                  <button class="flip-card-action-btn" onclick="event.stopPropagation();openDictModal('${w.pt.replace(/'/g, "\\\\'")}')" title="Voir la définition">📖</button>
                </div>
                ${isDue ? '<div class="srs-due-badge" title="À réviser aujourd\'hui">📅 SRS</div>' : ''}
                ${errorCount >= 2 ? '<div class="error-badge" title="Mot difficile">⚠️ Dur</div>' : ''}
                <span class="flip-card-emoji">${w.img}</span>
                <div class="flip-card-pt">${w.pt}</div>
                <div class="flip-card-hint">↩ Retourner</div>
              </div>
              <div class="flip-card-back">
                <div class="flip-card-mastery ${mastery}"></div>
                <span class="flip-card-emoji">${w.img}</span>
                <div class="flip-card-fr">${w.fr}</div>
                <div style="font-size:0.78rem;opacity:0.75;text-align:center;position:relative;z-index:1;font-family:'Playfair Display',serif">${w.pt}</div>
                <div class="flip-card-status-label">${statusLabels[mastery] || statusLabels.new}</div>
                <div class="vocab-action-bar">
                  <button class="btn-srs-review" onclick="window.markFlipCardStatus(event, '${key}', false)">🔄 À revoir</button>
                  <button class="btn-srs-known" onclick="window.markFlipCardStatus(event, '${key}', true)">✅ Je connais</button>
                </div>
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
      // new → learning (flip card only gives recognition, not mastery)
      STATE.learnedWords[key] = { ...(typeof entry === 'object' && entry ? entry : migrateEntry('new')), status: 'learning' };
      saveState();
      checkBadges();
      updateStreak();
      // Update visuals
      updateStatsBar(currentCategory);
      updateCategoryCounts();
      // Update mastery dot on this card
      wrap.querySelectorAll('.flip-card-mastery').forEach(el => el.className = 'flip-card-mastery learning');
      const statusLabel = wrap.querySelector('.flip-card-status-label');
      if (statusLabel) statusLabel.textContent = '🔄 En cours';
    }
  }
}

export function filterVocabCards() {
  renderFlipCards(currentCategory);
}
