import { useEffect, useRef } from "react";
import "../../../styles/components/sections/safeguards/StaticSafeguards.css";
import Try from "./Safeguards";
import { useState } from "react";
import Sample from "../../../pages/Sample";

function StaticSafeguards() {
  const scrollRef = useRef(null);
  const stageRef = useRef(null);
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);

  const requestRef = useRef();
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const stickyStartTime = useRef(null);
  const scrollStartPos = useRef(null);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const stage = stageRef.current;
    const wrapper = wrapperRef.current;

    if (!scrollContainer || !stage || !wrapper) return;

      const smoothScroll = () => {
      const lerp = 0.40;
      currentScroll.current += (targetScroll.current - currentScroll.current) * lerp;
      scrollContainer.scrollTop = currentScroll.current;

      if (currentScroll.current > 100) {
        headerRef.current?.classList.add("no-background");
      } else {
        headerRef.current?.classList.remove("no-background");
      }

      requestRef.current = requestAnimationFrame(smoothScroll);
    };

    const handleGlobalScroll = () => {
      const stageRect = stage.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      const stickyThreshold = window.innerHeight * 0.22;
      const isAtStickyPoint = stageRect.top <= stickyThreshold;

      if (!isAtStickyPoint) {
        targetScroll.current = 0;
        stickyStartTime.current = null;
        scrollStartPos.current = null;
        return;
      }

      if (!stickyStartTime.current) {
        stickyStartTime.current = Date.now();
      }

      const elapsed = Date.now() - stickyStartTime.current;

      if (elapsed < 500) {
        targetScroll.current = 0;
        scrollStartPos.current = window.scrollY; 
        return;
      }

      const currentPageY = window.scrollY;
      const distanceScrolledSinceTimerEnded = currentPageY - scrollStartPos.current;
      
     const travel = stageRect.height - wrapperRect.height;
let progress = travel > 0 ? distanceScrolledSinceTimerEnded / travel : 0;
progress = Math.max(0, Math.min(1, progress));


      const maxInternalScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      targetScroll.current = progress * maxInternalScroll;
    };

    window.addEventListener("scroll", handleGlobalScroll, { passive: true });
    requestRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      window.removeEventListener("scroll", handleGlobalScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  return (
    <section className="sg-stages" ref={stageRef}>
      <section className="sg-wrapper" ref={wrapperRef}>
        <div className="sg-scroll" ref={scrollRef}>
          <div className="sg-header" ref={headerRef}>
            <h2>Safeguards you deserve</h2>
            <p>Your AI Doctor is designed with multiple layers of protection to ensure your safety, privacy, and the highest standard of care.</p>
          </div>
         <Sample />
          <Try />

          <section className="box190" style={{opacity:"0"}}>
            
          </section>
        </div>
      </section>
    </section>
  );
}

export default StaticSafeguards;
