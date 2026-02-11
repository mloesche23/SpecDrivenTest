// Minimal theme controller; expanded in Phase 3 (US3)
(function () {
  const KEY = 'reh-theme';
  function apply(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }
  function setTheme(theme) {
    try {
      localStorage.setItem(KEY, theme);
    } catch (_) {}
    apply(theme);
  }
  function getTheme() {
    let stored = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch (_) {}
    if (stored) return stored;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  function init() {
    apply(getTheme());
  }
  window.Theme = { setTheme, getTheme, init };
  document.addEventListener('DOMContentLoaded', init);
})();
