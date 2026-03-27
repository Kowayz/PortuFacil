# Spec 10 — Expansion des faits culturels + Mot du jour enrichi

## Priorité : BASSE

## Contexte

`src/data/culturalFacts.js` contient peu de faits. La section culturelle de la page
d'accueil est un point fort de l'app — l'enrichir avec plus de contenu la rend plus
engageante. De même, le "mot du jour" dans `DATA.wordOfDay` peut être augmenté.

## Travail à faire

### 1. Vérifier la structure actuelle de `src/data/culturalFacts.js`

Lire le fichier et identifier le format exact (champs utilisés).

### 2. Ajouter 15 nouveaux faits culturels

Garder la même structure que les faits existants. Thèmes variés :

**Cuisine brésilienne :**
- La feijoada : plat national brésilien, ragoût de haricots noirs et viandes fumées, mangé le mercredi et le samedi dans tout le pays.
- Le churrasco brésilien : bien plus qu'un simple barbecue, c'est un rituel social. Le Brésil possède plus de 4kg de viande bovine par habitant et par an.
- Le brigadeiro : bonbon au chocolat créé en 1945 lors d'une campagne présidentielle, consommé à chaque anniversaire brésilien.
- Le café brésilien : le Brésil est le 1er producteur mondial de café depuis 150 ans. Le "cafezinho" (petit café sucré) est une institution sociale.

**Géographie & Nature :**
- L'Amazonie brésilienne : 60% de la forêt amazonienne est en territoire brésilien, soit 5,5 millions de km².
- Le Pantanal : la plus grande zone humide tropicale du monde, abritant 650 espèces d'oiseaux et 1000 espèces de poissons.
- Les chutes d'Iguaçu : 275 cascades sur 2,7 km, classées 7e merveille naturelle du monde. Le nom vient du guaraní "grande eau".

**Musique & Culture :**
- La bossa nova : née à Rio en 1958 avec João Gilberto, fusion de samba et jazz. "Garota de Ipanema" est la 2e chanson la plus reprise au monde.
- Le carnaval de Rio : 2 millions de personnes par jour pendant 5 jours, 200 écoles de samba en compétition, 1 milliard de téléspectateurs dans le monde.
- L'axé music : genre musical né à Salvador de Bahia dans les années 80, mélangeant reggae, samba et musiques africaines.

**Langue & Société :**
- Le portugais brésilien vs européen : les deux pays se comprennent mais avec des différences notables. "Ônibus" au Brésil = "autocarro" au Portugal ; "você" (Brésil) vs "tu" (Portugal).
- L'influence africaine : 55% de la population brésilienne se déclare d'ascendance africaine. Plus de 2 millions de mots africains ont enrichi le portugais brésilien.
- Le "jeitinho brasileiro" : expression typique désignant la capacité brésilienne à trouver des solutions créatives à tout problème, avec débrouillardise et bonne humeur.

**Histoire :**
- Brasília : la capitale fut construite en seulement 41 mois (1956-1960) au cœur du pays. Conçue par Oscar Niemeyer, elle est classée au patrimoine UNESCO.
- La langue tupi : avant l'arrivée des Portugais en 1500, 1000+ langues indigènes étaient parlées. Le tupi a laissé des centaines de mots dans le portugais brésilien : abacaxi, mandioca, piranha, jaguar.

### 3. Vérifier `DATA.wordOfDay` dans `src/data/` et ajouter 14 mots

Trouver où `wordOfDay` est défini (dans `src/data/meta.js` ou `src/data/index.js`)
et ajouter 14 nouveaux mots (pour avoir au moins 21 = 3 semaines de rotation) :

Format :
```js
{ word: 'saudade', translation: 'la nostalgie/le manque', emoji: '💙', example: 'Sinto saudade de você.' }
```

Nouveaux mots à ajouter :
- saudade (la nostalgie) 💙 — Sinto saudade de você.
- madrugada (le petit matin, entre minuit et 5h) 🌙 — Cheguei de madrugada.
- gostoso (délicieux/agréable) 😋 — Esse prato está muito gostoso!
- jeito (façon/manière) 🤝 — Tem jeito de resolver isso.
- carinho (tendresse/affection) 🤗 — Você tem muito carinho.
- bairro (quartier) 🏘️ — Moro num bairro tranquilo.
- sotaque (accent) 🗣️ — Você tem um sotaque bonito.
- sorriso (sourire) 😊 — O sorriso dela é lindo.
- preguiça (paresse) 😴 — Que preguiça de sair de casa!
- chuva (pluie) 🌧️ — Adoro cheiro de chuva.
- abraço (étreinte/câlin) 🤗 — Preciso de um abraço.
- alegria (joie) 🎉 — Ela transborda alegria.
- tranquilo (tranquille/calme) 😌 — Está tudo tranquilo.
- bacana (sympa/cool, argot brésilien) 😎 — Que ideia bacana!

## Acceptance Criteria

- [ ] `src/data/culturalFacts.js` contient au moins 20 faits au total
- [ ] Les 15 nouveaux faits ont la même structure que les faits existants
- [ ] `DATA.wordOfDay` contient au moins 21 mots (rotation 3 semaines)
- [ ] `npm run build` passe sans erreur

**Output quand terminé :** `<promise>DONE</promise>`
