import { STATE, saveState } from '../core/state.js';
import { navigate } from '../core/router.js';
import { showToast } from '../components/toast.js';

const PLACEMENT_QUESTIONS = [
  // 3 questions A1
  { q: 'Comment dit-on "bonjour" en portugais ?', options: ['Olá', 'Tchau', 'Obrigado', 'Sim'], answer: 'Olá', level: 'A1' },
  { q: 'Quelle est la traduction de "eu tenho fome" ?', options: ["J'ai faim", "Je suis fatigué", "J'ai soif", "Je suis content"], answer: "J'ai faim", level: 'A1' },
  { q: 'Comment dit-on "je m\'appelle" ?', options: ['Eu me chamo', 'Eu tenho', 'Eu sou de', 'Eu falo'], answer: 'Eu me chamo', level: 'A1' },
  // 3 questions A2
  { q: 'Conjuguez "ir" à la 1ère personne du présent :', options: ['Vou', 'Vais', 'Vai', 'Imos'], answer: 'Vou', level: 'A2' },
  { q: '"Ontem eu ___ ao mercado." Complétez :', options: ['fui', 'vou', 'vá', 'irei'], answer: 'fui', level: 'A2' },
  { q: 'Que signifie "apesar de" ?', options: ['malgré', 'donc', 'parce que', 'si'], answer: 'malgré', level: 'A2' },
  // 2 questions B1
  { q: '"Se eu ___ rico, viajaria pelo mundo." Complétez :', options: ['fosse', 'era', 'seja', 'sou'], answer: 'fosse', level: 'B1' },
  { q: 'Quel temps est utilisé dans "Ele disse que viria" ?', options: ['Conditionnel passé', 'Subjonctif présent', 'Futur simple', 'Imparfait'], answer: 'Conditionnel passé', level: 'B1' },
  // 2 questions B2
  { q: '"Embora ___ cansado, continuou trabalhando." Complétez :', options: ['estivesse', 'estava', 'está', 'estará'], answer: 'estivesse', level: 'B2' },
  { q: 'Que signifie "outrossim" ?', options: ['de plus', 'cependant', 'donc', 'sauf'], answer: 'de plus', level: 'B2' },
];

let currentQ = 0;
let score = { A1: 0, A2: 0, B1: 0, B2: 0 };

export function startPlacementTest() {
  currentQ = 0;
  score = { A1: 0, A2: 0, B1: 0, B2: 0 };
  renderPlacementQuestion();
  document.getElementById('placement-modal')?.classList.add('show');
}

function renderPlacementQuestion() {
  const modal = document.getElementById('placement-modal');
  if (!modal) return;
  if (currentQ >= PLACEMENT_QUESTIONS.length) {
    finishPlacementTest();
    return;
  }
  const q = PLACEMENT_QUESTIONS[currentQ];
  const progress = Math.round((currentQ / PLACEMENT_QUESTIONS.length) * 100);
  modal.innerHTML = `
    <div class="placement-inner">
      <div class="placement-header">
        <span class="placement-title">Test de placement</span>
        <span class="placement-progress">${currentQ + 1} / ${PLACEMENT_QUESTIONS.length}</span>
      </div>
      <div class="placement-bar"><div class="placement-bar-fill" style="width:${progress}%"></div></div>
      <div class="placement-question">${q.q}</div>
      <div class="placement-options">
        ${q.options.map(opt => `
          <button class="placement-option" onclick="answerPlacement('${opt.replace(/'/g, "\\'")}')">${opt}</button>
        `).join('')}
      </div>
      <button class="placement-skip" onclick="skipPlacementTest()">Passer le test →</button>
    </div>
  `;
}

export function answerPlacement(answer) {
  const q = PLACEMENT_QUESTIONS[currentQ];
  if (answer === q.answer) score[q.level]++;
  currentQ++;
  renderPlacementQuestion();
}

export function skipPlacementTest() {
  document.getElementById('placement-modal')?.classList.remove('show');
  STATE.placementDone = true;
  saveState();
}

function finishPlacementTest() {
  let detectedLevel = 'A1';
  if (score.B2 >= 1) detectedLevel = 'B2';
  else if (score.B1 >= 1) detectedLevel = 'B1';
  else if (score.A2 >= 2) detectedLevel = 'A2';

  STATE.placementDone = true;
  STATE.detectedLevel = detectedLevel;
  saveState();

  const modal = document.getElementById('placement-modal');
  if (modal) {
    modal.innerHTML = `
      <div class="placement-inner placement-result">
        <div class="placement-result-icon">🎓</div>
        <div class="placement-result-level">Niveau détecté : <strong>${detectedLevel}</strong></div>
        <p class="placement-result-desc">
          ${detectedLevel === 'A1' ? "Parfait pour commencer ! Votre parcours A1 vous attend." :
            detectedLevel === 'A2' ? "Bon niveau de base ! Vous pouvez sauter les premières leçons A1." :
            detectedLevel === 'B1' ? "Impressionnant ! Commencez directement en B1." :
            "Excellent niveau ! Testez-vous avec les leçons B2."}
        </p>
        <button class="btn-primary" onclick="document.getElementById('placement-modal').classList.remove('show');navigate('lessons')">
          Commencer les leçons →
        </button>
      </div>
    `;
  }
  showToast('success', '🎓 Test terminé !', `Niveau détecté : ${detectedLevel}`);
}
