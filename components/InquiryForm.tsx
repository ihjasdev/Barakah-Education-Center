
import React from 'react';
import { Send, Phone, User, BookCheck, Sparkles, GraduationCap, ClipboardCheck } from 'lucide-react';
import { COURSES } from '../constants';

interface InquiryFormProps {
  onEnrollClick: () => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ onEnrollClick }) => {
  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-900/5 text-blue-900 text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-4 h-4 mr-2" /> Admission Open for 2026
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-blue-950 mb-8 tracking-tighter leading-[0.9]">
              Start Your <span className="text-amber-500 italic">Journey</span>. <br />Apply Today.
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              Ready to take your skills to the next level? Fill out our official application form to begin your 3-month intensive training program.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {[
                { label: 'Campus', value: 'Kinniya,Trincomalee', icon: '📍' },
                { label: 'Support', value: 'Sat,Sunday Advisory', icon: '💎' },
                { label: 'Call', value: '+94 771380123', icon: '📞' },
                { label: 'Email', value: 'info.barakaitcenter@gmail.com', icon: '✉️' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-black text-blue-950 text-sm uppercase tracking-widest">{item.label}</h4>
                  <p className="text-slate-500 font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-950 p-12 sm:p-20 rounded-[4rem] shadow-3xl relative overflow-hidden group text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[80px]"></div>

              <div className="relative z-10">
                <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center text-blue-950 text-4xl mx-auto mb-8 shadow-2xl">
                  <ClipboardCheck className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase italic">3 rd Batch Intake</h3>
                <p className="text-slate-400 font-bold mb-10 leading-relaxed">
                  Join our elite group of students. Our application process is quick and simple.
                </p>

                <button
                  onClick={onEnrollClick}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-blue-950 font-black py-8 rounded-3xl transition-all flex items-center justify-center group shadow-2xl shadow-amber-500/20 uppercase tracking-widest text-xl transform hover:-translate-y-1"
                >
                  Enroll Now
                  <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>

                <p className="mt-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  Secure your spot • Limited Seats Available (Only 15 students per batch) • Apply Now
                </p>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
