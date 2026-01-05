const fs = require('fs');

// Read the boards.js file
let content = fs.readFileSync('c:/Users/mnish/iotnext2.0/src/data/boards.js', 'utf8');

// Define board families - mapping board IDs to their family
const families = {
    // Arduino Family
    'arduino_uno_r3_atmega328p': 'Arduino',
    'arduino_nano': 'Arduino',
    'arduino_nano_every': 'Arduino',
    'arduino_pro_mini_3.3v_5v': 'Arduino',
    'arduino_leonardo_atmega32u4': 'Arduino',
    'arduino_mega_2560': 'Arduino',
    'arduino_micro': 'Arduino',
    'lgt8f328p_arduino_clone': 'Arduino',
    'arduino_portenta_h7': 'Arduino',

    // ATtiny Family
    'attiny85_development_board': 'ATtiny',
    'attiny84_board': 'ATtiny',
    'digispark_attiny85': 'ATtiny',

    // ESP32 Family
    'esp_01_wi_fi_module': 'ESP32',
    'esp32_wroom_32_devkit_v1': 'ESP32',
    'esp8266_esp_12e_esp_12f': 'ESP32',
    'esp8285': 'ESP32',
    'esp32_s2': 'ESP32',
    'esp32_s3': 'ESP32',
    'esp32_c3_risc_v': 'ESP32',
    'esp32_h2_thread_zigbee': 'ESP32',
    'esp32_c6_risc_v_wi_fi_6': 'ESP32',

    // RP2040 Family
    'raspberry_pi_pico_rp2040': 'RP2040',
    'raspberry_pi_pico_w_wi_fi': 'RP2040',
    'seeed_xiao_rp2040': 'RP2040',
    'adafruit_qt_py_rp2040': 'RP2040',
    'waveshare_rp2040_zero': 'RP2040',

    // Nordic Family
    'bbc_microbit_v1': 'Nordic',
    'bbc_microbit_v2': 'Nordic',
    'nordic_nrf52832': 'Nordic',
    'nordic_nrf52840': 'Nordic',

    // STM32 Family
    'stm8s103_board': 'STM32',
    'stm32f103c8_blue_pill': 'STM32',
    'stm32f401cc_black_pill': 'STM32',
    'stm32f407_discovery': 'STM32',
    'stm32g0_series': 'STM32',
    'stm32l0_low_power': 'STM32',
    'stm32l4_series': 'STM32',
    'stm32h7_series': 'STM32',
    'stm32mp1_mcu_mpu': 'STM32',

    // Teensy Family
    'teensy_3.2': 'Teensy',
    'teensy_4_x_series': 'Teensy',

    // Particle Family
    'particle_photon': 'Particle',
    'particle_argon': 'Particle',
    'particle_boron_lte': 'Particle',

    // NXP Family
    'nxp_lpc1768': 'NXP',
    'nxp_lpc2148': 'NXP',
    'nxp_i.mx_rt1060': 'NXP',
    'nxp_i.mx_rt1170': 'NXP',

    // RISC-V Boards
    'gd32vf103_risc_v': 'RISC-V',
    'sifive_hifive1_rev_b': 'RISC-V',
    'kendryte_k210_ai_mcu': 'RISC-V',

    // Microchip SAMD
    'microchip_samd21': 'Microchip SAMD',
    'microchip_samd51': 'Microchip SAMD',

    // TI MSP430
    'ti_msp430': 'TI MSP430',

    // Renesas
    'renesas_rx_series': 'Renesas',
    'renesas_ra_series': 'Renesas',

    // Advanced/Industrial
    'openmv_h7_camera_board': 'Advanced',
    'infineon_aurix_tc275': 'Industrial',

    // Linux SBCs
    'beaglebone_black_iot_linux': 'Linux SBC',
    'beaglebone_ai': 'Linux SBC',
    'orange_pi_zero': 'Linux SBC',
    'jetson_nano_edge_ai': 'Linux SBC'
};

// Process each board
for (const [boardId, family] of Object.entries(families)) {
    // Create regex to find the board and add family field after manufacturer or name
    // Pattern: "board_id": { ... "manufacturer": "...", ... }
    const regex = new RegExp(
        `("${boardId}":\\s*\\{[^}]*?"manufacturer":\\s*"[^"]+",)`,
        's'
    );

    if (regex.test(content)) {
        content = content.replace(regex, `$1\n        "family": "${family}",`);
        console.log(`✓ Added family to ${boardId}`);
    } else {
        // Try pattern without manufacturer field
        const regex2 = new RegExp(
            `("${boardId}":\\s*\\{\\s*"id":\\s*"${boardId}",\\s*"name":\\s*"[^"]+",)`,
            's'
        );
        if (regex2.test(content)) {
            content = content.replace(regex2, `$1\n        "family": "${family}",`);
            console.log(`✓ Added family to ${boardId} (no manufacturer)`);
        } else {
            console.log(`✗ Could not find ${boardId}`);
        }
    }
}

// Write the updated content back
fs.writeFileSync('c:/Users/mnish/iotnext2.0/src/data/boards.js', content, 'utf8');
console.log('\n✅ Done! Family fields added to all boards.');
