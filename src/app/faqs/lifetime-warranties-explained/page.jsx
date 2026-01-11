'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {
    ShieldCheck,
    AlertTriangle,
    Ruler,
    CheckCircle2,
    XCircle,
    Info,
    BarChart3,
    TrendingDown,
    UserCheck,
    ScrollText,
    ChevronDown,
    Droplets
} from 'lucide-react';
import Link from 'next/link';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const LifespanChart = () => {
    const data = {
        labels: ['Foam Mattress', 'Hybrid Mattress', 'Industry Avg Warranty', 'Marketing Promise'],
        datasets: [{
            label: 'Years',
            data: [8.5, 13.5, 13, 50],
            backgroundColor: [
                '#94a3b8', // slate-400
                '#94a3b8',
                '#c5a059', // golden-bronze
                '#4f46e5'  // indigo-600
            ],
            borderRadius: 8
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        if (context.dataIndex === 3) return "Lifetime (Functionally Indefinite)";
                        return `${context.raw} Years`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 60,
                ticks: {
                    callback: (value) => value === 50 ? 'Lifetime' : value,
                    color: '#64748b'
                },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                ticks: { color: '#64748b' },
                grid: { display: false }
            }
        }
    };

    return (
        <div className="h-[350px] w-full">
            <Bar data={data} options={options} />
        </div>
    );
};

const CliffChart = () => {
    const data = {
        labels: ['Year 1', 'Year 5', 'Year 9', 'Year 10', 'Year 11', 'Year 15', 'Year 20'],
        datasets: [
            {
                label: 'Coverage Level %',
                data: [100, 100, 100, 100, 50, 30, 10],
                borderColor: '#c5a059',
                backgroundColor: 'rgba(197, 160, 89, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Customer Cost ($)',
                data: [0, 0, 0, 0, 100, 150, 200],
                borderColor: '#4f46e5',
                borderDash: [5, 5],
                fill: false,
                tension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: '#64748b', boxWidth: 12 }
            }
        },
        scales: {
            y: {
                min: 0,
                max: 200,
                ticks: { color: '#64748b' },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                ticks: { color: '#64748b' },
                grid: { display: false }
            }
        }
    };

    return (
        <div className="h-[300px] w-full">
            <Line data={data} options={options} />
        </div>
    );
};

