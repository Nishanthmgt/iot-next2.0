/**
 * AI Reasoning Engine - Context Analysis & Intelligent Decision Making
 */

// Component database with technical specs for reasoning
const COMPONENT_SPECS = {
    // Boards
    'esp32': { voltage: 3.3, protocols: ['wifi', 'bluetooth', 'i2c', 'spi', 'uart'], type: 'board' },
    'arduino': { voltage: 5, protocols: ['i2c', 'spi', 'uart'], type: 'board' },
    'raspberry pi': { voltage: 3.3, protocols: ['i2c', 'spi', 'uart', 'wifi'], type: 'board' },

    // Sensors
    'dht11': { voltage: [3.3, 5], protocol: 'digital', type: 'sensor', category: 'environmental' },
    'dht22': { voltage: [3.3, 5], protocol: 'digital', type: 'sensor', category: 'environmental' },
    'bmp280': { voltage: 3.3, protocol: 'i2c', type: 'sensor', category: 'environmental' },
    'mpu6050': { voltage: 3.3, protocol: 'i2c', type: 'sensor', category: 'motion' },
    'hc-sr04': { voltage: 5, protocol: 'digital', type: 'sensor', category: 'distance' },
};

// Project type patterns
const PROJECT_PATTERNS = {
    weather: ['dht', 'bmp', 'temperature', 'humidity', 'pressure'],
    motion: ['mpu', 'gyro', 'accelerometer', 'motion'],
    automation: ['relay', 'servo', 'motor', 'control'],
    monitoring: ['sensor', 'data', 'cloud', 'iot', 'monitor'],
    distance: ['ultrasonic', 'hc-sr04', 'distance', 'proximity'],
};

/**
 * Extract components mentioned in the query
 */
export const extractComponents = (query) => {
    const q = query.toLowerCase();
    const found = [];

    for (const [name, specs] of Object.entries(COMPONENT_SPECS)) {
        if (q.includes(name)) {
            found.push({ name, ...specs });
        }
    }

    return found;
};

/**
 * Analyze user's skill level from query patterns
 */
export const analyzeSkillLevel = (query) => {
    const q = query.toLowerCase();

    if (/what is|how do|explain|basic|simple|beginner|start|first time/.test(q)) {
        return 'beginner';
    }
    if (/optimize|efficiency|advanced|protocol|register|interrupt/.test(q)) {
        return 'advanced';
    }
    return 'intermediate';
};

/**
 * Detect user intent
 */
export const detectIntent = (query) => {
    const q = query.toLowerCase();

    if (/not working|error|problem|fail|debug|help|stuck|issue/.test(q)) {
        return 'troubleshooting';
    }
    if (/how|why|what|explain|understand|learn|teach/.test(q)) {
        return 'learning';
    }
    if (/build|make|create|project|want to|planning/.test(q)) {
        return 'building';
    }
    if (/best|recommend|suggest|should i|which/.test(q)) {
        return 'recommendation';
    }

    return 'information';
};

/**
 * Check voltage compatibility between components
 */
export const checkVoltageCompatibility = (components) => {
    if (components.length < 2) return { compatible: true };

    const board = components.find(c => c.type === 'board');
    const sensors = components.filter(c => c.type === 'sensor');

    if (!board || sensors.length === 0) return { compatible: true };

    const warnings = [];

    for (const sensor of sensors) {
        const sensorVoltage = Array.isArray(sensor.voltage) ? sensor.voltage : [sensor.voltage];

        if (!sensorVoltage.includes(board.voltage)) {
            warnings.push({
                component: sensor.name,
                issue: `voltage_mismatch`,
                message: `⚠️ **Voltage Warning**: ${sensor.name.toUpperCase()} operates at ${sensorVoltage.join('/')}V, but ${board.name.toUpperCase()} uses ${board.voltage}V logic. You'll need a logic level converter to prevent damage!`
            });
        }
    }

    return {
        compatible: warnings.length === 0,
        warnings
    };
};

/**
 * Infer project type from components
 */
export const inferProjectType = (components) => {
    const componentNames = components.map(c => c.name).join(' ');
    const categories = components.map(c => c.category).filter(Boolean);

    for (const [projectType, keywords] of Object.entries(PROJECT_PATTERNS)) {
        if (keywords.some(kw => componentNames.includes(kw) || categories.includes(kw))) {
            return projectType;
        }
    }

    return 'general';
};

/**
 * Suggest missing components for a project type
 */
export const suggestMissingComponents = (projectType, currentComponents) => {
    const hasBoard = currentComponents.some(c => c.type === 'board');
    const hasSensor = currentComponents.some(c => c.type === 'sensor');

    const suggestions = [];

    if (!hasBoard) {
        suggestions.push("You'll need a microcontroller board like ESP32 or Arduino to control everything.");
    }

    if (projectType === 'weather' && !hasSensor) {
        suggestions.push("For weather monitoring, consider adding a DHT22 or BMP280 sensor.");
    }

    if (projectType === 'monitoring' && !currentComponents.some(c => c.name.includes('esp'))) {
        suggestions.push("For IoT monitoring, an ESP32 would give you WiFi connectivity to send data to the cloud.");
    }

    return suggestions;
};

/**
 * Main reasoning function - analyzes context and provides intelligent response
 */
export const reasonAboutQuery = (query) => {
    const components = extractComponents(query);
    const skillLevel = analyzeSkillLevel(query);
    const intent = detectIntent(query);

    // Multi-component reasoning
    if (components.length >= 2) {
        const compatibility = checkVoltageCompatibility(components);
        const projectType = inferProjectType(components);
        const suggestions = suggestMissingComponents(projectType, components);

        // Build intelligent response
        let response = "";

        // Voltage warnings (critical!)
        if (!compatibility.compatible) {
            response += compatibility.warnings.map(w => w.message).join('\n\n') + '\n\n';
        }

        // Project inference
        if (projectType !== 'general') {
            const componentList = components.map(c => c.name.toUpperCase()).join(' + ');
            response += `Ah, I see you're building a **${projectType} ${intent === 'building' ? 'project' : 'system'}** with ${componentList}! `;

            if (projectType === 'weather') {
                response += "Perfect for environmental monitoring. ";
            } else if (projectType === 'monitoring') {
                response += "Great choice for IoT data collection. ";
            }
        }

        // Missing components
        if (suggestions.length > 0) {
            response += "\n\n" + suggestions.join(' ');
        }

        // Skill-level appropriate guidance
        if (skillLevel === 'beginner') {
            response += "\n\nSince you're getting started, I'd recommend checking out our step-by-step project guides. Want me to walk you through the wiring?";
        } else if (skillLevel === 'advanced') {
            response += "\n\nFor optimization, consider using deep sleep modes and efficient data structures to minimize power consumption.";
        }

        return response.trim();
    }

    return null; // Fall back to standard lookup
};
