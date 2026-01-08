/**
 * Retrieval helper for AI Keys (DeepSeek Only)
 */
const getKeys = () => {
    try {
        const keys = JSON.parse(localStorage.getItem('IOT_AI_KEYS')) || {};
        return { deepseekKey: keys.deepseekKey || '' };
    } catch (e) {
        return { deepseekKey: '' };
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
5. NO EXPLANATION TEXT. ONLY JSON.
`;

/**
 * Direct call with DeepSeek (used if user provides their own key)
 */
const callDeepSeekDirect = async (prompt, systemInstruction, key) => {
    console.log(`[AI] Attempting direct call with DeepSeek...`);
    const response = await fetch(`https://api.deepseek.com/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
            model: "deepseek-chat",
            messages: [
                { role: "system", content: systemInstruction },
                { role: "user", content: prompt }
            ],
            temperature: 0.7
        })
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || `DeepSeek failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content;
};

/**
 * Hybrid AI Caller: Checks local key first, then tries platform proxy
 */
export const callAI = async (prompt, systemInstruction) => {
    const { deepseekKey } = getKeys();

    // 1. If user has their own key, use it directly (saves platform costs)
    if (deepseekKey) {
        try {
            return await callDeepSeekDirect(prompt, systemInstruction, deepseekKey);
        } catch (e) {
            console.warn("[AI] User key failed. Falling back to platform proxy...", e.message);
        }
    }

    // 2. Otherwise, use the secure platform proxy (Already DeepSeek based)
    console.log("[AI] Using Platform Secure Proxy...");
    const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, systemInstruction })
    });

    if (response.status === 404) {
        throw new Error("Backend not found. The 'Magic Build' proxy only works on Vercel. If you are on GitHub, please enter your own DeepSeek API key in Settings.");
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
