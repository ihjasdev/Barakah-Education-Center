import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle, Trees } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import HeroBg from '../assets/3.png';

const Hero: React.FC = () => {
  const rotatingWords = ['Build', 'Learn', 'Lead', 'Grow'];
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex];
    const shouldPause = !isDeleting && typedText === currentWord;
    const completedDeletion = isDeleting && typedText === '';

    if (completedDeletion) {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % rotatingWords.length);
      return;
    }

    const timeout = window.setTimeout(() => {
      if (shouldPause) {
        setIsDeleting(true);
        return;
      }

      setTypedText((current) =>
        isDeleting
          ? current.slice(0, -1)
          : currentWord.slice(0, current.length + 1)
      );
    }, shouldPause ? 1100 : isDeleting ? 55 : 110);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, typedText, wordIndex, rotatingWords]);

  const stats = [
    { label: 'Courses', val: '03' },
    { label: 'Students', val: '65+' },
    { label: 'Hours', val: '48' },
    { label: 'Weeks', val: '12' },
  ];

  return (
    <div className="relative flex min-h-[100svh] items-center overflow-hidden bg-blue-900 pt-24 sm:pt-28 lg:min-h-[92svh] lg:pt-32 xl:min-h-screen">
      <style>
        {`
          @keyframes hero-fade-up {
            0% {
              opacity: 0;
              transform: translate3d(0, 24px, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
        `}
      </style>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-8 relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div
            className="w-full"
            style={{ animation: 'hero-fade-up 700ms ease-out both' }}
          >
            <div className="mb-5 inline-flex items-center rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-400 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.16em] xl:text-sm xl:tracking-widest">
              <Trees className="w-4 h-4 mr-2" /> Founded on Trust & Excellence
            </div>
            <p className="mb-4 min-h-[1.75rem] text-sm font-black uppercase tracking-[0.28em] text-amber-400 sm:text-base">
              {typedText}
              <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-amber-400 align-middle"></span>
            </p>
            <h1 className="mb-5 text-4xl font-black leading-[0.95] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Barakah Charity
              <br />
              <span className="text-amber-500">Education Center</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-sm font-medium leading-relaxed text-slate-300 sm:text-base md:text-lg xl:text-xl">
              Sri Lanka's premier destination for specialized AI-Assisted Web Development, CAD & Building Services and Communication English courses. Transform your career with Barakah Charity Education Center.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="#courses"
                className="group flex min-w-[220px] items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 text-sm font-black uppercase tracking-tight text-blue-950 shadow-2xl shadow-amber-500/30 transition-all hover:-translate-y-1 hover:bg-amber-600 sm:min-w-[230px] xl:px-10 xl:py-5 xl:text-base"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-4 h-4 xl:w-5 xl:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[220px] items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-black uppercase tracking-tight text-white backdrop-blur-md transition-all hover:bg-white/10 sm:min-w-[230px] xl:px-10 xl:py-5 xl:text-base"
              >
                <MessageCircle className="mr-2.5 w-4 h-4 xl:mr-3 xl:w-6 xl:h-6 text-amber-400" />
                WhatsApp Advisory
              </a>
            </div>

            {/* <div className="mx-auto mt-10 w-full max-w-3xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-800 to-blue-950 p-5 shadow-2xl sm:p-6 xl:rounded-[3rem] xl:p-10">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="rounded-[1.4rem] border border-white/5 bg-white/5 p-4 transition-colors hover:bg-amber-500/10 xl:rounded-3xl xl:p-6">
                    <p className="mb-1 text-2xl font-black text-amber-500 sm:text-3xl xl:text-4xl">{stat.val}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/60 sm:text-xs xl:tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-white/5 pt-5 xl:mt-8 xl:pt-8">
                <p className="text-center text-xs font-bold tracking-tight text-white sm:text-sm xl:text-base">
                  Join our growing community in Sri Lanka.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
