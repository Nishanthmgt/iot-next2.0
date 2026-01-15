import { sensors } from '../data/sensors';
import { BOARDS } from '../data/boards';
import { projects as localProjects } from '../data/projects';
import { roadmapSteps } from '../data/roadmap';
import { masteryIndex } from '../data/masteryIndex';
import { reasonAboutQuery } from './aiReasoning';
import {
    generateIntelligentResponse,
    handleNaturalConversation,
    getFullSensorInfo,
    generateReasoning,
    resolveTopicFromHistory,
    SENSOR_KNOWLEDGE,
    BOARD_KNOWLEDGE,
    PROTOCOL_KNOWLEDGE,
    KNOWLEDGE_GRAPH
} from './aiKnowledge';

const fuzzyMatch = (query, target) => {
    if (!target) return false;
    const q = query.toLowerCase().trim();
    const t = target.toLowerCase().trim();

    // Direct match or prefix (high confidence)
    if (t === q || t.startsWith(q)) return true;
    if (t.includes(q)) return true;

    // Word-based scoring
    const qWords = q.split(/\s+/).filter(w => w.length > 2);
    const tWords = t.split(/\s+/).filter(w => w.length > 2);

    if (qWords.length === 0) return false;

    // If multiple words, require high coverage
    const matches = qWords.filter(qw => tWords.some(tw => tw.includes(qw)));
    return (matches.length / qWords.length) >= 0.7;
};

/**
 * Multi-Domain Technical Lookup Engine (Local - Zero API)
 */
const localTechnicalLookup = (query) => {
    const q = query.toLowerCase().trim();

    // 0. DEBUGGING: Hardware Troubleshooting Assistant
    const debugTriggers = ['error', 'not working', 'fail', 'debug', 'help', 'stuck', 'problem'];
    if (debugTriggers.some(t => q.includes(t))) {
        return "I'm right here with you! Debugging can be tough, but let's try this checklist together:\n1. **Power Check**: Is there a common Ground (GND) for everything?\n2. **Baud Rate**: Does Serial.begin() match your Serial Monitor?\n3. **Voltage Logic**: Are we sending 5V to a 3.3V pin accidentally?\n4. **Library Version**: Maybe a quick driver update for your sensors?\n\nTell me exactly what's happening, and we'll fix it together!";
    }

    // 1. DYNAMIC SYSTEM LOOKUP: Use combined knowledge graph for everything (Direct Match)
    const knowledge = KNOWLEDGE_GRAPH[q];
    if (knowledge) {
        return generateIntelligentResponse(q);
    }

    // 2. CONCEPTUAL: IoT Definitions (Warm & Engaging)
    if (q.includes("iot") && (q.includes("what") || q.includes("define") || q === "iot")) {
        return "Think of IoT (Internet of Things) as the way we give physical objects a voice and a brain using sensors and the web. It's all about making the world around us smarter and more connected so we can solve cool problems. Want to see how we build these from scratch in our 'Mastery Path'?";
    }

    // 3. AGGREGATES: Lists & Projects (Conversational)
    const projectTriggers = ['projects', 'show projects', 'project list', 'i need projects'];
    if (projectTriggers.includes(q) || q.includes("list projects")) {
        return `I've architected over ${localProjects.length} projects here. We range from simple 'LED Blink' prototypes for beginners to 'Industrial Smart Agriculture' systems for advanced engineers. Which level are you looking to start with?`;
    }

    // 4. HARDWARE/SENSOR/PROJECT: (Persona-Driven Fuzzy Search)
    // Board Search
    const matchedBoard = Object.values(BOARDS).find(b =>
        b.name.toLowerCase() === q || b.id.toLowerCase() === q || fuzzyMatch(q, b.name)
    );
    if (matchedBoard) {
        return generateIntelligentResponse(matchedBoard.id.toLowerCase());
    }

    // Sensor Search
    const matchedSensor = sensors.find(s =>
        s.name.toLowerCase() === q || fuzzyMatch(q, s.name)
    );
    if (matchedSensor) {
        return generateIntelligentResponse(matchedSensor.name.toLowerCase());
    }

    // Project Search
    const matchedProject = localProjects.find(p =>
        p.title.toLowerCase() === q || fuzzyMatch(q, p.title)
    );
    if (matchedProject) {
        const projectResponses = [
            `Excellent choice! The '${matchedProject.title}' is a ${matchedProject.level}-level project that'll teach you ${matchedProject.description?.toLowerCase()}. You'll be working with ${matchedProject.tech?.join(', ') || 'IoT fundamentals'}. Ready to see the wiring or code?`,
            `The '${matchedProject.title}' project - great pick! This ${matchedProject.level} challenge focuses on ${matchedProject.description?.toLowerCase()}. Pro tip: Read through the entire guide before starting to save troubleshooting time!`
        ];
        return projectResponses[Math.floor(Math.random() * projectResponses.length)];
    }

    // Final Fallback: Specialized Reasoning
    return reasonAboutQuery(q) || "As an IoT Architect, I'm not quite clear on that request. Could you rephrase? I'm an expert on sensors, boards (ESP32/Arduino/RPi), and protocols like MQTT or LoRa!";
};

