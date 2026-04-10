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

const Residents = () => {
  const [active, setActive] = useState<Resident | null>(null);
  const { sectionRef, topRef, stripRef } = useResidentsAnimation();

  return (
    <section className="residents" id="residents" ref={sectionRef}>
      <div className="residents-top" ref={topRef}>
        <div className="residents-top-left">
          <div className="residents-label">
            <span className="residents-label-line" />
            <span className="residents-label-text">From Our Residents</span>
          </div>
          <h2 className="residents-heading">
            Words of <em>wisdom.</em>
          </h2>
        </div>
        <p className="residents-sub">
          A little advice from the people who matter most our residents.
        </p>
      </div>

      <div className="residents-strip" ref={stripRef}>
        {[...RESIDENTS, ...RESIDENTS].map((resident, i) => (
          <button
            key={`${resident.name}-${i}`}
            className="residents-card"
            onClick={() => setActive(resident)}
          >
            <div className="residents-card-img">
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
            <div className="residents-card-footer">
              <span className="residents-card-name">{resident.name}</span>
              <span className="residents-card-age">Age {resident.age}</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="residents-modal" onClick={() => setActive(null)}>
          <div
            className="residents-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="residents-modal-close"
              onClick={() => setActive(null)}
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
              <span className="residents-modal-name">{active.name}</span>
              <span className="residents-modal-age">Age {active.age}</span>
              <p className="residents-modal-quote">"{active.quote}"</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Residents;
