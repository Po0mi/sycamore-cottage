"use client";

import "./Marquee.scss";

const ITEMS = [
  "Established 1996",
  "9.8 on carehome.co.uk",
  "CQC Regulated",
  "24/7 On-Site Support",
  "Person-Centred Care",
  "Basingstoke, Hampshire",
];

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
