'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Shield, ShieldAlert, Check, X, Search, AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import RelatedFAQ from '../../../components/RelatedFAQ';

const FiberglassFree = () => {
    const relatedFaqs = [
        {
            title: 'Is Memory Foam Toxic?',
            link: '/faqs/memory-foam-toxic',
            category: 'Science'
        },
        {
            title: 'Memory Foam vs. Natural Latex',
            link: '/faqs/memory-foam-vs-latex',
            category: 'Materials'
        },
        {
            title: 'The Afterlife of a Mattress',
            link: '/faqs/mattress-disposal-guide',
            category: 'Maintenance'
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const brands = [
        { name: "Saatva", status: "safe", note: "Uses natural thistle & wool barriers.", type: "Natural" },
        { name: "PlushBeds", status: "safe", note: "Uses organic wool.", type: "Latex/Natural" },
        { name: "Avocado", status: "safe", note: "Uses organic wool.", type: "Latex/Natural" },
        { name: "Nolah", status: "safe", note: "Uses proprietary woven silica sock (non-glass).", type: "Foam/Hybrid" },
        { name: "Bear", status: "safe", note: "Uses 'Whisper Shield' rayon.", type: "Hybrid" },
        { name: "Nectar (Newer)", status: "mixed", note: "Newer models use PE blend, but older models (<2022) had fiberglass.", type: "Memory Foam" },
        { name: "DreamCloud (Newer)", status: "mixed", note: "Same parent company as Nectar. Verify label.", type: "Hybrid" },
        { name: "Zinus", status: "danger", note: "Notorious for fiberglass contamination lawsuits.", type: "Budget Foam" },
        { name: "Ashley Furniture", status: "danger", note: "Often uses glass fiber socks.", type: "Budget" },
        { name: "Lucid", status: "danger", note: "Contains glass fiber.", type: "Budget" },
        { name: "Vibe", status: "danger", note: "Contains glass fiber.", type: "Budget" },
        { name: "Birch", status: "safe", note: "Wool barrier.", type: "Natural" },
        { name: "WinkBed", status: "safe", note: "Rayon/cotton blend barrier.", type: "Hybrid" }
    ];

    const filteredBrands = brands.filter(b => b.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
                        <ShieldAlert size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-jet-black mb-6 font-serif">
                        Which Mattresses Are Fiberglass Free?
                    </h1>
                    <p className="text-xl text-graphite leading-relaxed max-w-2xl mx-auto">
                        Fiberglass is a cheap fire retardant used in many budget mattresses. If it leaks, it can ruin your home and health. Here is who to trust and who to avoid.
                    </p>
                </header>

                {/* Search / Filter Section */}
                <div className="mb-8">
                    <div className="relative max-w-lg mx-auto">
                        <input
                            type="text"
                            placeholder="Search for a brand..."
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-alabaster-grey bg-white shadow-sm focus:ring-2 focus:ring-golden-bronze focus:border-transparent outline-none transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-4 top-3.5 text-graphite/50" size={20} />
                    </div>
                </div>

                {/* Results Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-alabaster-grey overflow-hidden mb-12">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-jet-black text-white text-sm uppercase tracking-wider">
                                    <th className="p-4 font-semibold">Brand</th>
                                    <th className="p-4 font-semibold">Verdict</th>
                                    <th className="p-4 font-semibold">Fire Barrier Material</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-alabaster-grey">
                                {filteredBrands.length > 0 ? (
                                    filteredBrands.map((brand, idx) => (
                                        <tr key={idx} className="hover:bg-alabaster-grey/10 transition-colors">
                                            <td className="p-4 font-bold text-jet-black">
                                                {brand.name}
                                                <div className="text-xs text-graphite font-normal mt-1">{brand.type}</div>
                                            </td>
                                            <td className="p-4">
                                                {brand.status === 'safe' && (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        <Check size={12} className="mr-1" /> Safe
                                                    </span>
                                                )}
                                                {brand.status === 'danger' && (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        <X size={12} className="mr-1" /> Avoid
                                                    </span>
                                                )}
                                                {brand.status === 'mixed' && (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                        <AlertTriangle size={12} className="mr-1" /> Caution
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-4 text-sm text-graphite">{brand.note}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="p-8 text-center text-graphite">No brands found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <article className="prose prose-lg prose-slate mx-auto text-graphite">
                    <h3 className="text-2xl font-bold text-jet-black mb-4">Why is Fiberglass Used?</h3>
                    <p>
                        US law requires mattresses to withstand an open flame for a specific period. To meet this standard cheaply, budget manufacturers wrap the inner foam in a "sock" made of glass fibers. When exposed to fire, the glass melts and forms a barrier.
                    </p>
                    <p>
                        However, if you remove the cover (even if it has a zipper!), these millions of microscopic glass shards can explode into your room, contaminating clothes, HVAC systems, and lungs.
                    </p>
                </article>

                <RelatedFAQ faqs={relatedFaqs} />
            </main>
        </div>
    );
};

export default FiberglassFree;
