import './index.css';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const handleComplete = () => {
    setIsLoading(false);
    setTimeout(() => setFadeIn(true), 50);
  };

  return (
    <div className="relative text-white min-h-screen bg-[#0A0A0F] overflow-x-hidden">
      {isLoading && <Preloader onComplete={handleComplete} />}
      <div
        className="transition-opacity duration-1000"
        style={{ opacity: fadeIn ? 1 : 0, visibility: isLoading ? 'hidden' : 'visible' }}
      >
        <ThreeBackground />
        <div className="relative z-10 w-full">
          <Navbar />
          {/* All sections share the same centred max-width wrapper */}
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '90%' }}>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;