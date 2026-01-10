'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Line } from 'react-chartjs-2';
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
    Scale,
    Bed,
    Thermometer,
    ArrowRight,
    CheckCircle,
    XCircle,
    Info,
    Activity
} from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const DreamCloudPremierRestReview = () => {
    // State for View switching
    const [activeView, setActiveView] = useState('metrics');
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
                desc: "Key Question: Probability of >0.5\" vs >1.0\" impressions. Goal: Remain below 1.0\" threshold for 5 years.",
                yLabel: "Depth (Inches)",
                thresholds: [0.5, 1.0],
                ideal: [0.1, 0.2, 0.3, 0.4],
                limit: [1.0, 1.0, 1.0, 1.0]
            },
            firmness: {
                label: "Firmness Change (1-10 Scale)",
                title: "Firmness Softening",
                desc: "Key Question: Probability of perceived firmness softening by ≥1 step. Goal: Minimize drift from baseline.",
                yLabel: "Firmness Drift (Steps)",
                thresholds: [1.0],
                ideal: [0, 0.5, 0.8, 1.2],
                limit: [1.0, 1.0, 1.0, 1.0]
            },
            cooling: {
                label: "Heat Retention (Normalized)",
                title: "Cooling Efficiency Decline",
                desc: "Key Question: Notable cooling efficiency decline at 1, 3, 5 years. Goal: Maintain surface temp decay time.",
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
                    text: reportData.metrics[currentMetric].yLabel,
                    color: '#6b7280'
                },
                grid: {
                    color: '#e5e7eb'
                },
                ticks: {
                    color: '#374151'
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#374151'
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': ' + context.parsed.y;
                    }
                },
                backgroundColor: 'rgba(36, 47, 64, 0.9)',
                titleColor: '#fff',
                bodyColor: '#e5e7eb',
                padding: 10,
                cornerRadius: 6
            },
            legend: {
                position: 'bottom',
                labels: {
                    color: '#374151',
                    usePointStyle: true,
                    boxWidth: 8
                }
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
                borderColor: '#ef4444', // Red for danger/failure
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
                borderColor: '#f59e0b', // Amber
                borderDash: [5, 5],
                borderWidth: 2,
                pointRadius: 0,
                fill: false
            });
        }

        return { labels: years, datasets };
    };

    return (
        <div className="bg-white min-h-screen font-sans text-jet-black">
            <Header />

            {/* Custom Header Context */}
            <div className="bg-white border-b border-alabaster-grey">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1 bg-jet-black text-white text-xs font-bold rounded uppercase tracking-wider">
                            Updated 2025
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-golden-bronze px-2 py-1 bg-golden-bronze/10 rounded">
                            <Activity size={12} /> Living Document
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-jet-black tracking-tight font-serif mb-2">
                                DreamCloud Premier Rest
                            </h1>
                            <p className="text-sm md:text-base text-graphite font-medium">Longevity Research Dashboard • SUBJECT: LUXE HYBRID • v1.0 BASELINE</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Intro Section */}
                <div className="mb-10 max-w-4xl">
                    <p className="text-graphite text-lg leading-relaxed">
                        This dashboard establishes the <strong>Living Review Baseline</strong> for the <strong>DreamCloud Luxe Hybrid</strong> (often marketed as Premier Rest).
                        It outlines the rigorous evidence-based framework designed to quantify durability at 1, 3, and 5-year intervals.
                        Select a module below to explore the testing criteria, risk factors, and research protocols.
                    </p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Navigation / Context */}
                    <div className="lg:col-span-3 space-y-6">
                        <nav className="flex flex-col space-y-2">
                            <button
                                onClick={() => setActiveView('metrics')}
                                className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full text-left transition-all ${activeView === 'metrics' ? 'bg-jet-black text-white shadow-lg ring-1 ring-jet-black' : 'bg-white text-graphite border border-alabaster-grey hover:bg-gray-50 hover:border-gray-300'}`}
                            >
                                <span className={`w-2.5 h-2.5 rounded-full mr-3 ${activeView === 'metrics' ? 'bg-golden-bronze' : 'bg-gray-300 group-hover:bg-golden-bronze'}`}></span>
                                Metrics & Thresholds
                            </button>
                            <button
                                onClick={() => setActiveView('risks')}
                                className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full text-left transition-all ${activeView === 'risks' ? 'bg-jet-black text-white shadow-lg ring-1 ring-jet-black' : 'bg-white text-graphite border border-alabaster-grey hover:bg-gray-50 hover:border-gray-300'}`}
                            >
                                <span className={`w-2.5 h-2.5 rounded-full mr-3 ${activeView === 'risks' ? 'bg-golden-bronze' : 'bg-gray-300 group-hover:bg-golden-bronze'}`}></span>
                                Risk Analysis
                            </button>
                            <button
                                onClick={() => setActiveView('protocol')}
                                className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full text-left transition-all ${activeView === 'protocol' ? 'bg-jet-black text-white shadow-lg ring-1 ring-jet-black' : 'bg-white text-graphite border border-alabaster-grey hover:bg-gray-50 hover:border-gray-300'}`}
                            >
                                <span className={`w-2.5 h-2.5 rounded-full mr-3 ${activeView === 'protocol' ? 'bg-golden-bronze' : 'bg-gray-300 group-hover:bg-golden-bronze'}`}></span>
                                Protocol & Sources
                            </button>
                            <button
                                onClick={() => setActiveView('product')}
                                className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full text-left transition-all ${activeView === 'product' ? 'bg-jet-black text-white shadow-lg ring-1 ring-jet-black' : 'bg-white text-graphite border border-alabaster-grey hover:bg-gray-50 hover:border-gray-300'}`}
                            >
                                <span className={`w-2.5 h-2.5 rounded-full mr-3 ${activeView === 'product' ? 'bg-golden-bronze' : 'bg-gray-300 group-hover:bg-golden-bronze'}`}></span>
                                Product Definition
                            </button>
                        </nav>

                        {/* Quick Stats Box */}
                        <div className="bg-graphite/5 p-5 rounded-xl border border-alabaster-grey">
                            <h3 className="text-xs font-bold text-golden-bronze uppercase tracking-wider mb-4">Key Horizons</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between group">
                                    <span className="text-sm font-medium text-jet-black group-hover:text-golden-bronze transition-colors">Short Term</span>
                                    <span className="text-xs font-mono bg-white border border-alabaster-grey px-2 py-1 rounded text-graphite">1 Year</span>
                                </div>
                                <div className="w-full bg-gray-200 h-px"></div>
                                <div className="flex items-center justify-between group">
                                    <span className="text-sm font-medium text-jet-black group-hover:text-golden-bronze transition-colors">Mid Term</span>
                                    <span className="text-xs font-mono bg-white border border-alabaster-grey px-2 py-1 rounded text-graphite">3 Years</span>
                                </div>
                                <div className="w-full bg-gray-200 h-px"></div>
                                <div className="flex items-center justify-between group">
                                    <span className="text-sm font-medium text-jet-black group-hover:text-golden-bronze transition-colors">Long Term</span>
                                    <span className="text-xs font-mono bg-white border border-alabaster-grey px-2 py-1 rounded text-graphite">5 Years</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:col-span-9">

                        {/* VIEW 1: Metrics & Thresholds */}
                        {activeView === 'metrics' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="bg-white rounded-2xl border border-alabaster-grey p-8 shadow-sm">
                                    <h2 className="text-xl font-bold text-jet-black mb-3">Quantifiable Durability Criteria</h2>
                                    <p className="text-sm text-graphite mb-8 leading-relaxed max-w-2xl">
                                        This module visualizes the pass/fail thresholds for the study.
                                        Click a metric below to see the projected measurement goals over the 5-year study period.
                                    </p>

                                    {/* Metric Toggles */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {['sagging', 'firmness', 'cooling', 'edge'].map(key => (
                                            <button
                                                key={key}
                                                onClick={() => setCurrentMetric(key)}
                                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${currentMetric === key ? 'bg-jet-black text-white border-jet-black shadow-md' : 'bg-white text-graphite border-alabaster-grey hover:border-golden-bronze hover:text-golden-bronze'}`}
                                            >
                                                {key === 'sagging' && 'Sagging & Impressions'}
                                                {key === 'firmness' && 'Firmness Drift'}
                                                {key === 'cooling' && 'Cooling Efficiency'}
                                                {key === 'edge' && 'Edge Support'}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Chart Container */}
                                    <div className="bg-gray-50 rounded-xl border border-alabaster-grey p-6 h-[400px]">
                                        <Line options={chartOptions} data={getChartData()} />
                                    </div>

                                    {/* Data Explanation */}
                                    <div className="mt-8 p-6 bg-jet-black text-white rounded-xl shadow-lg border-l-4 border-golden-bronze">
                                        <h3 className="text-base font-bold text-golden-bronze mb-2">{reportData.metrics[currentMetric].title}</h3>
                                        <p className="text-sm text-alabaster-grey leading-relaxed">
                                            {reportData.metrics[currentMetric].desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* VIEW 2: Risk Analysis */}
                        {activeView === 'risks' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="bg-white rounded-2xl border border-alabaster-grey p-8 shadow-sm">
                                    <h2 className="text-xl font-bold text-jet-black mb-3">Multivariate Risk Factor Analysis</h2>
                                    <p className="text-sm text-graphite mb-8 leading-relaxed max-w-2xl">
                                        Durability outcomes vary significantly by user profile. Use the controls below to identify the specific research questions targeted for different cohorts.
                                    </p>

                                    {/* Filters */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <div>
                                            <label className="block text-xs font-bold text-graphite uppercase tracking-wider mb-2">Sleeper Weight</label>
                                            <select
                                                value={riskParams.weight}
                                                onChange={(e) => setRiskParams({ ...riskParams, weight: e.target.value })}
                                                className="w-full rounded-lg border-alabaster-grey bg-gray-50 py-2.5 px-3 text-sm focus:border-golden-bronze focus:ring-golden-bronze text-jet-black outline-none transition-all"
                                            >
                                                <option value="light">≤150 lb</option>
                                                <option value="avg">151–200 lb</option>
                                                <option value="heavy">201–250 lb</option>
                                                <option value="extra_heavy">&gt;250 lb</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-graphite uppercase tracking-wider mb-2">Sleep Position</label>
                                            <select
                                                value={riskParams.pos}
                                                onChange={(e) => setRiskParams({ ...riskParams, pos: e.target.value })}
                                                className="w-full rounded-lg border-alabaster-grey bg-gray-50 py-2.5 px-3 text-sm focus:border-golden-bronze focus:ring-golden-bronze text-jet-black outline-none transition-all"
                                            >
                                                <option value="all">All Positions</option>
                                                <option value="side">Side Sleeper</option>
                                                <option value="back">Back Sleeper</option>
                                                <option value="combo">Combination</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-graphite uppercase tracking-wider mb-2">Climate</label>
                                            <select
                                                value={riskParams.climate}
                                                onChange={(e) => setRiskParams({ ...riskParams, climate: e.target.value })}
                                                className="w-full rounded-lg border-alabaster-grey bg-gray-50 py-2.5 px-3 text-sm focus:border-golden-bronze focus:ring-golden-bronze text-jet-black outline-none transition-all"
                                            >
                                                <option value="temperate">Temperate</option>
                                                <option value="humid">Hot/Humid</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Dynamic Output */}
                                    <div className="border-t border-alabaster-grey pt-8">
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-alabaster-grey hover:border-golden-bronze/50 transition-colors">
                                                <div className="p-2 bg-white rounded-lg shadow-sm text-golden-bronze">
                                                    <Scale size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-jet-black mb-1">Weight Impact</h4>
                                                    <p className="text-sm text-graphite leading-relaxed">{reportData.riskAnalysis[riskParams.weight]}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-alabaster-grey hover:border-golden-bronze/50 transition-colors">
                                                <div className="p-2 bg-white rounded-lg shadow-sm text-golden-bronze">
                                                    <Bed size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-jet-black mb-1">Position Impact</h4>
                                                    <p className="text-sm text-graphite leading-relaxed">{reportData.riskAnalysis[riskParams.pos]}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-alabaster-grey hover:border-golden-bronze/50 transition-colors">
                                                <div className="p-2 bg-white rounded-lg shadow-sm text-golden-bronze">
                                                    <Thermometer size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-jet-black mb-1">Climate Impact</h4>
                                                    <p className="text-sm text-graphite leading-relaxed">{reportData.riskAnalysis[riskParams.climate]}</p>
                                                </div>
                                            </div>
                                            <div className="mt-6 p-4 bg-blue-50 text-blue-900 text-sm font-semibold rounded-lg text-center border border-blue-100 flex items-center justify-center gap-2">
                                                <Info size={16} /> Active Research Question: "How do outcomes vary by these combined factors?"
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* VIEW 3: Protocol & Sources */}
                        {activeView === 'protocol' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="bg-white rounded-2xl border border-alabaster-grey p-8 shadow-sm">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h2 className="text-xl font-bold text-jet-black mb-2">Methodology & Evidence Hierarchy</h2>
                                            <p className="text-sm text-graphite">Prioritization logic for data collection.</p>
                                        </div>
                                        <span className="text-xs bg-gray-100 text-graphite py-1.5 px-3 rounded-full font-mono border border-gray-200">Mixed-Methods</span>
                                    </div>


                                    <div className="space-y-5">
                                        {/* Level 1 */}
                                        <div className="bg-white p-5 rounded-lg border-l-4 border-golden-bronze shadow-sm">
                                            <div className="flex justify-between items-center mb-3">
                                                <h3 className="text-jet-black font-bold text-sm">Tier 1: Verified Primary Data (Highest Weight)</h3>
                                                <span className="text-xs font-bold text-golden-bronze bg-golden-bronze/10 px-2 py-1 rounded">Gold Standard</span>
                                            </div>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2 text-sm text-graphite">
                                                    <CheckCircle size={14} className="text-golden-bronze mt-1 shrink-0" />
                                                    <span>Retailer reviews with "Verified Purchase" badges.</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-sm text-graphite">
                                                    <CheckCircle size={14} className="text-golden-bronze mt-1 shrink-0" />
                                                    <span>Longitudinal YouTube updates with verified timestamps.</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-sm text-graphite">
                                                    <CheckCircle size={14} className="text-golden-bronze mt-1 shrink-0" />
                                                    <span>Direct warranty claim documentation with photos.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Level 2 */}
                                        <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-graphite">
                                            <div className="flex justify-between items-center mb-3">
                                                <h3 className="text-jet-black font-bold text-sm">Tier 2: Secondary & Lab Data</h3>
                                                <span className="text-xs font-bold text-graphite bg-gray-200 px-2 py-1 rounded">Analytical</span>
                                            </div>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2 text-sm text-graphite">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-graphite mt-2 shrink-0"></span>
                                                    <span>Independent lab tests (ILD, Teardowns).</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-sm text-graphite">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-graphite mt-2 shrink-0"></span>
                                                    <span>Material analysis (Grid thickness, foam densities).</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-sm text-graphite">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-graphite mt-2 shrink-0"></span>
                                                    <span>Consumer Organization reports.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Level 3 */}
                                        <div className="bg-white p-5 rounded-lg border-l-4 border-gray-300 opacity-75">
                                            <div className="flex justify-between items-center mb-3">
                                                <h3 className="text-gray-500 font-bold text-sm">Tier 3: Manufacturer Data</h3>
                                                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">Reference Only</span>
                                            </div>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2 text-sm text-gray-500">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></span>
                                                    <span>Published Warranty Terms & Exclusions.</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-sm text-gray-500">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></span>
                                                    <span>Official material specifications.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* VIEW 4: Product Definition */}
                        {activeView === 'product' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="bg-white rounded-2xl border border-alabaster-grey p-8 shadow-sm">
                                    <h2 className="text-xl font-bold text-jet-black mb-3">Product Generation Map</h2>
                                    <p className="text-sm text-graphite mb-8 leading-relaxed max-w-2xl">
                                        Tracking durability requires separating product generations. Revisions in cover material,
                                        grid formulation, or base foam density are treated as distinct subgroups.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Definitions */}
                                        <div className="bg-gray-50 p-6 rounded-xl border border-alabaster-grey">
                                            <h3 className="font-bold text-jet-black mb-4 text-sm uppercase tracking-wider">Target Model</h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                                                    <span className="text-graphite">Product Name</span>
                                                    <span className="font-bold text-jet-black">DreamCloud Premier Rest</span>
                                                </div>
                                                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                                                    <span className="text-graphite">AKA</span>
                                                    <span className="font-bold text-jet-black">DreamCloud Luxe Hybrid</span>
                                                </div>
                                                <div className="flex justify-between text-sm pt-1">
                                                    <span className="text-graphite">Scope</span>
                                                    <span className="font-bold text-jet-black">All Sizes (Twin - Cal King)</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Components to Watch */}
                                        <div className="bg-gray-50 p-6 rounded-xl border border-alabaster-grey">
                                            <h3 className="font-bold text-jet-black mb-4 text-sm uppercase tracking-wider">Critical Components</h3>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1.5 bg-white border border-alabaster-grey text-xs font-semibold text-graphite rounded-lg shadow-sm">GelFlex/Polymer Grid</span>
                                                <span className="px-3 py-1.5 bg-white border border-alabaster-grey text-xs font-semibold text-graphite rounded-lg shadow-sm">Base Foam Density</span>
                                                <span className="px-3 py-1.5 bg-white border border-alabaster-grey text-xs font-semibold text-graphite rounded-lg shadow-sm">Edge Support Coils</span>
                                                <span className="px-3 py-1.5 bg-white border border-alabaster-grey text-xs font-semibold text-graphite rounded-lg shadow-sm">Quilted Cover</span>
                                                <span className="px-3 py-1.5 bg-white border border-alabaster-grey text-xs font-semibold text-graphite rounded-lg shadow-sm">Zipper Integrity</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </main>

        </div>
    );
};

export default DreamCloudPremierRestReview;
