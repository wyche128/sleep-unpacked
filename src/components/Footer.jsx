import React from 'react';
import { Moon } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-jet-black text-alabaster-grey py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="bg-jet-black-800 p-1.5 rounded">
                            <Moon className="text-white" size={16} />
                        </div>
                        <span className="text-xl font-bold text-white">SleepUnpacked</span>
                    </div>
                    <p className="text-alabaster-grey text-sm mb-6">
                        Helping the world sleep better, one review at a time. Our team of experts provides unbiased, data-driven mattress reviews.
                    </p>
                    <div className="flex gap-4">
                        {/* Social placeholders */}
                        <div className="w-8 h-8 bg-jet-black-800 rounded-full flex items-center justify-center hover:bg-jet-black transition cursor-pointer">
                            <span className="text-xs font-bold">fb</span>
                        </div>
                        <div className="w-8 h-8 bg-jet-black-800 rounded-full flex items-center justify-center hover:bg-jet-black transition cursor-pointer">
                            <span className="text-xs font-bold">tw</span>
                        </div>
                        <div className="w-8 h-8 bg-jet-black-800 rounded-full flex items-center justify-center hover:bg-jet-black transition cursor-pointer">
                            <span className="text-xs font-bold">in</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Mattresses</h4>
                    <ul className="space-y-3 text-sm text-alabaster-grey">
                        <li><Link href="/top-picks/best-overall-mattress" className="hover:text-white transition">Best Overall</Link></li>
                        <li><Link href="/top-picks/best-mattress-for-back-pain" className="hover:text-white transition">Best for Back Pain</Link></li>
                        <li><Link href="/top-picks/best-cooling-mattress" className="hover:text-white transition">Best Cooling</Link></li>
                        <li><Link href="/top-picks/best-organic-mattress" className="hover:text-white transition">Best Organic</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Company</h4>
                    <ul className="space-y-3 text-sm text-alabaster-grey">
                        <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                        <li><Link href="/mattress-reviews" className="hover:text-white transition">Mattress Reviews</Link></li>
                        <li><Link href="/about#contact" className="hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Resources</h4>
                    <ul className="space-y-3 text-sm text-alabaster-grey">
                        <li><Link href="/sleep-guides" className="hover:text-white transition">Sleep Guides</Link></li>
                        <li><Link href="/comparisons" className="hover:text-white transition">Mattress Comparisons</Link></li>
                        <li><Link href="/faqs" className="hover:text-white transition">FAQ</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-jet-black-800 flex flex-col md:flex-row justify-between items-center text-sm text-alabaster-grey">
                <p>&copy; 2024 SleepUnpacked Inc. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
                    <Link href="/earnings" className="hover:text-white transition">Affiliate Disclosure</Link>
                    <Link href="/dmca-policy" className="hover:text-white transition">DMCA Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
