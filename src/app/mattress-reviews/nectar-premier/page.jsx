'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
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
    BarElement
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import {
    Clock,
    History,
    Wind,
    Layers,
    Minimize2,
    Activity,
    Shield,
    CheckCircle,
    XCircle,
    AlertCircle,
    TriangleAlert,
    Info,
    Thermometer
} from 'lucide-react';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
);

const NectarPremiereLongevityReview = () => {
    // --- State ---
    const [timeIndex, setTimeIndex] = useState(0); // 0, 1, 2, 3 corresponding to timeSteps
    const [sleeperWeight, setSleeperWeight] = useState(2); // Default to 201-250 (High Risk)
    const [activeLayerIndex, setActiveLayerIndex] = useState(null);

    const timeSteps = [0, 1, 3, 5];
    const currentYear = timeSteps[timeIndex];

    // --- Data & Constants ---

    // Timeline Data for Nectar Premiere (Based on research)
    const performanceData = {
        0: [10, 10, 9, 10],   // Sagging, Firmness, Edge, Cooling. Edge is weak even new (9).
        1: [8.5, 8.5, 8, 9],  // Initial softening within year 1.
        3: [6, 6, 6, 7.5],    // Significant sag risk, hammocking, edge roll-off.
        5: [4, 4.5, 4, 6]     // High failure rate, severe impressions.
    };

    const timelineDescriptions = {
        0: {
            title: "Brand New Status",
            firmness: "6.5/10 (Medium-Firm)",
            risk: "None. Plush & Supportive.",
            note: "ActiveCool PCM cover provides noticeable initial cooling sensation."
        },
        1: {
            title: "1 Year Status",
            firmness: "Softens by ~1.0 point",
            risk: "Moderate (Soft Spots)",
            note: "Comfort layer softens faster than base. Heavier sleepers may feel 'hip sink'."
        },
        3: {
            title: "3 Year Status",
            firmness: "Softens by 2.0+ points",
            risk: "High (Hammocking)",
            note: "Significant 'center ridge' complaints or 'stuck in mud' feeling reported."
        },
        5: {
            title: "5 Year Status",
            firmness: "Structurally Compromised",
            risk: "Critical (>40% Issue Rate)",
            note: "Likely replacement needed due to deep body impressions >1.5\" or loss of support."
        }
    };

    // Layer Anatomy - Nectar Premiere 13" Spec
    const layerDetails = [
        {
            title: "Cover",
            subtitle: "PCM (Polyethylene) Blend",
            desc: "Quilted cool-to-touch cover. Contains phase change material. Do not remove - older Gen 1 models had fiberglass sock.",
            factor: "Safety Risk. Removable zipper misleading; fiberglass release danger in pre-2023 models.",
            icon: Shield,
            color: "text-blue-500"
        },
        {
            title: "Comfort Layer (3\")",
            subtitle: "Gel Memory Foam w/ PCM",
            desc: "Thick 3-inch layer of ActiveCool HD foam. Provides the plush initial feel.",
            factor: "Major Softening Risk. 3\" density often insufficient for >230lbs, leading to rapid compression.",
            icon: Thermometer,
            color: "text-blue-400"
        },
        {
            title: "Transition Layer (3\")",
            subtitle: "Dynamic Poly Foam",
            desc: "Buffer between soft comfort foam and hard base. Critical for spinal alignment.",
            factor: "Fatigue Point. If this softens, 'bottoming out' on the hard base occurs.",
            icon: Layers,
            color: "text-golden-bronze"
        },
        {
            title: "Base Layer (7\")",
            subtitle: "High-Density Support Core",
            desc: "Standard polyurethane support foam foundation.",
            factor: "Standard Durability. Relies on upper layers to distribute load.",
            icon: Minimize2,
            color: "text-graphite"
        }
    ];

    // Weight Profiles
    const weightProfiles = [
        { // <= 150
            label: "≤ 150 lb",
            verdict: "Good",
            icon: CheckCircle,
            colorClass: "text-green-600",
            bgClass: "bg-green-100",
            desc: "Lighter sleepers stress the foam less. Expect 6-8 years of good performance.",
            life: "6-8 Years"
        },
        { // 151-200
            label: "151–200 lb",
            verdict: "Fair / Caution",
            icon: Info,
            colorClass: "text-blue-600",
            bgClass: "bg-blue-100",
            desc: "Softening likely by Year 2. Rotations mandatory to prevent early body impressions.",
            life: "4-6 Years"
        },
        { // 201-250
            label: "201–250 lb",
            verdict: "High Risk",
            icon: AlertCircle,
            colorClass: "text-golden-bronze",
            bgClass: "bg-amber-100",
            desc: "\"Hammock\" effect likely within 12-18 months. Foam density may not support hip pressure enough.",
            life: "2-4 Years"
        },
        { // > 250
            label: "> 250 lb",
            verdict: "Not Recommended",
            icon: XCircle,
            colorClass: "text-red-600",
            bgClass: "bg-red-100",
            desc: "Severe risk of bottoming out & rapid sagging < 1 year. Coil/Hybrid alternative strongly advised.",
            life: "< 2 Years"
        }
    ];

    // --- Chart Data ---
    const radarData = {
        labels: ['Sagging Resistance', 'Firmness Retention', 'Edge Support', 'Cooling'],
        datasets: [{
            label: 'Performance Score (10=New)',
            data: performanceData[currentYear],
            backgroundColor: 'rgba(204, 164, 59, 0.2)', // Golden Bronze transparent
            borderColor: '#cca43b', // Golden Bronze
            pointBackgroundColor: '#fff',
            pointBorderColor: '#cca43b',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#cca43b'
        }]
    };

    const radarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { color: '#e5e5e5' },
                grid: { color: '#e5e5e5' },
                suggestedMin: 0,
                suggestedMax: 10,
                ticks: { display: false }
            }
        },
        plugins: {
            legend: { display: false }
        }
    };

    // Sagging Prob Chart (Bar) - Nectar Premiere Specific
    const saggingProbs = {
        0: 0,
        1: 15, // Higher early risk than Classic due to thicker soft foam
        3: 40,
        5: 65
    };

    const barData = {
        labels: ['Risk of Visible Sagging'],
        datasets: [{
            label: 'Probability (%)',
            data: [saggingProbs[currentYear]],
            backgroundColor: saggingProbs[currentYear] > 30 ? '#dc2626' : (saggingProbs[currentYear] > 15 ? '#cca43b' : '#16a34a'),
            borderRadius: 4,
            barThickness: 50
        }]
    };

    const barOptions = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                min: 0,
                max: 100,
                grid: { display: true },
                title: { display: true, text: 'Probability Percentage (%)' }
            },
            y: { display: false }
        },
        plugins: { legend: { display: false } }
    };

    // Warranty Chart (Static)
    const warrantyData = {
        labels: ['Typical Sag (Year 2)', 'Warranty Threshold'],
        datasets: [{
            label: 'Inches',
            data: [1.25, 1.5], // Nectar specific: 1.25" typical failure vs 1.5" threshold
            backgroundColor: ['#9ca3af', '#dc2626'],
            borderRadius: 4
        }]
    };

    const warrantyOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Depth (Inches)' }
            }
        },
        plugins: { legend: { display: false } }
    };

    const currentInsight = timelineDescriptions[currentYear];
    const currentWeightProfile = weightProfiles[sleeperWeight];

    return (
        <div className="bg-white text-jet-black font-sans min-h-screen">
            <Header />
            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Header */}
                <header className="mb-8 border-b border-alabaster-grey pb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-golden-bronze/10 text-golden-bronze-500 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">Living Review</span>
                                <span className="text-graphite text-xs flex items-center gap-1">
                                    <Clock size={12} /> Updated: 2024 Baseline
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-jet-black">Deep Longevity: Nectar Premiere</h1>
                            <p className="text-graphite mt-1">Evidence-based durability analysis of the Nectar Premiere (13") Memory Foam Mattress.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-alabaster-grey min-w-[100px]">
                                <div className="text-xs text-graphite uppercase font-semibold">Score</div>
                                <div className="text-2xl font-bold text-golden-bronze">7.2</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-alabaster-grey min-w-[100px]">
                                <div className="text-xs text-graphite uppercase font-semibold">Type</div>
                                <div className="text-sm font-bold text-jet-black mt-2">All-Foam</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Control Center: Time Machine */}
                <section className="bg-white rounded-2xl shadow-sm border border-alabaster-grey p-6 mb-8">
                    <h2 className="text-lg font-semibold text-jet-black mb-4 flex items-center gap-2">
                        <History className="text-golden-bronze" size={20} /> Performance Drift Simulator
                    </h2>
                    <div className="relative pt-6 pb-2">
                        <input
                            type="range"
                            min="0"
                            max="3"
                            value={timeIndex}
                            onChange={(e) => setTimeIndex(parseInt(e.target.value))}
                            step="1"
                            className="w-full h-2 bg-alabaster-grey rounded-lg appearance-none cursor-pointer accent-golden-bronze"
                        />
                        <div className="flex justify-between text-xs font-semibold text-graphite mt-2 uppercase tracking-wider">
                            <span className="w-1/4 text-left">New (0 Yrs)</span>
                            <span className="w-1/4 text-center">1 Year</span>
                            <span className="w-1/4 text-center">3 Years</span>
                            <span className="w-1/4 text-right">5 Years</span>
                        </div>
                    </div>

                    {/* Insights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-alabaster-grey/30 p-4 rounded-lg border-l-4 border-golden-bronze shadow-sm">
                            <h4 className="text-xs font-bold text-graphite uppercase">Firmness Feel</h4>
                            <p className="text-lg font-bold text-jet-black">{currentInsight.firmness}</p>
                        </div>
                        <div className="bg-alabaster-grey/30 p-4 rounded-lg border-l-4 border-amber-500 shadow-sm">
                            <h4 className="text-xs font-bold text-graphite uppercase">Risk Level</h4>
                            <p className="text-lg font-bold text-jet-black">{currentInsight.risk}</p>
                        </div>
                        <div className="bg-alabaster-grey/30 p-4 rounded-lg border-l-4 border-graphite shadow-sm">
                            <h4 className="text-xs font-bold text-graphite uppercase">Analyst Note</h4>
                            <p className="text-sm text-graphite mt-1">{currentInsight.note}</p>
                        </div>
                    </div>
                </section>

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: Charts (8/12) */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Performance Radar */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-alabaster-grey">
                            <h3 className="text-lg font-bold text-jet-black mb-2">Performance Profile Shape</h3>
                            <p className="text-sm text-graphite mb-6">Visualizing the loss of key attributes over time.</p>
                            <div className="h-[300px] md:h-[400px] w-full mx-auto">
                                <Radar data={radarData} options={radarOptions} />
                            </div>
                        </div>

                        {/* Sagging Probability */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-alabaster-grey">
                            <h3 className="text-lg font-bold text-jet-black mb-2">Risk of Sagging (&gt;1.0")</h3>
                            <p className="text-sm text-graphite mb-6">Probability of visible body impressions or significant "hammocking" developing.</p>
                            <div className="h-[150px] w-full">
                                <Bar data={barData} options={barOptions} />
                            </div>
                        </div>

                        {/* Legacy Issue Alert */}
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                            <div className="flex items-start gap-3">
                                <TriangleAlert className="text-red-600 shrink-0" size={24} />
                                <div>
                                    <h3 className="text-lg font-bold text-red-800 mb-1">Warning: Fiberglass & Edge Support</h3>
                                    <ul className="text-sm text-red-700 list-disc ml-5 space-y-1">
                                        <li><strong>Fiberglass Risk (Gen 1):</strong> Older Premiere models (Pre-2023) often contain fiberglass. DO NOT remove the cover.</li>
                                        <li><strong>Edge Failure:</strong> "Roll-off" is a common failure mode. Do not sit on edges for prolonged periods.</li>
                                        <li><strong>Sleeping Hot:</strong> Cooling features deplete over time as foam density compresses and airflow is restricted.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Anatomy & Calculator (4/12) */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Anatomy */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-alabaster-grey">
                            <h3 className="text-lg font-bold text-jet-black mb-4">Anatomy & Construction</h3>
                            <p className="text-xs text-graphite mb-4">Click layer to inspect.</p>

                            <div className="space-y-3">
                                {layerDetails.map((layer, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveLayerIndex(activeLayerIndex === idx ? null : idx)}
                                        className={`cursor-pointer p-4 rounded-lg border transition-all ${activeLayerIndex === idx ? 'border-golden-bronze bg-golden-bronze/5' : 'border-alabaster-grey hover:border-golden-bronze/50'}`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <div className={`font-bold text-sm ${layer.color}`}>{layer.title}</div>
                                                <div className="text-xs text-graphite">{layer.subtitle}</div>
                                            </div>
                                            <layer.icon size={18} className="text-graphite" />
                                        </div>
                                        {activeLayerIndex === idx && (
                                            <div className="mt-3 pt-3 border-t border-alabaster-grey text-sm animate-in fade-in slide-in-from-top-1">
                                                <p className="text-graphite mb-2">{layer.desc}</p>
                                                <div className="text-xs font-bold uppercase text-golden-bronze">Longevity Factor:</div>
                                                <p className="text-jet-black">{layer.factor}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sleeper Compatibility Calculator */}
                        <div className="bg-jet-black text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-lg font-bold mb-4 border-b border-graphite pb-2">Sleeper Calculator</h3>
                            <p className="text-xs text-alabaster-grey mb-4">Estimated life span based on sleeper weight.</p>

                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {weightProfiles.map((p, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSleeperWeight(idx)}
                                        className={`text-xs py-2 px-1 rounded border ${sleeperWeight === idx ? 'bg-golden-bronze border-golden-bronze text-white font-bold' : 'bg-transparent border-graphite text-alabaster-grey hover:bg-white/10'}`}
                                    >
                                        {p.label}
                                    </button>
                                ))}
                            </div>

                            <div className="bg-white/10 rounded-xl p-4 border border-white/20 text-center">
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${currentWeightProfile.bgClass} ${currentWeightProfile.colorClass} mb-3`}>
                                    <currentWeightProfile.icon size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-1">{currentWeightProfile.verdict}</h4>
                                <div className="text-sm text-golden-bronze font-bold mb-3">Est. Life: {currentWeightProfile.life}</div>
                                <p className="text-xs text-alabaster-grey leading-relaxed">
                                    {currentWeightProfile.desc}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Warranty Gap Section */}
                <section className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-alabaster-grey">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-xl font-bold text-jet-black mb-4">The Warranty "Gap"</h3>
                            <div className="prose prose-sm text-graphite">
                                <p className="mb-2">
                                    The "Forever Warranty" requires a <strong>visible, unweighted indentation of 1.5 inches</strong>.
                                </p>
                                <p className="mb-2">
                                    <strong>Why this is hard:</strong> Memory foam is resilient. Even when it loses structural support ("softens") and causes back pain, it often springs back to shape when you get out of bed.
                                </p>
                                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 mt-4">
                                    <p className="text-amber-800 text-xs font-bold">
                                        Owner Experience: Rejection Rate
                                    </p>
                                    <p className="text-amber-800 text-xs mt-1">
                                        High. Most "sagging" complaints are actually "softening" complaints, which are not covered.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-alabaster-grey/30 rounded-xl p-6 border border-alabaster-grey">
                            <h4 className="text-sm font-bold text-jet-black mb-4 text-center">Pain Point vs. Coverage Point</h4>
                            <div className="h-[200px] w-full">
                                <Bar data={warrantyData} options={warrantyOptions} />
                            </div>
                            <p className="text-xs text-center text-graphite mt-2">Graph illustrating that most sleepers feel pain (1.25" sag) before warranty coverage begins (1.5").</p>
                        </div>
                    </div>
                </section>

                {/* Footer Disclaimer */}
                <footer className="mt-12 border-t border-alabaster-grey pt-8 text-center">
                    <p className="text-sm text-graphite">&copy; 2024 Living Review Analysis. Generated based on independent specs and owner reports.</p>
                </footer>

            </div>
        </div>
    );
};

export default NectarPremiereLongevityReview;
