import { client } from "@/lib/sanity";
import { teamQuery } from "@/lib/queries";
import AboutPage from "@/pages/AboutCarePage";

export const revalidate = 0;

const FALLBACK_TEAM = [
  {
    initials: "AV",
    name: "Anthony Vanderslott",
    role: "Founder & Director",
    order: 1,
  },
  { initials: "AH", name: "Anna Homer", role: "Registered Manager", order: 2 },
  {
    initials: "BG",
    name: "Beverly George",
    role: "Operations Assistant",
    order: 3,
  },
  { initials: "VD", name: "Veronica De Castro", role: "Team Leader", order: 4 },
];

export default async function About() {
  let sanityTeam = null;
  try {
    sanityTeam = await client.fetch(teamQuery);
  } catch (error) {
    console.error("Failed to fetch team:", error);
  }
  const team = Array.isArray(sanityTeam) ? sanityTeam : FALLBACK_TEAM;
  return <AboutPage team={team} />;
}