const SagSimulator = () => {
    const [sag, setSag] = useState(0.7);
    const isApproved = sag >= 1.5;

    return (
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-alabaster-grey">
            <h3 className="text-xl font-bold text-jet-black mb-6 flex items-center gap-2 m-0">
                <Ruler className="text-golden-bronze" /> Interactive Sagging Meter
            </h3>
            <p className="text-sm text-graphite mb-10">
                Drag the slider to see if your back pain qualifies as a "defect" under most lifetime policies.
            </p>

            <div className="mb-10">
                <input
                    type="range"
                    min="0"
                    max="2.5"
                    step="0.1"
                    value={sag}
                    onChange={(e) => setSag(parseFloat(e.target.value))}
                    className="w-full h-2 bg-alabaster-grey rounded-lg appearance-none cursor-pointer accent-golden-bronze"
                />
                <div className="flex justify-between text-[10px] font-bold text-alabaster-grey/80 mt-4 uppercase tracking-widest">
                    <span>0.0"</span>
                    <span>0.75"</span>
                    <span>1.5"</span>
                    <span>2.0"+</span>
                </div>
            </div>

            <div className={`p-8 rounded-2xl border transition-all duration-300 ${isApproved ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-100'}`}>
                <div className="flex flex-col items-center text-center">
                    <span className={`text-5xl font-black mb-3 ${isApproved ? 'text-green-600' : 'text-red-500'}`}>
                        {sag.toFixed(1)}"
                    </span>
                    <span className={`text-lg font-bold uppercase tracking-wide mb-2 ${isApproved ? 'text-green-800' : 'text-red-800'}`}>
                        {isApproved ? 'Claim Potentially Approved' : 'Status: Claim Denied'}
                    </span>
                    <p className="text-sm m-0 text-graphite/80 leading-relaxed">
                        {isApproved
                            ? "This exceeds the 1.5-inch threshold common in lifetime warranties. You may qualify for replacement."
                            : "Considered 'Normal Wear'. Your back may hurt, but the warranty contract is safe for the manufacturer."
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

const VoidChecklist = () => {
    const [checks, setChecks] = useState({
        owner: true,
        stain: true,
        foundation: true
    });

    const isValid = Object.values(checks).every(Boolean);

    const toggle = (key) => setChecks(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <div className="bg-jet-black p-10 md:p-12 rounded-3xl shadow-2xl text-white">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 m-0">
                <ShieldCheck className="text-golden-bronze" /> Warranty Vital Signs
            </h3>

            <div className="space-y-4 mb-10">
                {[
                    { id: 'owner', label: 'Are you the original owner?', icon: <UserCheck size={18} /> },
                    { id: 'stain', label: 'Is the mattress stain-free?', icon: <Droplets size={18} /> },
                    { id: 'foundation', label: 'Using a supportive foundation?', icon: <CheckCircle2 size={18} /> }
                ].map(item => (
                    <button
                        key={item.id}
                        onClick={() => toggle(item.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${checks[item.id] ? 'bg-white/5 border-white/10' : 'bg-red-500/10 border-red-500/20'}`}
                    >
                        <div className="flex items-center gap-3">
                            <span className={checks[item.id] ? 'text-golden-bronze' : 'text-red-400'}>{item.icon}</span>
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                        <div className={`w-10 h-6 rounded-full relative transition-colors ${checks[item.id] ? 'bg-golden-bronze' : 'bg-red-500'}`}>
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${checks[item.id] ? 'left-5' : 'left-1'}`}></div>
                        </div>
                    </button>
                ))}
            </div>

            <div className={`p-6 rounded-xl text-center font-black tracking-widest uppercase text-sm shadow-inner transition-all ${isValid ? 'bg-green-500 text-white' : 'bg-red-600 text-white animate-pulse'}`}>
                {isValid ? 'Warranty Active' : 'Warranty Liquidated'}
            </div>
        </div>
    );
};

const LifetimeWarrantiesGuide = () => {
    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="bg-jet-black pt-28 pb-40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-transparent to-transparent"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden-bronze/10 border border-golden-bronze/20 text-golden-bronze text-[10px] font-black uppercase tracking-[0.2em] mb-10">
                        <TrendingDown size={14} /> The Sleep Audit
                    </div>
                    <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-[0.9]">
                        Lifetime Warranties <br /><span className="text-golden-bronze italic">Are a Myth.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-alabaster-grey/80 max-w-2xl mx-auto leading-relaxed font-light">
                        That gold badge feels like a safety net. But unless you plan on sleeping on the same slab of foam into the next century, "forever" isn't what it seems.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 -mt-24 relative z-20 pb-24">
                <div className="bg-white rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-alabaster-grey">

                    <div className="prose prose-lg max-w-none prose-headings:text-jet-black prose-p:text-graphite">

                        <div className="bg-alabaster-grey/30 p-10 rounded-3xl border-l-[6px] border-golden-bronze mb-16">
                            <p className="text-2xl font-light italic text-jet-black m-0 leading-relaxed">
                                "The most surprising takeaway? A 'Lifetime Warranty' usually covers a product designed to last less than a decade. We analyzed the physics of foam to expose the gap."
                            </p>
                        </div>

                        {/* Chart Section 1 */}
                        <div className="my-20">
                            <h2 className="text-3xl font-black mb-8">Lifetime is a Statistical Anomaly</h2>
                            <p>
                                Polyurethane foam and steel coils degrade with nightly use. Companies bank on you upgrading for hygiene or comfort reasons long before a structural failure occurs.
                            </p>
                            <div className="bg-slate-50/50 p-8 rounded-3xl border border-alabaster-grey my-12">
                                <h4 className="text-center text-xs font-bold uppercase tracking-widest text-alabaster-grey mb-8">Actual Lifespan vs. Marketing Promise</h4>
                                <LifespanChart />
                                <p className="text-[10px] text-center text-alabaster-grey mt-6 uppercase tracking-wider">Source: NapLab Durability Audit 2024</p>
                            </div>
                        </div>

                        {/* Section 2: The Cliff */}
                        <div className="my-20">
                            <div className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-black mb-6 italic">The "Year 10" Cliff</h2>
                                    <p>
                                        Many warranties shift from a <strong>"replacement"</strong> model to a <strong>"repair"</strong> model after the first decade.
                                    </p>
                                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100 my-8">
                                        <h4 className="text-red-800 font-bold m-0 mb-3 flex items-center gap-2">
                                            <AlertTriangle size={18} /> Hidden Costs Post-Year 10:
                                        </h4>
                                        <ul className="list-disc list-inside text-sm text-red-900/70 space-y-1 m-0">
                                            <li>Shipping Fees: $50 - $150</li>
                                            <li>Prorated Repair Fees</li>
                                            <li>Inspection Charges</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex-1 w-full bg-white p-6 rounded-3xl shadow-xl border border-alabaster-grey">
                                    <CliffChart />
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Sagging Simulator */}
                        <div className="my-28">
                            <h2 className="text-3xl font-black mb-8 text-center uppercase tracking-tighter">The "Normal Wear" Loophole</h2>
                            <p className="text-center max-w-2xl mx-auto mb-16">
                                There is a massive difference between a "defect" and "wear." Most warranties only cover structural failure, not the natural softening that causes back pain.
                            </p>
                            <SagSimulator />
                        </div>

                        {/* Section 4: Voiding */}
                        <div className="my-28 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-6">How to Kill a Warranty</h2>
                                <p>Simple mistakes can legally dissolve your coverage instantly. The fine print is designed to keep the manufacturer's liability low.</p>
                                <div className="space-y-6 mt-10">
                                    <div className="flex gap-4">
                                        <div className="bg-jet-black text-golden-bronze p-3 rounded-xl shadow-lg shrink-0 h-12 w-12 flex items-center justify-center font-bold">01</div>
                                        <div>
                                            <h4 className="m-0 font-bold">Non-Transferable</h4>
                                            <p className="text-sm m-0 opacity-70">The moment the mattress changes hands (even to family), the contract dies.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-jet-black text-golden-bronze p-3 rounded-xl shadow-lg shrink-0 h-12 w-12 flex items-center justify-center font-bold">02</div>
                                        <div>
                                            <h4 className="m-0 font-bold">The Foundation Trap</h4>
                                            <p className="text-sm m-0 opacity-70">Gaps wider than 3" in your bed frame slats will void most claims instantly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <VoidChecklist />
                        </div>

                        {/* Summary */}
                        <div className="mt-32 p-12 bg-alabaster-grey rounded-[2rem] text-center border border-alabaster-grey relative overflow-hidden">
                            <h3 className="text-2xl font-black mb-6 relative z-10 m-0">Audit Summary</h3>
                            <p className="relative z-10 mb-10 opacity-70 leading-relaxed max-w-2xl mx-auto">
                                A lifetime warranty is a nice insurance policy against catastrophic defects, but it is not a guarantee of eternal comfort.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 relative z-10">
                                {[
                                    { label: "Avg Lifespan", val: "7-10 Yrs" },
                                    { label: "Sag Threshold", val: "1.5 Inches" },
                                    { label: "Claim Costs", val: "$100+ Fees" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm w-44">
                                        <div className="text-2xl font-black text-jet-black mb-1">{item.val}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-golden-bronze">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Final CTA */}
                        <div className="mt-16 text-center">
                            <p className="text-graphite mb-8">Ready to file a claim? Make sure you have your evidence ready.</p>
                            <Link
                                href="/faqs/how-to-file-warranty-claim"
                                className="inline-flex items-center gap-3 bg-jet-black text-white px-10 py-5 rounded-full font-bold hover:bg-jet-black-800 transition transform hover:-translate-y-2 shadow-2xl"
                            >
                                Guide to Filing a Claim <ScrollText size={20} className="text-golden-bronze" />
                            </Link>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LifetimeWarrantiesGuide;
