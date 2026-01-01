import React, { useState, useEffect } from 'react';
import {
    Line
} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import {
    Activity,
    AlertTriangle,
    Thermometer,
    Move,
    Scale,
    Bed,
    FileText,
    Box,
    Info
} from 'lucide-react';
import Header from '../../components/Header';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const DreamCloudLuxeHybridLongevityReview = () => {
    // State for View switching
    const [activeView, setActiveView] = useState('metrics');

    // State for Metrics Chart
    const [currentMetric, setCurrentMetric] = useState('sagging');

    // State for Risk Analysis
    const [riskParams, setRiskParams] = useState({
        weight: 'avg',
        pos: 'all',
        climate: 'temperate'
    });

    // Data Configuration
    const reportData = {
        metrics: {
            sagging: {
                label: "Sagging Depth (Inches)",
                title: "Sagging & Body Impressions",
                desc: "Key Question: Probability of >0.5\" vs >1.0\" impressions. Goal: Remain below 1.0\" threshold (Red Line) for 5 years.",
                yLabel: "Depth (Inches)",
                thresholds: [0.5, 1.0],
                ideal: [0.1, 0.2, 0.3, 0.4],
                limit: [1.0, 1.0, 1.0, 1.0]
            },
            firmness: {
                label: "Firmness Change (1-10 Scale)",
                title: "Firmness Softening",
                desc: "Key Question: Probability of perceived firmness softening by ≥1 step. Goal: Minimize drift from baseline (Blue Line).",
                yLabel: "Firmness Drift (Steps)",
                thresholds: [1.0],
                ideal: [0, 0.5, 0.8, 1.2],
                limit: [1.0, 1.0, 1.0, 1.0]
            },
            cooling: {
                label: "Heat Retention (Normalized)",
                title: "Cooling Efficiency Decline",
                desc: "Key Question: Notable cooling efficiency decline at 1, 3, 5 years. Goal: Maintain surface temp decay time (Lower is better).",
                yLabel: "Heat Retention Increase (%)",
                thresholds: [15],
                ideal: [0, 2, 5, 8],
                limit: [20, 20, 20, 20]
            },
            edge: {
                label: "Edge Compression (%)",
                title: "Edge Support Loss",
                desc: "Key Question: Edge support loss of ≥15%. Goal: Maintain structural integrity under load.",
                yLabel: "Stability Loss (%)",
                thresholds: [15],
                ideal: [0, 5, 8, 12],
                limit: [15, 15, 15, 15]
            }
        },
        riskAnalysis: {
            light: "Focus: Surface-level comfort layer degradation. Less likely to trigger deep grid fatigue.",
            avg: "Standard wear profile. Baseline for Sagging/Impression metrics.",
            heavy: (<span><strong>High Risk:</strong> Grid fatigue and base foam softening. <br /><strong>Key Question:</strong> Acceleration of sagging &gt; 1.0&quot; within 3 years?</span>),
            extra_heavy: (<span><strong>Critical Watch:</strong> Structural failure of coils or grid tearing. <br /><strong>Priority:</strong> Check warranty denial rates for this bracket.</span>),
            side: "Focus: Hip and Shoulder pressure point indentation depth.",
            back: "Focus: Lumbar support integrity (hammocking effect).",
            combo: "Focus: Motion isolation changes over time.",
            all: "General durability assessment.",
            temperate: "Baseline material aging.",
            humid: (<span><strong>High Risk:</strong> Foam degradation due to moisture/hydrolysis. Check for mold reports or accelerated softening.</span>)
        }
    };

    // Chart Options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: reportData.metrics[currentMetric].yLabel
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': ' + context.parsed.y;
                    }
                }
            },
            legend: {
                position: 'bottom'
            }
        }
    };

    // Prepare Chart Data
    const getChartData = () => {
        const m = reportData.metrics[currentMetric];
        const years = ['Baseline', '1 Year', '3 Years', '5 Years'];

        const datasets = [
            {
                label: 'Hypothetical Healthy Wear',
                data: m.ideal,
                borderColor: '#cca43b', // Bronze
                backgroundColor: 'rgba(204, 164, 59, 0.1)',
                tension: 0.4,
                fill: true
            }
        ];

        // Failure Threshold
        if (m.thresholds.length > 0) {
            const failureVal = m.thresholds[m.thresholds.length - 1];
            datasets.push({
                label: `Failure Threshold (${failureVal})`,
                data: Array(4).fill(failureVal),
                borderColor: '#363636', // Graphite
                borderDash: [5, 5],
                borderWidth: 2,
                pointRadius: 0,
                fill: false
            });
        }

        // Warning Threshold
        if (m.thresholds.length > 1) {
            const warningVal = m.thresholds[0];
            datasets.push({
                label: `Warning Threshold (${warningVal})`,
                data: Array(4).fill(warningVal),
                borderColor: '#e5e5e5', // Alabaster (but likely needs contrast so sticking with Bronze/Graphite theme, maybe light Graphite)
                // Actually for warning, let's use a ligher bronze or just bronze dashed
                borderColor: '#cca43b', // Amber 500 -> Bronze
                borderDash: [2, 2],
                borderWidth: 2,
                pointRadius: 0,
                fill: false
            });
        }

        return { labels: years, datasets };
    };

    return (
        <div className="min-h-screen bg-[#e5e5e5] font-sans text-[#242f40]">
            <Header />

            {/* Custom Header Context */}
            <div className="bg-white border-b border-[#cca43b]/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-2 py-1 bg-[#242f40] text-white text-xs font-bold rounded uppercase tracking-wider">
                            Updated 2025
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-[#242f40] tracking-tight">
                                DreamCloud Premier Rest: Longevity Research Dashboard
                            </h1>
                            <p className="text-sm text-[#363636] font-medium">SUBJECT: DREAMCLOUD LUXE HYBRID • v1.0 BASELINE</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-[#363636]">
                            <span className="px-3 py-1 bg-[#242f40]/5 text-[#242f40] rounded-full border border-[#242f40]/10">
                                Status: Protocol Definition
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Intro Section */}
                <div className="mb-8">
                    <p className="text-[#363636] max-w-3xl leading-relaxed">
                        This dashboard establishes the <strong>Living Review Baseline</strong> for the <strong>DreamCloud Luxe Hybrid</strong>.
                        It outlines the rigorous evidence-based framework designed to quantify durability at 1, 3, and 5-year intervals.
                        Select a module below to explore the testing criteria, risk factors, and research protocols.
                    </p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Navigation / Context */}
                    <div className="lg:col-span-3 space-y-4">
                        <nav className="flex flex-col space-y-1">
                            <button
                                onClick={() => setActiveView('metrics')}
                                className={`group flex items-center px-3 py-3 text-sm font-medium rounded-md w-full text-left transition-colors ${activeView === 'metrics' ? 'bg-[#242f40] text-white shadow-md' : 'text-[#363636] hover:bg-white hover:shadow-sm'}`}
                            >
                                <span className={`w-2 h-2 rounded-full mr-3 ${activeView === 'metrics' ? 'bg-[#cca43b]' : 'bg-[#e5e5e5] group-hover:bg-[#cca43b]'}`}></span>
                                Metrics & Thresholds
                            </button>
                            <button
                                onClick={() => setActiveView('risks')}
                                className={`group flex items-center px-3 py-3 text-sm font-medium rounded-md w-full text-left transition-colors ${activeView === 'risks' ? 'bg-[#242f40] text-white shadow-md' : 'text-[#363636] hover:bg-white hover:shadow-sm'}`}
                            >
                                <span className={`w-2 h-2 rounded-full mr-3 ${activeView === 'risks' ? 'bg-[#cca43b]' : 'bg-[#e5e5e5] group-hover:bg-[#cca43b]'}`}></span>
                                Risk Analysis
                            </button>
                            <button
                                onClick={() => setActiveView('protocol')}
                                className={`group flex items-center px-3 py-3 text-sm font-medium rounded-md w-full text-left transition-colors ${activeView === 'protocol' ? 'bg-[#242f40] text-white shadow-md' : 'text-[#363636] hover:bg-white hover:shadow-sm'}`}
                            >
                                <span className={`w-2 h-2 rounded-full mr-3 ${activeView === 'protocol' ? 'bg-[#cca43b]' : 'bg-[#e5e5e5] group-hover:bg-[#cca43b]'}`}></span>
                                Protocol & Sources
                            </button>
                            <button
                                onClick={() => setActiveView('product')}
                                className={`group flex items-center px-3 py-3 text-sm font-medium rounded-md w-full text-left transition-colors ${activeView === 'product' ? 'bg-[#242f40] text-white shadow-md' : 'text-[#363636] hover:bg-white hover:shadow-sm'}`}
                            >
                                <span className={`w-2 h-2 rounded-full mr-3 ${activeView === 'product' ? 'bg-[#cca43b]' : 'bg-[#e5e5e5] group-hover:bg-[#cca43b]'}`}></span>
                                Product Definition
                            </button>
                        </nav>

                        {/* Quick Stats Box */}
                        <div className="bg-white p-4 rounded-lg border border-[#e5e5e5] shadow-sm mt-6">
                            <h3 className="text-xs font-bold text-[#cca43b] uppercase tracking-wider mb-3">Key Horizons</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-[#363636]">Short Term</span>
                                    <span className="text-xs font-mono bg-[#e5e5e5] px-2 py-1 rounded">1 Year</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-[#363636]">Mid Term</span>
                                    <span className="text-xs font-mono bg-[#e5e5e5] px-2 py-1 rounded">3 Years</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-[#363636]">Long Term</span>
                                    <span className="text-xs font-mono bg-[#e5e5e5] px-2 py-1 rounded">5 Years</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:col-span-9">

                        {/* VIEW 1: Metrics & Thresholds */}
                        {activeView === 'metrics' && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="bg-white rounded-xl border border-[#e5e5e5] p-6 shadow-sm">
                                    <h2 className="text-lg font-bold text-[#242f40] mb-2">Quantifiable Durability Criteria</h2>
                                    <p className="text-sm text-[#363636] mb-6">
                                        This module visualizes the pass/fail thresholds for the study.
                                        Click a metric below to see the projected measurement goals over the 5-year study period.
                                    </p>

                                    {/* Metric Toggles */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {['sagging', 'firmness', 'cooling', 'edge'].map(key => (
                                            <button
                                                key={key}
                                                onClick={() => setCurrentMetric(key)}
                                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm border ${currentMetric === key ? 'bg-[#242f40] text-white border-[#242f40]' : 'bg-white text-[#363636] border-[#e5e5e5] hover:border-[#cca43b]'}`}
                                            >
                                                {key === 'sagging' && 'Sagging & Impressions'}
                                                {key === 'firmness' && 'Firmness Drift'}
                                                {key === 'cooling' && 'Cooling Efficiency'}
                                                {key === 'edge' && 'Edge Support'}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Chart Container */}
                                    <div className="bg-[#white] rounded-lg border border-[#e5e5e5] p-4 h-[350px]">
                                        <Line options={chartOptions} data={getChartData()} />
                                    </div>

                                    {/* Data Explanation */}
                                    <div className="mt-6 p-4 bg-[#242f40] border border-[#242f40] rounded-lg">
                                        <h3 class="text-sm font-bold text-[#cca43b] mb-1">{reportData.metrics[currentMetric].title}</h3>
                                        <p className="text-sm text-white">
                                            {reportData.metrics[currentMetric].desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* VIEW 2: Risk Analysis */}
                        {activeView === 'risks' && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="bg-white rounded-xl border border-[#e5e5e5] p-6 shadow-sm">
                                    <h2 className="text-lg font-bold text-[#242f40] mb-2">Multivariate Risk Factor Analysis</h2>
                                    <p className="text-sm text-[#363636] mb-6">
                                        Durability outcomes vary significantly by user profile. Use the controls below to identify the specific research questions targeted for different cohorts.
                                    </p>

                                    {/* Filters */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                        <div>
                                            <label className="block text-xs font-bold text-[#363636] uppercase mb-2">Sleeper Weight</label>
                                            <select
                                                value={riskParams.weight}
                                                onChange={(e) => setRiskParams({ ...riskParams, weight: e.target.value })}
                                                className="w-full rounded-md border-[#e5e5e5] border bg-white py-2 px-3 text-sm focus:border-[#cca43b] focus:ring-[#cca43b] text-[#242f40]"
                                            >
                                                <option value="light">≤150 lb</option>
                                                <option value="avg">151–200 lb</option>
                                                <option value="heavy">201–250 lb</option>
                                                <option value="extra_heavy">&gt;250 lb</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Sleep Position</label>
                                            <select
                                                value={riskParams.pos}
                                                onChange={(e) => setRiskParams({ ...riskParams, pos: e.target.value })}
                                                className="w-full rounded-md border-slate-300 border bg-slate-50 py-2 px-3 text-sm focus:border-sky-500 focus:ring-sky-500 text-slate-700"
                                            >
                                                <option value="all">All Positions</option>
                                                <option value="side">Side Sleeper</option>
                                                <option value="back">Back Sleeper</option>
                                                <option value="combo">Combination</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Climate</label>
                                            <select
                                                value={riskParams.climate}
                                                onChange={(e) => setRiskParams({ ...riskParams, climate: e.target.value })}
                                                className="w-full rounded-md border-slate-300 border bg-slate-50 py-2 px-3 text-sm focus:border-sky-500 focus:ring-sky-500 text-slate-700"
                                            >
                                                <option value="temperate">Temperate</option>
                                                <option value="humid">Hot/Humid</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Dynamic Output */}
                                    <div className="border-t border-[#e5e5e5] pt-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3 p-3 bg-white rounded border border-[#e5e5e5]">
                                                <Scale className="text-[#cca43b] mt-1" size={20} />
                                                <div>
                                                    <h4 className="text-sm font-bold text-[#242f40]">Weight Impact</h4>
                                                    <p className="text-sm text-[#363636]">{reportData.riskAnalysis[riskParams.weight]}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 bg-white rounded border border-[#e5e5e5]">
                                                <Bed className="text-[#cca43b] mt-1" size={20} />
                                                <div>
                                                    <h4 className="text-sm font-bold text-[#242f40]">Position Impact</h4>
                                                    <p className="text-sm text-[#363636]">{reportData.riskAnalysis[riskParams.pos]}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 bg-white rounded border border-[#e5e5e5]">
                                                <Thermometer className="text-[#cca43b] mt-1" size={20} />
                                                <div>
                                                    <h4 className="text-sm font-bold text-[#242f40]">Climate Impact</h4>
                                                    <p className="text-sm text-[#363636]">{reportData.riskAnalysis[riskParams.climate]}</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 p-4 bg-[#242f40] text-white text-sm font-semibold rounded text-center">
                                                Active Research Question: "How do outcomes vary by these combined factors?"
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* VIEW 3: Protocol & Sources */}
                        {activeView === 'protocol' && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="bg-white rounded-xl border border-[#e5e5e5] p-6 shadow-sm">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h2 className="text-lg font-bold text-[#242f40] mb-1">Methodology & Evidence Hierarchy</h2>
                                            <p className="text-sm text-[#363636]">Prioritization logic for data collection.</p>
                                        </div>
                                        <span className="text-xs bg-[#e5e5e5] text-[#363636] py-1 px-2 rounded font-mono">Mixed-Methods</span>
                                    </div>


                                    <div className="space-y-4">
                                        {/* Level 1 */}
                                        <div className="bg-white p-4 rounded-r-lg border-l-4 border-[#cca43b] shadow-sm">
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="text-[#242f40] font-bold text-sm">Tier 1: Verified Primary Data (Highest Weight)</h3>
                                                <span className="text-xs font-bold text-[#cca43b] bg-white px-2 py-0.5 rounded border border-[#cca43b]">Gold Standard</span>
                                            </div>
                                            <ul className="list-disc list-inside text-sm text-[#363636] space-y-1">
                                                <li>Retailer reviews with "Verified Purchase" badges.</li>
                                                <li>Longitudinal YouTube updates with verified timestamps.</li>
                                                <li>Direct warranty claim documentation with photos.</li>
                                                <li>Posts on r/Mattress with detailed ownership duration proofs.</li>
                                            </ul>
                                        </div>

                                        {/* Level 2 */}
                                        <div className="bg-[#e5e5e5] p-4 rounded-r-lg border-l-4 border-[#363636]">
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="text-[#242f40] font-bold text-sm">Tier 2: Secondary & Lab Data</h3>
                                                <span className="text-xs font-bold text-[#363636] bg-white px-2 py-0.5 rounded border border-[#363636]">Analytical</span>
                                            </div>
                                            <ul className="list-disc list-inside text-sm text-[#363636] space-y-1">
                                                <li>Independent lab tests (ILD, Teardowns).</li>
                                                <li>Material analysis (Grid thickness, foam densities).</li>
                                                <li>Consumer Organization reports.</li>
                                                <li>Wayback Machine archives of product specs.</li>
                                            </ul>
                                        </div>

                                        {/* Level 3 */}
                                        <div className="bg-white p-4 rounded-r-lg border-l-4 border-[#242f40] opacity-75">
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="text-[#242f40] font-bold text-sm">Tier 3: Manufacturer Data</h3>
                                                <span className="text-xs font-bold text-[#242f40] bg-white px-2 py-0.5 rounded border border-[#242f40]">Reference Only</span>
                                            </div>
                                            <ul className="list-disc list-inside text-sm text-[#363636] space-y-1">
                                                <li>Published Warranty Terms & Exclusions.</li>
                                                <li>Official material specifications.</li>
                                                <li>Known revision notes.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* VIEW 4: Product Definition */}
                        {activeView === 'product' && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="bg-white rounded-xl border border-[#e5e5e5] p-6 shadow-sm">
                                    <h2 className="text-lg font-bold text-[#242f40] mb-4">Product Generation Map</h2>
                                    <p className="text-sm text-[#363636] mb-6">
                                        Tracking durability requires separating product generations. Revisions in cover material,
                                        grid formulation, or base foam density are treated as distinct subgroups.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Definitions */}
                                        <div className="bg-white p-5 rounded-lg border border-[#e5e5e5] shadow-sm">
                                            <h3 className="font-bold text-[#242f40] mb-3 text-sm">Target Model</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm border-b border-[#e5e5e5] pb-2">
                                                    <span className="text-[#363636]">Product Name</span>
                                                    <span className="font-medium text-[#242f40]">DreamCloud Luxe Hybrid</span>
                                                </div>
                                                <div className="flex justify-between text-sm border-b border-[#e5e5e5] pb-2">
                                                    <span className="text-[#363636]">AKA</span>
                                                    <span className="font-medium text-[#242f40]">DreamCloud Premier (Old Gen)</span>
                                                </div>
                                                <div className="flex justify-between text-sm pt-1">
                                                    <span className="text-[#363636]">Scope</span>
                                                    <span className="font-medium text-[#242f40]">All Sizes (Twin - Cal King)</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Components to Watch */}
                                        <div className="bg-white p-5 rounded-lg border border-[#e5e5e5] shadow-sm">
                                            <h3 className="font-bold text-[#242f40] mb-3 text-sm">Critical Components</h3>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-[#242f40]/5 border border-[#242f40]/10 text-xs font-medium text-[#363636] rounded">GelFlex/Polymer Grid</span>
                                                <span className="px-2 py-1 bg-[#242f40]/5 border border-[#242f40]/10 text-xs font-medium text-[#363636] rounded">Base Foam Density</span>
                                                <span className="px-2 py-1 bg-[#242f40]/5 border border-[#242f40]/10 text-xs font-medium text-[#363636] rounded">Edge Support Coils</span>
                                                <span className="px-2 py-1 bg-[#242f40]/5 border border-[#242f40]/10 text-xs font-medium text-[#363636] rounded">Quilted Cover</span>
                                                <span className="px-2 py-1 bg-[#242f40]/5 border border-[#242f40]/10 text-xs font-medium text-[#363636] rounded">Zipper Integrity</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-[#e5e5e5] mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-xs text-[#363636]">
                        Research Tool Generated for DreamCloud Luxe Hybrid Longevity Study. <br />
                        Based on specified metrics: Sagging (&gt;0.5"/1.0"), Firmness Drift, Cooling Efficiency.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default DreamCloudLuxeHybridLongevityReview;
