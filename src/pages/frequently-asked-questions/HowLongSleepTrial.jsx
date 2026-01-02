import React from 'react';
import Header from '../../components/Header';
import { ArrowLeft, Calendar, ShieldCheck, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowLongSleepTrial = () => {
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
                            Warranties & Returns
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-jet-black tracking-tight mb-6 leading-tight">
                            How Long Is the Sleep Trial? <br />
                            <span className="text-3xl md:text-4xl text-graphite font-normal">(100 Days vs. 365 Days)</span>
                        </h1>
                        <p className="text-xl text-graphite/80 leading-relaxed">
                            Don't get stuck with a bed you hate. Here is exactly how long you have to decide.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-slate mx-auto text-graphite">
                        <p className="lead text-2xl font-serif text-jet-black mb-8 border-l-4 border-golden-bronze pl-6 italic">
                            The industry standard is 100 nights, but many online brands now offer a full year (365 nights) to test their mattress. Always check the "Risk-Free" terms before you buy.
                        </p>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Calendar className="text-golden-bronze" />
                            The Two Main Trial Durations
                        </h2>
                        <p>
                            Almost every "bed-in-a-box" brand offers a home trial. Since you can't try the bed in a store, they let you sleep on it in your own home. If you don't like it within the trial period, they pick it up and refund your money.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-jet-black">The Standard</h3>
                                    <span className="bg-alabaster-grey text-jet-black text-xs font-bold px-2 py-1 rounded">100 NIGHTS</span>
                                </div>
                                <p className="text-sm text-graphite mb-4">
                                    ~3 months. This is enough time to break in the mattress and decide if it works for your back.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-jet-black"><div className="w-1.5 h-1.5 rounded-full bg-golden-bronze"></div>Casper</div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-jet-black"><div className="w-1.5 h-1.5 rounded-full bg-golden-bronze"></div>Purple</div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-jet-black"><div className="w-1.5 h-1.5 rounded-full bg-golden-bronze"></div>Leesa</div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-jet-black"><div className="w-1.5 h-1.5 rounded-full bg-golden-bronze"></div>Helix</div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-jet-black"><div className="w-1.5 h-1.5 rounded-full bg-golden-bronze"></div>Sleep Number</div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-golden-bronze relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-golden-bronze text-white text-[10px] font-bold px-2 py-1 uppercase rounded-bl-lg">
                                    Best Value
                                </div>
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-jet-black">The Premium</h3>
                                    <span className="bg-jet-black text-white text-xs font-bold px-2 py-1 rounded">365 NIGHTS</span>
                                </div>
                                <p className="text-sm text-graphite mb-4">
                                    A full year. You can test the mattress in every season (hot summers, cold winters) to ensure it regulates temperature well.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-jet-black"><CheckCircle size={14} className="text-golden-bronze" /> Nectar</div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-jet-black"><CheckCircle size={14} className="text-golden-bronze" /> DreamCloud</div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-jet-black"><CheckCircle size={14} className="text-golden-bronze" /> Awara</div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-jet-black"><CheckCircle size={14} className="text-golden-bronze" /> WinkBed (120 Nights)</div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-jet-black"><CheckCircle size={14} className="text-golden-bronze" /> Saatva</div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <AlertCircle className="text-golden-bronze" />
                            The "Break-In Period" Trap
                        </h2>
                        <div className="bg-alabaster-grey/30 border-l-4 border-jet-black p-6 rounded-r-lg mb-8">
                            <p className="text-graphite font-medium m-0">
                                <strong>Warning:</strong> Most brands will NOT let you return the mattress in the first 30 days.
                            </p>
                        </div>
                        <p>
                            Why? Because your body needs time to adjust. Specifically:
                        </p>
                        <ul className="space-y-4 list-none pl-0 mt-4">
                            <li className="flex gap-4">
                                <span className="text-golden-bronze font-bold text-xl">1.</span>
                                <div>
                                    <strong className="text-jet-black">Muscle Alignment:</strong> If you've been sleeping on a sagging mattress for years, your back muscles have compensated. A proper, supportive mattress might actually feel uncomfortable for the first 2 weeks as your spine realigns.
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-golden-bronze font-bold text-xl">2.</span>
                                <div>
                                    <strong className="text-jet-black">Material Softening:</strong> High-density foams are often stiff right out of the factory. It takes about 30 days of weight and body heat to soften them to their true comfort level.
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6">Summary</h2>
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">1.</span>
                                <span><strong>Don't Panic Early:</strong> Give the bed at least 30 days before initiating a return.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">2.</span>
                                <span><strong>Keep the Box?</strong> No. Brands typically don't require the original box for returns (it won't fit back in anyway).</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">3.</span>
                                <span><strong>Check Return Fees:</strong> Most are free, but some (like Saatva) charge a $99 pickup fee.</span>
                            </li>
                        </ul>

                    </div>

                    <div className="mt-16 pt-8 border-t border-alabaster-grey text-center">
                        <p className="text-graphite mb-4">Looking for a brand with a 365-night trial?</p>
                        <Link to="/mattress-reviews/nectar-classic" className="text-jet-black font-bold border-b-2 border-golden-bronze hover:text-golden-bronze transition-colors">
                            Read our Nectar Classic review
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default HowLongSleepTrial;
