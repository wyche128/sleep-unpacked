import React from 'react';
import { Moon } from 'lucide-react';

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
                        <li><a href="#" className="hover:text-white transition">Best Overall</a></li>
                        <li><a href="#" className="hover:text-white transition">Best for Back Pain</a></li>
                        <li><a href="#" className="hover:text-white transition">Best Cooling</a></li>
                        <li><a href="#" className="hover:text-white transition">Best Organic</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Company</h4>
                    <ul className="space-y-3 text-sm text-alabaster-grey">
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition">Our Testing Process</a></li>
                        <li><a href="#" className="hover:text-white transition">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Resources</h4>
                    <ul className="space-y-3 text-sm text-alabaster-grey">
                        <li><a href="#" className="hover:text-white transition">Sleep Blog</a></li>
                        <li><a href="#" className="hover:text-white transition">Coupons</a></li>
                        <li><a href="#" className="hover:text-white transition">Glossary</a></li>
                        <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-jet-black-800 flex flex-col md:flex-row justify-between items-center text-sm text-alabaster-grey">
                <p>&copy; 2024 SleepUnpacked Inc. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
                    <a href="/terms-of-service" className="hover:text-white transition">Terms of Service</a>
                    <a href="/earnings" className="hover:text-white transition">Affiliate Disclosure</a>
                    <a href="/dmca-policy" className="hover:text-white transition">DMCA Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
