import React from 'react';
import Header from '../../components/Header';
import Link from 'next/link';
import { Microscope, ArrowRight, AlertTriangle } from 'lucide-react';

const MattressReviewsHub = () => {
    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />
            <div className="bg-jet-black py-20 px-4 text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4">Mattress Reviews</h1>
                <p className="text-xl text-alabaster-grey">Deep dive reviews into the top brands.</p>
            </div>

            {/* Top Picks CTA */}
            <div className="max-w-7xl mx-auto px-4 pt-12">
                <div className="bg-alabaster-grey/20 border border-alabaster-grey rounded-2xl p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-golden-bronze mb-2">Start Here</div>
                        <h2 className="text-2xl font-bold text-jet-black mb-2">Want the shortlist?</h2>
                        <p className="text-graphite max-w-2xl">
                            Jump to our category winners, then drill into the Living Review data for the model you’re considering.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <Link href="/top-picks/best-overall-mattress" className="inline-flex items-center bg-white hover:bg-alabaster-grey/30 text-jet-black font-semibold px-4 py-2 rounded-full border border-alabaster-grey transition-colors">
                                Best Overall
                            </Link>
                            <Link href="/top-picks/best-mattress-for-back-pain" className="inline-flex items-center bg-white hover:bg-alabaster-grey/30 text-jet-black font-semibold px-4 py-2 rounded-full border border-alabaster-grey transition-colors">
                                Back Pain
                            </Link>
                            <Link href="/top-picks/best-value-mattress" className="inline-flex items-center bg-white hover:bg-alabaster-grey/30 text-jet-black font-semibold px-4 py-2 rounded-full border border-alabaster-grey transition-colors">
                                Best Value
                            </Link>
                            <Link href="/top-picks/best-cooling-mattress" className="inline-flex items-center bg-white hover:bg-alabaster-grey/30 text-jet-black font-semibold px-4 py-2 rounded-full border border-alabaster-grey transition-colors">
                                Best Cooling
                            </Link>
                            <Link href="/top-picks/best-organic-mattress" className="inline-flex items-center bg-white hover:bg-alabaster-grey/30 text-jet-black font-semibold px-4 py-2 rounded-full border border-alabaster-grey transition-colors">
                                Organic
                            </Link>
                            <Link href="/top-picks/best-latex-mattress" className="inline-flex items-center bg-white hover:bg-alabaster-grey/30 text-jet-black font-semibold px-4 py-2 rounded-full border border-alabaster-grey transition-colors">
                                Latex
                            </Link>
                            <Link href="/top-picks/best-mattress-for-side-sleepers" className="inline-flex items-center bg-white hover:bg-alabaster-grey/30 text-jet-black font-semibold px-4 py-2 rounded-full border border-alabaster-grey transition-colors">
                                Side Sleepers
                            </Link>
                            <Link href="/top-picks/best-mattress-for-heavy-sleepers" className="inline-flex items-center bg-white hover:bg-alabaster-grey/30 text-jet-black font-semibold px-4 py-2 rounded-full border border-alabaster-grey transition-colors">
                                Heavy Sleepers
                            </Link>
                            <Link href="/top-picks/best-luxury-mattress" className="inline-flex items-center bg-white hover:bg-alabaster-grey/30 text-jet-black font-semibold px-4 py-2 rounded-full border border-alabaster-grey transition-colors">
                                Luxury
                            </Link>
                        </div>
                    </div>

                    <Link href="/top-picks" className="inline-flex items-center justify-center gap-2 bg-jet-black hover:bg-jet-black-800 text-white font-bold py-3 px-6 rounded-xl transition-colors shrink-0">
                        View Top Picks <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Purple Card */}
                    <Link href="/mattress-reviews/purple-original" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#4B1E78] to-[#662D91] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">Purple Original</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Living Review
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <Microscope size={12} /> Long-Term Durability Test
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                Purple Mattress: 5-Year Longevity Forecast
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                We analyzed hundreds of owner reports and warranty claims to determine if the Purple Grid actually holds up, or if it's just hype.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                View Research <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* Brooklyn Bedding Aurora Luxe Card */}
                    <Link href="/mattress-reviews/brooklyn-bedding-aurora-luxe" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#0e7490] to-[#155e75] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">Aurora Luxe</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Living Review
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <Microscope size={12} /> Long-Term Durability Test
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                Aurora Luxe: 5-Year Cooling & Sagging Forecast
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                Does the cooling actually last? We analyze phase-change material lifespan and foam density degradation over time.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                View Research <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* WinkBed Card */}
                    <Link href="/mattress-reviews/winkbed-original" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#1a1a1a] to-[#242f40] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">WinkBed Hybrid</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Living Review
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <Microscope size={12} /> Long-Term Durability Test
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                WinkBed: 5-Year Longevity Forecast
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                Deep analysis of coil fatigue, pillow-top compression, and structural integrity over 5 years of daily use.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                View Research <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* Leesa Card */}
                    <Link href="/mattress-reviews/leesa-original" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#2563eb] to-[#4f46e5] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">Leesa Original</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Living Review
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <Microscope size={12} /> Long-Term Durability Test
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                Leesa Original: 5-Year Softening Forecast
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                An evidence-based look at how the 3.0 pcf density memory foam holds up over time. Will it soften too fast for you?
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                View Research <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* Leesa Legend Card */}
                    <Link href="/mattress-reviews/leesa-legend" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#1e293b] to-[#475569] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">Leesa Legend</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Living Review
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <Microscope size={12} /> Dual-Hybrid Analysis
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                Leesa Legend: Micro-Coil Durability Test
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                Does the dual-coil system actually extend lifespan? We analyze the durability of the micro-coil comfort layer vs standard foam.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                View Research <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* WinkBed EcoCloud Card */}
                    <Link href="/mattress-reviews/winkbed-ecocloud" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#3f6212] to-[#65a30d] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">EcoCloud</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Living Review
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <Microscope size={12} /> Talalay Latex Analysis
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                EcoCloud: 5-Year Resilience Forecast
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                Is Talalay latex really indestructible? We forecast the sag risk and resilience of this eco-hybrid over 5 years.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                View Research <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* 5 Truths Card */}
                    <Link href="/mattress-reviews/5-truths-winkbed-original" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#8B0000] to-[#B22222] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">5 Truths WinkBed</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Critical Analysis
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <AlertTriangle size={12} /> Buyer Awareness
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                5 Surprising Truths Before You Buy
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                Discover the crucial details hidden behind the 5-star reviews: foundation issues, warranty catches, and weight dependency.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                Read Article <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* 5 Truths EcoCloud Card */}
                    <Link href="/mattress-reviews/5-truths-winkbed-ecocloud" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#14532d] to-[#166534] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">5 Truths EcoCloud</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Critical Analysis
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <AlertTriangle size={12} /> Engineering Report
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                5 Surprising Truths About EcoCloud
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                The "phantom sag" phenomenon and why foundation choice matters more for this mattress than any other.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                Read Article <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* DreamCloud Luxe Card */}
                    <Link href="/mattress-reviews/dreamcloud-premier-rest" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#0f172a] to-[#334155] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">DreamCloud Luxe</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Living Review
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <Microscope size={12} /> Cashmere Blend Analysis
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                DreamCloud Luxe: 5-Year Loft Forecast
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                Does the pillow-top flatten out? We track the compression rates of the cashmere blend cover and foam layers.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                View Research <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* Nectar Classic Card */}
                    <Link href="/mattress-reviews/nectar-classic" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#1d4ed8] to-[#3b82f6] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">Nectar Classic</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Living Review
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <Microscope size={12} /> Memory Foam Analysis
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                Nectar Classic: Long-Term Value Test
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                Is it just a budget foam bed? We analyze the density specs to predict when the "quicksand" feeling sets in.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                View Research <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* Nectar Premiere Card */}
                    <Link href="/mattress-reviews/nectar-premier" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#1e3a8a] to-[#2563eb] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">Nectar Premiere</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Living Review
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <Microscope size={12} /> Cooling Foam Analysis
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                Nectar Premiere: Cooling Life Forecast
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                Do the phase-change materials last? We look at how the cooling properties degrade over 5 years of use.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                View Research <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* WinkBed GravityLux Card */}
                    <Link href="/mattress-reviews/winkbed-gravitylux" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#CD7F32] to-[#B8860B] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">GravityLux</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Living Review
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <Microscope size={12} /> AirCell Foam Analysis
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                GravityLux: 5-Year Sagging Forecast
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                Can this proprietary foam really outperform latex? We analyze the stress-test results to predict long-term durability.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                View Research <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                    {/* Helix Plus Card */}
                    <Link href="/mattress-reviews/helix-plus" className="group block bg-jet-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-white/10 flex flex-col">
                        <div className="relative h-48 bg-gradient-to-tr from-[#000000] to-[#333333] flex items-center justify-center p-6 shrink-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl font-black text-white z-10 font-serif text-center leading-tight">Helix Plus</h2>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                                Living Review
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-golden-bronze font-bold text-[10px] uppercase tracking-wider mb-2">
                                <Microscope size={12} /> HD Hybrid Analysis
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-golden-bronze transition-colors flex-grow">
                                Helix Plus: Heavy-Duty Life Forecast
                            </h3>
                            <p className="text-alabaster-grey text-sm mb-4 line-clamp-3">
                                Is it built to last? We break down the 4.0 PCF foam density and TitanCore coils to see if it holds up for plus-sized sleepers.
                            </p>
                            <div className="flex items-center text-white font-semibold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                                View Research <ArrowRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default MattressReviewsHub;
