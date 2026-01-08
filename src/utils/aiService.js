import { sensors } from '../data/sensors';
import { BOARDS } from '../data/boards';

/**
 * Technical Lookup Engine (Local - No API)
 * Searches through sensors.js and boards.js for matching technical data.
 */
const localTechnicalLookup = (query) => {
    const q = query.toLowerCase().trim();

    // 1. Check Boards
    const matchedBoard = Object.values(BOARDS).find(b =>
        q.includes(b.name.toLowerCase()) ||
        q.includes(b.id.toLowerCase()) ||
        (b.specs?.MCU && q.includes(b.specs.MCU.toLowerCase()))
    );

    if (matchedBoard) {
        return `
HARDWARE DATA: ${matchedBoard.name}
Description: ${matchedBoard.description}
MCU: ${matchedBoard.specs?.MCU || 'N/A'}
Voltage: ${matchedBoard.specs?.Operating_Voltage || 'N/A'}
Pins Summary: ${matchedBoard.pins?.length || 0} pins available.
Guidelines: ${matchedBoard.guidelines?.voltage || matchedBoard.description}
        `.trim();
    }

    // 2. Check Sensors
    const matchedSensor = sensors.find(s =>
        q.includes(s.name.toLowerCase()) ||
        q.includes(s.description.toLowerCase())
    );

    if (matchedSensor) {
        return `
SENSOR DATA: ${matchedSensor.name}
Technical Spec: ${matchedSensor.description}
Pin Configuration: ${matchedSensor.pins}
Category: ${matchedSensor.category}
Buy Link: ${matchedSensor.buyLink}
        `.trim();
    }

    // 3. Fallback
    return "This information is not available on iotnext.store.";
};

/**
 * Hybrid AI Caller: Optimized for local lookup as per user requirements.
 * Now prioritized searching within the provided context (which contains live Supabase data).
 */
export const callAI = async (prompt, systemInstruction) => {
    console.log("[AI] Using Local Knowledge Engine (Refined Context)...");

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
        return "Hello! I am Nexus AI, your Senior IoT Architect. How can I help you with hardware specifications or technical guidelines today?";
    }

    // 1. Try to find the answer in the provided WEBSITE CONTENT (Dynamic Supabase Data)
    if (prompt.includes("WEBSITE CONTENT:")) {
        const contentSection = prompt.split("WEBSITE CONTENT:")[1].split("USER QUESTION:")[0];
        const lines = contentSection.split('\n');

        // Professional matcher: requires keyword match on sensor names
        const matchedLine = lines.find(line => {
            const l = line.toLowerCase();
            // Don't match if it's just a category header
            if (l.includes("catalog:") || l.includes("boards:")) return false;

            // Check if any word in the query (longer than 2 chars) matches a word in the line
            return q.split(' ').some(word => word.length > 2 && l.includes(word));
        });

        if (matchedLine && matchedLine.trim().startsWith('-')) {
            return matchedLine.replace(/^- /, '').trim();
        }
    }

    // 2. Fallback to Static Technical Lookup (Boards etc) - Use q (user question) only!
    const staticResult = localTechnicalLookup(q);
    if (staticResult !== "This information is not available on iotnext.store.") {
        return staticResult;
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
