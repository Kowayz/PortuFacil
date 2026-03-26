export function triggerConfetti() {
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
