import './Features.css';
import screenshotFocusTablet from '../assets/clocks/iPad-13-V01-02.png';
import screenshotWidgetPhone from '../assets/clocks/iPhone-6-9-V01-07.png';
import screenshotMacOS from '../assets/clocks/macOS-14-2-V01-03.png';

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
      title: 'iPhone, iPad + Mac',
      detail: 'Native on every Apple platform with full settings, keyboard shortcuts, and polished chrome.'
    }
  ];

  const features = [
    {
      title: 'Immersive Flip Clock',
      description: 'Large, legible time with a flip-style design that feels bold and modern from across the room.',
      icon: '01'
    },
    {
      title: 'Home Screen Widget',
      description: 'Self-contained flip clock widget synced to your style preferences, with small, medium, and large families.',
      icon: '02'
    },
    {
      title: 'Deep Customization',
      description: 'Choose from ten digit colors, multiple fonts, card colors, and animated backgrounds to match your space and mood.',
      icon: '03'
    },
    {
      title: 'Pomodoro Focus Sessions',
      description: 'Run focused work sessions with configurable work and break lengths in a distraction-light, full-screen experience.',
      icon: '04'
    },
    {
      title: 'More Than A Timer',
      description: 'Use stopwatch mode, a classic countdown timer, or count down to a target date and time.',
      icon: '05'
    },
    {
      title: 'Mirror Effect',
      description: 'Mirror the clock face for HUD-style use in reflections or car windshields, with orientation lock.',
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
      title: 'For Mac Users',
      description: 'Full native desktop app with Liquid Glass-styled controls, polished sidebar navigation, and keyboard shortcuts.'
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
      title: 'Widget + Internationalization',
      body: 'Glance at your clock from the home screen with the new flip clock widget, or use Liquid Clock in any of 9 supported languages with automatic system language detection.',
      bullets: [
        'Small, medium, and systemLarge widget families',
        'Synced to your style preferences',
        '9 languages with auto-detection',
        'Keyboard shortcuts on iPad and Mac'
      ],
      label: 'Widget + i18n',
      image: screenshotWidgetPhone,
      alt: 'Liquid Clock widget and internationalization on iPhone',
      device: 'iPhone screenshot',
      orientation: 'portrait'
    }
  ];

  const quotes = [
    'Finally, a clock app I actually want to leave open on my Mac.',
    'Beautiful enough for my desk, useful enough for every day.',
    'The widget alone makes this worth downloading.'
  ];

  const faqs = [
    {
      question: 'What is Liquid Clock?',
      answer: 'Liquid Clock is a clock and time management app for iPhone, iPad, and Mac. It combines a customizable flip-style clock with Pomodoro sessions, stopwatch mode, countdown timers, target date countdowns, and a home screen widget.'
    },
    {
      question: 'Is Liquid Clock available on Mac?',
      answer: 'Yes. Liquid Clock 2.1 brought full native macOS support with polished settings, Liquid Glass-styled controls, sidebar navigation, and keyboard shortcuts.'
    },
    {
      question: 'Does Liquid Clock have a widget?',
      answer: 'Yes. Version 2.3 introduced a self-contained flip clock widget for iOS, available in small, medium, and systemLarge families, synced to your style preferences.'
    },
    {
      question: 'Is there a Pro version?',
      answer: 'Liquid Clock is free to start with the essentials. Pro unlocks deeper customization, more color and font choices, and advanced features. A one-time purchase, no subscription.'
    },
    {
      question: 'Can I customize the look?',
      answer: 'Yes. You can personalize the clock with different fonts, ten digit colors (including mint, cyan, indigo, brown, and gray), card styles, and animated backgrounds.'
    },
    {
      question: 'What languages does Liquid Clock support?',
      answer: 'Liquid Clock 2.3 supports 9 languages with automatic system language detection on first launch, covering 410 translated strings across the app.'
    }
  ];

  const designQuestions = [
    {
      question: 'What does "26" mean in the logo?',
      answer: 'Liquid Clock is inspired by the Liquid Glass design language introduced across Apple platforms in version 26. The "26" in the logo is a small tribute to that design philosophy — depth, translucency, motion, and playful color.'
    },
    {
      question: 'Why make another flip clock app?',
      answer: 'Most clock apps today lean heavily into ultra-minimal black-and-white designs. While minimalism can look clean, it can also feel cold and repetitive. Modern Apple devices have beautiful displays, and we wanted to create a clock that feels vibrant, colorful, and alive. The visual experience of Liquid Clock was carefully crafted together with designer Donald Smith.'
    },
    {
      question: 'Why are there no ads?',
      answer: 'Liquid Clock is designed to feel calm, immersive, and distraction-free. We believe a clock should never compete for your attention with banners, pop-ups, or interruptions. That\'s why Liquid Clock will never include ads. We also avoid aggressive monetization — premium screens only appear when you intentionally access premium features, never randomly during normal use.'
    },
    {
      question: 'Why does the timer reset automatically?',
      answer: 'The timer resets by default to help you quickly restart a session and stay focused with minimal friction. If you prefer to keep your timer state, you can enable Run in Background in Settings.'
    },
    {
      question: 'If I purchase on iPhone, do I need to pay again on macOS?',
      answer: 'No. Liquid Clock supports iPhone, iPad, and Mac with a single purchase. Most features are completely free, while a small number of advanced features require a premium upgrade. Once unlocked, your purchase works across all supported Apple platforms using the same Apple Account.'
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
            <p class="section-copy">Liquid Clock is a beautiful clock first, a practical focus tool second, and a thoughtful bedside, desk, or desktop companion throughout the day.</p>
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
            <p class="section-kicker">A clock that belongs on your desk, nightstand, and Mac.</p>
            <p>Most clock apps feel disposable. Liquid Clock is designed to feel like part of your environment. It gives you a strong visual clock when you want presence, then adds practical tools for focus sessions, countdowns, and daily routines without cluttering the experience.</p>
            <p>Whether your phone is docked beside your bed, your iPad is propped up while you work, or your Mac is on your desk, Liquid Clock keeps time visible in a way that feels calm and considered.</p>
          </div>
          <div class="story-metrics">
            <div class="metric-card">
              <strong>Clock, widget, and countdown</strong>
              <span>One full-screen experience plus a home screen widget instead of separate utilities.</span>
            </div>
            <div class="metric-card">
              <strong>Designed for long use</strong>
              <span>Display controls support desks, charging stands, and bedside setups across all devices.</span>
            </div>
            <div class="metric-card">
              <strong>iPhone, iPad, and Mac</strong>
              <span>A calm presence on every Apple device you already keep nearby.</span>
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
            <p>Liquid Clock lets you shape the visual mood of the app with clock fonts, ten digit colors including mint, cyan, indigo, brown, and gray, card colors, and multiple animated backgrounds. Use a minimal look for night use, or a richer theme for a desk display that feels alive.</p>
          </div>
          <div class="personalization-callout">
            <span class="callout-label">Now on Mac</span>
            <p>Full native experience with polished settings and Liquid Glass styling.</p>
            <img src="${screenshotMacOS}" alt="Liquid Clock on macOS with settings" class="personalization-screenshot" />
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
              <li>Mobile-only, no desktop experience</li>
            </ul>
          </div>
          <div class="comparison-column comparison-column-highlight">
            <p class="section-kicker">Liquid Clock</p>
            <h2 class="section-title section-title-left">Why Liquid Clock feels different</h2>
            <ul class="comparison-list comparison-list-strong">
              <li>Strong visual design from the start</li>
              <li>Clock, widget, focus, and countdown in one place</li>
              <li>Native on iPhone, iPad, and Mac</li>
              <li>Mirror effect and orientation lock for any setup</li>
            </ul>
          </div>
        </section>
      </div>

      <div class="container section-block">
        <section class="design-qa-section">
          <div class="section-heading-row">
            <div>
              <p class="section-kicker">Behind the Design</p>
              <h2 class="section-title section-title-left">Why Liquid Clock is built the way it is.</h2>
            </div>
          </div>
          <div class="design-qa-grid">
            ${designQuestions.map((item) => `
              <details class="design-qa-item">
                <summary>${item.question}</summary>
                <p>${item.answer}</p>
              </details>
            `).join('')}
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
          <p class="section-copy">Download Liquid Clock and turn your iPhone, iPad, or Mac into a calmer clock, a cleaner focus timer, and a better-looking bedside or desk companion.</p>
          <div class="cta-actions">
            <a href="${appStoreUrl}" class="btn btn-primary" target="_blank" rel="noreferrer">Download on the App Store</a>
            <a href="#features" class="btn btn-secondary">Explore Features</a>
          </div>
        </section>
      </div>
    </section>
  `;
}
