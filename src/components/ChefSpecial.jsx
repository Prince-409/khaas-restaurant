import './ChefSpecial.css';

export default function ChefSpecial() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="chef-special" id="chef-special" aria-labelledby="chef-special-heading">
      <div className="chef-special__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=1800&q=85&auto=format&fit=crop"
          alt=""
          className="chef-special__bg-img"
          loading="lazy"
        />
        <div className="chef-special__overlay" />
      </div>

      <div className="container chef-special__content">
        <div className="chef-special__inner">
          <span className="label">Tonight's Khaas</span>
          <div className="divider" />
          <h2 id="chef-special-heading" className="chef-special__heading">
            Coal-Roasted<br />Malai Chicken
          </h2>
          <p className="chef-special__desc">
            Free-range chicken slow-marinated in a saffron cream and black cardamom paste, 
            coal-roasted in our clay tandoor until the skin blisters and caramelises. 
            Served with a smoked green chutney, house-pickled cucumber, 
            and a warm roomali roti to finish.
          </p>
          <div className="chef-special__price">
            <span className="chef-special__price-label">Chef's Plate</span>
            <span className="chef-special__price-value">₹780</span>
          </div>
          <button
            className="btn-gold"
            onClick={() => scrollTo('#menu')}
            aria-label="View the full KHAAS menu"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
