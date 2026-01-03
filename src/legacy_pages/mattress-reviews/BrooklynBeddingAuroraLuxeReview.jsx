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
} from 'chart.js';
import { Radar, Line } from 'react-chartjs-2';
import {
    Clock,
    History,
    Snowflake,
    Layers,
    Minimize2,
    Activity,
    Shield,
    UserCheck,
    TriangleAlert,
    Info
} from 'lucide-react';

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

const BrooklynBeddingAuroraLuxeReview = () => {
    // --- State ---
    const [timeIndex, setTimeIndex] = useState(0); // 0, 1, 2, 3 corresponding to timeSteps
    const [sleeperWeight, setSleeperWeight] = useState('medium');
    const [sleeperPos, setSleeperPos] = useState('side');
    const [activeLayerIndex, setActiveLayerIndex] = useState(null);

    const timeSteps = [0, 1, 3, 5];
    const currentYear = timeSteps[timeIndex];

    // --- Data & Constants ---
    const performanceData = {
        0: [9.6, 9.1, 9.9, 9.3, 9.5], // New: Cooling, Motion, Response, Edge, Comfort
        1: [9.5, 9.0, 9.8, 9.2, 9.3], // 1 Year
        3: [9.2, 8.8, 9.5, 8.8, 8.5], // 3 Years
        5: [8.8, 8.5, 9.0, 8.0, 7.8]  // 5 Years
    };

    const timelineDescriptions = {
        0: "Baseline: Brand new condition. The GlacioTex cover is at peak efficiency. Foam layers are highly responsive with instant recovery.",
        1: "1 Year Update: Break-in period complete. Minor softening of the top CopperFlex foam (approx 5-10%). Cooling remains highly effective. No visible sagging.",
        3: "3 Year Update: Noticeable comfort drift. The foam layers have compressed slightly, offering a softer feel (approx 0.5-1 point softer). Edge support may show minor fatigue on sitting areas.",
        5: "5 Year Update: End of prime life for top comfort layers. Heavier sleepers (>230lbs) may notice >0.75\" impressions. Cooling cover efficiency reduced due to surface wear/sheets."
    };

    const layerDetails = [
        { title: "GlacioTex™ Cover", risk: "Low", note: "Phase change material is integrated into fibers. Durable, but can become less effective if covered by thick protectors.", icon: Snowflake },
        { title: "1.5\" CopperFlex™ Foam", risk: "Medium", note: "Top comfort layer. Subject to most compression. Will soften by ~15-20% over 5 years. Copper infusion helps hygiene.", icon: Layers },
        { title: "2.0\" Supreme Response", risk: "Low-Medium", note: "Transition foam. High resilience helps prevent deep sagging, but acts as the buffer for the coils.", icon: Minimize2 },
        { title: "8\" Ascension® Coils", risk: "Very Low", note: "The structural core. Steel coils rarely fail within 10 years. Main source of motion isolation integrity.", icon: Activity }
    ];

    // --- Chart Data ---
    const radarData = {
        labels: ['Cooling', 'Motion Isolation', 'Response Time', 'Edge Support', 'Overall Comfort'],
        datasets: [{
            label: 'Performance Score',
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
                angleLines: { color: '#e5e5e5' }, // Alabaster Grey
                grid: { color: '#e5e5e5' },
                suggestedMin: 5,
                suggestedMax: 10,
                ticks: { display: false }
            }
        },
        plugins: {
            legend: { display: false }
        }
    };

    const saggingChartData = {
        labels: ['New', '1 Year', '3 Years', '5 Years', '7 Years'],
        datasets: [
            {
                label: 'Light (<150lbs)',
                data: [0, 1, 3, 8, 15],
                borderColor: '#22d3ee', // Cyan 400 (Keeping distinct colors for chart lines, or map to brand palette?) 
                // Let's use brand palette + variations for clarity
                borderColor: '#9ca3af', // Gray/Silver for Light
                tension: 0.4
            },
            {
                label: 'Moderate (150-250lbs)',
                data: [0, 2, 8, 18, 28],
                borderColor: '#cca43b', // Golden Bronze for Moderate (Target demographic)
                tension: 0.4
            },
            {
                label: 'Heavy (>250lbs)',
                data: [0, 5, 15, 35, 55],
                borderColor: '#242f40', // Jet Black for Heavy
                tension: 0.4
            }
        ]
    };

    const saggingOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 60,
                title: { display: true, text: 'Probability of >1.0" Impression (%)' }
            }
        },
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false,
            },
            legend: {
                position: 'bottom'
            }
        }
    };

    // --- Dynamic Text ---
    const getRecommendationText = () => {
        let text = "";
        const w = sleeperWeight;
        const p = sleeperPos;

        if (w === 'heavy') {
            text = "High Wear Risk: Heavy sleepers exert significant pressure on the top CopperFlex layers. Expect comfort layer softening within 2 years. Rotate mattress every 3 months strictly to prevent permanent sagging. Back sleeping is recommended for spine alignment as foam softens.";
        } else if (w === 'medium') {
            text = "Optimal Performance: The Aurora Luxe is well-tuned for this weight range. Expect consistent support for 5-7 years. Side sleepers will benefit from the comfort layer contouring without hitting the coils prematurely.";
        } else {
            text = "High Longevity: Light sleepers cause minimal material fatigue. The mattress may feel slightly firmer than advertised initially. Durability is expected to exceed 8+ years with minimal body impressions.";
        }

        if (p === 'side' && w === 'heavy') {
            return (
                <>
                    <strong>{text.split(':')[0]}:</strong> {text.split(':')[1]}
                    <br /><br />
                    <strong>Note for Side Sleepers:</strong> Monitor hip pressure points as the transition layer breaks down over year 3-4.
                </>
            );
        }

        return <><strong>{text.split(':')[0]}:</strong> {text.split(':')[1]}</>;
    };

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
                            <h1 className="text-3xl md:text-4xl font-bold text-jet-black">Deep Longevity: Aurora Luxe</h1>
                            <p className="text-graphite mt-1">Longitudinal durability projection and performance analysis for the Brooklyn Bedding Aurora Luxe.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-alabaster-grey min-w-[100px]">
                                <div className="text-xs text-graphite uppercase font-semibold">Score</div>
                                <div className="text-2xl font-bold text-golden-bronze">9.6</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-alabaster-grey min-w-[100px]">
                                <div className="text-xs text-graphite uppercase font-semibold">Cooling</div>
                                <div className="text-2xl font-bold text-golden-bronze">9.6</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Control Center: Time Machine */}
                <section className="bg-white rounded-2xl shadow-sm border border-alabaster-grey p-6 mb-8">
                    <h2 className="text-lg font-semibold text-jet-black mb-4 flex items-center gap-2">
                        <History className="text-golden-bronze" size={20} /> Ownership Timeline Simulation
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
                        {/* Custom slider styles might be needed for full consistency, but accent-color works for standard inputs */}
                        <div className="flex justify-between text-xs font-semibold text-graphite mt-2 uppercase tracking-wider">
                            <span className="w-1/4 text-left">New (0 Yrs)</span>
                            <span className="w-1/4 text-center">1 Year</span>
                            <span className="w-1/4 text-center">3 Years</span>
                            <span className="w-1/4 text-right">5 Years</span>
                        </div>
                    </div>
                    <p className="mt-4 text-center text-jet-black font-medium bg-alabaster-grey/30 p-3 rounded-lg border border-alabaster-grey">
                        {timelineDescriptions[currentYear]}
                    </p>
                </section>

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: Charts & Metrics (8/12) */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Performance Radar */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-alabaster-grey">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-jet-black">Performance Decay Profile</h3>
                                <div className="text-sm text-graphite">
                                    Current Status: <span className="font-bold text-golden-bronze">{currentYear === 0 ? "New" : `${currentYear} Years`}</span>
                                </div>
                            </div>
                            <div className="h-[300px] md:h-[400px] w-full mx-auto">
                                <Radar data={radarData} options={radarOptions} />
                            </div>
                            <div className="mt-4 text-sm text-graphite text-center italic">
                                *Projections based on hybrid mattress foam density wear rates and coil fatigue data.
                            </div>
                        </div>

                        {/* Sagging Probability */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-alabaster-grey">
                            <h3 className="text-lg font-bold text-jet-black mb-2">Sagging Risk Analysis</h3>
                            <p className="text-sm text-graphite mb-6">Probability of &gt;1.0" body impressions based on sleeper weight.</p>

                            <div className="h-[300px] w-full">
                                <Line data={saggingChartData} options={saggingOptions} />
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Analysis & Construction (4/12) */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Interactive Sleeper Analysis */}
                        <div className="bg-jet-black text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-lg font-bold mb-4 border-b border-graphite pb-2">Verified Owner Simulation</h3>

                            <div className="mb-4">
                                <label className="text-xs uppercase text-alabaster-grey font-bold block mb-2">Sleeper Weight</label>
                                <select
                                    value={sleeperWeight}
                                    onChange={(e) => setSleeperWeight(e.target.value)}
                                    className="w-full bg-graphite border-none rounded-lg p-2 text-sm focus:ring-2 focus:ring-golden-bronze text-white"
                                >
                                    <option value="light">Light (&lt; 150 lbs)</option>
                                    <option value="medium">Moderate (150-250 lbs)</option>
                                    <option value="heavy">Heavy (&gt; 250 lbs)</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label className="text-xs uppercase text-alabaster-grey font-bold block mb-2">Sleep Position</label>
                                <select
                                    value={sleeperPos}
                                    onChange={(e) => setSleeperPos(e.target.value)}
                                    className="w-full bg-graphite border-none rounded-lg p-2 text-sm focus:ring-2 focus:ring-golden-bronze text-white"
                                >
                                    <option value="side">Side Sleeper</option>
                                    <option value="back">Back Sleeper</option>
                                    <option value="stomach">Stomach Sleeper</option>
                                </select>
                            </div>

                            <div className="bg-graphite/50 rounded-xl p-4 border border-graphite">
                                <h4 className="text-golden-bronze text-xs font-bold uppercase mb-2">Projected Outcome</h4>
                                <p className="text-sm leading-relaxed text-alabaster-grey">
                                    {getRecommendationText()}
                                </p>
                            </div>
                        </div>

                        {/* Construction Breakdown (Interactive) */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-alabaster-grey">
                            <h3 className="text-lg font-bold text-jet-black mb-4">Construction & Wear Points</h3>
                            <p className="text-xs text-graphite mb-4">Click layer to analyze failure risk.</p>

                            <div className="space-y-2">
                                {layerDetails.map((layer, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveLayerIndex(activeLayerIndex === idx ? null : idx)}
                                        className={`cursor-pointer p-3 rounded-lg transition-all border-l-4 ${activeLayerIndex === idx
                                            ? 'bg-golden-bronze/10 border-golden-bronze'
                                            : 'bg-white border-alabaster-grey hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-sm text-jet-black">{layer.title}</span>
                                            <layer.icon className={activeLayerIndex === idx ? 'text-golden-bronze' : 'text-graphite'} size={16} />
                                        </div>

                                        {/* Expandable Detail */}
                                        {activeLayerIndex === idx && (
                                            <div className="mt-3 pt-3 border-t border-gray-200 text-sm text-graphite animate-in fade-in slide-in-from-top-2">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="font-bold text-jet-black">{layer.title}</span>
                                                    <span className="text-xs px-2 py-1 rounded bg-alabaster-grey text-jet-black">Risk: {layer.risk}</span>
                                                </div>
                                                <p>{layer.note}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Warranty Section */}
                <section className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-alabaster-grey">
                    <h3 className="text-xl font-bold text-jet-black mb-4">Warranty vs. Reality Check</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-alabaster-grey/20 rounded-xl border border-alabaster-grey">
                            <div className="flex items-center gap-2 mb-2">
                                <Shield className="text-golden-bronze" size={20} />
                                <h4 className="font-bold text-jet-black">Official Terms</h4>
                            </div>
                            <ul className="text-sm text-graphite space-y-2">
                                <li>• 10-Year Limited Warranty</li>
                                <li>• 1.0" Indentation Coverage</li>
                                <li>• Full replacement for defects</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-alabaster-grey/20 rounded-xl border border-alabaster-grey">
                            <div className="flex items-center gap-2 mb-2">
                                <UserCheck className="text-green-600" size={20} />
                                <h4 className="font-bold text-jet-black">Owner Report Rates</h4>
                            </div>
                            <ul className="text-sm text-graphite space-y-2">
                                <li>• Sagging claims: Low (Year 1-3)</li>
                                <li>• Cooling loss claims: Very Low</li>
                                <li>• Customer Service: 8.5/10</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-alabaster-grey/20 rounded-xl border border-alabaster-grey">
                            <div className="flex items-center gap-2 mb-2">
                                <TriangleAlert className="text-amber-500" size={20} />
                                <h4 className="font-bold text-jet-black">Potential Denials</h4>
                            </div>
                            <ul className="text-sm text-graphite space-y-2">
                                <li>• Improper Foundation Support</li>
                                <li>• Stains (Voids warranty)</li>
                                <li>• Comfort preference changes</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default BrooklynBeddingAuroraLuxeReview;
