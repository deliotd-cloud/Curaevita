import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from '../components/json-ld';
import { SiteFooter, SiteHeader } from '../components/site-shell';
import { companions } from '../lib/apps';
import { getPlayStoreUrl } from '../lib/play-store';

export const metadata: Metadata = {
  title: 'Android Health Tracking Apps',
  description: 'Compare the CuraeVita Companion family for GLP-1 treatment, menopause, ADHD, digestive symptoms and migraine tracking.',
  alternates: { canonical: '/apps/' },
  openGraph: {
    title: 'CuraeVita Android Health Tracking Apps',
    description: 'Focused, privacy-conscious Companion apps for personal health records and clearer appointments.',
    url: '/apps/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps' }],
  },
};

export default function AppsPage() {
  return (
    <main className="inner-shell">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': 'https://curaevita.com/apps/#page',
        url: 'https://curaevita.com/apps/',
        name: 'CuraeVita Android health tracking apps',
        description: 'Focused Android Companion apps for private personal health records and appointment-ready reports.',
        isPartOf: { '@id': 'https://curaevita.com/#website' },
        inLanguage: 'en-GB',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: companions.map((app, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: app.name,
            url: `https://curaevita.com/apps/${app.slug}/`,
            image: `https://curaevita.com${app.image}`,
          })),
        },
      }} />
      <SiteHeader compact />
      <section className="directory-hero">
        <p className="eyebrow"><span /> CuraeVita Health Apps</p>
        <h1>Find the Companion for your health journey.</h1>
        <p>Each Android app focuses on one kind of personal record, but shares the same calm design, local-first approach and appointment-ready reporting.</p>
      </section>

      <section className="app-directory" aria-labelledby="app-list-title">
        <div className="visually-hidden" id="app-list-title">All CuraeVita Companion apps</div>
        {companions.map((app, index) => (
          <article className="directory-card" key={app.slug} style={{ '--accent': app.accent } as React.CSSProperties}>
            <div className="directory-visual">
              <span className="directory-number">0{index + 1}</span>
              <Image src={app.image} alt={app.iconAlt} width="128" height="128" loading={index > 1 ? 'lazy' : undefined} decoding="async" />
            </div>
            <div className="directory-copy">
              <div className="directory-status">
                <span className={`status-pill ${app.phase}`}>{app.status}</span>
                <span>Android</span>
              </div>
              <p className="card-kicker">CuraeVita</p>
              <h2>{app.name}</h2>
              <p>{app.description}</p>
              <div className="directory-actions">
                {app.storeUrl ? <a className="button button-primary" href={getPlayStoreUrl(app.storeUrl, 'app_directory')}>Install from Google Play</a> : null}
                {app.phase === 'review' ? <a className="button button-primary" href="mailto:eliviontechnologies@gmail.com?subject=Menopause%20Companion%20launch%20update">Get a launch update</a> : null}
                <a className="text-link" href={`/apps/${app.slug}/`}>Explore {app.name} <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <aside className="disclaimer-band">
        <strong>Personal tracking, not medical advice.</strong>
        <p>CuraeVita Companions help organise information you choose to record. They do not diagnose, prescribe, calculate doses or monitor emergencies.</p>
        <a href="/editorial-standards/">Read our content standards</a>
      </aside>
      <SiteFooter />
    </main>
  );
}
