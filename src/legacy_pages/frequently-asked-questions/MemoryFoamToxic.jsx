import React from 'react';
import Header from '../../components/Header';
import { ArrowLeft, Beaker, AlertTriangle, ShieldCheck, Leaf, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const MemoryFoamToxic = () => {
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
                            Materials & Construction
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-jet-black tracking-tight mb-6 leading-tight">
                            Are Memory Foam Mattresses Toxic? <br />
                            <span className="text-3xl md:text-4xl text-graphite font-normal">(The Truth About "New Mattress Smell")</span>
                        </h1>
                        <p className="text-xl text-graphite/80 leading-relaxed">
                            Most modern foams are safe, but the "chemical smell" is real. Here is what you are actually breathing in.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-slate mx-auto text-graphite">
                        <p className="lead text-2xl font-serif text-jet-black mb-8 border-l-4 border-golden-bronze pl-6 italic">
                            The short answer: No, reputable memory foam mattresses are not toxic to sleep on. However, they do release off-gassing chemicals called VOCs, which can be irritating to sensitive sleepers.
                        </p>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Wind className="text-golden-bronze" />
                            What Is That "Chemical Smell"? (Off-Gassing)
                        </h2>
                        <p>
                            When you unbox a new memory foam mattress, you get hit with a distinct, chemical odor. This is called <strong>off-gassing</strong>. It happens because memory foam is made of polyurethane and other chemicals that break down and release gas when they are first exposed to air.
                        </p>
                        <p className="p-6 bg-alabaster-grey/20 rounded-xl my-6">
                            These gasses are technically <strong>Volatile Organic Compounds (VOCs)</strong>. While that sounds scary, VOCs are everywhere—in your new car, your fresh paint, and even the orange you just peeled.
                        </p>
                        <p className="mt-4 mb-2 font-bold text-jet-black">
                            Are these VOCs dangerous?
                        </p>
                        <ul className="space-y-4 my-8">
                            <li className="flex items-start gap-4 p-4 bg-alabaster-grey/30 rounded-lg">
                                <div className="bg-green-100 text-green-700 p-2 rounded-full mt-1">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <strong className="text-jet-black block mb-1">For Most People: No.</strong>
                                    <span>The levels of VOCs from a certified mattress are considered safe and will dissipate within 3-7 days.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-alabaster-grey/30 rounded-lg">
                                <div className="bg-red-100 text-red-700 p-2 rounded-full mt-1">
                                    <AlertTriangle size={20} />
                                </div>
                                <div>
                                    <strong className="text-jet-black block mb-1">For Sensitive Groups: Maybe.</strong>
                                    <span>People with asthma, chemical sensitivities, or young infants might experience headaches, nausea, or throat irritation from the fumes.</span>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Beaker className="text-golden-bronze" />
                            How to Ensure Your Foam is Safe
                        </h2>
                        <p>
                            In the past, memory foam was made with some pretty nasty stuff like formaldehyde and heavy metals. Today, regulations are tighter. But you still need to verify what is inside your bed.
                        </p>
                        <p>
                            <strong>Look for these two gold-standard certifications:</strong>
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey group hover:border-golden-bronze transition-colors">
                                <div className="mb-4">
                                    <span className="bg-jet-black text-white text-xs font-bold px-2 py-1 rounded">ESSENTIAL</span>
                                </div>
                                <h3 className="text-xl font-bold text-jet-black mb-2">CertiPUR-US®</h3>
                                <p className="text-sm text-graphite mb-4">
                                    The industry standard for foam safety. It guarantees the foam is made:
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-golden-bronze"></div>Without ozone depleters</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-golden-bronze"></div>Without heavy metals (lead, mercury)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-golden-bronze"></div>Without formaldehyde</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-golden-bronze"></div>Low VOC emissions (&lt; 0.5 PPM)</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey group hover:border-golden-bronze transition-colors">
                                <div className="mb-4">
                                    <span className="bg-golden-bronze text-white text-xs font-bold px-2 py-1 rounded">HIGHEST STANDARD</span>
                                </div>
                                <h3 className="text-xl font-bold text-jet-black mb-2">GREENGUARD Gold</h3>
                                <p className="text-sm text-graphite mb-4">
                                    Much stricter than CertiPUR-US. It tests for over 10,000 chemicals and limits total VOC emissions to incredibly low levels.
                                </p>
                                <p className="text-xs text-graphite italic border-t border-alabaster-grey pt-3">
                                    <strong>Best for:</strong> Nurseries, hospitals, and anyone with severe allergies or chemical sensitivities.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Leaf className="text-golden-bronze" />
                            The "Clean" Alternatives
                        </h2>
                        <p>
                            If the idea of polyurethane foam still makes you uneasy, you have natural options that are inherently non-toxic:
                        </p>
                        <ul className="space-y-4 list-none pl-0 mt-6">
                            <li className="flex gap-4">
                                <span className="text-golden-bronze font-bold text-xl">1.</span>
                                <div>
                                    <strong className="text-jet-black">Natural Latex:</strong> Made from the sap of rubber trees. It is naturally hypoallergenic, antimicrobial, and has zero off-gassing. Look for the <strong>GOLS</strong> label.
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-golden-bronze font-bold text-xl">2.</span>
                                <div>
                                    <strong className="text-jet-black">Organic Hybrids:</strong> Mattresses that use coils for support and wool or cotton for comfort layers, avoiding foams entirely.
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6">Summary</h2>
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">1.</span>
                                <span><strong>Smell ≠ Poison:</strong> The new mattress smell is annoying but generally safe if CertiPUR-US certified.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">2.</span>
                                <span><strong>Air It Out:</strong> Open windows and use a fan for the first 48 hours to speed up off-gassing.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">3.</span>
                                <span><strong>Check Labels:</strong> Never buy memory foam that lacks a CertiPUR-US certification.</span>
                            </li>
                        </ul>

                    </div>

                    <div className="mt-16 pt-8 border-t border-alabaster-grey text-center">
                        <p className="text-graphite mb-4">Want a mattress with zero off-gassing?</p>
                        <Link to="/mattress-reviews" className="text-jet-black font-bold border-b-2 border-golden-bronze hover:text-golden-bronze transition-colors">
                            Check out our Eco-Friendly & Latex reviews
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default MemoryFoamToxic;
