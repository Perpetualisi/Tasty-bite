import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaClock, FaCommentDots } from "react-icons/fa";
import "./Contacts.css";

export default function Contacts() {
  return (
    <section id="contacts" className="contact-section">
      <div className="contact-container">
    
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p><FaMapMarkerAlt /> New York, USA</p>
          <p><FaPhone /> +123-456-678</p>
          <p><FaEnvelope /> Tastybites@gmail.com</p>
          <p><FaClock /> Operating Hours: 9 AM - 10 PM</p>
          <br />
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="https://wa.me/123456678" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="#"><FaCommentDots /> Live Chat</a>
          </div>
    <br />
          <iframe 
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991411806!2d-74.25986500913618!3d40.6976700676815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzU4LjYiTiA3NMKwMTUnMzUuNSJX!5e0!3m2!1sen!2sus!4v1611771896360!5m2!1sen!2sus"
            width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          ></iframe>
        </div>

    
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
