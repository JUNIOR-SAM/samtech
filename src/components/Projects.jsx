import React, { useState } from 'react';
import marketwatchImg from '/image/marketwatch.png';
import samflixImg from '/image/samflix.png';
import samquizImg from '/image/samquiz.png';
import samcartImg from '/image/samcart.png';
import calTableImg from '/image/cal-table.png';
import loopImg from '/image/loop.png';


const Projects = () => {
  // 1. Your Cybersecurity projects stay at the top
  const cyberSecurityWork = [
    {
      title: "Vulnerability Assessment System",
      cat: "Cybersecurity",
      image: "image/vulnerability.png", // Add your screenshot here
      link: "#", 
      tags: ["Nmap", "Metasploit", "Python"]
    },
    {
      title: "Reconnaissance Lab",
      cat: "Cybersecurity",
      image: "image/recon.png", // Add your screenshot here
      link: "#",
      tags: ["OSINT", "Linux", "Security"]
    }
  ];

  // 2. Your Web Development projects
  const webWork = [
    {
      title: "Market Watch",
      cat: "Full-Stack",
      image: "image/marketwatch.png",
      link: "https://marketwatch-brown.vercel.app", 
      tags: ["React", "Firebase"]
    },
    {
      title: "SamFlix",
      cat: "UI/UX Clone",
      image: "image/samflix.png",
      link: "https://junior-sam.github.io/SamFlix/",
      tags: ["HTML", "CSS", "JS"]
    },
    {
      title: "Sam Quiz App",
      cat: "Web App",
      image: "image/samquiz.png",
      link: "https://sam-quiz-app.vercel.app",
      tags: ["React", "API"]
    },
    {
      title: "Sam-Cart",
      cat: "E-commerce",
      image: "image/samcart.png",
      link: "https://junior-sam.github.io/Sam-Cart/",
      tags: ["Frontend", "State"]
    },
    {
      title: "Calculation Table",
      cat: "Utility",
      image: "image/cal-table.png",
      link: "https://junior-sam.github.io/Calculation-table/",
      tags: ["JS", "Algorithms"]
    },
    {
      title: "A-Loop System",
      cat: "Logic Tool",
      image: "image/loop.png",
      link: "https://a-loop-system.vercel.app/",
      tags: ["Vite", "Automation"]
    },
  ];

  // State to handle the "See More" toggle
  const [showAllWeb, setShowAllWeb] = useState(false);
  const visibleWebWork = showAllWeb ? webWork : webWork.slice(0, 3);

  // Reuse your card design so we don't repeat code
  const ProjectCard = ({ p }) => (
    <div className="group bg-[#111111] border border-white/5 p-5 rounded-[40px] hover:border-brandBlue/30 transition-all duration-500 flex flex-col">
      <div className="h-60 rounded-[30px] mb-6 overflow-hidden border border-white/5 bg-[#1a1a1a] relative">
        {p.image ? (
          <>
            <img 
              src={p.image} 
              alt={p.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/5 italic text-lg font-medium">Preview Coming Soon</div>
        )}
      </div>
      
      <div className="px-3 flex-grow">
        <span className="text-brandBlue text-[11px] font-bold uppercase tracking-[2px]">{p.cat}</span>
        <h3 className="text-white text-2xl font-bold mt-1 group-hover:text-gold transition-colors">{p.title}</h3>
        <div className="flex flex-wrap gap-2 mt-5">
          {p.tags.map((tag, index) => (
            <span key={index} className="text-[10px] bg-white/5 text-white/50 px-4 py-1.5 rounded-full border border-white/5 font-medium">{tag}</span>
          ))}
        </div>
      </div>

      <a 
        href={p.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-8 flex items-center justify-center gap-3 bg-white/5 hover:bg-brandBlue text-white text-sm font-bold py-5 rounded-[20px] transition-all group/btn active:scale-95 shadow-xl hover:shadow-blue-500/20"
      >
        Visit Project
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );

  return (
    <section className="py-24 px-[10%] bg-[#050505]" id="projects">
      {/* SECTION 1: CYBERSECURITY */}
      <div className="mb-12">
        <h4 className="text-brandBlue font-bold tracking-[5px] text-xs uppercase mb-4 text-center lg:text-left">Security Labs</h4>
        <h2 className="text-4xl lg:text-5xl font-black text-white text-center lg:text-left">Cyber <span className="text-gold">Security</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {cyberSecurityWork.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>

      {/* SECTION 2: WEB DEVELOPMENT */}
      <div className="mb-12">
        <h4 className="text-brandBlue font-bold tracking-[5px] text-xs uppercase mb-4 text-center lg:text-left">Development</h4>
        <h2 className="text-4xl lg:text-5xl font-black text-white text-center lg:text-left">Web & <span className="text-gold">Apps</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleWebWork.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>

      {/* See More Button */}
      <div className="mt-16 flex justify-center">
        <button 
          onClick={() => setShowAllWeb(!showAllWeb)}
          className="px-10 py-4 border border-white/10 rounded-full text-white font-bold hover:bg-white hover:text-black transition-all active:scale-95"
        >
          {showAllWeb ? "Show Less" : "See More Projects"}
        </button>
      </div>
    </section>
  );
};

export default Projects;