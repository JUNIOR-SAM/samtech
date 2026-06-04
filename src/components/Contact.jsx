import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // FormSubmit will handle the actual POST — this just shows success UI
    e.target.submit();
    setSent(true);
  };

  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/2349030030518?text=${encodeURIComponent("Hello Samuel, My name is _____, I would like to work with you / I want to do a project together.")}`;

  const socials = [
    {
      label: 'Gmail',
      href: 'mailto:oyebodes19@gmail.com',
      color: '#EA4335',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: whatsappLink,
      color: '#25D366',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/samuel-oyebode-4685643b2/',
      color: '#0A66C2',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'Twitter/X',
      href: 'https://x.com/OyebodeSa62062',
      color: '#000000',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/samcreativity_001/',
      color: '#E1306C',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://web.facebook.com/profile.php?id=61578384882029',
      color: '#1877F2',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@samcreativity_001',
      color: '#ff0050',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
        </svg>
      ),
    },
    {
      label: 'Pinterest',
      href: 'https://www.pinterest.com/oyebodes19/',
      color: '#E60023',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
        </svg>
      ),
    },
    {
      label: 'Portfolio',
      href: 'https://junior-sam.github.io/samcreativity/',
      color: '#00D9FF',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
          <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
        </svg>
      ),
    },
  ];

  const inputStyle = (name) => ({
    width: '100%',
    padding: '14px 18px',
    borderRadius: '14px',
    background: 'rgba(255,255,255,0.04)',
    border: focused === name ? '1px solid rgba(0,217,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    transition: 'border 0.2s ease',
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: 'border-box',
  });

  const labelStyle = {
    color: 'rgba(255,255,255,0.35)',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '8px',
  };

  return (
    <>
      <section id="contact" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#00D9FF', fontSize: '11px', fontWeight: 700, letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '14px' }}>
            Get In Touch
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, color: 'white', margin: 0 }}>
            Let's <span style={{ color: '#ffcc00' }}>Work</span> Together
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.35)', marginTop: '16px', fontSize: '15px', lineHeight: 1.7, maxWidth: '420px', margin: '16px auto 0' }}>
            Have a project in mind? Drop me a message — I respond within 24 hours.
          </p>
        </div>

        {/* Two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '48px', alignItems: 'start' }} className="contact-grid">

          {/* Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Contact details */}
            {[
              { icon: '📧', label: 'Email', value: 'oyebodes19@gmail.com', href: 'mailto:oyebodes19@gmail.com' },
              { icon: '📞', label: 'Phone / WhatsApp', value: '09030030518', href: whatsappLink },
              { icon: '📍', label: 'Location', value: 'Nigeria', href: null },
              { icon: '💼', label: 'Availability', value: 'Open to opportunities', href: null },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '46px', height: '46px', borderRadius: '14px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,217,255,0.08)', border: '1px solid rgba(0,217,255,0.15)', fontSize: '18px',
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '4px', margin: '0 0 4px' }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{ color: 'white', fontWeight: 500, fontSize: '14px', textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#00D9FF'}
                        onMouseLeave={e => e.currentTarget.style.color = 'white'}
                      >{item.value}</a>
                    : <p style={{ color: 'white', fontWeight: 500, fontSize: '14px', margin: 0 }}>{item.value}</p>
                  }
                </div>
              </div>
            ))}

            {/* Social icons grid */}
            <div>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '14px' }}>Follow Me</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = s.color + '20';
                      e.currentTarget.style.borderColor = s.color + '60';
                      e.currentTarget.style.color = s.color;
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form — powered by FormSubmit */}
          <div style={{ padding: '36px', borderRadius: '28px', background: '#0E0E18', border: '1px solid rgba(255,255,255,0.07)' }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0', gap: '16px', textAlign: 'center' }}>
                <span style={{ fontSize: '48px' }}>🎉</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", color: 'white', fontSize: '24px', fontWeight: 800, margin: 0 }}>Message Sent!</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', margin: 0 }}>I'll get back to you soon.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  style={{ marginTop: '8px', padding: '10px 24px', borderRadius: '999px', background: 'rgba(0,217,255,0.1)', border: '1px solid rgba(0,217,255,0.25)', color: '#00D9FF', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              // FormSubmit action — replace YOUR_EMAIL with your actual gmail
              <form
                action="https://formsubmit.co/oyebodes19@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {/* FormSubmit hidden config fields */}
                <input type="hidden" name="_subject" value="New Portfolio Message from Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                {/* Redirect back to your site after submit — change to your actual URL */}
                <input type="hidden" name="_next" value="https://yourportfolio.com/#contact" />

                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required
                    style={inputStyle('name')} onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@email.com" required
                    style={inputStyle('email')} onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={5}
                    style={{ ...inputStyle('message'), resize: 'none' }}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '15px', borderRadius: '14px',
                    background: 'linear-gradient(135deg, #00D9FF, #7C3AED)',
                    border: 'none', color: 'white', fontSize: '14px', fontWeight: 700,
                    cursor: 'pointer', boxShadow: '0 0 30px rgba(0,217,255,0.2)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 9999,
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(37,211,102,0.5)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          animation: 'waPulse 2.5s infinite',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.12)';
          e.currentTarget.style.boxShadow = '0 6px 32px rgba(37,211,102,0.7)';
          e.currentTarget.style.animation = 'none';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(37,211,102,0.5)';
          e.currentTarget.style.animation = 'waPulse 2.5s infinite';
        }}
      >
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <style>{`
          @keyframes waPulse {
            0%, 100% { box-shadow: 0 4px 24px rgba(37,211,102,0.5); transform: scale(1); }
            50% { box-shadow: 0 4px 40px rgba(37,211,102,0.8); transform: scale(1.06); }
          }
        `}</style>
      </a>
    </>
  );
};

export default Contact;