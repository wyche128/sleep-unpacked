'use client';

import React, { useRef, useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Wind, Mic, Activity, CheckCircle2, AlertTriangle } from 'lucide-react';
import snoringHero from '../../../assets/snoring_hero.png';

const WhatCausesSnoring = () => {
    const [readingProgress, setReadingProgress] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                const totalHeight = contentRef.current.clientHeight;
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;
                const progress = (scrollY / (totalHeight - windowHeight)) * 100;
                setReadingProgress(Math.min(100, Math.max(0, progress)));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="font-serif text-graphite bg-white antialiased">
            <Header />

            {/* Custom Styles from origin file */}
            <style>{`
                html { scroll-behavior: smooth; }
                h1, h2, h3, h4, h5, h6 { font-family: 'Inter', sans-serif; }
                .font-serif { font-family: 'Merriweather', serif; }
                .font-sans { font-family: 'Inter', sans-serif; }
                .timeline-line::before {
                    content: '';
                    position: absolute;
                    top: 0; bottom: 0; left: 15px;
                    width: 2px;
                    background: #e5e5e5;
                    z-index: 0;
                }
            `}</style>

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 h-1 bg-golden-bronze z-50 transition-all duration-300" style={{ width: `${readingProgress}%` }}></div>

            {/* Header */}
            <header className="relative pt-20 pb-16 bg-jet-black text-white px-6 font-sans text-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${snoringHero.src})` }}></div>
                <div className="relative max-w-4xl mx-auto z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-golden-bronze-100/20 border border-golden-bronze text-golden-bronze text-xs font-bold uppercase tracking-wide mb-4">Sleep Health Guide</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                        What Causes Snoring, and What You Can Actually Do About It
                    </h1>
                    <p className="text-lg md:text-xl text-alabaster-grey max-w-2xl mx-auto font-normal leading-relaxed">
                        Snoring is one of those problems that feels harmless until it isn’t. Here is a no-drama guide to figuring out what’s going on, and how to spend your effort wisely.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main ref={contentRef} className="max-w-3xl mx-auto px-6 pb-24">

                {/* Intro Text */}
                <div className="text-lg leading-relaxed mb-12">
                    <p className="mb-6 leading-relaxed">
                        Sometimes snoring is a minor annoyance. Sometimes it is your body waving a little red flag that says, <span className="bg-golden-bronze-100 px-1">“Hey, breathing could be going better in here.”</span>
                    </p>
                    <p className="mb-6 leading-relaxed">
                        Most snoring boils down to this: <strong>air has trouble moving smoothly through your upper airway</strong>, so soft tissue in your throat (or your nose) vibrates like a loosely tuned guitar string. That vibration is the sound.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        The good news: a lot of snoring improves with a few targeted changes. The important news: <strong>certain patterns of loud, frequent snoring should push you toward a clinician, not another pillow hack.</strong>
                    </p>
                </div>

                {/* The Quick Checklist Box */}
                <div className="bg-alabaster-grey/30 border border-alabaster-grey rounded-2xl p-6 md:p-8 mb-16 font-sans shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <CheckCircle2 className="text-golden-bronze w-6 h-6" />
                        <h2 className="text-2xl font-bold text-jet-black !m-0 !mt-0">The Quick Checklist</h2>
                    </div>
                    <p className="text-graphite mb-6 font-normal">If you want the shortest path to “less noise tonight,” start here:</p>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-golden-bronze text-white flex items-center justify-center font-bold text-sm mt-0.5">1</span>
                            <div>
                                <strong className="text-jet-black block">Sleep on your side.</strong>
                                <span className="text-graphite text-sm">Positional snoring is extremely common.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-golden-bronze text-white flex items-center justify-center font-bold text-sm mt-0.5">2</span>
                            <div>
                                <strong className="text-jet-black block">Treat nasal blockage.</strong>
                                <span className="text-graphite text-sm">Check for allergies, colds, or chronic congestion.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-golden-bronze text-white flex items-center justify-center font-bold text-sm mt-0.5">3</span>
                            <div>
                                <strong className="text-jet-black block">Skip alcohol close to bedtime.</strong>
                                <span className="text-graphite text-sm">It relaxes airway muscles too much.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-golden-bronze text-white flex items-center justify-center font-bold text-sm mt-0.5">4</span>
                            <div>
                                <strong className="text-jet-black block">Evaluate apnea signs.</strong>
                                <span className="text-graphite text-sm">If you have signs, home fixes are not the right tool.</span>
                            </div>
                        </li>
                    </ul>
                    <p className="text-sm text-graphite italic mt-4 border-t border-alabaster-grey pt-4">Think of this as troubleshooting, not self-optimization.</p>
                </div>

                {/* What Snoring Is */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold font-sans mt-12 mb-4 text-jet-black">What snoring is, in plain English</h2>
                    <p className="mb-6 leading-relaxed">
                        When you fall asleep, the muscles in your throat relax. For many people, that relaxation narrows the airway. Air still gets through, but it becomes turbulent. Turbulence makes tissue vibrate. Vibrations make sound.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 my-8 font-sans">
                        <div className="bg-white border border-alabaster-grey p-4 rounded-lg text-center">
                            <div className="bg-golden-bronze-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-golden-bronze">
                                <Wind className="w-6 h-6" />
                            </div>
                            <strong className="block text-jet-black mb-1">Nose</strong>
                            <span className="text-sm text-graphite leading-snug block">Congestion, allergies, deviated septum, polyps.</span>
                        </div>
                        <div className="bg-white border border-alabaster-grey p-4 rounded-lg text-center">
                            <div className="bg-golden-bronze-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-golden-bronze">
                                <Mic className="w-6 h-6" />
                            </div>
                            <strong className="block text-jet-black mb-1">Mouth</strong>
                            <span className="text-sm text-graphite leading-snug block">Tongue falls back, especially when on your back.</span>
                        </div>
                        <div className="bg-white border border-alabaster-grey p-4 rounded-lg text-center">
                            <div className="bg-golden-bronze-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-golden-bronze">
                                <Activity className="w-6 h-6" />
                            </div>
                            <strong className="block text-jet-black mb-1">Throat</strong>
                            <span className="text-sm text-graphite leading-snug block">Soft palate or tonsils vibrating as airflow narrows.</span>
                        </div>
                    </div>
                </section>

                {/* Red Flag Section */}
                <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-6 md:p-8 rounded-r-lg font-sans">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="text-red-500 w-8 h-8 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl font-bold text-jet-black !mt-0 mb-4">When snoring is a “see a doctor” problem</h2>
                            <p className="text-jet-black font-medium mb-4">Wirecutter-style rule: If the risk is meaningful, do not DIY it.</p>
                            <p className="text-graphite mb-4">Loud, frequent snoring is worth a medical conversation if you also have any of these:</p>
                            <ul className="space-y-2 text-graphite list-disc pl-5 mb-4">
                                <li>Choking, gasping, or pauses in breathing during sleep (often noticed by a partner).</li>
                                <li>Significant daytime sleepiness, morning headaches, or “brain fog”.</li>
                                <li>High blood pressure or heart risk factors.</li>
                                <li>Waking with a dry mouth or sore throat most mornings.</li>
                            </ul>
                            <p className="text-graphite text-sm">
                                These can point to <strong>obstructive sleep apnea (OSA)</strong>. A good way to frame it is: <em>snoring plus symptoms</em> deserves evaluation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Common Causes */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold font-sans mb-8 text-jet-black">The most common causes</h2>

                    <div className="space-y-8">
                        {/* Cause 1 */}
                        <div className="border-b border-alabaster-grey pb-8">
                            <h3 className="text-xl font-bold text-jet-black font-sans mt-0 mb-3">Nasal congestion and sinus issues</h3>
                            <p className="mb-2">If you snore most when you have a cold, allergies, or chronic stuffiness, your nose is a prime suspect.</p>
                            <div className="bg-alabaster-grey/30 p-3 rounded-md text-sm text-graphite font-sans inline-block mt-2">
                                <strong>Clues:</strong> Worse during allergy season • You breathe through your mouth at night • Improves when congestion clears.
                            </div>
                        </div>

                        {/* Cause 2 */}
                        <div className="border-b border-alabaster-grey pb-8">
                            <h3 className="text-xl font-bold text-jet-black font-sans mt-0 mb-3">Back sleeping (positional snoring)</h3>
                            <p className="mb-2">Back sleeping makes it easier for the tongue and soft tissue to fall backward.</p>
                            <div className="bg-alabaster-grey/30 p-3 rounded-md text-sm text-graphite font-sans inline-block mt-2">
                                <strong>Clues:</strong> Partner says it's worse on your back • Improves on your side.
                            </div>
                        </div>

                        {/* Cause 3 */}
                        <div className="border-b border-alabaster-grey pb-8">
                            <h3 className="text-xl font-bold text-jet-black font-sans mt-0 mb-3">Alcohol near bedtime</h3>
                            <p className="mb-2">Alcohol relaxes airway muscles and can make snoring louder.</p>
                            <div className="bg-alabaster-grey/30 p-3 rounded-md text-sm text-graphite font-sans inline-block mt-2">
                                <strong>Clues:</strong> Worse after drinks • You feel less rested after nights out.
                            </div>
                        </div>

                        {/* Cause 4 */}
                        <div>
                            <h3 className="text-xl font-bold text-jet-black font-sans mt-0 mb-3">Anatomy & Weight</h3>
                            <p className="mb-2">Extra tissue around the airway, or structural issues like large tonsils or a deviated septum.</p>
                            <div className="bg-alabaster-grey/30 p-3 rounded-md text-sm text-graphite font-sans inline-block mt-2">
                                <strong>Clues:</strong> Gradual worsening over time • Chronic nasal obstruction • Long history regardless of sleep habits.
                            </div>
                        </div>
                    </div>
                </section>

                {/* What to try first */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold font-sans mt-12 mb-6 text-jet-black">What to try first (in order)</h2>
                    <div className="space-y-6 mt-6">

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-golden-bronze text-white flex items-center justify-center font-bold font-sans">1</div>
                            <div>
                                <h3 className="text-xl font-bold font-sans !mt-0 mb-2">Change your position, not your personality</h3>
                                <p className="mb-2">If you are a back snorer, side sleeping can be the biggest win for the least effort.</p>
                                <ul className="list-disc pl-5 space-y-2 text-graphite">
                                    <li>Use a body pillow to “lock in” a side position.</li>
                                    <li>Try a firmer pillow that supports your head without cranking your neck forward.</li>
                                    <li>Wedge a pillow behind you like a doorstop for humans.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-golden-bronze text-white flex items-center justify-center font-bold font-sans">2</div>
                            <div>
                                <h3 className="text-xl font-bold font-sans !mt-0 mb-2">Fix the nose problem if you have one</h3>
                                <p className="mb-2">Nasal congestion is a common, fixable contributor. Keep allergens down (wash bedding, keep pets off bed). Consider a humidifier.</p>
                                <p className="text-sm italic text-graphite bg-alabaster-grey/30 p-2 rounded">
                                    <strong>Note on strips:</strong> Nasal strips help if snoring is driven by nasal restriction. They are unlikely to fix throat-based snoring.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-golden-bronze text-white flex items-center justify-center font-bold font-sans">3</div>
                            <div>
                                <h3 className="text-xl font-bold font-sans !mt-0 mb-2">Move alcohol earlier</h3>
                                <p className="mb-0">If alcohol is part of your evenings, try shifting your last drink earlier. You do not need a spreadsheet. Just notice whether your snoring changes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Devices Section */}
                <section className="mb-16 bg-alabaster-grey/30 rounded-2xl p-6 md:p-8">
                    <h2 className="text-3xl font-bold font-sans !mt-0 mb-4 text-jet-black">Do anti-snoring devices help?</h2>
                    <p className="text-graphite mb-8">Sometimes. But the category is full of products that sound smarter than they are.</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-alabaster-grey">
                            <h3 className="font-bold text-lg font-sans !mt-0 text-golden-bronze mb-1">Mouthpieces</h3>
                            <p className="text-xs font-sans uppercase tracking-wider text-graphite mb-3">Mandibular Advancement</p>
                            <p className="text-sm mb-4">Gently moves the lower jaw forward to keep the airway open.</p>
                            <div className="text-sm">
                                <span className="font-bold text-green-700 block mb-1">✓ Best for:</span>
                                <span className="text-graphite">Throat-based snoring, mild sleep apnea (with guidance).</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-alabaster-grey">
                            <h3 className="font-bold text-lg font-sans !mt-0 text-golden-bronze mb-1">Tongue Stabilizers</h3>
                            <p className="text-xs font-sans uppercase tracking-wider text-graphite mb-3">Suction Devices</p>
                            <p className="text-sm mb-4">Holds the tongue forward to prevent it from falling back.</p>
                            <div className="text-sm">
                                <span className="font-bold text-green-700 block mb-1">✓ Best for:</span>
                                <span className="text-graphite">Tongue-related snoring, back sleepers. Drooling is a common side effect.</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-alabaster-grey md:col-span-2">
                            <h3 className="font-bold text-lg font-sans !mt-0 text-graphite mb-1">Chin Straps</h3>
                            <p className="text-sm mt-2">Often marketed as a simple fix, but evidence is thin. They don't reliably address airway collapse and can be uncomfortable. Only useful for a narrow group of mouth-openers.</p>
                        </div>
                    </div>
                </section>

                {/* Two Week Plan */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold font-sans mb-6 text-jet-black">A simple two-week plan</h2>
                    <p className="mb-8">If your goal is “less snoring without turning your life into a wellness project,” try this.</p>

                    <div className="relative timeline-line pl-8 space-y-10 font-sans">
                        {/* Step 1 */}
                        <div className="relative z-10">
                            <div className="absolute -left-[41px] bg-golden-bronze text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">1</div>
                            <div className="bg-white p-4 border border-alabaster-grey rounded-lg shadow-sm">
                                <h4 className="font-bold text-jet-black mt-0">Nights 1–4: Position</h4>
                                <p className="text-graphite text-sm m-0">Commit to side sleeping with a body pillow.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10">
                            <div className="absolute -left-[41px] bg-golden-bronze text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">2</div>
                            <div className="bg-white p-4 border border-alabaster-grey rounded-lg shadow-sm">
                                <h4 className="font-bold text-jet-black mt-0">Nights 5–8: Nose</h4>
                                <p className="text-graphite text-sm m-0">Add nasal support (strips/dilator) + clean bedding.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative z-10">
                            <div className="absolute -left-[41px] bg-golden-bronze text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">3</div>
                            <div className="bg-white p-4 border border-alabaster-grey rounded-lg shadow-sm">
                                <h4 className="font-bold text-jet-black mt-0">Nights 9–12: Alcohol Timing</h4>
                                <p className="text-graphite text-sm m-0">Move alcohol earlier, or skip it for a few nights as a test.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative z-10">
                            <div className="absolute -left-[41px] bg-jet-black-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">4</div>
                            <div className="bg-alabaster-grey/20 p-4 border border-alabaster-grey rounded-lg shadow-sm">
                                <h4 className="font-bold text-jet-black mt-0">Nights 13–14: Reality Check</h4>
                                <p className="text-graphite text-sm m-0">If nothing changed, that is useful data. If you have apnea signs, stop experimenting and schedule an evaluation.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="bg-jet-black text-white p-8 md:p-12 rounded-2xl text-center">
                    <h2 className="text-2xl font-bold font-sans !mt-0 !mb-4 text-white">The Bottom Line</h2>
                    <p className="text-alabaster-grey text-lg leading-relaxed max-w-2xl mx-auto !mb-0">
                        Most snoring is a mechanical problem: airflow plus anatomy plus sleep habits. Start with the easy, high-upside changes (side sleeping and nasal airflow). Be skeptical of “one weird device” solutions. And treat loud, frequent snoring with daytime symptoms as a medical issue, not a lifestyle challenge.
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-alabaster-grey/30 py-12 text-center border-t border-alabaster-grey font-sans">
                <p className="text-graphite text-sm">
                    Always consult a medical professional for serious sleep concerns.
                </p>
            </footer>
        </div>
    );
};

export default WhatCausesSnoring;
