import React from 'react';
import { motion } from 'framer-motion';
import { roadmapSteps } from '../data/roadmap';
import { CheckCircle2, Info } from 'lucide-react';

export default function Roadmap() {
    return (
        <section className="container" id="roadmap" style={{ paddingBottom: '8rem', marginTop: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        background: 'rgba(59, 130, 246, 0.1)', 
                        padding: '0.5rem 1.5rem', 
                        borderRadius: '2rem', 
                        marginBottom: '1.5rem', 
                        border: '1px solid rgba(59, 130, 246, 0.2)' 
                    }}
                >
                    <Info size={16} style={{ color: '#3b82f6' }} />
                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#3b82f6' }}>Your Path to Mastery</span>
                </motion.div>
                
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: '800' }}>Success Roadmap</h2>
                <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    Follow this curated industrial path to transform from a hobbyist into a professional IoT engineer.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', position: 'relative' }}>
                {/* Visual Connection Line */}
                <div style={{ 
                    position: 'absolute', 
                    left: '50%', 
                    top: '50px', 
                    bottom: '50px', 
                    width: '2px', 
                    background: 'linear-gradient(to bottom, #3b82f6 0%, #8b5cf6 50%, #f43f5e 100%)', 
                    transform: 'translateX(-50%)', 
                    zIndex: -1, 
                    opacity: 0.2 
                }} />

                {roadmapSteps.map((stage, index) => (
                    <div key={index} style={{ width: '100%' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', marginBottom: '3rem' }}
                        >
                            <span style={{
                                background: `${stage.color}15`,
                                color: stage.color,
                                padding: '0.4rem 1.2rem',
                                borderRadius: '2rem',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                border: `1px solid ${stage.color}30`
                            }}>
                                {stage.level} Stage
                            </span>
                            <h3 style={{ fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>{stage.title}</h3>
                            <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>{stage.explanation}</p>
                        </motion.div>

                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                            gap: '2rem', 
                            maxWidth: '1000px', 
                            margin: '0 auto' 
                        }}>
                            {stage.steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{
                                        padding: '1.5rem',
                                        borderRadius: '1.5rem',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        display: 'flex',
                                        gap: '1.25rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    whileHover={{ y: -5, borderColor: stage.color, background: 'rgba(255, 255, 255, 0.05)' }}
                                >
                                    <div style={{ 
                                        background: `${stage.color}15`, 
                                        width: '40px', 
                                        height: '40px', 
                                        borderRadius: '10px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        flexShrink: 0 
                                    }}>
                                        <CheckCircle2 size={20} style={{ color: stage.color }} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600' }}>{step.name}</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}