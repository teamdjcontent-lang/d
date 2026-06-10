import "./Footer.css";

const quickLinks = ["About Us", "Services", "Portfolio", "Blog", "Careers", "Training"];
const services = ["Digital Marketing", "SEO", "Social Media", "Web Development", "Lead Generation", "Digital PR"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-inner">
          <div className="footer-brand">
            <img
              src="https://digitaljugglers.com/wp-content/uploads/2020/03/Untitled-1-1.png"
              alt="Digital Jugglers"
              className="footer-logo"
            />
            <p className="footer-tagline">
              Lucknow's #1 full-service digital marketing agency — building brands that dominate online.
            </p>
            <div className="footer-socials">
              {["f", "in", "tw", "yt"].map((s, i) => (
                <a href="#" key={i} className="social-btn">{s.toUpperCase()}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Offices</h4>
            <div className="office">
              <div className="office-flag">🇮🇳</div>
              <div>
                <strong>India (HQ)</strong>
                <p>5th Floor, Radha Krishna Bhawan, Hazratganj, Lucknow</p>
                <a href="tel:+919453242206">+91 9453242206</a>
              </div>
            </div>
            <div className="office">
              <div className="office-flag">🇨🇦</div>
              <div>
                <strong>Canada</strong>
                <p>Edmonton AB T5H 4E7</p>
                <a href="tel:+15875329596">+1 587-532-9596</a>
              </div>
            </div>
            <div className="office">
              <div className="office-flag">🇦🇪</div>
              <div>
                <strong>UAE</strong>
                <p>Al Raha, Abu Dhabi</p>
                <a href="tel:+971502958836">+971 502958836</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-inner-bottom">
          <p>© 2016–2025 Digital Jugglers — Best Digital Marketing Company | All Rights Reserved</p>
          <p>An initiative by <strong>Crazybrand Bazaar Pvt. Ltd.</strong></p>
        </div>
      </div>
    </footer>
  );
}