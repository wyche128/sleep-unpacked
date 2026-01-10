'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
} from 'chart.js';
import { AlertTriangle, CheckCircle, Info, Thermometer, Weight, User, Shield } from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
);

const WinkBedGravityLuxLongevityReview = () => {
    // Simulator State
    const [weight, setWeight] = useState('avg');
    const [position, setPosition] = useState('side');
    const [climate, setClimate] = useState('temp');
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });
    const [metrics, setMetrics] = useState({ sag: "0.4", soft: "-10", cool: "Stable" });

    // Tabs State
    const [activeTab, setActiveTab] = useState('specs');

    // Chart.js Options
    const lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', labels: { usePointStyle: true, font: { family: 'sans-serif' } } },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(28, 25, 23, 0.9)', // Jet Black
                titleColor: '#F5F5F4', // Alabaster
                bodyColor: '#F5F5F4',
                borderColor: '#CCA43B', // Golden Bronze
                borderWidth: 1
            }
        },
        scales: {
            y: {
                min: 50,
                max: 100,
                title: { display: true, text: 'Performance Retention (%)' },
                grid: { color: '#E5E5E5' }
            },
            x: {
                grid: { display: false }
            }
        }
    };

    // Constants for Simulation
    const degradationFactors = {
        weight: { light: 0.8, avg: 1.0, heavy: 1.3, plus: 1.6 },
        position: { back: 1.0, side: 1.1, stomach: 0.9, combo: 1.05 },
        climate: { temp: 1.0, hot: 1.15 }
    };

    const baseData = {
        support: [100, 98, 94, 90],
        comfort: [100, 92, 88, 85],
        edge: [100, 95, 85, 75]
    };

    // Recalculate Simulation
    useEffect(() => {
        const wFactor = degradationFactors.weight[weight];
        const pFactor = degradationFactors.position[position];
        const cFactor = degradationFactors.climate[climate];
        const stressMultiplier = wFactor * pFactor * cFactor;

        // Helper to calc curve
        const calcCurve = (baseArr, multiplier, softener = 1.0) => {
            return baseArr.map((val, idx) => {
                if (idx === 0) return 100;
                const stress = (100 - val) * multiplier * softener;
                return Math.max(50, 100 - stress);
            });
        };

        const newSupport = calcCurve(baseData.support, stressMultiplier);
        const newComfort = calcCurve(baseData.comfort, stressMultiplier, 1.1);
        const newEdge = calcCurve(baseData.edge, stressMultiplier);

        // Update Chart Data
        setChartData({
            labels: ['New', 'Year 1', 'Year 3', 'Year 5'],
            datasets: [
                {
                    label: 'Support Integrity',
                    data: newSupport,
                    borderColor: '#CCA43B', // Golden Bronze
                    backgroundColor: 'rgba(204, 164, 59, 0.1)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Comfort Consistency',
                    data: newComfort,
                    borderColor: '#4B5563', // Graphite
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.3,
                    fill: false
                },
                {
                    label: 'Edge Stability',
                    data: newEdge,
                    borderColor: '#E5E7EB', // Slate-200 (Alabaster-ish darker)
                    borderWidth: 2,
                    tension: 0.1,
                    fill: false
                }
            ]
        });

        // Update Text Stats
        const y5SupportLoss = 100 - newSupport[3];
        const sagInches = (y5SupportLoss * 0.04).toFixed(1);

        const y5ComfortLoss = 100 - newComfort[3];

        setMetrics({
            sag: sagInches,
            soft: Math.round(y5ComfortLoss),
            cool: climate === 'hot' ? 'High Risk' : 'Stable'
        });

    }, [weight, position, climate]);

    // Risk Gauge Data Helper
    const createGaugeData = (riskValue, color) => ({
        labels: ['Risk', 'Safe'],
        datasets: [{
            data: [riskValue, 100 - riskValue],
            backgroundColor: [color, '#F5F5F4'], // Alabaster Grey Light
            borderWidth: 0,
            cutout: '75%'
        }]
    });


    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            {/* Header / Objective */}
            <header className="bg-white border-b border-alabaster-grey">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-golden-bronze/10 text-golden-bronze text-xs font-bold uppercase tracking-wide mb-4">
                        Analysis Project
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-jet-black mb-4">
                        WinkBed GravityLux: Deep Longevity Research
                    </h1>
                    <p className="text-lg text-graphite max-w-3xl mx-auto leading-relaxed">
                        Evidence-based analysis of the <strong className="text-jet-black">GravityLux Memory Foam Mattress</strong>.
                        Quantifying changes in sagging, firmness, and cooling efficiency based on density metrics and owner data.
                    </p>
                    <div className="mt-6 flex justify-center gap-4 text-sm text-graphite/70">
                        <span className="px-3 py-1 bg-alabaster-grey/50 rounded-full border border-alabaster-grey">Status: Baseline Established</span>
                        <span className="px-3 py-1 bg-golden-bronze/10 text-golden-bronze rounded-full border border-golden-bronze/20">Updated: Q3 2024</span>
                    </div>
                </div>
            </header>

            <main className="flex-grow">

                {/* SECTION 1: Longevity Simulator */}
                <section id="simulator" className="py-12 bg-alabaster-grey/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold text-jet-black mb-3">Interactive Longevity Simulator</h2>
                            <p className="text-graphite">
                                Project estimated degradation curves over 5 years based on your specific profile.
                                Data derived from our predictive modeling of AirCell™ foam density.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Controls Panel */}
                            <div className="lg:col-span-4 space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-alabaster-grey">
                                <h3 className="font-bold text-lg text-jet-black border-b border-alabaster-grey pb-4">Configure Profile</h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-jet-black mb-2 flex items-center gap-2">
                                            <Weight size={16} className="text-golden-bronze" /> Sleeper Weight
                                        </label>
                                        <select
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            className="w-full bg-alabaster-grey/20 border-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-golden-bronze focus:outline-none text-jet-black font-medium"
                                        >
                                            <option value="light">≤ 150 lbs (Light)</option>
                                            <option value="avg">151 – 200 lbs (Average)</option>
                                            <option value="heavy">201 – 250 lbs (Heavy)</option>
                                            <option value="plus">&gt; 250 lbs (Plus)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-jet-black mb-2 flex items-center gap-2">
                                            <User size={16} className="text-golden-bronze" /> Sleep Position
                                        </label>
                                        <select
                                            value={position}
                                            onChange={(e) => setPosition(e.target.value)}
                                            className="w-full bg-alabaster-grey/20 border-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-golden-bronze focus:outline-none text-jet-black font-medium"
                                        >
                                            <option value="back">Back Sleeper</option>
                                            <option value="side">Side Sleeper</option>
                                            <option value="stomach">Stomach Sleeper</option>
                                            <option value="combo">Combination</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-jet-black mb-2 flex items-center gap-2">
                                            <Thermometer size={16} className="text-golden-bronze" /> Climate
                                        </label>
                                        <select
                                            value={climate}
                                            onChange={(e) => setClimate(e.target.value)}
                                            className="w-full bg-alabaster-grey/20 border-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-golden-bronze focus:outline-none text-jet-black font-medium"
                                        >
                                            <option value="temp">Temperate / AC Controlled</option>
                                            <option value="hot">Hot / Humid</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Visualization Panel */}
                            <div className="lg:col-span-8 bg-white p-6 rounded-2xl shadow-sm border border-alabaster-grey flex flex-col justify-between">
                                <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
                                    <h3 className="font-bold text-jet-black">Predicted Retention (5-Year)</h3>
                                </div>

                                <div className="h-[300px] w-full">
                                    {chartData.labels.length > 0 && <Line data={chartData} options={lineOptions} />}
                                </div>

                                <div className="mt-6 grid grid-cols-3 gap-4 text-center border-t border-alabaster-grey pt-6">
                                    <div>
                                        <p className="text-xs text-graphite uppercase tracking-wide font-bold">Proj. Sag @ Year 5</p>
                                        <p className={`text-2xl font-black ${parseFloat(metrics.sag) > 1.0 ? 'text-red-600' : 'text-jet-black'}`}>
                                            ~{metrics.sag}"
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-graphite uppercase tracking-wide font-bold">Firmness Drop</p>
                                        <p className="text-2xl font-black text-jet-black">{metrics.soft}%</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-graphite uppercase tracking-wide font-bold">Cooling Perf.</p>
                                        <p className={`text-2xl font-black ${metrics.cool === 'High Risk' ? 'text-orange-600' : 'text-jet-black'}`}>
                                            {metrics.cool}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: Risk Probability */}
                <section id="risks" className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold text-jet-black mb-3">Risk Probability Analysis</h2>
                            <p className="text-graphite">
                                Estimated probability of issues within the first 3 years based on density specs and failure reporting.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white rounded-2xl p-8 border border-alabaster-grey shadow-sm text-center hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-jet-black mb-6 flex items-center justify-center min-h-[40px]">Sagging &gt; 1.0 Inch</h4>
                                <div className="h-32 mb-4 relative mx-auto w-32">
                                    <Doughnut data={createGaugeData(8, '#EF4444')} options={{ cutout: '75%', plugins: { tooltip: { enabled: false } } }} />
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <span className="text-lg font-bold text-[#EF4444]">8% Risk</span>
                                </div>
                                <p className="text-xs text-graphite leading-relaxed">
                                    Low risk due to high-density AirCell™ foam. Primarily seen in foundations with improper slat spacing.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-2xl p-8 border border-alabaster-grey shadow-sm text-center hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-jet-black mb-6 flex items-center justify-center min-h-[40px]">Firmness Drop &ge; 1 Step</h4>
                                <div className="h-32 mb-4 relative mx-auto w-32">
                                    <Doughnut data={createGaugeData(35, '#F59E0B')} options={{ cutout: '75%', plugins: { tooltip: { enabled: false } } }} />
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <span className="text-lg font-bold text-[#F59E0B]">35% Risk</span>
                                </div>
                                <p className="text-xs text-graphite leading-relaxed">
                                    Moderate likelihood. Comfort layers naturally break in, resulting in a slightly plusher feel over year 1.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-2xl p-8 border border-alabaster-grey shadow-sm text-center hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-jet-black mb-6 flex items-center justify-center min-h-[40px]">Edge Support Loss &ge; 15%</h4>
                                <div className="h-32 mb-4 relative mx-auto w-32">
                                    <Doughnut data={createGaugeData(22, '#64748B')} options={{ cutout: '75%', plugins: { tooltip: { enabled: false } } }} />
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <span className="text-lg font-bold text-[#64748B]">22% Risk</span>
                                </div>
                                <p className="text-xs text-graphite leading-relaxed">
                                    Dependant on usage. Sitting on the edge regularly accelerates foam fatigue in the perimeter rails.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white rounded-2xl p-8 border border-alabaster-grey shadow-sm text-center hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-jet-black mb-6 flex items-center justify-center min-h-[40px]">Cooling Efficiency Decline</h4>
                                <div className="h-32 mb-4 relative mx-auto w-32">
                                    <Doughnut data={createGaugeData(5, '#0EA5E9')} options={{ cutout: '75%', plugins: { tooltip: { enabled: false } } }} />
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <span className="text-lg font-bold text-[#0EA5E9]">5% Risk</span>
                                </div>
                                <p className="text-xs text-graphite leading-relaxed">
                                    Very low risk. GelFlex polymer does not compress like fiber, maintaining airflow channels over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: Deep Dive Metrics (Tabs) */}
                <section id="product" className="py-12 bg-alabaster-grey/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold text-jet-black mb-3">Product Definition & Specs</h2>
                            <p className="text-graphite">
                                Tracking material specifications across generations to identify potential durability drift.
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center border-b border-alabaster-grey mb-8">
                            {['specs', 'generations', 'warranty'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 text-sm font-bold capitalize transition-colors border-b-2 ${activeTab === tab
                                        ? 'text-golden-bronze border-golden-bronze'
                                        : 'text-graphite border-transparent hover:text-jet-black'
                                        }`}
                                >
                                    {tab === 'specs' ? 'Material Specs' : tab}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="bg-white rounded-2xl shadow-sm border border-alabaster-grey overflow-hidden min-h-[400px]">

                            {/* Specs Tab */}
                            {activeTab === 'specs' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 animate-in fade-in duration-300">
                                    <div className="p-8 border-b md:border-b-0 md:border-r border-alabaster-grey">
                                        <h3 className="text-lg font-bold text-jet-black mb-6">Core Construction</h3>
                                        <ul className="space-y-4">
                                            {[
                                                { label: 'Comfort Layer', val: 'AirCell™ Memory Foam' },
                                                { label: 'Density Estimate', val: '~4.0 - 5.0 lbs/ft³ (High)' },
                                                { label: 'Support Core', val: 'Zoned Progression Foam' },
                                                { label: 'Cover Material', val: 'Tencel™ Lyocell Blend' }
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex justify-between items-center border-b border-alabaster-grey pb-3 last:border-0">
                                                    <span className="text-graphite text-sm">{item.label}</span>
                                                    <span className="font-bold text-jet-black text-sm">{item.val}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-8 bg-alabaster-grey/10">
                                        <h3 className="text-lg font-bold text-jet-black mb-6">Failure Mode Watchlist</h3>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="bg-golden-bronze/10 p-2 rounded-full h-fit text-golden-bronze">
                                                    <AlertTriangle size={16} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-jet-black">Cover Pilling</p>
                                                    <p className="text-xs text-graphite mt-1">Tencel covers are soft but prone to abrasion. Recommended use of protector.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="bg-golden-bronze/10 p-2 rounded-full h-fit text-golden-bronze">
                                                    <AlertTriangle size={16} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-jet-black">Zipper Integrity</p>
                                                    <p className="text-xs text-graphite mt-1">Reported issues in early Gen 1 models; reinforced in Gen 2.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Generations Tab */}
                            {activeTab === 'generations' && (
                                <div className="p-8 animate-in fade-in duration-300">
                                    <div className="relative border-l-2 border-alabaster-grey ml-4 space-y-12">
                                        <div className="relative pl-8">
                                            <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-golden-bronze border-4 border-white shadow-sm"></span>
                                            <h4 className="text-lg font-bold text-jet-black">2021 - Present (Gen 2)</h4>
                                            <p className="text-sm text-graphite mt-2 mb-3">Current iteration. Enhanced edge support foam rails and updated cover aesthetic.</p>
                                            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded">Most Data Available</span>
                                        </div>
                                        <div className="relative pl-8 opacity-60">
                                            <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-graphite border-4 border-white shadow-sm"></span>
                                            <h4 className="text-lg font-bold text-jet-black">2019 - 2020 (Gen 1)</h4>
                                            <p className="text-sm text-graphite mt-2 mb-3">Initial launch. Slightly softer foam formulation.</p>
                                            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded">Legacy Data</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Warranty Tab */}
                            {activeTab === 'warranty' && (
                                <div className="p-8 animate-in fade-in duration-300">
                                    <h3 className="text-lg font-bold text-jet-black mb-6">Warranty Analysis</h3>
                                    <div className="overflow-x-auto border border-alabaster-grey rounded-lg">
                                        <table className="min-w-full text-left text-sm">
                                            <thead className="bg-alabaster-grey/20">
                                                <tr>
                                                    <th className="px-6 py-4 font-bold text-graphite">Feature</th>
                                                    <th className="px-6 py-4 font-bold text-graphite">Official Policy</th>
                                                    <th className="px-6 py-4 font-bold text-graphite">Real-World Note</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-alabaster-grey">
                                                <tr>
                                                    <td className="px-6 py-4 font-medium text-jet-black">Sagging Threshold</td>
                                                    <td className="px-6 py-4 text-graphite"> &gt; 1.5 inches</td>
                                                    <td className="px-6 py-4 text-graphite">Strictly enforced. 1.0" sags often denied.</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 font-medium text-jet-black">Foundation Req.</td>
                                                    <td className="px-6 py-4 text-graphite">Rigid, slats &lt; 3" apart</td>
                                                    <td className="px-6 py-4 text-graphite">Common denial reason. Photos required.</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 font-medium text-jet-black">Transportation</td>
                                                    <td className="px-6 py-4 text-graphite">Customer pays shipping</td>
                                                    <td className="px-6 py-4 text-graphite">Brand often covers if clear defect in Year 1.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </section>

                {/* SECTION 4: Methodology */}
                <section className="py-12 bg-white border-t border-alabaster-grey">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-jet-black mb-4">Research Scope & Evidence</h2>
                                <p className="text-graphite mb-6">
                                    This Living Review relies on a mixed-methods approach to filter marketing noise from durability facts.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center p-3 bg-alabaster-grey/30 rounded-lg border border-alabaster-grey">
                                        <span className="bg-golden-bronze text-white text-xs font-bold px-2 py-1 rounded mr-3">Tier 1</span>
                                        <span className="text-sm text-jet-black font-bold">Verified Owner Reports (Longitudinal)</span>
                                    </div>
                                    <div className="flex items-center p-3 bg-white rounded-lg border border-alabaster-grey">
                                        <span className="bg-graphite text-white text-xs font-bold px-2 py-1 rounded mr-3">Tier 2</span>
                                        <span className="text-sm text-jet-black font-bold">Independent Lab Teardowns</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-alabaster-grey/10 p-8 rounded-2xl border border-alabaster-grey">
                                <h3 className="font-bold text-jet-black mb-4 flex items-center gap-2">
                                    <Info size={18} className="text-golden-bronze" /> Key Metrics
                                </h3>
                                <ul className="space-y-3 text-sm text-graphite">
                                    <li><strong>Sagging:</strong> Vertical depth of unweighted impression.</li>
                                    <li><strong>Firmness Drift:</strong> Change in ILD or perceived resistance.</li>
                                    <li><strong>Cooling Decay:</strong> Surface temp return-to-baseline time.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </div>
    );
};

export default WinkBedGravityLuxLongevityReview;
