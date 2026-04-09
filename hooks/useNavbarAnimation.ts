"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const useNavbarAnimation = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".navbar-logo", { opacity: 0, y: -12 });
      gsap.set(".navbar-link", { opacity: 0, y: -10 });
      gsap.set(".navbar-cta", { opacity: 0, y: -10 });
      gsap.set(".navbar-hamburger", { opacity: 0 });

      const tl = gsap.timeline({
        delay: 1.4,
        defaults: { ease: "power3.out" },
      });

      tl.to(".navbar-logo", { opacity: 1, y: 0, duration: 0.5 })
        .to(
          ".navbar-link",
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.5",
        )
        .to(".navbar-cta", { opacity: 1, y: 0, duration: 0.5 }, "-=0.5")
        .to(".navbar-hamburger", { opacity: 1, duration: 0.4 }, "-=0.5");
    }, navRef);

    return () => ctx.revert();
  }, []);

  return { navRef };
};

export default useNavbarAnimation;
