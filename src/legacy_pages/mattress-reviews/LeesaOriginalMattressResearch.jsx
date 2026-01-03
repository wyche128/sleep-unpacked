import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
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
    UserCheck,
    TriangleAlert,
    Info,
    CheckCircle,
    XCircle,
    AlertCircle
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

const LeesaOriginalMattressResearch = () => {
    // --- State ---
    const [timeIndex, setTimeIndex] = useState(0); // 0, 1, 2, 3 corresponding to timeSteps
    const [sleeperWeight, setSleeperWeight] = useState(2); // Default to 201-250 (Accelerated Wear) as per original logic
    const [activeLayerIndex, setActiveLayerIndex] = useState(null);

    const timeSteps = [0, 1, 3, 5];
    const currentYear = timeSteps[timeIndex];

    // --- Data & Constants ---

    // Converted from HTML timelineData
    const performanceData = {
        0: [10, 10, 10, 10],   // Sagging, Firmness, Edge, Cooling
        1: [9.5, 9, 10, 10],
        3: [8, 7.5, 8.5, 10],
        5: [6, 5, 7.5, 9]
    };

    const timelineDescriptions = {
        0: {
            title: "Brand New Status",
            firmness: "6/10 (Medium-Firm)",
            risk: "None. 100% Support.",
            note: "Initial break-in period may soften feel slightly in first 30 days."
        },
        1: {
            title: "1 Year Status",
            firmness: "Softens by ~0.5 points",
            risk: "Low (<5% Issue Rate)",
            note: "Mattress settles. Most owners remain highly satisfied. Zero visible sag expected."
        },
        3: {
            title: "3 Year Status",
            firmness: "Softens by 1.0–1.5 points",
            risk: "Moderate (Softening Begins)",
            note: "Critical Turning Point. Heavier sleepers notice 'hammocking'. 15-20% report issues."
        },
        5: {
            title: "5 Year Status",
            firmness: "Softens by 2.0+ points",
            risk: "High (>30% Issue Rate)",
            note: "End of optimal life for many. Significant loss of support. Indentations likely > 0.5\"."
        }
    };

    // Converted from HTML layers
    const layerDetails = [
        {
            title: "Top Layer (2\")",
            subtitle: "Aerated Polyfoam",
            desc: "Designed to provide a responsive, latex-like feel and promote airflow. This generation (Gen 2) replaced the older 'Avena' foam to improve motion isolation.",
            factor: "High Resilience. Provides immediate surface comfort and cooling. Less prone to permanent indentations than memory foam.",
            icon: Wind,
            color: "text-blue-500" // Keeping functional color for cooling context, but could be brand
        },
        {
            title: "Middle Layer (2\")",
            subtitle: "Memory Foam (3.0 pcf)",
            desc: "Intended for pressure relief and contouring. The 3.0 lb/ft³ density is the industry standard baseline.",
            factor: "CRITICAL WEAR POINT. 3.0 pcf is the minimum for durability. This layer is most susceptible to softening, leading to the 'hammocking' effect.",
            icon: Layers,
            color: "text-golden-bronze"
        },
        {
            title: "Base Layer (6\")",
            subtitle: "High-Density Core Support",
            desc: "The foundational support layer that gives the mattress its structure and shape.",
            factor: "High Durability. Rarely fails catastrophically, but relies on the layers above to distribute load evenly.",
            icon: Minimize2,
            color: "text-graphite"
        }
    ];

    // Weight Profiles
    const weightProfiles = [
        { // <= 150
            label: "≤ 150 lb",
            verdict: "Excellent",
            icon: CheckCircle,
            colorClass: "text-green-600",
            bgClass: "bg-green-100",
            desc: "Likely to maintain adequate support for 7–8 years. Minimal stress on foams.",
            life: "7-8 Years"
        },
        { // 151-200
            label: "151–200 lb",
            verdict: "Standard",
            icon: Info,
            colorClass: "text-blue-600",
            bgClass: "bg-blue-100",
            desc: "Performance drift noticeable around year 4. Standard wear pattern expected.",
            life: "4-6 Years"
        },
        { // 201-250
            label: "201–250 lb",
            verdict: "Accelerated Wear",
            icon: AlertCircle,
            colorClass: "text-golden-bronze",
            bgClass: "bg-amber-100",
            desc: "Softening and support loss often reported within 2–3 years due to 3.0 pcf foam compression.",
            life: "2-4 Years"
        },
        { // > 250
            label: "> 250 lb",
            verdict: "Not Recommended",
            icon: XCircle,
            colorClass: "text-red-600",
            bgClass: "bg-red-100",
            desc: "High risk of premature 'bottoming out' and support failure. Foam density insufficient for load.",
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

    // Sagging Prob Chart (Bar)
    const saggingProbs = {
        0: 0,
        1: 5,
        3: 20,
        5: 35
    };

    const barData = {
        labels: ['Risk of Visible Sagging'],
        datasets: [{
            label: 'Probability (%)',
            data: [saggingProbs[currentYear]],
            backgroundColor: saggingProbs[currentYear] > 25 ? '#dc2626' : (saggingProbs[currentYear] > 10 ? '#cca43b' : '#16a34a'),
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
        labels: ['Typical Sag (Year 3)', 'Warranty Threshold'],
        datasets: [{
            label: 'Inches',
            data: [0.75, 1.5],
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
                            <h1 className="text-3xl md:text-4xl font-bold text-jet-black">Deep Longevity: Leesa Original</h1>
                            <p className="text-graphite mt-1">A deep, evidence-based durability analysis of the Leesa Original foam mattress.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-alabaster-grey min-w-[100px]">
                                <div className="text-xs text-graphite uppercase font-semibold">Score</div>
                                <div className="text-2xl font-bold text-golden-bronze">8.8</div>
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
                            <h3 className="text-lg font-bold text-jet-black mb-2">Risk of Sagging (&gt;0.5")</h3>
                            <p className="text-sm text-graphite mb-6">Probability of visible body impressions developing.</p>
                            <div className="h-[150px] w-full">
                                <Bar data={barData} options={barOptions} />
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
                            <p className="text-xs text-alabaster-grey mb-4">Foam density (3.0 pcf) dictates life span by weight.</p>

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
                                    A significant challenge for owners is the discrepancy between <strong>felt softening</strong> and <strong>measurable indentation</strong>.
                                </p>
                                <p className="mb-2">
                                    Leesa's warranty requires a visible indentation greater than <strong>1.5 inches</strong>. However, many owners report back pain (softening) long before the mattress physically sags that deep.
                                </p>
                                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 mt-4">
                                    <p className="text-amber-800 text-xs font-bold">
                                        Warning: The warranty is void if slats are &gt; 3 inches apart (check latest terms, often 3-4").
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-alabaster-grey/30 rounded-xl p-6 border border-alabaster-grey">
                            <h4 className="text-sm font-bold text-jet-black mb-4 text-center">Physical Sag vs. Warranty Threshold</h4>
                            <div className="h-[200px] w-full">
                                <Bar data={warrantyData} options={warrantyOptions} />
                            </div>
                            <p className="text-xs text-center text-graphite mt-2">Graph illustrates typical depth of 'painful' body impressions vs required depth for claim.</p>
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

export default LeesaOriginalMattressResearch;
