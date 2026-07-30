import React from 'react';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import Photo2 from '../assets/2.png';
import Photo3 from '../assets/3.png';
import Photo4 from '../assets/4.png';
import Photo5 from '../assets/5.jpg';
import Photo6 from '../assets/6.jpg';
import Photo8 from '../assets/8.jpg';
import Photo9 from '../assets/9.jpg';
import Photo10 from '../assets/10.jpg';
import Photo11 from '../assets/11.jpg';
import Photo12 from '../assets/12.jpg';
import Photo13 from '../assets/13.jpg';
import Photo14 from '../assets/14.jpg';
import Photo15 from '../assets/15.jpg';
import Photo16 from '../assets/16.jpg';
import Photo17 from '../assets/17.jpg';
import Photo18 from '../assets/18.jpg';
import Photo19 from '../assets/19.jpg';
import Photo20 from '../assets/20.jpg';
import Photo21 from '../assets/21.jpg';
import Photo22 from '../assets/22.jpg';
import Photo23 from '../assets/23.jpg';

interface ConvocationPageProps {
  onBack: () => void;
}

const photos = [
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo8,
  Photo9,
  Photo10,
  Photo11,
  Photo12,
  Photo13,
  Photo14,
  Photo15,
  Photo16,
  Photo17,
  Photo18,
  Photo19,
  Photo20,
  Photo21,
  Photo22,
  Photo23
];

const photoCount = photos.length;

const ConvocationPage: React.FC<ConvocationPageProps> = ({ onBack }) => {
  return (
    <section className="min-h-screen bg-slate-50 pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-blue-950 transition-colors hover:border-amber-300 hover:text-amber-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back To Home
        </button>

        <div className="mt-10 rounded-[2.5rem] bg-blue-950 px-8 py-12 text-white shadow-2xl sm:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-amber-300">
                <GraduationCap className="h-4 w-4" />
                Special Album
              </div>
              <h1 className="text-4xl font-black tracking-tighter sm:text-5xl lg:text-6xl">
                Convocation 2026
              </h1>
              <p className="mt-4 text-lg font-medium leading-relaxed text-slate-300">
                Celebrating our 1st and 2nd batch students together with a dedicated photo gallery from the last convocation.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
              {photoCount} Event Photos
            </div>
          </div>
        </div>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <figure
              key={photo}
              className="mb-6 break-inside-avoid overflow-hidden rounded-[2rem] bg-white p-3 shadow-lg shadow-slate-200/70"
            >
              <img
                src={photo}
                alt={`Barakah Education Center convocation 2026 photo ${index + 1}`}
                className="w-full rounded-[1.4rem] object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConvocationPage;
