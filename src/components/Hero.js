import './Hero.css';
import heroPhoneImage from '../assets/clocks/iPhone-6-9-V01-01.png';
import heroTabletImage from '../assets/clocks/iPad-13-V01-01.png';
import heroMacImage from '../assets/clocks/macOS-14-2-V01-01.png';

export default function Hero() {
  const appStoreUrl = 'https://apps.apple.com/cn/app/liquid-clock-no-ads/id6757009818';
  const heroPoints = [
    'Customizable flip clock with widget',
    'Pomodoro, stopwatch, countdown, and target date modes',
    'Built for bedside, desk, and Mac use'
  ];

  const heroFacts = ['iPhone, iPad + Mac', 'Free to start', '9 languages'];

  const valueStrip = [
    'A clock that looks intentional, not utilitarian',
    'Focus tools that stay simple and full-screen',
    'Now on Mac with full native support'
  ];

  return `
    <section class="hero" id="top">
      <div class="container hero-content">
        <div class="hero-copy">
          <p class="hero-eyebrow"><span class="hero-eyebrow-brand">Liquid Clock</span><span>Calm time, beautifully displayed</span></p>
          <h1 class="hero-title">Turn your screen into a <span class="gradient-text">clock worth leaving on.</span></h1>
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
          <p class="hero-caption">Designed to stay visible, feel calm, and help you focus.</p>
        </div>
        <div class="hero-visual">
          <div class="hero-orb hero-orb-a"></div>
          <div class="hero-orb hero-orb-b"></div>
          <div class="showcase-frame">
            <div class="showcase-topbar">
              <span>App Store screenshots</span>
              <span>iPhone, iPad + Mac</span>
            </div>
            <div class="showcase-stage">
              <figure class="showcase-device showcase-device-tablet">
                <img src="${heroTabletImage}" alt="Liquid Clock full-screen flip clock on iPad" class="hero-screenshot-img hero-screenshot-tablet" />
              </figure>
              <figure class="showcase-device showcase-device-phone">
                <img src="${heroPhoneImage}" alt="Liquid Clock full-screen flip clock on iPhone" class="hero-screenshot-img hero-screenshot-phone" />
              </figure>
              <figure class="showcase-device showcase-device-mac">
                <img src="${heroMacImage}" alt="Liquid Clock on macOS" class="hero-screenshot-img hero-screenshot-mac" />
              </figure>
            </div>
            <div class="showcase-notes">
              <div class="showcase-chip">
                <strong>Widget</strong>
                <span>Home screen flip clock</span>
              </div>
              <div class="showcase-chip">
                <strong>Mac + iPad</strong>
                <span>Native desktop and tablet</span>
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
