
import { useState, useEffect, useRef } from 'react';
import useInView from '@/hooks/useInView';
import { Badge } from '@/components/ui/badge';

interface StatProps {
  value: number;
  suffix: string;
  description: string;
  bgImage: string;
  isInView: boolean;
  delay: number;
}

const StatItem = ({ value, suffix, description, bgImage, isInView, delay }: StatProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        let startTimestamp: number;
        const duration = 1500; // Animation duration in ms
        
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentValue = Math.floor(progress * value);
          
          setDisplayValue(currentValue);
          
          if (progress < 1) {
            intervalRef.current = requestAnimationFrame(step);
          }
        };
        
        intervalRef.current = requestAnimationFrame(step);
      }, delay);
      
      return () => {
        if (timeout) clearTimeout(timeout);
        if (intervalRef.current) cancelAnimationFrame(intervalRef.current);
      };
    }
  }, [isInView, value, delay]);
  
  return (
    <div 
      className={`relative overflow-hidden ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
      style={{ 
        animationDelay: `${delay}ms`,
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px'
      }}
    >
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <div className="text-8xl font-light">
          {displayValue}{suffix}
        </div>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default function StatisticsSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const uaeStats = [
    { 
      value: 12, 
      suffix: "%", 
      description: "Annual rental yield - Among the world's highest returns.", 
      bgImage: "/lovable-uploads/6df1960c-da53-4a71-b62b-4a00e0679d9d.png"
    },
    { 
      value: 25, 
      suffix: "%", 
      description: "Five-year price growth - Sustained capital appreciation in key districts", 
      bgImage: "/lovable-uploads/6df1960c-da53-4a71-b62b-4a00e0679d9d.png"
    },
    { 
      value: 0, 
      suffix: "%", 
      description: "Property tax - No capital gains or inheritance tax.", 
      bgImage: "/lovable-uploads/6df1960c-da53-4a71-b62b-4a00e0679d9d.png"
    },
    { 
      value: 87, 
      suffix: "%", 
      description: "Expatriate population - with a demand for high-end real estate.", 
      bgImage: "/lovable-uploads/6df1960c-da53-4a71-b62b-4a00e0679d9d.png"
    }
  ];
  
  const ukStats = [
    { 
      value: 9, 
      suffix: "%", 
      description: "Annual rental yield in prime central London areas", 
      bgImage: "/lovable-uploads/6df1960c-da53-4a71-b62b-4a00e0679d9d.png"
    },
    { 
      value: 150, 
      suffix: "k", 
      description: "Minimum investment entry point (USD)", 
      bgImage: "/lovable-uploads/6df1960c-da53-4a71-b62b-4a00e0679d9d.png"
    },
    { 
      value: 40, 
      suffix: "%", 
      description: "Projected 10-year capital growth in prime areas", 
      bgImage: "/lovable-uploads/6df1960c-da53-4a71-b62b-4a00e0679d9d.png"
    },
    { 
      value: 3, 
      suffix: "", 
      description: "Global ranking for investment destination stability", 
      bgImage: "/lovable-uploads/6df1960c-da53-4a71-b62b-4a00e0679d9d.png"
    }
  ];

  return (
    <section className="bg-korat-dark py-16" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-korat-gold text-xl font-light mb-12">INVESTMENT BENEFITS - BY THE NUMBERS</h2>
        
        {/* UAE Section */}
        <div className={`flex items-center space-x-4 mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <img src="https://flagcdn.com/ae.svg" alt="UAE Flag" className="w-10 h-7 rounded" />
          <h3 className="text-2xl font-light">UAE: THE CHOICE OF GLOBAL INVESTORS</h3>
        </div>
        
        {/* UAE Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-16">
          {uaeStats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              suffix={stat.suffix} 
              description={stat.description} 
              bgImage={stat.bgImage}
              isInView={isInView}
              delay={index * 200}
            />
          ))}
        </div>
        
        {/* UK Section */}
        <div className={`flex items-center space-x-4 mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="w-10 h-7 rounded" />
          <h3 className="text-2xl font-light">UK: A MARKET DEFINED BY PRESTIGE AND STABILITY</h3>
        </div>
        
        {/* UK Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {ukStats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              suffix={stat.suffix} 
              description={stat.description}
              bgImage={stat.bgImage}
              isInView={isInView}
              delay={(index * 200) + 600} // Adding more delay after the first set
            />
          ))}
        </div>
      </div>
    </section>
  );
}
