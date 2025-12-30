import React, { useEffect, useRef } from "react";
import "../../../styles/components/sections/outcomes/ClinicalOutcomes.css";
import outcomeStabilize from "../../../assets/images/01.jpg";
import outcomeMornings from "../../../assets/images/02.jpg";
import outcomeSleep from "../../../assets/images/03.jpg";
import outcomeMeals from "../../../assets/images/04.jpg";
import outcomeEnergy from "../../../assets/images/05.jpg";
import outcomeRoutines from "../../../assets/images/06.jpg";
import TimedReveal from "../../ui/TimedReveal";
import ScrollReveal from "../../ui/ScrollReveal";

const data = [
  { title: "Your numbers stabilize", text: "Your glucose, blood pressure, and daily rhythms settle into smoother patterns — fewer spikes, fewer swings, fewer surprises. You know what's happening and why, and your body feels calmer moving through the day.", img: outcomeStabilize },
  { title: "Mornings stop feeling unpredictable", text: "Instead of waking up already behind, you start the day more steady — clear-headed, less groggy, and without the crashes that used to set the tone.", img: outcomeMornings },
  { title: "Sleep becomes restorative", text: "Your AI Doctor helps you adjust your evenings, nutrition, timing, and recovery. You fall asleep easier, wake up less, and start feeling rested in a way you haven't in years.", img: outcomeSleep },
  { title: "Meals stop derailing your day", text: "You quickly learn which foods and timings work for your physiology. Post-meal crashes shrink, late-evening glucose stays quieter, and eating stops feeling like guesswork.", img: outcomeMeals },
  { title: "Energy feels smoother, not spiky", text: "Instead of sharp highs and lows, your days develop a smoother rhythm. Lifting groceries, climbing stairs, focusing at work — everything feels more doable.", img: outcomeEnergy },
  { title: "Healthy routines finally stick", text: "Because your AI Doctor guides you in real time, habits stop slipping through cracks. Hydration, movement, medication timing, sleep routines — they become easier, more automatic, and more consistent.", img: outcomeRoutines },
];

const ClinicalOutcomes = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const lastScroll = useRef(window.scrollY);
  const currentX = useRef(0);
useEffect(() => {
  const targetX = { current: 0 };
  const renderedX = { current: 0 };
  let rafId = null;
  let mounted = true;

  const animate = () => {
    if (!mounted) return;
    if (!cardsRef.current) return;

    const ease = 0.08;
    renderedX.current += (targetX.current - renderedX.current) * ease;

    cardsRef.current.style.transform = `translateX(${-renderedX.current}px)`;

    rafId = requestAnimationFrame(animate);
  };

  const onScroll = () => {
    if (!sectionRef.current || !cardsRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const vh = window.innerHeight;

    const startPoint = vh * 0.06;
    const endPoint = vh * 0.99;

    const isActive = rect.top <= startPoint && rect.bottom >= endPoint;
    if (!isActive) return;

    const maxScroll =
      cardsRef.current.scrollWidth - cardsRef.current.clientWidth;

    targetX.current += (window.scrollY - lastScroll.current) * 1.2;
    lastScroll.current = window.scrollY;

    targetX.current = Math.max(0, Math.min(targetX.current, maxScroll));
  };

  rafId = requestAnimationFrame(animate);
  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    mounted = false;
    cancelAnimationFrame(rafId);
    window.removeEventListener("scroll", onScroll);
  };
}, []);




  return (
    <div className="b10-container">
      <section className="box10" ref={sectionRef}>
        <div className="box10-header">
          <ScrollReveal>
          <h2>Real clinical outcomes, <br />felt in your everyday life</h2></ScrollReveal>
          <ScrollReveal>
          <p>
            You choose one or more improvement programs. Your AI Doctor works in the background every day — helping you feel the changes in ways that matter: steadier energy, calmer mornings, smoother rhythms, and more restorative nights.
          </p>
          </ScrollReveal>
        </div>

        <div className="box10-cards" ref={cardsRef}>
          {data.map((item, index) => (
            <div className="box10-card" key={index}>
              <div className="box10-image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="box10-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        <div className="metrics-photo-layout">
          <div className="metric-pill pill1"><h4>15–30% <span>↓</span></h4><p>Daily glucose variability</p></div>
          <div className="metric-pill pill2"><h4>20–40↑ <small>Mins</small></h4><p>Better sleep per night</p></div>
          <div className="metric-pill pill3"><h4>2–5 <small>Fewer</small></h4><p>Daily energy dips</p></div>
          <div className="metric-pill pill4"><h4>10–25% <span>↓</span></h4><p>Morning BP instability</p></div>
        </div>
      </section>
    </div>
  );
};

export default ClinicalOutcomes;
