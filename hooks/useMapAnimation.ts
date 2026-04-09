"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useMapAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const detailsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const label = labelRef.current;
    const heading = headingRef.current;
    const details = detailsRef.current;
    const cta = ctaRef.current;

    if (!section || !card) return;

    gsap.set(card, { opacity: 0, x: -60 });
    gsap.set([label, heading], { opacity: 0, y: 20 });
    gsap.set(details, { opacity: 0, x: -30 });
    gsap.set(cta, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none none",
      },
    });

    tl.to(card, { opacity: 1, x: 0, duration: 0.8, ease: "back.out(0.6)" })
      .to(
        label,
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.5",
      )
      .to(
        heading,
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.5",
      )
      .to(
        details,
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.5",
      )
      .to(
        cta,
        { opacity: 1, y: 0, duration: 0.5, ease: "back.out(0.5)" },
        "-=0.5",
      );

    const onEnter = () =>
      gsap.to(cta, { scale: 1.02, duration: 0.2, ease: "power2.out" });
    const onLeave = () =>
      gsap.to(cta, { scale: 1, duration: 0.2, ease: "power2.out" });

    if (cta) {
      cta.addEventListener("mouseenter", onEnter);
      cta.addEventListener("mouseleave", onLeave);
    }

    return () => {
      if (cta) {
        cta.removeEventListener("mouseenter", onEnter);
        cta.removeEventListener("mouseleave", onLeave);
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return { sectionRef, cardRef, labelRef, headingRef, detailsRef, ctaRef };
};

export default useMapAnimation;
