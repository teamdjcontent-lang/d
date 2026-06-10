import { useEffect, useRef } from "react";
import "./Hero.css";

const words = ["Marketing", "Branding", "Growth", "Results"];

export default function Hero() {
  const wordRef = useRef(null);
  const canvasRef = useRef(null);

  // Word cycling animation
  useEffect(() => {
    let idx = 0;
    const el = wordRef.current;
    if (!el) return;

    const cycle = () => {
      el.classList.remove("in");
      el.classList.add("out");
      setTimeout(() => {
        idx = (idx + 1) % words.length;
        el.textContent = words[idx];
        el.classList.remove("out");
        el.classList.add("in");
      }, 400);
    };

    const id = setInterval(cycle, 2500);
    return () => clearInterval(id);
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? "#E48027" : "#1690C9",
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // Draw connections
      ctx.globalAlpha = 0.05;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#1690C9";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="grid-bg" />

      {/* 3D Globe / Ring decorations */}
      <div className="hero-rings" aria-hidden="true">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
        <div className="ring-dot dot-1" />
        <div className="ring-dot dot-2" />
        <div className="ring-dot dot-3" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Lucknow's #1 Digital Marketing Agency
        </div>

        <h1 className="hero-headline">
          We Drive Digital
          <br />
          <span className="word-cycle" ref={wordRef}>Marketing</span>
          <br />
          That <span className="gradient-text">Converts</span>
        </h1>

        <p className="hero-sub">
          Full-service digital marketing, branding & web development — 
          helping businesses across India, UAE & Canada grow fast.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Get Free Audit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#services" className="btn-outline">Explore Services</a>
        </div>

        <div className="hero-trust">
          <div className="trust-item">
            <strong>500+</strong>
            <span>Clients Served</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <strong>9+</strong>
            <span>Years Experience</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <strong>3</strong>
            <span>Countries</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}