// Single IntersectionObserver reused across all pages — no memory leak
let _fadeObserver = null;

export function observeFadeIns() {
  if (!_fadeObserver) {
    _fadeObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          _fadeObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
  }
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => _fadeObserver.observe(el));
}
