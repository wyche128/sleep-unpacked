'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
} from 'chart.js';
import { Radar, Line } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
);

const HowToChooseMattress = () => {
    // --- STATE MANAGEMENT ---
    const [weight, setWeight] = useState('average'); // light, average, heavy
    const [pos, setPos] = useState('side'); // side, back, stomach
    const [visibleDataset, setVisibleDataset] = useState(0); // 0: Hybrid, 1: Memory Foam, 2: Latex

    const [recommendation, setRecommendation] = useState({
        firmness: '',
        description: '',
        factors: []
    });

    useEffect(() => {
        calculateRecommendation();
    }, [weight, pos]);

    const calculateRecommendation = () => {
        let firmness = "";
        let description = "";
        let factors = [];

        if (pos === 'side') {
            if (weight === 'light') {
                firmness = "Soft (3-5/10)";
                description = "You need a plush surface. Because you are lighter, you won't sink deeply enough into a medium mattress to relieve pressure on your shoulders and hips.";
                factors = ["Deep Contour Needed", "Soft Comfort Layers", "Avoid Stiff Coils"];
            } else if (weight === 'average') {
                firmness = "Medium Soft (4-6/10)";
                description = "The gold standard for side sleepers. Enough give to cradle hips, enough support to keep the spine straight.";
                factors = ["Pressure Relief Priority", "Moderate Sinkage"];
            } else { // heavy
                firmness = "Medium (5-7/10)";
                description = "Counter-intuitive: You need a firmer core than average side sleepers to prevent sinking too deep, which misaligns the spine.";
                factors = ["High Density Foam", "Reinforced Edge Support", "Hybrid Construction Essential"];
            }
        } else if (pos === 'back') {
            if (weight === 'heavy') {
                firmness = "Firm (7-8/10)";
                description = "You require significant pushback to prevent your hips from dipping below your shoulders, which causes lower back pain.";
                factors = ["Strong Coil System", "Minimal Sinkage", "Lumbar Support"];
            } else {
                firmness = "Medium Firm (6-7/10)";
                description = "The classic 'hotel feel'. Supports the natural curvature of the lower back without feeling like a rock.";
                factors = ["Balanced Support", "Subtle Contour"];
            }
        } else { // stomach
            firmness = "Firm (7-9/10)";
            description = "Stomach sleeping requires resistance. Any sinkage in the midsection causes hyperextension of the spine. You need a flat, stable surface.";
            factors = ["Maximum Support", "Minimal Comfort Layers", "High Surface Tension"];
        }

        setRecommendation({ firmness, description, factors });
    };

    // --- CHART DATA ---
    const radarData = {
        labels: ['Cooling', 'Motion Isolation', 'Bounce/Sex', 'Pressure Relief', 'Durability'],
        datasets: [
            {
                label: 'Hybrid (Coil+Foam)',
                data: [8, 6, 9, 7, 9],
                backgroundColor: 'rgba(180, 129, 68, 0.2)', // Golden Bronze
                borderColor: 'rgba(180, 129, 68, 1)',
                pointBackgroundColor: 'rgba(180, 129, 68, 1)',
                borderWidth: 2,
                hidden: visibleDataset !== 0
            },
            {
                label: 'Memory Foam',
                data: [3, 9, 2, 10, 6],
                backgroundColor: 'rgba(55, 65, 81, 0.2)', // Graphite/JetBlack
                borderColor: 'rgba(55, 65, 81, 1)',
                pointBackgroundColor: 'rgba(55, 65, 81, 1)',
                borderWidth: 2,
                hidden: visibleDataset !== 1
            },
            {
                label: 'Latex',
                data: [7, 5, 8, 6, 10],
                backgroundColor: 'rgba(217, 119, 6, 0.2)', // Amber
                borderColor: 'rgba(217, 119, 6, 1)',
                pointBackgroundColor: 'rgba(217, 119, 6, 1)',
                borderWidth: 2,
                hidden: visibleDataset !== 2
            }
        ]
    };

    const radarOptions = {
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { color: '#e2e8f0' },
                grid: { color: '#e2e8f0' },
                pointLabels: {
                    font: { size: 12, family: "'Inter', sans-serif", weight: '600' },
                    color: '#475569'
                },
                suggestedMin: 0,
                suggestedMax: 10
            }
        },
        plugins: {
            legend: { display: false }
        }
    };

    const lineData = {
        labels: ['100 lbs', '150 lbs', '200 lbs', '250 lbs', '300 lbs'],
        datasets: [{
            label: 'Perceived Firmness of a "Medium (6/10)" Mattress',
            data: [8, 7, 6, 5, 4],
            borderColor: '#374151', // Graphite
            backgroundColor: 'rgba(55, 65, 81, 0.1)',
            tension: 0.4,
            fill: true
        }]
    };

    const lineOptions = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: '#334155' }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        if (context.parsed.y >= 7) return "Feels Firm (On top)";
                        if (context.parsed.y <= 5) return "Feels Soft (Sinking)";
                        return "Feels Medium (True)";
                    }
                }
            }
        },
        scales: {
            y: {
                title: { display: true, text: 'Perceived Firmness (1-10)' },
                min: 2,
                max: 9,
                grid: { color: '#f1f5f9' }
            },
            x: {
                grid: { display: false }
            }
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans text-graphite selection:bg-golden-bronze selection:text-white">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

                {/* Hero Section */}
                <section className="text-center space-y-6 max-w-3xl mx-auto pt-8">
                    <Link href="/sleep-guides" className="inline-flex items-center gap-2 text-golden-bronze font-bold hover:underline mb-4">
                        <ArrowLeft size={20} /> Back to Guides
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-jet-black leading-tight tracking-tight">
                        Stop Sleeping on a Mistake.
                    </h1>
                    <p className="text-lg md:text-xl text-graphite/80">
                        You spend 1/3 of your life in bed. Most people buy mattresses based on marketing terms like "soft" or "plush."
                        Use this data-driven dashboard to find the sleep system that matches your specific biology.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#biomechanics"
                            className="bg-jet-black text-white px-8 py-3 rounded-full font-bold hover:bg-jet-black/80 transition shadow-lg">Start
                            Analysis</a>
                    </div>
                </section>

                {/* SECTION 1: THE BIOMECHANICS ENGINE */}
                <section id="biomechanics" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-alabaster-grey">
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Input Panel */}
                        <div className="p-8 md:p-12 bg-alabaster-grey/10 flex flex-col justify-center space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-jet-black mb-2">1. The Biomechanics Engine</h2>
                                <p className="text-sm text-graphite">Your body mass and sleeping position are the blueprints for
                                    your ideal mattress. Select your profile below.</p>
                            </div>

                            {/* Weight Input */}
                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-jet-black uppercase tracking-wide">Your Body Weight</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { id: 'light', label: '< 130 lbs', icon: '🪶' },
                                        { id: 'average', label: '130-250 lbs', icon: '⚖️' },
                                        { id: 'heavy', label: '> 250 lbs', icon: '🏋️' }
                                    ].map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setWeight(opt.id)}
                                            className={`py-3 rounded-lg text-sm font-medium transition focus:outline-none border ${weight === opt.id
                                                ? 'bg-golden-bronze/10 border-golden-bronze text-golden-bronze'
                                                : 'bg-white border-alabaster-grey hover:border-graphite text-graphite'
                                                }`}
                                        >
                                            <span className="block text-lg mb-1">{opt.icon}</span> {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Position Input */}
                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-jet-black uppercase tracking-wide">Primary Sleeping Position</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { id: 'side', label: 'Side', icon: '🛌' },
                                        { id: 'back', label: 'Back', icon: '🧘' },
                                        { id: 'stomach', label: 'Stomach', icon: '⤵️' }
                                    ].map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setPos(opt.id)}
                                            className={`py-3 rounded-lg text-sm font-medium transition focus:outline-none border ${pos === opt.id
                                                ? 'bg-golden-bronze/10 border-golden-bronze text-golden-bronze'
                                                : 'bg-white border-alabaster-grey hover:border-graphite text-graphite'
                                                }`}
                                        >
                                            <span className="block text-lg mb-1">{opt.icon}</span> {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Output Panel */}
                        <div className="p-8 md:p-12 flex flex-col justify-center bg-jet-black text-white relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-bold leading-none select-none pointer-events-none">?</div>

                            <h3 className="text-alabaster-grey text-sm font-bold uppercase tracking-wider mb-1">Recommended Configuration</h3>
                            <div className="text-4xl font-bold text-white mb-2">{recommendation.firmness}</div>
                            <div className="text-alabaster-grey text-lg leading-relaxed mb-6">
                                {recommendation.description}
                            </div>

                            <div className="border-t border-gray-700 pt-6">
                                <h4 className="text-gray-400 text-xs font-bold uppercase mb-3">Critical Factors for You</h4>
                                <ul className="space-y-2 text-sm text-gray-200">
                                    {recommendation.factors.map((factor, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <span className="text-golden-bronze mr-2 font-bold">➜</span>{factor}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: MATERIAL SCIENCE LAB */}
                <section id="materials">
                    <div className="mb-8 md:text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-jet-black mb-3">2. Material Matchmaker</h2>
                        <p className="text-graphite">Different materials serve different physics. Hybrids offer a balance, while Memory Foam prioritizes pressure relief at the cost of heat retention.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-alabaster-grey grid md:grid-cols-3 gap-8 items-center">
                        {/* Controls */}
                        <div className="space-y-4 md:col-span-1">
                            <p className="text-sm font-bold text-gray-400 uppercase">Toggle Comparison</p>
                            {[
                                { id: 0, label: 'Hybrid (Coil+Foam)', desc: 'Best all-rounder. High airflow.', color: 'border-golden-bronze' },
                                { id: 1, label: 'Memory Foam', desc: 'Maximum hug. Traps heat.', color: 'border-jet-black' },
                                { id: 2, label: 'Latex', desc: 'Bouncy, cooling, responsive.', color: 'border-amber-500' }
                            ].map((btn) => (
                                <button
                                    key={btn.id}
                                    onClick={() => setVisibleDataset(btn.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg border-l-4 bg-gray-50 hover:bg-gray-100 transition shadow-sm ${visibleDataset === btn.id ? 'ring-2 ring-offset-1 ring-gray-200' : ''} ${btn.color}`}
                                >
                                    <div className="font-bold text-jet-black">{btn.label}</div>
                                    <div className="text-xs text-gray-500">{btn.desc}</div>
                                </button>
                            ))}
                        </div>

                        {/* Chart */}
                        <div className="md:col-span-2 flex justify-center h-[300px] md:h-[350px]">
                            <div className="w-full relative">
                                <Radar data={radarData} options={radarOptions} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: THE FIRMNESS REALITY CHECK */}
                <section id="firmness-data" className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 h-[300px] bg-white p-4 rounded-2xl shadow-sm border border-alabaster-grey">
                        <Line data={lineData} options={lineOptions} />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <h2 className="text-3xl font-bold text-jet-black">3. The Relativity of Firmness</h2>
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                            <p className="font-bold text-amber-900">Counter-Intuitive Insight</p>
                            <p className="text-amber-800 text-sm">A "Universal Medium" (6/10) mattress does not feel the same to everyone. Firmness is subjective to your body mass.</p>
                        </div>
                        <p className="text-graphite leading-relaxed">
                            As shown in the chart, a standard "Medium" mattress feels significantly firmer to a lighter person (who floats on top) and softer to a heavier person (who sinks through the comfort layers).
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <CheckCircle className="text-golden-bronze mr-2 mt-1" size={16} />
                                <span className="text-jet-black text-sm"><strong>Light Sleepers:</strong> Often need "Plush" labels to achieve a "Medium" feel.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="text-golden-bronze mr-2 mt-1" size={16} />
                                <span className="text-jet-black text-sm"><strong>Heavy Sleepers:</strong> Need High-Density foams or Hybrids to prevent the "hammock effect."</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* SECTION 4: COOLING INSIGHTS */}
                <section className="bg-jet-black text-white rounded-3xl p-8 md:p-16 text-center space-y-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">4. The Cooling Paradox</h2>
                        <p className="text-alabaster-grey text-lg mb-8">
                            Why do you wake up sweating? It's often physics. The softer the mattress, the more you sink. The more you sink, the more the mattress insulates you.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                                <div className="text-3xl mb-2">🔥</div>
                                <h3 className="font-bold text-lg mb-2 text-white">The "Hug" Trap</h3>
                                <p className="text-sm text-gray-300">Traditional Memory Foam relies on body heat to mold. It wraps you in insulation, preventing airflow.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                                <div className="text-3xl mb-2">🌬️</div>
                                <h3 className="font-bold text-lg mb-2 text-white">The Coil Solution</h3>
                                <p className="text-sm text-gray-300">Hybrids allow air to circulate between the steel coils, actively dissipating body heat 28% faster than all-foam.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                                <div className="text-3xl mb-2">🧊</div>
                                <h3 className="font-bold text-lg mb-2 text-white">Phase Change</h3>
                                <p className="text-sm text-gray-300">Look for copper-infused covers or Phase Change Materials (PCM) that feel cool to the touch.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: THE 100-NIGHT STRATEGY */}
                <section className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-jet-black">5. The Real Test Happens at Home</h2>
                        <p className="text-graphite mt-2">You cannot judge a mattress in 5 minutes under showroom lights. Follow the 100-night strategy.</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-alabaster-grey overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="p-8 space-y-4">
                                <h3 className="font-bold text-xl text-jet-black">The 30-Day Break-In Rule</h3>
                                <p className="text-graphite text-sm leading-relaxed">
                                    Your body has adapted to your old, bad mattress. It takes roughly 30 days for your muscles to realign and for the new materials to soften. Don't return it in week 1.
                                </p>
                                <div className="h-2 bg-gray-100 rounded-full mt-4 overflow-hidden">
                                    <div className="h-full bg-golden-bronze w-1/3"></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-400 font-medium">
                                    <span>Day 1: Purchase</span>
                                    <span>Day 30: Evaluation</span>
                                    <span>Day 100: Decision</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 border-l border-gray-100 flex flex-col justify-center">
                                <h4 className="font-bold text-jet-black mb-4">Your Evaluation Checklist</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Does it align my spine?",
                                        "Do I sleep cool?",
                                        "Can I change positions easily?",
                                        "No lower back pain upon waking?"
                                    ].map((item, idx) => {
                                        const [checked, setChecked] = useState(false);
                                        return (
                                            <li key={idx} className="flex items-center text-sm text-graphite cursor-pointer" onClick={() => setChecked(!checked)}>
                                                <div className={`w-5 h-5 rounded border border-gray-300 mr-3 flex items-center justify-center transition-colors ${checked ? 'bg-golden-bronze border-golden-bronze' : 'bg-white'}`}>
                                                    {checked && <CheckCircle size={14} className="text-white" />}
                                                </div>
                                                <span className={checked ? 'line-through text-gray-400' : ''}>{item}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HowToChooseMattress;
