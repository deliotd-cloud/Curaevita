import Image from 'next/image';
import { SiteFooter, SiteHeader } from './components/site-shell';

export default function NotFound() {
  return (
    <main className="inner-shell">
      <SiteHeader compact />
      <section className="not-found-page">
        <Image src="/curaevita-family.webp" alt="" width="110" height="110" />
        <p className="eyebrow"><span /> Page not found</p>
        <h1>This path does not lead to a Companion.</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/">Return home</a>
          <a className="text-link" href="/apps/">Explore all apps <span aria-hidden="true">→</span></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
