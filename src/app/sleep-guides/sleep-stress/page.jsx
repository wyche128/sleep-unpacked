'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import Link from 'next/link';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Zap, Moon, Activity, BookOpen, Anchor, Heart } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const SleepStressGuide = () => {
    // --- State Management ---
    const [isStomachRevealed, setIsStomachRevealed] = useState(false);
    const [blanketMode, setBlanketMode] = useState('fight'); // 'fight' or 'rest'

    // --- Brand Palette ---
    const colors = {
        jetBlack: '#1A1A1A',
        goldenBronze: '#9F8152',
        goldenBronzeLight: 'rgba(159, 129, 82, 0.2)',
        graphite: '#4A4A4A',
        alabaster: '#F0F0F0',
        white: '#FFFFFF',
        slate: '#64748b',
        rose: '#f43f5e',
        teal: '#14b8a6',
        emerald: '#10b981'
    };

    // --- Chart Data & Options ---

    // 1. Quality Chart (Vertical Bar)
    const qualityData = {
        labels: ['Low Stress', 'High Stress'],
        datasets: [{
            label: '% Reporting Excellent Sleep',
            data: [33, 8],
            backgroundColor: [
                colors.goldenBronze,      // Brand Primary
                colors.rose       // Alert Color
            ],
            borderRadius: 8,
            barPercentage: 0.6
        }]
    };

    const chartOptions = {
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
                callbacks: {
                    label: (context) => context.parsed.y + (context.dataset.label.includes('%') ? '%' : '') + ' ' + context.dataset.label
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { display: false },
                ticks: { color: colors.graphite }
            },
            x: {
                grid: { display: false },
                ticks: { color: colors.graphite }
            }
        }
    };

    // 2. Reading vs Music Chart (Horizontal Bar)
    const readingData = {
        labels: ['Reading', 'Listening to Music', 'Drinking Tea', 'Taking a Walk'],
        datasets: [{
            label: 'Stress Reduction %',
            data: [68, 61, 54, 42],
            backgroundColor: [
                colors.teal,             // Highlight
                '#e2e8f0', '#e2e8f0', '#e2e8f0' // Muted Slate
            ],
            borderRadius: 4
        }]
    };

    const horizontalChartOptions = {
        ...chartOptions,
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                max: 80,
                grid: { display: true, color: '#f1f5f9' },
                ticks: { color: colors.graphite }
            },
            y: {
                grid: { display: false },
                ticks: { color: colors.graphite }
            }
        }
    };

    return (
        <div className="font-sans text-jet-black bg-alabaster/30 min-h-screen">
            <Header />

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 px-4 min-h-[50vh] flex items-center justify-center bg-jet-black overflow-hidden">
                {/* Abstract Elements */}
                <div className="absolute top-20 left-10 text-white opacity-5 text-9xl select-none font-serif">Z</div>
                <div className="absolute top-40 right-20 text-white opacity-5 text-8xl select-none font-serif">Z</div>

                <div className="relative max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-golden-bronze/10 text-golden-bronze text-xs font-bold tracking-wider uppercase border border-golden-bronze/20">
                        Sleep & Stress Analysis
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        The Sleep-Stress <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-bronze to-amber-200">
                            Vicious Cycle
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        You can't sleep because you're anxious. You're anxious because you can't sleep.
                        Generic advice isn't working. It's time to look at the data.
                    </p>
                    <div className="pt-6">
                        <a href="#stats" className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-200 bg-golden-bronze rounded-full hover:bg-white hover:text-jet-black hover:shadow-lg">
                            Break the Cycle
                        </a>
                        <div className="mt-6 text-sm">
                            <Link href="/top-picks" className="text-gray-400 hover:text-white hover:underline transition-colors">
                                Or upgrade your sleep system
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Main Content --- */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">

                {/* Intro Blurb */}
                <div className="bg-white rounded-3xl p-8 shadow-xl mb-12 text-center max-w-3xl mx-auto border border-alabaster">
                    <h2 className="text-xs font-bold text-golden-bronze tracking-widest uppercase mb-3">The Findings</h2>
                    <p className="text-2xl font-serif font-bold text-jet-black mb-4">6 Counter-Intuitive Truths</p>
                    <p className="text-graphite leading-relaxed">
                        Based on an analysis of over 110 sleep statistics and expert guides, we've distilled the most surprising
                        ways your brain processes stress during rest. These aren't your typical "drink chamomile tea" tips.
                    </p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* 1. THE ONE HOUR GAP (Quantitative) */}
                    <div id="stats" className="bg-white rounded-3xl p-8 shadow-sm border border-alabaster hover:shadow-md transition-shadow duration-300 flex flex-col">
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-rose-100 text-rose-600 p-2 rounded-lg"><Zap size={20} /></span>
                                <h3 className="text-xl font-bold text-jet-black">The "One-Hour" Gap</h3>
                            </div>
                            <p className="text-graphite text-sm">
                                Stress doesn't just lower quality; it actively steals time. High-stress adults lose an
                                average of <strong className="text-jet-black">one full hour</strong> of sleep per night.
                            </p>
                        </div>
                        <div className="flex-grow h-[300px]">
                            <Bar data={qualityData} options={chartOptions} />
                        </div>
                        <p className="text-xs text-center text-gray-400 mt-4 italic">Percentage of adults reporting "Excellent" sleep quality.</p>
                    </div>

                    {/* 2. STOMACH SLEEPING (Interactive Card) */}
                    <div
                        className="bg-white rounded-3xl p-8 shadow-sm border border-alabaster hover:shadow-md transition-shadow duration-300 flex flex-col cursor-pointer group"
                        onClick={() => setIsStomachRevealed(!isStomachRevealed)}
                    >
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-orange-100 text-orange-600 p-2 rounded-lg"><Activity size={20} /></span>
                                <h3 className="text-xl font-bold text-jet-black">The Anxiety Red Flag</h3>
                            </div>
                            <p className="text-graphite text-sm">
                                Your sleep position is a physical manifestation of your mental state. Are you sleeping on your stomach?
                            </p>
                        </div>

                        <div className={`flex-grow relative overflow-hidden rounded-2xl transition-all duration-500 border-2 ${isStomachRevealed ? 'bg-white border-orange-100' : 'bg-orange-50 border-transparent hover:border-orange-200'}`}>
                            {/* Front */}
                            <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 transform ${isStomachRevealed ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                                <div className="text-6xl mb-4 opacity-50">🛌</div>
                                <p className="font-serif text-xl font-bold text-jet-black">The Stomach Sleeper</p>
                                <p className="text-orange-600 text-sm font-semibold mt-2 animate-pulse">Click to reveal traits</p>
                            </div>

                            {/* Back */}
                            <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 transform ${isStomachRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
                                <ul className="space-y-3 text-left w-full max-w-[200px]">
                                    {['High Anxiety Levels', 'Impulsivity', 'Lack of Control', 'Sensitivity to Criticism'].map((trait, i) => (
                                        <li key={i} className="flex items-center gap-2 text-graphite text-sm font-medium">
                                            <span className="text-orange-500">⚠️</span> {trait}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 3. BIOLOGICAL CASE (Process Flow) */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-alabaster md:col-span-2 flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Moon size={20} /></span>
                                <h3 className="text-xl font-bold text-jet-black"><Link href="/sleep-guides/sleeping-naked" className="hover:underline hover:text-golden-bronze">Sleeping Naked</Link></h3>
                            </div>
                            <p className="text-graphite text-sm leading-relaxed mb-4">
                                It's not just a lifestyle choice; it's an endocrine hack. By ditching pajamas, you signal your
                                body to lower its defenses.
                            </p>
                            <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                                <p className="text-blue-800 font-bold text-sm">Impact: Deep Rest</p>
                                <p className="text-blue-600 text-xs mt-1">High cortisol disrupts sleep patterns. Cooling down is the antidote.</p>
                            </div>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { icon: '❄️', title: 'Cool Down', desc: 'Body temp drops, signaling sleep initiation.' },
                                { icon: '🧪', title: 'Cortisol Drop', desc: 'Stress hormones decrease, Melatonin rises.' },
                                { icon: '🔋', title: 'Deep State', desc: 'Body enters restorative REM sleep faster.' }
                            ].map((step, i) => (
                                <div key={i} className="p-4 rounded-xl border border-alabaster hover:border-blue-300 hover:shadow-md transition-all duration-300 bg-gray-50 group">
                                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                                    <h4 className="font-bold text-jet-black mb-1">{step.title}</h4>
                                    <p className="text-xs text-gray-500">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. PETS (Emotional/Animation) */}
                    <div className="bg-gradient-to-br from-jet-black to-gray-800 rounded-3xl p-8 shadow-lg text-white flex flex-col justify-between overflow-hidden relative min-h-[300px]">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-white/10 p-2 rounded-lg"><Heart size={20} /></span>
                                <h3 className="text-xl font-bold">The Living Anti-Depressant</h3>
                            </div>
                            <p className="text-gray-300 text-sm mb-6">
                                <Link href="/sleep-guides/sleep-with-pets" className="text-white hover:underline hover:text-golden-bronze font-bold">Co-sleeping with a pet</Link> increases <strong>Oxytocin</strong> (the love chemical) and promotes
                                Theta brainwaves (associated with REM sleep).
                            </p>
                        </div>

                        {/* CSS Heartbeat visual composed of React/Tailwind divs */}
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]">
                                <Heart size={64} className="text-white/30" strokeWidth={1} fill="currentColor" />
                            </div>
                        </div>

                        <blockquote className="relative z-10 border-l-2 border-golden-bronze pl-4 italic text-sm text-gray-300 mt-auto">
                            "Imagine your hearts beating in unison while you experience the deepest sleep."
                        </blockquote>
                    </div>

                    {/* 5. READING VS MUSIC (Comparative) */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-alabaster hover:shadow-md transition-shadow duration-300 flex flex-col">
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-teal-100 text-teal-600 p-2 rounded-lg"><BookOpen size={20} /></span>
                                <h3 className="text-xl font-bold text-jet-black">Reading Beats Music</h3>
                            </div>
                            <p className="text-graphite text-sm">
                                Looking for a cognitive "change of scenery"? Reading engages the imagination, shifting
                                the mind away from worries better than music or tea.
                            </p>
                        </div>
                        <div className="flex-grow h-[300px]">
                            <Bar data={readingData} options={horizontalChartOptions} />
                        </div>
                    </div>

                    {/* 6. WEIGHTED BLANKETS (Toggle) */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-alabaster hover:shadow-md transition-shadow duration-300 flex flex-col">
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-gray-200 text-gray-600 p-2 rounded-lg"><Anchor size={20} /></span>
                                <h3 className="text-xl font-bold text-jet-black">The "Heavy Hug"</h3>
                            </div>
                            <p className="text-graphite text-sm">
                                Weighted blankets use <strong>Deep Pressure Stimulation (DPS)</strong>. This isn't just about
                                warmth; it's a physical anchor for your nervous system.
                            </p>
                        </div>

                        {/* Custom Toggle UI */}
                        <div className="bg-alabaster rounded-2xl p-1 border border-gray-200 mb-8 flex relative">
                            {/* Sliding Background */}
                            <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white shadow-sm rounded-xl transition-all duration-300 ${blanketMode === 'rest' ? 'left-[calc(50%+2px)]' : 'left-1'}`}></div>

                            <button
                                onClick={() => setBlanketMode('fight')}
                                className={`w-1/2 relative z-10 py-2 text-sm font-semibold transition-colors duration-300 ${blanketMode === 'fight' ? 'text-jet-black' : 'text-gray-400'}`}
                            >
                                Stress Mode
                            </button>
                            <button
                                onClick={() => setBlanketMode('rest')}
                                className={`w-1/2 relative z-10 py-2 text-sm font-semibold transition-colors duration-300 ${blanketMode === 'rest' ? 'text-jet-black' : 'text-gray-400'}`}
                            >
                                Blanket On
                            </button>
                        </div>

                        <div className="flex-grow flex items-center justify-center text-center p-4 min-h-[150px]">
                            {blanketMode === 'fight' ? (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                                    <div className="text-4xl mb-2">⚡</div>
                                    <h4 className="font-bold text-rose-500 text-lg">Fight or Flight</h4>
                                    <p className="text-sm text-graphite mt-2">Racing mind, high heart rate, alertness.</p>
                                </div>
                            ) : (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                                    <div className="text-4xl mb-2">🧘</div>
                                    <h4 className="font-bold text-teal-600 text-lg">Rest & Digest</h4>
                                    <p className="text-sm text-graphite mt-2">Serotonin boost, lower heart rate, calm.</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* --- Summary Section --- */}
                <div className="max-w-4xl mx-auto mt-20">
                    <div className="bg-jet-black rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-golden-bronze to-amber-200"></div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">The Bottom Line</h2>
                        <p className="text-gray-300 leading-relaxed text-lg mb-8">
                            The relationship between sleep and stress is bidirectional, but it is also hackable. Whether it's
                            removing clothes, inviting the dog up, or swapping your phone for a book, small physical changes
                            trigger significant neurochemical shifts.
                        </p>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 inline-block">
                            <p className="text-golden-bronze text-xs font-bold uppercase tracking-wider mb-2">Final Thought</p>
                            <p className="text-white font-medium italic">
                                "If 57% of Americans believe getting more sleep would help them feel less stressed, but nearly
                                half are chronically stressed, are we treating sleep as a luxury rather than a medical
                                necessity?"
                            </p>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default SleepStressGuide;
