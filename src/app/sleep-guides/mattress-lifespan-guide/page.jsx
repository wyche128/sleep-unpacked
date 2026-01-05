'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Clock, Layers, Wind, AlertTriangle, CheckCircle, XCircle, RotateCw, ShieldCheck, Ban, BedDouble } from 'lucide-react';
import Link from 'next/link';

const MattressLifespanGuide = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [boughtYear, setBoughtYear] = useState(new Date().getFullYear());
    const [type, setType] = useState('foam');
    const [result, setResult] = useState(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    // Calculator Logic
    const calculateLifespan = () => {
        const age = currentYear - boughtYear;
        let maxLifespan = 10;
        let typeName = "Mattress";

        if (type === 'hybrid') { maxLifespan = 12; typeName = "Hybrid Mattress"; }
        if (type === 'spring') { maxLifespan = 8; typeName = "Innerspring Mattress"; }
        if (type === 'latex') { maxLifespan = 15; typeName = "Latex Mattress"; }

        let status = 'good';
        if (age >= (maxLifespan - 3) && age <= maxLifespan) status = 'warning';
        if (age > maxLifespan) status = 'replace';

        setResult({ age, maxLifespan, typeName, status });
    };

    const yearOptions = [];
    for (let i = currentYear; i >= currentYear - 25; i--) {
        yearOptions.push(i);
    }

    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <header className="bg-jet-black text-white py-20 lg:py-28 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        How Long Will Your<br />Mattress <span className="text-golden-bronze">Actually Last?</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-alabaster-grey max-w-3xl mx-auto mb-8 font-light">
                        On average, mattresses should be replaced every <strong className="text-white font-bold underline decoration-golden-bronze underline-offset-4">8-10 years</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/sleep-guides/how-to-choose-a-mattress" className="bg-golden-bronze hover:bg-white hover:text-jet-black text-white px-8 py-3 rounded-full font-bold transition shadow-lg inline-block">
                            Compare Types
                        </Link>
                        <button onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                            Check My Mattress
                        </button>
                    </div>
                </div>
            </header>

            {/* Key Statistics Grid */}
            <section id="lifespan" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-jet-black mb-4">Lifespan by Mattress Type</h2>
                        <p className="text-graphite max-w-2xl mx-auto">Not all mattresses age the same. Materials like memory foam, latex, and steel coils break down at different rates.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* All-Foam Card */}
                        <div className="bg-alabaster-grey/20 rounded-2xl p-8 border border-alabaster-grey shadow-sm hover:shadow-md transition hover:-translate-y-1 group">
                            <div className="w-14 h-14 bg-jet-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-golden-bronze transition duration-300">
                                <Layers className="text-golden-bronze group-hover:text-white w-8 h-8 transition" />
                            </div>
                            <h3 className="text-xl font-bold text-jet-black mb-2">All-Foam Models</h3>
                            <div className="text-3xl font-bold text-golden-bronze mb-4">8 - 10 Years</div>
                            <p className="text-graphite text-sm leading-relaxed">
                                Typically made of memory foam or polyfoam cores. Higher density foams (measured in PCF) tend to
                                last longer, resisting body impressions and sagging.
                            </p>
                        </div>

                        {/* Hybrid Card */}
                        <div className="bg-white rounded-2xl p-8 border-2 border-golden-bronze shadow-lg relative transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-golden-bronze text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                MOST DURABLE CHOICE
                            </div>
                            <div className="w-14 h-14 bg-jet-black rounded-xl flex items-center justify-center mb-6">
                                <Clock className="text-golden-bronze w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-jet-black mb-2">Hybrid Models</h3>
                            <div className="text-3xl font-bold text-golden-bronze mb-4">10 - 12 Years</div>
                            <p className="text-graphite text-sm leading-relaxed">
                                Combines steel coils with foam layers. The coils provide structural longevity while promoting
                                airflow, often outlasting pure foam models.
                            </p>
                        </div>

                        {/* Latex Card */}
                        <div className="bg-alabaster-grey/20 rounded-2xl p-8 border border-alabaster-grey shadow-sm hover:shadow-md transition hover:-translate-y-1 group">
                            <div className="w-14 h-14 bg-jet-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-golden-bronze transition duration-300">
                                <Wind className="text-golden-bronze group-hover:text-white w-8 h-8 transition" />
                            </div>
                            <h3 className="text-xl font-bold text-jet-black mb-2">Latex Models</h3>
                            <div className="text-3xl font-bold text-golden-bronze mb-4">12 - 15 Years</div>
                            <p className="text-graphite text-sm leading-relaxed">
                                Natural latex is incredibly resilient. While expensive, organic latex mattresses often outlive
                                both foam and hybrid counterparts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signs It's Time Section */}
            <section id="signs" className="py-16 bg-alabaster-grey/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-jet-black mb-6">Signs It's Time to Say Goodbye</h2>
                            <p className="text-graphite mb-8">Even if you haven't hit the 10-year mark, your body might be telling
                                you it's time for a change. Look for these red flags:</p>

                            <ul className="space-y-4">
                                {[
                                    { title: "Visible Sagging", desc: "Deep indentations where you sleep that don't recover." },
                                    { title: "Morning Aches", desc: "Waking up with back pain or stiffness that fades during the day." },
                                    { title: "Noise & Creaking", desc: "Squeaky springs indicate internal mechanical failure." },
                                    { title: "Worse Allergies", desc: "Accumulation of dust mites over a decade can trigger reactions." }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-4">
                                            <AlertTriangle className="text-red-500 w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-jet-black">{item.title}</h4>
                                            <p className="text-sm text-graphite">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="bg-white p-2 rounded-2xl shadow-xl transform rotate-2">
                                <div className="bg-jet-black rounded-xl h-64 md:h-80 w-full flex items-center justify-center overflow-hidden relative">
                                    <div className="absolute inset-0 bg-jet-black/50 flex items-center justify-center">
                                        <BedDouble className="text-white w-24 h-24 opacity-50" />
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                        <p className="text-xs font-bold text-jet-black">Sleep Quality Matters</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section id="calculator" className="py-20 bg-jet-black text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Replacement Calculator</h2>
                    <div className="bg-white text-jet-black rounded-2xl p-8 shadow-2xl max-w-lg mx-auto">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-left text-sm font-semibold text-graphite mb-2">What year did you buy your mattress?</label>
                                <select
                                    value={boughtYear}
                                    onChange={(e) => setBoughtYear(parseInt(e.target.value))}
                                    className="w-full p-3 border border-alabaster-grey rounded-lg focus:ring-2 focus:ring-golden-bronze outline-none transition"
                                >
                                    {yearOptions.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-left text-sm font-semibold text-graphite mb-2">What type is it?</label>
                                <select
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="w-full p-3 border border-alabaster-grey rounded-lg focus:ring-2 focus:ring-golden-bronze outline-none transition"
                                >
                                    <option value="foam">All-Foam / Memory Foam</option>
                                    <option value="hybrid">Hybrid (Spring + Foam)</option>
                                    <option value="spring">Traditional Innerspring</option>
                                    <option value="latex">Natural Latex</option>
                                </select>
                            </div>
                            <button
                                onClick={calculateLifespan}
                                className="w-full bg-golden-bronze text-white font-bold py-3 rounded-lg hover:bg-jet-black transition"
                            >
                                Check Status
                            </button>

                            {result && (
                                <div className={`mt-6 p-4 rounded-lg border animate-in fade-in slide-in-from-top-4 duration-300
                                    ${result.status === 'good' ? 'bg-green-50 border-green-200 text-green-800' :
                                        result.status === 'warning' ? 'bg-yellow-50 border-yellow-200 text-yellow-800' :
                                            'bg-red-50 border-red-200 text-red-800'}`}
                                >
                                    <div className="flex items-center justify-center mb-2 font-bold text-lg gap-2">
                                        {result.status === 'good' && <CheckCircle className="w-5 h-5" />}
                                        {result.status === 'warning' && <AlertTriangle className="w-5 h-5" />}
                                        {result.status === 'replace' && <XCircle className="w-5 h-5" />}

                                        {result.status === 'good' && "You're Good to Go!"}
                                        {result.status === 'warning' && "Monitor for Wear"}
                                        {result.status === 'replace' && "Time to Replace"}
                                    </div>
                                    <p className="text-sm opacity-90">
                                        Your {result.typeName} is {result.age} years old.
                                        {result.status === 'good' && ` It should have plenty of life left. Remember to rotate it regularly!`}
                                        {result.status === 'warning' && ` It is approaching the end of its expected lifespan (${result.maxLifespan} years). Start looking for signs of sagging.`}
                                        {result.status === 'replace' && <span> This exceeds the typical lifespan of {result.maxLifespan} years. You are likely compromising your sleep quality. <Link href="/top-picks" className="underline font-bold">See our Top Picks</Link>.</span>}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Maintenance Tips */}
            <section id="care" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-jet-black mb-12">How to Extend Your Mattress Life</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-alabaster-grey/20 rounded-full flex items-center justify-center mx-auto mb-4 text-golden-bronze">
                                <RotateCw className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold mb-2 text-jet-black">Rotate Regularly</h4>
                            <p className="text-sm text-graphite">Rotate (head to foot) every 3-6 months to prevent permanent body impressions.</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-alabaster-grey/20 rounded-full flex items-center justify-center mx-auto mb-4 text-golden-bronze">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold mb-2 text-jet-black">Use a Protector</h4>
                            <p className="text-sm text-graphite">A waterproof protector stops sweat, spills, and skin cells from entering the foam.</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-alabaster-grey/20 rounded-full flex items-center justify-center mx-auto mb-4 text-golden-bronze">
                                <BedDouble className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold mb-2 text-jet-black">Proper Support</h4>
                            <p className="text-sm text-graphite">Ensure your bed frame has a center support leg and slats are no more than 3" apart.</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-alabaster-grey/20 rounded-full flex items-center justify-center mx-auto mb-4 text-golden-bronze">
                                <Ban className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold mb-2 text-jet-black">No Jumping</h4>
                            <p className="text-sm text-graphite">Jumping damages the internal coil structure and compresses foam prematurely.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-alabaster-grey/20 border-t border-alabaster-grey">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10 text-jet-black">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-alabaster-grey">
                            <h3 className="font-bold text-lg mb-2 text-jet-black">Does a 20-year warranty mean the mattress lasts 20 years?</h3>
                            <p className="text-graphite">Not usually. Warranties cover manufacturing defects (like a spring breaking), not normal wear and tear (like gradual loss of comfort). Expect to replace it around the 10-year mark regardless of warranty length.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-alabaster-grey">
                            <h3 className="font-bold text-lg mb-2 text-jet-black">Why do hybrid mattresses last longer than all-foam?</h3>
                            <p className="text-graphite">Hybrids utilize steel coils for their support base. Steel is more durable than the high-density polyfoam used as the base for all-foam mattresses, allowing hybrids to maintain structural integrity for 10-12 years.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-alabaster-grey">
                            <h3 className="font-bold text-lg mb-2 text-jet-black">What happens if I keep my mattress too long?</h3>
                            <p className="text-graphite">Beyond poor sleep and back pain, old mattresses accumulate allergens. An average used mattress can house anywhere from 100,000 to 10 million <Link href="/sleep-guides/how-to-clean-mattress" className="text-golden-bronze hover:underline">dust mites</Link>.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MattressLifespanGuide;
