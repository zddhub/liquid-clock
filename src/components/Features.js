import './Features.css';
import screenshotCustomizationPhone from '../assets/clocks/iPhone-6-9-V01-04.png';
import screenshotFocusTablet from '../assets/clocks/iPad-13-V01-02.png';
import screenshotSmartPhone from '../assets/clocks/iPhone-6-9-V01-06.png';

export default function Features() {
  const introHighlights = [
    {
      title: 'Clock + focus in one place',
      detail: 'Time display, Pomodoro sessions, countdowns, and stopwatch tools live in one calm surface.'
    },
    {
      title: 'Designed for nearby screens',
      detail: 'A better fit for docks, stands, desks, and bedside use than a generic timer app.'
    },
    {
      title: 'Free to start',
      detail: 'Start with the essentials, then unlock deeper customization when you want more control.'
    }
  ];

  const features = [
    {
      title: 'Immersive Flip Clock',
      description: 'Large, legible time with a flip-style design that feels bold and modern from across the room.',
      icon: '01'
    },
    {
      title: 'Deep Customization',
      description: 'Choose digit colors, fonts, card colors, and animated backgrounds to match your space and mood.',
      icon: '02'
    },
    {
      title: 'Pomodoro Focus Sessions',
      description: 'Run focused work sessions with configurable work and break lengths in a distraction-light, full-screen experience.',
      icon: '03'
    },
    {
      title: 'More Than A Timer',
      description: 'Use stopwatch mode, a classic countdown timer, or count down to a target date and time.',
      icon: '04'
    },
    {
      title: 'Bedside-Friendly Behavior',
      description: 'Keep the screen on, auto-hide controls after inactivity, dim the display, and reduce burn-in risk during long use.',
      icon: '05'
    },
    {
      title: 'Helpful Alerts',
      description: 'Add hourly chimes, timer completion alerts, and spoken time for moments when you do not want to look at the screen.',
      icon: '06'
    }
  ];

  const useCases = [
    {
      title: 'For Bedside Use',
      description: 'Wake up to a clean, readable clock with quiet visual presence and bedtime-friendly display controls.'
    },
    {
      title: 'For Desk Setups',
      description: 'Keep a beautiful clock on your stand while you work, then switch to Pomodoro or countdown mode when you need structure.'
    },
    {
      title: 'For Daily Timing',
      description: 'Track workouts, cooking, focus blocks, or important upcoming moments with timer and target date modes.'
    }
  ];

  const detailSections = [
    {
      title: 'A Flip Clock With Personality',
      body: 'Liquid Clock starts with a strong visual idea: time should be easy to read and pleasant to live with. The flip-style display is bold, clean, and designed to feel at home in a premium setup.',
      bullets: [
        'Large, readable time display',
        'Optional seconds and date',
        '12-hour or 24-hour format',
        'Themes ranging from minimal to vivid'
      ],
      label: 'Clock Mode',
      visual: 'clock-preview'
    },
    {
      title: 'Built For Focus',
      body: 'When it is time to work, Liquid Clock shifts from atmosphere to utility. Pomodoro sessions and timer modes keep you on track without crowding the screen with unnecessary controls.',
      bullets: [
        'Configurable Pomodoro cycles',
        'Stopwatch, countdown, and target date countdowns',
        'Full-screen timing for clearer focus',
        'Optional completion alerts and haptics'
      ],
      label: 'Pomodoro',
      image: screenshotFocusTablet,
      alt: 'Liquid Clock full-screen Pomodoro mode on iPad',
      device: 'iPad screenshot',
      orientation: 'landscape'
    },
    {
      title: 'Smart Display Controls',
      body: 'Long-running clocks need thoughtful behavior. Liquid Clock includes practical display options so it can stay on longer and feel better in real environments.',
      bullets: [
        'Keep Screen On',
        'Auto-hide tab bar after inactivity',
        'Auto-dim display',
        'OLED burn-in protection'
      ],
      label: 'Night Mode',
      image: screenshotSmartPhone,
      alt: 'Liquid Clock sound and hourly chime controls on iPhone',
      device: 'iPhone screenshot',
      orientation: 'portrait'
    }
  ];

  const quotes = [
    'Finally, a clock app I actually want to leave open.',
    'Beautiful enough for my desk, useful enough for every day.',
    'The cleanest Pomodoro and bedside clock setup I have used.'
  ];

  const faqs = [
    {
      question: 'What is Liquid Clock?',
      answer: 'Liquid Clock is a clock and time management app for iPhone and iPad. It combines a customizable flip-style clock with Pomodoro sessions, stopwatch mode, countdown timers, and target date countdowns.'
    },
    {
      question: 'Is Liquid Clock only for bedside use?',
      answer: 'No. It works well as a bedside clock, but it is also designed for desks, charging stands, focus sessions, workouts, cooking, and daily countdowns.'
    },
    {
      question: 'Can I customize the look?',
      answer: 'Yes. You can personalize the clock with different fonts, colors, card styles, and background themes.'
    },
    {
      question: 'Does it include a Pomodoro timer?',
      answer: 'Yes. Liquid Clock includes Pomodoro focus sessions with configurable work and break durations.'
    },
    {
      question: 'Does it work as a countdown timer too?',
      answer: 'Yes. You can use stopwatch mode, a standard countdown timer, or count down to a specific target date and time.'
    },
    {
      question: 'Is there a Pro version?',
      answer: 'Liquid Clock is free to start. Pro unlocks more customization choices and advanced paid features.'
    }
  ];

  const appStoreUrl = 'https://apps.apple.com/cn/app/liquid-clock-no-ads/id6757009818';

  return `
    <section id="features" class="features section-block">
      <div class="container section-intro">
        <div class="features-intro-shell">
          <div class="features-intro-copy">
            <p class="section-kicker">A calmer clock for deep work, bedside use, and everyday timing.</p>
            <h2 class="section-title">Beautiful by default. Focused when you need it.</h2>
            <p class="section-copy">Liquid Clock is a beautiful clock first, a practical focus tool second, and a thoughtful bedside or desk companion throughout the day.</p>
          </div>
          <div class="features-intro-meta">
            ${introHighlights.map((item) => `
              <div class="intro-meta-card">
                <strong>${item.title}</strong>
                <span>${item.detail}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="features-grid">
          ${features.map((feature, index) => `
            <article class="feature-card ${index === 0 ? 'feature-card-featured' : ''}">
              <div class="feature-icon">${feature.icon}</div>
              <h3 class="feature-title">${feature.title}</h3>
              <p class="feature-desc">${feature.description}</p>
            </article>
          `).join('')}
        </div>
      </div>

      <div class="container story-shell">
        <section class="story-card">
          <div class="story-copy">
            <p class="section-kicker">A clock that belongs on your desk and your nightstand.</p>
            <p>Most clock apps feel disposable. Liquid Clock is designed to feel like part of your environment. It gives you a strong visual clock when you want presence, then adds practical tools for focus sessions, countdowns, and daily routines without cluttering the experience.</p>
            <p>Whether your phone is docked beside your bed, propped up while you work, or sitting on a stand during a focus session, Liquid Clock keeps time visible in a way that feels calm and considered.</p>
          </div>
          <div class="story-metrics">
            <div class="metric-card">
              <strong>Clock, focus, and countdown</strong>
              <span>One full-screen experience instead of separate utilities.</span>
            </div>
            <div class="metric-card">
              <strong>Designed for long use</strong>
              <span>Display controls support desks, charging stands, and bedside setups.</span>
            </div>
            <div class="metric-card">
              <strong>iPhone and iPad</strong>
              <span>A calm presence on the devices you already keep nearby.</span>
            </div>
          </div>
        </section>
      </div>

      <div class="container section-block" id="use-cases">
        <div class="section-heading-row">
          <div>
            <p class="section-kicker">Use cases</p>
            <h2 class="section-title section-title-left">Made for real spaces and daily routines.</h2>
          </div>
        </div>
        <div class="use-cases-grid">
          ${useCases.map((useCase) => `
            <article class="use-case-card">
              <h3>${useCase.title}</h3>
              <p>${useCase.description}</p>
            </article>
          `).join('')}
        </div>
      </div>

      <div class="container detail-stack">
        ${detailSections.map((section, index) => `
          <section class="detail-panel ${index % 2 === 1 ? 'detail-panel-reverse' : ''}">
            <div class="detail-visual detail-visual-${index + 1}">
              ${section.visual === 'clock-preview' ? `
                <div class="detail-clock-preview" aria-hidden="true">
                  <div class="detail-clock-topbar">
                    <span>Flip Clock</span>
                    <span>Ambient Mode</span>
                  </div>
                  <div class="detail-clock-screen">
                    <span class="detail-clock-time">10:08</span>
                    <span class="detail-clock-meta">Tue 30 Apr</span>
                  </div>
                  <div class="detail-clock-chips">
                    <span class="detail-clock-chip">Readable from across the room</span>
                    <span class="detail-clock-chip">Quiet, premium presence</span>
                  </div>
                </div>
              ` : `
                <span class="detail-device-tag">${section.device}</span>
                <img src="${section.image}" alt="${section.alt}" class="detail-screenshot detail-screenshot-${section.orientation}" />
              `}
            </div>
            <div class="detail-copy">
              <p class="section-kicker">${section.label}</p>
              <h2 class="section-title section-title-left">${section.title}</h2>
              <p>${section.body}</p>
              <ul class="detail-bullets">
                ${section.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
              </ul>
            </div>
          </section>
        `).join('')}
      </div>

      <div class="container section-block">
        <section class="personalization-card">
          <div>
            <p class="section-kicker">Make it feel like your setup.</p>
            <h2 class="section-title section-title-left">Personalized to your space.</h2>
            <p>Liquid Clock lets you shape the visual mood of the app with clock fonts, digit colors, card colors, and multiple background styles. Use a minimal look for night use, or a richer animated theme for a desk display that feels alive.</p>
          </div>
          <div class="personalization-callout">
            <span class="callout-label">Free to start</span>
            <p>Pro unlocks expanded customization and advanced options.</p>
            <img src="${screenshotCustomizationPhone}" alt="Liquid Clock make your clock feel like yours screenshot on iPhone" class="personalization-screenshot" />
          </div>
        </section>
      </div>

      <div class="container section-block">
        <section class="quotes-section">
          <div class="section-heading-row">
            <div>
              <p class="section-kicker">Made for people who want a calmer screen.</p>
              <h2 class="section-title section-title-left">Designed to feel intentional, not disposable.</h2>
            </div>
          </div>
          <div class="quotes-grid">
            ${quotes.map((quote) => `
              <blockquote class="quote-card">“${quote}”</blockquote>
            `).join('')}
          </div>
        </section>
      </div>

      <div class="container section-block">
        <section class="comparison-card">
          <div class="comparison-column comparison-column-muted">
            <p class="section-kicker">Typical clock apps</p>
            <ul class="comparison-list">
              <li>Functional but generic</li>
              <li>Limited visual personality</li>
              <li>Focus tools feel separate from the clock</li>
              <li>Not designed for long on-screen use</li>
            </ul>
          </div>
          <div class="comparison-column comparison-column-highlight">
            <p class="section-kicker">Liquid Clock</p>
            <h2 class="section-title section-title-left">Why Liquid Clock feels different</h2>
            <ul class="comparison-list comparison-list-strong">
              <li>Strong visual design from the start</li>
              <li>Clock, focus, and countdown in one place</li>
              <li>Full-screen, low-distraction experience</li>
              <li>Display behavior designed for bedside and desk use</li>
            </ul>
          </div>
        </section>
      </div>

      <div class="container section-block" id="faq">
        <section class="faq-section">
          <div class="section-heading-row">
            <div>
              <p class="section-kicker">FAQ</p>
              <h2 class="section-title section-title-left">Answers before you download.</h2>
            </div>
          </div>
          <div class="faq-list">
            ${faqs.map((item) => `
              <details class="faq-item">
                <summary>${item.question}</summary>
                <p>${item.answer}</p>
              </details>
            `).join('')}
          </div>
        </section>
      </div>

      <div class="container section-block section-block-last">
        <section class="cta-panel">
          <p class="section-kicker">A calmer screen starts here.</p>
          <h2 class="section-title">Make time feel better on your screen.</h2>
          <p class="section-copy">Download Liquid Clock and turn your iPhone or iPad into a calmer clock, a cleaner focus timer, and a better-looking bedside or desk companion.</p>
          <div class="cta-actions">
            <a href="${appStoreUrl}" class="btn btn-primary" target="_blank" rel="noreferrer">Download on the App Store</a>
            <a href="#features" class="btn btn-secondary">Explore Features</a>
          </div>
        </section>
      </div>
    </section>
  `;
}
