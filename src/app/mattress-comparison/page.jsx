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
        <div className="font-sans text-graphite bg-alabaster-grey/10 min-h-screen pb-20">
            <Header />

            {/* Header Section */}
            <div className="bg-jet-black text-white py-16 px-4 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Mattress Comparison</h1>
                <p className="text-lg text-alabaster-grey max-w-2xl mx-auto">
                    Compare specs side-by-side. No fluff, just data. Select up to 3 mattresses.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-8">
                {/* Selection Control Bar */}
                <div className="bg-white rounded-xl shadow-lg border border-alabaster-grey p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
                        {selectedMattresses.length === 0 && (
                            <span className="text-alabaster-grey italic">No mattresses selected yet.</span>
                        )}
                        {selectedMattresses.map(m => (
                            <div key={m.id} className="flex items-center gap-2 bg-jet-black/5 px-3 py-1.5 rounded-full border border-alabaster-grey">
                                <span className="font-semibold text-sm text-jet-black">{m.name}</span>
                                <button onClick={() => removeMattress(m.id)} className="text-graphite hover:text-red-500">
                                    <X size={14} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-graphite font-medium">
                            {selectedIds.length}/3 Selected
                        </span>
                        <button
                            onClick={() => setIsSelectorOpen(true)}
                            disabled={selectedIds.length >= 3}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition shadow-sm ${selectedIds.length >= 3
                                ? 'bg-alabaster-grey text-graphite cursor-not-allowed'
                                : 'bg-golden-bronze text-white hover:bg-golden-bronze-400 hover:shadow-md'
                                }`}
                        >
                            <Plus size={18} /> Add Mattress
                        </button>
                    </div>
                </div>

                {/* Main Comparison Area */}
                {selectedMattresses.length > 0 ? (
                    <div className="overflow-x-auto pb-4">
                        <div className="bg-white rounded-2xl shadow-xl border border-alabaster-grey min-w-[800px]">
                            {/* Table Header / Product Info */}
                            <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))] divide-x divide-alabaster-grey">
                                <div className="p-6 flex items-end font-bold text-xl text-jet-black bg-alabaster-grey/5">
                                    Feature Specs
                                </div>
                                {selectedMattresses.map(m => (
                                    <div key={m.id} className="p-6 relative text-center">
                                        <button
                                            onClick={() => removeMattress(m.id)}
                                            className="absolute top-4 right-4 text-alabaster-grey hover:text-red-500 transition"
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
                            <div className="divide-y divide-alabaster-grey border-t border-alabaster-grey">
                                {/* Verdict Row */}
                                <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))] divide-x divide-alabaster-grey">
                                    <div className="p-4 flex items-center font-bold text-sm uppercase tracking-wide text-graphite bg-alabaster-grey/5">
                                        <Activity size={16} className="mr-2" /> Our Verdict
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-4 text-sm text-graphite leading-relaxed">
                                            {m.verdict}
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                {/* Firmness */}
                                <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))] divide-x divide-alabaster-grey">
                                    <div className="p-4 flex items-center font-bold text-sm uppercase tracking-wide text-graphite bg-alabaster-grey/5">
                                        Firmness (1-10)
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-4">
                                            <div className="flex justify-between text-xs font-bold mb-1">
                                                <span>Soft</span>
                                                <span>{m.firmness}/10</span>
                                                <span>Firm</span>
                                            </div>
                                            {renderBar(m.firmness, 10, "bg-jet-black")}
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                {/* Cooling */}
                                <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))] divide-x divide-alabaster-grey">
                                    <div className="p-4 flex items-center font-bold text-sm uppercase tracking-wide text-graphite bg-alabaster-grey/5">
                                        <Thermometer size={16} className="mr-2" /> Cooling
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-4">
                                            <div className="flex justify-between text-xs font-bold mb-1">
                                                <span>Runs Hot</span>
                                                <span>{m.coolingRating}/10</span>
                                                <span>Icy Cold</span>
                                            </div>
                                            {renderBar(m.coolingRating, 10, "bg-blue-500")}
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                {/* Motion Transfer */}
                                <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))] divide-x divide-alabaster-grey">
                                    <div className="p-4 flex items-center font-bold text-sm uppercase tracking-wide text-graphite bg-alabaster-grey/5">
                                        <Activity size={16} className="mr-2" /> Motion Isolation
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-4">
                                            <div className="flex justify-between text-xs font-bold mb-1">
                                                <span>Bouncy</span>
                                                <span>{m.motionTransfer}/10</span>
                                                <span>Dead Silent</span>
                                            </div>
                                            {renderBar(m.motionTransfer, 10, "bg-purple-600")}
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                {/* Trial Period */}
                                <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))] divide-x divide-alabaster-grey">
                                    <div className="p-4 flex items-center font-bold text-sm uppercase tracking-wide text-graphite bg-alabaster-grey/5">
                                        <Clock size={16} className="mr-2" /> Trial Period
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-4 font-semibold text-jet-black text-center">
                                            {m.trial} Nights
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                {/* Warranty */}
                                <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))] divide-x divide-alabaster-grey">
                                    <div className="p-4 flex items-center font-bold text-sm uppercase tracking-wide text-graphite bg-alabaster-grey/5">
                                        <ShieldCheck size={16} className="mr-2" /> Warranty
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-4 font-semibold text-jet-black text-center">
                                            {m.warranty}
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                                {/* Key Features */}
                                <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))] divide-x divide-alabaster-grey">
                                    <div className="p-4 flex items-center font-bold text-sm uppercase tracking-wide text-graphite bg-alabaster-grey/5">
                                        <Award size={16} className="mr-2" /> Key Features
                                    </div>
                                    {selectedMattresses.map(m => (
                                        <div key={m.id} className="p-4">
                                            <ul className="space-y-2">
                                                {m.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start text-xs text-graphite">
                                                        <Check size={12} className="text-golden-bronze mr-1 mt-0.5 shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    {Array.from({ length: 3 - selectedMattresses.length }).map((_, i) => <div key={i} className="bg-alabaster-grey/5"></div>)}
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-alabaster-grey border-dashed">
                        <div className="w-20 h-20 bg-golden-bronze/10 rounded-full flex items-center justify-center mx-auto mb-6 text-golden-bronze">
                            <Plus size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-jet-black mb-2">Start Comparing</h2>
                        <p className="text-alabaster-grey mb-8">Select mattresses to see how they stack up.</p>
                        <button
                            onClick={() => setIsSelectorOpen(true)}
                            className="bg-golden-bronze hover:bg-golden-bronze-400 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
                        >
                            Select Mattresses
                        </button>
                    </div>
                )}
            </div>

            {/* Selection Modal */}
            {isSelectorOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-jet-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-alabaster-grey flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-jet-black">Select to Compare</h2>
                            <button onClick={() => setIsSelectorOpen(false)} className="p-2 hover:bg-alabaster-grey/20 rounded-full transition">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {mattresses.map(m => {
                                const isSelected = selectedIds.includes(m.id);
                                return (
                                    <div
                                        key={m.id}
                                        onClick={() => !isSelected && selectedIds.length < 3 ? toggleSelection(m.id) : (isSelected ? toggleSelection(m.id) : null)}
                                        className={`
                                            relative flex flex-col p-4 rounded-xl border-2 transition cursor-pointer
                                            ${isSelected
                                                ? 'border-golden-bronze bg-golden-bronze/5 ring-1 ring-golden-bronze'
                                                : selectedIds.length >= 3
                                                    ? 'border-alabaster-grey opacity-50 cursor-not-allowed'
                                                    : 'border-alabaster-grey hover:border-golden-bronze/50 hover:shadow-md'
                                            }
                                        `}
                                    >
                                        {isSelected && (
                                            <div className="absolute top-3 right-3 bg-golden-bronze text-white rounded-full p-1">
                                                <Check size={14} />
                                            </div>
                                        )}
                                        <div className="h-32 mb-4 flex items-center justify-center">
                                            <img src={m.image} alt={m.name} className="max-h-full object-contain" />
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="font-bold text-jet-black">{m.name}</h3>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="font-semibold text-golden-bronze">${m.price}</span>
                                                <span className="text-xs text-graphite bg-alabaster-grey/20 px-2 py-1 rounded">{m.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="p-6 border-t border-alabaster-grey bg-gray-50 flex justify-end gap-3">
                            <span className="self-center mr-auto text-sm text-graphite">
                                {selectedIds.length}/3 selected
                            </span>
                            <button
                                onClick={() => setIsSelectorOpen(false)}
                                className="px-6 py-2 rounded-lg font-semibold text-graphite hover:bg-gray-200 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setIsSelectorOpen(false)}
                                className="px-6 py-2 rounded-lg font-bold bg-jet-black text-white hover:bg-jet-black-800 transition"
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
