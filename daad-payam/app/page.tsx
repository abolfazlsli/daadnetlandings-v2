import Hero from "@/components/Hero";
import Explore from "@/components/Explore";
import Communities from "@/components/Communities";
import Ranking from "@/components/Ranking";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import JoinCta from "@/components/JoinCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Explore />
        <Communities />
        <Ranking />
        <Stats />
        <Faq />
        <JoinCta />
      </main>
      <Footer />
    </>
  );
}
