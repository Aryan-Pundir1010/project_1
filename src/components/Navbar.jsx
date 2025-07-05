import React from 'react';
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">versatile design</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="cta-button1">
          <span>Get Started</span>
        </a>
        <div className="mobile-menu"> 
          <span></span><span></span><span></span>
        </div>
      </div>  
    </nav>
  );
}
