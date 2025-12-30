import "../../../styles/components/layout/header/FirstNav.css";
import logo from "../../../assets/images/logod.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import doctor from "../../../assets/images/Gemini.png";
import RotatingBadge from "../../sections/hero/RotatingBadge";
import RotatingHeadline from "../../sections/hero/RotatingHeadline";
import infoCard from "../../../assets/images/doctbox.png";
import Badge from "../../../assets/images/badge.png";
import TimedReveal from "../../ui/TimedReveal";

function FirstNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.title = "ChronicGPT – Your Personal AI Doctor";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "ChronicGPT is your personal AI doctor helping manage diabetes, hypertension, and weight using real-time clinical insights.";

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://chronicgpt.com/";
  }, []);

  return (
    <div className={`fnav-container ${revealed ? "reveal-done" : ""}`}>
      <div className="divline" />

      <div className="hero-inner">
        <TimedReveal
          className="hero-text"
          delay={100}
        >
          <RotatingHeadline className="rh" />
        </TimedReveal>

        <div className="hero-visual">
          <img src={doctor} alt="Doctor" className="hero-doctor" />

          <TimedReveal delay={300} className="hero-info float-soft" variant="zoom">
            <div >
              <p>Dr Sara Mohan</p>
              <p className="doct">Your AI Doctor</p>
            </div>
          </TimedReveal>
        </div>
      </div>

    <div className="">  <TimedReveal delay={500}>
        <p className="ny">
        Now you can have your own AI Doctor that is always on, always <br/>yours, and outcome focused
        </p>
      </TimedReveal></div>
    </div>
  );
}

export default FirstNav;
