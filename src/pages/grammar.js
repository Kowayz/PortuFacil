// ── Grammar exercise bank (20+ questions, keyed by section id) ────────────────
const GRAMMAR_EXERCISES = {
  articles: [
    { q: "Article défini pour 'casa' (féminin, singulier) ?",    options: ['o','a','os','as'],    correct: 1 },
    { q: "Article défini pour 'livros' (masculin, pluriel) ?",   options: ['o','a','os','as'],    correct: 2 },
    { q: "Article indéfini pour 'mulher' (féminin, sg) ?",       options: ['um','uma','uns','umas'], correct: 1 },
    { q: "Comment dit-on 'the boys' en portugais ?",            options: ['o menino','a menina','os meninos','as meninas'], correct: 2 },
  ],
  pronouns: [
    { q: "Pronom sujet 1ère personne singulier ?",              options: ['eu','você','ele','nós'],  correct: 0 },
    { q: "Pronom complément direct de 'ela' ?",                 options: ['lhe','a','ela','se'],     correct: 1 },
    { q: "Comment dit-on 'we' en portugais (formel) ?",         options: ['vocês','nós','eles','a gente'], correct: 1 },
    { q: "Pronom indirect (à lui / à elle) ?",                  options: ['lhe','o','a','se'],       correct: 0 },
  ],
  prepositions: [
    { q: "'Para' s'utilise pour exprimer :",                    options: ['lieu','destination','provenance','cause'], correct: 1 },
    { q: "Contraction de 'de + o' ?",                           options: ['do','da','no','na'],      correct: 0 },
    { q: "'Em + a' devient ?",                                  options: ['na','no','da','do'],      correct: 0 },
    { q: "'A + o' devient ?",                                   options: ['ao','à','do','da'],       correct: 0 },
  ],
  'ser-estar': [
    { q: "SER ou ESTAR pour une caractéristique permanente ?",  options: ['SER','ESTAR'],            correct: 0 },
    { q: "Conjugaison de SER, 1ère pers. sg (Présent) ?",       options: ['sou','estou','sou/estou','tenho'], correct: 0 },
    { q: "'Eu estou cansado' — quel verbe utilise-t-on ?",       options: ['SER','ESTAR'],            correct: 1 },
    { q: "Conjugaison de ESTAR, 3ème pers. sg (Présent) ?",      options: ['é','está','sou','tem'],   correct: 1 },
  ],
  contractions: [
    { q: "'De + os' se contracte en ?",                         options: ['dos','das','nos','nas'],  correct: 0 },
    { q: "'Por + a' se contracte en ?",                         options: ['para','pela','pelo','por a'], correct: 1 },
    { q: "'Em + os' se contracte en ?",                         options: ['nos','dos','pelos','aos'], correct: 0 },
    { q: "'A + as' se contracte en ?",                          options: ['às','das','nas','pelos'],  correct: 0 },
  ],
  tenses: [
    { q: "Temps pour une habitude passée ?",                    options: ['Presente','Perfeito','Imperfeito','Futuro'], correct: 2 },
    { q: "'Eu falarei' est au :",                                options: ['Presente','Perfeito','Futuro','Subjuntivo'], correct: 2 },
    { q: "Temps pour une action passée terminée ?",             options: ['Presente','Perfeito','Imperfeito','Futuro'], correct: 1 },
    { q: "'Talvez eu fale' utilise le ?",                        options: ['Presente','Futuro','Imperfeito','Subjuntivo'], correct: 3 },
  ],
  time: [
    { q: "Comment dit-on 'tomorrow' ?",                         options: ['ontem','hoje','amanhã','logo'], correct: 2 },
    { q: "Comment dit-on 'yesterday' ?",                        options: ['ontem','hoje','amanhã','agora'], correct: 0 },
    { q: "'Às vezes' signifie ?",                               options: ['toujours','jamais','parfois','maintenant'], correct: 2 },
    { q: "Comment dit-on 'always' ?",                           options: ['nunca','às vezes','sempre','já'], correct: 2 },
  ],
  gender: [
    { q: "En général, les mots qui se terminent par -o sont ?",  options: ['Féminins','Masculins','Neutres','Invariables'], correct: 1 },
    { q: "Quel est le genre de 'problema' ?",                   options: ['Féminin','Masculin'],     correct: 1 },
    { q: "Quel est le genre de 'mão' (main) ?",                 options: ['Féminin','Masculin'],     correct: 0 },
    { q: "Les mots finissant par -ção sont souvent ?",           options: ['Féminins','Masculins','Pluriels', 'Verbes'], correct: 0 },
  ],
  plural: [
    { q: "Quel est le pluriel de 'gato' ?",                     options: ['gatoes','gatas','gatos','gatois'], correct: 2 },
    { q: "Quel est le pluriel de 'animal' ?",                   options: ['animais','animalls','animões','animales'], correct: 0 },
    { q: "Quel est le pluriel de 'cão' (chien) ?",              options: ['cãos','cães','cões','cãs'], correct: 1 },
    { q: "Quel est le pluriel de 'homem' (homme) ?",            options: ['homems','homemns','homens','homeis'], correct: 2 },
  ],
  possessives: [
    { q: "Comment dit-on 'mon/ma' (pour un mot masculin) ?",    options: ['minha','nossa','teu','meu'], correct: 3 },
    { q: "Comment dit-on 'son/sa' (à lui/elle) - mot féminin ?", options: ['seu','sua','dele','nossa'], correct: 1 },
    { q: "Comment dit-on 'notre' pour un nom pluriel masc. ?",   options: ['nossa','nosso','nossos','nossas'], correct: 2 },
    { q: "Les possessifs s'accordent en genre et en nombre avec :", options: ['le possesseur','l\'objet possédé','le verbe','la préposition'], correct: 1 },
  ],
  demonstratives: [
    { q: "Pour quelque chose près de CELUI QUI PARLE :",         options: ['este/esta','esse/essa','aquele/aquela','isso'], correct: 0 },
    { q: "Pour quelque chose près de CELUI QUI ÉCOUTE :",        options: ['este','esse','aquele','aquela'], correct: 1 },
    { q: "Pour quelque chose Loin des deux :",                  options: ['este','esse','aquele','isso'], correct: 2 },
    { q: "Comment dire 'cette chose-ci' (neutre, indéfini) ?",  options: ['este','esse','isto','isso'], correct: 2 },
  ]
};

