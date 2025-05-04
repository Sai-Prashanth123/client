
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This will create the parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const translateY = scrollPosition * 0.4; // Adjust the scroll speed
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-50" />
      <div ref={heroRef} className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/lovable-uploads/a3f9300d-0518-40a1-b6df-a7b3c9b52ba8.png')", 
            transform: "scale(1.1)" 
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-20 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl animate-fade-in text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-center">
            <span className="text-white">KORAT</span>
            <span className="block text-sm text-center tracking-widest text-korat-gold mt-2">Our Founder</span>
          </h1>
          
          <div className="mt-16 md:mt-24 text-center">
            <h2 className="heading-lg text-center">
              Prestigious Properties, Reserved for<br />
              <span className="font-light">Visionary Investors</span>
            </h2>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
