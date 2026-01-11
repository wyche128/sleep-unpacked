'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {
    ShieldCheck,
    AlertTriangle,
    Ruler,
    CheckCircle2,
    XCircle,
    Info,
    Archive,
    Droplets,
    Grid3X3,
    Clock
} from 'lucide-react';
import Link from 'next/link';

const FoundationChecker = () => {
    const [gap, setGap] = useState(5);
    const isSafe = gap <= 4;

    return (
        <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-alabaster-grey my-12">
            <h3 className="text-xl font-bold text-jet-black mb-6 flex items-center gap-2">
                <Grid3X3 className="text-golden-bronze" /> Foundation Gap Checker
            </h3>
            <p className="text-sm text-graphite mb-8">
                Warranty policies are strict about slat spacing. Use the slider to see if your bed frame is "Void-Proof."
            </p>

            <div className="space-y-8">
                <div>
                    <div className="flex justify-between mb-4">
                        <span className="text-sm font-bold uppercase tracking-wider text-graphite">Slat Spacing: {gap}"</span>
                        <span className={`text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isSafe ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {isSafe ? 'Warranty Safe' : 'Warranty Voided'}
                        </span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="8"
                        step="0.5"
                        value={gap}
                        onChange={(e) => setGap(parseFloat(e.target.value))}
                        className="w-full h-2 bg-alabaster-grey rounded-lg appearance-none cursor-pointer accent-golden-bronze"
                    />
                </div>

                <div className="flex gap-4 items-center p-4 bg-alabaster-grey/30 rounded-xl">
                    {isSafe ? (
                        <CheckCircle2 className="text-green-500 shrink-0" size={32} />
                    ) : (
                        <AlertTriangle className="text-red-500 shrink-0" size={32} />
                    )}
                    <p className="text-sm leading-relaxed">
                        {isSafe
                            ? "Most modern hybrids (DreamCloud, Layla) require slats to be 4 inches or less apart. You're in the clear!"
                            : "Danger! Gaps wider than 4 inches cause the mattress to 'dip' between slats. This is the first thing an inspector checks."
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

const SagGauge = () => {
    return (
        <div className="bg-jet-black text-white p-10 md:p-12 rounded-3xl shadow-2xl my-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-golden-bronze/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Ruler className="text-golden-bronze" /> The "Indentation" Threshold
            </h3>
            <div className="grid grid-cols-2 gap-8 relative z-10">
                <div className="space-y-4">
                    <div className="h-20 bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-end relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-golden-bronze"></div>
                        <div className="absolute top-0 left-1/2 w-4 h-1.5 bg-golden-bronze -translate-x-1/2 rounded-b-lg"></div>
                        <p className="text-[10px] uppercase font-bold text-alabaster-grey/60 mb-1">0.75" Indentation</p>
                        <p className="text-xs font-bold text-golden-bronze">Tempur-Pedic Limit</p>
                    </div>
                    <p className="text-[10px] text-alabaster-grey leading-tight">Very strict. Even a minor dip qualifies for a swap.</p>
                </div>
                <div className="space-y-4">
                    <div className="h-20 bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-end relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-golden-bronze"></div>
                        <div className="absolute top-0 left-1/2 w-4 h-3 bg-red-500 -translate-x-1/2 rounded-b-lg"></div>
                        <p className="text-[10px] uppercase font-bold text-alabaster-grey/60 mb-1">1.5" Indentation</p>
                        <p className="text-xs font-bold text-red-400">Industry Average</p>
                    </div>
                    <p className="text-[10px] text-alabaster-grey leading-tight">Must be deeper than a ping-pong ball. Harder to prove.</p>
                </div>
            </div>
        </div>
    );
};

const WarrantyGuide = () => {
    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="bg-jet-black pt-24 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden-bronze/20 border border-golden-bronze/30 text-golden-bronze text-xs font-bold uppercase tracking-widest mb-8">
                        <ShieldCheck size={14} /> Auditor's Survival Guide
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        Don’t Remove the Tag: <span className="text-golden-bronze">6 Rules</span> for a Successful Warranty Claim
                    </h1>
                    <p className="text-xl text-alabaster-grey max-w-2xl mx-auto leading-relaxed">
                        Why your "Lifetime Warranty" might not last as long as a coffee stain. We unpack the fine print mattress brands hide in the footnotes.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 md:px-8 -mt-16 relative z-20">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-alabaster-grey">

                    <div className="prose prose-lg max-w-none prose-headings:text-jet-black prose-p:text-graphite">
                        <p className="text-2xl font-light italic text-jet-black/60 mb-12 border-l-4 border-golden-bronze pl-8">
                            "Filing a warranty claim is a bureaucratic dance governed by fine print that most of us ignore until it’s too late."
                        </p>

                        <p>
                            We all know the feeling. You buy a mattress—and you sleep soundly knowing it comes with a <strong>"Lifetime Warranty."</strong> But five years later, when you notice a sinkhole forming on the left side of the bed, you realize that safety net is full of holes.
                        </p>

                        <p>
                            After analyzing the warranty policies of dozens of major brands—from <strong>Casper</strong> and <strong>DreamCloud</strong> to <strong>Layla</strong> and <strong>Allswell</strong>—we uncovered the counter-intuitive "gotchas" that separate a replacement mattress from a rejection letter.
                        </p>

                        {/* Point 1 */}
                        <div className="my-16 group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 bg-jet-black text-golden-bronze rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">01</span>
                                <h2 className="text-3xl font-extrabold m-0">The "Foundation" Trap</h2>
                            </div>
                            <p>
                                Almost every major manufacturer, including <strong>Layla</strong> and <strong>Allswell</strong>, explicitly states that using an "improper foundation" voids the warranty immediately.
                            </p>
                            <p>
                                If you are using a slat bed frame, the distance between the slats is critical. Many warranties specify that slats must be no more than <strong>3 to 4 inches apart</strong>.
                            </p>

                            <FoundationChecker />
                        </div>

                        {/* Point 2 */}
                        <div className="my-16 group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 bg-jet-black text-golden-bronze rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">02</span>
                                <h2 className="text-3xl font-extrabold m-0">The Coffee Stain Rule</h2>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8 items-center bg-red-50/50 p-10 md:p-12 rounded-3xl border border-red-100 mb-8">
                                <div className="text-red-500 bg-white p-4 rounded-full shadow-sm">
                                    <Droplets size={48} />
                                </div>
                                <div>
                                    <p className="m-0 text-graphite">
                                        Even if your coils have collapsed or the foam has split, a single coffee stain can void your claim. Manufacturers cite <strong>hygiene safety</strong> to refuse handling or inspecting unsanitary products.
                                    </p>
                                </div>
                            </div>
                            <p>
                                <strong>The Fix:</strong> Always use a high-quality waterproof mattress protector. It isn't just about hygiene—it's about protecting your right to a warranty claim.
                            </p>
                        </div>

                        {/* Point 3 */}
                        <div className="my-16 group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 bg-jet-black text-golden-bronze rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">03</span>
                                <h2 className="text-3xl font-extrabold m-0">The "Sag" Measurement</h2>
                            </div>
                            <p>
                                Subjective discomfort (feeling "too soft") is not a defect. To win a claim, you need objective proof of indentation.
                            </p>

                            <SagGauge />

                            <p className="text-sm bg-alabaster-grey p-6 rounded-xl flex items-start gap-3">
                                <Info className="text-golden-bronze shrink-0" size={20} />
                                <span><strong>The Catch:</strong> This indentation must be visible <em>without</em> weight. If the bed only sags when you lay on it, it's considered "normal wear and tear."</span>
                            </p>
                        </div>

                        {/* Point 4 */}
                        <div className="my-16 group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 bg-jet-black text-golden-bronze rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">04</span>
                                <h2 className="text-3xl font-extrabold m-0">Prorated "Lifetimes"</h2>
                            </div>
                            <p>
                                Brands like <strong>DreamCloud</strong> and <strong>Bear</strong> offer lifetime coverage, but the terms change as the product ages.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <div className="p-6 rounded-2xl bg-white border border-alabaster-grey shadow-sm">
                                    <h4 className="text-golden-bronze font-bold text-sm uppercase m-0 mb-2">Years 0-10</h4>
                                    <p className="text-sm m-0">Full replacement or repair at zero cost to the customer.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-alabaster-grey/30 border border-alabaster-grey shadow-sm">
                                    <h4 className="text-graphite font-bold text-sm uppercase m-0 mb-2">Years 11+</h4>
                                    <p className="text-sm m-0">Often prorated. You may pay 50% of retail or shipping costs ($100+).</p>
                                </div>
                            </div>
                        </div>

                        {/* Point 5 */}
                        <div className="my-16 group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 bg-jet-black text-golden-bronze rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">05</span>
                                <h2 className="text-3xl font-extrabold m-0">Do Not Trust the Zipper</h2>
                            </div>
                            <p>
                                Modern "bed-in-a-box" mattresses often come with a zipper. <strong>Do not unzip it.</strong>
                            </p>
                            <div className="bg-jet-black p-10 md:p-12 rounded-3xl text-white flex items-center gap-6">
                                <Archive className="text-golden-bronze shrink-0" size={40} />
                                <p className="m-0 text-sm leading-relaxed">
                                    Nectar and other brands warn that removing the cover exposes the <strong>fire-retardant sock</strong> (often containing silica or fiberglass). Unzipping can create a health hazard and immediately voids the contract.
                                </p>
                            </div>
                        </div>

                        {/* Point 6 */}
                        <div className="my-16 group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 bg-jet-black text-golden-bronze rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">06</span>
                                <h2 className="text-3xl font-extrabold m-0">The Law Tag is Law</h2>
                            </div>
                            <p>
                                That "Do Not Remove" tag isn't for the police—it's for the warranty inspector. It contains the batch numbers and manufacturing codes required to verify your mattress.
                            </p>
                            <p className="font-bold text-jet-black">If you cut it off, you've essentially shredded your warranty contract.</p>
                        </div>
                    </div>

                    {/* Final Checklist */}
                    <div className="mt-24 p-12 md:p-16 bg-alabaster-grey rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <CheckCircle2 size={120} className="text-jet-black" />
                        </div>
                        <h3 className="text-2xl font-bold text-jet-black mb-8">Summary Checklist</h3>
                        <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                            {[
                                "Keep the law tag attached at all costs.",
                                "Use a waterproof protector from Day 1.",
                                "Check slats for 4\" spacing max.",
                                "Keep your original proof of purchase.",
                                "Measure sag with a ruler and string.",
                                "Never unzip the outer cover."
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="bg-golden-bronze p-1 rounded-full mt-1">
                                        <CheckCircle2 size={14} className="text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-graphite">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expert Support CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-graphite mb-6">Still confused about your specific policy? Our sleep auditors can help.</p>
                        <Link
                            href="/about#contact"
                            className="inline-flex items-center gap-2 bg-jet-black text-white px-8 py-4 rounded-full font-bold hover:bg-jet-black-800 transition transform hover:-translate-y-1"
                        >
                            Ask an Expert <ShieldCheck size={18} />
                        </Link>
                    </div>

                </div>
            </main>

            <div className="py-24">
                <Footer />
            </div>
        </div>
    );
};

export default WarrantyGuide;
