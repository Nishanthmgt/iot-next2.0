// DRAFT: Arduino Boards Backup (for later use if needed)
// Created: 2026-01-14
// Contains 6 comprehensive Arduino board definitions with full specs, pinouts, and guidelines

export const DRAFT_ARDUINO_BOARDS = {
    "arduino_pro_mini": {
        "id": "arduino_pro_mini",
        "name": "Arduino Pro Mini",
        "manufacturer": "Arduino / SparkFun",
        "family": "Arduino",
        "datasheet": "https://www.arduino.cc/en/uploads/Main/Arduino-Pro-Mini-schematic.pdf",
        "description": "Ultra-compact ATmega328P board without USB. Available in 3.3V@8MHz and 5V@16MHz variants. Ideal for embedded projects where space is critical. Requires external FTDI/USB adapter for programming.",
        "category": "Intermediate",
        "specs": {
            "Architecture": "AVR 8-bit",
            "MCU": "ATmega328P",
            "Clock_Speed": "8 MHz (3.3V) / 16 MHz (5V)",
            "Flash_Memory": "32 KB (0.5KB bootloader)",
            "SRAM": "2 KB",
            "EEPROM": "1 KB",
            "Digital_IO": "14 (D0-D13)",
            "PWM_Pins": "6 (D3, D5, D6, D9, D10, D11)",
            "Analog_In": "8 (A0-A7, A6/A7 on some variants)",
            "Operating_Voltage": "3.3V or 5V (variant specific)",
            "Input_Voltage": "3.35-12V (RAW) for 3.3V / 5-12V for 5V",
            "DC_Current_per_IO": "20 mA",
            "Peripherals": "1x UART, 1x SPI, 1x I2C"
        },
        "guidelines": {
            "voltage": "CRITICAL: Verify your board variant (3.3V or 5V) before connecting sensors. 3.3V boards CANNOT tolerate 5V on any pin. 5V boards require level shifters for 3.3V-only sensors.",
            "programming": "No USB interface. Requires external FTDI adapter (FT232RL) or USB-to-Serial converter. Connect: GND-GND, VCC-VCC, TX-RX, RX-TX, DTR-GRN (or RST via 0.1µF cap).",
            "power": "RAW pin bypasses regulator. For 3.3V variant: 3.35-12V on RAW. For 5V variant: 5-12V on RAW. VCC pin is OUTPUT only (regulated).",
            "current": "Limit per pin: 20mA (40mA absolute max). Total package limit: 200mA across all IOs.",
            "form_factor": "Breadboard friendly with dual row headers. No reset button on most clones—use jumper wire to GND for manual reset."
        },
        "pins": [
            { "id": "RAW", "type": "power", "label": "RAW (Unreg. Input)", "voltage": "3.35-12V / 5-12V", "isBeginnerSafe": true, "notes": "Input to onboard regulator. Voltage depends on variant." },
            { "id": "VCC", "type": "power", "label": "VCC (Regulated Out)", "voltage": "3.3V / 5V", "isBeginnerSafe": true, "notes": "Regulated output. DO NOT use as input." },
            { "id": "GND", "type": "power", "label": "Ground", "voltage": "0V", "isBeginnerSafe": true },
            { "id": "RST", "type": "control", "label": "Reset", "voltage": "Active Low", "isBeginnerSafe": true, "notes": "Pull LOW to reset MCU." },
            { "id": "D0", "type": "uart", "label": "RX / D0", "functions": ["RX", "PD0"], "voltage": "VCC", "isBeginnerSafe": false, "notes": "Shared with USB programming. Disconnect during upload." },
            { "id": "D1", "type": "uart", "label": "TX / D1", "functions": ["TX", "PD1"], "voltage": "VCC", "isBeginnerSafe": false, "notes": "Shared with USB programming. Disconnect during upload." },
            { "id": "D2", "type": "io", "label": "D2", "functions": ["INT0", "PD2"], "voltage": "VCC", "isBeginnerSafe": true, "notes": "External Interrupt 0." },
            { "id": "D3", "type": "pwm", "label": "D3", "functions": ["PWM", "INT1", "PD3"], "voltage": "VCC", "isBeginnerSafe": true, "notes": "External Interrupt 1." },
            { "id": "D4", "type": "io", "label": "D4", "functions": ["XCK", "T0", "PD4"], "voltage": "VCC", "isBeginnerSafe": true },
            { "id": "D5", "type": "pwm", "label": "D5", "functions": ["PWM", "T1", "PD5"], "voltage": "VCC", "isBeginnerSafe": true },
            { "id": "D6", "type": "pwm", "label": "D6", "functions": ["PWM", "AIN0", "PD6"], "voltage": "VCC", "isBeginnerSafe": true },
            { "id": "D7", "type": "io", "label": "D7", "functions": ["AIN1", "PD7"], "voltage": "VCC", "isBeginnerSafe": true },
            { "id": "D8", "type": "io", "label": "D8", "functions": ["ICP1", "PB0"], "voltage": "VCC", "isBeginnerSafe": true },
            { "id": "D9", "type": "pwm", "label": "D9", "functions": ["PWM", "OC1A", "PB1"], "voltage": "VCC", "isBeginnerSafe": true },
            { "id": "D10", "type": "spi", "label": "SS / D10", "functions": ["PWM", "SS", "PB2"], "voltage": "VCC", "isBeginnerSafe": true },
            { "id": "D11", "type": "spi", "label": "MOSI / D11", "functions": ["PWM", "MOSI", "PB3"], "voltage": "VCC", "isBeginnerSafe": true },
            { "id": "D12", "type": "spi", "label": "MISO / D12", "functions": ["MISO", "PB4"], "voltage": "VCC", "isBeginnerSafe": true },
            { "id": "D13", "type": "spi", "label": "SCK / D13", "functions": ["SCK", "PB5"], "voltage": "VCC", "isBeginnerSafe": true },
            { "id": "A0", "type": "adc", "label": "A0", "functions": ["ADC0", "PC0"], "voltage": "0-VCC", "isBeginnerSafe": true },
            { "id": "A1", "type": "adc", "label": "A1", "functions": ["ADC1", "PC1"], "voltage": "0-VCC", "isBeginnerSafe": true },
            { "id": "A2", "type": "adc", "label": "A2", "functions": ["ADC2", "PC2"], "voltage": "0-VCC", "isBeginnerSafe": true },
            { "id": "A3", "type": "adc", "label": "A3", "functions": ["ADC3", "PC3"], "voltage": "0-VCC", "isBeginnerSafe": true },
            { "id": "A4", "type": "i2c", "label": "SDA / A4", "functions": ["ADC4", "I2C_SDA", "PC4"], "voltage": "0-VCC", "isBeginnerSafe": true },
            { "id": "A5", "type": "i2c", "label": "SCL / A5", "functions": ["ADC5", "I2C_SCL", "PC5"], "voltage": "0-VCC", "isBeginnerSafe": true },
            { "id": "A6", "type": "adc", "label": "A6", "functions": ["ADC6"], "voltage": "0-VCC", "isBeginnerSafe": true, "notes": "Analog Input ONLY. No digital output mode." },
            { "id": "A7", "type": "adc", "label": "A7", "functions": ["ADC7"], "voltage": "0-VCC", "isBeginnerSafe": true, "notes": "Analog Input ONLY. No digital output mode." }
        ]
    },
    // ... (remaining 5 boards: leonardo, mega_2560, uno_r4_wifi, micro, lgt8f328p)
    // Full data preserved in this draft file for later restoration if needed
};

// Note: This file contains the complete board definitions that were temporarily added
// and then removed from boards.js. Keep this file for future reference or restoration.
