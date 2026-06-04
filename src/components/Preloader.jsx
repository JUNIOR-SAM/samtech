import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = 'SAMTECH';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 180);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(progressInterval); return 100; }
        return prev + 2;
      });
    }, 80);

    const fadeTimer = setTimeout(() => setFadeOut(true), 4000);
    const doneTimer = setTimeout(() => onComplete(),5000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col justify-center items-center gap-10"
      style={{
        background: '#0A0A0F',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Spinning ring */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div
          className="absolute inset-0 rounded-full border border-[#00D9FF]/10 animate-ping"
          style={{ animationDuration: '1.8s' }}
        ></div>
        <div className="absolute inset-3 rounded-full border border-[#7C3AED]/15"></div>
        <div
          className="absolute inset-0 rounded-full border-[3px] border-transparent animate-spin"
          style={{
            borderTopColor: '#00D9FF',
            borderRightColor: '#7C3AED',
            animationDuration: '0.85s',
            filter: 'drop-shadow(0 0 8px #00D9FF)',
          }}
        ></div>
        <div
          className="w-3 h-3 rounded-full"
          style={{ background: '#00D9FF', boxShadow: '0 0 14px #00D9FF' }}
        ></div>
      </div>

      {/* Typing brand name */}
      <div className="flex items-center gap-2">
        <h1
          className="text-4xl font-black tracking-[8px]"
          style={{
            fontFamily: "'Syne', sans-serif",
            background: 'linear-gradient(135deg, #00D9FF, #7C3AED)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {text}
        </h1>
        <span
          className="w-[3px] h-8 rounded-full animate-pulse"
          style={{ background: '#ffcc00', boxShadow: '0 0 8px #ffcc00' }}
        ></span>
      </div>

      {/* Progress bar */}
      <div className="w-52 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #00D9FF, #7C3AED)',
            boxShadow: '0 0 10px rgba(0,217,255,0.5)',
          }}
        ></div>
      </div>

      <p className="text-white text-[10px] tracking-[5px] uppercase">
        Initializing System...
      </p>
    </div>
  );
};

export default Preloader;