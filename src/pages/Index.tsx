
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhatWeDo from "@/components/WhatWeDo";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <HeroSection />   
        <StatsSection />
        <WhatWeDo />
        <Solutions />
        <Industries />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
