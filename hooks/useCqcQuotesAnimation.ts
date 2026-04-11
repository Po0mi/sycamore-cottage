import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCqcQuotesAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Store refs in local variables to avoid null issues
    const section = sectionRef.current;
    const label = labelRef.current;
    const heading = headingRef.current;
    const pill = pillRef.current;
    const sub = subRef.current;
    const items = itemsRef.current.filter(Boolean);

    if (!section) return;

    const ctx = gsap.context(() => {
      // Only set/get animations if elements exist
      if (label) gsap.set(label, { opacity: 0, y: 20 });
      if (heading) gsap.set(heading, { opacity: 0, y: 20 });
      if (pill) gsap.set(pill, { opacity: 0, y: 20 });
      if (sub) gsap.set(sub, { opacity: 0, y: 20 });
      if (items.length) gsap.set(items, { opacity: 0, y: 24 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      if (label) {
        tl.to(label, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      if (heading) {
        tl.to(
          heading,
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
      }

      // Create an array of elements to animate together
      const headerElements = [];
      if (pill) headerElements.push(pill);
      if (sub) headerElements.push(sub);

      if (headerElements.length) {
        tl.to(
          headerElements,
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.3",
        );
      }

      if (items.length) {
        tl.to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    labelRef,
    headingRef,
    pillRef,
    subRef,
    itemsRef,
  };
};

export default useCqcQuotesAnimation;
