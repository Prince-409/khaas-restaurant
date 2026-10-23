import './Experience.css';

const experiences = [
  {
    id: 'dining-room',
    title: 'The Dining Room',
    desc: 'Our main room seats 60 guests in a setting that balances warmth with drama. Hand-plastered walls, warm-toned lighting, and hand-thrown ceramic tableware set the stage for a meal worth remembering.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop',
    imgAlt: 'Elegant restaurant dining room with warm amber lighting and beautifully set tables',
  },
  {
    id: 'chefs-counter',
    title: "Chef's Counter",
    desc: "Eight seats at the open pass. Watch the kitchen in full motion while our chefs guide you through the evening's tasting sequence — an intimate, unrepeatable experience.",
    img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=80&auto=format&fit=crop',
    imgAlt: 'Professional chef preparing dishes at an open kitchen counter',
  },
  {
    id: 'private-gatherings',
    title: 'Private Gatherings',
    desc: 'Our private dining room accommodates up to 20 guests and is ideal for celebrations, corporate lunches, or intimate seated dinners. A dedicated menu and service team ensure every detail is considered.',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80&auto=format&fit=crop',
    imgAlt: 'Intimate private dining room set for a special occasion with candles and elegant decor',
  },
  {
    id: 'weekend-evenings',
    title: 'Weekend Evenings',
    desc: 'Friday and Saturday evenings at KHAAS move at a different rhythm. Live sitar sets, a curated cocktail menu, and a kitchen that lingers a little longer on every plate.',
    img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=900&q=80&auto=format&fit=crop',
    imgAlt: 'Atmospheric restaurant ambience in the evening with candlelight and ambient music',
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <div className="experience__header">
          <span className="label">The Experience</span>
          <div className="divider" />
          <h2 id="experience-heading" className="experience__heading">More than a meal.</h2>
          <p className="experience__subtext">
            Every visit to KHAAS is shaped by the space, the season, and the company you keep.
          </p>
        </div>

        <div className="experience__grid">
          {experiences.map((exp, i) => (
            <article
              key={exp.id}
              className={`exp-card${i === 0 ? ' exp-card--wide' : ''}`}
              aria-labelledby={`exp-title-${exp.id}`}
            >
              <div className="exp-card__img-wrap">
                <img
                  src={exp.img}
                  alt={exp.imgAlt}
                  className="exp-card__img"
                  loading="lazy"
                />
                <div className="exp-card__overlay" aria-hidden="true" />
              </div>
              <div className="exp-card__body">
                <h3 id={`exp-title-${exp.id}`} className="exp-card__title">{exp.title}</h3>
                <p className="exp-card__desc">{exp.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
