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
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import { CheckCircle, Info, AlertTriangle, XCircle, Clock, ShieldCheck, Activity } from 'lucide-react';


// Register ChartJS components
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

const LeesaLegendMattressReview = () => {
    // State
    const [activeLayer, setActiveLayer] = useState(0);
    const [timeMachineYear, setTimeMachineYear] = useState(0); // 0, 1, 2, 3 corresponding to index
    const [sleeperWeight, setSleeperWeight] = useState(1); // Default to 151-200lb

    // --- DATA ---

    // 1. Anatomy Data
    const layers = [
        {
            title: 'Comfort System (2")',
            subtitle: 'Aerated Foam + Memory Foam',
            desc: 'A combination of 1" hole-punched "comfort foam" for bounce/cooling and 1" memory foam for pressure relief. This creates a balanced, neutral feel.',
            factor: 'Moderate. While comfortable, these top foam layers are the first to soften. The specific densities are proprietary but behave like standard 3.0lb foams.'
        },
        {
            title: 'The Legend Layer (1.5")',
            subtitle: 'Zoned Micro-coils + Stabilizing Foam',
            desc: 'The defining feature: 700+ micro-springs at head/foot for relief, with firm foam in center for hips.',
            factor: 'Good Durability. Springs generally outlast foam. This layer reduces the load on the foam layers above, potentially extending their life.'
        },
        {
            title: 'Support Core (8.5")',
            subtitle: '1000+ Pocket Springs + Transition',
            desc: 'A robust base of individually wrapped coils (mostly recycled steel) plus transition and base foams.',
            factor: 'Excellent. This strong foundation provides great edge support and prevents deep skeletal sagging.'
        }
    ];

    // 2. Timeline Data
    const timelineData = {
        labels: ['Day 1', 'Year 1', 'Year 3', 'Year 5'],
        // Radar Data: Normalized 0-10 scale
        radar: {
            sagging: [10, 9.8, 9, 8],      // Improved vs Original due to springs
            firmness: [10, 9.5, 8.5, 7],   // Softening still happens in top 2"
            edge: [10, 10, 9.5, 8.5],     // Much better edge support
            cooling: [10, 10, 10, 9.5]    // Airflow through coils keeps it cool
        },
        // Probability Data
        saggingProb: [0, 2, 12, 25],      // Lower probability of deep sag than foam

        // Insights
        insights: [
            { // Year 0
                title: "Brand New Status",
                firmness: "5.5/10 (Medium)",
                risk: "Cover Inspection Needed",
                note: "Check for any loose threads on the organic cotton/wool cover."
            },
            { // Year 1
                title: "1 Year Status",
                firmness: "Stable",
                risk: "Very Low",
                note: "Micro-coils break in slightly, increasing contouring. Good feedback."
            },
            { // Year 3
                title: "3 Year Status",
                firmness: "Softens by ~1.0 point",
                risk: "Low-Moderate",
                note: "Top foam layers soften. Heavier sleepers might feel the transition to micro-coils more."
            },
            { // Year 5
                title: "5 Year Status",
                firmness: "Softens by 1.5-2.0 points",
                risk: "Moderate",
                note: "Still supportive for most. Surface impressions likely but deep sag helps by springs."
            }
        ]
    };

    // 3. Weight Compatibility Data
    const weightProfiles = [
        { // <= 150
            label: "≤ 150 lb",
            verdict: "Luxurious",
            color: "text-emerald-600",
            bg: "bg-emerald-100",
            icon: CheckCircle,
            desc: "Micro-coils provide excellent floating sensation. Very low wear and tear.",
            life: "8+ Years"
        },
        { // 151-200
            label: "151–200 lb",
            verdict: "Ideal",
            color: "text-blue-600",
            bg: "bg-blue-100",
            icon: Info,
            desc: "Target demographic. Zoned support works effectively to keep spine aligned.",
            life: "6-8 Years"
        },
        { // 201-250
            label: "201–250 lb",
            verdict: "Good",
            color: "text-emerald-600",
            bg: "bg-emerald-100",
            icon: CheckCircle,
            desc: "Hybrid springs handle this weight much better than all-foam Leesa. Zoning helps hips.",
            life: "5-7 Years"
        },
        { // > 250
            label: "> 250 lb",
            verdict: "Fair/Caution",
            color: "text-amber-600",
            bg: "bg-amber-100",
            icon: AlertTriangle,
            desc: "Better than Original, but micro-coils may fully compress, leading to a firmer, less conforming feel.",
            life: "4-6 Years"
        }
    ];

    // --- CHART CONFIGS ---

    // Radar Chart Data preparation
    const getRadarData = (index) => {
        const rData = timelineData.radar;
        const newData = [
            rData.sagging[index],
            rData.firmness[index],
            rData.edge[index],
            rData.cooling[index]
        ];
        const avg = newData.reduce((a, b) => a + b) / 4;
        const isWarning = avg < 7;

        return {
            labels: ['Sagging Resistance', 'Firmness Retention', 'Edge Support', 'Cooling'],
            datasets: [{
                label: 'Performance Score (10=New)',
                data: newData,
                backgroundColor: isWarning ? 'rgba(234, 88, 12, 0.2)' : 'rgba(204, 164, 59, 0.2)',
                borderColor: isWarning ? '#ea580c' : '#cca43b',
                pointBackgroundColor: isWarning ? '#ea580c' : '#cca43b',
                borderWidth: 2,
            }]
        };
    };

    const radarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { color: '#e5e5e5' },
                grid: { color: '#e5e5e5' },
                pointLabels: {
                    font: { size: 12, weight: 'bold' },
                    color: '#242f40'
                },
                suggestedMin: 0,
                suggestedMax: 10,
                ticks: { display: false }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) => `Score: ${context.raw}/10`
                }
            }
        }
    };

    // Bar Chart Data (Sagging)
    const getBarData = (index) => {
        const prob = timelineData.saggingProb[index];
        let bgColor = '#10b981'; // Green
        if (prob > 25) bgColor = '#ef4444'; // Red
        else if (prob > 10) bgColor = '#f59e0b'; // Orange

        return {
            labels: ['Risk of Failure/Sag'],
            datasets: [{
                label: 'Probability (%)',
                data: [prob],
                backgroundColor: bgColor,
                borderRadius: 4,
                barThickness: 50
            }]
        };
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            x: {
                min: 0,
                max: 100,
                grid: { display: true },
                title: { display: true, text: 'Probability Percentage (%)' }
            },
            y: { display: false }
        },
        plugins: {
            legend: { display: false }
        }
    };

    // Warranty Chart Data (Static)
    const warrantyData = {
        labels: ['Typical Sag (Year 3)', 'Warranty Threshold'],
        datasets: [{
            label: 'Inches',
            data: [0.65, 1.5],
            backgroundColor: ['#363636', '#dc2626'],
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
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    footer: (items) => {
                        if (items[0].dataIndex === 0) return "Visible but rarely qualifes.";
                        return "Required for successful claim.";
                    }
                }
            }
        }
    };

    // Helper to format year display
    const getYearDisplay = (index) => {
        const labels = ["Brand New", "1 Year Later", "3 Years Later", "5 Years Later"];
        return labels[index];
    };

    return (
        <div className="antialiased bg-white text-jet-black font-sans min-h-screen">
            <Header />

            <main>
                {/* Hero Section */}
                <header className="bg-white border-b border-alabaster-grey">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="bg-golden-bronze/10 text-golden-bronze text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Living Review</span>
                        </div>
                        <h1 className="text-4xl font-extrabold text-jet-black sm:text-5xl sm:tracking-tight lg:text-6xl font-serif">
                            Leesa Legend Hybrid
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-graphite">
                            A deep, evidence-based analysis of the dual-coil hybrid durability over 5 years.
                        </p>
                        <div className="mt-8 flex justify-center gap-4 flex-wrap">
                            <div className="bg-white px-4 py-2 rounded-lg border border-alabaster-grey shadow-sm">
                                <span className="block text-xs font-semibold text-golden-bronze uppercase">Construction</span>
                                <span className="block text-lg font-bold text-jet-black">Hybrid (12")</span>
                            </div>
                            <div className="bg-white px-4 py-2 rounded-lg border border-alabaster-grey shadow-sm">
                                <span className="block text-xs font-semibold text-golden-bronze uppercase">Primary Risk</span>
                                <span className="block text-lg font-bold text-jet-black">Micro-coil Noise/Feel</span>
                            </div>
                            <div className="bg-white px-4 py-2 rounded-lg border border-alabaster-grey shadow-sm">
                                <span className="block text-xs font-semibold text-golden-bronze uppercase">Ideal Life</span>
                                <span className="block text-lg font-bold text-jet-black">~6-8 Years</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* SECTION 1: ANATOMY */}
                <section id="anatomy" className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-jet-black">Hybrid Anatomy</h2>
                            <p className="mt-4 text-lg text-graphite max-w-3xl mx-auto">
                                The Legend uses a complex "dual-hybrid" design containing two distinct layers of springs. Click layers to inspect how this impacts longevity.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Layer Visualization */}
                            <div className="flex flex-col space-y-2 select-none">
                                {layers.map((layer, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-300 cursor-pointer border-2 rounded-lg p-6 relative h-24 flex items-center justify-center
                      ${activeLayer === index
                                                ? 'bg-golden-bronze/5 border-golden-bronze border-l-8'
                                                : 'bg-white border-alabaster-grey hover:scale-102 hover:shadow-md'
                                            }
                      ${index === 2 ? 'h-40' : ''}
                    `}
                                        onClick={() => setActiveLayer(index)}
                                    >
                                        <div className="text-center">
                                            <span className="block font-bold text-jet-black">{layer.title}</span>
                                            <span className="text-sm text-graphite">{layer.subtitle}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Layer Details Panel */}
                            <div className="bg-white rounded-xl shadow-lg p-8 border border-alabaster-grey h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-jet-black mb-2">
                                    {layers[activeLayer].title}
                                </h3>
                                <div className="w-16 h-1 bg-golden-bronze mb-4"></div>
                                <p className="text-graphite mb-6">
                                    {layers[activeLayer].desc}
                                </p>

                                <div className="bg-gray-50 rounded-lg p-4 border border-alabaster-grey">
                                    <h4 className="font-semibold text-sm text-graphite uppercase tracking-wider mb-2">Longevity Factor</h4>
                                    <p className="text-jet-black font-medium">
                                        {layers[activeLayer].factor}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: PERFORMANCE DRIFT */}
                <section id="performance" className="py-16 bg-white border-t border-alabaster-grey">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-extrabold text-jet-black">Performance Drift Analysis</h2>
                            <p className="mt-4 text-lg text-graphite max-w-3xl mx-auto">
                                Travel through time (0 to 5 years). The presence of two coil layers changes how the mattress ages compared to all-foam beds.
                            </p>
                        </div>

                        {/* Timeline Slider */}
                        <div className="max-w-3xl mx-auto mb-12">
                            <div className="flex justify-between text-sm font-bold text-gray-400 mb-2">
                                <span>New (Year 0)</span>
                                <span>Year 1</span>
                                <span>Year 3</span>
                                <span>Year 5</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="3"
                                value={timeMachineYear}
                                onChange={(e) => setTimeMachineYear(parseInt(e.target.value))}
                                className="w-full h-3 bg-alabaster-grey rounded-lg appearance-none cursor-pointer accent-golden-bronze"
                                style={{ accentColor: '#cca43b' }}
                            />
                            <div className="text-center mt-4">
                                <span className="inline-block bg-golden-bronze text-white px-4 py-1 rounded-full text-sm font-bold">
                                    View: {getYearDisplay(timeMachineYear)}
                                </span>
                            </div>
                        </div>

                        {/* Charts Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Chart 1: Performance Radar */}
                            <div className="bg-white rounded-xl p-6 border border-alabaster-grey shadow-sm">
                                <h3 className="text-lg font-bold text-jet-black mb-2 text-center">Performance Profile Shape</h3>
                                <p className="text-sm text-graphite text-center mb-6">Visualizing the stability of key attributes.</p>
                                <div className="relative w-full max-w-[600px] h-[350px] mx-auto">
                                    <Radar data={getRadarData(timeMachineYear)} options={radarOptions} />
                                </div>
                            </div>

                            {/* Chart 2: Sagging Probability */}
                            <div className="bg-white rounded-xl p-6 border border-alabaster-grey shadow-sm">
                                <h3 className="text-lg font-bold text-jet-black mb-2 text-center">Risk of Material Failure</h3>
                                <p className="text-sm text-graphite text-center mb-6">Includes deep sagging OR cover defects.</p>
                                <div className="relative w-full max-w-[600px] h-[350px] mx-auto">
                                    <Bar data={getBarData(timeMachineYear)} options={barOptions} />
                                </div>
                            </div>
                        </div>

                        {/* Textual Insights */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-golden-bronze shadow-sm">
                                <h4 className="text-xs font-bold text-gray-400 uppercase">Firmness Feel</h4>
                                <p className="text-lg font-bold text-jet-black">{timelineData.insights[timeMachineYear].firmness}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                <h4 className="text-xs font-bold text-gray-400 uppercase">Risk Level</h4>
                                <p className="text-lg font-bold text-jet-black">{timelineData.insights[timeMachineYear].risk}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-graphite shadow-sm">
                                <h4 className="text-xs font-bold text-gray-400 uppercase">Analyst Note</h4>
                                <p className="text-sm text-graphite mt-1">{timelineData.insights[timeMachineYear].note}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: SLEEPER COMPATIBILITY */}
                <section id="compatibility" className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-jet-black">Sleeper Compatibility Calculator</h2>
                            <p className="mt-4 text-lg text-graphite">
                                The dual-coil system offers robust support, but the micro-coils are sensitive to point loads. Check your weight compatibility.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-alabaster-grey">
                            <div className="p-8 border-b border-alabaster-grey">
                                <h3 className="text-sm font-bold text-graphite uppercase tracking-wide mb-4 text-center">Select Sleeper Weight</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {weightProfiles.map((profile, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSleeperWeight(idx)}
                                            className={`py-3 px-4 border-2 rounded-lg font-bold focus:outline-none transition-colors
                        ${sleeperWeight === idx
                                                    ? 'border-golden-bronze bg-golden-bronze/10 text-jet-black'
                                                    : 'border-alabaster-grey text-graphite hover:border-golden-bronze hover:text-jet-black'
                                                }`}
                                        >
                                            {profile.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Recommendation Panel */}
                            <div className="p-8 bg-white text-center">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${weightProfiles[sleeperWeight].bg} ${weightProfiles[sleeperWeight].color} mb-4 text-2xl font-bold`}>
                                    {React.createElement(weightProfiles[sleeperWeight].icon, { size: 32 })}
                                </div>
                                <h3 className="text-2xl font-bold text-jet-black mb-2">{weightProfiles[sleeperWeight].verdict}</h3>
                                <p className="text-graphite mb-6">
                                    {weightProfiles[sleeperWeight].desc}
                                </p>
                                <div className="inline-block bg-white px-6 py-3 rounded-full border border-alabaster-grey shadow-sm text-sm font-medium text-graphite">
                                    Est. Lifespan: <span className={`${weightProfiles[sleeperWeight].color} font-bold`}>{weightProfiles[sleeperWeight].life}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: WARRANTY GAP */}
                <section id="warranty" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-extrabold text-jet-black mb-6">Warranty & Cover Issues</h2>
                                <div className="prose prose-slate text-graphite">
                                    <p className="mb-4">
                                        Like the Original, the Legend requires a <strong>1.5-inch indentation</strong> for a claim.
                                    </p>
                                    <p className="mb-4">
                                        <strong>Unique to Legend:</strong> There have been owner reports of the cover fabric developing "runs" or pulls. While cosmetic, Leesa has historically been helpful with replacements if this happens early on.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mb-6">
                                        <li><strong>Cover Runs:</strong> Check your cover immediately upon unboxing.</li>
                                        <li><strong>Micro-coil Feel:</strong> Rarely, sleepers can "feel" the transition to micro-coils.</li>
                                    </ul>
                                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                                        <p className="text-sm text-amber-800">
                                            <strong>Consumer Org Tip:</strong> Rotating this mattress every 3-6 months is critical to prevent the micro-coils from setting into a specific body impression.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-alabaster-grey shadow-sm">
                                <h3 className="text-lg font-bold text-jet-black mb-4 text-center">Warranty Threshold Visualization</h3>
                                <div className="relative w-full max-w-[600px] h-[350px] mx-auto">
                                    <Bar data={warrantyData} options={warrantyOptions} />
                                </div>
                                <p className="text-xs text-center text-gray-400 mt-4">1.5" is a deep valley; minor surface defects are excluded.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: CONCLUSION */}
                <footer className="bg-jet-black text-white py-12 border-t border-golden-bronze">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Summary Verdict</h2>
                        <p className="max-w-3xl mx-auto text-gray-300 mb-8">
                            The Leesa Legend is a sophisticated hybrid that solves the hot-sleeping issues of all-foam beds. The inclusion of micro-coils adds durability to the comfort layer, likely extending useful life by 1-2 years over the Original. Keep an eye on the cover fabric quality.
                        </p>
                        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                            <p>&copy; 2024 LivingReview Analysis. Generated based on provided source report.</p>
                            <p className="mt-2 md:mt-0">Source Material: Independent Labs, Owner Reports, Spec Sheets</p>
                        </div>
                    </div>
                </footer>

            </main>
        </div>
    );
};

export default LeesaLegendMattressReview;
