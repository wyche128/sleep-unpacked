'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
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
import { Line } from 'react-chartjs-2';
import {
    Clock,
    ChevronRight,
    ArrowRight,
    AlertTriangle,
    Shield,
    Target,
    Layers,
    Users,
    Menu,
    X
} from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const HelixMidnightLongevityReview = () => {
    const [activeMetric, setActiveMetric] = useState('sagging');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Navigation logic
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const headerOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    };

    // Data Definitions
    const researchData = {
        sagging: {
            title: "Sagging & Body Impressions",
            desc: "Measuring permanent body impressions over time.",
            method: "Photo-verified depth measurement; verified owner reports.",
            thresholds: "Primary: > 1.0 inch depth. Secondary: > 0.5 inch depth (Early warning).",
            labels: ['Baseline', 'Year 1', 'Year 3', 'Year 5'],
            datasets: [
                {
                    label: 'Projected Normal Wear (Inches)',
                    data: [0, 0.2, 0.4, 0.6],
                    borderColor: '#94a3b8',
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Warning Threshold (0.5")',
                    data: [0.5, 0.5, 0.5, 0.5],
                    borderColor: '#f59e0b',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'Failure Threshold (1.0")',
                    data: [1.0, 1.0, 1.0, 1.0],
                    borderColor: '#ef4444',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: 'origin',
                    backgroundColor: 'rgba(239, 68, 68, 0.05)'
                }
            ],
            yAxisLabel: 'Indentation Depth (Inches)',
            suggestedMax: 1.5,
            min: 0
        },
        firmness: {
            title: "Firmness Retention",
            desc: "Drift in perceived firmness level on 1-10 scale.",
            method: "Owner reported subjectivity + ILD deflection if available.",
            thresholds: "Significant Change: ≥ 1 full step softening (e.g., 6/10 → 5/10).",
            labels: ['Baseline', 'Year 1', 'Year 3', 'Year 5'],
            datasets: [
                {
                    label: 'Target Firmness (Medium - 6.0)',
                    data: [6, 6, 6, 6],
                    borderColor: '#312e81',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'Softening Tolerance Limit (-1 Step)',
                    data: [5, 5, 5, 5],
                    borderColor: '#f59e0b',
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false
                }
            ],
            yAxisLabel: 'Firmness Scale (1-10)',
            suggestedMax: 10,
            min: 1
        },
        edge: {
            title: "Edge Support Stability",
            desc: "Loss of structural integrity at perimeter.",
            method: "Roll-off distance measurement or compression at 200lb load.",
            thresholds: "Failure: ≥ 15% loss in support/compression resistance.",
            labels: ['Baseline', 'Year 1', 'Year 3', 'Year 5'],
            datasets: [
                {
                    label: 'Edge Stability (%)',
                    data: [100, 95, 90, 85],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.3
                },
                {
                    label: 'Failure Limit (85%)',
                    data: [85, 85, 85, 85],
                    borderColor: '#ef4444',
                    borderWidth: 1,
                    pointRadius: 0,
                    borderDash: [2, 2]
                }
            ],
            yAxisLabel: 'Stability Retention (%)',
            suggestedMax: 105,
            min: 70
        },
        cooling: {
            title: "Cooling Efficiency",
            desc: "Ability of cover/grid to dissipate heat over time.",
            method: "Surface temperature decay time (T-return to baseline).",
            thresholds: "Notable decline in heat dissipation rate.",
            labels: ['Baseline', 'Year 1', 'Year 3', 'Year 5'],
            datasets: [
                {
                    label: 'Surface Temp Decay Rate',
                    data: [100, 98, 92, 88],
                    borderColor: '#06b6d4',
                    tension: 0.4,
                    fill: false
                }
            ],
            yAxisLabel: 'Efficiency Index (Base=100)',
            suggestedMax: 105,
            min: 70
        }
    };

    const currentData = researchData[activeMetric];

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    font: { size: 11 }
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: currentData.yAxisLabel,
                    color: '#64748b'
                },
                beginAtZero: false,
                suggestedMax: currentData.suggestedMax,
                min: currentData.min,
                grid: { color: '#f1f5f9' }
            },
            x: {
                grid: { display: false }
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        }
    };

    return (
        <div className="bg-stone-50 text-slate-800 font-sans min-h-screen">
            <Header />

            {/* Navigation Header */}
            <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-3">
                            <Link href="/mattress-reviews" className="flex items-center gap-2 group mr-2">
                                <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-indigo-900 group-hover:text-white transition-all">
                                    <ArrowRight size={14} className="rotate-180" />
                                </div>
                            </Link>
                            <div className="w-8 h-8 bg-indigo-900 rounded flex items-center justify-center text-white font-bold text-lg">H</div>
                            <div>
                                <h1 className="text-xl font-bold tracking-tight text-slate-900">Helix Midnight</h1>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Deep Longevity Research Protocol</p>
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <button onClick={() => scrollToSection('overview')} className="text-xs font-semibold text-slate-500 hover:text-indigo-900 uppercase tracking-wide">Overview</button>
                            <button onClick={() => scrollToSection('metrics')} className="text-xs font-semibold text-slate-500 hover:text-indigo-900 uppercase tracking-wide">Metrics</button>
                            <button onClick={() => scrollToSection('variables')} className="text-xs font-semibold text-slate-500 hover:text-indigo-900 uppercase tracking-wide">Variables</button>
                            <button onClick={() => scrollToSection('methodology')} className="text-xs font-semibold text-slate-500 hover:text-indigo-900 uppercase tracking-wide">Methodology</button>
                        </nav>
                        <div className="md:hidden">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-500 hover:text-indigo-900 p-2">
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-stone-100 p-4 space-y-3 animate-in fade-in slide-in-from-top-2">
                        <button onClick={() => scrollToSection('overview')} className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-600 hover:bg-stone-50 rounded">Overview</button>
                        <button onClick={() => scrollToSection('metrics')} className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-600 hover:bg-stone-50 rounded">Metrics</button>
                        <button onClick={() => scrollToSection('variables')} className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-600 hover:bg-stone-50 rounded">Variables</button>
                        <button onClick={() => scrollToSection('methodology')} className="block w-full text-left py-2 px-3 text-sm font-semibold text-slate-600 hover:bg-stone-50 rounded">Methodology</button>
                    </div>
                )}
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* SECTION 1: OVERVIEW */}
                <section id="overview" className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Objective Card */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm h-full">
                                <div className="flex items-center gap-2 mb-4">
                                    <Target className="text-indigo-900" size={24} />
                                    <h2 className="text-2xl font-bold text-slate-800">Research Objective</h2>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    To perform deep, evidence-based research on the long-term durability and performance of the
                                    <span className="font-bold text-indigo-900 mx-1">Helix Midnight Mattress</span> under nightly use.
                                    Compared to the heavy-duty <Link href="/mattress-reviews/helix-plus" className="text-indigo-600 hover:underline font-semibold italic">Helix Plus</Link>, the Midnight series targets side sleepers seeking medium-tension support.
                                    We aim to produce a "Living Review" baseline that evolves with verified owner data.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-100">
                                    <div className="p-4 bg-stone-50 rounded-xl text-center">
                                        <div className="text-3xl font-black text-indigo-900 mb-1">3</div>
                                        <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Checkpoints</div>
                                        <div className="text-xs text-slate-400 mt-1">1, 3, & 5 Years</div>
                                    </div>
                                    <div className="p-4 bg-stone-50 rounded-xl text-center">
                                        <div className="text-3xl font-black text-indigo-900 mb-1">4</div>
                                        <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Key Areas</div>
                                        <div className="text-xs text-slate-400 mt-1">Sag, Firmness, Edge, Cool</div>
                                    </div>
                                    <div className="p-4 bg-stone-50 rounded-xl text-center">
                                        <div className="text-3xl font-black text-indigo-900 mb-1 flex items-center justify-center gap-1">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            Live
                                        </div>
                                        <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Status</div>
                                        <div className="text-xs text-slate-400 mt-1">Annual Updates</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Scope Card */}
                        <div className="bg-indigo-900 rounded-2xl p-8 text-white shadow-xl flex flex-col h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Shield size={120} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Shield size={20} className="text-amber-400" />
                                    Target Subject
                                </h3>
                                <p className="text-indigo-100 text-sm mb-8 leading-relaxed">
                                    Helix Midnight (Standard & Luxe variants included). Focus on identifying generation shifts and material fatigue points.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 w-2 h-2 bg-amber-400 rounded-full shrink-0"></div>
                                        <div>
                                            <span className="block font-bold text-sm uppercase tracking-wider mb-1">Scope</span>
                                            <span className="text-xs text-indigo-200">All sizes, with specific call-outs for weight-based fatigue differences.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 w-2 h-2 bg-amber-400 rounded-full shrink-0"></div>
                                        <div>
                                            <span className="block font-bold text-sm uppercase tracking-wider mb-1">Generations</span>
                                            <span className="text-xs text-indigo-200">Mapping model years to track cover changes and foam density variations.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto pt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-center text-indigo-400/60 border-t border-white/10">
                                AKA: "Midnight Standard", "Midnight Luxe"
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: METRICS & THRESHOLDS */}
                <section id="metrics" className="mb-20">
                    <div className="mb-10 max-w-2xl">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Protocol Thresholds & Metrics</h2>
                        <p className="text-slate-500 leading-relaxed font-medium">
                            Explore specific failure criteria defined for our longevity study. Use the controls to visualize
                            the testing parameters across performance categories.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm">
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Controls */}
                            <div className="lg:w-1/4 space-y-2">
                                {Object.keys(researchData).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveMetric(key)}
                                        className={`w-full text-left px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center justify-between group ${activeMetric === key
                                            ? 'bg-indigo-900 text-white shadow-lg shadow-indigo-200 translate-x-1'
                                            : 'text-slate-500 hover:bg-stone-50 hover:text-indigo-900 border border-transparent'
                                            }`}
                                    >
                                        <span className="capitalize">{key === 'edge' ? 'Edge Support' : key === 'sagging' ? 'Sagging' : key === 'firmness' ? 'Firmness' : 'Cooling'}</span>
                                        <ChevronRight size={16} className={`transition-transform duration-300 ${activeMetric === key ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                                    </button>
                                ))}
                            </div>

                            {/* Chart Area */}
                            <div className="lg:w-3/4">
                                <div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-100">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-indigo-900 mb-1">{currentData.title}</h3>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{currentData.desc}</p>
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-stone-200 shadow-sm">
                                            <Clock size={14} className="text-indigo-900" />
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">5 Year Protocol</span>
                                        </div>
                                    </div>

                                    <div className="h-[350px] md:h-[400px] w-full bg-white rounded-xl p-4 border border-stone-100 mb-8">
                                        <Line data={{
                                            labels: currentData.labels,
                                            datasets: currentData.datasets
                                        }} options={chartOptions} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-white p-5 rounded-xl border border-stone-200/60 shadow-sm relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
                                                <AlertTriangle size={60} />
                                            </div>
                                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                                Failure Thresholds
                                            </h4>
                                            <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                                {currentData.thresholds}
                                                {activeMetric === 'sagging' && (
                                                    <Link href="/faqs/one-point-five-inch-threshold" className="block mt-2 text-xs text-indigo-600 hover:underline font-bold">
                                                        Read: Why 1.5" is the industry failure standard →
                                                    </Link>
                                                )}
                                                {activeMetric === 'cooling' && (
                                                    <Link href="/top-picks/best-cooling-mattress" className="block mt-2 text-xs text-indigo-600 hover:underline font-bold">
                                                        View: Top-Rated Cooling Alternatives →
                                                    </Link>
                                                )}
                                            </p>
                                        </div>
                                        <div className="bg-white p-5 rounded-xl border border-stone-200/60 shadow-sm relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
                                                <Layers size={60} />
                                            </div>
                                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                                Methodology
                                            </h4>
                                            <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                                {currentData.method}
                                                {activeMetric === 'firmness' && (
                                                    <Link href="/faqs/memory-foam-vs-latex" className="block mt-2 text-xs text-indigo-600 hover:underline font-bold">
                                                        Compare: Foam vs Latex Softening Rates →
                                                    </Link>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: VARIABLES */}
                <section id="variables" className="mb-20">
                    <div className="flex items-center justify-between mb-10">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-sans">Controlled Variables & Cohorts</h2>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                Research outcomes are segmented by Demographics and conditions to isolate specific failure modes.
                            </p>
                        </div>
                        <Users size={40} className="text-slate-200 hidden md:block" />
                    </div>

                    {/* Weight Bands */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            { weight: "≤ 150 lbs", label: "Lightweight", desc: "Focus on comfort layer engagement and initial firmness perception.", type: "control" },
                            { weight: "151–200 lbs", label: "Average", desc: "Baseline for standard wear and tear comparisons; core demographic.", type: "standard" },
                            { weight: "201–250 lbs", label: "Heavy", desc: "Critical zone for foam base softening and support loss analysis.", type: "risk" },
                            { weight: "> 250 lbs", label: "Max Load", desc: "Highest risk for deep impressions and grid fatigue. Priority group.", type: "high-risk" }
                        ].map((band, idx) => (band.type === 'high-risk' ? (
                            <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-amber-100 shadow-md relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400"></div>
                                <div className="text-3xl font-black text-slate-900 mb-1">{band.weight}</div>
                                <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4">Priority Cohort</div>
                                <p className="text-xs text-slate-500 leading-relaxed font-semibold">{band.desc}</p>
                            </div>
                        ) : (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm group hover:-translate-y-1 transition-all duration-300 hover:shadow-md">
                                <div className="text-2xl font-black text-slate-800 mb-1 group-hover:text-indigo-900 transition-colors">{band.weight}</div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{band.label}</div>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">{band.desc}</p>
                            </div>
                        )))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-indigo-900 mb-6 flex items-center gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                Sleep Position
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {['Back', 'Side', 'Stomach', 'Combo'].map(pos => (
                                    <span key={pos} className="px-4 py-1.5 bg-stone-50 border border-stone-100 text-[10px] font-bold text-slate-600 rounded-full uppercase tracking-widest">{pos}</span>
                                ))}
                            </div>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                Correlation between position and specific pressure point failures (e.g., hip dip analysis for side sleepers).
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-indigo-900 mb-6 flex items-center gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                Foundation Typology
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { label: "Slats (3\" spacing control)", icon: "▸" },
                                    { label: "Traditional Box Spring", icon: "▸" },
                                    { label: "Adjustable Platform", icon: "▸" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                                        <span className="text-indigo-400">{item.icon}</span>
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-indigo-900 mb-6 flex items-center gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                Climate Vectors
                            </h3>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-100">
                                    <span className="text-xs font-bold text-slate-800">Temperate</span>
                                    <span className="text-[10px] font-black text-green-600 uppercase">Control</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-100">
                                    <span className="text-xs font-bold text-slate-800">Hot/Humid</span>
                                    <span className="text-[10px] font-black text-amber-600 uppercase">Foam Risk</span>
                                </div>
                            </div>
                            <p className="text-[10px] text-slate-400 italic font-bold text-center">Impact analysis on cooling gel degradation rate.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: METHODOLOGY */}
                <section id="methodology">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Evidence Hierarchy</h2>
                            <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                                Data sources are weighted by reliability. Verified longitudinal data takes precedence over cross-sectional anecdotes.
                                Learn more in our <Link href="/sleep-guides/mattress-lifespan-guide" className="text-indigo-600 hover:underline">Mattress Lifespan Hierarchy Guide</Link>.
                            </p>
                        </div>

                        <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto px-4">
                            {/* Level 1 */}
                            <div className="w-full bg-indigo-900 text-white p-8 rounded-t-3xl text-center shadow-xl relative group cursor-default transition-all duration-500 hover:scale-[1.02]">
                                <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-black bg-indigo-100 text-indigo-900 px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Primary</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Verified Owner Data</h3>
                                <p className="text-indigo-200 text-xs font-semibold leading-relaxed">Proof of purchase + Duration. Retailer badges, photo-verified long-term updates.</p>
                            </div>

                            {/* Level 2 */}
                            <div className="w-full bg-indigo-700 text-white p-8 rounded-sm text-center shadow-lg transition-all duration-500 hover:scale-[1.02] cursor-default">
                                <h3 className="text-lg font-bold mb-2">Longitudinal Lab Tests</h3>
                                <p className="text-indigo-200 text-xs font-semibold leading-relaxed">Independent third-party teardowns and standardized deflection tests over time.</p>
                            </div>

                            {/* Level 3 */}
                            <div className="w-full bg-indigo-500 text-white p-8 rounded-b-3xl text-center shadow transition-all duration-500 hover:scale-[1.02] cursor-default relative group">
                                <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-black bg-indigo-50 text-indigo-500 px-3 py-1.5 rounded-full uppercase tracking-widest shadow">Context</span>
                                </div>
                                <h3 className="text-base font-bold mb-2">Manufacturer Specs & Anecdotes</h3>
                                <p className="text-indigo-100 text-xs font-semibold leading-relaxed">Warranty terms, unverified forum posts, known production revision notes.</p>
                            </div>
                        </div>

                        {/* Warranty Note */}
                        <div className="mt-20 bg-amber-50/50 border border-amber-100 p-8 rounded-3xl flex flex-col md:flex-row items-center md:items-start gap-6 group hover:border-amber-200 transition-colors">
                            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                <AlertTriangle className="text-amber-600" size={32} />
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-lg font-bold text-amber-900 mb-2">Strategic Warranty Analysis</h4>
                                <p className="text-sm text-amber-800 leading-relaxed font-medium">
                                    We investigate the specific delta between stated warranty coverage
                                    (Indentation Thresholds & Exclusions) and actual owner claim resolution velocity
                                    over the standard 5-year observation period.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* SECTION 5: RELATED ANALYSIS */}
                <section className="mt-20 border-t border-stone-200 pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link href="/top-picks/best-mattress-for-side-sleepers" className="group flex items-center justify-between p-8 bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500">
                            <div>
                                <h4 className="text-lg font-bold text-slate-800 group-hover:text-indigo-900 mb-1 transition-colors">Best for Side Sleepers</h4>
                                <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Helix Midnight Rank: #1 Overall</p>
                            </div>
                            <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center group-hover:bg-indigo-900 group-hover:text-white transition-all duration-500">
                                <ArrowRight size={20} />
                            </div>
                        </Link>
                        <Link href="/faqs/how-to-file-warranty-claim" className="group flex items-center justify-between p-8 bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500">
                            <div>
                                <h4 className="text-lg font-bold text-slate-800 group-hover:text-indigo-900 mb-1 transition-colors">Warranty Claim Support</h4>
                                <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Actionable steps for Helix owners</p>
                            </div>
                            <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center group-hover:bg-indigo-900 group-hover:text-white transition-all duration-500">
                                <ArrowRight size={20} />
                            </div>
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="bg-stone-100 border-t border-stone-200 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Research Protocol Prototype</p>
                    <p className="text-xs text-slate-400 font-medium">Helix Midnight Analysis - Longevity Protocol Baseline</p>
                    <p className="text-[10px] text-slate-300 italic mt-6">Not an official Helix Sleep document. Independent research audit.</p>
                </div>
            </footer>
        </div >
    );
};

export default HelixMidnightLongevityReview;
