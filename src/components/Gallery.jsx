import './Gallery.css';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=900&q=80&auto=format&fit=crop',
    alt: 'Vibrant Indian thali with colourful curries, chutneys, and fresh naan bread',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80&auto=format&fit=crop',
    alt: 'A richly flavoured Indian curry garnished with cream and fresh herbs',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80&auto=format&fit=crop',
    alt: 'Paneer tikka served on a sizzling platter with grilled onions, capsicum, and lemon',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80&auto=format&fit=crop',
    alt: 'Warm, moody restaurant interior with atmospheric candlelight',
    size: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&q=80&auto=format&fit=crop',
    alt: 'Rich Indian curry served in a skillet with garlic naan bread, fresh coriander, and chutney',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80&auto=format&fit=crop',
    alt: 'Vibrant Indian kadai curry — rich red-orange gravy garnished with fresh coriander',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900&q=80&auto=format&fit=crop',
    alt: 'Traditional Indian thali meal — dal, sabzi, roti, pickle, papad, and chaas',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=800&q=80&auto=format&fit=crop',
    alt: 'Indian chaat plate — aloo tikki with chickpeas, chutneys, and fresh garnishes',
    size: 'normal',
  },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-heading">
      <div className="container gallery__header">
        <span className="label">Gallery</span>
        <div className="divider" />
        <h2 id="gallery-heading" className="gallery__heading">The KHAAS table.</h2>
        <p className="gallery__subtext">A glimpse of the food, the space, and the evenings that unfold here.</p>
      </div>

      <div className="gallery__grid" role="list" aria-label="Gallery of KHAAS restaurant">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={`gallery__item gallery__item--${img.size}`}
            role="listitem"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="gallery__img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
