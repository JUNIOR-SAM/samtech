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
    <div style={{ background: '#0A0A0F', minHeight: '100vh', overflowX: 'hidden', color: 'white' }}>

      {/* Preloader */}
      {isLoading && <Preloader onComplete={handleComplete} />}

      {/* Main content — fades in after preloader */}
      <div style={{
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1s ease',
        // Use display:none while loading so Footer isn't trapped by visibility:hidden
        display: isLoading ? 'none' : 'block',
      }}>
        <ThreeBackground />

        <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <Navbar />

          {/* Centred content wrapper */}
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '90%' }}>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>

          {/* Footer is OUTSIDE the wrapper so it goes full width */}
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;