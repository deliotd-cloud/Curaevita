import type { Metadata } from 'next';
import { JsonLd } from '../components/json-ld';
import { SiteFooter, SiteHeader } from '../components/site-shell';
import { guides } from '../lib/guides';

export const metadata: Metadata = {
  title: 'Health Tracking and Appointment Guides',
  description: 'Practical GLP-1 injection, side-effect and appointment-report guides, plus menopause symptom diaries and private Android health-record guidance.',
  alternates: { canonical: '/guides/' },
  openGraph: {
    title: 'CuraeVita Health Tracking Guides',
    description: 'Clear GLP-1 and menopause tracking guidance for keeping personal health records useful, private and ready for appointments.',
    url: '/guides/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps' }],
  },
};

export default function GuidesPage() {
  return (
    <main className="inner-shell">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': 'https://curaevita.com/guides/#page',
        url: 'https://curaevita.com/guides/',
        name: 'CuraeVita health tracking and appointment guides',
        description: 'Practical, non-diagnostic GLP-1, menopause and personal health tracking guides for appointment preparation.',
        isPartOf: { '@id': 'https://curaevita.com/#website' },
        inLanguage: 'en-GB',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: guides.map((guide, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: guide.title,
            url: `https://curaevita.com/guides/${guide.slug}/`,
          })),
        },
      }} />
      <SiteHeader compact />
      <section className="directory-hero guide-directory-hero">
        <p className="eyebrow"><span /> CuraeVita practical guides</p>
        <h1>Make personal health records easier to use.</h1>
        <p>Plain-language GLP-1, menopause and general guidance for recording observations, preparing for appointments and protecting sensitive notes. These guides do not diagnose or recommend treatment.</p>
      </section>

      <section className="guide-directory" aria-label="CuraeVita guides">
        {guides.map((guide, index) => (
          <article className="guide-card" key={guide.slug}>
            <span className="guide-number">0{index + 1}</span>
            <p className="card-kicker">{guide.eyebrow}</p>
            <h2>{guide.title}</h2>
            <p>{guide.excerpt}</p>
            <div className="guide-meta"><span>{guide.readingTime}</span><span>Reviewed {guide.reviewed}</span></div>
            <a className="text-link" href={`/guides/${guide.slug}/`}>Read the guide <span aria-hidden="true">→</span></a>
          </article>
        ))}
      </section>

      <aside className="disclaimer-band">
        <strong>Information, not medical advice.</strong>
        <p>These guides explain ways to organise your own notes. They do not diagnose a condition, interpret a symptom pattern or tell you to change treatment.</p>
        <a href="/editorial-standards/">How we review content</a>
      </aside>
      <SiteFooter />
    </main>
  );
}
