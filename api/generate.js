export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { prompt, systemInstruction, ping } = req.body;
    const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

    // Quick Health Check
    if (ping) {
        return res.status(200).json({ status: 'ready' });
    }

    if (!DEEPSEEK_API_KEY) {
        return res.status(500).json({ error: 'DeepSeek API Key not configured on Vercel. Please add DEEPSEEK_API_KEY to your project settings.' });
    }

    try {
        console.log(`[Backend] Attempting DeepSeek generation...`);
        const response = await fetch("https://api.deepseek.com/chat/completions", {
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
                temperature: 0.7,
                max_tokens: 4096
            })
        });

        if (!response.ok) {
            const errData = await response.json();
            console.error(`[Backend] DeepSeek API Error:`, errData);
            return res.status(response.status).json({
                error: `DeepSeek API Error: ${errData.error?.message || response.statusText}`
            });
        }

        const data = await response.json();
        const text = data.choices?.[0]?.message?.content;

        if (!text) {
            return res.status(500).json({ error: 'DeepSeek failed to generate content.' });
        }

        console.log(`[Backend] Success with DeepSeek-Chat`);
        return res.status(200).json({ text, modelUsed: 'deepseek-chat' });

    } catch (error) {
        console.error(`[Backend] Fatal Server Error:`, error.message);
        return res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
}
