"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import mouseSvg from "@/assets/mouse.svg";
import useHeroAnimation from "@/hooks/useHeroAnimation";
import "./Hero.scss";

const Hero = () => {
  const { containerRef } = useHeroAnimation();

  // Explicitly type the video ref
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScrollClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Ensure video is muted to allow autoplay policies to pass
    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play when visible
          video.play().catch((err) => {
            console.warn("Video play failed:", err);
          });
        } else {
          // Pause when hidden
          video.pause();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the hero is visible
      },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      // Optional: pause video on unmount to save resources
      if (video) video.pause();
    };
  }, [containerRef]);

  return (
    <section className="hero" id="home">
      <div className="hero-container" ref={containerRef}>
        {/* Removed autoPlay - let IntersectionObserver handle it */}
        <video muted loop playsInline className="hero-video" ref={videoRef}>
          <source src="/video/heroBg.webm" type="video/webm" />
        </video>

        <div className="hero-overlay" />
        <h2 className="hero-label">Sycamore Cottage</h2>
        <h1 className="hero-title">care that feels</h1>
        <h1 className="hero-title2">
          <em>like home.</em>
        </h1>
        <p className="hero-sub">Exceptional care. Real comfort. True home.</p>

        <div className="hero-cta-row">
          <Link href="/book-tour" className="hero-cta-primary">
            Book a Tour
          </Link>
          <Link href="/about" className="hero-cta-secondary">
            About Us
          </Link>
        </div>

        <div className="hero-trust-row">
          <div className="hero-trust-item">
            <span className="hero-trust-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2L4 5v5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V5l-6-3z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="hero-trust-label">CQC Regulated</span>
          </div>
          <span className="hero-trust-div" />
          <div className="hero-trust-item">
            <span className="hero-trust-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 6v4l2.5 2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="hero-trust-label">24/7 On-Site Support</span>
          </div>
          <span className="hero-trust-div" />
          <div className="hero-trust-item">
            <span className="hero-trust-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 16s-7-4.5-7-9a4 4 0 018 0 4 4 0 018 0c0 4.5-7 9-7 9z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="hero-trust-label">Person-Centred Care</span>
          </div>
          <span className="hero-trust-div" />
          <div className="hero-trust-item">
            <span className="hero-trust-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="4"
                  width="14"
                  height="13"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 2v4M13 2v4M3 9h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="hero-trust-label">Family Portal Access</span>
          </div>
        </div>

        <div className="hero-mouse-scroll" onClick={handleScrollClick}>
          <Image
            src={mouseSvg}
            alt="Scroll down"
            className="hero-mouse-scroll-icon"
            width={24}
            height={40}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
