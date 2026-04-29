import './Hero.css';
import heroPhoneImage from '../assets/clocks/iPhone-6-9-V01-01.png';
import heroTabletImage from '../assets/clocks/iPad-13-V01-01.png';

export default function Hero() {
  const appStoreUrl = 'https://apps.apple.com/cn/app/liquid-clock-no-ads/id6757009818';
  const heroPoints = [
    'Customizable flip clock display',
    'Pomodoro, stopwatch, countdown, and target date modes',
    'Built for bedside and desk use'
  ];

  const heroFacts = ['iPhone + iPad', 'Free to start', 'Clock + focus'];

  const valueStrip = [
    'A clock that looks intentional, not utilitarian',
    'Focus tools that stay simple and full-screen',
    'Smart display controls for long sessions and night use'
  ];

  return `
    <section class="hero" id="top">
      <div class="container hero-content">
        <div class="hero-copy">
          <p class="hero-eyebrow">Calm time, beautifully displayed</p>
          <h1 class="hero-title">Turn your screen into a <span class="gradient-text">clock worth leaving on.</span></h1>
          <p class="hero-subtitle">Liquid Clock transforms your iPhone or iPad into a beautiful flip-style clock with focus sessions, countdown tools, and smart display behavior for bedside and desk use.</p>
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
          <p class="hero-caption">Designed to stay visible, feel calm, and help you focus.</p>
        </div>
        <div class="hero-visual">
          <div class="hero-orb hero-orb-a"></div>
          <div class="hero-orb hero-orb-b"></div>
          <div class="showcase-frame">
            <div class="showcase-topbar">
              <span>App Store screenshots</span>
              <span>iPhone and iPad</span>
            </div>
            <div class="showcase-stage">
              <figure class="showcase-device showcase-device-tablet">
                <img src="${heroTabletImage}" alt="Liquid Clock full-screen flip clock on iPad" class="hero-screenshot-img hero-screenshot-tablet" />
              </figure>
              <figure class="showcase-device showcase-device-phone">
                <img src="${heroPhoneImage}" alt="Liquid Clock full-screen flip clock on iPhone" class="hero-screenshot-img hero-screenshot-phone" />
              </figure>
            </div>
            <div class="showcase-notes">
              <div class="showcase-chip">
                <strong>Pomodoro</strong>
                <span>25 minute focus sessions</span>
              </div>
              <div class="showcase-chip">
                <strong>Countdowns</strong>
                <span>Target dates and timers</span>
              </div>
            </div>
          </div>
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
