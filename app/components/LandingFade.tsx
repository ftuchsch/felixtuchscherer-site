"use client";

import { useEffect, useRef, type ReactNode } from "react";

type LandingFadeProps = {
  children: ReactNode;
};

export default function LandingFade({ children }: LandingFadeProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const motionQuery = window.matchMedia(
      "(min-width: 981px) and (prefers-reduced-motion: no-preference)",
    );

    if (!root || !motionQuery.matches) return;

    let animationFrame = 0;

    const update = () => {
      animationFrame = 0;

      const viewportHeight = Math.max(window.innerHeight, 1);
      const fadeStart = viewportHeight * 0.08;
      const fadeDistance = viewportHeight * 0.44;
      const progress = Math.max(
        0,
        Math.min(1, (window.scrollY - fadeStart) / fadeDistance),
      );

      root.style.opacity = `${1 - progress}`;
      root.style.transform = `translate3d(0, ${progress * -18}px, 0)`;
      root.style.pointerEvents = progress > 0.9 ? "none" : "auto";
    };

    const handleScroll = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      root.style.removeProperty("opacity");
      root.style.removeProperty("transform");
      root.style.removeProperty("pointer-events");
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="home-intro section-wrap"
      aria-labelledby="intro-heading"
    >
      {children}
    </section>
  );
}