/**
 * Hybrid AI Caller: Optimized for local lookup as per user requirements.
 * Now prioritized searching within the provided context (which contains live Supabase data).
 */
export const callAI = async (prompt, systemInstruction, lastSuggestion = null, history = []) => {
    console.log("[AI] Using Local Knowledge Engine (Memory v1.0)...");

    // We simulate a small delay for "thinking" effect
    await new Promise(resolve => setTimeout(resolve, 600));

    // Extract the actual user question
    let userQuestion = prompt;
    if (prompt.includes("USER QUESTION:")) {
        userQuestion = prompt.split("USER QUESTION:")[1].trim().toLowerCase();
    }
    const q = userQuestion;

    // --- CONVERSATIONAL MEMORY (Phase 11 Upgrade) ---
    // Resolve the current topic from history or persistent state
    const effectiveTopic = resolveTopicFromHistory(history);

    // Generate Architectural Reasoning (Chain-of-Thought)
    const reasoningSteps = generateReasoning(q, effectiveTopic);
    const reasoningPrefix = `<thought>\n${reasoningSteps.map(s => `• ${s}`).join('\n')}\n</thought>\n\n`;

    // 0. Handle affirmative follow-ups (conversational context)
    const affirmatives = ['yes', 'yeah', 'sure', 'ok', 'okay', 'show me', 'tell me more', 'go ahead', 'please'];
    if (affirmatives.includes(q) && lastSuggestion) {
        if (lastSuggestion.type === 'project') {
            const project = localProjects.find(p =>
                p.title.toLowerCase().includes(lastSuggestion.name.toLowerCase())
            );
            if (project) {
                // Check if the previous message offered pin configuration
                const offeredPinConfig = prompt.toLowerCase().includes("pin configuration") ||
                    prompt.toLowerCase().includes("walk you through");

                return reasoningPrefix + `Perfect! Here's the pin configuration for **${project.title}**:\n\n${pinInfo}\n\n${project.code ? "I can also show you the code implementation if you'd like!" : "Check out the full project page for the complete build guide!"}`;
            }

            return reasoningPrefix + `Perfect! The **${project.title}** project is a ${project.level}-level challenge.\n\n**Goal**: ${project.description}\n\n**Hardware**: ${project.tech?.join(', ') || 'Standard IoT components'}\n\nThis project will teach you practical sensor integration and data visualization. Ready to start building?`;
        }
    }

    // 0.5. NATURAL CONVERSATION: Name recognition, personalization
    const conversationResponse = handleNaturalConversation(q);
    if (conversationResponse) {
        return reasoningPrefix + conversationResponse;
    }

    // 1. ADVANCED KNOWLEDGE SYSTEM: Deep technical understanding
    const intelligentResponse = generateIntelligentResponse(q, effectiveTopic);
    if (intelligentResponse) {
        return reasoningPrefix + intelligentResponse;
    }

    // 2. Handle basic greetings (Warm & Welcoming)
    const greetings = ['hi', 'hello', 'hey', 'greetings', 'help', 'hi!', 'hello!'];
    if (greetings.includes(q)) {
        const greetingResponses = [
            "Hey there! I'm Nexus AI, your Senior IoT Architect. Whether you need hardware specs, project ideas, or debugging help, I've got your back. What are we building today?",
            "Hello! Great to see you here. I'm Nexus, and I've been working with IoT systems for years. How can I help with your project today?",
            "Hi! I'm Nexus AI - think of me as your IoT mentor. Need help with sensors, boards, code, or just brainstorming ideas? I'm here for it all. What's on your mind?"
        ];
        return reasoningPrefix + greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
    }

    // 2. PRIMARY: High-Precision Multi-Domain Lookup
    const technicalResult = localTechnicalLookup(q);
    if (technicalResult !== "This information is not available on iotnext.store.") {
        return reasoningPrefix + technicalResult;
    }

    // 2.5. REASONING ENGINE: Intelligent analysis as fallback
    const reasonedResponse = reasonAboutQuery(q);
    if (reasonedResponse) {
        return reasoningPrefix + reasonedResponse;
    }

    // 3. SECONDARY: Smart Context Search (for dynamic Supabase data)
    if (prompt.includes("WEBSITE CONTEXT:")) {
        const contentSection = prompt.split("WEBSITE CONTEXT:")[1].split("USER QUESTION:")[0];
        const lines = contentSection.split('\n');

        // Look for any line that contains the keywords
        const keywords = q.split(' ').filter(w => w.length > 2); // Lowered to catch more words like 'zigbee'
        const matchedLine = lines.find(line => {
            const l = line.toLowerCase();
            return keywords.some(word => l.includes(word));
        });

        if (matchedLine) {
            const cleaned = matchedLine.replace(/^[A-Z\s]+:\s*/i, '').trim();

            // If it's a list line, extract the specific item
            if (cleaned.includes(',')) {
                const items = cleaned.split(',').map(i => i.trim());
                const specificItem = items.find(i => fuzzyMatch(q, i));

                if (specificItem) {
                    // If it's a sensor from the dynamic context, try to find it in sensors array
                    if (matchedLine.includes("SENSORS:")) {
                        const foundSensor = sensors.find(s => fuzzyMatch(specificItem, s.name));
                        if (foundSensor) {
                            return reasoningPrefix + `The ${foundSensor.name} is used for ${foundSensor.description?.toLowerCase() || 'specific telemetry'}. It typically interfaces via ${foundSensor.pins || 'its standard pinout'}. Perfect for ${foundSensor.level?.toLowerCase() || 'various'} projects!`;
                        }
                        return reasoningPrefix + `The **${specificItem}** is available in our sensor catalog. Visit the Sensors page for detailed specifications, pin configurations, and compatible projects.`;
                    }

                    // For projects in context
                    if (matchedLine.includes("PROJECTS:")) {
                        const foundProject = localProjects.find(p => fuzzyMatch(specificItem, p.title));
                        if (foundProject) {
                            return reasoningPrefix + `The '${foundProject.title}' project is an excellent ${foundProject.level} challenge. The goal is to ${foundProject.description?.toLowerCase()}. It utilizes ${foundProject.tech?.join(', ') || 'IoT basics'}. Want me to explain the pin configuration?`;
                        }
                        return reasoningPrefix + `The **${specificItem}** project is available in our catalog. Check the Projects section for full implementation details!`;
                    }

                    // For roadmap items
                    if (matchedLine.includes("ROADMAP:")) {
                        return reasoningPrefix + `I found **${specificItem}** in our IoT learning roadmap. This covers essential concepts for your IoT journey. Visit the Roadmap section to explore the full curriculum!`;
                    }

                    // For mastery guides
                    if (matchedLine.includes("MASTERY")) {
                        return reasoningPrefix + `The **${specificItem}** guide is part of our Technical Mastery Path. It provides in-depth knowledge to advance your IoT expertise. Check the Mastery section for the complete guide!`;
                    }
                }

                // Generic category queries (only if no specific item found)
                if (matchedLine.includes("SENSORS:")) return reasoningPrefix + "We have a vast catalog of 120+ sensors across 12 categories. Ask for a specific sensor (like DHT11 or Active Buzzer) for details.";
                if (matchedLine.includes("BOARDS:")) return reasoningPrefix + "We support dozens of boards including Arduino, ESP32, STM32, and Raspberry Pi. Ask for a specific board name.";
            }
        }
    }

    // 4. Final Fallback (Phase 13: Zero-API Global Knowledge)
    const globalFallback = handleNaturalConversation(q);
    if (globalFallback) return reasoningPrefix + globalFallback;

    return reasoningPrefix + "I'm not quite sure about that one yet, but I'm always learning! Maybe we could talk about sensors, boards (ESP32/Arduino/RPi), or how protocols like MQTT work instead?";
};






/**
 * Main Service Export
 */
export const generateProjectFromPrompt = async (prompt, boardData, sensorData) => {
    const systemPrompt = getConfigSystemPrompt(boardData, sensorData);
    const text = await callAI(prompt, systemPrompt);
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
};

export const generateFirmwareWithAI = async (config) => {
    const systemPrompt = `
    You are an Expert Embedded Systems C++ Developer. 
    Generate a COMPLETE, COMPILE-READY Arduino (.ino) file based on the provided IoT configuration.
    
    CONFIG: ${JSON.stringify(config)}
    
    REQUIREMENTS:
    1. Include necessary libraries (e.g., DHT, Servo).
    2. Use exact Pin Mappings provided in config.
    3. loop() must print "DATA_STREAM:sensorId:value".
    
    OUTPUT ONLY THE CODE. NO EXPLANATIONS.
    `;

    const code = await callAI("Generate code.", systemPrompt);
    return code.replace(/```cpp|```arduino|```/g, "").trim();
};
