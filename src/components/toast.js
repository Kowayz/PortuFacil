export function showToast(type, title, message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: '💡' };
  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || '💬'}</div>
    <div class="toast-content">
      <h4>${title}</h4>
      ${message ? `<p>${message}</p>` : ''}
    </div>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('show')));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}
