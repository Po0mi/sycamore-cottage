"use client";

import Link from "next/link";
import Image from "next/image";
import TeamPhoto from "@/assets/team-photo.webp";
import useJoinTeamAnimation from "@/hooks/useJoinTeamAnimation";
import "./JoinTeamPage.scss";

interface Perk {
  icon: React.ReactNode;
  label: string;
}

interface VacancyData {
  isHiring: boolean;
  role?: string;
  description?: string;
  note?: string;
}

interface JoinTeamProps {
  vacancy?: VacancyData;
}

const PERKS: Perk[] = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 16s-7-4.5-7-9a4 4 0 018 0 4 4 0 018 0c0 4.5-7 9-7 9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Person-centred values",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 2L4 5v5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V5l-6-3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "CQC regulated",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 6v4l2.5 2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Flexible, rewarding roles",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M2 18c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Supportive, close-knit team",
  },
];

const JoinTeamPage = ({ vacancy }: JoinTeamProps) => {
  const isHiring = vacancy?.isHiring ?? false;
  const vacancyRole = vacancy?.role ?? "";
  const vacancyDesc = vacancy?.description ?? "";
  const vacancyNote =
    vacancy?.note ??
    "Interested in future roles? Get in touch and we'll keep your details on file.";

  const {
    heroRef,
    heroImgRef,
    heroOverlayRef,
    labelRef,
    headingRef,
    subRef,
    perksRef,
    cardRef,
    cardPillRef,
    cardHeadingRef,
    cardBodyRef,
    cardNoteRef,
    cardCtaRef,
  } = useJoinTeamAnimation();

  return (
    <div className="join-team">
      <section className="join-team-hero" ref={heroRef}>
        <div className="join-team-hero-img" ref={heroImgRef}>
          <Image src={TeamPhoto} alt="Sycamore Cottage team" fill />
        </div>

        <div className="join-team-hero-overlay" ref={heroOverlayRef} />

        <div className="join-team-hero-content">
          <div className="join-team-hero-left">
            <div className="join-team-label" ref={labelRef}>
              <span className="join-team-label-text">Join The Team</span>
            </div>

            <h1 className="join-team-heading" ref={headingRef}>
              Be part of something <em>meaningful.</em>
            </h1>

            <p className="join-team-sub" ref={subRef}>
              We're always looking for compassionate, dedicated people to join
              the Sycamore Cottage family, where every day you make a real
              difference.
            </p>

            <div className="join-team-perks">
              {PERKS.map(({ icon, label }, index) => (
                <div
                  key={label}
                  className="join-team-perk"
                  ref={(el) => {
                    if (el) perksRef.current[index] = el;
                  }}
                >
                  <span className="join-team-perk-icon">{icon}</span>
                  <span className="join-team-perk-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="join-team-card" ref={cardRef}>
            <div
              className={`join-team-card-pill${isHiring ? " hiring" : ""}`}
              ref={cardPillRef}
            >
              <span
                className={`join-team-card-pill-dot${isHiring ? " hiring" : ""}`}
              />
              <span>{isHiring ? "Now hiring" : "No current vacancies"}</span>
            </div>

            <h3 className="join-team-card-heading" ref={cardHeadingRef}>
              {isHiring ? (
                <>{vacancyRole}</>
              ) : (
                <>
                  We're not hiring <em>right now.</em>
                </>
              )}
            </h3>

            <p className="join-team-card-body" ref={cardBodyRef}>
              {isHiring
                ? vacancyDesc
                : "We do not currently have any vacancies available, but please keep an eye on this page for any upcoming opportunities."}
            </p>

            <p className="join-team-card-note" ref={cardNoteRef}>
              {vacancyNote}
            </p>

            <Link
              href="/#contact"
              className="join-team-card-cta"
              ref={cardCtaRef}
            >
              Get In Touch
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

export default JoinTeamPage;
