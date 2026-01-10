import React from 'react';
import { ArrowRight, MessageCircle, Trees } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import HeroBg from '../assets/class2.jpeg';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-blue-900">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={HeroBg} alt="Background" className="w-full h-full object-cover opacity-75 mix-blend-overlay" />
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
      </div>

      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      {/* Brand Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold uppercase tracking-widest mb-8 animate-fade-in">
              <Trees className="w-4 h-4 mr-2" /> Founded on Trust & Excellence
            </div>
            <h1 className="text-5xl lg:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              Skills for <span className="text-amber-500">Tomorrow</span>. <br />
              Results <span className="underline decoration-amber-500/30 underline-offset-8">Today</span>.
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-xl font-medium">
              Barakah Charity Education Center is Sri Lanka's premier destination for specialized 3-month courses. Transform your career with AI, Language, and Engineering mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#courses"
                className="group flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-blue-950 px-10 py-5 rounded-2xl font-black uppercase tracking-tighter transition-all transform hover:-translate-y-1 shadow-2xl shadow-amber-500/30"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-tighter transition-all"
              >
                <MessageCircle className="mr-3 w-6 h-6 text-amber-400" />
                WhatsApp Advisory
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:w-2/5 relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-800 to-blue-950 border border-white/10 p-10 rounded-[3rem] shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Courses', val: '03' },
                  { label: 'Students', val: '50+' },
                  { label: 'Success', val: '98%' },
                  { label: 'Weeks', val: '12' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-amber-500/10 transition-colors">
                    <p className="text-amber-500 text-3xl font-black mb-1">{stat.val}</p>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="flex -space-x-3 mb-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-slate-700 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Student" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-blue-900 bg-amber-500 flex items-center justify-center text-[10px] font-black text-blue-900">
                    +200
                  </div>
                </div>
                <p className="text-white font-bold text-sm tracking-tight">Join our growing community in Sri Lanka.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
