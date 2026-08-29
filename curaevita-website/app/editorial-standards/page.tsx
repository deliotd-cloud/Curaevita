import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../components/site-shell';

export const metadata: Metadata = {
  title: 'Health Content and Editorial Standards',
  description: 'How CuraeVita checks app descriptions, health-related wording, source quality, corrections and commercial independence.',
  alternates: { canonical: '/editorial-standards/' },
  openGraph: {
    title: 'CuraeVita Health Content and Editorial Standards',
    description: 'The standards used for accurate, limited and transparent CuraeVita health content.',
    url: '/editorial-standards/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CuraeVita Health Apps' }],
  },
};

export default function EditorialStandardsPage() {
  return (
    <main className="inner-shell">
      <SiteHeader compact />
      <article className="standards-page">
        <header className="standards-hero">
          <p className="eyebrow"><span /> Editorial standards</p>
          <h1>Accurate about the product. Careful about health.</h1>
          <p>These standards apply to public CuraeVita website copy, app descriptions and supporting explanations. Last reviewed 29 August 2026.</p>
        </header>

        <div className="standards-layout">
          <aside>
            <strong>On this page</strong>
            <a href="#scope">Scope</a>
            <a href="#sources">Sources</a>
            <a href="#claims">Health claims</a>
            <a href="#review">Review</a>
            <a href="#commercial">Commercial clarity</a>
            <a href="#corrections">Corrections</a>
          </aside>
          <div className="standards-content">
            <section id="scope"><span>01</span><h2>Scope and responsibility</h2><p>CuraeVita publishes product information about personal tracking tools. It does not publish personalised medical advice. Content is written to explain what an app records, what it sends, what it produces and where its limits lie.</p></section>
            <section id="sources"><span>02</span><h2>Source hierarchy</h2><p>Product claims are checked against the current app specification and implementation. Safety or platform guidance is checked against appropriate primary sources such as NHS, ICO, Android, Google Play or a service provider’s own documentation. Search summaries and marketing claims from unrelated sites are not treated as authority.</p></section>
            <section id="claims"><span>03</span><h2>Health wording and claims</h2><p>Copy distinguishes a record from an interpretation and an association from causation. CuraeVita does not claim that an app diagnoses a condition, determines treatment, proves a trigger, predicts a cycle, interprets laboratory results or calculates a prescribed dose unless a future regulated feature is specifically developed and substantiated.</p></section>
            <section id="review"><span>04</span><h2>Review process</h2><p>Before release, pages are checked for feature accuracy, status, pricing, privacy statements, medical limitations, broken links and inconsistent wording. Material product changes should trigger a matching page review. Dates are shown where recency matters.</p></section>
            <section id="commercial"><span>05</span><h2>Commercial clarity</h2><p>CuraeVita does not accept paid placement in its own app comparisons and does not use behavioural advertising SDKs in the Companions. Subscription prices, trial eligibility and renewal are shown by Google Play before purchase. Website copy identifies announced products separately from apps still in development.</p></section>
            <section id="corrections"><span>06</span><h2>Corrections and questions</h2><p>If you find an inaccurate feature, privacy statement, status or link, email the page address and the specific issue. Corrections are prioritised according to their potential effect on health understanding, privacy or purchasing decisions.</p><a className="text-link" href="mailto:eliviontechnologies@gmail.com?subject=CuraeVita%20content%20correction">Report a content issue <span aria-hidden="true">→</span></a></section>
          </div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
