import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { roadmapExpanded } from '../data/roadmapExpanded';
import {
    CheckCircle2, Circle, ArrowRight, Loader2, BookOpen, Target, Terminal, X, ChevronRight, ChevronDown, Smartphone,
    Cpu, Wifi, Zap, Shield, Database, Layout, Activity, Code, Layers, FileText, Settings, Globe,
    Battery, Laptop, Repeat
} from 'lucide-react';


const CourseCard = ({ title, purpose, progress = 0, onClick, color = '#3b82f6', icon: Icon }) => {
    return (
        <div
            onClick={onClick}
            style={{
                background: `linear-gradient(135deg, ${color}15, ${color}05)`,
                border: `1px solid ${color}40`,
                borderRadius: '1.25rem',
                padding: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: `0 4px 12px ${color}40`
                }}>
                    <Icon size={22} />
                </div>
                <div style={{ background: 'var(--surface)', padding: '0.25rem 0.6rem', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                    <ChevronRight size={18} color={color} />
                </div>
            </div>

            <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text)', marginBottom: '0.25rem' }}>{title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{purpose}</p>
            </div>

            <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.4rem', color: color }}>
                    <span>PROGRESS</span>
                    <span>{progress}%</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: 'rgba(0,0,0,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: `${progress}%`, height: '100%', background: color }} />
                </div>
            </div>
        </div>
    );
};

const Roadmap = ({ setView }) => {
    const [progress, setProgress] = useState({});
    const [loading, setLoading] = useState(true);
    const [activeLevel, setActiveLevel] = useState(0);
    const [expandedStep, setExpandedStep] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const currentStage = roadmapExpanded[activeLevel] || roadmapExpanded[0];

    return (
        <section className="section-mesh bg-dots" id="roadmap" style={{ padding: '2rem 1rem' }}>
            <Helmet>
                <title>IoT Mastery Roadmap | Technical Engineering Career Path | IoTNext</title>
                <meta name="description" content="Master Industrial IoT with our structured 12-level curriculum. From firmware foundations to cloud orchestration and industrial networking." />
                <meta property="og:title" content="Technical Mastery Path - IoTNext" />
                <meta property="og:description" content="A structured curriculum to take you from core logic to industrial IoT orchestration." />
                <link rel="canonical" href="https://iotnext.store/roadmap" />
            </Helmet>
            <div className="container" style={{ marginBottom: '4rem' }}>
                {/* Simple Vertical List Header */}
                <div style={{ marginBottom: isMobile ? '2rem' : '1.5rem', padding: '0 0.5rem' }}>
                    <h2 style={{
                        fontSize: isMobile ? '2.25rem' : '1.8rem',
                        fontWeight: '900',
                        marginBottom: '0.6rem',
                        background: isMobile ? 'linear-gradient(135deg, var(--text) 0%, var(--primary) 100%)' : 'none',
                        WebkitBackgroundClip: isMobile ? 'text' : 'none',
                        WebkitTextFillColor: isMobile ? 'transparent' : 'inherit'
                    }}>Career Roadmap</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.95rem' : '0.9rem', fontWeight: '500' }}>
                        {Math.round(overallProgress)}% Complete
                    </p>
                    {/* Progress Bar */}
                    <div style={{ height: isMobile ? '8px' : '6px', background: 'var(--border)', borderRadius: '4px', marginTop: '0.75rem', overflow: 'hidden' }}>
                        <div style={{ width: `${overallProgress}%`, height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', transition: 'width 0.5s ease' }} />
                    </div>
                </div>



                {/* Extension Modules (Restored) */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text)' }}>Extension Modules</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1rem' }}>
                        <CourseCard
                            title="Blynk IoT Guide"
                            purpose="Cloud connection mastery"
                            progress={0} // Placeholder until persistence is added
                            onClick={() => setView('blynk-iot')}
                            color="#10b981"
                            icon={Wifi}
                        />

                        <CourseCard
                            title="C Programming"
                            purpose="Firmware development"
                            progress={0} // Placeholder until persistence is added
                            onClick={() => setView('c-course')}
                            color="#3b82f6"
                            icon={Code}
                        />
                    </div>
                </div>

                {/* Vertical Checklist Layout */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* We will render levels as expandable list items */}
                </div>

                {/* Content Layout: Mobile vs Desktop */}
                {isMobile ? (
                    /* MOBILE: Vertical Accordion List */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '4rem' }}>
                        {roadmapExpanded.map((level, idx) => {
                            const stepsCompletedCount = level.steps.filter(step => progress[step.id]).length;
                            const levelProgress = Math.round((stepsCompletedCount / level.steps.length) * 100);

                            return (
                                <div key={idx} style={{
                                    background: `linear-gradient(135deg, ${getLevelGradient(idx).split(',')[0].split('(')[1]}10, transparent)`,
                                    borderRadius: '1.25rem',
                                    border: activeLevel === idx ? `2px solid ${getLevelGradient(idx).split(',')[0].split('(')[1]}` : '1px solid var(--border)',
                                    overflow: 'hidden',
                                    boxShadow: activeLevel === idx ? `0 8px 24px ${getLevelGradient(idx).split(',')[0].split('(')[1]}20` : 'none',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div
                                        onClick={() => setActiveLevel(activeLevel === idx ? null : idx)}
                                        style={{
                                            padding: '1.25rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            cursor: 'pointer',
                                            background: 'transparent'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{
                                                width: '48px', height: '48px', borderRadius: '12px',
                                                background: getLevelGradient(idx),
                                                color: 'white',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontWeight: '900', fontSize: '1.1rem',
                                                boxShadow: `0 4px 12px ${getLevelGradient(idx).split(',')[0].split('(')[1]}40`
                                            }}>
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text)', marginBottom: '0.25rem' }}>{level.title}</h3>
                                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>{stepsCompletedCount}/{level.steps.length} Steps</span>
                                                    <div style={{ width: '70px', height: '5px', background: 'rgba(0,0,0,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                                                        <div style={{ width: `${levelProgress}%`, height: '100%', background: getLevelGradient(idx) }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {activeLevel === idx ? <ChevronDown size={22} /> : <ChevronRight size={22} />}
                                    </div>

                                    <AnimatePresence>
                                        {activeLevel === idx && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: 'auto' }}
                                                exit={{ height: 0 }}
                                                style={{ overflow: 'hidden', borderTop: '1px solid var(--border)' }}
                                            >
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    {level.steps.map((step, stepIdx) => (
                                                        <div key={step.id || stepIdx} style={{
                                                            padding: '1.25rem',
                                                            borderBottom: stepIdx === level.steps.length - 1 ? 'none' : '1px solid var(--border)',
                                                            background: expandedStep === step.name ? 'var(--surface)' : 'transparent',
                                                            transition: 'all 0.2s ease'
                                                        }}>
                                                            <div style={{ display: 'flex', gap: '1.25rem' }}>
                                                                <div
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        toggleProgress(step.id || step.name)
                                                                    }}
                                                                    style={{ cursor: 'pointer', marginTop: '0.15rem' }}
                                                                >
                                                                    {progress[step.id || step.name] ?
                                                                        <CheckCircle2 size={28} color="var(--primary)" fill="rgba(var(--primary-rgb), 0.2)" /> :
                                                                        <Circle size={28} color="var(--text-muted)" />
                                                                    }
                                                                </div>
                                                                <div
                                                                    style={{ flex: 1, cursor: 'pointer' }}
                                                                    onClick={() => setExpandedStep(expandedStep === step.name ? null : step.name)}
                                                                >
                                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                                        <h4 style={{
                                                                            fontSize: '1.05rem',
                                                                            fontWeight: '800',
                                                                            marginBottom: '0.3rem',
                                                                            color: progress[step.id || step.name] ? 'var(--text-muted)' : 'var(--text)',
                                                                            textDecoration: progress[step.id || step.name] ? 'line-through' : 'none'
                                                                        }}>
                                                                            {step.name || step.title}
                                                                        </h4>
                                                                        {expandedStep === step.name ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                                                                    </div>
                                                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: expandedStep === step.name ? '1rem' : '0', fontWeight: '500' }}>
                                                                        {step.desc}
                                                                    </p>

                                                                    <AnimatePresence>
                                                                        {expandedStep === step.name && (
                                                                            <motion.div
                                                                                initial={{ height: 0, opacity: 0 }}
                                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                                exit={{ height: 0, opacity: 0 }}
                                                                                style={{ overflow: 'hidden' }}
                                                                            >
                                                                                <div style={{
                                                                                    marginTop: '0.5rem',
                                                                                    padding: '1rem',
                                                                                    background: 'var(--surface)',
                                                                                    borderRadius: '0.75rem',
                                                                                    border: '1px solid var(--border)',
                                                                                    fontSize: '0.9rem',
                                                                                    lineHeight: '1.6',
                                                                                    color: 'var(--text-secondary)'
                                                                                }}>
                                                                                    {step.fullExplanation || "Detailed content loading..."}
                                                                                </div>
                                                                            </motion.div>
                                                                        )}
                                                                    </AnimatePresence>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* DESKTOP: Split View (Sidebar + Content) */
                    <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem', alignItems: 'start' }}>
                        {/* Left Sidebar: Level Navigation */}
                        <div style={{ position: 'sticky', top: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {roadmapExpanded.map((level, idx) => {
                                const isActive = activeLevel === idx;
                                const stepsCompletedCount = level.steps.filter(step => progress[step.id]).length;
                                const levelProgress = Math.round((stepsCompletedCount / level.steps.length) * 100);

                                return (
                                    <div
                                        key={idx}
                                        onClick={() => {
                                            setActiveLevel(idx);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        style={{
                                            padding: '1rem',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            background: isActive ? 'var(--surface)' : 'transparent',
                                            border: isActive ? '1px solid var(--border)' : '1px solid transparent',
                                            transition: 'all 0.2s ease',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                            <div style={{
                                                width: '32px', height: '32px', borderRadius: '8px',
                                                background: isActive ? getLevelGradient(idx) : 'var(--surface)',
                                                color: isActive ? 'white' : 'var(--text-muted)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontWeight: '800', fontSize: '0.9rem',
                                                border: isActive ? 'none' : '1px solid var(--border)'
                                            }}>
                                                {idx + 1}
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <h4 style={{
                                                    fontSize: '0.95rem',
                                                    fontWeight: isActive ? '700' : '500',
                                                    color: isActive ? 'var(--text)' : 'var(--text-muted)'
                                                }}>{level.title}</h4>
                                            </div>
                                        </div>
                                        {/* Mini Progress Bar */}
                                        <div style={{ width: '100%', height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden', opacity: isActive ? 1 : 0.5 }}>
                                            <div style={{ width: `${levelProgress}%`, height: '100%', background: isActive ? 'var(--primary)' : 'var(--text-muted)' }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Content: Active Level Details */}
                        <div>
                            <motion.div
                                key={activeLevel}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    background: 'var(--surface)',
                                    borderRadius: '1.5rem',
                                    padding: '2.5rem',
                                    border: '1px solid var(--border)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                                }}
                            >
                                <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
                                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '2rem', background: `${currentStage.color}15`, color: currentStage.color, fontWeight: '700', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                        Level {currentStage.level}
                                    </div>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>{currentStage.title}</h2>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '800px' }}>
                                        {currentStage.explanation}
                                    </p>
                                </div>

                                <div style={{ display: 'grid', gap: '1.5rem' }}>
                                    {currentStage.steps.map((step, stepIdx) => (
                                        <div key={step.id || stepIdx} style={{
                                            background: 'var(--background)',
                                            borderRadius: '1rem',
                                            padding: '1.5rem',
                                            border: '1px solid var(--border)',
                                            transition: 'border-color 0.2s'
                                        }}>
                                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                                <div
                                                    onClick={() => toggleProgress(step.id || step.name)}
                                                    style={{ cursor: 'pointer', marginTop: '0.25rem' }}
                                                >
                                                    {progress[step.id || step.name] ?
                                                        <CheckCircle2 size={28} color="var(--primary)" fill="rgba(var(--primary-rgb), 0.2)" /> :
                                                        <Circle size={28} color="var(--text-muted)" />
                                                    }
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div
                                                        onClick={() => setExpandedStep(expandedStep === step.name ? null : step.name)}
                                                        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}
                                                    >
                                                        <h3 style={{
                                                            fontSize: '1.2rem',
                                                            fontWeight: '700',
                                                            color: progress[step.id || step.name] ? 'var(--text-muted)' : 'var(--text)',
                                                            textDecoration: progress[step.id || step.name] ? 'line-through' : 'none'
                                                        }}>
                                                            {step.name || step.title}
                                                        </h3>
                                                        <div style={{
                                                            padding: '0.5rem',
                                                            borderRadius: '50%',
                                                            background: expandedStep === step.name ? 'var(--surface)' : 'transparent',
                                                            transition: 'background 0.2s'
                                                        }}>
                                                            {expandedStep === step.name ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                                        </div>
                                                    </div>

                                                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: expandedStep === step.name ? '1.5rem' : '0' }}>
                                                        {step.desc}
                                                    </p>

                                                    <AnimatePresence>
                                                        {expandedStep === step.name && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                            >
                                                                <div style={{
                                                                    padding: '1.5rem',
                                                                    background: 'var(--surface)',
                                                                    borderRadius: '1rem',
                                                                    border: '1px solid var(--border)',
                                                                    fontSize: '1rem',
                                                                    lineHeight: '1.7',
                                                                    color: 'var(--text-secondary)'
                                                                }}>
                                                                    {step.fullExplanation}

                                                                    {step.action && (
                                                                        <button
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                setView(step.action.view);
                                                                            }}
                                                                            style={{
                                                                                marginTop: '1.5rem',
                                                                                display: 'inline-flex',
                                                                                alignItems: 'center',
                                                                                gap: '0.5rem',
                                                                                padding: '0.75rem 1.5rem',
                                                                                borderRadius: '0.75rem',
                                                                                background: 'var(--primary)',
                                                                                color: 'white',
                                                                                border: 'none',
                                                                                fontSize: '0.95rem',
                                                                                fontWeight: '600',
                                                                                cursor: 'pointer',
                                                                                boxShadow: '0 4px 12px rgba(var(--primary-rgb), 0.3)'
                                                                            }}
                                                                        >
                                                                            {step.action.label} <ArrowRight size={18} />
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </div>
        </section >
    );
};

export default Roadmap;
