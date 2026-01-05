'use client';

import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import {
    Bed,
    RotateCw,
    Sparkles,
    Save,
    Ban,
    Thermometer,
    Activity,
    HeartPulse,
    Smile,
    Utensils,
    Shield,
    Wand2,
    Wind,
    CheckCircle2
} from 'lucide-react';
import sleepImportanceHero from '../../../assets/sleep_importance_hero.png';
import Link from 'next/link';

const WhySleepMatters = () => {
    const [scrolled, setScrolled] = useState(0);

    // Scroll Progress Handler
    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolledVal = (winScroll / height) * 100;
            setScrolled(scrolledVal);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-jet-black text-alabaster-grey font-sans antialiased selection:bg-golden-bronze selection:text-white min-h-screen">
            <Header />

            {/* Custom Styles */}
            <style>{`
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: var(--color-jet-black); }
                ::-webkit-scrollbar-thumb { background: var(--color-golden-bronze); border-radius: 4px; }
                ::-webkit-scrollbar-thumb:hover { background: #b08d32; }
                .font-serif { font-family: 'Merriweather', serif; }
                .font-sans { font-family: 'Inter', sans-serif; }
                .glass-card {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(229, 229, 229, 0.1);
                }
                .animate-spin-slow { animation: spin 8s linear infinite; }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 h-1 bg-golden-bronze z-50 transition-all duration-300" style={{ width: `${scrolled}%` }}></div>

            {/* Hero Section */}
            <header className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${sleepImportanceHero.src})` }}></div>

                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-golden-bronze/10 border border-golden-bronze/20 text-golden-bronze text-xs font-semibold uppercase tracking-wide mb-6">
                        <Bed size={14} /> SLEEP GUIDES
                    </div>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                        What Happens When <br className="hidden sm:block" /> You Sleep?
                    </h1>
                    <p className="text-lg sm:text-xl text-alabaster-grey/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                        It might seem like your body is switching off for the night, but sleep is actually one of the busiest times of your day. Here are the 11 automatic changes keeping you alive.
                    </p>

                    <div className="flex items-center justify-center gap-6 text-sm text-alabaster-grey/60">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-xs">SU</span>
                            <span>By The Sleep Unpacked Team</span>
                        </div>
                        <span>&bull;</span>
                        <span>6 min read</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

                {/* Intro */}
                <div className="prose prose-lg prose-invert mx-auto mb-16 pt-12">
                    <p className="lead text-xl text-alabaster-grey">
                        While you rest, your body runs behind-the-scenes processes that keep your brain sharp, your muscles strong, and your immune system ready to protect you. Here’s what’s really happening while you sleep—and why getting enough of it matters.
                    </p>
                </div>

                {/* How Sleep Works */}
                <section id="how-it-works" className="mb-20 scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-graphite rounded-2xl p-8 border border-white/5 shadow-xl">
                        <div className="flex-1">
                            <h2 className="font-serif text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <RotateCw className="text-golden-bronze" />
                                How Sleep Works
                            </h2>
                            <p className="text-alabaster-grey mb-4">
                                Sleep happens in repeating <Link href="/sleep-guides/sleep-cycles-dreaming" className="text-golden-bronze hover:underline">cycles</Link> that last about <strong>90 minutes</strong>. Each night, you move through two main types of sleep:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-golden-bronze"></span>
                                    <span><strong>Non-REM (NREM)</strong> – Light to deep sleep</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-white"></span>
                                    <span><strong>REM Sleep</strong> – Dream sleep</span>
                                </li>
                            </ul>
                            <p className="text-sm text-alabaster-grey/60 mt-4 italic">
                                Most people go through 4 to 6 cycles per night, with deeper sleep earlier and more dreaming toward morning.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            {/* Simple CSS Graphic for Cycle */}
                            <div className="relative w-40 h-40 rounded-full border-4 border-dashed border-golden-bronze/30 flex items-center justify-center animate-spin-slow">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center" style={{ transform: 'rotate(0deg)' }}>
                                        <div className="text-2xl font-bold text-white">90</div>
                                        <div className="text-xs text-golden-bronze uppercase">Mins</div>
                                    </div>
                                </div>
                                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-golden-bronze rounded-full transform -translate-x-1/2"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Stages of Sleep */}
                <section id="stages" className="mb-24 scroll-mt-24">
                    <h2 className="font-serif text-3xl font-bold text-white mb-10 text-center">The Stages of Sleep</h2>

                    <div className="space-y-6">
                        {/* Stage 1 */}
                        <div className="group relative pl-8 pb-8 border-l-2 border-white/10 last:border-0 last:pb-0">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white/20 group-hover:bg-golden-bronze transition-colors"></span>
                            <div className="glass-card p-6 rounded-xl transition-transform hover:-translate-y-1 duration-300 hover:border-golden-bronze/30">
                                <h3 className="text-xl font-bold text-white mb-2">Stage 1: Falling Asleep</h3>
                                <p className="text-alabaster-grey">The short transition from awake to asleep. Muscles relax, breathing slows, and you might feel that sudden "falling" sensation (hypnic jerk).</p>
                            </div>
                        </div>

                        {/* Stage 2 */}
                        <div className="group relative pl-8 pb-8 border-l-2 border-white/10 last:border-0 last:pb-0">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white/20 group-hover:bg-golden-bronze transition-colors"></span>
                            <div className="glass-card p-6 rounded-xl transition-transform hover:-translate-y-1 duration-300 hover:border-golden-bronze/30">
                                <h3 className="text-xl font-bold text-white mb-2">Stage 2: Light Sleep</h3>
                                <p className="text-alabaster-grey">Body temp drops, heart rate slows. You spend more time in this stage than any other during the night.</p>
                            </div>
                        </div>

                        {/* Stage 3 */}
                        <div className="group relative pl-8 pb-8 border-l-2 border-white/10 last:border-0 last:pb-0">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white/20 group-hover:bg-golden-bronze transition-colors"></span>
                            <div className="glass-card p-6 rounded-xl transition-transform hover:-translate-y-1 duration-300 border-golden-bronze/30 shadow-[0_0_15px_rgba(204,164,59,0.1)]">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                                    Stage 3: Deep Sleep
                                    <span className="text-xs bg-golden-bronze/20 text-golden-bronze px-2 py-1 rounded border border-golden-bronze/20">Restorative</span>
                                </h3>
                                <p className="text-alabaster-grey">The most physically restorative stage. Body repairs tissues, builds muscle, and boosts immunity. Waking up now feels groggy.</p>
                            </div>
                        </div>

                        {/* REM */}
                        <div className="group relative pl-8 border-l-2 border-transparent">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-pulse"></span>
                            <div className="glass-card p-6 rounded-xl transition-transform hover:-translate-y-1 duration-300 border-white/30">
                                <h3 className="text-xl font-bold text-white mb-2">REM Sleep: Dream Time</h3>
                                <p className="text-alabaster-grey">Occurs ~90 mins in. Brain becomes active, vivid dreams happen, and the body stays paralyzed to prevent acting them out.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 11 Body Changes Grid */}
                <section id="changes" className="mb-24 scroll-mt-24">
                    <div className="text-center mb-12">
                        <span className="text-golden-bronze font-bold tracking-wider text-sm uppercase">Behind the Scenes</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2">11 Automatic Body Changes</h2>
                        <p className="text-alabaster-grey mt-4 max-w-2xl mx-auto">While you cycle through stages, your body gets to work on these critical maintenance tasks.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Repeated Card Structure */}
                        {[
                            { icon: Sparkles, title: "1. Brain Detox", desc: "Your brain clears away waste and toxins built up during the day. Poor sleep = foggy brain." },
                            { icon: Save, title: "2. Memory Storage", desc: "Important info moves from short-term to long-term memory, locking in skills and facts." },
                            { icon: Ban, title: "3. Muscle Shutdown", desc: "During REM, muscles are temporarily paralyzed to stop you from acting out dreams." },
                            { icon: Thermometer, title: "4. Temp Drops", desc: "Core body temperature lowers to help you stay asleep. Cooler rooms help this process." },
                            { icon: Activity, title: "5. Growth Hormones", desc: "Deep sleep triggers growth hormone release for muscle repair and tissue rebuilding." },
                            { icon: HeartPulse, title: "6. Heart Rest", desc: "Heart rate and blood pressure drop, providing a crucial nightly reset for cardiovascular health." },
                            { icon: Smile, title: "7. Stress Decrease", desc: "Cortisol levels fall early in the night and rise slowly by morning to wake you up alert." },
                            { icon: Utensils, title: "8. Hunger Reset", desc: "Sleep balances hunger hormones. Lack of sleep increases cravings for sugar and calories." },
                            { icon: Shield, title: "9. Immune Boost", desc: "The body releases immune proteins to fight infection. Sleep deprivations leads to sickness." },
                            { icon: Wand2, title: "10. Skin Repair", desc: "\"Beauty sleep\" is real. Skin cells regenerate faster at night, repairing daily damage." },
                            { icon: Wind, title: "11. Breathing Shifts", desc: "Breathing steadies in deep sleep but becomes irregular during dreams." }
                        ].map((item, idx) => (
                            <div key={idx} className={`bg-graphite p-6 rounded-2xl border border-white/5 hover:border-golden-bronze/50 transition-all hover:bg-white/5 group ${idx === 10 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                                <div className="w-12 h-12 rounded-lg bg-golden-bronze/10 flex items-center justify-center text-golden-bronze mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-alabaster-grey">{item.desc}</p>
                            </div>
                        ))}

                    </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="bg-gradient-to-br from-golden-bronze to-jet-black rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl border border-golden-bronze/20">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="font-serif text-3xl font-bold text-white mb-6">Why Sleep Matters</h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            Sleep isn’t wasted time—it’s essential maintenance. Getting <strong>7 to 9 hours</strong> of quality sleep is one of the simplest and most powerful ways to support long-term health, energy, and mental clarity.
                        </p>
                        <div className="inline-flex gap-4">
                            <Link href="/top-picks" className="bg-white text-jet-black px-6 py-3 rounded-full font-bold hover:bg-alabaster-grey transition-colors shadow-lg">
                                Start Sleeping Better
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default WhySleepMatters;
