import { sensors } from '../data/sensors';
import { BOARDS } from '../data/boards';
import { projects as localProjects } from '../data/projects';
import { roadmapSteps } from '../data/roadmap';
import { masteryIndex } from '../data/masteryIndex';

const fuzzyMatch = (query, target) => {
    if (!target) return false;
    const q = query.toLowerCase().trim();
    const t = target.toLowerCase().trim();
    if (t.includes(q) || q.includes(t)) return true;

    // Split into words and match all words if query is long
    const words = q.split(/\s+/).filter(w => w.length > 2);
    if (words.length > 1) {
        return words.every(w => t.includes(w));
    }
    return false;
};

/**
 * Multi-Domain Technical Lookup Engine (Local - Zero API)
 */
const localTechnicalLookup = (query) => {
    const q = query.toLowerCase().trim();

    // 0. Handle General Aggregate Queries
    if (q.includes("project") && q.length < 15) {
        return `We have ${localProjects.length} projects on iotnext.store, ranging from LED Blink (Beginner) to Smart Agriculture (Advanced). You can find them in the 'Projects' section.`;
    }
    if (q.includes("roadmap") && q.length < 15) {
        return "Our IoT Roadmap consists of 12 levels, from C Programming (Level 0) and Electronics Basics to Advanced IIO and Security. Check the 'Technical Mastery Path' for the full guide.";
    }
    if ((q.includes("mastery") || q.includes("learn")) && q.length < 15) {
        const guides = masteryIndex.map(m => m.title).slice(0, 5).join(', ');
        return `Our Mastery Path includes guides on: ${guides}, and many more. Visit the 'Mastery' tab to start learning.`;
    }

    // 1. Check Boards
    const matchedBoard = Object.values(BOARDS).find(b =>
        fuzzyMatch(q, b.name) || fuzzyMatch(q, b.id)
    );
    if (matchedBoard) {
        return `
HARDWARE: ${matchedBoard.name}
Spec: ${matchedBoard.description}
MCU: ${matchedBoard.specs?.MCU || 'N/A'}
Voltage: ${matchedBoard.specs?.Operating_Voltage || 'N/A'}
        `.trim();
    }

    // 2. Check Sensors
    const matchedSensor = sensors.find(s =>
        fuzzyMatch(q, s.name) || (s.id && q.split(' ').includes(s.id.toString()))
    );
    if (matchedSensor) {
        return `
SENSOR: ${matchedSensor.name}
Spec: ${matchedSensor.description}
Pins: ${matchedSensor.pins}
        `.trim();
    }

    // 3. Check Projects
    const matchedProject = localProjects.find(p =>
        fuzzyMatch(q, p.title) || (p.id && q.split(' ').includes(p.id.toString()))
    );
    if (matchedProject) {
        return `
PROJECT: ${matchedProject.title}
Goal: ${matchedProject.description}
Difficulty: ${matchedProject.level}
Usage: ${matchedProject.usage || 'Refer to project page.'}
        `.trim();
    }

    // 4. Check Roadmap
    const matchedRoadmap = roadmapSteps.find(step =>
        fuzzyMatch(q, step.title) ||
        q.includes(`level ${step.level}`) ||
        step.steps.some(s => fuzzyMatch(q, s.name))
    );
    if (matchedRoadmap) {
        return `
ROADMAP LEVEL ${matchedRoadmap.level}: ${matchedRoadmap.title}
Key Focus: ${matchedRoadmap.explanation}
Includes: ${matchedRoadmap.steps.map(s => s.name).join(', ')}
        `.trim();
    }

    // 5. Check Mastery Path
    const matchedMastery = masteryIndex.find(m =>
        fuzzyMatch(q, m.title)
    );
    if (matchedMastery) {
        return `
MASTERY GUIDE: ${matchedMastery.title}
Purpose: ${matchedMastery.purpose}
Search for this in the Technical Mastery section of the site.
        `.trim();
    }

    // Fallback
    return "This information is not available on iotnext.store.";
};

/**
 * Hybrid AI Caller: Optimized for local lookup as per user requirements.
 * Now prioritized searching within the provided context (which contains live Supabase data).
 */
export const callAI = async (prompt, systemInstruction) => {
    console.log("[AI] Using Local Knowledge Engine (Unified)...");

    // We simulate a small delay for "thinking" effect
    await new Promise(resolve => setTimeout(resolve, 600));

    // Extract the actual user question
    let userQuestion = prompt;
    if (prompt.includes("USER QUESTION:")) {
        userQuestion = prompt.split("USER QUESTION:")[1].trim().toLowerCase();
    }
    const q = userQuestion;

    // 0. Handle basic greetings
    const greetings = ['hi', 'hello', 'hey', 'greetings', 'help', 'hi!', 'hello!'];
    if (greetings.includes(q)) {
        return "Hello! I am Nexus AI, your Senior IoT Architect. How can I help you with hardware specifications, roadmaps, or projects today?";
    }

    // 1. PRIMARY: High-Precision Multi-Domain Lookup
    const technicalResult = localTechnicalLookup(q);
    if (technicalResult !== "This information is not available on iotnext.store.") {
        return technicalResult;
    }

    // 2. SECONDARY: Context-Aware Fallback (from the prompt provided context)
    if (prompt.includes("WEBSITE CONTEXT:")) {
        const contentSection = prompt.split("WEBSITE CONTEXT:")[1].split("USER QUESTION:")[0];
        const lines = contentSection.split('\n');

        // Look for any line that contains the keywords
        const keywords = q.split(' ').filter(w => w.length > 3);
        const matchedLine = lines.find(line => {
            const l = line.toLowerCase();
            return keywords.some(word => l.includes(word));
        });

        if (matchedLine) {
            const cleaned = matchedLine.replace(/^[A-Z\s]+:\s*/i, '').trim();
            // If it's a long list, find the specific item
            if (cleaned.includes(',')) {
                const items = cleaned.split(',').map(i => i.trim());
                const specificItem = items.find(i => fuzzyMatch(q, i));
                if (specificItem) return `I found "${specificItem}" in our database. Ask for more details if needed!`;
            }
            return cleaned;
        }
    }

    // 3. Final Fallback
    return "This information is not available on iotnext.store.";
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
