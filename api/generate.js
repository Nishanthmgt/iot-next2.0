export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { prompt, systemInstruction, ping } = req.body;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Platform API Key not configured on server.' });
    }

    // Quick Health Check
    if (ping) {
        return res.status(200).json({ status: 'ready' });
    }

    const modelsToTry = [
        { name: "gemini-2.0-flash", version: "v1beta" },
        { name: "gemini-1.5-flash", version: "v1" },
        { name: "gemini-1.5-flash-latest", version: "v1beta" },
        { name: "gemini-1.5-pro", version: "v1" },
        { name: "gemini-1.5-pro-latest", version: "v1beta" }
    ];

    let lastError = null;

    for (const model of modelsToTry) {
        try {
            console.log(`[Backend] Attempting ${model.name}...`);
            const response = await fetch(`https://generativelanguage.googleapis.com/${model.version}/models/${model.name}:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `${systemInstruction}\n\nUSER REQUEST: ${prompt}` }] }]
                })
            });

            if (response.ok) {
                const data = await response.json();
                const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) {
                    console.log(`[Backend] Success with ${model.name}`);
                    return res.status(200).json({ text, modelUsed: model.name });
                }
            }

            const err = await response.json();
            lastError = err.error?.message || `Model ${model.name} failed with status ${response.status}`;
            console.warn(`[Backend] ${model.name} failed: ${lastError}`);
        } catch (error) {
            console.error(`[Backend] Fatal error with ${model.name}:`, error.message);
            lastError = error.message;
        }
    }

    // --- ULTIMATE FALLBACK: DEEPSEEK ---
    const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
    if (DEEPSEEK_API_KEY) {
        try {
            console.log(`[Backend] Attempting DeepSeek fallback...`);
            const dsResponse = await fetch("https://api.deepseek.com/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
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

            if (dsResponse.ok) {
                const dsData = await dsResponse.json();
                const dsText = dsData.choices?.[0]?.message?.content;
                if (dsText) {
                    console.log(`[Backend] Success with DeepSeek`);
                    return res.status(200).json({ text: dsText, modelUsed: 'deepseek-chat' });
                }
            }
            console.warn(`[Backend] DeepSeek failed or returned empty.`);
        } catch (dsError) {
            console.error(`[Backend] DeepSeek Error:`, dsError.message);
        }
    }

    return res.status(429).json({
        error: `AI Service Busy. All Gemini models and DeepSeek fallback were exhausted. Please wait 60 seconds. Latest Error: ${lastError}`
    });
}
