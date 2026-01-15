import React from 'react';
import { Inter, Merriweather } from 'next/font/google';
import Script from 'next/script';
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
    verification: {
        other: {
            'impact-site-verification': 'e6b2e0e9-6e35-4ed7-81d8-d42760801d26',
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={`${inter.variable} ${merriweather.variable} font-sans text-graphite bg-white min-h-screen`}>
                {/* Google Tag Manager - Script with beforeInteractive loads before page hydration */}
                <Script
                    id="google-tag-manager"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-N2SQ4TKF');`,
                    }}
                />
                {/* End Google Tag Manager */}

                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-N2SQ4TKF"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}


                <ScrollToTop />
                {children}
                <Footer />
            </body>
        </html>
    );
}

