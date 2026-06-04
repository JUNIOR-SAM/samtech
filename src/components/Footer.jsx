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
    const BANDS = 10; // More bands for smoother staggering

    // White circles only
    const particles = Array.from({ length: TOTAL }, (_, i) => {
      const band = i % BANDS;
      const bandStart = (band / BANDS) * FOCAL;
      const bandSize = FOCAL / BANDS;
      return {
        x: (Math.random() - 0.5) * W * 4,
        y: (Math.random() - 0.5) * H * 4,
        z: bandStart + Math.random() * bandSize,
        r: Math.random() * 1.4 + 0.3,
        color: "255,255,255", // Always white
        speed: Math.random() * 0.5 + 0.7,
      };
    });

    let lastTs = null;
    let rafId;

    const frame = (ts) => {
      if (lastTs === null) lastTs = ts;
      const delta = Math.min(ts - lastTs, 50); // tighter cap — 50ms max
      lastTs = ts;
      const move = (delta / 1000) * 70;

      // Clear with solid background
      ctx.fillStyle = "#0A0A0F";
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.z -= move * p.speed;

        // Reset to the very back (full depth range) for true infinite loop
        if (p.z <= 1) {
          p.z = FOCAL;
          p.x = (Math.random() - 0.5) * W * 4;
          p.y = (Math.random() - 0.5) * H * 4;
          continue;
        }

        const scale = FOCAL / (FOCAL + p.z);
        const sx = W / 2 + p.x * scale;
        const sy = H / 2 + p.y * scale;

        if (sx < -100 || sx > W + 100 || sy < -100 || sy > H + 100) continue;

        // Hard caps so nothing ever blooms too large
        const alpha = Math.min(0.88, scale * 0.95);
        const radius = Math.min(p.r * scale * 2.8, 5);

        if (radius < 0.2) continue;

        // Core dot
        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${alpha})`;
        ctx.fill();

        // Glow — only for bigger particles
        if (radius > 1) {
          ctx.beginPath();
          ctx.arc(sx, sy, radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color},${alpha * 0.08})`;
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);

    // Resume cleanly after any pause
    const restart = () => {
      lastTs = null;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(frame);
    };

    document.addEventListener("visibilitychange", restart);
    window.addEventListener("focus", restart);
    window.addEventListener("mousemove", restart, { passive: true });
    window.addEventListener("scroll", restart, { passive: true });

    // Tight watchdog — restarts if frozen for >300ms
    const watchdog = setInterval(() => {
      if (lastTs !== null && performance.now() - lastTs > 300) {
        restart();
      }
    }, 300);

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(watchdog);
      document.removeEventListener("visibilitychange", restart);
      window.removeEventListener("focus", restart);
      window.removeEventListener("mousemove", restart);
      window.removeEventListener("scroll", restart);
    };
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
        opacity: "10px",
      }}
    />
  );
};

export default ThreeBackground;