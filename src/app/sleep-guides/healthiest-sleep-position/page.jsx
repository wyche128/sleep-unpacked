'use client';

import React from 'react';
import Header from '../../../components/Header';
import { CheckCircle, XCircle, ChevronRight, Star, Moon, Award, Info, Calendar, ShieldCheck, HeartPulse } from 'lucide-react';
import Link from 'next/link';

// --- Comparison Table ---
const ComparisonTable = () => (
    <div className="overflow-x-auto my-8 rounded-xl border border-alabaster-grey shadow-sm">
        <table className="min-w-full text-sm text-left text-graphite bg-white">
            <thead className="text-xs text-jet-black uppercase bg-alabaster-grey/50">
                <tr>
                    <th className="px-6 py-4 border-b border-alabaster-grey font-bold">Position</th>
                    <th className="px-6 py-4 border-b border-alabaster-grey font-bold">Prevalence</th>
                    <th className="px-6 py-4 border-b border-alabaster-grey font-bold">Pros</th>
                    <th className="px-6 py-4 border-b border-alabaster-grey font-bold">Cons</th>
                    <th className="px-6 py-4 border-b border-alabaster-grey font-bold">Ideal Firmness</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b border-alabaster-grey hover:bg-alabaster-grey/10 transition-colors">
                    <td className="px-6 py-4 font-bold text-jet-black">Back</td>
                    <td className="px-6 py-4">~10-15%</td>
                    <td className="px-6 py-4 text-green-700">Spinal alignment, reduced wrinkles, prevents acid reflux (if elevated)</td>
                    <td className="px-6 py-4 text-red-600">Snoring, Sleep Apnea risk</td>
                    <td className="px-6 py-4"><span className="bg-jet-black text-white px-2 py-1 rounded text-xs font-bold">Medium-Firm (6-7)</span></td>
                </tr>
                <tr className="bg-white border-b border-alabaster-grey hover:bg-alabaster-grey/10 transition-colors">
                    <td className="px-6 py-4 font-bold text-jet-black">Side</td>
                    <td className="px-6 py-4">~86% (Most Popular)</td>
                    <td className="px-6 py-4 text-green-700">Reduces snoring, good for pregnancy, digestion, brain waste clearance</td>
                    <td className="px-6 py-4 text-red-600">Shoulder/Hip pressure, facial wrinkles</td>
                    <td className="px-6 py-4"><span className="bg-jet-black text-white px-2 py-1 rounded text-xs font-bold">Soft to Medium (4-6)</span></td>
                </tr>
                <tr className="bg-white hover:bg-alabaster-grey/10 transition-colors">
                    <td className="px-6 py-4 font-bold text-jet-black">Stomach</td>
                    <td className="px-6 py-4">~10%</td>
                    <td className="px-6 py-4 text-green-700">Reduces snoring</td>
                    <td className="px-6 py-4 text-red-600">Neck strain, lower back hyperextension, generally not recommended</td>
                    <td className="px-6 py-4"><span className="bg-jet-black text-white px-2 py-1 rounded text-xs font-bold">Firm (7-8)</span></td>
                </tr>
            </tbody>
        </table>
    </div>
);

// --- Product Card ---
const ProductCard = ({ title, badge, rating, price, description, linkText, href, imageGradient }) => (
    <div className="border border-alabaster-grey rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white mb-6 group">
        <div className={`h-40 ${imageGradient} flex items-center justify-center text-white font-bold text-2xl relative`}>
            {title}
            {badge && (
                <div className="absolute top-2 right-2 bg-golden-bronze text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded shadow-sm">
                    {badge}
                </div>
            )}
        </div>
        <div className="p-5">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-jet-black group-hover:text-golden-bronze transition-colors">{title}</h3>
                <div className="flex items-center bg-green-50 px-2 py-0.5 rounded border border-green-100">
                    <Star size={14} className="text-green-600 fill-current" />
                    <span className="ml-1 text-sm font-bold text-green-800">{rating}</span>
                </div>
            </div>
            <p className="text-graphite text-sm mb-4 line-clamp-3">{description}</p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-alabaster-grey">
                <span className="font-semibold text-jet-black">{price}</span>
                <Link href={href || '/top-picks'} className="text-white bg-jet-black hover:bg-golden-bronze px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    {linkText}
                </Link>
            </div>
        </div>
    </div>
);

// --- Section Heading ---
const SectionHeading = ({ children, id }) => (
    <h2 id={id} className="text-2xl sm:text-3xl font-bold text-jet-black mt-16 mb-6 flex items-center gap-3 scroll-mt-24">
        <div className="h-8 w-1 bg-golden-bronze rounded-full"></div>
        {children}
    </h2>
);

