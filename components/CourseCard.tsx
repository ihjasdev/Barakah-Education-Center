
import React from 'react';
import { CheckCircle2, ChevronRight, Trees } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div
      onClick={() => onClick(course)}
      className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.colorClass} opacity-5 -mr-16 -mt-16 rounded-full group-hover:scale-[3] transition-transform duration-1000`}></div>

      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${course.colorClass} flex items-center justify-center text-white mb-8 shadow-2xl shadow-blue-900/10 group-hover:rotate-12 transition-transform duration-500`}>
        {course.icon}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
        <p className="text-amber-600 font-black text-xs uppercase tracking-[0.2em]">{course.subtitle}</p>
      </div>

      <h3 className="text-3xl font-black text-blue-950 mb-4 leading-none tracking-tighter">{course.title}</h3>
      <p className="text-slate-500 mb-8 font-medium leading-relaxed">{course.description}</p>

      <div className="space-y-4 mb-10">
        {course.features.slice(0, 3).map((feature, i) => (
          <div key={i} className="flex items-center text-slate-700 text-sm font-bold">
            <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
            {feature}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-slate-50 pt-8 mt-auto">
        <span className="text-blue-900 font-black tracking-tight text-lg group-hover:text-amber-600 transition-colors">View {course.title} Details</span>
        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-blue-950 transition-all">
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
