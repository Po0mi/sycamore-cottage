"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useResidentsAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    const top = topRef.current;
    const strip = stripRef.current;

    if (!section || !top || !strip) return;

    gsap.set(top, { opacity: 0, y: 40 });
    gsap.set(strip, { opacity: 0 });

    ScrollTrigger.create({
      trigger: section,
      start: "top 70%",
      onEnter: () => {
        gsap.to(top, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
        gsap.to(strip, {
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
        });
      },
    });

    const speed = 0.5;

    const scroll = () => {
      if (!pausedRef.current) {
        strip.scrollLeft += speed;
        if (strip.scrollLeft >= strip.scrollWidth - strip.clientWidth) {
          strip.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(scroll);
    };

    rafRef.current = requestAnimationFrame(scroll);

    const pause = () => {
      pausedRef.current = true;
    };
    const resume = () => {
      pausedRef.current = false;
    };

    strip.addEventListener("mouseenter", pause);
    strip.addEventListener("mouseleave", resume);
    strip.addEventListener("touchstart", pause);
    strip.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(rafRef.current);
      strip.removeEventListener("mouseenter", pause);
      strip.removeEventListener("mouseleave", resume);
      strip.removeEventListener("touchstart", pause);
      strip.removeEventListener("touchend", resume);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return { sectionRef, topRef, stripRef };
};

export default useResidentsAnimation;
