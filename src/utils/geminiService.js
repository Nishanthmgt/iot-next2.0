import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export const generateProjectFromPrompt = async (prompt, boardData, sensorData) => {
    if (!genAI) {
        throw new Error("Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your .env file.");
    }

    const systemPrompt = `
    You are an IoT Hardware Expert. Your goal is to convert a user's natural language request into a valid IoT project configuration.
    
    BOARD DATA: ${JSON.stringify(boardData)}
    SENSOR DATA: ${JSON.stringify(sensorData)}
    
    USER REQUEST: "${prompt}"
    
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

    const modelsToTry = [
        { name: "gemini-2.0-flash", version: "v1" },
        { name: "gemini-1.5-flash", version: "v1" },
        { name: "gemini-2.5-flash", version: "v1" },
        { name: "gemini-pro", version: "v1beta" }
    ];
    let lastError = null;

    for (const modelCfg of modelsToTry) {
        try {
            console.log(`[Gemini] Attempting ${modelCfg.name}...`);
            // Create model with specific version
            const model = genAI.getGenerativeModel({ model: modelCfg.name }, { apiVersion: modelCfg.version });

            const result = await model.generateContent(systemPrompt);
            const response = await result.response;
            const text = response.text();

            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                console.log(`[Gemini] Success with ${modelCfg.name}`);
                return JSON.parse(jsonMatch[0]);
            }
        } catch (error) {
            console.warn(`[Gemini] ${modelCfg.name} (${modelCfg.version}) failed:`, error.message);
            lastError = error;
        }
    }

    throw new Error(`[AI_ERROR] ${lastError?.message || "All models failed"}. Please check your API key scope.`);
};
