'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import Link from 'next/link';
import {
    Bed,
    TrendingUp,
    HandMetal,
    Thermometer,
    Snowflake,
    Flame,
    Layers,
    Ban,
    Ruler,
    CheckCircle,
    RotateCw,
    Clock,
    ArrowLeft
} from 'lucide-react';
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
import { Line } from 'react-chartjs-2';

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

const BreakInGuide = () => {
    // --- State for "The Crawl" ---
    const [crawlProgress, setCrawlProgress] = useState(0);
    const [isCrawling, setIsCrawling] = useState(false);

    const handleCrawl = () => {
        if (crawlProgress >= 100) return;
        setIsCrawling(true);
        setTimeout(() => setIsCrawling(false), 200);
        setCrawlProgress(prev => Math.min(prev + 5, 100)); // 20 clicks to finish
    };

    // --- State for Temperature ---
    const [temp, setTemp] = useState(68);

    // --- State for Foundation ---
    const [foundationType, setFoundationType] = useState(null); // 'old', 'slats', 'rigid'

    // --- Chart Data ---
    const chartData = {
        labels: ['Day 1', 'Day 7', 'Day 14', 'Day 30', 'Day 60', 'Day 90'],
        datasets: [
            {
                label: 'Mattress Stiffness',
                data: [100, 90, 75, 50, 30, 10],
                borderColor: '#ef4444', // Red
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                tension: 0.4,
                fill: false,
            },
            {
                label: 'Comfort (Adaptation)',
                data: [20, 35, 50, 80, 95, 100],
                borderColor: '#0284c7', // Sky Blue (Science)
                backgroundColor: 'rgba(2, 132, 199, 0.1)',
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                display: false, // Hide numbers for cleaner look
            },
            x: {
                grid: { display: false }
            }
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="font-sans text-graphite bg-white">
            <Header />

            {/* Breadcrumb */}
            <div className="bg-alabaster-grey/20 border-b border-alabaster-grey">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <Link href="/faqs" className="inline-flex items-center text-sm font-bold text-golden-bronze hover:text-jet-black transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to FAQ
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <header className="text-center py-16 px-4 bg-white fade-in">
                <div className="inline-flex items-center justify-center p-3 bg-golden-bronze/10 rounded-full text-golden-bronze mb-6">
                    <Bed size={24} className="mr-2" />
                    <span className="font-bold text-sm tracking-wide uppercase">Sleep Science Report</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-jet-black mb-6 max-w-4xl mx-auto leading-tight">
                    Why Your New Mattress Feels Like <span className="text-blue-600 border-b-[6px] border-solid border-[#cca43b] pb-2 inline-block leading-[0.8]">Concrete</span>
                </h1>
                <p className="text-xl text-graphite max-w-2xl mx-auto leading-relaxed">
                    Don't return it yet. You haven't bought a lemon; you've just entered the <strong>"Break-In Period."</strong>
                    Explore the data below to understand how to enter the "Goldilocks Window."
                </p>
            </header>

            {/* Main Dashboard Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Card 1: The Timeline */}
                    <section className="bg-white rounded-2xl shadow-lg border border-alabaster-grey p-8 flex flex-col h-full hover:border-golden-bronze transition-colors duration-300">
                        <div className="mb-6">
                            <div className="flex items-center mb-2">
                                <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mr-3">
                                    <TrendingUp size={24} />
                                </div>
                                <h2 className="text-xl font-bold text-jet-black">The Adjustment Curve</h2>
                            </div>
                            <p className="text-sm text-graphite">
                                It's not just the mattress relaxing; it's your muscles un-learning years of bad posture ("Learned Misalignment").
                            </p>
                        </div>

                        <div className="bg-alabaster-grey/20 rounded-xl p-4 mb-4 flex-grow relative h-64 w-full">
                            <Line data={chartData} options={chartOptions} />
                        </div>

                        <div className="bg-amber-50 border-l-4 border-golden-bronze p-4 rounded text-sm text-jet-black mt-auto">
                            <strong>The Reality Check:</strong> Most manufacturers define the break-in period as <span className="font-bold text-golden-bronze">30 to 90 days</span>. Patience is a metric.
                        </div>
                    </section>

                    {/* Card 2: The Crawl Method */}
                    <section className="bg-white rounded-2xl shadow-lg border border-alabaster-grey p-8 flex flex-col h-full hover:border-golden-bronze transition-colors duration-300">
                        <div className="mb-6">
                            <div className="flex items-center mb-2">
                                <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mr-3">
                                    <HandMetal size={24} />
                                </div>
                                <h2 className="text-xl font-bold text-jet-black">Hack #1: "Abuse" Gently</h2>
                            </div>
                            <p className="text-sm text-graphite">
                                New foam cells are rigid. Sleeping isn't enough. You need concentrated pressure (crawling) to force the layers to open up.
                            </p>
                        </div>

                        <div className="flex-grow flex flex-col justify-center items-center bg-alabaster-grey/20 rounded-xl p-8 border border-alabaster-grey mb-4">
                            <div className="w-full mb-2 flex justify-between text-xs font-bold uppercase text-gray-400">
                                <span>Rigid State</span>
                                <span>Goldilocks Zone</span>
                            </div>
                            <div className="w-full bg-white rounded-full h-6 mb-8 overflow-hidden relative border border-gray-200">
                                <div
                                    className={`h-6 rounded-full transition-all duration-300 ease-out flex items-center justify-center text-xs font-bold text-white shadow-sm
                                        ${crawlProgress < 30 ? 'bg-red-500' : crawlProgress < 70 ? 'bg-orange-500' : 'bg-emerald-500'}
                                    `}
                                    style={{ width: `${Math.max(crawlProgress, 5)}%` }}
                                >
                                    {crawlProgress > 10 && `${crawlProgress}%`}
                                </div>
                                {crawlProgress <= 10 && <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-400">0%</div>}
                            </div>

                            <button
                                onClick={handleCrawl}
                                disabled={crawlProgress >= 100}
                                className={`
                                    bg-jet-black text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-100 flex items-center gap-2 transform
                                    ${isCrawling ? 'scale-95 bg-jet-black-800' : 'hover:-translate-y-1 hover:shadow-xl'}
                                    ${crawlProgress >= 100 ? 'opacity-50 cursor-not-allowed bg-emerald-600' : ''}
                                `}
                            >
                                {crawlProgress >= 100 ? (
                                    <>
                                        <CheckCircle size={20} /> Broken In!
                                    </>
                                ) : (
                                    <>
                                        Simulate "The Crawl"
                                    </>
                                )}
                            </button>
                            <p className="text-xs text-gray-400 mt-4 italic">Click repeatedly to simulate crawling across the bed.</p>
                        </div>
                    </section>

                    {/* Card 3: Temperature Physics */}
                    <section className="bg-white rounded-2xl shadow-lg border border-alabaster-grey p-8 flex flex-col h-full hover:border-golden-bronze transition-colors duration-300">
                        <div className="mb-6">
                            <div className="flex items-center mb-2">
                                <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mr-3">
                                    <Thermometer size={24} />
                                </div>
                                <h2 className="text-xl font-bold text-jet-black">Viscoelastic Physics</h2>
                            </div>
                            <p className="text-sm text-graphite">
                                Memory foam is temperature-sensitive. In a cold room, polymers tighten. Control your thermostat to control firmness.
                            </p>
                        </div>

                        <div className="flex-grow bg-alabaster-grey/20 rounded-xl p-8 border border-alabaster-grey">
                            <label className="block text-sm font-bold text-jet-black mb-4 flex justify-between">
                                <span>Room Temperature</span>
                                <span className="text-blue-600">{temp}°F</span>
                            </label>
                            <input
                                type="range"
                                min="60"
                                max="80"
                                value={temp}
                                onChange={(e) => setTemp(e.target.value)}
                                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer mb-8 accent-jet-black"
                            />

                            <div className={`p-6 rounded-xl text-center transition-colors duration-300 border
                                ${temp < 65 ? 'bg-slate-200 border-slate-300' : temp > 72 ? 'bg-orange-50 border-orange-100' : 'bg-blue-50 border-blue-100'}
                            `}>
                                <div className={`inline-block mb-3 ${temp < 65 ? 'text-slate-500' : temp > 72 ? 'text-orange-500' : 'text-blue-500'}`}>
                                    {temp < 65 ? <Snowflake size={32} /> : temp > 72 ? <Flame size={32} /> : <Thermometer size={32} />}
                                </div>
                                <h3 className="font-bold text-xl text-jet-black mb-2">
                                    {temp < 65 ? "Concrete Slab" : temp > 72 ? "Plush & Contouring" : "Medium Firm"}
                                </h3>
                                <p className="text-sm text-graphite">
                                    {temp < 65
                                        ? "Polymers tighten up. The bed feels significantly firmer. Turn up the heat!"
                                        : temp > 72
                                            ? "Polymers relax. The cellular structure becomes pliable and moulds to your body."
                                            : "Standard operating temperature. Balanced support and comfort."
                                    }
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Card 4: Foundation Sabotage */}
                    <section className="bg-white rounded-2xl shadow-lg border border-alabaster-grey p-8 flex flex-col h-full hover:border-golden-bronze transition-colors duration-300">
                        <div className="mb-6">
                            <div className="flex items-center mb-2">
                                <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mr-3">
                                    <Layers size={24} />
                                </div>
                                <h2 className="text-xl font-bold text-jet-black">The "Box Spring" Sabotage</h2>
                            </div>
                            <p className="text-sm text-graphite">
                                Many "mattress failures" are actually foundation failures. Modern hybrids are heavy and need rigid support.
                            </p>
                        </div>

                        <div className="flex-grow bg-alabaster-grey/20 rounded-xl p-6 border border-alabaster-grey flex flex-col justify-center space-y-4">
                            <p className="text-sm font-bold text-jet-black text-center mb-2">What is your mattress sitting on?</p>

                            <div className="grid grid-cols-3 gap-3">
                                <button
                                    onClick={() => setFoundationType('old')}
                                    className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2
                                        ${foundationType === 'old' ? 'bg-red-50 border-red-500 text-red-700' : 'bg-white border-alabaster-grey hover:border-gray-400 text-graphite'}
                                    `}
                                >
                                    <Ban size={24} />
                                    <span className="text-xs font-bold">Old Box Spring</span>
                                </button>
                                <button
                                    onClick={() => setFoundationType('slats')}
                                    className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2
                                        ${foundationType === 'slats' ? 'bg-amber-50 border-amber-500 text-amber-700' : 'bg-white border-alabaster-grey hover:border-gray-400 text-graphite'}
                                    `}
                                >
                                    <Ruler size={24} />
                                    <span className="text-xs font-bold">Wide Slats</span>
                                </button>
                                <button
                                    onClick={() => setFoundationType('rigid')}
                                    className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2
                                        ${foundationType === 'rigid' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-alabaster-grey hover:border-gray-400 text-graphite'}
                                    `}
                                >
                                    <CheckCircle size={24} />
                                    <span className="text-xs font-bold">Rigid/Platform</span>
                                </button>
                            </div>

                            <div className="min-h-[100px] flex items-center justify-center">
                                {foundationType === 'old' && (
                                    <div className="p-4 rounded-lg bg-red-100 border border-red-200 text-sm text-red-800 text-center w-full animate-fade-in">
                                        <strong>Sabotage Alert!</strong> Flexible coils in old box springs flex too much for modern heavy foam beds, creating sagging.
                                    </div>
                                )}
                                {foundationType === 'slats' && (
                                    <div className="p-4 rounded-lg bg-amber-100 border border-amber-200 text-sm text-amber-800 text-center w-full animate-fade-in">
                                        <strong>Check the Gap!</strong> If slats are &gt; 3-4 inches apart, foam pushes through. You need a bunkie board.
                                    </div>
                                )}
                                {foundationType === 'rigid' && (
                                    <div className="p-4 rounded-lg bg-emerald-100 border border-emerald-200 text-sm text-emerald-800 text-center w-full animate-fade-in">
                                        <strong>Perfect!</strong> Rigid, non-flexing surfaces provide the stable base modern mattresses require to break in evenly.
                                    </div>
                                )}
                                {!foundationType && (
                                    <p className="text-xs text-center text-gray-400 italic">Select an option above to check compatibility.</p>
                                )}
                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </div>
    );
};

export default BreakInGuide;
