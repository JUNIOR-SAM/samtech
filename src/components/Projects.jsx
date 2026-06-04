import React, { useState } from "react";

const Projects = () => {
  const cyberWork = [
    {
      title: "Vulnerability Assessment System",
      cat: "Cybersecurity",
      image: "/image/vulnerability.png",
      link: "#",
      tags: ["Nmap", "Metasploit", "Python"],
      icon: "🛡️",
    },
    {
      title: "Reconnaissance Lab",
      cat: "Cybersecurity",
      image: "/image/recon.png",
      link: "#",
      tags: ["OSINT", "Linux", "Security"],
      icon: "🔍",
    },
  ];

  const webWork = [
    {
      title: "Market Watch",
      cat: "Full-Stack",
      image: "/image/marketwatch.png",
      link: "https://marketwatch-brown.vercel.app",
      tags: ["React", "Firebase"],
    },
    {
      title: "SamFlix",
      cat: "UI/UX Clone",
      image: "/image/samflix.png",
      link: "https://junior-sam.github.io/SamFlix/",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      title: "Sam Quiz App",
      cat: "Web App",
      image: "/image/samquiz.png",
      link: "https://junior-sam.github.io/SamQuiz-App/",
      tags: ["React", "API"],
    },
    {
      title: "Sam-Cart",
      cat: "E-commerce",
      image: "/image/samcart.png",
      link: "https://junior-sam.github.io/Sam-Cart/",
      tags: ["Frontend", "State"],
    },
    {
      title: "Calculation Table",
      cat: "Utility",
      image: "/image/cal-table.png",
      link: "https://junior-sam.github.io/Calculation-table/",
      tags: ["JS", "Algorithms"],
    },
    {
      title: "A-Loop System",
      cat: "Logic Tool",
      image: "/image/loop.png",
      link: "https://a-loop-system.vercel.app/",
      tags: ["Vite", "Automation"],
    },
  ];

  const [showAllWeb, setShowAllWeb] = useState(false);
  const visibleWeb = showAllWeb ? webWork : webWork.slice(0, 3);

  const ProjectCard = ({ p }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#0E0E18",
          border: hovered
            ? "1px solid rgba(0,217,255,0.35)"
            : "1px solid rgba(255,255,255,0.07)",
          borderRadius: "24px",
          overflow: "hidden",
          transform: hovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 24px 60px rgba(0,217,255,0.1)"
            : "0 4px 20px rgba(0,0,0,0.3)",
          transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Image area */}
        <div
          style={{
            position: "relative",
            height: "200px",
            overflow: "hidden",
            background: "#0A0A14",
          }}
        >
          {p.image ? (
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: hovered ? "scale(1.08)" : "scale(1)",
                transition: "transform 0.6s ease",
                opacity: hovered ? 1 : 0.75,
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "3rem" }}>{p.icon || "💻"}</span>
            </div>
          )}
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, #0E0E18 0%, transparent 60%)",
            }}
          ></div>
          {/* Category badge */}
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              background: "rgba(0,217,255,0.1)",
              border: "1px solid rgba(0,217,255,0.25)",
              color: "#00D9FF",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "999px",
            }}
          >
            {p.cat}
          </div>
        </div>

        {/* Card body */}
        <div
          style={{
            padding: "20px 22px 22px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <h3
            style={{
              color: hovered ? "#ffcc00" : "white",
              fontSize: "18px",
              fontWeight: 700,
              fontFamily: "'Syne', sans-serif",
              marginBottom: "12px",
              transition: "color 0.3s ease",
            }}
          >
            {p.title}
          </h3>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "20px",
            }}
          >
            {p.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  padding: "3px 10px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "13px",
              borderRadius: "14px",
              background: hovered
                ? "linear-gradient(135deg, #00D9FF, #7C3AED)"
                : "rgba(0,217,255,0.06)",
              border: hovered
                ? "1px solid transparent"
                : "1px solid rgba(0,217,255,0.15)",
              color: hovered ? "white" : "#00D9FF",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: hovered ? "0 8px 30px rgba(0,217,255,0.25)" : "none",
            }}
          >
            Visit Project
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  };

  const SectionHeading = ({ sub, title, accent }) => (
    <div style={{ marginBottom: "40px" }}>
      <p
        style={{
          color: "#00D9FF",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "5px",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        {sub}
      </p>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 900,
          color: "white",
          lineHeight: 1.1,
        }}
      >
        {title} <span style={{ color: "#ffcc00" }}>{accent}</span>
      </h2>
    </div>
  );

  return (
    <section
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
      id="projects"
    >
      <SectionHeading sub="Security Labs" title="Cyber" accent="Security" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
          marginBottom: "80px",
        }}
      >
        {cyberWork.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>

      <SectionHeading sub="Development" title="Web &" accent="Apps" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {visibleWeb.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>

      <div
        style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
      >
        <button
          onClick={() => setShowAllWeb(!showAllWeb)}
          style={{
            padding: "14px 40px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "transparent",
            color: "white",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "white";
            e.currentTarget.style.color = "#0A0A0F";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "white";
          }}
        >
          {showAllWeb ? "Show Less ↑" : "See More Projects ↓"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
