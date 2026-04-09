"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./QuoteBanner.scss";

gsap.registerPlugin(ScrollTrigger);

const useQuoteAnimation = () => {
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const quote = quoteRef.current;
    const author = authorRef.current;
    if (!quote) return;

    gsap.set([quote, author], { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: quote,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.to(quote, { opacity: 1, y: 0, duration: 0.8, ease: "back.out(0.7)" }).to(
      author,
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3",
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return { quoteRef, authorRef };
};

const QuoteBanner = () => {
  const { quoteRef, authorRef } = useQuoteAnimation();

  return (
    <section className="quote-banner">
      <p className="quote-banner-quote" ref={quoteRef}>
        "Old age: the crown of life, our play's last act."
      </p>
      <span className="quote-banner-author" ref={authorRef}>
        Marcus Tullius Cicero
      </span>
    </section>
  );
};

export default QuoteBanner;
