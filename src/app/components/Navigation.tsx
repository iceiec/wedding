import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
          <span className={`text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Sarah & James
          </span>
        </button>
        
        <div className="hidden md:flex gap-8" style={{ fontFamily: 'Lato, sans-serif' }}>
          {['Our Story', 'Details', 'RSVP', 'Gallery', 'Travel'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className={`hover:text-rose-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
