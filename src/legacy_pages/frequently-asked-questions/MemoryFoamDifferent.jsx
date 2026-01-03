import React from 'react';
import Header from '../../components/Header';
import { ArrowLeft, Brain, Thermometer, Activity, Layers, Wind, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const MemoryFoamDifferent = () => {
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
                            Materials & Science
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-jet-black tracking-tight mb-6 leading-tight">
                            How Is Memory Foam Different? <br />
                            <span className="text-3xl md:text-4xl text-graphite font-normal">(The Science of "The Hug")</span>
                        </h1>
                        <p className="text-xl text-graphite/80 leading-relaxed">
                            It reacts to you. While other materials just push back, memory foam actually changes its shape based on your body heat and pressure.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-slate mx-auto text-graphite">
                        <p className="lead text-2xl font-serif text-jet-black mb-8 border-l-4 border-golden-bronze pl-6 italic">
                            Originally designed by NASA to cushion astronauts during lift-off, viscoelastic polyurethane foam (memory foam) is unlike any other bedding material because it doesn't just spring back — it melts.
                        </p>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Brain className="text-golden-bronze" />
                            The Core Difference: "Viscoelasticity"
                        </h2>
                        <p>
                            Most mattress materials (like springs or latex) are purely <strong>elastic</strong>. If you push them down, they immediately push back with the same force.
                        </p>
                        <p>
                            Memory foam is <strong>viscoelastic</strong>. It has both fluid (viscous) and spring-like (elastic) properties.
                        </p>
                        <ul className="space-y-4 my-8">
                            <li className="flex items-start gap-4 p-4 bg-alabaster-grey/30 rounded-lg">
                                <div className="bg-golden-bronze/20 text-golden-bronze p-2 rounded-full mt-1">
                                    <Thermometer size={20} />
                                </div>
                                <div>
                                    <strong className="text-jet-black block mb-1">It Reacts to Heat</strong>
                                    <span>When memory foam gets warm (from your body), it becomes softer and more pliable. This allows it to mold precisely to your curves.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-alabaster-grey/30 rounded-lg">
                                <div className="bg-jet-black text-white p-2 rounded-full mt-1">
                                    <Activity size={20} />
                                </div>
                                <div>
                                    <strong className="text-jet-black block mb-1">It Absorbs Energy (Hysteresis)</strong>
                                    <span>When you move, memory foam doesn't bounce you back. It absorbs the energy of the movement. This is why you can jump on one side of the bed without spilling a glass of wine on the other.</span>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Layers className="text-golden-bronze" />
                            Comparison: Memory Foam vs. The Rest
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 my-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                                <h3 className="font-bold text-jet-black text-xl mb-4 border-b border-alabaster-grey pb-2">Vs. Innerspring</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex gap-2"><span className="text-golden-bronze">●</span> <strong>Feel:</strong> Springs push back; Foam contours.</li>
                                    <li className="flex gap-2"><span className="text-golden-bronze">●</span> <strong>Motion:</strong> Springs transfer motion; Foam isolates it.</li>
                                    <li className="flex gap-2"><span className="text-golden-bronze">●</span> <strong>Pressure:</strong> Springs can create pressure points; Foam relieves them.</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                                <h3 className="font-bold text-jet-black text-xl mb-4 border-b border-alabaster-grey pb-2">Vs. Latex Foam</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex gap-2"><span className="text-golden-bronze">●</span> <strong>Response:</strong> Latex is instant/bouncy; Memory foam is slow/melting.</li>
                                    <li className="flex gap-2"><span className="text-golden-bronze">●</span> <strong>Heat:</strong> Latex sleeps cool; Memory foam can sleep warm.</li>
                                    <li className="flex gap-2"><span className="text-golden-bronze">●</span> <strong>Feel:</strong> Latex feels like "floating on" the bed; Memory foam feels like "sleeping in" the bed.</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Wind className="text-golden-bronze" />
                            The Elephant in the Room: Heat Retention
                        </h2>
                        <p>
                            Because memory foam needs density to work, it has traditionally struggled with airflow. The same properties that create that "hug" can also trap body heat.
                        </p>
                        <div className="bg-golden-bronze/5 border-l-4 border-golden-bronze p-6 rounded-r-lg mt-6 mb-8">
                            <h4 className="font-bold text-jet-black mt-0 mb-2">Modern Solutions</h4>
                            <p className="text-graphite text-sm m-0">
                                Today's advanced memory foams often use <strong>open-cell structure</strong> (like inside a sponge) or <strong>gel infusions</strong> and <strong>Copper/Graphite</strong> additives to pull heat away from the body. They are significantly cooler than foams from the 90s, but still generally warmer than coils or latex.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6">Summary</h2>
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">1.</span>
                                <span><strong>Contouring:</strong> It molds to your exact shape using heat and pressure.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">2.</span>
                                <span><strong>No Bounce:</strong> It absorbs motion, making it ideal for couples.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">3.</span>
                                <span><strong>Pressure Relief:</strong> It disperses weight evenly, reducing pain in hips and shoulders.</span>
                            </li>
                        </ul>

                    </div>

                    <div className="mt-16 pt-8 border-t border-alabaster-grey text-center">
                        <p className="text-graphite mb-4">Want to experience the "hug"?</p>
                        <Link to="/top-picks" className="text-jet-black font-bold border-b-2 border-golden-bronze hover:text-golden-bronze transition-colors">
                            See our top-rated memory foam mattresses
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default MemoryFoamDifferent;
