import React from 'react';
import '../styles/HeroSection.css';

// You can replace the heroImageUrl with another professional workplace image URL
const heroImageUrl = 'https://images.unsplash.com/photo-1515165562835-c6d18174c352?auto=format&fit=crop&w=900&q=80';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Selling online<br />
          is vital to<br />
          business growth.
        </h1>
        <p className="hero-subheading">2025 Grow Your e-Commerce Conference</p>
        <div className="hero-details">
          <p>September 16-18, 2025</p>
          <p>Paragon One Plaza and Sky Garden</p>
        </div>
        <button className="hero-btn">BOOK NOW FOR EARLY BIRD PRICES</button>
      </div>
      <div className="hero-image-wrapper">
        {/* Replace the img src below with any professional workplace image you prefer */}
        <img className="hero-image" src={heroImageUrl} alt="People at a table with laptops" />
      </div>
    </section>
  );
};

export default HeroSection;
