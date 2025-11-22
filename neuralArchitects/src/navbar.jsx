import { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../WhatsApp Image 2025-11-16 at 4.04.48 PM.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo-wrapper">
            <img
              src={logo}
              alt="Neural Architectures Logo"
              className="logo"
            />
            <div className="logo-glow"></div>
          </div>
          <span className="site-name">
            Neural<span className="site-name-accent">Architectures</span>
          </span>
        </div>

        <nav className={`navbar-right ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#blog" className="nav-link">Blog</a></li>
            <li><a href="#contact" className="nav-link nav-link-cta">Contact</a></li>
          </ul>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
