import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const ComparisonsHub = () => {
    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />
            <div className="bg-jet-black py-20 px-4 text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4">Comparisons</h1>
                <p className="text-xl text-alabaster-grey">Head-to-head battles to find the winner.</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link to="/comparisons/casper-vs-purple" className="block bg-white rounded-2xl shadow-sm border border-alabaster-grey overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                            Casper vs. Purple
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-jet-black mb-2 group-hover:text-golden-bronze transition-colors">Casper vs. Purple</h3>
                            <p className="text-graphite text-sm">A data-driven showdown between the foam giant and the grid pioneer.</p>
                            <div className="mt-4 text-golden-bronze font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Read Comparison &rarr;</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ComparisonsHub;
