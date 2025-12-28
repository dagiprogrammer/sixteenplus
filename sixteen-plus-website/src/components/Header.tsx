// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-blue-950/95 backdrop-blur-xl shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start leading-tight">
            <span className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider drop-shadow-2xl transition-colors duration-300 ${
              isScrolled ? 'text-red-500' : 'text-red-600'
            }`}>
              SIXTEEN PLUS
            </span>
            <span className={`text-base md:text-lg lg:text-xl font-bold tracking-wide -mt-1 transition-colors duration-300 ${
              isScrolled ? 'text-red-400' : 'text-red-600'
            }`}>
              GENERAL TRADING P.L.C.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`relative text-lg font-semibold transition-all duration-300 pb-1 ${
                  isScrolled
                    ? 'text-white hover:text-yellow-300'
                    : location.pathname === '/' && !isScrolled
                    ? 'text-white hover:text-yellow-200'  // White on hero for contrast
                    : 'text-gray-900 hover:text-blue-900'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 transition-all duration-500 ${
                    isScrolled || (location.pathname === '/' && !isScrolled)
                      ? 'bg-yellow-300'
                      : 'bg-blue-900'
                  } w-0 hover:w-full`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block absolute left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled || isMobileMenuOpen ? 'bg-white' : 'bg-gray-900'
              } ${isMobileMenuOpen ? 'top-1/2 -rotate-45' : 'top-3'}`}
            />
            <span
              className={`block absolute left-1/2 -translate-x-1/2 top-1/2 w-8 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled || isMobileMenuOpen ? 'bg-white' : 'bg-gray-900'
              } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`block absolute left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled || isMobileMenuOpen ? 'bg-white' : 'bg-gray-900'
              } ${isMobileMenuOpen ? 'top-1/2 rotate-45' : 'top-7'}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-blue-950/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-12 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="space-y-10" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-4xl font-bold text-white hover:text-yellow-300 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}