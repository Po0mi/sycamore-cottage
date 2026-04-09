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
    labelLinesRef,
    headingRef,
    detailsRef,
    statsRef,
    statItemsRef,
  } = useContactAnimation();

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-bg-text" ref={bgTextRef}>
        Hello
      </div>

      <div className="contact-inner">
        <div className="contact-label" ref={labelRef}>
          <span
            className="contact-label-line"
            ref={(el) => {
              if (el) labelLinesRef.current[0] = el;
            }}
          />
          <span className="contact-label-text">Get In Touch</span>
          <span
            className="contact-label-line"
            ref={(el) => {
              if (el) labelLinesRef.current[1] = el;
            }}
          />
        </div>

        <h2 className="contact-heading" ref={headingRef}>
          Come visit <em>Sycamore Cottage.</em>
        </h2>

        <div className="contact-details">
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
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2C7.2 2 5 4.2 5 7c0 4 5 11 5 11s5-7 5-11c0-2.8-2.2-5-5-5z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="10"
                cy="7"
                r="1.5"
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
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3 6l7 5 7-5"
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

        <div className="contact-stats" ref={statsRef}>
          <div
            className="contact-stat"
            ref={(el) => {
              if (el) statItemsRef.current[0] = el;
            }}
          >
            <strong>24hr</strong>
            <span>Response time</span>
          </div>
          <span className="contact-stat-div" />
          <div
            className="contact-stat"
            ref={(el) => {
              if (el) statItemsRef.current[1] = el;
            }}
          >
            <strong>9.8</strong>
            <span>carehome.co.uk</span>
          </div>
          <span className="contact-stat-div" />
          <div
            className="contact-stat"
            ref={(el) => {
              if (el) statItemsRef.current[2] = el;
            }}
          >
            <strong>CQC</strong>
            <span>Regulated</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
