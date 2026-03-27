import { STATE } from '../core/state.js';
import { DATA } from '../data/index.js';
import { formatTime, getLevelTitle } from '../utils/text.js';
import { getStatus, getDueWords } from '../utils/srs.js';
export { checkBadges } from '../utils/badges.js';

// Total lessons per level (populated lazily)
const LEVEL_TOTALS = { A1: 0, A2: 0, B1: 0, B2: 0 };

function initLevelTotals() {
  ['A1','A2','B1','B2'].forEach(lvl => {
    LEVEL_TOTALS[lvl] = DATA.lessons.filter(l => l.level === lvl).length;
  });
}

// Find the first lesson the user should do next
function getNextLesson() {
  const a1Done = STATE.completedLessons.filter(id => id.startsWith('a1-')).length;
  const a2Done = STATE.completedLessons.filter(id => id.startsWith('a2-')).length;
  const b1Done = STATE.completedLessons.filter(id => id.startsWith('b1-')).length;
  const unlocked = ['A1'];
  if (a1Done >= 5) unlocked.push('A2');
  if (a2Done >= 7) unlocked.push('B1');
  if (b1Done >= 5) unlocked.push('B2');
  for (const lvl of unlocked) {
    const next = DATA.lessons.filter(l => l.level === lvl)
      .find(l => !STATE.completedLessons.includes(l.id));
    if (next) return next;
  }
  return null;
}

// ── Public API ──────────────────────────────────────────────────────────────

export function renderProgress() {
  initLevelTotals();
  renderHero();
  renderActions();
  renderRoadmap();
  renderWeakSpots();
  renderWeeklyActivity();
  renderBadges();
}

export function renderProgressStats() { renderProgress(); }

// ── Hero (compact identity strip) ──────────────────────────────────────────

function renderHero() {
  const learnedCount = Object.keys(STATE.learnedWords)
    .filter(k => getStatus(STATE.learnedWords[k]) === 'mastered').length;
  const xpInLevel = STATE.xp % 200;
  const levelPct  = Math.round((xpInLevel / 200) * 100);

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('pdash-level-pill', `Niveau ${STATE.level} · ${getLevelTitle(STATE.level)}`);
  set('pdash-streak',     STATE.streak);
  set('pdash-words',      learnedCount);
  set('pdash-lessons-count', STATE.completedLessons.length);
  set('pdash-time',       formatTime(STATE.totalSeconds || 0));

  const fill  = document.getElementById('pdash-xp-fill');
  if (fill)  fill.style.width = levelPct + '%';
  const label = document.getElementById('pdash-xp-label');
  if (label) label.textContent = `${xpInLevel} / 200 XP vers le niveau ${STATE.level + 1}`;

  const bcount = document.getElementById('pdash-badges-count');
  if (bcount) bcount.textContent = `${STATE.earnedBadges.length} / ${DATA.badges.length}`;
}

// ── Action plan ─────────────────────────────────────────────────────────────

