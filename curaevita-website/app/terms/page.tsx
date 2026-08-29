import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subscription terms',
  description: 'Subscription and responsible-use information for CuraeVita Companions.',
};

export default function TermsPage() {
  return (
    <main className="legal-shell">
      <nav className="site-nav legal-nav">
        <a className="brand" href="/">
          <img src="/curaevita-family.png" alt="" width="42" height="42" />
          <span><strong>CuraeVita</strong><small>Care for life</small></span>
        </a>
        <a className="nav-cta" href="/">Back to home</a>
      </nav>
      <article className="legal-page">
        <p className="eyebrow"><span /> Subscription terms</p>
        <h1>Simple terms, shown before you pay.</h1>
        <p className="legal-lead">Google Play presents the binding price, eligibility and renewal information before a subscription is confirmed.</p>

        <section className="legal-card">
          <h2>Price and trial eligibility</h2>
          <p>The current UK price for new subscribers is £0.99 per month. Google Play shows your local price and whether your account is eligible for a seven-day free trial. A trial applies only when it appears in the Google Play purchase screen.</p>
        </section>
        <section className="legal-card">
          <h2>Renewal and cancellation</h2>
          <p>The subscription renews automatically unless you cancel through Google Play before renewal. Uninstalling an app does not cancel a subscription. Google Play controls billing, refunds, grace periods and account-hold behaviour.</p>
        </section>
        <section className="legal-card">
          <h2>Restore purchases</h2>
          <p>You can use Restore purchases inside a paid Companion to ask Google Play and RevenueCat to verify an active entitlement associated with your store account.</p>
        </section>
        <section className="legal-card">
          <h2>Health information disclaimer</h2>
          <p>CuraeVita Companions are personal tracking and reporting tools. They do not diagnose, prescribe, monitor emergencies or replace a clinician. Seek professional or emergency help when appropriate.</p>
        </section>
        <section className="legal-card">
          <h2>Support</h2>
          <p>For subscription or product support, email <a href="mailto:deliotd@gmail.com">deliotd@gmail.com</a>.</p>
        </section>
        <a className="legal-back" href="/">← Return to CuraeVita</a>
      </article>
    </main>
  );
}
