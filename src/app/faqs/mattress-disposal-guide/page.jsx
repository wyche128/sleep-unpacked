'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import Link from 'next/link';
import RelatedFAQ from '../../../components/RelatedFAQ';
import {
    Truck,
    Recycle,
    DollarSign,
    AlertTriangle,
    CheckCircle,
    Info,
    ChevronRight,
    Trash2,
    Gift,
    ShieldAlert,
    Box
} from 'lucide-react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
);

const MattressDisposalGuide = () => {
    const relatedFaqs = [
        {
            title: 'Which Mattresses Are Fiberglass Free?',
            link: '/faqs/fiberglass-free',
            category: 'Science'
        },
        {
            title: 'Can I Flip My Mattress?',
            link: '/faqs/can-i-flip-my-mattress',
            category: 'Maintenance'
        },
        {
            title: 'The 1.5-Inch Indentation Threshold',
            link: '/faqs/one-point-five-inch-threshold',
            category: 'Warranties'
        }
    ];

    const [quizState, setQuizState] = useState({
        step: 1,
        condition: null,
        location: null, // 'california' or 'other'
        fiberglassRisk: null, // 'yes' or 'no'
        result: null
    });

    const handleQuizAnswer = (key, value) => {
        const nextState = { ...quizState, [key]: value };

        // Logic Flow
        if (key === 'condition') {
            if (value === 'damaged') {
                // If damaged, go to result (Recycle/Dump)
                setQuizState({ ...nextState, step: 'result', result: 'recycle-dump' });
            } else {
                setQuizState({ ...nextState, step: 2 });
            }
        } else if (key === 'location') {
            if (value === 'california') {
                setQuizState({ ...nextState, step: 'result', result: 'retailer-pickup-ca' });
            } else {
                setQuizState({ ...nextState, step: 3 });
            }
        } else if (key === 'fiberglassRisk') {
            if (nextState.condition === 'pristine') {
                setQuizState({ ...nextState, step: 'result', result: 'sell-donate' });
            } else {
                setQuizState({ ...nextState, step: 'result', result: 'recycle-careful' });
            }
        }
    };

    const resetQuiz = () => {
        setQuizState({
            step: 1,
            condition: null,
            location: null,
            fiberglassRisk: null,
            result: null
        });
    };

    const recyclingData = {
        labels: ['Recyclable (Steel, Foam, Wood)', 'Non-Recyclable'],
        datasets: [
            {
                data: [80, 20],
                backgroundColor: ['#bca37f', '#e2e8f0'], // Golden Bronze, Slate 200
                borderWidth: 0,
            },
        ],
    };

    const resaleData = {
        labels: ['Original Price', 'Resale Value'],
        datasets: [
            {
                label: 'Value ($)',
                data: [1000, 330],
                backgroundColor: ['#1e293b', '#bca37f'], // Jet Black, Golden Bronze
                borderRadius: 4,
            },
        ],
    };

    return (
        <div className="font-sans text-graphite bg-white">
            <Header />

            {/* Hero Section */}
            <header className="bg-jet-black text-white pt-20 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        The Afterlife of a <span className="text-golden-bronze">Mattress</span>
                    </h1>
                    <p className="text-xl text-alabaster-grey mb-10 max-w-2xl mx-auto leading-relaxed">
                        We spend a third of our lives on them, but what happens when they're done?
                        The US disposes of <span className="font-bold text-white">50,000 mattresses every day</span>.
                        Here is how to handle yours responsibly.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button onClick={() => document.getElementById('decision-engine').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-golden-bronze text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-jet-black transition shadow-lg">
                            Decision Tool: What Do I Do?
                        </button>
                    </div>
                </div>
            </header>

            {/* Decision Engine */}
            <section id="decision-engine" className="py-20 bg-alabaster-grey/30">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-jet-black mb-4">Disposal Decision Engine</h2>
                        <p className="text-graphite">Answer 3 questions to find the most ethical and economical exit strategy.</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl border border-alabaster-grey p-8 min-h-[400px] flex flex-col justify-center">
                        {/* Step 1 */}
                        {quizState.step === 1 && (
                            <div className="fade-in">
                                <h3 className="text-xl font-bold mb-8 flex items-center text-jet-black">
                                    <span className="bg-golden-bronze text-white text-sm font-bold px-3 py-1 rounded-full mr-3">1/3</span>
                                    What is the condition of your mattress?
                                </h3>
                                <div className="space-y-4">
                                    <button onClick={() => handleQuizAnswer('condition', 'pristine')}
                                        className="w-full text-left p-5 rounded-xl border-2 border-alabaster-grey hover:border-golden-bronze hover:bg-golden-bronze/5 transition group">
                                        <div className="font-bold text-jet-black group-hover:text-golden-bronze">Pristine</div>
                                        <div className="text-sm text-graphite">Like new. Zero stains, no rips, no structural issues.</div>
                                    </button>
                                    <button onClick={() => handleQuizAnswer('condition', 'worn')}
                                        className="w-full text-left p-5 rounded-xl border-2 border-alabaster-grey hover:border-blue-500 hover:bg-blue-50 transition group">
                                        <div className="font-bold text-jet-black group-hover:text-blue-700">Lived In / Normal Wear</div>
                                        <div className="text-sm text-graphite">Comfortable but clearly used. Minor cosmetic issues.</div>
                                    </button>
                                    <button onClick={() => handleQuizAnswer('condition', 'damaged')}
                                        className="w-full text-left p-5 rounded-xl border-2 border-alabaster-grey hover:border-red-500 hover:bg-red-50 transition group">
                                        <div className="font-bold text-jet-black group-hover:text-red-700">Damaged / Heavily Soiled</div>
                                        <div className="text-sm text-graphite">Stained, torn fabric, broken springs, or structural sagging.</div>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2 */}
                        {quizState.step === 2 && (
                            <div className="fade-in">
                                <h3 className="text-xl font-bold mb-8 flex items-center text-jet-black">
                                    <span className="bg-golden-bronze text-white text-sm font-bold px-3 py-1 rounded-full mr-3">2/3</span>
                                    Are you buying a new mattress in California?
                                </h3>
                                <div className="space-y-4">
                                    <button onClick={() => handleQuizAnswer('location', 'california')}
                                        className="w-full text-left p-5 rounded-xl border-2 border-alabaster-grey hover:border-golden-bronze hover:bg-golden-bronze/5 transition">
                                        <div className="font-bold text-jet-black">Yes, in California</div>
                                    </button>
                                    <button onClick={() => handleQuizAnswer('location', 'other')}
                                        className="w-full text-left p-5 rounded-xl border-2 border-alabaster-grey hover:border-golden-bronze hover:bg-golden-bronze/5 transition">
                                        <div className="font-bold text-jet-black">No / Other Location</div>
                                    </button>
                                </div>
                                <button onClick={resetQuiz} className="mt-6 text-sm text-gray-400 hover:text-jet-black underline">Start Over</button>
                            </div>
                        )}

                        {/* Step 3 */}
                        {quizState.step === 3 && (
                            <div className="fade-in">
                                <h3 className="text-xl font-bold mb-8 flex items-center text-jet-black">
                                    <span className="bg-golden-bronze text-white text-sm font-bold px-3 py-1 rounded-full mr-3">3/3</span>
                                    Is your mattress a budget memory foam model?
                                </h3>
                                <div className="space-y-4">
                                    <button onClick={() => handleQuizAnswer('fiberglassRisk', 'yes')}
                                        className="w-full text-left p-5 rounded-xl border-2 border-alabaster-grey hover:border-amber-500 hover:bg-amber-50 transition">
                                        <div className="font-bold text-jet-black">Yes / Unsure (Risk of Fiberglass)</div>
                                    </button>
                                    <button onClick={() => handleQuizAnswer('fiberglassRisk', 'no')}
                                        className="w-full text-left p-5 rounded-xl border-2 border-alabaster-grey hover:border-golden-bronze hover:bg-golden-bronze/5 transition">
                                        <div className="font-bold text-jet-black">No (Standard Spring / Certified Safe)</div>
                                    </button>
                                </div>
                                <button onClick={resetQuiz} className="mt-6 text-sm text-gray-400 hover:text-jet-black underline">Start Over</button>
                            </div>
                        )}

                        {/* Result */}
                        {quizState.step === 'result' && (
                            <div className="text-center fade-in py-6">
                                <div className="flex justify-center mb-6">
                                    {quizState.result === 'recycle-dump' && <Trash2 size={64} className="text-graphite" />}
                                    {quizState.result === 'retailer-pickup-ca' && <Truck size={64} className="text-golden-bronze" />}
                                    {quizState.result === 'sell-donate' && <Gift size={64} className="text-emerald-600" />}
                                    {quizState.result === 'recycle-careful' && <AlertTriangle size={64} className="text-amber-500" />}
                                </div>

                                <h3 className="text-2xl font-bold text-jet-black mb-4">
                                    {quizState.result === 'recycle-dump' && "Best Option: Recycling Center"}
                                    {quizState.result === 'retailer-pickup-ca' && "Use Your Legal Right: Free Pickup"}
                                    {quizState.result === 'sell-donate' && "Option: Donate or Sell"}
                                    {quizState.result === 'recycle-careful' && "Proceed with Caution: Professional Disposal"}
                                </h3>

                                <p className="text-lg text-graphite mb-8 max-w-lg mx-auto">
                                    {quizState.result === 'recycle-dump' && "Since the mattress is damaged, donation is not an option. Avoid the landfill if possible."}
                                    {quizState.result === 'retailer-pickup-ca' && "In California, the retailer is legally required to pick up your old mattress at no extra charge when you buy a new one."}
                                    {quizState.result === 'sell-donate' && "Your mattress is in pristine condition. Local shelters may accept it, or you can try to sell it."}
                                    {quizState.result === 'recycle-careful' && "Your mattress is worn but not destroyed. However, due to potential fiberglass risks, do NOT attempt to break it down yourself."}
                                </p>

                                <div className="bg-alabaster-grey/50 p-6 rounded-xl text-left text-sm text-jet-black border border-alabaster-grey inline-block max-w-lg mb-8">
                                    <strong className="block mb-2 text-golden-bronze uppercase tracking-wide text-xs">Pro Tip</strong>
                                    {quizState.result === 'recycle-dump' && "Check for local recycling centers. 80% of your mattress materials can be repurposed!"}
                                    {quizState.result === 'retailer-pickup-ca' && "Don't pay a junk removal service! Check your receipt or contact the store immediately."}
                                    {quizState.result === 'sell-donate' && "Don't expect much cash. The market value is likely 1/3 of what you paid. Prioritize convenience."}
                                    {quizState.result === 'recycle-careful' && "Hire a professional junk removal service or contact your municipality for bulk pickup. Do not cut the foam."}
                                </div>

                                <div>
                                    <button onClick={resetQuiz} className="bg-jet-black text-white px-8 py-3 rounded-full font-bold hover:bg-jet-black-800 transition">Start Again</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Data Insights */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-jet-black">The Economics & Ecology of Sleep</h2>
                        <p className="mt-4 text-xl text-graphite max-w-3xl mx-auto">Understanding why disposal is difficult and why selling might disappoint you.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Recycling Chart */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-alabaster-grey">
                            <h3 className="text-xl font-bold text-jet-black mb-2">What's Inside Your Mattress?</h3>
                            <p className="text-sm text-graphite mb-8">Over 80% of a mattress can be recycled if processed correctly.</p>
                            <div className="h-64 flex justify-center">
                                <Doughnut data={recyclingData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
                            </div>
                        </div>

                        {/* Resale Chart */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-alabaster-grey">
                            <h3 className="text-xl font-bold text-jet-black mb-2">The Resale Value Shock</h3>
                            <p className="text-sm text-graphite mb-8">Mattresses are depreciating assets. Most lose significant value immediately.</p>
                            <div className="h-64">
                                <Bar data={resaleData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualitative Insights */}
            <section className="py-20 bg-alabaster-grey/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-alabaster-grey hover:border-golden-bronze transition group">
                            <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition">
                                <Gift size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-jet-black mb-4">Donation Reality</h3>
                            <p className="text-graphite text-sm mb-4">"Donatable" means "showroom ready". Shelters strictly reject:</p>
                            <ul className="space-y-2 text-sm text-graphite/80">
                                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500" /> Any structural defects</li>
                                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500" /> Any stains (even water)</li>
                                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500" /> Rips or tears</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-alabaster-grey hover:border-blue-300 transition group">
                            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                                <ShieldAlert size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-jet-black mb-4">Your Legal Rights</h3>
                            <p className="text-graphite text-sm mb-4">Check your receipt. You might be owed a free pickup.</p>
                            <ul className="space-y-2 text-sm text-graphite/80">
                                <li className="flex items-center gap-2"><Info size={14} className="text-blue-500" /> <strong>California:</strong> Retailers must offer free pickup.</li>
                                <li className="flex items-center gap-2"><Truck size={14} className="text-blue-500" /> <strong>White Glove:</strong> Often includes haul-away.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-alabaster-grey hover:border-golden-bronze transition group">
                            <div className="bg-golden-bronze/10 w-12 h-12 rounded-full flex items-center justify-center text-golden-bronze mb-6 group-hover:scale-110 transition">
                                <Box size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-jet-black mb-4">Warranty vs. Wear</h3>
                            <p className="text-graphite text-sm mb-4">A 20-year warranty doesn't mean it lasts 20 years.</p>
                            <div className="bg-alabaster-grey/50 p-3 rounded text-xs text-graphite">
                                To claim a defect, there usually must be a visible indentation greater than <strong>1.5 inches</strong>.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hazard Zone */}
            <section id="hazards" className="py-20 bg-amber-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-block p-4 rounded-full bg-amber-100 text-amber-600 mb-6">
                        <AlertTriangle size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-jet-black mb-6">The Hidden Danger of DIY Disposal</h2>
                    <div className="bg-white rounded-2xl shadow-sm p-10 text-left border-l-8 border-amber-500">
                        <h3 className="text-xl font-bold text-jet-black mb-4">Do NOT open your mattress cover.</h3>
                        <p className="text-graphite mb-4 leading-relaxed">
                            In an effort to be eco-friendly, some owners try to cut up their mattress to separate foam and springs.
                            <strong className="text-amber-700"> This can be dangerous.</strong>
                        </p>
                        <p className="text-graphite text-sm leading-relaxed mb-6">
                            Many budget-friendly memory foam mattresses use a <strong>fiberglass sock</strong> beneath the cover as a fire retardant.
                            If you remove the cover or cut into the foam, you can release millions of microscopic glass shards into your home.
                            These shards are hazardous to breathe and nearly impossible to clean up.
                        </p>
                        <Link href="/faqs/fiberglass-free" className="text-amber-600 font-bold hover:underline flex items-center gap-2">
                            Read more about Fiberglass <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <RelatedFAQ faqs={relatedFaqs} />
            </div>
        </div>
    );
};

export default MattressDisposalGuide;
