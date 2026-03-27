export const badges = [
  {
    "id": "first_word",
    "name": "Premier Mot",
    "icon": "🌱",
    "description": "Vous avez appris votre premier mot !",
    "condition": "words >= 1"
  },
  {
    "id": "ten_words",
    "name": "Débutant",
    "icon": "📖",
    "description": "10 mots appris",
    "condition": "words >= 10"
  },
  {
    "id": "fifty_words",
    "name": "Progressant",
    "icon": "🎯",
    "description": "50 mots appris",
    "condition": "words >= 50"
  },
  {
    "id": "hundred_words",
    "name": "Centurion",
    "icon": "💯",
    "description": "100 mots appris",
    "condition": "words >= 100"
  },
  {
    "id": "first_lesson",
    "name": "Première Leçon",
    "icon": "🏫",
    "description": "Première leçon complétée",
    "condition": "lessons >= 1"
  },
  {
    "id": "five_lessons",
    "name": "Studieux",
    "icon": "🎓",
    "description": "5 leçons complétées",
    "condition": "lessons >= 5"
  },
  {
    "id": "streak_3",
    "name": "En Feu",
    "icon": "🔥",
    "description": "3 jours consécutifs",
    "condition": "streak >= 3"
  },
  {
    "id": "streak_7",
    "name": "7 Jours !",
    "icon": "⚡",
    "description": "7 jours consécutifs",
    "condition": "streak >= 7"
  },
  {
    "id": "streak_30",
    "name": "Mestre",
    "icon": "👑",
    "description": "30 jours consécutifs",
    "condition": "streak >= 30"
  },
  {
    "id": "first_quiz",
    "name": "Quiz Master",
    "icon": "🧠",
    "description": "Premier quiz réussi",
    "condition": "quizzes >= 1"
  },
  {
    "id": "perfect_quiz",
    "name": "Perfeito!",
    "icon": "⭐",
    "description": "Quiz réussi à 100%",
    "condition": "perfectQuiz >= 1"
  },
  {
    "id": "ser_estar",
    "name": "Maître SER/ESTAR",
    "icon": "⚖️",
    "description": "Leçon SER/ESTAR complétée",
    "condition": "lesson_a1-7"
  },
  {
    "id": "early_bird",
    "name": "Lève-tôt",
    "icon": "🌅",
    "description": "Leçon avant 8h du matin",
    "condition": "earlyBird"
  },
  {
    "id": "night_owl",
    "name": "Hibou Nocturne",
    "icon": "🦉",
    "description": "Leçon après 22h",
    "condition": "nightOwl"
  },
  {
    "id": "culturalist",
    "name": "Culturaliste",
    "icon": "🎭",
    "description": "Lu 5 faits culturels",
    "condition": "culturalFacts >= 5"
  },
  {
    "id": "all_a1",
    "name": "Diplômé A1",
    "icon": "🎓",
    "description": "Toutes les leçons A1 complétées !",
    "condition": "all A1 lessons done"
  },
  {
    "id": "polyglotte",
    "name": "Polyglotte",
    "icon": "🌍",
    "description": "200 mots maîtrisés",
    "condition": "words >= 200"
  },
  {
    "id": "quiz_master_5",
    "name": "Champion",
    "icon": "🏆",
    "description": "5 quiz parfaits (100%)",
    "condition": "perfectQuizzes >= 5"
  },
  {
    "id": "vocab_traveller",
    "name": "Grand Voyageur",
    "icon": "✈️",
    "description": "Catégorie Voyage maîtrisée à 100%",
    "condition": "voyage category mastered"
  },
  {
    "id": "week_warrior",
    "name": "Guerrier de la Semaine",
    "icon": "⚔️",
    "description": "Actif 7 jours dans la même semaine",
    "condition": "7 days active"
  },
  {
    "id": "srs_streak_7",
    "name": "Mémoire de Fer",
    "icon": "🧲",
    "description": "7 jours consécutifs sans mot en retard + streak actif",
    "condition": "srs + streak >= 7"
  },
  {
    "id": "all_correct",
    "name": "Sans Faute !",
    "icon": "💎",
    "description": "Quiz parfait (100%) 3 fois de suite",
    "condition": "perfectQuizzes >= 3"
  },
  {
    "id": "speed_learner",
    "name": "Apprenant Rapide",
    "icon": "⚡",
    "description": "Première leçon complétée",
    "condition": "first lesson completed"
  },
  {
    "id": "vocab_500",
    "name": "Vocabulaire Riche",
    "icon": "📚",
    "description": "500 mots maîtrisés !",
    "condition": "words >= 500"
  },
  {
    "id": "b1_complete",
    "name": "Intermédiaire",
    "icon": "🌟",
    "description": "Toutes les leçons B1 complétées",
    "condition": "all B1 lessons done"
  },
  {
    "id": "night_study",
    "name": "Chouette Nocturne",
    "icon": "🦉",
    "description": "Étudier après 22h pendant 5 jours de suite",
    "condition": "night + streak >= 5"
  },
  {
    "id": "b2_started",
    "name": "Cap sur le B2",
    "icon": "🎓",
    "description": "Commencer une leçon B2",
    "condition": "b2 lesson started"
  },
  {
    "id": "b2_complete",
    "name": "Maître du B2",
    "icon": "🏆",
    "description": "Compléter 6 leçons B2",
    "condition": "b2 lessons >= 6"
  },
  {
    "id": "lesson_10",
    "name": "Bonne lancée",
    "icon": "📚",
    "description": "Compléter 10 leçons",
    "condition": "lessons >= 10"
  },
  {
    "id": "lesson_20",
    "name": "Déterminé(e)",
    "icon": "💪",
    "description": "Compléter 20 leçons",
    "condition": "lessons >= 20"
  },
  {
    "id": "all_lessons",
    "name": "Cursus complet",
    "icon": "🎉",
    "description": "Compléter toutes les leçons",
    "condition": "lessons >= 25"
  },
  {
    "id": "words_25",
    "name": "Premiers pas",
    "icon": "🌱",
    "description": "Maîtriser 25 mots",
    "condition": "mastered words >= 25"
  },
  {
    "id": "words_200",
    "name": "Grand lexique",
    "icon": "📖",
    "description": "Maîtriser 200 mots",
    "condition": "mastered words >= 200"
  },
  {
    "id": "streak_14",
    "name": "Deux semaines !",
    "icon": "🔥",
    "description": "14 jours de suite",
    "condition": "streak >= 14"
  },
  {
    "id": "streak_60",
    "name": "Deux mois de feu",
    "icon": "🌋",
    "description": "60 jours de suite",
    "condition": "streak >= 60"
  },
  {
    "id": "time_30min",
    "name": "Premier effort",
    "icon": "⏱️",
    "description": "30 minutes d'étude",
    "condition": "totalSeconds >= 1800"
  },
  {
    "id": "time_5h",
    "name": "Sérieux(se)",
    "icon": "🕐",
    "description": "5 heures d'étude",
    "condition": "totalSeconds >= 18000"
  },
  {
    "id": "time_20h",
    "name": "Marathonien(ne)",
    "icon": "⌚",
    "description": "20 heures d'étude",
    "condition": "totalSeconds >= 72000"
  },
  {
    "id": "quiz_10",
    "name": "Quizzeur",
    "icon": "🎯",
    "description": "Terminer 10 quiz",
    "condition": "quizCount >= 10"
  },
  {
    "id": "quiz_srs",
    "name": "Mémoriste",
    "icon": "🧠",
    "description": "Faire 5 révisions SRS",
    "condition": "srsCount >= 5"
  },
  {
    "id": "xp_500",
    "name": "Montée en puissance",
    "icon": "⭐",
    "description": "Atteindre 500 XP",
    "condition": "xp >= 500"
  }
];
