import { triggerConfetti } from './confetti.js';

export function showLevelUpModal(level) {
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

export function hideLoadingScreen() {
  setTimeout(() => {
    const screen = document.getElementById('loading-screen');
    if (!screen) return;
    screen.classList.add('fade-out');
    setTimeout(() => screen.remove(), 600);
  }, 1200);
}
