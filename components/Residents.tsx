"use client";

import Image from "next/image";
import { useState } from "react";
import useResidentsAnimation from "@/hooks/useResidentsAnimation";
import "./Residents.scss";

interface Resident {
  image: string;
  name: string;
  age: string;
  quote: string;
}

const RESIDENTS: Resident[] = [
  {
    image: "/residents/image1.webp",
    name: "Shirley",
    age: "79",
    quote: "Save a little, spend a little!",
  },
  {
    image: "/residents/image2.webp",
    name: "Olive",
    age: "88",
    quote: "Travel the world.",
  },
  {
    image: "/residents/image3.webp",
    name: "Ronnie",
    age: "89¾",
    quote: "Always be kind to nature!",
  },
  {
    image: "/residents/image4.webp",
    name: "John",
    age: "89",
    quote: "Live long and prosper!",
  },
  {
    image: "/residents/image5.webp",
    name: "Mike",
    age: "85",
    quote: "Learn as much as you can. Become Educated",
  },
  {
    image: "/residents/image6.webp",
    name: "Rita",
    age: "86",
    quote: "Take it easy, and listen to your mum!",
  },
  {
    image: "/residents/image7.webp",
    name: "Marie",
    age: "93",
    quote: "Always look pretty for the boys!",
  },
];

const QuoteIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="residents-card-quote-icon"
  >
    <path d="M6 10c0-2 1.5-3.5 3.5-3.5S13 8 13 10s-1.5 3.5-3.5 3.5V16c4 0 7-3 7-6s-3-6-7-6-7 3-7 6h3zm-6 0c0-2 1.5-3.5 3.5-3.5S7 8 7 10s-1.5 3.5-3.5 3.5V16c4 0 7-3 7-6s-3-6-7-6-7 3-7 6h3z" />
  </svg>
);

const Residents = () => {
  const [active, setActive] = useState<Resident | null>(null);
  const { sectionRef, topRef, stripRef } = useResidentsAnimation();

  return (
    <section className="residents" id="residents" ref={sectionRef}>
      {/* ── Header ── */}
      <div className="residents-top" ref={topRef}>
        <div className="residents-top-left">
          <div className="residents-label">
            <span className="residents-label-text">From Our Residents</span>
          </div>

          <h2 className="residents-heading">
            Words of <em>wisdom</em>
          </h2>

          <p className="residents-sub">
            A little advice from the people who matter most — our residents.
            Their experiences shape how we grow and continue to provide
            genuinely supportive care.
          </p>
        </div>

        <div className="residents-top-right">
          <div className="residents-count-card">
            <div className="residents-count-number">07</div>
            <div className="residents-count-label">Residents</div>
          </div>
        </div>
      </div>

      {/* ── Strip ── */}
      <div className="residents-strip" ref={stripRef}>
        {[...RESIDENTS, ...RESIDENTS].map((resident, i) => (
          <button
            key={`${resident.name}-${i}`}
            className="residents-card"
            onClick={() => setActive(resident)}
          >
            <div className="residents-card-img">
              <div className="residents-card-img-overlay" />
              <Image
                src={resident.image}
                alt={`${resident.name}, age ${resident.age}`}
                width={400}
                height={533}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>

            <div className="residents-card-content">
              <div className="residents-card-header">
                <h3 className="residents-card-name">{resident.name}</h3>
                <span className="residents-card-age">Age {resident.age}</span>
              </div>

              <blockquote className="residents-card-quote-block">
                <QuoteIcon />
                <p className="residents-card-quote">{resident.quote}</p>
              </blockquote>
            </div>
          </button>
        ))}
      </div>

      {/* ── Modal ── */}
      {active && (
        <div className="residents-modal" onClick={() => setActive(null)}>
          <div
            className="residents-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="residents-modal-close"
              onClick={() => setActive(null)}
              aria-label="Close modal"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3l10 10M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="residents-modal-img">
              <Image
                src={active.image}
                alt={`${active.name}, age ${active.age}`}
                width={600}
                height={800}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>

            <div className="residents-modal-body">
              <h3 className="residents-modal-name">{active.name}</h3>
              <span className="residents-modal-age">Age {active.age}</span>
              <blockquote className="residents-modal-quote-block">
                <QuoteIcon />
                <p className="residents-modal-quote">{active.quote}</p>
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Residents;
