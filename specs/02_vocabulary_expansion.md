# Spec 02 — Expansion du vocabulaire (5 nouvelles catégories)

## Priorité : MOYENNE

## Contexte

Le vocabulaire actuel compte 21 catégories et 311 mots. L'objectif est d'ajouter 5 nouvelles
catégories thématiques avec 12-15 mots chacune, pour atteindre ~400 mots et enrichir la
pratique via les flip-cards et le quiz vocab.

## Travail à faire

Ajouter 5 nouvelles catégories dans `src/data/vocabulary.js`, à la fin du tableau `categories`.

### Structure d'une catégorie
```js
{
  id: 'sante',          // identifiant unique, snake_case
  label: 'Santé',       // nom affiché en français
  icon: '🏥',
  color: '#e74c3c',
  words: [
    { pt: '...', fr: '...', emoji: '...' },
    // ...
  ]
}
```

### Catégorie 1 : Santé (id: `sante`, icon: 🏥, color: #e74c3c)
12 mots minimum :
- o médico / le médecin 👨‍⚕️
- o hospital / l'hôpital 🏥
- a farmácia / la pharmacie 💊
- o remédio / le médicament 💊
- a dor / la douleur 😣
- a febre / la fièvre 🌡️
- o resfriado / le rhume 🤧
- a consulta / la consultation 📋
- o exame / l'examen 🔬
- a cirurgia / la chirurgie 🔪
- saudável / en bonne santé 💪
- doente / malade 🤒

### Catégorie 2 : Technologie (id: `tecnologia`, icon: 💻, color: #3498db)
12 mots minimum :
- o computador / l'ordinateur 💻
- o celular / le téléphone portable 📱
- a internet / internet 🌐
- o aplicativo / l'application 📲
- a senha / le mot de passe 🔐
- o arquivo / le fichier 📁
- a tela / l'écran 🖥️
- o teclado / le clavier ⌨️
- a impressora / l'imprimante 🖨️
- o carregador / le chargeur 🔌
- baixar / télécharger ⬇️
- enviar / envoyer 📤

### Catégorie 3 : Météo & Nature (id: `clima`, icon: ⛅, color: #27ae60)
12 mots minimum :
- o sol / le soleil ☀️
- a chuva / la pluie 🌧️
- o vento / le vent 💨
- a neve / la neige ❄️
- a nuvem / le nuage ☁️
- o trovão / le tonnerre ⛈️
- o calor / la chaleur 🌡️
- o frio / le froid 🥶
- a tempestade / la tempête 🌪️
- o arco-íris / l'arc-en-ciel 🌈
- úmido / humide 💧
- seco / sec 🏜️

### Catégorie 4 : Voyages (id: `viagens`, icon: ✈️, color: #9b59b6)
14 mots minimum :
- o aeroporto / l'aéroport ✈️
- o avião / l'avion 🛫
- o hotel / l'hôtel 🏨
- a mala / la valise 🧳
- o passaporte / le passeport 🛂
- a viagem / le voyage 🗺️
- o bilhete / le billet 🎫
- o voo / le vol ✈️
- a reserva / la réservation 📞
- o guia / le guide 📖
- o turista / le touriste 🧳
- chegar / arriver 🛬
- partir / partir 🛫
- a fronteira / la frontière 🚧

### Catégorie 5 : Cuisine & Gastronomie (id: `gastronomia`, icon: 👨‍🍳, color: #f39c12)
14 mots minimum :
- a receita / la recette 📝
- os ingredientes / les ingrédients 🥬
- o tempero / l'assaisonnement 🧂
- a panela / la casserole 🍲
- assar / cuire au four 🔥
- fritar / frire 🍳
- cozinhar / cuisiner 👨‍🍳
- o sabor / la saveur 😋
- doce / sucré 🍬
- salgado / salé 🧂
- picante / épicé 🌶️
- o churrasco / le barbecue brésilien 🥩
- a feijoada / la feijoada 🫘
- o brigadeiro / le brigadeiro 🍫

## Acceptance Criteria

- [ ] 5 nouvelles catégories ajoutées dans `src/data/vocabulary.js`
- [ ] Chaque catégorie contient au moins 12 mots avec `pt`, `fr`, et `emoji`
- [ ] Les IDs sont uniques et en snake_case
- [ ] `npm run build` passe sans erreur
- [ ] Le total de catégories passe de 21 à 26
- [ ] Le total de mots dépasse 400

**Output quand terminé :** `<promise>DONE</promise>`
