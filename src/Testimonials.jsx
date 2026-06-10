import { useState, useEffect, useRef } from "react";
import "./Testimonials.css";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechStartup Lucknow",
    text: "Digital Jugglers transformed our online presence completely. Our website traffic grew 3x in just 4 months. Absolutely phenomenal team!",
    stars: 5,
    avatar: "RS",
  },
  {
    name: "Priya Gupta",
    role: "Founder, Fashion Boutique",
    text: "The social media campaigns they ran for our brand were outstanding. Our Instagram following grew from 2K to 25K and sales followed!",
    stars: 5,
    avatar: "PG",
  },
  {
    name: "Amir Khan",
    role: "Director, Real Estate Co.",
    text: "Best investment we made for our business. Their lead generation campaigns deliver consistent, high-quality leads every single month.",
    stars: 5,
    avatar: "AK",
  },
  {
    name: "Sunita Verma",
    role: "MD, Healthcare Group",
    text: "Professional, creative, and results-driven. The SEO work they did took us from page 5 to page 1 on Google for our key terms.",
    stars: 5,
    avatar: "SV",
  },
  {
    name: "Vikram Singh",
    role: "Owner, Restaurant Chain",
    text: "The WhatsApp chatbot they built for us handles 70% of our customer queries automatically. Saves us hours every day!",
    stars: 5,
    avatar: "VS",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="testi-section" ref={ref}>
      <div className="testi-inner">
        <div className="section-header reveal" style={{ textAlign: "center", margin: "0 auto 64px" }}>
          <span className="section-label">Client Love</span>
          <h2 className="section-title">
            What Our <span>Clients Say</span>
          </h2>
        </div>

        <div className="testi-main reveal">
          <div className="testi-quote">❝</div>
          <div className="testi-body">
            <p className="testi-text">{reviews[active].text}</p>
            <div className="testi-stars">
              {"★".repeat(reviews[active].stars)}
            </div>
            <div className="testi-author">
              <div className="testi-avatar">{reviews[active].avatar}</div>
              <div>
                <div className="testi-name">{reviews[active].name}</div>
                <div className="testi-role">{reviews[active].role}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="testi-dots reveal">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`testi-dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <div className="testi-cards reveal">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`testi-mini g-card ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="mini-stars">{"★".repeat(r.stars)}</div>
              <p className="mini-text">{r.text.slice(0, 80)}...</p>
              <div className="mini-author">
                <div className="mini-avatar">{r.avatar}</div>
                <span>{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}