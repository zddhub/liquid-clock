import './Footer.css';

export default function Footer() {
  const appStoreUrl = 'https://apps.apple.com/cn/app/liquid-clock-no-ads/id6757009818';

  return `
    <footer class="site-footer">
      <div class="container footer-shell">
        <div class="footer-top">
          <div class="footer-brand">
            <p class="footer-heading">Liquid Clock</p>
            <p class="footer-summary">Liquid Clock is a customizable flip clock, widget, Pomodoro timer, and countdown app for iPhone, iPad, and Mac.</p>
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
          <p>&copy; ${new Date().getFullYear()} Liquid Clock. All rights reserved.</p>
          <p>A calmer clock for deep work, bedside use, and everyday timing.</p>
        </div>
      </div>
    </footer>
  `;
}
