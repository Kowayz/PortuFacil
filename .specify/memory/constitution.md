# PortuFácil — Project Constitution

## Project Vision

**PortuFácil** is a French-language Portuguese learning web app that feels like a real mobile app — beautiful, motivating, and genuinely effective at teaching Brazilian Portuguese.

The goal: a learner opens the app, feels instantly engaged, and makes real progress through a well-designed blend of lessons, quizzes, vocabulary, conjugation practice, and spaced repetition.

## What We're Building

A **single-page application** (SPA) for learning Portuguese, targeting French speakers. Key features:

- **Lessons** — Structured A1→B2 course with MCQ, translation exercises, and conversation dialogs
- **Vocabulary** — Flip-card system with SRS (spaced repetition scheduling)
- **Conjugation** — Verb conjugation tables searchable by verb
- **Pronunciation** — Alphabet and phonetics guide with TTS
- **Quiz** — Multiple modes: MCQ, drag-and-drop, fill-in-the-blank, matching, SRS review
- **Progress Dashboard** — Hero stats, action cards, roadmap, weak spots, badges, weekly activity
- **Dark mode** — Full dark theme support via `data-theme="dark"` on `<html>`

## Tech Stack

- **Vite 6** — Build tool and dev server
- **Vanilla JavaScript** (ES modules, no framework)
- **CSS** — Custom properties, modular files (`_nav.css`, `_layout.css`, `_progress.css`, etc.)
- **localStorage** — All state persistence (no backend, no auth)
- **Web Speech API** — TTS for pronunciation and conversation exercises

## Architecture

```
index.html          ← Single HTML file, all pages as #page-* divs
src/
  main.js           ← Entry point, boots app, exposes window globals
  core/
    state.js        ← STATE object + loadState/saveState
    router.js       ← navigate(page) + page renderer registry
  components/
    nav.js          ← Sidebar + bottom nav + theme toggle
    toast.js        ← Toast notifications
    modal.js        ← Level-up modal + loading screen
    dictModal.js    ← Dictionary modal
  pages/
    home.js         ← Landing page + SRS widget
    progress.js     ← Dashboard: hero, actions, roadmap, badges
    lessons.js      ← Lesson viewer + conversation exercises
    vocabulary.js   ← Flip cards + category filter
    conjugation.js  ← Verb conjugation tables
    pronunciation.js← Alphabet guide
    quiz/           ← Quiz modes (MCQ, drag, fill, match, SRS)
  data/
    index.js        ← DATA object combining all data files
    lessons.js      ← Lesson content (sections, MCQ, translations, conversations)
    vocabulary.js   ← Vocabulary categories + words
    badges.js       ← Badge definitions
    conjugation.js  ← Verb conjugation data
  utils/
    badges.js       ← Badge checking logic
    srs.js          ← Spaced repetition algorithm
    speech.js       ← Web Speech API wrapper
    text.js         ← formatTime, getLevelTitle helpers
  styles/
    index.css       ← Imports all CSS modules
    _variables.css  ← CSS custom properties + dark mode vars
    _base.css       ← Reset + body + typography
    _nav.css        ← App shell: sidebar + topbar + bottom nav
    _layout.css     ← Container + page grid
    _home.css       ← Landing page styles
    _lessons.css    ← Lesson viewer + conversation styles
    _vocabulary.css ← Flip cards
    _conjugation.css← Conjugation tables
    _pronunciation.css
    _progress.css   ← Dashboard (pdash-* classes)
    _quiz.css       ← Quiz UI
    _components.css ← Shared: badges, modals, toast, buttons
    _responsive.css ← Media queries
```

## Coding Principles

1. **No framework, no dependencies** — vanilla JS only. New npm packages only if absolutely essential.
2. **CSS classes, not inline styles** — use existing CSS variables, add new classes to the right CSS file.
3. **Avoid over-engineering** — don't add abstractions for one-off operations.
4. **Always run `npm run build`** to verify no compilation errors before marking a spec done.
5. **Mobile-first responsive** — test at 768px and 480px breakpoints.
6. **Dark mode** — any new UI must work under `[data-theme="dark"]`.
7. **French UI language** — all user-facing text is in French.

## YOLO Mode: ENABLED

The loop runs fully autonomously with `--dangerously-skip-permissions`. Each iteration
must still verify acceptance criteria and run `npm run build` before outputting DONE.

## Workflow for Each Spec

1. Read the spec in `specs/`
2. Understand the acceptance criteria
3. Read relevant existing code before making changes
4. Make focused, minimal changes
5. Run `npm run build` — fix any errors
6. Verify each acceptance criterion is met
7. Only output `<promise>DONE</promise>` when ALL criteria pass

## State Shape

```js
STATE = {
  xp: 0,
  level: 1,
  streak: 0,
  theme: 'light',
  completedLessons: [],      // lesson IDs
  lessonScores: {},          // { lessonId: score% }
  learnedWords: {},          // { key: { ease, interval, nextReview, ... } }
  earnedBadges: [],          // badge IDs
  errors: {},                // { wordKey: { count } }
  weekActivity: [0,0,0,0,0,0,0],
  totalSeconds: 0,
}
```

## CSS Naming Conventions

- **Dashboard:** `pdash-*` (hero, action cards, roadmap, weak spots, KPI)
- **Nav:** `s-link`, `s-icon`, `s-label`, `bn-link`, `bn-icon`, `bn-label`
- **Lessons:** `lesson-*`, `conv-*` (conversation), `quiz-card`, `mcq-*`
- **Vocabulary:** `vocab-*`, `flip-card-*`
- **Progress/Badges:** `badge-card`, `badges-grid`, `activity-bar*`
