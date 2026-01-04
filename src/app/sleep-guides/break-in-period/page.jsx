'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Clock, Moon, ShieldCheck, Thermometer, Footprints, Info, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-alabaster-grey">
            <button
                className="w-full py-4 px-6 flex justify-between items-center bg-white hover:bg-alabaster-grey/30 transition-colors text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-jet-black">{title}</span>
                {isOpen ?
                    <ChevronUp className="text-golden-bronze" /> :
                    <ChevronDown className="text-graphite" />}
            </button>
            {isOpen && (
                <div className="p-6 bg-alabaster-grey/20 text-graphite leading-relaxed border-t border-alabaster-grey">
                    {children}
                </div>
            )}
        </div>
    );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-golden-bronze/10 rounded-full flex items-center justify-center mb-4">
            <Icon className="text-golden-bronze w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-jet-black mb-2">{title}</h3>
        <p className="text-graphite">{description}</p>
    </div>
);

const StepCard = ({ number, title, description }) => (
    <div className="relative flex flex-col items-center text-center p-4">
        <div
            className="w-10 h-10 rounded-full bg-jet-black text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg z-10 border-2 border-golden-bronze">
            {number}
        </div>
        <h4 className="text-lg font-bold text-jet-black mb-2">{title}</h4>
        <p className="text-sm text-graphite">{description}</p>
    </div>
);

