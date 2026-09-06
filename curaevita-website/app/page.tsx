import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from './components/json-ld';
import { SiteFooter, SiteHeader } from './components/site-shell';
import { companions } from './lib/apps';
import { guides } from './lib/guides';
import { getGlp1PlayStoreUrl } from './lib/play-store';

export const metadata: Metadata = {
  title: { absolute: 'CuraeVita | Private Health Apps & GLP-1 Tracker for Android' },
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

      <section className="hero renewed-hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Private health tracking for Android</p>
          <h1>Your health.<br />Your story.<br /><em>A little clearer.</em></h1>
          <p className="hero-intro">
            Less to remember. More to understand. Meet focused health apps for recording your day,
            noticing patterns and going into your next appointment prepared.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={getGlp1PlayStoreUrl('home_hero')}>Get GLP-1 Companion <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#companions">Explore the family <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-offer-note"><strong>£0.99/month.</strong> A seven-day free trial for eligible new subscribers. Google Play confirms your offer before you subscribe.</p>
          <ul className="trust-list" aria-label="CuraeVita principles">
            <li><span aria-hidden="true">✓</span> Private by design</li>
            <li><span aria-hidden="true">✓</span> Appointment-ready reports</li>
            <li><span aria-hidden="true">✓</span> No advertising</li>
          </ul>
        </div>

        <div className="product-stage">
          <div className="stage-heading"><span className="live-dot" /> AVAILABLE ON GOOGLE PLAY <span>01 / 05</span></div>
          <div className="stage-caption"><Image src={glp1Companion.image} alt="" width={48} height={48} /><div><strong>GLP-1 Companion</strong><span>Your routine, in one place.</span></div></div>
          <div className="screen-pair">
            <div className="phone-screen primary-screen"><Image src="/screens/glp1-overview.png" alt="GLP-1 Companion overview showing a next-injection reminder and a weight trend with example records" width={432} height={720} loading="eager" fetchPriority="high" /></div>
            <div className="screen-note"><span className="note-symbol" aria-hidden="true">↗</span><strong>From daily notes<br />to a clearer picture.</strong><p>Doses. Progress.<br />Appointment-ready reports.</p><a href="/apps/glp1-companion/">Take a closer look <span aria-hidden="true">→</span></a></div>
          </div>
          <div className="stage-bottom"><span>PRIVATE BY DESIGN</span><span>App preview · example data</span></div>
        </div>
      </section>

      <section className="status-band benefit-band" aria-label="Why choose CuraeVita">
        <div><strong>On your device.</strong><span>Local health records</span></div>
        <div><strong>On your terms.</strong><span>You choose what to share</span></div>
        <div><strong>Ready to discuss.</strong><span>Clear PDF reports</span></div>
        <div><strong>Without the noise.</strong><span>No advertising</span></div>
      </section>

      <section className="section launch-spotlight" aria-labelledby="glp1-launch-title">
        <div className="feature-preview glp-preview">
          <p className="preview-label">THE DETAILS. THE BIGGER PICTURE.</p>
          <div className="feature-screen-pair">
            <div className="phone-screen"><Image src="/screens/glp1-doses.png" alt="GLP-1 Companion dose log with example injection records" width={432} height={720} /></div>
            <div className="phone-screen"><Image src="/screens/glp1-progress.png" alt="GLP-1 Companion weight and measurement tracking with example data" width={432} height={720} /></div>
          </div>
          <p className="preview-disclosure">Actual app screens · illustrative records</p>
        </div>
        <div className="launch-copy">
          <div className="product-name"><Image src={glp1Companion.image} alt="" width={42} height={42} /><span>GLP-1 Companion</span></div>
          <p className="eyebrow"><span /> Available on Google Play</p>
          <h2 id="glp1-launch-title">Your GLP-1 routine.<br />All in one place.</h2>
          <p>Keep prescribed doses, injection sites, weight, measurements and side-effect observations together. So the details are there when you need them.</p>
          <ul className="launch-benefits">
            <li><strong>Keep track of your doses.</strong> Record injections and set local reminders.</li>
            <li><strong>See your progress.</strong> Revisit weight, measurements and personal observations.</li>
            <li><strong>Go into appointments prepared.</strong> Export a PDF for 30 days, 90 days or your recorded history.</li>
          </ul>
          <div className="hero-actions">
            <a className="button button-primary" href={getGlp1PlayStoreUrl('home_launch_spotlight')}>Install from Google Play <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/apps/glp1-companion/">See every feature <span aria-hidden="true">→</span></a>
          </div>
          <p className="purchase-reassurance">£0.99 per month after any trial shown to you by Google Play. Cancel renewal through Google Play; uninstalling alone does not cancel a subscription.</p>
        </div>
      </section>

      <section className="section menopause-spotlight" aria-labelledby="menopause-title">
        <div className="menopause-copy">
          <div className="product-name"><Image src={menopauseCompanion.image} alt="" width={42} height={42} /><span>Menopause Companion</span></div>
          <p className="eyebrow"><span /> Coming soon on Android</p>
          <h2 id="menopause-title">Every day is different.<br /><em>Keep the whole picture.</em></h2>
          <p>A place for symptom check-ins, hot flashes, mood and HRT records. Build a personal history you can bring to your next healthcare conversation.</p>
          <ul className="menopause-topics"><li>Symptom diaries</li><li>HRT tracking</li><li>PDF reports</li></ul>
          <div className="hero-actions"><a className="button button-primary" href="/apps/menopause-companion/">Explore Menopause Companion <span aria-hidden="true">→</span></a></div>
          <a className="text-link" href="mailto:eliviontechnologies@gmail.com?subject=Menopause%20Companion%20launch%20update">Email me when it launches <span aria-hidden="true">↗</span></a>
          <p className="launch-status-note">Not yet publicly available. No launch date is promised while Google Play review is in progress.</p>
        </div>
        <div className="menopause-screen-wrap"><div className="phone-screen"><Image src="/screens/menopause-today.png" alt="Menopause Companion daily dashboard with example symptom, hot-flash and mood entries" width={432} height={720} /></div><p className="preview-disclosure">App preview · example data</p></div>
      </section>

      <section className="section companions-section" id="companions">
        <div className="section-heading">
          <p className="eyebrow"><span /> The Companion family</p>
          <h2>A family of apps.<br />A more personal kind of care.</h2>
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
          <h2>Good technology should<br /><em>leave room for life.</em></h2>
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
        <div className="privacy-promise">
          <Image src="/curaevita-family.webp" alt="" width={72} height={72} />
          <p className="eyebrow">THE CURAEVITA PROMISE</p>
          <strong>Personal records.<br />Not a public profile.</strong>
          <p>No CuraeVita account. No advertising. Your health entries stay close to you.</p>
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
          <h2>A little support.<br />A straightforward price.</h2>
          <p className="pricing-explainer">GLP-1 Companion is £0.99 per month in the UK, with a seven-day free trial for eligible new subscribers. No advertising and no CuraeVita account to create.</p>
        </div>
        <div className="price-card">
          <p>GLP-1 Companion · available now</p>
          <strong><sup>£</sup>0.99<small>/ month</small></strong>
          <span>Google Play shows whether your account is eligible for the seven-day free trial before you confirm.</span>
          <p className="renewal-note">Renews monthly unless cancelled in Google Play. Uninstalling the app does not cancel your subscription. Local prices may vary.</p>
          <a className="button button-primary" href={getGlp1PlayStoreUrl('home_pricing')}>Install from Google Play</a>
          <a className="price-terms-link" href="/terms/">View subscription terms</a>
        </div>
      </section>

      <section className="section home-guides-section">
        <div className="section-heading">
          <p className="eyebrow"><span /> Practical guidance</p>
          <h2>A little knowledge.<br />A more useful record.</h2>
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
