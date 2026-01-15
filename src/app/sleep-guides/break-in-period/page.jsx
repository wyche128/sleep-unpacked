import React from 'react';
import Script from 'next/script';
import { SITE_URL } from '../../../utils/schema';
import BreakInPeriodGuideClient from './BreakInPeriodGuideClient';

export const metadata = {
    title: 'Mattress Break-In Period: Why Your New Bed Feels Like Concrete | SleepUnpacked',
    description:
        'A practical guide to the mattress break-in period: why new beds feel too firm, how long adaptation takes, and safe ways to speed comfort using movement, temperature, rotation, and foundation checks.',
};

export default function BreakInPeriodPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': 'https://sleepunpacked.com/sleep-guides/break-in-period/#article',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://sleepunpacked.com/sleep-guides/break-in-period/',
        },
        headline: 'Mattress Break-In Period: Why Your New Bed Feels Like Concrete (and How to Fix It)',
        alternativeHeadline: 'Why Your New Mattress Feels Like Concrete',
        name: 'mattress break-in period',
        description:
            'A practical guide for anyone whose new mattress feels uncomfortably firm. Learn what the break-in period is, how long it typically takes, and the safest ways to speed adaptation using movement, temperature, rotation, and foundation checks.',
        keywords: [
            'mattress break-in period',
            'new mattress too firm',
            'why new mattress feels hard',
            'how long to break in a mattress',
            'memory foam break in',
            'firmness change over time',
            'temperature effect on foam',
            'mattress foundation support',
            'box spring vs platform',
            'slats spacing for foam mattress',
            'mattress rotation schedule',
            'sleep trial period',
        ],
        citation: [
            'https://en.wikipedia.org/wiki/Mattress',
            'https://en.wikipedia.org/wiki/Memory_foam',
            'https://en.wikipedia.org/wiki/Polyurethane',
            'https://www.sleepfoundation.org/mattress-information/how-to-break-in-a-mattress',
        ],
        about: [
            {
                '@type': 'Thing',
                name: 'Mattress',
                sameAs: ['https://en.wikipedia.org/wiki/Mattress'],
            },
            {
                '@type': 'Thing',
                name: 'Break-in period',
                sameAs: ['https://en.wikipedia.org/wiki/Break-in_(mechanical_run-in)'],
            },
            {
                '@type': 'Thing',
                name: 'Memory foam',
                sameAs: ['https://en.wikipedia.org/wiki/Memory_foam'],
            },
        ],
        mentions: [
            {
                '@type': 'Thing',
                name: 'Mattress firmness',
                sameAs: ['https://en.wikipedia.org/wiki/Mattress#Mattress_firmness'],
            },
            {
                '@type': 'Thing',
                name: 'Polyurethane foam',
                sameAs: ['https://en.wikipedia.org/wiki/Polyurethane'],
            },
            { '@type': 'Thing', name: 'Temperature' },
            { '@type': 'Thing', name: 'Mattress foundation' },
            { '@type': 'Thing', name: 'Box spring' },
            { '@type': 'Thing', name: 'Platform bed' },
            { '@type': 'Thing', name: 'Sleep trial' },
        ],
        articleSection: 'Sleep Guides',
        datePublished: '2026-01-10',
        dateModified: '2026-01-10',
        author: {
            '@type': 'Person',
            name: 'SleepUnpacked Team',
        },
        publisher: {
            '@type': 'Organization',
            name: 'SleepUnpacked',
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/logo.png`,
            },
        },
        articleBody:
            'This guide explains why a brand-new mattress can feel unusually firm at first and how the feel typically changes as materials flex and your body adapts. It frames the break-in period as a predictable regret phase, then provides practical, low-risk ways to speed comfort: increasing surface flex through controlled movement, rotating the mattress early, and using room temperature to influence foam feel. It also highlights the foundation's role-old box springs, wide slat gaps, or overly flexible support can distort performance-and offers simple checks to confirm your base is appropriate. The goal is to help readers distinguish normal adaptation from true fit problems so they make better decisions within the sleep-trial window.',
    };

    return (
        <>
            <Script
                id="ld-article-break-in-period"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
<BreakInPeriodGuideClient />
        </>
    );
}
