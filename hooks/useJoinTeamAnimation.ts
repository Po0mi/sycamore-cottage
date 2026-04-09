"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useJoinTeamAnimation = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const heroOverlayRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const perksRef = useRef<HTMLDivElement[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardPillRef = useRef<HTMLDivElement>(null);
  const cardHeadingRef = useRef<HTMLHeadingElement>(null);
  const cardBodyRef = useRef<HTMLParagraphElement>(null);
  const cardNoteRef = useRef<HTMLParagraphElement>(null);
  const cardCtaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const heroImg = heroImgRef.current;
    const heroOverlay = heroOverlayRef.current;

    if (hero) {
      gsap.set(heroImg, { scale: 1.1 });
      gsap.set(heroOverlay, { opacity: 0 });
      gsap.set([labelRef.current, headingRef.current, subRef.current], {
        opacity: 0,
        y: 20,
      });
      gsap.set(perksRef.current, { opacity: 0, y: 15 });
      gsap.set(cardRef.current, { opacity: 0, y: 30 });
      gsap.set(
        [
          cardPillRef.current,
          cardHeadingRef.current,
          cardBodyRef.current,
          cardNoteRef.current,
          cardCtaRef.current,
        ],
        { opacity: 0, y: 15 },
      );

      const heroTl = gsap.timeline({
        scrollTrigger: { trigger: hero, start: "top 80%", once: true },
      });

      heroTl
        .to(heroImg, { scale: 1, duration: 0.5, ease: "power2.out" })
        .to(
          heroOverlay,
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.5",
        )
        .to(
          [labelRef.current, headingRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(0.5)",
          },
          "-=0.5",
        )
        .to(
          subRef.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2",
        )
        .to(
          perksRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          cardRef.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "back.out(0.5)" },
          "-=0.5",
        )
        .to(
          [cardPillRef.current, cardHeadingRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          [cardBodyRef.current, cardNoteRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          cardCtaRef.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "back.out(0.5)" },
          "-=0.5",
        );
    }

    const cta = cardCtaRef.current;
    const onCtaEnter = () =>
      gsap.to(cta, { scale: 1.02, duration: 0.2, ease: "power2.out" });
    const onCtaLeave = () =>
      gsap.to(cta, { scale: 1, duration: 0.2, ease: "power2.out" });

    if (cta) {
      cta.addEventListener("mouseenter", onCtaEnter);
      cta.addEventListener("mouseleave", onCtaLeave);
    }

    const perkHandlers: Array<{
      el: HTMLElement;
      onEnter: () => void;
      onLeave: () => void;
    }> = [];
    perksRef.current.forEach((perk) => {
      if (!perk) return;
      const onEnter = () =>
        gsap.to(perk, { x: 5, duration: 0.2, ease: "power2.out" });
      const onLeave = () =>
        gsap.to(perk, { x: 0, duration: 0.2, ease: "power2.out" });
      perk.addEventListener("mouseenter", onEnter);
      perk.addEventListener("mouseleave", onLeave);
      perkHandlers.push({ el: perk, onEnter, onLeave });
    });

    return () => {
      if (cta) {
        cta.removeEventListener("mouseenter", onCtaEnter);
        cta.removeEventListener("mouseleave", onCtaLeave);
      }
      perkHandlers.forEach(({ el, onEnter, onLeave }) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return {
    heroRef,
    heroImgRef,
    heroOverlayRef,
    labelRef,
    headingRef,
    subRef,
    perksRef,
    cardRef,
    cardPillRef,
    cardHeadingRef,
    cardBodyRef,
    cardNoteRef,
    cardCtaRef,
  };
};

export default useJoinTeamAnimation;
