import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { Microscope, ArrowRight, AlertTriangle } from 'lucide-react';

const MattressReviewsHub = () => {
    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />
            <div className="bg-jet-black py-20 px-4 text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4">Mattress Reviews</h1>
                <p className="text-xl text-alabaster-grey">Deep dive reviews into the top brands.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* Purple Card */}
                <Link to="/mattress-reviews/purple-original" className="group block max-w-2xl mx-auto bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10">
                    <div className="relative h-64 bg-gradient-to-tr from-[#4B1E78] to-[#662D91] flex items-center justify-center p-8">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <h2 className="text-4xl font-black text-white z-10 font-serif">Purple Original</h2>
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20">
                            Living Review
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex items-center gap-2 text-golden-bronze font-bold text-xs uppercase tracking-wider mb-3">
                            <Microscope size={14} /> Long-Term Durability Test
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-golden-bronze transition-colors">
                            Purple Mattress: 5-Year Longevity Forecast
                        </h3>
                        <p className="text-alabaster-grey mb-6">
                            We analyzed hundreds of owner reports and warranty claims to determine if the Purple Grid actually holds up, or if it's just hype.
                        </p>
                        <div className="flex items-center text-white font-semibold text-sm group-hover:translate-x-2 transition-transform">
                            View Research <ArrowRight size={16} className="ml-2" />
                        </div>
                    </div>
                </Link>

                {/* WinkBed Card */}
                <Link to="/mattress-reviews/winkbed-original" className="group block max-w-2xl mx-auto mt-8 bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10">
                    <div className="relative h-64 bg-gradient-to-tr from-[#1a1a1a] to-[#242f40] flex items-center justify-center p-8">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                        <h2 className="text-4xl font-black text-white z-10 font-serif">WinkBed Hybrid</h2>
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20">
                            Living Review
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex items-center gap-2 text-golden-bronze font-bold text-xs uppercase tracking-wider mb-3">
                            <Microscope size={14} /> Long-Term Durability Test
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-golden-bronze transition-colors">
                            WinkBed: 5-Year Longevity Forecast
                        </h3>
                        <p className="text-alabaster-grey mb-6">
                            Deep analysis of coil fatigue, pillow-top compression, and structural integrity over 5 years of daily use.
                        </p>
                        <div className="flex items-center text-white font-semibold text-sm group-hover:translate-x-2 transition-transform">
                            View Research <ArrowRight size={16} className="ml-2" />
                        </div>
                    </div>
                </Link>

                {/* 5 Truths Card */}
                <Link to="/mattress-reviews/five-truths-winkbed" className="group block max-w-2xl mx-auto mt-8 bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10">
                    <div className="relative h-64 bg-gradient-to-tr from-[#8B0000] to-[#B22222] flex items-center justify-center p-8">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <h2 className="text-4xl font-black text-white z-10 font-serif text-center">5 Truths About WinkBed</h2>
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20">
                            Critical Analysis
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex items-center gap-2 text-golden-bronze font-bold text-xs uppercase tracking-wider mb-3">
                            <AlertTriangle size={14} /> Buyer Awareness
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-golden-bronze transition-colors">
                            5 Surprising Truths Before You Buy
                        </h3>
                        <p className="text-alabaster-grey mb-6">
                            Discover the crucial details hidden behind the 5-star reviews: foundation issues, warranty catches, and weight dependency.
                        </p>
                        <div className="flex items-center text-white font-semibold text-sm group-hover:translate-x-2 transition-transform">
                            Read Article <ArrowRight size={16} className="ml-2" />
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default MattressReviewsHub;
