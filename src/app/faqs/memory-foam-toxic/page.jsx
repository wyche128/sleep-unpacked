'use client';

import React from 'react';
import Header from '../../../components/Header';
import { Skull, Leaf, CheckCircle, AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import RelatedFAQ from '../../../components/RelatedFAQ';

const MemoryFoamToxic = () => {
    const relatedFaqs = [
        {
            title: 'Which Mattresses Are Fiberglass Free?',
            link: '/faqs/fiberglass-free',
            category: 'Science'
        },
        {
            title: 'Memory Foam vs. Natural Latex',
            link: '/faqs/memory-foam-vs-latex',
            category: 'Materials'
        },
        {
            title: 'How Long Can a Mattress Stay in the Box?',
            link: '/faqs/how-long-mattress-in-box',
            category: 'Setup'
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
                        <Skull size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-jet-black mb-6 font-serif">
                        Is Memory Foam Toxic?
                    </h1>
                    <p className="text-xl text-graphite leading-relaxed max-w-2xl mx-auto">
                        Standard memory foam is made from petroleum, but "toxic" is a strong word. Here is what you are actually inhaling.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h2 className="text-2xl font-bold text-jet-black mb-4 flex items-center">
                            <AlertTriangle className="text-golden-bronze mr-2" /> The "Bad" Stuff
                        </h2>
                        <div className="prose prose-sm text-graphite">
                            <p>
                                Memory foam is polyurethane, chemically treated to be viscous. When unboxed, it releases <strong>Volatile Organic Compounds (VOCs)</strong>.
                            </p>
                            <ul className="space-y-2 !list-none pl-0">
                                <li className="bg-red-50 p-3 rounded-lg border border-red-100">
                                    <strong className="text-red-900 block">Isocyanates</strong>
                                    Reactionary chemicals that can irritate eyes and lungs.
                                </li>
                                <li className="bg-red-50 p-3 rounded-lg border border-red-100">
                                    <strong className="text-red-900 block">Flame Retardants</strong>
                                    Older foams used harsh chemicals. Modern ones use fiberglass or silica socks (safer unless opened). (Check the <Link href="/faqs/fiberglass-free" className="text-red-950 hover:underline font-bold">Fiberglass Free List</Link>).
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-jet-black mb-4 flex items-center">
                            <CheckCircle className="text-green-600 mr-2" /> The Safety Standard
                        </h2>
                        <div className="prose prose-sm text-graphite">
                            <p>
                                Always look for the <strong>CertiPUR-US®</strong> certification. This guarantees:
                            </p>
                            <ul className="space-y-2 !list-none pl-0">
                                <li className="flex items-center bg-green-50 p-3 rounded-lg border border-green-100 font-medium text-green-900">
                                    <CheckCircle size={16} className="mr-2" /> No Ozone Depleters
                                </li>
                                <li className="flex items-center bg-green-50 p-3 rounded-lg border border-green-100 font-medium text-green-900">
                                    <CheckCircle size={16} className="mr-2" /> Low VOCs (&lt; 0.5 ppm)
                                </li>
                                <li className="flex items-center bg-green-50 p-3 rounded-lg border border-green-100 font-medium text-green-900">
                                    <CheckCircle size={16} className="mr-2" /> No Heavy Metals (Mercury, Lead)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-jet-black text-white rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                        <div className="bg-white/10 p-4 rounded-full">
                            <Leaf size={40} className="text-green-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Want 100% Non-Toxic?</h3>
                            <p className="text-alabaster-grey mb-4">
                                If you want to avoid petroleum-based foams entirely, you need <strong>Natural Latex</strong>. It is made from rubber tree sap, widely considered the only truly "organic" foam option.
                            </p>
                            <Link href="/top-picks/best-latex-mattress" className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors">
                                View Organic Options
                            </Link>
                        </div>
                    </div>
                </div>

                <RelatedFAQ faqs={relatedFaqs} />
            </main>
        </div>
    );
};

export default MemoryFoamToxic;
