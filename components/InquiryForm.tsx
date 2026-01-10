
import React, { useState } from 'react';
import { Send, Phone, User, BookCheck, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../types';
import { COURSES } from '../constants';

const InquiryForm: React.FC = () => {
  const [form, setForm] = useState<InquiryFormData>({
    name: '',
    phone: '',
    course: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
             <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-900/5 text-blue-900 text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-4 h-4 mr-2" /> Admission Open for 2024
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-blue-950 mb-8 tracking-tighter leading-[0.9]">
              Take the <span className="text-amber-500 italic">Leap</span>. <br />Enroll Now.
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              Join a network of successful professionals. Our admission advisors are here to guide you through the 3-month intensive journey.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { label: 'Campus', value: 'Colombo, LK', icon: '📍' },
                { label: 'Support', value: '24/7 Advisory', icon: '💎' },
                { label: 'Call', value: '+94 70 000', icon: '📞' },
                { label: 'Email', value: 'apply@barakah', icon: '✉️' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-black text-blue-950 text-sm uppercase tracking-widest">{item.label}</h4>
                  <p className="text-slate-500 font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-950 p-8 sm:p-16 rounded-[4rem] shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[80px]"></div>
            
            {submitted ? (
              <div className="text-center py-20 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center text-blue-950 text-4xl mx-auto mb-8 shadow-2xl">
                  ✓
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">Application Sent!</h3>
                <p className="text-slate-400 font-bold italic">Our lead advisor will call you within 12 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-3 ml-2">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      required
                      type="text" 
                      placeholder="AHAMED IRFAN"
                      className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-amber-500 outline-none transition-all font-bold placeholder:text-white/20"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-3 ml-2">Contact No</label>
                    <div className="relative">
                      <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input 
                        required
                        type="tel" 
                        placeholder="+94 7X"
                        className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-amber-500 outline-none transition-all font-bold placeholder:text-white/20"
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-3 ml-2">Select Program</label>
                    <div className="relative">
                      <BookCheck className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <select 
                        required
                        className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-amber-500 outline-none transition-all font-bold appearance-none cursor-pointer"
                        value={form.course}
                        onChange={(e) => setForm({...form, course: e.target.value})}
                      >
                        <option value="" className="bg-blue-950">SELECT COURSE</option>
                        {COURSES.map(c => <option key={c.id} value={c.id} className="bg-blue-950">{c.title.toUpperCase()}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-3 ml-2">Questions?</label>
                  <textarea 
                    rows={4}
                    placeholder="TELL US MORE ABOUT YOUR GOALS..."
                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-5 px-6 text-white focus:border-amber-500 outline-none transition-all font-bold placeholder:text-white/20 resize-none"
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-blue-950 font-black py-6 rounded-2xl transition-all flex items-center justify-center group shadow-2xl shadow-amber-500/20 uppercase tracking-widest text-lg"
                >
                  Confirm Enrollment
                  <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
