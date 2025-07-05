import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <span className="white-text">Creating </span>
          <span className="gradient-text">Impactful Designs</span>
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.1 }}
        >
          <span className="white-text">for the World</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.3 }}
        >
          We transform your ideas into stunning visual experiences that captivate audiences and drive results through innovative design solutions.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <a href="#services" className="cta-button primary">Explore Services</a>
          <a href="#contact" className="cta-button outline">Start Project</a>
        </motion.div>
      </div>
    </section>
  );
}
