import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { prompt, systemInstruction, ping } = req.body;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    // Quick Health Check
    if (ping) {
        return res.status(200).json({ status: 'ready' });
    }

    if (!GEMINI_API_KEY) {
        return res.status(500).json({
            error: 'Gemini API Key not configured on Vercel. Please add GEMINI_API_KEY to your project settings.'
        });
    }

    try {
        console.log(`[Backend] Attempting Gemini generation...`);
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: systemInstruction
        });

        const result = await model.generateContent(prompt);
        const text = result.response.text();

        if (!text) {
            return res.status(500).json({ error: 'Gemini failed to generate content.' });
        }

        console.log(`[Backend] Success with Gemini 1.5 Flash`);
        return res.status(200).json({ text, modelUsed: 'gemini-1.5-flash' });

    } catch (error) {
        console.error(`[Backend] Fatal Server Error:`, error.message);
        return res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
}

