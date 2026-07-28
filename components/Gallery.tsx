import React from 'react';
import { ArrowRight, Camera, Coffee, Sparkles, Users } from 'lucide-react';
import Class1 from '../assets/class1.jpeg';
import Class2 from '../assets/class2.jpeg';
import Class3 from '../assets/class3.jpeg';
import Class4 from '../assets/class4.jpeg';
import ConvocationCover from '../assets/2.png';

interface GalleryProps {
    onViewConvocation?: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ onViewConvocation }) => {
    const galleryItems = [
        {
            src: Class1,
            category: 'Collaborative Learning',
            title: 'Advanced Computer Labs Kinniya',
            size: 'col-span-1 md:col-span-2 row-span-2'
        },
        {
            src: Class3,
            category: 'Modern Facilities',
            title: 'Web Development Group Projects',
            size: 'col-span-1'
        },
        {
            src: Class4,
            category: 'Student Life',
            title: 'Barakah Education Center Events',
            size: 'col-span-1'
        },
        {
            src: Class2,
            category: 'Mentorship',
            title: 'Expert AI & Tech Guidance',
            size: 'col-span-1 md:col-span-2'
        },
        {
            src: ConvocationCover,
            category: 'Convocation 2026',
            title: '1st & 2nd Batch Celebration',
            size: 'col-span-1 md:col-span-2',
            featured: true
        }
    ];

    return (
        <section id="gallery" className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-amber-600 text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                            <Camera className="w-4 h-4" />
                            Student Life
                        </h2>
                        <h3 className="text-5xl lg:text-6xl font-black text-blue-950 tracking-tighter leading-none">
                            Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600">Barakah</span>
                        </h3>
                    </div>
                    <p className="text-lg text-slate-500 max-w-sm font-medium leading-relaxed">
                        Experience a vibrant community dedicated to growth, innovation, and excellence in technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${item.size}`}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent transition-opacity duration-300 ${item.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                <div className={`absolute bottom-0 left-0 p-8 transition-transform duration-300 ${item.featured ? 'translate-y-0' : 'transform translate-y-4 group-hover:translate-y-0'}`}>
                                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                                    <h4 className="text-white text-2xl font-black tracking-tight">{item.title}</h4>
                                    {item.featured && onViewConvocation && (
                                        <button
                                            onClick={onViewConvocation}
                                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-blue-950 transition-transform hover:translate-x-1"
                                        >
                                            View Full Album
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 rounded-[2rem] border border-amber-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm md:flex md:items-center md:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-600">Featured Event</p>
                        <h4 className="mt-3 text-2xl font-black tracking-tight text-blue-950">Last Convocation 2026 for 1st & 2nd Batch Students</h4>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">
                            We kept the main gallery compact and moved the full convocation photo collection to a separate page for a smoother browsing experience.
                        </p>
                    </div>
                    {onViewConvocation && (
                        <button
                            onClick={onViewConvocation}
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-950 px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-blue-900 md:mt-0"
                        >
                            Open Convocation Page
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                    {[
                        { icon: Users, label: "Active Students", value: "65+" },
                        { icon: Sparkles, label: "Events Yearly", value: "12+" },
                        { icon: Coffee, label: "Study Zones", value: "4" },
                        { icon: Users, label: "Alumni Network", value: "60+" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-3xl font-black text-blue-950 mb-1">{stat.value}</div>
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
