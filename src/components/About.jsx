import React from 'react';

const skills = [
  { icon: '🛡️', title: 'Cybersecurity', desc: 'Vulnerability Assessment, Network Security & Ethical Hacking.', color: '#00D9FF' },
  { icon: '🌐', title: 'Web Dev', desc: 'React, Firebase, modern full-stack applications.', color: '#7C3AED' },
  { icon: '🎨', title: 'Design', desc: '3D Typography, Brand Identity & Studio Mockups.', color: '#ffcc00' },
];

const About = () => (
  <section id="about" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: '80px',
      alignItems: 'center',
    }}
    className="about-grid"
    >
      {/* Image */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
          {/* Corner accents */}
          <div style={{ position: 'absolute', top: '-8px', left: '-8px', width: '28px', height: '28px', borderTop: '2px solid #00D9FF', borderLeft: '2px solid #00D9FF', borderRadius: '4px 0 0 0', zIndex: 2 }}></div>
          <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', width: '28px', height: '28px', borderBottom: '2px solid #7C3AED', borderRight: '2px solid #7C3AED', borderRadius: '0 0 4px 0', zIndex: 2 }}></div>
          <div style={{
            width: '100%', aspectRatio: '1/1',
            borderRadius: '32px',
            border: '1px solid rgba(0,217,255,0.12)',
            background: '#12121A',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}>
            <img src="/image/about.png" alt="Samuel Oyebode" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            {/* <div style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: "'Syne', sans-serif", fontSize: '80px', fontWeight: 900,
                background: 'linear-gradient(135deg, #00D9FF, #7C3AED)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0,
              }}>SO</p>
              <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase' }}>Photo here</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <div>
          <p style={{ color: '#00D9FF', fontSize: '11px', fontWeight: 700, letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Discovery
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, color: 'white', lineHeight: 1.1, margin: 0 }}>
            About <span style={{ color: '#ffcc00' }}>Me</span>
          </h2>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: 1.85, margin: 0 }}>
          Hi, I'm <strong style={{ color: 'white' }}>Samuel Oyebode</strong>. I live at the intersection of technical precision and creative freedom. As a final-year Computer Science student, I've mastered the art of securing networks while simultaneously crafting high-end visual identities.
        </p>

        {/* Skill cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="skill-grid">
          {skills.map((s) => (
            <div
              key={s.title}
              style={{
                padding: '20px 16px',
                borderRadius: '20px',
                background: '#0E0E18',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = s.color + '40';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '10px' }}>{s.icon}</span>
              <h5 style={{ color: s.color, fontWeight: 700, fontSize: '14px', fontFamily: "'Syne', sans-serif", marginBottom: '6px' }}>{s.title}</h5>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote style={{
          borderLeft: '3px solid #00D9FF',
          paddingLeft: '20px',
          color: 'rgba(255,255,255,0.35)',
          fontStyle: 'italic',
          fontSize: '15px',
          lineHeight: 1.7,
          margin: 0,
        }}>
          "Blending the precision of code with the freedom of design to create secure digital excellence."
        </blockquote>
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .skill-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default About;