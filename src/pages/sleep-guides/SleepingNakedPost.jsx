import React, { useRef, useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Clock, Calendar, Share2, MessageCircle, ThumbsUp, User } from 'lucide-react';

const SleepingNakedPost = () => {
    const [readingProgress, setReadingProgress] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                const totalHeight = contentRef.current.clientHeight;
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;
                const progress = (scrollY / (totalHeight - windowHeight)) * 100;
                setReadingProgress(Math.min(100, Math.max(0, progress)));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-white min-h-screen font-sans text-graphite selection:bg-golden-bronze selection:text-white">
            <Header />

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 h-1 bg-golden-bronze z-50 transition-all duration-300" style={{ width: `${readingProgress}%` }}></div>

            {/* Hero Section */}
            <header className="relative pt-20 pb-16 bg-jet-black text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541781777621-39121f476b96?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
                <div className="relative max-w-3xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-golden-bronze/20 border border-golden-bronze/30 text-golden-bronze text-xs font-bold uppercase tracking-wide mb-6">
                        Sleep Science
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                        The Cool Comfort of Sleeping Naked: Why It's Better for You
                    </h1>
                    <p className="text-lg md:text-xl text-alabaster-grey mb-8 font-serif italic">
                        Ditch the pajamas. Science says sleeping in your birthday suit boosts health, happiness, and intimacy.
                    </p>

                    <div className="flex items-center justify-center gap-6 text-sm text-alabaster-grey/80 border-t border-white/10 pt-6">
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>Dr. Sarah Miller, PhD</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>Oct 12, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>5 min read</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main ref={contentRef} className="max-w-3xl mx-auto px-6 py-12">
                <article className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-jet-black prose-a:text-golden-bronze hover:prose-a:text-golden-bronze-400">
                    <p className="lead text-xl text-graphite mb-8 font-serif">
                        We spend a third of our lives asleep, yet many of us overcomplicate it with heavy pajamas and blankets. The simple act of sleeping naked can regulate your body temperature, improve skin health, and deepen your connection with your partner.
                    </p>

                    <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                        <span className="bg-golden-bronze text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                        Regulates Body Temperature
                    </h2>
                    <p>
                        Your body temperature naturally drops as you fall asleep. Wearing thick pajamas can disrupt this process, causing you to wake up sweating. Sleeping naked helps your body find its optimal thermal regulation zone faster, leading to deeper, more restorative sleep.
                    </p>

                    <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                        <span className="bg-golden-bronze text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                        Incredible Skin Benefits
                    </h2>
                    <p>
                        Your skin needs to breathe. Tight clothing can trap moisture and bacteria. By airing it out at night, you reduce the risk of skin irritations and fungal infections. Plus, the cooler temperature stimulates anti-aging hormones like melatonin.
                    </p>

                    <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                        <span className="bg-golden-bronze text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                        Boosts Metabolism
                    </h2>
                    <p>
                        Keeping cool at night activates "brown fat," a type of healthy fat tissue that generates heat by burning calories. While it won't replace the gym, it's a passive health hack worth trying.
                    </p>

                    <div className="bg-golden-bronze-100 p-8 rounded-2xl my-12 border-l-4 border-golden-bronze">
                        <h3 className="text-xl font-bold text-jet-black mt-0 mb-4">Quick Tip: Start Slow</h3>
                        <p className="mb-0 text-graphite">
                            If full nudity feels weird, start by ditching just the top or bottom. Use lighter bedding layers so you can adjust easily during the night. The goal is comfort, not exposure.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-jet-black mt-12 mb-6 flex items-center gap-3">
                        <span className="bg-golden-bronze text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                        Improves Intimacy
                    </h2>
                    <p>
                        Skin-to-skin contact releases oxytocin, the "love hormone." Whether it leads to sex or just cuddling, direct contact reduces stress and builds emotional closeness with your partner.
                    </p>

                    <hr className="my-12 border-alabaster-grey" />

                    <div className="bg-alabaster-grey/30 p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-jet-black mb-4">Ready to try it tonight?</h3>
                        <p className="text-graphite mb-6">
                            Upgrade your sheets first. Natural materials like cotton or linen feel best against bare skin.
                        </p>
                        <button className="bg-jet-black text-white px-8 py-3 rounded-full font-bold hover:bg-jet-black-800 transition shadow-lg">
                            Shop Cooling Sheets
                        </button>
                    </div>
                </article>
            </main>

            {/* Footer Actions */}
            <div className="fixed bottom-0 w-full bg-white border-t border-alabaster-grey p-4 md:hidden z-40">
                <div className="flex justify-around text-graphite">
                    <button className="flex flex-col items-center gap-1 text-xs font-medium hover:text-golden-bronze">
                        <ThumbsUp size={20} /> Like
                    </button>
                    <button className="flex flex-col items-center gap-1 text-xs font-medium hover:text-golden-bronze">
                        <MessageCircle size={20} /> Comment
                    </button>
                    <button className="flex flex-col items-center gap-1 text-xs font-medium hover:text-golden-bronze">
                        <Share2 size={20} /> Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SleepingNakedPost;
