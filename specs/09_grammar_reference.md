# Spec 09 — Page de référence grammaticale

## Priorité : MOYENNE

## Contexte

Il n'y a pas de page "Grammaire" dédiée aux tableaux de référence rapide (pronoms,
articles, prépositions, expressions clés). C'est une ressource essentielle que les
apprenants consultent souvent. À ajouter en tant que nouvelle page `page-grammar`.

## Travail à faire

### 1. Ajouter la page dans `index.html`

Après `page-pronunciation`, ajouter :
```html
<div class="page" id="page-grammar">
  <div class="container section">
    <div class="section-header">
      <h2 class="section-title">📋 Référence grammaticale</h2>
      <p class="section-sub">Tableaux essentiels pour le portugais brésilien.</p>
    </div>
    <div id="grammar-content"></div>
  </div>
</div>
```

### 2. Ajouter le lien dans la sidebar et la bottom nav

Dans la sidebar (groupe "Découvrir") :
```html
<button class="s-link" data-page="grammar"><span class="s-icon">📋</span><span class="s-label">Grammaire</span></button>
```

### 3. Créer `src/pages/grammar.js`

Contenu du fichier : une fonction `renderGrammar()` qui génère les tableaux dans `#grammar-content`.

**Sections à générer :**

#### 3a. Pronoms personnels
| Personne | Sujet | Complément direct | Complément indirect |
|----------|-------|-------------------|---------------------|
| 1sg | eu | me | me |
| 2sg | você/tu | te/você | te/lhe |
| 3sg | ele/ela | o/a | lhe |
| 1pl | nós/a gente | nos | nos |
| 2pl | vocês | os/as | lhes |
| 3pl | eles/elas | os/as | lhes |

#### 3b. Articles
| | Masculin sg | Féminin sg | Masculin pl | Féminin pl |
|-|-------------|------------|-------------|------------|
| Défini | o | a | os | as |
| Indéfini | um | uma | uns | umas |

#### 3c. Prépositions de lieu
em (dans/à), de (de/depuis), para (pour/vers), com (avec), sem (sans),
entre (entre), sobre (sur), sob (sous), atrás de (derrière), na frente de (devant)

#### 3d. Ser vs Estar
SER : identité, origine, profession, caractéristiques permanentes
ESTAR : états temporaires, émotions, localisation, participe présent
Exemples : "Eu sou brasileiro" vs "Eu estou cansado"

#### 3e. Contractions obligatoires
de + o = do, de + a = da, de + os = dos, de + as = das
em + o = no, em + a = na, em + os = nos, em + as = nas
a + o = ao, a + a = à, a + os = aos, a + as = às
por + o = pelo, por + a = pela

#### 3f. Temps verbaux — quand les utiliser ?
- **Presente** : actions habituelles, vérités générales
- **Pretérito Perfeito** : actions passées terminées (ontem, já)
- **Pretérito Imperfeito** : actions passées habituelles/descriptions (antes, sempre)
- **Futuro** : actions futures (amanhã, logo)
- **Subjuntivo** : doute, souhait, émotion (quero que, talvez)

#### 3g. Expressions de temps courantes
agora (maintenant), hoje (aujourd'hui), ontem (hier), amanhã (demain),
logo (bientôt/tout à l'heure), já (déjà/maintenant), ainda (encore/toujours),
sempre (toujours), nunca (jamais), às vezes (parfois), de vez em quando (de temps en temps)

### 4. Format HTML des tableaux

```js
export function renderGrammar() {
  const container = document.getElementById('grammar-content');
  if (!container) return;
  container.innerHTML = [
    renderGrammarSection('Pronoms personnels', renderPronounsTable()),
    renderGrammarSection('Articles', renderArticlesTable()),
    renderGrammarSection('Prépositions de lieu', renderPrepositionsList()),
    renderGrammarSection('SER vs ESTAR', renderSerEstarSection()),
    renderGrammarSection('Contractions obligatoires', renderContractionsTable()),
    renderGrammarSection('Les temps verbaux', renderTensesGuide()),
    renderGrammarSection('Expressions de temps', renderTimeExpressions()),
  ].join('');
}

function renderGrammarSection(title, content) {
  return `<div class="grammar-section fade-in">
    <h3 class="grammar-section-title">${title}</h3>
    ${content}
  </div>`;
}
```

### 5. CSS dans `src/styles/_components.css`

```css
.grammar-section { margin-bottom: 40px; }
.grammar-section-title {
  font-size: 1.1rem; font-weight: 700; color: var(--blue);
  margin-bottom: 16px; padding-bottom: 8px;
  border-bottom: 2px solid var(--cream-dark);
}
.grammar-table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
.grammar-table th {
  background: var(--blue); color: white; padding: 10px 14px; text-align: left;
}
.grammar-table td { padding: 10px 14px; border-bottom: 1px solid var(--cream-dark); }
.grammar-table tr:hover td { background: var(--cream); }
.grammar-tag-ser { background: var(--blue-pale); color: var(--blue); padding: 2px 8px; border-radius: 12px; font-size: 0.85rem; }
.grammar-tag-estar { background: var(--green-pale); color: var(--green); padding: 2px 8px; border-radius: 12px; font-size: 0.85rem; }
.grammar-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.grammar-chip {
  background: var(--cream); border-radius: var(--radius); padding: 6px 12px;
  font-size: 0.9rem;
}
.grammar-chip strong { color: var(--blue); }
[data-theme="dark"] .grammar-section-title { color: var(--ochre-light); border-color: var(--dark-border); }
[data-theme="dark"] .grammar-table th { background: var(--dark-card); }
[data-theme="dark"] .grammar-table td { border-color: var(--dark-border); }
[data-theme="dark"] .grammar-table tr:hover td { background: rgba(255,255,255,0.05); }
[data-theme="dark"] .grammar-chip { background: var(--dark-card); }
```

### 6. Enregistrer le renderer dans `src/main.js`

```js
import { renderGrammar } from './pages/grammar.js';
// ...
registerPageRenderer('grammar', renderGrammar);
```

## Acceptance Criteria

- [ ] La page `page-grammar` existe dans `index.html`
- [ ] Le lien "Grammaire" apparaît dans la sidebar
- [ ] `src/pages/grammar.js` existe et exporte `renderGrammar()`
- [ ] La page affiche au moins 5 sections (pronoms, articles, ser/estar, contractions, temps verbaux)
- [ ] Les tableaux sont lisibles en desktop ET mobile
- [ ] Dark mode fonctionne
- [ ] `npm run build` passe sans erreur

**Output quand terminé :** `<promise>DONE</promise>`
