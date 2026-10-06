import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteFooter, SiteHeader } from '../components/site-shell';
import { JsonLd } from '../components/json-ld';
import { companions } from '../lib/apps';
import { firstEntries } from '../lib/customer-start';
import { getPlayStoreUrl } from '../lib/play-store';

export const metadata: Metadata = {
  title: 'Getting Started with Your CuraeVita Companion',
  description: 'A practical first-week guide for all five Android Companions: make a first entry, review records, explore PDF reports and manage your Google Play subscription.',
  alternates: { canonical: '/getting-started/' },
  openGraph: { title: 'A simple start with your CuraeVita Companion', description: 'First entries, optional reminders, private reports and clear subscription choices.', url: '/getting-started/' },
};

export default function GettingStarted() {
  return <main className="inner-shell">
    <JsonLd data={[{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Getting started with your CuraeVita Companion', url: 'https://curaevita.com/getting-started/', inLanguage: 'en-GB', dateModified: '2026-10-06', isPartOf: { '@id': 'https://curaevita.com/#website' } }, ...companions.map(app => ({ '@context': 'https://schema.org', '@type': 'VideoObject', name: `${app.name}: your first week`, description: 'A captioned screenshot guide to a first entry, personal history, PDF reports and subscription choices. Genuine screens with example records, not a live-device recording. Silent with on-screen text.', thumbnailUrl: `https://curaevita.com/videos/first-week/${app.slug}.webp`, contentUrl: `https://curaevita.com/videos/first-week/${app.slug}.mp4`, uploadDate: '2026-10-06T14:36:00Z', duration: 'PT1M12S', inLanguage: 'en-GB' }))]} />
    <SiteHeader compact />
    <section className="directory-hero">
      <p className="eyebrow"><span /> Your first week</p>
      <h1>Start small. Keep what is useful.</h1>
      <p>You do not need a perfect diary. Begin with one relevant entry, revisit it, and decide whether this way of keeping a personal record fits your day.</p>
      <p>Each Android app is a separate £0.99 monthly subscription in the UK. An eligible seven-day trial is a subscription that renews unless cancelled, not a free download of every feature forever. Check your local offer and renewal date in Google Play before confirming.</p>
      <div className="hero-actions"><a className="button button-primary" href="#first-entry">Choose your first entry ↓</a><a className="text-link" href="/resources/">Prefer paper? Try a free diary →</a></div>
    </section>
    <section className="guide-directory growth-card-grid" aria-label="First-week checklist">
      {[
        ['Before subscribing', 'Review the Google Play price, trial eligibility and renewal date. No CuraeVita account is required. Restore purchases if you already have an active subscription on the same Play account.'],
        ['Make one entry', 'Choose a record below. Enter only information you want to keep, then check that the saved entry is correct. Recording a prescribed routine is not a prompt to change treatment.'],
        ['Revisit your history', 'Look back at the entries you made. Optional local reminders can help if you want them; notifications and other optional permissions are not a reason to record more than you need.'],
        ['Explore a PDF report', 'Find the PDF report control in the app settings and choose 30 days, 90 days or all history. With only a few entries, the report will be limited. Preview it before deciding whether to save or share it.'],
        ['Ask for help if needed', 'If a control is unclear, contact support with the app version, Android version and what happened. Do not send a full diary, private report or medical details to give ordinary product feedback.'],
        ['Choose before renewal', 'Check the actual renewal date in Google Play, not a day number in this guide. If the app is not useful to you, cancel before renewal. Uninstalling alone does not cancel the subscription.'],
      ].map(([title, text], index) => <article className="guide-card" key={title}><p className="card-kicker">Step {index + 1}</p><h2>{title}</h2><p>{text}</p></article>)}
    </section>
    <section id="first-entry" className="guide-directory growth-card-grid" aria-label="A first entry in each Companion">
      {companions.map(app => <article className="guide-card" key={app.slug} id={app.slug}>
        <Image src={app.image} alt="" width={56} height={56} />
        <p className="card-kicker">{app.name}</p><h2>{firstEntries[app.slug].title}</h2>
        <ol>{firstEntries[app.slug].steps.map(step => <li key={step}>{step}</li>)}</ol>
        <video className="first-week-video" controls preload="none" playsInline poster={`/videos/first-week/${app.slug}.webp`} aria-label={`${app.name} captioned first-week screenshot guide`}>
          <source src={`/videos/first-week/${app.slug}.mp4`} type="video/mp4" />
          <track kind="captions" src={`/videos/first-week/${app.slug}.vtt`} srcLang="en" label="English" />
          <a href={`/videos/first-week/${app.slug}.mp4`}>Download the first-week guide</a>
        </video>
        <p className="first-week-disclosure">72-second silent screenshot guide with on-screen text and optional captions. Genuine screens, example records, not a recording of live taps or purchases.</p>
        <div className="resource-links"><a className="text-link" href={`/apps/${app.slug}/`}>See features and example screens →</a><a className="text-link" href={getPlayStoreUrl(app.storeUrl!, 'getting_started_honest_review')}>Leave an honest Google Play review →</a></div>
      </article>)}
    </section>
    <aside className="medical-note"><strong>Your choice, your information.</strong><p>Reviews are optional, never rewarded, and welcome whether positive or critical. Do not include personal health details in a public review. These apps are records, not medical advice or emergency services.</p><div className="hero-actions"><a className="text-link" href="/support/">Get technical support →</a><a className="text-link" href="https://play.google.com/store/account/subscriptions">Manage or cancel a Google Play subscription ↗</a></div></aside>
    <SiteFooter />
  </main>;
}
