'use client';

import React from 'react';
import Header from '../../components/Header';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { TOP_PICKS_CATEGORIES } from './topPicksData';

const TopPicks = () => {
    const currentYear = new Date().getFullYear();

    const topPicks = TOP_PICKS_CATEGORIES; /*
        {
            category: "Best Overall Mattress",
            title: "WinkBed Original",
            imageParams: "from-[#1a1a1a] to-[#242f40]", // Gradient fallback
            icon: <Award className="text-golden-bronze" size={32} />,
            highlight: "Perfect balance of luxury hybrid comfort and back support.",
            keyStat: "98% Durability Score",
            link: "/mattress-reviews/winkbed-original",
            pros: ["Lifetime Warranty", "Exceptional Back Support", "Cooling Tencel Cover"],
            tag: "Editor's Choice"
        },
        {
            category: "Best for Back Pain",
            title: "WinkBed Original",
            imageParams: "from-[#1a1a1a] to-[#242f40]",
            icon: <Anchor className="text-golden-bronze" size={32} />,
            highlight: "Zoned coil system actively pushes back to align the spine.",
            keyStat: "LumbarLayer™ Support",
            link: "/mattress-reviews/winkbed-original",
            pros: ["Pressure-Relieving Pillow Top", "3 Firmness Options", " Chiropractor Recommended"],
            tag: "Spine Aligned"
        },
        {
            category: "Best Cooling Mattress",
            title: "Purple Original",
            imageParams: "from-[#4B1E78] to-[#662D91]",
            icon: <Flame className="text-cyan-400" size={32} />,
            highlight: "The grid structure allows massive airflow that foams can't match.",
            keyStat: "10x More Breathable",
            link: "/mattress-reviews/purple-original",
            pros: ["GelFlex Grid Technology", "Instant Response", "Sleeps Neutral"],
            tag: "Most Breathable"
        },
        {
            category: "Best Organic Mattress",
            title: "WinkBed EcoCloud",
            imageParams: "from-[#3f6212] to-[#65a30d]",
            icon: <Leaf className="text-green-500" size={32} />,
            highlight: "100% natural Talalay latex with recycled steel coils.",
            keyStat: "GOTS Certified Cotton",
            link: "/mattress-reviews/winkbed-ecocloud",
            pros: ["Hypoallergenic", "Sustainable Materials", "Cloud-like Buoyancy"],
            tag: "Eco-Friendly"
        },
        {
            category: "Best Value Mattress",
            title: "Nectar Classic",
            imageParams: "from-[#1d4ed8] to-[#3b82f6]",
            icon: <DollarSign className="text-green-400" size={32} />,
            highlight: "Premium memory foam feel at an unbeatable price point.",
            keyStat: "365-Night Trial",
            link: "/mattress-reviews/nectar-classic",
            pros: ["Forever Warranty", "Zero Motion Transfer", "Deep Contouring"],
            tag: "Best Budget"
        },
        {
            category: "Best for Side Sleepers",
            title: "Leesa Legend",
            imageParams: "from-[#1e293b] to-[#475569]",
            icon: <Cloud className="text-indigo-400" size={32} />,
            highlight: "Dual-hybrid micro-coils provide targeted relief for shoulders.",
            keyStat: "Zone Support System",
            link: "/mattress-reviews/leesa-legend",
            pros: ["Organic Cotton Cover", "Micro-Coil Comfort", "Medium-Plush Feel"],
            tag: "Pressure Relief"
        },
        {
            category: "Best for Heavy Sleepers",
            title: "Helix Plus",
            imageParams: "from-[#000000] to-[#333333]",
            icon: <Shield className="text-gray-400" size={32} />,
            highlight: "Built with high-density foams and titan-grade coils for longevity.",
            keyStat: "Supports 1,000+ lbs",
            link: "/mattress-reviews/helix-plus",
            pros: ["Heavy-Duty Construction", "Sag-Resistant Foams", "Firm Support"],
            tag: "Plus Size"
        },
        {
            category: "Best Luxury Mattress",
            title: "DreamCloud Premier Rest",
            imageParams: "from-[#0f172a] to-[#334155]",
            icon: <Crown className="text-amber-300" size={32} />,
            highlight: "Cashmere pillow-top meets heavy-duty hybrid support.",
            keyStat: "16-Inch Profile",
            link: "/mattress-reviews/dreamcloud-premier-rest",
            pros: ["Cashmere Blend Cover", "7-Layer Design", "Hotel-Like Feel"],
            tag: "Hotel Luxury"
        }
    ]; */

    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="bg-jet-black py-20 px-4 text-center border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-3 py-1 bg-golden-bronze/20 text-golden-bronze text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
                        Updated for {currentYear}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-serif">
                        Top Rated Mattresses
                    </h1>
                    <p className="text-xl text-alabaster-grey leading-relaxed">
                        We've tested dozens of beds to find the absolute best for every sleep style.
                        No fluff, just the top-performing contenders based on our deep-dive "Living Reviews."
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Category Subpages */}
                <div className="bg-alabaster-grey/20 border border-alabaster-grey rounded-2xl p-8 mb-10">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-jet-black">Browse categories</h2>
                            <p className="text-graphite text-sm mt-1">Jump into the “why” page for each Top Pick, then continue to the Living Review.</p>
                        </div>
                        <Link href="/mattress-reviews" className="text-golden-bronze font-bold hover:underline">
                            Browse all Living Reviews
                        </Link>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {topPicks.map((pick) => (
                            <Link
                                key={pick.slug}
                                href={`/top-picks/${pick.slug}`}
                                className="inline-flex items-center bg-white hover:bg-alabaster-grey/30 text-jet-black font-semibold px-4 py-2 rounded-full border border-alabaster-grey transition-colors"
                            >
                                {pick.category}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topPicks.map((pick, idx) => (
                        <div key={idx} className="group flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-alabaster-grey">
                            {/* Card Header / Visual */}
                            <div className={`relative h-48 bg-gradient-to-br ${pick.imageParams} flex items-center justify-center p-6 bg-cover bg-center`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <h3 className="text-white text-3xl font-black font-serif mb-2 drop-shadow-md">
                                        {pick.title}
                                    </h3>
                                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                                        {pick.tag}
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-jet-black/5 rounded-lg">
                                        {pick.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-jet-black uppercase tracking-wide">
                                        {pick.category}
                                    </h4>
                                </div>

                                <p className="text-graphite mb-6 text-sm leading-relaxed">
                                    {pick.highlight}
                                </p>

                                <Link href={`/top-picks/${pick.slug}`} className="text-sm font-bold text-golden-bronze hover:underline mb-6">
                                    See why it won
                                </Link>

                                <div className="bg-alabaster-grey/30 rounded-lg p-4 mb-6 border border-alabaster-grey">
                                    <div className="text-xs uppercase text-graphite/70 font-bold mb-1">Key Stat</div>
                                    <div className="text-jet-black font-bold text-lg">{pick.keyStat}</div>
                                </div>

                                <ul className="space-y-2 mb-8">
                                    {pick.pros.map((pro, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-graphite">
                                            <Check className="text-golden-bronze" size={16} />
                                            {pro}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <Link
                                        href={pick.reviewHref}
                                        className="block w-full bg-jet-black text-white text-center py-4 rounded-xl font-bold hover:bg-golden-bronze transition-colors flex items-center justify-center gap-2 group-hover:gap-3"
                                    >
                                        Read Living Review <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Methodology Footer */}
            <div className="max-w-4xl mx-auto text-center py-12 px-4 border-t border-alabaster-grey mt-12">
                <h3 className="text-lg font-bold text-jet-black mb-4">How We Pick</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Our "Top Picks" aren't just based on first impressions. We select winners based on our longitudinal "Living Review" data,
                    analyzing durability, long-term comfort retention, and verified owner feedback over months and years of use.
                </p>
            </div>
        </div>
    );
};

export default TopPicks;
