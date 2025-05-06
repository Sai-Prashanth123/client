import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-korat-dark bg-opacity-95 py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-light uppercase tracking-wider">
            <span className="text-white">KORAT</span>
            <span className="block text-xs text-center tracking-widest text-korat-gold mt-1">PROPERTIES</span>
          </h1>
        </a>
        
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Our Founder', 'Investments', 'Properties'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-wider hover:text-korat-gold transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
        
        <button 
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 bg-korat-dark bg-opacity-95 z-50">
            <div className="container-custom py-6 flex justify-end">
              <button onClick={() => setMenuOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="container-custom py-12">
              <ul className="flex flex-col space-y-6">
                {['Home', 'About', 'Our founder', 'Investments', 'Properties'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-xl uppercase tracking-wider hover:text-korat-gold transition-colors block"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li className="pt-6">
                  <a 
                    href="#contact" 
                    className="btn-primary inline-block"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
