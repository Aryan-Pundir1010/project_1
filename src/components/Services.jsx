import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Services.css';

const services = [
  { icon: '🌐', title: 'Web Design', desc: 'Responsive websites that engage users and deliver results.' },
  { icon: '📱', title: 'UI/UX Design', desc: 'User-centered interfaces with great usability and visual appeal.' },
  { icon: '🎬', title: 'Video Design', desc: 'Compelling video content and motion graphics.' },
  { icon: '🎨', title: 'Graphic Design', desc: 'Logos and brand materials that make an impact.' },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Design Services
      </motion.h2>

      <div className="services-track">
        {[...services, ...services].map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (index % services.length) * 0.1 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}