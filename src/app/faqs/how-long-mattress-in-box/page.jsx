'use client';

import React from 'react';
import Header from '../../../components/Header';
import { Package, Clock, AlertTriangle, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import RelatedFAQ from '../../../components/RelatedFAQ';

const HowLongMattressInBox = () => {
    const relatedFaqs = [
        {
            title: 'Why Your New Mattress Feels Like Concrete',
            link: '/faqs/how-to-break-in-mattress',
            category: 'Setup'
        },
        {
            title: 'Is Memory Foam Toxic?',
            link: '/faqs/memory-foam-toxic',
            category: 'Science'
        },
        {
            title: 'The 1.5-Inch Indentation Threshold',
            link: '/faqs/one-point-five-inch-threshold',
            category: 'Warranties'
        }
    ];

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
                        <Package size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-jet-black mb-6 font-serif">
                        How Long Can a Mattress Stay in the Box?
                    </h1>
                    <p className="text-xl text-graphite leading-relaxed max-w-2xl mx-auto">
                        Leaving a mattress compressed too long can permanently damage the foam. Here are the specific deadlines for major brands.
                    </p>
                </header>

                {/* Brand Limits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                        <div className="text-red-800 font-bold mb-2">Strict Limit</div>
                        <div className="text-4xl font-bold text-jet-black mb-1">30 Days</div>
                        <div className="text-xs text-graphite uppercase tracking-wide">Purple, Casper, Nectar</div>
                        <p className="text-sm text-graphite mt-3">Warranty often voided if left longer.</p>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl text-center">
                        <div className="text-yellow-800 font-bold mb-2">Moderate Limit</div>
                        <div className="text-4xl font-bold text-jet-black mb-1">60 Days</div>
                        <div className="text-xs text-graphite uppercase tracking-wide">Tuft & Needle, Leesa</div>
                        <p className="text-sm text-graphite mt-3">Risk of corner decompression issues.</p>
                    </div>

                    <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                        <div className="text-green-800 font-bold mb-2">Lenient</div>
                        <div className="text-4xl font-bold text-jet-black mb-1">90 Days</div>
                        <div className="text-xs text-graphite uppercase tracking-wide">Saatva (Not boxed), Some Hybrids</div>
                        <p className="text-sm text-graphite mt-3">Rarely recommended to wait this long.</p>
                    </div>
                </div>

                <article className="prose prose-lg prose-slate mx-auto text-graphite">
                    <h3 className="text-2xl font-bold text-jet-black mb-4">What Happens if You Wait Too Long?</h3>
                    <p>
                        Bed-in-a-box mattresses are vacuum-sealed under thousands of pounds of pressure. This extreme compression is fine for shipping, but foam is not designed to stay crushed forever.
                    </p>
                    <ul className="space-y-4 my-8">
                        <li className="flex items-start">
                            <AlertTriangle className="text-golden-bronze mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <strong className="text-jet-black">Permanent Decompression Failure:</strong> The foam cells get "stuck" closed. When you unroll it, the corners may never fully expand, leaving you with a lopsided bed.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="text-golden-bronze mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <strong className="text-jet-black">Voided Warranty:</strong> Almost every manufacturer has a clause stating claims are invalid if the box wasn't opened within a set window (usually 2-4 weeks). (Learn about <Link href="/faqs/one-point-five-inch-threshold" className="text-golden-bronze hover:underline font-bold">Warranty Indentations</Link>).
                            </div>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="text-golden-bronze mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <strong className="text-jet-black">Off-Gassing Buildup:</strong> Chemical odors (VOCs) build up in the plastic. Opening it later releases a much stronger, more concentrated chemical smell that takes longer to dissipate. (See <Link href="/faqs/memory-foam-toxic" className="text-golden-bronze hover:underline font-bold">is memory foam toxic?</Link>).
                            </div>
                        </li>
                    </ul>

                    <h3 className="text-2xl font-bold text-jet-black mb-4">Best Practice</h3>
                    <p>
                        Open your mattress <strong>within 1 week</strong> of receiving it. If you are moving and bought it early, it is safer to transport it unboxed (expanded) than to leave it crushed in the box for months.
                    </p>
                </article>

                <RelatedFAQ faqs={relatedFaqs} />
            </main>
        </div>
    );
};

export default HowLongMattressInBox;
