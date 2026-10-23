import { useState, useEffect } from 'react';
import './Navbar.css';

const desktopLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
];

const mobileLinks = [
  ...desktopLinks,
  { label: 'Reservations', href: '#reservations' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize above mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')} aria-label="KHAAS home">
            <span className="navbar__logo-name">KHAAS</span>
            <span className="navbar__logo-sub">Modern Indian Kitchen</span>
          </a>

          {/* Desktop nav */}
          <ul className="navbar__links" role="list">
            {desktopLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#reservations"
            className="navbar__cta btn-primary"
            onClick={(e) => handleNavClick(e, '#reservations')}
            aria-label="Reserve a table at KHAAS"
          >
            Reserve a Table
          </a>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {/* KHAAS branding */}
        <div className="mobile-menu__brand" aria-hidden="true">
          <span className="mobile-menu__brand-name">KHAAS</span>
          <span className="mobile-menu__brand-sub">Modern Indian Kitchen</span>
        </div>

        <ul className="mobile-menu__links" role="list">
          {mobileLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-menu__link"
                onClick={(e) => handleNavClick(e, link.href)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#reservations"
          className="mobile-menu__cta btn-primary"
          onClick={(e) => handleNavClick(e, '#reservations')}
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Reserve a table at KHAAS"
        >
          Reserve a Table
        </a>
      </div>

      {/* Overlay backdrop */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
