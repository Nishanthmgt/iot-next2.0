
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const envContent = fs.readFileSync('.env', 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
        env[key.trim()] = valueParts.join('=').trim();
    }
});

const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY);

async function testUpsert() {
    console.log("Testing UPSERT with onConflict: 'title'...");

    // Minimal valid project payload
    const payload = {
        title: "Test Debug Project " + Date.now(),
        description: "Debug description",
        level: "Beginner",
        status: "Draft"
    };

    const { data, error } = await supabase
        .from('projects')
        .upsert([payload], { onConflict: 'title' });

    if (error) {
        console.error("DEBUG ERROR:", error.message);
        console.error("Details:", error.details);
        console.error("Hint:", error.hint);
    } else {
        console.log("DEBUG SUCCESS: Upsert worked!");
    }
}

testUpsert();
