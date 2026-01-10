'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import Link from 'next/link';
import { Search, ArrowRight, BookOpen, Microscope, AlertTriangle } from 'lucide-react';

// Search Data Hub
const ALL_CONTENT = [
    // Mattress Reviews
    {
        title: "Purple Original Mattress",
        excerpt: "5-Year Longevity Forecast: We analyzed hundreds of owner reports and 3rd party lab results to determine if the Purple Grid actually holds up.",
        link: "/mattress-reviews/purple-original",
        category: "Mattress Review",
        type: "review",
        tags: ["purple", "grid", "durability", "sagging"]
    },
    {
        title: "Aurora Luxe Mattress",
        excerpt: "Does the cooling actually last? We analyze phase-change material lifespan and foam density degradation over time.",
        link: "/mattress-reviews/brooklyn-bedding-aurora-luxe",
        category: "Mattress Review",
        type: "review",
        tags: ["cooling", "hybrid", "aurora", "brooklyn bedding"]
    },
    {
        title: "WinkBed Hybrid Mattress",
        excerpt: "Deep analysis of coil fatigue, pillow-top compression, and structural integrity over 5 years of daily use.",
        link: "/mattress-reviews/winkbed-original",
        category: "Mattress Review",
        type: "review",
        tags: ["winkbed", "hybrid", "coils", "longevity"]
    },
    {
        title: "Leesa Original Mattress",
        excerpt: "An evidence-based look at how the 3.0 pcf density memory foam holds up over time. Will it soften too fast?",
        link: "/mattress-reviews/leesa-original",
        category: "Mattress Review",
        type: "review",
        tags: ["leesa", "foam", "softening", "memory foam"]
    },
    {
        title: "Nectar Classic Mattress",
        excerpt: "Is it just a budget foam bed? We analyze the density specs to predict when the 'quicksand' feeling sets in.",
        link: "/mattress-reviews/nectar-classic",
        category: "Mattress Review",
        type: "review",
        tags: ["nectar", "value", "foam", "memory foam"]
    },
    {
        title: "GravityLux Mattress",
        excerpt: "Can this proprietary foam really outperform latex? We analyze the stress-test results to predict long-term durability.",
        link: "/mattress-reviews/winkbed-gravitylux",
        category: "Mattress Review",
        type: "review",
        tags: ["gravitylux", "foam", "latex alternative", "durability"]
    },
    {
        title: "Helix Plus Mattress",
        excerpt: "Is it built to last? We break down the 4.0 PCF foam density and TitanCore coils for plus-sized sleepers.",
        link: "/mattress-reviews/helix-plus",
        category: "Mattress Review",
        type: "review",
        tags: ["helix", "plus size", "heavy sleepers", "hybrid"]
    },
    // Sleep Guides
    {
        title: "What is a Mattress 'Break-In Period'?",
        excerpt: "Bought a new mattress and hate it? Don't panic. The 'new bed blues' are real, but they are almost always temporary.",
        link: "/sleep-guides/break-in-period",
        category: "Sleep Guide",
        type: "guide",
        tags: ["break-in", "adjustment", "softening", "uncomfortable"]
    },
    {
        title: "The Science of Snuggling: Sleep with Pets",
        excerpt: "Letting Fido in? It rewires your biochemistry. Simulate the hormone exchange and safety benefits.",
        link: "/sleep-guides/sleep-with-pets",
        category: "Sleep Guide",
        type: "guide",
        tags: ["pets", "dogs", "cats", "bonding", "wellness"]
    },
    {
        title: "5 Surprising Fixes for Snoring",
        excerpt: "From tennis balls to Nightcaps: Explore the physics of silence with our interactive dashboard.",
        link: "/sleep-guides/five-surprising-fixes-snoring",
        category: "Sleep Guide",
        type: "guide",
        tags: ["snoring", "apnea", "health", "fixes"]
    },
    {
        title: "The Sleep-Stress Vicious Cycle",
        excerpt: "You can't sleep because you're anxious. See the data behind the cycle and 6 counter-intuitive fixes.",
        link: "/sleep-guides/sleep-stress",
        category: "Sleep Guide",
        type: "guide",
        tags: ["stress", "anxiety", "insomnia", "wellness"]
    },
    {
        title: "The Architecture of Sleep: Cycles & Dreaming",
        excerpt: "Sleep isn't a power down. Explore the 5 mind-bending truths about what happens when you close your eyes.",
        link: "/sleep-guides/sleep-cycles-dreaming",
        category: "Sleep Guide",
        type: "guide",
        tags: ["rem", "deep sleep", "cycles", "science"]
    },
    {
        title: "How to Choose a Mattress (Data-Driven)",
        excerpt: "Stop guessing. Use our biomechanics engine to find the exact firmness and material for your body type.",
        link: "/sleep-guides/how-to-choose-a-mattress",
        category: "Sleep Guide",
        type: "guide",
        tags: ["buying guide", "firmness", "materials", "selection"]
    },
    {
        title: "The Goldilocks Algorithm: Mattress Firmness Guide",
        excerpt: "Mattress firmness isn't just a preference—it's physics. Decode the confusion between 'Plush' and 'Concrete'.",
        link: "/sleep-guides/mattress-firmness-guide",
        category: "Sleep Guide",
        type: "guide",
        tags: ["firmness", "support", "feel", "buying guide"]
    }
];

