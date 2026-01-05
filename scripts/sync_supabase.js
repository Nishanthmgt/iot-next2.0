
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

// Manually parse .env since we want a standalone script
const envContent = fs.readFileSync('.env', 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
        env[key.trim()] = valueParts.join('=').trim();
    }
});

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseKey = env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function sync() {
    try {
        const projectsData = JSON.parse(fs.readFileSync('src/data/projects.json', 'utf8'));
        console.log(`Loaded ${projectsData.length} projects from local JSON.`);

        // 1. Get existing columns from Supabase to avoid errors
        const { data: sampleData } = await supabase.from('projects').select('*').limit(1);
        const existingColumns = Object.keys(sampleData[0] || {
            title: '', level: '', description: '', category: '', estimatedTime: '',
            tech: '', concept: '', working_principle: '', code: '', usage: '',
            advantages: '', disadvantages: '', status: '', slug: '', pin_config: ''
        });

        console.log('Detected Supabase Columns:', existingColumns);

        // 2. Clean up projects to ONLY include existing columns
        const projectsToSync = projectsData.map(p => {
            const syncedProject = {};
            const item = {
                ...p,
                slug: p.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
                tech: Array.isArray(p.tech) ? p.tech : [p.tech]
            };

            existingColumns.forEach(col => {
                if (col !== 'id' && col !== 'created_at' && col !== 'updated_at') {
                    syncedProject[col] = item[col] || null;
                }
            });
            return syncedProject;
        });

        // 3. Clear existing projects first to ensure "Overhaul"
        console.log('Purging existing repository in Supabase...');
        const { error: purgeError } = await supabase.from('projects').delete().not('id', 'is', 'null');
        if (purgeError) console.warn('Purge failed (Policy?):', purgeError.message);

        console.log('Attempting to sync with Supabase (Batch Insert)...');

        // Chunking to avoid payload size limits
        const chunkSize = 10;
        for (let i = 0; i < projectsToSync.length; i += chunkSize) {
            const chunk = projectsToSync.slice(i, i + chunkSize);
            console.log(`Syncing chunk ${Math.floor(i / chunkSize) + 1} of ${Math.ceil(projectsToSync.length / chunkSize)}...`);

            const { error } = await supabase
                .from('projects')
                .insert(chunk);

            if (error) {
                console.error(`Error in chunk ${i / chunkSize + 1}:`, error.message);
            }
        }

        console.log('Sync process completed!');
        if (!existingColumns.includes('circuit_diagram') || !existingColumns.includes('components')) {
            console.log('\n--- IMPORTANT ---');
            console.log('Some columns are missing in Supabase. Run this SQL in your dashboard:');
            console.log('ALTER TABLE projects ADD COLUMN IF NOT EXISTS circuit_diagram TEXT;');
            console.log('ALTER TABLE projects ADD COLUMN IF NOT EXISTS components TEXT;');
            console.log('-----------------\n');
        }
    } catch (err) {
        console.error('Sync failed:', err.message);
    }
}

sync();
