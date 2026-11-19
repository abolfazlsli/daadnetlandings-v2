import Hero from "@/components/Hero";
import JobSearch from "@/components/JobSearch";
import Services from "@/components/Services";
import HowItHelps from "@/components/HowItHelps";
import TalentBanner from "@/components/TalentBanner";
import SkillCards from "@/components/SkillCards";
import Jobs from "@/components/Jobs";
import Companies from "@/components/Companies";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <JobSearch />
        <Services />
        <HowItHelps />
        <TalentBanner />
        <SkillCards />
        <Jobs />
        <Companies />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
