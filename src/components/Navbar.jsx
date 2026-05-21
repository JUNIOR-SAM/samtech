import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[2000] bg-[#050505]/90 backdrop-blur-xl border-b border-white/7 py-6 transition-all">
      {/* px-[10%] matches the Hero and About sections exactly */}
      <div className="px-[10%] flex justify-between items-center w-full">
        
        <div className="text-2xl font-black tracking-tighter text-white">
          SAM<span className="text-gold">TECH</span>
        </div>

        {/* Desktop Links */}
    <ul className="hidden lg:flex items-center gap-8 text-base font-semibold text-white/90">
  <li className="hover:text-brandBlue transition-all cursor-pointer"><a href="#home">Home</a></li>
  <li className="hover:text-brandBlue transition-all cursor-pointer"><a href="#about">About</a></li>
  <li className="hover:text-brandBlue transition-all cursor-pointer"><a href="#projects">Projects</a></li>
  <li className="bg-brandBlue px-6 py-2.5 rounded-full text-white font-bold shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all ml-4">
    <a href="#contact">Hire Me</a>
  </li>
</ul>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex flex-col gap-1.5 cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-8 h-1 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
          <div className={`w-8 h-1 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-1 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-screen w-full bg-[#050505] flex flex-col justify-center items-center gap-10 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="#home" className="text-3xl font-bold text-white" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" className="text-3xl font-bold text-white" onClick={() => setIsOpen(false)}>About</a>
        <a href="#projects" className="text-3xl font-bold text-white" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" className="text-brandBlue text-3xl font-black" onClick={() => setIsOpen(false)}>Hire Me</a>
      </div>
    </nav>
  );
};

export default Navbar;