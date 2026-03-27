# Spec 04 — Nouveaux badges (15 achievements)

## Priorité : BASSE

## Contexte

L'app compte 26 badges. Ajouter 15 nouveaux badges pour mieux couvrir les étapes
intermédiaires et les nouvelles fonctionnalités (B2, conversations, temps d'étude).

## Travail à faire

Ajouter les badges suivants dans `src/data/badges.js` (tableau `badges`) :

```js
// Progression leçons
{ id: 'b2_started',    name: 'Cap sur le B2',      icon: '🎓', description: 'Commencer une leçon B2',
  condition: s => s.completedLessons.some(id => id.startsWith('b2-')) },
{ id: 'b2_complete',   name: 'Maître du B2',        icon: '🏆', description: 'Compléter 6 leçons B2',
  condition: s => s.completedLessons.filter(id => id.startsWith('b2-')).length >= 6 },
{ id: 'lesson_10',     name: 'Bonne lancée',        icon: '📚', description: 'Compléter 10 leçons',
  condition: s => s.completedLessons.length >= 10 },
{ id: 'lesson_20',     name: 'Déterminé(e)',        icon: '💪', description: 'Compléter 20 leçons',
  condition: s => s.completedLessons.length >= 20 },
{ id: 'all_lessons',   name: 'Cursus complet',      icon: '🎉', description: 'Compléter toutes les leçons',
  condition: s => s.completedLessons.length >= 25 },

// Vocabulaire
{ id: 'words_25',      name: 'Premiers pas',        icon: '🌱', description: 'Maîtriser 25 mots',
  condition: s => Object.values(s.learnedWords).filter(w => w?.status === 'mastered').length >= 25 },
{ id: 'words_200',     name: 'Grand lexique',       icon: '📖', description: 'Maîtriser 200 mots',
  condition: s => Object.values(s.learnedWords).filter(w => w?.status === 'mastered').length >= 200 },

// Streaks
{ id: 'streak_14',     name: 'Deux semaines !',     icon: '🔥', description: '14 jours de suite',
  condition: s => s.streak >= 14 },
{ id: 'streak_60',     name: 'Deux mois de feu',    icon: '🌋', description: '60 jours de suite',
  condition: s => s.streak >= 60 },

// Temps
{ id: 'time_30min',    name: 'Premier effort',      icon: '⏱️', description: '30 minutes d\'étude',
  condition: s => (s.totalSeconds || 0) >= 1800 },
{ id: 'time_5h',       name: 'Sérieux(se)',         icon: '🕐', description: '5 heures d\'étude',
  condition: s => (s.totalSeconds || 0) >= 18000 },
{ id: 'time_20h',      name: 'Marathonien(ne)',     icon: '⌚', description: '20 heures d\'étude',
  condition: s => (s.totalSeconds || 0) >= 72000 },

// Quiz
{ id: 'quiz_10',       name: 'Quizzeur',            icon: '🎯', description: 'Terminer 10 quiz',
  condition: s => (s.quizCount || 0) >= 10 },
{ id: 'quiz_srs',      name: 'Mémoriste',           icon: '🧠', description: 'Faire 5 révisions SRS',
  condition: s => (s.srsCount || 0) >= 5 },

// XP
{ id: 'xp_500',        name: 'Montée en puissance', icon: '⭐', description: 'Atteindre 500 XP',
  condition: s => s.xp >= 500 },
```

### Vérifier que `checkBadges` dans `src/utils/badges.js` itère sur tous les badges

La fonction doit déjà fonctionner avec le tableau `DATA.badges` — pas de changement
structurel nécessaire, juste s'assurer que les nouvelles `condition` sont des fonctions
pures qui s'évaluent correctement sur l'objet `STATE`.

## Acceptance Criteria

- [ ] 15 nouveaux badges ajoutés dans `src/data/badges.js`
- [ ] Chaque badge a `id`, `name`, `icon`, `description`, `condition` (function)
- [ ] Les IDs sont uniques (pas de doublon avec les 26 badges existants)
- [ ] `npm run build` passe sans erreur
- [ ] Le total de badges dans le fichier dépasse 40

**Output quand terminé :** `<promise>DONE</promise>`