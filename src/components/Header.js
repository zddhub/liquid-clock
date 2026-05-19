import './Header.css';
import logo from '../assets/logo.png';

export default function Header() {
  const appStoreUrl = 'https://apps.apple.com/cn/app/liquid-clock-no-ads/id6757009818';

  return `
    <header class="site-header">
      <div class="container header-content">
        <a href="#" class="logo">
          <img src="${logo}" alt="Liquid Clock Logo" class="logo-img" />
          Liquid Clock
        </a>
        <nav class="main-nav">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="#changelog">What's New</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="${appStoreUrl}" target="_blank" rel="noreferrer" class="nav-cta">Download</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
