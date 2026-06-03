import './style.css';
import { initTheme, setTheme, getStoredTheme } from './theme.js';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Changelog from './components/Changelog';
import Footer from './components/Footer';

// Initialize theme before rendering
initTheme();

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${Features()}
    ${Changelog()}
  </main>
  ${Footer(getStoredTheme())}
`;

// Wire theme toggle
document.querySelector('.footer-theme-toggle')?.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-theme]');
  if (!btn) return;
  const theme = btn.dataset.theme;
  setTheme(theme);
  document.querySelectorAll('[data-theme]').forEach((b) => {
    b.classList.toggle('active', b.dataset.theme === theme);
  });
});
