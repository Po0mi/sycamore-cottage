"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const useHeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(
        [
          ".hero-label",
          ".hero-title",
          ".hero-title2",
          ".hero-sub",
          ".hero-cta-row",
          ".hero-actions",
          ".hero-mouse-scroll",
        ],
        { opacity: 0, y: 40 },
      );
      gsap.set(".hero-trust-item", { opacity: 0, y: 20 });
      gsap.set(".hero-trust-div", { opacity: 0 });
      gsap.set(".hero-trust-row", { opacity: 1 });
      gsap.set(".hero-overlay", { opacity: 0 });
      gsap.set(".hero-video", { scale: 1.08 });

      tl.to(".hero-video", { scale: 1, duration: 1.8, ease: "power2.out" })
        .to(
          ".hero-overlay",
          { opacity: 1, duration: 1.2, ease: "power2.out" },
          "<",
        )
        .to(".hero-label", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(".hero-title", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(".hero-title2", { opacity: 1, y: 0, duration: 0.7 }, "-=0.65")
        .to(".hero-sub", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(".hero-cta-row", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(".hero-actions", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(
          ".hero-trust-item",
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3",
        )
        .to(".hero-trust-div", { opacity: 1, duration: 0.4, stagger: 0.1 }, "<")
        .to(".hero-mouse-scroll", { opacity: 1, y: 0, duration: 0.6 }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return { containerRef };
};

export default useHeroAnimation;
