import "../../../styles/components/sections/how-it-works/StaticHowItWorks.css";
import hiwImg from "../../../assets/images/hiw1.jpg";
import arrow from "../../../assets/images/Play.png";

function StaticHowItWorks() {
  return (
    <section className="st-home-container">
      <div className="hi-wrapper">
        <div className="hiw-left">
          <div className="hiw-header">
            <h2>How it works</h2>
            <p>
              Your AI Doctor combines three layers of intelligence to give you
              continuous, clinician-guided care.
            </p>
          </div>
          <div className="hiw-divider" />
          <div className="hiw-steps">
            <div className="hiw-step active">
              <span className="hiw-num">01</span>
              <p>
                <strong>Your AI Doctor studies the way your body behaves</strong>
              </p>
              <img src={arrow} className="hiw-arrow" alt=""/>
            </div>

            <div className="hiw-step">
              <span className="hiw-num">02</span>
              <p  style={{opacity:"70%"}}>Behind every insight is real clinical reasoning.</p>
            </div>

            <div className="hiw-step">
              <span className="hiw-num">03</span>
              <p  style={{opacity:"40%"}}>Clear explanations. Simple actions. No jargon.</p>
            </div>
          </div>
          <div className="hiw-divider" />
        </div>
        <div className="hiw-right">
          <div className="hiw-image-card">
            <img src={hiwImg} alt="How it works visual" />

            <div className="hiw-image-overlay">
              <p>
                It watches your sleep quality, meals, glucose swings, hydration, medication timing, activity, and stress patterns. Over time, it builds a living model of your physiology, spotting subtle patterns that even good doctors can’t see between visits. This is how it understands why your numbers move the way they do, and what will help you stabilize them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StaticHowItWorks;
