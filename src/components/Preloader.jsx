import React, { useState, useEffect } from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  if (!loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl">Welcome to your site!</div>
      </div>
    );
  }

  return (
    <div className="preloader-container">
      <div className="grid-background"></div>
      
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>

      <div className="content">
        <h1 className="main-title">Design with Us!</h1>
        <div className="underline"></div>
        <h2 className="subtitle">Versatile Design</h2>
      </div>
    </div>
  );
};

export default Preloader;