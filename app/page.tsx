import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/Cta";
import { recentSessions } from "@/constants";



export default function Home() {
  return (
  <main>
    <h1 className="text-2xl underline">Popular Companions</h1>
    <section className="home-section">
      <CompanionCard id="123" name="Neura the Brainy Explorer" subject="science" duration={45} topic="Neural Network of the Brain" color="#ffda6e" />
      <CompanionCard id="456" name="Countsy the Number Wizard" subject="math" duration={30} topic="Derivatives & Integrals" color="#e5d0ff" />
      <CompanionCard id="789" name="Verba the Vocabulary Builder" subject="English Literature" duration={45} topic="language" color="#bde7ff" />

    </section>
    <section className="home-section">
      <CompanionList title="Recently completed sessions" companions={recentSessions} className="w-2/3 max-lg:w-full"  />
      <Cta />
    </section>
    
  </main>
  );
}
