import React from 'react';
import {
    Clock,
    Info,
    AlertTriangle,
    CheckCircle,
    Ruler,
    RefreshCw,
    Camera,
    Twitter,
    Facebook,
    Linkedin
} from 'lucide-react';
import Header from '../../components/Header';

const FiveTruthsWinkBedEcoCloud = () => {
    return (
        <div className="font-sans text-[#363636] bg-[#e5e5e5]/30 min-h-screen">
            <Header />

            {/* Hero Section */}
            <header className="bg-[#242f40] text-white py-16 sm:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#cca43b] bg-transparent text-[#cca43b] text-xs font-semibold uppercase tracking-wide mb-6">
                        Engineering Report
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white font-serif">
                        The WinkBed EcoCloud: 5 Surprising Truths Buried in the Engineering Report
                    </h1>
                    <p className="text-[#e5e5e5] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        Why a mattress can feel like it failed even when it looks perfectly fine. A deep dive into the engineering reality behind the marketing promise.
                    </p>
                    <div className="mt-8 flex items-center justify-center space-x-2 text-[#cca43b] text-sm">
                        <Clock size={16} />
                        <span>10 min read</span>
                        <span className="mx-2 text-[#e5e5e5]/50">•</span>
                        <span>Updated Dec 2024</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Intro */}
                <article className="prose prose-lg prose-stone mx-auto">
                    <div className="text-xl text-[#363636] italic border-l-4 border-[#cca43b] pl-4 mb-10 bg-white p-4 rounded-r-lg shadow-sm">
                        <p className="m-0">"The WinkBed EcoCloud has a powerful appeal... But many of us have faced the frustrating reality of a mattress that feels great for a year or two, only to start causing mysterious back pain."</p>
                    </div>

                    <p className="mb-6 leading-relaxed">
                        Marketed as an eco-friendly hybrid mattress made with all-natural Talalay latex and backed by a "Forever Warranty," the EcoCloud promises a perfect blend of luxury, sustainability, and peace of mind.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        However, a deep engineering analysis of the EcoCloud's design and materials reveals a more nuanced story about its durability—one that goes far beyond the marketing points. It uncovers why a mattress can feel like it has failed even when it looks perfectly fine.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        Below, we distill the <strong>five most impactful and counter-intuitive takeaways</strong> from that analysis to give you a clearer picture of what to expect.
                    </p>

                    <div className="my-12 border-t border-[#e5e5e5]"></div>

                    {/* Truth 1 */}
                    <section className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-[#242f40] mb-6 font-serif">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#cca43b] text-white rounded-full text-sm font-bold mr-3 flex-shrink-0">1</span>
                            The "Phantom Sag": Failure Without a Trace
                        </h2>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e5e5] mb-6">
                            <p className="mb-4 leading-relaxed">
                                Have you ever woken up with an aching back, feeling like you spent the night in a hammock, only to look at your mattress and see a perfectly flat surface? This is the central mystery of the EcoCloud's aging process: <strong>Functional Softening.</strong>
                            </p>
                            <p className="mb-4 leading-relaxed">
                                The Talalay latex core is exceptionally elastic. While this prevents permanent indentations, it suffers from fatigue (hysteresis). The mattress springs back when you get up, but acts like a "pit" under your body weight.
                            </p>
                            <blockquote className="bg-[#e5e5e5]/30 p-4 rounded-lg border-l-4 border-[#363636]/30 italic text-[#363636] text-sm">
                                The user perceives this as a "pit" because they sink deeper, but the mattress returns to flat when they stand up. This "Phantom Sag" is the core disconnect between user experience and warranty criteria.
                            </blockquote>
                        </div>
                        <div className="text-sm text-[#363636]/70 flex items-center">
                            <Info size={16} className="text-[#cca43b] mr-2 inline" />
                            <span>
                                <strong>Note:</strong> The wool quilting may compact 0.5 to 0.75 inches, creating a cosmetic dip, but the real pain comes from the invisible structural fatigue.
                            </span>
                        </div>
                    </section>

                    {/* Truth 2 */}
                    <section className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-[#242f40] mb-6 font-serif">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#cca43b] text-white rounded-full text-sm font-bold mr-3 flex-shrink-0">2</span>
                            The "Lifetime Warranty" Paradox
                        </h2>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e5e5]">
                            <p className="mb-4 leading-relaxed">
                                The "Forever Warranty" requires a visible indentation greater than <strong>1.5 inches</strong>. Here lies the paradox:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-4 text-[#363636]">
                                <li>The latex and steel coils are engineered specifically to <em>resist</em> deep, permanent impressions.</li>
                                <li>Functional softening causes pain but rarely leaves a deep enough measurement to trigger the warranty.</li>
                            </ul>
                            <p className="leading-relaxed">
                                Essentially, your mattress can be functionally unusable for sleep but legally "fine." The company's "Any Reason" 50% Off Replacement Option acknowledges this gap, offering a pragmatic solution for softening issues not covered by the main warranty.
                            </p>
                        </div>
                    </section>

                    {/* Truth 3 */}
                    <section className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-[#242f40] mb-6 font-serif">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#cca43b] text-white rounded-full text-sm font-bold mr-3 flex-shrink-0">3</span>
                            Your Bed Frame is a Silent Killer
                        </h2>
                        <p className="mb-4 leading-relaxed">
                            A post-2020 design update introduced the "cotton shift"—replacing rigid foam bases with a pliable fibrous cotton pad. This is eco-friendly but mechanically vulnerable.
                        </p>
                        <div className="bg-white border-l-4 border-[#363636] p-5 rounded-r-lg shadow-sm">
                            <h3 className="font-bold text-[#242f40] mb-2 flex items-center">
                                <AlertTriangle size={16} className="text-[#cca43b] mr-2" />
                                The Risk Factor
                            </h3>
                            <p className="text-[#363636] text-sm mb-3 leading-relaxed">
                                If placed on slats with gaps wider than <strong>2.5 inches</strong>, the cotton base domes and sags into the gaps. This creates a localized dip in support that voids your warranty.
                            </p>
                        </div>
                    </section>

                    {/* Truth 4 */}
                    <section className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-[#242f40] mb-6 font-serif">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#cca43b] text-white rounded-full text-sm font-bold mr-3 flex-shrink-0">4</span>
                            The Tale of Two Lifespans
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Group A */}
                            <div className="bg-white p-5 rounded-xl border border-[#cca43b] shadow-sm">
                                <div className="font-bold text-[#242f40] mb-2">Group A: Success</div>
                                <div className="text-3xl font-bold text-[#cca43b] mb-2">6-8+ <span className="text-sm font-normal text-[#363636]">years</span></div>
                                <p className="text-sm text-[#363636]">
                                    Sleepers under 200 lbs using a rigid, supportive foundation.
                                </p>
                            </div>
                            {/* Group B */}
                            <div className="bg-[#e5e5e5]/50 p-5 rounded-xl border border-[#363636]/20">
                                <div className="font-bold text-[#242f40] mb-2">Group B: Early Failure</div>
                                <div className="text-3xl font-bold text-[#242f40] mb-2">2-4 <span class="text-sm font-normal text-[#363636]">years</span></div>
                                <p className="text-sm text-[#363636]">
                                    Sleepers over 200 lbs OR those using foundations with wide slats. Stomach sleepers are at highest risk.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Truth 5 */}
                    <section className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-[#242f40] mb-6 font-serif">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#cca43b] text-white rounded-full text-sm font-bold mr-3 flex-shrink-0">5</span>
                            Performance Hybrid vs. Indestructible Tank
                        </h2>
                        <p className="mb-4 leading-relaxed">
                            The EcoCloud is a "Performance Hybrid." It uses soft, bouncy Talalay latex for immediate comfort and pressure relief, rather than the denser Dunlop latex found in "Tank" hybrids.
                        </p>
                        <p className="mt-4 leading-relaxed">
                            <strong>The Trade-off:</strong> While structurally the materials survive a decade, the <em>comfort life</em>—the period of proper spinal alignment—is likely <strong>4 to 6 years</strong> for the average user. It prioritizes feel over absolute longevity.
                        </p>
                    </section>

                    {/* Actionable Advice */}
                    <section className="bg-[#242f40] text-white rounded-2xl p-8 shadow-xl transform hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden border border-[#363636]">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#cca43b] rounded-full opacity-20 blur-xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-6 flex items-center text-white font-serif">
                                <CheckCircle size={24} className="text-[#cca43b] mr-3" />
                                Actionable Advice for Owners
                            </h2>
                            <div className="grid gap-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#363636] rounded-full flex items-center justify-center mt-1 border border-[#cca43b]/30">
                                        <Ruler size={14} className="text-[#cca43b]" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-lg text-white">The Foundation Audit</h3>
                                        <p className="text-white text-sm mt-1 leading-relaxed">
                                            Ensure slats are spaced <strong>less than 2.5 inches apart</strong>. If wider, add a "bunkie board" or 3/4-inch plywood immediately to prevent base failure.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#363636] rounded-full flex items-center justify-center mt-1 border border-[#cca43b]/30">
                                        <RefreshCw size={14} className="text-[#cca43b]" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-lg text-white">Rotation Protocol</h3>
                                        <p className="text-white text-sm mt-1 leading-relaxed">
                                            Rotate the mattress 180 degrees every <strong>three months</strong>. This is non-negotiable for evening out latex wear.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#363636] rounded-full flex items-center justify-center mt-1 border border-[#cca43b]/30">
                                        <Camera size={14} className="text-[#cca43b]" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-lg text-white">Document Everything</h3>
                                        <p className="text-white text-sm mt-1 leading-relaxed">
                                            Take photos of your mattress on its foundation right now, clearly showing slat spacing. This is your best defense against warranty denials.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </article>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-[#e5e5e5] py-12 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[#363636]/60 mb-4">
                        Analysis based on engineering reports and user durability data.
                    </p>
                    <div className="flex justify-center space-x-6 text-[#363636]/40 mb-8">
                        <a href="#" className="hover:text-[#cca43b] transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-[#cca43b] transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-[#cca43b] transition-colors"><Linkedin size={20} /></a>
                    </div>
                    <p className="text-[#363636]/40 text-sm">
                        &copy; 2024 Mattress Engineering Analysis. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default FiveTruthsWinkBedEcoCloud;
