'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import logo from '../assets/sleepunpacked_logo.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchQuery(params.get('q') || '');
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-alabaster-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center flex-wrap md:flex-nowrap">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src={logo.src} alt="SleepUnpacked" className="h-10 w-auto" />
          </Link>

          {/* Desktop Search Bar */}
          <div className={`hidden md:flex flex-1 max-w-md mx-8 transition-all duration-300 ${isSearchFocused ? 'max-w-lg' : 'max-w-xs'}`}>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className={`${isSearchFocused ? 'text-golden-bronze' : 'text-graphite/50'}`} />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-alabaster-grey rounded-full leading-5 bg-alabaster-grey/20 placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-golden-bronze/50 focus:border-golden-bronze focus:bg-white transition-all text-sm"
                placeholder="Search reviews, guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 shrink-0">
            <Link href="/top-picks" className="text-graphite hover:text-jet-black font-medium transition text-sm">Top Picks</Link>
            <Link href="/mattress-reviews" className="text-graphite hover:text-jet-black font-medium transition text-sm">Reviews</Link>
            <Link href="/sleep-guides" className="text-graphite hover:text-jet-black font-medium transition text-sm">Guides</Link>
            <button className="bg-jet-black text-white px-5 py-2 rounded-full font-medium hover:bg-jet-black-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm whitespace-nowrap">
              Take the Quiz
            </button>
          </div>

          {/* Mobile Search Icon & Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button className="text-graphite hover:text-jet-black p-2">
              <Search size={22} />
            </button>
            <button onClick={toggleMenu} className="text-graphite hover:text-jet-black p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-alabaster-grey absolute w-full shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <div className="py-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-graphite/50" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-alabaster-grey rounded-lg leading-5 bg-alabaster-grey/20 placeholder-graphite/50 focus:outline-none"
                  placeholder="Search SleepUnpacked..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </div>
            </div>
            <Link href="/top-picks" className="block px-3 py-3 text-base font-medium text-graphite hover:text-jet-black hover:bg-alabaster-grey rounded-md">Top Picks</Link>
            <Link href="/mattress-reviews" className="block px-3 py-3 text-base font-medium text-graphite hover:text-jet-black hover:bg-alabaster-grey rounded-md">Reviews</Link>
            <Link href="/comparisons" className="block px-3 py-3 text-base font-medium text-graphite hover:text-jet-black hover:bg-alabaster-grey rounded-md">Comparisons</Link>
            <Link href="/sleep-guides" className="block px-3 py-3 text-base font-medium text-graphite hover:text-jet-black hover:bg-alabaster-grey rounded-md">Sleep Guides</Link>
            <button className="w-full text-left mt-4 bg-golden-bronze-100 text-jet-black px-4 py-3 rounded-lg font-medium">
              Find My Mattress
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
