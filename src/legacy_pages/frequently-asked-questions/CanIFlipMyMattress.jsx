import React from 'react';
import Header from '../../components/Header';
import { ArrowLeft, RotateCw, XCircle, CheckCircle, AlertTriangle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const CanIFlipMyMattress = () => {
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
                            Mattress Maintenance
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-jet-black tracking-tight mb-6 leading-tight">
                            Can (and Should) I Flip My Mattress?
                        </h1>
                        <p className="text-xl text-graphite/80 leading-relaxed">
                            It used to be standard advise. Now, it might be the worst thing you can do for your sleep.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-slate mx-auto text-graphite">
                        <p className="lead text-2xl font-serif text-jet-black mb-8 border-l-4 border-golden-bronze pl-6 italic">
                            If you bought your mattress in the last 10 years, the answer is almost certainly <strong>NO</strong>. But there is one crucial maintenance step you are probably skipping.
                        </p>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Layers className="text-golden-bronze" />
                            The Anatomy of Modern Mattresses
                        </h2>
                        <p>
                            To understand why flipping is dead, you have to look inside the bed.
                        </p>
                        <p>
                            <strong>Old School Mattresses:</strong> Were built like a sandwich. Identical padding on top and bottom, with springs in the middle. You flipped them to wear down the padding evenly.
                        </p>
                        <p>
                            <strong>Modern Mattresses (One-Sided):</strong> Are built like a cake.
                        </p>
                        <ul className="space-y-6 my-8">
                            <li className="flex items-start gap-3">
                                <div className="bg-golden-bronze/20 text-golden-bronze px-2 py-1 rounded mt-1">
                                    <span className="font-bold text-sm">TOP</span>
                                </div>
                                <span><strong>Comfort Layers:</strong> Soft memory foam, latex, or pillow-tops designed for pressure relief.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-graphite/20 text-graphite px-2 py-1 rounded mt-1">
                                    <span className="font-bold text-sm">BOTTOM</span>
                                </div>
                                <span><strong>Support Core:</strong> High-density polyfoam or stiff coils designed to hold you up.</span>
                            </li>
                        </ul>
                        <p>
                            If you flip a modern mattress, you are sleeping directly on the unyielding support core. It will feel rock hard, uncomfortable, and you will crush the soft comfort layers (now on the bottom) against the bed frame, ruining them.
                        </p>

                        <div className="bg-alabaster-grey/30 rounded-2xl p-8 my-12">
                            <h3 className="text-xl font-bold text-jet-black mt-0 mb-6 text-center">The "Flip vs. Rotate" Checklist</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                                    <div className="flex items-center gap-3 mb-4 text-red-700 font-bold">
                                        <XCircle size={24} />
                                        <span>DO NOT FLIP IF:</span>
                                    </div>
                                    <ul className="space-y-3 text-sm">
                                        <li>• It's a "Bed-in-a-Box" (Casper, Nectar, etc).</li>
                                        <li>• It has a "Pillow Top" or "Euro Top".</li>
                                        <li>• It has a specific "top" side fabric design.</li>
                                        <li>• It's a Hybrid (Coils + Foam).</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                                    <div className="flex items-center gap-3 mb-4 text-green-700 font-bold">
                                        <CheckCircle size={24} />
                                        <span>YOU CAN FLIP IF:</span>
                                    </div>
                                    <ul className="space-y-3 text-sm">
                                        <li>• It's explicitly marketed as "Flippable" or "2-Sided" (e.g. Layla).</li>
                                        <li>• It's an old-school innerspring (older than ~2010).</li>
                                        <li>• Both sides look and feel exactly the same.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <RotateCw className="text-golden-bronze" />
                            What You Should Do Instead: Rotation
                        </h2>
                        <div className="bg-golden-bronze/5 border-l-4 border-golden-bronze p-6 rounded-r-lg mb-8">
                            <div className="flex gap-4">
                                <AlertTriangle className="text-golden-bronze flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-jet-black mt-0 mb-2">The Golden Rule of Maintenance</h4>
                                    <p className="text-graphite text-sm m-0">
                                        Even if you can't flip it, you <strong>MUST</strong> rotate it. Spin the mattress 180 degrees (head to foot) every <strong>3 to 6 months</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p>
                            <strong>Why Rotate?</strong><br />
                            Human bodies are heavy, especially at the hips and shoulders. If you sleep in the same spot every night, you create impressions (sags) in that specific area. Rotating the mattress ensures wear is distributed evenly across the surface, preventing premature sagging and voided warranties.
                        </p>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6">Summary</h2>
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">1.</span>
                                <span><strong>Check the Manual:</strong> 95% of today's mattresses are one-sided.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">2.</span>
                                <span><strong>Don't Flip blindly:</strong> You'll likely end up sleeping on a rock-hard bottom layer.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">3.</span>
                                <span><strong>Rotate Regularly:</strong> Head-to-toe rotation every season keeps the foams even and the warranty valid.</span>
                            </li>
                        </ul>

                    </div>

                    <div className="mt-16 pt-8 border-t border-alabaster-grey text-center">
                        <p className="text-graphite mb-4">Have a specific model in mind?</p>
                        <Link to="/mattress-reviews" className="text-jet-black font-bold border-b-2 border-golden-bronze hover:text-golden-bronze transition-colors">
                            Check our reviews for maintenance tips
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default CanIFlipMyMattress;
