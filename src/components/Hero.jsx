// IoTNext v2.1 - Hero Refinement
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Layers, ArrowRight, CheckCircle2, GraduationCap, Binary, Cpu, Check, Terminal, Activity, Code2, Cog } from 'lucide-react';
import heroMobileBg from '../assets/hero_mobile_bg.jpg';

const Hero = ({ setView }) => {
    // Determine if we should show the mobile background via window width
    // But we'll mostly rely on CSS to toggle the actual visibility for SSR compatibility
    return (
        <section
            className="hero hero-mobile-v2"
            style={{
                minHeight: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
            }}
        >

            <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1200px', padding: '0 1.5rem' }}>
                <div style={{
                    textAlign: 'center',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.4rem 1.25rem',
                            background: 'rgba(var(--primary-rgb), 0.1)',
                            border: '1px solid rgba(var(--primary-rgb), 0.3)',
                            borderRadius: '50px',
                            marginBottom: '1.5rem',
                            fontSize: '0.75rem',
                            color: 'var(--primary)',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <div style={{ width: '6px', height: '6px', background: '#6366f1', borderRadius: '50%' }}></div>
                        <span>🚀 INDUSTRIAL ECOSYSTEM V2.0 LIVE</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="hero-title"
                        style={{
                            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                            fontWeight: '900',
                            letterSpacing: '-0.02em',
                            marginBottom: '1rem',
                            lineHeight: 1.1,
                        }}
                    >
                        The Complete <span className="text-gradient">IoT</span> <br />
                        Engineering Hub.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-subtitle"
                        style={{
                            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                            lineHeight: '1.6',
                            marginBottom: '2.5rem',
                            maxWidth: '700px',
                            margin: '0 auto 2.5rem auto',
                            fontWeight: '500'
                        }}
                    >
                        Build real-world IoT systems with industry-grade guidance.
                    </motion.p>

                    {/* Audience Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            display: 'flex',
                            gap: '0.75rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginBottom: '3.5rem'
                        }}
                    >
                        {[
                            { icon: <GraduationCap size={18} />, label: "Students" },
                            { icon: <Code2 size={18} />, label: "Developers" },
                            { icon: <Cog size={18} />, label: "IoT Engineers" }
                        ].map((item, idx) => (
                            <div key={idx} className="hero-audience-pill" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.6rem 1.25rem',
                                borderRadius: '12px',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <span className="pill-icon" style={{ color: 'var(--primary)' }}>{item.icon}</span>
                                {item.label}
                            </div>
                        ))}
                    </motion.div>

                    {/* Spacer for background visibility on mobile */}
                    <div className="mobile-bg-spacer" style={{ height: '0' }}></div>

                    {/* Feature Checkmarks */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-feature-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '1rem 2rem',
                            maxWidth: '600px',
                            margin: '0 auto 3rem auto',
                            textAlign: 'left',
                            paddingLeft: 'clamp(0rem, 5vw, 2rem)'
                        }}
                    >
                        {[
                            "500+ Projects", "Beginner to Advanced",
                            "Free Learning Platform", "Community Driven"
                        ].map((feature, idx) => (
                            <div key={idx} className="hero-feature-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                fontSize: '1rem',
                                fontWeight: '600'
                            }}>
                                <Check size={20} className="check-icon" strokeWidth={3} style={{ color: 'var(--primary)' }} />
                                <span style={{ color: 'var(--text)' }}>{feature}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="hero-cta-container"
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        <button
                            onClick={() => setView('projects')}
                            style={{
                                padding: '0.75rem 1.5rem',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                                color: 'white',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.2)'
                            }}
                            className="premium-btn"
                        >
                            <Zap size={16} fill="currentColor" />
                            Explore Projects
                        </button>
                        <button
                            onClick={() => setView('roadmap')}
                            style={{
                                padding: '0.75rem 1.5rem',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)',
                                color: 'white',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)'
                            }}
                            className="premium-btn-secondary"
                        >
                            <Target size={16} />
                            Start Learning (Free)
                        </button>
                    </motion.div>
                </div>
            </div>

            <style>{`
                    .hero-cta-container {
                        gap: 0.75rem !important;
                    }
                    .hero-cta-container button {
                        width: auto !important;
                        min-width: 160px;
                        padding: 0.6rem 1.25rem !important;
                        font-size: 0.85rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
