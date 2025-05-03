
import { useEffect } from 'react';
import useInView from '@/hooks/useInView';

export default function OpportunitySection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="section-spacing bg-korat-darkGray" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-sm uppercase tracking-widest text-korat-gold">Our Philosophy</span>
            <h2 className="heading-lg mt-2 mb-8">Where Opportunity Meets Legacy</h2>
            
            <p className="text-gray-400 mb-6">
              Established as a gateway to the finest real estate in premium global locations, KORAT Properties is the choice of forward-thinking investors. Our meticulously curated portfolio of properties represents the pinnacle of architectural excellence and investment wisdom.
            </p>
            
            <p className="text-gray-400 mb-6">
              At KORAT Properties, we're not just offering premium real estate; we're providing access to a legacy of wealth creation through strategically selected properties in the world's most promising markets. Our investment philosophy is built on the foundation of exclusivity, sustainable growth, and long-term value appreciation.
            </p>
            
            <p className="text-gray-400 mb-8">
              Each property in our portfolio has been rigorously vetted to ensure it meets our exacting standards for investment potential and architectural significance.
            </p>
            
            <a href="#properties" className="btn-primary">
              Explore Properties
            </a>
          </div>
          
          <div className={`relative h-[500px] ${isInView ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                alt="Luxury Property" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
