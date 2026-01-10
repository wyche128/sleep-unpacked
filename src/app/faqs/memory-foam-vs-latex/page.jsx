'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import RelatedFAQ from '../../../components/RelatedFAQ';
import Link from 'next/link';
import { ArrowLeft, Check, X, AlertTriangle, Info, Beaker, Sun } from 'lucide-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const MemoryFoamVsLatex = () => {
    const relatedFaqs = [
        {
            title: 'How Is Memory Foam Different? (The Science)',
            link: '/faqs/memory-foam-different',
            category: 'Science'
        },
        {
            title: 'Are Memory Foam Mattresses Toxic?',
            link: '/faqs/memory-foam-toxic',
            category: 'Safety'
        },
        {
            title: 'Do You Really Need to Rotate Your Mattress?',
            link: '/faqs/do-you-need-to-rotate-mattress',
            category: 'Maintenance'
        }
    ];

    // --- State for Mechanics Demo ---
    const [memoryState, setMemoryState] = useState('idle'); // idle, pressed, recovering
    const [latexState, setLatexState] = useState('idle'); // idle, pressed, recovering

    // --- State for Density Slider ---
    const [density, setDensity] = useState(3.0);
    const [densityInfo, setDensityInfo] = useState({
        label: 'Entry Level',
        desc: 'Acceptable for guest beds, but will soften significantly over time.',
        color: 'text-orange-500'
    });

    // --- Chart Data ---
    const chartData = {
        labels: ['Low-Density Memory Foam', 'High-Density Memory Foam', 'Synthetic Latex', 'Natural Latex'],
        datasets: [
            {
                label: 'Estimated Lifespan (Years)',
                data: [5, 10, 9, 15],
                backgroundColor: [
                    '#94a3b8', // Slate 400
                    '#3b82f6', // Blue 500
                    '#fdba74', // Orange 300
                    '#10b981'  // Emerald 500
                ],
                borderRadius: 8,
                barThickness: 40,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.raw + '+ Years';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Years'
                },
                grid: {
                    color: '#f1f5f9'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
    };

    // --- Refs for Timeouts ---
    const memoryTimeouts = useRef([]);
    const latexTimeouts = useRef([]);

    // --- Handlers for Mechanics Demo ---
    const clearTimeouts = (timeoutsRef) => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
    };

    const handleCompress = (type) => {
        if (type === 'memory') {
            clearTimeouts(memoryTimeouts);
            setMemoryState('pressed');

            const t1 = setTimeout(() => setMemoryState('recovering'), 100);
            const t2 = setTimeout(() => setMemoryState('idle'), 2100); // 2s recovery

            memoryTimeouts.current.push(t1, t2);
        } else {
            clearTimeouts(latexTimeouts);
            setLatexState('pressed');

            const t1 = setTimeout(() => setLatexState('recovering'), 100);
            const t2 = setTimeout(() => setLatexState('idle'), 400); // Fast recovery

            latexTimeouts.current.push(t1, t2);
        }
    };

    // --- Handlers for Density Slider ---
    useEffect(() => {
        const densityData = {
            '2.5': { label: 'Low Quality', desc: 'Prone to sagging quickly. Common in cheap bed-in-a-box models.', color: 'text-red-500' },
            '3.0': { label: 'Entry Level', desc: 'Acceptable for guest beds, but will soften significantly over time.', color: 'text-orange-500' },
            '3.5': { label: 'Mid-Tier Standard', desc: 'The industry average. Decent balance of comfort and life.', color: 'text-yellow-600' },
            '4.0': { label: 'High Quality', desc: 'Rivals some latex beds in longevity. Excellent durability.', color: 'text-emerald-500' },
            '4.5': { label: 'Premium', desc: 'Dense, heavy, and very long-lasting.', color: 'text-emerald-600' },
            '5.0': { label: 'Elite', desc: 'Maximum durability for memory foam. Very slow response feel.', color: 'text-emerald-700' },
            '5.5': { label: 'Ultra Dense', desc: 'Rare. Extremely durable but can trap heat.', color: 'text-emerald-800' }
        };

        const key = density.toFixed(1);
        const info = densityData[key] || densityData['3.0'];
        setDensityInfo(info);
    }, [density]);


    return (
        <div className="font-sans text-graphite bg-slate-50 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow max-w-5xl mx-auto px-4 py-12 space-y-24">

                {/* Back Link */}
                <div className="max-w-3xl mx-auto w-full">
                    <Link href="/faqs" className="inline-flex items-center text-slate-500 hover:text-emerald-600 transition-colors mb-8">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to FAQ Hub
                    </Link>
                </div>

                {/* Intro Section */}
                <section className="text-center space-y-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                        The Longevity Wars: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                            Memory Foam vs. Latex
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        Most mattress buyers ask, "How does it feel?" But the real question is, "How long will it last?"
                        We analyzed the chemistry to find out why one material quietly outlasts the other by nearly a decade.
                    </p>
                </section>

                {/* 1. The Lifespan Chart */}
                <section id="lifespan" className="bg-white rounded-3xl shadow-lg p-6 md:p-10 border border-slate-100">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1 space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900">1. The 15-Year Rule</h2>
                            <p className="text-slate-600">
                                It seems counter-intuitive that a natural material tapped from a rubber tree would outlast
                                chemically engineered foam. Yet, <strong>Natural Latex</strong> is the undisputed durability champion.
                            </p>
                            <p className="text-slate-600 text-sm">
                                While memory foam fatigues and creates body impressions over time, latex resists structural
                                breakdown, maintaining its "bounce" for over a decade.
                            </p>
                            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mt-4">
                                <p className="text-emerald-800 font-semibold text-sm">Winner: Natural Latex (15+ Years)</p>
                            </div>
                        </div>
                        <div className="md:col-span-2 flex items-center justify-center bg-slate-50 rounded-xl p-4">
                            <div className="w-full h-[350px]">
                                <Bar data={chartData} options={chartOptions} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. The Mechanics Interactive Demo */}
                <section id="mechanics" className="space-y-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900">2. The "Sag" Factor</h2>
                        <p className="text-slate-600 mt-2">
                            Why does Memory Foam fail sooner? It remembers too much. Click the blocks below to see the
                            difference between <strong>Viscoelastic</strong> (Memory Foam) and <strong>Elastic</strong> (Latex) behavior.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Memory Foam Simulation */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 text-center space-y-6 hover:shadow-md transition">
                            <h3 className="text-xl font-bold text-blue-900">Memory Foam</h3>
                            <div className="h-40 flex items-center justify-center">
                                <div
                                    onClick={() => handleCompress('memory')}
                                    className={`w-32 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold select-none foam-block ${memoryState === 'pressed' ? 'pressed' : ''
                                        } ${memoryState === 'recovering' ? 'memory-recover' : ''}`}
                                >
                                    Click Me
                                </div>
                            </div>
                            <div className="text-left space-y-2">
                                <h4 className="font-semibold text-slate-800">Viscoelastic Behavior</h4>
                                <p className="text-sm text-slate-600">
                                    Absorbs energy and softens with heat. Over years of nightly compression, the cells fatigue
                                    and stop springing back, leading to <strong>permanent sagging</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Latex Simulation */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 text-center space-y-6 hover:shadow-md transition">
                            <h3 className="text-xl font-bold text-emerald-900">Natural Latex</h3>
                            <div className="h-40 flex items-center justify-center">
                                <div
                                    onClick={() => handleCompress('latex')}
                                    className={`w-32 h-32 bg-emerald-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold select-none foam-block ${latexState === 'pressed' ? 'pressed' : ''
                                        } ${latexState === 'recovering' ? 'latex-recover' : ''}`}
                                >
                                    Click Me
                                </div>
                            </div>
                            <div className="text-left space-y-2">
                                <h4 className="font-semibold text-slate-800">Highly Elastic Behavior</h4>
                                <p className="text-sm text-slate-600">
                                    Pushes back against weight immediately. It resists structural breakdown and prevents the
                                    formation of "valleys" where your hips rest.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Density Detective Interactive */}
                <section id="density" className="bg-indigo-900 rounded-3xl text-white p-8 md:p-16 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">3. Density is the Secret Code</h2>
                            <p className="text-indigo-100">
                                If you are committed to memory foam, you must become a detective. The lifespan depends entirely
                                on <strong>Density (PCF - Pounds Per Cubic Foot)</strong>.
                            </p>
                            <p className="text-sm text-indigo-200 italic">
                                "Many budget 'bed-in-a-box' options utilize lower-density foams. They feel great in the showroom
                                but are chemically destined to break down faster."
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <label htmlFor="densitySlider" className="block text-sm font-semibold mb-4">Adjust Memory Foam Density:</label>
                            <input
                                type="range"
                                id="densitySlider"
                                min="2.5"
                                max="5.5"
                                step="0.5"
                                value={density}
                                onChange={(e) => setDensity(parseFloat(e.target.value))}
                                className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-emerald-400 mb-6"
                            />

                            <div className="flex justify-between text-xs text-indigo-300 mb-6">
                                <span>2.5 PCF</span>
                                <span>4.0 PCF</span>
                                <span>5.5 PCF</span>
                            </div>

                            <div className="bg-white text-slate-900 p-4 rounded-xl text-center space-y-2">
                                <div className="text-2xl font-bold">{density.toFixed(1)} PCF</div>
                                <div className={`text-sm font-medium ${densityInfo.color}`}>{densityInfo.label}</div>
                                <p className="text-xs text-slate-500">{densityInfo.desc}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Imposter & Kryptonite Grid */}
                <section className="grid md:grid-cols-2 gap-8">
                    {/* Synthetic Latex */}
                    <article className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-orange-400">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-900">4. The Imposter: Synthetic Latex</h3>
                            <Beaker className="text-orange-400 w-8 h-8" />
                        </div>
                        <p className="text-slate-600 mb-4">
                            Just because it says "Latex" doesn't mean it wins. <strong>Synthetic (SBR) Latex</strong> is made
                            from petrochemicals, chemically closer to polyurethane foam.
                        </p>
                        <ul className="text-sm space-y-2 text-slate-500">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                                Dries out and crumbles faster than natural latex.
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                                Lacks the legendary resilience of botanical latex.
                            </li>
                        </ul>
                    </article>

                    {/* Oxidation */}
                    <article className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-yellow-400">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-900">5. Kryptonite: Oxidation</h3>
                            <Sun className="text-yellow-400 w-8 h-8" />
                        </div>
                        <p className="text-slate-600 mb-4">
                            Latex is biodegradable, which makes it susceptible to <strong>Oxidation</strong>. Its arch-nemesis
                            is direct sunlight and ozone.
                        </p>
                        <ul className="text-sm space-y-2 text-slate-500">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                                Can become brittle and crumble to powder if exposed.
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                                Rarely an issue if encased in covers/sheets.
                            </li>
                        </ul>
                    </article>
                </section>

                {/* Final Verdict */}
                <section id="verdict" className="bg-slate-900 text-slate-300 rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">The Bottom Line</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        If you view a mattress as an investment and want to buy it once and forget about it for the next 15
                        years, <strong className="text-emerald-400">Natural Latex is the undisputed winner</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto text-sm font-medium">
                        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                            <div className="text-emerald-400 mb-1">Natural Latex</div>
                            <div>Costs more upfront, but lower cost-per-year.</div>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                            <div className="text-blue-400 mb-1">Memory Foam</div>
                            <div>Specific "hug" feel, but expect a 5-10 year replacement cycle.</div>
                        </div>
                    </div>
                </section>

                {/* Related FAQs */}
                <RelatedFAQ faqs={relatedFaqs} />

            </main>

            <Footer />
        </div>
    );
};

export default MemoryFoamVsLatex;
