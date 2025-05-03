
import { useState, useEffect, useRef } from 'react';
import useInView from '@/hooks/useInView';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
  delay: number;
}

const StatItem = ({ value, suffix, label, isInView, delay }: StatItemProps) => {
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
    <div className={`stat-box ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="stat-number">
        {displayValue}
        <span className="text-korat-gold">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default function StatisticsSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const uaeStats = [
    { value: 12, suffix: "%", label: "ANNUAL RENTAL YIELD IN PRIME AREAS" },
    { value: 25, suffix: "%", label: "5-YEAR CAPITAL APPRECIATION (AVG)" },
    { value: 0, suffix: "%", label: "INCOME TAX ON RENTAL INCOME" },
    { value: 87, suffix: "%", label: "FOREIGN RESIDENTS MAKING UP DUBAI POPULATION" }
  ];
  
  const ukStats = [
    { value: 9, suffix: "%", label: "ANNUAL RENTAL YIELD IN LONDON PRIME" },
    { value: 150, suffix: "k", label: "MINIMUM INVESTMENT (USD)" },
    { value: 40, suffix: "%", label: "PROJECTED 10-YEAR CAPITAL GROWTH" },
    { value: 3, suffix: "", label: "TOP GLOBAL INVESTMENT DESTINATION RANK" }
  ];

  return (
    <section className="bg-korat-dark" ref={sectionRef}>
      <div className="container-custom py-16">
        {/* UAE Section */}
        <div className={`flex items-center space-x-4 mb-8 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <img src="https://flagcdn.com/ae.svg" alt="UAE Flag" className="w-8 h-6" />
          <h3 className="text-lg uppercase">UAE: THE CHOICE OF GLOBAL INVESTORS</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {uaeStats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              suffix={stat.suffix} 
              label={stat.label} 
              isInView={isInView}
              delay={index * 200}
            />
          ))}
        </div>
        
        {/* Divider */}
        <div className="border-b border-gray-800 my-16"></div>
        
        {/* UK Section */}
        <div className={`flex items-center space-x-4 mb-8 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="w-8 h-6" />
          <h3 className="text-lg uppercase">UK: A MARKET DEFINED BY PRESTIGE AND STABILITY</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {ukStats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              suffix={stat.suffix} 
              label={stat.label} 
              isInView={isInView}
              delay={(index * 200) + 600} // Adding more delay after the first set
            />
          ))}
        </div>
      </div>
    </section>
  );
}
