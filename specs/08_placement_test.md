# Spec 08 — Test de placement (onboarding nouveaux utilisateurs)

## Priorité : MOYENNE

## Contexte

Les nouveaux utilisateurs arrivent sur la page d'accueil puis le dashboard. On ne sait pas
leur niveau. Un test de 10 questions rapides permet de détecter s'ils sont déjà A1/A2/B1 et
d'afficher un message personnalisé sur le dashboard (ex: "Vous semblez avoir un niveau A2 !").

## Travail à faire

### 1. Créer `src/pages/placement.js`

```js
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
  const total = score.A1 + score.A2 + score.B1 + score.B2;
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
```

### 2. Ajouter DEFAULT_STATE fields dans `src/core/state.js`

```js
placementDone: false,
detectedLevel: null,
```

### 3. Ajouter le modal HTML dans `index.html`

Juste avant `</body>` :
```html
<div id="placement-modal" class="placement-modal"><!-- rendered by JS --></div>
```

### 4. Déclencher le test dans `src/main.js`

Dans `DOMContentLoaded`, après `hideLoadingScreen()` :
```js
import { startPlacementTest } from './pages/placement.js';
// ...
if (!STATE.placementDone && !hasStarted) {
  setTimeout(startPlacementTest, 800);
}
```

Exposer sur `window` : `answerPlacement`, `skipPlacementTest`.

### 5. CSS dans `src/styles/_components.css` (ou nouveau `_placement.css`)

```css
.placement-modal {
  display: none; position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.6); align-items: center; justify-content: center;
}
.placement-modal.show { display: flex; }
.placement-inner {
  background: var(--white); border-radius: var(--radius-lg);
  padding: 36px; max-width: 480px; width: 90%; box-shadow: var(--shadow-lg);
}
.placement-header { display: flex; justify-content: space-between; margin-bottom: 12px; }
.placement-title { font-weight: 700; color: var(--blue); }
.placement-progress { color: var(--text-light); font-size: 0.9rem; }
.placement-bar { height: 6px; background: var(--cream-dark); border-radius: 3px; margin-bottom: 24px; }
.placement-bar-fill { height: 100%; background: var(--blue); border-radius: 3px; transition: width 0.3s; }
.placement-question { font-size: 1.1rem; font-weight: 600; margin-bottom: 20px; line-height: 1.5; }
.placement-options { display: grid; gap: 10px; margin-bottom: 20px; }
.placement-option {
  padding: 12px 16px; border: 2px solid var(--cream-dark); border-radius: var(--radius);
  background: var(--white); cursor: pointer; text-align: left; transition: var(--transition);
  font-size: 0.95rem;
}
.placement-option:hover { border-color: var(--blue); color: var(--blue); }
.placement-skip { background: none; border: none; color: var(--text-light); cursor: pointer; font-size: 0.85rem; }
.placement-result { text-align: center; }
.placement-result-icon { font-size: 3rem; margin-bottom: 12px; }
.placement-result-level { font-size: 1.3rem; margin-bottom: 12px; }
.placement-result-desc { color: var(--text-mid); margin-bottom: 24px; line-height: 1.6; }
[data-theme="dark"] .placement-inner { background: var(--dark-card); }
[data-theme="dark"] .placement-option { background: var(--dark-bg); border-color: var(--dark-border); color: var(--dark-text); }
```

### 6. Afficher le niveau détecté dans le dashboard (`src/pages/progress.js`)

Dans `renderHero()`, si `STATE.detectedLevel` est défini, afficher un badge discret :
```js
const detectedEl = document.getElementById('pdash-detected-level');
if (detectedEl && STATE.detectedLevel) {
  detectedEl.textContent = `Niveau estimé : ${STATE.detectedLevel}`;
  detectedEl.style.display = 'inline';
} else if (detectedEl) {
  detectedEl.style.display = 'none';
}
```

Ajouter `<span id="pdash-detected-level" class="pdash-detected-level" style="display:none"></span>`
dans le HTML du hero dashboard (dans `index.html`, après `pdash-level-pill`).

## Acceptance Criteria

- [ ] `src/pages/placement.js` existe avec `startPlacementTest`, `answerPlacement`, `skipPlacementTest`
- [ ] Le modal de test s'affiche automatiquement pour les nouveaux utilisateurs (STATE.placementDone = false)
- [ ] Après le test, `STATE.placementDone = true` et `STATE.detectedLevel` est défini
- [ ] Le test ne se relance pas si déjà fait (`STATE.placementDone === true`)
- [ ] Bouton "Passer le test" disponible à tout moment
- [ ] `npm run build` passe sans erreur

**Output quand terminé :** `<promise>DONE</promise>`