let _grammarPractice = {}; // sectionId → { questions, index, correct }

// Helper function to make any Portuguese text chunk an audio-clickable element
function pta(text) {
  return text.split(' / ').map(t => `<span class="grammar-audio-word" onclick="event.stopPropagation();speakWord('${t.replace(/['"]/g, "\\'")}')">${t}</span>`).join(' / ');
}

// Helper to highlight words within a sentence
function ptaHighlight(sentence, targetMatch) {
  const words = sentence.split(' ');
  return words.map(w => {
    const cleanWord = w.toLowerCase().replace(/[.,!?]/g, '');
    if (cleanWord === targetMatch.toLowerCase() || cleanWord.startsWith(targetMatch.toLowerCase())) {
      return `<strong class="grammar-audio-word highlighter" onclick="event.stopPropagation();speakWord('${w.replace(/['"]/g, "\\'")}')">${w}</strong>`;
    }
    return `<span class="grammar-audio-word" onclick="event.stopPropagation();speakWord('${w.replace(/['"]/g, "\\'")}')">${w}</span>`;
  }).join(' ');
}

export function startGrammarPractice(sectionId) {
  const pool = (GRAMMAR_EXERCISES[sectionId] || []).slice();
  if (!pool.length) return;
  const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 5);
  _grammarPractice[sectionId] = { questions: shuffled, index: 0, correct: 0 };
  _renderGrammarExercise(sectionId);
}

function _renderGrammarExercise(sectionId) {
  const container = document.getElementById(`gex-${sectionId}`);
  if (!container) return;
  const state = _grammarPractice[sectionId];
  if (!state) return;

  const { questions, index, correct } = state;
  if (index >= questions.length) {
    const pct = Math.round((correct / questions.length) * 100);
    container.innerHTML = `
      <div class="gex-result">
        <span class="gex-result-score">${correct}/${questions.length} — ${pct}%</span>
        <button class="gex-retry-btn" onclick="startGrammarPractice('${sectionId}')">🔄 Réessayer</button>
      </div>
    `;
    return;
  }

  const q = questions[index];
  container.innerHTML = `
    <div class="gex-question">
      <div class="gex-q-num">${index + 1} / ${questions.length}</div>
      <div class="gex-q-text">${q.q}</div>
      <div class="gex-options">
        ${q.options.map((opt, i) => `
          <button class="gex-option" onclick="answerGrammarExercise('${sectionId}', ${i}, ${q.correct})">${opt}</button>
        `).join('')}
      </div>
      <div class="gex-feedback" id="gex-feedback-${sectionId}"></div>
    </div>
  `;
}

