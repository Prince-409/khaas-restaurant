import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero" aria-label="KHAAS hero section">
      {/* Background image */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1800&q=85&auto=format&fit=crop"
          alt=""
          className="hero__bg-img"
          loading="eager"
          fetchpriority="high"
        />
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content">
        <span className="label hero__eyebrow">Bengaluru, India</span>

        <h1 className="hero__brand">
          KHAAS
        </h1>
        <p className="hero__subtitle">Modern Indian Kitchen</p>

        <div className="hero__divider" aria-hidden="true" />

        <h2 className="hero__headline">India, Reimagined.</h2>

        <p className="hero__body">
          Regional flavours, contemporary craft,<br className="hero__br" />
          and a table made for lingering.
        </p>

        <div className="hero__actions">
          <button
            className="btn-primary"
            onClick={() => scrollTo('#menu')}
            aria-label="Explore the KHAAS menu"
          >
            Explore the Menu
          </button>
          <button
            className="btn-outline"
            onClick={() => scrollTo('#reservations')}
            aria-label="Reserve a table at KHAAS"
          >
            Reserve a Table
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
