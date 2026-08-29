import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../components/site-shell';

export const metadata: Metadata = {
  title: 'App and Subscription Support',
  description: 'Get help with CuraeVita apps, local health records, PDF exports, Google Play subscriptions and privacy questions.',
  alternates: { canonical: '/support/' },
  openGraph: {
    title: 'CuraeVita App and Subscription Support',
    description: 'Practical help for CuraeVita Companion apps and Google Play subscriptions.',
    url: '/support/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps' }],
  },
};

export default function SupportPage() {
  return (
    <main className="inner-shell">
      <SiteHeader compact />
      <article className="support-page">
        <header className="support-hero">
          <p className="eyebrow"><span /> CuraeVita support</p>
          <h1>Help with your Companion.</h1>
          <p>Choose the closest topic below. Please do not include medication, symptom, diagnosis or other sensitive health details in an email unless they are essential to explain a technical problem.</p>
          <a className="button button-primary" href="mailto:deliotd@gmail.com?subject=CuraeVita%20support%20request">Email support</a>
        </header>

        <section className="support-grid" aria-label="Support topics">
          <article>
            <span>01</span>
            <h2>Subscription access</h2>
            <p>Use Restore purchases inside the app if an active Google Play subscription is not recognised. Make sure the Play Store is using the same Google account that made the purchase.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Cancel a subscription</h2>
            <p>Open Google Play, choose your profile, then Payments and subscriptions, Subscriptions, the relevant Companion and Cancel subscription. Uninstalling the app does not cancel it.</p>
            <a href="https://play.google.com/store/account/subscriptions">Open Google Play subscriptions</a>
          </article>
          <article>
            <span>03</span>
            <h2>PDF reports</h2>
            <p>Create the report inside the app, choose a period, then save or share it using Android’s system controls. Reports can contain sensitive health information, so check the destination before sharing.</p>
          </article>
          <article>
            <span>04</span>
            <h2>Backup and restore</h2>
            <p>Keep exported CuraeVita backup files somewhere private. A restore replaces the local CuraeVita record in that app, so confirm you selected the intended file.</p>
          </article>
          <article>
            <span>05</span>
            <h2>Delete local data</h2>
            <p>Use the reset control inside the app, or clear the app’s storage in Android settings. Removing local app data cannot be undone unless you previously created a compatible backup.</p>
          </article>
          <article>
            <span>06</span>
            <h2>Privacy questions</h2>
            <p>Read the shared notice for how local health records, optional permissions, Google Play and RevenueCat are separated.</p>
            <a href="/privacy/">Read the privacy notice</a>
          </article>
        </section>

        <section className="contact-panel">
          <div>
            <p className="eyebrow"><span /> Contact</p>
            <h2>Include useful technical details, not your full health history.</h2>
          </div>
          <div>
            <p>Tell us the app name, app version, Android version, what you expected and what happened. If there is an error message, copy its wording. Do not email exported reports or screenshots containing sensitive information unless support specifically asks for them and you choose to do so.</p>
            <a className="text-link" href="mailto:deliotd@gmail.com?subject=CuraeVita%20support%20request">deliotd@gmail.com <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <aside className="urgent-panel">
          <strong>This support service cannot provide medical advice or monitor emergencies.</strong>
          <p>For urgent medical help in the UK that is not an emergency, use NHS 111. Call 999 for a life-threatening emergency. If you are outside the UK, use the appropriate local service.</p>
          <div><a href="https://111.nhs.uk/">NHS 111 online</a><a href="https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-call-999/">When to call 999</a></div>
        </aside>
      </article>
      <SiteFooter />
    </main>
  );
}
