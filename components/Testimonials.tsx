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
    "Good in all areas — the warmth and professionalism of every member of staff is clearly evident throughout the home.",
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
      <div className="testimonials-container">
        {/* ── Header ── */}
        <div className="testimonials-header">
          <div className="testimonials-header-left">
            <div className="testimonials-label" ref={labelRef}>
              <span className="testimonials-label-text">What People Say</span>
            </div>

            <h2 className="testimonials-heading" ref={headingRef}>
              <em>Trusted</em>
              <br />
              by families across Hampshire
            </h2>
          </div>

          <div className="testimonials-header-right" ref={ratingsRef}>
            <div className="testimonials-rating-card">
              <div className="testimonials-rating-number">9.8</div>
              <div className="testimonials-rating-meta">
                <span className="testimonials-rating-source">
                  carehome.co.uk
                </span>
                <span className="testimonials-rating-cqc">CQC Regulated</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Featured Card ── */}
        <div className="testimonials-featured" ref={featuredRef}>
          <div className="testimonials-featured-content">
            <div className="testimonials-featured-badge">
              <div className="testimonials-featured-badge-dot" />
              <span className="testimonials-featured-badge-text">
                CQC Report
              </span>
            </div>

            <p className="testimonials-featured-quote">
              &ldquo;{featured?.quote ?? FALLBACK_FEATURED.quote}&rdquo;
            </p>

            <span className="testimonials-featured-source">
              {featured?.source ?? FALLBACK_FEATURED.source}
            </span>
          </div>
        </div>

        {/* ── Mini Cards Grid ── */}
        <div className="testimonials-grid">
          {mini.map(({ source, quote, author }, index) => (
            <div
              key={author}
              className="testimonials-card"
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <p className="testimonials-card-quote">&ldquo;{quote}&rdquo;</p>

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
