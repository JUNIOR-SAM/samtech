import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Security Specialist', 'Web Developer', 'Graphics Designer'],
      typeSpeed: 55,
      backSpeed: 35,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        width: '100%',
        alignItems: 'center',
      }}
      className="hero-grid"
      >
        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Available badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            width: 'fit-content',
            padding: '6px 16px', borderRadius: '999px',
            background: 'rgba(0,217,255,0.08)',
            border: '1px solid rgba(0,217,255,0.2)',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D9FF', boxShadow: '0 0 8px #00D9FF', animation: 'pulse 2s infinite' }}></span>
            <span style={{ color: '#00D9FF', fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' }}>
              Available for Work
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(44px, 6vw, 72px)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.05,
            margin: 0,
          }}>
            Hi, I'm{' '}
            <span style={{ color: '#ffcc00', textShadow: '0 0 40px rgba(255,204,0,0.25)' }}>
              Samuel
            </span>
          </h1>

          <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 500, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
            I am <span ref={el} style={{ color: '#00D9FF', fontWeight: 700 }}></span>
          </h2>

          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '16px', lineHeight: 1.8, maxWidth: '480px', margin: 0 }}>
            Blending technical precision with creative freedom — crafting secure, high-end digital experiences at the intersection of cybersecurity and design.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', paddingTop: '8px' }}>
            <a href="#projects" style={{
              padding: '14px 32px', borderRadius: '999px',
              background: 'linear-gradient(135deg, #00D9FF, #7C3AED)',
              color: 'white', fontWeight: 700, fontSize: '14px',
              textDecoration: 'none',
              boxShadow: '0 0 30px rgba(0,217,255,0.3)',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              View Projects
            </a>
            <a href="#contact" style={{
              padding: '14px 32px', borderRadius: '999px',
              border: '1.5px solid rgba(0,217,255,0.35)',
              color: '#00D9FF', fontWeight: 700, fontSize: '14px',
              background: 'rgba(0,217,255,0.05)',
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Hire Me
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '40px', paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '8px',
          }}>
            {[{ num: '6+', label: 'Web Projects' }, { num: '2+', label: 'Cyber Labs' }, { num: '100%', label: 'Passion' }].map(s => (
              <div key={s.label}>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '26px', fontWeight: 900, color: '#00D9FF', margin: 0 }}>{s.num}</p>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - image */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '360px', animation: 'floating 5s ease-in-out infinite' }}>
            <div style={{
              position: 'absolute', inset: '-20px',
              background: 'radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
            }}></div>
            <div style={{
              position: 'relative', zIndex: 1,
              width: '100%', aspectRatio: '4/5',
              borderRadius: '40px',
              border: '1px solid rgba(0,217,255,0.15)',
              background: '#12121A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <img src="/image/hero.png" alt="Samuel" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              {/* <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: "'Syne', sans-serif", fontSize: '72px', fontWeight: 900,
                  background: 'linear-gradient(135deg, #00D9FF, #7C3AED)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>SO</p>
                <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase' }}>Your photo here</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;