// --- Table of Contents ---
const TableOfContents = () => (
    <div className="bg-white border border-alabaster-grey p-6 rounded-xl mb-8 sticky top-24 shadow-sm">
        <h4 className="font-bold text-jet-black mb-4 flex items-center gap-2">
            <Info size={16} className="text-golden-bronze" />
            In This Guide
        </h4>
        <ul className="space-y-3 text-sm text-graphite">
            <li><a href="#healthiest" className="hover:text-golden-bronze hover:underline transition-colors block">The Verdict: The Healthiest Position</a></li>
            <li><a href="#back-sleeping" className="hover:text-golden-bronze hover:underline transition-colors block">Deep Dive: Back Sleeping</a></li>
            <li><a href="#side-sleeping" className="hover:text-golden-bronze hover:underline transition-colors block">Deep Dive: Side Sleeping</a></li>
            <li><a href="#stomach-sleeping" className="hover:text-golden-bronze hover:underline transition-colors block">Why to Avoid Stomach Sleeping</a></li>
            <li><a href="#mattress-pairing" className="hover:text-golden-bronze hover:underline transition-colors block">Pairing Your Mattress</a></li>
        </ul>
    </div>
);

const HealthiestSleepPosition = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-graphite">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-golden-bronze/10 text-golden-bronze text-xs font-bold uppercase tracking-wide mb-4 border border-golden-bronze/20">
                        <Award size={14} />
                        Sleep Wellness Guide
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-jet-black tracking-tight mb-6 leading-tight">
                        What is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-bronze to-yellow-600">Healthiest</span> Sleep Position?
                    </h1>
                    <p className="text-lg text-graphite leading-relaxed">
                        While 86% of people favor their side, science and our testing data suggest that
                        <strong className="text-jet-black"> back sleeping</strong> is generally the healthiest option for spinal alignment and skin health.
                    </p>
                    <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                            <Calendar size={14} /> Updated December 8, 2025
                        </span>
                        <span className="flex items-center gap-1">
                            <ShieldCheck size={14} /> Fact Checked
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">

                        {/* The Direct Answer */}
                        <div id="healthiest" className="bg-alabaster-grey/30 border-l-4 border-golden-bronze p-8 rounded-r-xl mb-12">
                            <h3 className="text-xl font-bold text-jet-black mb-3 flex items-center gap-2">
                                <HeartPulse className="text-golden-bronze" /> The Short Answer
                            </h3>
                            <p className="text-jet-black/80 font-medium leading-relaxed">
                                <strong className="text-jet-black">Back sleeping</strong> is widely considered the healthiest position. It allows your
                                head, neck, and spine to rest in a neutral position, reducing pressure points and preventing
                                aches. However, if you suffer from sleep apnea or severe snoring, back sleeping may worsen these
                                conditions, in which case side sleeping is preferred.
                            </p>
                        </div>

                        <p className="text-graphite leading-relaxed mb-8 text-lg">
                            How you sleep determines how you feel the next day. While comfort is subjective, the mechanics of
                            spinal alignment are not. Based on our tests of over 360 mattresses and deep dives into sleep
                            physiology, here is the breakdown of why back sleeping takes the gold medal, and how other positions
                            compare.
                        </p>

                        <ComparisonTable />

                        <SectionHeading id="back-sleeping">1. Back Sleeping: The Gold Standard</SectionHeading>
                        <p className="mb-6 text-graphite">
                            Though only about 10-15% of the population sleeps primarily on their back, it offers the most
                            benefits for the average sleeper without respiratory issues.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                    <CheckCircle size={18} /> The Pros
                                </h4>
                                <ul className="space-y-3 text-sm text-green-900">
                                    <li className="flex gap-2"><div className="w-1 h-1 bg-green-500 rounded-full mt-2 shrink-0"></div><p><strong>Neutral Spine:</strong> Keeps head, neck, and spine aligned.</p></li>
                                    <li className="flex gap-2"><div className="w-1 h-1 bg-green-500 rounded-full mt-2 shrink-0"></div><p><strong>Skin Health:</strong> Face isn't pressed against a pillow, reducing wrinkles and acne.</p></li>
                                    <li className="flex gap-2"><div className="w-1 h-1 bg-green-500 rounded-full mt-2 shrink-0"></div><p><strong>Reduced Pain:</strong> Minimizes pressure points on hips and shoulders.</p></li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                    <XCircle size={18} /> The Cons
                                </h4>
                                <ul className="space-y-3 text-sm text-red-900">
                                    <li className="flex gap-2"><div className="w-1 h-1 bg-red-500 rounded-full mt-2 shrink-0"></div><p><strong>Snoring:</strong> Gravity pulls the tongue back, worsening snoring.</p></li>
                                    <li className="flex gap-2"><div className="w-1 h-1 bg-red-500 rounded-full mt-2 shrink-0"></div><p><strong>Sleep Apnea:</strong> Not recommended for obstructive sleep apnea.</p></li>
                                    <li className="flex gap-2"><div className="w-1 h-1 bg-red-500 rounded-full mt-2 shrink-0"></div><p><strong>Lower Back:</strong> Some may need a small pillow under knees to flatten the lumbar curve.</p></li>
                                </ul>
                            </div>
                        </div>
                        <p className="p-4 bg-alabaster-grey/50 border border-alabaster-grey rounded-lg text-graphite text-sm italic mb-8">
                            <strong className="text-jet-black not-italic">Pro Tip:</strong> If you sleep on your back, you generally need a "Medium-Firm" to
                            "Slightly Firm" mattress (6-7 out of 10) to prevent your hips from sinking too deep. (See our <Link href="/sleep-guides/mattress-firmness-guide" className="text-golden-bronze hover:underline">firmness guide</Link>.)
                        </p>

                        <SectionHeading id="side-sleeping">2. Side Sleeping: The Crowd Favorite</SectionHeading>
                        <p className="mb-4 text-graphite">
                            According to our 2025 survey of 70,000 sleepers, <strong className="text-jet-black">86% of us are side sleepers</strong> at
                            least part of the time. While back sleeping is technically "healthiest" for the spine, side sleeping
                            is the best alternative and is actually medically necessary for some.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-graphite mb-8 marker:text-golden-bronze">
                            <li><strong>Best for Snoring:</strong> Keeps airways open.</li>
                            <li><strong>Pregnancy:</strong> Sleeping on the left side improves circulation to the heart and placenta.</li>
                            <li><strong>Gut Health:</strong> Can aid digestion and reduce heartburn.</li>
                        </ul>
                        <p className="text-graphite mb-6">
                            The downside? The "fetal position" can restrict deep breathing if you curl up too tightly, and
                            pressing your face into a pillow nightly contributes to sleep wrinkles. Side sleepers also require a
                            softer mattress (4-6 out of 10) to cushion the shoulders and hips.
                        </p>

                        <SectionHeading id="stomach-sleeping">3. Stomach Sleeping: Proceed with Caution</SectionHeading>
                        <p className="mb-4 text-graphite">
                            Generally, stomach sleeping is considered the "worst" position. It forces your neck to turn at a
                            90-degree angle, placing significant strain on the cervical spine. It also often causes the lower
                            back to hyperextend (swayback), leading to morning aches.
                        </p>
                        <p className="text-graphite mb-8">
                            If you must sleep on your stomach, you need a <strong className="text-jet-black">Firm mattress (7-8/10)</strong> to keep your
                            hips elevated and aligned with your shoulders.
                        </p>

                        <div id="mattress-pairing" className="mt-12 p-8 bg-jet-black rounded-2xl text-white shadow-xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517677130605-e7fa60426c6e?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Is Your Mattress Causing You Pain?</h3>
                                <p className="text-alabaster-grey mb-6 max-w-xl">
                                    Often, we sleep in unhealthy positions because our mattress is too old or the wrong firmness. If
                                    your mattress is sagging, you might be twisting your body to find support.
                                </p>
                                <Link href="/sleep-guides/how-to-choose-a-mattress" className="bg-golden-bronze hover:bg-white hover:text-jet-black text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg inline-flex items-center gap-2">
                                    Take the Mattress Finder Quiz
                                    <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-4">
                        <TableOfContents />

                        <div className="sticky top-80">
                            <h3 className="font-bold text-jet-black text-lg mb-6 flex items-center gap-2 border-b border-alabaster-grey pb-4">
                                <Award className="text-golden-bronze" />
                                Top Recommendations
                            </h3>

                            {/* Leesa Sapira - Back Sleeper Pick */}
                            <ProductCard
                                title="Leesa Sapira Hybrid"
                                badge="Best for Back Sleepers"
                                rating="9.6"
                                price="$1,599 (Queen)"
                                description="Our top pick for back sleepers. Its medium-firm feel and minimal sinkage create perfect spinal alignment."
                                linkText="Read Review"
                                imageGradient="bg-gradient-to-br from-slate-700 to-slate-900"
                                href="/top-picks/best-for-back-pain"
                            />

                            {/* WinkBed - Side Sleeper Pick */}
                            <ProductCard
                                title="The WinkBed"
                                badge="Best for Side Sleepers"
                                rating="9.8"
                                price="$1,499 (Queen)"
                                description="The #1 rated mattress for side sleepers. The pillow-top comfort layer provides ample pressure relief."
                                linkText="Read Review"
                                imageGradient="bg-gradient-to-br from-blue-600 to-indigo-900"
                                href="/top-picks/best-for-side-sleepers"
                            />

                            {/* Helix - Stomach Pick */}
                            <ProductCard
                                title="Helix Dawn"
                                badge="Best for Stomach Sleepers"
                                rating="9.4"
                                price="$1,099 (Queen)"
                                description="A firm hybrid designed specifically to prevent hip sinkage. Perfect for stomach sleepers."
                                linkText="Read Review"
                                imageGradient="bg-gradient-to-br from-indigo-900 to-purple-900"
                                href="/top-picks/best-luxury"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HealthiestSleepPosition;
