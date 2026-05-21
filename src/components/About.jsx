import React from 'react';

const About = () => {
  return (
    <section className="py-28 px-[10%] bg-[#050505]" id="about">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Scaled Down Image Container */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <div className="relative group">
            <div className="relative z-10 w-full max-w-[320px] lg:max-w-[380px]">
              <img 
                src=" image/about.png" 
                alt="Samuel Oyebode" 
                className="rounded-[40px] border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]" 
              />
              {/* Experience Badge */}
              {/* <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-brandBlue px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/30 w-max text-center">
                <p className="text-white font-black text-xl leading-tight">Final Year</p>
                <p className="text-white/70 text-[11px] uppercase tracking-[2px] mt-1 font-bold">CS Student</p>
              </div> */}
            </div>
            {/* Soft Glow behind image */}
            <div className="absolute inset-0 bg-brandBlue/5 blur-[80px] rounded-full z-0"></div>
          </div>
        </div>

        {/* Expanded Content Section (takes 60% of width) */}
        <div className="w-full lg:w-[60%] space-y-8 text-center lg:text-left">
          <div>
            <h4 className="text-brandBlue font-bold tracking-[5px] text-xs uppercase mb-4">Discovery</h4>
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
              About <span className="text-gold">Me</span>
            </h2>
          </div>

          <p className="text-white/60 text-lg lg:text-xl leading-relaxed">
            Hi, I'm <span className="text-white font-bold">Samuel Oyebode</span>. I live at the intersection of technical precision and creative freedom. As a final-year Computer Science student, I've mastered the art of securing networks while simultaneously crafting high-end visual identities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-[#111111] border border-white/5 p-8 rounded-3xl hover:border-brandBlue/40 transition-all text-left">
              <span className="text-3xl mb-4 block">🛡️</span>
              <h5 className="text-gold font-bold text-xl mb-3">Cybersecurity</h5>
              <p className="text-white/50 text-sm leading-relaxed">Focusing on Vulnerability Assessment, Network Security, and Ethical Hacking.</p>
            </div>
            <div className="bg-[#111111] border border-white/5 p-8 rounded-3xl hover:border-brandBlue/40 transition-all text-left">
              <span className="text-3xl mb-4 block">🎨</span>
              <h5 className="text-gold font-bold text-xl mb-3">Creative Design</h5>
              <p className="text-white/50 text-sm leading-relaxed">Specializing in 3D Typography, Brand Identity, and Studio Mockups.</p>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-white/40 italic border-l-4 border-brandBlue pl-6 text-lg py-2">
              "Blending the precision of code with the freedom of design to create secure digital excellence."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;