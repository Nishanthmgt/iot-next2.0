import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Lightbulb, Send, MessageCircle, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function InteractiveHub() {
    const [idea, setIdea] = useState("");
    const [botMessage, setBotMessage] = useState("");
    const [chat, setChat] = useState([{ type: 'bot', text: 'Hi! I am the IoTnext Aide. How can I help you today?' }]);

    const handleSendIdea = (e) => {
        e.preventDefault();
        if (idea.trim()) {
            alert("Idea submitted! Our team will review it and get back to you via email.");
            setIdea("");
        }
    };

    const handleBotChat = (e) => {
        e.preventDefault();
        if (botMessage.trim()) {
            setChat([...chat, { type: 'user', text: botMessage }]);
            setTimeout(() => {
                setChat(prev => [...prev, { type: 'bot', text: "I'm currently in 'UI-Preview' mode, but soon I'll be able to help you debug your code and suggest circuits!" }]);
            }, 1000);
            setBotMessage("");
        }
    };

    return (
        <section className="container" style={{ padding: '6rem 0' }}>
            <div className="grid grid-2" style={{ gap: '3rem' }}>

                {/* Help Bot Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass"
                    style={{ padding: '2.5rem', borderRadius: '2.5rem', display: 'flex', flexDirection: 'column', height: '500px' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ padding: '0.8rem', background: 'var(--primary)', borderRadius: '1rem', color: 'white' }}>
                            <Bot size={28} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>IoTnext Assist Bot</h3>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AI-Powered Hardware Debugger</p>
                        </div>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.5rem' }}>
                        <AnimatePresence>
                            {chat.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    style={{
                                        alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                                        background: msg.type === 'user' ? 'var(--primary)' : 'var(--surface-hover)',
                                        color: msg.type === 'user' ? 'white' : 'var(--text)',
                                        padding: '0.8rem 1.2rem',
                                        borderRadius: msg.type === 'user' ? '1.2rem 1.2rem 0.2rem 1.2rem' : '1.2rem 1.2rem 1.2rem 0.2rem',
                                        maxWidth: '85%',
                                        fontSize: '0.9rem',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    {msg.text}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <form onSubmit={handleBotChat} style={{ display: 'flex', gap: '0.75rem' }}>
                        <input
                            type="text"
                            placeholder="Ask about Arduino, Sensors, ESP32..."
                            value={botMessage}
                            onChange={(e) => setBotMessage(e.target.value)}
                            style={{ flex: 1, padding: '1rem', borderRadius: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
                        />
                        <button type="submit" className="btn btn-primary" style={{ padding: '1rem', borderRadius: '1rem' }}>
                            <Send size={20} />
                        </button>
                    </form>
                </motion.div>

                {/* Share Idea Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass"
                    style={{
                        padding: '2.5rem',
                        borderRadius: '2.5rem',
                        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(var(--primary-rgb), 0.05) 100%)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--surface-hover)', padding: '0.4rem 1rem', borderRadius: '2rem', marginBottom: '1.5rem', border: '1px solid var(--border)' }}>
                            <Lightbulb size={16} className="text-primary" />
                            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)' }}>Innovation Hub</span>
                        </div>
                        <h3 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '1rem', lineHeight: 1.1 }}>Share Your Idea <br /> & Projects.</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                            Built something cool? Have a vision for a smart device? Submit your project or idea, and we might feature it on IoTnext with full credit!
                        </p>
                    </div>

                    <form onSubmit={handleSendIdea} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div className="grid grid-2" style={{ gap: '1rem' }}>
                            <input type="text" placeholder="Project Name" className="glass" style={{ padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--surface)' }} />
                            <input type="email" placeholder="Your Email" className="glass" style={{ padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--surface)' }} />
                        </div>
                        <textarea
                            placeholder="Describe your project, the components used, and what it solves..."
                            value={idea}
                            onChange={(e) => setIdea(e.target.value)}
                            rows={6}
                            style={{ padding: '1rem', borderRadius: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', resize: 'none' }}
                        />
                        <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem', justifyContent: 'center', borderRadius: '1rem' }}>
                            Submit to IoTnext <Sparkles size={18} />
                        </button>
                    </form>

                    <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            <CheckCircle2 size={16} className="text-secondary" /> Featured Projects
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            <CheckCircle2 size={16} className="text-secondary" /> Technical Review
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}