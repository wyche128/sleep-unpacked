'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import { BookOpen, ArrowRight } from 'lucide-react';
import sleepingNakedHero from '../../assets/sleeping_naked_hero.png';
import snoringHero from '../../assets/snoring_hero.png';
import sleepImportanceHero from '../../assets/sleep_importance_hero.png';
import sleepWithPetsHero from '../../assets/sleep_with_pets_hero.png';
import snoringFixesHero from '../../assets/snoring_fixes_hero.png';
import sleepStressHero from '../../assets/sleep_stress_hero.png';
import stateOfSleepHero from '../../assets/state_of_sleep_hero.png';
import insomniaHero from '../../assets/insomnia_hero.png';
import sleepCyclesHero from '../../assets/sleep_cycles_hero.png';
import chooseMattressHero from '../../assets/choose_mattress_hero.png';
import mattressFirmnessHero from '../../assets/mattress_firmness_hero.png';
import bedSizesHero from '../../assets/bed_sizes_hero.png';
import cleanMattressHero from '../../assets/clean_mattress_hero.png';
import breakInPeriodHero from '../../assets/break_in_period_hero.png';

const SleepGuides = () => {
    const [guides] = useState([
        {
            id: 14,
            title: "What is a Mattress 'Break-In Period'?",
            category: "Mattress 101",
            readTime: "Interactive",
            excerpt: "Bought a new mattress and hate it? Don't panic. The 'new bed blues' are real, but they are almost always temporary.",
            link: "/sleep-guides/break-in-period",
            image: breakInPeriodHero
        },
        {
            id: 13,
            title: "The Science of Snuggling: Sleep with Pets",
            category: "Wellness",
            readTime: "Interactive",
            excerpt: "Letting Fido in? It rewires your biochemistry. Simulate the hormone exchange and safety benefits.",
            link: "/sleep-guides/sleep-with-pets",
            image: sleepWithPetsHero
        },
        {
            id: 11,
            title: "5 Surprising Fixes for Snoring",
            category: "Action Plan",
            readTime: "Interactive",
            excerpt: "From tennis balls to Nightcaps: Explore the physics of silence with our interactive dashboard.",
            link: "/sleep-guides/five-surprising-fixes-snoring",
            image: snoringFixesHero
        },
        {
            id: 12,
            title: "The Sleep-Stress Vicious Cycle",
            category: "Wellness",
            readTime: "Interactive",
            excerpt: "You can't sleep because you're anxious. See the data behind the cycle and 6 counter-intuitive fixes.",
            link: "/sleep-guides/sleep-stress",
            image: sleepStressHero
        },
        {
            id: 9,
            title: "State of Sleep 2025: Statistics & Trends",
            category: "Research",
            readTime: "Interactive",
            excerpt: "An interactive dashboard exploring 110+ sleep statistics, from the teen sleep crisis to the cost of sleep disorders.",
            link: "/sleep-guides/state-of-sleep",
            image: stateOfSleepHero
        },
        {
            id: 10,
            title: "The Sleep Switch: 6 Physiological Hacks for Insomnia",
            category: "Wellness",
            readTime: "Interactive",
            excerpt: "Can't sleep? Stop trying. Use these paradoxical tools to override your body's fight-or-flight response.",
            link: "/sleep-guides/insomnia-falling-asleep",
            image: insomniaHero
        },
        {
            id: 8,
            title: "The Architecture of Sleep: Cycles & Dreaming",
            category: "Sleep Science",
            readTime: "Interactive",
            excerpt: "Sleep isn't a power down. Explore the 5 mind-bending truths about what happens when you close your eyes.",
            link: "/sleep-guides/sleep-cycles-dreaming",
            image: sleepCyclesHero
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
            image: chooseMattressHero
        },
        {
            id: 5,
            title: "The Goldilocks Algorithm: Mattress Firmness Guide",
            category: "Buying Guide",
            readTime: "Interactive",
            excerpt: "Mattress firmness isn't just a preference—it's physics. Decode the confusion between 'Plush' and 'Concrete'.",
            link: "/sleep-guides/mattress-firmness-guide",
            image: mattressFirmnessHero
        },
        {
            id: 6,
            title: "7 Bed Size Secrets That Will Save Your Sleep",
            category: "Buying Guide",
            readTime: "Interactive",
            excerpt: "The 'Double Bed' trap, the myth of the California King, and why you might need a room calculator.",
            link: "/sleep-guides/seven-bed-size-secrets",
            image: bedSizesHero
        },
        {
            id: 7,
            title: "How to Clean a Mattress (The Science)",
            category: "Maintenance",
            readTime: "Interactive",
            excerpt: "Your mattress is a biological sponge. Stop using hot water on blood and learn the chemical protocols for every stain.",
            link: "/sleep-guides/how-to-clean-mattress",
            image: cleanMattressHero
        },
        {
            id: 15,
            title: "Why Your Bedroom Color Matters",
            category: "Sleep Science",
            readTime: "5 min read",
            excerpt: "Blue is best, but red light therapy wins at night. See how your wall color is rewriting your biology.",
            link: "/sleep-guides/colors-that-help-sleep",
            image: sleepCyclesHero // Placeholder reusing an existing image until a specific one is generated
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
