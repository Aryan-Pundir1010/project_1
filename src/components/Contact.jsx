// src/components/Contact.jsx
import React from 'react';
import '../styles/Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact fade-in">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">Let's Create Something Amazing</h2>
          <p>Ready to bring your vision to life? Get in touch with us.</p>
          <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Thank you! We’ll be in touch.'); e.target.reset(); }}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required/>
              <input type="email" placeholder="Your Email" required/>
            </div>
            <input type="text" placeholder="Project Type (Web, UI/UX, Video, Graphic)" required/>
            <textarea placeholder="Tell us about your project..." required/>
            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
