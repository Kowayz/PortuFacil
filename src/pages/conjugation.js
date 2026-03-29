import { DATA } from '../data/index.js';
import { showToast } from '../components/toast.js';

let currentTense = 'presente';

export function renderConjugation() {
  renderEssentialVerbs();
  renderRegularVerbGroups();

  const searchInput = document.getElementById('conjugation-search');
  const searchBtn = document.getElementById('conjugation-search-btn');
  if (searchBtn && !searchBtn.dataset.bound) {
    searchBtn.addEventListener('click', () => searchVerb(searchInput.value.trim().toLowerCase()));
    searchBtn.dataset.bound = 'true';
  }
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') searchVerb(searchInput.value.trim().toLowerCase());
    });
    searchInput.dataset.bound = 'true';
  }
}

function renderEssentialVerbs() {
  const container = document.getElementById('essential-verbs-container');
  if (!container) return;
  const essentialIds = new Set(DATA.conjugation.essential.map(v => v.verb));
  const fromVerbs = (DATA.conjugation.verbs || [])
    .filter(v => !essentialIds.has(v.infinitive))
    .map(v => ({ verb: v.infinitive, meaning: v.translation, irregular: v.type === 'irregular' }));
  const all = [...DATA.conjugation.essential, ...fromVerbs];
  container.innerHTML = all.map(v => `
    <div class="essential-verb-card" onclick="showVerbConjugation('${v.verb}')">
      <div class="essential-verb-name">${v.verb}</div>
      <div class="essential-verb-meaning">${v.meaning}</div>
      ${v.irregular ? '<span class="essential-verb-badge badge-irreg">Irrégulier</span>' : ''}
    </div>
  `).join('');
}

