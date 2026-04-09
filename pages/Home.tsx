"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import QuoteBanner from "@/components/QuoteBanner";
import Testimonials from "@/components/Testimonials";
import Map from "@/components/MapSection";
import Contact from "@/components/Contact";

const Home = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.location.hash === "#contact") {
      document.getElementById("contact")?.scrollIntoView();
    }
  }, [searchParams]);

  return (
    <>
      <Hero />
      <About />
      <QuoteBanner />
      <Testimonials />
      <Map />
      <Contact />
    </>
  );
};

export default Home;
