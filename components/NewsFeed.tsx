
import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Sparkles } from 'lucide-react';
import { NEWS_FEED } from '../constants';
import Logo from '../assets/barakah-title.png';

const NewsFeed: React.FC = () => {
    return (
        <section id="newsfeed" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-900/5 text-blue-900 text-xs font-black uppercase tracking-[0.2em] mb-6">
                        <Sparkles className="w-4 h-4 mr-2" /> Stay Updated
                    </div>
                    <h2 className="text-5xl font-black text-blue-950 tracking-tighter mb-4 italic">Latest <span className="text-amber-500">Feed</span></h2>
                    <p className="text-lg text-slate-500 font-medium">Follow our journey and student success stories.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {NEWS_FEED.map((post) => (
                        <div key={post.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all group">
                            {/* Post Header */}
                            <div className="p-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 p-1 overflow-hidden">
                                        <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-blue-900 text-sm leading-tight">{post.author}</h4>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</p>
                                    </div>
                                </div>
                                <button className="text-slate-400 hover:text-blue-900 transition-colors">
                                    <MoreHorizontal className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Post Content */}
                            <div className="px-6 pb-4">
                                <p className="text-slate-600 font-medium text-sm leading-relaxed line-clamp-3">
                                    {post.content}
                                </p>
                            </div>

                            {/* Post Image */}
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt="Post content"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Post Interaction */}
                            <div className="p-6 border-t border-slate-50">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors font-bold text-sm">
                                            <Heart className="w-5 h-5" />
                                            {post.likes}
                                        </button>
                                        <button className="flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors font-bold text-sm">
                                            <MessageCircle className="w-5 h-5" />
                                            {post.comments}
                                        </button>
                                    </div>
                                    <button className="text-slate-500 hover:text-green-500 transition-colors">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=${i + post.id}`} alt="User" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Liked by others</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://www.facebook.com/swissbarakah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-blue-950 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-amber-500 hover:text-blue-950 transition-all shadow-xl"
                    >
                        Visit Our Facebook Page
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NewsFeed;