const SearchResultsContent = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const filtered = ALL_CONTENT.filter(item => {
            const searchStr = `${item.title} ${item.excerpt} ${item.tags.join(' ')}`.toLowerCase();
            return searchStr.includes(query.toLowerCase());
        });
        setResults(filtered);
    }, [query]);

    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            <div className="bg-jet-black py-12 px-4 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 text-golden-bronze mb-2">
                        <Search size={20} />
                        <span className="text-xs font-bold uppercase tracking-wider">Search Results</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2 font-serif">
                        {query ? `Results for "${query}"` : "Search SleepUnpacked"}
                    </h1>
                    <p className="text-alabaster-grey/70">
                        {results.length} {results.length === 1 ? 'result' : 'results'} found
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 py-12">
                {results.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {results.map((result, idx) => (
                            <Link
                                href={result.link}
                                key={idx}
                                className="group block bg-white border border-alabaster-grey rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded inline-flex items-center gap-1 ${result.type === 'review' ? 'bg-golden-bronze/10 text-golden-bronze' : 'bg-blue-500/10 text-blue-600'
                                            }`}>
                                            {result.type === 'review' ? <Microscope size={12} /> : <BookOpen size={12} />}
                                            {result.category}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-jet-black mb-3 group-hover:text-golden-bronze transition-colors font-serif">
                                        {result.title}
                                    </h2>
                                    <p className="text-sm text-graphite mb-6 line-clamp-3">
                                        {result.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center text-jet-black font-bold text-xs group-hover:translate-x-2 transition-transform">
                                        {result.type === 'review' ? 'View Research' : 'Read Guide'} <ArrowRight size={14} className="ml-1 text-golden-bronze" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-alabaster-grey/10 rounded-3xl border border-dashed border-alabaster-grey">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-4">
                            <Search size={32} className="text-alabaster-grey" />
                        </div>
                        <h2 className="text-2xl font-bold text-jet-black mb-2">No results found</h2>
                        <p className="text-graphite max-w-sm mx-auto mb-8">
                            We couldn't find anything matching "{query}". Try searching for specific brands like "Purple" or topics like "Durability".
                        </p>
                        <Link href="/" className="inline-flex items-center gap-2 bg-jet-black hover:bg-jet-black-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                            Return Home
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
};

const SearchResultsPage = () => {
    return (
        <Suspense fallback={<div>Loading Search Results...</div>}>
            <SearchResultsContent />
        </Suspense>
    );
};

export default SearchResultsPage;
