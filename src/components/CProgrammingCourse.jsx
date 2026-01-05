import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Code, Terminal, BookOpen, Brain, Download, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { cProgrammingCourse } from '../data/cProgrammingCourse';

const CProgrammingCourse = ({ onBack }) => {
    const [activeLevel, setActiveLevel] = useState(0);
    const [expandedTopic, setExpandedTopic] = useState(null);
    const [showCode, setShowCode] = useState(null);

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
            padding: '2rem',
            color: 'var(--text)',
            minHeight: '100vh'
        }}>
            {/* Header */}
            <div className="course-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>

                <h1 style={{
                    fontSize: '2.5rem',
                    background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>
                    {cProgrammingCourse.courseTitle}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                    {cProgrammingCourse.description}
                </p>
            </div>

            {/* Level Navigation */}
            <div className="level-nav" style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '1rem',
                padding: '1rem 0',
                marginBottom: '2rem',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
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
                        borderRadius: '20px',
                        padding: '2rem',
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
                        <h2 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{
                                background: `${currentLevelData.color}20`,
                                color: currentLevelData.color,
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                fontSize: '1.2rem'
                            }}>Level {currentLevelData.level}</span>
                            {currentLevelData.title}
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
                                                            padding: '1.5rem',
                                                            borderRadius: '12px',
                                                            overflowX: 'auto',
                                                            border: '1px solid #313244',
                                                            color: '#a6accd',
                                                            fontFamily: 'monospace',
                                                            fontSize: '0.9rem',
                                                            lineHeight: '1.5'
                                                        }}>
                                                            <code>{topic.code}</code>
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
                                        <span key={i} style={{ bg: 'var(--surface)', border: '1px solid var(--border)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>{comp}</span>
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
                            </div>
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
                alert: 'center',
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
