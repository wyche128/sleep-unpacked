import React, { useState } from 'react';
import { Moon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-alabaster-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-jet-black p-2 rounded-lg">
              <Moon className="text-golden-bronze" size={20} />
            </div>
            <span className="text-2xl font-bold text-jet-black tracking-tight">SleepUnpacked</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/top-picks" className="text-graphite hover:text-jet-black font-medium transition">Top Picks</Link>
            <Link to="/mattress-reviews" className="text-graphite hover:text-jet-black font-medium transition">Mattress Reviews</Link>
            <Link to="/comparisons" className="text-graphite hover:text-jet-black font-medium transition">Comparisons</Link>
            <Link to="/sleep-guides" className="text-graphite hover:text-jet-black font-medium transition">Sleep Guides</Link>
            <button className="bg-jet-black text-white px-5 py-2 rounded-full font-medium hover:bg-jet-black-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Take the Quiz
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-graphite hover:text-jet-black p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-alabaster-grey absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/top-picks" className="block px-3 py-3 text-base font-medium text-graphite hover:text-jet-black hover:bg-alabaster-grey rounded-md">Top Picks</Link>
            <Link to="/mattress-reviews" className="block px-3 py-3 text-base font-medium text-graphite hover:text-jet-black hover:bg-alabaster-grey rounded-md">Reviews</Link>
            <Link to="/comparisons" className="block px-3 py-3 text-base font-medium text-graphite hover:text-jet-black hover:bg-alabaster-grey rounded-md">Comparisons</Link>
            <Link to="/sleep-guides" className="block px-3 py-3 text-base font-medium text-graphite hover:text-jet-black hover:bg-alabaster-grey rounded-md">Sleep Guides</Link>
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