// Add mark to global scope if needed dynamically, though we use regular imports/exports mostly
window.answerGrammarExercise = answerGrammarExercise;
export function answerGrammarExercise(sectionId, chosen, correct) {
  const state = _grammarPractice[sectionId];
  if (!state) return;
  const btns = document.querySelectorAll(`#gex-${sectionId} .gex-option`);
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('gex-correct');
    else if (i === chosen) b.classList.add('gex-wrong');
  });
  const isCorrect = chosen === correct;
  if (isCorrect) state.correct++;
  const fb = document.getElementById(`gex-feedback-${sectionId}`);
  if (fb) { fb.textContent = isCorrect ? '✅ Correct !' : '❌ Incorrect'; fb.className = `gex-feedback ${isCorrect ? 'success' : 'error'}`; }
  setTimeout(() => { state.index++; _renderGrammarExercise(sectionId); }, 1200);
}

window.startGrammarPractice = startGrammarPractice;

const SECTIONS = [
  { id: 'gender',       label: 'Le Genre',      icon: '⚧️', color: 'red',   render: renderGenderRules },
  { id: 'plural',       label: 'Le Pluriel',    icon: '👯', color: 'ochre', render: renderPluralRules },
  { id: 'articles',     label: 'Articles',      icon: '📌', color: 'ochre', render: renderArticlesTable },
  { id: 'pronouns',     label: 'Pronoms',       icon: '👤', color: 'blue',  render: renderPronounsTable },
  { id: 'possessives',  label: 'Possessifs',    icon: '🎁', color: 'red',   render: renderPossessivesTable },
  { id: 'demonstratives',label: 'Démonstratifs', icon: '👉', color: 'green', render: renderDemonstratives },
  { id: 'prepositions', label: 'Prépositions',  icon: '📍', color: 'green', render: renderPrepositionsList },
  { id: 'contractions', label: 'Contractions',  icon: '🔗', color: 'blue',  render: renderContractionsTable },
  { id: 'ser-estar',    label: 'SER / ESTAR',   icon: '⚖️', color: 'ochre', render: renderSerEstarSection },
  { id: 'tenses',       label: 'Temps verbaux', icon: '⏳', color: 'green', render: renderTensesGuide },
  { id: 'time',         label: 'Expressions',   icon: '🕐', color: 'blue',  render: renderTimeExpressions },
];

export function renderGrammar() {
  const container = document.getElementById('grammar-content');
  if (!container) return;

  const quickNav = `
    <div class="grammar-quicknav">
      ${SECTIONS.map(s => `
        <button class="grammar-pill grammar-pill-${s.color}" onclick="document.getElementById('gs-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">
          ${s.icon} ${s.label}
        </button>
      `).join('')}
    </div>`;

  const cards = SECTIONS.map(s => {
    const hasExercises = s.id in GRAMMAR_EXERCISES;
    return `
    <div class="grammar-card grammar-card-${s.color}" id="gs-${s.id}" data-theme-color="${s.color}">
      <div class="grammar-card-header">
        <span class="grammar-card-icon">${s.icon}</span>
        <h3 class="grammar-card-title">${s.label}</h3>
        ${hasExercises ? `<button class="grammar-practice-btn" onclick="startGrammarPractice('${s.id}')">🎯 Pratiquer</button>` : ''}
      </div>
      <div class="grammar-card-body">
        ${s.render()}
      </div>
      ${hasExercises ? `<div class="grammar-exercise-drawer" id="gex-${s.id}"></div>` : ''}
    </div>
  `;
  }).join('');

  container.innerHTML = quickNav + `<div class="grammar-grid">${cards}</div>`;
}

