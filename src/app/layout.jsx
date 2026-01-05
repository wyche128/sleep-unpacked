import React from 'react';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const merriweather = Merriweather({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin'],
    variable: '--font-serif',
});

export const metadata = {
    title: 'SleepUnpacked | The Mattress Durability Authority',
    description: 'We track how products actually hold up after 1, 3, and 5 years. Avoid the lemons. Buy once for the decade.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${merriweather.variable} font-sans text-graphite bg-white min-h-screen`}>
                <ScrollToTop />
                {children}
                <Footer />
            </body>
        </html>
    );
}
