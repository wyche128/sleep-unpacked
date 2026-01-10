'use client';

import React from 'react';
import Header from '../../../components/Header';
import RelatedFAQ from '../../../components/RelatedFAQ';
import { Layers, Thermometer, Mic, Wind, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const MemoryFoamDifferent = () => {
    const relatedFaqs = [
        {
            title: 'Memory Foam vs. Latex: Which Lasts Longer?',
            link: '/faqs/memory-foam-vs-latex',
            category: 'Materials'
        },
        {
            title: 'Are Memory Foam Mattresses Toxic?',
            link: '/faqs/memory-foam-toxic',
            category: 'Science'
        },
        {
            title: 'Why Fiberglass is Used in Mattresses',
            link: '/faqs/fiberglass-free',
            category: 'Materials'
        }
    ];

    return (
        <div className="font-sans text-jet-black bg-white min-h-screen">
            <Header />

            {/* Breadcrumb */}
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
                        <Layers size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-jet-black mb-6 font-serif">
                        Memory Foam vs. Poly Foam
                    </h1>
                    <p className="text-xl text-graphite leading-relaxed max-w-2xl mx-auto">
                        They look the same, but one melts under your body heat while the other fights back. Here is how to tell the difference.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Memory Foam Card */}
                    <div className="bg-jet-black text-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 font-serif text-white">Viscoelastic (Memory) Foam</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Thermometer className="text-golden-bronze mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="block text-golden-bronze">Heat Reactive</strong>
                                    <span className="text-alabaster-grey text-sm">Softens when warm (under your body), stays firm when cold. This creates the "melting" sensation.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mic className="text-golden-bronze mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="block text-golden-bronze">Zero Noise</strong>
                                    <span className="text-alabaster-grey text-sm">Absorbs 100% of motion. Great for couples.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="text-golden-bronze mr-3 mt-1 font-bold">⏱️</div>
                                <div>
                                    <strong className="block text-golden-bronze">Slow Response</strong>
                                    <span className="text-alabaster-grey text-sm">Takes 3-5 seconds to return to shape. Leaves a handprint.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Poly Foam Card */}
                    <div className="bg-white border border-alabaster-grey p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 font-serif text-jet-black">Standard Polyurethane Foam</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Wind className="text-graphite mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="block text-jet-black">Instant Response</strong>
                                    <span className="text-graphite text-sm">Bounces back immediately. No "stuck in the mud" feeling. Used in Tuft & Needle, Casper Original.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Thermometer className="text-graphite mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="block text-jet-black">Temperature Neutral</strong>
                                    <span className="text-graphite text-sm">Does not trap heat as aggressively as memory foam.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="text-graphite mr-3 mt-1 font-bold">📉</div>
                                <div>
                                    <strong className="block text-jet-black">Lower Durability</strong>
                                    <span className="text-graphite text-sm">Often used as a budget alternative. Low density versions (under 1.8 PCF) degrade quickly.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <article className="prose prose-lg prose-slate mx-auto text-graphite">
                    <h3 className="text-2xl font-bold text-jet-black mb-4">Which One Do You Need?</h3>
                    <p>
                        <strong>Choose Memory Foam (Viscoelastic) if:</strong> You have deep pressure points (hips/shoulders) and want that classic "hug" feel. Brands: Nectar, Tempur-Pedic.
                    </p>
                    <p>
                        <strong>Choose Poly Foam if:</strong> You rotate positions frequently and hate feeling stuck. It provides a more traditional, floating feel without the quicksand effect. Brands: Casper (The "AirScape" foam is poly foam), Tuft & Needle.
                    </p>

                    <div className="mt-12 p-6 bg-alabaster-grey/30 rounded-2xl border border-alabaster-grey">
                        <h4 className="text-xl font-bold text-jet-black mb-2 tracking-tight">Wait, what about Latex?</h4>
                        <p className="text-sm text-graphite mb-4">
                            Latex is the "other" foam that many people confuse with memory foam. However, it is fundamentally different in both feel and lifespan.
                        </p>
                        <Link href="/faqs/memory-foam-vs-latex" className="text-sm font-bold text-golden-bronze hover:underline flex items-center">
                            See the Memory Foam vs. Latex comparison guide &rarr;
                        </Link>
                    </div>
                </article>

                {/* Related FAQs */}
                <RelatedFAQ faqs={relatedFaqs} />

            </main>
        </div>
    );
};

export default MemoryFoamDifferent;
