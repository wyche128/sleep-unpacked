'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import JsonLd from '../../../components/JsonLd';
import { SITE_URL } from '../../../utils/schema';
import {
    BedDouble,
    Activity,
    Thermometer,
    Layers,
    Snowflake,
    Flame,
    Box,
    AlignJustify,
    Square,
    AlertTriangle,
    CheckCircle,
    Footprints,
    Info,
    ArrowRight
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import Link from 'next/link';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const canonicalUrl = `${SITE_URL}/sleep-guides/break-in-period/`;

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl,
    },
    "headline": "Mattress Break-In Period: Why Your New Bed Feels Like Concrete (and How to Fix It)",
    "alternativeHeadline": "Why Your New Mattress Feels Like Concrete",
    "name": "mattress break-in period",
    "description": "A practical guide for anyone whose new mattress feels uncomfortably firm. Learn what the break-in period is, how long it typically takes, and the safest ways to speed adaptation using movement, temperature, rotation, and foundation checks.",
    "keywords": [
        "mattress break-in period",
        "new mattress too firm",
        "why new mattress feels hard",
        "how long to break in a mattress",
        "memory foam break in",
        "firmness change over time",
        "temperature effect on foam",
        "mattress foundation support",
        "box spring vs platform",
        "slats spacing for foam mattress",
        "mattress rotation schedule",
        "sleep trial period",
    ],
    "citation": [
        "https://en.wikipedia.org/wiki/Mattress",
        "https://en.wikipedia.org/wiki/Memory_foam",
        "https://en.wikipedia.org/wiki/Polyurethane",
        "https://www.sleepfoundation.org/mattress-information/how-to-break-in-a-mattress",
    ],
    "about": [
        {
            "@type": "Thing",
            "name": "Mattress",
            "sameAs": ["https://en.wikipedia.org/wiki/Mattress"],
        },
        {
            "@type": "Thing",
            "name": "Break-in period",
            "sameAs": ["https://en.wikipedia.org/wiki/Break-in_(mechanical_run-in)"],
        },
        {
            "@type": "Thing",
            "name": "Memory foam",
            "sameAs": ["https://en.wikipedia.org/wiki/Memory_foam"],
        },
    ],
    "mentions": [
        {
            "@type": "Thing",
            "name": "Polyurethane foam",
            "sameAs": ["https://en.wikipedia.org/wiki/Polyurethane"],
        },
        {
            "@type": "Thing",
            "name": "Mattress firmness",
        },
        {
            "@type": "Thing",
            "name": "Temperature",
        },
        {
            "@type": "Thing",
            "name": "Mattress foundation",
        },
        {
            "@type": "Thing",
            "name": "Box spring",
        },
        {
            "@type": "Thing",
            "name": "Platform bed",
        },
        {
            "@type": "Thing",
            "name": "Sleep trial",
        },
    ],
    "articleSection": "Sleep Guides",
    "datePublished": "2026-01-10",
    "dateModified": "2026-01-14",
    "author": {
        "@type": "Person",
        "name": "SleepUnpacked Team",
    },
    "publisher": {
        "@type": "Organization",
        "name": "SleepUnpacked",
        "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/logo.png`,
        },
    },
    "articleBody": `This guide explains why a brand-new mattress can feel unusually firm at first and how the feel typically changes as materials flex and your body adapts. It frames the break-in period as a predictable regret phase, then provides practical, low-risk ways to speed comfort: increasing surface flex through controlled movement, rotating the mattress early, and using room temperature to influence foam feel. It also highlights the foundation's role-old box springs, wide slat gaps, or overly flexible support can distort performance-and offers simple checks to confirm your base is appropriate. The goal is to help readers distinguish normal adaptation from true fit problems so they make better decisions within the sleep-trial window.`,
};


