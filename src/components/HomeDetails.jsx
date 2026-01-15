import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Terminal, Microscope } from 'lucide-react';

export default function HomeDetails() {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 820);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visionFeatures = [
        {
            icon: <Cpu size={32} />,
            title: "Module Mastering",
            desc: "Deep dive into ESP32, STM32, and Arduino ecosystems with peripheral-level control.",
            color: '#6366f1'
        },
        {
            icon: <Network size={32} />,
            title: "Protocol Excellence",
            desc: "Master MQTT, LoRaWAN, HTTP, and BLE for robust, industrial-grade data telemetry.",
            color: '#a855f7'
        },
        {
            icon: <Terminal size={32} />,
            title: "Production Firmware",
            desc: "Learn to write clean, modular C++ and MicroPython code with proper power management.",
            color: '#f43f5e'
        },
        {
            icon: <Microscope size={32} />,
            title: "Lab-Verified Projects",
            desc: "200+ projects with verified schematics, components, and real-world industrial testing.",
            color: '#10b981'
        }
    ];

    return (
        <div id="why" style={{ background: 'var(--background)' }}>
            {/* What is IoTnext Section */}
            <section style={{
                padding: '60px 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Glow Background */}
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            style={{
                                fontSize: '0.85rem',
                                fontWeight: '800',
                                color: 'var(--primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                display: 'block',
                                marginBottom: '1.5rem'
                            }}>
                            THE VISION
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            style={{
                                fontSize: isMobile ? '2rem' : '3.5rem',
                                fontWeight: '950',
                                lineHeight: isMobile ? 1.1 : 1.1,
                                letterSpacing: 'var(--ls-tight)',
                                marginBottom: '1.5rem',
                                color: 'var(--text)'
                            }}>
                            What is <span className="neon-text">IoTnext?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            style={{
                                color: 'var(--text-muted)',
                                lineHeight: isMobile ? '1.5' : '1.6',
                                fontSize: isMobile ? '1.05rem' : '1.1rem',
                                maxWidth: '100%',
                                margin: '0 auto',
                                fontWeight: '500'
                            }}>
                            IoTnext represents the definitive <span style={{ color: 'var(--text)', fontWeight: '700' }}>Engineering Ecosystem</span> for the Industry 4.0 era. We provide the technical density required to bridge the gap between prototype logic and <span style={{ color: 'var(--primary)', fontWeight: '700' }}>industrial-grade deployment</span>.
                        </motion.p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                        gap: isMobile ? '1rem' : '2rem'
                    }} className="grid-vision">
                        {visionFeatures.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="premium-card vision-card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: isMobile ? '1rem' : '1.5rem',
                                    padding: isMobile ? '1.5rem' : '2.5rem',
                                    background: 'var(--surface)',
                                    borderRadius: '1.5rem',
                                    border: '1px solid var(--border)',
                                    textAlign: 'left'
                                }}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '0.75rem',
                                    background: `${item.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: item.color
                                }}>
                                    {React.cloneElement(item.icon, { size: 24 })}
                                </div>
                                <div>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '800',
                                        marginBottom: '1rem',
                                        color: 'var(--text)'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: 'var(--text-muted)',
                                        lineHeight: '1.6'
                                    }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
