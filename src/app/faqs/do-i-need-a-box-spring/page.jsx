'use client';

import React from 'react';
import Header from '../../../components/Header';
import { Box, CheckCircle, XCircle, HelpCircle, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const DoINeedABoxSpring = () => {
    return (
        <div className="font-sans text-jet-black bg-white min-h-screen">
            <Header />

            {/* Breadcrumb / Back Navigation */}
            <div className="bg-alabaster-grey/20 border-b border-alabaster-grey">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <Link href="/faqs" className="inline-flex items-center text-sm font-bold text-golden-bronze hover:text-jet-black transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to FAQ
                    </Link>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 py-12">

                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-golden-bronze/10 rounded-full text-golden-bronze mb-6">
                        <Box size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-jet-black mb-6 font-serif">
                        Do I Need a Box Spring?
                    </h1>
                    <p className="text-xl text-graphite leading-relaxed max-w-2xl mx-auto">
                        Maybe not. Most modern memory foam and hybrid mattresses are actually designed to <strong>skip the box spring</strong>. Here's what you need instead.
                    </p>
                </header>

                {/* The Modern Rule */}
                <section className="bg-white border border-alabaster-grey rounded-2xl p-8 mb-12 shadow-sm">
                    <h2 className="text-2xl font-bold text-jet-black mb-6 border-b border-alabaster-grey pb-4">
                        The New Rules of Bed Foundations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-green-700 flex items-center mb-3">
                                <CheckCircle className="mr-2" size={20} /> What You Likely Need
                            </h3>
                            <p className="text-graphite mb-4 text-sm">Most bed-in-a-box brands (Nectar, Purple, Casper, WinkBed) require a <strong>Solid Foundation</strong> or <strong>Slatted Base</strong>.</p>
                            <ul className="space-y-2 text-sm text-jet-black font-medium">
                                <li className="flex items-center bg-green-50 p-2 rounded">• Platform Bed (Wood slats &lt; 3" apart)</li>
                                <li className="flex items-center bg-green-50 p-2 rounded">• Adjustable Base</li>
                                <li className="flex items-center bg-green-50 p-2 rounded">• Metal Grid Platform</li>
                                <li className="flex items-center bg-green-50 p-2 rounded">• Bunkie Board</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-red-700 flex items-center mb-3">
                                <XCircle className="mr-2" size={20} /> What to Avoid
                            </h3>
                            <p className="text-graphite mb-4 text-sm">Traditional wire box springs are designed for old innerspring coils. They provide "give" that damages foam.</p>
                            <ul className="space-y-2 text-sm text-jet-black font-medium">
                                <li className="flex items-center bg-red-50 p-2 rounded">• Old Flexible Wire Box Springs</li>
                                <li className="flex items-center bg-red-50 p-2 rounded">• Slats spaced &gt; 3" apart (Sag risk)</li>
                                <li className="flex items-center bg-red-50 p-2 rounded">• Placing mattress directly on floor (Mold risk)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <article className="prose prose-lg prose-slate mx-auto text-graphite">
                    <h3 className="text-2xl font-bold text-jet-black mb-4">Why the Change?</h3>
                    <p>
                        Older mattresses were thinner and built with interconnected coils that needed a shock-absorbing box spring to prevent wear.
                    </p>
                    <p>
                        Modern mattresses are heavier, thicker, and made with foam or individually wrapped coils. They need a <strong>rigid, non-flexing surface</strong> to support their weight and yours. Putting a heavy memory foam mattress on a bouncy box spring causes it to sag in the middle, creating a "hammock" effect that ruins support and voids the warranty.
                    </p>

                    <div className="bg-golden-bronze/10 border-l-4 border-golden-bronze p-6 my-8 rounded-r-lg">
                        <div className="flex items-start">
                            <HelpCircle className="text-golden-bronze mr-3 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-jet-black font-bold m-0 text-lg">"But I have a bed frame that requires a box spring for height..."</h4>
                                <p className="text-graphite m-0 text-sm mt-1">
                                    Instead of a traditional box spring, buy a <strong>"Foundation"</strong>. It looks exactly like a box spring (fabric covered wood box), but it has solid wooden slats inside instead of bouncy springs. It gives you the height you need with the rigid support your mattress requires.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>

            </main>
        </div>
    );
};

export default DoINeedABoxSpring;
