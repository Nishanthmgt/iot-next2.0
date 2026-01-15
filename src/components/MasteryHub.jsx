import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { masteryPhases } from '../data/masteryData';
import { ChevronRight, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
const MasteryGuide = React.lazy(() => import('./MasteryGuide'));

// Dynamic imports for code splitting - content loads only when needed
const contentMap = {
    'troubleshooting': () => import('../data/mastery/troubleshootingContent').then(m => m.troubleshootingContent),
    'mini-projects': () => import('../data/mastery/miniProjectsContent').then(m => m.miniProjectsContent),
    'protocols': () => import('../data/mastery/protocolsContent').then(m => m.protocolsContent),
    'common-mistakes': () => import('../data/mastery/commonMistakesContent').then(m => m.commonMistakesContent),
    'pin-selection': () => import('../data/mastery/pinSelectionContent').then(m => m.pinSelectionContent),
    'power-guide': () => import('../data/mastery/powerBatteryContent').then(m => m.powerBatteryContent),
    'sensor-principles': () => import('../data/mastery/sensorPrinciplesContent').then(m => m.sensorPrinciplesContent),
    'board-comparison': () => import('../data/mastery/boardComparisonContent').then(m => m.boardComparisonContent),
    'code-hub': () => import('../data/mastery/codeExplanationContent').then(m => m.codeExplanationContent),
    'project-selection': () => import('../data/mastery/projectSelectionContent').then(m => m.projectSelectionContent),
    'mini-project-ideas': () => import('../data/mastery/miniProjectIdeasContent').then(m => m.miniProjectIdeasContent),
    'fyp-ideas': () => import('../data/mastery/fypIdeasContent').then(m => m.fypIdeasContent),
    'interview-prep': () => import('../data/mastery/interviewPrepContent').then(m => m.interviewPrepContent)
};

export default function MasteryHub() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);
    const [activePhase, setActivePhase] = useState(masteryPhases[0]);
    const [selectedGuide, setSelectedGuide] = useState(null);
    const [isLoadingContent, setIsLoadingContent] = useState(false);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleGuideClick = async (guideId) => {
        const contentLoader = contentMap[guideId];
        if (contentLoader) {
            setIsLoadingContent(true);
            try {
                const content = await contentLoader();
                setSelectedGuide(content);
            } catch (error) {
                console.error('Failed to load content:', error);
            } finally {
                setIsLoadingContent(false);
            }
        }
    };

    const DynamicLoadingFallback = () => (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem'
        }}>
            <div className="iot-loader">
                <div className="iot-loader-inner"></div>
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Preparing guide...</div>
        </div>
    );

    if (isLoadingContent) {
        return <DynamicLoadingFallback />;
    }

    if (selectedGuide) {
        return (
            <React.Suspense fallback={<DynamicLoadingFallback />}>
                <MasteryGuide content={selectedGuide} onBack={() => setSelectedGuide(null)} />
            </React.Suspense>
        );
    }

    if (selectedGuide) {
        return <MasteryGuide content={selectedGuide} onBack={() => setSelectedGuide(null)} />;
    }

    return (
        <section className="section-mesh bg-dots" style={{ padding: isMobile ? '1rem 1rem 4rem' : '4rem 1rem' }}>
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

                    <h1 style={{
                        fontSize: isMobile ? '2.25rem' : '3.5rem',
                        fontWeight: '950',
                        marginBottom: '1rem',
                        letterSpacing: 'var(--ls-tight)',
                        lineHeight: 'var(--lh-tight)'
                    }}>
                        IoT <span className="text-gradient">Mastery Hub</span>
                    </h1>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: isMobile ? '1rem' : '1.2rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: isMobile ? '1.5' : '1.6',
                        fontWeight: '500'
                    }}>
                        Accelerate your technical growth with our curated phase-by-phase learning resources.
                    </p>
                </div>

                {/* Phase Selection */}
                {/* Phase Selection - Scrollable on Mobile, Centered on Desktop */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '4rem',
                    justifyContent: isMobile ? 'flex-start' : 'center',
                    flexWrap: isMobile ? 'nowrap' : 'wrap',
                    overflowX: isMobile ? 'auto' : 'visible',
                    paddingBottom: isMobile ? '1rem' : '0',
                    scrollbarWidth: 'none', // Hide scrollbar for cleaner look
                    msOverflowStyle: 'none',
                    paddingLeft: isMobile ? '1rem' : '0', // Add padding for scroll start
                    paddingRight: isMobile ? '1rem' : '0',
                    marginRight: isMobile ? '-1rem' : '0', // Negative margin to align with container
                    marginLeft: isMobile ? '-1rem' : '0'
                }}>
                    {masteryPhases.map((phase) => (
                        <button
                            key={phase.id}
                            onClick={() => setActivePhase(phase)}
                            style={{
                                padding: isMobile ? '0.6rem 1.1rem' : '1rem 2rem',
                                borderRadius: '1rem',
                                fontSize: isMobile ? '0.8rem' : '0.95rem',
                                fontWeight: '800',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                background: activePhase.id === phase.id ? phase.color : 'var(--surface)',
                                color: activePhase.id === phase.id ? 'white' : 'var(--text-muted)',
                                border: '1px solid var(--border)',
                                boxShadow: activePhase.id === phase.id ? `0 10px 20px ${phase.color}40` : 'none',
                                whiteSpace: 'nowrap',
                                flexShrink: 0 // Prevent shrinking
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
                        <div style={{ marginBottom: isMobile ? '2rem' : '3rem', textAlign: 'center' }}>
                            <h2 style={{ fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: '950', color: activePhase.color, letterSpacing: 'var(--ls-tight)' }}>{activePhase.title}</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: '500' }}>{activePhase.subtitle}</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: isMobile ? '1.5rem' : '2rem' }}>
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
                                        padding: isMobile ? '1.5rem' : '2.5rem',
                                        borderRadius: '1.5rem',
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
