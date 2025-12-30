import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { BookOpen, ArrowRight } from 'lucide-react';

const SleepGuides = () => {
    const [guides] = useState([
        {
            id: 1,
            title: "The Cool Comfort of Sleeping Naked",
            category: "Sleep Science",
            readTime: "5 min read",
            excerpt: "Ditch the pajamas. Science says sleeping in your birthday suit boosts health, happiness, and intimacy.",
            link: "/sleep-guides/sleeping-naked",
            image: "https://images.unsplash.com/photo-1541781777621-39121f476b96?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 2,
            title: "What Causes Snoring?",
            category: "Health",
            readTime: "8 min read",
            excerpt: "Snoring is often a mechanical problem. Here’s how to troubleshoot your airway and get some peace.",
            link: "/sleep-guides/what-causes-snoring",
            image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 3,
            title: "Why Sleep Matters",
            category: "Wellness",
            readTime: "6 min read",
            excerpt: "It's not just about energy. Sleep cleans your brain, rebuilds your body, and keeps you sane.",
            link: "/sleep-guides/why-sleep-matters",
            image: "https://images.unsplash.com/photo-1511295742362-92c96b5add03?auto=format&fit=crop&q=80&w=600"
        }
    ]);

    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            <div className="bg-jet-black py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4">Sleep Guides & Resources</h1>
                <p className="text-xl text-alabaster-grey max-w-2xl mx-auto">
                    Expert-backed advice to help you sleep better, tonight.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {guides.map((guide) => (
                        <Link to={guide.link} key={guide.id} className="group bg-white rounded-2xl shadow-sm border border-alabaster-grey overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={guide.image}
                                    alt={guide.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-bold text-jet-black px-3 py-1 rounded-full shadow-sm">
                                        {guide.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-golden-bronze font-medium mb-3">
                                    <BookOpen size={14} />
                                    <span>{guide.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-jet-black mb-3 group-hover:text-golden-bronze transition-colors">
                                    {guide.title}
                                </h3>
                                <p className="text-graphite text-sm line-clamp-2 mb-4">
                                    {guide.excerpt}
                                </p>
                                <div className="flex items-center text-jet-black font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowRight size={16} className="ml-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SleepGuides;
