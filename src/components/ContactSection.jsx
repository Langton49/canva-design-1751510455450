import React from 'react';
import '../styles/ContactSection.css';

// You can replace the contactImageUrl with a different group business photo
const contactImageUrl = 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=900&q=80';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Reach Out</h2>
        <div className="contact-details">
          <p>Conference Secretariat</p>
          <p>163 Woodlands Place<br/>Algies Bay, Rodney 0920</p>
          <p>123-456-7890</p>
          <p>hello@reallygreatsite.com</p>
          <p>@reallygreatsite</p>
        </div>
        <button className="contact-btn">RESERVE YOUR SEAT</button>
      </div>
      <div className="contact-image-wrapper">
        {/* Replace the img src below with any group business discussion image you prefer */}
        <img className="contact-image" src={contactImageUrl} alt="Group in business discussion at a table" />
      </div>
    </section>
  );
};

export default ContactSection;
