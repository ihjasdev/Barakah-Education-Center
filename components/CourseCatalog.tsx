
import React from 'react';
import { Download, FileText, ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import { COURSES } from '../constants';

interface CourseCatalogProps {
    onBack: () => void;
}

const CourseCatalog: React.FC<CourseCatalogProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-slate-50 pt-40 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
                    <div>
                        <button
                            onClick={onBack}
                            className="group flex items-center gap-2 text-blue-900 font-black uppercase tracking-widest text-xs mb-6 hover:text-amber-600 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </button>
                        <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-900/5 text-blue-900 text-xs font-black uppercase tracking-[0.2em] mb-4">
                            <Sparkles className="w-4 h-4 mr-2" /> Academic Resources
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-blue-950 tracking-tighter leading-none mb-4">
                            Course <span className="text-amber-500 italic">Catalog</span>
                        </h1>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl">
                            Transparent curriculum for a transformative education. Download detailed module specifications for our programs.
                        </p>
                    </div>
                </div>

                {/* Catalog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {COURSES.map((course) => (
                        <div key={course.id} className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-10 group hover:shadow-2xl transition-all">
                            <div className={`w-full md:w-32 h-32 rounded-[2.5rem] bg-gradient-to-br ${course.colorClass} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:rotate-3 transition-transform`}>
                                {course.icon}
                            </div>

                            <div className="flex-1 flex flex-col">
                                <div className="mb-6">
                                    <span className="text-amber-600 font-black uppercase tracking-widest text-[10px] block mb-2">{course.duration}</span>
                                    <h3 className="text-3xl font-black text-blue-950 tracking-tighter mb-4 leading-none">{course.title}</h3>
                                    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                                        {course.description}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    {course.modulePdf && course.modulePdf !== '#' ? (
                                        <a
                                            href={course.modulePdf}
                                            download
                                            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-amber-500 hover:text-blue-950 transition-all shadow-xl group/btn"
                                        >
                                            <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                                            Download Module (PDF)
                                        </a>
                                    ) : (
                                        <div className="flex flex-col gap-4">
                                            <button
                                                disabled
                                                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-100 text-slate-400 rounded-2xl font-black uppercase tracking-widest text-xs cursor-not-allowed border border-slate-200"
                                            >
                                                <FileText className="w-4 h-4" />
                                                Module Specification (Sample)
                                            </button>
                                            <div className="flex items-center gap-2 text-amber-600">
                                                <AlertCircle className="w-4 h-4" />
                                                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Modules Updating Soon</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Support Banner */}
                <div className="mt-20 bg-blue-950 rounded-[4rem] p-12 sm:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px]"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tighter">Have specialized questions about <br className="hidden sm:block" /> our curriculum?</h2>
                        <p className="text-slate-400 font-bold mb-10 text-lg">Our academic advisors are available for customized consultations.</p>
                        <button
                            onClick={onBack}
                            className="inline-flex items-center px-10 py-5 bg-amber-500 text-blue-950 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-2xl"
                        >
                            Inquire Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCatalog;
