'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '../../../components/Header';
import Link from 'next/link';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { CheckCircle, AlertTriangle, ArrowDown } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const SnoringGuide = () => {
    const [activeTab, setActiveTab] = useState('gravity');
    const dashboardRef = useRef(null);

    // --- Data Store ---
    const appData = {
        prevalence: {
            labels: ['Non-Snorers', 'Occasional Snorers', 'Habitual Snorers'],
            datasets: [{
                data: [30, 45, 25],
                backgroundColor: ['#e2e8f0', '#60a5fa', '#1e40af'],
                borderWidth: 0,
            }]
        },
        positions: {
            back: [2, 9, 8],     // Low reduction, good spine, good neck
            side: [9, 8, 8],     // Great reduction, good spine, good neck
            stomach: [10, 2, 1]  // Best reduction, bad spine, bad neck
        },
        alcohol: {
            labels: ['4 Hours Before', '3 Hours Before', '2 Hours Before', '1 Hour Before', 'Bedtime'],
            datasets: [{
                label: 'Throat Muscle Tone (%)',
                data: [90, 85, 70, 50, 30],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#ef4444'
            }]
        }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // --- Sub-components for Dashboard ---

    const GravityContent = () => {
        const [chartData, setChartData] = useState({
            labels: ['Snore Reduction', 'Spinal Health', 'Neck Comfort'],
            datasets: [{
                label: 'Side Sleeping Score (1-10)',
                data: appData.positions.side,
                backgroundColor: ['#22c55e', '#22c55e', '#22c55e'],
            }]
        });
        const [desc, setDesc] = useState({
            title: "Side Sleeping: The Gold Standard",
            text: "Mechanically keeps the airway open.",
            style: "bg-green-50 border-green-100 text-green-900"
        });

        const updateChart = (pos) => {
            let colors, title, text, style;
            if (pos === 'side') {
                colors = ['#22c55e', '#22c55e', '#22c55e'];
                title = "Side Sleeping: The Gold Standard";
                text = "Mechanically keeps the airway open.";
                style = "bg-green-50 border-green-100 text-green-900";
            } else if (pos === 'back') {
                colors = ['#ef4444', '#22c55e', '#22c55e'];
                title = "Back Sleeping: The Worst Offender";
                text = "Gravity pulls the tongue back, narrowing the airway.";
                style = "bg-red-50 border-red-100 text-red-900";
            } else { // stomach
                colors = ['#eab308', '#ef4444', '#ef4444'];
                title = "Stomach Sleeping: A Dangerous Fix";
                text = "Stops snoring, but forces neck twisting and flattens the spine.";
                style = "bg-yellow-50 border-yellow-100 text-yellow-900";
            }

            setChartData({
                labels: ['Snore Reduction', 'Spinal Health', 'Neck Comfort'],
                datasets: [{
                    label: `${pos.charAt(0).toUpperCase() + pos.slice(1)} Sleeping Score`,
                    data: appData.positions[pos],
                    backgroundColor: colors,
                }]
            });
            setDesc({ title, text, style });
        };

        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-fade-in">
                <div>
                    <h3 className="text-2xl font-bold text-jet-black mb-4">The Physics of Posture</h3>
                    <p className="text-graphite mb-6 leading-relaxed">
                        When you choose your <Link href="/sleep-guides/healthiest-sleep-position" className="text-golden-bronze hover:underline">sleep position</Link>, gravity acts as an enemy to your airway. It pulls the heavy tissues of the tongue and soft palate backward. As you drift into deep sleep, throat muscles relax, causing a collapse that generates the <Link href="/sleep-guides/what-causes-snoring" className="text-golden-bronze hover:underline">snoring sound</Link>.
                    </p>
                    <div className="space-y-4">
                        <h4 className="font-bold text-jet-black">Compare Positions:</h4>
                        <div className="flex gap-2">
                            <button onClick={() => updateChart('back')} className="flex-1 bg-alabaster-grey/50 hover:bg-alabaster-grey text-jet-black py-2 rounded font-medium transition-colors">Back</button>
                            <button onClick={() => updateChart('side')} className="flex-1 bg-jet-black hover:bg-jet-black/80 text-white py-2 rounded font-medium transition-colors">Side</button>
                            <button onClick={() => updateChart('stomach')} className="flex-1 bg-alabaster-grey/50 hover:bg-alabaster-grey text-jet-black py-2 rounded font-medium transition-colors">Stomach</button>
                        </div>
                        <div className={`p-4 rounded border ${desc.style} transition-all duration-300`}>
                            <strong>{desc.title}</strong>
                            <p className="text-sm mt-1">{desc.text}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative h-64 w-full">
                        <Bar
                            data={chartData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: { y: { beginAtZero: true, max: 10 } },
                                plugins: { legend: { display: false } }
                            }}
                        />
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-4">Trade-off Analysis: Airway vs. Skeletal Health</p>
                </div>
            </div>
        );
    };

    const ChemistryContent = () => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-fade-in">
            <div>
                <h3 className="text-2xl font-bold text-jet-black mb-4">The "Nightcap" Sabotage</h3>
                <p className="text-graphite mb-4 leading-relaxed">
                    Alcohol is a double agent. While it creates drowsiness, it induces a state of <strong>"hypotonia"</strong>—excessive muscle relaxation.
                </p>
                <p className="text-graphite mb-6 leading-relaxed">
                    This causes your throat muscles, which are already relaxed during sleep, to go completely slack. This removes your body's natural structural defense against airway obstruction, turning a quiet sleeper into a snorer.
                </p>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                    <h4 className="font-bold text-yellow-800">The Fix: Timing is Everything</h4>
                    <p className="text-sm text-yellow-700 mt-1">Aim to stop consuming alcohol at least 2-3 hours before bedtime to allow the relaxing effects to wear off.</p>
                </div>
            </div>
            <div>
                <div className="relative h-64 w-full">
                    <Line
                        data={appData.alcohol}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: { y: { beginAtZero: true, max: 100, title: { display: true, text: 'Muscle Tone %' } } },
                            plugins: {
                                legend: { display: false },
                                title: { display: true, text: 'Muscle Relaxation Effect of Alcohol' }
                            }
                        }}
                    />
                </div>
                <p className="text-center text-xs text-slate-400 mt-4">Impact of Alcohol Timing on Throat Muscle Tone</p>
            </div>
        </div>
    );

    const GeometryContent = () => (
        <div className="flex flex-col items-center justify-center text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-jet-black mb-4">The 4-Inch Angle</h3>
            <p className="text-graphite max-w-2xl mb-8 leading-relaxed">
                If you can't sleep on your side, and stomach sleeping hurts your back, the solution is vertical. Raising the head of the bed frame (not just pillows) by just 4 inches creates a "zero gravity" effect.
            </p>

            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-alabaster-grey p-6 rounded-xl shadow-sm">
                    <div className="text-5xl mb-4">🛏️</div>
                    <h4 className="font-bold text-lg text-jet-black mb-2">Flat Bed</h4>
                    <p className="text-sm text-graphite">Gravity pulls tongue directly back over the windpipe. High obstruction risk.</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm transform md:scale-105 transition-transform">
                    <div className="text-5xl mb-4 transform -rotate-6">📐</div>
                    <h4 className="font-bold text-lg text-blue-900 mb-2">Elevated (4 inches)</h4>
                    <p className="text-sm text-blue-800">A subtle slope stops the tongue from falling back. Airways remain patent (open) without position change.</p>
                </div>
            </div>

            <div className="mt-8 p-4 bg-alabaster-grey/50 rounded text-slate-500 text-sm italic">
                Piling up pillows often just strains the neck. Adjusting the frame or using a wedge is strictly better engineering.
            </div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <header className="bg-jet-black text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-jet-black to-slate-900 opacity-50"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        5 Surprising Fixes for Snoring
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-alabaster-grey mb-6">
                        It's Not Just Noise. <span className="text-golden-bronze">It's Physics.</span>
                    </p>
                    <p className="text-alabaster-grey text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                        Snoring is a mechanical signal that your airway is struggling against gravity and anatomy. Explore the surprising science behind the noise.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => scrollToSection('prevalence')}
                            className="bg-golden-bronze hover:bg-golden-bronze/90 text-white font-bold py-3 px-8 rounded-full transition shadow-lg flex items-center gap-2"
                        >
                            View the Stats <ArrowDown size={18} />
                        </button>
                        <button
                            onClick={() => scrollToSection('dashboard')}
                            className="bg-white text-jet-black hover:bg-alabaster-grey font-bold py-3 px-8 rounded-full transition shadow-lg"
                        >
                            Explore Fixes
                        </button>
                    </div>
                </div>
            </header>

            {/* Prevalence Section */}
            <section id="prevalence" className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-jet-black mb-4">You Are Not Alone</h2>
                        <p className="text-graphite max-w-2xl mx-auto text-lg">
                            Snoring is often dismissed as an annoyance, but the data shows it's a pervasive issue.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="bg-alabaster-grey/20 p-8 rounded-2xl border border-alabaster-grey">
                            <h3 className="text-xl font-bold text-jet-black mb-4">The Statistics</h3>
                            <p className="mb-6 text-graphite leading-relaxed">
                                According to sleep statistics, nearly half of all adults snore occasionally. However, a significant quarter of the population are "habitual offenders," meaning their snoring is a nightly occurrence that likely impacts their sleep quality.
                            </p>
                            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                                <p className="text-blue-900 font-semibold italic">"Snoring is actually a mechanical signal from your body."</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-alabaster-grey h-[350px] relative">
                            <Doughnut
                                data={appData.prevalence}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: { position: 'bottom' },
                                        title: { display: true, text: 'Snoring Prevalence in Adults' }
                                    }
                                }}
                            />
                            <p className="text-center text-xs text-slate-400 mt-2 absolute bottom-2 w-full left-0">Data Source: General Adult Population Statistics</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mechanics Dashboard */}
            <section id="dashboard" className="py-20 px-6 bg-alabaster-grey/30">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-jet-black mb-4">The Mechanics of Silence</h2>
                        <p className="text-graphite max-w-3xl mx-auto">
                            Explore the three primary factors that influence airway obstruction. Click the tabs below to dive into the physics of position, the chemistry of habits, and the geometry of your bed.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center mb-8 gap-2">
                        {['gravity', 'chemistry', 'geometry'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-3 px-8 rounded-full font-semibold transition-all shadow-sm capitalize ${activeTab === tab
                                    ? 'bg-jet-black text-white ring-2 ring-jet-black ring-offset-2'
                                    : 'bg-white text-jet-black hover:bg-gray-50'
                                    }`}
                            >
                                {tab === 'gravity' ? '1. Gravity & Position' :
                                    tab === 'chemistry' ? '2. The "Nightcap" Effect' :
                                        '3. Elevation Geometry'}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div ref={dashboardRef} className="bg-white rounded-2xl shadow-xl p-6 md:p-10 min-h-[500px] border border-alabaster-grey">
                        {activeTab === 'gravity' && <GravityContent />}
                        {activeTab === 'chemistry' && <ChemistryContent />}
                        {activeTab === 'geometry' && <GeometryContent />}
                    </div>
                </div>
            </section>

            {/* Tennis Ball Hack */}
            <section className="py-20 px-6 bg-jet-black text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">The "Tennis Ball" Hack</h2>
                    <p className="text-xl text-alabaster-grey mb-12 max-w-2xl mx-auto">
                        Changing your sleep position is mentally difficult because you are unconscious. You need a physical deterrent.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 hover:bg-white/15 transition backdrop-blur-sm">
                            <div className="text-4xl mb-6">🎾</div>
                            <h3 className="text-xl font-bold mb-3 text-golden-bronze">The Concept</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">Sew a tennis ball into the back of your pajama top. It sounds like a prank, but it’s a legitimate behavior modification technique.</p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 hover:bg-white/15 transition backdrop-blur-sm">
                            <div className="text-4xl mb-6">⚙️</div>
                            <h3 className="text-xl font-bold mb-3 text-golden-bronze">The Mechanism</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">Every time you roll onto your back, the discomfort creates a tactile signal, forcing you to return to your side without fully waking up.</p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 hover:bg-white/15 transition backdrop-blur-sm">
                            <div className="text-4xl mb-6">🧠</div>
                            <h3 className="text-xl font-bold mb-3 text-golden-bronze">The Result</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">Over time, your body retrains its nocturnal posture, keeping your airway open by preventing gravity from collapsing soft tissues.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Summary Checklist */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10 text-jet-black">Your "Silence the Night" Action Plan</h2>
                    <div className="space-y-6">
                        {[
                            { title: "Rotate to your side", desc: "Prevent gravity from pulling the tongue backward into the airway.", type: "good" },
                            { title: "Rethink the Nightcap", desc: "Stop alcohol consumption 2-3 hours before bed to maintain throat muscle tone.", type: "good" },
                            { title: "Elevate the Bed", desc: "Raise the head of the frame by 4 inches to leverage gravity in your favor.", type: "good" },
                            { title: "Avoid the Stomach Trap", desc: "Don't trade snoring for neck pain. Stomach sleeping is a fix that backfires.", type: "warning" }
                        ].map((item, idx) => (
                            <div key={idx} className={`flex items-start p-6 rounded-xl border-l-4 shadow-sm ${item.type === 'good' ? 'bg-green-50 border-green-500' : 'bg-yellow-50 border-yellow-500'}`}>
                                <div className={`mr-4 text-xl ${item.type === 'good' ? 'text-green-600' : 'text-yellow-600'}`}>
                                    {item.type === 'good' ? <CheckCircle /> : <AlertTriangle />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-jet-black text-lg">{item.title}</h4>
                                    <p className="text-graphite mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <p className="text-xl font-medium text-jet-black italic mb-8">
                            "If your sleep environment is currently set up for aesthetics rather than airway alignment, what small change could you make tonight?"
                        </p>
                        <Link href="/top-picks" className="inline-flex items-center gap-2 text-golden-bronze font-bold hover:underline">
                            Ready for a better bed? See our Top Picks <ArrowDown className="rotate-270" size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SnoringGuide;
