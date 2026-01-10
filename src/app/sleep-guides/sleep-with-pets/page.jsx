'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '../../../components/Header';
import Link from 'next/link';
import {
    Brain,
    HeartPulse,
    Shield,
    Dog,
    Undo2,
    MoveDown,
    Activity,
    Moon,
    Quote,
    CheckCircle2,
    Bed,
    HelpCircle,
    Scale
} from 'lucide-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const SleepWithPets = () => {
    // --- State: Hormone Chart ---
    const [isSnuggled, setIsSnuggled] = useState(false);
    const [chartData, setChartData] = useState({
        labels: ['Cortisol (Stress)', 'Oxytocin (Love)'],
        datasets: [
            {
                label: 'Hormone Levels',
                data: [80, 20],
                backgroundColor: [
                    'rgba(239, 68, 68, 0.6)', // Red for Cortisol
                    'rgba(99, 102, 241, 0.6)' // Indigo for Oxytocin
                ],
                borderColor: [
                    'rgba(239, 68, 68, 1)',
                    'rgba(99, 102, 241, 1)'
                ],
                borderWidth: 1,
                borderRadius: 5
            }
        ]
    });

    const handleSnuggleClick = () => {
        setIsSnuggled(!isSnuggled);
        if (!isSnuggled) {
            setChartData({
                ...chartData,
                datasets: [{
                    ...chartData.datasets[0],
                    data: [30, 90],
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.3)',
                        'rgba(99, 102, 241, 0.9)'
                    ]
                }]
            });
        } else {
            setChartData({
                ...chartData,
                datasets: [{
                    ...chartData.datasets[0],
                    data: [80, 20],
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.6)',
                        'rgba(99, 102, 241, 0.6)'
                    ]
                }]
            });
        }
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Hormone Level (%)'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.raw + '%';
                    }
                }
            }
        }
    };

    // --- State: Watchdog Effect ---
    const [withPet, setWithPet] = useState(false);
    const [bars, setBars] = useState([]);

    useEffect(() => {
        generateBars(withPet ? 'low' : 'high');
    }, [withPet]);

    const generateBars = (vigilance) => {
        const newBars = [];
        const barCount = 20;
        for (let i = 0; i < barCount; i++) {
            let h;
            let colorClass;

            if (vigilance === 'high') {
                h = Math.floor(Math.random() * 60) + 20; // 20-80%
                colorClass = 'bg-red-400';
            } else {
                h = Math.floor(Math.random() * 20) + 10; // 10-30%
                if (i > 5 && i < 15) h = 5; // Deep sleep dip
                colorClass = 'bg-blue-400';
            }
            newBars.push({ height: h, color: colorClass });
        }
        setBars(newBars);
    };

    // --- State: Dealbreaker Calculator ---
    const [sleeperType, setSleeperType] = useState('');
    const [anxietyLevel, setAnxietyLevel] = useState('');
    const [verdict, setVerdict] = useState(null);

    useEffect(() => {
        if (!sleeperType || !anxietyLevel) {
            setVerdict(null);
            return;
        }

        let title = "";
        let desc = "";
        let icon = null;
        let colorClass = "";

        if (sleeperType === 'light' && anxietyLevel === 'low') {
            title = "Suggestion: Dog Bed on Floor";
            desc = "Your sensitivity to movement outweighs the chemical benefits. Keep them close, but off the mattress to avoid micro-awakenings.";
            icon = <Bed size={48} className="text-amber-400 mb-4" />;
        } else if (sleeperType === 'heavy') {
            title = "Suggestion: Let Them Up!";
            desc = "You sleep deep enough to ignore the wiggles, so you get all the chemical benefits with none of the disruption.";
            icon = <CheckCircle2 size={48} className="text-emerald-400 mb-4" />;
        } else if (anxietyLevel === 'high') {
            title = "Suggestion: Co-Sleep (Worth It)";
            desc = "Even if you wake up occasionally, the cortisol reduction and grounding effect for your anxiety likely outweigh the disruption.";
            icon = <HeartPulse size={48} className="text-indigo-400 mb-4" />;
        } else {
            title = "Suggestion: Try it out";
            desc = "It's a balance. Try a weekend test run.";
            icon = <HelpCircle size={48} className="text-blue-400 mb-4" />;
        }

        setVerdict({ title, desc, icon });

    }, [sleeperType, anxietyLevel]);


    return (
        <div className="font-sans text-graphite bg-white">
            <Header />

            {/* Hero Section */}
            <header className="bg-jet-black text-white py-12 md:py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-golden-bronze rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-block bg-golden-bronze/20 text-golden-bronze border border-golden-bronze/50 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
                        New Sleep Research
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        The Science of Snuggling
                    </h1>
                    <p className="text-xl md:text-2xl text-alabaster-grey max-w-3xl mx-auto font-light leading-relaxed">
                        5 Surprising Ways Sleeping With Your Pet Rewires Your Brain and Body
                    </p>
                </div>
            </header>

            {/* Intro Text */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16 text-center">
                <p className="text-xl text-graphite leading-relaxed mb-10">
                    You know the look. The wet nose nudge. The pleading eyes. For years, experts said "keep them out."
                    But <Link href="/sleep-guides/why-sleep-matters" className="text-golden-bronze hover:underline">new data suggests</Link> letting Fido under the covers isn't just an indulgence—it's a biological interaction
                    that changes your hormones, heart rate, and sense of security.
                </p>
                <div className="flex justify-center gap-8 md:gap-16 text-jet-black">
                    <div className="flex flex-col items-center gap-2">
                        <Brain className="w-8 h-8 md:w-10 md:h-10 text-golden-bronze" />
                        <span className="text-sm font-bold uppercase tracking-wide">Rewires Brain</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <HeartPulse className="w-8 h-8 md:w-10 md:h-10 text-golden-bronze" />
                        <span className="text-sm font-bold uppercase tracking-wide">Calms Body</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Shield className="w-8 h-8 md:w-10 md:h-10 text-golden-bronze" />
                        <span className="text-sm font-bold uppercase tracking-wide">Boosts Safety</span>
                    </div>
                </div>
            </section>

            {/* Main Dashboard Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

                    {/* 1. The Chemical Exchange */}
                    <div className="lg:col-span-8 bg-white rounded-3xl shadow-lg border border-alabaster-grey overflow-hidden relative group">
                        <div className="p-6 md:p-8 border-b border-alabaster-grey bg-gradient-to-r from-indigo-50 to-white">
                            <h2 className="text-2xl font-bold text-jet-black flex items-center gap-4">
                                <span className="bg-jet-black text-golden-bronze w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold">1</span>
                                It’s Not Just Cute, It’s Chemical
                            </h2>
                        </div>
                        <div className="p-6 md:p-8">
                            <p className="mb-8 text-graphite text-lg leading-relaxed">
                                Sleeping with a pet isn't just "cozy." It triggers a potent chemical exchange. Touching your dog
                                releases <strong>Oxytocin</strong> (the love hormone) which actively combats
                                <strong>Cortisol</strong> (the stress hormone). It acts as a living, breathing anxiety blanket.
                            </p>

                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-2/3 h-64">
                                    <Bar data={chartData} options={chartOptions} />
                                </div>
                                <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-alabaster-grey/30 p-6 rounded-2xl border border-alabaster-grey">
                                    <HeartPulse className="w-10 h-10 text-rose-400 mb-4" />
                                    <p className="text-center text-sm text-graphite mb-6">
                                        Click to simulate the effect of a nightly snuggle.
                                    </p>
                                    <button
                                        onClick={handleSnuggleClick}
                                        className={`
                                            flex items-center gap-2 font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform active:scale-95
                                            ${isSnuggled
                                                ? 'bg-slate-500 hover:bg-slate-600 text-white'
                                                : 'bg-jet-black hover:bg-gray-800 text-white'
                                            }
                                        `}
                                    >
                                        {isSnuggled ? (
                                            <><Undo2 size={18} /> Reset Levels</>
                                        ) : (
                                            <><Dog size={18} /> Simulate Snuggle</>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Heart Health */}
                    <div className="lg:col-span-4 bg-white rounded-3xl shadow-lg border border-alabaster-grey overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6 border-b border-alabaster-grey bg-gradient-to-r from-emerald-50 to-white">
                            <h2 className="text-xl font-bold text-emerald-900 flex items-center gap-3">
                                <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                A Passive Heart Boost
                            </h2>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-graphite mb-6 leading-relaxed">
                                Research suggests a correlation between pet interaction and cardiovascular health. It's not a
                                cardio workout, but it's a nightly heal session.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-alabaster-grey/30 rounded-xl">
                                    <span className="text-graphite font-medium flex items-center gap-2">
                                        <MoveDown className="text-emerald-500" size={16} /> Cholesterol
                                    </span>
                                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-bold">Reduced Risk</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-alabaster-grey/30 rounded-xl">
                                    <span className="text-graphite font-medium flex items-center gap-2">
                                        <MoveDown className="text-emerald-500" size={16} /> Blood Pressure
                                    </span>
                                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-bold">Improved</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-alabaster-grey/30 rounded-xl">
                                    <span className="text-graphite font-medium flex items-center gap-2">
                                        <MoveDown className="text-emerald-500" size={16} /> Triglycerides
                                    </span>
                                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-bold">Lowered</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. The Watchdog Effect */}
                    <div className="lg:col-span-6 bg-white rounded-3xl shadow-lg border border-alabaster-grey overflow-hidden group">
                        <div className="p-6 md:p-8 border-b border-alabaster-grey bg-gradient-to-r from-blue-50 to-white">
                            <h2 className="text-2xl font-bold text-jet-black flex items-center gap-4">
                                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold">2</span>
                                The "Watchdog" Effect
                            </h2>
                        </div>
                        <div className="p-6 md:p-8">
                            <p className="mb-8 text-graphite leading-relaxed">
                                Sleep is vulnerable. Evolutionarily, we stay alert. By "outsourcing" vigilance to a pet (who
                                hears and smells better), your brain can finally drop its guard.
                            </p>

                            <div className="bg-jet-black rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                                {/* Visualizer */}
                                <div className="flex justify-between items-end h-32 mb-6 gap-1">
                                    {bars.map((bar, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-full rounded-t-sm transition-all duration-700 ease-in-out ${bar.color}`}
                                            style={{ height: `${bar.height}%` }}
                                        />
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6 gap-4">
                                    <div>
                                        <h4 className={`font-bold transition-colors duration-500 ${withPet ? 'text-emerald-300' : 'text-blue-200'}`}>
                                            State: {withPet ? 'Restorative Deep Sleep' : 'High Vigilance'}
                                        </h4>
                                        <p className="text-xs text-gray-400 mt-1">
                                            {withPet ? 'Outsourcing vigilance allows power down.' : 'Your brain is scanning for danger.'}
                                        </p>
                                    </div>

                                    {/* Toggle */}
                                    <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-full">
                                        <button
                                            onClick={() => setWithPet(false)}
                                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${!withPet ? 'bg-white text-jet-black shadow-md' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            Solo
                                        </button>
                                        <button
                                            onClick={() => setWithPet(true)}
                                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${withPet ? 'bg-white text-jet-black shadow-md' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            <Dog size={14} /> With Pet
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. The PTSD Connection */}
                    <div className="lg:col-span-6 bg-white rounded-3xl shadow-lg border border-alabaster-grey overflow-hidden flex flex-col group">
                        <div className="p-6 md:p-8 border-b border-alabaster-grey bg-gradient-to-r from-amber-50 to-white">
                            <h2 className="text-2xl font-bold text-amber-900 flex items-center gap-4">
                                <span className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold">4</span>
                                The PTSD Connection
                            </h2>
                        </div>
                        <div className="p-8 md:p-10 flex-grow flex flex-col justify-center relative">
                            <Quote size={64} className="text-amber-100 absolute top-8 left-8" />
                            <blockquote className="text-xl italic font-serif text-jet-black text-center relative z-10 mb-8 px-4">
                                "The comfort a dog provides creates a cozier environment for you both... helping to diminish
                                experiences and make sleep less traumatic."
                            </blockquote>
                            <p className="text-graphite leading-relaxed relative z-10 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-alabaster-grey">
                                For those with trauma, a pet is a therapeutic necessity. They provide an immediate
                                <strong> "grounding"</strong> force. The tactile sensation of fur and weight bridges the gap
                                between a nightmare and reality, allowing the sleeper to orient themselves in the "now" faster
                                than medication alone.
                            </p>
                        </div>
                    </div>

                    {/* 5. The Dealbreaker Calculator */}
                    <div className="lg:col-span-12 bg-white rounded-3xl shadow-lg border border-alabaster-grey overflow-hidden mt-8">
                        <div className="p-6 md:p-8 border-b border-alabaster-grey bg-gradient-to-r from-rose-50 to-white flex justify-between items-center flex-wrap gap-4">
                            <h2 className="text-2xl font-bold text-jet-black flex items-center gap-4">
                                <span className="bg-rose-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold">5</span>
                                The Dealbreaker: Should YOU do it?
                            </h2>
                            <span className="text-xs font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full uppercase tracking-wide">Interactive Tool</span>
                        </div>
                        <div className="p-8 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <p className="mb-8 text-graphite leading-relaxed">
                                        Despite the benefits, pets are <strong>polyphasic sleepers</strong> (they wake up a
                                        lot). If you are a light sleeper, the "micro-awakenings" might leave you groggy. Use
                                        this calculator to weigh the trade-off. (Worried about the mess? Check our guide on <Link href="/sleep-guides/how-to-clean-mattress" className="text-golden-bronze hover:underline">how to clean a mattress</Link>.)
                                    </p>

                                    <form className="space-y-8">
                                        <div>
                                            <label className="block text-jet-black font-bold mb-3">1. Are you a light sleeper?</label>
                                            <div className="flex gap-4">
                                                <label className={`
                                                    flex items-center p-4 border rounded-xl cursor-pointer w-full transition-all duration-200
                                                    ${sleeperType === 'light' ? 'bg-rose-50 border-rose-200 shadow-md ring-2 ring-rose-500/20' : 'border-alabaster-grey hover:bg-gray-50'}
                                                `}>
                                                    <input
                                                        type="radio"
                                                        name="sleeperType"
                                                        value="light"
                                                        checked={sleeperType === 'light'}
                                                        onChange={(e) => setSleeperType(e.target.value)}
                                                        className="hidden"
                                                    />
                                                    <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${sleeperType === 'light' ? 'border-rose-600' : 'border-gray-400'}`}>
                                                        {sleeperType === 'light' && <div className="w-2 h-2 rounded-full bg-rose-600" />}
                                                    </div>
                                                    Yes, I wake up easily.
                                                </label>
                                                <label className={`
                                                    flex items-center p-4 border rounded-xl cursor-pointer w-full transition-all duration-200
                                                    ${sleeperType === 'heavy' ? 'bg-rose-50 border-rose-200 shadow-md ring-2 ring-rose-500/20' : 'border-alabaster-grey hover:bg-gray-50'}
                                                `}>
                                                    <input
                                                        type="radio"
                                                        name="sleeperType"
                                                        value="heavy"
                                                        checked={sleeperType === 'heavy'}
                                                        onChange={(e) => setSleeperType(e.target.value)}
                                                        className="hidden"
                                                    />
                                                    <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${sleeperType === 'heavy' ? 'border-rose-600' : 'border-gray-400'}`}>
                                                        {sleeperType === 'heavy' && <div className="w-2 h-2 rounded-full bg-rose-600" />}
                                                    </div>
                                                    No, I sleep like a log.
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-jet-black font-bold mb-3">2. Do you struggle with anxiety/safety at night?</label>
                                            <div className="flex gap-4">
                                                <label className={`
                                                    flex items-center p-4 border rounded-xl cursor-pointer w-full transition-all duration-200
                                                    ${anxietyLevel === 'high' ? 'bg-rose-50 border-rose-200 shadow-md ring-2 ring-rose-500/20' : 'border-alabaster-grey hover:bg-gray-50'}
                                                `}>
                                                    <input
                                                        type="radio"
                                                        name="anxietyLevel"
                                                        value="high"
                                                        checked={anxietyLevel === 'high'}
                                                        onChange={(e) => setAnxietyLevel(e.target.value)}
                                                        className="hidden"
                                                    />
                                                    <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${anxietyLevel === 'high' ? 'border-rose-600' : 'border-gray-400'}`}>
                                                        {anxietyLevel === 'high' && <div className="w-2 h-2 rounded-full bg-rose-600" />}
                                                    </div>
                                                    Yes, racing thoughts.
                                                </label>
                                                <label className={`
                                                    flex items-center p-4 border rounded-xl cursor-pointer w-full transition-all duration-200
                                                    ${anxietyLevel === 'low' ? 'bg-rose-50 border-rose-200 shadow-md ring-2 ring-rose-500/20' : 'border-alabaster-grey hover:bg-gray-50'}
                                                `}>
                                                    <input
                                                        type="radio"
                                                        name="anxietyLevel"
                                                        value="low"
                                                        checked={anxietyLevel === 'low'}
                                                        onChange={(e) => setAnxietyLevel(e.target.value)}
                                                        className="hidden"
                                                    />
                                                    <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${anxietyLevel === 'low' ? 'border-rose-600' : 'border-gray-400'}`}>
                                                        {anxietyLevel === 'low' && <div className="w-2 h-2 rounded-full bg-rose-600" />}
                                                    </div>
                                                    No, I feel secure.
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* Result Display */}
                                <div className="bg-jet-black rounded-3xl p-8 flex items-center justify-center text-center relative overflow-hidden ring-4 ring-alabaster-grey">
                                    <div className="absolute inset-0 bg-gradient-to-br from-jet-black to-gray-900 z-0"></div>
                                    <div className="relative z-10 w-full">
                                        {verdict ? (
                                            <div className="animate-in fade-in zoom-in duration-500">
                                                <div className="flex justify-center">
                                                    {verdict.icon}
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-2">{verdict.title}</h3>
                                                <p className="text-gray-300">{verdict.desc}</p>
                                            </div>
                                        ) : (
                                            <div className="opacity-50">
                                                <Scale size={48} className="text-gray-600 mx-auto mb-4" />
                                                <h3 className="text-2xl font-bold text-white mb-2">The Verdict</h3>
                                                <p className="text-gray-400">Select your options to see if co-sleeping is right for you.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    );
};

export default SleepWithPets;
