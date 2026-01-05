import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Greetings! I am Nexus AI, your expert IoT Engineering Assistant. How can I help you architect or build today?' }
    ]);
    const [input, setInput] = useState('');
    const [showGreeting, setShowGreeting] = useState(false);

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

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        setTimeout(() => {
            const lowerInput = input.toLowerCase();
            let botResponse = "";

            // Nexus AI Expert Knowledge Base mapping
            const knowledgeBase = [
                {
                    keywords: ['who are you', 'nexus', 'identity', 'about'],
                    response: "I am Nexus AI, your elite IoT Engineering Assistant. I specialize in system architecture, firmware optimization, and industrial-grade hardware integration. How shall we innovate today?"
                },
                {
                    keywords: ['esp32', 'dual core', 'pins', 'gpio'],
                    response: "The ESP32 is a beast for industrial IoT! It features dual-core processing, integrated Wi-Fi + BLE, and 34 GPIOs. Expert tip: Utilize its Hall Effect sensors and capacitive touch pins for human interface projects. Check Roadmap Level 2."
                },
                {
                    keywords: ['esp8266', 'budget', 'nodemcu'],
                    response: "ESP8266 is the pioneer of affordable Wi-Fi IoT. While it has fewer GPIOs than the ESP32, its power efficiency in Deep Sleep mode (approx. 20uA) makes it perfect for battery-operated remote weather stations."
                },
                {
                    keywords: ['mqtt', 'protocol', 'broker', 'pubsub'],
                    response: "MQTT (Message Queuing Telemetry Transport) is essential for efficient M2M communication. It uses a Publish/Subscribe model. For industrial reliability, I recommend using Mosquitto or AWS IoT Core with TLS 1.3 encryption."
                },
                {
                    keywords: ['security', 'tls', 'encryption', 'safe'],
                    response: "In IoT, security isn't optional. Nexus protocol recommendation: Implement TLS 1.3 for data in transit, use secure OTA (Over-the-Air) updates, and store sensitive keys in a hardware-based 'Secure Element' like the ATECC608A."
                },
                {
                    keywords: ['nb-iot', 'lte-m', 'cellular', 'sim'],
                    response: "NB-IoT (Narrowband IoT) is the future of massive sensor deployments. It offers extreme coverage and 10-year battery life. Perfect for smart meters and underground sensors where Wi-Fi/LoRa can't reach."
                },
                {
                    keywords: ['modbus', 'can bus', 'industrial', 'rs485'],
                    response: "For factory automation, Modbus RTU (over RS485) and CAN bus are industry standards. Nexus AI advice: Use shielded twisted pair cables to prevent EMI interference in high-voltage industrial environments."
                },
                {
                    keywords: ['power', 'solar', 'battery', 'deep sleep'],
                    response: "Power management is an art. For ESP32/ESP8266, always use `ESP.deepSleep()` between transmissions. Pair with a LiFePO4 battery and a 5V/6V solar panel for a self-sustaining remote node."
                },
                {
                    keywords: ['edge ai', 'tinyml', 'machine learning', 'vision'],
                    response: "Edge AI allows microcontrollers to process data locally without the cloud. With Nexus AI guidance, you can run TensorFlow Lite models on an ESP32 for gesture recognition or anomaly detection. Check Roadmap Level 10."
                },
                {
                    keywords: ['error', 'not working', 'fix', 'problem', 'troubleshoot'],
                    response: "Nexus Diagnosis Protocol: 1) Verify 'Common Ground' between sensors and MCU. 2) Check for 'Floating Pins' (use pull-up/pull-down resistors). 3) Monitor the Serial Debugger at 115200 baud. What specific error message are you seeing?"
                },
                {
                    keywords: ['hello', 'hi', 'hey'],
                    response: "Hello! 👋 I'm Nexus AI. I'm trained across 12,000+ IoT documentation pages to help you build Arduino, ESP32, and industrial systems. What's on the workbench today?"
                },
                {
                    keywords: ['thank'],
                    response: "Glad to be of service! Keep pushing the boundaries of what's possible. 🚀"
                }
            ];

            // Find the best matching response
            const match = knowledgeBase.find(kb =>
                kb.keywords.some(k => lowerInput.includes(k))
            );

            botResponse = match ? match.response : "That's an interesting technical challenge! While I analyze that specific query, let me suggest checking our Roadmap Level 8 (Cloud Systems) or Level 10 (Edge AI) for related architectural patterns. Could you provide more hardware details?";

            setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
        }, 800);
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
        </div>
    );
};

export default AIAssistant;
