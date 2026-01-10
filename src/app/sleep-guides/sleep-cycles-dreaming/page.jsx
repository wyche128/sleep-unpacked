'use client';

import React, { useState, useEffect, useRef } from 'react';
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
import Header from '../../../components/Header';
import Link from 'next/link';
import { Brain, Moon, Zap, Shield, Eye, Activity } from 'lucide-react';

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

const SleepCyclesDreaming = () => {
    // --- State: Chart Section ---
    const [chartMode, setChartMode] = useState('full'); // 'power', 'danger', 'full'

    // --- State: Glymphatic Section ---
    const [isBrainWashing, setIsBrainWashing] = useState(false);

    // --- State: Atonia Section ---
    const [isAtoniaActive, setIsAtoniaActive] = useState(true);

    // --- State: Lucid Tabs ---
    const [activeLucidTab, setActiveLucidTab] = useState('mild');

    // --- Chart Config ---
    const chartLabels = [0, 10, 20, 30, 45, 60, 70, 80, 90, 100, 110];
    const chartDataValues = [0, 2, 2, 2, 3, 3, 3, 2, 1, 1, 2]; // 0=Awake, 1=REM, 2=Light, 3=Deep

    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: (value) => {
                        const stages = ['Awake', 'REM', 'Light Sleep', 'Deep Sleep'];
                        return stages[value];
                    },
                    stepSize: 1
                },
                reverse: true, // Deep sleep at bottom
                grid: {
                    color: 'rgba(0,0,0,0.05)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Minutes Asleep'
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const stages = ['Awake', 'REM', 'Light Sleep', 'Deep Sleep'];
                        return 'Stage: ' + stages[context.raw];
                    }
                }
            },
            legend: { display: false }
        },
        elements: {
            line: {
                tension: 0 // Stepped
            }
        }
    };

    // Construct dataset based on mode
    const getChartDataset = () => {
        let borderColor = '#6366f1'; // Indigo-500 default
        let backgroundColor = 'rgba(99, 102, 241, 0.2)';

        // Custom segment styling function for Chart.js
        // Note: react-chartjs-2 segment styling is complex, simplified here by passing distinct datasets or using segment prop if supported easily.
        // For simplicity in this implementation, we'll try to use the 'segment' scriptable options if possible, but strict CSP might block it.
        // Instead, we will simulate the "highlight" by just changing the main color or visual feedback.
        // To truly match the HTML's "green vs gray" segments, we would need the segment config.

        const segment = {
            borderColor: (ctx) => {
                if (!ctx.p0.parsed) return '#e5e7eb';
                const x = ctx.p0.parsed.x; // Index in labels 0..10. 
                // Map index to minutes approximately? No, x is index.
                // Labels: 0, 10, 20, 30, 45, 60, 70, 80, 90, 100, 110
                // Indices: 0,  1,  2,  3,  4,  5,  6,  7,  8,   9,  10

                const min = chartLabels[x];

                if (chartMode === 'power') {
                    return min <= 20 ? '#22c55e' : '#e5e7eb'; // Green active, gray passive
                } else if (chartMode === 'danger') {
                    return (min > 30 && min < 70) ? '#ef4444' : '#e5e7eb';
                } else {
                    return min < 100 ? '#3b82f6' : '#e5e7eb';
                }
            },
            backgroundColor: (ctx) => {
                if (!ctx.p0.parsed) return 'transparent';
                const x = ctx.p0.parsed.x;
                const min = chartLabels[x];

                if (chartMode === 'power') {
                    return min <= 20 ? 'rgba(34, 197, 94, 0.2)' : 'transparent';
                } else if (chartMode === 'danger') {
                    return (min > 30 && min < 70) ? 'rgba(239, 68, 68, 0.2)' : 'transparent';
                } else {
                    return min < 100 ? 'rgba(59, 130, 246, 0.2)' : 'transparent';
                }
            }
        };

        return {
            label: 'Sleep Stage Depth',
            data: chartDataValues,
            borderWidth: 3,
            stepped: true,
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 6,
            segment: segment
        };
    };

    const chartData = {
        labels: chartLabels,
        datasets: [getChartDataset()]
    };

    const getFeedbackText = () => {
        if (chartMode === 'power') return {
            title: "The Power Nap",
            desc: "By waking up at 20 minutes (before deep sleep sets in), you avoid grogginess and get a burst of alertness.",
            style: "bg-green-100 text-green-900 border-green-500"
        };
        if (chartMode === 'danger') return {
            title: "The Danger Zone",
            desc: "Waking up here (30-60m) interrupts Deep Sleep (Stage N3). This causes 'Sleep Inertia'—that heavy, groggy feeling.",
            style: "bg-red-100 text-red-900 border-red-500"
        };
        return {
            title: "The Full Reset",
            desc: "At 90 minutes, you complete a full cycle, including REM. You wake up naturally from lighter sleep, cementing memories and feeling refreshed.",
            style: "bg-blue-100 text-blue-900 border-blue-500"
        };
    };

    const feedback = getFeedbackText();


    return (
        <div className="font-sans text-jet-black bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <header className="bg-jet-black text-white py-20 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="container mx-auto relative z-10 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Sleep is Not a <br /><span className="text-golden-bronze">Power Down</span>
                    </h1>
                    <p className="text-lg md:text-xl text-alabaster-grey mb-8">
                        It is a neuro-chemical rollercoaster. From paralyzing your body to washing your brain, explore the 5 mind-bending truths about what happens when you close your eyes.
                    </p>
                    <a href="#cycles" className="inline-block bg-golden-bronze hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                        Start Exploring
                    </a>
                    <div className="mt-4">
                        <Link href="/top-picks" className="text-zinc-400 hover:text-white text-sm font-semibold hover:underline">
                            Or explore our Top Picks for better sleep
                        </Link>
                    </div>
                </div>
            </header>

            {/* Section 1: The 90-Minute Cycle */}
            <section id="cycles" className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-jet-black mb-4">The 90-Minute Architecture</h2>
                        <p className="text-graphite max-w-2xl mx-auto">
                            Sleep isn't a flat line. It's a wave. (See the <Link href="/sleep-guides/state-of-sleep" className="text-golden-bronze hover:underline">State of Sleep report</Link>.) Understanding where you are in the cycle is the key to energy. Explore the napping zones below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* Controls */}
                        <div className="space-y-4">
                            <div className="bg-slate-50 p-6 rounded-xl border border-alabaster-grey shadow-sm">
                                <h3 className="font-bold text-lg mb-4 text-jet-black">Select a Strategy:</h3>
                                <button onClick={() => setChartMode('power')} className={`w-full text-left px-4 py-3 rounded-lg mb-2 border transition-all flex flex-col group ${chartMode === 'power' ? 'bg-green-50 border-green-300 ring-2 ring-green-400' : 'bg-white border-alabaster-grey hover:border-green-300'}`}>
                                    <div className={`font-bold ${chartMode === 'power' ? 'text-green-800' : 'text-jet-black group-hover:text-green-600'}`}>The Power Nap</div>
                                    <div className="text-xs text-slate-500">10-20 Minutes (Light Sleep)</div>
                                </button>
                                <button onClick={() => setChartMode('danger')} className={`w-full text-left px-4 py-3 rounded-lg mb-2 border transition-all flex flex-col group ${chartMode === 'danger' ? 'bg-red-50 border-red-300 ring-2 ring-red-400' : 'bg-white border-alabaster-grey hover:border-red-300'}`}>
                                    <div className={`font-bold ${chartMode === 'danger' ? 'text-red-800' : 'text-jet-black group-hover:text-red-600'}`}>The Danger Zone</div>
                                    <div className="text-xs text-slate-500">30-60 Minutes (Deep Sleep Inertia)</div>
                                </button>
                                <button onClick={() => setChartMode('full')} className={`w-full text-left px-4 py-3 rounded-lg border transition-all flex flex-col group ${chartMode === 'full' ? 'bg-blue-50 border-blue-300 ring-2 ring-blue-400' : 'bg-white border-alabaster-grey hover:border-blue-300'}`}>
                                    <div className={`font-bold ${chartMode === 'full' ? 'text-blue-800' : 'text-jet-black group-hover:text-blue-600'}`}>The Full Reset</div>
                                    <div className="text-xs text-slate-500">90 Minutes (Complete Cycle)</div>
                                </button>
                            </div>
                            <div className={`p-4 rounded-lg text-sm font-medium border-l-4 transition-all ${feedback.style}`}>
                                <strong>{feedback.title}: </strong> {feedback.desc}
                            </div>
                        </div>

                        {/* Chart Container */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-4 rounded-xl border border-alabaster-grey shadow-lg">
                                <div className="relative w-full h-[350px]">
                                    <Line options={chartOptions} data={chartData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Glymphatic System */}
            <section id="brainwash" className="py-16 px-4 bg-slate-100">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-jet-black mb-4">The Nightly Brain Wash</h2>
                            <p className="text-graphite mb-6 leading-relaxed">
                                While you are awake, your brain cells are packed tightly together. But during sleep, the glymphatic system kicks in. The space between cells expands by up to 60%, allowing cerebrospinal fluid to rush through and flush out toxins like beta-amyloid. (Learn more about <Link href="/sleep-guides/why-sleep-matters" className="text-golden-bronze hover:underline">why sleep matters</Link>.)
                            </p>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                                <h4 className="font-bold text-jet-black mb-2 flex items-center gap-2"><Brain className="w-5 h-5 text-indigo-500" /> Why it matters:</h4>
                                <ul className="list-disc list-inside text-sm text-graphite space-y-2 ml-1">
                                    <li>Clears metabolic waste</li>
                                    <li>Prevents cognitive decline</li>
                                    <li>"Rinse cycle" for your neural pathways</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">Simulation Control</span>
                                <div className="flex items-center gap-4 mt-2">
                                    <span className="text-jet-black font-medium">Awake State</span>
                                    <button
                                        onClick={() => setIsBrainWashing(!isBrainWashing)}
                                        className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${isBrainWashing ? 'bg-sky-500' : 'bg-slate-300'}`}
                                    >
                                        <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow ${isBrainWashing ? 'translate-x-9' : 'translate-x-1'}`} />
                                    </button>
                                    <span className="text-jet-black font-medium">Sleep State</span>
                                </div>
                            </div>
                        </div>

                        {/* Simulation */}
                        <div className="md:w-1/2 w-full">
                            <div className="bg-slate-200 w-full aspect-square rounded-2xl p-2 relative overflow-hidden transition-colors duration-1000">
                                {/* Fluid Animation Layer */}
                                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isBrainWashing ? 'opacity-100' : 'opacity-0'}`}
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(59, 130, 246, 0) 100%)',
                                        backgroundSize: '200% 200%',
                                        animation: 'flow 3s infinite linear'
                                    }}
                                >
                                    <style jsx>{`
                                        @keyframes flow {
                                            0% { background-position: 0% 0%; }
                                            100% { background-position: 0% 200%; }
                                        }
                                    `}</style>
                                </div>

                                <div className={`grid grid-cols-4 h-full w-full relative z-10 transition-all duration-1000 ${isBrainWashing ? 'gap-6 p-4' : 'gap-1 p-1'}`}>
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className={`rounded-lg shadow-inner transition-all duration-1000 h-full w-full border-2 ${isBrainWashing ? 'bg-rose-200 border-rose-300' : 'bg-rose-300 border-rose-400'}`}></div>
                                    ))}
                                </div>
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-600 shadow z-20">
                                    Status: <span className={isBrainWashing ? "text-blue-600" : "text-red-500"}>
                                        {isBrainWashing ? "Washing Away Toxins" : "Toxins Accumulating"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: REM Atonia */}
            <section id="paralysis" className="py-16 px-4 bg-white border-t border-alabaster-grey">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-jet-black mb-4">Safety Lock: REM Atonia</h2>
                        <p className="text-graphite max-w-2xl mx-auto">
                            Why don't you physically run when you dream about running? Your brain chemically paralyzes your major muscle groups to keep you safe.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Concept Card */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-alabaster-grey">
                            <h3 className="text-xl font-bold text-jet-black mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-indigo-600" /> The Mechanism</h3>
                            <p className="text-graphite mb-4">
                                During Rapid Eye Movement (REM) sleep, your brain activity is nearly identical to when you are awake. You are processing emotions and visualizing complex scenarios.
                            </p>
                            <p className="text-graphite mb-4">
                                To prevent injury, the brainstem sends inhibitory signals to the spinal cord, inducing <strong>Atonia</strong>—temporary muscle paralysis.
                            </p>
                            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-6">
                                <p className="text-sm text-amber-800">
                                    <strong>Did you know?</strong> "Sleep Paralysis" is simply your mind waking up before this chemical safety lock has disengaged.
                                </p>
                            </div>
                        </div>

                        {/* Interactive Signal Blocker */}
                        <div className="bg-jet-black p-8 rounded-2xl relative flex flex-col items-center justify-center space-y-4 shadow-xl">
                            {/* Brain Node */}
                            <div className="w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center border-4 border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.5)] z-10">
                                <div className="text-center">
                                    <div className="text-sky-400 font-bold flex flex-col items-center"><Brain className="mb-1" /> BRAIN</div>
                                    <div className="text-xs text-sky-200">Dreaming Active</div>
                                </div>
                            </div>

                            {/* Signal Path */}
                            <div className="h-16 w-2 bg-slate-700 relative overflow-hidden">
                                <div className={`absolute top-0 left-0 w-full bg-yellow-400 animate-bounce ${isAtoniaActive ? 'h-1/2' : 'h-full'}`}></div>
                            </div>

                            {/* The Switch */}
                            <div className="relative z-10 bg-indigo-900 px-6 py-3 rounded-lg border border-indigo-700 text-center w-64">
                                <div className="text-xs text-indigo-300 uppercase tracking-widest mb-1">Brainstem Gate</div>
                                <div className={`font-mono font-bold ${isAtoniaActive ? 'text-red-400' : 'text-green-400'}`}>
                                    {isAtoniaActive ? 'LOCKED (REM)' : 'OPEN (AWAKE)'}
                                </div>
                            </div>

                            {/* Path to muscles */}
                            <div className="h-16 w-2 bg-slate-700 relative">
                                {!isAtoniaActive && (
                                    <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 animate-bounce delay-75"></div>
                                )}
                            </div>

                            {/* Muscle Node */}
                            <div className={`w-32 h-16 rounded-lg flex items-center justify-center border-2 transition-colors ${!isAtoniaActive ? 'bg-yellow-100 border-yellow-400' : 'bg-slate-800 border-slate-600'}`}>
                                <div className={`${!isAtoniaActive ? 'text-yellow-800' : 'text-slate-400'} font-bold flex items-center gap-2`}><Activity size={18} /> MUSCLES</div>
                            </div>

                            {/* Controls */}
                            <div className="absolute top-4 right-4">
                                <button onClick={() => setIsAtoniaActive(!isAtoniaActive)} className="text-xs bg-slate-700 text-white px-3 py-1 rounded hover:bg-slate-600 transition">
                                    Toggle State
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Lucid Dreaming */}
            <section id="lucid" className="py-16 px-4 bg-indigo-50">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-jet-black mb-2 flex items-center justify-center gap-2"><Eye className="text-indigo-600" /> Hack Your Dreams</h2>
                        <p className="text-graphite">Techniques to wake up while you are asleep.</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Tab Headers */}
                        <div className="flex border-b border-alabaster-grey">
                            {['mild', 'reality', 'why'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveLucidTab(tab)}
                                    className={`flex-1 py-4 text-center font-bold transition ${activeLucidTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'}`}
                                >
                                    {tab === 'mild' && 'MILD Technique'}
                                    {tab === 'reality' && 'Reality Testing'}
                                    {tab === 'why' && 'Why Do It?'}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="p-8 min-h-[300px]">
                            {activeLucidTab === 'mild' && (
                                <div className="animate-fade-in block">
                                    <h3 className="text-2xl font-bold text-jet-black mb-4">Mnemonic Induction of Lucid Dreams</h3>
                                    <p className="text-graphite mb-6">This technique relies on prospective memory—the intention to do something in the future.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-slate-50 p-4 rounded-lg border border-alabaster-grey">
                                            <div className="text-2xl mb-2">1️⃣</div>
                                            <h4 className="font-bold mb-1 text-jet-black">Set Intention</h4>
                                            <p className="text-sm text-slate-500">As you fall asleep, repeat: "Next time I'm dreaming, I will remember I'm dreaming."</p>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-lg border border-alabaster-grey">
                                            <div className="text-2xl mb-2">2️⃣</div>
                                            <h4 className="font-bold mb-1 text-jet-black">Visualize</h4>
                                            <p className="text-sm text-slate-500">Imagine yourself becoming lucid in a recent dream you recall.</p>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-lg border border-alabaster-grey">
                                            <div className="text-2xl mb-2">3️⃣</div>
                                            <h4 className="font-bold mb-1 text-jet-black">Repeat</h4>
                                            <p className="text-sm text-slate-500">Do this until you fall asleep. Focus is key.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeLucidTab === 'reality' && (
                                <div className="animate-fade-in block">
                                    <h3 className="text-2xl font-bold text-jet-black mb-4">Reality Testing</h3>
                                    <p className="text-graphite mb-6">Train your brain to question reality while awake, so it does the same while asleep.</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-4 bg-sky-50 p-3 rounded-lg">
                                            <div className="font-bold text-sky-700 min-w-[120px]">The Finger Test</div>
                                            <p className="text-sm text-graphite">Try to push your finger through your palm. In a dream, it might pass through.</p>
                                        </div>
                                        <div className="flex items-center gap-4 bg-sky-50 p-3 rounded-lg">
                                            <div className="font-bold text-sky-700 min-w-[120px]">The Reading Test</div>
                                            <p className="text-sm text-graphite">Read some text, look away, then look back. In dreams, text often changes.</p>
                                        </div>
                                        <div className="flex items-center gap-4 bg-sky-50 p-3 rounded-lg">
                                            <div className="font-bold text-sky-700 min-w-[120px]">The Clock Test</div>
                                            <p className="text-sm text-graphite">Look at a digital clock. The numbers often scramble or change in dreams.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeLucidTab === 'why' && (
                                <div className="animate-fade-in block">
                                    <h3 className="text-2xl font-bold text-jet-black mb-4">Benefits of Lucidity</h3>
                                    <p className="text-graphite mb-6">Beyond just flying (which is cool), lucid dreaming has therapeutic applications.</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { title: "Nightmare Resolution", desc: "Confront monsters knowing they cannot hurt you." },
                                            { title: "Skill Practice", desc: "Practice public speaking or sports in a risk-free simulator." },
                                            { title: "Problem Solving", desc: "Access creative parts of the brain unrestricted by logic." }
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-green-500 mr-2">✓</span>
                                                <div>
                                                    <strong className="block text-jet-black">{item.title}</strong>
                                                    <span className="text-sm text-slate-500">{item.desc}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SleepCyclesDreaming;
