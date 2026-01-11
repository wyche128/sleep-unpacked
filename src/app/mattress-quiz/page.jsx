'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import { mattresses } from '../../data/mattresses';
import {
    Moon,
    Sun,
    CircleDollarSign,
    Activity,
    ArrowRight,
    Loader2
} from 'lucide-react';

const questions = [
    {
        id: 'position',
        question: "What's your primary sleeping position?",
        icon: Moon,
        options: [
            { label: "Side Sleeper", value: "side" },
            { label: "Back Sleeper", value: "back" },
            { label: "Stomach Sleeper", value: "stomach" },
            { label: "Combination / Toss & Turn", value: "combo" }
        ]
    },
    {
        id: 'pain',
        question: "Do you wake up with any pain?",
        icon: Activity,
        options: [
            { label: "Back Pain", value: "back_pain" },
            { label: "Hip/Shoulder Pain", value: "joint_pain" },
            { label: "No Pain", value: "none" }
        ]
    },
    {
        id: 'temperature',
        question: "Do you tend to sleep hot?",
        icon: Sun,
        options: [
            { label: "Yes, I'm a furnace", value: "hot" },
            { label: "Sometimes", value: "warm" },
            { label: "No, I'm neutral/cold", value: "cool" }
        ]
    },
    {
        id: 'budget',
        question: "What is your budget range?",
        icon: CircleDollarSign,
        options: [
            { label: "Under $1,000", value: "low" },
            { label: "$1,000 - $1,500", value: "mid" },
            { label: "$1,500+", value: "high" }
        ]
    }
];

const MattressQuiz = () => {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleAnswer = (value) => {
        setAnswers(prev => ({ ...prev, [questions[step].id]: value }));

        if (step < questions.length - 1) {
            setTimeout(() => setStep(prev => prev + 1), 250); // Slight delay for better UX
        } else {
            analyzeAndRedirect({ ...answers, [questions[step].id]: value });
        }
    };

    const analyzeAndRedirect = (finalAnswers) => {
        setIsAnalyzing(true);

        // Simple Scoring Logic
        const scoredMattresses = mattresses.map(m => {
            let score = 0;

            // 1. Position & Firmness Logic
            if (finalAnswers.position === 'side') {
                if (m.firmness >= 4 && m.firmness <= 6.5) score += 3; // Soft/Med for hips
            } else if (finalAnswers.position === 'back' || finalAnswers.position === 'stomach') {
                if (m.firmness >= 6 && m.firmness <= 8) score += 3; // Firmer for support
            } else {
                score += 2; // Combo essentially works on minimal motion transfer/responsive
            }

            // 2. Pain Logic
            if (finalAnswers.pain === 'back_pain') {
                if (m.support >= 9) score += 3;
            } else if (finalAnswers.pain === 'joint_pain') {
                // Needs pressure relief -> often memory foam or soft hybrids
                if (m.firmness <= 6.0) score += 2;
            }

            // 3. Temperature Logic
            if (finalAnswers.temperature === 'hot') {
                if (m.coolingRating >= 8.5) score += 4; // High weight on cooling if hot
                else if (m.coolingRating >= 7) score += 1;
            }

            // 4. Budget Logic
            if (finalAnswers.budget === 'low') {
                if (m.price <= 1000) score += 5; // Must be affordable
                else score -= 5;
            } else if (finalAnswers.budget === 'mid') {
                if (m.price <= 1500) score += 2;
                else score -= 2;
            } else {
                // High budget, prefer premium
                if (m.price > 1200) score += 2;
            }

            return { id: m.id, score };
        });

        // Sort by score
        scoredMattresses.sort((a, b) => b.score - a.score);

        // Get top 3
        const topIds = scoredMattresses.slice(0, 3).map(m => m.id);

        // Fake analysis time then redirect
        setTimeout(() => {
            router.push(`/mattress-comparison?ids=${topIds.join(',')}`);
        }, 2000);
    };

    const currentQ = questions[step];

    return (
        <div className="font-sans text-graphite bg-alabaster-grey/10 min-h-screen flex flex-col">
            <Header />

            <div className="flex-1 flex flex-col items-center justify-center p-4">

                {isAnalyzing ? (
                    <div className="text-center animate-in fade-in zoom-in duration-500">
                        <Loader2 size={64} className="text-golden-bronze animate-spin mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-jet-black mb-2">Analyzing your sleep profile...</h2>
                        <p className="text-lg text-graphite">Matching you with 200+ data points.</p>
                    </div>
                ) : (
                    <div className="max-w-2xl w-full">
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                            <div
                                className="bg-golden-bronze h-2 rounded-full transition-all duration-300 ease-out"
                                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                            ></div>
                        </div>

                        {/* Question Card */}
                        <div className="bg-white rounded-3xl shadow-xl border border-alabaster-grey p-8 md:p-12 text-center duration-300">
                            <div className="w-16 h-16 bg-jet-black text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform -rotate-3">
                                <currentQ.icon size={32} />
                            </div>

                            <h2 className="text-2xl md:text-4xl font-bold text-jet-black mb-8 leading-tight">
                                {currentQ.question}
                            </h2>

                            <div className="grid grid-cols-1 gap-4">
                                {currentQ.options.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleAnswer(option.value)}
                                        className="bg-alabaster-grey/10 hover:bg-golden-bronze hover:text-white border-2 border-transparent hover:border-golden-bronze-400 text-jet-black font-semibold text-lg py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-95 shadow-sm flex items-center justify-between group"
                                    >
                                        <span>{option.label}</span>
                                        <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 text-center text-sm text-alabaster-grey font-medium uppercase tracking-wider">
                            Question {step + 1} of {questions.length}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MattressQuiz;
