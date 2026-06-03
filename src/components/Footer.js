import './Footer.css';

export default function Footer(currentTheme) {
  const appStoreUrl = 'https://apps.apple.com/cn/app/liquid-clock-no-ads/id6757009818';
  const theme = currentTheme || 'auto';

  return `
    <footer class="site-footer">
      <div class="container footer-content">
        <div class="footer-top">
          <div class="footer-brand">
            <p class="footer-heading">Liquid Clock</p>
            <p class="footer-summary">A clock worth leaving on. Liquid Clock is a customizable flip clock with widget, Pomodoro, countdown tools, mirror effect, and native macOS support.</p>
          </div>
          <div class="footer-links">
            <a href="#features">Features</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#changelog">What's New</a>
            <a href="#faq">Support</a>
            <a href="./privacy.html">Privacy Policy</a>
            <a href="./terms.html">Terms of Service</a>
            <a href="${appStoreUrl}" target="_blank" rel="noreferrer">Download on the App Store</a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-theme-toggle">
            <button data-theme="light" class="theme-btn${theme === 'light' ? ' active' : ''}" aria-label="Light mode">Light</button>
            <button data-theme="dark" class="theme-btn${theme === 'dark' ? ' active' : ''}" aria-label="Dark mode">Dark</button>
            <button data-theme="auto" class="theme-btn${theme === 'auto' ? ' active' : ''}" aria-label="Auto mode">Auto</button>
          </div>
          <p>&copy; ${new Date().getFullYear()} Liquid Clock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}
