import './Visit.css';

export default function Visit() {
  return (
    <section className="visit" id="visit" aria-labelledby="visit-heading">
      <div className="container visit__container">
        {/* Heading */}
        <div className="visit__header">
          <span className="label">Find Us</span>
          <div className="divider" />
          <h2 id="visit-heading" className="visit__heading">Visit KHAAS</h2>
        </div>

        {/* Details Grid */}
        <div className="visit__grid">
          {/* Address */}
          <div className="visit__block">
            <h3 className="visit__block-title">Address</h3>
            <address className="visit__address">
              KHAAS — Modern Indian Kitchen<br />
              24, Spice Avenue,<br />
              Indiranagar,<br />
              Bengaluru, Karnataka 560038
            </address>
            <div className="visit__actions">
              <a
                href="https://maps.google.com/?q=Indiranagar+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline visit__btn"
                aria-label="Get directions to KHAAS restaurant on Google Maps"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="visit__block">
            <h3 className="visit__block-title">Hours</h3>
            <dl className="visit__hours">
              <div className="visit__hours-row">
                <dt>Mon – Thu</dt>
                <dd>12:00 PM – 10:30 PM</dd>
              </div>
              <div className="visit__hours-row">
                <dt>Fri – Sat</dt>
                <dd>12:00 PM – 11:30 PM</dd>
              </div>
              <div className="visit__hours-row">
                <dt>Sunday</dt>
                <dd>12:00 PM – 10:00 PM</dd>
              </div>
            </dl>
          </div>

          {/* Contact */}
          <div className="visit__block">
            <h3 className="visit__block-title">Contact</h3>
            <ul className="visit__contact-list" role="list">
              <li>
                <span className="visit__contact-label">Phone</span>
                <a
                  href="tel:+919000012345"
                  className="visit__contact-value"
                  aria-label="Call KHAAS at +91 90000 12345"
                >
                  +91 90000 12345
                </a>
              </li>
              <li>
                <span className="visit__contact-label">Email</span>
                <a
                  href="mailto:hello@khaaskitchen.in"
                  className="visit__contact-value"
                  aria-label="Email KHAAS at hello@khaaskitchen.in"
                >
                  hello@khaaskitchen.in
                </a>
              </li>
              <li>
                <span className="visit__contact-label">Instagram</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit__contact-value"
                  aria-label="Follow KHAAS on Instagram"
                >
                  @khaaskitchen
                </a>
              </li>
            </ul>
            <div className="visit__actions">
              <a
                href="tel:+919000012345"
                className="btn-primary visit__btn"
                aria-label="Call KHAAS restaurant"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
