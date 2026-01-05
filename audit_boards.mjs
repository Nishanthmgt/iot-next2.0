
import { BOARDS } from './src/data/boards.js';

const names = new Set();
const duplicates = [];
const malformed = [];

Object.entries(BOARDS).forEach(([id, b]) => {
    if (typeof b !== 'object' || b === null) {
        malformed.push(`Key "${id}" has non-object value: ${b}`);
        return;
    }
    if (!b.name) {
        malformed.push(`Key "${id}" is missing a "name" property.`);
    } else {
        if (names.has(b.name)) {
            duplicates.push(`Duplicate Name: "${b.name}" (Key: ${id})`);
        }
        names.add(b.name);
    }
});

console.log('--- AUDIT RESULTS ---');
if (malformed.length > 0) {
    console.log('MALFORMED ENTRIES:');
    malformed.forEach(m => console.log('  -', m));
} else {
    console.log('No malformed entries found.');
}

if (duplicates.length > 0) {
    console.log('DUPLICATE NAMES:');
    duplicates.forEach(d => console.log('  -', d));
} else {
    console.log('No duplicate names found.');
}
console.log('Total Boards:', Object.keys(BOARDS).length);
