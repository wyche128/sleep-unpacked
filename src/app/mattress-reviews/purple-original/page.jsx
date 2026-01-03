'use client';

import React, { useEffect, useState, useRef } from 'react';
import Header from '../../../components/Header';
import { Microscope, Activity, Shield, AlertTriangle, FlaskConical, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement
);

const PurpleMattressReview = () => {
    // State for interactive lab
    const [weightProfile, setWeightProfile] = useState('average');
    const [foundationType, setFoundationType] = useState('solid');
    const [chartLoaded, setChartLoaded] = useState(false);

    // Refs for chart instances
    const saggingChartRef = useRef(null);
    const firmnessChartRef = useRef(null);
    const coolingChartRef = useRef(null);
    const warrantyChartRef = useRef(null);

    // Data Models
    const longevityData = {
        light: {
            sagging: [0, 2, 5, 8, 10, 12],
            firmness: [6.0, 5.9, 5.8, 5.7, 5.6, 5.5],
            cooling: [100, 99, 98, 98, 97, 97]
        },
        average: {
            sagging: [0, 4, 9, 14, 19, 24],
            firmness: [6.0, 5.8, 5.6, 5.4, 5.2, 5.0],
            cooling: [100, 99, 97, 96, 95, 94]
        },
        heavy: {
            sagging: [1, 8, 16, 25, 35, 45],
            firmness: [6.0, 5.6, 5.2, 4.8, 4.5, 4.2],
            cooling: [100, 98, 96, 94, 92, 90]
        },
        couple: {
            sagging: [0, 5, 11, 17, 23, 30],
            firmness: [6.0, 5.7, 5.4, 5.1, 4.9, 4.7],
            cooling: [100, 98, 97, 95, 94, 93]
        }
    };

    const foundationModifiers = {
        solid: 1.0,
        slats: 1.1,
        box: 2.5
    };

    const tableData = [
        { duration: "36 Months", gen: "Gen 2", profile: "Couple (180+150lb)", indent: '0.6"', cooling: "Same", warranty: "Denied" },
        { duration: "14 Months", gen: "Gen 3", profile: "Single (210lb)", indent: '0.2"', cooling: "Excellent", warranty: "N/A" },
        { duration: "62 Months", gen: "Gen 1", profile: "Single (140lb)", indent: '1.2"', cooling: "Worse", warranty: "Approved" },
        { duration: "24 Months", gen: "Gen 3", profile: "Couple (Mixed)", indent: '0.4"', cooling: "Same", warranty: "N/A" },
        { duration: "48 Months", gen: "Gen 2", profile: "Single (175lb)", indent: '0.8"', cooling: "Same", warranty: "Pending" },
    ];

    // Load Chart.js (Keeping standard import/register, removing dynamic script load for Next.js stability)
    useEffect(() => {
        setChartLoaded(true);
    }, []);

    // Initialize/Update Charts
    useEffect(() => {
        if (!chartLoaded) return;

        // Using ChartJS directly instead of window.Chart if installed

        // Colors
        const COLOR_BRONZE = '#cca43b';
        const COLOR_BRONZE_LIGHT = 'rgba(204, 164, 59, 0.1)';
        const COLOR_TEXT = '#e5e5e5';
        const COLOR_GRID_LINES = 'rgba(255, 255, 255, 0.1)';

        ChartJS.defaults.color = COLOR_TEXT;
        ChartJS.defaults.borderColor = COLOR_GRID_LINES;
        ChartJS.defaults.font.family = 'Inter';

        const ctxSagging = document.getElementById('saggingChart')?.getContext('2d');
        const ctxFirmness = document.getElementById('firmnessChart')?.getContext('2d');
        const ctxCooling = document.getElementById('coolingChart')?.getContext('2d');
        const ctxWarranty = document.getElementById('warrantyChart')?.getContext('2d');

        // Destroy existing for update
        if (saggingChartRef.current) saggingChartRef.current.destroy();
        if (firmnessChartRef.current) firmnessChartRef.current.destroy();
        if (coolingChartRef.current) coolingChartRef.current.destroy();
        if (warrantyChartRef.current) warrantyChartRef.current.destroy();

        if (ctxSagging && ctxFirmness && ctxCooling && ctxWarranty) {

            const baseData = longevityData[weightProfile];
            const modifier = foundationModifiers[foundationType];
            const modifiedSagging = baseData.sagging.map(val => Math.min(100, val * modifier));

            // 1. Sagging
            saggingChartRef.current = new ChartJS(ctxSagging, {
                type: 'line',
                data: {
                    labels: ['New', '1 Year', '2 Years', '3 Years', '4 Years', '5 Years'],
                    datasets: [{
                        label: 'Risk of >1.0" Sagging',
                        data: modifiedSagging,
                        borderColor: COLOR_BRONZE,
                        backgroundColor: COLOR_BRONZE_LIGHT,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: COLOR_BRONZE
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            title: { display: true, text: 'Probability (%)', color: COLOR_TEXT }
                        },
                        x: { ticks: { color: COLOR_TEXT } }
                    }
                }
            });

            // 2. Firmness
            firmnessChartRef.current = new ChartJS(ctxFirmness, {
                type: 'bar',
                data: {
                    labels: ['New', '1 Year', '2 Years', '3 Years', '4 Years', '5 Years'],
                    datasets: [{
                        label: 'Projected Firmness (10=Firm)',
                        data: baseData.firmness,
                        backgroundColor: COLOR_BRONZE,
                        borderColor: COLOR_BRONZE,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            min: 1,
                            max: 10,
                            title: { display: true, text: 'Firmness Level (1-10)', color: COLOR_TEXT }
                        }
                    }
                }
            });

            // 3. Cooling
            coolingChartRef.current = new ChartJS(ctxCooling, {
                type: 'line',
                data: {
                    labels: ['New', '1 Year', '2 Years', '3 Years', '4 Years', '5 Years'],
                    datasets: [{
                        label: 'Purple Grid',
                        data: baseData.cooling,
                        borderColor: COLOR_BRONZE,
                        tension: 0.3,
                        pointBackgroundColor: COLOR_BRONZE
                    }, {
                        label: 'Memory Foam Avg',
                        data: [100, 95, 90, 85, 78, 70],
                        borderColor: '#525252',
                        borderDash: [5, 5],
                        tension: 0.3,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            min: 60,
                            max: 105,
                            title: { display: true, text: 'Cooling Efficiency Index', color: COLOR_TEXT }
                        }
                    }
                }
            });

            // 4. Warranty
            warrantyChartRef.current = new ChartJS(ctxWarranty, {
                type: 'doughnut',
                data: {
                    labels: ['Approved', 'Denied (Threshold)', 'Denied (Foundation)', 'Pending'],
                    datasets: [{
                        data: [35, 40, 20, 5],
                        backgroundColor: [
                            '#22c55e', // Green
                            '#ef4444', // Red
                            '#f97316', // Orange
                            '#525252'  // Gray
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'right', labels: { color: COLOR_TEXT } }
                    }
                }
            });
        }

    }, [chartLoaded, weightProfile, foundationType]);


    return (
        <div className="bg-jet-black text-alabaster-grey font-sans antialiased min-h-screen">
            <Header />

            {/* Custom Styles */}
            <style>{`
                .font-serif { font-family: 'Merriweather', serif; }
                .font-sans { font-family: 'Inter', sans-serif; }
                .glass-panel {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
            `}</style>

            {/* Page Header */}
            <header className="relative pt-16 pb-12 bg-gradient-to-b from-jet-black via-jet-black to-jet-black border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-2 text-golden-bronze font-bold text-sm uppercase tracking-wider">
                            <Microscope size={16} /> Deep Longevity Research
                        </div>
                        <h1 className="text-3xl font-bold font-serif text-white">Purple Original Mattress</h1>
                        <p className="text-alabaster-grey/70 mt-1">Subject: All Generations (2015-Present)</p>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-right">
                            <div className="text-xs uppercase tracking-wider text-golden-bronze mb-1">Status</div>
                            <div className="font-semibold text-white flex items-center justify-end gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Living Review
                            </div>
                        </div>
                        <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                            <div className="text-xs uppercase tracking-wider text-golden-bronze mb-1">Confidence</div>
                            <div className="text-xl font-bold text-white">High (A-)</div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

                {/* Executive Summary */}
                <section className="bg-graphite rounded-xl p-8 border-l-4 border-golden-bronze shadow-lg">
                    <h2 className="text-2xl font-bold text-white mb-4 font-serif">Executive Summary: 5-Year Projection</h2>
                    <p className="text-alabaster-grey mb-8">
                        Based on verified owner data, longitudinal lab re-tests, and material fatigue analysis, here are the headline longevity findings for the Purple Original Mattress.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Metric 1 */}
                        <div className="glass-panel p-5 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-semibold text-alabaster-grey/70">Sagging Risk (3yr)</span>
                                <Activity className="text-golden-bronze" size={18} />
                            </div>
                            <div className="text-3xl font-bold text-white">12.4%</div>
                            <div className="text-xs text-alabaster-grey/50 mt-1">Likelihood of &gt;1.0" indentation</div>
                        </div>

                        {/* Metric 2 */}
                        <div className="glass-panel p-5 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-semibold text-alabaster-grey/70">Firmness Drift (5yr)</span>
                                <span className="text-golden-bronze font-serif italic">f</span>
                            </div>
                            <div className="text-3xl font-bold text-white">-1.5 pts</div>
                            <div className="text-xs text-alabaster-grey/50 mt-1">Softening on 1-10 scale</div>
                        </div>

                        {/* Metric 3 */}
                        <div className="glass-panel p-5 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-semibold text-alabaster-grey/70">Grid Resilience</span>
                                <Shield className="text-green-500" size={18} />
                            </div>
                            <div className="text-3xl font-bold text-white">High</div>
                            <div className="text-xs text-alabaster-grey/50 mt-1">Polymer fatigue remains low</div>
                        </div>

                        {/* Metric 4 */}
                        <div className="glass-panel p-5 rounded-lg border-red-500/30">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-semibold text-alabaster-grey/70">Major Risk Factor</span>
                                <AlertTriangle className="text-red-500" size={18} />
                            </div>
                            <div className="text-xl font-bold text-white mt-1">Edge Support</div>
                            <div className="text-xs text-alabaster-grey/50 mt-1">Significant decline &gt;3 years</div>
                        </div>

                    </div>
                </section>

                {/* Model Generation Map */}
                <section className="bg-graphite rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-white mb-6 font-serif">Model-Year Map & Generations</h2>

                    <div className="relative border-l-2 border-white/10 ml-3 space-y-10 py-2">
                        {/* Gen 3 */}
                        <div className="ml-8 relative">
                            <span className="absolute -left-[41px] top-1 bg-golden-bronze w-4 h-4 rounded-full border-4 border-jet-black"></span>
                            <h3 className="font-bold text-xl text-white">Gen 3 (2022-Present)</h3>
                            <p className="text-sm text-golden-bronze mb-2">"New Original"</p>
                            <p className="text-sm text-alabaster-grey">Updated SoftFlex Cover, enhanced edge foam rails. Current focus of 1-year data.</p>
                        </div>

                        {/* Gen 2 */}
                        <div className="ml-8 relative">
                            <span className="absolute -left-[41px] top-1 bg-white/50 w-4 h-4 rounded-full border-4 border-jet-black"></span>
                            <h3 className="font-bold text-xl text-white">Gen 2 (2018-2021)</h3>
                            <p className="text-sm text-golden-bronze mb-2">"The Expansion Era"</p>
                            <p className="text-sm text-alabaster-grey">Introduction of side panels. Primary source of 3-5 year data. High variation in base foam density reports.</p>
                        </div>

                        {/* Gen 1 */}
                        <div className="ml-8 relative">
                            <span className="absolute -left-[41px] top-1 bg-white/20 w-4 h-4 rounded-full border-4 border-jet-black"></span>
                            <h3 className="font-bold text-xl text-white">Gen 1 (2015-2017)</h3>
                            <p className="text-sm text-golden-bronze mb-2">"Kickstarter / Legacy"</p>
                            <p className="text-sm text-alabaster-grey">Original white knit cover (less stretchy). Mostly aged out of primary analysis.</p>
                        </div>
                    </div>
                </section>

                {/* Interactive Lab */}
                <section className="bg-[#1a1a1a] rounded-xl shadow-2xl overflow-hidden border border-white/10">
                    <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h2 className="text-2xl font-bold text-golden-bronze flex items-center gap-3 font-serif">
                                <FlaskConical /> Longevity Lab
                            </h2>
                            <p className="text-alabaster-grey/60 text-sm mt-1">Simulate wear time based on your sleeper profile.</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <select
                                className="bg-jet-black border border-white/20 text-white text-sm rounded-lg focus:ring-golden-bronze focus:border-golden-bronze p-2.5 outline-none"
                                value={weightProfile}
                                onChange={(e) => setWeightProfile(e.target.value)}
                            >
                                <option value="light">Lightweight (&lt; 150 lbs)</option>
                                <option value="average">Average (150 - 200 lbs)</option>
                                <option value="heavy">Heavy (&gt; 200 lbs)</option>
                                <option value="couple">Couple (Mixed Weights)</option>
                            </select>

                            <select
                                className="bg-jet-black border border-white/20 text-white text-sm rounded-lg focus:ring-golden-bronze focus:border-golden-bronze p-2.5 outline-none"
                                value={foundationType}
                                onChange={(e) => setFoundationType(e.target.value)}
                            >
                                <option value="solid">Solid Platform</option>
                                <option value="slats">Slats (Proper Spacing)</option>
                                <option value="box">Box Spring (Not Recommended)</option>
                            </select>
                        </div>
                    </div>

                    <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Chart 1 */}
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4">Probability of Sagging (&gt;1.0")</h3>
                            <div className="relative h-[300px] w-full">
                                <canvas id="saggingChart"></canvas>
                            </div>
                        </div>

                        {/* Chart 2 */}
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4">Firmness Drift (1-10 Scale)</h3>
                            <div className="relative h-[300px] w-full">
                                <canvas id="firmnessChart"></canvas>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Cooling */}
                    <section className="lg:col-span-2 bg-graphite rounded-xl p-8 shadow-sm">
                        <h2 className="text-xl font-bold text-white mb-4 font-serif">Cooling Efficiency Over Time</h2>
                        <p className="text-alabaster-grey mb-6 text-sm">
                            Unlike foam mattresses which tend to trap more heat as foams compress and lose porosity over years, the Purple Grid's open structure maintains cooling efficiency remarkably well.
                        </p>
                        <div className="relative h-[250px] w-full">
                            <canvas id="coolingChart"></canvas>
                        </div>
                    </section>

                    {/* Warranty */}
                    <section className="bg-graphite rounded-xl p-8 shadow-sm">
                        <h2 className="text-xl font-bold text-white mb-4 font-serif">Warranty Claims</h2>
                        <div className="relative h-[200px] w-full mb-6">
                            <canvas id="warrantyChart"></canvas>
                        </div>
                        <ul className="space-y-4 text-sm text-alabaster-grey">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                                <span><strong>Approvals:</strong> Most successful claims provide clear photos with a ruler showing &gt;1.0" indentation.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                                <span><strong>Denials:</strong> Common reasons include "normal softening" or using old box springs.</span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Data Appendix */}
                <section className="bg-graphite rounded-xl p-8 shadow-sm overflow-hidden border border-white/5">
                    <h2 className="text-xl font-bold text-white mb-4 font-serif">Verified Owner Data Appendix</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-alabaster-grey">
                            <thead className="text-xs text-golden-bronze uppercase bg-white/5">
                                <tr>
                                    <th className="px-6 py-4 rounded-tl-lg">Ownership Duration</th>
                                    <th className="px-6 py-4">Generation</th>
                                    <th className="px-6 py-4">Sleeper Profile</th>
                                    <th className="px-6 py-4">Indent</th>
                                    <th className="px-6 py-4">Cooling</th>
                                    <th className="px-6 py-4 rounded-tr-lg">Warranty Claim</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, idx) => (
                                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">{row.duration}</td>
                                        <td className="px-6 py-4">{row.gen}</td>
                                        <td className="px-6 py-4">{row.profile}</td>
                                        <td className="px-6 py-4">{row.indent}</td>
                                        <td className="px-6 py-4">{row.cooling}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${row.warranty === 'Approved' ? 'bg-green-500/20 text-green-500' :
                                                row.warranty === 'Denied' ? 'bg-red-500/20 text-red-500' :
                                                    'text-alabaster-grey/50'
                                                }`}>
                                                {row.warranty}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default PurpleMattressReview;