function renderActions() {
  const container = document.getElementById('pdash-actions');
  if (!container) return;

  const isNewUser   = STATE.completedLessons.length === 0;
  const label       = document.getElementById('pdash-actions-label');
  if (label) label.textContent = isNewUser ? '🚀 Par où commencer ?' : '📋 Que faire maintenant ?';

  const dueWords    = getDueWords(STATE.learnedWords);
  const errors      = STATE.errors || {};
  const errorList   = Object.entries(errors).sort((a, b) => b[1].count - a[1].count);
  const nextLesson  = getNextLesson();
  const actions     = [];

  // 1 — SRS review (urgent if overdue)
  if (dueWords.length > 0) {
    actions.push({
      icon: '📅', urgent: true,
      color: 'var(--ochre)', pale: 'var(--ochre-pale)',
      title: `${dueWords.length} mot${dueWords.length > 1 ? 's' : ''} à réviser`,
      desc: 'La répétition espacée consolide la mémoire à long terme. Ne laissez pas ces mots s\'oublier !',
      cta: 'Réviser maintenant',
      onclick: "navigate('quiz');setTimeout(()=>startQuiz('srs'),50)",
    });
  }

  // 2 — Next / in-progress lesson
  if (nextLesson) {
    const score     = STATE.lessonScores?.[nextLesson.id];
    const isResume  = score !== undefined && !STATE.completedLessons.includes(nextLesson.id);
    actions.push({
      icon: nextLesson.icon, urgent: false,
      color: 'var(--blue)', pale: 'var(--blue-pale)',
      title: isResume
        ? `Reprendre : ${nextLesson.title}`
        : isNewUser
          ? `Première leçon : ${nextLesson.title}`
          : `Prochaine leçon : ${nextLesson.title}`,
      desc: isResume
        ? `Votre score actuel est ${score} %. Il faut au moins 70 % pour valider cette leçon.`
        : isNewUser
          ? `Commencez votre aventure en portugais ! Niveau ${nextLesson.level} · ${nextLesson.xp} XP à la clé.`
          : `Niveau ${nextLesson.level} · ${nextLesson.xp} XP à la clé`,
      cta: isResume ? 'Reprendre la leçon' : isNewUser ? 'Démarrer' : 'Commencer la leçon',
      onclick: `navigate('lessons');setTimeout(()=>openLesson('${nextLesson.id}'),80)`,
    });
  }

  // 3 — Error words quiz (if ≥ 3 error words tracked)
  if (errorList.length >= 3) {
    const preview = errorList.slice(0, 2).map(([k]) => k.split('_').slice(1).join('_')).join(', ');
    actions.push({
      icon: '🎯', urgent: false,
      color: 'var(--red)', pale: 'var(--red-pale)',
      title: `Retravailler ${errorList.length} mot${errorList.length > 1 ? 's' : ''} difficile${errorList.length > 1 ? 's' : ''}`,
      desc: `Points faibles détectés : ${preview}... Un quiz ciblé vous aidera à les maîtriser.`,
      cta: 'Quiz ciblé',
      onclick: "navigate('quiz');setTimeout(()=>startQuiz('errors'),50)",
    });
  }

  // 4 — Fallback: everything up to date
  if (actions.length === 0) {
    actions.push({
      icon: '🎉', urgent: false,
      color: 'var(--green)', pale: 'var(--green-pale)',
      title: 'Tout est à jour !',
      desc: 'Aucun mot à réviser aujourd\'hui. Explorez une nouvelle leçon ou parcourez le vocabulaire.',
      cta: 'Voir les leçons',
      onclick: "navigate('lessons')",
    });
  }

  container.innerHTML = actions.map(a => `
    <div class="pdash-action-card" onclick="${a.onclick}"
         style="--acolor:${a.color};--apale:${a.pale}">
      ${a.urgent ? '<span class="pdash-action-urgent">Urgent</span>' : ''}
      <span class="pdash-action-icon">${a.icon}</span>
      <div class="pdash-action-body">
        <div class="pdash-action-title">${a.title}</div>
        <div class="pdash-action-desc">${a.desc}</div>
      </div>
      <button class="pdash-action-cta" style="background:${a.color}">${a.cta} →</button>
    </div>
  `).join('');
}

// ── Level roadmap ───────────────────────────────────────────────────────────

function renderRoadmap() {
  const container = document.getElementById('pdash-roadmap');
  if (!container) return;

  const a1Done = STATE.completedLessons.filter(id => id.startsWith('a1-')).length;
  const a2Done = STATE.completedLessons.filter(id => id.startsWith('a2-')).length;
  const b1Done = STATE.completedLessons.filter(id => id.startsWith('b1-')).length;

  const levelColors = { A1: 'var(--green)', A2: 'var(--blue)', B1: 'var(--ochre)', B2: 'var(--red)' };
  const isUnlocked  = { A1: true, A2: a1Done >= 5, B1: a2Done >= 7, B2: b1Done >= 5 };

  const unlockProgress = {
    A2: { cur: a1Done, max: 5,  text: `${a1Done}/5 leçons A1 complétées` },
    B1: { cur: a2Done, max: 7,  text: `${a2Done}/7 leçons A2 complétées` },
    B2: { cur: b1Done, max: 5,  text: `${b1Done}/5 leçons B1 complétées` },
  };

  container.innerHTML = ['A1','A2','B1','B2'].map(lvl => {
    const total     = LEVEL_TOTALS[lvl];
    const done      = STATE.completedLessons.filter(id => id.startsWith(lvl.toLowerCase() + '-')).length;
    const pct       = total > 0 ? Math.round((done / total) * 100) : 0;
    const unlocked  = isUnlocked[lvl];
    const completed = done >= total && total > 0;
    const color     = levelColors[lvl];

    let statusBadge, barHtml, actionHtml = '';

    if (!unlocked) {
      const up  = unlockProgress[lvl];
      const pUp = up.max > 0 ? Math.round((up.cur / up.max) * 100) : 0;
      statusBadge = `<span class="pdash-road-tag pdash-road-locked">🔒 Verrouillé</span>`;
      barHtml = `
        <div class="pdash-road-bar-row">
          <div class="pdash-road-bar">
            <div class="pdash-road-fill" style="width:${pUp}%;background:rgba(26,58,92,0.25)"></div>
          </div>
          <span class="pdash-road-frac" style="color:var(--text-light)">${up.text}</span>
        </div>`;
    } else if (completed) {
      statusBadge = `<span class="pdash-road-tag pdash-road-done">✅ Complété</span>`;
      barHtml = `
        <div class="pdash-road-bar-row">
          <div class="pdash-road-bar">
            <div class="pdash-road-fill" style="width:100%;background:${color}"></div>
          </div>
          <span class="pdash-road-frac" style="color:${color}">${done}/${total}</span>
        </div>`;
    } else {
      statusBadge = `<span class="pdash-road-tag pdash-road-active">📖 En cours</span>`;
      barHtml = `
        <div class="pdash-road-bar-row">
          <div class="pdash-road-bar">
            <div class="pdash-road-fill" style="width:${pct}%;background:${color}"></div>
          </div>
          <span class="pdash-road-frac" style="color:${color}">${done}/${total} leçons</span>
        </div>`;
      actionHtml = `<button class="pdash-road-btn" onclick="navigate('lessons')"
        style="border-color:${color};color:${color}">Continuer →</button>`;
    }

    return `
      <div class="pdash-road-row ${unlocked ? '' : 'pdash-road-row-locked'}">
        <div class="pdash-road-badge"
          style="background:${unlocked ? color : 'var(--cream-dark)'};color:${unlocked ? 'white' : 'var(--text-light)'}">
          ${lvl}
        </div>
        <div class="pdash-road-content">
          <div class="pdash-road-header">
            <span class="pdash-road-name">${getLevelTitle(lvl)}</span>
            ${statusBadge}
          </div>
          ${barHtml}
        </div>
        ${actionHtml ? `<div class="pdash-road-action">${actionHtml}</div>` : ''}
      </div>
    `;
  }).join('');
}

