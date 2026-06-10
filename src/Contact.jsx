import { useRef, useEffect, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const ref = useRef(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="contact-inner">
        <div className="contact-left reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Ready To <span>Grow Your</span> Business?
          </h2>
          <p className="section-sub">
            Get a free digital audit from Lucknow's top digital marketing agency. 
            We'll review your online presence and show you exactly where growth is hiding.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <div className="info-label">Head Office</div>
                <div className="info-val">5th Floor, Radha Krishna Bhawan, Hazratganj, Lucknow – 226001</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <div className="info-label">Call Us</div>
                <div className="info-val">+91 9453242206 | 0522-4027181</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <div className="info-label">Email</div>
                <div className="info-val">info@digitaljugglers.com</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🌍</div>
              <div>
                <div className="info-label">Also In</div>
                <div className="info-val">Canada 🇨🇦 | UAE 🇦🇪</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right reveal">
          <div className="contact-form-card">
            <h3 className="form-heading">Get Your Free Audit</h3>
            {sent ? (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <div>Thank you! We'll reach out within 24 hours.</div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="Rahul Sharma" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="rahul@company.com" required />
                </div>
                <div className="form-group">
                  <label>Business / Website</label>
                  <input type="text" placeholder="yourwebsite.com" />
                </div>
                <div className="form-group">
                  <label>Service You Need</label>
                  <select required>
                    <option value="">Select a service...</option>
                    <option>Digital Marketing</option>
                    <option>SEO Optimization</option>
                    <option>Social Media Marketing</option>
                    <option>Website Development</option>
                    <option>Lead Generation</option>
                    <option>Complete Digital Audit</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell Us About Your Goal</label>
                  <textarea rows="3" placeholder="I want to grow my business online by..." />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send My Request
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}