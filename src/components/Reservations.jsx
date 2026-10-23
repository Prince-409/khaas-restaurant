import { useState } from 'react';
import './Reservations.css';

export default function Reservations() {
  const [form, setForm] = useState({ date: '', time: '', guests: '2' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.time) {
      setError('Please select a date and time to continue.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ date: '', time: '', guests: '2' });
    setError('');
  };

  // Get today's date in YYYY-MM-DD for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="reservations" id="reservations" aria-labelledby="reservations-heading">
      <div className="container reservations__container">
        {/* Text */}
        <div className="reservations__text">
          <span className="label">Reservations</span>
          <div className="divider" />
          <h2 id="reservations-heading" className="reservations__heading">
            Your table<br />is waiting.
          </h2>
          <p className="reservations__body">
            We take reservations for lunch and dinner, Monday through Sunday. 
            For parties larger than 10, or for private dining enquiries, 
            please contact us directly at <span className="reservations__email">hello@khaaskitchen.in</span>
          </p>
          <div className="reservations__hours">
            <div className="res-hours__item">
              <span className="res-hours__day">Mon – Thu</span>
              <span className="res-hours__time">12:00 PM – 10:30 PM</span>
            </div>
            <div className="res-hours__item">
              <span className="res-hours__day">Fri – Sat</span>
              <span className="res-hours__time">12:00 PM – 11:30 PM</span>
            </div>
            <div className="res-hours__item">
              <span className="res-hours__day">Sunday</span>
              <span className="res-hours__time">12:00 PM – 10:00 PM</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="reservations__form-wrap">
          {!submitted ? (
            <form
              className="reservations__form"
              onSubmit={handleSubmit}
              aria-label="Table reservation form"
              noValidate
            >
              <div className="form__group">
                <label htmlFor="res-date" className="form__label">Date</label>
                <input
                  id="res-date"
                  name="date"
                  type="date"
                  className="form__input"
                  value={form.date}
                  onChange={handleChange}
                  min={today}
                  required
                  aria-required="true"
                />
              </div>

              <div className="form__group">
                <label htmlFor="res-time" className="form__label">Time</label>
                <select
                  id="res-time"
                  name="time"
                  className="form__input form__select"
                  value={form.time}
                  onChange={handleChange}
                  required
                  aria-required="true"
                >
                  <option value="" disabled>Select a time</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="12:30">12:30 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="13:30">1:30 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>

              <div className="form__group">
                <label htmlFor="res-guests" className="form__label">Guests</label>
                <select
                  id="res-guests"
                  name="guests"
                  className="form__input form__select"
                  value={form.guests}
                  onChange={handleChange}
                  aria-label="Number of guests"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="form__error" role="alert" aria-live="polite">{error}</p>
              )}

              <button type="submit" className="btn-primary form__submit" aria-label="Submit reservation request">
                Reserve a Table
              </button>

              <p className="form__disclaimer">
                * This is a demo reservation experience. No booking is actually made.
              </p>
            </form>
          ) : (
            <div className="reservations__confirm" role="status" aria-live="polite">
              <div className="confirm__icon" aria-hidden="true">✓</div>
              <h3 className="confirm__title">Thank You.</h3>
              <p className="confirm__message">
                This is a demo reservation experience for KHAAS.<br />
                No booking has been submitted or stored.
              </p>
              <div className="confirm__details">
                <div className="confirm__detail">
                  <span className="confirm__detail-label">Date</span>
                  <span className="confirm__detail-value">{new Date(form.date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="confirm__detail">
                  <span className="confirm__detail-label">Time</span>
                  <span className="confirm__detail-value">
                    {form.time === '12:00' ? '12:00 PM'
                      : form.time === '12:30' ? '12:30 PM'
                      : form.time === '13:00' ? '1:00 PM'
                      : form.time === '13:30' ? '1:30 PM'
                      : form.time === '14:00' ? '2:00 PM'
                      : form.time === '19:00' ? '7:00 PM'
                      : form.time === '19:30' ? '7:30 PM'
                      : form.time === '20:00' ? '8:00 PM'
                      : form.time === '20:30' ? '8:30 PM'
                      : '9:00 PM'}
                  </span>
                </div>
                <div className="confirm__detail">
                  <span className="confirm__detail-label">Guests</span>
                  <span className="confirm__detail-value">{form.guests}</span>
                </div>
              </div>
              <button className="btn-outline confirm__btn" onClick={handleReset} aria-label="Make another reservation">
                Make Another Reservation
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
