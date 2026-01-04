'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Header from '../../../components/Header';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const InsomniaGuide = () => {
    // --- HACK 1: Paradoxical Intention ---
    const [paradoxSeconds, setParadoxSeconds] = useState(0);
    const [isParadoxRunning, setIsParadoxRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isParadoxRunning) {
            interval = setInterval(() => {
                setParadoxSeconds(s => s + 1);
            }, 1000);
        } else if (!isParadoxRunning && paradoxSeconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isParadoxRunning, paradoxSeconds]);

    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const secs = (totalSeconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    // --- HACK 2: 4-7-8 Breathing ---
    const breathCanvasRef = useRef(null);
    const [breathState, setBreathState] = useState('idle'); // idle, running
    const breathStartTimeRef = useRef(0);
    const breathReqRef = useRef(null);

    useEffect(() => {
        const canvas = breathCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        const drawBreathCircle = (scale, color, text) => {
            ctx.clearRect(0, 0, width, height);
            const centerX = width / 2;
            const centerY = height / 2;
            const maxRadius = 70;

            // Inner fill
            ctx.beginPath();
            ctx.arc(centerX, centerY, maxRadius * scale, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();

            // Outer ring
            ctx.beginPath();
            ctx.arc(centerX, centerY, maxRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = '#334155'; // slate-700
            ctx.stroke();

            // Text
            if (text) {
                ctx.fillStyle = '#ccfbf1'; // teal-100
                ctx.font = 'bold 20px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(text, centerX, centerY);
            }
        };

        const loop = (timestamp) => {
            if (!breathStartTimeRef.current) breathStartTimeRef.current = timestamp;
            const elapsed = timestamp - breathStartTimeRef.current;
            const cycleLength = 19000;
            const cycleTime = elapsed % cycleLength;

            let scale = 0.5;
            let color = '#0f766e'; // teal-700
            let phase = '';

            if (cycleTime < 4000) {
                // Inhale 4s
                const progress = cycleTime / 4000;
                scale = 0.5 + (0.5 * progress);
                color = '#2dd4bf'; // teal-400
                phase = 'Inhale';
            } else if (cycleTime < 11000) {
                // Hold 7s
                scale = 1.0;
                color = '#fcd34d'; // amber-300
                phase = 'Hold';
            } else {
                // Exhale 8s
                const progress = (cycleTime - 11000) / 8000;
                scale = 1.0 - (0.5 * progress);
                color = '#2dd4bf';
                phase = 'Exhale';
            }

            drawBreathCircle(scale, color, phase);
            breathReqRef.current = requestAnimationFrame(loop);
        };

        if (breathState === 'running') {
            breathStartTimeRef.current = 0;
            breathReqRef.current = requestAnimationFrame(loop);
        } else {
            if (breathReqRef.current) cancelAnimationFrame(breathReqRef.current);
            drawBreathCircle(0.5, '#0f766e', 'Press Start');
        }

        return () => {
            if (breathReqRef.current) cancelAnimationFrame(breathReqRef.current);
        };
    }, [breathState]);

    // --- HACK 3: Military Method ---
    const [militarySteps, setMilitarySteps] = useState([
        { id: 1, text: "Relax Face (Tongue, Jaw)", completed: false },
        { id: 2, text: "Drop Shoulders & Arms", completed: false },
        { id: 3, text: "Exhale & Limp Legs", completed: false },
        { id: 4, text: "Clear Mind (Visualize Black)", completed: false },
    ]);

    const toggleMilitaryStep = (id) => {
        setMilitarySteps(steps => steps.map(s =>
            s.id === id ? { ...s, completed: !s.completed } : s
        ));
    };

    const resetMilitary = () => {
        setMilitarySteps(steps => steps.map(s => ({ ...s, completed: false })));
    };

    const allMilitaryComplete = militarySteps.every(s => s.completed);


    // --- HACK 6: Brain Dump ---
    const [brainDumpText, setBrainDumpText] = useState("");
    const [isShredding, setIsShredding] = useState(false);

    const handleShred = () => {
        if (!brainDumpText.trim()) return;
        setIsShredding(true);
        setTimeout(() => {
            setBrainDumpText("");
            setIsShredding(false);
        }, 1000);
    };


    // --- Charts Configuration ---
    const tempChartData = {
        labels: ['Avg Body Temp', 'Avg Room Temp', 'Optimal Sleep Temp'],
        datasets: [{
            label: 'Temperature (°F)',
            data: [98.6, 72, 65],
            backgroundColor: [
                'rgba(239, 68, 68, 0.5)', // Red
                'rgba(234, 179, 8, 0.5)', // Yellow
                'rgba(59, 130, 246, 0.8)' // Blue
            ],
            borderColor: [
                'rgb(239, 68, 68)',
                'rgb(234, 179, 8)',
                'rgb(59, 130, 246)'
            ],
            borderWidth: 1
        }]
    };

    const tempChartOptions = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                min: 50,
                max: 100,
                grid: { color: '#334155' },
                ticks: { color: '#94a3b8' }
            },
            y: {
                grid: { display: false },
                ticks: { color: '#e2e8f0' }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    afterLabel: (context) => {
                        if (context.label === 'Optimal Sleep Temp') return "Range: 60°F - 68°F";
                    }
                }
            }
        }
    };

    const latencyChartData = {
        labels: ['Sleep Deprived', 'Healthy Sleep', 'Insomnia'],
        datasets: [{
            label: 'Minutes to Fall Asleep',
            data: [[0, 5], [10, 20], [20, 60]],
            backgroundColor: [
                'rgba(248, 113, 113, 0.6)',
                'rgba(74, 222, 128, 0.6)',
                'rgba(250, 204, 21, 0.6)'
            ],
            borderColor: [
                'rgb(248, 113, 113)',
                'rgb(74, 222, 128)',
                'rgb(250, 204, 21)'
            ],
            borderWidth: 1
        }]
    };

    const latencyChartOptions = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: { display: true, text: 'Minutes', color: '#64748b' },
                grid: { color: '#334155' },
                ticks: { color: '#94a3b8' }
            },
            y: {
                grid: { display: false },
                ticks: { color: '#e2e8f0', font: { weight: 'bold' } }
            }
        },
        plugins: {
            legend: { display: false }
        }
    };

    // --- HACK 5: 60 BPM Visualizer ---
    const bpmCanvasRef = useRef(null);
    useEffect(() => {
        const canvas = bpmCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        let animationFrame;

        const drawBpm = (timestamp) => {
            const centerX = width / 2;
            const centerY = height / 2;
            const t = timestamp % 1000;
            const period = t / 1000;

            let radius = 20;
            let alpha = 0.2;

            if (period < 0.2) {
                // Expanding phase
                radius = 20 + (period * 5 * 20);
                alpha = 1 - (period * 5);
            }

            ctx.clearRect(0, 0, width, height);

            // Base
            ctx.beginPath();
            ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
            ctx.fillStyle = '#a855f7'; // purple-500
            ctx.fill();

            // Pulse
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 4;
            ctx.stroke();

            animationFrame = requestAnimationFrame(drawBpm);
        };
        animationFrame = requestAnimationFrame(drawBpm);
        return () => cancelAnimationFrame(animationFrame);
    }, []);


    return (
        <div className="bg-slate-900 text-slate-200 min-h-screen flex flex-col font-sans">
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    backgroundPosition: '0 0, 25px 25px'
                }}
            />

            <Header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800" />

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-12">

                {/* Intro */}
                <section className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">The Sleep Switch: 6 Tools To Help You Sleep</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Sleep isn't a task you can force. It's a biological process.
                        Based on research regarding <strong className="text-indigo-400">Paradoxical Intention</strong> and physiological regulation,
                        these 6 tools are designed to override your body's stress response.
                    </p>
                </section>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                    {/* 1. Paradoxical Intention */}
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-lg hover:shadow-indigo-500/10 transition-all">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mr-4 font-bold text-lg">1</div>
                            <h3 className="text-2xl font-bold text-white">Paradoxical Intention</h3>
                        </div>
                        <p className="text-slate-400 mb-6 min-h-[48px]">
                            Performance anxiety kills sleep. Reverse the psychology. Your goal is to <strong className="text-indigo-200">stay awake</strong>.
                        </p>
                        <div className="text-center bg-slate-900 rounded-xl p-6 mb-6 border border-slate-700">
                            <div className="text-5xl font-mono text-indigo-300 mb-2">{formatTime(paradoxSeconds)}</div>
                            <p className={`text-xs uppercase tracking-widest font-semibold ${isParadoxRunning ? 'text-red-400 animate-pulse' : 'text-indigo-400'}`}>
                                {isParadoxRunning ? 'Trying to Stay Awake...' : 'Ready'}
                            </p>
                        </div>
                        <button
                            onClick={() => setIsParadoxRunning(!isParadoxRunning)}
                            className={`w-full py-4 rounded-xl font-bold transition-all ${isParadoxRunning
                                ? 'bg-red-600 hover:bg-red-700 text-white'
                                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                }`}
                        >
                            {isParadoxRunning ? 'I Am Awake (Stop)' : 'I Am Going To Stay Awake'}
                        </button>
                    </div>

                    {/* 2. 4-7-8 Breathing */}
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-lg hover:shadow-teal-500/10 transition-all">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 mr-4 font-bold text-lg">2</div>
                            <h3 className="text-2xl font-bold text-white">4-7-8 Breathing</h3>
                        </div>
                        <p className="text-slate-400 mb-6 min-h-[48px]">
                            A natural tranquilizer. Inhale (4s), Hold (7s), Exhale (8s). Follow the circle.
                        </p>
                        <div className="flex justify-center items-center h-48 bg-slate-900 rounded-xl border border-slate-700 mb-6 overflow-hidden">
                            <canvas ref={breathCanvasRef} width={300} height={180} />
                        </div>
                        <button
                            onClick={() => setBreathState(s => s === 'idle' ? 'running' : 'idle')}
                            className={`w-full py-4 rounded-xl font-bold transition-all ${breathState === 'running'
                                ? 'bg-red-600 hover:bg-red-700 text-white'
                                : 'bg-teal-600 hover:bg-teal-700 text-white'
                                }`}
                        >
                            {breathState === 'running' ? 'Stop Pacer' : 'Start Breathing Pacer'}
                        </button>
                    </div>

                    {/* 3. Military Method */}
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-lg hover:shadow-emerald-500/10 transition-all">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mr-4 font-bold text-lg">3</div>
                            <h3 className="text-2xl font-bold text-white">The Military Method</h3>
                        </div>
                        <p className="text-slate-400 mb-6">
                            Systematic shutdown. 96% success rate after 6 weeks. Click each step as you complete it.
                        </p>
                        <div className="space-y-3 mb-6">
                            {militarySteps.map((step) => (
                                <div
                                    key={step.id}
                                    onClick={() => toggleMilitaryStep(step.id)}
                                    className={`p-4 rounded-lg cursor-pointer transition-all flex justify-between items-center border ${step.completed
                                        ? 'bg-emerald-900/20 border-emerald-500/50 opacity-60'
                                        : 'bg-slate-700/50 border-transparent hover:bg-slate-700 hover:border-emerald-500/30'
                                        }`}
                                >
                                    <span className={step.completed ? 'line-through text-emerald-400' : 'text-slate-200'}>
                                        {step.id}. {step.text}
                                    </span>
                                    <div className={`w-5 h-5 rounded-full border transition-all ${step.completed ? 'bg-emerald-500 border-emerald-500' : 'border-slate-500'
                                        }`} />
                                </div>
                            ))}
                        </div>
                        {allMilitaryComplete && (
                            <button
                                onClick={resetMilitary}
                                className="w-full py-2 text-sm text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/20 rounded transition-colors"
                            >
                                Reset Sequence
                            </button>
                        )}
                    </div>

                    {/* 4. Thermal Drop */}
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-lg hover:shadow-blue-500/10 transition-all">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mr-4 font-bold text-lg">4</div>
                            <h3 className="text-2xl font-bold text-white">Thermal Drop</h3>
                        </div>
                        <p className="text-slate-400 mb-6">
                            Your core temp must drop to initiate sleep. Ideal room temp is shockingly cool (60-68°F).
                        </p>
                        <div className="h-64 mb-6">
                            <Bar data={tempChartData} options={tempChartOptions} />
                        </div>
                        <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-900/50">
                            <p className="text-sm text-blue-200">
                                <strong>Tip:</strong> Sleep naked to help thermoregulation if you can't lower the AC.
                            </p>
                        </div>
                    </div>

                    {/* 5. 60 BPM */}
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-lg hover:shadow-purple-500/10 transition-all">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mr-4 font-bold text-lg">5</div>
                            <h3 className="text-2xl font-bold text-white">60 BPM Entrainment</h3>
                        </div>
                        <p className="text-slate-400 mb-6">
                            Auditory and visual entrainment works by syncing your heart rate to a rhythm. Watch this pulse.
                        </p>
                        <div className="flex justify-center items-center h-40 bg-slate-900 rounded-xl border border-slate-700 mb-4 overflow-hidden">
                            <canvas ref={bpmCanvasRef} width={300} height={120} />
                        </div>
                        <div className="flex justify-between text-xs text-slate-500 font-medium px-4">
                            <span>Fight or Flight</span>
                            <span>Rest & Digest</span>
                        </div>
                    </div>

                    {/* 6. Brain Dump */}
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-lg hover:shadow-pink-500/10 transition-all">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 mr-4 font-bold text-lg">6</div>
                            <h3 className="text-2xl font-bold text-white">The Brain Dump</h3>
                        </div>
                        <p className="text-slate-400 mb-6">
                            "Cognitive Arousal" blocks sleep. Offload your working memory here, then "shred" it.
                        </p>
                        <textarea
                            value={brainDumpText}
                            onChange={(e) => setBrainDumpText(e.target.value)}
                            className={`w-full bg-slate-900 text-slate-200 text-sm p-4 rounded-xl border border-slate-600 focus:border-pink-500 focus:outline-none mb-4 h-32 resize-none transition-all duration-1000 ${isShredding ? 'scale-0 opacity-0 rotate-12' : 'scale-100 opacity-100 rotate-0'
                                }`}
                            placeholder={isShredding ? "" : "Type your worries, tasks, or random thoughts here..."}
                        />
                        <button
                            onClick={handleShred}
                            disabled={isShredding || !brainDumpText.trim()}
                            className="w-full py-3 border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isShredding ? 'Releasing...' : 'Release Thoughts'}
                        </button>
                    </div>

                </div>

                {/* Latency Section */}
                <section className="bg-slate-800 rounded-2xl border border-slate-700 p-8 md:p-12 shadow-xl mb-12">
                    <div className="md:flex justify-between items-start gap-8">
                        <div className="md:w-1/3 mb-8 md:mb-0">
                            <h2 className="text-2xl font-bold text-white mb-4">Are You Sleeping *Too* Fast?</h2>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                While insomnia is frustrating, falling asleep instantly is often a sign of severe sleep deprivation.
                                A healthy "Sleep Latency" is a gentle transition, not a crash.
                            </p>
                            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                <p className="italic text-slate-400 text-sm">
                                    "Sleep shouldn't be a battle... these tactics are about working WITH your biology rather than against it."
                                </p>
                            </div>
                        </div>
                        <div className="md:w-2/3 h-64">
                            <Bar data={latencyChartData} options={latencyChartOptions} />
                        </div>
                    </div>
                </section>

            </div>


        </div>
    );
};

export default InsomniaGuide;
