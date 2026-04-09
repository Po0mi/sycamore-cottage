import { client } from "@/lib/sanity";
import { teamQuery } from "@/lib/queries";
import AboutPage from "@/pages/AboutCarePage";

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
    role: "Operations Manager",
    order: 3,
  },
  { initials: "VD", name: "Veronica De Castro", role: "Team Leader", order: 4 },
];

export default async function About() {
  const sanityTeam = await client.fetch(teamQuery);
  const team =
    Array.isArray(sanityTeam) && sanityTeam.length > 0
      ? sanityTeam
      : FALLBACK_TEAM;
  return <AboutPage team={team} />;
}
