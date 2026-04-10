"use client";

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
];

const CqcQuotes = () => {
  const { sectionRef, labelRef, headingRef, pillRef, subRef, itemsRef } =
    useCqcQuotesAnimation();

  return (
    <section className="cqc-quotes" id="cqc" ref={sectionRef}>
      {/* ── Header — single column ── */}
      <div className="cqc-header">
        <div className="cqc-label" ref={labelRef}>
          <span className="cqc-label-text">CQC Inspection Report</span>
        </div>

        <h2 className="cqc-heading" ref={headingRef}>
          Rated <em>Good</em>
          <br />
          across all areas.
        </h2>

        <div className="cqc-header-right">
          <div className="cqc-pill" ref={pillRef}>
            <span className="cqc-pill-dot" />
            Care Quality Commission
          </div>
          <p className="cqc-sub" ref={subRef}>
            Direct quotes from the Care Quality Commission's official inspection
            of Sycamore Cottage.
          </p>
        </div>
      </div>

      {/* ── Quote list ── */}
      <div className="cqc-list">
        {QUOTES.map(({ quote }, i) => (
          <div
            key={i}
            className="cqc-item"
            ref={(el) => {
              if (el) itemsRef.current[i] = el;
            }}
          >
            <span className="cqc-item-num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="cqc-item-quote">&ldquo;{quote}&rdquo;</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CqcQuotes;
