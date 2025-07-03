import React from 'react';
import HeroSection from './components/HeroSection';
import SpeakersSection from './components/SpeakersSection';
import ContactSection from './components/ContactSection';
import './styles/index.css';

function App() {
  return (
    <main>
      <HeroSection />
      <SpeakersSection />
      <ContactSection />
    </main>
  );
}

export default App;
