import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Solutions from "../components/Solutions";
import Features from "../components/Features";
import Roadmap from "../components/Roadmap";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B1020] text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Solutions />
      <Features />
      <Roadmap />
      <CTA />
      <Footer />
    </main>
  );
}
