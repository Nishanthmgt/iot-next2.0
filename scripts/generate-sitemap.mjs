import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { projects } from '../src/data/projects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://iotnext.store';
const OUTPUT_DIR = path.join(__dirname, '../public');

// Slug generation function
function generateSlug(title, tech = []) {
    // Extract platform from tech array
    const platform = tech.find(t =>
        t.toLowerCase().includes('esp32') ||
        t.toLowerCase().includes('arduino') ||
        t.toLowerCase().includes('raspberry')
    ) || '';

    const platformSlug = platform.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .split('-')[0]; // Get first word (esp32, arduino, raspberry)

    // Clean title
    let slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')         // Spaces to hyphens
        .replace(/-+/g, '-')          // Multiple hyphens to single
        .trim();

    // Limit to 5 words max
    const words = slug.split('-').filter(w => w.length > 0);
    slug = words.slice(0, 5).join('-');

    // Prepend platform if available
    if (platformSlug && !slug.startsWith(platformSlug)) {
        slug = `${platformSlug}-${slug}`;
    }

    return slug;
}

async function generateSitemaps() {
    console.log('🚀 Starting Enterprise Sitemap Generation...\n');

    const today = new Date().toISOString().split('T')[0];

    // Use imported projects array directly
    const projectData = [];

    projects.forEach(project => {
        if (!project.id || !project.title) return;

        const tech = Array.isArray(project.tech) ? project.tech : [];
        const slug = generateSlug(project.title, tech);

        projectData.push({
            id: project.id.toString(),
            title: project.title,
            slug,
            tech
        });
    });

    console.log(`📊 Found ${projectData.length} projects`);
    console.log(`📝 Sample slugs:`);
    projectData.slice(0, 5).forEach(p => {
        console.log(`   ${p.id}: ${p.slug}`);
    });
    console.log('');

    // Check for duplicate slugs
    const slugCounts = {};
    projectData.forEach(p => {
        slugCounts[p.slug] = (slugCounts[p.slug] || 0) + 1;
    });

    const duplicates = Object.entries(slugCounts).filter(([_, count]) => count > 1);
    if (duplicates.length > 0) {
        console.warn(`⚠️  Found ${duplicates.length} duplicate slugs - appending IDs`);
        projectData.forEach(p => {
            if (slugCounts[p.slug] > 1) {
                p.slug = `${p.slug}-${p.id}`;
            }
        });
    }

    // 1. Generate sitemap-pages.xml
    const staticPages = [
        { url: '/', priority: '1.0', changefreq: 'daily' },
        { url: '/projects', priority: '0.9', changefreq: 'daily' },
        { url: '/roadmap', priority: '0.8', changefreq: 'weekly' },
        { url: '/sensors', priority: '0.8', changefreq: 'weekly' },
        { url: '/pinout', priority: '0.9', changefreq: 'weekly' },
        { url: '/reviews', priority: '0.7', changefreq: 'weekly' },
        { url: '/mastery', priority: '0.8', changefreq: 'weekly' },
        { url: '/c-course', priority: '0.7', changefreq: 'monthly' },
        { url: '/simulator', priority: '0.7', changefreq: 'monthly' },
        { url: '/qa', priority: '0.6', changefreq: 'monthly' },
        { url: '/community', priority: '0.6', changefreq: 'weekly' },
        { url: '/blog', priority: '0.6', changefreq: 'weekly' },
        { url: '/about', priority: '0.5', changefreq: 'yearly' },
        // Board Families
        { url: '/pinout/family/Arduino', priority: '0.85', changefreq: 'weekly' },
        { url: '/pinout/family/ESP32', priority: '0.85', changefreq: 'weekly' },
        { url: '/pinout/family/STM32', priority: '0.8', changefreq: 'weekly' },
        { url: '/pinout/family/RP2040', priority: '0.8', changefreq: 'weekly' },
        { url: '/pinout/family/Nordic', priority: '0.8', changefreq: 'weekly' },
        { url: '/pinout/family/Teensy', priority: '0.7', changefreq: 'weekly' },
        { url: '/pinout/family/ATtiny', priority: '0.7', changefreq: 'weekly' },
    ];

    let pagesSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    staticPages.forEach(page => {
        pagesSitemap += `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    });

    pagesSitemap += `</urlset>`;

    // 2. Generate sitemap-projects.xml
    let projectsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    projectData.forEach(project => {
        projectsSitemap += `  <url>
    <loc>${DOMAIN}/project/${project.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    });

    projectsSitemap += `</urlset>`;

    // 3. Generate sitemap.xml (index)
    const indexSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap-pages.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-projects.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

    // Write files
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), indexSitemap);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-pages.xml'), pagesSitemap);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-projects.xml'), projectsSitemap);

    // Generate ID -> Slug mapping for routing and canonicals
    const slugMapping = {};
    projectData.forEach(p => {
        slugMapping[p.id] = p.slug;
    });

    fs.writeFileSync(
        path.join(__dirname, '../src/data/project-ids.json'),
        JSON.stringify(slugMapping, null, 2)
    );

    console.log('✅ Sitemap Index generated at public/sitemap.xml');
    console.log('✅ Pages sitemap generated at public/sitemap-pages.xml');
    console.log(`✅ Projects sitemap generated at public/sitemap-projects.xml (${projectData.length} URLs)`);
    console.log('✅ Slug mapping generated at src/data/project-slugs.json\n');

    console.log('📈 SEO Stats:');
    console.log(`   Total URLs: ${staticPages.length + projectData.length}`);
    console.log(`   Static Pages: ${staticPages.length}`);
    console.log(`   Project Pages: ${projectData.length}`);
    console.log(`   Sitemap Files: 3`);
}

generateSitemaps().catch(err => {
    console.error('❌ Error generating sitemaps:', err);
    process.exit(1);
});
