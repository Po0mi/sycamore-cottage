"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAboutAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Responsive animations using matchMedia
      gsap.matchMedia().add("(min-width: 768px)", () => {
        // Desktop animations
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        });

        // Animate image bleed
        tl.fromTo(
          ".about-image-bleed",
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5",
        );

        // Animate label
        tl.fromTo(
          ".about-label",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.8",
        );

        // Animate heading
        tl.fromTo(
          ".about-heading-wrap",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(0.5)",
          },
          "-=0.5",
        );

        // Animate sub text
        tl.fromTo(
          ".about-sub",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5",
        );

        // Animate accordion items with stagger
        tl.fromTo(
          ".about-feature-item",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.4",
        );

        return () => {
          ScrollTrigger.getAll().forEach((st) => {
            if (st.vars?.trigger === sectionRef.current) {
              st.kill();
            }
          });
        };
      });

      gsap.matchMedia().add("(max-width: 767px)", () => {
        // Mobile animations — faster, reduced motion
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 15%",
            toggleActions: "play none none none",
          },
        });

        // Animate label (mobile)
        tl.fromTo(
          ".about-label",
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
        );

        // Animate heading (mobile)
        tl.fromTo(
          ".about-heading-wrap",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(0.4)",
          },
          "-=0.3",
        );

        // Animate sub text (mobile)
        tl.fromTo(
          ".about-sub",
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3",
        );

        // Animate accordion items with stagger (mobile)
        tl.fromTo(
          ".about-feature-item",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.3",
        );

        return () => {
          ScrollTrigger.getAll().forEach((st) => {
            if (st.vars?.trigger === sectionRef.current) {
              st.kill();
            }
          });
        };
      });

      // Hover animations for accordion items
      const featureItems = document.querySelectorAll(".about-feature-item");
      featureItems.forEach((item) => {
        const trigger = item.querySelector(".about-feature-trigger");
        if (!trigger) return;

        const onMouseEnter = () => {
          const index = item.querySelector(".about-feature-index");
          if (index) {
            gsap.to(index, {
              color: "rgba(37, 99, 235, 0.5)",
              duration: 0.2,
              ease: "power2.out",
            });
          }
        };

        const onMouseLeave = () => {
          const index = item.querySelector(".about-feature-index");
          if (index) {
            gsap.to(index, {
              color: "rgba(37, 99, 235, 0.2)",
              duration: 0.2,
              ease: "power2.out",
            });
          }
        };

        trigger.addEventListener("mouseenter", onMouseEnter);
        trigger.addEventListener("mouseleave", onMouseLeave);

        (trigger as any)._hoverHandlers = { onMouseEnter, onMouseLeave };
      });
    }, sectionRef);

    return () => {
      // Clean up hover handlers
      const triggers = document.querySelectorAll(".about-feature-trigger");
      triggers.forEach((trigger) => {
        const handlers = (trigger as any)._hoverHandlers;
        if (handlers) {
          trigger.removeEventListener("mouseenter", handlers.onMouseEnter);
          trigger.removeEventListener("mouseleave", handlers.onMouseLeave);
        }
      });
      ctx.revert();
    };
  }, []);

  return { sectionRef };
};

export default useAboutAnimation;
