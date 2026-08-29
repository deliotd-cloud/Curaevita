import Image from 'next/image';

type SiteHeaderProps = {
  compact?: boolean;
};

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  return (
    <header className={compact ? 'site-header compact' : 'site-header'}>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="/">
          <Image src="/curaevita-family.webp" alt="" width="42" height="42" />
          <span><strong>CuraeVita</strong><small>Care for life</small></span>
        </a>
        <div className="nav-links">
          <a href="/apps/">Companions</a>
          <a href="/#approach">Our approach</a>
          <a href="/about/">About</a>
          <a href="/support/">Support</a>
          <a className="nav-cta" href="mailto:deliotd@gmail.com?subject=CuraeVita%20launch%20updates">Get launch updates</a>
        </div>
      </nav>
    </header>
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
        <a href="/about/">About</a>
        <a href="/editorial-standards/">Editorial standards</a>
        <a href="/privacy/">Privacy</a>
        <a href="/terms/">Terms</a>
        <a href="/support/">Support</a>
      </nav>
    </footer>
  );
}
