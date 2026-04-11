"use client";

import useContactAnimation from "@/hooks/useContactAnimation";
import "./Contact.scss";

interface ContactData {
  email: string;
  phone: string;
  address: string;
  visitingHours: string;
}

interface ContactProps {
  contact?: ContactData;
}

const Contact = ({ contact }: ContactProps) => {
  const {
    sectionRef,
    bgTextRef,
    labelRef,
    headingRef,
    ctaRef,
    detailsContainerRef,
    detailsRef,
    statsRef,
  } = useContactAnimation();

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-inner">
        {/* ── Label ── */}
        <div className="contact-label" ref={labelRef}>
          <span className="contact-label-text">Get In Touch</span>
        </div>

        {/* ── Heading ── */}
        <div className="contact-header">
          <h2 className="contact-heading" ref={headingRef}>
            Come visit <em>Sycamore Cottage</em>
          </h2>
          <p className="contact-sub">
            Schedule a tour to see our home and meet our caring team
          </p>
        </div>

        {/* ── CTA Button ── */}
        <a className="contact-cta" ref={ctaRef} href="/book-tour">
          Book a Tour
        </a>

        {/* ── Contact Details Container ── */}
        <div className="contact-details" ref={detailsContainerRef}>
          <a
            className="contact-detail-item"
            ref={(el) => {
              if (el) detailsRef.current[0] = el;
            }}
            href={`https://maps.google.com/?q=${encodeURIComponent(contact?.address || "Sycamore Cottage, Skippetts La West, Basingstoke RG21 3HP")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="contact-detail-icon"
            >
              <path
                d="M7 2C5.3 2 4 3.3 4 5c0 2.5 3 7 3 7s3-4.5 3-7c0-1.7-1.3-3-3-3z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="7"
                cy="5"
                r="1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span>
              {contact?.address || "Skippetts La West, Basingstoke RG21 3HP"}
            </span>
          </a>

          <a
            className="contact-detail-item"
            ref={(el) => {
              if (el) detailsRef.current[1] = el;
            }}
            href={`mailto:${contact?.email || "enquiries@sycamorecottageresthome.com"}`}
          >
            <svg
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="contact-detail-icon"
            >
              <path
                d="M2 4h10a1 1 0 011 1v4a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M2 5l5 3 5-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>
              {contact?.email || "enquiries@sycamorecottageresthome.com"}
            </span>
          </a>
        </div>

        {/* ── Trust Badges ── */}
        <div className="contact-badges" ref={statsRef}>
          <div className="contact-badge">
            <span className="contact-badge-value">9.8</span>
            <span className="contact-badge-label">Rating</span>
          </div>

          <div className="contact-badge-divider" />

          <div className="contact-badge">
            <span className="contact-badge-value">CQC</span>
            <span className="contact-badge-label">Good</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
