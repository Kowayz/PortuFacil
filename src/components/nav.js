import { STATE, saveState } from '../core/state.js';
import { navigate } from '../core/router.js';

export function initNav() {
  // Wire sidebar nav links
  document.querySelectorAll('.s-link').forEach(link => {
    link.addEventListener('click', () => {
      navigate(link.dataset.page);
      closeSidebar();
    });
  });

  // Wire bottom nav links
  document.querySelectorAll('.bn-link').forEach(link => {
    link.addEventListener('click', () => navigate(link.dataset.page));
  });

  // Hamburger (mobile topbar) — toggles sidebar overlay
  document.getElementById('nav-hamburger')?.addEventListener('click', toggleSidebar);

  // Overlay — closes sidebar when tapped
  document.getElementById('sidebar-overlay')?.addEventListener('click', closeSidebar);

  // Theme toggles — sidebar (desktop) + topbar (mobile)
  document.getElementById('btn-theme')?.addEventListener('click', toggleTheme);
  document.getElementById('btn-theme-mob')?.addEventListener('click', toggleTheme);

  updateNavXP();
  updateNavStreak();
}

function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open');
  document.getElementById('sidebar-overlay')?.classList.toggle('show');
}

function closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('show');
}

export function updateNavXP() {
  const val = STATE.xp + ' XP';
  const a = document.getElementById('nav-xp-val');
  const b = document.getElementById('nav-xp-val-mob');
  if (a) a.textContent = val;
  if (b) b.textContent = val;
}

export function updateNavStreak() {
  const val = STATE.streak;
  const a = document.getElementById('nav-streak-val');
  const b = document.getElementById('nav-streak-val-mob');
  if (a) a.textContent = val;
  if (b) b.textContent = val;
}

export function toggleTheme() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  const icon = isDark ? '🌙' : '☀️';
  const a = document.getElementById('btn-theme');
  const b = document.getElementById('btn-theme-mob');
  if (a) a.textContent = icon;
  if (b) b.textContent = icon;
  STATE.theme = isDark ? 'light' : 'dark';
  saveState();
}
