import React from 'react';
import Header from '../../components/Header';
import { ArrowLeft, Box, CheckCircle, XCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DoINeedABoxSpring = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-graphite selection:bg-golden-bronze selection:text-white">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-12">
                <Link to="/frequently-asked-questions" className="inline-flex items-center gap-2 text-golden-bronze font-bold hover:underline mb-8">
                    <ArrowLeft size={20} /> Back to FAQ Hub
                </Link>

                <article>
                    <header className="mb-12 text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-golden-bronze/10 text-golden-bronze text-xs font-bold uppercase tracking-wide mb-6">
                            Mattress Basics
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-jet-black tracking-tight mb-6 leading-tight">
                            Do I Actually Need a Box Spring?
                        </h1>
                        <p className="text-xl text-graphite/80 leading-relaxed">
                            The short answer is probably "no," but the long answer could save your warranty.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-slate mx-auto text-graphite">
                        <p className="lead text-2xl font-serif text-jet-black mb-8 border-l-4 border-golden-bronze pl-6 italic">
                            Modern mattresses have evolved, but for some reason, the "box spring" myth refuses to die. Here is the definitive rulebook for what to put under your bed.
                        </p>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Box className="text-golden-bronze" />
                            What is a Box Spring, really?
                        </h2>
                        <p>
                            Traditionally, a box spring was a wooden box filled with literal steel coils. It acted as a shock absorber for old-school innerspring mattresses.
                        </p>
                        <p>
                            <strong>Today? Most "box springs" are actually just foundations.</strong> They look like box springs, but they are rigid wooden or metal structures with no springs inside. They provide height and a flat surface, but no shock absorption.
                        </p>

                        <div className="bg-alabaster-grey/30 rounded-2xl p-8 my-12">
                            <h3 className="text-xl font-bold text-jet-black mt-0 mb-6 text-center">The Simple Decision Matrix</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                                    <div className="flex items-center gap-3 mb-4 text-green-700 font-bold">
                                        <CheckCircle size={24} />
                                        <span>Use a Box Spring/Foundation IF:</span>
                                    </div>
                                    <ul className="space-y-3 text-sm">
                                        <li>• You have a standard metal bed frame (the kind with wheels).</li>
                                        <li>• You want your bed to be higher off the ground.</li>
                                        <li>• Your mattress warranty specifically requires a "matching foundation."</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                                    <div className="flex items-center gap-3 mb-4 text-red-700 font-bold">
                                        <XCircle size={24} />
                                        <span>SKIP IT IF:</span>
                                    </div>
                                    <ul className="space-y-3 text-sm">
                                        <li>• You have a platform bed with slats.</li>
                                        <li>• You have an adjustable base (power base).</li>
                                        <li>• You are putting the mattress on the floor (check warranty first!).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6">The "Slat Gap" Danger Zone</h2>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                            <div className="flex gap-4">
                                <AlertTriangle className="text-red-500 flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-red-900 mt-0 mb-2">Detailed Warranty Warning</h4>
                                    <p className="text-red-800 text-sm m-0">
                                        If you use a platform bed, the slats <strong>MUST</strong> be no more than <strong>3-4 inches apart</strong>. Wider gaps allow foam to sag between them, ruining your mattress and voiding your warranty.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p>
                            If your slats are too wide (common in cheaper platform beds), you don't necessarily need a box spring. You can buy a "bunkie board"—a thin piece of plywood or fabric-covered wood—to create a solid surface without adding height.
                        </p>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6">Summary</h2>
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">1.</span>
                                <span><strong>Memory Foam / Hybrid Mattresses:</strong> Need a solid, rigid surface. They do NOT need shock absorption.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">2.</span>
                                <span><strong>Innerspring Mattresses (Old School):</strong> Might benefit from a real box spring, but a rigid foundation works fine too.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">3.</span>
                                <span><strong>Platform Beds:</strong> The bed frame IS the foundation. Just check the slat spacing.</span>
                            </li>
                        </ul>

                    </div>

                    <div className="mt-16 pt-8 border-t border-alabaster-grey text-center">
                        <p className="text-graphite mb-4">Still unsure?</p>
                        <Link to="/frequently-asked-questions" className="text-jet-black font-bold border-b-2 border-golden-bronze hover:text-golden-bronze transition-colors">
                            Ask us a question
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default DoINeedABoxSpring;
