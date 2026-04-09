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
      <Testimonials />
      <MapSection />
      <Contact contact={contact} />
    </>
  );
}
