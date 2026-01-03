'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import { BookOpen, ArrowRight } from 'lucide-react';
import sleepingNakedHero from '../../assets/sleeping_naked_hero.png';
import snoringHero from '../../assets/snoring_hero.png';
import sleepImportanceHero from '../../assets/sleep_importance_hero.png';

const SleepGuides = () => {
    const [guides] = useState([
        {
            id: 8,
            title: "The Architecture of Sleep: Cycles & Dreaming",
            category: "Sleep Science",
            readTime: "Interactive",
            excerpt: "Sleep isn't a power down. Explore the 5 mind-bending truths about what happens when you close your eyes.",
            link: "/sleep-guides/sleep-cycles-dreaming",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 1,
            title: "The Cool Comfort of Sleeping Naked",
            category: "Sleep Science",
            readTime: "5 min read",
            excerpt: "Ditch the pajamas. Science says sleeping in your birthday suit boosts health, happiness, and intimacy.",
            link: "/sleep-guides/sleeping-naked",
            image: sleepingNakedHero
        },
        {
            id: 2,
            title: "What Causes Snoring?",
            category: "Health",
            readTime: "8 min read",
            excerpt: "Snoring is often a mechanical problem. Here’s how to troubleshoot your airway and get some peace.",
            link: "/sleep-guides/what-causes-snoring",
            image: snoringHero
        },
        {
            id: 3,
            title: "Why Sleep Matters",
            category: "Wellness",
            readTime: "6 min read",
            excerpt: "It's not just about energy. Sleep cleans your brain, rebuilds your body, and keeps you sane.",
            link: "/sleep-guides/why-sleep-matters",
            image: sleepImportanceHero
        },
        {
            id: 4,
            title: "How to Choose a Mattress (Data-Driven)",
            category: "Buying Guide",
            readTime: "Interactive",
            excerpt: "Stop guessing. Use our biomechanics engine to find the exact firmness and material for your body type.",
            link: "/sleep-guides/how-to-choose-a-mattress",
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "The Goldilocks Algorithm: Mattress Firmness Guide",
            category: "Buying Guide",
            readTime: "Interactive",
            excerpt: "Mattress firmness isn't just a preference—it's physics. Decode the confusion between 'Plush' and 'Concrete'.",
            link: "/sleep-guides/mattress-firmness-guide",
            image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "7 Bed Size Secrets That Will Save Your Sleep",
            category: "Buying Guide",
            readTime: "Interactive",
            excerpt: "The 'Double Bed' trap, the myth of the California King, and why you might need a room calculator.",
            link: "/sleep-guides/seven-bed-size-secrets",
            image: "https://images.unsplash.com/photo-1505693416388-b0346efee535?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 7,
            title: "How to Clean a Mattress (The Science)",
            category: "Maintenance",
            readTime: "Interactive",
            excerpt: "Your mattress is a biological sponge. Stop using hot water on blood and learn the chemical protocols for every stain.",
            link: "/sleep-guides/how-to-clean-mattress",
            image: "https://images.unsplash.com/photo-1582735689369-c6e3b2c155d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ]);

    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            <div className="bg-jet-black py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4">Sleep Guides & Resources</h1>
                <p className="text-xl text-alabaster-grey max-w-2xl mx-auto">
                    Expert-backed advice to help you sleep better, tonight.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {guides.map((guide) => (
                        <Link href={guide.link} key={guide.id} className="group bg-white rounded-2xl shadow-sm border border-alabaster-grey overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={typeof guide.image === 'string' ? guide.image : guide.image.src}
                                    alt={guide.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-bold text-jet-black px-3 py-1 rounded-full shadow-sm">
                                        {guide.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-golden-bronze font-medium mb-3">
                                    <BookOpen size={14} />
                                    <span>{guide.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-jet-black mb-3 group-hover:text-golden-bronze transition-colors">
                                    {guide.title}
                                </h3>
                                <p className="text-graphite text-sm line-clamp-2 mb-4">
                                    {guide.excerpt}
                                </p>
                                <div className="flex items-center text-jet-black font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowRight size={16} className="ml-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* FAQ CTA */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
                <div className="bg-alabaster-grey/30 rounded-2xl p-8 md:p-12 border border-alabaster-grey">
                    <h2 className="text-2xl font-bold text-jet-black mb-4">Have specific questions about durability?</h2>
                    <p className="text-graphite mb-8">
                        Check out our Frequently Asked Questions for deep dives on warranties, materials, and returns.
                    </p>
                    <Link href="/frequently-asked-questions" className="inline-flex items-center gap-2 bg-jet-black hover:bg-jet-black-800 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                        Visit FAQ Hub <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default SleepGuides;
