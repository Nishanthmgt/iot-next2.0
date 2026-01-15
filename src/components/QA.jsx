import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Zap, Code, Cpu, Globe, Shield, Rocket } from 'lucide-react';

const faqs = [
    {
        category: "Getting Started",
        icon: <Rocket size={20} />,
        color: "#6366f1",
        questions: [
            {
                q: "What is IoTnext and who is it for?",
                a: "IoTnext is a high-fidelity engineering platform designed for anyone serious about IoT development—from beginners learning the fundamentals to professionals building industrial-grade systems. We provide comprehensive roadmaps, 200+ documented projects, sensor specifications, and microcontroller pinouts."
            },
            {
                q: "How do I start learning IoT on this platform?",
                a: "Begin with our 12-level Technical Roadmap (Roadmap section). Start at Level 1: Foundations to learn electronics basics, then progress through protocols, networking, and cloud integration. Each level builds on the previous one with hands-on projects and detailed explanations."
            },
            {
                q: "Is this platform free to use?",
                a: "Yes! IoTnext is completely free. All projects, roadmaps, sensor data, and pinout information are accessible without any subscription. We believe in democratizing industrial-grade IoT education."
            },
            {
                q: "Do I need prior programming experience?",
                a: "Not necessarily. Our roadmap starts from the absolute basics. However, familiarity with programming concepts (especially C/C++) will help you progress faster. We provide code examples and explanations for every project."
            }
        ]
    },
    {
        category: "Projects & Hardware",
        icon: <Cpu size={20} />,
        color: "#a855f7",
        questions: [
            {
                q: "What microcontrollers are supported?",
                a: "We support all major platforms: Arduino (Uno, Mega, Nano, ESP32, ESP8266), Raspberry Pi, STM32, Teensy, Particle, TI MSP430, and more. Our Pinout Lab provides detailed pin configurations for 50+ boards."
            },
            {
                q: "Can I submit my own IoT projects?",
                a: "Absolutely! Click the 'Share Project' button in the navigation bar. Fill in the project details, upload circuit diagrams, and share your code. After review, your project will be published to help the community."
            },
            {
                q: "Where can I find component specifications?",
                a: "Visit the Sensors section for detailed specs on 110+ components including DHT22, HC-SR04, MPU6050, and more. Each entry includes pin counts, operating voltage, communication protocols, and technical datasheets."
            },
            {
                q: "Are the project codes tested and verified?",
                a: "Yes. Every project undergoes industrial reliability testing. We verify hardware connections, code functionality, and 24/7 uptime stability before publishing. Projects marked 'Published' have passed our quality checks."
            }
        ]
    },
    {
        category: "Technical & Advanced",
        icon: <Code size={20} />,
        color: "#10b981",
        questions: [
            {
                q: "What protocols and communication methods are covered?",
                a: "We cover I2C, SPI, UART, MQTT, HTTP/HTTPS, WebSockets, LoRaWAN, Bluetooth (Classic & BLE), Zigbee, and more. Level 7 of our roadmap focuses specifically on wireless architecture and TLS encryption."
            },
            {
                q: "How do I implement cloud integration for my IoT devices?",
                a: "Our roadmap Level 8 covers cloud data pipelines using AWS IoT, Google Cloud IoT, Azure IoT Hub, and self-hosted solutions like Node-RED and InfluxDB. We provide step-by-step guides for MQTT broker setup and API integration."
            },
            {
                q: "Is there support for machine learning on microcontrollers?",
                a: "Yes! Level 10 (Industrial AIoT & TinyML) teaches you to deploy TensorFlow Lite models on ESP32 and Arduino. We cover predictive maintenance, anomaly detection, and low-power sleep optimization for edge AI."
            },
            {
                q: "What security practices are recommended?",
                a: "We emphasize TLS 1.3 encryption, secure OTA firmware updates, encrypted payloads, and proper authentication. Our 'Security First Protocol' section in the roadmap covers best practices for industrial deployments."
            }
        ]
    },
    {
        category: "Platform Features",
        icon: <Globe size={20} />,
        color: "#f59e0b",
        questions: [
            {
                q: "What is the Pinout Lab?",
                a: "Pinout Lab is an interactive tool providing precise pin mappings for 50+ microcontrollers. It includes GPIO registers, ADC channels, PWM pins, and communication interfaces. Essential for hardware design and debugging."
            },
            {
                q: "How does the AI Assistant (Nexus AI) work?",
                a: "Nexus AI is your IoT Engineering Assistant. Click the floating icon (bottom-right) to ask questions about Arduino, ESP32, sensors, protocols, or troubleshooting. It provides instant, context-aware answers based on our knowledge base."
            },
            {
                q: "Can I access the platform offline?",
                a: "The website requires an internet connection. However, you can bookmark projects and download code snippets for offline reference. We're working on a PWA (Progressive Web App) version for offline access."
            },
            {
                q: "How often is content updated?",
                a: "We continuously add new projects, update sensor specifications, and refine the roadmap. Major updates are released monthly. Follow our newsletter (footer) to stay informed about new features and content."
            }
        ]
    },
    {
        category: "Community & Support",
        icon: <Shield size={20} />,
        color: "#ef4444",
        questions: [
            {
                q: "How can I get help if I'm stuck on a project?",
                a: "Use the AI Assistant for instant help, check the project's 'Troubleshooting' section, or contact us at circuitvibe0311@gmail.com. We also recommend joining IoT communities on Discord and Reddit for peer support."
            },
            {
                q: "Can I contribute to the platform?",
                a: "Yes! Share your projects, suggest roadmap improvements, or report bugs. For technical contributions (code, documentation), contact us at circuitvibe0311@gmail.com. We welcome collaboration from the community."
            },
            {
                q: "Is there a certification or completion badge?",
                a: "Currently, we don't offer formal certifications. However, completing our 12-level roadmap and building projects demonstrates strong IoT engineering skills. We're exploring badge systems for future releases."
            },
            {
                q: "How do I report a bug or suggest a feature?",
                a: "Click 'Support & Feedback' in the mobile menu or footer. Email us at circuitvibe0311@gmail.com with details. For urgent issues, use the subject line '[URGENT]' to prioritize your request."
            }
        ]
    }
];

