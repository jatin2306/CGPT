import "../../styles/components/wrappers/Roundbox.css";
import { useEffect, useRef } from "react";
import Hiw from "../sections/how-it-works/HowItWorks";
import Box10 from "../sections/outcomes/ClinicalOutcomes";

function Roundbox() {
  const scrollRef = useRef(null);
  const stageRef = useRef(null);
  const wrapperRef = useRef(null);

  const requestRef = useRef();
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const currentTranslate = useRef(window.innerHeight * 0.7);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const stage = stageRef.current;
    const wrapper = wrapperRef.current;
    if (!scrollContainer || !stage || !wrapper) return;

    const stickyTopPx = window.innerHeight * 0.2;
    const viewportHeight = window.innerHeight;
    let isActive = false;

    const checkVisibility = () => {
      const rect = stage.getBoundingClientRect();
      const isVisible = rect.bottom > 0 && rect.top < window.innerHeight * 2;
      return isVisible;
    };

    const smoothScroll = () => {
      if (!checkVisibility()) {
        requestRef.current = requestAnimationFrame(smoothScroll);
        return;
      }

      const lerp = 0.1;
      const stageRect = stage.getBoundingClientRect();
      const freezeDistance = viewportHeight * 5;
      const passedStage = viewportHeight - stageRect.bottom;

      if (passedStage > 0 && passedStage <= freezeDistance) {
        if (!wrapper.classList.contains("freeze")) {
          wrapper.classList.add("freeze");
        }
      } else {
        if (wrapper.classList.contains("freeze")) {
          wrapper.classList.remove("freeze");
        }
      }

      const entryStart = viewportHeight;
      const entryEnd = stickyTopPx;

      let entryProgress = (stageRect.top - entryEnd) / (entryStart - entryEnd);
      entryProgress = Math.max(0, Math.min(1, entryProgress));

      const targetT = entryProgress * viewportHeight;
      currentTranslate.current += (targetT - currentTranslate.current) * lerp;
      wrapper.style.transform = `translateY(${currentTranslate.current}px)`;

      const isSticky = stageRect.top <= stickyTopPx - 20;

      if (isSticky) {
        if (!wrapper.classList.contains("stuck")) {
          wrapper.classList.add("stuck");
        }

        const totalScrollArea = stageRect.height - viewportHeight;
        const scrollMoved = -(stageRect.top - stickyTopPx);

        let internalProgress =
          scrollMoved / (totalScrollArea - (viewportHeight - stickyTopPx));
        internalProgress = Math.max(0, Math.min(1, internalProgress));

        const maxInternalScroll =
          scrollContainer.scrollHeight - scrollContainer.clientHeight;

        targetScroll.current = internalProgress * maxInternalScroll;
      } else {
        if (wrapper.classList.contains("stuck")) {
          wrapper.classList.remove("stuck");
        }
        targetScroll.current = 0;
      }

      currentScroll.current += (targetScroll.current - currentScroll.current) * lerp;
      scrollContainer.scrollTop = currentScroll.current;

      requestRef.current = requestAnimationFrame(smoothScroll);
    };

    requestRef.current = requestAnimationFrame(smoothScroll);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section className="sg-stag" ref={stageRef}>
      <section className="sg-wrappe" ref={wrapperRef}>
        <div className="sg-scrol" ref={scrollRef}>
          <Hiw />
        </div>
      </section>
    </section>
  );
}

export default Roundbox;
