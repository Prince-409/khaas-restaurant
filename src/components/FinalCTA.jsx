import './FinalCTA.css';

export default function FinalCTA() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="final-cta__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1800&q=80&auto=format&fit=crop"
          alt=""
          className="final-cta__bg-img"
          loading="lazy"
        />
        <div className="final-cta__overlay" />
      </div>

      <div className="container final-cta__content">
        <div className="final-cta__line" aria-hidden="true" />
        <h2 id="final-cta-heading" className="final-cta__heading">
          Come hungry.<br />Leave inspired.
        </h2>
        <div className="final-cta__line" aria-hidden="true" />
        <p className="final-cta__subtext">
          Discover a different side of Indian dining.
        </p>
        <button
          className="btn-primary final-cta__btn"
          onClick={() => scrollTo('#reservations')}
          aria-label="Reserve your table at KHAAS restaurant"
        >
          Reserve Your Table
        </button>
      </div>
    </section>
  );
}
