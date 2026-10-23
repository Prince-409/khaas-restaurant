import './Footer.css';

const navLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
  { label: 'Reservations', href: '#reservations' },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Top row */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#hero" className="footer__logo" onClick={scrollToTop} aria-label="KHAAS home">
              <span className="footer__logo-name">KHAAS</span>
              <span className="footer__logo-sub">Modern Indian Kitchen</span>
            </a>
            <p className="footer__tagline">Regional flavours. Contemporary craft.</p>
          </div>

          {/* Nav */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <ul role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__nav-link"
                    onClick={(e) => scrollTo(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact">
            <p className="footer__contact-address">
              24, Spice Avenue, Indiranagar<br />
              Bengaluru, Karnataka 560038
            </p>
            <a
              href="tel:+919000012345"
              className="footer__contact-link"
              aria-label="Call KHAAS restaurant"
            >
              +91 90000 12345
            </a>
            <a
              href="mailto:hello@khaaskitchen.in"
              className="footer__contact-link"
              aria-label="Email KHAAS restaurant"
            >
              hello@khaaskitchen.in
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-link footer__ig"
              aria-label="Follow KHAAS on Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              @khaaskitchen
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer__bottom">
          <p className="footer__demo">
            Demo website created by PI BLOOM. All content is fictional and for portfolio demonstration only.
          </p>
          <p className="footer__copy">
            © 2026 KHAAS. Demo website.
          </p>
        </div>
      </div>
    </footer>
  );
}
