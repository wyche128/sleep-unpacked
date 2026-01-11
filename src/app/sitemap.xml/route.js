import { promises as fs } from 'fs';
import path from 'path';

async function getPageRoutes(dir, baseUrl = '') {
    let routes = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            const subRoutes = await getPageRoutes(fullPath, `${baseUrl}/${entry.name}`);
            routes = routes.concat(subRoutes);
        } else if (entry.name === 'page.jsx' || entry.name === 'page.js') {
            const routeUrl = baseUrl === '' ? '/' : baseUrl;
            routes.push(routeUrl);
        }
    }

    return routes;
}

function buildSitemapXml(urls) {
    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...urls,
        '</urlset>',
    ].join('\n');
}

export async function GET() {
    const baseUrl = 'https://sleepunpacked.com';
    const appDir = path.join(process.cwd(), 'src', 'app');
    const routes = await getPageRoutes(appDir);
    const date = new Date().toISOString();

    const urls = routes.map((route) => {
        const priority = route === '/' ? '1.0' : '0.8';
        return [
            '  <url>',
            `    <loc>${baseUrl}${route}</loc>`,
            `    <lastmod>${date}</lastmod>`,
            '    <changefreq>weekly</changefreq>',
            `    <priority>${priority}</priority>`,
            '  </url>',
        ].join('\n');
    });

    const xml = buildSitemapXml(urls);

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
