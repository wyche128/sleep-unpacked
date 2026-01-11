'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import { mattresses } from '../../data/mattresses';
import {
    X,
    Plus,
    Check,
    AlertCircle,
    Thermometer,
    Activity,
    Award,
    Truck,
    ShieldCheck,
    Clock
} from 'lucide-react';
import Link from 'next/link';

const MattressComparisonContent = () => {
    const searchParams = useSearchParams();
    // Start with empty selection or predefined ones if needed
    const [selectedIds, setSelectedIds] = useState([]);
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);

    useEffect(() => {
        const idsParam = searchParams.get('ids');
        if (idsParam) {
            const ids = idsParam.split(',').filter(id => mattresses.find(m => m.id === id));
            setSelectedIds(ids.slice(0, 3));
        }
    }, [searchParams]);

    const selectedMattresses = selectedIds.map(id => mattresses.find(m => m.id === id)).filter(Boolean);

    const toggleSelection = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(sid => sid !== id));
        } else {
            if (selectedIds.length < 3) {
                setSelectedIds([...selectedIds, id]);
                // Close selector if we hit 3, or keep open? 
                // Let's keep it open for easy multi-select, but maybe auto-close if full?
                if (selectedIds.length === 2) setIsSelectorOpen(false);
            }
        }
    };

    const removeMattress = (id) => {
        setSelectedIds(selectedIds.filter(sid => sid !== id));
    };

    // Metrics for the charts/bars
    const renderBar = (value, max = 10, colorClass = "bg-golden-bronze") => (
        <div className="w-full bg-alabaster-grey rounded-full h-2.5 mt-2">
            <div
                className={`h-2.5 rounded-full ${colorClass}`}
                style={{ width: `${(value / max) * 100}%` }}
            ></div>
        </div>
    );

    return (
        <div className="font-sans text-graphite bg-alabaster-grey/10 min-h-screen">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <Link href="/" className="text-golden-bronze hover:text-golden-bronze-400 font-semibold flex items-center gap-2 mb-4 transition-colors">
                            ← Back to Hub
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-jet-black">
                            Mattress <span className="text-golden-bronze">Comparison</span>
                        </h1>
                        <p className="text-graphite text-lg mt-2">Side-by-side analysis of the world's best beds.</p>
                    </div>

                    <button
                        onClick={() => setIsSelectorOpen(true)}
                        className="bg-jet-black text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-jet-black-800 transition transform hover:-translate-y-1 flex items-center gap-3"
                    >
                        <Plus size={24} /> Add Mattress
                    </button>
                </div>

                {selectedMattresses.length === 0 ? (
                    <div className="bg-white rounded-3xl border-2 border-dashed border-alabaster-grey p-20 text-center">
                        <AlertCircle size={64} className="text-alabaster-grey mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-jet-black mb-4">No mattresses selected</h2>
                        <p className="text-graphite mb-8 max-w-md mx-auto">
                            Add up to 3 mattresses to start your comparison and find your perfect sleep match.
                        </p>
                        <button
                            onClick={() => setIsSelectorOpen(true)}
                            className="text-golden-bronze font-bold text-lg hover:underline underline-offset-4"
                        >
                            Select Mattresses
                        </button>
                    </div>
                ) : (
                    <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-alabaster-grey scrollbar-track-transparent">
                        <div className="bg-white rounded-3xl shadow-xl border border-alabaster-grey min-w-[900px]">
                            <div className="divide-y divide-alabaster-grey">
                                {/* Table Header / Product Info */}
                                <div className="grid grid-cols-[180px_1fr_1fr_1fr] divide-x divide-alabaster-grey">
                                    <div className="p-6 flex items-end font-bold text-xl text-jet-black bg-alabaster-grey/5 sticky left-0 z-20 shadow-[4px_0_10px_-4px_rgba(0,0,0,0.1)] border-r border-alabaster-grey rounded-tl-3xl">
                                        Feature Specs
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-6 relative text-center">
                                            <button
                                                onClick={() => removeMattress(m.id)}
                                                className="absolute top-4 right-4 text-alabaster-grey hover:text-red-500 transition-colors"
                                                title="Remove"
                                            >
                                                <X size={18} />
                                            </button>
                                            <div className="h-32 flex items-center justify-center mb-4">
                                                <img src={m.image} alt={m.name} className="max-h-full object-contain rounded-lg" />
                                            </div>
                                            <h3 className="text-lg font-bold text-jet-black mb-1">{m.name}</h3>
                                            <p className="text-sm text-graphite mb-3">{m.type}</p>
                                            <div className="text-2xl font-extrabold text-golden-bronze mb-4">${m.price}</div>
                                            <Link
                                                href={m.reviewLink}
                                                className="inline-block w-full py-2 bg-jet-black text-white text-sm font-bold rounded-lg hover:bg-jet-black-800 transition"
                                            >
                                                Read Review
                                            </Link>
                                        </div>
                                    ))}
                                    {/* Fill empty columns if less than 3 selected */}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => (
                                        <div key={i} className="p-6 flex flex-col items-center justify-center text-center bg-alabaster-grey/5">
                                            <div className="w-16 h-16 rounded-full bg-alabaster-grey/20 flex items-center justify-center mb-4">
                                                <Plus size={24} className="text-alabaster-grey" />
                                            </div>
                                            <button
                                                onClick={() => setIsSelectorOpen(true)}
                                                className="text-golden-bronze font-bold hover:underline"
                                            >
                                                Add Mattress
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Comparison Rows */}
                                <div className="grid grid-cols-[180px_1fr_1fr_1fr] divide-x divide-alabaster-grey group/row hover:bg-alabaster-grey/5 transition-colors">
                                    <div className="p-5 flex items-center font-bold text-xs uppercase tracking-widest text-graphite bg-white sticky left-0 z-10 shadow-[4px_0_10px_-4px_rgba(0,0,0,0.1)] border-r border-alabaster-grey">
                                        <Activity size={16} className="mr-2 text-golden-bronze" /> Our Verdict
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-5 text-sm text-graphite leading-relaxed">
                                            {m.verdict}
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                <div className="grid grid-cols-[180px_1fr_1fr_1fr] divide-x divide-alabaster-grey group/row hover:bg-alabaster-grey/5 transition-colors">
                                    <div className="p-5 flex items-center font-bold text-xs uppercase tracking-widest text-graphite bg-white sticky left-0 z-10 shadow-[4px_0_10px_-4px_rgba(0,0,0,0.1)] border-r border-alabaster-grey">
                                        <Award size={16} className="mr-2 text-golden-bronze" /> Firmness (1-10)
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-5">
                                            <div className="flex justify-between text-[10px] font-bold mb-1 uppercase tracking-tight text-alabaster-grey">
                                                <span>Soft</span>
                                                <span className="text-jet-black">{m.firmness}/10</span>
                                                <span>Firm</span>
                                            </div>
                                            {renderBar(m.firmness, 10, "bg-jet-black")}
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                <div className="grid grid-cols-[180px_1fr_1fr_1fr] divide-x divide-alabaster-grey group/row hover:bg-alabaster-grey/5 transition-colors">
                                    <div className="p-5 flex items-center font-bold text-xs uppercase tracking-widest text-graphite bg-white sticky left-0 z-10 shadow-[4px_0_10px_-4px_rgba(0,0,0,0.1)] border-r border-alabaster-grey">
                                        <Thermometer size={16} className="mr-2 text-golden-bronze" /> Cooling
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-5">
                                            <div className="flex justify-between text-[10px] font-bold mb-1 uppercase tracking-tight text-alabaster-grey">
                                                <span>Runs Hot</span>
                                                <span className="text-blue-600">{m.coolingRating}/10</span>
                                                <span>Cool</span>
                                            </div>
                                            {renderBar(m.coolingRating, 10, "bg-blue-500")}
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                <div className="grid grid-cols-[180px_1fr_1fr_1fr] divide-x divide-alabaster-grey group/row hover:bg-alabaster-grey/5 transition-colors">
                                    <div className="p-5 flex items-center font-bold text-xs uppercase tracking-widest text-graphite bg-white sticky left-0 z-10 shadow-[4px_0_10px_-4px_rgba(0,0,0,0.1)] border-r border-alabaster-grey">
                                        <Activity size={16} className="mr-2 text-golden-bronze" /> Motion isolation
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-5">
                                            <div className="flex justify-between text-[10px] font-bold mb-1 uppercase tracking-tight text-alabaster-grey">
                                                <span>Bouncy</span>
                                                <span className="text-purple-600">{m.motionTransfer}/10</span>
                                                <span>Dead</span>
                                            </div>
                                            {renderBar(m.motionTransfer, 10, "bg-purple-600")}
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                <div className="grid grid-cols-[180px_1fr_1fr_1fr] divide-x divide-alabaster-grey group/row hover:bg-alabaster-grey/5 transition-colors">
                                    <div className="p-5 flex items-center font-bold text-xs uppercase tracking-widest text-graphite bg-white sticky left-0 z-10 shadow-[4px_0_10px_-4px_rgba(0,0,0,0.1)] border-r border-alabaster-grey">
                                        <Clock size={16} className="mr-2 text-golden-bronze" /> Trial Period
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-5 text-center font-bold text-jet-black">
                                            {m.trial} Nights
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                <div className="grid grid-cols-[180px_1fr_1fr_1fr] divide-x divide-alabaster-grey group/row hover:bg-alabaster-grey/5 transition-colors">
                                    <div className="p-5 flex items-center font-bold text-xs uppercase tracking-widest text-graphite bg-white sticky left-0 z-10 shadow-[4px_0_10px_-4px_rgba(0,0,0,0.1)] border-r border-alabaster-grey">
                                        <ShieldCheck size={16} className="mr-2 text-golden-bronze" /> Warranty
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-5 text-center font-bold text-jet-black">
                                            {m.warranty}
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                <div className="grid grid-cols-[180px_1fr_1fr_1fr] divide-x divide-alabaster-grey group/row hover:bg-alabaster-grey/5 transition-colors">
                                    <div className="p-5 flex items-center font-bold text-xs uppercase tracking-widest text-graphite bg-white sticky left-0 z-10 shadow-[4px_0_10px_-4px_rgba(0,0,0,0.1)] border-r border-alabaster-grey">
                                        <Check size={16} className="mr-2 text-golden-bronze" /> Key Features
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-5">
                                            <ul className="space-y-2">
                                                {m.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start text-xs text-graphite">
                                                        <Check size={12} className="text-golden-bronze mr-1.5 mt-0.5 shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                {/* CTA Row */}
                                <div className="grid grid-cols-[180px_1fr_1fr_1fr] divide-x divide-alabaster-grey">
                                    <div className="p-5 bg-alabaster-grey/5 sticky left-0 z-10 border-r border-alabaster-grey rounded-bl-3xl"></div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-5 flex justify-center">
                                            <Link
                                                href={m.reviewLink}
                                                className="inline-block w-full py-3 bg-jet-black text-white text-center font-bold rounded-xl hover:bg-jet-black-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                            >
                                                Full Review
                                            </Link>
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Selector Modal */}
            {isSelectorOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-jet-black/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsSelectorOpen(false)}
                    ></div>
                    <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-alabaster-grey flex justify-between items-center bg-alabaster-grey/5">
                            <div>
                                <h2 className="text-2xl font-bold text-jet-black">Choose Mattresses</h2>
                                <p className="text-sm text-graphite">Select up to 3 for comparison ({selectedIds.length}/3)</p>
                            </div>
                            <button
                                onClick={() => setIsSelectorOpen(false)}
                                className="text-graphite hover:text-jet-black p-2 hover:bg-alabaster-grey rounded-full transition"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto flex-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {mattresses.map(m => {
                                    const isSelected = selectedIds.includes(m.id);
                                    const isDisabled = !isSelected && selectedIds.length >= 3;

                                    return (
                                        <button
                                            key={m.id}
                                            disabled={isDisabled}
                                            onClick={() => toggleSelection(m.id)}
                                            className={`p-4 rounded-2xl border-2 text-left transition relative flex items-center gap-4 group ${isSelected
                                                ? 'border-golden-bronze bg-golden-bronze/5 shadow-md'
                                                : isDisabled
                                                    ? 'border-gray-100 opacity-50 cursor-not-allowed'
                                                    : 'border-alabaster-grey hover:border-golden-bronze/50 hover:bg-alabaster-grey/10'
                                                }`}
                                        >
                                            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm border border-alabaster-grey">
                                                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-jet-black truncate">{m.name}</h4>
                                                <p className="text-sm text-graphite font-medium">${m.price}</p>
                                            </div>
                                            {isSelected && (
                                                <div className="bg-golden-bronze text-white p-1 rounded-full shadow-lg">
                                                    <Check size={16} />
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="p-6 border-t border-alabaster-grey bg-alabaster-grey/5 flex justify-end">
                            <button
                                onClick={() => setIsSelectorOpen(false)}
                                className="bg-jet-black text-white font-bold py-3 px-10 rounded-xl hover:bg-jet-black-800 transition shadow-lg"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const MattressComparison = () => {
    return (
        <React.Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-alabaster-grey/10">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-golden-bronze border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-jet-black font-bold">Loading Comparison Tool...</p>
                </div>
            </div>
        }>
            <MattressComparisonContent />
        </React.Suspense>
    );
};

export default MattressComparison;