const BreakInPeriodGuide = () => {
    return (
        <div className="min-h-screen bg-alabaster-grey/20 font-sans text-graphite">
            <Header />

            {/* Hero Section */}
            <header className="bg-jet-black text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div
                        className="inline-block bg-golden-bronze/20 backdrop-blur-sm border border-golden-bronze/30 rounded-full px-4 py-1 mb-6 text-golden-bronze text-sm font-medium">
                        Mattress 101: Returns & Comfort
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        What is a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-bronze to-white">"Break-In
                            Period"?</span>
                    </h1>
                    <p className="text-lg md:text-xl text-alabaster-grey max-w-2xl mx-auto mb-10 leading-relaxed">
                        Bought a new mattress and hate it? Don't panic. The "new bed blues" are real, but they are almost always
                        temporary.
                    </p>
                </div>
            </header>

            {/* The Core Definition Block */}
            <section id="definition" className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 mb-12">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-golden-bronze">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-golden-bronze/10 p-3 rounded-lg shrink-0">
                            <Info className="w-8 h-8 text-golden-bronze" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-jet-black">The 30-Day Rule</h2>
                            <p className="text-lg md:text-xl text-graphite leading-relaxed font-medium">
                                "Most manufacturers require you to sleep on the mattress for at least 30 days before initiating
                                a return. This gives your body time to adjust to the new support system and allows the materials
                                to soften slightly."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Happens */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-jet-black">Why Do I Need To Wait?</h2>
                        <p className="text-graphite max-w-2xl mx-auto">
                            Think of a new mattress like a new pair of leather shoes. It feels stiff at first, but with use, it
                            molds to your unique shape.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard icon={Moon} title="Body Adjustment"
                            description="Your muscles have developed 'muscle memory' from your old, likely sagging mattress. Your body needs time to unlearn bad posture and align correctly." />
                        <FeatureCard icon={ShieldCheck} title="Material Softening"
                            description="High-density foams and fresh coils are stiff straight from the factory. Regular use opens up the foam cells, allowing them to contour properly." />
                        <FeatureCard icon={Clock} title="The New Shoe Effect"
                            description="Just like stiff shoes cause blisters before they become comfortable, a new mattress can cause temporary aches before providing long-term relief." />
                    </div>
                </div>
            </section>

            {/* The Timeline */}
            <section id="timeline" className="bg-alabaster-grey/20 py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-jet-black">What to Expect: The 30-Day Timeline</h2>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-9 left-0 right-0 h-1 bg-gray-200 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <StepCard number="1" title="Week 1: The Shock"
                                description="The mattress feels firmer than expected. You might wake up with minor stiffness. This is normal." />
                            <StepCard number="2" title="Week 2: The Softening"
                                description="Foams begin to relax. The 'new mattress smell' (off-gassing) dissipates completely." />
                            <StepCard number="3" title="Week 3: Adaptation"
                                description="Your spinal alignment improves. You stop tossing and turning as much. Deep sleep increases." />
                            <StepCard number="4" title="Week 4: The Decision"
                                description="The true feel of the mattress is revealed. By day 30, you'll know if it's true love." />
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Speed It Up */}
            <section id="tips" className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6 text-jet-black">How to Speed Up the Break-In Process</h2>
                            <p className="text-graphite mb-8">
                                Impatience is understandable! If you want to get past the stiff phase faster, try these
                                professional tips used by mattress testers.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg h-fit">
                                        <Footprints className="text-green-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-jet-black">Walk on It</h4>
                                        <p className="text-sm text-graphite">Gently walking or crawling on the mattress applies
                                            concentrated pressure, helping to open up foam cells faster than sleeping alone.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-orange-100 p-2 rounded-lg h-fit">
                                        <Thermometer className="text-orange-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-jet-black">Turn Up the Heat</h4>
                                        <p className="text-sm text-graphite">Memory foam is temperature sensitive. Keeping your
                                            bedroom slightly warmer (around 72°F) helps the foam soften and conform.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-purple-100 p-2 rounded-lg h-fit">
                                        <CheckCircle className="text-purple-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-jet-black">Check Your Foundation</h4>
                                        <p className="text-sm text-graphite">Ensure your base is supportive. Slat spacing wider
                                            than 3 inches can cause sagging, making a mattress feel wrong regardless of
                                            break-in.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1 bg-alabaster-grey/10 p-8 rounded-2xl shadow-lg border border-alabaster-grey">
                            <h3 className="font-bold text-xl mb-4 text-center text-jet-black">Did you know?</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-white rounded-lg border border-alabaster-grey">
                                    <p className="text-sm text-graphite italic">"Brands like Casper, Purple, and Nectar all
                                        have mandatory waiting periods before you can return."</p>
                                </div>
                                <div className="p-4 bg-white rounded-lg border border-alabaster-grey">
                                    <p className="text-sm text-graphite italic">"Latex mattresses usually break in faster (2-14
                                        days) than high-density memory foam (30-60 days)."</p>
                                </div>
                                <div className="p-4 bg-white rounded-lg border border-alabaster-grey">
                                    <p className="text-sm text-graphite italic">"A mattress protector can sometimes create
                                        surface tension (drum effect), making a bed feel firmer. Try loosening it."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 px-4 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-jet-black">Frequently Asked Questions</h2>
                <div className="bg-white rounded-xl shadow-sm border border-alabaster-grey overflow-hidden">
                    <AccordionItem title="Can I return the mattress before 30 days?">
                        Most online mattress companies (Leesa, Nectar, DreamCloud, etc.) will technically block the return
                        request until day 30. If there is a genuine manufacturing defect (like a rip or wrong size), they will
                        make an exception. However, for "comfort" returns, the 30-day rule is usually strict.
                    </AccordionItem>
                    <AccordionItem title="My back hurts. Is this normal?">
                        Yes, unfortunately. If you are switching from a traditional innerspring to memory foam (or vice versa),
                        or from a soft to a firm bed, your back muscles need to adjust. This "adjustment pain" typically
                        subsides by the third week.
                    </AccordionItem>
                    <AccordionItem title="Does the break-in period void the warranty?">
                        No. The break-in period is part of the "Sleep Trial." Your warranty covers defects (like sagging or
                        broken coils) and is separate from the comfort guarantee.
                    </AccordionItem>
                    <AccordionItem title="Do hybrid mattresses need a break-in period?">
                        Yes. While the coils adapt quickly, the foam comfort layers on top still need time to soften. Hybrids
                        generally break in slightly faster than all-foam beds, but the 30-day rule still applies.
                    </AccordionItem>
                </div>
            </section>
        </div>
    );
};

export default BreakInPeriodGuide;
