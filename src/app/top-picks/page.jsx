'use client';

import React from 'react';
import Header from '../../components/Header';

const TopPicksHub = () => {
    return (
        <div className="font-sans text-graphite bg-white min-h-screen">
            <Header />
            <div className="bg-jet-black py-20 px-4 text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4">Top Picks</h1>
                <p className="text-xl text-alabaster-grey">Our curated list of the best mattresses for every sleeper.</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                <div className="p-12 border-2 border-dashed border-alabaster-grey rounded-3xl bg-alabaster-grey/20">
                    <p className="text-jet-black font-semibold text-lg">Content coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default TopPicksHub;
