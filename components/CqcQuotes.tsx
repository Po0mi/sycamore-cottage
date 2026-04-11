"use client";

import Image from "next/image";
import CqcImage from "@/assets/care-hands.webp";
import useCqcQuotesAnimation from "@/hooks/useCqcQuotesAnimation";
import "./CqcQuotes.scss";

interface CqcQuote {
  quote: string;
}

const QUOTES: CqcQuote[] = [
  {
    quote:
      "High standards of cleanliness and hygiene were maintained throughout the home.",
  },
  {
    quote:
      "Staff spoke about people with pride and fondness, recognising people's daily achievements, which demonstrated how they valued them as individuals.",
  },
  {
    quote: "People's dignity and human rights were protected.",
  },
  {
    quote:
      "Risks were assessed, monitored and managed effectively. Staff were aware of people's individual risks and how to support them to remain safe.",
  },
  {
    quote:
      "People were supported to maintain their independence, with care tailored to their individual needs and preferences.",
  },
];

const CqcQuotes = () => {
  const { sectionRef, labelRef, headingRef, subRef, itemsRef } =
    useCqcQuotesAnimation();

  return (
    <section className="cqc-quotes" id="cqc" ref={sectionRef}>
      <div className="cqc-container">
        <div className="cqc-split">
          {/* Left Side: Content */}
          {/* Right Side: Image */}
          <div className="cqc-right">
            <div className="cqc-image-wrapper">
              <Image
                src={CqcImage}
                alt="Caregiver holding elderly person's hands with warmth and compassion"
                fill
                priority
              />
              <div className="cqc-image-overlay" />
            </div>
          </div>
          <div className="cqc-left">
            <div className="cqc-header">
              <div className="cqc-label" ref={labelRef}>
                <span className="cqc-label-text">CQC Inspection Report</span>
              </div>

              <h2 className="cqc-heading" ref={headingRef}>
                Rated <em>Good</em>
                <br />
                across all areas
              </h2>

              <p className="cqc-sub" ref={subRef}>
                Direct quotes from the official inspection
              </p>
            </div>

            <div className="cqc-count-card">
              <div className="cqc-count-number">
                {String(QUOTES.length).padStart(2, "0")}
              </div>
              <div className="cqc-count-label">Quotes</div>
            </div>

            {/* Numbered List */}
            <div className="cqc-list">
              {QUOTES.map((item, i) => (
                <div
                  key={i}
                  className="cqc-item"
                  ref={(el) => {
                    if (el) itemsRef.current[i] = el;
                  }}
                >
                  <div className="cqc-item-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="cqc-item-quote">&ldquo;{item.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CqcQuotes;
