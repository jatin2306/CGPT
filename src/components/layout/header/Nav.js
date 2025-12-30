import "../../../styles/components/layout/header/nav.css";
import logo from "../../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Nav({ starOn = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(339);

  const starItems = Array.isArray(starOn) ? starOn : [starOn];

  const handleNavClick = (e) => {
    // Close mobile menu if open
    setMenuOpen(false);
  };

  useEffect(() => {
    const shrinkDistance = 150;
    const maxHeight = 339;

    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    const handleScroll = () => {
      const minHeight = window.innerHeight * 0.22;
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / shrinkDistance, 1);
      const newHeight = maxHeight - (maxHeight - minHeight) * progress;
      setNavHeight(newHeight);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Star = () => (
    <span className="gradient-text" aria-hidden="true">✦</span>
  );

  return (
    <nav className="nav-container">
      <div className="nav-sticky" style={{ height: `${navHeight}px` }}>
        <header className="home-header home-h">
          <button
            className="hamburger ham"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <NavLink to="/">
            <img src={logo} alt="ChronicGPT logo" className="logo" />
          </NavLink>

          <div className="nav-links">
            <NavLink to="/" end className="nav-item item" onClick={handleNavClick}>
              {starItems.includes("home") && <Star />}
              Home
            </NavLink>
            <NavLink to="/trust" className="nav-item item" onClick={handleNavClick}>
              {starItems.includes("trust") && <Star />}
              Safeguards
            </NavLink>
            <NavLink to="/journey" className="nav-item item" onClick={handleNavClick}>
              {starItems.includes("journey") && <Star />}
              How it works
            </NavLink>
          </div>
        </header>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={handleNavClick}>Home</NavLink>
          <NavLink to="/trust" onClick={handleNavClick}>Trust</NavLink>
          <NavLink to="/journey" onClick={handleNavClick}>Journey</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;
