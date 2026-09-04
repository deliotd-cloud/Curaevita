import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { JsonLd } from '../../components/json-ld';
import { SiteFooter, SiteHeader } from '../../components/site-shell';
import { companions, getCompanion } from '../../lib/apps';
import { guides } from '../../lib/guides';
import { getPlayStoreUrl } from '../../lib/play-store';

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
  const socialImage = app.slug === 'glp1-companion'
    ? '/apps/glp1.png'
    : app.slug === 'menopause-companion'
      ? '/apps/menopause.png'
      : '/og.png';
  const usesAppIcon = socialImage !== '/og.png';

  return {
    title: app.seoTitle,
    description: app.seoDescription,
    alternates: { canonical: `/apps/${app.slug}/` },
    openGraph: {
      title: `${app.name} by CuraeVita`,
      description: app.seoDescription,
      url: `/apps/${app.slug}/`,
      type: 'website',
      images: [{ url: socialImage, width: usesAppIcon ? 512 : 1200, height: usesAppIcon ? 512 : 630, alt: `${app.name} by CuraeVita` }],
    },
    twitter: {
      card: usesAppIcon ? 'summary' : 'summary_large_image',
      title: `${app.name} by CuraeVita`,
      description: app.seoDescription,
      images: [socialImage],
    },
  };
}

export default async function CompanionPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getCompanion(slug);
  if (!app) notFound();

  const pageUrl = `https://curaevita.com/apps/${app.slug}/`;
  const storeUrl = app.storeUrl ? getPlayStoreUrl(app.storeUrl, `${app.slug}_page`) : undefined;
  const shareMessage = app.slug === 'glp1-companion'
    ? 'GLP-1 Companion is a private Android tracker for prescribed doses, progress and appointment-ready reports.'
    : `${app.name} is a private Android tracker with appointment-ready reports.`;
  const faqs = app.subscription ? [
    ...app.faqs,
    {
      question: `How much does ${app.name} cost?`,
      answer: `${app.subscription.price}. Google Play shows the binding price, any trial eligibility and the renewal date before you confirm.`,
    },
    {
      question: 'How do I cancel the subscription?',
      answer: 'Manage or cancel renewal in Google Play under Payments and subscriptions. Uninstalling the app does not cancel a Google Play subscription.',
    },
    {
      question: 'Can I restore a previous purchase?',
      answer: 'Yes. Use Restore purchases inside the app while signed in to the Google Play account that made the purchase.',
    },
  ] : app.faqs;
  const applicationSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
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
      ...(app.storeUrl ? { availability: 'https://schema.org/InStock', url: app.storeUrl } : {}),
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
    <main className={`inner-shell companion-detail${storeUrl ? ' has-store' : ''}`} style={{ '--app-accent': app.accent } as React.CSSProperties}>
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
          mainEntity: faqs.map((item) => ({
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
              <a className="button button-primary" href={getPlayStoreUrl(app.storeUrl, 'app_hero')}>Install from Google Play</a>
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

      {storeUrl && app.subscription ? (
        <section className="store-conversion-panel" aria-labelledby="store-conversion-title">
          <div>
            <p className="eyebrow"><span /> Available now</p>
            <h2 id="store-conversion-title">Start your private record today.</h2>
            <p>Install the app, review the subscription details shown by Google Play and begin recording only the information that is useful to you.</p>
          </div>
          <div className="store-offer-card">
            <strong>{app.subscription.price}</strong>
            <span>Eligible new subscribers are shown a seven-day free trial before confirming.</span>
            <a className="button button-primary" href={getPlayStoreUrl(app.storeUrl!, 'app_value_panel')}>Install from Google Play <span aria-hidden="true">↗</span></a>
            <small>No CuraeVita account · No advertising · Restore purchases available</small>
          </div>
        </section>
      ) : app.phase === 'review' ? (
        <section className="store-conversion-panel review-conversion-panel" aria-labelledby="store-conversion-title">
          <div>
            <p className="eyebrow"><span /> Coming soon</p>
            <h2 id="store-conversion-title">Ready for its Google Play launch.</h2>
            <p>{app.name} has been submitted for Google Play review. Its public store link will replace this update option as soon as the listing is available.</p>
          </div>
          <div className="store-offer-card">
            <strong>{app.subscription?.price ?? 'Launch details soon'}</strong>
            <span>{app.subscription?.trial}</span>
            <a className="button button-primary" href="mailto:eliviontechnologies@gmail.com?subject=Menopause%20Companion%20launch%20update">Get a launch update</a>
            <small>No launch date is promised while Google Play review is in progress.</small>
          </div>
        </section>
      ) : null}

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
          <div className="subscription-actions">
            {app.storeUrl ? <a className="button button-primary" href={getPlayStoreUrl(app.storeUrl, 'app_subscription')}>Install from Google Play</a> : null}
            <a className="text-link" href="/terms/">Read subscription terms <span aria-hidden="true">→</span></a>
            <a className="text-link" href="https://support.google.com/googleplay/answer/7018481" rel="external">Manage a Play subscription <span aria-hidden="true">↗</span></a>
          </div>
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
          {faqs.map((item) => (
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

      {app.storeUrl ? (
        <section className="share-section" aria-labelledby="share-app-title">
          <div>
            <p className="eyebrow"><span /> Help someone find it</p>
            <h2 id="share-app-title">Share the app, not medical advice.</h2>
            <p>If this kind of personal record may be useful to someone you know, send them the public Google Play listing so they can review it for themselves.</p>
          </div>
          <div className="share-links" aria-label={`Share ${app.name}`}>
            <a href={`https://wa.me/?text=${encodeURIComponent(`${shareMessage} ${getPlayStoreUrl(app.storeUrl, 'share_whatsapp')}`)}`} rel="external">Share by WhatsApp</a>
            <a href={`mailto:?subject=${encodeURIComponent(app.name)}&body=${encodeURIComponent(`${shareMessage}\n\n${getPlayStoreUrl(app.storeUrl, 'share_email')}`)}`}>Share by email</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getPlayStoreUrl(app.storeUrl, 'share_facebook'))}`} rel="external">Share on Facebook</a>
          </div>
        </section>
      ) : null}

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

      {app.storeUrl ? (
        <aside className="mobile-store-cta" aria-label={`${app.name} purchase link`}>
          <span><strong>{app.name}</strong><small>{app.subscription?.price}</small></span>
          <a href={getPlayStoreUrl(app.storeUrl, 'mobile_sticky')}>Get it on Google Play</a>
        </aside>
      ) : null}

      <SiteFooter />
    </main>
  );
}
