
import { useEffect } from 'react';
import useInView from '@/hooks/useInView';

export default function NetworkSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const benefits = [
    {
      id: "01",
      title: "Access Beyond the Market",
      description: "Gain exclusive rights to off-market opportunities and pre-launch projects before they become publicly available, providing our investors with unparalleled first-mover advantages."
    },
    {
      id: "02",
      title: "Wealth Preservation & Growth",
      description: "Our properties are strategically selected in locations known for economic resilience, political stability, and consistent appreciation, ensuring both capital protection and impressive returns."
    },
    {
      id: "03",
      title: "Confidential & Personalized Advisory",
      description: "Receive tailored investment recommendations crafted specifically for your financial goals, risk tolerance, and legacy planning aspirations by our dedicated team of advisors."
    },
    {
      id: "04",
      title: "Unmatched Expertise in Prime Real Estate",
      description: "Leverage decades of collective expertise in identifying properties with exceptional investment potential in the world's most coveted markets and emerging luxury destinations."
    }
  ];

  return (
    <section className="section-spacing bg-korat-dark" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className={`text-sm uppercase tracking-widest text-korat-gold ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            An Invitation to Exclusive Ownership
          </span>
          <h2 className={`heading-lg mt-2 max-w-3xl mx-auto ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            A Private Network of Unrivaled Investment Opportunities
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className={`bg-korat-darkGray p-8 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <span className="text-korat-gold text-xl mb-4 block">{benefit.id}</span>
              <h3 className="text-xl font-light mb-4">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