function renderGenderRules() {
  const rows = [
    ['Finit par', 'Genre', 'Exemple'],
    ['-o', 'Masculin (en général)', pta('o menino, o carro')],
    ['-a', 'Féminin (en général)', pta('a menina, a casa')],
    ['-ção / -dade', 'Féminin (toujours)', pta('a emoção, a cidade')],
    ['-ma', 'Masculin (souvent grec)', pta('o problema, o sistema')],
  ];
  return tableWrap(['Terminaison', 'Règle', 'Exemples (écoutez)'], rows);
}

function renderPluralRules() {
  const rows = [
    ['Finit par', 'Règle', 'Exemple Singulier → Pluriel'],
    ['Voyelle (a,e,i,o,u)', '+ s', pta('casa') + ' → ' + pta('casas')],
    ['-m', 'Devient -ns', pta('homem') + ' → ' + pta('homens')],
    ['-l', 'Devient -is', pta('animal') + ' → ' + pta('animais')],
    ['-ão', 'Devient -ões / -ães / -ãos', pta('cão') + ' → ' + pta('cães') + ' / ' + pta('limão') + ' → ' + pta('limões')],
    ['-r / -s / -z', '+ es', pta('cor') + ' → ' + pta('cores')],
  ];
  return tableWrap(['Terminaison', 'Modification', 'Exemples'], rows);
}

function renderArticlesTable() {
  const rows = [
    ['Défini (le, la)', pta('o'), pta('a'), pta('os'), pta('as')],
    ['Indéfini (un, une)', pta('um'), pta('uma'), pta('uns'), pta('umas')],
  ];
  return tableWrap(['Type', 'Masc. sg', 'Fém. sg', 'Masc. pl', 'Fém. pl'], rows);
}

function renderPronounsTable() {
  const rows = [
    ['1ère sg', pta('eu'), pta('me'), pta('me')],
    ['2ème sg', pta('você / tu'), pta('te / você'), pta('te / lhe')],
    ['3ème sg', pta('ele / ela'), pta('o / a'), pta('lhe')],
    ['1ère pl', pta('nós / a gente'), pta('nos'), pta('nos')],
    ['2ème pl', pta('vocês'), pta('os / as'), pta('lhes')],
    ['3ème pl', pta('eles / elas'), pta('os / as'), pta('lhes')],
  ];
  return tableWrap(['Personne', 'Sujet', 'Compl. direct', 'Compl. indirect'], rows);
}

function renderPossessivesTable() {
  const rows = [
    ['Mon / Ma / Mes', pta('meu'), pta('minha'), pta('meus'), pta('minhas')],
    ['Ton / Ta / Tes', pta('teu'), pta('tua'), pta('teus'), pta('tuas')],
    ['Son / Sa / Ses\n(à vous/lui/elle)', pta('seu'), pta('sua'), pta('seus'), pta('suas')],
    ['Notre / Nos', pta('nosso'), pta('nossa'), pta('nossos'), pta('nossas')],
  ];
  return tableWrap(['Possesseur', 'Objet Masc.', 'Objet Fém.', 'Pluriel Masc.', 'Pluriel Fém.'], rows) + 
   '<div style="font-size:0.8rem;color:var(--text-light);margin-top:8px"><em>Attention : L\'adjectif s\'accorde toujours avec l\'objet possédé et non le possesseur ! (ex: a sua casa = sa maison / votre maison).</em></div>';
}

function renderDemonstratives() {
  const rows = [
    ['Proche de MOI (Ici)', pta('este / esta / estes / estas'), pta('isto')],
    ['Proche de TOI (Là)', pta('esse / essa / esses / essas'), pta('isso')],
    ['Loin de NOUS (Là-bas)', pta('aquele / aquela / aqueles / aquelas'), pta('aquilo')],
  ];
  return tableWrap(['Position', 'Défini (Ce/Cette)', 'Neutre (Ceci/Cela)'], rows);
}

function renderPrepositionsList() {
  const preps = [
    ['em', 'dans / à'], ['de', 'de / depuis'], ['para', 'pour / vers'],
    ['com', 'avec'], ['sem', 'sans'], ['entre', 'entre'],
    ['sobre', 'sur'], ['sob', 'sous'], ['atrás de', 'derrière'], ['na frente de', 'devant'],
  ];
  return chips(preps.map(([pt, fr]) => `${pta(pt)} <span style="opacity:0.6">—</span> ${fr}`));
}

