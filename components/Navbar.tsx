
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles } from 'lucide-react';
import Logo from '../assets/Barakah-education-center.png';

interface NavbarProps {
  onNavigate?: (page: 'home' | 'donate' | 'catalog' | 'verification' | 'convocation') => void;
  onEnrollClick?: () => void;
  currentPage?: 'home' | 'donate' | 'catalog' | 'verification' | 'convocation';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onEnrollClick, currentPage = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);
      setIsVisible(currentScrollY < 80 || currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

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
    { name: 'Verify Certificate', page: 'verification' as const },
    { name: 'Our Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  const announcementItems = [
    'New update: Convocation 2026 album is now live',
    'Celebrating our 1st & 2nd batch students together',
    'Admissions open now for our 3rd batch intake 2026 (Closing date: 10-August-2026)',
    'Apply today and reserve your seat for the upcoming batch',
    'Tap to explore all event photos',
  ];

  return (
    <>
      <style>
        {`
          @keyframes barakah-marquee {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
        `}
      </style>

      <div className="fixed top-0 z-[60] w-full overflow-hidden bg-blue-950 text-white shadow-lg">
        <div className="mx-auto flex min-h-[48px] max-w-7xl items-center gap-4 px-4 sm:px-5 lg:px-5 xl:px-7">
          <div className="hidden shrink-0 items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-amber-300 sm:inline-flex">
            <Sparkles className="h-3.5 w-3.5" />
            Recent Update
          </div>

          <button
            onClick={() => onNavigate?.('convocation')}
            className="group flex min-w-0 flex-1 items-center overflow-hidden text-left"
          >
            <div
              className="flex min-w-max items-center gap-10 whitespace-nowrap pr-10 text-xs font-bold uppercase tracking-[0.18em] text-slate-100"
              style={{ animation: 'barakah-marquee 24s linear infinite' }}
            >
              {[...announcementItems, ...announcementItems].map((item, index) => (
                <span key={`${item}-${index}`} className="inline-flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                  {item}
                </span>
              ))}
            </div>
          </button>
        </div>
      </div>

      <nav className={`fixed z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${scrolled ? 'top-[54px] inset-x-0 mx-auto w-[95%] max-w-7xl rounded-2xl bg-white/90 backdrop-blur-md shadow-2xl py-1 border border-white/20 xl:top-[58px] xl:py-2' : 'top-12 w-full bg-white py-1 xl:py-2 shadow-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-5 xl:px-7">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`rounded-lg transition-colors`}>
              <img src={Logo} alt="Barakah Charity Logo" className={`${scrolled ? 'h-10 lg:h-10 xl:h-16 max-[1366px]:h-10' : 'h-12 lg:h-12 xl:h-20 max-[1366px]:h-10'} w-auto object-contain transition-all duration-500`} />
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

          <div className="hidden md:flex items-center space-x-4 lg:space-x-4 xl:space-x-7 max-[1366px]:space-x-3">
            {navLinks.map((link) => (
              link.page ? (
                <button
                  key={link.name}
                  onClick={() => onNavigate?.(link.page)}
                  className={`text-[10px] lg:text-[10px] xl:text-sm font-bold uppercase tracking-[0.08em] xl:tracking-wider transition-all hover:translate-y-[-1px] ${currentPage === link.page ? 'text-amber-600' : 'text-slate-600 hover:text-blue-900'} max-[1366px]:text-[9px] max-[1366px]:tracking-[0.04em]`}
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-[10px] lg:text-[10px] xl:text-sm font-bold uppercase tracking-[0.08em] xl:tracking-wider transition-all hover:translate-y-[-1px] text-slate-600 hover:text-blue-900 max-[1366px]:text-[9px] max-[1366px]:tracking-[0.04em]`}
                >
                  {link.name}
                </a>
              )
            ))}

            <button
              onClick={() => onNavigate?.('donate')}
              className="group flex items-center gap-1.5 px-3 py-1.5 lg:px-3.5 lg:py-1.5 rounded-xl text-[10px] lg:text-[10px] xl:text-sm font-black transition-all transform hover:scale-105 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 max-[1366px]:px-2.5 max-[1366px]:py-1 max-[1366px]:text-[9px]"
            >
              <Heart className={`w-3 h-3 lg:w-3 lg:h-3 xl:w-4 xl:h-4 transition-transform group-hover:scale-110 ${currentPage === 'donate' ? 'fill-amber-600' : ''}`} />
              DONATE
            </button>

            <button
              onClick={() => onEnrollClick?.()}
              className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-4 py-1.5 lg:px-4.5 lg:py-1.5 rounded-xl text-[10px] lg:text-[10px] xl:text-sm font-black transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20 max-[1366px]:px-3 max-[1366px]:py-1 max-[1366px]:text-[9px]"
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
                link.page ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      onNavigate?.(link.page);
                      setIsOpen(false);
                    }}
                    className="text-xl font-black text-blue-900 uppercase tracking-tighter"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xl font-black text-blue-900 uppercase tracking-tighter"
                  >
                    {link.name}
                  </a>
                )
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
    </>
  );
};

export default Navbar;
