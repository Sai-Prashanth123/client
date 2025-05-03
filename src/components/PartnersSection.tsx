
import { useEffect } from 'react';
import useInView from '@/hooks/useInView';

export default function PartnersSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const partners = [
    { name: "EMAAR", logo: "EMAAR" },
    { name: "ELLINGTON", logo: "ELLINGTON" },
    { name: "DAMAC", logo: "DAMAC" },
    { name: "IMTIAZ", logo: "IMTIAZ" },
    { name: "MERAAS", logo: "MERAAS" }
  ];

  return (
    <section className="py-10 bg-korat-darkGray" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="text-sm text-gray-400 uppercase tracking-wider">Premium Development Partners</span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`text-gray-400 text-xl md:text-2xl font-light ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
