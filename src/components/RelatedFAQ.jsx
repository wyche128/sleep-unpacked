'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, HelpCircle } from 'lucide-react';

const RelatedFAQ = ({ faqs }) => {
    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="mt-16 pt-12 border-t border-alabaster-grey">
            <div className="flex items-center mb-8">
                <div className="bg-golden-bronze/10 p-2 rounded-lg text-golden-bronze mr-4">
                    <HelpCircle size={24} />
                </div>
                <h2 className="text-2xl font-bold text-jet-black">Related Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.map((faq, index) => (
                    <Link
                        key={index}
                        href={faq.link}
                        className="group flex items-center justify-between p-5 bg-white border border-alabaster-grey rounded-2xl hover:border-golden-bronze hover:shadow-md transition-all duration-300"
                    >
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-golden-bronze mb-1 uppercase tracking-wider">{faq.category || 'FAQ'}</span>
                            <span className="text-lg font-bold text-jet-black group-hover:text-golden-bronze transition-colors">{faq.title}</span>
                        </div>
                        <ChevronRight className="text-alabaster-grey group-hover:text-golden-bronze group-hover:translate-x-1 transition-all" size={20} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RelatedFAQ;
