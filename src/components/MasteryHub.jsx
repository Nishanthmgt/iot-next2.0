import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { masteryPhases } from '../data/masteryData';
import { ChevronRight, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import MasteryGuide from './MasteryGuide';
import { troubleshootingContent } from '../data/mastery/troubleshootingContent';
import { miniProjectsContent } from '../data/mastery/miniProjectsContent';
import { protocolsContent } from '../data/mastery/protocolsContent';
import { commonMistakesContent } from '../data/mastery/commonMistakesContent';
import { pinSelectionContent } from '../data/mastery/pinSelectionContent';
import { powerBatteryContent } from '../data/mastery/powerBatteryContent';
import { sensorPrinciplesContent } from '../data/mastery/sensorPrinciplesContent';
import { boardComparisonContent } from '../data/mastery/boardComparisonContent';
import { codeExplanationContent } from '../data/mastery/codeExplanationContent';

const contentMap = {
    'troubleshooting': troubleshootingContent,
    'mini-projects': miniProjectsContent,
    'protocols': protocolsContent,
    'common-mistakes': commonMistakesContent,
    'pin-selection': pinSelectionContent,
    'power-guide': powerBatteryContent,
    'sensor-principles': sensorPrinciplesContent,
    'board-comparison': boardComparisonContent,
    'code-hub': codeExplanationContent
};

export default function MasteryHub() {
    const [activePhase, setActivePhase] = useState(masteryPhases[0]);
    const [selectedGuide, setSelectedGuide] = useState(null);

    const handleGuideClick = (guideId) => {
        const content = contentMap[guideId];
        if (content) {
            setSelectedGuide(content);
        }
    };

    if (selectedGuide) {
        return <MasteryGuide content={selectedGuide} onBack={() => setSelectedGuide(null)} />;
    }

    return (
        <section className="section-mesh bg-dots" style={{ padding: '4rem 1rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'rgba(var(--primary-rgb), 0.1)',
                            padding: '0.6rem 1.75rem',
                            borderRadius: '2rem',
                            marginBottom: '2rem',
                            border: '1px solid var(--border)',
                            color: 'var(--primary)',
                            fontWeight: '700'
                        }}
                    >
                        <Sparkles size={18} />
                        <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Learning Ecosystem</span>
                    </motion.div>

                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                        IoT <span className="text-gradient">Mastery Hub</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                        Accelerate your technical growth with our curated phase-by-phase learning resources.
                    </p>
                </div>

                {/* Phase Selection */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '4rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    {masteryPhases.map((phase) => (
                        <button
                            key={phase.id}
                            onClick={() => setActivePhase(phase)}
                            style={{
                                padding: '1rem 2rem',
                                borderRadius: '1.25rem',
                                fontSize: '0.95rem',
                                fontWeight: '800',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                background: activePhase.id === phase.id ? phase.color : 'var(--surface)',
                                color: activePhase.id === phase.id ? 'white' : 'var(--text-muted)',
                                border: '1px solid var(--border)',
                                boxShadow: activePhase.id === phase.id ? `0 10px 20px ${phase.color}40` : 'none',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Phase {phase.id}
                        </button>
                    ))}
                </div>

                {/* Active Phase Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePhase.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        style={{ maxWidth: '1000px', margin: '0 auto' }}
                    >
                        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: activePhase.color }}>{activePhase.title}</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{activePhase.subtitle}</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {activePhase.items.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="glass-plus"
                                    onClick={() => handleGuideClick(item.id)}
                                    style={{
                                        padding: '2.5rem',
                                        borderRadius: '2rem',
                                        background: 'rgba(var(--primary-rgb), 0.02)',
                                        border: '1px solid var(--border)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        padding: '1rem',
                                        fontSize: '0.7rem',
                                        fontWeight: 900,
                                        color: activePhase.color,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {item.level}
                                    </div>

                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '16px',
                                        background: `${activePhase.color}15`,
                                        color: activePhase.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1.5rem',
                                        border: `1px solid ${activePhase.color}30`
                                    }}>
                                        {item.icon && <item.icon size={28} />}
                                    </div>

                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                                        {item.desc}
                                    </p>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: activePhase.color,
                                        fontWeight: 800,
                                        fontSize: '0.85rem'
                                    }}>
                                        OPEN GUIDE <ArrowRight size={16} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
