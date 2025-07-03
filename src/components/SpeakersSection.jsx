import React from 'react';
import '../styles/SpeakersSection.css';

// These images can be swapped out with real keynote speaker photos
const speakers = [
  {
    name: 'Leslie Boatwright',
    title: 'Head of Marketing',
    company: 'The Hobbiibox',
    date: 'September 16',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Nicholas Newark',
    title: 'Director of Design',
    company: 'Studio Ralla',
    date: 'September 17',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Kin Gyun',
    title: 'Founder and CEO',
    company: 'The Treasurebox Online',
    date: 'September 18',
    img: 'https://randomuser.me/api/portraits/men/99.jpg',
  },
];

const SpeakersSection = () => {
  return (
    <section className="speakers-section">
      <h2 className="speakers-heading">Our 2025 Keynote Speakers</h2>
      <div className="speakers-list">
        {speakers.map((speaker, idx) => (
          <div className="speaker-card" key={idx}>
            {/* Replace img src with speaker's real photo if available */}
            <img
              className="speaker-img"
              src={speaker.img}
              alt={speaker.name}
            />
            <div className="speaker-info">
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">{speaker.title}</p>
              <p className="speaker-company">{speaker.company}</p>
              <p className="speaker-date">{speaker.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpeakersSection;
