'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line, Bar, Radar, Doughnut } from 'react-chartjs-2';
import Link from 'next/link';
import { Menu, X, Brain, BatteryCharging, Zap } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    RadialLinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const StateOfSleep = () => {
    const [currentView, setCurrentView] = useState('overview');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [trendMetric, setTrendMetric] = useState('duration');

    // Chart Options & Styles - Brand Palette
    // Jet Black: #1A1A1A, Golden Bronze: #9F8152, Graphite: #4A4A4A, Alabaster: #F0F0F0
    // Accents mapped to brand:
    // Violet -> Golden Bronze (#9F8152) or a secondary Dark Bronze
    // Emerald -> A muted green or keep emerald if semantic

    const colors = {
        jetBlack: '#1A1A1A',
        goldenBronze: '#9F8152',
        goldenBronzeLight: 'rgba(159, 129, 82, 0.2)',
        graphite: '#4A4A4A',
        alabaster: '#F0F0F0',
        white: '#FFFFFF',
        slate: '#64748b'
    };

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: colors.jetBlack,
                titleColor: colors.white,
                bodyColor: '#e2e8f0',
                padding: 10,
                cornerRadius: 8,
                displayColors: false
            }
        },
        scales: {
            y: {
                grid: { color: '#f1f5f9' },
                ticks: { color: colors.graphite, font: { family: 'Inter' } }
            },
            x: {
                grid: { display: false },
                ticks: { color: colors.graphite, font: { family: 'Inter' } }
            }
        }
    };

    // Data for Overview Chart
    const trendData = {
        labels: ['1940', '1960', '1980', '2000', '2020', '2025'],
        datasets: [{
            label: trendMetric === 'duration' ? 'Average Hours of Sleep' : 'Sleep Quality Index',
            data: trendMetric === 'duration'
                ? [7.9, 7.5, 7.1, 6.9, 6.4, 6.3]
                : [80, 75, 70, 65, 55, 50],
            borderColor: colors.goldenBronze,
            backgroundColor: colors.goldenBronzeLight,
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: colors.white,
            pointBorderColor: colors.goldenBronze,
            pointBorderWidth: 2,
            pointRadius: 4
        }]
    };

    // Data for Age Chart
    const ageData = {
        labels: ['Newborn', 'Toddler', 'Preschool', 'School Age', 'Teen', 'Adult', 'Elderly'],
        datasets: [{
            label: 'Recommended Hours',
            data: [15.5, 12.5, 11.5, 10, 9, 7.5, 7],
            backgroundColor: [
                '#EBE4D5', // Very light bronze tint
                '#DCCEB4',
                '#CDB993',
                '#BEA372',
                '#9F8152', // Base Bronze
                '#7A633F',
                '#55452C'
            ],
            borderRadius: 6
        }]
    };

    // Data for Stress Radar
    const stressData = {
        labels: ['Sleep Quality', 'Sleep Duration', 'Ease of Falling Asleep', 'Daytime Energy', 'Mood Stability'],
        datasets: [{
            label: 'Low Stress',
            data: [90, 85, 95, 88, 92],
            borderColor: '#10b981', // Emerald for positive
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            pointBackgroundColor: '#10b981'
        }, {
            label: 'High Stress',
            data: [45, 55, 30, 40, 35],
            borderColor: '#ef4444', // Red for negative
            backgroundColor: 'rgba(239, 68, 68, 0.2)',
            pointBackgroundColor: '#ef4444'
        }]
    };

    // Data for Disorders Doughnut
    const disorderData = {
        labels: ['Short-term Insomnia', 'Sleep Apnea', 'Chronic Insomnia', 'Restless Legs', 'Narcolepsy'],
        datasets: [{
            data: [30, 26, 10, 10, 1],
            backgroundColor: [
                colors.goldenBronze,
                '#4A4A4A', // Graphite
                '#A3A3A3', // Grey
                '#D4D4D4', // Light Grey
                '#1A1A1A'  // Jet Black
            ],
            borderWidth: 0,
            hoverOffset: 4
        }]
    };


    const NavItem = ({ id, label, icon, active }) => (
        <button
            onClick={() => {
                setCurrentView(id);
                setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left px-6 py-4 text-sm font-medium transition-all duration-200 flex items-center border-l-4 ${active
                ? 'bg-jet-black text-white border-golden-bronze'
                : 'text-graphite hover:bg-alabaster border-transparent'
                }`}
        >
            <span className="mr-3 text-lg">{icon}</span>
            {label}
        </button>
    );

    return (
        <div className="font-sans text-jet-black bg-white min-h-screen flex flex-col">
            <Header />

            <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">

                {/* Mobile Header for Dashboard (if needed, but main Header is present) */}
                <div className="md:hidden bg-alabaster p-4 flex justify-between items-center border-b border-gray-200">
                    <span className="font-bold text-jet-black">Report Navigation</span>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Sidebar Navigation */}
                <aside className={`
                    bg-white w-full md:w-72 md:flex flex-col border-r border-alabaster z-40 transition-all duration-300 absolute md:relative h-full
                    ${isMobileMenuOpen ? 'flex top-0 pt-16 md:pt-0' : 'hidden'}
                `}>
                    <div className="hidden md:block p-8 border-b border-alabaster">
                        <h1 className="text-xl font-bold tracking-tight text-jet-black">
                            State of Sleep <span className="text-golden-bronze">2025</span>
                        </h1>
                        <p className="text-xs text-graphite mt-1 uppercase tracking-widest">Interactive Report</p>
                    </div>

                    <nav className="flex-1 overflow-y-auto py-4">
                        <NavItem id="overview" label="Executive Summary" icon="📊" active={currentView === 'overview'} />
                        <NavItem id="demographics" label="Demographics & Age" icon="👥" active={currentView === 'demographics'} />
                        <NavItem id="health" label="Health & Stress" icon="🧠" active={currentView === 'health'} />
                        <NavItem id="disorders" label="Sleep Disorders" icon="📉" active={currentView === 'disorders'} />
                    </nav>

                    <div className="p-6 border-t border-alabaster bg-alabaster/30">
                        <div className="bg-golden-bronze/10 p-4 rounded-lg border border-golden-bronze/20">
                            <h4 className="text-xs font-bold text-golden-bronze uppercase mb-2">Key Takeaway</h4>
                            <p className="text-xs text-jet-black leading-relaxed">
                                Prioritizing sleep is not a luxury. It’s a proven strategy for learning and resilience. (Ensure your <Link href="/top-picks" className="text-golden-bronze hover:underline">mattress supports deep rest</Link>.)
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 h-full overflow-y-auto bg-alabaster/50 p-4 md:p-8 lg:p-12">

                    {/* View: Executive Summary */}
                    {currentView === 'overview' && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div>
                                <h2 className="text-3xl font-bold text-jet-black mb-2">State of Sleep 2025</h2>
                                <p className="text-graphite max-w-3xl">
                                    An interactive exploration of the "110+ Sleep Statistics and Facts" report. Explore how Americans sleep, the impact of stress, and the prevalence of disorders.
                                </p>
                            </div>

                            {/* KPI Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { label: 'Insufficient Sleep', value: '33%', sub: '1 in 3 Adults', desc: 'Report frequent sleep deprivation.', color: 'text-red-500' },
                                    { label: 'Sleep Disorders', value: '70M', sub: 'Americans Affected', desc: 'Estimated undiagnosed cases.', color: 'text-golden-bronze' },
                                    { label: 'Avg. Time to Dream', value: '90m', sub: 'REM Cycle Onset', desc: <span>Time after falling asleep. (See <Link href="/sleep-guides/sleep-cycles-dreaming" className="underline hover:text-jet-black">cycles guide</Link>.)</span>, color: 'text-jet-black' },
                                    { label: 'Nap Sweet Spot', value: '20m', sub: 'Power Nap', desc: 'Avoids sleep inertia.', color: 'text-green-600' }
                                ].map((kpi, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-alabaster hover:shadow-md transition-shadow">
                                        <div className="text-xs text-graphite font-bold uppercase tracking-wider">{kpi.label}</div>
                                        <div className="mt-2 text-4xl font-bold text-jet-black">{kpi.value}</div>
                                        <div className={`mt-1 text-sm font-bold ${kpi.color}`}>{kpi.sub}</div>
                                        <p className="mt-2 text-xs text-gray-400">{kpi.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Main Chart Area */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-alabaster">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-lg font-bold text-jet-black">Global Sleep Trends</h3>
                                        <select
                                            className="text-sm border-gray-200 rounded-md p-1 bg-white text-jet-black focus:ring-golden-bronze focus:border-golden-bronze"
                                            value={trendMetric}
                                            onChange={(e) => setTrendMetric(e.target.value)}
                                        >
                                            <option value="duration">Avg Duration</option>
                                            <option value="quality">Sleep Quality</option>
                                        </select>
                                    </div>
                                    <div className="h-[300px] w-full">
                                        <Line data={trendData} options={commonOptions} />
                                    </div>
                                    <p className="mt-4 text-xs text-gray-400 italic text-center">Data approximated from NapLab industry statistics reports.</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster flex flex-col justify-center">
                                    <div className="mb-4">
                                        <span className="bg-golden-bronze/10 text-golden-bronze text-xs font-bold px-2 py-1 rounded-full uppercase">Did You Know?</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-jet-black mb-2">The "Empty USB" Theory</h3>
                                    <p className="text-graphite text-sm leading-relaxed mb-4">
                                        Your hippocampus acts like a USB stick with limited storage. Sleep transfers memories to the cortex (hard drive), clearing space for new learning. Without it, new memories simply "bounce off."
                                    </p>
                                    <button onClick={() => setCurrentView('health')} className="text-golden-bronze text-sm font-bold hover:underline flex items-center self-start">
                                        Explore Brain Mechanics <span className="ml-1">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* View: Demographics */}
                    {currentView === 'demographics' && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div>
                                <h2 className="text-3xl font-bold text-jet-black mb-2">Demographics & Age</h2>
                                <p className="text-graphite">How sleep needs and patterns change across a lifetime.</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster">
                                    <h3 className="text-lg font-bold text-jet-black mb-6">Recommended Hours by Age</h3>
                                    <div className="h-[350px]">
                                        <Bar data={ageData} options={commonOptions} />
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster">
                                    <h3 className="text-lg font-bold text-jet-black mb-6">Teen Sleep Crisis</h3>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-alabaster/30 rounded-lg border-l-4 border-red-500">
                                            <h4 className="font-bold text-jet-black text-sm">70% of High Schoolers</h4>
                                            <p className="text-xs text-graphite mt-1">Report getting insufficient sleep (less than 8 hours).</p>
                                        </div>
                                        <div className="p-4 bg-alabaster/30 rounded-lg border-l-4 border-orange-400">
                                            <h4 className="font-bold text-jet-black text-sm">Biological Shift</h4>
                                            <p className="text-xs text-graphite mt-1">Teens experience a natural circadian shift, making it harder to fall asleep before 11 PM, conflicting with early school start times.</p>
                                        </div>
                                        <div className="p-4 bg-alabaster/30 rounded-lg border-l-4 border-green-500">
                                            <h4 className="font-bold text-jet-black text-sm">Impact on Grades</h4>
                                            <p className="text-xs text-graphite mt-1">Students with C's, D's, and F's get about 25 fewer minutes of sleep per night than A and B students.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* View: Health */}
                    {currentView === 'health' && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div>
                                <h2 className="text-3xl font-bold text-jet-black mb-2">Health, Stress & Memory</h2>
                                <p className="text-graphite">The biological imperative of rest for cognitive function.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { icon: <Brain size={24} />, title: "Memory Consolidation", text: "During deep sleep, the brain replays the day's events, strengthening neural connections. It's like a crew clearing a path in a forest.", color: "text-golden-bronze", bg: "bg-golden-bronze/10" },
                                    { icon: <BatteryCharging size={24} />, title: "Synaptic Pruning", text: "Sleep allows the glymphatic system to flush out neurotoxins and metabolic waste products. It's literally 'taking out the trash.'", color: "text-blue-600", bg: "bg-blue-50" },
                                    { icon: <Zap size={24} />, title: "Stress Correlation", text: <span>High cortisol levels inhibit sleep, creating a feedback loop. 43% of adults report that stress has caused them to lie awake at night. (See our <Link href="/sleep-guides/sleep-stress" className="text-golden-bronze hover:underline">Stress Guide</Link>.)</span>, color: "text-red-600", bg: "bg-red-50" }
                                ].map((card, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-alabaster">
                                        <div className={`h-12 w-12 rounded-full ${card.bg} ${card.color} flex items-center justify-center mb-4`}>
                                            {card.icon}
                                        </div>
                                        <h3 className="font-bold text-jet-black mb-2">{card.title}</h3>
                                        <p className="text-sm text-graphite leading-relaxed">{card.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster">
                                <h3 className="text-lg font-bold text-jet-black mb-6">Impact of Stress on Sleep Quality</h3>
                                <div className="h-[400px]">
                                    <Radar data={stressData} options={{
                                        ...commonOptions,
                                        scales: {
                                            r: {
                                                angleLines: { color: '#f1f5f9' },
                                                grid: { color: '#e2e8f0' },
                                                pointLabels: { font: { size: 12, family: 'Inter', weight: 'bold' }, color: '#4A4A4A' }
                                            }
                                        }
                                    }} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* View: Disorders */}
                    {currentView === 'disorders' && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div>
                                <h2 className="text-3xl font-bold text-jet-black mb-2">Sleep Disorders</h2>
                                <p className="text-graphite">Analyzing the prevalence of common sleep issues in the US.</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster flex flex-col items-center">
                                    <h3 className="text-lg font-bold text-jet-black mb-6 w-full text-left">Prevalence Breakdown</h3>
                                    <div className="h-[350px] w-full">
                                        <Doughnut data={disorderData} options={{
                                            ...commonOptions,
                                            cutout: '70%',
                                            plugins: {
                                                legend: {
                                                    display: true,
                                                    position: 'bottom',
                                                    labels: { usePointStyle: true, boxWidth: 8, padding: 20 }
                                                }
                                            }
                                        }} />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { title: "Insomnia", stat: "30% of adults", desc: "Short-term insomnia affects about 30% of adults. It is the most common sleep disorder, often triggered by stress or environment.", color: "border-golden-bronze" },
                                        { title: "Sleep Apnea", stat: "26% of adults", desc: "Estimated to affect 26% of adults between 30 and 70 years old. It is significantly underdiagnosed.", color: "border-gray-800" },
                                        { title: "Cost of Poor Sleep", stat: "$150 Billion", desc: "Undiagnosed sleep apnea alone costs America $150 billion annually. Lack of sleep is linked to higher risks of hypertension, diabetes, and depression.", color: "border-gray-400" }
                                    ].map((item, i) => (
                                        <div key={i} className={`bg-white p-6 rounded-xl shadow-sm border border-alabaster border-l-8 ${item.color}`}>
                                            <h3 className="text-xl font-bold text-jet-black">{item.title}</h3>
                                            <p className="text-graphite mt-2 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
};

export default StateOfSleep;
