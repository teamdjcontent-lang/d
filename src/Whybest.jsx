import { useEffect, useRef } from "react";
import "./Whybest.css";

const reasons = [
  {
    num: "01",
    title: "500+ Clients. 99% Satisfaction.",
    desc: "Our track record speaks for itself. We've helped over 500 businesses across India, UAE and Canada achieve measurable digital success.",
  },
  {
    num: "02",
    title: "Full-Service Under One Roof",
    desc: "From SEO to outdoor advertising, web development to influencer campaigns — you get a unified strategy, not disconnected agencies.",
  },
  {
    num: "03",
    title: "Data-Driven Decisions",
    desc: "Every campaign is backed by analytics. We track, measure, and optimize continuously — no guesswork, only results.",
  },
  {
    num: "04",
    title: "Creativity Meets Technology",
    desc: "Our in-house team of designers, developers, and marketers collaborate to create campaigns that stand out in crowded markets.",
  },
  {
    num: "05",
    title: "Transparent Reporting",
    desc: "Real-time dashboards and weekly reports keep you informed. You always know exactly where your budget is going and what it's delivering.",
  },
  {
    num: "06",
    title: "Global Reach, Local Expertise",
    desc: "Operating in Lucknow, Canada, and UAE — we understand both local market nuances and global digital strategies.",
  },
];

export default function Whybest() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    ref.current?.querySelectorAll(".reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="why-section" id="why-us" ref={ref}>
      <div className="why-inner">
        <div className="why-left">
          <div className="reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">
              Why We Are The <span>Best Digital Marketing</span> Company In India
            </h2>
            <p className="section-sub">
              We don't just run campaigns — we build digital ecosystems that grow with your business.
              Here's what separates Digital Jugglers from the rest.
            </p>
          </div>

          <div className="why-visual reveal">
            <div className="why-circle">
              <div className="why-ring-outer" />
              <div className="why-ring-inner" />
              <div className="why-center">
                <div className="why-percent">99%</div>
                <div className="why-percent-label">Client Satisfaction</div>
              </div>
              {/* Orbiting metrics */}
              <div className="orbit-item orbit-a">500+<br/><small>Clients</small></div>
              <div className="orbit-item orbit-b">9+<br/><small>Years</small></div>
              <div className="orbit-item orbit-c">3<br/><small>Countries</small></div>
            </div>
          </div>
        </div>

        <div className="why-right">
          {reasons.map((r, i) => (
            <div
              className="why-card g-card reveal"
              key={i}
              style={{ transitionDelay: `${(i % 2) * 0.12}s` }}
            >
              <div className="why-num">{r.num}</div>
              <div>
                <h3 className="why-title">{r.title}</h3>
                <p className="why-desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}