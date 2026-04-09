"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    animateBookTourSuccess?: () => void;
  }
}

const useBookTourAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const labelLinesRef = useRef<HTMLSpanElement[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const formFieldsRef = useRef<HTMLDivElement[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bgText = bgTextRef.current;
    const label = labelRef.current;
    const labelLines = labelLinesRef.current;
    const heading = headingRef.current;
    const sub = subRef.current;
    const form = formRef.current;
    const formFields = formFieldsRef.current;
    const note = noteRef.current;
    const button = buttonRef.current;
    const success = successRef.current;

    if (!section) return;

    gsap.set(bgText, { opacity: 0, scale: 0.95 });
    gsap.set(labelLines, { scaleX: 0, transformOrigin: "center" });
    gsap.set([label, heading, sub], { opacity: 0, y: 20 });
    gsap.set(form, { opacity: 0, y: 30 });
    gsap.set(formFields, { opacity: 0, x: -20 });
    gsap.set([note, button], { opacity: 1, y: 15 });
    gsap.set(success, { opacity: 0, scale: 0.95, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: "top 80%", once: true },
    });

    tl.to(bgText, {
      opacity: 0.06,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    })
      .to(
        labelLines,
        { scaleX: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.5",
      )
      .to(
        label,
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.5",
      )
      .to(
        heading,
        { opacity: 1, y: 0, duration: 0.5, ease: "back.out(0.5)" },
        "-=0.2",
      )
      .to(sub, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.5")
      .to(
        form,
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.5",
      )
      .to(
        formFields,
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
        "-=0.5",
      )
      .to(
        [note, button],
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
        "-=0.5",
      );

    const onBtnEnter = () =>
      gsap.to(button, { scale: 1.02, duration: 0.2, ease: "power2.out" });
    const onBtnLeave = () =>
      gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" });

    if (button) {
      button.addEventListener("mouseenter", onBtnEnter);
      button.addEventListener("mouseleave", onBtnLeave);
    }

    const focusHandlers: Array<{
      el: HTMLElement;
      onFocus: () => void;
      onBlur: () => void;
    }> = [];
    formFields.forEach((field) => {
      if (!field) return;
      const input = field.querySelector<HTMLElement>("input, textarea");
      if (!input) return;
      const onFocus = () =>
        gsap.to(field, { scale: 1.01, duration: 0.2, ease: "power2.out" });
      const onBlur = () =>
        gsap.to(field, { scale: 1, duration: 0.2, ease: "power2.out" });
      input.addEventListener("focus", onFocus);
      input.addEventListener("blur", onBlur);
      focusHandlers.push({ el: input, onFocus, onBlur });
    });

    window.animateBookTourSuccess = () => {
      gsap.fromTo(
        success,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(0.5)" },
      );
    };

    return () => {
      if (button) {
        button.removeEventListener("mouseenter", onBtnEnter);
        button.removeEventListener("mouseleave", onBtnLeave);
      }
      focusHandlers.forEach(({ el, onFocus, onBlur }) => {
        el.removeEventListener("focus", onFocus);
        el.removeEventListener("blur", onBlur);
      });
      delete window.animateBookTourSuccess;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return {
    sectionRef,
    bgTextRef,
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
  };
};

export default useBookTourAnimation;
