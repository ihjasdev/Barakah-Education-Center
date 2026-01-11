
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import Logo from '../assets/Barakah-education-center.png';

interface NavbarProps {
  onNavigate?: (page: 'home' | 'donate') => void;
  onEnrollClick?: () => void;
  currentPage?: 'home' | 'donate';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onEnrollClick, currentPage = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
      // Allow time for home page to render before scrolling
      setTimeout(() => {
        if (href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'Our Impact', href: '#impact' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed z-50 transition-all duration-500 ${scrolled ? 'top-4 inset-x-0 mx-auto w-[95%] max-w-7xl rounded-2xl bg-white/90 backdrop-blur-md shadow-2xl py-2 border border-white/20' : 'top-0 w-full bg-white py-3 shadow-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`rounded-lg transition-colors`}>
              <img src={Logo} alt="Barakah Charity Logo" className={`${scrolled ? 'h-20' : 'h-28'} w-auto object-contain transition-all duration-500`} />
            </div>
            {/* <div className="flex flex-col">
              <span className={`text-xl font-black leading-none tracking-tight text-blue-900`}>
                BARAKAH <span className="text-amber-500 font-medium text-sm">CHARITY</span>
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest text-slate-500`}>
                Education Center Sri Lanka
              </span>
            </div> */}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-bold uppercase tracking-wider transition-all hover:translate-y-[-1px] text-slate-600 hover:text-blue-900`}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => onNavigate?.('donate')}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black transition-all transform hover:scale-105 border-2 border-amber-500 text-amber-600 hover:bg-amber-50"
            >
              <Heart className={`w-4 h-4 transition-transform group-hover:scale-110 ${currentPage === 'donate' ? 'fill-amber-600' : ''}`} />
              DONATE
            </button>

            <button
              onClick={() => onEnrollClick?.()}
              className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-7 py-3 rounded-xl text-sm font-black transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              ENROLL NOW
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white animate-in slide-in-from-right duration-300">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="Barakah Charity Logo" className="h-24 w-auto" />
                {/* <span className="text-xl font-black text-blue-900">BARAKAH</span> */}
              </div>
              <button onClick={() => setIsOpen(false)} className="text-blue-900">
                <X size={32} />
              </button>
            </div>
            <div className="flex-1 px-6 py-10 flex flex-col items-center justify-center space-y-8 bg-white">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xl font-black text-blue-900 uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  onNavigate?.('donate');
                  setIsOpen(false);
                }}
                className="w-full border-2 border-amber-500 text-amber-600 py-5 rounded-2xl text-xl font-black flex items-center justify-center gap-3"
              >
                <Heart className="w-6 h-6" />
                DONATE
              </button>

              <button
                onClick={() => {
                  onEnrollClick?.();
                  setIsOpen(false);
                }}
                className="w-full bg-amber-500 text-blue-900 text-center py-5 rounded-2xl text-xl font-black shadow-xl"
              >
                ENROLL NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
