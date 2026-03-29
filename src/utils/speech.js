import { showToast } from '../components/toast.js';

// ── Smart voice selection ─────────────────────────────────────────────────────
// On load (and on voiceschanged), pick the best available Portuguese voice.
// Priority: pt-PT Google > pt-PT any > pt-BR Google > pt-BR any > any pt voice
let _ptVoice = null;

function _loadBestVoice() {
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return;
  const pt   = voices.filter(v => v.lang.startsWith('pt'));
  const ptPT = pt.filter(v => v.lang === 'pt-PT');
  const ptBR = pt.filter(v => v.lang === 'pt-BR');
  const best = (arr) => arr.find(v => v.name.toLowerCase().includes('google')) || arr[0];
  _ptVoice = best(ptPT) || best(ptBR) || best(pt) || null;
}

if (window.speechSynthesis) {
  _loadBestVoice();
  window.speechSynthesis.addEventListener('voiceschanged', _loadBestVoice);
}

// ── Speed control ─────────────────────────────────────────────────────────────
const _SPEEDS = { slow: 0.52, normal: 0.82 };

export function getTTSSpeed() {
  return localStorage.getItem('tts_speed') || 'normal';
}

export function setTTSSpeed(speed) {
  localStorage.setItem('tts_speed', speed);
  // Live-update all toggle buttons on the page without a full re-render
  document.querySelectorAll('.tts-speed-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.speed === speed);
  });
}

// ── Core speak functions ──────────────────────────────────────────────────────
export function speakWord(word, lang = 'pt-PT') {
  if (!window.speechSynthesis) {
    showToast('warning', '🔇 Audio indisponible', 'Votre navigateur ne supporte pas la synthèse vocale.');
    return;
  }
  window.speechSynthesis.cancel();
  const utt  = new SpeechSynthesisUtterance(word);
  utt.lang   = _ptVoice?.lang || lang;
  utt.rate   = _SPEEDS[getTTSSpeed()] ?? 0.82;
  if (_ptVoice) utt.voice = _ptVoice;
  window.speechSynthesis.speak(utt);
}

// For internal use where an onEnd callback is needed (conversation lines)
export function speakWithCallback(text, onEnd) {
  if (!window.speechSynthesis) { setTimeout(onEnd, 1200); return; }
  window.speechSynthesis.cancel();
  const utt  = new SpeechSynthesisUtterance(text);
  utt.lang   = _ptVoice?.lang || 'pt-PT';
  utt.rate   = _SPEEDS[getTTSSpeed()] ?? 0.82;
  if (_ptVoice) utt.voice = _ptVoice;
  utt.onend  = onEnd;
  window.speechSynthesis.speak(utt);
}

export function speakLetter(_letter, example) {
  speakWord(example);
  showToast('info', '🔊 Prononciation', `"${example}" — Écoutez !`);
}