function renderRegularVerbGroups() {
  const container = document.getElementById('verb-groups-container');
  if (!container) return;
  const groups = ['ar', 'er', 'ir'];
  const colors = ['ar-header', 'er-header', 'ir-header'];
  container.innerHTML = `
    <div class="verb-groups-grid">
      ${groups.map((g, i) => {
        const group = DATA.conjugation.regular[g];
        const tense = group.tenses.presente;
        const pronouns = Object.keys(tense);
        return `
          <div class="verb-group-card">
            <div class="verb-group-header ${colors[i]}">${group.infinitive}</div>
            <div class="verb-group-body">
              ${pronouns.map(p => `
                <div class="verb-group-row">
                  <span class="vg-pronoun">${p}</span>
                  <span class="vg-ending">${tense[p]}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Resolve a verb from either essential list or verbs array.
// Returns a normalized object with { name, meaning, irregular, tenses: { presente, ... } }
function resolveVerb(verbName) {
  const essential = DATA.conjugation.essential.find(v => v.verb === verbName);
  if (essential) return essential;
  const entry = (DATA.conjugation.verbs || []).find(v => v.infinitive === verbName);
  if (entry) {
    return {
      verb: entry.infinitive,
      meaning: entry.translation,
      irregular: entry.type === 'irregular',
      tenses: {
        presente: entry.presente,
        preteritoPerfeito: entry.preteritoPerfeito,
        preteritoImperfeito: entry.preteritoImperfeito,
        futuro: entry.futuro,
      },
    };
  }
  return null;
}

export function searchVerb(verb) {
  if (!verb) return;
  const found = resolveVerb(verb);
  if (found) {
    showVerbConjugation(found.verb);
  } else {
    // Fall back to regular group if verb ends in -ar/-er/-ir
    const suffix = verb.slice(-2);
    if (['ar', 'er', 'ir'].includes(suffix)) {
      const group = DATA.conjugation.regular[suffix];
      if (group) {
        showRegularGroupConjugation(verb, suffix, group);
        return;
      }
    }
    showToast('warning', '🔍 Verbe introuvable', 'Essayez : falar, ser, estar, ter, ir, fazer, poder, querer...');
  }
}

function showRegularGroupConjugation(verbName, suffix, group) {
  const result = document.getElementById('conjugation-result');
  result.classList.add('show');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const tenseNames = { presente: 'Présent', preteritoPerfeito: 'Passé simple', preteritoImperfeito: 'Imparfait', futuro: 'Futur' };
  const tenseKeys = ['presente', 'preteritoPerfeito', 'preteritoImperfeito', 'futuro'];
  result.innerHTML = `
    <div class="conjugation-verb-header">
      <div class="conjugation-verb-name">${verbName}</div>
      <div class="conjugation-verb-meaning">Verbe régulier -${suffix.toUpperCase()}</div>
    </div>
    <div class="tense-tabs">
      ${tenseKeys.map(t => `
        <button class="tense-tab ${t === currentTense ? 'active' : ''}" onclick="switchTense('${verbName}', '${t}')">
          ${tenseNames[t]}
        </button>
      `).join('')}
    </div>
    <div id="tense-table-container">${renderRegularGroupTable(verbName, suffix, group, currentTense)}</div>
  `;
}

function renderRegularGroupTable(verbName, suffix, group, tense) {
  const tenseNames = { presente: 'Présent', preteritoPerfeito: 'Passé simple', preteritoImperfeito: 'Imparfait', futuro: 'Futur' };
  const conjugations = group.tenses[tense];
  if (!conjugations) return '';
  const pronouns = Object.keys(conjugations);
  return `
    <div class="conj-table">
      <table>
        <thead><tr><th>Pronom</th><th>${tenseNames[tense] || tense}</th></tr></thead>
        <tbody>
          ${pronouns.map(p => `
            <tr>
              <td class="conj-pronoun">${p}</td>
              <td class="conj-form">${conjugations[p]}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="lesson-section-text" style="margin-top:16px">💡 Formes basées sur le modèle régulier -${suffix.toUpperCase()}. Remplacez le radical de <em>${verbName}</em> selon ces terminaisons.</div>
  `;
}

export function showVerbConjugation(verbName) {
  const verb = resolveVerb(verbName);
  if (!verb) return;
  const result = document.getElementById('conjugation-result');
  result.classList.add('show');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const tenses = Object.keys(verb.tenses);
  const tenseNames = {
    presente: 'Présent', preteritoPerfeito: 'Passé simple',
    preteritoImperfeito: 'Imparfait', futuro: 'Futur',
  };

  result.innerHTML = `
    <div class="conjugation-verb-header">
      <div class="conjugation-verb-name">${verb.verb}</div>
      <div class="conjugation-verb-meaning">${verb.meaning}</div>
      ${verb.irregular ? '<div class="conj-irregular-badge">⚡ Verbe irrégulier</div>' : ''}
    </div>
    <div class="tense-tabs">
      ${tenses.map(t => `
        <button class="tense-tab ${t === currentTense ? 'active' : ''}" onclick="switchTense('${verbName}', '${t}')">
          ${tenseNames[t] || t}
        </button>
      `).join('')}
    </div>
    <div id="tense-table-container">${renderTenseTable(verb, currentTense)}</div>
  `;
}

export function switchTense(verbName, tense) {
  currentTense = tense;
  document.querySelectorAll('.tense-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('onclick')?.includes(`'${tense}'`));
  });
  const container = document.getElementById('tense-table-container');
  if (container) {
    const verb = resolveVerb(verbName);
    if (verb) container.innerHTML = renderTenseTable(verb, tense);
  }
}

function renderTenseTable(verb, tense) {
  const conjugations = verb.tenses[tense];
  if (!conjugations) return '';
  const pronouns = Object.keys(conjugations);
  const tenseNames = {
    presente: 'Présent', preteritoPerfeito: 'Passé simple',
    preteritoImperfeito: 'Imparfait', futuro: 'Futur',
  };
  const exampleSentences = {
    ser:    { presente: 'Eu sou português.', preteritoPerfeito: 'Eu fui a Lisboa.', preteritoImperfeito: 'Eu era jovem.', futuro: 'Eu serei médico.' },
    estar:  { presente: 'Eu estou bem.', preteritoPerfeito: 'Eu estive em Paris.', preteritoImperfeito: 'Eu estava cansado.', futuro: 'Eu estarei lá.' },
    ter:    { presente: 'Eu tenho um cão.', preteritoPerfeito: 'Eu tive uma ideia.', preteritoImperfeito: 'Eu tinha fome.', futuro: 'Eu terei tempo.' },
    ir:     { presente: 'Eu vou ao mercado.', preteritoPerfeito: 'Eu fui ao cinema.', preteritoImperfeito: 'Eu ia à escola.', futuro: 'Eu irei a Portugal.' },
    fazer:  { presente: 'Eu faço o jantar.', preteritoPerfeito: 'Eu fiz os trabalhos.', preteritoImperfeito: 'Eu fazia exercício.', futuro: 'Eu farei uma viagem.' },
    poder:  { presente: 'Eu posso ajudar.', preteritoPerfeito: 'Eu pude vir.', preteritoImperfeito: 'Eu podia nadar.', futuro: 'Eu poderei participar.' },
    querer: { presente: 'Eu quero aprender.', preteritoPerfeito: 'Eu quis ficar.', preteritoImperfeito: 'Eu queria ser feliz.', futuro: 'Eu quererei viajar.' },
    dizer:  { presente: 'Eu digo a verdade.', preteritoPerfeito: 'Eu disse tudo.', preteritoImperfeito: 'Eu dizia sempre.', futuro: 'Eu direi obrigado.' },
    falar:  { presente: 'Eu falo português.', preteritoPerfeito: 'Eu falei com ele.', preteritoImperfeito: 'Eu falava rápido.', futuro: 'Eu falarei amanhã.' },
    comer:  { presente: 'Eu como fruta.', preteritoPerfeito: 'Eu comi bem.', preteritoImperfeito: 'Eu comia pouco.', futuro: 'Eu comerei lá.' },
  };
  const example = exampleSentences[verb.verb]?.[tense] || '';
  return `
    <div class="conj-table">
      <table>
        <thead><tr><th>Pronom</th><th>${tenseNames[tense] || tense}</th></tr></thead>
        <tbody>
          ${pronouns.map(p => `
            <tr>
              <td class="conj-pronoun">${p}</td>
              <td class="conj-form">${conjugations[p]}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ${example ? `<div class="lesson-section-text" style="margin-top:16px">💬 Exemple : <em>${example}</em></div>` : ''}
  `;
}
