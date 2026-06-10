import { useEffect, useRef } from "react";
import "./Services.css";

const services = [
  {
    icon: "📈",
    title: "Digital Marketing",
    desc: "Full-range online marketing tools and services to boost your business visibility and revenue.",
    color: "#E48027",
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    desc: "White-hat on-page and off-page SEO to improve search rankings and drive organic traffic.",
    color: "#1690C9",
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Creative strategies to grow your brand, engagement, and followers across all platforms.",
    color: "#E48027",
  },
  {
    icon: "💻",
    title: "Website Development",
    desc: "Ultra-modern responsive websites with the latest frameworks and technologies.",
    color: "#1690C9",
  },
  {
    icon: "🎯",
    title: "Lead Generation",
    desc: "Optimize your marketing strategy to generate high-converting leads and improve ROI.",
    color: "#E48027",
  },
  {
    icon: "📣",
    title: "Digital PR",
    desc: "Build a strong online reputation with strategic press coverage and crisis management.",
    color: "#1690C9",
  },
  {
    icon: "🤖",
    title: "WhatsApp Chatbot",
    desc: "Automate customer experiences and drive growth using AI-powered WhatsApp solutions.",
    color: "#E48027",
  },
  {
    icon: "🎬",
    title: "Video Marketing",
    desc: "Engage your audience with optimized video content that builds brand awareness.",
    color: "#1690C9",
  },
  {
    icon: "🌟",
    title: "Influencer Marketing",
    desc: "Strategic creator collaborations that go beyond posts — building real brand affinity.",
    color: "#E48027",
  },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const cards = ref.current?.querySelectorAll(".reveal");
    cards?.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="services-section" id="services" ref={ref}>
      <div className="services-inner">
        <div className="section-header reveal">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Services That <span>Drive Growth</span>
          </h2>
          <p className="section-sub">
            From strategy to execution — we handle your entire digital presence
            so you can focus on running your business.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              className="service-card g-card reveal"
              key={i}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="service-icon-wrap" style={{ background: `${s.color}18` }}>
                <span className="service-icon">{s.icon}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-link">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}