// ── Weak spots ──────────────────────────────────────────────────────────────

function renderWeakSpots() {
  const container = document.getElementById('pdash-weak');
  if (!container) return;

  const top5 = Object.entries(STATE.errors || {})
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 5);

  if (!top5.length) {
    container.innerHTML = '<p class="pdash-empty">Aucune erreur enregistrée — continuez à pratiquer !</p>';
    return;
  }

  container.innerHTML = top5.map(([key, info]) => {
    const [catId, ...rest] = key.split('_');
    const wordPt = rest.join('_');
    const cat    = DATA.vocabulary.categories.find(c => c.id === catId);
    const word   = cat?.words.find(w => w.pt === wordPt);
    const label  = word ? `${word.pt} → ${word.fr}` : key;
    return `
      <div class="pdash-weak-item"
           onclick="navigate('vocabulary');setTimeout(()=>selectVocabCategory('${catId}'),50)">
        <div>
          <div class="pdash-weak-word">${label}</div>
          <div class="pdash-weak-count">${info.count} erreur${info.count > 1 ? 's' : ''}</div>
        </div>
        <button class="pdash-weak-btn">Revoir</button>
      </div>
    `;
  }).join('');
}

// ── Weekly activity ─────────────────────────────────────────────────────────

function renderWeeklyActivity() {
  const container = document.getElementById('activity-bars-container');
  if (!container) return;
  const days   = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const today  = new Date().getDay();
  const maxVal = Math.max(...STATE.weekActivity, 1);
  container.innerHTML = STATE.weekActivity.map((val, i) => {
    const pct = Math.round((val / maxVal) * 100);
    return `
      <div class="activity-bar-wrap">
        <div class="activity-bar ${i === today ? 'today' : val > 0 ? 'active' : ''}"
          style="height:${Math.max(pct, 8)}%" title="${val} activité(s)"></div>
        <span class="activity-bar-label">${days[i]}</span>
      </div>
    `;
  }).join('');
}

// ── Badges ──────────────────────────────────────────────────────────────────

function renderBadges() {
  const container = document.getElementById('badges-container');
  if (!container) return;
  container.innerHTML = DATA.badges.map(b => {
    const earned = STATE.earnedBadges.includes(b.id);
    return `
      <div class="badge-card ${earned ? 'earned' : 'locked'}" title="${b.description}">
        <span class="badge-icon">${b.icon}</span>
        <div class="badge-name">${b.name}</div>
        <div class="badge-desc">${b.description}</div>
        ${earned ? '<span class="badge-earned-label">✓ Obtenu</span>' : ''}
      </div>
    `;
  }).join('');
}

export function filterBadges(filter) {
  document.querySelectorAll('.dash-badge-tab').forEach((tab, i) => {
    tab.classList.toggle('active',
      (filter === 'all' && i === 0) ||
      (filter === 'earned' && i === 1) ||
      (filter === 'locked' && i === 2)
    );
  });
  document.querySelectorAll('#badges-container .badge-card').forEach(card => {
    const earned = card.classList.contains('earned');
    card.style.display =
      filter === 'earned' ? (earned ? '' : 'none') :
      filter === 'locked' ? (!earned ? '' : 'none') : '';
  });
}
