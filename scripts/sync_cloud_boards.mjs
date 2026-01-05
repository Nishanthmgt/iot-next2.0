
import fs from 'fs';
import { createClient } from '@supabase/supabase-js';
import { BOARDS } from '../src/data/boards.js';

// Parse .env manually
const envContent = fs.readFileSync('.env', 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
        env[key.trim()] = valueParts.join('=').trim();
    }
});

const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY);

async function syncBoards() {
    console.log('--- STARTING BOARD SYNC ---');

    // 1. Purge existing boards to remove duplicates and legacy data
    console.log('Purging existing records from "boards" table...');
    const { error: deleteError } = await supabase
        .from('boards')
        .delete()
        .neq('name', '___NON_EXISTENT_NAME___'); // Delete all rows

    if (deleteError) {
        console.error('Delete Error:', deleteError.message);
        return;
    }

    // 2. Prepare payloads based on current detected schema (Name, Description, Category, Pins)
    const boardPayloads = Object.values(BOARDS).map(b => ({
        // id: b.id, // Omit if ID column is a UUID and doesn't accept strings
        name: b.name,
        description: b.description + (b.manufacturer ? `\n\nManufacturer: ${b.manufacturer}` : '') + (b.datasheet ? `\nDatasheet: ${b.datasheet}` : ''),
        category: b.category || 'Beginner',
        pins: b.pins || []
    }));

    console.log(`Uploading ${boardPayloads.length} boards to Supabase...`);

    // 3. Insert fresh data
    const { error: insertError } = await supabase
        .from('boards')
        .insert(boardPayloads);

    if (insertError) {
        console.error('Insert Error:', insertError.message);
        console.error('Details:', insertError.details);
        console.error('Hint:', insertError.hint);
    } else {
        console.log('--- SYNC COMPLETED SUCCESSFULLY ---');
        console.log('All boards are now deduplicated in the database.');
    }
}

syncBoards();
