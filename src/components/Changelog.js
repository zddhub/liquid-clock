import './Changelog.css';

export default function Changelog() {
  const releases = [
    {
      version: '2.4.0',
      date: 'June 2026',
      commits: 32,
      label: 'Pin Window, Onboarding & Paywall Polish',
      sections: [
        {
          title: 'Pin Window (macOS)',
          items: [
            'New toolbar button and keyboard shortcut (⌘⇧P) to float the clock window above other apps on macOS.'
          ]
        },
        {
          title: 'Onboarding & Paywall Redesign',
          items: [
            'Rewritten onboarding pages and paywall feature descriptions for better conversion. The flip clock widget is now featured in both flows.',
            'Full-width purchase button on iOS and smoother paywall scrolling.'
          ]
        },
        {
          title: 'Localization Polish',
          items: [
            'Runtime localization fixes: Q&A answers, app display name (液体时钟), language names, widget date formatting, AM/PM labels, tick sound titles, and Active Hours picker labels now all respect the in-app language setting immediately.',
            'Chinese spacing corrections and locale-aware date formatting throughout.'
          ]
        },
        {
          title: 'Infrastructure',
          items: [
            'QuickPurchase is now a remote SPM dependency. macOS auto-relaunch on language change so system chrome picks up the new locale.'
          ]
        }
      ]
    },
    {
      version: '2.3.0',
      date: 'May 2026',
      commits: 52,
      label: 'Internationalization & Flip Clock Widget',
      sections: [
        {
          title: 'Home Screen Widget (iOS)',
          items: [
            'Self-contained flip clock widget synced to your style preferences, with small, medium, and systemLarge families.',
            'Uses per-minute timeline entries with shared UserDefaults syncing, static background snapshots from your chosen animated backgrounds, and a custom flip-split mask that stays within WidgetKit\'s render budget.'
          ]
        },
        {
          title: 'Internationalization',
          items: [
            '410 translated strings across 10 languages, with system language auto-detection on first launch.'
          ]
        },
        {
          title: 'Behind the Design',
          items: [
            'New Q&A section in Settings with desktop layout and click-to-expand answers.'
          ]
        },
        {
          title: 'More Colors',
          items: [
            'Five new digit colors: mint, cyan, indigo, brown, and gray.'
          ]
        },
        {
          title: 'Refinements',
          items: [
            'App name unified to "Liquid Clock" (with space).',
            'Clock fonts locked to medium Dynamic Type.',
            'QuickPurchase extracted to a reusable remote SPM package.',
            'Widget rendering hardened across accented/tinted modes.'
          ]
        }
      ]
    },
    {
      version: '2.2.0',
      date: 'May 2026',
      commits: 10,
      label: 'Mirror Effect & Orientation Lock',
      sections: [
        {
          title: 'Mirror Effect',
          items: [
            'New display setting that mirrors the clock face for HUD-style use in reflections or car windshields.'
          ]
        },
        {
          title: 'Orientation Lock',
          items: [
            'Lock the clock to portrait or landscape, independent of device rotation.'
          ]
        },
        {
          title: 'Keyboard Shortcuts',
          items: [
            'App-wide keyboard shortcuts and a settings guide for iPad/Mac users.'
          ]
        },
        {
          title: 'Onboarding',
          items: [
            'Mirror effect now highlighted in onboarding and the paywall feature grid.'
          ]
        }
      ]
    },
    {
      version: '2.1.0',
      date: 'May 2026',
      commits: 10,
      label: 'macOS Support',
      sections: [
        {
          title: 'macOS',
          items: [
            'Native desktop app with full settings chrome, Liquid Glass-styled controls, and polished sidebar navigation. The same flip clock experience, now on Mac.'
          ]
        },
        {
          title: 'Paywall',
          items: [
            'New paywall with feature comparison grid and Pro benefits breakdown.'
          ]
        }
      ]
    }
  ];

  const stats = [
    { value: '104', label: 'Commits' },
    { value: '4', label: 'Releases' },
    { value: '10', label: 'Languages' },
    { value: '410', label: 'Translated strings' }
  ];

  return `
    <section id="changelog" class="changelog section-block">
      <div class="container">
        <div class="section-heading-row">
          <div>
            <p class="section-kicker">What's New</p>
            <h2 class="section-title section-title-left">Recent updates from the team.</h2>
          </div>
        </div>

        <p class="changelog-summary">May 1 – June 2, 2026 — 104 commits across four releases. Headline features: Pin Window (2.4), Widget + i18n (2.3), Mirror Effect (2.2), macOS (2.1).</p>

        <div class="changelog-stats">
          ${stats.map((stat) => `
            <div class="changelog-stat">
              <strong>${stat.value}</strong>
              <span>${stat.label}</span>
            </div>
          `).join('')}
        </div>

        <div class="changelog-timeline">
          ${releases.map((release) => `
            <div class="changelog-release">
              <div class="changelog-release-head">
                <div class="changelog-version-badge">
                  <span class="changelog-version">v${release.version}</span>
                  <span class="changelog-date">${release.date}</span>
                  <span class="changelog-commits">${release.commits} commits</span>
                </div>
                <h3 class="changelog-label">${release.label}</h3>
              </div>
              <div class="changelog-sections">
                ${release.sections.map((section) => `
                  <div class="changelog-section">
                    <h4>${section.title}</h4>
                    <ul>
                      ${section.items.map((item) => `<li>${item}</li>`).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
