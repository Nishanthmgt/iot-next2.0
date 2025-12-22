import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Award, Zap, Code, Cpu, Globe, ArrowRight } from 'lucide-react';

export default function HomeDetails() {
    const features = [
        { icon: <Target className="text-primary" />, title: "Structured Roadmap", desc: "From absolute beginner to industrial professional, we've mapped every step." },
        { icon: <Heart className="text-primary" />, title: "Free for All", desc: "High-quality IoT education should be accessible to every student globally." },
        { icon: <Award className="text-primary" />, title: "Project Based", desc: "Learn by doing with 200+ hands-on projects and real-world hardware." },
        { icon: <Zap className="text-primary" />, title: "Modern Tech", desc: "Focus on ESP32, MQTT, LoRa, and AIoT—the tech that industry uses today." }
    ];

    return (
        <section className="container" id="mission" style={{ padding: '4rem 0' }}>
            <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ position: 'relative' }}
                >
                    <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'var(--primary)', opacity: 0.05, borderRadius: '50%', filter: 'blur(30px)' }}></div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>Our Mission</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '900', lineHeight: 1.1 }}>
                        We Architect the <br />
                        <span style={{ color: 'var(--primary)' }}>IoT Professionals</span> of Tomorrow.
                    </h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        IoT isn't just about hardware; it's about the seamless integration of engineering, networking, and cloud intelligence. We strip away the noise and provide a singular, verified path to mastery.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div className="glass" style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Code size={18} className="text-primary" /> Verified Code</h4>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Every snippet is tested on real development boards.</p>
                        </div>
                        <div className="glass" style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Cpu size={18} className="text-primary" /> Hardware First</h4>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Focus on physical sensors and real-world results.</p>
                        </div>
                    </div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                border: '1px solid var(--border)',
                                background: 'var(--surface-hover)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}
                            whileHover={{ y: -8, borderColor: 'var(--primary)' }}
                        >
                            <div style={{ background: 'var(--surface)', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {f.icon}
                            </div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{f.title}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}