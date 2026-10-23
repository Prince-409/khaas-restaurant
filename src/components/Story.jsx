import './Story.css';

const stats = [
  { value: '12+', label: 'Regional Influences' },
  { value: '40+', label: 'Signature Plates' },
  { value: 'Daily', label: 'Fresh Preparation' },
];

export default function Story() {
  return (
    <section className="story" id="story" aria-labelledby="story-heading">
      <div className="container story__container">
        {/* Left column — text */}
        <div className="story__text">
          <span className="label">Our Story</span>
          <div className="divider" />
          <h2 id="story-heading" className="story__heading">
            Rooted in India.<br />Made for today.
          </h2>
          <div className="story__body">
            <p>
              KHAAS was born from a simple conviction: that India's regional kitchens — their diversity, their depth, their centuries of craft — deserve a stage equal to any great global cuisine.
            </p>
            <p>
              Our kitchen draws from twelve distinct culinary traditions, from the coastal spice routes of Kerala to the slow-fire kitchens of Rajasthan. We work closely with local farmers and artisan producers to bring ingredients to the table at their most honest and expressive.
            </p>
            <p>
              Every plate at KHAAS is a conversation between memory and modernity — familiar enough to feel like home, surprising enough to make you look up from your table.
            </p>
          </div>
        </div>

        {/* Right column — image */}
        <div className="story__image-wrap">
          <div className="story__image-frame">
            <img
              src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=900&q=85&auto=format&fit=crop"
              alt="Vibrant Indian spices and ingredients arranged artfully — a visual representation of KHAAS's regional sourcing philosophy"
              className="story__image"
              loading="lazy"
            />
          </div>
          <div className="story__image-accent" aria-hidden="true" />
        </div>
      </div>

      {/* Stats row */}
      <div className="container">
        <div className="story__stats" role="list" aria-label="KHAAS at a glance">
          {stats.map((stat) => (
            <div className="story__stat" key={stat.label} role="listitem">
              <span className="story__stat-value">{stat.value}</span>
              <span className="story__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
