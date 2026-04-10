import { client } from "@/lib/sanity";
import { contactQuery } from "@/lib/queries";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import QuoteBanner from "@/components/QuoteBanner";
import Residents from "@/components/Residents";
import Testimonials from "@/components/Testimonials";
import MapSection from "@/components/MapSection";
import Contact from "@/components/Contact";
import CqcQuotes from "@/components/CqcQuotes";

export const revalidate = 0;

export default async function Home() {
  const [contact] = await Promise.all([client.fetch(contactQuery)]);

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <QuoteBanner />
      <Residents />
      <CqcQuotes />
      <Testimonials />
      <Contact contact={contact} />
      <MapSection />
    </>
  );
}
