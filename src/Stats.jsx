import { useEffect, useRef, useState } from "react";
import "./Stats.css";

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients", icon: "😊" },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
  { value: 9, suffix: "+", label: "Years Experience", icon: "🏆" },
  { value: 3, suffix: "", label: "Countries Served", icon: "🌍" },
  { value: 150, suffix: "+", label: "Projects Delivered", icon: "🚀" },
];

function Counter({ target, suffix, started }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const dur = 1800;
    const step = Math.ceil(target / (dur / 16));
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(start);
      if (start >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [started, target]);
  return <span>{val}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div className="stat-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-value">
              <Counter target={s.value} suffix={s.suffix} started={started} />
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}