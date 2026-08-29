const companions = [
  {
    name: 'GLP-1 Companion',
    image: '/apps/glp1.png',
    status: 'Closed testing',
    phase: 'testing',
    description: 'Dose, side-effect, weight and progress tracking with reports made for appointments.',
    accent: '#8ee84b',
  },
  {
    name: 'Menopause Companion',
    image: '/apps/menopause.png',
    status: 'Closed testing',
    phase: 'testing',
    description: 'Symptoms, HRT, cycles and trends brought together in one calm daily check-in.',
    accent: '#ff896f',
  },
  {
    name: 'ADHD Companion',
    image: '/apps/adhd.png',
    status: 'Coming next',
    phase: 'next',
    description: 'Medication, focus, routine and wear-off tracking designed for quick daily use.',
    accent: '#4ce9c2',
  },
  {
    name: 'Gut Companion',
    image: '/apps/gut.png',
    status: 'In development',
    phase: 'development',
    description: 'Meals, symptoms and possible triggers organised into patterns you can revisit.',
    accent: '#6ae28f',
  },
  {
    name: 'Migraine Companion',
    image: '/apps/migraine.png',
    status: 'In development',
    phase: 'development',
    description: 'Attacks, medication response, triggers and optional weather context in one timeline.',
    accent: '#9486ff',
  },
];

const principles = [
  {
    number: '01',
    title: 'Private by design',
    text: 'Your health entries stay on your device unless you choose to export them. No advertising profiles and no unnecessary account.',
  },
  {
    number: '02',
    title: 'Useful in real appointments',
    text: 'Turn everyday tracking into clear trends, summaries and reports you can discuss with a healthcare professional.',
  },
  {
    number: '03',
    title: 'Focused, not overwhelming',
    text: 'Each Companion is shaped around one health journey, with quick check-ins and language that respects your experience.',
  },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="CuraeVita home">
          <img src="/curaevita-family.png" alt="" width="42" height="42" />
          <span><strong>CuraeVita</strong><small>Care for life</small></span>
        </a>
        <div className="nav-links">
          <a href="#companions">Companions</a>
          <a href="#approach">Our approach</a>
          <a href="#privacy">Privacy</a>
          <a className="nav-cta" href="#updates">Get launch updates</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Thoughtful health tracking, made personal</p>
          <h1>Small daily check-ins.<br /><em>Clearer health conversations.</em></h1>
          <p className="hero-intro">
            CuraeVita Companions help you notice patterns, prepare for appointments
            and keep your health story close, without ads or unnecessary accounts.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#companions">Meet the Companions <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#privacy">How your data is handled <span aria-hidden="true">→</span></a>
          </div>
          <ul className="trust-list" aria-label="CuraeVita principles">
            <li><span aria-hidden="true">✓</span> Private by design</li>
            <li><span aria-hidden="true">✓</span> Clinician-friendly reports</li>
            <li><span aria-hidden="true">✓</span> No advertising</li>
          </ul>
        </div>

        <div className="brand-showcase" aria-label="The CuraeVita app family">
          <div className="showcase-orbit" aria-hidden="true" />
          <img className="family-symbol" src="/curaevita-family.png" alt="CuraeVita family mark" width="210" height="210" />
          {companions.slice(0, 4).map((app, index) => (
            <div className={`orbit-icon orbit-${index + 1}`} key={app.name}>
              <img src={app.image} alt={`${app.name} icon`} width="86" height="86" />
            </div>
          ))}
          <div className="showcase-note">
            <span>One family</span>
            <strong>Purpose-built Companions</strong>
            <p>Familiar, focused and designed to work together.</p>
          </div>
        </div>
      </section>

      <section className="status-band" aria-label="Current release status">
        <div><strong>2</strong><span>apps in closed testing</span></div>
        <div><strong>1</strong><span>next release candidate</span></div>
        <div><strong>£0.99</strong><span>UK monthly price for new subscribers</span></div>
        <div><strong>0</strong><span>advertising trackers</span></div>
      </section>

      <section className="section companions-section" id="companions">
        <div className="section-heading">
          <p className="eyebrow"><span /> The Companion family</p>
          <h2>One health journey at a time.</h2>
          <p>Each app concentrates on the details that matter for its community while keeping the same calm CuraeVita experience.</p>
        </div>
        <div className="app-grid">
          {companions.map((app, index) => (
            <article className="companion-card" key={app.name} style={{ '--accent': app.accent, '--delay': index } as React.CSSProperties}>
              <div className="app-card-top">
                <img src={app.image} alt={`${app.name} app icon`} width="78" height="78" />
                <span className={`status-pill ${app.phase}`}>{app.status}</span>
              </div>
              <p className="card-kicker">CuraeVita</p>
              <h3>{app.name}</h3>
              <p className="card-description">{app.description}</p>
              <div className="card-rule" />
              <span className="card-foot">Android first <i aria-hidden="true">↗</i></span>
            </article>
          ))}
        </div>
      </section>

      <section className="section approach-section" id="approach">
        <div className="section-heading light">
          <p className="eyebrow"><span /> A calmer way to track</p>
          <h2>Designed to be useful<br />after the screen closes.</h2>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section privacy-section" id="privacy">
        <div className="privacy-art" aria-hidden="true">
          <img src="/curaevita-family.png" alt="" width="250" height="250" />
          <span className="privacy-ring ring-one" />
          <span className="privacy-ring ring-two" />
        </div>
        <div className="privacy-copy">
          <p className="eyebrow"><span /> Your information, your choice</p>
          <h2>Health tracking without turning you into the product.</h2>
          <p>Your logs are kept locally on your device. A paid Companion uses Google Play and RevenueCat only to process and verify subscription access. They do not receive your medication, symptom or journal entries.</p>
          <ul>
            <li>Export only when you choose</li>
            <li>Optional device access lock</li>
            <li>No behavioural advertising SDK</li>
          </ul>
          <a className="text-link" href="/privacy/">Read the full privacy notice <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="section pricing-section">
        <div>
          <p className="eyebrow"><span /> Straightforward subscription</p>
          <h2>A small price for a focused companion.</h2>
        </div>
        <div className="price-card">
          <p>UK price for new subscribers</p>
          <strong><sup>£</sup>0.99<small>/ month</small></strong>
          <span>Google Play shows whether your account is eligible for the seven-day free trial before you confirm.</span>
          <a className="button button-primary" href="/terms/">View subscription terms</a>
        </div>
      </section>

      <section className="updates-section" id="updates">
        <img src="/curaevita-family.png" alt="" width="88" height="88" />
        <p className="eyebrow"><span /> Launch updates</p>
        <h2>Follow the CuraeVita journey.</h2>
        <p>GLP-1 Companion and Menopause Companion are completing closed testing. ADHD Companion is next.</p>
        <a className="button button-light" href="mailto:deliotd@gmail.com?subject=CuraeVita%20launch%20updates">Email CuraeVita</a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <img src="/curaevita-family.png" alt="" width="48" height="48" />
          <span><strong>CuraeVita</strong><small>Care for life</small></span>
        </a>
        <p>Independent, privacy-conscious health tracking tools. CuraeVita apps do not diagnose, prescribe or replace professional medical care.</p>
        <div className="footer-links">
          <a href="/privacy/">Privacy</a>
          <a href="/terms/">Terms</a>
          <a href="mailto:deliotd@gmail.com">Support</a>
        </div>
      </footer>
    </main>
  );
}
