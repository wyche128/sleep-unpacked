import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import Header from './Header';
import { TOP_PICKS_BY_SLUG, TOP_PICKS_CATEGORIES } from '../app/top-picks/topPicksData';
import JsonLd from './JsonLd';
import { generateArticleSchema, SITE_URL } from '../utils/schema';

export default function TopPicksCategoryPage({ slug }) {
    const category = TOP_PICKS_BY_SLUG[slug];
    const currentYear = new Date().getFullYear();

    if (!category) {
        return (
            <div className="font-sans text-graphite bg-white min-h-screen">
                <Header />
                <main className="max-w-3xl mx-auto px-4 py-16">
                    <h1 className="text-3xl font-bold text-jet-black mb-3">Category not found</h1>
                    <p className="text-graphite mb-8">This Top Picks category doesn’t exist (or was renamed).</p>
                    <Link href="/top-picks" className="inline-flex items-center gap-2 bg-jet-black hover:bg-jet-black-800 text-white font-bold py-3 px-6 rounded-full transition-colors">
                        Back to Top Picks <ArrowRight size={18} />
                    </Link>
                </main>
            </div>
        );
    }

    const siblingCategories = TOP_PICKS_CATEGORIES.filter((item) => item.slug !== slug).slice(0, 6);

    const schemaData = generateArticleSchema({
        title: category.title,
        description: `Our top pick for ${category.category}. ${category.highlight}`,
        url: `${SITE_URL}/top-picks/${slug}`,
        publishedAt: `${currentYear}-01-01`, // Approximated
        modifiedAt: new Date().toISOString().split('T')[0],
        image: category.imageParams.includes('url') ? category.imageParams // Need to parse if it's not a direct URL, assuming generated or placeholder for now.
            : `${SITE_URL}/images/top-picks/${slug}.jpg` // Fallback/Placeholder
    });

    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <JsonLd data={schemaData} />
            <Header />

            {/* Hero */}
            <div className="bg-jet-black py-16 px-4 text-center border-b border-white/10">
                <div className="max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-golden-bronze animate-pulse"></span>
                        <span className="text-alabaster-grey text-xs font-bold uppercase tracking-wider">Top Picks</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-serif">
                        {category.category} <span className="text-alabaster-grey/70 font-sans text-base md:text-lg font-semibold">({currentYear})</span>
                    </h1>
                    <p className="text-alabaster-grey text-lg max-w-3xl mx-auto leading-relaxed">
                        Our durability-first recommendation—plus the closest alternatives if you want a different feel.
                    </p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-alabaster-grey/20 border-b border-alabaster-grey">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
                    <Link href="/top-picks" className="text-golden-bronze font-bold hover:underline">
                        Top Picks
                    </Link>
                    <ChevronRight size={16} className="text-alabaster-grey" />
                    <span className="text-graphite font-semibold">{category.category}</span>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
                {/* Winner */}
                <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-alabaster-grey">
                    <div className="grid lg:grid-cols-5">
                        <div className={`relative lg:col-span-2 bg-gradient-to-br ${category.imageParams} p-10 flex items-center justify-center`}>
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="relative z-10 text-center">
                                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-4">
                                    {category.tag}
                                </div>
                                <h2 className="text-white text-3xl font-black font-serif drop-shadow-md">
                                    {category.title}
                                </h2>
                            </div>
                        </div>

                        <div className="lg:col-span-3 p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-jet-black/5 rounded-lg">{category.icon}</div>
                                <div className="text-xs uppercase text-graphite font-bold tracking-wider">Winner</div>
                            </div>

                            <p className="text-graphite mb-6 leading-relaxed">
                                {category.highlight}
                            </p>

                            <div className="bg-alabaster-grey/30 rounded-lg p-4 mb-6 border border-alabaster-grey">
                                <div className="text-xs uppercase text-graphite/70 font-bold mb-1">Key Stat</div>
                                <div className="text-jet-black font-bold text-lg">{category.keyStat}</div>
                            </div>

                            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                                {category.pros.map((pro) => (
                                    <li key={pro} className="flex items-start gap-2 text-sm text-graphite">
                                        <Check className="text-golden-bronze mt-0.5" size={16} />
                                        <span>{pro}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href={category.reviewHref}
                                    className="inline-flex items-center justify-center gap-2 bg-jet-black hover:bg-jet-black-800 text-white font-bold py-3 px-6 rounded-xl transition-colors"
                                >
                                    Read Living Review <ArrowRight size={18} />
                                </Link>
                                <Link
                                    href="/mattress-reviews"
                                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-alabaster-grey/30 text-jet-black font-bold py-3 px-6 rounded-xl transition-colors border border-alabaster-grey"
                                >
                                    Browse All Reviews <ArrowRight size={18} className="text-golden-bronze" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Alternatives */}
                <section className="space-y-4">
                    <div className="flex items-end justify-between gap-6 flex-wrap">
                        <div>
                            <h3 className="text-2xl font-bold text-jet-black">Also consider</h3>
                            <p className="text-graphite mt-1">Strong contenders if you want a different feel or feature set.</p>
                        </div>
                        <Link href="/top-picks" className="text-golden-bronze font-bold hover:underline">
                            View all Top Picks
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.alsoConsider.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group bg-white rounded-2xl shadow-sm border border-alabaster-grey p-6 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <div className="text-xs uppercase text-graphite/70 font-bold tracking-wider mb-2">Alternative</div>
                                        <div className="text-lg font-bold text-jet-black group-hover:text-golden-bronze transition-colors">
                                            {item.title}
                                        </div>
                                    </div>
                                    <ArrowRight size={18} className="text-golden-bronze group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* More categories */}
                <section className="bg-alabaster-grey/20 border border-alabaster-grey rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-jet-black mb-4">More Top Picks categories</h3>
                    <div className="flex flex-wrap gap-3">
                        {siblingCategories.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/top-picks/${item.slug}`}
                                className="inline-flex items-center bg-white hover:bg-alabaster-grey/30 text-jet-black font-semibold px-4 py-2 rounded-full border border-alabaster-grey transition-colors"
                            >
                                {item.category}
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

