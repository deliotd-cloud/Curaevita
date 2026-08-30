import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../components/site-shell';

export const metadata: Metadata = {
  title: 'Privacy Notice for Apps and Website',
  description: 'How CuraeVita Companions handle local health records, optional permissions, PDF exports, subscriptions, support emails and website hosting data.',
  alternates: { canonical: '/privacy/' },
  openGraph: {
    title: 'CuraeVita Privacy Notice',
    description: 'How CuraeVita apps and the CuraeVita website handle information.',
    url: '/privacy/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps' }],
  },
};

export default function PrivacyPage() {
  return (
    <main className="legal-shell">
      <SiteHeader compact />
      <article className="legal-page">
        <p className="eyebrow"><span /> Privacy notice</p>
        <h1>Your information stays yours.</h1>
        <p className="legal-lead">This notice explains the shared privacy approach across the CuraeVita Companion family and this website. Individual in-app notices describe any feature-specific detail. Last updated 29 August 2026.</p>

        <section className="legal-card">
          <h2>Summary</h2>
          <ul>
            <li>Medication, symptom, measurement, journal and tracking entries are stored locally on your device.</li>
            <li>CuraeVita does not operate an account database containing those health entries.</li>
            <li>You decide when to create a PDF or backup and where to send or store it.</li>
            <li>CuraeVita Companions do not include behavioural advertising SDKs.</li>
          </ul>
        </section>
        <section className="legal-card">
          <h2>Local health information</h2>
          <p>Health information can be especially sensitive. CuraeVita’s core tracking features keep the entries you create in the app’s local storage. App controls let you edit or remove records. Resetting or clearing the app’s storage removes its local CuraeVita data from that installation and may be irreversible without a compatible backup.</p>
        </section>
        <section className="legal-card">
          <h2>Reports, backups and photos</h2>
          <p>A PDF report or backup leaves the app only when you use Android’s save or share controls. From that point, the destination you choose controls the copy. Store exports carefully. In GLP-1 Companion, optional progress photos remain in the on-device gallery and are excluded from CuraeVita backups and PDF reports.</p>
        </section>
        <section className="legal-card">
          <h2>Subscriptions</h2>
          <p>Google Play processes payment information and the purchase. RevenueCat receives limited app, device and pseudonymous purchase identifiers so a paid Companion can verify subscription access. These services do not receive the medication, symptom or journal entries recorded in the app. Their own privacy terms also apply to the information they process.</p>
          <p>To request deletion of the pseudonymous subscription record held for CuraeVita by RevenueCat, email <a href="mailto:eliviontechnologies@gmail.com?subject=CuraeVita%20subscription%20data%20deletion">eliviontechnologies@gmail.com</a>. Include the Companion name and, if available, the Google Play order number; do not send health records.</p>
          <p><a href="https://policies.google.com/privacy">Google privacy policy</a> · <a href="https://www.revenuecat.com/privacy/">RevenueCat privacy policy</a></p>
        </section>
        <section className="legal-card">
          <h2>Optional features and permissions</h2>
          <ul>
            <li>GLP-1 Companion can write selected weight and body-fat entries to Health Connect after you grant permission. It does not read your wider Health Connect record.</li>
            <li>Migraine Companion can request approximate location for an optional weather lookup after explicit consent. The requested location is sent to the weather provider for that lookup.</li>
            <li>Local reminders require notification permission and are scheduled on your device.</li>
            <li>A biometric or passcode app gate uses Android’s device-supported authentication and is a screen-access control, not a claim that every local file is separately encrypted.</li>
          </ul>
        </section>
        <section className="legal-card">
          <h2>This website</h2>
          <p>CuraeVita does not add advertising or audience-tracking scripts to this website. The site is hosted using GitHub Pages. Like other web hosts, GitHub may process technical request information such as IP address, device information, requested pages and request time to operate and protect its service. See GitHub’s privacy statement for details.</p>
          <p><a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub privacy statement</a></p>
        </section>
        <section className="legal-card">
          <h2>Support emails</h2>
          <p>If you contact support, CuraeVita receives the email address and information you choose to send. It is used to respond and investigate the request. Avoid sending health records or exported reports unless they are essential and you deliberately choose to do so.</p>
        </section>
        <section className="legal-card">
          <h2>Questions and changes</h2>
          <p>For privacy questions, email <a href="mailto:eliviontechnologies@gmail.com?subject=CuraeVita%20privacy%20question">eliviontechnologies@gmail.com</a>. This notice may change when an app, service provider or legal requirement changes. A new review date will be shown here.</p>
        </section>
        <a className="legal-back" href="/">← Return to CuraeVita</a>
      </article>
      <SiteFooter />
    </main>
  );
}
