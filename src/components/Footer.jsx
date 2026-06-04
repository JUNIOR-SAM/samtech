import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{
      background: '#0F0F18',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px 0',
      width: '100%',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}>

        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/image/sam.png"
            alt="SamTech"
            style={{ height: '32px', width: '32px', objectFit: 'contain', borderRadius: '8px' }}
          />
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '20px',
            fontWeight: 900,
            letterSpacing: '-0.5px',
          }}>
            <span style={{ color: 'white' }}>SAM</span>
            <span style={{ color: '#00D9FF' }}>TECH</span>
          </span>
        </a>

        {/* Nav links */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 32px' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#00D9FF'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.15), rgba(124,58,237,0.15), transparent)',
        }} />

        {/* Copyright */}
        <p style={{
          color: 'rgba(241, 237, 237, 0.72)',
          fontSize: '12px',
          margin: 0,
          textAlign: 'center',
        }}>
          © {year} Samuel Oyebode. All rights reserved. Built by SamTech.
        </p>

      </div>
    </footer>
  );
};

export default Footer;