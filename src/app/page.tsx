import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveDemo from "@/components/LiveDemo";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LiveDemo />
        <Problem />
        <Solutions />
        <HowItWorks />
        <Industries />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
