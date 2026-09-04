import Image from 'next/image';
import { getGlp1PlayStoreUrl } from '../lib/play-store';

type SiteHeaderProps = {
  compact?: boolean;
};

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  return (
    <>
      <header className={compact ? 'site-header compact' : 'site-header'}>
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="brand" href="/">
            <Image src="/curaevita-family.webp" alt="" width="42" height="42" />
            <span><strong>CuraeVita</strong><small>Care for life</small></span>
          </a>
          <div className="nav-links">
            <a href="/apps/">Companions</a>
            <a href="/guides/">Guides</a>
            <a href="/#approach">Our approach</a>
            <a href="/about/">About</a>
            <a href="/support/">Support</a>
            <a className="nav-cta" href={getGlp1PlayStoreUrl('site_navigation')}>Get GLP-1 Companion</a>
          </div>
        </nav>
      </header>
      <span id="main-content" className="main-content-anchor" tabIndex={-1} />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <a className="brand footer-brand" href="/">
        <Image src="/curaevita-family.webp" alt="" width="48" height="48" loading="lazy" decoding="async" />
        <span><strong>CuraeVita</strong><small>Care for life</small></span>
      </a>
      <p>Independent, privacy-conscious health tracking tools. CuraeVita apps do not diagnose, prescribe or replace professional medical care.</p>
      <nav className="footer-links" aria-label="Footer navigation">
        <a href="/apps/">Apps</a>
        <a href="/guides/">Guides</a>
        <a href="/about/">About</a>
        <a href="/press/">Press kit</a>
        <a href="/editorial-standards/">Editorial standards</a>
        <a href="/privacy/">Privacy</a>
        <a href="/terms/">Terms</a>
        <a href="/support/">Support</a>
        <a href="mailto:eliviontechnologies@gmail.com?subject=Menopause%20Companion%20launch%20update">Menopause launch updates</a>
        <a href="https://github.com/deliotd-cloud/Curaevita" rel="me">GitHub</a>
      </nav>
    </footer>
  );
}
