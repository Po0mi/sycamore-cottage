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
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const label = labelRef.current;
    const heading = headingRef.current;
    const details = detailsRef.current;
    const cta = ctaRef.current;

    if (!section || !card) return;

    // Helper function to invalidate map size and fix marker position
    const invalidateMap = () => {
      if (mapRef.current) {
        setTimeout(() => {
          mapRef.current.invalidateSize();
          // Re-center the map to ensure marker stays in correct position
          if (mapRef.current.getCenter) {
            const center = mapRef.current.getCenter();
            mapRef.current.setView(center, mapRef.current.getZoom(), {
              animate: false,
            });
          }
        }, 100);
      }
    };

    // Initial states
    gsap.set(card, { opacity: 0, y: 40 });
    gsap.set(label, { opacity: 0, y: 15 });
    gsap.set(heading, { opacity: 0, y: 15 });
    gsap.set(details, { opacity: 0, x: -20 });
    gsap.set(cta, { opacity: 0, y: 20 });

    // Responsive animations
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none none",
          onEnter: () => {
            invalidateMap();
          },
          onRefresh: () => {
            invalidateMap();
          },
        },
      });

      tl.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      })
        .to(
          label,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.6",
        )
        .to(
          heading,
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.5",
        )
        .to(
          details,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          cta,
          { opacity: 1, y: 0, duration: 0.5, ease: "back.out(0.5)" },
          "-=0.4",
        );

      return () => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.vars?.trigger === section) t.kill();
        });
      };
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile animations — faster, reduced motion
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          onEnter: () => {
            invalidateMap();
          },
          onRefresh: () => {
            invalidateMap();
          },
        },
      });

      tl.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          label,
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.4",
        )
        .to(
          heading,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
        .to(
          details,
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .to(
          cta,
          { opacity: 1, y: 0, duration: 0.4, ease: "back.out(0.4)" },
          "-=0.3",
        );

      return () => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.vars?.trigger === section) t.kill();
        });
      };
    });

    // Hover animations for CTA
    if (cta) {
      const onEnter = () => {
        gsap.to(cta, {
          scale: 1.02,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(cta.querySelector("svg"), {
          x: 5,
          duration: 0.2,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(cta, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(cta.querySelector("svg"), {
          x: 0,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      cta.addEventListener("mouseenter", onEnter);
      cta.addEventListener("mouseleave", onLeave);
      (cta as any)._hoverHandlers = { onEnter, onLeave };
    }

    // Details items hover animations
    const detailItems = document.querySelectorAll(".map-card-item");
    detailItems.forEach((item) => {
      const onEnter = () => {
        gsap.to(item, {
          x: 5,
          duration: 0.25,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(item, {
          x: 0,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);
      (item as any)._hoverHandlers = { onEnter, onLeave };
    });

    // ResizeObserver to handle container size changes
    const resizeObserver = new ResizeObserver(() => {
      invalidateMap();
    });

    if (mapRef.current?.getContainer()) {
      resizeObserver.observe(mapRef.current.getContainer());
    }

    return () => {
      // Cleanup CTA handlers
      if (cta && (cta as any)._hoverHandlers) {
        const { onEnter, onLeave } = (cta as any)._hoverHandlers;
        cta.removeEventListener("mouseenter", onEnter);
        cta.removeEventListener("mouseleave", onLeave);
      }

      // Cleanup detail items handlers
      detailItems.forEach((item) => {
        if ((item as any)._hoverHandlers) {
          const { onEnter, onLeave } = (item as any)._hoverHandlers;
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        }
      });

      resizeObserver.disconnect();
      mm.revert();
    };
  }, []);

  return {
    sectionRef,
    cardRef,
    labelRef,
    headingRef,
    detailsRef,
    ctaRef,
    mapRef,
  };
};

export default useMapAnimation;
