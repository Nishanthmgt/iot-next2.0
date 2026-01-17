import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Code, Terminal, BookOpen, Brain, Download, CheckCircle, ArrowRight, ArrowLeft, Cpu, Target } from 'lucide-react';
import { cProgrammingCourse } from '../data/cProgrammingCourse';

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

const RadialProgress = ({ percentage, size = 45, color = '#3b82f6' }) => {
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth={strokeWidth}
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    strokeLinecap="round"
                />
            </svg>
            <span style={{ position: 'absolute', fontSize: '10px', fontWeight: 'bold', color: '#fff' }}>
                {Math.round(percentage)}%
            </span>
        </div>
    );
};

const CProgrammingCourse = ({ onBack }) => {
    const [activeLevel, setActiveLevel] = useState(0);
    const [expandedTopic, setExpandedTopic] = useState(null);
    const [showCode, setShowCode] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);
    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem('iotnext_c_course_progress');
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem('iotnext_c_course_progress', JSON.stringify(progress));
    }, [progress]);

    const toggleComplete = (topicId) => {
        setProgress(prev => ({
            ...prev,
            [topicId]: !prev[topicId]
        }));
    };

    const totalTopics = cProgrammingCourse.levels.reduce((acc, level) => acc + (level.topics?.length || 0), 0);
    const completedTopics = Object.values(progress).filter(Boolean).length;
    const overallProgress = (completedTopics / totalTopics) * 100;

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
            padding: isMobile ? '0 1rem 2rem' : '3rem 2rem',
            color: 'var(--text)',
            minHeight: '100vh',
            background: 'var(--background)'
        }}>
            {/* Sticky Mobile Header */}
            {isMobile && (
                <div style={{
                    position: 'sticky',
                    top: 0,
                    left: '-1rem',
                    right: '-1rem',
                    width: 'calc(100% + 2rem)',
                    zIndex: 100,
                    background: 'rgba(10, 10, 15, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#fff', padding: 0, display: 'flex', alignItems: 'center' }}>
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <h2 style={{ fontSize: '1.2rem', fontWeight: '800', margin: 0 }}>Embedded C Core</h2>
                            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: '700' }}>
                                {completedTopics} / {totalTopics} CONCEPTS
                            </span>
                        </div>
                    </div>
                    <RadialProgress percentage={overallProgress} />
                </div>
            )}
            {/* Desktop Header */}
            {!isMobile && (
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

            {/* Level Selector - Horizontal Scroll */}
            <div style={{
                display: 'flex',
                gap: '12px',
                padding: '1rem 0',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                margin: isMobile ? '0 -1rem' : '0',
                paddingLeft: isMobile ? '1rem' : '0',
                paddingRight: isMobile ? '1rem' : '0'
            }}>
                {cProgrammingCourse.levels.map((level, idx) => {
                    const isActive = activeLevel === level.level;
                    const levelTopics = level.topics?.length || 0;
                    const levelCompleted = (level.topics || []).filter(t => progress[`${level.level}-${t.name}`]).length;
                    const levelPercentage = levelTopics > 0 ? (levelCompleted / levelTopics) * 100 : 0;

                    return (
                        <motion.button
                            key={idx}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setActiveLevel(level.level);
                                setExpandedTopic(null);
                            }}
                            style={{
                                flex: '0 0 auto',
                                padding: '12px 20px',
                                borderRadius: '16px',
                                background: isActive ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255,255,255,0.03)',
                                border: `2px solid ${isActive ? '#3b82f6' : 'transparent'}`,
                                textAlign: 'left',
                                minWidth: '140px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                color: isActive ? '#fff' : 'rgba(255,255,255,0.6)'
                            }}
                        >
                            <div style={{ fontSize: '0.8rem', fontWeight: '800', opacity: 0.5, marginBottom: '4px' }}>LEVEL {level.level}</div>
                            <div style={{ fontSize: '1rem', fontWeight: '800' }}>{level.title}</div>
                            <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '12px', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${levelPercentage}%` }}
                                    style={{ height: '100%', background: level.color || '#3b82f6' }}
                                />
                            </div>
                        </motion.button>
                    );
                })}
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
                        {/* Topics Roadmap Wrapper */}
                        <div style={{ position: 'relative', gridColumn: '1 / -1' }}>
                            {!isMobile && (
                                <div style={{
                                    position: 'absolute',
                                    left: '20px',
                                    top: '2rem',
                                    bottom: '0',
                                    width: '2px',
                                    background: 'rgba(255,255,255,0.05)',
                                    zIndex: 0
                                }} />
                            )}
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                {currentLevelData.topics && currentLevelData.topics.map((topic, index) => {
                                    const topicId = `${activeLevel}-${topic.name}`;
                                    const isCompleted = progress[topicId];
                                    const isExpanded = expandedTopic === index;

                                    return (
                                        <motion.div
                                            key={index}
                                            layout
                                            style={{
                                                background: isExpanded ? 'rgba(59, 130, 246, 0.05)' : 'rgba(255,255,255,0.02)',
                                                borderRadius: isMobile ? '20px' : '24px',
                                                border: `1px solid ${isExpanded ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255,255,255,0.05)'}`,
                                                overflow: 'hidden',
                                                position: 'relative',
                                                zIndex: 1
                                            }}
                                        >
                                            <div
                                                onClick={() => toggleTopic(index)}
                                                style={{
                                                    padding: isMobile ? '1rem' : '1.25rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '1rem',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {/* Completion Toggle */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleComplete(topicId);
                                                    }}
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        borderRadius: '12px',
                                                        background: isCompleted ? '#22c55e' : 'rgba(255,255,255,0.05)',
                                                        border: 'none',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer',
                                                        color: '#fff',
                                                        flexShrink: 0,
                                                        transition: 'all 0.3s'
                                                    }}
                                                >
                                                    {isCompleted ? <CheckCircle size={24} /> : <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)' }} />}
                                                </button>

                                                <div style={{ flex: 1 }}>
                                                    <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: '800', margin: 0, color: isCompleted ? 'rgba(255,255,255,0.6)' : '#fff' }}>
                                                        {topic.name}
                                                    </h3>
                                                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', margin: '4px 0 0 0' }}>{topic.desc}</p>
                                                </div>

                                                <div style={{ color: 'rgba(255,255,255,0.2)' }}>
                                                    {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                                </div>
                                            </div>

                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                    >
                                                        <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem' }}>
                                                            {/* Explanation */}
                                                            <div style={{
                                                                padding: '1.25rem',
                                                                background: 'rgba(255,255,255,0.02)',
                                                                borderRadius: '16px',
                                                                marginBottom: '1.5rem',
                                                                border: '1px solid rgba(255,255,255,0.03)',
                                                                fontSize: '0.95rem',
                                                                lineHeight: '1.6',
                                                                color: 'rgba(255,255,255,0.8)'
                                                            }}>
                                                                {topic.explanation}
                                                            </div>

                                                            {/* Key Points */}
                                                            {topic.keyPoints && (
                                                                <div style={{ marginBottom: '1.5rem' }}>
                                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                                        {topic.keyPoints.map((pt, i) => (
                                                                            <span key={i} style={{
                                                                                background: 'rgba(59, 130, 246, 0.1)',
                                                                                color: '#3b82f6',
                                                                                padding: '4px 12px',
                                                                                borderRadius: '20px',
                                                                                fontSize: '0.8rem',
                                                                                fontWeight: '700'
                                                                            }}>{pt}</span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* Code Sample */}
                                                            {topic.code && (
                                                                <div style={{ marginBottom: '1.5rem' }}>
                                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                                                        <h4 style={{ fontSize: '0.8rem', fontWeight: '800', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Code Sample</h4>
                                                                        <Terminal size={16} style={{ color: 'rgba(255,255,255,0.2)' }} />
                                                                    </div>
                                                                    <pre style={{
                                                                        background: '#0a0a0f',
                                                                        padding: '1.25rem',
                                                                        borderRadius: '16px',
                                                                        overflowX: 'auto',
                                                                        fontSize: '0.9rem',
                                                                        border: '1px solid rgba(255,255,255,0.05)',
                                                                        color: '#e2e8f0',
                                                                        fontFamily: 'JetBrains Mono, monospace'
                                                                    }}><code>{topic.code}</code></pre>
                                                                </div>
                                                            )}

                                                            {/* IoT Context */}
                                                            {topic.iotContext && (
                                                                <div style={{
                                                                    padding: '1.25rem',
                                                                    background: 'rgba(34, 197, 94, 0.05)',
                                                                    borderRadius: '16px',
                                                                    border: '1px solid rgba(34, 197, 94, 0.1)',
                                                                    marginBottom: '1.5rem'
                                                                }}>
                                                                    <h4 style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                                        <Cpu size={14} /> IoT Implementation
                                                                    </h4>
                                                                    <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.7)' }}>{topic.iotContext}</p>
                                                                </div>
                                                            )}

                                                            {/* Practice Exercise */}
                                                            {topic.exercise && (
                                                                <div style={{
                                                                    padding: '1.25rem',
                                                                    background: 'rgba(234, 179, 8, 0.05)',
                                                                    borderRadius: '16px',
                                                                    border: '1px solid rgba(234, 179, 8, 0.1)'
                                                                }}>
                                                                    <h4 style={{ color: '#eab308', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                                        <Target size={14} /> Practice Challenge
                                                                    </h4>
                                                                    <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.7)' }}>{topic.exercise}</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

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
