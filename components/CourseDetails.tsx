
import React from 'react';
import { X, Calendar, BookOpen, Layers, Trees } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailsProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: () => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course, onClose, onEnroll }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-blue-950/95 backdrop-blur-xl" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-[3rem] shadow-2xl animate-in zoom-in-95 fade-in duration-300 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:my-8 [&::-webkit-scrollbar-thumb]:bg-amber-500 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-amber-600">
        <button
          onClick={onClose}
          className="fixed md:absolute top-6 right-6 p-4 bg-slate-100 hover:bg-amber-500 hover:text-blue-900 rounded-2xl transition-all z-[110]"
        >
          <X className="w-6 h-6" />
        </button>

        <div className={`h-6 w-full bg-gradient-to-r ${course.colorClass}`}></div>

        <div className="p-10 sm:p-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <span className={`p-4 rounded-3xl bg-gradient-to-br ${course.colorClass} text-white shadow-2xl group-hover:rotate-6 transition-transform`}>
                  {course.icon}
                </span>
                <div>
                  <span className="text-amber-600 font-black uppercase tracking-[0.2em] text-xs mb-1 block">
                    {course.duration}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-900/60 font-bold text-[10px] uppercase">Barakah Professional Training Center</span>
                  </div>
                </div>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-blue-950 tracking-tighter leading-none mb-4">{course.title}</h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl">{course.description}</p>
            </div>
            <button
              onClick={onEnroll}
              className={`px-10 py-5 rounded-2xl bg-blue-950 text-white font-black uppercase tracking-widest text-sm shadow-2xl text-center hover:bg-amber-600 hover:text-blue-950 transition-all`}
            >
              Enroll in Program
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900">
                  <Calendar className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black text-blue-950 tracking-tighter">Curriculum Timeline</h4>
              </div>

              <div className="space-y-12 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-1 before:bg-slate-100">
                {course.timeline.map((item, i) => (
                  <div key={i} className="relative pl-16">
                    <div className="absolute left-0 top-1 w-12 h-12 rounded-2xl bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center z-10">
                      <span className="text-blue-950 font-black text-lg">{i + 1}</span>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-amber-200 transition-colors">
                      <h5 className="text-xl font-black text-blue-950 mb-6 uppercase tracking-tighter">{item.month}</h5>
                      <ul className="space-y-4">
                        {item.topics.map((topic, j) => (
                          <li key={j} className="flex items-start text-slate-600 font-bold">
                            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-4 flex-shrink-0"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                <h4 className="flex items-center text-lg font-black uppercase tracking-widest text-amber-500 mb-6">
                  <BookOpen className="mr-3 w-5 h-5" />
                  Skill Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {course.features.map((feature, i) => (
                    <span key={i} className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-black tracking-tight">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {course.instructor && (
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl">
                  <h4 className="text-lg font-black uppercase tracking-widest text-blue-950 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Instructor
                  </h4>
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-100 flex-shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(course.instructor!.name)}&background=0f172a&color=fff`;
                      }}
                    />
                    <div className="flex-1">
                      <h5 className="font-black text-blue-950 text-lg leading-tight mb-1">{course.instructor.name}</h5>
                      <p className="text-amber-600 font-bold text-xs uppercase tracking-wider">{course.instructor.role}</p>
                      <p className="text-amber-600 font-bold text-xs uppercase tracking-wider">{course.instructor.education}</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-4">
                    {course.instructor.bio}
                  </p>
                  {course.instructor.linkedin && (
                    <a
                      href={course.instructor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-black uppercase tracking-widest text-blue-900 hover:text-amber-600 transition-colors"
                    >
                      View Profile →
                    </a>
                  )}
                </div>
              )}

              <div className="bg-amber-500 p-8 rounded-[2rem] border-4 border-blue-950 shadow-2xl transform rotate-2">
                <h4 className="flex items-center text-lg font-black text-blue-950 mb-4 tracking-tighter">
                  <Layers className="mr-3 w-6 h-6" />
                  Certificate Earned
                </h4>
                <p className="text-blue-900 font-bold text-sm leading-relaxed mb-6">
                  Upon completion, you'll receive the official "Barakah Professional Excellence" digital and physical credentials recognized by our corporate partners.
                </p>
                <div className="p-4 bg-white/40 rounded-xl border border-white/20 text-center font-black text-blue-900 uppercase text-xs tracking-[0.2em]">
                  Validated Credential
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
