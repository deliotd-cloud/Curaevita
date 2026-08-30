import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { JsonLd } from '../../components/json-ld';
import { SiteFooter, SiteHeader } from '../../components/site-shell';
import { companions } from '../../lib/apps';
import { getGuide, guides } from '../../lib/guides';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}/` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `/guides/${guide.slug}/`,
      type: 'article',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
      images: ['/og.png'],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const pageUrl = `https://curaevita.com/guides/${guide.slug}/`;
  const relatedApps = guide.relatedApps
    .map((appSlug) => companions.find((app) => app.slug === appSlug))
    .filter((app) => app !== undefined);

  return (
    <main className="inner-shell guide-detail">
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `${pageUrl}#article`,
          headline: guide.title,
          description: guide.description,
          datePublished: '2026-08-30',
          dateModified: '2026-08-30',
          mainEntityOfPage: pageUrl,
          author: { '@id': 'https://curaevita.com/#organization' },
          publisher: { '@id': 'https://curaevita.com/#organization' },
          image: 'https://curaevita.com/og.png',
          inLanguage: 'en-GB',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'CuraeVita', item: 'https://curaevita.com/' },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://curaevita.com/guides/' },
            { '@type': 'ListItem', position: 3, name: guide.title, item: pageUrl },
          ],
        },
      ]} />
      <SiteHeader compact />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a><span aria-hidden="true">/</span>
        <a href="/guides/">Guides</a><span aria-hidden="true">/</span>
        <span aria-current="page">{guide.title}</span>
      </nav>

      <article className="guide-article">
        <header className="guide-hero">
          <p className="eyebrow"><span /> {guide.eyebrow}</p>
          <h1>{guide.title}</h1>
          <p>{guide.excerpt}</p>
          <div className="guide-byline"><span>{guide.readingTime}</span><span>Reviewed {guide.reviewed}</span></div>
        </header>

        <div className="guide-layout">
          <aside aria-label="On this page">
            <strong>On this page</strong>
            {guide.sections.map((section, index) => (
              <a href={`#section-${index + 1}`} key={section.title}>{section.title}</a>
            ))}
            <a href="#sources">Sources</a>
          </aside>

          <div className="guide-content">
            {guide.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title}>
                <span>0{index + 1}</span>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points ? (
                  <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>
                ) : null}
              </section>
            ))}

            <section className="guide-sources" id="sources">
              <span>Sources</span>
              <h2>External guidance used</h2>
              <p>CuraeVita links to primary public guidance where it supports a practical statement. External websites control and update their own content.</p>
              <ul>
                {guide.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} rel="external">{source.name}</a>
                    <p>{source.note}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <aside className="medical-note">
        <strong>Important health information</strong>
        <p>This guide helps organise personal notes. It does not diagnose, interpret symptoms, recommend treatment or monitor emergencies. Follow advice from an appropriate healthcare professional.</p>
      </aside>

      <section className="related-section">
        <div>
          <p className="eyebrow"><span /> Related tools</p>
          <h2>CuraeVita Companions</h2>
        </div>
        <div className="related-grid">
          {relatedApps.map((app) => (
            <a href={`/apps/${app.slug}/`} key={app.slug}>
              <Image src={app.image} alt="" width="54" height="54" loading="lazy" decoding="async" />
              <span><strong>{app.name}</strong><small>{app.status}</small></span>
              <i aria-hidden="true">→</i>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
