'use client';

import React, { useState, useEffect } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import Link from 'next/link';
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
import Header from '../../../components/Header';
import {
    Droplets,
    Thermometer,
    Wind,
    Sun,
    Microscope,
    AlertTriangle,
    CheckCircle2,
    Trash2,
    Sparkles,
    Search,
    Bed
} from 'lucide-react';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
);

const HowToCleanMattress = () => {
    useEffect(() => {
        document.title = "How to Clean a Mattress (The Science) | Sleep Unpacked";
    }, []);

    const [activeTab, setActiveTab] = useState('urine');

    // --- Data ---
    const diagnosticData = {
        urine: {
            title: "The Problem: Urine & Uric Acid",
            icon: <Droplets className="w-6 h-6" />,
            color: "text-amber-600",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200",
            mistake: "Drowning the spot in soapy water. This spreads the liquid deeper.",
            solution: "The Enzyme Protocol",
            steps: [
                "Blot (Don't Scrub): Use a heavy hand with dry towels to absorb liquid.",
                "Vinegar (Acid): Spray solution (50/50 water/vinegar) to break down uric acid crystals.",
                "Baking Soda (Base): Sprinkle heavily to neutralize odor and absorb moisture.",
                "Vacuum: Once completely dry, vacuum up the soda."
            ],
            why: "Uric acid crystals persist after drying. You need a chemical reaction (Acid + Base) to break them down, not just soap.",
            tip: "Use a commercial enzyme cleaner if available for best results."
        },
        blood: {
            title: "The Problem: Blood Stains",
            icon: <Thermometer className="w-6 h-6" />,
            color: "text-red-600",
            bgColor: "bg-red-50",
            borderColor: "border-red-200",
            mistake: "Using hot water. Heat 'cooks' the protein, setting the stain permanently.",
            solution: "The Cold Protocol",
            steps: [
                "Ice Cold Water: Dampen a cloth with freezing water and dab gently.",
                "Meat Tenderizer: For dried stains, make a paste with unseasoned meat tenderizer and cold water.",
                "Wait & Wipe: Let the paste sit for 30 minutes to break down proteins, then wipe clean."
            ],
            why: "Blood is protein-based. Just like cooking an egg, heat hardens the proteins. Cold keeps them soluble.",
            tip: "Salt + Cold water is a good backup if you lack meat tenderizer."
        },
        sweat: {
            title: "The Problem: Yellowing & Oxidation",
            icon: <Wind className="w-6 h-6" />,
            color: "text-yellow-600",
            bgColor: "bg-yellow-50",
            borderColor: "border-yellow-200",
            mistake: "Using bleach (too harsh) or ignoring it until it smells.",
            solution: "The Magic Mixture",
            steps: [
                "Mix: Hydrogen Peroxide + Baking Soda + Drop of Dish Soap.",
                "Mist: Lightly spray or dab onto the yellowed area.",
                "React: Let it sit until it dries white.",
                "Remove: Vacuum up the residue."
            ],
            why: "Peroxide bleaches the oxidation safely, soap cuts the body oils, and baking soda absorbs the result.",
            tip: "Use sparingly on colored fabrics as peroxide can act like mild bleach."
        },
        odor: {
            title: "The Problem: General Stale Odor",
            icon: <Sun className="w-6 h-6" />,
            color: "text-sky-600",
            bgColor: "bg-sky-50",
            borderColor: "border-sky-200",
            mistake: "Using chemical deodorizing sprays that just mask the smell.",
            solution: "The Nature Protocol",
            steps: [
                "Sunlight: Drag the mattress outside on a dry, sunny day.",
                "UV Exposure: Let direct sunlight hit the bare mattress for several hours.",
                "Alternative: Open all blinds and windows if you can't move it."
            ],
            why: "UV radiation kills bacteria and bleaches discoloration naturally without wetting the foam.",
            tip: "This is the best way to sanitize deep without risking mold from water."
        }
    };

    const currentDiagnostic = diagnosticData[activeTab];

    // --- Chart 1: Hero Doughnut ---
    const heroChartData = {
        labels: ['Original Mattress Material', 'Accumulated Sweat/Fluids', 'Dead Skin & Dust Mites'],
        datasets: [{
            data: [55, 30, 15],
            backgroundColor: ['#9ca3af', '#b45309', '#3f3f46'], // zinc-400, golden-bronze, graphite
            borderWidth: 0,
            hoverOffset: 4
        }]
    };

    // --- Chart 2: Temperature Bar ---
    const tempChartData = {
        labels: ['Cold Water', 'Warm Water', 'Hot Water'],
        datasets: [{
            label: 'Stain Removal Effectiveness (Blood)',
            data: [95, 40, 5],
            backgroundColor: ['#10b981', '#fbbf24', '#ef4444'], // emerald, amber, red
            borderRadius: 4
        }]
    };

    const tempChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: '% Removal Success' }
            }
        },
        plugins: {
            legend: { display: false }
        }
    };

    // --- Chart 3: Prevention ---
    const preventionChartData = {
        labels: ['Protector', 'New Mattress', 'Deep Clean'],
        datasets: [{
            label: 'Cost Estimate ($)',
            data: [30, 1000, 200],
            backgroundColor: ['#b45309', '#18181b', '#52525b'], // golden-bronze, jet-black, graphite
            borderRadius: 4
        }]
    };

    const preventionChartOptions = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                grid: { display: false }
            },
            y: {
                grid: { display: false }
            }
        }
    };


    return (
        <div className="bg-alabaster-grey font-sans text-graphite min-h-screen">
            <Header />

            {/* --- Hero Section --- */}
            <section className="relative bg-white overflow-hidden pb-16 pt-20 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-jet-black sm:text-5xl md:text-6xl mb-4">
                                How To Clean A Mattress
                            </h1>
                            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-500 mb-6">
                                Your mattress is a <span className="text-golden-bronze">biological sponge.</span>
                            </h2>
                            <p className="mt-4 text-xl text-graphite leading-relaxed">
                                We spend 1/3 of our lives in bed. It absorbs liters of sweat, dead skin, and spills.
                                Traditional cleaning methods often make it worse. Welcome to the counter-intuitive guide to resetting your sleep surface.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#diagnostic" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-jet-black hover:bg-zinc-800 transition-colors md:py-4 md:text-lg md:px-10">
                                    <Search className="mr-2 w-5 h-5" /> Diagnose Problem
                                </a>
                                <a href="#science" className="inline-flex items-center justify-center px-8 py-3 border-2 border-golden-bronze text-base font-medium rounded-full text-golden-bronze bg-transparent hover:bg-amber-50 transition-colors md:py-4 md:text-lg md:px-10">
                                    <Microscope className="mr-2 w-5 h-5" /> See the Data
                                </a>
                            </div>
                        </div>
                        <div className="bg-alabaster-grey rounded-3xl p-8 lg:p-12 shadow-inner border border-zinc-100 flex flex-col items-center">
                            <div className="w-full max-w-sm h-64">
                                <Doughnut
                                    data={heroChartData}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: { legend: { position: 'bottom' } }
                                    }}
                                />
                            </div>
                            <p className="text-xs text-zinc-400 mt-4 text-center font-medium uppercase tracking-wider">Estimated Composition (10-Year Unprotected Mattress)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Diagnostic Section --- */}
            <section id="diagnostic" className="py-16 bg-alabaster-grey">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-golden-bronze font-bold tracking-wide uppercase text-sm">The Stain Diagnostic Lab</span>
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold text-jet-black sm:text-4xl">Stop! Put down the hot water.</h2>
                        <p className="mt-4 max-w-2xl text-xl text-graphite mx-auto">
                            Most cleaning mistakes happen because we treat every stain like dirt. Select your issue below for the correct chemical protocol.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Tabs */}
                        <div className="lg:col-span-4 flex flex-col space-y-3">
                            {Object.entries(diagnosticData).map(([key, data]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`text-left px-6 py-4 rounded-xl border-2 font-semibold transition-all shadow-sm flex items-center justify-between group
                                        ${activeTab === key
                                            ? 'bg-jet-black text-white border-jet-black ring-2 ring-offset-2 ring-zinc-300'
                                            : 'bg-white text-graphite border-zinc-200 hover:border-golden-bronze hover:text-golden-bronze'
                                        }`}
                                >
                                    <span className="flex items-center gap-3">
                                        {/* Dynamic color for icon in inactive state, white in active */}
                                        <span className={activeTab === key ? 'text-golden-bronze' : 'text-zinc-400'}>
                                            {key === 'urine' && <Droplets size={20} />}
                                            {key === 'blood' && <Thermometer size={20} />}
                                            {key === 'sweat' && <Wind size={20} />}
                                            {key === 'odor' && <Sun size={20} />}
                                        </span>
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </span>
                                    {activeTab === key && <CheckCircle2 size={18} className="text-golden-bronze" />}
                                </button>
                            ))}
                        </div>

                        {/* Content Card */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-2xl p-8 shadow-xl border border-zinc-100 h-full transition-all duration-300">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className={`p-3 rounded-full ${currentDiagnostic.bgColor} ${currentDiagnostic.color}`}>
                                        {currentDiagnostic.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-jet-black">{currentDiagnostic.title}</h3>
                                </div>

                                <div className="mb-8 bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                                        <div>
                                            <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Common Mistake</p>
                                            <p className="text-slate-700 font-medium">{currentDiagnostic.mistake}</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-jet-black mb-4 pb-2 border-b border-zinc-100 flex items-center justify-between">
                                        The Solution: <span className="text-golden-bronze">{currentDiagnostic.solution}</span>
                                    </h4>
                                    <ul className="space-y-4">
                                        {currentDiagnostic.steps.map((step, idx) => {
                                            const [bold, rest] = step.split(':');
                                            return (
                                                <li key={idx} className="flex items-start text-graphite">
                                                    <CheckCircle2 className="mr-3 mt-1 text-golden-bronze flex-shrink-0" size={18} />
                                                    <span>
                                                        <strong className="text-jet-black font-semibold">{bold}:</strong> {rest}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-zinc-100">
                                    <div className="bg-zinc-50 p-4 rounded-xl">
                                        <p className="text-xs font-bold text-jet-black uppercase mb-1 flex items-center gap-1">
                                            <Microscope size={14} /> The Science
                                        </p>
                                        <p className="text-sm text-zinc-600 italic">"{currentDiagnostic.why}"</p>
                                    </div>
                                    <div className="bg-amber-50 p-4 rounded-xl">
                                        <p className="text-xs font-bold text-amber-700 uppercase mb-1 flex items-center gap-1">
                                            <Sparkles size={14} /> Pro Tip
                                        </p>
                                        <p className="text-sm text-zinc-700">{currentDiagnostic.tip}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Data/Science Section --- */}
            <section id="science" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-golden-bronze font-bold tracking-wide uppercase text-sm">Physics & Chemistry</span>
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold text-jet-black sm:text-4xl">Why Instincts Fail</h2>
                        <p className="mt-4 max-w-2xl text-xl text-graphite mx-auto">
                            Understanding the chemical reaction is key. Here is why specialized treatment works better than soap and water.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Chart */}
                        <div className="bg-alabaster-grey rounded-2xl p-8 shadow-sm border border-zinc-100">
                            <h3 className="text-lg font-bold text-jet-black mb-6 text-center">The "Blood Paradox": Temperature Impact</h3>
                            <div className="h-[300px] w-full">
                                <Bar data={tempChartData} options={tempChartOptions} />
                            </div>
                            <p className="mt-6 text-sm text-zinc-600 text-center bg-white p-3 rounded-lg border border-zinc-100">
                                <span className="font-bold text-jet-black">Key Insight:</span> Heat "cooks" protein stains like blood, setting them permanently into the fiber.
                            </p>
                        </div>

                        {/* Explanations */}
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-jet-black text-golden-bronze text-xl font-bold">1</div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-jet-black">The Enzymatic Requirement</h3>
                                    <p className="mt-2 text-graphite">
                                        Urine leaves behind uric acid crystals. Water dries, but the crystals remain and reactivate in humidity. Only an <strong>enzymatic reaction</strong> (Vinegar + Baking Soda) breaks the chemical bond.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-jet-black text-golden-bronze text-xl font-bold">2</div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-jet-black">The Oxidation Solution</h3>
                                    <p className="mt-2 text-graphite">
                                        Yellow stains are often caused by sweat oxidation. Hydrogen Peroxide acts as a bleaching agent to reverse this oxidation, while baking soda absorbs the residual oils.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-jet-black text-golden-bronze text-xl font-bold">3</div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-jet-black">Nature's Bleach</h3>
                                    <p className="mt-2 text-graphite">
                                        UV radiation from sunlight is a powerful sanitizer. It kills bacteria and naturally bleaches minor discoloration without adding any moisture to the sponge-like foam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Protocol Section --- */}
            <section id="protocol" className="py-16 bg-alabaster-grey border-t border-zinc-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-golden-bronze font-bold tracking-wide uppercase text-sm">Routine Maintenance</span>
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold text-jet-black sm:text-4xl">The "Zero-Liquid" Clean</h2>
                        <p className="mt-4 max-w-2xl text-xl text-graphite mx-auto">
                            Dead skin and dust mites are the primary pollutants. Here is how to clean without risking mold growth (which shortens <Link href="/sleep-guides/mattress-lifespan-guide" className="text-golden-bronze hover:underline">lifespan</Link>).
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:shadow-lg transition-shadow">
                            <div className="bg-zinc-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Bed className="w-8 h-8 text-jet-black" />
                            </div>
                            <h3 className="text-xl font-bold text-jet-black mb-3">1. Strip & Inspect</h3>
                            <p className="text-graphite">Remove all sheets and protectors. Check for any specific stains that need spot treatment before proceeding with the general clean.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:shadow-lg transition-shadow">
                            <div className="bg-zinc-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Trash2 className="w-8 h-8 text-jet-black" />
                            </div>
                            <h3 className="text-xl font-bold text-jet-black mb-3">2. The Deep Vacuum</h3>
                            <p className="text-graphite">Use the upholstery attachment. Go over the entire surface, sides, and crevices. This physically removes the mite food source.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:shadow-lg transition-shadow">
                            <div className="bg-zinc-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Sparkles className="w-8 h-8 text-jet-black" />
                            </div>
                            <h3 className="text-xl font-bold text-jet-black mb-3">3. Deodorize Dry</h3>
                            <p className="text-graphite">Sprinkle baking soda generously over the surface. Let sit for 30 minutes to absorb moisture/odors, then vacuum again.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Prevention Section --- */}
            <section id="prevention" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-jet-black rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 lg:p-16 flex flex-col justify-center">
                                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                                    The $30 Insurance Policy
                                </h2>
                                <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                                    Cleaning foam is futile. The most impactful takeaway from the research is that prevention is cheaper than the cure.
                                    A waterproof protector stops your mattress from gaining weight in sweat and skin over the years.
                                </p>
                                <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                                    <p className="text-white italic text-lg mb-3">"A waterproof mattress protector... is an extra layer of protection to allow for easier cleanup after accidents."</p>
                                    <p className="text-golden-bronze font-bold text-sm uppercase tracking-wider">- NapLab Expert Guide</p>
                                </div>
                                <div className="mt-6">
                                    <p className="text-zinc-400 text-sm">
                                        Is it too late to save it?
                                        <Link href="/top-picks" className="ml-2 text-white font-bold hover:text-golden-bronze underline">
                                            Find your replacement here.
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="bg-zinc-900 p-12 lg:p-16 flex flex-col items-center justify-center border-l border-zinc-800">
                                <h3 className="text-white font-bold mb-6 text-xl">Cost Comparison: Prevention vs. Cure</h3>
                                <div className="w-full h-64">
                                    <Bar data={preventionChartData} options={preventionChartOptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Final Thoughts --- */}
            <section className="bg-alabaster-grey py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-jet-black mb-4">Final Thought</h3>
                    <p className="text-graphite leading-relaxed">
                        Reset your sleep surface by understanding the chemistry of the stain and the physics of the foam. If you haven't vacuumed your mattress in the last six months, what exactly are you sleeping on tonight?
                    </p>
                </div>
            </section>

        </div>
    );
};

export default HowToCleanMattress;
