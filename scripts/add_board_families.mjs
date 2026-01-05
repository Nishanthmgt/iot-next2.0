// Script to add family field to remaining boards in boards.js
import fs from 'fs';

const boardFamilies = {
    // Teensy
    'teensy_4_x_series': 'Teensy',

    // Particle
    'particle_photon': 'Particle',
    'particle_argon': 'Particle',
    'particle_boron_lte': 'Particle',

    // NXP
    'nxp_lpc1768': 'NXP',
    'nxp_lpc2148': 'NXP',
    'nxp_i.mx_rt1060': 'NXP',
    'nxp_i.mx_rt1170': 'NXP',

    // Nordic
    'nordic_nrf52832': 'Nordic',
    'nordic_nrf52840': 'Nordic',

    // RISC-V
    'esp32_c6_risc_v_wi_fi_6': 'ESP32',
    'gd32vf103_risc_v': 'RISC-V',
    'sifive_hifive1_rev_b': 'RISC-V',
    'kendryte_k210_ai_mcu': 'RISC-V',

    // Microchip
    'microchip_samd21': 'Microchip SAMD',
    'microchip_samd51': 'Microchip SAMD',

    // TI
    'ti_msp430': 'TI MSP430',

    // Renesas
    'renesas_rx_series': 'Renesas',
    'renesas_ra_series': 'Renesas',

    // Advanced/Industrial
    'openmv_h7_camera_board': 'Advanced',
    'arduino_portenta_h7': 'Arduino',
    'infineon_aurix_tc275': 'Industrial',

    // Linux SBCs
    'beaglebone_black_iot_linux': 'Linux SBC',
    'beaglebone_ai': 'Linux SBC',
    'orange_pi_zero': 'Linux SBC',
    'jetson_nano_edge_ai': 'Linux SBC'
};

// Read the file
const filePath = 'c:/Users/mnish/iotnext2.0/src/data/boards.js';
let content = fs.readFileSync(filePath, 'utf8');

// Add family field to each board
for (const [boardId, family] of Object.entries(boardFamilies)) {
    // Pattern to match board definition
    const pattern = new RegExp(
        `("${boardId}":\\s*{[^}]*?"name":\\s*"[^"]+",\\s*(?:"manufacturer":\\s*"[^"]+",\\s*)?)`,
        'g'
    );

    content = content.replace(pattern, (match) => {
        // Check if family already exists
        if (match.includes('"family":')) {
            return match;
        }
        // Add family field after manufacturer or name
        return match.replace(
            /("manufacturer":\s*"[^"]+",\s*)/,
            `$1"family": "${family}",\n        `
        ).replace(
            /("name":\s*"[^"]+",\s*)(?!"manufacturer")/,
            `$1"family": "${family}",\n        `
        );
    });
}

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Family fields added successfully!');
