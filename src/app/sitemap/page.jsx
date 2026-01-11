import Link from 'next/link';
import Header from '../../components/Header';

export const metadata = {
    title: 'Sitemap | Sleep Unpacked',
    description: 'Browse every review, guide, comparison, and FAQ on Sleep Unpacked.',
};

const sitemapSections = [
    {
        title: 'Mattress Reviews',
        description: 'Living Reviews focused on long-term durability.',
        links: [
            { label: 'Mattress Reviews', href: '/mattress-reviews' },
            { label: '5 Truths: WinkBed EcoCloud', href: '/mattress-reviews/5-truths-winkbed-ecocloud' },
            { label: '5 Truths: WinkBed Original', href: '/mattress-reviews/5-truths-winkbed-original' },
            { label: 'Brooklyn Bedding Aurora Luxe', href: '/mattress-reviews/brooklyn-bedding-aurora-luxe' },
            { label: 'DreamCloud Premier Rest', href: '/mattress-reviews/dreamcloud-premier-rest' },
            { label: 'Helix Plus', href: '/mattress-reviews/helix-plus' },
            { label: 'Leesa Legend', href: '/mattress-reviews/leesa-legend' },
            { label: 'Leesa Original', href: '/mattress-reviews/leesa-original' },
            { label: 'Nectar Classic', href: '/mattress-reviews/nectar-classic' },
            { label: 'Nectar Premier', href: '/mattress-reviews/nectar-premier' },
            { label: 'Purple Original', href: '/mattress-reviews/purple-original' },
            { label: 'WinkBed EcoCloud', href: '/mattress-reviews/winkbed-ecocloud' },
            { label: 'WinkBed GravityLux', href: '/mattress-reviews/winkbed-gravitylux' },
            { label: 'WinkBed Original', href: '/mattress-reviews/winkbed-original' },
        ],
    },
    {
        title: 'Sleep Guides',
        description: 'Research-backed guidance on sleep and mattress care.',
        links: [
            { label: 'Sleep Guides', href: '/sleep-guides' },
            { label: 'Break-In Period for a Mattress', href: '/sleep-guides/break-in-period' },
            { label: 'Duvet vs Comforter', href: '/sleep-guides/duvet-vs-comforter' },
            { label: 'Five Surprising Fixes for Snoring', href: '/sleep-guides/five-surprising-fixes-snoring' },
            { label: 'Healthiest Sleep Position', href: '/sleep-guides/healthiest-sleep-position' },
            { label: 'How to Choose a Mattress', href: '/sleep-guides/how-to-choose-a-mattress' },
            { label: 'How to Clean a Mattress', href: '/sleep-guides/how-to-clean-mattress' },
            { label: 'Insomnia: Falling Asleep Faster', href: '/sleep-guides/insomnia-falling-asleep' },
            { label: 'Mattress Firmness Guide', href: '/sleep-guides/mattress-firmness-guide' },
            { label: 'Mattress Lifespan Guide', href: '/sleep-guides/mattress-lifespan-guide' },
            { label: 'Sleep Cycles and Dreaming', href: '/sleep-guides/sleep-cycles-dreaming' },
            { label: 'Sleep With Pets', href: '/sleep-guides/sleep-with-pets' },
            { label: 'Sleep-Stress Vicious Cycle', href: '/sleep-guides/sleep-stress' },
            { label: 'Sleeping Naked', href: '/sleep-guides/sleeping-naked' },
            { label: 'State of Sleep 2025', href: '/sleep-guides/state-of-sleep' },
            { label: 'What Causes Snoring', href: '/sleep-guides/what-causes-snoring' },
            { label: 'Why Sleep Matters', href: '/sleep-guides/why-sleep-matters' },
            { label: 'Why Your Bedroom Color Matters', href: '/sleep-guides/colors-that-help-sleep' },
            { label: 'Seven Bed Size Secrets', href: '/sleep-guides/seven-bed-size-secrets' },
        ],
    },
    {
        title: 'FAQs',
        description: 'Quick answers for durability, materials, and policies.',
        links: [
            { label: 'FAQs', href: '/faqs' },
            { label: 'Can I Flip My Mattress?', href: '/faqs/can-i-flip-my-mattress' },
            { label: 'Do "Lifetime" Warranties Actually Last Forever?', href: '/faqs/lifetime-warranties-explained' },
            { label: 'Do I Need a Box Spring?', href: '/faqs/do-i-need-a-box-spring' },
            { label: 'Do You Need to Rotate a Mattress?', href: '/faqs/do-you-need-to-rotate-mattress' },
            { label: 'Fiberglass Free Mattresses', href: '/faqs/fiberglass-free' },
            { label: 'How Long Is a Free Trial?', href: '/faqs/how-long-free-trial' },
            { label: 'How Long Can a Mattress Stay in a Box?', href: '/faqs/how-long-mattress-in-box' },
            { label: 'How to Break In a Mattress', href: '/faqs/how-to-break-in-mattress' },
            { label: 'How to File a Successful Warranty Claim', href: '/faqs/how-to-file-warranty-claim' },
            { label: 'Mattress Disposal Guide', href: '/faqs/mattress-disposal-guide' },
            { label: 'Memory Foam: What Is Different?', href: '/faqs/memory-foam-different' },
            { label: 'Memory Foam Toxicity', href: '/faqs/memory-foam-toxic' },
            { label: 'Memory Foam vs Latex', href: '/faqs/memory-foam-vs-latex' },
            { label: '1.5 Inch Sagging Threshold', href: '/faqs/one-point-five-inch-threshold' },
        ],
    },
    {
        title: 'Comparisons',
        description: 'Side-by-side durability and performance matchups.',
        links: [
            { label: 'Mattress Comparisons', href: '/comparisons' },
            { label: 'Casper vs Purple', href: '/comparisons/casper-vs-purple' },
        ],
    },
    {
        title: 'Top Picks',
        description: 'Best-of lists anchored in long-term data.',
        links: [
            { label: 'Top Picks', href: '/top-picks' },
            { label: 'Best Cooling Mattress', href: '/top-picks/best-cooling-mattress' },
            { label: 'Best Latex Mattress', href: '/top-picks/best-latex-mattress' },
            { label: 'Best Luxury Mattress', href: '/top-picks/best-luxury-mattress' },
            { label: 'Best Mattress for Back Pain', href: '/top-picks/best-mattress-for-back-pain' },
            { label: 'Best Mattress for Heavy Sleepers', href: '/top-picks/best-mattress-for-heavy-sleepers' },
            { label: 'Best Mattress for Side Sleepers', href: '/top-picks/best-mattress-for-side-sleepers' },
            { label: 'Best Organic Mattress', href: '/top-picks/best-organic-mattress' },
            { label: 'Best Overall Mattress', href: '/top-picks/best-overall-mattress' },
            { label: 'Best Value Mattress', href: '/top-picks/best-value-mattress' },
        ],
    },
    {
        title: 'Company, Policies, & Core',
        description: 'Transparency, operating standards, and core navigation.',
        links: [
            { label: 'Home', href: '/' },
            { label: 'About Sleep Unpacked', href: '/about' },
            { label: 'Search', href: '/search' },
            { label: 'Affiliate Disclosure', href: '/earnings' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms-of-service' },
            { label: 'DMCA Policy', href: '/dmca-policy' },
        ],
    },
];

const SitemapPage = () => {
    return (
        <div className="min-h-screen bg-jasmine-50 text-slate-700">
            <Header />
            <section className="relative overflow-hidden bg-night-bordeaux-950 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(204,164,59,0.18),_transparent_55%)]" />
                <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-20">
                    <p className="text-golden-bronze-500 text-xs uppercase tracking-[0.3em] font-semibold mb-4">
                        Sleep Unpacked
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
                        Sitemap
                    </h1>
                    <p className="text-jasmine-50/90 max-w-2xl">
                        Explore every Living Review, guide, and FAQ from one place.
                    </p>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sitemapSections.map((section) => (
                        <section
                            key={section.title}
                            className="bg-white border border-golden-earth-100 rounded-2xl shadow-sm p-6 sm:p-8"
                        >
                            <div className="mb-6">
                                <h2 className="text-night-bordeaux-950 text-2xl font-semibold mb-2">
                                    {section.title}
                                </h2>
                                <p className="text-sm text-slate-700">
                                    {section.description}
                                </p>
                            </div>
                            <ul className="space-y-3 text-sm">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-700 hover:text-golden-bronze-500 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SitemapPage;
