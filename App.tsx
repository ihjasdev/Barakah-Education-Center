
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import CourseDetails from './components/CourseDetails';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { COURSES, TESTIMONIALS, PARTNERS } from './constants';
import { Course } from './types';
import { GraduationCap, Award, Users, TrendingUp, Trees, Heart, Star, Sparkles, Send } from 'lucide-react';
import ITCenter from './assets/class2.jpeg';
const App: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen bg-white selection:bg-amber-200 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* Courses Section */}
        <section id="courses" className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] rounded-full"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-amber-600 text-sm font-black uppercase tracking-[0.3em] mb-4">Expert Training</h2>
                <h3 className="text-5xl lg:text-6xl font-black text-blue-950 tracking-tighter leading-none">
                  Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600">Specialization</span>
                </h3>
              </div>
              <p className="text-lg text-slate-500 max-w-sm font-medium leading-relaxed">
                Unlock global opportunities with our intensive 12-week certificate programs led by industry veterans.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {COURSES.map(course => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  onClick={setSelectedCourse} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Charity Impact Section */}
        <section id="impact" className="py-32 bg-blue-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="w-20 h-20 bg-amber-500/20 flex items-center justify-center rounded-3xl mb-8 border border-amber-500/30">
                  <Heart className="w-10 h-10 text-amber-500" />
                </div>
                <h2 className="text-5xl font-black mb-8 tracking-tighter leading-none">
                  The <span className="text-amber-500">Charity</span> Heart of <br />Our Mission
                </h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
                  We believe education should be accessible to all. As a charity-backed initiative, Barakah Education Center reinvests its resources to provide scholarships and affordable training for underprivileged talented youth in Sri Lanka.
                </p>
                <div className="space-y-6">
                  {[
                    "100+ Scholarships Awarded Annually",
                    "Community Tech Workshops for Schools",
                    "Non-Profit Career Counseling Sessions",
                    "Collaborating with Local Foundations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-lg font-bold">
                      <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-blue-950">
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-3xl">
                  <img 
                    src= {ITCenter} 
                    alt="Education Impact" 
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-10 -left-10 bg-amber-500 p-8 rounded-3xl shadow-2xl z-20 max-w-xs transform rotate-2">
                  <p className="text-blue-950 font-black text-2xl leading-none mb-2 tracking-tighter">Impact Driven</p>
                  <p className="text-blue-900 font-bold text-sm uppercase tracking-widest">Since 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h2 className="text-5xl font-black text-blue-950 tracking-tighter mb-4">Voices of Success</h2>
              <p className="text-lg text-slate-500 font-medium">Hear directly from our alumni across Sri Lanka.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-shadow group">
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-amber-500 fill-current" />)}
                  </div>
                  <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8 italic">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover" />
                    <div>
                      <h4 className="font-black text-blue-950">{t.name}</h4>
                      <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
                {PARTNERS.map(partner => (
                  <span key={partner} className="text-2xl font-black tracking-tighter text-blue-900">{partner}</span>
                ))}
             </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-amber-500">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-4xl font-black text-blue-950 mb-6 tracking-tighter italic">Join Our Monthly Insights</h2>
             <p className="text-blue-900 font-bold mb-10 max-w-xl mx-auto">Get the latest on AI trends, corporate English tips, and center updates directly in your inbox.</p>
             <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
               <input 
                type="email" 
                placeholder="your.email@example.com"
                className="flex-1 px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-900 outline-none font-bold shadow-lg"
               />
               <button className="bg-blue-950 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 shadow-lg">
                Subscribe <Send className="w-4 h-4" />
               </button>
             </form>
           </div>
        </section>

        {/* Inquiry Form */}
        <InquiryForm />
      </main>

      <Footer />
      <WhatsAppButton />
      
      {/* Course Details Modal */}
      <CourseDetails 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
      />
    </div>
  );
};

export default App;
