import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { roadmapExpanded } from '../data/roadmapExpanded';
import {
    CheckCircle2, Circle, ArrowRight, Loader2, BookOpen, Target, Terminal, X, ChevronRight, ChevronDown, Smartphone,
    Cpu, Wifi, Zap, Shield, Database, Layout, Activity, Code, Layers, FileText, Settings, Globe,
    Battery, Laptop, Repeat
} from 'lucide-react';


function CourseCard({ title, purpose, progress = 0, onClick, color = '#3b82f6', icon: Icon }) {
    return (
        <div
            onClick={onClick}
            style={{
                background: `linear-gradient(135deg, ${color}15, ${color}05)`,
                border: `1px solid ${color}40`,
                borderRadius: '1.25rem',
                padding: '1.25rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', flexShrink: 0,
                boxShadow: `0 4px 12px ${color}40`
            }}>
                <Icon size={22} />
            </div>
            <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text)', marginBottom: '0.1rem' }}>{title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '500' }}>{purpose}</p>
            </div>
            <ChevronRight size={18} color="var(--text-muted)" />
        </div>
    );
}

function RadialProgress({ progress, size = 50, strokeWidth = 5, color = 'var(--primary)' }) {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
                <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(var(--primary-rgb), 0.1)" strokeWidth={strokeWidth} fill="transparent" />
                <circle
                    cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeWidth={strokeWidth} fill="transparent"
                    strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)' }}
                />
            </svg>
            <span style={{ position: 'absolute', fontSize: '0.7rem', fontWeight: '900', color: 'var(--text)' }}>{Math.round(progress)}%</span>
        </div>
    );
}

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
            [Cpu, Zap, Activity, Layers, Settings, Battery, FileText, Activity, Layers, Activity], // Level 1
            [Cpu, Laptop, Wifi, Target, Settings, Activity, Activity, Activity, Activity, Activity], // Level 2
            [Code, Repeat, Database, Layout, Activity, Activity, Activity, Activity, Activity, Activity], // Level 3
            [Activity, Zap, Layout, Settings, Activity, Activity, Activity, Activity, Activity, Activity], // Level 4
            [Wifi, Globe, Shield, Terminal, Activity, Activity, Activity, Activity, Activity, Activity], // Level 5
            [Database, Layout, Activity, Settings, Activity, Activity, Activity, Activity, Activity, Activity], // Level 6
            [Activity, Zap, Target, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 7
            [Shield, Settings, Activity, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 8
            [Cpu, Activity, Layout, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 9
            [Shield, Target, Settings, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 10
            [Activity, Layout, Zap, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 11
            [Target, Shield, Globe, Activity, Activity, Activity, Activity, Activity, Activity, Activity], // Level 12
        ];
        const LevelIcon = (icons[levelIdx] && icons[levelIdx][stepIdx]) || Activity;
        return <LevelIcon size={isMobile ? 16 : 18} />;
    };

    const getLevelGradient = (levelIdx) => {
        const gradients = [
            'linear-gradient(135deg, #60a5fa, #3b82f6)', 'linear-gradient(135deg, #4ade80, #22c55e)',
            'linear-gradient(135deg, #10b981, #059669)', 'linear-gradient(135deg, #f59e0b, #d97706)',
            'linear-gradient(135deg, #8b5cf6, #7c3aed)', 'linear-gradient(135deg, #ec4899, #db2777)',
            'linear-gradient(135deg, #ef4444, #dc2626)', 'linear-gradient(135deg, #0ea5e9, #0284c7)',
            'linear-gradient(135deg, #6366f1, #4f46e5)', 'linear-gradient(135deg, #f43f5e, #e11d48)',
            'linear-gradient(135deg, #14b8a6, #0d9488)', 'linear-gradient(135deg, #fbbf24, #f59e0b)'
        ];
        return gradients[levelIdx % gradients.length];
    };

    useEffect(() => {
        const fetchProgress = async () => {
            const saved = localStorage.getItem('iotnext_roadmap_progress');
            if (saved) setProgress(JSON.parse(saved));
            setLoading(false);
            // Mark as visited
            localStorage.setItem('iotnext_roadmap_visited', 'true');
        };
        fetchProgress();
    }, []);

    const toggleProgress = (stepId) => {
        const newProgress = { ...progress, [stepId]: !progress[stepId] };
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
    const finishedStepsInLevel = currentStage.steps.filter(s => progress[s.id || s.name]).length;
    const levelProgress = Math.round((finishedStepsInLevel / currentStage.steps.length) * 100);

    return (
        <section className="section-mesh bg-dots" id="roadmap" style={{ padding: isMobile ? '0' : '2rem 1rem' }}>
            <Helmet>
                <title>IoT Mastery Roadmap | Technical Engineering Career Path | IoTNext</title>
                <meta name="description" content="Master Industrial IoT with our structured 12-level curriculum." />
            </Helmet>

            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0' : '0 1rem' }}>

                {/* NEW MOBILE HEADER: App-like Sticky feel */}
                {isMobile ? (
                    <div style={{
                        position: 'sticky', top: 0, zIndex: 100,
                        background: 'rgba(var(--background-rgb), 0.8)', backdropFilter: 'blur(20px)',
                        padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}>
                        <div>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.02em' }}>
                                Engineering <span className="text-gradient">Path</span>
                            </h2>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>
                                {completedCount} / {totalSteps} MILESTONES
                            </p>
                        </div>
                        <RadialProgress progress={overallProgress} size={48} />
                    </div>
                ) : (
                    <div style={{ marginBottom: '3rem', paddingTop: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <span className="badge badge-beginner">Professional Curriculum</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>{Math.round(overallProgress)}% Complete</span>
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '1rem' }}>
                            Technical <span className="text-gradient">Mastery Path</span>
                        </h1>
                        <div style={{ width: '100%', height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: `${overallProgress}%`, height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', transition: 'width 1s ease' }} />
                        </div>
                    </div>
                )}

                {/* MOBILE LEVEL SELECTOR: Horizontal Pills */}
                {isMobile && (
                    <div style={{
                        display: 'flex', gap: '0.75rem', overflowX: 'auto', padding: '1.25rem 1.5rem',
                        scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch'
                    }}>
                        {roadmapExpanded.map((level, idx) => (
                            <button
                                key={idx} onClick={() => { setActiveLevel(idx); setExpandedStep(null); }}
                                style={{
                                    padding: '0.75rem 1.25rem', borderRadius: '2rem', whiteSpace: 'nowrap',
                                    background: activeLevel === idx ? getLevelGradient(idx) : 'var(--surface)',
                                    color: activeLevel === idx ? 'white' : 'var(--text-muted)',
                                    border: activeLevel === idx ? 'none' : '1px solid var(--border)',
                                    fontWeight: '800', fontSize: '0.8rem', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: activeLevel === idx ? `0 8px 16px ${getLevelGradient(idx).split(',')[1].trim().replace(')', '')}40` : 'none',
                                    transform: activeLevel === idx ? 'scale(1.05)' : 'scale(1)'
                                }}
                            >
                                Level {idx + 1}
                            </button>
                        ))}
                    </div>
                )}

                {/* CONTENT AREA */}
                {isMobile ? (
                    <div style={{ padding: '0 1.5rem 6rem' }}>
                        {/* Current Level Intro Card */}
                        <motion.div
                            key={`intro-${activeLevel}`}
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            style={{
                                background: 'var(--surface)', borderRadius: '1.5rem', padding: '1.5rem',
                                border: '1px solid var(--border)', marginBottom: '2rem', marginTop: '0.5rem',
                                boxShadow: '0 12px 24px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{
                                    width: '56px', height: '56px', borderRadius: '16px', background: getLevelGradient(activeLevel),
                                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '1.5rem',
                                    boxShadow: `0 8px 16px ${getLevelGradient(activeLevel).split(',')[1].trim().replace(')', '')}40`
                                }}>
                                    {activeLevel + 1}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--text)' }}>{currentStage.title}</h3>
                                    <div style={{ height: '6px', background: 'rgba(var(--primary-rgb), 0.1)', borderRadius: '3px', marginTop: '0.5rem', overflow: 'hidden' }}>
                                        <div style={{ width: `${levelProgress}%`, height: '100%', background: getLevelGradient(activeLevel), transition: 'width 0.8s ease' }} />
                                    </div>
                                </div>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', fontWeight: '500' }}>{currentStage.explanation}</p>
                        </motion.div>

                        {/* Extension Modules for Level 0/1 */}
                        {activeLevel === 0 && (
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--text)', marginBottom: '1rem', letterSpacing: '0.05em' }}>ACCELERATOR MODULES</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <CourseCard title="Blynk IoT Guide" purpose="Cloud Architecture" progress={0} onClick={() => setView('blynk-iot')} color="#10b981" icon={Wifi} />
                                    <CourseCard title="C Programming" purpose="Core Firmware" progress={0} onClick={() => setView('c-course')} color="#3b82f6" icon={Code} />
                                </div>
                            </div>
                        )
                        }

                        {/* THE PIPELINE TIMELINE */}
                        <div style={{ position: 'relative' }}>
                            {currentStage.steps.map((step, sIdx) => {
                                const isDone = progress[step.id || step.name];
                                const isExpanded = expandedStep === step.name;
                                const stepColor = getLevelGradient(activeLevel).split(',')[1].trim().replace(')', '');

                                return (
                                    <div key={sIdx} style={{ display: 'flex', gap: '1.25rem', marginBottom: '0.5rem', position: 'relative' }}>
                                        {/* Connector Line */}
                                        {sIdx < currentStage.steps.length - 1 && (
                                            <div style={{
                                                position: 'absolute', left: '17px', top: '35px', bottom: '-5px', width: '2px',
                                                background: isDone ? stepColor : 'var(--border)', opacity: isDone ? 0.4 : 1, zIndex: 1
                                            }} />
                                        )}

                                        {/* Milestone Node */}
                                        <div
                                            onClick={() => toggleProgress(step.id || step.name)}
                                            style={{
                                                width: '36px', height: '36px', borderRadius: sIdx % 2 === 0 ? '50%' : '10px',
                                                background: isDone ? stepColor : 'var(--background)',
                                                border: `2px solid ${isDone ? stepColor : 'var(--border)'}`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: isDone ? 'white' : 'var(--text-muted)', zIndex: 2, flexShrink: 0,
                                                boxShadow: isDone ? `0 0 15px ${stepColor}40` : 'none',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                        >
                                            {isDone ? <CheckCircle2 size={18} strokeWidth={3} /> : getModuleIcon(activeLevel, sIdx)}
                                        </div>

                                        {/* Information Card */}
                                        <div
                                            onClick={() => setExpandedStep(isExpanded ? null : step.name)}
                                            style={{
                                                flex: 1, paddingBottom: '1.5rem', cursor: 'pointer',
                                                borderBottom: sIdx === currentStage.steps.length - 1 ? 'none' : '1px solid rgba(var(--primary-rgb), 0.05)'
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <h4 style={{
                                                    fontSize: '1.05rem', fontWeight: '800', transition: 'all 0.3s',
                                                    color: isDone ? 'var(--text-muted)' : 'var(--text)',
                                                    textDecoration: isDone ? 'line-through' : 'none',
                                                }}>{step.name}</h4>
                                                <div style={{ color: 'var(--text-muted)', transform: isExpanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s' }}>
                                                    <ChevronRight size={18} />
                                                </div>
                                            </div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem', lineHeight: '1.4', fontWeight: '500' }}>{step.desc}</p>

                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                                        style={{ overflow: 'hidden' }}
                                                    >
                                                        <div style={{
                                                            marginTop: '1rem', padding: '1.25rem', background: 'var(--background)',
                                                            borderRadius: '1rem', border: '1px solid var(--border)', fontSize: '0.85rem',
                                                            color: 'var(--text-secondary)', lineHeight: '1.6', position: 'relative', overflow: 'hidden'
                                                        }}>
                                                            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: stepColor }} />
                                                            {step.fullExplanation}
                                                            {step.action && (
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); setView(step.action.view); }}
                                                                    style={{
                                                                        marginTop: '1.25rem', width: '100%', padding: '0.8rem', borderRadius: '0.75rem',
                                                                        background: stepColor, color: 'white', border: 'none', fontWeight: '800', display: 'flex',
                                                                        alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.8rem'
                                                                    }}
                                                                >
                                                                    {step.action.label} <ArrowRight size={16} />
                                                                </button>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    /* DESKTOP VIEW: Split Sidebar Pattern */
                    <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '4rem', alignItems: 'start', paddingBottom: '6rem' }}>
                        <div style={{ position: 'sticky', top: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '900', mb: '1rem' }}>Extension Modules</h3>
                                <div style={{ display: 'grid', gap: '1rem' }}>
                                    <CourseCard title="Blynk IoT Guide" purpose="Cloud Architecture" progress={0} onClick={() => setView('blynk-iot')} color="#10b981" icon={Wifi} />
                                    <CourseCard title="C Programming" purpose="Core Firmware" progress={0} onClick={() => setView('c-course')} color="#3b82f6" icon={Code} />
                                </div>
                            </div>

                            <h3 style={{ fontSize: '1.2rem', fontWeight: '900', marginBottom: '1rem' }}>Curriculum Levels</h3>
                            {roadmapExpanded.map((level, idx) => {
                                const stepsDone = level.steps.filter(s => progress[s.id || s.name]).length;
                                const lProg = Math.round((stepsDone / level.steps.length) * 100);
                                const isAct = activeLevel === idx;

                                return (
                                    <div
                                        key={idx} onClick={() => { setActiveLevel(idx); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                        style={{
                                            padding: '1.25rem', borderRadius: '1rem', cursor: 'pointer',
                                            background: isAct ? 'var(--surface)' : 'transparent',
                                            border: isAct ? '1px solid var(--border)' : '1px solid transparent',
                                            boxShadow: isAct ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                                            <div style={{
                                                width: '36px', height: '36px', borderRadius: '10px',
                                                background: isAct ? getLevelGradient(idx) : 'var(--surface)',
                                                color: isAct ? 'white' : 'var(--text-muted)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontWeight: '900', fontSize: '1rem', border: isAct ? 'none' : '1px solid var(--border)'
                                            }}>{idx + 1}</div>
                                            <h4 style={{ fontSize: '0.95rem', fontWeight: isAct ? '900' : '600', color: isAct ? 'var(--primary)' : 'var(--text-muted)' }}>{level.title}</h4>
                                        </div>
                                        <div style={{ width: '100%', height: '5px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                                            <div style={{ width: `${lProg}%`, height: '100%', background: isAct ? getLevelGradient(idx) : 'var(--border)', transition: 'width 0.8s' }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div style={{ background: 'var(--surface)', borderRadius: '2rem', padding: '3rem', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                            <motion.div key={activeLevel} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <div style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '2rem', background: `${currentStage.color}15`, color: currentStage.color, fontWeight: '800', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                                    STAGE {currentStage.level} • {finishedStepsInLevel}/{currentStage.steps.length} COMPLETE
                                </div>
                                <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>{currentStage.title}</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '3rem', maxWidth: '800px' }}>{currentStage.explanation}</p>

                                <div style={{ display: 'grid', gap: '1.25rem' }}>
                                    {currentStage.steps.map((step, sIdx) => {
                                        const isDone = progress[step.id || step.name];
                                        const isExp = expandedStep === step.name;

                                        return (
                                            <div key={sIdx} style={{ background: 'var(--background)', borderRadius: '1.25rem', padding: '1.5rem', border: '1px solid var(--border)', transition: 'all 0.3s hover:border-var(--primary)' }}>
                                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                                    <div onClick={() => toggleProgress(step.id || step.name)} style={{ cursor: 'pointer', marginTop: '0.25rem' }}>
                                                        {isDone ? <CheckCircle2 size={32} color="var(--primary)" fill="rgba(var(--primary-rgb), 0.1)" /> : <Circle size={32} color="var(--border)" />}
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div onClick={() => setExpandedStep(isExp ? null : step.name)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: isDone ? 'var(--text-muted)' : 'var(--text)', textDecoration: isDone ? 'line-through' : 'none' }}>{step.name}</h3>
                                                            {isExp ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                                                        </div>
                                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{step.desc}</p>
                                                        <AnimatePresence>
                                                            {isExp && (
                                                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                                                                    <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'var(--surface)', borderRadius: '1rem', border: '1px solid var(--border)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                                                                        {step.fullExplanation}
                                                                        {step.action && (
                                                                            <button onClick={() => setView(step.action.view)} className="btn btn-primary" style={{ marginTop: '1.5rem', gap: '0.75rem' }}>
                                                                                {step.action.label} <ArrowRight size={20} />
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Roadmap;
