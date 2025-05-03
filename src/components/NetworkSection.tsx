
import { useEffect } from 'react';
import useInView from '@/hooks/useInView';
import { Separator } from '@/components/ui/separator';

export default function NetworkSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const benefits = [
    {
      id: "01",
      title: "Access Beyond the Market",
      description: "Gain exclusive entry to off-market acquisitions and private listings, reserved for investors seeking rare, high-value opportunities unavailable to the general market."
    },
    {
      id: "02",
      title: "Wealth Preservation & Growth",
      description: "A meticulously structured portfolio offering long-term appreciation, resilient asset performance, and consistently high returns, ensuring financial security across market cycles."
    },
    {
      id: "03",
      title: "Confidential & Personalized Advisory",
      description: "Discreet, tailor-made investment strategies designed to align with your financial ambitions, ensuring seamless transactions and strategic wealth-building."
    },
    {
      id: "04",
      title: "Unmatched Expertise in Prime Real Estate",
      description: "A dedicated team with deep market knowledge, providing exclusive insights and strategic guidance to secure generational wealth through high-value investments."
    }
  ];

  return (
    <section className="section-spacing bg-korat-dark" ref={sectionRef}
      style={{
        backgroundImage: "url('/lovable-uploads/c5597a2e-bde4-4330-b9a1-66fe533ce934.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-14">
          <span className={`text-sm uppercase tracking-widest text-gray-300 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            WHY PARTNER WITH KORAT PROPERTIES?
          </span>
          <h2 className={`heading-lg mt-5 max-w-4xl mx-auto ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            A Private Network of Unrivaled Investment Opportunities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className={`${isInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="text-korat-gold text-xl md:text-2xl font-light mr-3">{benefit.id}</span>
                  <h3 className="text-xl md:text-2xl font-light">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              {index === 0 || index === 2 ? (
                <div className="hidden md:block">
                  <Separator className="my-8 bg-gray-600" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
