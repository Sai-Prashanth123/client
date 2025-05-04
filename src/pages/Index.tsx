import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import OpportunitySection from '@/components/OpportunitySection';
import NetworkSection from '@/components/NetworkSection';
import StatisticsSection from '@/components/StatisticsSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "KORAT Properties | Prestigious Properties for Visionary Investors";
  }, []);

  return (
    <div className="relative min-h-screen bg-korat-dark text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src="/8263308-uhd_3840_2160_24fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10 pointer-events-none" />
      {/* Main Content */}
      <div className="relative z-20">
        <Header />
        <HeroSection />
        <OpportunitySection />
        <NetworkSection />
        <StatisticsSection />
        <PartnersSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
