"use client";

import { useRef, useEffect, MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAboutPageAnimation = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroBgTextRef = useRef<HTMLDivElement>(null);
  const heroLabelRef = useRef<HTMLDivElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroKenseiRef = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const heroStatsRef = useRef<HTMLDivElement>(null);
  const heroStatsItemsRef = useRef<HTMLDivElement[]>([]);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroCqcRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const storyTextRef = useRef<HTMLParagraphElement[]>([]);
  const teamRef = useRef<HTMLDivElement>(null);
  const teamCardsRef = useRef<HTMLDivElement[]>([]);
  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesItemsRef = useRef<HTMLDivElement[]>([]);
  const ctaStripRef = useRef<HTMLDivElement>(null);
  const ctaQuoteRef = useRef<HTMLParagraphElement>(null);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const heroBgText = heroBgTextRef.current;
    const heroLabel = heroLabelRef.current;
    const heroHeading = heroHeadingRef.current;
    const heroKensei = heroKenseiRef.current;
    const heroSub = heroSubRef.current;
    const heroStats = heroStatsRef.current;
    const heroStatsItems = heroStatsItemsRef.current;
    const heroImage = heroImageRef.current;
    const heroCqc = heroCqcRef.current;

    if (hero) {
      gsap.set(heroBgText, { opacity: 0, scale: 0.95 });
      gsap.set([heroLabel, heroHeading, heroKensei, heroSub, heroStats], { opacity: 0, y: 20 });
      gsap.set(heroStatsItems, { opacity: 0, y: 15 });
      gsap.set(heroImage, { opacity: 0, x: 40, scale: 0.98 });
      if (heroCqc) gsap.set(heroCqc, { opacity: 0, y: 15 });

      const heroTl = gsap.timeline({ scrollTrigger: { trigger: hero, start: "top 80%", once: true } });

      heroTl
        .to(heroBgText, { opacity: 0.06, scale: 1, duration: 0.7, ease: "power2.out" })
        .to([heroLabel, heroHeading], { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "back.out(0.5)" }, "-=0.3")
        .to(heroKensei, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
        .to(heroSub, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2")
        .to(heroStats, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, "-=0.15")
        .to(heroStatsItems, { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, ease: "power2.out" }, "-=0.2")
        .to(heroImage, { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "back.out(0.1)" }, "-=0.9")
        .to(heroCqc, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, "-=0.2");
    }

    const story = storyRef.current;
    const storyTexts = storyTextRef.current;
    if (story) {
      gsap.set(storyTexts, { opacity: 0, y: 20 });
      ScrollTrigger.create({
        trigger: story, start: "top 80%", once: true,
        onEnter: () => gsap.to(storyTexts, { opacity: 1, y: 0, duration: 0.4, stagger: 0.12, ease: "power2.out" }),
      });
    }

    const team = teamRef.current;
    const teamCards = teamCardsRef.current;
    if (team) {
      gsap.set(teamCards, { opacity: 0, y: 30 });
      ScrollTrigger.create({
        trigger: team, start: "top 80%", once: true,
        onEnter: () => gsap.to(teamCards, { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "back.out(0.4)" }),
      });
    }

    const values = valuesRef.current;
    const valuesItems = valuesItemsRef.current;
    if (values) {
      gsap.set(valuesItems, { opacity: 0, x: -30 });
      ScrollTrigger.create({
        trigger: values, start: "top 80%", once: true,
        onEnter: () => gsap.to(valuesItems, { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "back.out(0.4)" }),
      });
    }

    const ctaStrip = ctaStripRef.current;
    const ctaQuote = ctaQuoteRef.current;
    const ctaBtn = ctaBtnRef.current;
    if (ctaStrip) {
      gsap.set([ctaQuote, ctaBtn], { opacity: 0, y: 20 });
      ScrollTrigger.create({
        trigger: ctaStrip, start: "top 80%", once: true,
        onEnter: () =>
          gsap.timeline()
            .to(ctaQuote, { opacity: 1, y: 0, duration: 0.4, ease: "back.out(0.5)" })
            .to(ctaBtn, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, "-=0.2"),
      });
    }

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return {
    heroRef, heroBgTextRef, heroLabelRef, heroHeadingRef, heroKenseiRef,
    heroSubRef, heroStatsRef, heroStatsItemsRef, heroImageRef, heroCqcRef,
    contentRef, storyRef, storyTextRef, teamRef, teamCardsRef,
    valuesRef, valuesItemsRef, ctaStripRef, ctaQuoteRef, ctaBtnRef,
  };
};

export default useAboutPageAnimation;