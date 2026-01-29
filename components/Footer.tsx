
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Trees, Mail, PhoneCall } from 'lucide-react';
import Logo from '../assets/Barakah-white logo.png';

interface FooterProps {
  onNavigate?: (page: 'home' | 'donate' | 'catalog') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-blue-950 text-white pt-32 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8" onClick={() => onNavigate?.('home')}>
              <div className={`rounded-lg transition-colors cursor-pointer`}>
                <img src={Logo} alt="Barakah Charity Logo" className="h-24 w-auto object-contain" />
              </div>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed mb-10">
              Transforming lives through technical excellence and humanitarian values. Proudly serving the Sri Lankan community since 2023.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 hover:bg-amber-500 hover:text-blue-950 transition-all rounded-2xl flex items-center justify-center text-slate-300 border border-white/5">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 tracking-tighter text-amber-500 uppercase">Quick Navigation</h4>
            <ul className="space-y-5 text-slate-400 font-bold">
              {[
                { name: 'Home', page: 'home' },
                { name: 'Course Catalog', page: 'catalog' },
                { name: 'Our Impact', href: '#impact' },
                { name: 'About Charity', href: 'https://barakah.ch/en/' },
                { name: 'Contact Support', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  {link.page ? (
                    <button
                      onClick={() => onNavigate?.(link.page as 'home' | 'donate' | 'catalog')}
                      className="hover:text-white transition-colors flex items-center group uppercase text-xs tracking-widest"
                    >
                      <span className="w-0 group-hover:w-3 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all"></span>
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="hover:text-white transition-colors flex items-center group uppercase text-xs tracking-widest">
                      <span className="w-0 group-hover:w-3 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all"></span>
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 tracking-tighter text-amber-500 uppercase">Our Programs</h4>
            <ul className="space-y-5 text-slate-400 font-bold">
              {[
                { name: 'Vibe Coding', page: 'catalog' },
                { name: 'Communication English', page: 'catalog' },
                { name: 'CAD & Building Studies', page: 'catalog' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate?.(link.page as 'home' | 'donate' | 'catalog')}
                    className="hover:text-white transition-colors flex items-center group uppercase text-xs tracking-widest"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 tracking-tighter text-amber-500 uppercase">Office Location</h4>
            <div className="space-y-6">
              <div className="flex items-start text-slate-400 group">
                <MapPin className="w-6 h-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
                <span className="font-bold">vilveli, <br />Kinniya-04, Sri Lanka</span>
              </div>
              <div className="flex items-center text-slate-400">
                <PhoneCall className="w-6 h-6 text-amber-500 mr-4 flex-shrink-0" />
                <span className="font-bold">+94 771380123</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail className="w-6 h-6 text-amber-500 mr-4 flex-shrink-0" />
                <span className="font-bold">info.barakaitcenter@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-bold text-sm">
            © {new Date().getFullYear()} Barakah Charity Education Center Sri Lanka.
          </p>
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-amber-500">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
