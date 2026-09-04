import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { JsonLd } from '../../components/json-ld';
import { SiteFooter, SiteHeader } from '../../components/site-shell';
import { companions, getCompanion } from '../../lib/apps';
import { guides } from '../../lib/guides';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return companions.map((companion) => ({ slug: companion.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getCompanion(slug);
  if (!app) return {};

  return {
    title: app.seoTitle,
    description: app.seoDescription,
    alternates: { canonical: `/apps/${app.slug}/` },
    openGraph: {
      title: `${app.name} by CuraeVita`,
      description: app.seoDescription,
      url: `/apps/${app.slug}/`,
      type: 'website',
      images: [{ url: app.image, alt: app.iconAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${app.name} by CuraeVita`,
      description: app.seoDescription,
      images: [app.image],
    },
  };
}

export default async function CompanionPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getCompanion(slug);
  if (!app) notFound();

  const pageUrl = `https://curaevita.com/apps/${app.slug}/`;
  const applicationSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': `${pageUrl}#app`,
    name: app.name,
    description: app.seoDescription,
    url: pageUrl,
    image: `https://curaevita.com${app.image}`,
    operatingSystem: 'Android',
    applicationCategory: 'HealthApplication',
    publisher: { '@id': 'https://curaevita.com/#organization' },
    inLanguage: 'en-GB',
  };
  if (app.subscription) {
    applicationSchema.isAccessibleForFree = false;
    applicationSchema.offers = {
      '@type': 'Offer',
      price: '0.99',
      priceCurrency: 'GBP',
      description: 'Monthly subscription. Eligible new Google Play subscribers may be shown a seven-day free trial before confirming.',
    };
  }
  if (app.storeUrl) {
    applicationSchema.installUrl = app.storeUrl;
    applicationSchema.downloadUrl = app.storeUrl;
  }

  const related = companions.filter((companion) => companion.slug !== app.slug).slice(0, 3);
  const relatedGuides = guides.filter((guide) => guide.relatedApps.includes(app.slug));

  return (
    <main className="inner-shell companion-detail" style={{ '--app-accent': app.accent } as React.CSSProperties}>
      <JsonLd data={[
        applicationSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'CuraeVita', item: 'https://curaevita.com/' },
            { '@type': 'ListItem', position: 2, name: 'Apps', item: 'https://curaevita.com/apps/' },
            { '@type': 'ListItem', position: 3, name: app.name, item: pageUrl },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: app.faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        },
      ]} />
      <SiteHeader compact />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a><span aria-hidden="true">/</span>
        <a href="/apps/">Apps</a><span aria-hidden="true">/</span>
        <span aria-current="page">{app.name}</span>
      </nav>

      <section className="app-hero">
        <div className="app-hero-copy">
          <div className="app-hero-status">
            <span className={`status-pill ${app.phase}`}>{app.status}</span>
            <span>Android</span>
          </div>
          <p className="eyebrow"><span /> {app.eyebrow}</p>
          <h1>{app.headline}</h1>
          <p className="app-lead">{app.intro}</p>
          <div className="hero-actions">
            {app.storeUrl ? (
              <a className="button button-primary" href={app.storeUrl}>Get it on Google Play</a>
            ) : app.phase === 'review' ? (
              <a className="button button-primary" href="mailto:eliviontechnologies@gmail.com?subject=Menopause%20Companion%20launch%20update">Get a launch update</a>
            ) : (
              <a className="button button-primary" href="mailto:eliviontechnologies@gmail.com?subject=CuraeVita%20testing%20access">Ask about testing</a>
            )}
            <a className="text-link" href="#features">See what it tracks <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="app-icon-stage">
          <span aria-hidden="true" />
          <Image src={app.image} alt={app.iconAlt} width="260" height="260" loading="eager" fetchPriority="high" decoding="async" />
          <small>CuraeVita Health Apps</small>
          <strong>{app.name}</strong>
        </div>
      </section>

      <section className="app-facts" aria-label={`${app.name} summary`}>
        <div><span>Availability</span><strong>{app.status}</strong></div>
        <div><span>Platform</span><strong>Android first</strong></div>
        <div><span>Account</span><strong>Not required</strong></div>
        <div><span>Health data</span><strong>Stored locally</strong></div>
      </section>

      <section className="content-section audience-section">
        <p className="eyebrow"><span /> Who it is for</p>
        <h2>A focused record for your own experience.</h2>
        <p>{app.audience}</p>
      </section>

      <section className="content-section feature-section" id="features">
        <div className="content-heading">
          <p className="eyebrow"><span /> What you can record</p>
          <h2>Useful detail without unnecessary clutter.</h2>
        </div>
        <div className="feature-grid">
          {app.features.map((feature, index) => (
            <article key={feature.title}>
              <span>0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section report-section">
        <div>
          <p className="eyebrow"><span /> Reports for appointments</p>
          <h2>Turn individual entries into a record you can revisit.</h2>
          <p>You choose the reporting period and whether to save or share the resulting PDF. CuraeVita does not send the report to a clinician for you.</p>
        </div>
        <ul className="check-list">
          {app.reportItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="content-section data-section">
        <div className="content-heading">
          <p className="eyebrow"><span /> Privacy in practice</p>
          <h2>Your health entries are not CuraeVita’s advertising product.</h2>
        </div>
        <ul className="privacy-grid">
          {app.privacyItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <a className="text-link" href="/privacy/">Read the shared privacy notice <span aria-hidden="true">→</span></a>
      </section>

      {app.subscription ? (
        <section className="content-section app-subscription">
          <div>
            <p className="eyebrow"><span /> Subscription</p>
            <h2>{app.subscription.price}</h2>
            <p>{app.subscription.trial}</p>
          </div>
          <a className="button button-primary" href="/terms/">Read subscription terms</a>
        </section>
      ) : (
        <section className="content-section development-note">
          <p className="eyebrow"><span /> In preparation</p>
          <h2>No launch date or price has been announced.</h2>
          <p>Details may change while the app is tested. Join the launch updates list if you would like to hear when firm information is available.</p>
        </section>
      )}

      <section className="content-section faq-section">
        <div className="content-heading">
          <p className="eyebrow"><span /> Frequently asked questions</p>
          <h2>Clear limits and practical answers.</h2>
        </div>
        <div className="faq-list">
          {app.faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <aside className="medical-note">
        <strong>Important health information</strong>
        <p>{app.name} is a personal tracking and reporting tool. It does not diagnose, prescribe, recommend treatment or monitor emergencies. Follow advice from an appropriate healthcare professional and seek urgent help when needed.</p>
      </aside>

      <section className="related-section app-guide-section">
        <div>
          <p className="eyebrow"><span /> Practical guides</p>
          <h2>Use your personal record with more confidence</h2>
        </div>
        <div className="app-guide-grid">
          {relatedGuides.map((guide, index) => (
            <a href={`/guides/${guide.slug}/`} key={guide.slug}>
              <span>0{index + 1}</span>
              <strong>{guide.title}</strong>
              <i aria-hidden="true">→</i>
            </a>
          ))}
        </div>
      </section>

      <section className="related-section">
        <div>
          <p className="eyebrow"><span /> Explore the family</p>
          <h2>Other CuraeVita Companions</h2>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <a href={`/apps/${item.slug}/`} key={item.slug}>
              <Image src={item.image} alt="" width="54" height="54" loading="lazy" decoding="async" />
              <span><strong>{item.name}</strong><small>{item.status}</small></span>
              <i aria-hidden="true">→</i>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
