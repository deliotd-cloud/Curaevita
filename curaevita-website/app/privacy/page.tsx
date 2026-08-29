import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy notice',
  description: 'How CuraeVita Companions handle health information and subscription data.',
};

export default function PrivacyPage() {
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
        <p className="eyebrow"><span /> Privacy notice</p>
        <h1>Your information stays yours.</h1>
        <p className="legal-lead">This summary explains the shared privacy approach across the CuraeVita Companion family. Individual app notices provide the exact details for that Companion.</p>

        <section className="legal-card">
          <h2>Health information</h2>
          <p>Medication, symptom, measurement, journal and tracking entries are stored locally on your device. CuraeVita does not operate a central account database for these entries. You decide when to create or share an export.</p>
        </section>
        <section className="legal-card">
          <h2>Subscriptions</h2>
          <p>Google Play processes purchases. RevenueCat processes limited purchase status, app identifiers and a pseudonymous installation identifier so a paid Companion can verify access. Your health logs are not sent to RevenueCat.</p>
        </section>
        <section className="legal-card">
          <h2>Optional services</h2>
          <ul>
            <li>GLP-1 Companion can write selected measurements to Health Connect only after you grant the relevant permission.</li>
            <li>Migraine Companion can request location for an optional weather lookup only after explicit consent.</li>
            <li>Local reminders require notification permission and are scheduled on your device.</li>
          </ul>
        </section>
        <section className="legal-card">
          <h2>Backups, exports and deletion</h2>
          <p>Exports may contain sensitive health information, so you should share and store them carefully. Resetting an app removes its local CuraeVita data from that installation. Subscription records remain with Google Play and RevenueCat as required to manage purchases.</p>
        </section>
        <section className="legal-card">
          <h2>Advertising and support</h2>
          <p>CuraeVita Companions do not include behavioural advertising SDKs. For privacy or support questions, email <a href="mailto:deliotd@gmail.com">deliotd@gmail.com</a>.</p>
        </section>
        <a className="legal-back" href="/">← Return to CuraeVita</a>
      </article>
    </main>
  );
}
