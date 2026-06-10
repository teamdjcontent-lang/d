import { useState, useEffect } from "react";
import "./Navbar.css";

const links = ["Home", "Services", "Why Us", "Technologies", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <img
            src="https://digitaljugglers.com/wp-content/uploads/2020/03/Untitled-1-1.png"
            alt="Digital Jugglers"
            className="logo-img"
          />
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
              Get Free Audit
            </a>
          </li>
        </ul>

        <button className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}