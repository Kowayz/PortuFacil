import { STATE, saveState } from '../core/state.js';
import { navigate } from '../core/router.js';

const REF_PAGES = new Set(['vocabulary', 'conjugation', 'pronunciation', 'grammar']);

export function initNav() {
  // Top nav primary links
  document.querySelectorAll('.tnav-btn:not(.tnav-dropdown-trigger)').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page));
  });

  // Dropdown trigger
  const trigger = document.getElementById('tnav-ref-btn');
  const menu    = document.getElementById('tnav-ref-menu');
  trigger?.addEventListener('click', e => {
    e.stopPropagation();
    menu?.classList.toggle('open');
  });

  // Dropdown items
  document.querySelectorAll('.tnav-drop-item').forEach(item => {
    item.addEventListener('click', () => {
      navigate(item.dataset.page);
      menu?.classList.remove('open');
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', () => menu?.classList.remove('open'));

  // Bottom nav links
  document.querySelectorAll('.bn-link').forEach(link => {
    link.addEventListener('click', () => navigate(link.dataset.page));
  });

  // Theme toggle
  document.getElementById('btn-theme')?.addEventListener('click', toggleTheme);

  updateNavXP();
  updateNavStreak();
}

export function updateNavActive(page) {
  document.querySelectorAll('.tnav-btn, .bn-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll(`.tnav-btn[data-page="${page}"], .bn-link[data-page="${page}"]`).forEach(l => l.classList.add('active'));

  // Highlight Reference trigger when a ref sub-page is active
  const trigger = document.getElementById('tnav-ref-btn');
  if (trigger) trigger.classList.toggle('active', REF_PAGES.has(page));

  // Highlight active drop item
  document.querySelectorAll('.tnav-drop-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });
}

export function updateNavXP() {
  const el = document.getElementById('nav-xp-val');
  if (el) el.textContent = STATE.xp + ' XP';

  // Daily goal ring
  const ring = document.getElementById('daily-goal-ring');
  if (ring) {
    const goal = STATE.dailyGoalXP || 50;
    const today = new Date().toDateString();
    const xpToday = STATE.dailyGoalDate === today ? (STATE.dailyXPToday || 0) : 0;
    const pct = Math.min(100, Math.round((xpToday / goal) * 100));
    const done = xpToday >= goal;
    ring.title = `${xpToday}/${goal} XP aujourd'hui`;
    ring.innerHTML = `
      <svg viewBox="0 0 32 32" class="dg-svg">
        <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3"/>
        <circle cx="16" cy="16" r="13" fill="none" stroke="${done ? 'var(--ochre-light)' : 'white'}" stroke-width="3"
          stroke-dasharray="${pct} 100" stroke-dashoffset="25" stroke-linecap="round"
          style="transition:stroke-dasharray 0.6s ease"/>
      </svg>
      <span class="dg-label">${done ? '✅' : '🎯'}</span>
    `;
  }
}

export function updateNavStreak() {
  const el = document.getElementById('nav-streak-val');
  if (el) el.textContent = STATE.streak;
}

export function toggleTheme() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  const btn = document.getElementById('btn-theme');
  if (btn) btn.textContent = isDark ? '🌙' : '☀️';
  STATE.theme = isDark ? 'light' : 'dark';
  saveState();
}
