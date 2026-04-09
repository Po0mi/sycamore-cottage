"use client";

import { useState, useEffect, useCallback } from "react";

const useNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) close();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return { isOpen, toggle, close };
};

export default useNavMenu;
