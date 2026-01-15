import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Code, Terminal, BookOpen, Brain, Download, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { cProgrammingCourse } from '../data/cProgrammingCourse';
import { setResumeCourse } from '../hooks/useDashboardData';

const ChallengeItem = ({ challenge, color }) => {
    const [showHint, setShowHint] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    return (
        <div style={{
            background: 'var(--background)',
            borderRadius: '16px',
            border: '1px solid var(--border)',
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '1rem'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: challenge.difficulty === 'Beginner' ? '#22c55e' :
                    challenge.difficulty === 'Intermediate' ? '#eab308' : '#ef4444'
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Brain size={18} style={{ color }} />
                    {challenge.title}
                </h3>
                <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    background: challenge.difficulty === 'Beginner' ? 'rgba(34, 197, 94, 0.1)' :
                        challenge.difficulty === 'Intermediate' ? 'rgba(234, 179, 8, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: challenge.difficulty === 'Beginner' ? '#22c55e' :
                        challenge.difficulty === 'Intermediate' ? '#eab308' : '#ef4444'
                }}>{challenge.difficulty}</span>
            </div>

            <div style={{
                padding: '1rem',
                background: 'rgba(251, 191, 36, 0.05)',
                borderRadius: '12px',
                marginBottom: '1rem',
                border: '1px solid rgba(251, 191, 36, 0.1)'
            }}>
                <p style={{ fontWeight: '500', lineHeight: '1.5' }}>{challenge.problem}</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <button
                    onClick={() => setShowHint(!showHint)}
                    style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <Brain size={14} /> {showHint ? 'Hide Hint' : 'Show Hint'}
                </button>
                <button
                    onClick={() => setShowSolution(!showSolution)}
                    style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        background: color,
                        border: 'none',
                        color: 'white',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <Code size={14} /> {showSolution ? 'Hide Solution' : 'View Solution'}
                </button>
            </div>

            <AnimatePresence>
                {showHint && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden', marginBottom: '1rem' }}
                    >
                        <div style={{
                            padding: '1rem',
                            background: 'var(--surface)',
                            borderRadius: '8px',
                            borderLeft: `3px solid ${color}`,
                            fontSize: '0.9rem',
                            fontStyle: 'italic',
                            color: 'var(--text-secondary)'
                        }}>
                            <strong>💡 Hint:</strong> {challenge.hint}
                        </div>
                    </motion.div>
                )}

                {showSolution && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <pre style={{
                            background: '#1e1e2e',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            overflowX: 'auto',
                            color: '#a6accd',
                            fontSize: '0.9rem',
                            border: '1px solid #313244'
                        }}>
                            <code>{challenge.solution}</code>
                        </pre>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const CProgrammingCourse = ({ onBack }) => {
    const [activeLevel, setActiveLevel] = useState(0);
    const [expandedTopic, setExpandedTopic] = useState(null);
    const [showCode, setShowCode] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll to top when level changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeLevel]);

    const currentLevelData = cProgrammingCourse.levels.find(l => l.level === activeLevel);

    const toggleTopic = (index) => {
        setExpandedTopic(expandedTopic === index ? null : index);
        setShowCode(null);
    };

    return (
        <div className="course-container" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '1rem' : '3rem 2rem',
            color: 'var(--text)',
            minHeight: '100vh',
            background: 'var(--background)'
        }}>
            {/* Header: Mobile vs Desktop */}
            {isMobile ? (
                <div className="course-header" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
                        C Programming
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
                        Embedded firmware mastery
                    </p>
                </div>
            ) : (
                <div className="course-header-desktop" style={{ marginBottom: '4rem', textAlign: 'center', padding: '2rem 0', position: 'relative' }}>
                    <div style={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: '600px', height: '300px',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        zIndex: -1
                    }} />
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '2rem',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        background: 'rgba(59, 130, 246, 0.05)',
                        color: '#3b82f6',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        marginBottom: '1.5rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        Core Curriculum
                    </span>
                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: '800',
                        marginBottom: '1.25rem',
                        letterSpacing: '-0.03em',
                        lineHeight: '1.1'
                    }}>
                        Masters <span style={{ color: '#3b82f6' }}>C Programming</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                        The definitive guide to embedded firmware. Understand memory, pointers, and hardware registers at a professional level.
                    </p>
                </div>
            )}

            {/* Level Navigation */}
            <div className="level-nav" style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '1rem',
                padding: '1rem 0.5rem',
                marginBottom: '2rem',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'thin',
                msOverflowStyle: 'auto',
                overscrollBehaviorX: 'contain'
            }}>
                {cProgrammingCourse.levels.map((level) => (
                    <button
                        key={level.level}
                        onClick={() => {
                            setActiveLevel(level.level);
                            setExpandedTopic(null);
                        }}
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '12px',
                            background: activeLevel === level.level ? level.color : 'var(--surface)',
                            color: activeLevel === level.level ? '#fff' : 'var(--text-secondary)',
                            border: `1px solid ${activeLevel === level.level ? level.color : 'var(--border)'}`,
                            whiteSpace: 'nowrap',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                            boxShadow: activeLevel === level.level ? `0 4px 12px ${level.color}40` : 'none'
                        }}
                    >
                        Level {level.level}
                    </button>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="content-grid" style={{
                display: 'grid',
                gap: '2rem'
            }}>
                <motion.div
                    key={activeLevel}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={(e, info) => {
                        const threshold = 100;
                        if (info.offset.x > threshold && activeLevel > 0) {
                            setActiveLevel(prev => prev - 1);
                            setExpandedTopic(null);
                        } else if (info.offset.x < -threshold && activeLevel < cProgrammingCourse.levels.length - 1) {
                            setActiveLevel(prev => prev + 1);
                            setExpandedTopic(null);
                        }
                    }}
                    style={{
                        background: 'var(--surface)',
                        borderRadius: isMobile ? '12px' : '20px',
                        padding: isMobile ? '1.25rem' : '2rem',
                        border: '1px solid var(--border)',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'grab',
                        touchAction: 'pan-y'
                    }}
                    whileDrag={{ cursor: 'grabbing' }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: currentLevelData.color
                    }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <h2 style={{ fontSize: isMobile ? '1.25rem' : '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                            <span style={{
                                background: `${currentLevelData.color}20`,
                                color: currentLevelData.color,
                                padding: '0.4rem 0.8rem',
                                borderRadius: '8px',
                                fontSize: isMobile ? '0.9rem' : '1.2rem',
                                whiteSpace: 'nowrap'
                            }}>Level {currentLevelData.level}</span>
                            <span style={{ lineHeight: 1.2 }}>{currentLevelData.title}</span>
                        </h2>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(var(--primary-rgb), 0.05)', padding: '0.4rem 0.8rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                            <ArrowRight size={14} className="animate-pulse" />
                            <span>Swipe or drag to navigate</span>
                        </div>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        {currentLevelData.description}
                    </p>

                    {/* Topics List */}
                    <div className="topics-list" style={{ display: 'grid', gap: '1rem' }}>
                        {currentLevelData.topics && currentLevelData.topics.map((topic, index) => (
                            <div key={index} style={{
                                background: 'var(--background)',
                                borderRadius: '16px',
                                border: '1px solid var(--border)',
                                overflow: 'hidden'
                            }}>
                                <button
                                    onClick={() => toggleTopic(index)}
                                    style={{
                                        width: '100%',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--text)',
                                        cursor: 'pointer',
                                        textAlign: 'left'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: `linear-gradient(135deg, ${currentLevelData.color}dd, ${currentLevelData.color}88)`,
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: `0 4px 12px ${currentLevelData.color}40`,
                                            border: '1px solid rgba(255, 255, 255, 0.1)'
                                        }}>
                                            <BookOpen size={22} />
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.2rem' }}>{topic.name}</h3>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{topic.desc}</p>
                                        </div>
                                    </div>
                                    {expandedTopic === index ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                </button>

                                <AnimatePresence>
                                    {expandedTopic === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                                                <div style={{
                                                    padding: '1.5rem',
                                                    background: 'rgba(99, 102, 241, 0.05)',
                                                    borderRadius: '12px',
                                                    marginBottom: '1.5rem'
                                                }}>
                                                    <p style={{ lineHeight: '1.6' }}>{topic.explanation}</p>
                                                </div>

                                                {topic.keyPoints && (
                                                    <div style={{ marginBottom: '1.5rem' }}>
                                                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Key Concepts</h4>
                                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                            {topic.keyPoints.map((pt, i) => (
                                                                <span key={i} style={{
                                                                    background: 'var(--surface)',
                                                                    border: '1px solid var(--border)',
                                                                    padding: '0.25rem 0.75rem',
                                                                    borderRadius: '20px',
                                                                    fontSize: '0.9rem'
                                                                }}>{pt}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {topic.code && (
                                                    <div style={{ marginBottom: '1.5rem' }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            marginBottom: '0.5rem'
                                                        }}>
                                                            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Code Example</h4>
                                                            <span style={{ fontSize: '0.8rem', color: '#6366f1', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                                <Terminal size={14} /> C / Embedded C
                                                            </span>
                                                        </div>
                                                        <pre style={{
                                                            background: '#1e1e2e',
                                                            padding: isMobile ? '1rem' : '1.5rem',
                                                            borderRadius: '12px',
                                                            overflowX: 'auto',
                                                            border: '1px solid #313244',
                                                            color: '#a6accd',
                                                            fontFamily: 'monospace',
                                                            fontSize: isMobile ? '0.8rem' : '0.9rem',
                                                            lineHeight: '1.5',
                                                            maxWidth: '100%'
                                                        }}>
                                                            <code style={{ whiteSpace: 'pre', display: 'block' }}>{topic.code}</code>
                                                        </pre>
                                                    </div>
                                                )}

                                                {topic.iotExample && (
                                                    <div style={{
                                                        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))',
                                                        border: '1px solid rgba(34, 197, 94, 0.2)',
                                                        borderRadius: '12px',
                                                        padding: '1rem',
                                                        display: 'flex',
                                                        gap: '1rem'
                                                    }}>
                                                        <div style={{
                                                            minWidth: '38px',
                                                            height: '38px',
                                                            borderRadius: '10px',
                                                            background: 'linear-gradient(135deg, #10b981, #34d399)',
                                                            color: '#fff',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            boxShadow: '0 4px 10px rgba(16, 185, 129, 0.3)'
                                                        }}>
                                                            <Brain size={20} />
                                                        </div>
                                                        <div>
                                                            <h4 style={{ color: '#22c55e', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Real-World IoT Application</h4>
                                                            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{topic.iotExample}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {topic.practice && (
                                                    <div style={{
                                                        marginTop: '1.5rem',
                                                        background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(234, 179, 8, 0.05))',
                                                        border: '1px solid rgba(234, 179, 8, 0.2)',
                                                        borderRadius: '12px',
                                                        padding: '1rem',
                                                        display: 'flex',
                                                        gap: '1rem'
                                                    }}>
                                                        <div style={{
                                                            minWidth: '38px',
                                                            height: '38px',
                                                            borderRadius: '10px',
                                                            background: 'linear-gradient(135deg, #eab308, #fbbf24)',
                                                            color: '#fff',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            boxShadow: '0 4px 10px rgba(234, 179, 8, 0.3)'
                                                        }}>
                                                            <Terminal size={20} />
                                                        </div>
                                                        <div>
                                                            <h4 style={{ color: '#eab308', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Real-Time Practice</h4>
                                                            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{topic.practice}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        {/* Practical Programs Section */}
                        {currentLevelData.programs && currentLevelData.programs.map((prog, index) => (
                            <div key={index} style={{
                                background: 'var(--background)',
                                borderRadius: '16px',
                                border: '1px solid var(--border)',
                                padding: '1.5rem'
                            }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{prog.name}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{prog.explanation}</p>
                                <pre style={{
                                    background: '#1e1e2e',
                                    padding: '1rem',
                                    borderRadius: '10px',
                                    overflowX: 'auto',
                                    color: '#a6accd',
                                    fontSize: '0.9rem'
                                }}>
                                    <code>{prog.code}</code>
                                </pre>
                                {prog.practice && (
                                    <div style={{
                                        marginTop: '1.5rem',
                                        background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(234, 179, 8, 0.05))',
                                        border: '1px solid rgba(234, 179, 8, 0.2)',
                                        borderRadius: '12px',
                                        padding: '1rem',
                                        display: 'flex',
                                        gap: '1rem'
                                    }}>
                                        <div style={{
                                            minWidth: '38px',
                                            height: '38px',
                                            borderRadius: '10px',
                                            background: 'linear-gradient(135deg, #eab308, #fbbf24)',
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 10px rgba(234, 179, 8, 0.3)'
                                        }}>
                                            <Terminal size={20} />
                                        </div>
                                        <div>
                                            <h4 style={{ color: '#eab308', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Practice Challenge</h4>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{prog.practice}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Projects Section */}
                        {currentLevelData.projects && currentLevelData.projects.map((proj, index) => (
                            <div key={index} style={{
                                background: 'var(--background)',
                                borderRadius: '16px',
                                border: '1px solid var(--border)',
                                padding: '1.5rem'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.2rem' }}>{proj.name}</h3>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        background: proj.difficulty === 'Beginner' ? 'rgba(34, 197, 94, 0.1)' :
                                            proj.difficulty === 'Intermediate' ? 'rgba(234, 179, 8, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                        color: proj.difficulty === 'Beginner' ? '#22c55e' :
                                            proj.difficulty === 'Intermediate' ? '#eab308' : '#ef4444'
                                    }}>{proj.difficulty}</span>
                                </div>
                                <p style={{ marginBottom: '1rem' }}>{proj.description}</p>

                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Components Needed:</h4>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    {proj.components.map((comp, i) => (
                                        <span key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>{comp}</span>
                                    ))}
                                </div>

                                <details>
                                    <summary style={{ cursor: 'pointer', color: '#6366f1', fontWeight: '500' }}>View Project Code</summary>
                                    <pre style={{
                                        marginTop: '1rem',
                                        background: '#1e1e2e',
                                        padding: '1rem',
                                        borderRadius: '10px',
                                        overflowX: 'auto',
                                        color: '#a6accd',
                                        fontSize: '0.9rem'
                                    }}>
                                        <code>{proj.code}</code>
                                    </pre>
                                </details>
                                {proj.practice && (
                                    <div style={{
                                        marginTop: '1.5rem',
                                        background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(234, 179, 8, 0.05))',
                                        border: '1px solid rgba(234, 179, 8, 0.2)',
                                        borderRadius: '12px',
                                        padding: '1rem',
                                        display: 'flex',
                                        gap: '1rem'
                                    }}>
                                        <div style={{
                                            minWidth: '38px',
                                            height: '38px',
                                            borderRadius: '10px',
                                            background: 'linear-gradient(135deg, #eab308, #fbbf24)',
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 10px rgba(234, 179, 8, 0.3)'
                                        }}>
                                            <Terminal size={20} />
                                        </div>
                                        <div>
                                            <h4 style={{ color: '#eab308', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Project Challenge</h4>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{proj.practice}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Challenges Section */}
                        {currentLevelData.challenges && currentLevelData.challenges.map((challenge, index) => (
                            <ChallengeItem key={index} challenge={challenge} color={currentLevelData.color} />
                        ))}

                        {/* Interview Prep Section */}
                        {currentLevelData.questions && (
                            <div style={{ display: 'grid', gap: '2rem' }}>
                                {currentLevelData.questions.map((cat, i) => (
                                    <div key={i}>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#6366f1' }}>{cat.category}</h3>
                                        <div style={{ display: 'grid', gap: '1rem' }}>
                                            {cat.items.map((q, j) => (
                                                <div key={j} style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                                    <h4 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Q: {q.q}</h4>
                                                    <p style={{ color: 'var(--text-secondary)' }}>A: {q.a}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Career Roadmap Section */}
                        {currentLevelData.roadmap && (
                            <div style={{ display: 'grid', gap: '2rem' }}>
                                <div style={{ padding: '1.5rem', background: 'var(--background)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                                    <h3 style={{ marginBottom: '1rem' }}>After C Programming</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                        {currentLevelData.roadmap.afterC.map((item, i) => (
                                            <div key={i} style={{ padding: '1rem', background: 'rgba(99, 102, 241, 0.05)', borderRadius: '12px' }}>
                                                <h4 style={{ color: '#6366f1', marginBottom: '0.5rem' }}>{item.topic}</h4>
                                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.duration}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </motion.div>
            </div>

            {/* Navigation Footer */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)'
            }}>
                <button
                    onClick={onBack}
                    style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '12px',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <ArrowLeft size={18} /> Back to Roadmap
                </button>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={() => setActiveLevel(Math.max(0, activeLevel - 1))}
                        disabled={activeLevel === 0}
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '12px',
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            color: activeLevel === 0 ? 'var(--text-secondary)' : 'var(--text)',
                            cursor: activeLevel === 0 ? 'not-allowed' : 'pointer',
                            opacity: activeLevel === 0 ? 0.5 : 1
                        }}
                    >
                        Previous Level
                    </button>

                    <button
                        onClick={() => setActiveLevel(Math.min(cProgrammingCourse.levels.length - 1, activeLevel + 1))}
                        disabled={activeLevel === cProgrammingCourse.levels.length - 1}
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '12px',
                            background: '#6366f1',
                            border: 'none',
                            color: 'white',
                            cursor: activeLevel === cProgrammingCourse.levels.length - 1 ? 'not-allowed' : 'pointer',
                            opacity: activeLevel === cProgrammingCourse.levels.length - 1 ? 0.5 : 1
                        }}
                    >
                        Next Level
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CProgrammingCourse;
