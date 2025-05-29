import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/Cta";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";



export default async function Home() {
  // this where we fetch the data from the database or API
  const companions = await getAllCompanions({ limit: 3 })
  const recentSessionCompanions = await getRecentSessions(10)
  return (
  <main>
    <h1 className="text-2xl underline">Popular Companions</h1>
    <section className="home-section">

      {companions.map((companion) => (
      <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)} />
      ))}
      
     

    </section>
    <section className="home-section">
      <CompanionList title="Recently completed sessions" companions={recentSessionCompanions} className="w-2/3 max-lg:w-full"  />
      <Cta />
    </section>
    
  </main>
  );
}
