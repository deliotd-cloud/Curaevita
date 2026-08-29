import type { Metadata } from 'next';
import { JsonLd } from '../components/json-ld';
import { SiteFooter, SiteHeader } from '../components/site-shell';

export const metadata: Metadata = {
  title: 'About CuraeVita Health Apps',
  description: 'Why CuraeVita creates focused, privacy-conscious Android health trackers and how the Companion family is designed.',
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About CuraeVita Health Apps',
    description: 'The purpose and principles behind the CuraeVita Companion family.',
    url: '/about/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps' }],
  },
};

export default function AboutPage() {
  return (
    <main className="inner-shell">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': 'https://curaevita.com/about/#page',
        url: 'https://curaevita.com/about/',
        name: 'About CuraeVita Health Apps',
        isPartOf: { '@id': 'https://curaevita.com/#website' },
        about: { '@id': 'https://curaevita.com/#organization' },
        inLanguage: 'en-GB',
      }} />
      <SiteHeader compact />
      <article className="story-page">
        <header className="story-hero">
          <p className="eyebrow"><span /> About CuraeVita</p>
          <h1>Focused health records for the conversations that matter.</h1>
          <p>CuraeVita is an independent family of Android health-tracking apps. Each Companion helps organise one kind of lived health experience without trying to become a diagnosis, a treatment plan or a social network.</p>
        </header>

        <section className="story-split">
          <div>
            <p className="eyebrow"><span /> Why it exists</p>
            <h2>Health history is hard to remember under appointment pressure.</h2>
          </div>
          <div>
            <p>Small observations often happen between appointments: a change in symptoms, a missed dose, a possible pattern or a question you meant to ask. CuraeVita is designed to make those details easier to record and revisit.</p>
            <p>The goal is not to produce more data for its own sake. It is to give you a clearer personal record, with summaries and PDF reports you can choose to discuss with an appropriate healthcare professional.</p>
          </div>
        </section>

        <section className="values-grid" aria-label="CuraeVita product principles">
          <article><span>01</span><h2>Purpose-built</h2><p>Every Companion uses language, fields and reports shaped around one health journey.</p></article>
          <article><span>02</span><h2>Local-first</h2><p>Health entries stay on the device unless you deliberately create an export or enable a clearly described optional service.</p></article>
          <article><span>03</span><h2>Commercially clear</h2><p>No behavioural advertising. Paid apps use a straightforward Google Play subscription shown before confirmation.</p></article>
          <article><span>04</span><h2>Honest limits</h2><p>The apps organise personal observations. They do not diagnose, prescribe, calculate a dose or monitor emergencies.</p></article>
        </section>

        <section className="story-split pale-panel">
          <div>
            <p className="eyebrow"><span /> Current programme</p>
            <h2>Built carefully, released in stages.</h2>
          </div>
          <div>
            <p>GLP-1 Companion and Menopause Companion are completing Google Play closed testing. ADHD Companion is the next planned release, while Gut Companion and Migraine Companion remain in development.</p>
            <p>Status descriptions on this website are intentionally conservative. A Play Store launch date is not stated until it is firm.</p>
            <a className="text-link" href="/apps/">Explore the Companion family <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="review-note">
          <strong>Information standards</strong>
          <p>Product descriptions are checked against the implemented app specifications. Health-related copy uses plain limitations and avoids diagnosis or treatment claims. Website content was last reviewed on 29 August 2026.</p>
          <a href="/editorial-standards/">Read the full editorial standards</a>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
