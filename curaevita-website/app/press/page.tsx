import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from '../components/json-ld';
import { SiteFooter, SiteHeader } from '../components/site-shell';
import { companions } from '../lib/apps';

export const metadata: Metadata = {
  title: 'CuraeVita Press and Creator Kit',
  description: 'CuraeVita brand facts, approved descriptions, app icons, contact details and links for journalists, reviewers and health-app creators.',
  alternates: { canonical: '/press/' },
  openGraph: {
    title: 'CuraeVita Press and Creator Kit',
    description: 'Brand facts, app information and downloadable CuraeVita assets for accurate coverage.',
    url: '/press/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps' }],
  },
};

export default function PressPage() {
  return (
    <main className="inner-shell">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': 'https://curaevita.com/press/#page',
        url: 'https://curaevita.com/press/',
        name: 'CuraeVita Press and Creator Kit',
        isPartOf: { '@id': 'https://curaevita.com/#website' },
        about: { '@id': 'https://curaevita.com/#organization' },
        inLanguage: 'en-GB',
      }} />
      <SiteHeader compact />
      <article className="story-page press-page">
        <header className="story-hero">
          <p className="eyebrow"><span /> Press and creator kit</p>
          <h1>Accurate information about CuraeVita.</h1>
          <p>Approved descriptions, product facts and original app icons for journalists, reviewers, community organisers and creators covering the CuraeVita Companion family.</p>
        </header>

        <section className="story-split">
          <div>
            <p className="eyebrow"><span /> Short description</p>
            <h2>Focused Android health records, built around privacy.</h2>
          </div>
          <div>
            <p>CuraeVita is an independent family of Android health-tracking apps. Each Companion focuses on one lived health journey and helps people organise personal observations, medication records and appointment-ready PDF reports.</p>
            <p>Health entries stay on the device unless the user chooses to export them or enables a clearly described optional service. CuraeVita apps do not diagnose, prescribe, calculate doses or use behavioural advertising.</p>
          </div>
        </section>

        <section className="values-grid" aria-label="CuraeVita facts">
          <article><span>01</span><h2>Independent</h2><p>CuraeVita is developed by Elivion Technologies and is not affiliated with a medicine manufacturer or healthcare provider.</p></article>
          <article><span>02</span><h2>Android first</h2><p>GLP-1 Companion and Menopause Companion are in Google Play closed testing. Three additional Companions are in internal testing.</p></article>
          <article><span>03</span><h2>Local first</h2><p>Core health entries are stored on the user’s device. Exports happen only when the user chooses.</p></article>
          <article><span>04</span><h2>Clear limits</h2><p>The apps are personal tracking tools, not diagnostic devices, treatment services or emergency monitors.</p></article>
        </section>

        <section className="press-assets">
          <div className="content-heading">
            <p className="eyebrow"><span /> Original app icons</p>
            <h2>Download the supplied CuraeVita artwork.</h2>
            <p>Use each icon with its matching app name. Do not recolour, crop into the central mark or imply endorsement by a medicine manufacturer or healthcare provider.</p>
          </div>
          <div className="press-asset-grid">
            {companions.map((app) => (
              <article key={app.slug}>
                <Image src={app.image} alt={app.iconAlt} width="104" height="104" loading="lazy" decoding="async" />
                <div><strong>{app.name}</strong><span>{app.status}</span></div>
                <a href={app.image.replace('.webp', '.png')} download>Download PNG</a>
              </article>
            ))}
          </div>
        </section>

        <section className="story-split pale-panel">
          <div>
            <p className="eyebrow"><span /> Coverage and review requests</p>
            <h2>Ask for details or testing access.</h2>
          </div>
          <div>
            <p>For product facts, screenshots, review access or a correction, email CuraeVita. Please identify the app and publication, channel or community involved.</p>
            <a className="button button-primary" href="mailto:eliviontechnologies@gmail.com?subject=CuraeVita%20press%20or%20review%20request">Email the CuraeVita team</a>
          </div>
        </section>

        <section className="review-note">
          <strong>Brand source</strong>
          <p>For the latest status and product wording, use the individual app pages on this website. This page was reviewed on 30 August 2026.</p>
          <a href="/apps/">View all app pages</a>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
