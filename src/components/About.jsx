import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose Versatile Design?</h2>
            <p>We are a passionate team of designers and creatives dedicated to bringing your vision to life. Our expertise spans across multiple design disciplines, ensuring comprehensive solutions for all your creative needs.</p>
            <p>From concept to completion, we work closely with our clients to understand their goals and deliver designs that not only look amazing but also drive real business results.</p>
            <a href="#contact" className="cta-button">Work With Us</a>
          </motion.div>

          <motion.div
            className="about-gif-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://i.gifer.com/fxVE.gif"
              alt="Creative Circle"
              className="about-gif no-click"
              draggable={false}
            />            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
