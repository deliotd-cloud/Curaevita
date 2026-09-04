import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from './components/json-ld';
import { SiteFooter, SiteHeader } from './components/site-shell';
import { companions } from './lib/apps';
import { guides } from './lib/guides';
import { getGlp1PlayStoreUrl } from './lib/play-store';

export const metadata: Metadata = {
  title: 'GLP-1 Tracker App and Private Android Health Companions',
  description: 'Get GLP-1 Companion for private dose, injection-site, weight and side-effect tracking with PDF reports. Menopause Companion is coming soon.',
  alternates: { canonical: '/' },
};

const glp1Companion = companions.find((app) => app.slug === 'glp1-companion')!;
const menopauseCompanion = companions.find((app) => app.slug === 'menopause-companion')!;
const featuredGuides = guides.filter((guide) => guide.relatedApps.includes('glp1-companion')).slice(0, 3);

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
          sameAs: [
            'https://play.google.com/store/apps/developer?id=CuraeVita',
            'https://github.com/deliotd-cloud/Curaevita',
          ],
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
            <a className="button button-primary" href={getGlp1PlayStoreUrl('home_hero')}>Get GLP-1 Companion <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/apps/">Meet all Companions <span aria-hidden="true">→</span></a>
          </div>
          <p className="hero-offer-note"><strong>£0.99/month</strong> · Eligible new subscribers are shown a seven-day free trial before confirming in Google Play.</p>
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
        <div><strong>1</strong><span>app available on Google Play</span></div>
        <div><strong>1</strong><span>app in Google Play review</span></div>
        <div><strong>3</strong><span>apps in internal testing</span></div>
        <div><strong>0</strong><span>advertising trackers</span></div>
      </section>

      <section className="section launch-spotlight" aria-labelledby="glp1-launch-title">
        <div className="launch-visual" style={{ '--accent': glp1Companion.accent } as React.CSSProperties}>
          <span className="launch-live-pill">Available now</span>
          <Image src={glp1Companion.image} alt={glp1Companion.iconAlt} width="220" height="220" loading="lazy" decoding="async" />
          <small>Android · No CuraeVita account required</small>
        </div>
        <div className="launch-copy">
          <p className="eyebrow"><span /> Now on Google Play</p>
          <h2 id="glp1-launch-title">A private GLP-1 record that is ready when your appointment is.</h2>
          <p>Keep prescribed doses, injection sites, weight, measurements and side-effect observations together. Create a PDF for 30 days, 90 days or your full recorded history whenever you choose.</p>
          <ul className="launch-benefits">
            <li>Health entries stay on your device</li>
            <li>No advertising and no unnecessary account</li>
            <li>Restore purchases inside the app</li>
          </ul>
          <div className="hero-actions">
            <a className="button button-primary" href={getGlp1PlayStoreUrl('home_launch_spotlight')}>Install from Google Play <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/apps/glp1-companion/">See every feature <span aria-hidden="true">→</span></a>
          </div>
          <p className="purchase-reassurance">£0.99 per month after any trial shown to you by Google Play. Cancel renewal through Google Play; uninstalling alone does not cancel a subscription.</p>
        </div>
        <aside className="coming-soon-card">
          <Image src={menopauseCompanion.image} alt="" width="58" height="58" loading="lazy" decoding="async" />
          <div>
            <span>Coming soon</span>
            <strong>Menopause Companion</strong>
            <p>Already submitted for Google Play review.</p>
          </div>
          <a href="mailto:eliviontechnologies@gmail.com?subject=Menopause%20Companion%20launch%20update">Get a launch update <span aria-hidden="true">→</span></a>
        </aside>
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
          <p>GLP-1 Companion · available now</p>
          <strong><sup>£</sup>0.99<small>/ month</small></strong>
          <span>Google Play shows whether your account is eligible for the seven-day free trial before you confirm.</span>
          <a className="button button-primary" href={getGlp1PlayStoreUrl('home_pricing')}>Install from Google Play</a>
          <a className="price-terms-link" href="/terms/">View subscription terms</a>
        </div>
      </section>

      <section className="section home-guides-section">
        <div className="section-heading">
          <p className="eyebrow"><span /> Practical guidance</p>
          <h2>Make your personal record easier to use.</h2>
          <p>Non-diagnostic guides for symptom diaries, appointment reports and safer health notes on Android.</p>
        </div>
        <div className="home-guide-links">
          {featuredGuides.map((guide, index) => (
            <a href={`/guides/${guide.slug}/`} key={guide.slug}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{guide.title}</strong>
              <i aria-hidden="true">→</i>
            </a>
          ))}
        </div>
        <a className="section-more text-link" href="/guides/">Browse every CuraeVita guide <span aria-hidden="true">→</span></a>
      </section>

      <section className="updates-section" id="updates">
        <Image src="/curaevita-family.webp" alt="" width="88" height="88" loading="lazy" decoding="async" />
        <p className="eyebrow"><span /> Launch updates</p>
        <h2>Follow the CuraeVita journey.</h2>
        <p>GLP-1 Companion is available on Google Play. Menopause Companion has been submitted for Google Play review. ADHD, Gut and Migraine Companions remain in internal testing.</p>
        <a className="button button-light" href="mailto:eliviontechnologies@gmail.com?subject=CuraeVita%20launch%20updates">Email CuraeVita</a>
      </section>

      <SiteFooter />
    </main>
  );
}
