import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { callAI } from '../utils/aiService';

const NEXUS_SYSTEM_PROMPT = `
You are Nexus AI, the Senior IoT Architect for the IoTNext platform. 
Your tone is professional, technical, elite, and encouraging. 
You specialize in:
1. System architecture (ESP32, Arduino, ARM Cortex, Industrial PLC).
2. Firmware optimization (Deep Sleep, RTOS, memory management).
3. Connectivity protocols (MQTT, HTTP, LoRaWAN, NB-IoT, Modbus).
4. Hardware troubleshooting (Ground loops, signal interference, pin mappings).

Your goal is to provide high-fidelity technical advice. When asked about specific hardware (like DHT11, OLED, LED), provide exact technical details, pinout advice, and expert tips.
Always reference the IoTNext Roadmap or Pinout Lab where relevant.
Keep responses concise but value-packed.
`;

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Greetings! I am Nexus AI, your expert IoT Engineering Assistant. How can I help you architect or build today?' }
    ]);
    const [input, setInput] = useState('');
    const [showGreeting, setShowGreeting] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        if (isOpen) return;

        const timer = setTimeout(() => {
            setShowGreeting(true);
        }, 3000);

        const hideTimer = setTimeout(() => {
            setShowGreeting(false);
        }, 10000);

        return () => { clearTimeout(timer); clearTimeout(hideTimer); };
    }, [isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isGenerating) return;

        const userMsgText = input;
        const userMsg = { role: 'user', text: userMsgText };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsGenerating(true);

        try {
            const botResponse = await callAI(userMsgText, NEXUS_SYSTEM_PROMPT);
            setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
        } catch (error) {
            console.error("Nexus AI Error:", error);
            setMessages(prev => [...prev, {
                role: 'bot',
                text: "I encountered a signal interference while processing your request. Please ensure your project parameters are correct or try again in a moment. (Error: " + error.message + ")"
            }]);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="ai-assistant-wrapper" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="glass-plus"
                        style={{
                            width: '380px',
                            height: '600px',
                            borderRadius: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: '1.5rem',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '1.75rem', background: 'var(--primary-gradient)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.6rem', borderRadius: '14px' }}>
                                    <Sparkles size={24} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>Nexus AI</div>
                                    <div style={{ fontSize: '0.75rem', opacity: 0.9, fontWeight: 500 }}>Senior IoT Architect</div>
                                </div>
                            </div>
                            <X size={20} style={{ cursor: 'pointer', opacity: 0.8 }} onClick={() => setIsOpen(false)} />
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem', background: 'rgba(var(--background-rgb), 0.3)' }}>
                            {messages.map((msg, i) => (
                                <div key={i} style={{
                                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%',
                                    padding: '1rem 1.25rem',
                                    borderRadius: msg.role === 'user' ? '1.5rem 1.5rem 0.25rem 1.5rem' : '1.5rem 1.5rem 1.5rem 0.25rem',
                                    background: msg.role === 'user' ? 'var(--primary-gradient)' : 'var(--surface)',
                                    color: msg.role === 'user' ? 'white' : 'var(--text)',
                                    fontSize: '0.95rem',
                                    fontWeight: '500',
                                    lineHeight: '1.5',
                                    boxShadow: msg.role === 'bot' ? 'var(--shadow)' : '0 10px 20px rgba(var(--primary-rgb), 0.2)',
                                    border: msg.role === 'bot' ? '1px solid var(--border)' : 'none'
                                }}>
                                    {msg.text}
                                </div>
                            ))}
                            {isGenerating && (
                                <div style={{
                                    alignSelf: 'flex-start',
                                    padding: '1rem 1.25rem',
                                    borderRadius: '1.5rem 1.5rem 1.5rem 0.25rem',
                                    background: 'var(--surface)',
                                    color: 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    display: 'flex',
                                    gap: '0.5rem',
                                    alignItems: 'center',
                                    border: '1px solid var(--border)',
                                    boxShadow: 'var(--shadow)'
                                }}>
                                    <Sparkles size={14} className="spinning-ai" /> Nexus AI is thinking...
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div style={{ padding: '1.25rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '0.75rem', background: 'var(--surface)' }}>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Consult the architect..."
                                style={{ flex: 1, background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '0.8rem 1.25rem', color: 'var(--text)', outline: 'none', fontSize: '0.95rem', fontWeight: '500' }}
                            />
                            <button onClick={handleSend} className="btn-primary btn-primary-shiny" style={{ width: '48px', height: '48px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Send size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showGreeting && !isOpen && (
                    <motion.div
                        key="greeting-bubble"
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="glass"
                        style={{
                            position: 'absolute',
                            bottom: '90px',
                            right: '0',
                            background: 'var(--primary-gradient)',
                            color: 'white',
                            padding: '1rem 1.5rem',
                            borderRadius: '1.5rem 1.5rem 0.25rem 1.5rem',
                            fontSize: '0.95rem',
                            fontWeight: '700',
                            whiteSpace: 'nowrap',
                            boxShadow: 'var(--shadow-glow)',
                            pointerEvents: 'none',
                            border: 'none'
                        }}
                    >
                        Ready to innovate? 🚀
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowGreeting(false);
                }}
                className="btn-primary-shiny"
                style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '24px',
                    background: 'var(--primary-gradient)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 15px 30px rgba(var(--primary-rgb), 0.4)',
                    cursor: 'pointer',
                    border: 'none',
                    position: 'relative',
                    zIndex: 2
                }}
            >
                {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
            </motion.button>
            <style>{`
                @keyframes ai-spin {
                    0% { transform: rotate(0deg) scale(1); }
                    50% { transform: rotate(180deg) scale(1.2); }
                    100% { transform: rotate(360deg) scale(1); }
                }
                .spinning-ai {
                    animation: ai-spin 2s linear infinite;
                    color: var(--primary);
                }
            `}</style>
        </div>
    );
};

export default AIAssistant;
