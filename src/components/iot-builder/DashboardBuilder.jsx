import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, Activity, ToggleLeft, Layout, Cpu, Plus, Save, Download, Sparkles, Code, Cable, Wand2, Send, Loader2, Settings, Key, ShieldCheck, X } from 'lucide-react';
import { generateProjectFromPrompt, generateFirmwareWithAI } from '../../utils/aiService';
import WiringGuide from './WiringGuide';
import { BOARDS } from '../../data/boards';
import { sensors } from '../../data/sensors';

export default function DashboardBuilder() {
    const [config, setConfig] = useState({
        boardId: 'esp32_dev_kit_v1',
        sensors: [],
        widgets: []
    });
    const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'wiring', 'code'
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [aiCode, setAiCode] = useState('');

    // API Key Management
    const [showSettings, setShowSettings] = useState(false);
    const [geminiKey, setGeminiKey] = useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('IOT_AI_KEYS'));
            return saved?.geminiKey || '';
        } catch (e) { return ''; }
    });

    const [isPlatformAiAvailable, setIsPlatformAiAvailable] = useState(false);

    useEffect(() => {
        // Dynamic check if the secure proxy is actually reachable (Vercel vs GitHub)
        fetch('/api/ai/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ping: true })
        })
            .then(res => setIsPlatformAiAvailable(res.status !== 404))
            .catch(() => setIsPlatformAiAvailable(false));
    }, []);

    const saveKeys = () => {
        localStorage.setItem('IOT_AI_KEYS', JSON.stringify({ geminiKey }));
        setShowSettings(false);
    };

    const isAiHealthy = geminiKey || isPlatformAiAvailable;

    const handleAIPrompt = async () => {
        if (!prompt.trim()) return;

        setIsGenerating(true);
        try {
            const result = await generateProjectFromPrompt(prompt, BOARDS, sensors);
            if (result) {
                setConfig(result);
                const code = await generateFirmwareWithAI(result);
                setAiCode(code);
                setActiveTab('dashboard');
            }
        } catch (error) {
            console.error("AI Generation Error:", error);
            alert(`AI Error: ${error.message}. Please check your Gemini API key in Settings.`);
        } finally {
            setIsGenerating(false);
        }
    };

    const downloadCode = () => {
        const code = aiCode || "// No code generated yet";
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'iot_project.ino';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <>
            <div className="container" style={{ padding: '2rem' }}>
                {/* Premium Header with AI Prompt */}
                <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0' }}>
                                IoT <span className="text-gradient">Builder</span>
                            </h2>
                        </motion.div>
                        <button
                            onClick={() => setShowSettings(true)}
                            className="btn-glow"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                padding: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: isAiHealthy ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                border: `1px solid ${isAiHealthy ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
                            }}
                        >
                            <Settings size={20} color={isAiHealthy ? '#22c55e' : '#ef4444'} />
                        </button>
                    </div>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Transform your vision into hardware through Natural Language.</p>

                    <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                        <div className="glass" style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0.5rem 0.5rem 0.5rem 1.8rem',
                            borderRadius: '1.5rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(255,255,255,0.05)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <Wand2 size={22} color="var(--primary)" style={{ marginRight: '1.2rem' }} />
                            <input
                                type="text"
                                placeholder="Describe your project (e.g., 'Smart Greenhouse Monitor with ESP32')"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAIPrompt()}
                                style={{ flex: 1, background: 'transparent', border: 'none', color: 'white', fontWeight: 600, fontSize: '1.1rem', outline: 'none' }}
                            />
                            <button
                                onClick={handleAIPrompt}
                                disabled={isGenerating}
                                className="btn-glow"
                                style={{
                                    padding: '0.8rem 1.8rem',
                                    borderRadius: '1.2rem',
                                    border: 'none',
                                    color: 'white',
                                    fontWeight: 800,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    background: 'linear-gradient(135deg, var(--primary), #a855f7)',
                                    fontSize: '1rem'
                                }}
                            >
                                {isGenerating ? <Loader2 className="animate-spin" size={20} /> : <><Sparkles size={20} /> Magic Build</>}
                            </button>
                        </div>
                    </div>
                </header>

                {/* Navigation Tabs Center Aligned */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(15, 23, 42, 0.4)', padding: '0.4rem', borderRadius: '1.25rem', border: '1px solid var(--border)' }}>
                        {[
                            { id: 'dashboard', label: 'Monitor', icon: Activity },
                            { id: 'wiring', label: 'Wiring Guide', icon: Cable },
                            { id: 'code', label: 'Firmware', icon: Code }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    padding: '0.7rem 1.5rem',
                                    borderRadius: '1rem',
                                    border: 'none',
                                    background: activeTab === tab.id ? 'var(--primary)' : 'transparent',
                                    color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                <tab.icon size={18} /> {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ minHeight: '500px' }}>
                    <AnimatePresence mode="wait">
                        {activeTab === 'dashboard' && (
                            <motion.div
                                key="dash"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}
                            >
                                {config.widgets.length === 0 ? (
                                    <div style={{
                                        padding: '5rem 2rem',
                                        borderRadius: '2.5rem',
                                        border: '2px dashed var(--border)',
                                        textAlign: 'center',
                                        background: 'rgba(255,255,255,0.01)'
                                    }}>
                                        <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 2rem' }}>
                                            <div style={{ position: 'absolute', inset: 0, background: 'var(--primary)', filter: 'blur(30px)', opacity: 0.2 }}></div>
                                            <Sparkles size={80} color="var(--primary)" style={{ position: 'relative' }} />
                                        </div>
                                        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem' }}>Your Project Starts Here</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
                                            Describe what you want to build above. The AI will design your dashboard, map your hardware, and write your code.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                                                    <Cpu size={14} /> System Online
                                                </div>
                                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{config.boardId.replace(/_/g, ' ').toUpperCase()}</h3>
                                            </div>
                                            <button onClick={downloadCode} className="btn-glow" style={{ padding: '0.6rem 1.2rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--surface)', border: '1px solid var(--border)', color: 'white', fontWeight: 700 }}>
                                                <Download size={18} /> Export .ino
                                            </button>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                                            {config.widgets.map((w, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ y: -5 }}
                                                    className="glass"
                                                    style={{
                                                        padding: '2rem',
                                                        borderRadius: '2rem',
                                                        background: 'rgba(30, 41, 59, 0.4)',
                                                        border: '1px solid rgba(255,255,255,0.05)',
                                                        overflow: 'hidden',
                                                        position: 'relative'
                                                    }}
                                                >
                                                    <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: 'var(--primary)', filter: 'blur(60px)', opacity: 0.05 }}></div>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                                        <div>
                                                            <div style={{ fontWeight: 600, fontSize: '0.75rem', opacity: 0.6, marginBottom: '0.25rem' }}>DATA NODE</div>
                                                            <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>{w.label}</div>
                                                        </div>
                                                        <div style={{ padding: '0.75rem', background: 'rgba(0,0,0,0.3)', borderRadius: '0.75rem', color: 'var(--primary)' }}>
                                                            {w.type === 'gauge' && <Gauge size={24} />}
                                                            {w.type === 'line' && <Activity size={24} />}
                                                            {w.type === 'toggle' && <ToggleLeft size={24} />}
                                                            {w.type === 'display' && <Layout size={24} />}
                                                        </div>
                                                    </div>

                                                    <div style={{
                                                        height: '160px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        background: 'rgba(15, 23, 42, 0.6)',
                                                        borderRadius: '1.5rem',
                                                        marginBottom: '1.5rem',
                                                        border: '1px solid rgba(255,255,255,0.03)'
                                                    }}>
                                                        {w.type === 'gauge' && (
                                                            <div style={{ position: 'relative', textAlign: 'center' }}>
                                                                <motion.div animate={{ rotate: [0, 90, 45, 120, 60] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                                                                    <Gauge size={60} color="var(--primary)" opacity={0.8} />
                                                                </motion.div>
                                                                <div style={{ fontSize: '1.5rem', fontWeight: 900, marginTop: '0.5rem' }}>--</div>
                                                            </div>
                                                        )}
                                                        {w.type === 'line' && (
                                                            <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '60px' }}>
                                                                {[...Array(12)].map((_, idx) => (
                                                                    <motion.div
                                                                        key={idx}
                                                                        animate={{ height: [20, 50, 30, 60, 20] }}
                                                                        transition={{ repeat: Infinity, duration: 2, delay: idx * 0.1, ease: "easeInOut" }}
                                                                        style={{ width: '8px', background: 'var(--primary)', borderRadius: '2px', opacity: 0.3 + (idx * 0.05) }}
                                                                    />
                                                                ))}
                                                            </div>
                                                        )}
                                                        {w.type === 'toggle' && (
                                                            <div style={{ width: '80px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '4px', cursor: 'pointer', position: 'relative' }}>
                                                                <div style={{ width: '32px', height: '32px', background: 'white', borderRadius: '50%', boxShadow: '0 2px 10px rgba(0,0,0,0.5)' }}></div>
                                                            </div>
                                                        )}
                                                        {w.type === 'display' && (
                                                            <div style={{ textAlign: 'center' }}>
                                                                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--primary)', textShadow: '0 0 20px var(--primary)' }}>00</div>
                                                                <div style={{ fontSize: '0.75rem', opacity: 0.5, letterSpacing: '0.2em' }}>VALUE</div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                                                        <span style={{ color: 'var(--text-muted)' }}>Pin Mapping</span>
                                                        <span style={{ fontWeight: 700, fontFamily: 'monospace', color: 'var(--primary)' }}>
                                                            {config.sensors.find(s => s.sensorId === w.dataSource)?.pinMapping ? Object.values(config.sensors.find(s => s.sensorId === w.dataSource).pinMapping)[0] : 'AUTO'}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        )}

                        {activeTab === 'wiring' && (
                            <div style={{ width: '100%' }}>
                                <WiringGuide config={config} />
                            </div>
                        )}

                        {activeTab === 'code' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                    <h4 style={{ fontWeight: 800, fontSize: '1.25rem' }}>Production Firmware</h4>
                                    <button onClick={downloadCode} className="btn-glow" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', background: 'var(--primary)', border: 'none', color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>Download .ino</button>
                                </div>
                                <pre style={{
                                    background: '#020617',
                                    padding: '2rem',
                                    borderRadius: '1.5rem',
                                    color: '#94a3b8',
                                    fontSize: '0.9rem',
                                    overflowX: 'auto',
                                    fontFamily: 'monospace',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    lineHeight: 1.6
                                }}>
                                    {aiCode || "// Click 'Magic Build' to generate production-ready firmware..."}
                                </pre>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* API Settings Modal */}
            <AnimatePresence>
                {showSettings && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(2, 6, 23, 0.8)',
                        backdropFilter: 'blur(12px)'
                    }}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="glass"
                            style={{
                                width: '90%',
                                maxWidth: '500px',
                                padding: '2.5rem',
                                borderRadius: '2rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                                position: 'relative'
                            }}
                        >
                            <button
                                onClick={() => setShowSettings(false)}
                                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                            >
                                <X size={20} />
                            </button>

                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '1.2rem', background: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                                    <ShieldCheck size={32} color="#a855f7" />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>AI Security Settings</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Keys are saved privately in your browser storage.</p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#a855f7', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Gemini API Key (2.0 Flash)</label>
                                <div style={{ position: 'relative' }}>
                                    <Sparkles size={18} color="#a855f7" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
                                    <input
                                        type="password"
                                        placeholder="Optional: Enter own Key..."
                                        value={geminiKey}
                                        onChange={(e) => setGeminiKey(e.target.value)}
                                        style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '1rem', color: 'white', outline: 'none' }}
                                    />
                                </div>
                                <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                                    <b>Optional:</b> Use your own key for higher limits. Otherwise, the platform key is used.
                                </p>
                            </div>

                            <button
                                onClick={saveKeys}
                                className="btn-glow"
                                style={{
                                    width: '100%',
                                    padding: '1.2rem',
                                    borderRadius: '1rem',
                                    border: 'none',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    fontWeight: 800,
                                    cursor: 'pointer',
                                    marginTop: '1rem'
                                }}
                            >
                                Save Configuration
                            </button>

                            <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
                                Your key is stored in <b>localStorage</b> and never sent to a server.
                            </p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