export default function QA() {
    const [openCategory, setOpenCategory] = useState(0);
    const [openQuestion, setOpenQuestion] = useState(null);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 820);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleQuestion = (categoryIndex, questionIndex) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenQuestion(openQuestion === key ? null : key);
    };

    return (
        <section className="container" style={{
            paddingTop: isMobile ? '1rem' : 'var(--app-py)',
            paddingBottom: isMobile ? '4rem' : 'var(--app-py)',
            minHeight: '100vh',
            paddingLeft: 'var(--app-px)',
            paddingRight: 'var(--app-px)'
        }}>
            <Helmet>
                <title>Common Questions & Debugging | IoT Troubleshooting FAQ | IoTNext</title>
                <meta name="description" content="Find answers to common IoT engineering questions, troubleshooting tips for ESP32/Arduino, and debugging guides for industrial protocols." />
                <meta property="og:title" content="IoT Troubleshooting & QA - IoTNext" />
                <meta property="og:description" content="Technical answers for technical builders. Resolve common IoT development issues." />
                <link rel="canonical" href="https://iotnext.store/qa" />
            </Helmet>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(var(--primary-rgb), 0.1)',
                        padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
                        borderRadius: '2rem',
                        border: '1px solid rgba(var(--primary-rgb), 0.2)',
                        marginBottom: isMobile ? '1rem' : '2rem'
                    }}
                >
                    <HelpCircle size={isMobile ? 16 : 20} color="var(--primary)" />
                    <span style={{ fontSize: isMobile ? '0.75rem' : '0.85rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.1em' }}>
                        KNOWLEDGE BASE
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontSize: isMobile ? '2.5rem' : 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '950',
                        marginBottom: isMobile ? '0.75rem' : '1.5rem',
                        letterSpacing: '-0.04em'
                    }}
                >
                    Questions & <span className="text-gradient">Answers</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        color: 'var(--text-muted)',
                        fontSize: isMobile ? '1rem' : '1.2rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: isMobile ? '1.5' : '1.8'
                    }}
                >
                    Find answers to common questions about IoTnext, our platform features, and IoT engineering best practices.
                </motion.p>
            </div>

            {/* Category Tabs */}
            <div style={{
                display: 'flex',
                gap: '0.75rem',
                marginBottom: isMobile ? '1.5rem' : '3rem',
                overflowX: 'auto',
                paddingBottom: '0.5rem',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
            }}>
                {faqs.map((category, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setOpenCategory(index)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            padding: isMobile ? '0.6rem 1.25rem' : '1rem 1.5rem',
                            borderRadius: isMobile ? '1rem' : '1.25rem',
                            background: openCategory === index ? 'var(--primary-gradient)' : 'var(--surface)',
                            color: openCategory === index ? 'white' : 'var(--text)',
                            border: openCategory === index ? 'none' : '1px solid var(--border)',
                            fontWeight: '800',
                            fontSize: isMobile ? '0.85rem' : '0.95rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            whiteSpace: 'nowrap',
                            boxShadow: openCategory === index ? '0 10px 30px rgba(var(--primary-rgb), 0.3)' : 'none',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {React.cloneElement(category.icon, { size: isMobile ? 16 : 20 })}
                        {category.category}
                    </motion.button>
                ))}
            </div>

            {/* FAQ Accordion */}
            <div className="glass-plus" style={{ borderRadius: isMobile ? '1.5rem' : '2rem', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={openCategory}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{ padding: isMobile ? '1.25rem' : '2rem' }}
                    >
                        {faqs[openCategory].questions.map((faq, qIndex) => {
                            const isOpen = openQuestion === `${openCategory}-${qIndex}`;
                            return (
                                <div
                                    key={qIndex}
                                    style={{
                                        borderBottom: qIndex < faqs[openCategory].questions.length - 1 ? '1px solid var(--border)' : 'none',
                                        paddingBottom: isMobile ? '1rem' : '1.5rem',
                                        marginBottom: qIndex < faqs[openCategory].questions.length - 1 ? (isMobile ? '1rem' : '1.5rem') : '0'
                                    }}
                                >
                                    <button
                                        onClick={() => toggleQuestion(openCategory, qIndex)}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            border: 'none',
                                            padding: isMobile ? '0.5rem' : '1rem',
                                            borderRadius: '1rem',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            transition: 'all 0.3s ease'
                                        }}
                                        className="faq-question-btn"
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1rem', flex: 1 }}>
                                            <div
                                                style={{
                                                    width: isMobile ? '6px' : '8px',
                                                    height: isMobile ? '6px' : '8px',
                                                    borderRadius: '50%',
                                                    background: faqs[openCategory].color,
                                                    boxShadow: `0 0 10px ${faqs[openCategory].color}`
                                                }}
                                            />
                                            <span style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: '700', color: 'var(--text)', lineHeight: 1.3 }}>
                                                {faq.q}
                                            </span>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ color: 'var(--primary)' }}
                                        >
                                            <ChevronDown size={isMobile ? 20 : 24} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div
                                                    style={{
                                                        padding: isMobile ? '1rem 1rem 0.5rem 1.75rem' : '1.5rem 1.5rem 0.5rem 3rem',
                                                        color: 'var(--text-muted)',
                                                        fontSize: isMobile ? '0.9rem' : '1.05rem',
                                                        lineHeight: isMobile ? '1.5' : '1.8',
                                                        fontWeight: '500'
                                                    }}
                                                >
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Contact CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass"
                style={{
                    marginTop: isMobile ? '2.5rem' : '4rem',
                    padding: isMobile ? '2rem 1.5rem' : '3rem',
                    borderRadius: isMobile ? '1.5rem' : '2rem',
                    textAlign: 'center',
                    border: '1px solid rgba(var(--primary-rgb), 0.2)',
                    background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.05), rgba(var(--secondary-rgb), 0.05))'
                }}
            >
                <Zap size={isMobile ? 32 : 48} color="var(--primary)" style={{ marginBottom: isMobile ? '1rem' : '1.5rem' }} />
                <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: '900', marginBottom: isMobile ? '0.75rem' : '1rem' }}>
                    Still Have Questions?
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.95rem' : '1.1rem', marginBottom: isMobile ? '1.5rem' : '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Our team is here to help. Reach out for technical support, project guidance, or partnership inquiries.
                </p>
                <a
                    href="mailto:circuitvibe0311@gmail.com"
                    className="btn btn-primary btn-primary-shiny"
                    style={{
                        padding: isMobile ? '0.75rem 1.5rem' : '1rem 2.5rem',
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        borderRadius: isMobile ? '1rem' : '1.5rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                    }}
                >
                    Contact Support
                    <ChevronDown size={isMobile ? 18 : 20} style={{ transform: 'rotate(-90deg)' }} />
                </a>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .faq-question-btn:hover {
                    background: rgba(var(--primary-rgb), 0.05);
                }
                
                @media (max-width: 768px) {
                    .faq-question-btn span {
                        font-size: 1rem;
                    }
                }
            `}} />
        </section>
    );
}
