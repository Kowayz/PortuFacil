import { DATA } from '../data/index.js';
import { observeFadeIns } from '../utils/observers.js';

export function renderPronunciation() {
  renderAlphabet();
  renderSpecialSounds();
  renderTraps();
  renderPracticePhrases();
}

export function renderAlphabet() {
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
    { phrase: 'A janela está aberta.', trans: 'La fenêtre est ouverte.', note: 'j=zh, nh=gn, st=sht (PT)' },
    { phrase: 'O meu coração bate forte.', trans: 'Mon cœur bat fort.', note: "Nasale 'ção', 'meu'=mew" },
    { phrase: 'Quanto custa este pastel de nata?', trans: 'Combien coûte ce pastel de nata ?', note: 'c+u=k, s entre voyelles=z' },
    { phrase: 'Tenho saudade de Portugal.', trans: "J'ai la nostalgie du Portugal.", note: 'nh=gn, saudade = âme portugaise' },
    { phrase: 'Bom dia! Como está a sua família?', trans: 'Bonjour ! Comment va votre famille ?', note: "lh=ly, final 'ia' se réduit en PT-PT" },
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
