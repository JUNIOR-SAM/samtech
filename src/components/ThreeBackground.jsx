import React, { useEffect, useRef } from "react";

const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    window.addEventListener("resize", () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    });

    const FOCAL = 500;
    const TOTAL = 250;
    const BANDS = 10;

    const particles = Array.from({ length: TOTAL }, (_, i) => {
      const band = i % BANDS;
      const bandStart = (band / BANDS) * FOCAL;
      const bandSize = FOCAL / BANDS;
      return {
        x: (Math.random() - 0.5) * W * 4,
        y: (Math.random() - 0.5) * H * 4,
        z: bandStart + Math.random() * bandSize,
        r: Math.random() * 1.4 + 0.3,
        color: Math.random() > 0.5 ? "0,217,255" : "124,58,237",
        speed: Math.random() * 0.5 + 0.7,
      };
    });

    // Use setInterval — immune to network throttling, tab visibility, main thread load
    const loop = setInterval(() => {
      const now = performance.now();

      ctx.fillStyle = "#0A0A0F";
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.z -= 1.1 * p.speed;

        if (p.z <= 1) {
          const band = i % BANDS;
          const bandStart = (band / BANDS) * FOCAL;
          const bandSize = FOCAL / BANDS;
          p.z = bandStart + bandSize * 0.8 + Math.random() * bandSize * 0.2;
          p.x = (Math.random() - 0.5) * W * 4;
          p.y = (Math.random() - 0.5) * H * 4;
          continue;
        }

        const scale = FOCAL / (FOCAL + p.z);
        const sx = W / 2 + p.x * scale;
        const sy = H / 2 + p.y * scale;

        if (sx < -100 || sx > W + 100 || sy < -100 || sy > H + 100) continue;

        const alpha = Math.min(0.88, scale * 0.95);
        const radius = Math.min(p.r * scale * 2.8, 5);
        if (radius < 0.2) continue;

        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${alpha})`;
        ctx.fill();

        if (radius > 1) {
          ctx.beginPath();
          ctx.arc(sx, sy, radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color},${alpha * 0.08})`;
          ctx.fill();
        }
      }
    }, 1000 / 60);

    return () => clearInterval(loop);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
};

export default ThreeBackground;