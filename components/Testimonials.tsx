"use client";

import useTestimonialsAnimation from "@/hooks/useTestimonialsAnimation";
import "./Testimonials.scss";

interface TestimonialItem {
  source: string;
  quote: string;
  author: string;
  featured?: boolean;
}

interface TestimonialsProps {
  testimonials?: TestimonialItem[];
}

const FALLBACK_FEATURED = {
  quote:
    "Outstanding in all areas — the warmth and professionalism of every member of staff is clearly evident throughout the home.",
  source: "Care Quality Commission · CQC Inspection Report",
};

const FALLBACK_MINI: TestimonialItem[] = [
  {
    source: "carehome.co.uk",
    quote:
      "Very happy, warm and welcoming. Staff are very attentive, loving and caring.",
    author: "Family member",
  },
  {
    source: "carehome.co.uk",
    quote:
      "As a doctor I see many care homes — Sycamore Cottage is different. That personal touch matters.",
    author: "Visiting GP",
  },
];

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const {
    sectionRef,
    labelRef,
    headingRef,
    ratingsRef,
    featuredRef,
    cardsRef,
  } = useTestimonialsAnimation();

  const featured = testimonials?.find((t) => t.featured) ?? null;
  const mini = testimonials?.filter((t) => !t.featured) ?? FALLBACK_MINI;

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      {/* ── Header ── */}
      <div className="testimonials-header">
        <div className="testimonials-header-left">
          <div className="testimonials-label" ref={labelRef}>
            <span className="testimonials-label-line" />
            <span className="testimonials-label-text">What people say</span>
          </div>
          <h2 className="testimonials-heading" ref={headingRef}>
            <em>Trusted</em> by families
            <br />
            across Hampshire.
          </h2>
        </div>
        <div className="testimonials-rating-block" ref={ratingsRef}>
          <div className="testimonials-rating-num">9.8</div>
          <div className="testimonials-rating-meta">
            <span className="testimonials-rating-source">carehome.co.uk</span>
            <span className="testimonials-rating-cqc">CQC Regulated</span>
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="testimonials-grid">
        {/* Featured — dark ink card */}
        <div className="testimonials-featured-card" ref={featuredRef}>
          <div className="testimonials-featured-top">
            <div className="testimonials-featured-pill">
              <span className="testimonials-featured-pill-dot" />
              CQC Report
            </div>
            <div className="testimonials-featured-mark">"</div>
          </div>
          <p className="testimonials-featured-quote">
            {featured?.quote ?? FALLBACK_FEATURED.quote}
          </p>
          <div className="testimonials-featured-footer">
            <span className="testimonials-featured-source">
              {featured?.source ?? FALLBACK_FEATURED.source}
            </span>
          </div>
        </div>

        {/* Mini cards stack */}
        <div className="testimonials-cards-stack">
          {mini.map(({ source, quote, author }, index) => (
            <div
              key={author}
              className="testimonials-card"
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <p className="testimonials-card-quote">"{quote}"</p>
              <div className="testimonials-card-footer">
                <span className="testimonials-card-author">{author}</span>
                <span className="testimonials-card-source">{source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
