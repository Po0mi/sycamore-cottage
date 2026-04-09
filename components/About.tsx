"use client";

import Image from "next/image";
import Elder from "@/assets/old-person.webp";
import useAboutAnimation from "@/hooks/useAboutAnimation";
import "./About.scss";

interface Feature {
  title: string;
  desc: string;
}

const FEATURES: Feature[] = [
  {
    title: "Personalised Care Plans",
    desc: "Every resident deserves care as unique as they are. Our professionals create up to date care plans that go beyond clinical data, such as medical history and medications, to include the personal details that define each individual. This ensures genuine, personalized care, rooted in our belief that every person matters.",
  },
  {
    title: "Medication Monitoring",
    desc: "There comes a time when someone may no longer be able to care for themselves. Families want to help, just as they were once cared for, but careers and modern life can make this difficult. Sycamore Cottage provides the support retirees and their families need, including Medication Monitoring services we are happy to offer.",
  },
  {
    title: "Here For You",
    desc: "We provide residents with empathy and genuine support year-round. Moving somewhere new can feel daunting, so we make every person's experience special. There's always something exciting to look forward to at Sycamore Cottage, and that's just one thing that sets us apart. We love creating opportunities for residents to make new memories and friends.",
  },
  {
    title: "Experienced Staff",
    desc: "Our Registered Manager Anna and the team at Sycamore Cottage are caring, joyous, and dedicated. We believe our responsibility goes beyond a safe environment to creating a joyful one. Our staff will treat your loved ones like family, setting us apart from the clinical feel of some larger care homes.",
  },
];

const About = () => {
  const { sectionRef } = useAboutAnimation();

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-image-bleed">
        <div className="about-image-inner">
          <Image src={Elder} alt="Elderly person" fill />
        </div>
      </div>

      <div className="about-label">
        <span className="about-label-line" />
        <span className="about-label-text">Living & Thriving</span>
      </div>

      <div className="about-heading-wrap">
        <h2 className="about-heading">
          A little about
          <span className="about-heading-faded"> what we do</span> at
          <br />
          <em>Sycamore</em>{" "}
          <span className="about-heading-ghost">Cottage </span>
          <span className="about-heading-faded">care that feels like</span>{" "}
          <em>home.</em>
        </h2>
      </div>

      <p className="about-sub">
        Our trained healthcare professionals ensure each resident has a
        personalised, clinically relevant care plan, treating everyone as an
        individual with a full life history.
      </p>

      <div className="about-features">
        {FEATURES.map(({ title, desc }, i) => (
          <div key={title} className="about-feature-item">
            <span className="about-feature-index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="about-feature-content">
              <h4 className="about-feature-title">{title}</h4>
              <p className="about-feature-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
