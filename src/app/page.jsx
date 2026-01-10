import React from 'react';
import {
    Star,
    Check,
    ChevronRight,
    Moon,
    ShieldCheck,
    Award,
    Clock,
    ArrowRight,
    Search,
    Filter
} from 'lucide-react';
import Header from '../components/Header';
import Link from 'next/link';

const Home = () => {
    const reviews = [
        {
            id: 1,
            name: "Purple Original",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800", // Using a nice generic bedroom or purple-ish image
            rating: 9.2,
            tags: ["Back Pain", "Cooling"],
            price: "$1,199",
            verdict: "The GelFlex Grid is unique. Ideal for back sleepers who need pressure relief without heat retention.",
            pros: ["GelFlex Grid Support", "Doesn't trap heat", "Durable construction"],
            link: "/mattress-reviews/purple-original"
        },
        {
            id: 2,
            name: "WinkBed Hybrid",
            image: "https://images.unsplash.com/photo-1505693416388-b034631ac0f3?auto=format&fit=crop&q=80&w=800",
            rating: 9.8,
            tags: ["Back Pain", "Luxury Hotel"],
            price: "$1,499",
            verdict: "A tank of a mattress. Exceptional back support with a plush pillow-top feel.",
            pros: ["Lifetime Warranty", "High-density foam", "Zoned coil support"],
            link: "/mattress-reviews/winkbed-original"
        },
        {
            id: 3,
            name: "Nectar Classic",
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
            rating: 8.9,
            tags: ["Best Value", "Memory Foam"],
            price: "$699",
            verdict: "The standard for affordable memory foam. Classic 'hug' feel at a great price.",
            pros: ["365-night trial", "Forever Warranty", "Zero motion transfer"],
            link: "/mattress-reviews/nectar-classic"
        }
    ];

    const featuredGuides = [
        {
            id: 1,
            title: "5 Surprising Fixes for Snoring",
            category: "Action Plan",
            image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            link: "/sleep-guides/five-surprising-fixes-snoring",
            excerpt: "From tennis balls to Nightcaps: Explore the physics of silence with our interactive dashboard."
        },
        {
            id: 2,
            title: "The Sleep-Stress Vicious Cycle",
            category: "Wellness",
            image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            link: "/sleep-guides/sleep-stress",
            excerpt: "You can't sleep because you're anxious. See the data behind the cycle and 6 counter-intuitive fixes."
        },
        {
            id: 3,
            title: "7 Bed Size Secrets",
            category: "Buying Guide",
            image: "https://images.unsplash.com/photo-1505693416388-b0346efee535?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            link: "/sleep-guides/seven-bed-size-secrets",
            excerpt: "The 'Double Bed' trap, the myth of the California King, and why you might need a room calculator."
        }
    ];

    const categories = [
        { title: "Side Sleepers", icon: <Moon size={24} className="text-golden-bronze" /> },
        { title: "Back Pain", icon: <ShieldCheck size={24} className="text-golden-bronze" /> },
        { title: "Hot Sleepers", icon: <Filter size={24} className="text-golden-bronze" /> },
        { title: "Couples", icon: <Award size={24} className="text-golden-bronze" /> },
    ];

    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="relative bg-jet-black overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 bg-jet-black-800/50 backdrop-blur-sm border border-jet-black-800 rounded-full px-4 py-1.5 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-golden-bronze animate-pulse"></span>
                        <span className="text-alabaster-grey text-sm font-medium">Living Reviews™</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                        The Mattress <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-bronze to-white">Durability Report Card.</span>
                    </h1>
                    <p className="text-xl text-alabaster-grey max-w-2xl mb-10 leading-relaxed">
                        We track how products actually hold up after 1, 3, and 5 years — so you know what still works, still feels good, and still looks new before you buy. Avoid the lemons. Buy once for the decade.
                    </p>

                    <div className="flex flex-col sm:flex-row w-full max-w-lg gap-4">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-golden-bronze" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-4 border-none rounded-lg leading-5 bg-white placeholder-graphite focus:outline-none focus:ring-2 focus:ring-golden-bronze shadow-xl"
                                placeholder="Search for a mattress (e.g. 'Helix Midnight')"
                            />
                        </div>
                        <button className="bg-golden-bronze hover:bg-golden-bronze-400 text-white font-bold py-4 px-8 rounded-lg transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                            Start Quiz <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="mt-12 flex gap-8 text-alabaster-grey/60">
                        <div className="flex items-center gap-2"><ShieldCheck size={16} /> Living Reviews</div>
                        <div className="flex items-center gap-2"><Clock size={16} /> Annual Re-Testing</div>
                        <div className="flex items-center gap-2"><Award size={16} /> Long-Term Analysis</div>
                    </div>
                </div>
            </div>

            {/* Category Quick Links */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((cat, idx) => (
                        <a key={idx} href="#" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col items-center justify-center text-center group border border-alabaster-grey">
                            <div className="bg-golden-bronze-100 p-3 rounded-full mb-3 group-hover:bg-golden-bronze-100 transition">
                                {cat.icon}
                            </div>
                            <span className="font-semibold text-graphite group-hover:text-jet-black">{cat.title}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Featured Reviews */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-jet-black mb-4">Top Rated Mattresses of 2025</h2>
                        <p className="text-graphite text-lg max-w-2xl">
                            Our experts have slept on, jumped on, and analyzed the market's leading beds. Here are the winners.
                        </p>
                    </div>
                    <Link href="/mattress-reviews" className="text-golden-bronze font-semibold hover:text-golden-bronze-400 flex items-center gap-1 group">
                        View all Reviews <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <Link href={review.link} key={review.id} className="bg-white rounded-2xl shadow-sm border border-alabaster-grey overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {review.tags.map((tag, i) => (
                                        <span key={i} className="bg-white/90 backdrop-blur-sm text-xs font-bold text-jet-black px-3 py-1 rounded-full shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute top-4 right-4 bg-jet-black text-white w-12 h-12 flex flex-col items-center justify-center rounded-lg shadow-lg">
                                    <span className="font-bold text-lg leading-none">{review.rating}</span>
                                    <span className="text-[10px] opacity-80">/10</span>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-jet-black mb-2 group-hover:text-golden-bronze transition-colors">{review.name}</h3>
                                <p className="text-graphite text-sm mb-4 line-clamp-2">{review.verdict}</p>

                                <div className="space-y-2 mb-6 flex-1">
                                    {review.pros.map((pro, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <div className="mt-1 bg-golden-bronze-100 p-0.5 rounded-full">
                                                <Check size={12} className="text-golden-bronze" />
                                            </div>
                                            <span className="text-sm text-graphite">{pro}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto border-t border-alabaster-grey pt-4 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-golden-bronze font-medium uppercase tracking-wide">Starting at</span>
                                        <span className="text-lg font-bold text-jet-black">{review.price}</span>
                                    </div>
                                    <button className="bg-jet-black hover:bg-jet-black-800 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
                                        Read Review
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Sleep Guides */}
            <section className="py-20 bg-alabaster-grey/30 border-t border-alabaster-grey">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-jet-black mb-4">Master Your Sleep</h2>
                            <p className="text-graphite text-lg max-w-2xl">
                                Science-backed guides to help you understand your sleep cycles, stop snoring, and wake up refreshed.
                            </p>
                        </div>
                        <Link href="/sleep-guides" className="text-golden-bronze font-semibold hover:text-golden-bronze-400 flex items-center gap-1 group">
                            Explore all Guides <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredGuides.map((guide) => (
                            <Link href={guide.link} key={guide.id} className="group bg-white rounded-2xl shadow-sm border border-alabaster-grey overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={guide.image}
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
            </section>

            {/* Trust/Process Section */}
            <section className="bg-white py-20 border-t border-alabaster-grey">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-jet-black mb-4">How We Test Mattresses</h2>
                        <p className="text-graphite">
                            Reviewing a brand new mattress is easy. We re-test top models annually and track verified owner data to measure sagging, softening, and cooling degradation over time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "3rd Party Spec Analysis",
                                desc: "We analyze engineering reports and 3rd party lab data to predict sagging and foam softening over time.",
                                icon: "🎯"
                            },
                            {
                                title: "Performance Over Time",
                                desc: "Does that cooling cover last? Does the edge support hold up? We re-test annually to hold brands accountable.",
                                icon: "📊"
                            },
                            {
                                title: "Verified Owner Data",
                                desc: "We aggregate real user experiences over 1, 3, and 5 years to cross-reference technical specs with real-world durability outcomes.",
                                icon: "🌡️"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-golden-bronze-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-jet-black mb-3">{feature.title}</h3>
                                <p className="text-graphite leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table Teaser */}
            <section className="py-20 bg-alabaster-grey/30">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-jet-black rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                        {/* Decorative background circles */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-jet-black-800 rounded-full opacity-50 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-jet-black-800 rounded-full opacity-50 blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Undecided?</h2>
                            <p className="text-alabaster-grey text-lg mb-8 max-w-2xl mx-auto">
                                Compare up to 3 mattresses side-by-side. See how they stack up on firmness, warranty, trial period, and price.
                            </p>
                            <button className="bg-white text-jet-black font-bold py-3 px-8 rounded-full hover:bg-alabaster-grey transition transform hover:scale-105 shadow-lg">
                                Compare Mattresses
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 border-t border-alabaster-grey bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-jet-black mb-4">Sleep Better, Save More.</h2>
                    <p className="text-graphite mb-8">Join 50,000+ subscribers getting the latest sleep tips and exclusive mattress coupons delivered to their inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow px-5 py-3 rounded-lg border border-alabaster-grey focus:outline-none focus:ring-2 focus:ring-golden-bronze"
                        />
                        <button className="bg-golden-bronze hover:bg-golden-bronze-400 text-white font-semibold px-6 py-3 rounded-lg transition">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-xs text-graphite mt-4">No spam, ever. Unsubscribe anytime.</p>
                </div>
            </section>


        </div>
    );
};

export default Home;
