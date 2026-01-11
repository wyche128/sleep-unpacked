'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import { Search, ChevronRight, ShieldCheck, HelpCircle, Truck, Layers, Ruler, FileText, Sparkles } from 'lucide-react';
import Link from 'next/link';

const FAQHub = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        {
            id: 'warranties',
            title: 'Warranties & Returns',
            icon: <ShieldCheck size={32} className="text-golden-bronze" />,
            description: 'Understanding the fine print, return policies, and what "lifetime" really means.',
            articles: [
                {
                    title: 'The 1.5-Inch Indentation Threshold',
                    link: '/faqs/one-point-five-inch-threshold',
                    isNew: true
                },
                {
                    title: 'How Long Can a Mattress Stay in the Box?',
                    link: '/faqs/how-long-mattress-in-box',
                    isNew: true
                },
                {
                    title: 'How Long Is the Sleep Trial?',
                    link: '/faqs/how-long-free-trial',
                    isNew: true
                },
                {
                    title: 'What is a Mattress "Break-In Period"?',
                    link: '/sleep-guides/break-in-period',
                    isNew: true
                },
                { title: 'How to File a Successful Warranty Claim', link: '#' },
                { title: 'Do "Lifetime" Warranties Actually Last Forever?', link: '#' },
            ]
        },
        {
            id: 'materials',
            title: 'Materials & Construction',
            icon: <Layers size={32} className="text-golden-bronze" />,
            description: 'Deep dives into foams, coils, latex, and fiberglass.',
            articles: [
                {
                    title: 'How Is Memory Foam Different? (The Science)',
                    link: '/faqs/memory-foam-different',
                    isNew: true
                },
                {
                    title: 'Are Memory Foam Mattresses Toxic?',
                    link: '/faqs/memory-foam-toxic',
                    isNew: true
                },
                {
                    title: 'Memory Foam vs. Latex: Which Lasts Longer?',
                    link: '/faqs/memory-foam-vs-latex',
                    isNew: true
                },
                {
                    title: 'Why Fiberglass is Used in Mattresses',
                    link: '/faqs/fiberglass-free',
                    isNew: true
                },
                { title: 'Understanding Coil Gauge and Count', link: '#' },
            ]
        },
        {
            id: 'basics',
            title: 'Mattress Basics',
            icon: <HelpCircle size={32} className="text-golden-bronze" />,
            description: 'Simple guides for finding the right fit for your sleep style.',
            articles: [
                {
                    title: 'Do I Need a Box Spring?',
                    link: '/faqs/do-i-need-a-box-spring',
                    isNew: true
                },
                {
                    title: 'Firmness Scale Explained (1-10)',
                    link: '/sleep-guides/mattress-firmness-guide',
                    isNew: true
                },
                {
                    title: 'Best Mattresses for Side Sleepers',
                    link: '/top-picks/best-mattress-for-side-sleepers',
                    isNew: true
                },
                {
                    title: 'What is the Healthiest Sleep Position?',
                    link: '/sleep-guides/healthiest-sleep-position',
                    isNew: true
                },
                {
                    title: 'Duvet vs. Comforter: What\'s the Difference?',
                    link: '/sleep-guides/duvet-vs-comforter',
                    isNew: true
                },
                {
                    title: 'Standard Mattress Sizes Guide',
                    link: '/sleep-guides/seven-bed-size-secrets',
                    isNew: true
                },
            ]
        },
        {
            id: 'care',
            title: 'Care & Maintenance',
            icon: <Sparkles size={32} className="text-golden-bronze" />,
            description: 'How to make your investment last for the full decade.',
            articles: [
                {
                    title: 'How Long Will Your Mattress Actually Last?',
                    link: '/sleep-guides/mattress-lifespan-guide',
                    isNew: true
                },
                {
                    title: 'Why Your New Mattress Feels Like Concrete (Break-In Guide)',
                    link: '/faqs/how-to-break-in-mattress',
                    isNew: true
                },
                {
                    title: 'The Afterlife of a Mattress: Disposal Guide',
                    link: '/faqs/mattress-disposal-guide',
                    isNew: true
                },
                {
                    title: 'Can I Flip My Mattress?',
                    link: '/faqs/can-i-flip-my-mattress',
                    isNew: true
                },
                {
                    title: 'Do You Really Need to Rotate Your Mattress?',
                    link: '/faqs/do-you-need-to-rotate-mattress',
                    isNew: true
                },
                {
                    title: 'How to Clean a Memory Foam Mattress',
                    link: '/sleep-guides/how-to-clean-mattress',
                    isNew: true
                },
                { title: 'Waterproof Protectors: Are They Worth It?', link: '#' },
            ]
        }
    ];

    // Search Filtering
    const filteredCategories = categories.map(category => {
        // If the category matches, show all its articles
        const categoryMatches = category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            category.description.toLowerCase().includes(searchTerm.toLowerCase());

        if (categoryMatches) return category;

        // Otherwise filter specific articles
        const matchingArticles = category.articles.filter(article =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return matchingArticles.length > 0 ? { ...category, articles: matchingArticles } : null;
    }).filter(Boolean);

    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="bg-jet-black py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                        Frequently Asked <span className="text-golden-bronze">Questions</span>
                    </h1>
                    <p className="text-xl text-alabaster-grey max-w-2xl mx-auto mb-10">
                        Honest answers to the confusing questions mattress brands would rather you didn't ask.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-11 pr-4 py-4 rounded-xl border-none text-jet-black bg-white shadow-xl focus:ring-2 focus:ring-golden-bronze focus:outline-none text-lg placeholder-gray-400"
                            placeholder="Search for a topic (e.g. 'sagging', 'returns')..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Main Categories Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category) => (
                            <div key={category.id} className="bg-white rounded-2xl shadow-lg border border-alabaster-grey overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                <div className="p-8">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="bg-golden-bronze-100 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                            {category.icon}
                                        </div>
                                        <Truck className="text-alabaster-grey opacity-20 group-hover:opacity-40 transition-opacity" size={48} />
                                    </div>

                                    <h2 className="text-2xl font-bold text-jet-black mb-3">{category.title}</h2>
                                    <p className="text-graphite mb-8 h-12">{category.description}</p>

                                    <div className="space-y-3">
                                        {category.articles.map((article, idx) => (
                                            <Link
                                                key={idx}
                                                href={article.link}
                                                className={`block p-3 rounded-lg transition-colors flex items-center justify-between group/link ${article.link !== '#' ? 'hover:bg-alabaster-grey/30 bg-alabaster-grey/10' : 'opacity-60 cursor-not-allowed'}`}
                                            >
                                                <span className={`font-semibold text-sm ${article.link !== '#' ? 'text-jet-black' : 'text-gray-400'}`}>
                                                    {article.title}
                                                </span>
                                                {article.isNew && (
                                                    <span className="bg-golden-bronze text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ml-2">New</span>
                                                )}
                                                {article.link !== '#' && <ChevronRight size={16} className="text-golden-bronze opacity-0 group-hover/link:opacity-100 transition-opacity" />}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-12">
                            <p className="text-xl text-gray-400">No questions found matching "{searchTerm}"</p>
                            <button onClick={() => setSearchTerm('')} className="mt-4 text-golden-bronze font-bold hover:underline">Clear Search</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Contact / Help Block */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h3 className="text-2xl font-bold text-jet-black mb-4">Can't find what you're looking for?</h3>
                <p className="text-graphite mb-8">
                    Our team of sleep experts is here to help. Send us your specific questions about mattress durability or warranties.
                </p>
                <Link href="/about#contact" className="inline-block bg-jet-black hover:bg-jet-black-800 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                    Contact Support
                </Link>
            </div>

        </div>
    );
};

export default FAQHub;
