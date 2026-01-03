import React from 'react';
import Header from '../../components/Header';
import { Ruler, AlertTriangle, Eye, Activity, Camera, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OnePointFiveInchThreshold = () => {
    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="relative bg-jet-black overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1582735689369-4fe8d7520ceb?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-jet-black-800/80 backdrop-blur-sm border border-jet-black-800 rounded-full px-4 py-1.5 mb-8">
                        <Info size={16} className="text-golden-bronze" />
                        <span className="text-alabaster-grey text-sm font-medium uppercase tracking-wider">Warranty Guide</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tigher">
                        The <span className="text-golden-bronze">1.5-Inch</span> Indentation Threshold
                    </h1>
                    <p className="text-xl text-alabaster-grey max-w-2xl mx-auto leading-relaxed">
                        The hidden "Performance Gap" in mattress warranties. Why your mattress might feel broken, but the manufacturer says it's fine.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12 relative z-10">

                {/* Intro Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-alabaster-grey p-8 mb-12">
                    <p className="text-lg leading-relaxed text-jet-black font-medium">
                        For both the Brooklyn Bedding Aurora Luxe and the Leesa Original, typical industry warranties have a "critical indentation depth" of greater than <span className="bg-golden-bronze-100 text-jet-black px-1 rounded">1.5 inches</span>.
                        This measurement serves as the strict legal boundary between what manufacturers call "normal wear" and a "warrantable defect."
                    </p>
                </div>

                {/* Brand Specifics */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-alabaster-grey/30 rounded-xl p-6 border border-alabaster-grey hover:border-golden-bronze transition-colors duration-300">
                        <h3 className="text-xl font-bold text-jet-black mb-3 flex items-center gap-2">
                            <span className="w-2 h-8 bg-jet-black rounded-full"></span>
                            Brooklyn Bedding
                        </h3>
                        <p className="text-sm text-graphite leading-relaxed">
                            The warranty specifically covers permanent indentations exceeding <strong>1.5 inches</strong>. Any indentation measuring less than this is explicitly excluded from coverage, though older documentation sometimes cited a 2-inch requirement.
                        </p>
                    </div>
                    <div className="bg-alabaster-grey/30 rounded-xl p-6 border border-alabaster-grey hover:border-golden-bronze transition-colors duration-300">
                        <h3 className="text-xl font-bold text-jet-black mb-3 flex items-center gap-2">
                            <span className="w-2 h-8 bg-golden-bronze rounded-full"></span>
                            Leesa Original
                        </h3>
                        <p className="text-sm text-graphite leading-relaxed">
                            Defines a defect as "deterioration causing the Mattress to have a visible indentation greater than one and one-half <strong>(1.5) inches</strong>".
                        </p>
                    </div>
                </div>

                {/* The Conflict Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-jet-black p-2 rounded-lg text-white">
                            <AlertTriangle size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-jet-black">The "Visible" vs. "Functional" Conflict</h2>
                    </div>

                    <div className="prose prose-lg text-graphite max-w-none mb-8">
                        <p>
                            This standard creates a significant challenge for consumers known as the <strong>"Performance Gap"</strong> or "Hidden Defect". The mattress feels like it has failed, but it doesn't <em>look</em> like it has failed.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                            <div className="bg-golden-bronze-100 p-3 rounded-full shrink-0">
                                <Eye className="text-golden-bronze" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-jet-black mb-2">Unloaded Measurement</h4>
                                <p className="text-sm text-graphite">
                                    For a claim to be valid, the indentation must be visible and measurable <strong>while no one is lying on the mattress</strong>.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                            <div className="bg-golden-bronze-100 p-3 rounded-full shrink-0">
                                <Activity className="text-golden-bronze" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-jet-black mb-2">Support Loss vs. Height Loss</h4>
                                <p className="text-sm text-graphite">
                                    Materials often lose their "Support Factor" (ability to hold weight) long before they lose physical height. You might sink down several inches and feel pain, but if the foam rebounds to within 1.0 inch of flat when you stand up, the claim will be denied.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                            <div className="bg-golden-bronze-100 p-3 rounded-full shrink-0">
                                <Camera className="text-golden-bronze" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-jet-black mb-2">Verification Method</h4>
                                <p className="text-sm text-graphite">
                                    Owners are typically required to provide photo evidence using a straight edge (like a broomstick) across the mattress surface to prove the gap exceeds the 1.5-inch limit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Analogy Block */}
                <div className="bg-jet-black rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-20 shadow-2xl">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-jet-black-800 rounded-full opacity-50 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-jet-black-800 rounded-full opacity-50 blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6 text-golden-bronze">
                            <Info size={24} />
                            <span className="font-bold tracking-wide uppercase text-sm">Understanding the Rule</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">The Pothole Analogy</h3>
                        <p className="text-lg text-alabaster-grey leading-relaxed border-l-4 border-golden-bronze pl-6 italic">
                            "Think of the 1.5-inch rule like a pothole depth requirement for a road repair warranty. The road might be incredibly bumpy and uncomfortable to drive on because the asphalt has softened, but the contractor won't agree to fix it until a hole is physically deep enough to be measured with a ruler while no cars are driving over it."
                        </p>
                    </div>
                </div>

                {/* Comparative Context */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-jet-black mb-6">Comparative Context</h2>
                    <p className="text-graphite mb-8">
                        While 1.5 inches is standard for many "bed-in-a-box" brands, some competitors use more consumer-friendly thresholds, reflecting higher confidence in their material density.
                    </p>

                    <div className="grid gap-4">
                        <div className="flex items-center p-4 bg-white border border-alabaster-grey rounded-lg">
                            <div className="w-32 font-bold text-jet-black">Amerisleep</div>
                            <div className="flex-1 mx-4">
                                <div className="h-4 bg-alabaster-grey rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-golden-bronze w-1/2"></div>
                                </div>
                            </div>
                            <div className="w-24 text-right text-sm font-bold text-golden-bronze">0.75 Inches</div>
                        </div>
                        <div className="flex items-center p-4 bg-white border border-alabaster-grey rounded-lg">
                            <div className="w-32 font-bold text-jet-black">Tempur-Pedic</div>
                            <div className="flex-1 mx-4">
                                <div className="h-4 bg-alabaster-grey rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-golden-bronze w-1/2"></div>
                                </div>
                            </div>
                            <div className="w-24 text-right text-sm font-bold text-golden-bronze">0.75 Inches</div>
                        </div>
                        <div className="flex items-center p-4 bg-jet-black-800/5 border border-jet-black-800/10 rounded-lg">
                            <div className="w-32 font-bold text-jet-black">Industry Standard</div>
                            <div className="flex-1 mx-4">
                                <div className="h-4 bg-alabaster-grey rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-jet-black w-full"></div>
                                </div>
                            </div>
                            <div className="w-24 text-right text-sm font-bold text-jet-black">1.5 Inches</div>
                        </div>
                    </div>
                </div>

                {/* CTA / Navigation */}
                <div className="text-center border-t border-alabaster-grey pt-12">
                    <h3 className="text-xl font-bold text-jet-black mb-4">Have more questions?</h3>
                    <div className="flex justify-center gap-4">
                        <Link to="/mattress-reviews" className="inline-flex items-center gap-2 text-golden-bronze font-bold hover:text-golden-bronze-400 transition">
                            Browse Reviews <ChevronRight size={18} />
                        </Link>
                        <Link to="/comparisons" className="inline-flex items-center gap-2 text-jet-black font-bold hover:text-jet-black-800 transition">
                            Compare Models <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>

            </div>

            {/* Footer Copy from Home (Simplified) */}
            <footer className="bg-jet-black text-alabaster-grey py-16 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} SleepUnpacked Inc. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="#" className="hover:text-white transition">Privacy</a>
                        <a href="#" className="hover:text-white transition">Terms</a>
                        <a href="#" className="hover:text-white transition">Disclosure</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default OnePointFiveInchThreshold;
