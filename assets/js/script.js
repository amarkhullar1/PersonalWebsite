(function(){
  const root = document.documentElement;
  const storageKey = 'theme-preference';
  const toggle = document.querySelector('.theme-toggle');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const getPreference = () => {
    const stored = localStorage.getItem(storageKey);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };
  const setPreference = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
  };
  setPreference(getPreference());
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || getPreference();
      setPreference(current === 'light' ? 'dark' : 'light');
    });
  }
})();
