import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { roadmapExpanded } from '../data/roadmapExpanded';
import {
    CheckCircle2, Circle, ArrowRight, Loader2, BookOpen, Target, Terminal, X, ChevronRight, Smartphone,
    Cpu, Wifi, Zap, Shield, Database, Layout, Activity, Code, Layers, FileText, Settings, Globe,
    Battery, Laptop, Repeat
} from 'lucide-react';

const Roadmap = ({ setView }) => {
    const [progress, setProgress] = useState({});
    const [loading, setLoading] = useState(true);
    const [activeLevel, setActiveLevel] = useState(0);
    const [expandedStep, setExpandedStep] = useState(null);

    const getModuleIcon = (levelIdx, stepIdx) => {
        const icons = [
            [Cpu, Zap, Activity, Layers, Settings, Battery, FileText, Activity, Layers, Activity], // Level 1: Foundations
            [Cpu, Laptop, Wifi, Target, Settings, Activity, Activity, Activity, Activity, Activity], // Level 2: Microcontrollers
            [Code, Repeat, Database, Layout, Activity, Activity, Activity, Activity, Activity, Activity], // Level 3: Programming
            [Activity, Zap, Layout, Settings, Activity, Activity, Activity, Activity, Activity, Activity], // Level 4: Sensors
            [Wifi, Globe, Shield, Terminal, Activity, Activity, Activity, Activity, Activity, Activity], // Level 5: Networking
            [Database, Layout, Activity, Settings, Activity, Activity, Activity, Activity, Activity, Activity], // Level 6: Cloud
            [Activity, Zap, Target, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 7
            [Shield, Settings, Activity, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 8
            [Cpu, Activity, Layout, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 9
            [Shield, Target, Settings, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 10
            [Activity, Layout, Zap, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 11
            [Target, Shield, Globe, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 12
        ];

        const LevelIcon = (icons[levelIdx] && icons[levelIdx][stepIdx]) || Activity;
        return <LevelIcon size={18} />;
    };

    const getLevelGradient = (levelIdx) => {
        const gradients = [
            'linear-gradient(135deg, #60a5fa, #3b82f6)',
            'linear-gradient(135deg, #4ade80, #22c55e)',
            'linear-gradient(135deg, #10b981, #059669)',
            'linear-gradient(135deg, #f59e0b, #d97706)',
            'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            'linear-gradient(135deg, #ec4899, #db2777)',
            'linear-gradient(135deg, #ef4444, #dc2626)',
            'linear-gradient(135deg, #0ea5e9, #0284c7)',
            'linear-gradient(135deg, #6366f1, #4f46e5)',
            'linear-gradient(135deg, #f43f5e, #e11d48)',
            'linear-gradient(135deg, #14b8a6, #0d9488)',
            'linear-gradient(135deg, #fbbf24, #f59e0b)'
        ];
        return gradients[levelIdx % gradients.length];
    };

    useEffect(() => {
        const fetchProgress = async () => {
            const saved = localStorage.getItem('iotnext_roadmap_progress');
            if (saved) {
                setProgress(JSON.parse(saved));
            }
            setLoading(false);
        };
        fetchProgress();
    }, []);

    const toggleProgress = (stepId) => {
        const newProgress = {
            ...progress,
            [stepId]: !progress[stepId]
        };
        setProgress(newProgress);
        localStorage.setItem('iotnext_roadmap_progress', JSON.stringify(newProgress));
    };
    const totalSteps = roadmapExpanded.reduce((acc, stage) => acc + stage.steps.length, 0);
    const completedCount = Object.values(progress).filter(Boolean).length;
    const overallProgress = (completedCount / totalSteps) * 100;

    if (loading) {
        return (
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Loader2 className="animate-spin" size={40} color="var(--primary)" />
            </div>
        );
    }

    const currentStage = roadmapExpanded[activeLevel];

    return (
        <section className="section-mesh bg-dots" id="roadmap" style={{ padding: '2rem 1rem' }}>
            <div className="container" style={{ marginBottom: '4rem' }}>
                {/* Fast Track Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                        <Target size={18} />
                        <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Engineering Roadmap</span>
                    </motion.div>

                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                        Technical <span className="text-gradient">Mastery</span> Path
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
                        A structured curriculum to take you from core logic to industrial IoT orchestration.
                    </p>

                    {/* Overall Progress */}
                    <div style={{ maxWidth: '300px', margin: '0 auto 3rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '700' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Learning Progress</span>
                            <span style={{ color: 'var(--primary)' }}>{Math.round(overallProgress)}%</span>
                        </div>
                        <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${overallProgress}%` }}
                                style={{ height: '100%', background: 'var(--primary)', boxShadow: 'var(--shadow-glow)' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Integration Cards - Sorted vertically as requested */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '2rem',
                    marginBottom: '5rem',
                    maxWidth: '900px',
                    margin: '0 auto 5rem'
                }}>
                    <motion.div
                        whileHover={{ y: -5, scale: 1.01 }}
                        onClick={() => setView('blynk-iot')}
                        className="glass-plus"
                        style={{
                            padding: '1.75rem 2.5rem',
                            borderRadius: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            background: 'rgba(var(--primary-rgb), 0.03)',
                            border: '1px solid var(--border)',
                            width: '100%'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '18px',
                                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <Smartphone size={32} />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.01em', marginBottom: '0.25rem' }}>Blynk IoT Guide</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Fast-track setup for industrial cloud projects & monitoring.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--primary)', color: 'white', padding: '0.8rem 1.75rem', borderRadius: '2rem', fontSize: '1rem', fontWeight: '800', boxShadow: 'var(--shadow-glow)' }}>
                            Start Course <ArrowRight size={20} />
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5, scale: 1.01 }}
                        onClick={() => setView('c-course')}
                        className="glass-plus"
                        style={{
                            padding: '1.75rem 2.5rem',
                            borderRadius: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            background: 'rgba(var(--primary-rgb), 0.03)',
                            border: '1px solid var(--border)',
                            width: '100%'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '18px',
                                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <Terminal size={32} />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.01em', marginBottom: '0.25rem' }}>C programming for IoT ( Prerequisites )</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Master firmware engineering & optimized memory logic.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--primary)', color: 'white', padding: '0.8rem 1.75rem', borderRadius: '2rem', fontSize: '1rem', fontWeight: '800', boxShadow: 'var(--shadow-glow)' }}>
                            Start Course <ArrowRight size={20} />
                        </div>
                    </motion.div>
                </div>

                {/* Level Navigation */}
                <div style={{ marginBottom: '3rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', minWidth: 'max-content' }}>
                        {roadmapExpanded.map((stage, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveLevel(idx);
                                    setExpandedStep(null);
                                }}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.9rem',
                                    fontWeight: '800',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    background: activeLevel === idx ? 'var(--primary)' : 'var(--surface)',
                                    color: activeLevel === idx ? 'white' : 'var(--text-muted)',
                                    border: activeLevel === idx ? '1px solid var(--primary)' : '1px solid var(--border)',
                                    boxShadow: activeLevel === idx ? 'var(--shadow-glow)' : 'none',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Level {idx + 1}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Level Content */}
                <AnimatePresence mode="wait">
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
                                setExpandedStep(null);
                            } else if (info.offset.x < -threshold && activeLevel < roadmapExpanded.length - 1) {
                                setActiveLevel(prev => prev + 1);
                                setExpandedStep(null);
                            }
                        }}
                        style={{ cursor: 'grab' }}
                        whileDrag={{ cursor: 'grabbing' }}
                    >
                        <div style={{
                            background: 'var(--surface)',
                            borderRadius: '2rem',
                            padding: '3rem',
                            border: '1px solid var(--border)',
                            marginBottom: '4rem',
                            touchAction: 'pan-y'
                        }}>
                            <div style={{ marginBottom: '3rem', borderLeft: '4px solid var(--primary)', paddingLeft: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900' }}>{currentStage.title}</h2>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(var(--primary-rgb), 0.05)', padding: '0.4rem 0.8rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                                        <ArrowRight size={14} className="animate-pulse" />
                                        <span>Swipe or drag to navigate levels</span>
                                    </div>
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.6' }}>
                                    {currentStage.explanation}
                                </p>
                            </div>

                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {currentStage.steps.map((step) => {
                                    const stepId = step.id || step.name;
                                    const isExpanded = expandedStep === stepId;
                                    const isCompleted = progress[stepId];

                                    return (
                                        <div key={stepId} style={{
                                            background: 'var(--background)',
                                            borderRadius: '1.25rem',
                                            border: isExpanded ? '1px solid var(--primary)' : '1px solid var(--border)',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <div
                                                onClick={() => setExpandedStep(isExpanded ? null : stepId)}
                                                style={{
                                                    padding: '1.5rem',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    gap: '1rem'
                                                }}
                                            >
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                                                    <div
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleProgress(stepId);
                                                        }}
                                                        style={{
                                                            width: '28px',
                                                            height: '28px',
                                                            borderRadius: '6px',
                                                            background: isCompleted ? 'var(--primary)' : 'transparent',
                                                            border: '2px solid' + (isCompleted ? 'var(--primary)' : 'var(--border)'),
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: 'white',
                                                            transition: 'all 0.2s ease',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        {isCompleted && <CheckCircle2 size={18} />}
                                                    </div>

                                                    {/* Module Icon */}
                                                    <div style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        borderRadius: '10px',
                                                        background: getLevelGradient(activeLevel),
                                                        color: 'white',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0,
                                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                                        opacity: isCompleted ? 0.6 : 1
                                                    }}>
                                                        {getModuleIcon(activeLevel, roadmapExpanded[activeLevel].steps.indexOf(step))}
                                                    </div>

                                                    <div>
                                                        <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: isCompleted ? 'var(--text-muted)' : 'var(--text)', textDecoration: isCompleted ? 'line-through' : 'none' }}>
                                                            {step.name}
                                                        </h4>
                                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{step.desc}</p>
                                                    </div>
                                                </div>
                                                <ChevronRight size={20} color={isExpanded ? 'var(--primary)' : 'var(--text-muted)'} style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                                            </div>

                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div style={{ padding: '0 1.5rem 1.5rem 4.5rem', borderTop: '1px solid var(--border)' }}>
                                                            <div style={{
                                                                marginTop: '1.5rem',
                                                                padding: '1.5rem',
                                                                background: 'rgba(var(--primary-rgb), 0.05)',
                                                                borderRadius: '1rem',
                                                                borderLeft: '4px solid var(--primary)'
                                                            }}>
                                                                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text)' }}>
                                                                    {step.fullExplanation}
                                                                </p>
                                                            </div>
                                                            {step.action && (
                                                                <button
                                                                    onClick={() => setView(step.action.view)}
                                                                    style={{
                                                                        marginTop: '1.5rem',
                                                                        padding: '0.8rem 1.8rem',
                                                                        borderRadius: '1rem',
                                                                        background: 'var(--primary)',
                                                                        color: 'white',
                                                                        border: 'none',
                                                                        cursor: 'pointer',
                                                                        fontWeight: '800',
                                                                        fontSize: '0.9rem',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '0.6rem'
                                                                    }}
                                                                >
                                                                    <BookOpen size={18} /> {step.action.label}
                                                                </button>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Roadmap;
