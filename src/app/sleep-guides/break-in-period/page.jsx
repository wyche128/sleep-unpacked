import React from 'react';
import { SITE_URL, generateArticleSchema } from '../../../utils/schema';
import BreakInPeriodGuideClient from './BreakInPeriodGuideClient';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'Mattress Break-In Period: Why Your New Bed Feels Like Concrete | SleepUnpacked',
    description:
        'A practical guide to the mattress break-in period: why new beds feel too firm, how long adaptation takes, and safe ways to speed comfort using movement, temperature, rotation, and foundation checks.',
};

export default function BreakInPeriodPage() {
    const articleJsonLd = generateArticleSchema({
        title: 'Mattress Break-In Period: Why Your New Bed Feels Like Concrete (and How to Fix It)',
        description:
            'A practical guide for anyone whose new mattress feels uncomfortably firm. Learn what the break-in period is, how long it typically takes, and the safest ways to speed adaptation using movement, temperature, rotation, and foundation checks.',
        url: 'https://sleepunpacked.com/sleep-guides/break-in-period',
        publishedAt: '2026-01-10',
        modifiedAt: '2026-01-10',
        alternativeHeadline: 'Why Your New Mattress Feels Like Concrete',
        name: 'mattress break-in period',
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
        articleBody:
            'This guide explains why a brand-new mattress can feel unusually firm at first and how the feel typically changes as materials flex and your body adapts. It frames the break-in period as a predictable regret phase, then provides practical, low-risk ways to speed comfort: increasing surface flex through controlled movement, rotating the mattress early, and using room temperature to influence foam feel. It also highlights the foundation\'s role-old box springs, wide slat gaps, or overly flexible support can distort performance-and offers simple checks to confirm your base is appropriate. The goal is to help readers distinguish normal adaptation from true fit problems so they make better decisions within the sleep-trial window.',
    });

    return (
        <>
            <JsonLd data={articleJsonLd} />
            <BreakInPeriodGuideClient />
        </>
    );
}
