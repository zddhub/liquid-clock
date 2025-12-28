import './Header.css';
import logo from '../assets/logo.png';

export default function Header() {
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
            <li><a href="#download">Download</a></li>
            <li><a href="https://github.com/liquid-clock" target="_blank">GitHub</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
