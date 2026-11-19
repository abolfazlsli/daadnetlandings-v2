import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import WhyUs from "@/components/WhyUs/WhyUs";
import Contact from "@/components/Contact/Contact";
import Promo from "@/components/Promo/Promo";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Services />
        <WhyUs />
        <Contact />
        <Promo />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
