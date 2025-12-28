import './Hero.css';
import logo from '../assets/logo.png';

export default function Hero() {
  return `
    <section class="hero">
      <div class="container hero-content">
        <h1 class="hero-title">Stunning. Immersive. <span class="gradient-text">Productive.</span></h1>
        <p class="hero-subtitle">Transform your device into a beautiful bedside or desk display. Liquid Clock combines fluid aesthetics with powerful focus tools.</p>
        <div class="hero-actions">
          <a href="#download" class="btn btn-primary">Download for Mac</a>
          <a href="#features" class="btn btn-secondary">Explore Features</a>
        </div>
        <div class="hero-visual">
           <img src="${logo}" alt="Liquid Clock App Icon" class="hero-logo-img" />
        </div>
      </div>
    </section>
  `;
}
