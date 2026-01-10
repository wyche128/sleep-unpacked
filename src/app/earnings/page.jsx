import React from 'react';
import Header from '../../components/Header';

export const metadata = {
    title: 'Affiliate Disclosure | Sleep Unpacked',
    description: 'Affiliate Disclosure for Sleep Unpacked.',
};

export default function EarningsPage() {
    return (
        <>
            <Header />
            <main className="bg-white min-h-screen pt-32 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-jet-black mb-8">Affiliate Disclosure</h1>

                    <div className="prose prose-lg text-jet-black-800 max-w-none space-y-6">
                        <p className="italic text-sm text-jet-black-600">This policy is valid from January 1, 2026.</p>

                        <p>
                            This website is a collaborative work written by a group of individuals. This blog accepts forms of cash advertising, sponsorship, paid insertions or other forms of compensation.
                        </p>
                        <p>
                            The compensation received may influence the advertising content, topics or posts made in this site. That content, advertising space or post may not always be identified on the page itself as paid or sponsored content.
                        </p>
                        <p>
                            The owner(s) of this site is compensated to provide opinion on products, services, websites and various other topics. Even though the owner of this site receive(s) compensation for posts or advertisements, we always give our honest opinions, findings, beliefs, or experiences on those topics or products. The views and opinions expressed on this site are purely the content creators' own. Any product claim, statistic, quote or other representation about a product or service should be verified with the manufacturer, provider or party in question.
                        </p>
                        <p>
                            This site does not contain any content which might present a conflict of interest.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
