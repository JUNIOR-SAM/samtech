import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Security Specialist", "Web Developer", "Graphics Designer"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-[#050505] pt-20 px-[10%]" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 w-full">
        
        {/* Left Side: Text */}
        <div className="flex flex-col justify-center space-y-4">
          <h4 className="text-[#007aff] tracking-[4px] text-xs font-bold uppercase animate-pulse">
            Welcome to my creative space
          </h4>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            Hi, I'm <span className="text-[#ffcc00]">Samuel</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-white/80">
            I am <span ref={el} className="text-[#007aff]"></span>
          </h2>
          <p className="text-[#b3b3b3] text-lg max-w-lg leading-relaxed pt-4">
            Blending technical precision with creative freedom. I craft secure, 
            high-end digital experiences for the modern web.
          </p>
          
          <div className="flex gap-4 pt-6">
            <button className="bg-[#007aff] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1">
              View Projects
            </button>
            <button className="border-2 border-[#007aff] text-[#007aff] font-bold py-3 px-8 rounded-full hover:bg-blue-500/10 transition-all hover:-translate-y-1">
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Side: Animated Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[380px] animate-[bounce_15s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-[#007aff]/20 blur-[80px] rounded-full"></div>
            <img 
              src="image/about.png" 
              alt="Samuel" 
              className="relative z-10 w-full rounded-[40px] border border-white/10 grayscale-[10%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;