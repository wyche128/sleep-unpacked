'use client';

import React, { useState } from 'react';
import {
    Moon,
    ShieldCheck,
    Clock,
    Award,
    Mail,
    MessageSquare,
    Send,
    CheckCircle2,
    Database,
    LineChart,
    ChevronRight
} from 'lucide-react';
import Header from '../../components/Header';

const AboutPage = () => {
    const [formState, setFormState] = useState('idle'); // idle, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('sending');
        // Simulate API call
        setTimeout(() => {
            setFormState('success');
        }, 1500);
    };

    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="relative bg-jet-black overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                        Sleep <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-bronze to-white">Unpacked.</span>
                    </h1>
                    <p className="text-xl text-alabaster-grey max-w-3xl mx-auto mb-8 leading-relaxed">
                        We don't just review mattresses; we audit their lifespan. Our "Living Reviews™" track how products perform over 1, 3, and 5 years so you never buy a lemon again.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#our-mission" className="bg-golden-bronze hover:bg-golden-bronze-400 text-white font-bold py-3 px-8 rounded-lg transition shadow-xl">Our Mission</a>
                        <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg transition backdrop-blur-sm border border-white/20">Contact Us</a>
                    </div>
                </div>
            </div>

            {/* Our Mission Section */}
            <section id="our-mission" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-jet-black mb-6">The Problem with Traditional Reviews</h2>
                        <p className="text-graphite text-lg mb-6 leading-relaxed">
                            Most review sites sleep on a mattress for three nights and call it a day. But a mattress that feels like a cloud in week one might feel like a hammock in year two.
                        </p>
                        <p className="text-graphite text-lg mb-8 leading-relaxed">
                            SleepUnpacked was founded on a simple principle: **Durability is the only metric that matters.** We analyze material specs, 3rd party testing, and aggregate thousands of verified owner data points to give you the truth about long-term comfort.
                        </p>
                        <div className="space-y-4">
                            {[
                                { title: "No Bias", desc: "We buy our own test models. No sponsored placement." },
                                { title: "Annual Re-Testing", desc: "We track how top models degrade over 18+ months." },
                                { title: "Data-First", desc: "Pressure maps and 3rd party testing results over marketing fluff." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-golden-bronze mt-1 shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-bold text-jet-black">{item.title}</h4>
                                        <p className="text-sm text-graphite">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-alabaster-grey rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?auto=format&fit=crop&q=80&w=1000"
                                alt="Mattress Testing"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-alabaster-grey hidden sm:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-golden-bronze-100 p-3 rounded-full">
                                    <Database className="text-golden-bronze" size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-jet-black">15,000+</div>
                                    <div className="text-xs text-graphite font-medium">Verified Owner Data Points</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="bg-alabaster-grey/30 py-24 border-y border-alabaster-grey">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-jet-black mb-4">How We Unpack Sleep</h2>
                        <p className="text-graphite max-w-2xl mx-auto">Our 3-stage testing process ensures the mattress you buy today is the mattress you'll love for the next decade.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "3rd Party Audit",
                                desc: "We analyze 3rd party lab results and engineering specs to audit foam degradation and coil fatigue under long-term use.",
                                icon: <LineChart size={28} className="text-golden-bronze" />
                            },
                            {
                                step: "02",
                                title: "Living Feedback",
                                desc: "We maintain a 'Living Review' for every top model, updating ratings annually based on long-term test models in our sleepers' homes.",
                                icon: <Clock size={28} className="text-golden-bronze" />
                            },
                            {
                                step: "03",
                                title: "Owner Aggregation",
                                desc: "We scrape and verify user sentiment across 1, 3, and 5-year intervals to validate 3rd party findings with real-world outcomes.",
                                icon: <Award size={28} className="text-golden-bronze" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-alabaster-grey group hover:shadow-lg transition">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-golden-bronze-100 p-4 rounded-xl">
                                        {item.icon}
                                    </div>
                                    <span className="text-4xl font-black text-jet-black/5">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-jet-black mb-3">{item.title}</h3>
                                <p className="text-graphite leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-jet-black rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
                    <div className="p-8 md:p-16 text-white bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-jet-black-800 to-jet-black">
                        <h2 className="text-3xl font-bold mb-6 italic">Got Questions? We Have Data.</h2>
                        <p className="text-alabaster-grey text-lg mb-12">
                            Whether you're a manufacturer looking for audit info or a sleeper stuck between two choices, our team is here to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="bg-jet-black-800 p-3 rounded-xl border border-white/10">
                                    <Mail className="text-golden-bronze" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">General Inquiries</h4>
                                    <p className="text-alabaster-grey text-sm">hello@sleepunpacked.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-jet-black-800 p-3 rounded-xl border border-white/10">
                                    <MessageSquare className="text-golden-bronze" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Expert Advice</h4>
                                    <p className="text-alabaster-grey text-sm">Get a personalized recommendation within 48 hours.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 p-6 bg-golden-bronze/10 rounded-2xl border border-golden-bronze/20">
                            <p className="text-sm text-alabaster-grey italic">
                                "Our mission is to end the '2-year sag' that plagues the mattress industry. Your feedback helps us hold brands accountable."
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-16 bg-white">
                        {formState === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="bg-golden-bronze-100 p-6 rounded-full mb-6">
                                    <CheckCircle2 className="text-golden-bronze" size={48} />
                                </div>
                                <h3 className="text-2xl font-bold text-jet-black mb-2">Message Received!</h3>
                                <p className="text-graphite mb-8">One of our sleep auditors will get back to you within 2 business days.</p>
                                <button
                                    onClick={() => setFormState('idle')}
                                    className="text-golden-bronze font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-graphite uppercase tracking-wider">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-alabaster-grey/50 border border-alabaster-grey rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-golden-bronze transition"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-graphite uppercase tracking-wider">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-alabaster-grey/50 border border-alabaster-grey rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-golden-bronze transition"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-graphite uppercase tracking-wider">Subject</label>
                                    <select className="w-full bg-alabaster-grey/50 border border-alabaster-grey rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-golden-bronze transition appearance-none">
                                        <option>Personal Mattress Recommendation</option>
                                        <option>Question about testing process</option>
                                        <option>Partnership/Media Inquiry</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-graphite uppercase tracking-wider">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full bg-alabaster-grey/50 border border-alabaster-grey rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-golden-bronze transition"
                                        placeholder="Tell us about your sleep style, current mattress issues, or budget..."
                                    ></textarea>
                                </div>
                                <button
                                    disabled={formState === 'sending'}
                                    className="w-full bg-jet-black text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:transform-none"
                                >
                                    {formState === 'sending' ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Submit Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-[10px] text-graphite/60 italic">
                                    By submitting, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* FAQ Teaser */}
            <section className="py-20 border-t border-alabaster-grey">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-jet-black mb-4">Want Faster Answers?</h2>
                    <p className="text-graphite mb-8">Our Sleep Knowledge Base contains answers to 200+ common questions about mattress materials, returns, and warranties.</p>
                    <a href="/faqs" className="inline-flex items-center text-golden-bronze font-bold group">
                        Browse the FAQ Hub <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
                    </a>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
