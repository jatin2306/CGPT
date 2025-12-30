import "../../../styles/components/sections/hero/Hero.css";
import doctor from "../../../assets/images/doctorimage.png";
import infoCard from "../../../assets/images/doctbox.png";
import RotatingHeadline from "./RotatingHeadline";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <RotatingHeadline />
          <p>
            Now you can have your own AI Doctor that is always on, always yours and outcome focused
          </p>
        </div>
        <div className="hero-visual">
          <img src={doctor} alt="Doctor" className="hero-doctor" />
          <img src={infoCard} alt="Doctor info" className="hero-info" />
        </div>
      </div>
    </section>
  );
}