function renderSerEstarSection() {
  return `
    <div class="grammar-ser-estar">
      <div class="grammar-se-col grammar-se-ser">
        <div class="grammar-se-label">SER</div>
        <div class="grammar-se-desc">Identité, origine, profession, caractères permanents</div>
        <div class="grammar-se-example">"${ptaHighlight('Eu sou brasileiro.', 'sou')}"</div>
        <div class="grammar-se-conj">${pta('sou')} · ${pta('és')} · ${pta('é')} · ${pta('somos')} · ${pta('são')}</div>
      </div>
      <div class="grammar-se-vs">VS</div>
      <div class="grammar-se-col grammar-se-estar">
        <div class="grammar-se-label">ESTAR</div>
        <div class="grammar-se-desc">États temporaires, émotions, localisation</div>
        <div class="grammar-se-example">"${ptaHighlight('Eu estou cansado.', 'estou')}"</div>
        <div class="grammar-se-conj">${pta('estou')} · ${pta('estás')} · ${pta('está')} · ${pta('estamos')} · ${pta('estão')}</div>
      </div>
    </div>`;
}

function renderContractionsTable() {
  const groups = [
    { prep: 'de +', items: [['o',pta('do')],['a',pta('da')],['os',pta('dos')],['as',pta('das')]] },
    { prep: 'em +', items: [['o',pta('no')],['a',pta('na')],['os',pta('nos')],['as',pta('nas')]] },
    { prep: 'a +',  items: [['o',pta('ao')],['a',pta('à')],['os',pta('aos')],['as',pta('às')]] },
    { prep: 'por +', items: [['o',pta('pelo')],['a',pta('pela')]] },
  ];
  return `<div class="grammar-contractions">
    ${groups.map(g => `
      <div class="grammar-contr-group">
        <div class="grammar-contr-prep">${pta(g.prep.replace('+','').trim())} +</div>
        <div class="grammar-contr-items">
          ${g.items.map(([from, to]) => `
            <div class="grammar-contr-item">
              <span class="grammar-contr-from">${pta(from)}</span>
              <span class="grammar-contr-arrow">→</span>
              <span class="grammar-contr-to">${to}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  </div>`;
}

function renderTensesGuide() {
  const tenses = [
    { name: 'Presente',             color: 'green', desc: 'Habitudes, vérités générales', ex: 'Eu falo português.', hl: 'falo' },
    { name: 'Pretérito Perfeito',   color: 'blue',  desc: 'Actions passées terminées', ex: 'Eu falei com ela.', hl: 'falei' },
    { name: 'Pretérito Imperfeito', color: 'ochre', desc: 'Habitudes passées / descriptions', ex: 'Eu falava muito.', hl: 'falava' },
    { name: 'Futuro',               color: 'green', desc: 'Actions futures', ex: 'Eu vou falar amanhã.', hl: 'vou falar' },
    { name: 'Subjuntivo',           color: 'blue',  desc: 'Doute, souhait, émotion', ex: 'Talvez eu fale.', hl: 'fale' },
  ];
  return `<div class="grammar-tenses">
    ${tenses.map(t => `
      <div class="grammar-tense grammar-tense-${t.color}">
        <div class="grammar-tense-name">${t.name}</div>
        <div class="grammar-tense-desc">${t.desc}</div>
        <div class="grammar-tense-ex">"${ptaHighlight(t.ex, t.hl)}"</div>
      </div>
    `).join('')}
  </div>`;
}

function renderTimeExpressions() {
  const exprs = [
    ['agora', 'maintenant'], ['hoje', "aujourd'hui"], ['ontem', 'hier'],
    ['amanhã', 'demain'], ['logo', 'bientôt'], ['já', 'déjà / maintenant'],
    ['ainda', 'encore'], ['sempre', 'toujours'], ['nunca', 'jamais'],
    ['às vezes', 'parfois'], ['de vez em quando', 'de temps en temps'],
  ];
  return chips(exprs.map(([pt, fr]) => `${pta(pt)} <span style="opacity:0.6">—</span> ${fr}`));
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function tableWrap(headers, rows) {
  return `<div class="grammar-table-wrap">
    <table class="grammar-table">
      <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
  </div>`;
}

function chips(items) {
  return `<div class="grammar-chips">${items.map(html =>
    `<span class="grammar-chip">${html}</span>`
  ).join('')}</div>`;
}
