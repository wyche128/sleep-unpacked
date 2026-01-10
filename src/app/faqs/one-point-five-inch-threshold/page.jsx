'use client';

import React from 'react';
import Header from '../../../components/Header';
import { Ruler, AlertTriangle, FileText, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import RelatedFAQ from '../../../components/RelatedFAQ';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const OnePointFiveInchThreshold = () => {
    const relatedFaqs = [
        {
            title: 'Do You Really Need to Rotate Your Mattress?',
            link: '/faqs/do-you-need-to-rotate-mattress',
            category: 'Care'
        },
        {
            title: 'How Do Sleep Trials Actually Work?',
            link: '/faqs/how-long-free-trial',
            category: 'Warranties'
        },
        {
            title: 'Why Your New Mattress Feels Like Concrete',
            link: '/faqs/how-to-break-in-mattress',
            category: 'Setup'
        }
    ];

    // Data visualization for sag depth
    const data = {
        labels: ['Minimal (0.5")', 'Noticeable (1.0")', 'Painful (1.25")', 'Warranty Limit (1.5")'],
        datasets: [
            {
                label: 'Pain Level (1-10)',
                data: [1, 3, 7, 9],
                backgroundColor: [
                    '#4ade80', // Green
                    '#facc15', // Yellow
                    '#fb923c', // Orange
                    '#f87171'  // Red
                ],
                borderRadius: 4,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                title: { display: true, text: 'Reported Back Pain Level' }
            }
        }
    };

    return (
        <div className="font-sans text-jet-black bg-white min-h-screen">
            <Header />

            {/* Breadcrumb */}
            <div className="bg-alabaster-grey/20 border-b border-alabaster-grey">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <Link href="/faqs" className="inline-flex items-center text-sm font-bold text-golden-bronze hover:text-jet-black transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to FAQ
                    </Link>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 py-12">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-golden-bronze/10 rounded-full text-golden-bronze mb-6">
                        <Ruler size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-jet-black mb-6 font-serif">
                        The 1.5 Inch Warranty Trap
                    </h1>
                    <p className="text-xl text-graphite leading-relaxed max-w-2xl mx-auto">
                        Why your "Lifetime Warranty" might be useless even if your bed has a visible crater.
                    </p>
                </header>

                <div className="bg-white border border-alabaster-grey rounded-2xl p-8 mb-12 shadow-sm">
                    <h2 className="text-2xl font-bold text-jet-black mb-6">The "Standard" Industry Policy</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <p className="text-graphite mb-4">
                                Most mattress warranties (Nectar, DreamCloud, WinkBed, etc.) only cover <strong>visible indentations greater than 1.5 inches</strong>.
                            </p>
                            <p className="text-graphite mb-4">
                                This measurement must be taken with <strong>no weight on the bed</strong>. You often have to run a string or broomstick across the bed and use a ruler to prove the depth.
                            </p>
                            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 text-sm text-red-800">
                                <strong className="block mb-1">The Catch:</strong> Memory foam is resilient. It often springs back to look flat (visibly &lt; 1 inch dip) but has lost all structural support. You sink in when you lie down (3+ inches), but the warranty claim will be denied because the "unweighted" sag is too shallow.
                            </div>
                        </div>
                        <div className="flex-1 w-full h-64">
                            <Bar data={data} options={options} />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-jet-black text-white p-6 rounded-xl">
                        <h3 className="font-bold text-golden-bronze mb-2">0.75 Inches</h3>
                        <p className="text-sm">Standard threshold for <strong>Latex</strong> or premium store brands (Tempur-Pedic often uses 0.75"). Better coverage.</p>
                    </div>
                    <div className="bg-jet-black text-white p-6 rounded-xl border border-golden-bronze relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 bg-golden-bronze text-jet-black text-xs font-bold">Standard</div>
                        <h3 className="font-bold text-white mb-2">1.5 Inches</h3>
                        <p className="text-sm">The "industry standard" for bed-in-a-box foam hybrids. Designed to filter out most softness complaints.</p>
                    </div>
                    <div className="bg-jet-black text-white p-6 rounded-xl">
                        <h3 className="font-bold text-red-400 mb-2">2.0 Inches</h3>
                        <p className="text-sm">Predatory threshold used by ultra-budget brands on Amazon (Zinus, etc.). Almost impossible to claim.</p>
                    </div>
                </div>

                <article className="prose prose-lg prose-slate mx-auto text-graphite">
                    <h3 className="text-2xl font-bold text-jet-black mb-4">How to Win a Warranty Claim</h3>
                    <ol>
                        <li><strong>Remove all bedding.</strong> Sheets hide impressions.</li>
                        <li><strong>Use a straight edge.</strong> A broomstick or level across the dip.</li>
                        <li><strong>Use a rigid ruler.</strong> Measure the deepest point from the bottom of the straight edge to the mattress surface.</li>
                        <li><strong>Do not press down.</strong> The ruler must rest gently on the fabric.</li>
                        <li><strong>Check your foundation.</strong> If your slats are too wide (&gt;3 inches) or your frame is broken, they will deny the claim immediately, blaming your frame for the sag. (See our <Link href="/faqs/do-i-need-a-box-spring" className="text-golden-bronze hover:underline font-bold">Foundation Guide</Link>).</li>
                    </ol>
                </article>

                <RelatedFAQ faqs={relatedFaqs} />
            </main>
        </div>
    );
};

export default OnePointFiveInchThreshold;
