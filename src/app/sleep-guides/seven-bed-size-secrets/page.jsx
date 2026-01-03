'use client';

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import Header from '../../../components/Header';
import { Maximize, Minimize, Home, Info } from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const SevenBedSizeSecrets = () => {
    // --- State Management ---
    const [splitVisualized, setSplitVisualized] = useState(false);
    const [selectedBed, setSelectedBed] = useState('queen');

    // --- Data & Logic ---
    const bedData = {
        'twin': { w: 38, l: 75, room: "7' x 9'", label: "Twin (38\" x 75\")" },
        'twinxl': { w: 38, l: 80, room: "7' x 10'", label: "Twin XL (38\" x 80\")" },
        'full': { w: 54, l: 75, room: "9' x 10'", label: "Full (54\" x 75\")" },
        'queen': { w: 60, l: 80, room: "10' x 10'", label: "Queen (60\" x 80\")" },
        'king': { w: 76, l: 80, room: "12' x 12'", label: "King (76\" x 80\")" },
        'calking': { w: 72, l: 84, room: "12' x 12'", label: "Cal King (72\" x 84\")" },
        'alaskan': { w: 108, l: 108, room: "16' x 16'", label: "Alaskan King (108\" x 108\")" }
    };

    const currentBed = bedData[selectedBed];

    // Chart Data: King vs Cal King Area
    const kingAreaChartData = {
        labels: ['Standard King', 'California King'],
        datasets: [{
            label: 'Surface Area (sq inches)',
            data: [6080, 6048],
            backgroundColor: ['#cca43b', '#e5e5e5'], // Golden Bronze, Alabaster/Slate-200
            borderRadius: 6
        }]
    };

    const kingAreaChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: { label: (c) => `${c.raw} sq inches` }
            }
        },
        scales: {
            y: { beginAtZero: false, min: 5800, grid: { display: false } }, // Zoom for effect
            x: { grid: { display: false } }
        }
    };

    // Chart Data: Length Comparison
    const lengthChartData = {
        labels: ['Twin', 'Twin XL', 'Queen', 'King'],
        datasets: [{
            label: 'Length (inches)',
            data: [75, 80, 80, 80],
            backgroundColor: ['#e5e5e5', '#cca43b', '#cca43b', '#cca43b'],
            borderRadius: 4
        }]
    };

    const lengthChartOptions = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { beginAtZero: true, max: 90, grid: { display: false } },
            y: { grid: { display: false } }
        }
    };


    return (
        <div className="bg-alabaster-grey font-sans text-graphite min-h-screen flex flex-col">
            <Header />

            {/* --- Hero Section --- */}
            <header className="relative bg-jet-black text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight font-serif">
                        7 Bed Size Secrets That Will <span className="text-golden-bronze">Save Your Sleep</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8 max-w-2xl mx-auto font-light">
                        We spend a third of our lives in bed, yet most of us choose our mattress based on vague memories.
                        Picking the wrong size is a recipe for restless nights.
                    </p>
                    <div className="inline-block bg-golden-bronze/10 rounded-full px-6 py-2 border border-golden-bronze/30">
                        <p className="text-sm text-golden-bronze font-medium flex items-center gap-2">
                            <Info size={16} /> Interactive Research Report
                        </p>
                    </div>
                </div>
            </header>

            {/* --- Main Content --- */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 flex-grow">

                {/* Secret 1: The Double Bed Trap */}
                <section id="couples" className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-8 md:p-12 transition-all hover:shadow-md">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-xs font-bold tracking-wider text-golden-bronze uppercase mb-2 block">Secret #1</span>
                            <h2 className="text-3xl font-bold text-jet-black mb-4 font-serif">The "Double" Bed is a Trap for Couples</h2>
                            <p className="text-graphite mb-6 text-lg">
                                The term "Double Bed" (or Full) is misleading. At <strong>54 inches wide</strong>, it sounds spacious, but the math tells a cramped story.
                            </p>
                            <blockquote className="border-l-4 border-golden-bronze pl-6 italic text-jet-black my-6 bg-amber-50/50 p-4 rounded-r-lg">
                                "Unless you enjoy sleeping in a space narrower than a baby’s crib, couples should consider the Queen (60\" wide) their absolute minimum."
                            </blockquote>
                            <button
                                onClick={() => setSplitVisualized(!splitVisualized)}
                                className="bg-golden-bronze text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors flex items-center gap-2"
                            >
                                {splitVisualized ? <Minimize size={18} /> : <Maximize size={18} />}
                                {splitVisualized ? "Reset View" : "Visualize Personal Space"}
                            </button>
                        </div>

                        {/* Visualizer */}
                        <div className="bg-alabaster-grey rounded-2xl p-8 flex flex-col items-center justify-center min-h-[350px] border border-zinc-100">
                            <div className="w-full max-w-sm">
                                <div className="text-center mb-3 font-medium text-zinc-500">Double Bed (54" Total)</div>
                                <div className="flex w-full h-20 rounded-xl overflow-hidden border-4 border-zinc-300 bg-white">
                                    <div className={`w-1/2 flex items-center justify-center text-sm font-bold transition-all duration-500
                                        ${splitVisualized ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                                        27"
                                    </div>
                                    <div className={`w-1/2 flex items-center justify-center text-sm font-bold border-l border-white transition-all duration-500
                                        ${splitVisualized ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                                        27"
                                    </div>
                                </div>
                                <div className={`mt-8 transition-opacity duration-700 ${splitVisualized ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="text-center mb-3 font-medium text-zinc-500">Standard Crib (28" Total)</div>
                                    <div className="w-[52%] mx-auto h-16 bg-green-100 rounded-xl border-4 border-green-300 flex items-center justify-center text-sm font-bold text-green-800 shadow-sm">
                                        28" (Wider!)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Secret 2 & 3 Group: Kings */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Secret 2: King vs Cal King */}
                    <section className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-8 hover:shadow-md transition-all">
                        <span className="text-xs font-bold tracking-wider text-golden-bronze uppercase mb-2 block">Secret #2</span>
                        <h2 className="text-2xl font-bold text-jet-black mb-4 font-serif">California King: Not Actually the Biggest</h2>
                        <p className="text-graphite mb-8">
                            A common myth is that the California King has the most surface area. In reality, it trades width for length. Unless you are over 6'2", a Standard King offers <strong>more</strong> room.
                        </p>
                        <div className="h-[250px] w-full">
                            <Bar data={kingAreaChartData} options={kingAreaChartOptions} />
                        </div>
                        <p className="text-xs text-center text-zinc-400 mt-4">Total Surface Area (Square Inches)</p>
                    </section>

                    {/* Secret 3: Split King */}
                    <section className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-8 hover:shadow-md transition-all">
                        <span className="text-xs font-bold tracking-wider text-golden-bronze uppercase mb-2 block">Secret #3</span>
                        <h2 className="text-2xl font-bold text-jet-black mb-4 font-serif">The "Split King" Hack</h2>
                        <p className="text-graphite mb-8">
                            Fighting over covers? A Split King isn't a custom size; it's simply <strong>two Twin XL mattresses</strong> side-by-side.
                        </p>

                        <div className="flex justify-center items-center gap-2 mb-8">
                            <div className="bg-blue-50 border-2 border-blue-200 w-20 h-28 rounded-md flex items-center justify-center text-center p-1">
                                <span className="text-[10px] font-bold text-blue-800">Twin XL<br />38"x80"</span>
                            </div>
                            <div className="text-xl font-bold text-zinc-300">+</div>
                            <div className="bg-blue-50 border-2 border-blue-200 w-20 h-28 rounded-md flex items-center justify-center text-center p-1">
                                <span className="text-[10px] font-bold text-blue-800">Twin XL<br />38"x80"</span>
                            </div>
                            <div className="text-xl font-bold text-zinc-300">=</div>
                            <div className="bg-zinc-100 border-2 border-zinc-300 w-28 h-28 rounded-md flex items-center justify-center text-center p-1">
                                <span className="text-xs font-bold text-zinc-700">King<br />76"x80"</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs lg:text-sm">
                            <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                                <strong className="block text-jet-black mb-1">Motion Isolation</strong>
                                <span className="text-zinc-600">You won't feel your partner move.</span>
                            </div>
                            <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                                <strong className="block text-jet-black mb-1">Adjustability</strong>
                                <span className="text-zinc-600">Use adjustable bases independently.</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Secret 4: Twin XL */}
                <section className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-8 md:p-12 hover:shadow-md transition-all">
                    <span className="text-xs font-bold tracking-wider text-golden-bronze uppercase mb-2 block">Secret #4</span>
                    <h2 className="text-3xl font-bold text-jet-black mb-6 font-serif">Twin XL: The Secret Hero</h2>
                    <div className="grid md:grid-cols-3 gap-12 items-center">
                        <div className="md:col-span-1">
                            <p className="text-graphite mb-4 text-lg">
                                Often associated with dorm rooms, the Twin XL is a powerhouse for single adults. The "XL" adds 5 inches of length.
                            </p>
                            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                                <p className="text-golden-bronze font-medium text-sm">
                                    It has the <strong>exact same length</strong> as a Queen or King mattress (80").
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-2 h-[250px]">
                            <Bar data={lengthChartData} options={lengthChartOptions} />
                        </div>
                    </div>
                </section>

                {/* Secret 5 & 7 Group */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Secret 5: Alaskan King */}
                    <section className="bg-jet-black text-white rounded-3xl shadow-lg p-8 relative overflow-hidden group">
                        {/* Decorative Blur */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-golden-bronze rounded-full blur-3xl opacity-10 -mr-16 -mt-16 group-hover:opacity-20 transition-opacity duration-700"></div>

                        <span className="text-xs font-bold tracking-wider text-golden-bronze uppercase mb-2 block relative z-10">Secret #5</span>
                        <h2 className="text-2xl font-bold mb-4 relative z-10 font-serif">The "Family Bed" Result</h2>
                        <p className="text-zinc-400 mb-8 relative z-10 leading-relaxed">
                            Enter the <strong>Alaskan King</strong>. Measuring a colossal 108" x 108" (9ft x 9ft). Great for co-sleeping, but check your door frames!
                        </p>

                        <div className="relative w-full h-48 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center z-10">
                            <div className="absolute w-40 h-40 bg-golden-bronze/20 border-2 border-golden-bronze flex items-start justify-center pt-2 rounded shadow-inner">
                                <span className="text-[10px] font-bold text-golden-bronze uppercase tracking-widest">Alaskan King</span>
                            </div>
                            <div className="absolute w-24 h-24 bg-white/10 border-2 border-white/30 flex items-end justify-center pb-1 rounded backdrop-blur-sm">
                                <span className="text-[9px] font-bold text-white">Std King</span>
                            </div>
                        </div>
                        <p className="text-xs text-zinc-500 mt-4 text-center">Requires at least a 16' x 16' room.</p>
                    </section>

                    {/* Secret 7: Crib vs Toddler */}
                    <section className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-8 hover:shadow-md transition-all">
                        <span className="text-xs font-bold tracking-wider text-golden-bronze uppercase mb-2 block">Secret #7</span>
                        <h2 className="text-2xl font-bold text-jet-black mb-4 font-serif">Cribs & Toddler Beds</h2>
                        <p className="text-graphite mb-8">
                            A budget-friendly fact: You usually don't need a new mattress when graduating from a crib.
                        </p>
                        <div className="flex justify-center items-center space-x-6 mb-8">
                            <div className="text-center">
                                <div className="w-24 h-32 bg-white border-4 border-green-200 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-sm">
                                    <span className="text-3xl">👶</span>
                                </div>
                                <span className="text-sm font-bold text-zinc-600">Crib</span>
                            </div>
                            <div className="text-2xl font-bold text-green-300">=</div>
                            <div className="text-center">
                                <div className="w-24 h-32 bg-white border-4 border-green-200 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-sm">
                                    <span className="text-3xl">🧒</span>
                                </div>
                                <span className="text-sm font-bold text-zinc-600">Toddler Bed</span>
                            </div>
                        </div>
                        <div className="bg-green-50 text-green-800 text-center py-3 rounded-lg font-medium text-sm border border-green-100">
                            Both measure 28" x 52"
                        </div>
                    </section>
                </div>

                {/* Secret 6: Room Size Calculator */}
                <section id="room-calc" className="bg-amber-50 rounded-3xl shadow-sm border border-amber-100 p-8 md:p-12">
                    <span className="text-xs font-bold tracking-wider text-golden-bronze uppercase mb-2 block">Secret #6</span>
                    <div className="md:flex md:justify-between md:items-start gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-jet-black mb-4 font-serif">The "Furniture Store Squeeze" Calculator</h2>
                            <p className="text-jet-black/80 mb-6 text-lg">
                                One of the most common regrets is buying a bed that physically fits but ruins the flow. You need <strong>30-36 inches</strong> of clearance around the sides and foot.
                            </p>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100/50">
                                <label className="block text-sm font-bold text-jet-black mb-3">Select a Mattress Size</label>
                                <div className="relative">
                                    <select
                                        value={selectedBed}
                                        onChange={(e) => setSelectedBed(e.target.value)}
                                        className="block w-full pl-4 pr-10 py-3 text-base border-gray-200 focus:outline-none focus:ring-golden-bronze focus:border-golden-bronze sm:text-sm rounded-xl border bg-alabaster-grey text-jet-black appearance-none cursor-pointer hover:bg-zinc-50 transition-colors"
                                    >
                                        {Object.entries(bedData).map(([key, data]) => (
                                            <option key={key} value={key}>{data.label}</option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 mt-8 md:mt-0 bg-white p-8 rounded-2xl border-l-8 border-golden-bronze shadow-lg">
                            <h3 className="text-lg font-bold text-jet-black mb-2 flex items-center gap-2">
                                <Home size={20} className="text-golden-bronze" /> Minimum Room Size
                            </h3>
                            <p className="text-sm text-zinc-500 mb-6">To maintain 30-36" clearance for walking and nightstands:</p>

                            <div className="text-center py-8 bg-amber-50 rounded-xl mb-4 group transform transition hover:scale-[1.02] duration-300">
                                <span className="text-4xl md:text-5xl font-extrabold text-golden-bronze block mb-2">{currentBed.room}</span>
                                <span className="text-xs uppercase tracking-widest text-golden-bronze font-bold opacity-80">Recommended</span>
                            </div>

                            <p className="text-xs text-zinc-400 text-center italic">
                                Allows for comfortable walking space and basic furniture.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final Takeaway */}
                <div className="bg-jet-black rounded-2xl p-8 md:p-12 text-center shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-6 font-serif">Final Takeaway</h3>
                    <p className="text-zinc-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                        Choosing the right mattress size is about geometry, not just luxury. Whether you need the length of a Cal King, the independence of a Split King, or the width of a Standard King, the right fit transforms your sleep quality.
                    </p>
                    <div className="inline-block bg-zinc-800 p-6 rounded-xl border border-zinc-700 max-w-2xl mx-auto">
                        <p className="font-bold text-white mb-2">Ask yourself this:</p>
                        <p className="italic text-golden-bronze">
                            "When you wake up tomorrow, take note of how close you are to the edge of the bed. Are you sleeping comfortably, or just staying within the lines?"
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default SevenBedSizeSecrets;
