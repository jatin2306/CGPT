import "../../styles/components/wrappers/Roundbox.css";
import { useEffect, useRef } from "react";
import Hiw from "../sections/how-it-works/HowItWorks";

function Roundbox() {
  const scrollRef = useRef(null);
  const stageRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const stage = stageRef.current;
    const wrapper = wrapperRef.current;
    if (!scrollContainer || !stage || !wrapper) return;

    const headerHeight = 72; // Match --header-height
    const stickyTopPx = window.innerHeight * 0.2 + headerHeight;
    const viewportHeight = window.innerHeight;
    let rafId = null;
    let isActive = false;

    const updateScroll = () => {
      if (!stage || !wrapper || !scrollContainer) return;

      const stageRect = stage.getBoundingClientRect();
      const isVisible = stageRect.bottom > 0 && stageRect.top < viewportHeight * 2;

      if (!isVisible) {
        isActive = false;
        rafId = requestAnimationFrame(updateScroll);
        return;
      }

      isActive = true;
      const freezeDistance = viewportHeight * 5;
      const passedStage = viewportHeight - stageRect.bottom;

      if (passedStage > 0 && passedStage <= freezeDistance) {
        wrapper.classList.add("freeze");
      } else {
        wrapper.classList.remove("freeze");
      }

      const entryStart = viewportHeight;
      const entryEnd = stickyTopPx;
      let entryProgress = (stageRect.top - entryEnd) / (entryStart - entryEnd);
      entryProgress = Math.max(0, Math.min(1, entryProgress));

      const isSticky = stageRect.top <= stickyTopPx - 20;

      if (isSticky) {
        wrapper.classList.add("stuck");
        const totalScrollArea = stageRect.height - viewportHeight;
        const scrollMoved = -(stageRect.top - stickyTopPx);
        let internalProgress = scrollMoved / (totalScrollArea - (viewportHeight - stickyTopPx));
        internalProgress = Math.max(0, Math.min(1, internalProgress));
        const maxInternalScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        scrollContainer.scrollTop = internalProgress * maxInternalScroll;
      } else {
        wrapper.classList.remove("stuck");
        scrollContainer.scrollTop = 0;
      }

      rafId = requestAnimationFrame(updateScroll);
    };

    rafId = requestAnimationFrame(updateScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
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
