import { lookupWord } from '../utils/dictionary.js';

export function openDictModal(rawWord) {
  const modal = document.getElementById('dict-modal');
  const content = document.getElementById('dict-modal-content');
  if (!modal || !content) return;

  // Show loading
  content.innerHTML = `
    <div class="dict-loading">
      <div class="dict-spinner"></div>
      <p>Recherche dans le Wiktionnaire…</p>
    </div>
  `;
  modal.classList.add('show');

  lookupWord(rawWord).then(entry => {
    if (!entry || (!entry.definitions.length && !entry.ipa.length)) {
      content.innerHTML = `
        <div class="dict-not-found">
          <div style="font-size:2rem;margin-bottom:8px">🔍</div>
          <h3>${rawWord}</h3>
          <p>Mot non trouvé dans le Wiktionnaire français.</p>
          <a href="https://fr.wiktionary.org/wiki/${encodeURIComponent(rawWord)}" target="_blank"
            style="color:var(--blue);font-size:0.85rem">Ouvrir dans le Wiktionnaire →</a>
        </div>
      `;
      return;
    }

    const posLabels = {
      nom: 'Nom', verbe: 'Verbe', adjectif: 'Adjectif', adverbe: 'Adverbe',
      pronom: 'Pronom', préposition: 'Préposition', interjection: 'Interjection',
    };

    content.innerHTML = `
      <div class="dict-header">
        <h2 class="dict-word">${entry.word}</h2>
        ${entry.pos ? `<span class="dict-pos">${posLabels[entry.pos] || entry.pos}</span>` : ''}
        <a class="dict-wikt-link" href="https://fr.wiktionary.org/wiki/${encodeURIComponent(entry.word)}"
          target="_blank" title="Ouvrir dans le Wiktionnaire">↗</a>
      </div>

      ${entry.ipa.length ? `
        <div class="dict-ipa-row">
          ${entry.ipa.map(e => `
            <span class="dict-ipa-chip">
              <span class="dict-ipa-text">[${e.ipa}]</span>
              ${e.region ? `<span class="dict-ipa-region">${e.region}</span>` : ''}
            </span>
          `).join('')}
        </div>
      ` : ''}

      ${entry.definitions.length ? `
        <div class="dict-section">
          <h4 class="dict-section-title">Définitions</h4>
          <ol class="dict-definitions">
            ${entry.definitions.map(d => `<li>${d}</li>`).join('')}
          </ol>
        </div>
      ` : ''}

      ${entry.examples.length ? `
        <div class="dict-section">
          <h4 class="dict-section-title">Exemples</h4>
          ${entry.examples.map(ex => `
            <div class="dict-example">
              <div class="dict-example-pt">🇵🇹 ${ex.pt}</div>
              <div class="dict-example-fr">${ex.fr}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${entry.etymology ? `
        <div class="dict-section">
          <h4 class="dict-section-title">Étymologie</h4>
          <p class="dict-etymology">${entry.etymology}</p>
        </div>
      ` : ''}
    `;
  }).catch(() => {
    content.innerHTML = `
      <div class="dict-not-found">
        <div style="font-size:2rem;margin-bottom:8px">⚠️</div>
        <p>Impossible de contacter le Wiktionnaire.<br>Vérifiez votre connexion.</p>
      </div>
    `;
  });
}

export function closeDictModal() {
  document.getElementById('dict-modal')?.classList.remove('show');
}
