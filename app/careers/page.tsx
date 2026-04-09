import { client } from "@/lib/sanity";
import { vacancyQuery } from "@/lib/queries";
import JoinTeamPage from "@/pages/JoinTeamPage";
export const revalidate = 60;

export default async function Careers() {
  const vacancy = await client.fetch(vacancyQuery);
  return <JoinTeamPage vacancy={vacancy} />;
}
