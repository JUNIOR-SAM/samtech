import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = 'SAMTECH';

  useEffect(() => {
    // 1. Type letters one by one
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        index++;
        setText(fullText.slice(0, index));
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    // 2. Fill progress bar — finishes in ~3s (60 steps × 50ms)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.7;
      });
    }, 50);

    // 3. Start fade out at 3.2s
    const fadeTimer = setTimeout(() => setFadeOut(true), 3200);

    // 4. Tell App we're done at 3.8s (after fade completes)
    const doneTimer = setTimeout(() => onComplete(), 3800);

    return () => {
      clearInterval(typingInterval);
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '36px',
      background: '#0A0A0F',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.6s ease',
      pointerEvents: fadeOut ? 'none' : 'all',
    }}>

      {/* Spinning ring */}
      <div style={{ position: 'relative', width: '96px', height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Ping ring */}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: '50%',
          border: '1px solid rgba(0,217,255,0.1)',
          animation: 'ping 1.8s ease-out infinite',
        }} />
        {/* Inner static ring */}
        <div style={{
          position: 'absolute', inset: '12px',
          borderRadius: '50%',
          border: '1px solid rgba(124,58,237,0.15)',
        }} />
        {/* Spinning arc */}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: '50%',
          border: '3px solid transparent',
          borderTopColor: '#00D9FF',
          borderRightColor: '#7C3AED',
          animation: 'spin 0.85s linear infinite',
          filter: 'drop-shadow(0 0 8px #00D9FF)',
        }} />
        {/* Center dot */}
        <div style={{
          width: '12px', height: '12px',
          borderRadius: '50%',
          background: '#00D9FF',
          boxShadow: '0 0 14px #00D9FF',
        }} />
      </div>

      {/* Typing brand name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minHeight: '48px' }}>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '36px',
          fontWeight: 900,
          letterSpacing: '8px',
          margin: 0,
          background: 'linear-gradient(135deg, #00D9FF, #7C3AED)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          minWidth: '20px',
        }}>
          {text}
        </h1>
        {/* Blinking cursor */}
        <span style={{
          width: '3px',
          height: '32px',
          borderRadius: '999px',
          background: '#ffcc00',
          boxShadow: '0 0 8px #ffcc00',
          animation: 'blink 1s step-end infinite',
          display: 'inline-block',
        }} />
      </div>

      {/* Progress bar */}
      <div style={{
        width: '200px',
        height: '2px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '999px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          borderRadius: '999px',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00D9FF, #7C3AED)',
          boxShadow: '0 0 10px rgba(0,217,255,0.5)',
          transition: 'width 0.05s linear',
        }} />
      </div>

      {/* Status text */}
      <p style={{
        color: 'rgba(255, 255, 255, 0.53)',
        fontSize: '10px',
        letterSpacing: '5px',
        textTransform: 'uppercase',
        margin: 0,
      }}>
        Initializing System...
      </p>

      {/* Keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;