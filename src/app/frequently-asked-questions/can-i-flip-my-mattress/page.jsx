'use client';

import React from 'react';
import Header from '../../../components/Header';
import { RotateCw, CheckCircle, AlertTriangle, XCircle, Info, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CanIFlipMyMattress = () => {
    return (
        <div className="font-sans text-jet-black bg-white min-h-screen">
            <Header />

            {/* Breadcrumb / Back Navigation */}
            <div className="bg-alabaster-grey/20 border-b border-alabaster-grey">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <Link href="/frequently-asked-questions" className="inline-flex items-center text-sm font-bold text-golden-bronze hover:text-jet-black transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to FAQ
                    </Link>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 py-12">

                {/* Article Header */}
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-golden-bronze/10 rounded-full text-golden-bronze mb-6">
                        <RotateCw size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-jet-black mb-6 font-serif">
                        Can I Flip My Mattress?
                    </h1>
                    <p className="text-xl text-graphite leading-relaxed max-w-2xl mx-auto">
                        For most modern mattresses, the answer is <span className="font-bold text-golden-bronze">NO</span>. Here's why flipping can actually ruin your bed—and what you should do instead.
                    </p>
                </header>

                {/* Quick Answer Box */}
                <section className="bg-jet-black text-white rounded-2xl p-8 mb-12 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-golden-bronze rounded-full opacity-20 blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <Info className="text-golden-bronze mr-3" /> The Short Answer
                        </h2>
                        <div className="space-y-4 text-lg text-alabaster-grey">
                            <p>
                                <strong>Do NOT flip</strong> if you have a:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <li className="flex items-center"><XCircle size={20} className="text-red-500 mr-2" /> Pillow Top Mattress</li>
                                <li className="flex items-center"><XCircle size={20} className="text-red-500 mr-2" /> Memory Foam Mattress</li>
                                <li className="flex items-center"><XCircle size={20} className="text-red-500 mr-2" /> Hybrid Mattress</li>
                                <li className="flex items-center"><XCircle size={20} className="text-red-500 mr-2" /> Latex (unless specified)</li>
                            </ul>
                            <div className="border-t border-white/20 pt-4 mt-4">
                                <p className="mb-2"><strong>DO flip</strong> if you have a:</p>
                                <ul className="flex items-center gap-4">
                                    <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-2" /> Old-school Innerspring (Two-Sided)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <article className="prose prose-lg prose-slate mx-auto text-graphite">
                    <h3 className="text-2xl font-bold text-jet-black mb-4">Why Modern Mattresses Are One-Sided</h3>
                    <p>
                        Most mattresses sold today (especially excessive bed-in-a-box brands like Casper, Nectar, and Purple) are designed with a specific <strong>"stack" of layers</strong>.
                    </p>
                    <p>
                        They are built from the bottom up:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mb-8">
                        <li><strong>Base Layer:</strong> Hard, dense foam or coils meant to support the structure, not your body directly.</li>
                        <li><strong>Transition Layer:</strong> Serves as a buffer.</li>
                        <li><strong>Comfort Layer:</strong> Soft foam or gel on top for pressure relief.</li>
                    </ol>
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                        <div className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-3 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-red-800 font-bold m-0 text-lg">The Risk</h4>
                                <p className="text-red-700 m-0 text-sm mt-1">
                                    If you flip a one-sided mattress, you will be sleeping on the rock-hard base layer. This is uncomfortable and can crack or damage the structural foam, voiding your warranty.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-jet-black mb-4">The Solution: Rotation</h3>
                    <p>
                        While you shouldn't <em>flip</em> your mattress, you absolutely should <strong>rotate</strong> it.
                    </p>
                    <p>
                        Rotation means spinning the mattress 180 degrees, so the end that was at your head is now at your feet. This helps prevent body impressions from forming in the same spot every night.
                    </p>

                    <div className="bg-golden-bronze/10 rounded-xl p-6 my-8 border border-golden-bronze/30">
                        <h4 className="text-golden-bronze font-bold mb-3 flex items-center">
                            <RotateCw className="mr-2" size={20} /> Recommended Schedule
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-between border-b border-golden-bronze/10 pb-2">
                                <span className="font-medium text-jet-black">First Year:</span>
                                <span className="font-bold text-jet-black">Rotate every 3 months</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="font-medium text-jet-black">After Year 1:</span>
                                <span className="font-bold text-jet-black">Rotate every 6 months</span>
                            </li>
                        </ul>
                    </div>
                </article>

            </main>

            {/* Footer Placeholder (Global Footer handles this) */}
            <div className="h-12 bg-white"></div>
        </div>
    );
};

export default CanIFlipMyMattress;
