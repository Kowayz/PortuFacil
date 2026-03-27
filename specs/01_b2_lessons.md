## ✅ Status: COMPLÉTÉ — critères vérifiés, commité

# Spec 01 — Leçons niveau B2 (6 leçons)

## Priorité : HAUTE

## Contexte

Le niveau B2 est actuellement bloqué avec "Bientôt disponible". Il faut créer 6 leçons B2
dans `src/data/lessons.js` et débloquer le niveau dans `src/pages/progress.js`.

## Travail à faire

### 1. Ajouter 6 leçons B2 dans `src/data/lessons.js`

Chaque leçon doit avoir :
- `id`: `b2-1` à `b2-6`
- `level`: `'B2'`
- `title` + `subtitle` (en français)
- `icon` (emoji)
- `xp`: 120
- `sections`: au moins 3 sections (vocab, grammar/mcq, translate)

**Thèmes des 6 leçons :**

**b2-1 : Le subjonctif présent**
- Conjugaison du subjonctif: falar → fale, fales, fale, falemos, falem
- Verbes irréguliers : ser → seja, ter → tenha, estar → esteja, ir → vá
- Emploi : après "quero que", "é importante que", "embora", "para que"
- 5 mots de vocabulaire : a possibilidade, o desejo, a necessidade, embora, para que
- 3 exercices MCQ sur l'emploi du subjonctif
- 2 exercices de traduction

**b2-2 : Le futur simple et l'hypothèse**
- Futur simple régulier: falar → falarei, falará, falaremos
- Conditionnel: eu falaria, você falaria
- "Se + présent, futur" (hypothèse réelle) ; "Se + imparfait, conditionnel" (irréelle)
- 5 mots : provavelmente, certamente, talvez, caso, a hipótese
- 3 MCQ, 2 traductions

**b2-3 : Le discours indirect**
- Transformation directe → indirecte : disse que, perguntou se, pediu para
- Concordance des temps
- 5 mots : afirmar, declarar, acrescentar, segundo, de acordo com
- 3 MCQ, 2 traductions

**b2-4 : Les connecteurs logiques avancés**
- Cause : visto que, dado que, uma vez que
- Concession : apesar de, mesmo que, ainda que
- Conséquence : portanto, assim, de modo que
- 5 mots : logo, consequentemente, entretanto, todavia, no entanto
- 3 MCQ, 2 traductions + 1 conversation

**b2-5 : Vocabulaire académique et professionnel**
- Vocabulaire du monde du travail et des études
- 8 mots : a candidatura, o currículo, a entrevista, o contrato, a empresa, o prazo, a reunião, o relatório
- Expressions formelles : Venho por meio desta, Atenciosamente, Aguardo retorno
- 3 MCQ, 2 traductions

**b2-6 : Expressions idiomatiques brésiliennes**
- 8 expressions : "não é para menos", "deixa pra lá", "que saudade", "com certeza",
  "a gente", "tá bom", "de boa", "vai dar certo"
- Registres de langue : formel vs informel
- 3 MCQ, 2 traductions + 1 conversation

### 2. Débloquer le niveau B2 dans `src/pages/progress.js`

Changer la condition de déverrouillage B2 :

```js
// Avant (progress.js ~ligne 21)
const unlocked = ['A1'];
if (a1Done >= 5) unlocked.push('A2');
if (a2Done >= 7) unlocked.push('B1');

// Après — ajouter B2 (débloqué après 5 leçons B1)
const b1Done = STATE.completedLessons.filter(id => id.startsWith('b1-')).length;
const unlocked = ['A1'];
if (a1Done >= 5) unlocked.push('A2');
if (a2Done >= 7) unlocked.push('B1');
if (b1Done >= 5) unlocked.push('B2');
```

Et dans `renderRoadmap()`, changer `unlockProgress.B2` :
```js
B2: { cur: b1Done, max: 5, text: `${b1Done}/5 leçons B1 complétées` },
```

Et `isUnlocked.B2 = b1Done >= 5`.

Et retirer le cas spécial `if (lvl === 'B2') { statusBadge = 'Bientôt'; ... }` pour que B2
suive le même flux que A2/B1.

### 3. Mettre à jour LEVEL_TOTALS

`LEVEL_TOTALS` se remplit automatiquement via `initLevelTotals()` — pas de changement nécessaire.

## Acceptance Criteria

- [ ] `src/data/lessons.js` contient 6 nouvelles leçons avec les IDs b2-1 à b2-6
- [ ] Chaque leçon B2 a au moins 3 sections (incluant vocab + MCQ + translate)
- [ ] `npm run build` passe sans erreur
- [ ] Dans progress.js, le niveau B2 se débloque après 5 leçons B1 complétées
- [ ] `isUnlocked.B2` et `unlockProgress.B2` sont correctement configurés
- [ ] Le tag "Bientôt disponible" est retiré — B2 suit le flux normal (verrouillé/en cours/complété)

**Output quand terminé :** `<promise>DONE</promise>`