import './Hero.css';
import heroImage from '../assets/clocks/hero-image.png';

export default function Hero() {
  const appStoreUrl = 'https://apps.apple.com/cn/app/liquid-clock-no-ads/id6757009818';
  const heroPoints = [
    'Widget, Pomodoro, stopwatch & countdown',
    'Mirror effect and orientation lock',
    'iPhone, iPad, and Mac — one purchase'
  ];

  const heroFacts = ['iPhone, iPad + Mac', 'Free to start', '10 languages'];

  const valueStrip = [
    'A clock designed to be seen, not hidden',
    'Full-screen focus tools that stay out of your way',
    'Native on Mac with keyboard shortcuts and polished settings'
  ];

  return `
    <section class="hero" id="top">
      <div class="container hero-content">
        <div class="hero-copy">
          <p class="hero-eyebrow"><span class="hero-eyebrow-brand">Liquid Clock</span><span>Time, beautifully displayed</span></p>
          <h1 class="hero-title">A <span class="gradient-text">clock worth leaving on.</span></h1>
          <p class="hero-subtitle">Liquid Clock transforms your iPhone, iPad, or Mac into a beautiful flip-style clock with a home screen widget, focus sessions, countdown tools, and smart display behavior for bedside and desk use.</p>
          <div class="hero-actions">
            <a href="${appStoreUrl}" class="btn btn-primary" target="_blank" rel="noreferrer">Download on the App Store</a>
            <a href="#features" class="btn btn-secondary">See Features</a>
          </div>
          <div class="hero-facts">
            ${heroFacts.map((fact) => `<span class="hero-fact-pill">${fact}</span>`).join('')}
          </div>
          <ul class="hero-points">
            ${heroPoints.map((point) => `<li>${point}</li>`).join('')}
          </ul>
          <p class="hero-caption">Designed to stay visible, feel natural, and help you focus.</p>
        </div>
        <div class="hero-visual">
          <div class="hero-orb hero-orb-a"></div>
          <div class="hero-orb hero-orb-b"></div>
          <img src="${heroImage}" alt="Liquid Clock on iPhone, iPad, and Mac — a clock worth leaving on" class="hero-image" />
        </div>
      </div>
      <div class="container">
        <div class="hero-strip">
          <div class="hero-strip-copy">
            <p class="hero-strip-label">Time, focus, and atmosphere in one app.</p>
          </div>
          <div class="hero-strip-items">
            ${valueStrip.map((item) => `<p>${item}</p>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
