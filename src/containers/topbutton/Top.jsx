import React, {useEffect} from "react";
import "./Top.scss";

export default function Top() {
  function TopEvent() {
    const container = document.getElementById("main-scroll-container");
    if (container) {
      container.scrollTo({top: 0, behavior: "smooth"});
    }
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  useEffect(() => {
    const container = document.getElementById("main-scroll-container");
    const scrollFunction = () => {
      const btn = document.getElementById("topButton");
      if (!btn) return;
      const scrolled =
        (container && container.scrollTop > 120) ||
        document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 120;
      btn.style.visibility = scrolled ? "visible" : "hidden";
    };

    if (container) {
      container.addEventListener("scroll", scrollFunction, {passive: true});
    }
    window.addEventListener("scroll", scrollFunction, {passive: true});
    scrollFunction();

    return () => {
      if (container) {
        container.removeEventListener("scroll", scrollFunction);
      }
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
