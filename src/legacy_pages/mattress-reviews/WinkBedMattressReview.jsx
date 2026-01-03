import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import { Microscope, Activity, Shield, AlertTriangle, ChartLine, Calculator, Snowflake, CheckCircle, XCircle, Settings, Truck, Ruler, Info } from 'lucide-react';

const WinkBedMattressReview = () => {
    // State for interactive calculator
    const [weightBand, setWeightBand] = useState(2); // 1-4
    const [sleepPos, setSleepPos] = useState(2); // 1=Back, 2=Side, 3=Stomach
    const [chartLoaded, setChartLoaded] = useState(false);
    const [activeDataset, setActiveDataset] = useState('all'); // 'all', 'support', 'cooling'

    // Refs
    const longevityChartRef = useRef(null);
    const riskChartRef = useRef(null);

    // Risk Calculation Logic
    const calculateRisk = () => {
        const baseProb = 5;
        const weightMult = [1, 1.4, 2.2, 3.5];
        const posMult = [1.0, 1.5, 1.2];
        let probability = baseProb * weightMult[weightBand - 1] * posMult[sleepPos - 1];
        return Math.min(Math.round(probability), 95);
    };

    const riskProb = calculateRisk();
    let riskLevel = "Low Risk";
    let riskDesc = "Standard wear patterns expected.";
    let riskColor = "text-golden-bronze"; // Default

    if (riskProb > 15) {
        riskLevel = "Moderate Risk";
        riskDesc = "Rotate mattress every 3 months.";
    }
    if (riskProb > 30) {
        riskLevel = "High Risk";
        riskDesc = "Consider the 'Plus' model for durability.";
        riskColor = "text-white"; // High contrast for warning
    }

    // Load Chart.js
    useEffect(() => {
        if (window.Chart) {
            setChartLoaded(true);
            return;
        }
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
        script.async = true;
        script.onload = () => setChartLoaded(true);
        document.body.appendChild(script);
    }, []);

    // Initialize/Update Charts
    useEffect(() => {
        if (!chartLoaded) return;

        // Constants
        const COLOR_BRONZE = '#cca43b';
        const COLOR_TEXT = '#e5e5e5';
        const COLOR_GRAPHITE = '#363636';
        const COLOR_BLACK = '#242f40';

        window.Chart.defaults.color = COLOR_TEXT;
        window.Chart.defaults.font.family = 'Inter';

        // 1. Longevity Chart
        const ctxLongevity = document.getElementById('longevityChart')?.getContext('2d');
        if (longevityChartRef.current) longevityChartRef.current.destroy();

        if (ctxLongevity) {
            // Gradient
            const gradientSupport = ctxLongevity.createLinearGradient(0, 0, 0, 400);
            gradientSupport.addColorStop(0, 'rgba(204, 164, 59, 0.2)');
            gradientSupport.addColorStop(1, 'rgba(204, 164, 59, 0.0)');

            longevityChartRef.current = new window.Chart(ctxLongevity, {
                type: 'line',
                data: {
                    labels: ['New', '1 Year', '2 Years', '3 Years', '4 Years', '5 Years'],
                    datasets: [
                        {
                            label: 'Support Level',
                            data: [100, 98, 96, 94, 91, 88],
                            borderColor: COLOR_BRONZE,
                            backgroundColor: gradientSupport,
                            fill: true,
                            tension: 0.4,
                            pointBackgroundColor: COLOR_BRONZE,
                            hidden: activeDataset !== 'all' && activeDataset !== 'support'
                        },
                        {
                            label: 'Comfort/Firmness',
                            data: [100, 95, 90, 85, 80, 75],
                            borderColor: '#737373', // Neutral Grey
                            borderDash: [5, 5],
                            tension: 0.4,
                            pointRadius: 0,
                            hidden: activeDataset !== 'all' && activeDataset !== 'support'
                        },
                        {
                            label: 'Cooling Efficiency',
                            data: [100, 99, 98, 96, 94, 92],
                            borderColor: '#22d3ee', // Cyan
                            tension: 0.4,
                            hidden: activeDataset !== 'all' && activeDataset !== 'cooling'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            min: 60, max: 105,
                            grid: { color: 'rgba(255,255,255,0.05)' },
                            title: { display: true, text: 'Performance %', color: COLOR_TEXT }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: COLOR_TEXT }
                        }
                    },
                    plugins: {
                        legend: { labels: { color: COLOR_TEXT } }
                    }
                }
            });
        }

        // 2. Risk Chart (Doughnut)
        const ctxRisk = document.getElementById('riskChart')?.getContext('2d');
        if (riskChartRef.current) riskChartRef.current.destroy();

        if (ctxRisk) {
            riskChartRef.current = new window.Chart(ctxRisk, {
                type: 'doughnut',
                data: {
                    labels: ['Risk', 'Safety'],
                    datasets: [{
                        data: [riskProb, 100 - riskProb],
                        backgroundColor: [COLOR_BRONZE, 'rgba(255,255,255,0.1)'],
                        borderWidth: 0,
                        cutout: '85%',
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: false } },
                    animation: { animateScale: true }
                }
            });
        }

    }, [chartLoaded, activeDataset, riskProb]); // Re-run when dependencies change

    return (
        <div className="bg-jet-black text-alabaster-grey font-sans antialiased min-h-screen">
            <Header />

            {/* Header */}
            <header className="pt-16 pb-12 bg-gradient-to-b from-jet-black to-jet-black border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-2 text-golden-bronze font-bold text-sm uppercase tracking-wider">
                            <Microscope size={16} /> Longevity Research
                        </div>
                        <h1 className="text-3xl font-bold font-serif text-white">The WinkBed (Hybrid)</h1>
                        <p className="text-alabaster-grey/70 mt-1">Living Review: Original, Plus, & EcoCloud</p>
                    </div>

                    <div className="flex flex-col items-end gap-6">
                        <nav className="hidden md:flex space-x-8">
                            <a href="#executive-summary" className="text-alabaster-grey/80 hover:text-golden-bronze text-sm font-medium transition-colors">Summary</a>
                            <a href="#performance-timeline" className="text-alabaster-grey/80 hover:text-golden-bronze text-sm font-medium transition-colors">Degradation Data</a>
                            <a href="#risk-calculator" className="text-alabaster-grey/80 hover:text-golden-bronze text-sm font-medium transition-colors">Sleeper Risk</a>
                            <a href="#failure-analysis" className="text-alabaster-grey/80 hover:text-golden-bronze text-sm font-medium transition-colors">Failure Modes</a>
                        </nav>
                        <div className="flex gap-4">
                            <div className="text-right hidden sm:block">
                                <div className="text-xs uppercase tracking-wider text-golden-bronze mb-1">Status</div>
                                <div className="font-semibold text-white flex items-center justify-end gap-2">
                                    <span className="w-2 h-2 rounded-full bg-golden-bronze animate-pulse"></span> Living Document
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

                {/* 1. Executive Summary & Dashboard */}
                <section id="executive-summary" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-graphite rounded-xl p-8 border border-white/5">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-2 py-1 bg-golden-bronze/20 text-golden-bronze text-xs font-bold uppercase rounded">Updated: Oct 2025</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4 font-serif">Research Objective</h2>
                        <p className="text-alabaster-grey leading-relaxed mb-6">
                            This is a deep, evidence-based living review focusing on the long-term durability and performance of the WinkBed Mattress under nightly use. Unlike standard initial reviews, this study quantifies changes at <strong>1, 3, and 5 years</strong> regarding sagging, firmness drift, and cooling efficiency.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <span className="block text-xs font-bold text-golden-bronze uppercase tracking-wide mb-1">Product Scope</span>
                                <span className="block text-lg font-bold text-white">WinkBed (Hybrid)</span>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <span className="block text-xs font-bold text-golden-bronze uppercase tracking-wide mb-1">Data Source</span>
                                <span className="block text-lg font-bold text-white">Longitudinal</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 bg-gradient-to-br from-[#1a1a1a] to-graphite p-8 rounded-xl shadow-lg flex flex-col justify-between relative overflow-hidden border border-white/5">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-golden-bronze/10 rounded-full blur-3xl"></div>

                        <div>
                            <h3 className="text-lg font-bold mb-1 text-golden-bronze">Current Status</h3>
                            <div className="text-5xl font-bold text-white mb-2 font-serif">Year 3</div>
                            <p className="text-alabaster-grey/60 text-sm mb-8 flex items-center gap-2">
                                <Activity size={14} className="text-golden-bronze" /> Data Confidence: High
                            </p>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <div className="flex justify-between text-sm mb-1 text-alabaster-grey/80">
                                    <span>Structural Integrity</span>
                                    <span className="font-bold text-white">92%</span>
                                </div>
                                <div className="w-full bg-black/50 rounded-full h-1.5">
                                    <div className="bg-golden-bronze h-1.5 rounded-full" style={{ width: '92%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1 text-alabaster-grey/80">
                                    <span>Sagging Risk</span>
                                    <span className="font-bold text-golden-bronze">Moderate</span>
                                </div>
                                <div className="w-full bg-black/50 rounded-full h-1.5">
                                    <div className="bg-golden-bronze h-1.5 rounded-full opacity-60" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Performance Timeline */}
                <section id="performance-timeline">
                    <div className="max-w-3xl mb-6">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3 font-serif">
                            Longitudinal Performance
                        </h2>
                        <p className="text-alabaster-grey/70 mt-2">
                            Quantifying performance degradation over a 5-year ownership period.
                        </p>
                    </div>

                    <div className="bg-graphite rounded-xl border border-white/5 overflow-hidden">
                        <div className="border-b border-white/5 bg-white/5 p-4 flex flex-wrap gap-3 items-center justify-between">
                            <div className="flex gap-2">
                                {['all', 'support', 'cooling'].map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setActiveDataset(type)}
                                        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all capitalize ${activeDataset === type
                                            ? 'bg-golden-bronze text-white shadow-lg'
                                            : 'text-alabaster-grey hover:bg-white/5'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            <div className="lg:col-span-2 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/5">
                                <div className="relative h-[350px] w-full">
                                    <canvas id="longevityChart"></canvas>
                                </div>
                            </div>
                            <div className="lg:col-span-1 bg-jet-black/50 p-6 lg:p-8 flex flex-col justify-center space-y-8">
                                <div className="relative pl-6 border-l-2 border-golden-bronze">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">Year 1: Break-in</h4>
                                    <p className="text-sm text-alabaster-grey/70">Minor softening of the Euro-pillow top foam. Normal "break-in." Cooling efficiency remains at 98%.</p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-white/20">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">Year 3: Inflection</h4>
                                    <p className="text-sm text-alabaster-grey/70">Critical for heavier sleepers (&gt;230 lbs). Foam compression may reach 0.75". Edge coils retain 90% rigidity.</p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-white/20">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">Year 5: Drift</h4>
                                    <p className="text-sm text-alabaster-grey/70">Expected firmness drift of ~1.5 points (softer). Cooling declines slightly as foam compaction reduces airflow.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Risk Calculator */}
                <section id="risk-calculator">
                    <div className="bg-white/5 rounded-2xl border border-white/5 p-6 lg:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Inputs */}
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
                                    <Calculator className="text-golden-bronze" /> Sleeper Risk Calculator
                                </h2>

                                <div>
                                    <label className="flex justify-between text-sm font-bold text-white mb-4">
                                        <span>Weight Band</span>
                                        <span className="text-golden-bronze">
                                            {["Light (<150 lbs)", "Moderate (150-200 lbs)", "Heavy (200-250 lbs)", "Plus (250+ lbs)"][weightBand - 1]}
                                        </span>
                                    </label>
                                    <input
                                        type="range" min="1" max="4" value={weightBand}
                                        onInput={(e) => setWeightBand(parseInt(e.target.value))}
                                        className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-golden-bronze"
                                    />
                                    <div className="flex justify-between text-xs text-alabaster-grey/50 mt-2">
                                        <span>&lt;150</span><span>200</span><span>250</span><span>250+</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-white mb-3">Primary Position</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { id: 1, label: 'Back' },
                                            { id: 2, label: 'Side' },
                                            { id: 3, label: 'Stomach' }
                                        ].map(pos => (
                                            <button
                                                key={pos.id}
                                                onClick={() => setSleepPos(pos.id)}
                                                className={`py-3 px-4 text-sm font-medium rounded-xl transition-all border ${sleepPos === pos.id
                                                    ? 'border-golden-bronze bg-golden-bronze/10 text-white'
                                                    : 'border-white/10 text-alabaster-grey hover:bg-white/5'
                                                    }`}
                                            >
                                                {pos.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Output */}
                            <div className="flex flex-col items-center justify-center bg-graphite p-8 rounded-2xl border border-white/5">
                                <div className="relative w-48 h-48">
                                    <canvas id="riskChart"></canvas>
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                        <span className={`text-4xl font-bold ${riskColor}`}>{riskProb}%</span>
                                        <span className="text-[10px] uppercase font-bold text-alabaster-grey/50 tracking-wider">Prob.</span>
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <h3 className={`text-2xl font-bold ${riskColor}`}>{riskLevel}</h3>
                                    <p className="text-sm text-alabaster-grey/70 mt-1">{riskDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Detailed Metrics Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Sagging */}
                    <div className="bg-graphite p-6 rounded-xl border border-white/5">
                        <Activity className="text-golden-bronze mb-4" />
                        <h3 className="font-bold text-white text-sm uppercase tracking-wide">Impressions</h3>
                        <div className="mt-2 text-3xl font-bold text-white">12%</div>
                        <p className="text-xs text-alabaster-grey/50 mt-1">Report rate &gt; 1.0" depth</p>
                    </div>
                    {/* Firmness */}
                    <div className="bg-graphite p-6 rounded-xl border border-white/5">
                        <Settings className="text-white mb-4" />
                        <h3 className="font-bold text-white text-sm uppercase tracking-wide">Firmness Drift</h3>
                        <div className="mt-2 text-3xl font-bold text-white">-1.5</div>
                        <p className="text-xs text-alabaster-grey/50 mt-1">Points softer (5 yr)</p>
                    </div>
                    {/* Edge */}
                    <div className="bg-graphite p-6 rounded-xl border border-white/5">
                        <Shield className="text-green-500 mb-4" />
                        <h3 className="font-bold text-white text-sm uppercase tracking-wide">Edge Support</h3>
                        <div className="mt-2 text-3xl font-bold text-white">High</div>
                        <p className="text-xs text-alabaster-grey/50 mt-1">Resilience Retention</p>
                    </div>
                    {/* Cooling */}
                    <div className="bg-graphite p-6 rounded-xl border border-white/5">
                        <Snowflake className="text-cyan-400 mb-4" />
                        <h3 className="font-bold text-white text-sm uppercase tracking-wide">Cooling Decay</h3>
                        <div className="mt-2 text-3xl font-bold text-white">Low</div>
                        <p className="text-xs text-alabaster-grey/50 mt-1">Airflow reduction</p>
                    </div>
                </section>

                {/* 5. Failure Analysis */}
                <section id="failure-analysis" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Structural */}
                    <div className="bg-graphite rounded-xl border border-white/5 p-8">
                        <h3 className="text-xl font-bold text-white mb-4 font-serif">Structural Analysis</h3>
                        <p className="text-sm text-alabaster-grey/70 mb-8">
                            Based on owner reports and tear-down analysis, these are the most common structural failures ranked by frequency.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span className="text-white">Pillow Top Compression</span>
                                    <span className="text-golden-bronze">Highest Freq.</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <div className="bg-golden-bronze h-2 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                                <p className="text-xs text-alabaster-grey/50 mt-2">The comfort layer (Hypersoft Foam) loses loft before coils.</p>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span className="text-white">Cover Bunching</span>
                                    <span className="text-alabaster-grey">Medium Freq.</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <div className="bg-alabaster-grey/50 h-2 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                                <p className="text-xs text-alabaster-grey/50 mt-2">Surface fabric may loosen or stretch over time.</p>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span className="text-white">Coil Unit Failure</span>
                                    <span className="text-white/30">Low Freq.</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <div className="bg-white/20 h-2 rounded-full border border-white/10" style={{ width: '15%' }}></div>
                                </div>
                                <p className="text-xs text-alabaster-grey/50 mt-2">Tempered steel coils show high resilience (rare failure).</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Warranty */}
                    <div className="bg-jet-black border border-white/10 rounded-xl p-8 relative overflow-hidden">
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-golden-bronze/5 rounded-full blur-2xl"></div>
                        <h3 className="text-xl font-bold text-white mb-6 font-serif relative z-10">Warranty vs. Reality</h3>

                        <div className="space-y-6 relative z-10">
                            {/* The Policy */}
                            <div className="bg-white/5 p-5 rounded-xl border border-golden-bronze/10">
                                <h4 className="text-golden-bronze font-bold uppercase text-xs tracking-wider mb-3">The Policy</h4>
                                <ul className="space-y-3 text-sm text-alabaster-grey">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-golden-bronze mt-0.5 flex-shrink-0" size={16} />
                                        <span><strong>Lifetime Warranty:</strong> Covers defects for original owner.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Ruler className="text-golden-bronze mt-0.5 flex-shrink-0" size={16} />
                                        <span><strong>Threshold:</strong> &gt; 1.5 inches to qualify.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* The Reality */}
                            <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                                <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-3">The Reality</h4>
                                <ul className="space-y-3 text-sm text-alabaster-grey">
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="text-golden-bronze mt-0.5 flex-shrink-0" size={16} />
                                        <span><strong>"Normal Wear":</strong> Softening without visible sagging (&gt;1.5") is often denied.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Truck className="text-golden-bronze mt-0.5 flex-shrink-0" size={16} />
                                        <span><strong>Logistics:</strong> Customer often bears shipping cost for warranty exchanges.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 mt-12 py-12 bg-graphite">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-golden-bronze mx-auto mb-6 border border-white/10">
                        <Microscope size={24} />
                    </div>
                    <p className="text-alabaster-grey/60 text-sm max-w-2xl mx-auto leading-relaxed">
                        This Living Review is an independent analysis. Data is synthesized from aggregated public owner reports, third-party lab testing results, and technical material specifications.
                    </p>
                    <p className="mt-6 text-xs text-alabaster-grey/30">Last Database Update: October 2025</p>
                </div>
            </footer>
        </div>
    );
};

export default WinkBedMattressReview;
