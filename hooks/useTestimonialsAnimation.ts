import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useTestimonialsAnimation = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const ratingsRef = useRef(null);
  const featuredRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([labelRef.current, headingRef.current, ratingsRef.current], {
        opacity: 0,
        y: 20,
      });

      gsap.set(featuredRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.set(cardsRef.current.filter(Boolean), {
        opacity: 0,
        y: 30,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .to(
          ratingsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          featuredRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .to(
          cardsRef.current.filter(Boolean),
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    labelRef,
    headingRef,
    ratingsRef,
    featuredRef,
    cardsRef,
  };
};

export default useTestimonialsAnimation;
