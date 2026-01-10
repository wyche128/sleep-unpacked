import { promises as fs } from 'fs';
import path from 'path';

async function getPageRoutes(dir, baseUrl = '') {
    let routes = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Recursively scan subdirectories
            const subRoutes = await getPageRoutes(fullPath, `${baseUrl}/${entry.name}`);
            routes = routes.concat(subRoutes);
        } else if (entry.name === 'page.jsx' || entry.name === 'page.js') {
            // Found a page
            // Handle the root page specially
            const routeUrl = baseUrl === '' ? '/' : baseUrl;
            routes.push(routeUrl);
        }
    }

    return routes;
}

export default async function sitemap() {
    const baseUrl = 'https://sleepunpacked.com';
    const appDir = path.join(process.cwd(), 'src', 'app');

    const routes = await getPageRoutes(appDir);

    // Get current date for lastModified
    const date = new Date().toISOString();

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: date,
        changeFrequency: 'weekly',
        priority: route === '/' ? 1.0 : 0.8,
    }));
}
