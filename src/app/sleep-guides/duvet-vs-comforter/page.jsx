'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Copy, Check, Quote, ThumbsUp, CheckCircle, ChevronDown, BedDouble, Layers, Droplets, Info } from 'lucide-react';
import Link from 'next/link';

const DuvetVsComforter = () => {
    const [copied, setCopied] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleCopy = () => {
        const text = "A comforter is a single piece of bedding with a built-in fill, while a duvet consists of a separate insert and a removable cover, which makes the cover easier to wash frequently.";
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What is a bedspread?",
            answer: "A bedspread is usually thinner than a comforter and hangs lower, often touching the floor. Unlike a comforter and duvet which are both designed to be fluffy and lofty, a bedspread has a denser, quilted feel and is primarily decorative."
        },
        {
            question: "Can I use a duvet cover on a comforter?",
            answer: "Yes! Many people put their old comforter inside a duvet cover to refresh the style of their room without buying a new insert. Just make sure the dimensions match closely."
        },
        {
            question: "Which is warmer?",
            answer: <span>Warmth depends on the "fill power" and material, not necessarily whether it is a duvet or comforter. However, duvets often allow you to swap inserts seasonally (e.g., a thick wool insert for winter and a thin synthetic one for summer), offering better temperature customization (like our <Link href="/top-picks/best-cooling" className="text-golden-bronze hover:underline">Best Cooling Mattresses</Link> pick).</span>
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-graphite">
            <Header />

            {/* Hero Section */}
            <header className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6">
                <div className="absolute top-0 -left-20 w-64 h-64 bg-golden-bronze/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 -right-20 w-80 h-80 bg-jet-black/5 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-golden-bronze/10 text-golden-bronze text-xs font-bold tracking-wide uppercase mb-6 border border-golden-bronze/20">
                        Bedding Comparison
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-jet-black mb-10 leading-tight">
                        What is the difference between a <span className="text-golden-bronze">Duvet</span> and a <span className="text-golden-bronze">Comforter</span>?
                    </h1>

                    {/* Highlighted Answer Box */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-golden-bronze text-left relative overflow-hidden">
                        <div className="flex items-start gap-4">
                            <div className="bg-golden-bronze/10 p-3 rounded-full hidden sm:block shrink-0">
                                <Quote className="text-golden-bronze w-6 h-6 fill-current" />
                            </div>
                            <div className="flex-1">
                                <p className="text-lg md:text-xl text-jet-black leading-relaxed font-medium">
                                    A <strong className="text-golden-bronze">comforter</strong> is a single piece of bedding with a built-in fill, while a
                                    <strong className="text-golden-bronze"> duvet</strong> consists of a separate insert and a removable cover, which makes the cover easier to wash frequently.
                                </p>
                                <div className="mt-6 pt-6 border-t border-alabaster-grey flex items-center justify-between">
                                    <span className="text-sm text-gray-400 font-bold uppercase tracking-wider">Quick Summary</span>
                                    <button
                                        onClick={handleCopy}
                                        className={`flex items-center gap-2 text-sm font-bold transition-colors ${copied ? 'text-green-600' : 'text-golden-bronze hover:text-jet-black'}`}
                                    >
                                        {copied ? <Check size={16} /> : <Copy size={16} />}
                                        {copied ? 'Copied!' : 'Copy Summary'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Side by Side Detailed Comparison */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Comforter Card */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-alabaster-grey hover:shadow-xl transition duration-300 group">
                        <div className="bg-alabaster-grey/30 h-48 flex items-center justify-center relative">
                            <BedDouble className="w-20 h-20 text-gray-300 group-hover:text-gray-400 transition-colors" />
                            <div className="absolute bottom-6 left-6">
                                <h2 className="text-3xl font-bold text-jet-black">The Comforter</h2>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-graphite mb-8 leading-relaxed">
                                A ready-to-go bedding solution. It is one single piece of quilted fabric containing a built-in filling (down, poly-fill, etc.).
                            </p>

                            <h3 className="font-bold text-jet-black mb-4 flex items-center gap-2">
                                <ThumbsUp className="text-green-600 w-5 h-5" /> Best For You If:
                            </h3>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "You want a cheaper, all-in-one solution.",
                                    "You want to avoid the hassle of assembling covers.",
                                    "You have a large capacity washer/dryer for cleaning."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-graphite">
                                        <CheckCircle className="w-5 h-5 text-golden-bronze shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
                                <p className="text-xs text-orange-800 font-bold uppercase mb-2">Key Drawback</p>
                                <p className="text-sm text-orange-900 font-medium">Harder to wash deeply as the entire bulky item must fit in the machine.</p>
                            </div>
                        </div>
                    </div>

                    {/* Duvet Card */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-alabaster-grey hover:shadow-xl transition duration-300 group">
                        <div className="bg-golden-bronze/5 h-48 flex items-center justify-center relative">
                            <Layers className="w-20 h-20 text-golden-bronze/30 group-hover:text-golden-bronze/50 transition-colors" />
                            <div className="absolute bottom-6 left-6">
                                <h2 className="text-3xl font-bold text-jet-black">The Duvet</h2>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-graphite mb-8 leading-relaxed">
                                A two-part system consisting of a soft, flat bag filled with down or synthetic fibers (the insert) and a removable protective shell (the cover).
                            </p>

                            <h3 className="font-bold text-jet-black mb-4 flex items-center gap-2">
                                <ThumbsUp className="text-green-600 w-5 h-5" /> Best For You If:
                            </h3>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "You want flexibility to change styles easily.",
                                    "You want to wash your bedding frequently (just wash the cover).",
                                    "You suffer from allergies and need regular cleaning."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-graphite">
                                        <CheckCircle className="w-5 h-5 text-golden-bronze shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
                                <p className="text-xs text-orange-800 font-bold uppercase mb-2">Key Drawback</p>
                                <p className="text-sm text-orange-900 font-medium">Requires assembly; the insert can sometimes bunch up inside the cover.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Washing Guide */}
            <section className="bg-alabaster-grey/20 py-20 border-t border-alabaster-grey">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-golden-bronze">
                            <Droplets size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-jet-black mb-4">Care & Maintenance</h2>
                        <p className="text-graphite max-w-2xl mx-auto">How to keep your bedding fresh based on expert testing. Proper care extends the life of your bedding significantly. (See also our guide on <Link href="/sleep-guides/how-to-clean-mattress" className="text-golden-bronze hover:underline">cleaning a mattress</Link>.)</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Washing Duvet */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-golden-bronze text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-jet-black mb-3">How to wash a Duvet</h3>
                                <p className="text-graphite leading-relaxed">
                                    Remove the cover and zip or button it closed to prevent tangling. Wash the <strong>cover</strong> on a cold cycle. The <strong>insert</strong> usually needs washing less frequently (every 6-12 months) and should be washed separately from the cover for the best results.
                                </p>
                            </div>
                        </div>

                        {/* Washing Comforter */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-jet-black text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-jet-black mb-3">How to wash a Comforter</h3>
                                <p className="text-graphite leading-relaxed">
                                    Place the entire piece into the washer (ensure your washer is large enough). Wash on cold. For best drying results, tumble on low for 15-20 minutes to fluff, then lay out or hang to complete drying to prevent heat damage to the fill.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
                <h2 className="text-3xl font-bold text-jet-black mb-10 text-center flex items-center justify-center gap-3">
                    <Info className="text-golden-bronze" /> Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border border-alabaster-grey rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="font-bold text-jet-black text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={`text-gray-400 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-golden-bronze' : ''}`}
                                />
                            </button>
                            <div
                                className={`px-6 text-graphite bg-alabaster-grey/10 transition-all duration-300 ease-in-out border-t border-alabaster-grey ${openFaq === index ? 'max-h-96 py-5 opacity-100' : 'max-h-0 py-0 opacity-0 border-none'}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DuvetVsComforter;
