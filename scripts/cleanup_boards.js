const fs = require('fs');

// Read the file
let content = fs.readFileSync('c:/Users/mnish/iotnext2.0/src/data/boards.js', 'utf8');

console.log('Original file size:', content.length);

// Step 1: Remove duplicate family fields (keep only the first occurrence)
content = content.replace(/("family":\s*"[^"]+",)\s*\n\s*"family":\s*"[^"]+",/g, '$1');

console.log('After removing duplicate family fields');

// Step 2: Fix the Teensy 3.2 board - remove the orphaned specs data in pins array
content = content.replace(
    /({"id":\s*"teensy_3\.2"[\s\S]*?"pins":\s*\[[\s\S]*?{"id":\s*"GND"[^}]+}\s*,)\s*"Clock"[\s\S]*?"RTC":\s*"[^"]+"\s*},\s*"pins":\s*\[/,
    '$1\n            { "id": "D0", "type": "uart", "label": "RX1", "functions": ["RX1", "PWM"], "voltage": "5V (Tol)", "isBeginnerSafe": true },\n            { "id": "D1", "type": "uart", "label": "TX1", "functions": ["TX1", "PWM"], "voltage": "5V (Tol)", "isBeginnerSafe": true },\n            { "id": "A14", "type": "adc", "label": "DAC / A14", "functions": ["DAC", "A14"], "voltage": "3.3V", "isBeginnerSafe": true }\n        ]\n    },\n    "teensy_4_x_series": {\n        "id": "teensy_4_x_series",\n        "name": "Teensy 4.1 / 4.0",\n        "manufacturer": "PJRC",\n        "family": "Teensy",\n        "datasheet": "https://www.pjrc.com/teensy/IMXRT1060RM_rev3.pdf",\n        "description": "The fastest microcontrollers for hobbyists. Clocking at 600MHz, the Teensy 4.1 (with Ethernet) and 4.0 provide massive computational power in a tiny form factor.",\n        "category": "Advanced",\n        "specs": {\n            "Architecture": "ARM Cortex-M7",\n            "MCU": "i.MX RT1062",\n            "Clock": "600 MHz",\n            "Flash": "8 MB (4.1) / 2 MB (4.0)",\n            "RAM": "1024 KB",\n            "FPU": "64-bit Double Precision",\n            "Ethernet": "10/100 Mbps (Teensy 4.1)",\n            "RTC": "Internal Battery Support"\n        },\n        "pins": ['
);

console.log('After fixing Teensy boards');

// Step 3: Fix Particle Photon - remove bad indentation and duplicate fields
content = content.replace(
    /"particle_photon":\s*{\s*"id":\s*"particle_photon",\s*"name":\s*"Particle Photon",\s*"family":\s*"Particle",\s*"family":\s*"Particle",\s*"description"/,
    '"particle_photon": {\n    "id": "particle_photon",\n        "name": "Particle Photon",\n        "family": "Particle",\n        "description"'
);

// Step 4: Fix Particle Argon - remove extra family fields and bad indentation  
content = content.replace(
    /"particle_argon":\s*{\s*"id":\s*"particle_argon",\s*"name":\s*"Particle Argon",\s*"family":\s*"Particle",\s*"manufacturer"[^}]*"family":\s*"Particle",\s*"family":\s*"Particle",/,
    '"particle_argon": {\n    "id": "particle_argon",\n        "name": "Particle Argon",\n            "family": "Particle",\n                "manufacturer": "Particle Industries",'
);

// Step 5: Fix Arduino Portenta - remove extra family fields
content = content.replace(
    /"arduino_portenta_h7":\s*{\s*"id":\s*"arduino_portenta_h7",\s*"name":\s*"Arduino Portenta H7",\s*"family":\s*"Arduino",\s*"manufacturer"[^}]*"family":\s*"Arduino",\s*"family":\s*"Arduino",/,
    '"arduino_portenta_h7": {\n    "id": "arduino_portenta_h7",\n        "name": "Arduino Portenta H7",\n            "family": "Arduino",\n                "manufacturer": "Arduino",'
);

// Step 6: Fix Jetson Nano - remove extra family fields
content = content.replace(
    /"jetson_nano_edge_ai":\s*{\s*"id":\s*"jetson_nano_edge_ai",\s*"name":\s*"NVIDIA Jetson Nano",\s*"family":\s*"Linux SBC",\s*"manufacturer"[^}]*"family":\s*"Linux SBC",\s*"family":\s*"Linux SBC",/,
    '"jetson_nano_edge_ai": {\n    "id": "jetson_nano_edge_ai",\n        "name": "NVIDIA Jetson Nano",\n            "family": "Linux SBC",\n                "manufacturer": "NVIDIA",'
);

// Write the cleaned content
fs.writeFileSync('c:/Users/mnish/iotnext2.0/src/data/boards.js', content, 'utf8');

console.log('\n✅ File cleaned successfully!');
console.log('New file size:', content.length);
