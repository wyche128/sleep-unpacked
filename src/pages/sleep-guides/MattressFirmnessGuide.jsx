import React, { useState, useEffect } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
} from 'chart.js';
import Header from '../../components/Header';

import { Cloud, ArrowRight, Check, Scale, BookOpen, AlertCircle } from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
);

const MattressFirmnessGuide = () => {
    useEffect(() => {
        document.title = "The Goldilocks Algorithm: Mattress Firmness Guide | Sleep Unpacked";
    }, []);

    // Calculator State
    const [calcState, setCalcState] = useState({
        weight: 'avg',
        pos: 'side'
    });

    // Chart Data Definitions
    const scaleData = {
        labels: ['1', '2', '3', '3.5', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'Usability Score',
            data: [10, 20, 30, 60, 80, 90, 100, 90, 80, 60, 10],
            backgroundColor: [
                '#e4e4e7', '#e4e4e7', '#e4e4e7', // 1-3 (Too Soft - Zinc-200)
                '#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b', '#09090b', // 3.5-9 (Functional Range - Zinc scales)
                '#e4e4e7' // 10 (Too Firm)
            ],
            borderRadius: 4,
            borderSkipped: false
        }]
    };

    const scaleOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    title: (tooltipItems) => `Firmness Level: ${tooltipItems[0].label}`,
                    label: (context) => {
                        const map = {
                            '1': 'Bean Bag (No Support)',
                            '2': 'Deep Sinkage',
                            '3': 'Very Soft',
                            '3.5': 'Soft (Start of Functional Range)',
                            '4': 'Medium-Soft',
                            '5': 'Medium',
                            '6': 'Medium-Firm (Industry Standard)',
                            '7': 'Firm',
                            '8': 'Very Firm',
                            '9': 'Ultra Firm (End of Functional Range)',
                            '10': 'Concrete Floor (No Contour)'
                        };
                        return map[context.label] || '';
                    }
                }
            }
        },
        scales: {
            y: { display: false, beginAtZero: true },
            x: { grid: { display: false } }
        }
    };

    const bellCurveData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'Sleeper Preference',
            data: [0, 2, 5, 15, 40, 85, 40, 15, 5, 2],
            borderColor: '#B4975A', // Golden Bronze
            backgroundColor: 'rgba(180, 151, 90, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    };

    const bellCurveOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: { display: true, text: '85% of Sleepers Prefer Medium-Firm (6/10)' }
        },
        scales: {
            y: { display: false },
            x: { grid: { display: false } }
        }
    };

    // Calculator Logic
    const calcDataMapping = {
        light: {
            side: { val: 4, label: "Soft (4)", text: "Because you are lighter, you don't sink deeply. A standard 'Medium' feels firm to you. You need a Soft mattress to get the necessary contouring for your hips and shoulders." },
            back: { val: 5.5, label: "Medium (5-6)", text: "You need just enough sinkage to support the lumbar curve without hammocking. A Medium mattress provides this balance for your weight." },
            stomach: { val: 6.5, label: "Med-Firm (6-7)", text: "Stomach sleeping requires a flat surface. A Medium-Firm mattress offers enough resistance for your lighter frame to prevent spinal bowing." }
        },
        avg: {
            side: { val: 5.5, label: "Medium (5-6)", text: "The classic Goldilocks zone. You sink enough for pressure relief but are supported by the core layers." },
            back: { val: 6.5, label: "Med-Firm (6-7)", text: "The industry standard. This provides robust support for spinal alignment while maintaining surface comfort." },
            stomach: { val: 7.5, label: "Firm (7-8)", text: "To prevent your midsection from sinking and hyperextending your back, you need a firmer surface than side sleepers." }
        },
        heavy: {
            side: { val: 6.5, label: "Med-Firm (6-7)", text: "Counter-intuitive: Because you compress materials more, a 'Medium' feels 'Soft' and lacks support. A 'Medium-Firm' or 'Firm' mattress will feel softer to you while preventing bottoming out." },
            back: { val: 7.5, label: "Firm (7-8)", text: "You exert more pressure on the mattress layers. A Firm rating ensures deep compression support to keep your spine straight." },
            stomach: { val: 8.5, label: "Very Firm (8-9)", text: "Maximum support is non-negotiable here. You need a Very Firm surface to float your body and prevent painful spinal curvature." }
        }
    };

    const currentResult = calcDataMapping[calcState.weight][calcState.pos];

    const gaugeData = {
        labels: ['Recommended', 'Rest'],
        datasets: [{
            data: [currentResult.val, 10 - currentResult.val],
            backgroundColor: ['#B4975A', '#27272a'], // Golden Bronze vs Zinc
            borderWidth: 0,
            circumference: 180,
            rotation: 270,
        }]
    };

    const gaugeOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        animation: { animateScale: true, animateRotate: true }
    };

    const layerData = {
        labels: ['Soft Mattress', 'Firm Mattress'],
        datasets: [
            {
                label: 'Comfort Layer (The Hug)',
                data: [4, 1.5],
                backgroundColor: '#a1a1aa', // Zinc-400
            },
            {
                label: 'Support Core (The Spine)',
                data: [6, 8.5],
                backgroundColor: '#18181b', // Zinc-950
            }
        ]
    };

    const layerOptions = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { stacked: true, display: false },
            y: { stacked: true, grid: { display: false } }
        },
        plugins: {
            legend: { position: 'bottom' },
        }
    };

    const updateWeight = (w) => setCalcState(prev => ({ ...prev, weight: w }));
    const updatePos = (p) => setCalcState(prev => ({ ...prev, pos: p }));

    return (
        <div className="bg-alabaster-grey font-sans text-graphite min-h-screen">
            <Header />

            {/* Hero Section */}
            <header className="relative bg-jet-black text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 font-serif">
                        The Goldilocks Algorithm
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto font-light">
                        Mattress firmness isn't just a preference—it's physics. We analyzed professional testing data to decode
                        the confusion between "Plush" and "Concrete."
                    </p>
                    <a href="#calculator"
                        className="inline-block bg-golden-bronze text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-600 transition-transform transform hover:-translate-y-1">
                        Find Your Perfect Firmness
                    </a>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

                {/* Section 1: The Narrow Scale */}
                <section id="the-scale" className="scroll-mt-24">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 space-y-6">
                            <span className="text-golden-bronze font-bold uppercase tracking-wider text-sm">Truth #1</span>
                            <h2 className="text-3xl font-bold text-jet-black font-serif">The Scale is Narrower Than You Think</h2>
                            <p className="text-graphite text-lg leading-relaxed">
                                Logic suggests mattresses are evenly distributed from 1 to 10. <span
                                    className="font-semibold text-jet-black">They aren't.</span>
                            </p>
                            <p className="text-graphite">
                                A <strong>1/10</strong> is essentially a bean bag, and a <strong>10/10</strong> is a concrete
                                floor. Neither offers a good night's sleep. The functional world exists almost entirely between
                                <strong>3.5 (Soft)</strong> and <strong>9 (Firm)</strong>.
                            </p>
                            <div className="bg-zinc-100 border-l-4 border-jet-black p-4 rounded-r-lg">
                                <p className="text-jet-black font-medium italic">"The sweet spot for human spinal alignment is
                                    surprisingly small."</p>
                            </div>
                        </div>
                        <div className="lg:col-span-7 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100">
                            <div className="h-[350px] w-full">
                                <Bar data={scaleData} options={scaleOptions} />
                            </div>
                            <p className="text-center text-sm text-zinc-400 mt-4">Hover over the bars to see real-world equivalents.</p>
                        </div>
                    </div>
                </section>

                {/* Section 2: The 85% Rule */}
                <section id="the-rule" className="scroll-mt-24 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-golden-bronze font-bold uppercase tracking-wider text-sm">Truth #2</span>
                        <h2 className="text-3xl font-bold text-jet-black mt-2 font-serif">The Myth of "Universal Comfort"</h2>
                        <p className="text-graphite mt-4 text-lg">
                            If you are paralyzed by choice, you are statistically safe aiming for a <span
                                className="font-bold text-white bg-jet-black px-2 py-1 rounded shadow-sm">6 out of 10</span>.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-zinc-50 p-6 rounded-2xl shadow-inner h-full flex flex-col justify-center border border-zinc-200">
                            <div className="h-[300px] w-full">
                                <Line data={bellCurveData} options={bellCurveOptions} />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-jet-black font-serif">Why 6 is the Magic Number</h3>
                            <p className="text-graphite">
                                Our data shows that a "Medium-Firm" mattress (rated 6/10) is the ideal firmness for
                                approximately <strong>85% of all sleepers</strong>.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4 text-graphite"><strong>Pressure Relief:</strong> Provides enough sinkage to cradle hips and shoulders.</div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4 text-graphite"><strong>Spinal Support:</strong> Provides enough pushback to keep the spine aligned.</div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4 text-graphite"><strong>The Geometric Compromise:</strong> Accommodates the widest variety of positions.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 3: The Calculator */}
                <section id="calculator" className="scroll-mt-24">
                    <div className="bg-jet-black rounded-3xl shadow-2xl overflow-hidden text-white">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-8 md:p-16 space-y-8">
                                <div>
                                    <span className="text-golden-bronze font-bold uppercase tracking-wider text-sm">Truth #3 & #5</span>
                                    <h2 className="text-3xl md:text-4xl font-extrabold mt-2 leading-tight font-serif">The
                                        Goldilocks<br />Firmness Calculator</h2>
                                    <p className="text-zinc-400 mt-4 text-lg">
                                        Firmness is relative to your mass. A "Medium" mattress feels firm to a light person but
                                        soft to a heavy person. Use our algorithm to find your adjusted needs.
                                    </p>
                                </div>

                                {/* Calculator Inputs */}
                                <div className="space-y-6 bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-300 mb-3">Your Body Weight</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {['light', 'avg', 'heavy'].map((w) => (
                                                <button
                                                    key={w}
                                                    onClick={() => updateWeight(w)}
                                                    className={`py-3 px-2 rounded-lg border-2 transition text-center text-sm font-semibold
                                                        ${calcState.weight === w
                                                            ? 'bg-zinc-800 border-golden-bronze ring-2 ring-golden-bronze ring-offset-2 ring-offset-zinc-900'
                                                            : 'border-zinc-700 hover:bg-zinc-800 text-zinc-400'}`}
                                                >
                                                    {w === 'light' ? 'Light' : w === 'avg' ? 'Average' : 'Heavy'}
                                                    <br />
                                                    <span className="text-xs font-normal opacity-75">
                                                        {w === 'light' ? '<150 lbs' : w === 'avg' ? '150-200 lbs' : '>200 lbs'}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-zinc-300 mb-3">Primary Sleeping
                                            Position</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {['side', 'back', 'stomach'].map((p) => (
                                                <button
                                                    key={p}
                                                    onClick={() => updatePos(p)}
                                                    className={`py-3 px-2 rounded-lg border-2 transition text-center text-sm font-semibold capitalize
                                                        ${calcState.pos === p
                                                            ? 'bg-zinc-800 border-golden-bronze ring-2 ring-golden-bronze ring-offset-2 ring-offset-zinc-900'
                                                            : 'border-zinc-700 hover:bg-zinc-800 text-zinc-400'}`}
                                                >
                                                    {p}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Calculator Output */}
                            <div className="bg-zinc-950 p-8 md:p-16 flex flex-col justify-center items-center text-center relative border-l border-zinc-800">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-golden-bronze to-transparent opacity-50"></div>

                                <h3 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4">Recommended Firmness</h3>

                                <div className="relative w-64 h-32 mb-6">
                                    <Doughnut data={gaugeData} options={gaugeOptions} />
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                                        <span className="text-5xl font-black text-white">{currentResult.val}</span>
                                    </div>
                                </div>

                                <h4 className="text-2xl font-bold text-golden-bronze mb-4">{currentResult.label.split(' ')[0]}</h4>

                                <p className="text-zinc-300 text-lg leading-relaxed">
                                    {currentResult.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Support vs. Firmness */}
                <section id="support" className="scroll-mt-24">
                    <div className="text-center mb-12">
                        <span className="text-golden-bronze font-bold uppercase tracking-wider text-sm">Truth #4</span>
                        <h2 className="text-3xl font-bold text-jet-black font-serif">Support ≠ Firmness</h2>
                        <p className="text-graphite mt-4 max-w-2xl mx-auto">
                            This is the most common misconception. We equate "Hard" with "Supportive," but they are distinct
                            metrics involving different layers of the mattress.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Visual Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-zinc-400">
                            <h3 className="text-xl font-bold text-jet-black mb-2 font-serif">Firmness (The Feel)</h3>
                            <p className="text-sm text-zinc-500 mb-6 uppercase tracking-wide">Immediate Sensation</p>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-lg bg-zinc-100 flex items-center justify-center text-2xl">
                                    <Cloud className="text-zinc-600" />
                                </div>
                                <p className="text-graphite">Determined by the top <strong>Comfort Layers</strong> (Foam, Pillow top).</p>
                            </div>
                            <p className="text-graphite text-sm">
                                It defines how much the mattress "hugs" your body (sinkage). A soft mattress hugs you; a firm
                                mattress floats you.
                            </p>
                        </div>

                        {/* Visual Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-jet-black">
                            <h3 className="text-xl font-bold text-jet-black mb-2 font-serif">Support (The Alignment)</h3>
                            <p className="text-sm text-zinc-500 mb-6 uppercase tracking-wide">Structural Integrity</p>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-lg bg-zinc-200 flex items-center justify-center text-2xl">
                                    <Scale className="text-zinc-800" />
                                </div>
                                <p className="text-graphite">Determined by the bottom <strong>Support Core</strong> (Coils, High-density foam).</p>
                            </div>
                            <p className="text-graphite text-sm">
                                It defines the ability to keep your spine in a neutral line. You can have a
                                <strong>Soft</strong> mattress with excellent <strong>Support</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 bg-white rounded-2xl shadow-md p-6 border border-zinc-200">
                        <h4 className="text-center font-bold text-jet-black mb-6 font-serif">Visualizing The Layers</h4>
                        <div className="h-[250px] max-w-[800px] mx-auto">
                            <Bar data={layerData} options={layerOptions} />
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-100 p-8 rounded-2xl border border-zinc-200">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-golden-bronze mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-jet-black font-serif text-lg mb-2">Key Takeaway</h3>
                            <p className="text-graphite">
                                The perfect mattress isn't about finding the "best" model, but finding the right mathematical match for your body. Use the calculator above as your starting point, and remember that "Universal Comfort" is a myth.
                            </p>
                        </div>
                    </div>
                </section>

            </main>

        </div>
    );
};

export default MattressFirmnessGuide;