const BreakInPeriodGuide = () => {
    // --- State Management ---
    const [crawlCount, setCrawlCount] = useState(0);
    const [temperature, setTemperature] = useState(68);
    const [foundation, setFoundation] = useState(null);

    // --- Crawl Logic ---
    const crawlProgress = Math.min(crawlCount * 5, 100);

    const getCrawlState = () => {
        if (crawlProgress < 30) return { color: 'bg-red-500', text: 'Stiff & Rigid' };
        if (crawlProgress < 70) return { color: 'bg-yellow-400', text: 'Loosening Up...' };
        return { color: 'bg-green-500', text: 'Goldilocks Zone!' };
    };
    const crawlState = getCrawlState();

    // --- Temperature Logic ---
    const getTempState = () => {
        if (temperature < 65) return {
            bg: 'bg-slate-100',
            icon: <Snowflake className="w-8 h-8 text-blue-500 mb-2" />,
            title: 'Concrete Slab',
            titleColor: 'text-slate-800',
            desc: 'Polymers tighten up. The bed feels significantly firmer. Turn up the heat!'
        };
        if (temperature > 72) return {
            bg: 'bg-orange-50',
            icon: <Flame className="w-8 h-8 text-orange-500 mb-2" />,
            title: 'Plush & Contouring',
            titleColor: 'text-orange-800',
            desc: 'Polymers relax. The cellular structure becomes pliable and moulds to your body.'
        };
        return {
            bg: 'bg-blue-50',
            icon: <Thermometer className="w-8 h-8 text-blue-600 mb-2" />,
            title: 'Medium Firm',
            titleColor: 'text-slate-900',
            desc: 'Standard operating temperature. Balanced support and comfort.'
        };
    };
    const tempState = getTempState();

    // --- Chart Data ---
    const chartData = {
        labels: ['Day 1', 'Day 7', 'Day 14', 'Day 30', 'Day 60', 'Day 90'],
        datasets: [
            {
                label: 'Stiffness',
                data: [100, 90, 75, 50, 30, 10],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                tension: 0.4,
                fill: false
            },
            {
                label: 'Comfort (Adaptation)',
                data: [20, 35, 50, 80, 95, 100],
                borderColor: '#0284c7', // Sky 600
                backgroundColor: 'rgba(2, 132, 199, 0.1)',
                tension: 0.4,
                fill: true
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' },
            tooltip: { mode: 'index', intersect: false }
        },
        scales: {
            y: { display: false, min: 0, max: 100 },
            x: { grid: { display: false } }
        }
    };

    return (
        <div className="font-sans text-graphite bg-slate-50 min-h-screen">
            <JsonLd data={articleSchema} />
            <Header />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Hero Section */}
                <header className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-slate-100">
                        <BedDouble className="text-golden-bronze w-5 h-5 mr-2" />
                        <span className="text-slate-500 font-bold text-xs tracking-wide uppercase">Sleep Science Report</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-jet-black mb-6 leading-tight">
                        Why Your New Mattress Feels Like <span className="text-blue-600 underline decoration-golden-bronze/50 decoration-4 underline-offset-4">Concrete</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Don't return it yet. You haven't bought a lemon; you've just entered the <strong>"Break-In Period."</strong>
                        Explore the data below to understand how to hack the process and enter the "Goldilocks Window."
                    </p>
                </header>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1: Adjustment Curve */}
                    <section className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-6">
                            <div className="flex items-center mb-3">
                                <div className="bg-blue-50 p-3 rounded-xl text-blue-600 mr-4">
                                    <Activity size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-jet-black">The Adjustment Curve</h2>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                It's not just the mattress relaxing; it's your muscles un-learning years of bad posture ("Learned Misalignment").
                            </p>
                        </div>

                        <div className="w-full h-80 bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6 relative">
                            <Line data={chartData} options={chartOptions} />
                        </div>

                        <div className="bg-amber-50 border-l-4 border-golden-bronze p-4 rounded-r-xl text-sm text-slate-700 mt-auto">
                            <strong>The Reality Check:</strong> Most manufacturers define the break-in period as <span className="font-bold">30 to 90 days</span>. Patience is a metric.
                        </div>
                    </section>

                    {/* Card 2: Crawl Simulator */}
                    <section className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-6">
                            <div className="flex items-center mb-3">
                                <div className="bg-blue-50 p-3 rounded-xl text-blue-600 mr-4">
                                    <Footprints size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-jet-black">Hack #1: "Abuse" Gently</h2>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                New foam cells are rigid. Sleeping isn't enough. You need concentrated pressure (crawling) to force the layers to open up.
                            </p>
                        </div>

                        <div className="flex-grow flex flex-col justify-center items-center bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <div className="w-full mb-2 flex justify-between text-xs font-bold uppercase text-slate-400">
                                <span>Rigid State</span>
                                <span>Goldilocks Zone</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-8 mb-8 overflow-hidden relative shadow-inner">
                                <div
                                    className={`h-full transition-all duration-300 ease-out ${crawlState.color}`}
                                    style={{ width: `${Math.max(crawlProgress, 5)}%` }}
                                ></div>
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white shadow-sm drop-shadow-md">
                                    {crawlProgress}% Broken In
                                </div>
                            </div>

                            <button
                                onClick={() => setCrawlCount(prev => prev + 1)}
                                disabled={crawlProgress >= 100}
                                className={`w-full py-4 px-6 rounded-xl font-bold shadow-md transition-all duration-200 flex items-center justify-center gap-3 transform active:scale-95 ${crawlProgress >= 100
                                    ? 'bg-green-600 text-white cursor-not-allowed opacity-90'
                                    : 'bg-jet-black hover:bg-blue-600 text-white'
                                    }`}
                            >
                                {crawlProgress >= 100 ? (
                                    <>
                                        <CheckCircle size={20} /> Mattress Broken In!
                                    </>
                                ) : (
                                    <>
                                        <Footprints size={20} /> Simulate "The Crawl"
                                    </>
                                )}
                            </button>
                            <p className="text-xs text-slate-400 mt-4 text-center italic">
                                Click repeatedly to simulate walking/crawling on your mattress.
                            </p>
                        </div>
                    </section>

                    {/* Card 3: Visco Slider */}
                    <section className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-6">
                            <div className="flex items-center mb-3">
                                <div className="bg-blue-50 p-3 rounded-xl text-blue-600 mr-4">
                                    <Thermometer size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-jet-black">Viscoelastic Physics</h2>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Memory foam is temperature-sensitive. In a cold room, polymers tighten. Control your thermostat to control firmness.
                            </p>
                        </div>

                        <div className="flex-grow bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <label className="flex justify-between text-sm font-bold text-slate-700 mb-4">
                                <span>Room Temperature</span>
                                <span className="text-blue-600">{temperature}°F</span>
                            </label>

                            <input
                                type="range"
                                min="60"
                                max="80"
                                value={temperature}
                                onChange={(e) => setTemperature(parseInt(e.target.value))}
                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer mb-8 accent-blue-600"
                            />

                            <div className={`p-6 rounded-xl border transition-colors duration-300 flex flex-col items-center text-center ${tempState.bg} border-slate-200`}>
                                {tempState.icon}
                                <h3 className={`font-bold text-lg mb-2 ${tempState.titleColor}`}>{tempState.title}</h3>
                                <p className="text-sm text-slate-600 leading-snug">{tempState.desc}</p>
                            </div>
                        </div>
                    </section>

                    {/* Card 4: Foundation Check */}
                    <section className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-6">
                            <div className="flex items-center mb-3">
                                <div className="bg-blue-50 p-3 rounded-xl text-blue-600 mr-4">
                                    <Layers size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-jet-black">The "Box Spring" Sabotage</h2>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Many "mattress failures" are actually foundation failures. Modern hybrids are heavy and need rigid support.
                            </p>
                        </div>

                        <div className="flex-grow bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-center space-y-4">
                            <p className="text-sm font-bold text-slate-700 mb-2">What is your mattress sitting on?</p>

                            <div className="grid grid-cols-3 gap-3">
                                <button
                                    onClick={() => setFoundation('old')}
                                    className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${foundation === 'old' ? 'bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-200' : 'bg-white border-slate-200 hover:border-slate-400 text-slate-600'
                                        }`}
                                >
                                    <Box size={20} />
                                    <span className="text-[10px] uppercase font-bold">Old Box</span>
                                </button>
                                <button
                                    onClick={() => setFoundation('slats')}
                                    className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${foundation === 'slats' ? 'bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-200' : 'bg-white border-slate-200 hover:border-slate-400 text-slate-600'
                                        }`}
                                >
                                    <AlignJustify size={20} />
                                    <span className="text-[10px] uppercase font-bold">Slats</span>
                                </button>
                                <button
                                    onClick={() => setFoundation('rigid')}
                                    className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${foundation === 'rigid' ? 'bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-200' : 'bg-white border-slate-200 hover:border-slate-400 text-slate-600'
                                        }`}
                                >
                                    <Square size={20} />
                                    <span className="text-[10px] uppercase font-bold">Solid</span>
                                </button>
                            </div>

                            {foundation && (
                                <div className={`p-4 rounded-xl border text-sm mt-4 animate-in fade-in zoom-in-95 duration-300 ${foundation === 'rigid'
                                    ? 'bg-green-50 border-green-200 text-green-900'
                                    : foundation === 'slats'
                                        ? 'bg-amber-50 border-amber-200 text-amber-900'
                                        : 'bg-red-50 border-red-200 text-red-900'
                                    }`}>
                                    {foundation === 'old' && (
                                        <>
                                            <div className="flex items-center gap-2 font-bold mb-1"><AlertTriangle size={16} /> Sabotage Alert!</div>
                                            Flexible coils in old box springs flex too much for heavy foam beds, causing sagging.
                                        </>
                                    )}
                                    {foundation === 'slats' && (
                                        <>
                                            <div className="flex items-center gap-2 font-bold mb-1"><AlertTriangle size={16} /> Check Gap!</div>
                                            If slats are wider than 3-4" apart, foam will push through. Ensure they are dense.
                                        </>
                                    )}
                                    {foundation === 'rigid' && (
                                        <>
                                            <div className="flex items-center gap-2 font-bold mb-1"><CheckCircle size={16} /> Perfect!</div>
                                            Rigid, non-flexing surfaces provide the stable base modern mattresses require.
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </section>

                </div>

                {/* Footer / Conclusion */}
                <footer className="mt-16 bg-jet-black rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-6 text-golden-bronze font-serif">The Forward Look</h3>
                        <p className="max-w-3xl mx-auto text-alabaster-grey mb-8 text-lg leading-relaxed">
                            The relationship between you and your mattress is a marathon. If you are in the "regret phase," remember:
                            <span className="text-white font-semibold"> Is this discomfort actual pain, or is it the feeling of your posture finally being corrected?</span>
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-alabaster-grey/70">
                            <span className="flex items-center px-4 py-2 bg-white/10 rounded-full"><Activity size={16} className="mr-2" /> Rotate every 2 weeks initially</span>
                            <span className="flex items-center px-4 py-2 bg-white/10 rounded-full"><Activity size={16} className="mr-2" /> Give it at least 30 days</span>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default BreakInPeriodGuide;
