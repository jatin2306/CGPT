import "../../../styles/components/layout/header/Header.css";
import darkLogo from "../../../assets/images/logo.png";
import lightLogo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [noBorder, setNoBorder] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [invert, setInvert] = useState(false);
  const [noBackground, setNoBackground] = useState(true); // Always show black background
  const [heroMode, setHeroMode] = useState(false);

  const handleNavClick = (e) => {
    // Close mobile menu if open
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const invertThreshold = window.innerHeight * 0.50;
    const heroThreshold = window.innerHeight * 2;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      setInvert(scrollY >= invertThreshold);
      setNoBackground(true);
      setHeroMode(scrollY >= heroThreshold);
      setNoBorder(scrollY >= vh && scrollY < vh * 3.5);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`global-header 
    ${invert ? "invert" : ""} 
    ${noBackground ? "no-background" : ""} 
    ${heroMode ? "hero-header" : ""}
    ${noBorder ? "no-border" : ""}
  `}
    >
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <img src={invert ? lightLogo : darkLogo} alt="logo" className="logos" />
      <nav className="nav-links">
        <NavLink to="/" end style={{ color: "white" }} className="nav-item" onClick={handleNavClick}>
          <span className="nav-icon gradient-text">✦</span>
          <span className="nav-text">Home</span>
        </NavLink>
        <NavLink style={{ color: "white" }} to="/trust" className="nav-item" onClick={handleNavClick}>Safeguards</NavLink>
        <NavLink style={{ color: "white" }} to="/journey" className="nav-item" onClick={handleNavClick}>How it works</NavLink>
      </nav>
      {menuOpen && (
        <nav className="mobile-menu">
          <NavLink style={{ color: "white" }} to="/" onClick={handleNavClick}>Home</NavLink>
          <NavLink style={{ color: "white" }} to="/trust" onClick={handleNavClick}>Safeguards</NavLink>
          <NavLink style={{ color: "white" }} to="/journey" onClick={handleNavClick}>How it works</NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
