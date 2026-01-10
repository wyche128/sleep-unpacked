'use client';

import React from 'react';
import Header from '../../../components/Header';
import { Check, X, Thermometer, Mic, Wind, Award } from 'lucide-react';

const CasperVsPurple = () => {
    return (
        <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">
            <Header />

            {/* Header / Title Section */}
            <header className="bg-white shadow-sm border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Casper vs. Purple</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">A Data-Driven Comparison of the Mattress Giants</p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-10">

                {/* Introduction */}
                <section className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">I. Introduction</h2>
                        <div className="space-y-4 text-slate-700 leading-relaxed">
                            <p><strong className="text-slate-900">Overview:</strong> In the world of online mattresses, Casper and Purple are arguably the two most recognizable heavyweights. While they both rose to fame as "bed-in-a-box" pioneers, their approach to sleep science could not be more different.</p>
                            <p><strong className="text-slate-900">The Core Difference:</strong> The fundamental divide lies in their materials. Casper champions a refined, zoned foam construction (often with springs in hybrid models) that offers a familiar, hugging feel. Purple, conversely, relies on its proprietary <strong>Gel Grid™</strong> technology—a Hyper-Elastic Polymer grid that looks like a giant waffle and behaves unlike any foam on the market.</p>
                            <p><strong className="text-slate-900">Goal:</strong> This comparison looks past the marketing hype to determine which brand is better suited for your specific sleep needs based on objective performance data, including cooling, motion isolation, and pressure relief.</p>
                        </div>
                    </div>
                </section>

                {/* At a Glance: Key Wins */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">II. At a Glance: Key Wins & Takeaways</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Winner Card 1 */}
                        <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-3">
                                <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide mr-2">Winner</span>
                                <h3 className="text-lg font-bold text-purple-900">Cooling</h3>
                            </div>
                            <p className="text-xl font-bold text-slate-900 mb-2">Purple</p>
                            <p className="text-slate-600 text-sm">The Hyper-Elastic Polymer Grid is roughly 80% air, providing a level of breathability that even the best foams struggle to match.</p>
                        </div>

                        {/* Winner Card 2 */}
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-3">
                                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide mr-2">Winner</span>
                                <h3 className="text-lg font-bold text-blue-900">"Safe" Pick</h3>
                            </div>
                            <p className="text-xl font-bold text-slate-900 mb-2">Casper</p>
                            <p className="text-slate-600 text-sm">Utilizes a "balanced foam" feel. It contours to the body without feeling alien. Universally comfortable for most sleepers.</p>
                        </div>

                        {/* Winner Card 3 */}
                        <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-3">
                                <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide mr-2">Winner</span>
                                <h3 className="text-lg font-bold text-purple-900">Pressure Relief</h3>
                            </div>
                            <p className="text-xl font-bold text-slate-900 mb-2">Purple</p>
                            <p className="text-slate-600 text-sm">The Grid collapses specifically under heavy pressure points (hips and shoulders) while remaining supportive everywhere else.</p>
                        </div>

                        {/* Winner Card 4 */}
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-3">
                                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide mr-2">Winner</span>
                                <h3 className="text-lg font-bold text-blue-900">Budget</h3>
                            </div>
                            <p className="text-xl font-bold text-slate-900 mb-2">Casper</p>
                            <p className="text-slate-600 text-sm">Generally offers lower price points for entry-level models (like the Casper One) compared to Purple’s entry-level options.</p>
                        </div>
                    </div>
                </section>

                {/* Performance Comparison */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-4">III. Performance Comparison</h2>

                    <div className="space-y-10">
                        {/* Cooling */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                                <Thermometer className="w-6 h-6 mr-2 text-sky-500" />
                                Cooling & Heat Retention
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-5 rounded-lg border-l-4 border-purple-500 shadow-sm">
                                    <h4 className="font-bold text-purple-700 mb-2">Purple</h4>
                                    <p className="text-slate-600 text-sm">Consistently ranks as one of the coolest sleeping surfaces. The physical lattice structure allows air to move freely, preventing heat retention as very little material touches your body.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
                                    <h4 className="font-bold text-blue-700 mb-2">Casper</h4>
                                    <p className="text-slate-600 text-sm">Performs well, especially "Snow" models with Phase Change Material. However, foam is inherently insulating, so they generally run warmer than Purple's open grid.</p>
                                </div>
                            </div>
                        </div>

                        {/* Motion Transfer */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                                <Mic className="w-6 h-6 mr-2 text-indigo-500" />
                                Motion Transfer
                            </h3>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="font-bold text-blue-700 w-24 shrink-0">Casper:</span>
                                        <span className="text-slate-600">Excellent at absorbing energy. Foam layers dampen movement significantly, preventing ripples across the bed. Great for couples.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-purple-700 w-24 shrink-0">Purple:</span>
                                        <span className="text-slate-600">The grid is elastic and bouncy. While base layers dampen some movement, the surface is livelier than Casper, leading to more potential partner disturbance.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Edge Support & Response */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 mb-3">Edge Support</h3>
                                <div className="bg-white p-5 rounded-lg border border-slate-200 h-full">
                                    <p className="mb-3 text-sm text-slate-600"><strong className="text-blue-700">Casper:</strong> Uses a firm foam rail encasement or reinforced coils, providing a very stable edge for sitting and sleeping.</p>
                                    <p className="text-sm text-slate-600"><strong className="text-purple-700">Purple:</strong> Historically a weak point due to grid buckling, but newer <em>Restore</em> models now use high-density foam rails to fix this, bringing scores closer to Casper.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 mb-3">Response Time & Sex</h3>
                                <div className="bg-white p-5 rounded-lg border border-slate-200 h-full">
                                    <p className="mb-3 text-sm text-slate-600"><strong className="text-purple-700">Purple:</strong> "Instant" response. The grid snaps back immediately. High bounce makes it excellent for sex and ease of movement.</p>
                                    <p className="text-sm text-slate-600"><strong className="text-blue-700">Casper:</strong> "Balanced" response. Faster than traditional memory foam but slower than Purple. Absorbs more energy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design & Materials */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">IV. Design & Materials</h2>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                            {/* Casper Construction */}
                            <div className="p-8">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">Casper Construction</div>
                                </div>
                                <ul className="space-y-4">
                                    <li>
                                        <span className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Comfort Layer</span>
                                        <p className="text-slate-600 text-sm">Zoned Support™ foam (softer at shoulders, firmer at hips) and AirScape™ perforated foam.</p>
                                    </li>
                                    <li>
                                        <span className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Support Layer</span>
                                        <p className="text-slate-600 text-sm">Durable high-density base foam or pocketed coils in Hybrid models.</p>
                                    </li>
                                    <li>
                                        <span className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Cover</span>
                                        <p className="text-slate-600 text-sm">Breathable knits, often with cooling phase change material in Snow models.</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Purple Construction */}
                            <div className="p-8 bg-purple-50/30">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="bg-purple-100 text-purple-800 font-bold px-4 py-2 rounded-full">Purple Construction</div>
                                </div>
                                <ul className="space-y-4">
                                    <li>
                                        <span className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Comfort Layer</span>
                                        <p className="text-slate-600 text-sm">The Purple Grid™ (Hyper-Elastic Polymer). Ranges from 2" to 4" thick depending on model.</p>
                                    </li>
                                    <li>
                                        <span className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Support Layer</span>
                                        <p className="text-slate-600 text-sm">High-density poly foam (Original) or pocketed coils (Restore/Rejuvenate Hybrids).</p>
                                    </li>
                                    <li>
                                        <span className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Cover</span>
                                        <p className="text-slate-600 text-sm">SoftFlex stretch cover designed specifically to move with the grid to prevent surface tension.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Firmness & Feel */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">V. Firmness & Feel</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">The Casper Feel</h3>
                            <p className="text-slate-600 italic mb-2">"Medium" to "Medium-Firm"</p>
                            <p className="text-slate-700">Contours slightly but keeps the sleeper supported. It provides a classic "hug" feel that is familiar, cozy, and secure. It avoids the "stuck" feeling of traditional memory foam.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-purple-500">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">The Purple Feel</h3>
                            <p className="text-slate-600 italic mb-2">A "Floating" Sensation</p>
                            <p className="text-slate-700">The grid feels firm until enough pressure is applied, then it buckles to cradle pressure points. Often described as a "love it or hate it" feel. You can feel the grid texture through thin sheets.</p>
                        </div>
                    </div>
                </section>

                {/* Models & Pricing */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">VI. Model Breakdown & Pricing</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
                            <thead>
                                <tr className="bg-slate-100 text-slate-700 text-sm uppercase">
                                    <th className="p-4 border-b border-slate-200">Brand</th>
                                    <th className="p-4 border-b border-slate-200">Entry Level</th>
                                    <th className="p-4 border-b border-slate-200">Core Hybrid</th>
                                    <th className="p-4 border-b border-slate-200">Premium / Cooling</th>
                                    <th className="p-4 border-b border-slate-200">Pricing Tier</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-slate-600">
                                <tr className="border-b border-slate-100">
                                    <td className="p-4 font-bold text-blue-700">Casper</td>
                                    <td className="p-4">Casper One (All-Foam)</td>
                                    <td className="p-4">Casper Dream</td>
                                    <td className="p-4">Casper Snow</td>
                                    <td className="p-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-bold">Budget - Mid</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-purple-700">Purple</td>
                                    <td className="p-4">Purple Original</td>
                                    <td className="p-4">Purple Restore</td>
                                    <td className="p-4">Purple Rejuvenate</td>
                                    <td className="p-4"><span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded text-xs font-bold">Premium - Luxury</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-500 mt-4 italic">*Note: Casper generally dominates the affordable range, while Purple justifies higher price tags with unique manufacturing materials.</p>
                </section>
            </main>

        </div>
    );
};

export default CasperVsPurple;
