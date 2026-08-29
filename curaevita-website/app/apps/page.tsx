import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteFooter, SiteHeader } from '../components/site-shell';
import { companions } from '../lib/apps';

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
              <a className="text-link" href={`/apps/${app.slug}/`}>Explore {app.name} <span aria-hidden="true">→</span></a>
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
