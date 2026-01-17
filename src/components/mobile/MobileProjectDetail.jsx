import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, Share2, Layers, Cpu, Zap, Code as CodeIcon,
    Download, Copy, Check, ExternalLink, Shield, AlertCircle,
    PlayCircle, BookOpen, Settings, ChevronRight, BrainCircuit,
    Wrench, Lightbulb, Target, TrendingUp, IndianRupee
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import MobileShareSheet from './MobileShareSheet';

const MobileProjectDetail = ({ project: rawProject, onBack, onAddToBuild, onRemoveFromBuild, isInBuild }) => {
    const { addToast } = useToast();
    const [activeTab, setActiveTab] = useState('overview');
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [codeCopied, setCodeCopied] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Alias fields for High-Fidelity Data
    const project = useMemo(() => {
        if (!rawProject) return null;
        return {
            ...rawProject,
            problem_statement: rawProject.problem_statement || rawProject.problem || "",
            real_world_case: rawProject.real_world_use_case || rawProject.real_world_case || "",
            working_principle: rawProject.working_explanation || rawProject.working_principle || "",
            testing_output: rawProject.testing_and_output || rawProject.testing_output || "",
            common_errors: rawProject.common_errors || rawProject.troubleshooting || "",
            improvements: rawProject.improvements_next_level || rawProject.improvements || "",
            mini_challenge: rawProject.mini_challenge_for_learner || rawProject.mini_challenge || "",
            pin_config: rawProject.pin_configuration || rawProject.pin_config || {},
            software_stack: rawProject.software_stack || [],
            ai_concept: rawProject.ai_concept || rawProject.ai_integration || ""
        };
    }, [rawProject]);

    // Handle scroll for sticky header effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!project) return null;

    const copyCode = () => {
        const codeContent = typeof project.code === 'object' ? project.code.content : project.code;
        if (!codeContent) return addToast('No code available', 'error');

        navigator.clipboard.writeText(codeContent).then(() => {
            setCodeCopied(true);
            addToast('Firmware copied to clipboard', 'success');
            setTimeout(() => setCodeCopied(false), 2000);
        });
    };

    const downloadCode = () => {
        const codeContent = typeof project.code === 'object' ? project.code.content : project.code;
        const fileName = (typeof project.code === 'object' && project.code.file)
            ? project.code.file
            : `${(project.title || 'project').replace(/\s+/g, '_')}.ino`;

        if (!codeContent) return addToast('No code available', 'error');

        const element = document.createElement("a");
        const file = new Blob([codeContent], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = fileName;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const getLines = (data) => {
        if (!data) return [];
        if (Array.isArray(data)) return data;
        return data.split('\n').filter(l => l.trim() !== '');
    };

    const TabButton = ({ id, label, icon: Icon }) => (
        <button
            onClick={() => setActiveTab(id)}
            style={{
                flex: 1,
                padding: '0.8rem 0',
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === id ? '2px solid var(--primary)' : '2px solid transparent',
                color: activeTab === id ? 'var(--primary)' : 'var(--text-muted)',
                fontWeight: activeTab === id ? '800' : '600',
                fontSize: '0.8rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'all 0.2s',
                cursor: 'pointer'
            }}
        >
            <Icon size={18} />
            {label}
        </button>
    );

    return (
        <div style={{ background: 'var(--background)', minHeight: '100vh', paddingBottom: '90px' }}>
            {/* Immersive Header & Nav */}
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: scrolled ? 'rgba(var(--background-rgb), 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border)' : 'none',
                transition: 'all 0.3s ease'
            }}>
                <button
                    onClick={onBack}
                    style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        background: scrolled ? 'var(--surface)' : 'rgba(0,0,0,0.3)',
                        backdropFilter: 'blur(8px)',
                        border: scrolled ? '1px solid var(--border)' : 'none',
                        color: scrolled ? 'var(--text)' : 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    <ArrowLeft size={20} />
                </button>

                {scrolled && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontWeight: '800', fontSize: '0.9rem', color: 'var(--text)', flex: 1, textAlign: 'center', padding: '0 1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                        {project.title}
                    </motion.div>
                )}

                <button
                    onClick={() => setIsShareOpen(true)}
                    style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        background: scrolled ? 'var(--surface)' : 'rgba(0,0,0,0.3)',
                        backdropFilter: 'blur(8px)',
                        border: scrolled ? '1px solid var(--border)' : 'none',
                        color: scrolled ? 'var(--text)' : 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    <Share2 size={20} />
                </button>
            </div>

            {/* Hero Section */}
            <div style={{ position: 'relative', height: '350px', marginBottom: '-2rem' }}>
                <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(var(--background-rgb), 1) 100%)'
                }} />

                <div style={{ position: 'absolute', bottom: '3rem', left: '1.5rem', right: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <span style={{
                            background: 'var(--primary)', color: 'white',
                            padding: '0.25rem 0.6rem', borderRadius: '6px',
                            fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase'
                        }}>
                            {project.level}
                        </span>
                        <span style={{
                            background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', color: 'white',
                            padding: '0.25rem 0.6rem', borderRadius: '6px',
                            fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase'
                        }}>
                            {project.category}
                        </span>
                    </div>
                    <h1 style={{
                        fontSize: '2rem', fontWeight: '900', color: 'white',
                        lineHeight: 1.1, textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                        {project.title}
                    </h1>
                </div>
            </div>

            {/* Content Container */}
            <div style={{ padding: '0 1rem', position: 'relative', zIndex: 10 }}>

                {/* Tabs */}
                <div style={{
                    display: 'flex', background: 'var(--surface)',
                    borderRadius: '1rem', padding: '0 0.5rem',
                    marginBottom: '1.5rem', border: '1px solid var(--border)',
                    position: 'sticky', top: '70px', zIndex: 40,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                    <TabButton id="overview" label="Overview" icon={BookOpen} />
                    <TabButton id="parts" label="Parts" icon={Cpu} />
                    <TabButton id="circuit" label="Wiring" icon={Zap} />
                    <TabButton id="code" label="Code" icon={CodeIcon} />
                </div>

                <div style={{ minHeight: '400px' }}>
                    <AnimatePresence mode="wait">
                        {activeTab === 'overview' && (
                            <motion.div
                                key="overview"
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                            >
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Layers size={18} color="var(--primary)" /> Description
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>{project.description}</p>
                                </div>

                                {project.problem_statement && (
                                    <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '1rem', borderRadius: '1rem', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                                        <h4 style={{ color: '#ef4444', fontWeight: '800', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <AlertCircle size={16} /> Problem Statement
                                        </h4>
                                        <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{getLines(project.problem_statement).join(' ')}</p>
                                    </div>
                                )}

                                {project.real_world_case && (
                                    <div style={{ background: 'var(--surface)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                                        <h4 style={{ color: 'var(--text)', fontWeight: '800', fontSize: '0.95rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <TrendingUp size={18} color="var(--primary)" /> Industrial Application
                                        </h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                            {getLines(project.real_world_case).join(' ')}
                                        </p>
                                    </div>
                                )}

                                {project.ai_concept && (
                                    <div style={{ background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                                        <h4 style={{ color: '#8b5cf6', fontWeight: '800', fontSize: '0.95rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <BrainCircuit size={18} /> AI Core Concept
                                        </h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6 }}>
                                            {project.ai_concept}
                                        </p>
                                    </div>
                                )}

                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Settings size={18} color="var(--primary)" /> Working Principle
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {getLines(project.working_principle).map((step, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.75rem', background: 'var(--surface)', padding: '0.8rem', borderRadius: '0.8rem', border: '1px solid var(--border)' }}>
                                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.8rem', flexShrink: 0 }}>{i + 1}</div>
                                                <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{step.replace(/^\d+\.\s*/, '')}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Education & Troubleshooting Section */}
                                {(project.common_errors || project.improvements) && (
                                    <div style={{ marginTop: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Wrench size={18} color="var(--primary)" /> Pro Tips
                                        </h3>

                                        {project.common_errors && (
                                            <div style={{ marginBottom: '1rem' }}>
                                                <h5 style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--text)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                    Common Errors
                                                </h5>
                                                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                                                    {getLines(project.common_errors).map((err, i) => (
                                                        <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.4rem', lineHeight: 1.4 }}>
                                                            {err.replace(/^- /, '')}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {project.improvements && (
                                            <div>
                                                <h5 style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--text)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                    Next Level Upgrades
                                                </h5>
                                                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                                                    {getLines(project.improvements).map((imp, i) => (
                                                        <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.4rem', lineHeight: 1.4 }}>
                                                            {imp.replace(/^- /, '')}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {project.mini_challenge && (
                                    <div style={{ background: 'var(--surface)', border: '1px dashed var(--primary)', borderRadius: '1rem', padding: '1rem', display: 'flex', gap: '0.75rem' }}>
                                        <div style={{ width: '32px', height: '32px', background: 'rgba(var(--primary-rgb), 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Target size={18} color="var(--primary)" />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.25rem' }}>CHALLENGE</div>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.4, margin: 0 }}>
                                                {project.mini_challenge}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {activeTab === 'parts' && (
                            <motion.div
                                key="parts"
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>Components</h3>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Required hardware checklist</p>
                                    </div>
                                    {project.total_estimated_cost_india && (
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Est. Cost</div>
                                            <div style={{ color: 'var(--accent)', fontWeight: '900', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                                <IndianRupee size={16} strokeWidth={3} /> {project.total_estimated_cost_india}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {Array.isArray(project.components) && project.components.length > 0 && typeof project.components[0] === 'object' ? (
                                    project.components.map((comp, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--surface)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                                                <Cpu size={20} color="var(--primary)" />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: '700', color: 'var(--text)' }}>{comp.name}</div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{comp.specification || 'Standard'}</div>
                                            </div>
                                            <div style={{ fontWeight: '900', color: 'var(--accent)', background: 'rgba(var(--accent-rgb), 0.1)', padding: '0.3rem 0.6rem', borderRadius: '6px' }}>
                                                {comp.quantity}x
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    getLines(project.components).map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--surface)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }} />
                                            <div style={{ fontWeight: '600' }}>{item}</div>
                                        </div>
                                    ))
                                )}
                            </motion.div>
                        )}

                        {activeTab === 'circuit' && (
                            <motion.div
                                key="circuit"
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                            >
                                {project.circuit_diagram && (
                                    <div style={{ background: 'white', padding: '0.5rem', borderRadius: '1rem', border: '1px solid var(--border)', overflow: 'hidden' }}>
                                        {project.circuit_diagram.match(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i) || project.circuit_diagram.startsWith('http') ? (
                                            <img
                                                src={project.circuit_diagram}
                                                alt="Circuit Diagram"
                                                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '0.5rem' }}
                                                onClick={() => window.open(project.circuit_diagram, '_blank')}
                                            />
                                        ) : (
                                            <div style={{ padding: '2rem', textAlign: 'center', color: 'black' }}>
                                                <p>{project.circuit_diagram}</p>
                                            </div>
                                        )}
                                        <a
                                            href={project.circuit_diagram}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                                padding: '0.8rem', background: '#f5f5f5', color: 'black',
                                                textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem',
                                                marginTop: '0.5rem', borderRadius: '0.5rem'
                                            }}
                                        >
                                            <ExternalLink size={16} /> Open Full Resolution
                                        </a>
                                    </div>
                                )}

                                {typeof project.pin_config === 'object' && (
                                    <div style={{ marginTop: '2rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem' }}>Pin Connections</h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            {/* Simplified Pin List for Mobile */}
                                            {Object.entries(project.pin_config).flatMap(([board, pins]) =>
                                                Array.isArray(pins) ? pins.map((pin, i) => ({ ...pin, board, id: i })) : []
                                            ).map((pin, i) => (
                                                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface)', padding: '0.8rem', borderRadius: '0.8rem', border: '1px solid var(--border)' }}>
                                                    <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{pin.module || pin.component}</div>
                                                    <div style={{ height: '1px', flex: 1, background: 'var(--border)', margin: '0 1rem' }} />
                                                    <div style={{ fontWeight: '900', color: 'var(--primary)' }}>{pin.pin || pin.mcuPin}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {activeTab === 'code' && (
                            <motion.div
                                key="code"
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                            >
                                {project.software_stack && project.software_stack.length > 0 && (
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <CodeIcon size={18} color="var(--primary)" /> Tech Stack
                                        </h3>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {project.software_stack.map((item, idx) => (
                                                <span key={idx} style={{
                                                    background: 'var(--surface)',
                                                    border: '1px solid var(--border)',
                                                    padding: '0.4rem 0.8rem',
                                                    borderRadius: '8px',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                    color: 'var(--text)'
                                                }}>
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div style={{ background: '#1e1e1e', borderRadius: '1rem', border: '1px solid #333', overflow: 'hidden' }}>
                                    <div style={{ padding: '0.8rem 1rem', background: '#252525', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333' }}>
                                        <div style={{ color: '#fff', fontWeight: '700', fontSize: '0.85rem' }}>firmware.ino</div>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button onClick={copyCode} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: codeCopied ? '#4ade80' : '#fff', padding: '0.4rem', borderRadius: '6px' }}>
                                                {codeCopied ? <Check size={16} /> : <Copy size={16} />}
                                            </button>
                                            <button onClick={downloadCode} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', padding: '0.4rem', borderRadius: '6px' }}>
                                                <Download size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <div style={{ padding: '1rem', overflowX: 'auto', maxHeight: '500px' }}>
                                        <pre style={{ margin: 0, color: '#d4d4d4', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                                            {typeof project.code === 'object' ? project.code.content : project.code}
                                        </pre>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile Share Sheet */}
            <MobileShareSheet
                isOpen={isShareOpen}
                onClose={() => setIsShareOpen(false)}
                title={project.title}
                description={project.description}
                url={typeof window !== 'undefined' ? window.location.href : ''}
            />

            {/* Floating Action Bar */}
            <div style={{
                position: 'fixed', bottom: 0, left: 0, right: 0,
                padding: '1rem', background: 'var(--background)',
                borderTop: '1px solid var(--border)', zIndex: 60,
                display: 'flex', gap: '1rem'
            }}>
                <button
                    onClick={() => isInBuild ? onRemoveFromBuild(project.id) : onAddToBuild(project.id)}
                    style={{
                        flex: 1,
                        padding: '1rem',
                        borderRadius: '1rem',
                        border: isInBuild ? '2px solid var(--primary)' : 'none',
                        background: isInBuild ? 'transparent' : 'var(--primary)',
                        color: isInBuild ? 'var(--primary)' : 'white',
                        fontWeight: '800',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        boxShadow: isInBuild ? 'none' : '0 4px 14px rgba(var(--primary-rgb), 0.4)'
                    }}
                >
                    {isInBuild ? (
                        <>
                            <Check size={20} /> In Build List
                        </>
                    ) : (
                        <>
                            <PlayCircle size={20} /> Start Building
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default MobileProjectDetail;
