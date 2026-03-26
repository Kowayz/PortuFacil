// Accent-insensitive, case-insensitive comparison for quiz answers
export function normalize(str) {
  return (str || '').toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

// Fisher-Yates shuffle — no bias, doesn't mutate source
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function formatTime(seconds) {
  if (seconds < 60) return seconds + 's';
  if (seconds < 3600) return Math.floor(seconds / 60) + 'min';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return h + 'h' + (m > 0 ? m + 'min' : '');
}

export function getLevelTitle(lvl) {
  return { A1: 'Débutant', A2: 'Élémentaire', B1: 'Intermédiaire', B2: 'Avancé' }[lvl] || lvl;
}
