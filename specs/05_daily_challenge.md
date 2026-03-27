# Spec 05 — Défi Quotidien

## Priorité : HAUTE

## Contexte

Le mode `daily` existe déjà dans `quiz/build.js` (5 questions) mais il n'y a pas de :
- Tracking du jour dans STATE (peut-on refaire le défi aujourd'hui ?)
- Bonus XP pour la complétion quotidienne
- Bouton dédié visible sur la page d'accueil / dashboard
- Calendrier des défis complétés

## Travail à faire

### 1. Ajouter le tracking dans `src/core/state.js`

Dans `DEFAULT_STATE`, ajouter :
```js
lastDailyDate: null,      // "2026-03-27" (date ISO)
dailyStreak: 0,           // jours consécutifs de défi fait
dailyHistory: [],         // derniers 7 jours ["2026-03-25", ...]
```

### 2. Modifier `src/pages/quiz/index.js` — détecter complétion du défi quotidien

Dans la fonction qui gère la fin du quiz (`completeQuiz` ou équivalent), ajouter :
```js
if (qs.mode === 'daily') {
  const today = new Date().toISOString().slice(0, 10);
  if (STATE.lastDailyDate !== today) {
    STATE.lastDailyDate = today;
    // Streak : si hier était fait, +1, sinon reset à 1
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    STATE.dailyStreak = STATE.dailyHistory.includes(yesterday)
      ? (STATE.dailyStreak || 0) + 1 : 1;
    STATE.dailyHistory = [...(STATE.dailyHistory || []).slice(-6), today];
    // Bonus XP : +30 XP
    STATE.xp = (STATE.xp || 0) + 30;
    saveState();
    showToast('success', '🎯 Défi quotidien !', `+30 XP bonus ! Série : ${STATE.dailyStreak} jour${STATE.dailyStreak > 1 ? 's' : ''}`);
  }
}
```

### 3. Ajouter une carte "Défi du jour" dans le dashboard (`src/pages/progress.js`)

Dans `renderActions()`, ajouter en **première position** (avant SRS) si le défi du jour n'est pas fait :
```js
const today = new Date().toISOString().slice(0, 10);
const dailyDone = STATE.lastDailyDate === today;
if (!dailyDone) {
  actions.push({
    icon: '🎯', urgent: false,
    color: 'var(--green)', pale: 'var(--green-pale)',
    title: 'Défi du jour',
    desc: STATE.dailyStreak > 0
      ? `Série en cours : ${STATE.dailyStreak} jour${STATE.dailyStreak > 1 ? 's' : ''} 🔥 — 5 questions, +30 XP bonus !`
      : '5 questions rapides, +30 XP bonus. Reviens chaque jour pour garder ta série !',
    cta: 'Relever le défi',
    onclick: "navigate('quiz');setTimeout(()=>startQuiz('daily'),50)",
  });
}
```

### 4. Ajouter un mini-calendrier hebdo dans le dashboard HTML (`index.html`)

Dans la section `pdash-grid2` (ou après les action cards), ajouter :
```html
<div class="pdash-card fade-in" style="margin-bottom:24px">
  <div class="dash-card-title">🗓️ Défis cette semaine</div>
  <div id="daily-calendar" class="daily-calendar"></div>
</div>
```

### 5. Rendre le calendrier dans `src/pages/progress.js`

```js
function renderDailyCalendar() {
  const container = document.getElementById('daily-calendar');
  if (!container) return;
  const days = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  container.innerHTML = Array.from({length: 7}, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    const dateStr = d.toISOString().slice(0, 10);
    const done = (STATE.dailyHistory || []).includes(dateStr);
    const isToday = dateStr === todayStr;
    return `<div class="daily-cal-day ${done ? 'done' : ''} ${isToday ? 'today' : ''}">
      <span class="daily-cal-dot">${done ? '✓' : isToday ? '·' : ''}</span>
      <span class="daily-cal-label">${days[d.getDay() === 0 ? 6 : d.getDay() - 1]}</span>
    </div>`;
  }).join('');
}
```

Appeler `renderDailyCalendar()` dans `renderProgress()`.

### 6. CSS dans `src/styles/_progress.css`

```css
.daily-calendar {
  display: flex; gap: 8px; padding: 8px 0;
}
.daily-cal-day {
  flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px;
}
.daily-cal-dot {
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--cream-dark); display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem; color: var(--text-light);
}
.daily-cal-day.done .daily-cal-dot {
  background: var(--green); color: white; font-weight: 700;
}
.daily-cal-day.today .daily-cal-dot {
  border: 2px solid var(--blue); color: var(--blue);
}
.daily-cal-label { font-size: 0.7rem; color: var(--text-light); }
[data-theme="dark"] .daily-cal-dot { background: var(--dark-card); }
```

## Acceptance Criteria

- [ ] `STATE.lastDailyDate`, `STATE.dailyStreak`, `STATE.dailyHistory` existent dans DEFAULT_STATE
- [ ] Compléter le quiz `daily` une première fois ajoute +30 XP et met à jour `lastDailyDate`
- [ ] Le refaire le même jour n'accorde pas de nouveau bonus
- [ ] La carte "Défi du jour" apparaît dans le dashboard si le défi n'est pas encore fait aujourd'hui
- [ ] Le mini-calendrier 7 jours s'affiche dans le dashboard
- [ ] `npm run build` passe sans erreur

**Output quand terminé :** `<promise>DONE</promise>`