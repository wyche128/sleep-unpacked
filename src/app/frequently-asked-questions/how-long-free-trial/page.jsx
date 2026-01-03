'use client';

import React from 'react';
import Header from '../../../components/Header';
import { Calendar, Truck, RefreshCcw, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const HowLongSleepTrial = () => {
    return (
        <div className="font-sans text-jet-black bg-white min-h-screen">
            <Header />

            {/* Breadcrumb */}
            <div className="bg-alabaster-grey/20 border-b border-alabaster-grey">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <Link href="/frequently-asked-questions" className="inline-flex items-center text-sm font-bold text-golden-bronze hover:text-jet-black transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to FAQ
                    </Link>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 py-12">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-golden-bronze/10 rounded-full text-golden-bronze mb-6">
                        <Calendar size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-jet-black mb-6 font-serif">
                        How Do Sleep Trials Actually Work?
                    </h1>
                    <p className="text-xl text-graphite leading-relaxed max-w-2xl mx-auto">
                        "Risk-free" returns usually have a few hidden rules. Here is how to avoid getting stuck with a mattress you hate.
                    </p>
                </header>

                <div className="bg-white border border-alabaster-grey rounded-2xl p-8 mb-12 shadow-sm">
                    <h2 className="text-2xl font-bold text-jet-black mb-6 border-b border-alabaster-grey pb-4">Standard vs. "Gotcha" Policies</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-alabaster-grey/30 text-graphite text-xs uppercase tracking-wider">
                                    <th className="p-4 rounded-tl-lg">Period</th>
                                    <th className="p-4">Process</th>
                                    <th className="p-4">The "Catch"</th>
                                    <th className="p-4 rounded-tr-lg">Who Does This?</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-alabaster-grey text-sm">
                                <tr>
                                    <td className="p-4 font-bold text-jet-black">100 Nights</td>
                                    <td className="p-4">Standard industry minimum.</td>
                                    <td className="p-4 text-red-600 font-medium">Mandatory 30-day "Break-In" period.</td>
                                    <td className="p-4 text-graphite">Casper, Purple, Leesa</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-jet-black">365 Nights</td>
                                    <td className="p-4">Full year trial.</td>
                                    <td className="p-4 text-golden-bronze font-medium">Return shipping costs ($99) sometimes apply.</td>
                                    <td className="p-4 text-graphite">Nectar, DreamCloud, WinkBed</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-jet-black">Amazon Returns</td>
                                    <td className="p-4">30 to 100 days.</td>
                                    <td className="p-4 text-red-600 font-bold">Impossible to repackage. Pickup often refused.</td>
                                    <td className="p-4 text-graphite">Zinus, Signature Sleep</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-jet-black mb-4 flex items-center">
                            <AlertCircle className="text-golden-bronze mr-2" /> The 30-Day "Break-In" Rule
                        </h3>
                        <p className="text-graphite mb-4">
                            Most brands <strong>will not let you return the bed</strong> until you have owned it for at least 30 days.
                        </p>
                        <p className="text-graphite text-sm bg-alabaster-grey/20 p-4 rounded-lg border-l-4 border-jet-black">
                            <strong>Why?</strong> Your body needs to adjust to a new posture, and the foam needs to fully expand. The first week is usually the most uncomfortable.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-jet-black mb-4 flex items-center">
                            <Truck className="text-jet-black mr-2" /> How Returns Work
                        </h3>
                        <p className="text-graphite mb-4">
                            You assume you have to put it back in the box. <strong>You do not.</strong> Once expanded, it never fits back in.
                        </p>
                        <ul className="space-y-2 text-sm text-graphite">
                            <li className="flex items-start">
                                <RefreshCcw size={16} className="mr-2 mt-1 text-green-600" />
                                <span><strong>Pickup:</strong> Brands send a junk removal service (like 1-800-GOT-JUNK) to take it away.</span>
                            </li>
                            <li className="flex items-start">
                                <RefreshCcw size={16} className="mr-2 mt-1 text-green-600" />
                                <span><strong>Donation:</strong> You donate it to a local charity (Salvation Army) and email the receipt for a refund.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default HowLongSleepTrial;
