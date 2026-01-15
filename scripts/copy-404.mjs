import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const index = path.join(distDir, 'index.html');
const copy = path.join(distDir, '404.html');

console.log('🔄 Creating SPA fallback (404.html)...');

try {
    if (fs.existsSync(index)) {
        fs.copyFileSync(index, copy);
        console.log('✅ Copied index.html to 404.html successfully!');
        console.log('   This fixes "Refresh" 404 errors on GitHub Pages.');
    } else {
        console.error('❌ Error: dist/index.html not found. Did the build fail?');
        process.exit(1);
    }
} catch (error) {
    console.error('❌ Failed to copy file:', error);
    process.exit(1);
}
