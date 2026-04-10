"use client";

import Image from "next/image";
import { useState } from "react";
import Elder from "@/assets/old-person.webp";
import useAboutAnimation from "@/hooks/useAboutAnimation";
import "./About.scss";

interface Feature {
  title: string;
  short: string;
  desc: string;
}

const FEATURES: Feature[] = [
  {
    title: "Personalised Care Plans",
    short: "Care as unique as each resident.",
    desc: "Our professionals create up-to-date care plans that go beyond clinical data, medical history and medications, to include the personal details that define each individual. Genuine, personalised care rooted in our belief that every person matters.",
  },
  {
    title: "Medication Monitoring",
    short: "Daily oversight you can rely on.",
    desc: "There comes a time when someone may no longer be able to care for themselves. Sycamore Cottage provides the support retirees and their families need, including comprehensive Medication Monitoring so nothing is ever missed.",
  },
  {
    title: "Here For You",
    short: "Empathy and warmth, every day.",
    desc: "Moving somewhere new can feel daunting, so we make every person's experience special. There's always something to look forward to at Sycamore Cottage, new memories, new friendships, and a home that genuinely feels like yours.",
  },
  {
    title: "Experienced Staff",
    short: "A team that treats you like family.",
    desc: "Our Registered Manager Anna and the team are caring, joyous, and dedicated. We believe our responsibility goes beyond a safe environment to creating a joyful one, setting us apart from the clinical feel of larger care homes.",
  },
];

const About = () => {
  const { sectionRef } = useAboutAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-image-bleed">
        <div className="about-image-inner">
          <Image src={Elder} alt="Elderly resident at Sycamore Cottage" fill />
        </div>
      </div>

      <div className="about-label">
        <span className="about-label-text">Living &amp; Thriving</span>
      </div>

      <div className="about-heading-wrap">
        <h2 className="about-heading">
          A little about
          <span className="about-heading-faded"> what we do</span> at
          <br />
          <em>Sycamore</em>{" "}
          <span className="about-heading-ghost">Cottage </span>
          <span className="about-heading-faded">care that feels</span>{" "}
          <em>like home.</em>
        </h2>
      </div>

      <p className="about-sub">
        Our trained healthcare professionals ensure each resident has a
        personalised, clinically relevant care plan, treating everyone as an
        individual with a full life history.
      </p>

      <div className="about-features">
        {FEATURES.map(({ title, short, desc }, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={title}
              className={`about-feature-item${isOpen ? " is-open" : ""}`}
            >
              <button
                className="about-feature-trigger"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span className="about-feature-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="about-feature-header">
                  <h4 className="about-feature-title">{title}</h4>
                  <p className="about-feature-short">{short}</p>
                </div>
                <span className="about-feature-toggle" aria-hidden="true">
                  <span className="about-feature-toggle-icon" />
                </span>
              </button>

              <div className="about-feature-body" aria-hidden={!isOpen}>
                <p className="about-feature-desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
