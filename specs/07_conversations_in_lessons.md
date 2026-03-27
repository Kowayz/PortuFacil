# Spec 07 — Conversations dans les leçons (6 dialogues)

## Priorité : HAUTE

## Contexte

La page leçons supporte déjà le type `'conversation'` dans `renderLessonSection()` et
`playConversation()` / `answerConv()` existent dans `src/pages/lessons.js`. Mais
actuellement aucune leçon n'utilise ce type. Il faut enrichir 6 leçons avec un dialogue.

## Travail à faire

Ajouter une section `{ type: 'conversation', ... }` à la fin des `sections` de ces 6 leçons
dans `src/data/lessons.js`.

### Structure d'une conversation
```js
{
  type: 'conversation',
  title: 'Dialogue : ...',
  setup: 'Description de la situation (italique, contexte en français)',
  speakers: [
    { name: 'Prénom1', avatar: '👨🏻' },
    { name: 'Prénom2', avatar: '👩🏽' }
  ],
  lines: [
    { speaker: 0, pt: 'Texte portugais', fr: 'Traduction française', hl: ['mot_à_surligner'] },
    // ... Une ligne avec blank :
    { speaker: 0, pt: 'Muito ___, obrigado!', fr: 'Très ___, merci !', blank: 'bom', hl: ['obrigado'] },
  ],
  options: ['bom', 'mau', 'caro', 'tarde']   // 4 options dont 1 correcte
}
```

### Les 6 conversations à ajouter

**a1-3** (thème : chiffres/nombres) — Chez le boulanger
- Setup : Carlos entre dans une padaria (boulangerie) et commande.
- Speakers : Carlos 👨🏻, Padeiro 👨🏾
- Lignes (4-5) : commande de pains + prix + blank = "dois" (deux pains)
- Options : dois, três, um, cinco

**a1-4** (thème : famille) — Présenter sa famille
- Setup : Sofia montre des photos à son ami Pedro.
- Speakers : Sofia 👩🏽, Pedro 👦🏻
- Lignes (4-5) : parler de frère/sœur + blank = "irmã" (sœur)
- Options : irmã, mãe, filha, tia

**a1-5** (thème : couleurs) — Chez le magasin de vêtements
- Setup : Ana cherche une robe dans un magasin.
- Speakers : Ana 👩🏻, Vendedor 🧑🏽
- Lignes (4-5) : couleur + taille + blank = "azul" (bleu)
- Options : azul, vermelho, verde, amarelo

**a2-1** (thème : routine quotidienne) — Collègues au bureau
- Setup : João et Mariana parlent de leur journée de travail.
- Speakers : João 👨🏻, Mariana 👩🏽
- Lignes (5) : heure de lever + transport + blank = "acordo" (je me réveille)
- Options : acordo, durmo, trabalho, chego

**a2-3** (thème : restaurant) — Commander au restaurant
- Setup : Dois amigos num restaurante brasileiro.
- Speakers : Cliente 👨🏻, Garçom 👨🏾
- Lignes (5) : commande + boisson + blank = "conta" (l'addition)
- Options : conta, cardápio, mesa, prato

**b1-1** (thème : voyage) — À l'aéroport
- Setup : Laura arrive à l'aéroport de São Paulo.
- Speakers : Laura 👩🏻, Agente 👩🏾
- Lignes (5) : check-in + bagages + blank = "passaporte" (passeport)
- Options : passaporte, bilhete, mala, cartão

### Règles pour chaque dialogue
- 4-5 lignes au total
- Exactement 1 ligne avec `blank` (la réponse à trouver)
- 4 `options` dont exactement 1 correcte
- Les mots en `hl` doivent correspondre au thème de la leçon
- Les textes `fr` (traduction) doivent être en français

## Acceptance Criteria

- [ ] Les 6 leçons (a1-3, a1-4, a1-5, a2-1, a2-3, b1-1) ont chacune une section `type: 'conversation'`
- [ ] Chaque conversation a `speakers`, `lines` (4-5), et `options` (4 choix)
- [ ] Chaque conversation a exactement 1 ligne avec `blank`
- [ ] `npm run build` passe sans erreur

**Output quand terminé :** `<promise>DONE</promise>`
