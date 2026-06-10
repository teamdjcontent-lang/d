import { useEffect, useRef } from "react";
import "./Technologies.css";

const techs = [
  { name: "React", icon: "⚛️", color: "#61DAFB", desc: "Modern UI" },
  { name: "Node.js", icon: "🟢", color: "#68A063", desc: "Backend" },
  { name: "Laravel", icon: "🔴", color: "#FF2D20", desc: "PHP Framework" },
  { name: "WordPress", icon: "🔵", color: "#21759B", desc: "CMS" },
  { name: "PHP", icon: "🐘", color: "#777BB4", desc: "Server-side" },
  { name: "MySQL", icon: "🗄️", color: "#4479A1", desc: "Database" },
  { name: "Next.js", icon: "▲", color: "#fff", desc: "SSR/SSG" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", desc: "NoSQL DB" },
  { name: "AWS", icon: "☁️", color: "#FF9900", desc: "Cloud" },
  { name: "Docker", icon: "🐳", color: "#2496ED", desc: "DevOps" },
  { name: "Flutter", icon: "🦋", color: "#54C5F8", desc: "Mobile" },
  { name: "Figma", icon: "🎨", color: "#F24E1E", desc: "Design" },
];

export default function Technologies() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="tech-section" id="technologies" ref={ref}>
      <div className="tech-inner">
        <div className="section-header reveal" style={{ textAlign: "center", margin: "0 auto 64px" }}>
          <span className="section-label">Our Stack</span>
          <h2 className="section-title">
            Technologies We <span>Master</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            We work with the best tools and frameworks to build fast, scalable, and beautiful
            digital products that power your growth.
          </p>
        </div>

        <div className="tech-grid">
          {techs.map((t, i) => (
            <div
              className="tech-card reveal"
              key={i}
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
            >
              <div
                className="tech-icon-wrap"
                style={{
                  background: `${t.color}15`,
                  boxShadow: `0 0 30px ${t.color}10`,
                }}
              >
                <span className="tech-icon">{t.icon}</span>
              </div>
              <div className="tech-name">{t.name}</div>
              <div className="tech-desc">{t.desc}</div>
              <div className="tech-glow" style={{ background: t.color }} />
            </div>
          ))}
        </div>

        {/* Scroll ticker */}
        <div className="tech-ticker reveal">
          <div className="ticker-track">
            {[...techs, ...techs].map((t, i) => (
              <div className="ticker-item" key={i}>
                <span>{t.icon}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}