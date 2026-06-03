import './Hero.css';
import heroImage from '../assets/clocks/hero-image.png';

export default function Hero() {
  const appStoreUrl = 'https://apps.apple.com/cn/app/liquid-clock-no-ads/id6757009818';

  return `
    <section class="hero" id="top">
      <div class="container hero-content">
        <p class="hero-eyebrow"><span class="hero-eyebrow-brand">Liquid Clock</span><span>Time, beautifully displayed</span></p>
        <h1 class="hero-title">A <span class="gradient-text">clock worth<br>leaving on.</span></h1>
        <p class="hero-subtitle">Liquid Clock transforms your iPhone, iPad, or Mac into a beautiful flip-style clock with a home screen widget, focus sessions, countdown tools, and smart display behavior for bedside and desk use.</p>
        <div class="hero-actions">
          <a href="${appStoreUrl}" class="btn btn-primary" target="_blank" rel="noreferrer">Download on the App Store</a>
          <a href="#features" class="btn btn-secondary">See Features</a>
        </div>
        <p class="hero-platforms">iPhone, iPad + Mac &middot; Free to start &middot; 10 languages</p>
        <div class="hero-visual">
          <div class="hero-visual-backdrop"></div>
          <div class="hero-image-frame">
            <img src="${heroImage}" alt="Liquid Clock on iPhone, iPad, and Mac — a clock worth leaving on" class="hero-image" />
          </div>
        </div>
      </div>
    </section>
  `;
}
