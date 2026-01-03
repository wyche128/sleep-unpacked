import React from 'react';
import Header from '../../components/Header';
import { ArrowLeft, XCircle, CheckCircle, AlertTriangle, Layers, Flame, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const FiberglassFree = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-graphite selection:bg-golden-bronze selection:text-white">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-12">
                <Link to="/frequently-asked-questions" className="inline-flex items-center gap-2 text-golden-bronze font-bold hover:underline mb-8">
                    <ArrowLeft size={20} /> Back to FAQ Hub
                </Link>

                <article>
                    <header className="mb-12 text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-golden-bronze/10 text-golden-bronze text-xs font-bold uppercase tracking-wide mb-6">
                            Materials & Construction
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-jet-black tracking-tight mb-6 leading-tight">
                            Why Is There Fiberglass in Mattresses? <br />
                            <span className="text-3xl md:text-4xl text-graphite font-normal">(And How to Avoid It)</span>
                        </h1>
                        <p className="text-xl text-graphite/80 leading-relaxed">
                            It's a cheap, effective fire retardant. But if it escapes, it can ruin your home and health.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-slate mx-auto text-graphite">
                        <p className="lead text-2xl font-serif text-jet-black mb-8 border-l-4 border-golden-bronze pl-6 italic">
                            Fiberglass isn't "toxic" in the chemical sense, but it is a physical irritant. If you unzip your mattress cover, you could release millions of tiny glass shards into your bedroom.
                        </p>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Flame className="text-golden-bronze" />
                            Why Is It There? The Law (16 CFR Part 1633)
                        </h2>
                        <p>
                            In 2007, the US government mandated that all mattresses must withstand an open flame for 30 minutes without igniting. This was designed to save lives during house fires.
                        </p>
                        <p className="mt-8 mb-2 font-bold text-jet-black">
                            To pass this test, manufacturers have two choices:
                        </p>
                        <ul className="space-y-4 my-8">
                            <li className="flex items-start gap-4 p-4 bg-alabaster-grey/30 rounded-lg">
                                <div className="bg-golden-bronze/20 text-golden-bronze p-2 rounded-full mt-1">
                                    <span className="font-bold text-lg">$</span>
                                </div>
                                <div>
                                    <strong className="text-jet-black block mb-1">The Cheap Way (Fiberglass)</strong>
                                    <span>Manufacturers wrap the inner foam in a "sock" made of glass fibers. When disrupted by fire, the glass melts and forms a hard barrier, cutting off oxygen to the flammable foam. It works, and it's very inexpensive.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-alabaster-grey/30 rounded-lg">
                                <div className="bg-jet-black text-white p-2 rounded-full mt-1">
                                    <span className="font-bold text-lg">$$$</span>
                                </div>
                                <div>
                                    <strong className="text-jet-black block mb-1">The Premium Way (Natural/Safe synthetics)</strong>
                                    <span>Manufacturers use wool (which naturally extinguishes fire), hydrated silica, or special rayon/viscose blends. These are safer but cost significantly more to produce.</span>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <Search className="text-golden-bronze" />
                            How to Spot Fiberglass (The Red Flags)
                        </h2>
                        <p>
                            Brands rarely advertise "Now with Fiberglass!". Instead, they hide it in technical jargon on the law tag or website.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                                <div className="flex items-center gap-3 mb-4 text-red-700 font-bold">
                                    <XCircle size={24} />
                                    <span>DANGER SIGNS (Avoid)</span>
                                </div>
                                <ul className="space-y-3 text-sm">
                                    <li>• Tag says: <strong>"Glass Fiber"</strong>, <strong>"Glass Wool"</strong>, or <strong>"Glass Yarn"</strong>.</li>
                                    <li>• Tag says: <strong>"Made in China"</strong> (very common in cheap imported beds).</li>
                                    <li>• Tag says: <strong>"Do Not Remove Cover"</strong> even if there is a zipper.</li>
                                    <li>• The inner sock looks shiny or shimmery under a flashlight.</li>
                                    <li>• Price is under $400 for a Queen (almost guaranteed fiberglass).</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-alabaster-grey">
                                <div className="flex items-center gap-3 mb-4 text-green-700 font-bold">
                                    <CheckCircle size={24} />
                                    <span>SAFE SIGNS (Look for)</span>
                                </div>
                                <ul className="space-y-3 text-sm">
                                    <li>• Tag says: <strong>"Wool"</strong>, <strong>"Rayon"</strong>, <strong>"Cotton"</strong>, or <strong>"Viscose"</strong>.</li>
                                    <li>• Brand explicitly states "Fiberglass-Free" on their website.</li>
                                    <li>• Certifications: <strong>GOTS</strong> (Global Organic Textile Standard) or <strong>GOLS</strong> (Latex).</li>
                                    <li>• Made in USA (not a guarantee, but better odds).</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                            <AlertTriangle className="text-golden-bronze" />
                            If You Think Your Mattress Has Fiberglass
                        </h2>
                        <div className="bg-golden-bronze/5 border-l-4 border-golden-bronze p-6 rounded-r-lg mb-8">
                            <h4 className="font-bold text-jet-black mt-0 mb-2">DO NOT UNZIP THE COVER</h4>
                            <p className="text-graphite text-sm m-0">
                                This is the #1 mistake. Even if the cover has a zipper, do not open it. The zipper is often there for manufacturing assembly, not for you to wash it. If you unzip a fiberglass mattress, hidden shards will fly out and coat your room, clothes, and lungs.
                            </p>
                        </div>
                        <p>
                            <strong>What to do instead:</strong> use a high-quality, waterproof mattress protector. This encapsulates the mattress and puts an extra barrier between you and the fiberglass sock.
                        </p>

                        <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6">Summary</h2>
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">1.</span>
                                <span><strong>It's About Fire Safety:</strong> Fiberglass is used to pass flammability laws cheaply.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">2.</span>
                                <span><strong>Check the Tag:</strong> Look for "Glass Fiber" or "Glass Wool".</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-golden-bronze font-bold">3.</span>
                                <span><strong>Never Unzip:</strong> If you suspect fiberglass, keep the cover sealed and add a protector.</span>
                            </li>
                        </ul>

                    </div>

                    <div className="mt-16 pt-8 border-t border-alabaster-grey text-center">
                        <p className="text-graphite mb-4">Looking for a safe mattress?</p>
                        <Link to="/mattress-reviews" className="text-jet-black font-bold border-b-2 border-golden-bronze hover:text-golden-bronze transition-colors">
                            See our fiberglass-free top picks
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default FiberglassFree;
