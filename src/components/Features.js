import './Features.css';

export default function Features() {
  const features = [
    {
      title: 'Immersive Clock',
      description: 'Liquid aesthetics with GlassText rendering. Distraction-free mode automatically hides controls for a clean, full-screen look.',
      icon: '🕰️'
    },
    {
      title: 'Productivity Tools',
      description: 'Built-in Pomodoro and Countdown timers to help you manage focus sessions and everyday tasks effectively.',
      icon: '🍅'
    },
    {
      title: 'Smart Display',
      description: 'OLED burn-in protection, auto-dimming to save energy, and simple "Wake on Tap" functionality.',
      icon: '🛡️'
    },
    {
      title: 'Customization',
      description: 'Choose from multiple clock styles, configure burn-in protection, and toggle auto-hide behaviors to match your setup.',
      icon: '🎨'
    }
  ];

  return `
    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title">Why Liquid Clock?</h2>
        <div class="features-grid">
          ${features.map(feature => `
            <div class="feature-card">
              <div class="feature-icon">${feature.icon}</div>
              <h3 class="feature-title">${feature.title}</h3>
              <p class="feature-desc">${feature.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
