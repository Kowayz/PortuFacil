import { STATE, saveState } from '../core/state.js';
import { DATA } from '../data/index.js';
import { navigate } from '../core/router.js';
import { speakWord } from '../utils/speech.js';
import { observeFadeIns } from '../utils/observers.js';
import { showToast } from '../components/toast.js';
import { checkBadges } from '../utils/badges.js';
import { getDueWords } from '../utils/srs.js';

export function initHome() {
  const wod = DATA.wordOfDay[new Date().getDay() % DATA.wordOfDay.length];
  document.getElementById('wod-word').textContent = wod.word;
  document.getElementById('wod-trans').textContent = wod.translation;
  document.getElementById('wod-example').textContent = wod.example;
  document.getElementById('wod-emoji').textContent = wod.emoji;

  const wodCard = document.querySelector('.hero-word-card');
  if (wodCard) {
    const speakBtn = document.createElement('button');
    speakBtn.innerHTML = '🔊 Écouter';
    speakBtn.style.cssText = 'margin-top:10px;padding:6px 14px;background:rgba(255,255,255,0.2);color:white;border:1px solid rgba(255,255,255,0.4);border-radius:20px;font-size:0.78rem;font-weight:700;cursor:pointer;transition:background 0.2s';
    speakBtn.addEventListener('click', (e) => { e.stopPropagation(); speakWord(wod.word); });
    speakBtn.addEventListener('mouseenter', () => speakBtn.style.background = 'rgba(255,255,255,0.35)');
    speakBtn.addEventListener('mouseleave', () => speakBtn.style.background = 'rgba(255,255,255,0.2)');

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

  const q = DATA.quotes[Math.floor(Math.random() * DATA.quotes.length)];
  document.getElementById('quote-text').textContent = q.text;
  document.getElementById('quote-author').textContent = '— ' + q.author;

  const hasStarted = STATE.completedLessons.length > 0 || Object.keys(STATE.learnedWords).length > 0;
  const ctaBtn = document.getElementById('hero-cta-btn');
  if (hasStarted) ctaBtn.textContent = 'Mon tableau de bord →';
  ctaBtn.addEventListener('click', () => navigate(hasStarted ? 'progress' : 'lessons'));
  document.getElementById('hero-demo-btn').addEventListener('click', () => navigate('quiz'));

  renderSRSWidget();
  renderCulturalFacts();
  observeFadeIns();
}

export function renderSRSWidget() {
  const container = document.getElementById('srs-widget');
  if (!container) return;

  const dueWords = getDueWords(STATE.learnedWords);
  const count = dueWords.length;

  if (count === 0) {
    container.innerHTML = `
      <div class="srs-widget-inner srs-all-done">
        <span class="srs-widget-icon">✅</span>
        <div class="srs-widget-text">
          <strong>Révision à jour !</strong>
          <span>Tous vos mots sont révisés. Revenez demain !</span>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="srs-widget-inner">
        <span class="srs-widget-icon">📅</span>
        <div class="srs-widget-text">
          <strong>${count} mot${count > 1 ? 's' : ''} à réviser aujourd'hui</strong>
          <span>Maintenez votre mémoire avec la répétition espacée</span>
        </div>
        <button class="srs-widget-btn" onclick="navigate('quiz');setTimeout(()=>startQuiz('srs'),50)">
          Réviser →
        </button>
      </div>
    `;
  }
}

export function renderCulturalFacts() {
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

export function trackCulturalFact(index) {
  if (!STATE.seenCulturalFacts.includes(index)) {
    STATE.seenCulturalFacts.push(index);
    STATE.culturalFactsSeen = STATE.seenCulturalFacts.length;
    saveState();
    checkBadges();
  }
}
