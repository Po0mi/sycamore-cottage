"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAboutAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-image-bleed",
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".about-label",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".about-heading-wrap",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-heading-wrap",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".about-sub",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-sub",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".about-feature-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".about-features",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return { sectionRef };
};

export default useAboutAnimation;
