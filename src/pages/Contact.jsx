import { site, servicePages } from '../content.js';
import Icon from '../components/Icon.jsx';
import { telHref, whatsappHref } from '../components/links.js';
import { Hero, usePageMeta } from '../components/blocks.jsx';

// Opens WhatsApp with the enquiry filled in. Replace with an API call if a backend is added.
function sendEnquiry(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const text = [
    'New website enquiry',
    `Name: ${data.get('name')}`,
    `Mobile: ${data.get('phone')}`,
    `Service: ${data.get('service') || 'General enquiry'}`,
    `Message: ${data.get('message')}`,
  ].join('\n');
  window.open(`${whatsappHref}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
}

export default function Contact() {
  usePageMeta(
    `Contact | ${site.name}, ${site.role} in ${site.city}`,
    `Contact ${site.name} in ${site.location}. Call or WhatsApp ${site.phoneDisplay}.`,
  );
  return (
    <>
      <Hero crumb="Contact Us" title="Contact" accent="Us" intro="Call, send a WhatsApp message or fill in the form, and we will get back to you." image="contact.jpg" />
      <section className="section">
        <div className="wrap split top">
          <div>
            <h2 className="big">Get in Touch</h2>
            <ul className="contact-list">
              <li><Icon name="phone" large /><div><h3>Phone</h3><a href={telHref}>{site.phoneDisplay}</a></div></li>
              <li><Icon name="chat" large /><div><h3>WhatsApp</h3><a href={whatsappHref} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a></div></li>
              <li><Icon name="pin" large /><div><h3>Location</h3><p>{site.location}</p></div></li>
            </ul>
          </div>
          <form className="form panel" onSubmit={sendEnquiry}>
            <h3>Send an Enquiry</h3>
            <label>Your name<input name="name" required autoComplete="name" /></label>
            <label>Mobile number<input name="phone" type="tel" required autoComplete="tel" /></label>
            <label>Service
              <select name="service" defaultValue="">
                <option value="">General enquiry</option>
                {servicePages.map((p) => <option key={p.key}>{p.nav}</option>)}
              </select>
            </label>
            <label>Your message<textarea name="message" rows="4" required /></label>
            <button className="btn gold" type="submit">Send on WhatsApp<Icon name="arrow" /></button>
            <p className="form-note">This opens WhatsApp with your message ready to send. Nothing is stored on this website.</p>
          </form>
        </div>
      </section>
    </>
  );
}
