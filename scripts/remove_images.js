const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/boards.js');

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to remove "image": "URL", lines
    // Handles optional comma and various spacing
    const regex = /^\s*"image":\s*".*",?\r?\n/gm;

    // Check match count
    const matches = content.match(regex);
    console.log(`Found ${matches ? matches.length : 0} image entries to remove.`);

    const newContent = content.replace(regex, '');

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Successfully removed image properties from boards.js');

} catch (err) {
    console.error('Error processing file:', err);
    process.exit(1);
}
