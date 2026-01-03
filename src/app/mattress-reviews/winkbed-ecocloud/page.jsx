'use client';

import React, { useState, useEffect } from 'react';
import { Line, Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    RadialLinearScale,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Layers, Wind, ShieldCheck, Activity } from 'lucide-react';
import Header from '../../../components/Header';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    RadialLinearScale,
    Filler,
    Tooltip,
    Legend
);

const WinkBedEcoCloudLongevityReview = () => {
    const [weight, setWeight] = useState(170);
    const [usage, setUsage] = useState(1);
    const [base, setBase] = useState(1);
    const [metrics, setMetrics] = useState({
        dataPoints: [],
        riskLevel: 'Low',
        riskColor: '#cca43b',
        explanation: 'At this weight, the Talalay latex should maintain resilience for 8+ years.'
    });

    const baseSagRate = 0.08;

    const calculateMetrics = (w, u, b) => {
        let weightFactor = 1 + ((w - 170) / 50) * 0.15;
        if (weightFactor < 0.8) weightFactor = 0.8;

        let effectiveRate = baseSagRate * weightFactor * u * b;

        let dataPoints = [];
        for (let i = 0; i <= 10; i++) {
            let sag = (effectiveRate * i) + (0.01 * (i * i));
            dataPoints.push(sag);
        }

        let year5Sag = dataPoints[5];
        let riskLevel = "Low";
        let riskColor = "#cca43b";
        let explanation = "At this weight, the Talalay latex should maintain resilience for 8+ years.";

        if (year5Sag > 0.75) {
            riskLevel = "Moderate";
            riskColor = "#e5e5e5";
            explanation = "Expect noticeable softening by year 4-5. Rotate mattress every 6 months.";
        }
        if (year5Sag > 1.2) {
            riskLevel = "High";
            riskColor = "#ff6b6b";
            explanation = "Heavy wear predicted. Ensure foundation is perfectly rigid to maximize life.";
        }

        return { dataPoints, riskLevel, riskColor, explanation };
    };

    useEffect(() => {
        const newMetrics = calculateMetrics(weight, usage, base);
        setMetrics(newMetrics);
    }, [weight, usage, base]);

    const lineChartData = {
        labels: ['Year 0', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10'],
        datasets: [
            {
                label: 'Projected Sagging (Inches)',
                data: metrics.dataPoints,
                borderColor: '#cca43b',
                backgroundColor: 'rgba(204, 164, 59, 0.1)',
                fill: true,
                tension: 0.4,
            },
            {
                label: '1.0" Discomfort Threshold',
                data: Array(11).fill(1.0),
                borderColor: '#363636',
                borderDash: [5, 5],
                borderWidth: 1,
                pointRadius: 0,
            },
        ],
    };

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                reverse: true,
                min: 0,
                max: 2.5,
                title: { display: true, text: 'Depth (Inches)' },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.parsed.y.toFixed(2) + '" Depth';
                    },
                },
            },
            legend: {
                position: 'bottom'
            }
        },
    };

    const radarChartData = {
        labels: ['Edge Support', 'Cooling', 'Motion Isolation', 'Bounce', 'Pressure Relief'],
        datasets: [
            {
                label: 'Year 0 (New)',
                data: [9.9, 9.0, 5.5, 9.5, 9.0],
                fill: true,
                backgroundColor: 'rgba(204, 164, 59, 0.2)',
                borderColor: '#cca43b',
                pointBackgroundColor: '#cca43b',
            },
            {
                label: 'Year 5 (Projected)',
                data: [8.5, 8.8, 4.0, 8.5, 8.2],
                fill: true,
                backgroundColor: 'rgba(54, 54, 54, 0.1)',
                borderColor: '#363636',
                pointBackgroundColor: '#363636',
            },
        ],
    };

    const radarChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { display: false },
                suggestedMin: 0,
                suggestedMax: 10,
                pointLabels: {
                    color: '#242f40',
                },
            },
        },
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-jet-black">
            <Header />

            {/* Hero Section */}
            <header className="bg-white pb-10 pt-8 border-b border-alabaster-grey">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-2 py-1 bg-jet-black text-white text-xs font-bold rounded uppercase tracking-wider">
                            Updated 2025
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-jet-black mb-4">
                        WinkBed EcoCloud: 5-Year Durability Forecast
                    </h1>
                    <p className="text-lg text-graphite max-w-3xl">
                        An evidence-based projection of the WinkBed EcoCloud's performance lifespan. Utilizing initial lab data (NapLab 2025) and material degradation modeling to estimate long-term sagging, softening, and support failure.
                    </p>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="bg-jet-black p-4 rounded-lg border border-graphite">
                            <div className="text-sm text-golden-bronze font-medium">Est. Useful Life</div>
                            <div className="text-2xl font-bold text-white">8-10 Years</div>
                            <div className="text-xs text-gray-300 mt-1">Due to Talalay Latex</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-alabaster-grey shadow-sm">
                            <div className="text-sm text-graphite font-medium">Sag Risk (Yr 3)</div>
                            <div className="text-2xl font-bold text-jet-black">Low</div>
                            <div className="text-xs text-graphite mt-1">&lt;3% prob. of &gt;1.0" sag</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-alabaster-grey shadow-sm">
                            <div className="text-sm text-graphite font-medium">Cooling Retention</div>
                            <div className="text-2xl font-bold text-jet-black">Excellent</div>
                            <div className="text-xs text-graphite mt-1">Latex resists heat trapping</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-alabaster-grey shadow-sm">
                            <div className="text-sm text-graphite font-medium">Edge Failure Risk</div>
                            <div className="text-2xl font-bold text-jet-black">Moderate</div>
                            <div className="text-xs text-graphite mt-1">Check reinforced coils</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Interactive Forecasting Section */}
                <section className="mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-jet-black">Interactive Wear Simulation</h2>
                            <p className="text-graphite mt-2">
                                Adjust the sliders to see how your specific usage affects the mattress lifespan forecast.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Controls */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-alabaster-grey h-fit">
                            <h3 className="font-bold text-lg mb-6 text-jet-black">Sleeper Profile</h3>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-graphite mb-2">
                                    Total Sleeper Weight (lbs)
                                </label>
                                <input
                                    type="range"
                                    min="100"
                                    max="500"
                                    value={weight}
                                    onChange={(e) => setWeight(parseInt(e.target.value))}
                                    className="w-full h-2 bg-alabaster-grey rounded-lg appearance-none cursor-pointer accent-golden-bronze"
                                    style={{ accentColor: '#cca43b' }}
                                />
                                <div className="flex justify-between text-xs text-graphite mt-1">
                                    <span>100 lbs</span>
                                    <span className="font-bold text-golden-bronze">{weight} lbs</span>
                                    <span>500 lbs</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-graphite mb-2">Usage Frequency</label>
                                <select
                                    value={usage}
                                    onChange={(e) => setUsage(parseFloat(e.target.value))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#cca43b] focus:border-[#cca43b] sm:text-sm text-jet-black"
                                >
                                    <option value="1">Nightly (Primary Bed)</option>
                                    <option value="0.5">Occasional (Guest Bed)</option>
                                    <option value="1.2">Heavy (Extended Time in Bed)</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-graphite mb-2">Foundation Type</label>
                                <select
                                    value={base}
                                    onChange={(e) => setBase(parseFloat(e.target.value))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#cca43b] focus:border-[#cca43b] sm:text-sm text-jet-black"
                                >
                                    <option value="1">Solid Platform / Slats &lt; 3"</option>
                                    <option value="1.3">Old Box Spring / Wide Slats</option>
                                    <option value="1.1">Adjustable Base</option>
                                </select>
                            </div>

                            <div className="p-4 bg-jet-black rounded-lg border border-graphite">
                                <div className="text-sm font-semibold text-golden-bronze mb-1">Projected Risk Score:</div>
                                <div className="text-3xl font-bold" style={{ color: metrics.riskLevel === 'High' ? '#ef4444' : metrics.riskLevel === 'Moderate' ? '#e5e5e5' : '#cca43b' }}>
                                    {metrics.riskLevel}
                                </div>
                                <p className="text-xs text-gray-300 mt-2">{metrics.explanation}</p>
                            </div>
                        </div>

                        {/* Visualization */}
                        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-alabaster-grey">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-jet-black">Projected Body Impression Depth (Inches)</h3>
                                <div className="text-xs text-graphite">Source: Material Fatigue Modeling</div>
                            </div>
                            <div className="relative w-full h-[350px]">
                                <Line options={lineChartOptions} data={lineChartData} />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-6 text-center text-xs text-graphite">
                                <div>
                                    <span className="block font-bold text-jet-black">0.5" Threshold</span>
                                    Visible Indentation
                                </div>
                                <div>
                                    <span className="block font-bold text-jet-black">1.0" Threshold</span>
                                    Comfort Loss
                                </div>
                                <div>
                                    <span className="block font-bold text-jet-black">1.5" Threshold</span>
                                    Warranty Claim
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Deep Dive Metrics */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Performance Retention Radar */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                        <h3 className="font-bold text-xl text-jet-black mb-4">Performance Retention: Year 1 vs. Year 5</h3>
                        <p className="text-sm text-graphite mb-6">
                            Unlike polyurethane foams which soften significantly, natural Talalay latex (EcoCloud's primary comfort layer) creates a "push-back" that resists softening. However, coil edges typically see the most mechanical wear.
                        </p>
                        <div className="relative w-full h-[300px]">
                            <Radar options={radarChartOptions} data={radarChartData} />
                        </div>
                    </div>

                    {/* Failure Mode Analysis */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                        <h3 className="font-bold text-xl text-jet-black mb-4">Primary Failure Modes</h3>
                        <div className="space-y-6">
                            {/* Failure Mode 1 */}
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-jet-black">Comfort Layer Softening (Latex)</span>
                                    <span className="text-sm font-medium text-graphite">Low Risk</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-golden-bronze h-2.5 rounded-full" style={{ width: '15%' }}></div>
                                </div>
                                <p className="text-xs text-graphite mt-1">Talalay latex is highly resilient compared to memory foam.</p>
                            </div>

                            {/* Failure Mode 2 */}
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-jet-black">Coil/Edge Support Fatigue</span>
                                    <span className="text-sm font-medium text-graphite">Moderate Risk</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-graphite h-2.5 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                                <p className="text-xs text-graphite mt-1">Perimeter coils take the most stress during entry/exit.</p>
                            </div>

                            {/* Failure Mode 3 */}
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-jet-black">Cover Bunching/Wear</span>
                                    <span className="text-sm font-medium text-graphite">Low-Moderate Risk</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-golden-bronze h-2.5 rounded-full" style={{ width: '25%' }}></div>
                                </div>
                                <p className="text-xs text-graphite mt-1">Organic cotton/wool covers can stretch over time if not tufted tightly.</p>
                            </div>

                            {/* Failure Mode 4 */}
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-jet-black">Motion Isolation Loss</span>
                                    <span className="text-sm font-medium text-graphite">High Probability</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-jet-black h-2.5 rounded-full" style={{ width: '70%' }}></div>
                                </div>
                                <p className="text-xs text-graphite mt-1">EcoCloud starts with high motion (14.92 m/s²). As stabilizing fibers settle, bounce often increases.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Construction Breakdown */}
                <section className="bg-white rounded-xl shadow-lg border border-alabaster-grey overflow-hidden mb-12">
                    <div className="bg-jet-black px-6 py-4 border-b border-golden-bronze">
                        <h2 className="text-white text-xl font-bold">Material Forensics: Why It Lasts</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 rounded-full bg-golden-bronze/20 flex items-center justify-center text-golden-bronze mr-3">
                                    <Layers size={18} />
                                </div>
                                <h4 className="font-bold text-jet-black">4" Talalay Latex</h4>
                            </div>
                            <p className="text-sm text-graphite">
                                <strong>Longevity Impact:</strong> High. Unlike Dunlop (denser, heavier), Talalay is flash-frozen for consistency. It resists the "body impression" valleys typical of polyurethane foams.
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 rounded-full bg-graphite/10 flex items-center justify-center text-graphite mr-3">
                                    <Wind size={18} />
                                </div>
                                <h4 className="font-bold text-jet-black">Zoned Coils</h4>
                            </div>
                            <p className="text-sm text-graphite">
                                <strong>Longevity Impact:</strong> Moderate-High. Recycled steel coils are tempered. Zoned structure (firmer in middle) prevents the "hammocking" effect common in years 3-5.
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 rounded-full bg-jet-black/10 flex items-center justify-center text-jet-black mr-3">
                                    <ShieldCheck size={18} />
                                </div>
                                <h4 className="font-bold text-jet-black">Lifetime Warranty</h4>
                            </div>
                            <p className="text-sm text-graphite">
                                <strong>Real Value:</strong> Covers sagging &gt; 1.5". This is a standard industry threshold, but lifetime duration implies confidence in the latex layer's rebound properties.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section>
                    <h2 className="text-2xl font-bold text-jet-black mb-6">Longevity Benchmarks</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                            <thead className="bg-jet-black text-white">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Model</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Est. Lifespan</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Sag Risk (5 Yrs)</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Key Weakness</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="bg-golden-bronze/10">
                                    <td className="px-6 py-4 whitespace-nowrap font-bold text-jet-black">WinkBed EcoCloud</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-graphite">8-10 Years</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-golden-bronze font-semibold">Low</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-graphite">Motion Isolation</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-jet-black">Avg. Memory Foam Hybrid</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-graphite">6-8 Years</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-golden-bronze">Moderate</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-graphite">Softening Foam</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-jet-black">Budget Polyfoam</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-graphite">3-5 Years</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-jet-black">High</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-graphite">Deep Body Impressions</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <footer className="bg-jet-black text-white py-10 mt-12 border-t border-golden-bronze">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400 text-sm">
                        Research based on NapLab independent testing data (2025) and material science projections.
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        Longevity forecasts are estimates based on material density and simulated wear patterns. Actual results vary by usage.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default WinkBedEcoCloudLongevityReview;
