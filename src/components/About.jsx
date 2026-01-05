import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Cpu, Users, ArrowRight, Layers, Globe, Zap } from 'lucide-react';

export default function About({ setView }) {
    const stats = [
        { label: "Engineering Projects", value: "200+" },
        { label: "Global Engineers", value: "10k+" },
        { label: "Technical Depth", value: "Advanced" },
        { label: "Platform Status", value: "v2.0" }
    ];

    return (
        <section className="container" style={{ padding: '6rem 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '6rem' }}
            >
                <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1.5rem' }}>Our DNA</span>
                <h1 style={{ fontSize: '4.5rem', fontWeight: '950', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
                    Architecting the <span className="text-gradient">Engineers of Tomorrow.</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: '500' }}>
                    IoTnext is the definitive repository for professional IoT documentation, high-fidelity projects, and industrial-grade hardware wisdom.
                </p>
            </motion.div>

            <div className="grid grid-4" style={{ gap: '1.5rem', marginBottom: '8rem' }}>
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-plus"
                        style={{ padding: '2rem', borderRadius: '1.5rem', textAlign: 'center', border: '1px solid var(--border)' }}
                    >
                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.5rem' }}>{stat.value}</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-2" style={{ gap: '5rem', alignItems: 'center', marginBottom: '8rem' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '2rem' }}>Beyond Hobbyist Tinkering.</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                        The gap between a prototype and a product is massive. IoTnext exists to bridge that chasm. Our platform focuses on **Technical Density**—providing not just code, but the electrical constraints, firmware architecture, and industrial use-cases required to build real systems.
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { icon: <Shield size={18} />, text: "Verified Schematics & Code" },
                            { icon: <Target size={18} />, text: "Industrial Protocol Mastery" },
                            { icon: <Layers size={18} />, text: "Scalable Hardware Logic" }
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '600', color: 'var(--text)' }}>
                                <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'var(--primary-gradient)', opacity: 0.1, filter: 'blur(80px)', borderRadius: '50%' }}></div>
                    <div className="glass-plus" style={{ padding: '3rem', borderRadius: '2.5rem', border: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
                        <Cpu size={60} color="var(--primary)" style={{ marginBottom: '2rem' }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>The High-Fidelity Promise</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            We believe in the power of "High-Performance Documentation". Every project on IoTnext is a result of rigorous hardware testing on ESP32, STM32, and Arduino ecosystems, ensuring what you build works in the real world.
                        </p>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass"
                style={{ padding: '4rem', borderRadius: '2.5rem', textAlign: 'center', background: 'var(--primary-gradient)', color: 'white' }}
            >
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>Ready to Scale Your Knowledge?</h2>
                <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9 }}>Join thousands of professional builders mastering the future of IoT.</p>
                <button
                    className="btn btn-primary"
                    style={{ background: 'white', color: 'var(--primary)', padding: '1.25rem 2.5rem', borderRadius: '1.5rem', fontWeight: '800', fontSize: '1.1rem' }}
                    onClick={() => setView('projects')}
                >
                    Explore Repository <ArrowRight size={22} style={{ marginLeft: '10px' }} />
                </button>
            </motion.div>
        </section>
    );
}
