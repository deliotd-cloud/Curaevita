import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../components/site-shell';

export const metadata: Metadata = {
  title: 'Subscription and Responsible Use Terms',
  description: 'Price, free-trial eligibility, renewal, cancellation, restore-purchase and responsible-use information for CuraeVita Companions.',
  alternates: { canonical: '/terms/' },
  openGraph: {
    title: 'CuraeVita Subscription and Responsible Use Terms',
    description: 'Subscription, cancellation and health-use terms for CuraeVita Companions.',
    url: '/terms/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps' }],
  },
};

export default function TermsPage() {
  return (
    <main className="legal-shell">
      <SiteHeader compact />
      <article className="legal-page">
        <p className="eyebrow"><span /> Subscription and use terms</p>
        <h1>Simple terms, shown before you pay.</h1>
        <p className="legal-lead">These terms summarise CuraeVita’s current subscription and responsible-use position. Google Play presents the binding local price, trial eligibility, renewal date and purchase terms before confirmation. Last updated 29 August 2026.</p>

        <section className="legal-card">
          <h2>Price and trial eligibility</h2>
          <p>The current UK price for new GLP-1 Companion and Menopause Companion subscribers is £0.99 per month. Eligible new Google Play subscribers may be shown a seven-day free trial. A trial applies only when it appears in the Google Play purchase screen for your account.</p>
        </section>
        <section className="legal-card">
          <h2>Trial conversion and renewal</h2>
          <p>If Google Play grants a free trial, it converts to the displayed monthly subscription unless you cancel before the trial ends. A paid subscription then renews automatically at the interval and price shown by Google Play unless cancelled before renewal.</p>
        </section>
        <section className="legal-card">
          <h2>Cancellation</h2>
          <p>Manage or cancel through Google Play under Payments and subscriptions, then Subscriptions. Uninstalling an app does not cancel the subscription. After cancellation, access normally continues for the paid period already provided, subject to the terms and rights shown by Google Play for your account and country.</p>
          <p><a href="https://play.google.com/store/account/subscriptions">Open Google Play subscriptions</a></p>
        </section>
        <section className="legal-card">
          <h2>Restore purchases</h2>
          <p>Use Restore purchases inside a paid Companion to ask Google Play and RevenueCat to verify an active entitlement associated with the relevant store account. If it is not found, check that the Play Store is using the account that made the purchase before contacting support.</p>
        </section>
        <section className="legal-card">
          <h2>Health information disclaimer</h2>
          <p>CuraeVita Companions are personal tracking and reporting tools. They do not diagnose, prescribe, recommend treatment, prove a trigger, calculate a dose or monitor emergencies. Follow instructions from an appropriate healthcare professional and seek professional or emergency help when needed.</p>
        </section>
        <section className="legal-card">
          <h2>Your records and device</h2>
          <p>You are responsible for checking entries and reports before relying on or sharing them, for keeping exported files secure and for maintaining any backup you want to preserve. Device loss, storage clearing or an app reset may remove local records.</p>
        </section>
        <section className="legal-card">
          <h2>Availability and changes</h2>
          <p>Features may change as apps are tested and improved. CuraeVita aims to describe current behaviour accurately but does not promise uninterrupted availability. Announced development apps may change before release and have no guaranteed launch date.</p>
        </section>
        <section className="legal-card">
          <h2>Support</h2>
          <p>For subscription or product support, use the <a href="/support/">support page</a> or email <a href="mailto:eliviontechnologies@gmail.com?subject=CuraeVita%20support%20request">eliviontechnologies@gmail.com</a>.</p>
        </section>
        <a className="legal-back" href="/">← Return to CuraeVita</a>
      </article>
      <SiteFooter />
    </main>
  );
}
