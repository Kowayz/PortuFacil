import { showToast } from '../components/toast.js';

export function speakWord(word, lang = 'pt-PT') {
  if (!window.speechSynthesis) {
    showToast('warning', '🔇 Audio indisponible', 'Votre navigateur ne supporte pas la synthèse vocale.');
    return;
  }
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = lang;
  utterance.rate = 0.75;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

export function speakLetter(_letter, example) {
  speakWord(example);
  showToast('info', '🔊 Prononciation', `"${example}" — Écoutez !`);
}
