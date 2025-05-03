
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
    <div className="min-h-screen bg-korat-dark text-white">
      <Header />
      <HeroSection />
      <OpportunitySection />
      <NetworkSection />
      <StatisticsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
