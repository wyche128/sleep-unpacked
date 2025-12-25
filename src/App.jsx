import React, { useState } from 'react';
import {
  Star,
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const reviews = [
    {
      id: 1,
      name: "CloudRest Hybrid Premier",
      image: "https://images.unsplash.com/photo-1505693416388-b034631ac0f3?auto=format&fit=crop&q=80&w=800",
      rating: 9.8,
      tags: ["Best Overall", "Cooling"],
      price: "$1,299",
      verdict: "The perfect balance of support and pressure relief. Ideal for 90% of sleepers.",
      pros: ["Advanced cooling layer", "Zero motion transfer", "Lifetime warranty"]
    },
    {
      id: 2,
      name: "EcoSleep Natural Latex",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
      rating: 9.5,
      tags: ["Eco-Friendly", "Firm Support"],
      price: "$1,599",
      verdict: "A sustainable choice that doesn't compromise on comfort. great for back pain.",
      pros: ["100% Organic Cotton", "Hypoallergenic", "Durable latex core"]
    },
    {
      id: 3,
      name: "DreamFoam Essential",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
      rating: 8.9,
      tags: ["Best Value", "Soft"],
      price: "$699",
      verdict: "Incredible comfort at an unbeatable price point. Best for side sleepers.",
      pros: ["High-density memory foam", "Removable cover", "100-night trial"]
    }
  ];

  const categories = [
    { title: "Side Sleepers", icon: <Moon size={24} className="text-indigo-600" /> },
    { title: "Back Pain", icon: <ShieldCheck size={24} className="text-indigo-600" /> },
    { title: "Hot Sleepers", icon: <Filter size={24} className="text-indigo-600" /> },
    { title: "Couples", icon: <Award size={24} className="text-indigo-600" /> },
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Moon className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">SleepUnpacked</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition">Top Picks</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition">Mattress Reviews</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition">Comparisons</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition">Sleep Guides</a>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Take the Quiz
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#" className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-md">Top Picks</a>
              <a href="#" className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-md">Reviews</a>
              <a href="#" className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-md">Comparisons</a>
              <button className="w-full text-left mt-4 bg-indigo-50 text-indigo-700 px-4 py-3 rounded-lg font-medium">
                Find My Mattress
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-800/50 backdrop-blur-sm border border-indigo-700 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-indigo-100 text-sm font-medium">Living Reviews™</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            The Mattress <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white">Durability Report Card.</span>
          </h1>
          <p className="text-xl text-indigo-200 max-w-2xl mb-10 leading-relaxed">
            We track how products actually hold up after 1, 3, and 5 years — so you know what still works, still feels good, and still looks new before you buy. Avoid the lemons. Buy once for the decade.
          </p>

          <div className="flex flex-col sm:flex-row w-full max-w-lg gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border-none rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xl"
                placeholder="Search for a mattress (e.g. 'Helix Midnight')"
              />
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 px-8 rounded-lg transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
              Start Quiz <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-12 flex gap-8 text-indigo-200/60">
            <div className="flex items-center gap-2"><ShieldCheck size={16} /> Living Reviews</div>
            <div className="flex items-center gap-2"><Clock size={16} /> Annual Re-Testing</div>
            <div className="flex items-center gap-2"><Award size={16} /> Long-Term Analysis</div>
          </div>
        </div>
      </div>

      {/* Category Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <a key={idx} href="#" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col items-center justify-center text-center group border border-slate-100">
              <div className="bg-indigo-50 p-3 rounded-full mb-3 group-hover:bg-indigo-100 transition">
                {cat.icon}
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-indigo-700">{cat.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Featured Reviews */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Rated Mattresses of 2024</h2>
            <p className="text-slate-600 text-lg max-w-2xl">
              Our experts have slept on, jumped on, and analyzed the market's leading beds. Here are the winners.
            </p>
          </div>
          <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1 group">
            View all 50+ Reviews <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {review.tags.map((tag, i) => (
                    <span key={i} className="bg-white/90 backdrop-blur-sm text-xs font-bold text-indigo-900 px-3 py-1 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-indigo-600 text-white w-12 h-12 flex flex-col items-center justify-center rounded-lg shadow-lg">
                  <span className="font-bold text-lg leading-none">{review.rating}</span>
                  <span className="text-[10px] opacity-80">/10</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{review.name}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{review.verdict}</p>

                <div className="space-y-2 mb-6 flex-1">
                  {review.pros.map((pro, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="mt-1 bg-green-100 p-0.5 rounded-full">
                        <Check size={12} className="text-green-600" />
                      </div>
                      <span className="text-sm text-slate-600">{pro}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Starting at</span>
                    <span className="text-lg font-bold text-slate-900">{review.price}</span>
                  </div>
                  <button className="bg-slate-900 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
                    Read Review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust/Process Section */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Test Mattresses</h2>
            <p className="text-slate-600">
              Reviewing a brand new mattress is easy. We re-test top models annually and track verified owner data to measure sagging, softening, and cooling degradation over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Simulated Decade Testing",
                desc: "We mechanically simulate 10 years of use to predict sagging and foam softening before it happens in your home.",
                icon: "🎯"
              },
              {
                title: "Performance Over Time",
                desc: "Does that cooling cover last? Does the edge support hold up? We re-test annually to hold brands accountable.",
                icon: "📊"
              },
              {
                title: "Verified Owner Data",
                desc: "We aggregate real user experiences over 1, 3, and 5 years to validate our lab findings with real-world durability.",
                icon: "🌡️"
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Teaser */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative background circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-800 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-600 rounded-full opacity-50 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Undecided?</h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                Compare up to 3 mattresses side-by-side. See how they stack up on firmness, warranty, trial period, and price.
              </p>
              <button className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition transform hover:scale-105 shadow-lg">
                Compare Mattresses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Sleep Better, Save More.</h2>
          <p className="text-slate-600 mb-8">Join 50,000+ subscribers getting the latest sleep tips and exclusive mattress coupons delivered to their inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-indigo-600 p-1.5 rounded">
                <Moon className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold text-white">SleepUnpacked</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Helping the world sleep better, one review at a time. Our team of experts provides unbiased, data-driven mattress reviews.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer">
                <span className="text-xs font-bold">fb</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer">
                <span className="text-xs font-bold">tw</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer">
                <span className="text-xs font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Mattresses</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Best Overall</a></li>
              <li><a href="#" className="hover:text-white transition">Best for Back Pain</a></li>
              <li><a href="#" className="hover:text-white transition">Best Cooling</a></li>
              <li><a href="#" className="hover:text-white transition">Best Organic</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Testing Process</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Sleep Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Coupons</a></li>
              <li><a href="#" className="hover:text-white transition">Glossary</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2024 SleepUnpacked Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Affiliate Disclosure</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
