import Image from 'next/image';
import { JsonLd } from './components/json-ld';
import { SiteFooter, SiteHeader } from './components/site-shell';
import { companions } from './lib/apps';

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
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://curaevita.com/#organization',
          name: 'CuraeVita Health Apps',
          alternateName: 'CuraeVita',
          url: 'https://curaevita.com/',
          logo: 'https://curaevita.com/icon.png',
          email: 'mailto:eliviontechnologies@gmail.com',
          sameAs: ['https://github.com/deliotd-cloud/Curaevita'],
          description: 'Independent, privacy-conscious Android health tracking apps for personal records and clearer healthcare conversations.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://curaevita.com/#website',
          url: 'https://curaevita.com/',
          name: 'CuraeVita Health Apps',
          publisher: { '@id': 'https://curaevita.com/#organization' },
          inLanguage: 'en-GB',
        },
      ]} />
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Thoughtful health tracking, made personal</p>
          <h1>Small daily <span className="no-break">check-ins.</span><br /><em>Clearer health conversations.</em></h1>
          <p className="hero-intro">
            CuraeVita makes focused Android health-tracking apps that help you notice patterns,
            prepare for appointments and keep your health story close, without ads or unnecessary accounts.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/apps/">Meet the Companions <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="/privacy/">How your data is handled <span aria-hidden="true">→</span></a>
          </div>
          <ul className="trust-list" aria-label="CuraeVita principles">
            <li><span aria-hidden="true">✓</span> Private by design</li>
            <li><span aria-hidden="true">✓</span> Appointment-ready reports</li>
            <li><span aria-hidden="true">✓</span> No advertising</li>
          </ul>
        </div>

        <div className="brand-showcase" aria-label="The CuraeVita app family">
          <div className="showcase-orbit" aria-hidden="true" />
          <Image className="family-symbol" src="/curaevita-family.webp" alt="CuraeVita family mark" width="210" height="210" loading="eager" fetchPriority="high" decoding="async" />
          {companions.slice(0, 4).map((app, index) => (
            <div className={`orbit-icon orbit-${index + 1}`} key={app.name}>
              <Image src={app.image} alt="" width="86" height="86" decoding="async" />
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
        <div><strong>3</strong><span>apps in internal testing</span></div>
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
            <a
              className="companion-card"
              href={`/apps/${app.slug}/`}
              key={app.name}
              aria-label={`Learn more about ${app.name}`}
              style={{ '--accent': app.accent, '--delay': index } as React.CSSProperties}
            >
              <div className="app-card-top">
                <Image src={app.image} alt={app.iconAlt} width="78" height="78" loading="lazy" decoding="async" />
                <span className={`status-pill ${app.phase}`}>{app.status}</span>
              </div>
              <p className="card-kicker">CuraeVita</p>
              <h3>{app.name}</h3>
              <p className="card-description">{app.description}</p>
              <div className="card-rule" />
              <span className="card-foot">Explore the app <i aria-hidden="true">↗</i></span>
            </a>
          ))}
        </div>
        <a className="section-more text-link" href="/apps/">Compare all CuraeVita Companions <span aria-hidden="true">→</span></a>
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
          <Image src="/curaevita-family.webp" alt="" width="250" height="250" loading="lazy" decoding="async" />
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
          <p>UK price for new GLP-1 and Menopause subscribers</p>
          <strong><sup>£</sup>0.99<small>/ month</small></strong>
          <span>Google Play shows whether your account is eligible for the seven-day free trial before you confirm.</span>
          <a className="button button-primary" href="/terms/">View subscription terms</a>
        </div>
      </section>

      <section className="section home-guides-section">
        <div className="section-heading">
          <p className="eyebrow"><span /> Practical guidance</p>
          <h2>Make your personal record easier to use.</h2>
          <p>Non-diagnostic guides for symptom diaries, appointment reports and safer health notes on Android.</p>
        </div>
        <div className="home-guide-links">
          <a href="/guides/symptom-diary-for-an-appointment/"><span>01</span><strong>Prepare a symptom diary for an appointment</strong><i aria-hidden="true">→</i></a>
          <a href="/guides/medication-tracking-report/"><span>02</span><strong>Build a clear medication tracking report</strong><i aria-hidden="true">→</i></a>
          <a href="/guides/protect-health-notes-on-android/"><span>03</span><strong>Keep private health notes safer on Android</strong><i aria-hidden="true">→</i></a>
        </div>
      </section>

      <section className="updates-section" id="updates">
        <Image src="/curaevita-family.webp" alt="" width="88" height="88" loading="lazy" decoding="async" />
        <p className="eyebrow"><span /> Launch updates</p>
        <h2>Follow the CuraeVita journey.</h2>
        <p>GLP-1 Companion and Menopause Companion are in closed testing. ADHD, Gut and Migraine Companions are in internal testing.</p>
        <a className="button button-light" href="mailto:eliviontechnologies@gmail.com?subject=CuraeVita%20launch%20updates">Email CuraeVita</a>
      </section>

      <SiteFooter />
    </main>
  );
}
