"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useContactAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const labelLinesRef = useRef<HTMLSpanElement[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null); // ← Added ctaRef
  const detailsContainerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLAnchorElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const statItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const bgText = bgTextRef.current;
    const label = labelRef.current;
    const labelLines = labelLinesRef.current;
    const heading = headingRef.current;
    const cta = ctaRef.current; // ← Added
    const details = detailsRef.current;
    const stats = statsRef.current;
    const statItems = statItemsRef.current;

    if (!section) return;

    gsap.set(bgText, { opacity: 0, scale: 0.9 });
    gsap.set(labelLines, { scaleX: 0, transformOrigin: "center" });
    gsap.set([label, heading, cta], { opacity: 0, y: 30 }); // ← Added cta
    gsap.set(details, { opacity: 0, x: -40 });
    gsap.set(stats, { opacity: 0, y: 30 });
    gsap.set(statItems, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 100%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
    });

    tl.to(bgText, {
      opacity: 0.06,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
    })
      .to(
        labelLines,
        { scaleX: 1, duration: 0.5, stagger: 0.15, ease: "power2.out" },
        "-=0.8",
      )
      .to(
        label,
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.5",
      )
      .to(
        heading,
        { opacity: 1, y: 0, duration: 0.7, ease: "back.out(0.6)" },
        "-=0.5",
      )
      .to(
        cta, // ← Added cta animation
        { opacity: 1, y: 0, duration: 0.5, ease: "back.out(0.5)" },
        "-=0.3",
      )
      .to(
        details,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(0.5)",
        },
        "-=0.3",
      )
      .to(
        stats,
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.5",
      )
      .to(
        statItems,
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.5",
      );

    const hoverHandlers: Array<{
      el: HTMLElement;
      onEnter: () => void;
      onLeave: () => void;
    }> = [];
    details.forEach((detail) => {
      if (!detail) return;
      const onEnter = () =>
        gsap.to(detail, { x: 5, duration: 0.3, ease: "power2.out" });
      const onLeave = () =>
        gsap.to(detail, { x: 0, duration: 0.3, ease: "power2.out" });
      detail.addEventListener("mouseenter", onEnter);
      detail.addEventListener("mouseleave", onLeave);
      hoverHandlers.push({ el: detail, onEnter, onLeave });
    });

    return () => {
      hoverHandlers.forEach(({ el, onEnter, onLeave }) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return {
    sectionRef,
    bgTextRef,
    labelRef,
    labelLinesRef,
    headingRef,
    ctaRef, // ← Added
    detailsContainerRef,
    detailsRef,
    statsRef,
    statItemsRef,
  };
};

export default useContactAnimation;
