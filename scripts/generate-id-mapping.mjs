import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SLUGS_FILE = path.join(__dirname, '../src/data/project-slugs.json');
const OUTPUT_FILE = path.join(__dirname, '../src/data/project-ids.json');

// Read slug → ID mapping
const slugToId = JSON.parse(fs.readFileSync(SLUGS_FILE, 'utf-8'));

// Create reverse mapping: ID → slug
const idToSlug = {};
Object.entries(slugToId).forEach(([slug, id]) => {
    idToSlug[id] = slug;
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(idToSlug, null, 2));

console.log(`✅ Generated reverse mapping at ${OUTPUT_FILE}`);
console.log(`   Total mappings: ${Object.keys(idToSlug).length}`);
