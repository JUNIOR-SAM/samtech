import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(scrollTop > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 2000,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(10,10,15,0.75)' : 'rgba(10,10,15,0.15)',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        borderBottom: scrolled ? '1px solid rgba(0,217,255,0.12)' : '1px solid rgba(255,255,255,0.04)',
        padding: scrolled ? '12px 0' : '18px 0',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, height: '2px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00D9FF, #7C3AED, #ffcc00)',
          boxShadow: '0 0 10px rgba(0,217,255,0.6)',
          borderRadius: '0 2px 2px 0', transition: 'width 0.1s linear',
        }} />

        <div style={{
          maxWidth: '1200px', margin: '0 auto', width: '90%',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/image/sam.png" alt="SamTech Logo"
              style={{ height: '36px', width: '36px', objectFit: 'contain', borderRadius: '8px', filter: 'drop-shadow(0 0 8px rgba(0,217,255,0.4))', transition: 'filter 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 14px rgba(0,217,255,0.8))'}
              onMouseLeave={e => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(0,217,255,0.4))'}
            />
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 900, letterSpacing: '-0.5px' }}>
              <span style={{ color: 'white' }}>SAM</span>
              <span style={{ color: '#00D9FF' }}>TECH</span>
            </div>
          </a>

          <ul className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
            {links.slice(0, 3).map((l) => (
              <li key={l.label}>
                <a href={l.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'white'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" style={{
                display: 'inline-block', padding: '10px 26px', borderRadius: '999px',
                background: 'linear-gradient(135deg, #00D9FF, #7C3AED)',
                color: 'white', fontWeight: 700, fontSize: '14px', textDecoration: 'none',
                boxShadow: '0 0 24px rgba(0,217,255,0.35)', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(0,217,255,0.55)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(0,217,255,0.35)'; }}
              >Hire Me</a>
            </li>
          </ul>

          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu"
            style={{ display: 'none', flexDirection: 'column', justifyContent: 'center', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', zIndex: 2100 }}
          >
            <span style={{ width: '26px', height: '2px', background: isOpen ? '#00D9FF' : 'white', display: 'block', borderRadius: '2px', transition: 'all 0.3s ease', transform: isOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ width: '26px', height: '2px', background: isOpen ? '#00D9FF' : 'white', display: 'block', borderRadius: '2px', transition: 'all 0.3s ease', opacity: isOpen ? 0 : 1 }} />
            <span style={{ width: '26px', height: '2px', background: isOpen ? '#00D9FF' : 'white', display: 'block', borderRadius: '2px', transition: 'all 0.3s ease', transform: isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div className="mobile-curtain" style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1999,
        background: 'rgba(8,8,14,0.97)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
        borderBottom: '1px solid rgba(0,217,255,0.15)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
        overflow: 'hidden',
        maxHeight: isOpen ? '100vh' : '0px',
        transition: 'max-height 0.55s cubic-bezier(0.77, 0, 0.175, 1)',
      }}>
        <div style={{ padding: '110px 10% 60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #00D9FF, #7C3AED)', borderRadius: '999px', marginBottom: '40px' }} />

          {links.map((l, i) => (
            <a key={l.label} href={l.href} onClick={() => setIsOpen(false)} style={{
              fontFamily: "'Syne', sans-serif", fontSize: '36px', fontWeight: 900,
              color: 'white', textDecoration: 'none', padding: '16px 0',
              width: '100%', textAlign: 'center',
              borderBottom: i < links.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              transition: 'color 0.2s ease, letter-spacing 0.2s ease', letterSpacing: '-0.5px',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#00D9FF'; e.currentTarget.style.letterSpacing = '2px'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.letterSpacing = '-0.5px'; }}
            >{l.label}</a>
          ))}

          <a href="#contact" onClick={() => setIsOpen(false)} style={{
            marginTop: '36px', padding: '15px 48px', borderRadius: '999px',
            background: 'linear-gradient(135deg, #00D9FF, #7C3AED)',
            color: 'white', fontWeight: 700, fontSize: '16px', textDecoration: 'none',
            boxShadow: '0 0 30px rgba(0,217,255,0.3)',
          }}>Hire Me</a>

          <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.3 }}>
            <img src="/image/sam.png" alt="logo" style={{ height: '24px', width: '24px', objectFit: 'contain', borderRadius: '4px' }} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '14px', fontWeight: 700, color: 'white' }}>SAMTECH</span>
          </div>
        </div>
      </div>

      <div onClick={() => setIsOpen(false)} style={{
        position: 'fixed', inset: 0, zIndex: 1998,
        background: 'rgba(0,0,0,0.4)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none',
        transition: 'opacity 0.4s ease',
      }} />

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-curtain { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;