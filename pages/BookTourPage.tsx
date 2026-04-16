"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import useBookTourAnimation from "@/hooks/useBookTourAnimation";
import "./BookTourPage.scss";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

interface FormState {
  name: string;
  phone: string;
  date: string;
  message: string;
}

const BookTourPage = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    sectionRef,
    labelRef,
    labelLinesRef,
    headingRef,
    subRef,
    formRef,
    formFieldsRef,
    footerRef,
    noteRef,
    buttonRef,
    successRef,
  } = useBookTourAnimation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          phone: form.phone,
          visit_date: form.date,
          message: form.message || "No message provided.",
          time: new Date().toLocaleString("en-GB", {
            dateStyle: "long",
            timeStyle: "short",
          }),
        },
        PUBLIC_KEY,
      );
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sent && window.animateBookTourSuccess) {
      window.animateBookTourSuccess();
    }
  }, [sent]);

  return (
    <div className="book-tour" ref={sectionRef}>
      <section className="book-tour-section">
        <div className="book-tour-inner">
          <div className="book-tour-label" ref={labelRef}>
            <span
              className="book-tour-label-line"
              ref={(el) => {
                if (el) labelLinesRef.current[0] = el;
              }}
            />
            <span className="book-tour-label-text">Book A Tour</span>
            <span
              className="book-tour-label-line"
              ref={(el) => {
                if (el) labelLinesRef.current[1] = el;
              }}
            />
          </div>

          <h1 className="book-tour-heading" ref={headingRef}>
            Come see us <em>in person.</em>
          </h1>

          <p className="book-tour-sub" ref={subRef}>
            Fill in your details and we&apos;ll be in touch to confirm a time that
            works for you and your family.
          </p>

          {sent ? (
            <div className="book-tour-success" ref={successRef}>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6.5 10l2.5 2.5 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <strong>Request received!</strong>
                <p>We&apos;ll be in touch within 24 hours to confirm your visit.</p>
              </div>
            </div>
          ) : (
            <form
              className="book-tour-form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="book-tour-row">
                <div
                  className="book-tour-field"
                  ref={(el) => {
                    if (el) formFieldsRef.current[0] = el;
                  }}
                >
                  <span className="book-tour-field-label">Your name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                    disabled={loading}
                  />
                </div>
                <div
                  className="book-tour-field"
                  ref={(el) => {
                    if (el) formFieldsRef.current[1] = el;
                  }}
                >
                  <span className="book-tour-field-label">Phone number</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44..."
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div
                className="book-tour-field"
                ref={(el) => {
                  if (el) formFieldsRef.current[2] = el;
                }}
              >
                <span className="book-tour-field-label">
                  Preferred visit date
                </span>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div
                className="book-tour-field"
                ref={(el) => {
                  if (el) formFieldsRef.current[3] = el;
                }}
              >
                <span className="book-tour-field-label">
                  Message (optional)
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Anything we should know?"
                  rows={3}
                  disabled={loading}
                />
              </div>

              {error && <p className="book-tour-error">{error}</p>}

              <div className="book-tour-footer" ref={footerRef}>
                <p className="book-tour-note" ref={noteRef}>
                  We aim to respond within 24 hours.
                </p>
                <button
                  type="submit"
                  className={`book-tour-btn${loading ? " loading" : ""}`}
                  ref={buttonRef}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Request A Tour"}
                  {!loading && (
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
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookTourPage;
