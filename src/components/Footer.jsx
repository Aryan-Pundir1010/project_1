import React from 'react';
import '../components/Footer.jsx';
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>versatile design</h3>
          <p>Creating impactful designs that transform businesses and captivate audiences worldwide.</p>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <p><a href="#services">Web Design</a></p>
          <p><a href="#services">UI/UX Design</a></p>
          <p><a href="#services">Video Design</a></p>
          <p><a href="#services">Graphic Design</a></p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: hello@designcraft.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Design Street, Creative City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 versatile design. All rights reserved.</p>
      </div>
    </footer>
  );
}