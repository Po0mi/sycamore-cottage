"use client";

import Link from "next/link";
import Image from "next/image";
import aboutPhoto from "@/assets/about-photo.webp";
import useAboutPageAnimation from "@/hooks/useAboutPageAnimation";
import "./AboutCarePage.scss";

interface Stat {
  value: string;
  label: string;
}

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  order?: number;
}

interface Value {
  num: string;
  title: string;
  desc: string;
}

interface AboutPageProps {
  team: TeamMember[];
}

const STATS: Stat[] = [
  { value: "1996", label: "Est." },
  { value: "24/7", label: "On-site support" },
];

const VALUES: Value[] = [
  {
    num: "01",
    title: "Person-Centred Care",
    desc: "Every resident has a unique care plan built around their individual history, preferences, and clinical needs.",
  },
  {
    num: "02",
    title: "Safe & Caring Environment",
    desc: "We provide a home that is safe, warm, and welcoming, where residents and families feel genuinely supported.",
  },
  {
    num: "03",
    title: "Experienced Leadership",
    desc: "Founded by a mental health nursing professional and managed by a qualified, dedicated team with decades of experience.",
  },
  {
    num: "04",
    title: "Community & Connection",
    desc: "We create opportunities for residents to build friendships, make memories, and remain connected to the people they love.",
  },
];

const AboutPage = ({ team }: AboutPageProps) => {
  const {
    heroRef,
    heroBgTextRef,
    heroLabelRef,
    heroHeadingRef,
    heroKenseiRef,
    heroSubRef,
    heroStatsRef,
    heroStatsItemsRef,
    heroImageRef,
    storyRef,
    storyTextRef,
    teamRef,
    teamCardsRef,
    valuesRef,
    valuesItemsRef,
    ctaStripRef,
    ctaQuoteRef,
    ctaBtnRef,
  } = useAboutPageAnimation();

  return (
    <div className="about-page">
      <section className="about-hero" ref={heroRef}>
        <div className="about-hero-bg-text" ref={heroBgTextRef}>
          Sycamore
        </div>

        <div className="about-hero-inner">
          <div className="about-hero-left">
            <div className="about-hero-label" ref={heroLabelRef}>
              <span className="about-hero-label-line" />
              <span className="about-hero-label-text">About Us</span>
            </div>

            <h1 className="about-hero-heading" ref={heroHeadingRef}>
              Our community <em>awaits.</em>
            </h1>

            <h2 className="about-kensei-heading" ref={heroKenseiRef}>
              <em>Sycamore Cottage </em>
              <span className="about-kensei-faded">care that feels like </span>
              <em>home.</em>
            </h2>

            <p className="about-hero-sub" ref={heroSubRef}>
              Whether you're looking for respite or a permanent residence,
              Sycamore Cottage can provide all that is necessary for your loved
              one's comfort and needs, in a safe and caring environment.
            </p>

            <div className="about-hero-stats" ref={heroStatsRef}>
              {STATS.map(({ value, label }, index) => (
                <div
                  key={label}
                  className="about-hero-stat"
                  ref={(el) => {
                    if (el) heroStatsItemsRef.current[index] = el;
                  }}
                >
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-hero-right">
            <div className="about-hero-img" ref={heroImageRef}>
              <Image src={aboutPhoto} alt="Sycamore Cottage" fill />
            </div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="about-content-inner">
          <div className="about-content-grid">
            <div className="about-story" ref={storyRef}>
              <div className="about-section-label">
                <span className="about-section-label-line" />
                <span className="about-section-label-text">Our Story</span>
              </div>
              <p
                className="about-story-text"
                ref={(el) => {
                  if (el) storyTextRef.current[0] = el;
                }}
              >
                Whether you need respite care or a permanent home, Sycamore
                Cottage provides everything your loved one needs to live
                comfortably, safely, and with dignity. We understand that
                choosing a care home can feel overwhelming. With so many
                options, it is hard to know where to begin. If you are looking
                for an independent, well established, and highly recommended
                home, you have found the right place.
              </p>
              <p
                className="about-story-text"
                ref={(el) => {
                  if (el) storyTextRef.current[1] = el;
                }}
              >
                Sycamore Cottage first opened in <em>1996</em> by Anthony
                Vanderslott, following his career in mental health nursing, and
                it remains under his dedicated leadership today. Since 2023,
                Anna Homer has been the registered manager, fully committed to
                improving the quality of care in the facility. Her methods and
                steadfast dedication have greatly enhanced the residents'
                overall well-being and satisfaction.
              </p>
            </div>

            <div className="about-team" ref={teamRef}>
              <div className="about-section-label">
                <span className="about-section-label-line" />
                <span className="about-section-label-text">Our Team</span>
              </div>
              <div className="about-team-cards">
                {team.map(({ initials, name, role }, index) => (
                  <div
                    key={name}
                    className="about-team-card"
                    ref={(el) => {
                      if (el) teamCardsRef.current[index] = el;
                    }}
                  >
                    <div className="about-team-avatar">{initials}</div>
                    <div className="about-team-info">
                      <h4 className="about-team-name">{name}</h4>
                      <span className="about-team-role">{role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-values" ref={valuesRef}>
            <div className="about-section-label">
              <span className="about-section-label-line" />
              <span className="about-section-label-text">
                What We Stand For
              </span>
            </div>
            <div className="about-values-grid">
              {VALUES.map(({ num, title, desc }, index) => (
                <div
                  key={num}
                  className="about-value-item"
                  ref={(el) => {
                    if (el) valuesItemsRef.current[index] = el;
                  }}
                >
                  <span className="about-value-num">{num}</span>
                  <div className="about-value-body">
                    <h4 className="about-value-title">{title}</h4>
                    <p className="about-value-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-cta-strip" ref={ctaStripRef}>
            <p className="about-cta-quote" ref={ctaQuoteRef}>
              "Care that feels like <em>home.</em>"
            </p>
            <Link href="/book-tour" className="about-cta-btn" ref={ctaBtnRef}>
              Book A Tour
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
