export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/api/'], // Disallowing private and api routes as a best practice
        },
        sitemap: 'https://sleepunpacked.com/sitemap.xml',
    }
}
