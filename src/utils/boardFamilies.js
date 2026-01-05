import { BOARDS } from '../data/boards';

// Extract unique families from boards data
export const getUniqueFamilies = () => {
    const families = new Set();
    Object.values(BOARDS).forEach(board => {
        if (board.family) {
            families.add(board.family);
        }
    });
    return Array.from(families).sort();
};

// Board family definitions with metadata
export const BOARD_FAMILIES = [
    {
        id: 'all',
        name: 'All Boards',
        description: 'Show all microcontroller boards',
        color: '#94a3b8',
        logo: 'https://api.iconify.design/material-symbols:memory.svg'
    },
    {
        id: 'Arduino',
        name: 'Arduino',
        description: 'Arduino family boards (Uno, Nano, Mega, etc.)',
        color: '#00979D',
        logo: 'https://api.iconify.design/simple-icons:arduino.svg'
    },
    {
        id: 'ESP32',
        name: 'ESP32',
        description: 'Espressif ESP32/ESP8266 Wi-Fi boards',
        color: '#E7352C',
        logo: 'https://api.iconify.design/simple-icons:espressif.svg'
    },
    {
        id: 'STM32',
        name: 'STM32',
        description: 'STMicroelectronics ARM boards',
        color: '#03234B',
        logo: 'https://api.iconify.design/simple-icons:stmicroelectronics.svg'
    },
    {
        id: 'RP2040',
        name: 'RP2040',
        description: 'Raspberry Pi Pico and RP2040 boards',
        color: '#C51A4A',
        logo: 'https://api.iconify.design/simple-icons:raspberrypi.svg'
    },
    {
        id: 'Nordic',
        name: 'Nordic',
        description: 'Nordic Semiconductor BLE boards',
        color: '#00A9CE',
        logo: 'https://api.iconify.design/simple-icons:nordicsemiconductor.svg'
    },
    {
        id: 'Teensy',
        name: 'Teensy',
        description: 'PJRC Teensy high-performance boards',
        color: '#FF6B35',
        logo: 'https://api.iconify.design/lucide:cpu.svg'
    },
    {
        id: 'ATtiny',
        name: 'ATtiny',
        description: 'Microchip ATtiny microcontrollers',
        color: '#E63946',
        logo: 'https://api.iconify.design/lucide:zap.svg'
    },
    {
        id: 'Particle',
        name: 'Particle',
        description: 'Particle IoT cloud-connected boards',
        color: '#00AEEF',
        logo: 'https://api.iconify.design/lucide:wifi.svg'
    },
    {
        id: 'NXP',
        name: 'NXP',
        description: 'NXP ARM microcontrollers',
        color: '#FF6F00',
        logo: 'https://api.iconify.design/simple-icons:nxp.svg'
    },
    {
        id: 'RISC-V',
        name: 'RISC-V',
        description: 'RISC-V architecture boards',
        color: '#FAB005',
        logo: 'https://api.iconify.design/simple-icons:riscv.svg'
    },
    {
        id: 'Microchip SAMD',
        name: 'Microchip SAMD',
        description: 'Microchip SAMD ARM boards',
        color: '#EE1C25',
        logo: 'https://api.iconify.design/lucide:component.svg'
    },
    {
        id: 'TI MSP430',
        name: 'TI MSP430',
        description: 'Texas Instruments MSP430',
        color: '#CC0000',
        logo: 'https://api.iconify.design/lucide:microchip.svg'
    },
    {
        id: 'Industrial',
        name: 'Industrial',
        description: 'Industrial-grade controllers',
        color: '#FF9500',
        logo: 'https://api.iconify.design/material-symbols:factory.svg'
    },
    {
        id: 'Linux SBC',
        name: 'Linux SBC',
        description: 'Linux single-board computers',
        color: '#FCC624',
        logo: 'https://api.iconify.design/simple-icons:linux.svg'
    },
    {
        id: 'STM8',
        name: 'STM8',
        description: 'STMicroelectronics 8-bit boards',
        color: '#00539C',
        logo: 'https://api.iconify.design/simple-icons:stmicroelectronics.svg'
    },
    {
        id: 'Advanced',
        name: 'Advanced',
        description: 'Specialized advanced boards',
        color: '#8B5CF6',
        logo: 'https://api.iconify.design/material-symbols:settings-suggest.svg'
    }
];

// Get family metadata by ID
export const getFamilyById = (familyId) => {
    return BOARD_FAMILIES.find(f => f.id === familyId) || BOARD_FAMILIES[0];
};

// Get board count by family
export const getBoardCountByFamily = (familyId) => {
    if (familyId === 'all') {
        return Object.keys(BOARDS).length;
    }
    return Object.values(BOARDS).filter(board => board.family === familyId).length;
};

// Get all boards by family
export const getBoardsByFamily = (familyId) => {
    if (familyId === 'all') {
        return BOARDS;
    }
    const filtered = {};
    Object.entries(BOARDS).forEach(([id, board]) => {
        if (board.family === familyId) {
            filtered[id] = board;
        }
    });
    return filtered;
};
