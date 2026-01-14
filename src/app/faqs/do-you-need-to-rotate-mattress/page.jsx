'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import RelatedFAQ from '../../../components/RelatedFAQ';
import {
    ArrowRight,
    RotateCw,
    AlertTriangle,
    CheckCircle,
    Info,
    Calendar,
    Shield,
    XCircle,
    RefreshCw,
    ArrowDown,
    Pause
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
    Tooltip,
    Legend,
    Filler
);
import JsonLd from '../../../components/JsonLd';
import { generateArticleSchema, generateFAQPageSchema } from '../../../utils/schema';

const RotateMattressGuide = () => {
    const relatedFaqs = [
        {
            title: 'Can I Flip My Mattress?',
            link: '/faqs/can-i-flip-my-mattress',
            category: 'Maintenance'
        },
        {
            title: 'The 1.5-Inch Indentation Threshold',
            link: '/faqs/one-point-five-inch-threshold',
            category: 'Warranty'
        },
        {
            title: 'How to Clean a Memory Foam Mattress',
            link: '/sleep-guides/how-to-clean-mattress',
            category: 'Sleep Guide'
        }
    ];

    // --- Decision Tool State ---
    const [step, setStep] = useState(1);
    const [result, setResult] = useState(null);

    const handleStep1 = (isTwoSided) => {
        if (isTwoSided) {
            setResult({
                icon: <RotateCw className="w-16 h-16 text-blue-600" />,
                title: "FLIP AND ROTATE",
                desc: "Since you have a rare two-sided mattress, you should both flip it over (top to bottom) AND rotate it (head to foot) to ensure even wear on all surfaces.",
                freq: "Every 3-6 Months",
                color: "bg-blue-50 border-blue-200 text-blue-900"
            });
            setStep(3); // Go to result
        } else {
            setStep(2);
        }
    };

    const handleStep2 = (isDirectional) => {
        if (isDirectional === 'yes') {
            setResult({
                icon: <AlertTriangle className="w-16 h-16 text-red-600" />,
                title: "DO NOT ROTATE",
                desc: "If your mattress has specific 'Head' and 'Foot' zones (non-symmetrical), rotating it 180° will put lumbar support in the wrong place. Check your manual.",
                freq: "Check Manual",
                color: "bg-red-50 border-red-200 text-red-900"
            });
        } else {
            setResult({
                icon: <RefreshCw className="w-16 h-16 text-green-600" />,
                title: "ROTATE ONLY (180°)",
                desc: "Rotate your mattress 180 degrees (swap head and foot). Do NOT flip it over, or you'll be sleeping on the hard support foam.",
                freq: "Every 3-6 Months",
                color: "bg-green-50 border-green-200 text-green-900"
            });
        }
        setStep(3);
    };

    const resetTool = () => {
        setStep(1);
        setResult(null);
    };

    // --- Flip Animation State ---
    const [isFlipped, setIsFlipped] = useState(false);

    // --- Chart Data ---
    const chartData = {
        labels: ['New', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
        datasets: [
            {
                label: 'With Regular Rotation',
                data: [100, 95, 90, 85, 80, 75],
                borderColor: '#2563eb', // Blue 600
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 3,
                tension: 0.3,
                fill: true
            },
            {
                label: 'Without Rotation (Sagging)',
                data: [100, 90, 75, 60, 50, 40],
                borderColor: '#ef4444', // Red 500
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 3,
                borderDash: [5, 5],
                tension: 0.3,
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
            y: {
                beginAtZero: false,
                min: 30,
                max: 100,
                title: { display: true, text: 'Support Integrity (%)' }
            }
        }
    };

    const articleSchema = generateArticleSchema({
        title: 'Do You Really Need to Rotate Your Mattress?',
        description: 'Stop wrestling your bed for no reason. We analyzed the data to separate the maintenance myths from the mandatory moves.',
        url: 'https://sleepunpacked.com/faqs/do-you-need-to-rotate-mattress',
        publishedAt: '2023-10-01', // Update with actual date if available
        modifiedAt: '2024-01-15',   // Update with actual date if available
        image: 'https://sleepunpacked.com/images/rotate-mattress-guide.jpg' // Update with actual image URL
    });

    const faqSchema = generateFAQPageSchema([
        {
            question: 'Can I flip my mattress?',
            answer: 'It depends on the mattress type. Most modern mattresses are one-sided (not flippable). Check your manufacturer instructions. If it is two-sided, flipping is recommended.'
        },
        {
            question: 'What is the 1.5-inch indentation threshold?',
            answer: 'This is a common warranty term. If your mattress has a visible indentation greater than 1.5 inches when no weight is applied, it may be considered defective and eligible for replacement under warranty.'
        },
        {
            question: 'How often should I rotate my mattress?',
            answer: 'For most mattresses, rotating 180 degrees every 3-6 months is recommended to ensure even wear and prevent sagging.'
        }
    ]);

    return (
        <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
            <JsonLd data={articleSchema} />
            <JsonLd data={faqSchema} />
            <Header />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Hero Section */}
                <header className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-blue-900 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                            <RefreshCw className="text-blue-300 w-5 h-5 mr-2" />
                            <span className="text-blue-100 font-bold text-xs tracking-wide uppercase">Maintenance Protocol</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Do You Really Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Rotate Your Mattress?</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
                            Stop wrestling your bed for no reason. We analyzed the data to separate the maintenance myths from the mandatory moves.
                        </p>
                        <button
                            onClick={() => document.getElementById('decision-tool').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition shadow-lg inline-flex items-center"
                        >
                            Check My Mattress <ArrowDown className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </header>

                {/* Interactive Decision Tool */}
                <section id="decision-tool" className="py-8 max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-slate-100">
                        <div className="mb-10 text-center">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">The Rotation Calculator</h2>
                            <p className="text-slate-500 text-lg">Answer 2 questions to get your personalized verdict.</p>
                        </div>

                        {/* Step 1 */}
                        {step === 1 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                                <h3 className="text-xl font-bold text-center">1. Is your mattress "flippable" (two-sided)?</h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <button
                                        onClick={() => handleStep1(true)}
                                        className="p-8 border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition text-center group flex flex-col items-center"
                                    >
                                        <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:scale-110 transition">
                                            <RotateCw className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <span className="font-bold text-slate-700 group-hover:text-blue-700">Yes, it has two sleeping sides</span>
                                    </button>
                                    <button
                                        onClick={() => handleStep1(false)}
                                        className="p-8 border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition text-center group flex flex-col items-center"
                                    >
                                        <div className="bg-slate-100 p-4 rounded-full mb-4 group-hover:scale-110 transition">
                                            <ArrowDown className="w-8 h-8 text-slate-600" />
                                        </div>
                                        <span className="font-bold text-slate-700 group-hover:text-blue-700">No, it has a distinct base</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2 */}
                        {step === 2 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                                <h3 className="text-xl font-bold text-center">2. Does it have "Directional Zoned Support"?</h3>
                                <p className="text-center text-slate-500 max-w-md mx-auto">Some advanced mattresses have specific, non-symmetrical zones for head and legs.</p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <button
                                        onClick={() => handleStep2('no')}
                                        className="p-8 border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition text-center group flex flex-col items-center"
                                    >
                                        <div className="bg-green-100 p-4 rounded-full mb-4 group-hover:scale-110 transition">
                                            <Pause className="w-8 h-8 text-green-600 rotate-90" />
                                        </div>
                                        <span className="font-bold text-slate-700 group-hover:text-blue-700">No / Symmetrical Zoning</span>
                                    </button>
                                    <button
                                        onClick={() => handleStep2('yes')}
                                        className="p-8 border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition text-center group flex flex-col items-center"
                                    >
                                        <div className="bg-amber-100 p-4 rounded-full mb-4 group-hover:scale-110 transition">
                                            <AlertTriangle className="w-8 h-8 text-amber-600" />
                                        </div>
                                        <span className="font-bold text-slate-700 group-hover:text-blue-700">Yes / I'm Unsure</span>
                                    </button>
                                </div>
                                <button onClick={resetTool} className="block mx-auto text-slate-400 text-sm hover:underline">Back</button>
                            </div>
                        )}

                        {/* Result */}
                        {step === 3 && result && (
                            <div className={`rounded-2xl p-8 md:p-12 text-center animate-in zoom-in-95 duration-300 border-2 ${result.color}`}>
                                <div className="flex justify-center mb-6">{result.icon}</div>
                                <h3 className="text-3xl font-bold mb-4">{result.title}</h3>
                                <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">{result.desc}</p>
                                <div className="inline-block bg-white/50 px-6 py-2 rounded-lg font-bold border border-black/5">
                                    {result.freq}
                                </div>
                                <button onClick={resetTool} className="block mx-auto mt-8 text-sm opacity-60 hover:opacity-100 underline">Start Over</button>
                            </div>
                        )}
                    </div>
                </section>

                {/* The Science Grid */}
                <section className="py-16">
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Interactive Flip Demo */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">The "Layer Cake" Rule</h2>
                            <p className="text-slate-600 mb-8">
                                Most modern mattresses are built like a cake. Flipping a one-sided mattress means sleeping on concrete-like base foam.
                            </p>

                            <div className="border border-slate-200 rounded-2xl p-8 bg-slate-50 flex flex-col items-center min-h-[350px] justify-center">
                                <div className="flex justify-between w-full mb-8 items-center">
                                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Mattress Internals</span>
                                    <button
                                        onClick={() => setIsFlipped(!isFlipped)}
                                        className="text-xs bg-white border border-slate-300 px-4 py-2 rounded-full font-bold hover:bg-slate-100 transition shadow-sm"
                                    >
                                        {isFlipped ? 'Flip it Back' : 'Try Flipping It'}
                                    </button>
                                </div>

                                <div className={`w-64 transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-x-180' : ''}`} style={{ transform: isFlipped ? 'rotateX(180deg)' : 'rotateX(0deg)' }}>
                                    <div className="flex flex-col gap-1 w-full shadow-xl">
                                        <div className="h-16 bg-blue-400 rounded-t-lg flex items-center justify-center text-white font-bold relative overflow-hidden">
                                            <span className="relative z-10">Soft Comfort Layer</span>
                                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                        </div>
                                        <div className="h-10 bg-blue-600 flex items-center justify-center text-white text-xs font-medium">
                                            Transition Foam
                                        </div>
                                        <div className="h-24 bg-slate-800 rounded-b-lg flex items-center justify-center text-slate-200 font-bold border-t border-slate-700">
                                            Hard Support Base
                                        </div>
                                    </div>
                                </div>

                                <p className={`text-center mt-8 font-bold text-sm transition-colors duration-300 ${isFlipped ? 'text-red-500' : 'text-blue-600'}`}>
                                    {isFlipped ? '⚠️ WARNING: Sleeping on Hard Base Foam' : '✅ Correct: Soft Comfort Layer Up'}
                                </p>
                            </div>
                        </div>

                        {/* Canoe Effect Chart */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">The "Canoe Effect"</h2>
                            <p className="text-slate-600 mb-8">
                                Without rotation, weight concentrates in one spot, creating permanent indentations.
                            </p>
                            <div className="w-full h-80 bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6 relative">
                                <Line data={chartData} options={chartOptions} />
                            </div>
                            <p className="text-xs text-slate-400 text-center italic">Simulated degradation data over 5 years.</p>
                        </div>

                    </div>
                </section>

                {/* Maintenance Protocol Cards */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">The Maintenance Protocol</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition duration-300 group">
                            <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <Calendar className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">The Magic Number</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Rotate every <strong>3 to 6 months</strong>. A good rule of thumb? Rotate whenever the seasons change.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition duration-300 group">
                            <div className="bg-red-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <Shield className="w-7 h-7 text-red-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">Protect Warranty</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Many warranties define sagging as indentations {'>'}1.5". Manufacturers check for uneven wear to void claims.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition duration-300 group">
                            <div className="bg-amber-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <XCircle className="w-7 h-7 text-amber-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">When to Stop</h3>
                            <p className="text-slate-600 leading-relaxed">
                                If you have deep impressions or wake up with aches despite rotating, it's likely time for a replacement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer/Conclusion */}
                <footer className="bg-slate-900 rounded-3xl p-12 text-center shadow-2xl">
                    <h2 className="text-3xl font-bold text-white mb-6">The Final Verdict</h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        For 90% of the population, the answer is <strong className="text-white">YES</strong>, rotate it. It is the single easiest way to maintain spinal alignment and extend the lifespan of your mattress.
                    </p>
                    <Link href="/faqs" className="inline-flex items-center text-blue-300 hover:text-white transition font-semibold">
                        <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to FAQ Hub
                    </Link>
                </footer>

                {/* Related FAQs */}
                <RelatedFAQ faqs={relatedFaqs} />

            </div>
        </div>
    );
};

export default RotateMattressGuide;
