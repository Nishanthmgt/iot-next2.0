/**
 * Retrieval helper for AI Keys (Gemini Only)
 */
const getKeys = () => {
    try {
        const keys = JSON.parse(localStorage.getItem('IOT_AI_KEYS')) || {};
        return { geminiKey: keys.geminiKey || '' };
    } catch (e) {
        return { geminiKey: '' };
    }
};

/**
 * Common System Prompt for Project Configuration
 */
const getConfigSystemPrompt = (boardData, sensorData) => `
You are an IoT Hardware Expert. Your goal is to convert a user's natural language request into a valid IoT project configuration.

BOARD DATA: ${JSON.stringify(boardData)}
SENSOR DATA: ${JSON.stringify(sensorData)}

OUTPUT RULES:
1. Respond ONLY with a valid JSON object matching this schema:
{
    "boardId": "string",
    "sensors": [{"sensorId": "string", "name": "string", "pinMapping": {"LABEL": "BOARD_PIN"}}],
    "widgets": [{"type": "gauge|line|toggle|display", "label": "string", "dataSource": "sensorId"}]
}
2. Ensure pin mappings are electrically valid for the chosen board.
3. Do not use the same physical pin for two sensors.
4. Provide logical dashboard widgets for the sensors requested.
`;

/**
 * The core logic for calling Gemini via Google API with fallback versions
 */
const callGoogleDirect = async (prompt, systemInstruction, key) => {
    const modelsToTry = [
        { name: "gemini-2.0-flash", version: "v1beta" },
        { name: "gemini-1.5-flash", version: "v1" },
        { name: "gemini-pro", version: "v1" }
    ];

    let lastError = null;
    for (const model of modelsToTry) {
        try {
            console.log(`[AI] Attempting direct call with ${model.name}...`);
            const response = await fetch(`https://generativelanguage.googleapis.com/${model.version}/models/${model.name}:generateContent?key=${key}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `${systemInstruction}\n\nUSER REQUEST: ${prompt}` }] }]
                })
            });

            if (response.ok) {
                const data = await response.json();
                const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) return text;
            }

            const err = await response.json();
            lastError = new Error(err.error?.message || `Model ${model.name} failed`);
        } catch (e) {
            lastError = e;
        }
    }
    throw lastError;
};

/**
 * Hybrid AI Caller: Checks local key first, then tries platform proxy
 */
const callGemini = async (prompt, systemInstruction) => {
    const { geminiKey } = getKeys();

    // 1. If user has their own key, use it directly (saves platform costs)
    if (geminiKey) {
        try {
            return await callGoogleDirect(prompt, systemInstruction, geminiKey);
        } catch (e) {
            console.warn("[AI] User key failed. Falling back to platform proxy...", e.message);
        }
    }

    // 2. Otherwise, use the secure platform proxy (Hides the owner's key)
    console.log("[AI] Using Platform Secure Proxy...");
    const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, systemInstruction })
    });

    if (response.status === 404) {
        throw new Error("Backend not found. The 'Magic Build' proxy only works on Vercel. If you are on GitHub, please enter your own Gemini API key in Settings.");
    }

    if (!response.ok) {
        let errMsg = "AI Service Unavailable";
        try {
            const err = await response.json();
            errMsg = err.error || errMsg;
        } catch (je) { }
        throw new Error(errMsg);
    }

    const data = await response.json();
    return data.text;
};

/**
 * Main Service Export
 */
export const generateProjectFromPrompt = async (prompt, boardData, sensorData) => {
    const systemPrompt = getConfigSystemPrompt(boardData, sensorData);
    const text = await callGemini(prompt, systemPrompt);
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

    const code = await callGemini("Generate code.", systemPrompt);
    return code.replace(/```cpp|```arduino|```/g, "").trim();
};
