const STORAGE_KEY = 'liquid-clock-theme';

function getSystemPreference() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveTheme(theme) {
  return theme === 'auto' ? getSystemPreference() : theme;
}

function applyTheme(theme) {
  const resolved = resolveTheme(theme);
  document.documentElement.classList.toggle('dark', resolved === 'dark');
}

export function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY) || 'auto';
}

export function setTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

export function initTheme() {
  const stored = getStoredTheme();
  applyTheme(stored);

  // Listen for system preference changes when in auto mode
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getStoredTheme() === 'auto') {
      applyTheme('auto');
    }
  });
}
