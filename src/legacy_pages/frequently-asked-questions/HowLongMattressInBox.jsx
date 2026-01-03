import React from 'react';
import Header from '../../components/Header';
import { ArrowLeft, Clock, AlertOctagon, Ban, Package, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowLongMattressInBox = () => {
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
                            Shipping & Delivery
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-jet-black tracking-tight mb-6 leading-tight">
                            How Long Can a Mattress Stay in the Box?
                        </h1>
                        <p className="text-xl text-graphite/80 leading-relaxed">
                            Buying early for a move? Be careful. Waiting too long to unbox can permanently ruin your bed and void your warranty.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-slate mx-auto text-graphite">
                        <p className="lead text-2xl font-serif text-jet-black mb-8 border-l-4 border-golden-bronze pl-6 italic">
                            The Golden Rule: You should unbox your mattress within <strong>30 days</strong> of delivery. The absolute maximum for most brands is <strong>60 to 90 days</strong>.
                        </p>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Package className="text-golden-bronze" />
                            Why Does It Have an Expiration Date?
                        </h2>
                        <p>
                            It seems counterintuitive. If it's just foam and coils, why does it spoil?
                        </p>
                        <p>
                            Modern "bed-in-a-box" mattresses are compressed under thousands of pounds of pressure to fit into those shipping boxes.
                        </p>
                        <ul className="space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <div className="bg-golden-bronze/20 text-golden-bronze px-2 py-1 rounded mt-1 flex-shrink-0">
                                    <span className="font-bold text-sm">FOAM</span>
                                </div>
                                <span><strong>Memory Foam Compression:</strong> The air pockets in the foam are forcibly collapsed. If left collapsed for too long, the cell walls bond together or lose their elasticity. They won't bounce back.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-graphite/20 text-graphite px-2 py-1 rounded mt-1 flex-shrink-0">
                                    <span className="font-bold text-sm">COILS</span>
                                </div>
                                <span><strong>Spring Integrity:</strong> While steel is resilient, keeping pocketed coils tightly wound for months can weaken the metal, leading to a mattress that feels softer or sags prematurely.</span>
                            </li>
                        </ul>

                        <div className="bg-alabaster-grey/30 rounded-2xl p-8 my-12">
                            <h3 className="text-xl font-bold text-jet-black mt-0 mb-6 text-center">The 3 Risks of Waiting</h3>
                            <div className="grid gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey flex gap-4 items-start">
                                    <ShieldAlert className="text-red-700 flex-shrink-0" size={32} />
                                    <div>
                                        <h4 className="font-bold text-jet-black m-0 text-lg">1. Voided Warranty</h4>
                                        <p className="text-sm mt-2 mb-0">
                                            This is the biggest "gotcha." Almost every brand includes a clause requiring unboxing within a specific window (usually 90 days). If you open it on day 95 and it doesn't expand, <strong>you are not covered.</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey flex gap-4 items-start">
                                    <Ban className="text-red-700 flex-shrink-0" size={32} />
                                    <div>
                                        <h4 className="font-bold text-jet-black m-0 text-lg">2. Permanent Decompression Failure</h4>
                                        <p className="text-sm mt-2 mb-0">
                                            The mattress may never reach its full height. A 12-inch mattress might permanently stay at 10 inches, with curled corners that never lay flat.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey flex gap-4 items-start">
                                    <AlertOctagon className="text-red-700 flex-shrink-0" size={32} />
                                    <div>
                                        <h4 className="font-bold text-jet-black m-0 text-lg">3. Weird Smells & Mold</h4>
                                        <p className="text-sm mt-2 mb-0">
                                            Trapped moisture can turn into mildew if the box is stored in a humid garage. Plus, the chemical "off-gassing" scents build up in the plastic, making the smell overwhelming when finally opened.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Clock className="text-golden-bronze" />
                            Brand Rules (Cheat Sheet)
                        </h2>
                        <p>
                            While "30 days" is the safe bet, here are the specific policies for major brands as of 2024:
                        </p>
                        <div className="overflow-hidden border border-alabaster-grey rounded-xl shadow-sm mt-6">
                            <table className="min-w-full text-left text-sm">
                                <thead className="bg-jet-black text-white">
                                    <tr>
                                        <th className="py-3 px-4">Brand</th>
                                        <th className="py-3 px-4">Time Limit</th>
                                        <th className="py-3 px-4">Consequence</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-alabaster-grey bg-white">
                                    <tr>
                                        <td className="py-3 px-4 font-bold">Nectar</td>
                                        <td className="py-3 px-4">90 Days</td>
                                        <td className="py-3 px-4 text-red-700">Audit required / Warranty Void</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold">Casper</td>
                                        <td className="py-3 px-4">3 Months</td>
                                        <td className="py-3 px-4 text-red-700">Warranty Void</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold">Purple</td>
                                        <td className="py-3 px-4">"Promptly"</td>
                                        <td className="py-3 px-4 text-graphite">Must establish defect wasn't storage-related</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold">Tuft & Needle</td>
                                        <td className="py-3 px-4">30 Days (Rec.)</td>
                                        <td className="py-3 px-4 text-graphite">Harder to claim warranty after 3-4 weeks</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold">Saatva</td>
                                        <td className="py-3 px-4">N/A</td>
                                        <td className="py-3 px-4 text-green-700">Not compressed (Delivered Flat)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6">Summary</h2>
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">1.</span>
                                <span><strong>Don't Wait:</strong> Unbox as soon as you can. It needs to breathe.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">2.</span>
                                <span><strong>The 90-Day Cliff:</strong> After 3 months, you are in the danger zone for almost every brand.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">3.</span>
                                <span><strong>Check the Date:</strong> If you bought "New" from a third-party seller, check the manufacture date on the box. It might have been sitting in a warehouse for months already.</span>
                            </li>
                        </ul>

                    </div>

                    <div className="mt-16 pt-8 border-t border-alabaster-grey text-center">
                        <p className="text-graphite mb-4">Worried about durability?</p>
                        <Link to="/mattress-reviews" className="text-jet-black font-bold border-b-2 border-golden-bronze hover:text-golden-bronze transition-colors">
                            See which mattresses actually last
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default HowLongMattressInBox;
