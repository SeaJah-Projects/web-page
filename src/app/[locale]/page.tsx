import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Services from "@/components/Services";
import AISection from "@/components/AISection";
import HowWeWork from "@/components/HowWeWork";
import Expertise from "@/components/Expertise";
import WhySeaJah from "@/components/WhySeaJah";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <StatsStrip />
      <Services />
      <AISection />
      <HowWeWork />
      <Expertise />
      <WhySeaJah />
      <Clients />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}
