import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteFooter, SiteHeader } from '../components/site-shell';
import { companions } from '../lib/apps';
import { campaignPlayUrl, youtubeIntroductions } from '../lib/customer-start';

export const metadata: Metadata = {
  title: 'Find the Companion You Saw on YouTube',
  description: 'Find the five CuraeVita Android apps featured in our YouTube introductions. Official Play Store links, example screens, trial terms and free printable diaries.',
  alternates: { canonical: '/from-youtube/' },
  openGraph: { title: 'Seen a CuraeVita introduction? Find your Companion.', description: 'Choose the matching Android app, read its terms and explore genuine example screens.', url: '/from-youtube/' },
};

export default function FromYouTube() {
  return <main className="inner-shell"><SiteHeader compact />
    <section className="directory-hero"><p className="eyebrow"><span /> From our YouTube channel</p><h1>Find the Companion you saw.</h1><p>Five focused Android diaries. Choose the matching app below to see the official Google Play listing, or explore its features first.</p><p>£0.99/month per app in the UK after a seven-day trial for eligible new subscribers. Separate subscriptions. Local prices and eligibility vary. Renews unless cancelled in Google Play.</p><a className="text-link" href="/resources/">Try a free printable diary instead →</a></section>
    <section className="guide-directory growth-card-grid" aria-label="Apps featured on YouTube">{companions.map(app => <article className="guide-card" key={app.slug}><Image src={app.image} alt="" width={72} height={72} /><p className="card-kicker">Android · {app.status}</p><h2>{app.name}</h2><p>{app.description}</p><div className="resource-links"><a className="button button-primary" href={campaignPlayUrl(app.storeUrl!, 'youtube', app.slug)}>Get it on Google Play ↗</a><a className="text-link" href={`/apps/${app.slug}/`}>Features, price and privacy →</a><a className="text-link" href={youtubeIntroductions[app.slug]}>Watch the introduction on YouTube ↗</a><a className="text-link" href={`/getting-started/#${app.slug}`}>Help with your first entry →</a></div></article>)}</section>
    <aside className="medical-note"><strong>Genuine screens, example records.</strong><p>The introductions are screenshot presentations, not recordings of live taps or purchases. CuraeVita does not diagnose, prescribe or recommend treatment. There is no iPhone version advertised here.</p></aside><SiteFooter />
  </main>;
}
