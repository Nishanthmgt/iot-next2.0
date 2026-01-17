import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft, Cpu, Shield, Zap, BookOpen, Terminal, Settings,
    ExternalLink, CheckCircle, AlertCircle, ShoppingCart, Clock,
    Lightbulb, Layers, PlayCircle, Eye, Rocket, Download, List, Share2, Sparkles,
    Building2, Wallet, FileText, Globe, Star, ChevronLeft, ChevronRight, Printer
} from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { Helmet } from 'react-helmet-async';
import projectIds from '../data/project-ids.json';
import { useEffect } from 'react';
import MobileShareSheet from './mobile/MobileShareSheet';

export default function ProjectDetail({ project: rawProject, onBack, onAddToBuild, onRemoveFromBuild, isInBuild, onNext, onPrev }) {
    const { addToast } = useToast();
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 820);
    const [isShareOpen, setIsShareOpen] = React.useState(false);
    const [isPrincipleExpanded, setIsPrincipleExpanded] = React.useState(false);
    const [isCodeExpanded, setIsCodeExpanded] = React.useState(false);
    const [codeCopied, setCodeCopied] = React.useState(false);
    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        const handleOpenShare = () => setIsShareOpen(true);
        window.addEventListener('resize', handleResize);
        window.addEventListener('open-share', handleOpenShare);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('open-share', handleOpenShare);
        };
    }, []);
    // Field Aliasing for High-Fidelity AI Projects
    const project = React.useMemo(() => {
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
            pin_config: rawProject.pin_configuration || rawProject.pin_config || {}
        };
    }, [rawProject]);

    if (!project) return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', background: 'var(--background)' }}>
            <div className="iot-loader">
                <div className="iot-loader-inner"></div>
            </div>
            <p style={{ fontWeight: 800, letterSpacing: '0.1em', color: 'var(--primary)' }}>DECODING PROJECT...</p>
        </div>
    );

    const getLines = (data) => {
        if (!data) return [];
        if (Array.isArray(data)) return data;
        return data.split('\n').filter(l => l.trim() !== '');
    };
    const SectionTitle = ({ icon: Icon, title }) => (
        <h2 style={{
            fontSize: isMobile ? '1.25rem' : '1.75rem',
            marginBottom: isMobile ? '1.25rem' : '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '0.75rem' : '1rem',
            color: 'var(--text)',
            fontWeight: '900',
            letterSpacing: '-0.02em',
            lineHeight: 'var(--lh-tight)'
        }}>
            <div style={{ background: 'var(--primary-gradient)', padding: isMobile ? '0.4rem' : '0.6rem', borderRadius: '10px', color: 'white', boxShadow: 'var(--shadow-glow)' }}>
                {Icon ? <Icon size={isMobile ? 16 : 20} /> : <Layers size={isMobile ? 16 : 20} />}
            </div>
            {title}
        </h2>
    );
    // Mobile Card Components
    const MobileComponentCard = ({ component, index }) => (
        <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.25rem' }}>
                        {component.name}
                    </div>
                    {component.alternatives && (
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            Alt: {component.alternatives.join(', ')}
                        </div>
                    )}
                </div>
                <div style={{
                    background: 'var(--primary-gradient)',
                    color: 'white',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: '900'
                }}>
                    {component.quantity}x
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '800', marginBottom: '0.25rem' }}>
                        Specification
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: '600' }}>
                        {component.specification || '-'}
                    </div>
                </div>
                <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '800', marginBottom: '0.25rem' }}>
                        Cost (INR)
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '800' }}>
                        {component.indian_cost || '-'}
                    </div>
                </div>
            </div>
            <button
                onClick={() => {
                    window.history.pushState({ view: 'sensors', search: component.name }, '', '/sensors');
                    window.dispatchEvent(new Event('popstate'));
                }}
                style={{
                    background: 'none',
                    border: '1px solid var(--primary)',
                    color: 'var(--primary)',
                    padding: '0.6rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    minHeight: '44px'
                }}
            >
                View Specs →
            </button>
        </div>
    );
    const MobilePinCard = ({ config }) => (
        <div style={{
            background: 'rgba(var(--primary-rgb), 0.03)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--text)' }}>
                    {config.module || config.component}
                </div>
                <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: '900'
                }}>
                    {config.mcuPin || config.pin || config.gpio}
                </div>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                {config.description || config.note}
            </div>
            {config.pinName && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', fontSize: '0.7rem' }}>
                    <div>
                        <div style={{ color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Pin Name</div>
                        <div style={{ color: 'var(--text)', fontWeight: '700' }}>{config.pinName}</div>
                    </div>
                    <div>
                        <div style={{ color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Direction</div>
                        <div style={{ color: config.direction === 'Output' ? 'var(--accent)' : 'var(--secondary)', fontWeight: '700' }}>
                            {config.direction}
                        </div>
                    </div>
                    <div>
                        <div style={{ color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Voltage</div>
                        <div style={{ color: 'var(--text)', fontWeight: '700' }}>{config.voltage}</div>
                    </div>
                </div>
            )}
        </div>
    );
    const [selectedBoard, setSelectedBoard] = React.useState(() => {
        if (project?.pin_config && typeof project.pin_config === 'object' && !Array.isArray(project.pin_config)) {
            const boards = Object.keys(project.pin_config);
            if (boards.includes('arduino')) return 'arduino';
            if (boards.includes('esp32')) return 'esp32';
            if (boards.includes('raspberry_pi')) return 'raspberry_pi';
            return boards[0] || 'arduino';
        }
        return 'arduino';
    });
    const downloadCode = () => {
        if (!project || !project.code) {
            addToast("Firmware data not found", "error");
            return;
        }
        const codeContent = typeof project.code === 'object' ? project.code.content : project.code;
        const fileName = (typeof project.code === 'object' && project.code.file)
            ? project.code.file
            : `${(project.title || 'project').replace(/\s+/g, '_')}.ino`;
        const element = document.createElement("a");
        const file = new Blob([codeContent], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = fileName;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        addToast(`Source File Initialized (${fileName.split('.').pop().toUpperCase()})`, "success");
    };
    const copyCode = () => {
        if (!project || !project.code) {
            addToast("No code available to copy", "error");
            return;
        }
        const codeContent = typeof project.code === 'object' ? project.code.content : project.code;
        navigator.clipboard.writeText(codeContent).then(() => {
            setCodeCopied(true);
            addToast('Code copied to clipboard', 'success');
            setTimeout(() => setCodeCopied(false), 2000);
        }).catch(() => {
            addToast('Failed to copy code', 'error');
        });
    };
    const handlePrint = () => {
        window.print();
    };
    const isHighFidelity = !!(project.problem_statement || project.sub_category || project.mini_challenge || (project.pin_config && typeof project.pin_config === 'object' && !Array.isArray(project.pin_config)));
    // Canonical URL & Redirect Logic
    const projectSlug = projectIds[project.id.toString()];
    const canonicalUrl = `https://iotnext.store/project/${projectSlug}`;
    useEffect(() => {
        // Redirect numeric ID URLs to canonical slug URLs
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;
        if (currentPath.includes(`/project/${project.id}`) || currentHash.includes(`project/${project.id}`)) {
            // Replace history to avoid back button issues
            window.history.replaceState(null, '', `/project/${projectSlug}`);
        }
    }, [project.id, projectSlug]);
    // Structured Data (JSON-LD)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": project.title,
        "description": project.description,
        "image": project.image,
        "author": {
            "@type": "Organization",
            "name": "IoTNext"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IoTNext",
            "logo": {
                "@type": "ImageObject",
                "url": "https://iotnext.store/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        }
    };
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": project.title,
        "description": project.description,
        "image": project.image,
        "step": [
            {
                "@type": "HowToStep",
                "text": project.working_principle || "Learn the working principle and logic behind this IoT project."
            },
            {
                "@type": "HowToStep",
                "text": "Check the pin configuration and circuit diagram for correct wiring."
            },
            {
                "@type": "HowToStep",
                "text": "Upload the verified code to your microcontroller."
            }
        ],
        "totalTime": project.estimatedTime ? `PT${project.estimatedTime.replace(' mins', 'M').replace(' hours', 'H')}` : "PT30M"
    };
    return (
        <>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
                <title>{project.title} | {project.level} IoT Project - IoTNext</title>
                <meta name="description" content={project.description || `Learn how to build ${project.title} with step-by-step documentation, code, and circuit diagrams.`} />
                <meta property="og:title" content={`${project.title} - IoTNext Project Repository`} />
                <meta property="og:description" content={project.description} />
                <meta property="og:image" content={project.image} />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
            </Helmet>
            <div className="container" style={{ padding: isHighFidelity ? (isMobile ? '1rem 0 2rem' : '4rem 0') : (isMobile ? '1rem 0 2rem' : '2rem 0'), position: 'relative' }}>
                {/* Desktop Navigation Arrows (Floating) */}
                <div className="desktop-flex" style={{
                    position: 'fixed',
                    top: '50%',
                    left: '2rem',
                    right: '2rem',
                    transform: 'translateY(-50%)',
                    display: isMobile ? 'none' : 'flex',
                    justifyContent: 'space-between',
                    pointerEvents: 'none',
                    zIndex: 100,
                    opacity: 0.6
                }}>
                    <motion.button
                        whileHover={{ scale: 1.1, opacity: 1, x: -5 }}
                        onClick={onPrev}
                        style={{
                            pointerEvents: 'auto',
                            background: 'var(--glass)',
                            border: '1px solid var(--border)',
                            color: 'var(--text)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, opacity: 1, x: 5 }}
                        onClick={onNext}
                        style={{
                            pointerEvents: 'auto',
                            background: 'var(--glass)',
                            border: '1px solid var(--border)',
                            color: 'var(--text)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <ChevronRight size={24} />
                    </motion.button>
                </div>
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={onBack}
                    className="btn btn-outline hover-lift"
                    style={{
                        marginBottom: isMobile ? '1.5rem' : '3rem',
                        marginLeft: isMobile ? '1.25rem' : '0',
                        padding: isMobile ? '0.6rem 1.25rem' : '0.75rem 1.5rem',
                        borderRadius: '1rem',
                        fontWeight: '700',
                        fontSize: isMobile ? '0.85rem' : '1rem'
                    }}
                >
                    <ArrowLeft size={16} /> {isMobile ? "Back" : "Back to Repository"}
                </motion.button>

                {isMobile && (
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setIsShareOpen(true)}
                        className="glass"
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: isMobile ? '1.25rem' : '1rem',
                            padding: '0.6rem',
                            borderRadius: '1rem',
                            border: '1px solid var(--border)',
                            color: 'var(--text)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <Share2 size={20} />
                    </motion.button>
                )}

                <MobileShareSheet
                    isOpen={isShareOpen}
                    onClose={() => setIsShareOpen(false)}
                    title={project.title}
                    description={project.description}
                    url={typeof window !== 'undefined' ? window.location.href : ''}
                />

                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.98, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98, x: -20 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    onPanEnd={(e, info) => {
                        const threshold = 100;
                        if (info.offset.x > threshold) {
                            onPrev();
                        } else if (info.offset.x < -threshold) {
                            onNext();
                        }
                    }}
                    className={isHighFidelity ? "glass-plus" : ""}
                    style={{
                        padding: isHighFidelity ? (isMobile ? '1.5rem' : '4rem') : (isMobile ? '1.25rem' : '2.5rem'),
                        borderRadius: isMobile ? '0' : '2rem',
                        background: isHighFidelity ? 'var(--surface)' : 'var(--glass)',
                        border: isMobile ? 'none' : '1px solid var(--border)',
                        cursor: 'grab',
                        userSelect: 'none',
                        boxShadow: isHighFidelity ? (isMobile ? '0' : '0 20px 40px rgba(0,0,0,0.2)') : 'none'
                    }}
                >
                    {/* Project Header - Side by Side on Desktop */}
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? '2rem' : '4rem',
                        marginBottom: isMobile ? '2.5rem' : '5rem',
                        alignItems: project.image ? 'center' : 'flex-start'
                    }}>
                        <div style={{ flex: project.image ? 1 : '0 0 100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <div style={{ background: 'var(--primary-gradient)', padding: '0.4rem 0.8rem', borderRadius: '8px', color: 'white', fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {project.level}
                                </div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {project.category}
                                </div>
                            </div>
                            <h1 style={{ fontSize: isMobile ? '2.25rem' : '4rem', fontWeight: '950', marginBottom: '1.5rem', color: 'var(--text)', lineHeight: 1, letterSpacing: '-0.04em' }}>
                                {project.title}
                            </h1>
                            <p style={{
                                fontSize: isMobile ? '1.1rem' : '1.35rem',
                                color: 'var(--text-muted)',
                                lineHeight: isMobile ? '1.5' : '1.6',
                                fontWeight: '500',
                                marginBottom: isMobile ? '1.5rem' : '2rem'
                            }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {project.tech?.map((t, idx) => (
                                    <span key={idx} style={{ background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '800' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {project.image && (
                            <div style={{ flex: 1, width: isMobile ? '100%' : 'auto' }}>
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '1.6',
                                    borderRadius: isMobile ? '1.25rem' : '2.5rem',
                                    overflow: 'hidden',
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Security Alert if present */}
                    {project.note_on_security && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                background: 'rgba(239, 68, 68, 0.1)',
                                border: '1px solid rgba(239, 68, 68, 0.3)',
                                borderRadius: '1.5rem',
                                marginBottom: '3rem',
                                display: 'flex',
                                gap: '1.5rem',
                                alignItems: 'center',
                                color: '#ef4444'
                            }}
                        >
                            <Shield size={24} style={{ filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.4))' }} />
                            <div>
                                <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Security Advisory</h4>
                                <p style={{ margin: '0.25rem 0 0 0', fontWeight: 600, fontSize: '1rem', color: 'var(--text)' }}>{project.note_on_security}</p>
                            </div>
                        </motion.div>
                    )}
                    {/* AI Concept & System Flow (Specialized for AI Category) */}
                    {project.category === "AI + Embedded + Machine Learning" && (project.ai_concept || project.system_block_flow) && (
                        <div className="grid grid-2" style={{ gap: '2.5rem', marginBottom: '4rem' }}>
                            {project.ai_concept && (
                                <div className="glass-plus" style={{ padding: '2.5rem', borderRadius: '2rem', background: 'rgba(var(--primary-rgb), 0.03)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                                        <Sparkles size={20} />
                                        <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '900', fontSize: '0.9rem' }}>AI Architecture</h3>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
                                        {Object.entries(project.ai_concept).map(([key, value]) => (
                                            <div key={key}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>{key.replace(/_/g, ' ')}</span>
                                                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.system_block_flow && (
                                <div className="glass-plus" style={{ padding: '2.5rem', borderRadius: '2rem', background: 'rgba(var(--accent-rgb), 0.03)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                                        < Rocket size={20} />
                                        <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '900', fontSize: '0.9rem' }}>System Block Flow</h3>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                                        {project.system_block_flow.map((step, i) => (
                                            <React.Fragment key={i}>
                                                <div style={{ background: 'var(--surface)', padding: '0.5rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>
                                                    {step.split(' → ').map((part, pi) => (
                                                        <span key={pi}>{part}{pi < step.split(' → ').length - 1 && ' → '}</span>
                                                    ))}
                                                </div>
                                                {i < project.system_block_flow.length - 1 && <span style={{ color: 'var(--text-muted)', fontWeight: 900 }}>→</span>}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {/* New High-Fidelity Strategic Section: Problem vs Case */}
                    {isHighFidelity && (project.problem_statement || project.real_world_case) && (
                        <div className={isMobile ? "grid grid-1" : "grid grid-2"} style={{ gap: isMobile ? '1.25rem' : '2.5rem', marginBottom: isMobile ? '2.5rem' : '5rem' }}>
                            {project.problem_statement && (
                                <motion.div
                                    whileHover={isMobile ? {} : { y: -5 }}
                                    className="glass-plus"
                                    style={{ padding: isMobile ? '1.5rem' : '3rem', borderRadius: isMobile ? '1.5rem' : '2.5rem', border: '1px solid rgba(239, 68, 68, 0.2)', background: 'rgba(239, 68, 68, 0.02)' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: isMobile ? '0.75rem' : '1.5rem', color: '#ef4444' }}>
                                        <AlertCircle size={isMobile ? 20 : 24} />
                                        <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '900', fontSize: isMobile ? '0.8rem' : '1rem' }}>The Problem</h3>
                                    </div>
                                    <p style={{ fontSize: isMobile ? '0.95rem' : '1.15rem', lineHeight: '1.6', color: 'var(--text)', fontWeight: '500' }}>
                                        {getLines(project.problem_statement).join(' ')}
                                    </p>
                                </motion.div>
                            )}
                            {project.real_world_case && (
                                <motion.div
                                    whileHover={isMobile ? {} : { y: -5 }}
                                    className="glass-plus"
                                    style={{ padding: isMobile ? '1.5rem' : '3rem', borderRadius: isMobile ? '1.5rem' : '2.5rem', border: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(16, 185, 129, 0.02)' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: isMobile ? '0.75rem' : '1.5rem', color: '#10b981' }}>
                                        <Globe size={isMobile ? 20 : 24} />
                                        <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '900', fontSize: isMobile ? '0.8rem' : '1rem' }}>Industrial Impact</h3>
                                    </div>
                                    <p style={{ fontSize: isMobile ? '0.95rem' : '1.15rem', lineHeight: '1.6', color: 'var(--text)', fontWeight: '500' }}>
                                        {getLines(project.real_world_case).join(' ')}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    )}
                    {/* Main Content Grid */}
                    <div className={isMobile ? "grid grid-1" : "grid grid-2"} style={{ gap: isMobile ? '2.5rem' : '4rem', marginBottom: isMobile ? '2.5rem' : '5rem' }}>
                        {/* Left Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '2.5rem' : '4rem' }}>
                            <div>
                                <SectionTitle icon={List} title="Components & BOM" />
                                {isMobile ? (
                                    // Mobile Card Layout
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {Array.isArray(project.components) && project.components.length > 0 && typeof project.components[0] === 'object' ? (
                                            project.components.map((comp, idx) => (
                                                <MobileComponentCard key={idx} component={comp} index={idx} />
                                            ))
                                        ) : (
                                            // Fallback for string-based components
                                            getLines(project.components).map((item, idx) => (
                                                <div key={idx} style={{
                                                    background: 'var(--surface)',
                                                    border: '1px solid var(--border)',
                                                    borderRadius: '12px',
                                                    padding: '1rem',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '600',
                                                    color: 'var(--text)'
                                                }}>
                                                    {item}
                                                </div>
                                            ))
                                        )}
                                    </div>
                                ) : (
                                    // Desktop Table Layout
                                    <div className="glass" style={{ padding: '2rem', borderRadius: '2rem', background: 'var(--surface)', border: '1px solid var(--border)', overflowX: 'auto' }}>
                                        {Array.isArray(project.components) && project.components.length > 0 && typeof project.components[0] === 'object' ? (
                                            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.5rem', minWidth: '600px' }}>
                                                <thead>
                                                    <tr style={{ color: 'var(--primary)', fontSize: '0.65rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'left' }}>
                                                        <th style={{ padding: '0.5rem' }}>Item</th>
                                                        <th style={{ padding: '0.5rem' }}>Qty</th>
                                                        <th style={{ padding: '0.5rem' }}>Specs</th>
                                                        <th style={{ padding: '0.5rem' }}>Cost</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {project.components.map((comp, idx) => (
                                                        <tr key={idx} style={{ background: 'rgba(var(--primary-rgb), 0.03)', borderRadius: '10px', border: '1px solid var(--border)' }}>
                                                            <td style={{ padding: '0.75rem', borderRadius: '10px 0 0 10px' }}>
                                                                <div style={{ fontWeight: 800, color: 'var(--text)', fontSize: '0.9rem' }}>{comp.name}</div>
                                                                {comp.alternatives && <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>Alt: {comp.alternatives.join(', ')}</div>}
                                                            </td>
                                                            <td style={{ padding: '0.75rem', fontWeight: 900, color: 'var(--primary)', fontSize: '0.9rem' }}>{comp.quantity}x</td>
                                                            <td style={{ padding: '0.75rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>{comp.specification || '-'}</td>
                                                            <td style={{ padding: '0.75rem', fontWeight: 800, color: 'var(--accent)', borderRadius: '0 10px 10px 0', fontSize: '0.9rem' }}>
                                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                                                                    <span>{comp.indian_cost || '-'}</span>
                                                                    <button
                                                                        onClick={() => {
                                                                            window.history.pushState({ view: 'sensors', search: comp.name }, '', '/sensors');
                                                                            window.dispatchEvent(new Event('popstate'));
                                                                        }}
                                                                        style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: '0.6rem', fontWeight: 800, cursor: 'pointer', padding: 0, textAlign: 'left', textDecoration: 'underline' }}
                                                                    >
                                                                        View
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                {getLines(project.components).map((item, idx) => (
                                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text)', fontWeight: '600', fontSize: '1rem' }}>
                                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-gradient)', flexShrink: 0 }}></div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                            {item}
                                                            <span
                                                                onClick={() => {
                                                                    window.history.pushState({ view: 'sensors', search: item.split('x ')[1] || item }, '', '/sensors');
                                                                    window.dispatchEvent(new Event('popstate'));
                                                                }}
                                                                style={{ fontSize: '0.65rem', color: 'var(--primary)', cursor: 'pointer', textDecoration: 'none', fontWeight: 800 }}
                                                            >
                                                                (Specs)
                                                            </span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                                {project.total_estimated_cost_india && (
                                    <div style={{ marginTop: '1.25rem', padding: '1rem 1.5rem', borderRadius: '1.25rem', background: 'var(--accent-gradient)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.7rem' }}>Total Budget</span>
                                        <span style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', fontWeight: 950 }}>{project.total_estimated_cost_india}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        {project.circuit_diagram && (
                            <div>
                                <SectionTitle icon={Eye} title="Schematic Diagram" />
                                <div className="glass" style={{
                                    padding: project.circuit_diagram.match(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i) || project.circuit_diagram.startsWith('http') ? '0.5rem' : (isMobile ? '1.25rem' : '2.5rem'),
                                    borderRadius: isMobile ? '1.25rem' : '2rem',
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    overflow: 'hidden'
                                }}>
                                    {project.circuit_diagram.match(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i) || project.circuit_diagram.startsWith('http') ? (
                                        <img
                                            src={project.circuit_diagram}
                                            alt={`${project.title} - IoT Circuit Schematic and Wiring Diagram`}
                                            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '0.75rem' }}
                                        />
                                    ) : (
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? '1rem' : '1.5rem' }}>
                                            <div style={{
                                                minWidth: isMobile ? '40px' : '60px',
                                                height: isMobile ? '40px' : '60px',
                                                background: 'rgba(var(--primary-rgb), 0.1)',
                                                borderRadius: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--primary)',
                                                boxShadow: 'inset 0 0 20px rgba(var(--primary-rgb), 0.05)'
                                            }}>
                                                <FileText size={isMobile ? 20 : 28} />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                                <h4 style={{ margin: 0, fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hardware Wiring Guide</h4>
                                                <p style={{ color: 'var(--text)', lineHeight: '1.6', fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: '600', margin: 0 }}>
                                                    {project.circuit_diagram}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        <div>
                            <SectionTitle icon={Terminal} title="Software Stack" />
                            <div className="glass" style={{ padding: isMobile ? '1rem' : '2rem', borderRadius: isMobile ? '1.25rem' : '2rem', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {getLines(project.software_stack).map((tech, i) => (
                                        <div key={i} style={{ background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', padding: isMobile ? '0.4rem 0.75rem' : '0.5rem 1rem', borderRadius: '8px', fontWeight: 800, fontSize: isMobile ? '0.75rem' : '0.85rem', border: '1px solid rgba(var(--primary-rgb), 0.2)' }}>
                                            {tech}
                                        </div>
                                    ))}
                                    {!project.software_stack && <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>Standard IoT Development Environment</p>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <SectionTitle icon={Settings} title="Working Principle" />
                            <div className="glass" style={{ padding: isMobile ? '1.5rem' : '2.5rem', borderRadius: isMobile ? '1.25rem' : '2rem', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                                <div style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: '500' }}>
                                    {getLines(project.working_principle).map((step, i) => (
                                        <p key={i} style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                                            <span style={{ color: 'var(--primary)', fontWeight: 900 }}>{i + 1}.</span>
                                            <span>{step.replace(/^\d+\.\s*/, '')}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '2.5rem' : '4rem' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', marginBottom: isMobile ? '1rem' : '2rem', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '0.75rem' : '0' }}>
                                <SectionTitle icon={Zap} title="Pin Map" />
                                {typeof project.pin_config === 'object' && project.pin_config !== null && !Array.isArray(project.pin_config) && (
                                    <div className="glass" style={{ display: 'flex', padding: '0.2rem', borderRadius: '10px', gap: '0.25rem', overflowX: 'auto', maxWidth: '100%' }}>
                                        {Object.keys(project.pin_config).map(board => (
                                            <button
                                                key={board}
                                                onClick={() => setSelectedBoard(board)}
                                                style={{
                                                    padding: '0.4rem 0.75rem',
                                                    borderRadius: '6px',
                                                    border: 'none',
                                                    background: selectedBoard === board ? 'var(--primary-gradient)' : 'transparent',
                                                    color: selectedBoard === board ? 'white' : 'var(--text-muted)',
                                                    fontSize: '0.65rem',
                                                    fontWeight: '800',
                                                    textTransform: 'uppercase',
                                                    cursor: 'pointer',
                                                    whiteSpace: 'nowrap'
                                                }}
                                            >
                                                {board.replace('_', ' ')}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="glass-plus" style={{
                                padding: isMobile ? '0.75rem' : '1.5rem',
                                borderRadius: isMobile ? '1.25rem' : '2rem',
                                border: '1px solid rgba(var(--secondary-rgb), 0.3)',
                                background: 'rgba(var(--secondary-rgb), 0.02)',
                                overflowX: isMobile ? 'visible' : 'auto'
                            }}>
                                {typeof project.pin_config === 'object' && project.pin_config !== null ? (
                                    isMobile ? (
                                        // Mobile Card Layout
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {(project.pin_config[selectedBoard] || []).map((config, idx) => (
                                                <MobilePinCard key={idx} config={config} />
                                            ))}
                                        </div>
                                    ) : (
                                        // Desktop Grid Layout
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            {/* Header if new schema */}
                                            {(project.pin_config[selectedBoard] && project.pin_config[selectedBoard][0]?.module) && (
                                                <div style={{
                                                    display: 'grid',
                                                    gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr 2fr',
                                                    gap: '0.75rem',
                                                    padding: '0.5rem',
                                                    borderBottom: '2px solid var(--primary)',
                                                    fontSize: '0.6rem',
                                                    fontWeight: '900',
                                                    textTransform: 'uppercase',
                                                    color: 'var(--primary)',
                                                    minWidth: '700px'
                                                }}>
                                                    <span>Item</span>
                                                    <span>GPIO</span>
                                                    <span>Description</span>
                                                    <span>Pin Name</span>
                                                    <span>Direction</span>
                                                    <span>Voltage</span>
                                                </div>
                                            )}
                                            {(project.pin_config[selectedBoard] || []).map((config, idx) => (
                                                config.module ? (
                                                    <div key={idx} style={{
                                                        display: 'grid',
                                                        gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr 2fr',
                                                        gap: '0.75rem',
                                                        alignItems: 'center',
                                                        padding: '0.6rem 0.5rem',
                                                        borderBottom: '1px solid rgba(var(--primary-rgb), 0.1)',
                                                        fontSize: '0.85rem',
                                                        minWidth: '700px'
                                                    }}>
                                                        <span style={{ fontWeight: '800', color: 'var(--text)' }}>{config.module}</span>
                                                        <span style={{ color: 'var(--primary)', fontWeight: '900' }}>{config.mcuPin || config.pin || config.gpio}</span>
                                                        <span style={{ color: 'var(--text)', fontWeight: '500', fontSize: '0.85rem' }}>{config.description}</span>
                                                        <span style={{ color: 'var(--text-muted)' }}>{config.pinName}</span>
                                                        <span style={{ color: config.direction === 'Output' ? 'var(--accent)' : 'var(--secondary)', fontWeight: '700' }}>{config.direction}</span>
                                                        <span style={{ color: 'var(--text-muted)' }}>{config.voltage}</span>
                                                    </div>
                                                ) : (
                                                    <div key={idx} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1.5rem', alignItems: 'center', padding: '0.6rem 0.5rem', borderBottom: '1px solid rgba(var(--primary-rgb), 0.1)' }}>
                                                        <span style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '0.9rem' }}>{config.pin}</span>
                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <span style={{ color: 'var(--text)', fontWeight: '700', fontSize: '0.95rem' }}>{config.component}</span>
                                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>{config.note}</span>
                                                        </div>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    )
                                ) : (
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: isMobile ? '0.9rem' : '1.1rem', whiteSpace: 'pre-line', fontWeight: '600' }}>{project.pin_config || "Detailed peripheral mapping initialized..."}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <SectionTitle icon={Terminal} title="Source Code" />
                            <div style={{ position: 'relative' }}>
                                {/* Action buttons */}
                                <div style={{
                                    position: 'absolute',
                                    top: isMobile ? '0.75rem' : '1rem',
                                    right: isMobile ? '0.75rem' : '1rem',
                                    display: 'flex',
                                    gap: '0.5rem',
                                    zIndex: 10
                                }}>
                                    <button
                                        onClick={copyCode}
                                        style={{
                                            background: codeCopied ? '#10b981' : 'rgba(255,255,255,0.08)',
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            color: 'white',
                                            padding: '0.6rem 1.25rem',
                                            borderRadius: '12px',
                                            fontSize: '0.8rem',
                                            fontWeight: '800',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            minHeight: '48px',
                                            transition: 'all 0.2s ease',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        {codeCopied ? <CheckCircle size={14} /> : <Terminal size={14} />}
                                        {codeCopied ? 'Copied!' : 'Copy Sketch'}
                                    </button>
                                    {isMobile && (
                                        <button
                                            onClick={() => setIsCodeExpanded(!isCodeExpanded)}
                                            style={{
                                                background: isCodeExpanded ? 'rgba(var(--primary-rgb), 0.2)' : 'rgba(255,255,255,0.08)',
                                                border: isCodeExpanded ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.15)',
                                                color: 'white',
                                                padding: '0.6rem 1.25rem',
                                                borderRadius: '12px',
                                                fontSize: '0.8rem',
                                                fontWeight: '800',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                minHeight: '48px',
                                                transition: 'all 0.2s ease',
                                                backdropFilter: 'blur(10px)'
                                            }}
                                        >
                                            <Eye size={16} />
                                            {isCodeExpanded ? 'Collapse' : 'Expand Code'}
                                        </button>
                                    )}
                                </div>
                                {/* Code block */}
                                <div style={{
                                    background: '#0a0f1d',
                                    padding: isMobile ? '1rem' : '2rem',
                                    borderRadius: isMobile ? '1rem' : '1.5rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid #1e293b',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                                    maxHeight: isMobile && !isCodeExpanded ? '220px' : 'none',
                                    transition: 'max-height 0.3s ease'
                                }}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: isMobile ? '32px' : '40px', background: '#161e31', display: 'flex', alignItems: 'center', padding: isMobile ? '0 1rem' : '0 1.5rem', gap: '0.5rem', justifyContent: 'space-between', borderBottom: '1px solid #2d3b55' }}>
                                        <div style={{ display: 'flex', gap: '0.35rem' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
                                        </div>
                                        <span style={{ fontSize: '0.55rem', color: '#64748b', fontWeight: '900', letterSpacing: '0.1em' }}>
                                            {(typeof project.code === 'object' && project.code.file) ? project.code.file : 'SKETCH.INO'}
                                        </span>
                                    </div>
                                    <pre style={{
                                        color: '#94a3b8',
                                        fontSize: isMobile ? '0.7rem' : '0.85rem',
                                        marginTop: isMobile ? '2.5rem' : '2.5rem',
                                        overflowX: 'auto',
                                        overflowY: isMobile && !isCodeExpanded ? 'hidden' : 'auto',
                                        fontFamily: '"Fira Code", "JetBrains Mono", monospace',
                                        lineHeight: '1.6',
                                        maxWidth: '100%',
                                        boxSizing: 'border-box'
                                    }}>
                                        <code style={{ color: '#e2e8f0' }}>
                                            {typeof project.code === 'object' ? project.code.content : (project.code || "// Firmware stream initializing...")}
                                        </code>
                                    </pre>
                                    {isMobile && !isCodeExpanded && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '60px',
                                            background: 'linear-gradient(transparent, #0a0f1d)',
                                            pointerEvents: 'none'
                                        }} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Industrial Context Section */}
                    {isHighFidelity && (project.industrial_use || project.bom_cost) && (
                        <div style={{ marginBottom: isMobile ? '3rem' : '5rem' }}>
                            <SectionTitle icon={Building2} title="Industrial Impact" />
                            <div className={isMobile ? "grid grid-1" : "grid grid-2"} style={{ gap: isMobile ? '1.25rem' : '2.5rem' }}>
                                {project.industrial_use && (
                                    <div className="glass-plus" style={{ padding: isMobile ? '1.5rem' : '2.5rem', borderRadius: isMobile ? '1.25rem' : '1.5rem', border: '1px solid var(--border)', background: 'rgba(var(--primary-rgb), 0.03)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: isMobile ? '0.75rem' : '1.5rem', color: 'var(--primary)', fontWeight: 800, fontSize: isMobile ? '0.7rem' : '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                            <Building2 size={isMobile ? 16 : 20} /> Practical Application
                                        </div>
                                        <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: 600, color: 'var(--text)', lineHeight: '1.6', margin: 0 }}>{project.industrial_use}</p>
                                    </div>
                                )}
                                {project.bom_cost && (
                                    <div className="glass-plus" style={{ padding: isMobile ? '1.5rem' : '2.5rem', borderRadius: isMobile ? '1.25rem' : '1.5rem', border: '1px solid var(--border)', background: 'rgba(var(--accent-rgb), 0.03)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: isMobile ? '0.75rem' : '1rem', color: 'var(--accent)', fontWeight: 800, fontSize: isMobile ? '0.7rem' : '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                            <Wallet size={isMobile ? 16 : 20} /> BOM Costing
                                        </div>
                                        <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: 600, color: 'var(--text)', lineHeight: '1.6', margin: 0 }}>{project.bom_cost}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {/* High Fidelity Verification Sections */}
                    {isHighFidelity && (project.testing_output || project.common_errors) && (
                        <div className={isMobile ? "grid grid-1" : "grid grid-2"} style={{ gap: isMobile ? '2.5rem' : '4rem', marginBottom: isMobile ? '2.5rem' : '5rem' }}>
                            {project.testing_output && (
                                <div>
                                    <SectionTitle icon={PlayCircle} title="Verification" />
                                    <div className="glass" style={{ padding: isMobile ? '1.5rem' : '2.5rem', borderRadius: isMobile ? '1.25rem' : '2rem', border: '1px solid var(--border)', background: 'rgba(var(--primary-rgb), 0.05)' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '1.5rem' }}>
                                            {getLines(project.testing_output).map((step, i) => (
                                                <div key={i} style={{ display: 'flex', gap: isMobile ? '1rem' : '1.5rem', alignItems: 'flex-start' }}>
                                                    <div style={{ minWidth: isMobile ? '24px' : '32px', height: isMobile ? '24px' : '32px', borderRadius: '50%', background: 'var(--primary-gradient)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: isMobile ? '0.7rem' : '0.8rem' }}>
                                                        {i + 1}
                                                    </div>
                                                    <p style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', margin: 0, fontWeight: '500', color: 'var(--text)', lineHeight: '1.6' }}>{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {project.common_errors && (
                                <div>
                                    <SectionTitle icon={AlertCircle} title="Troubleshooting" />
                                    <div style={{ display: 'grid', gap: isMobile ? '0.75rem' : '1.5rem' }}>
                                        {getLines(project.common_errors).map((err, i) => (
                                            <div key={i} style={{ padding: isMobile ? '1rem' : '1.5rem', borderRadius: '1rem', background: '#3b82f610', border: '1px solid #3b82f630', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                <div style={{ color: '#3b82f6' }}><AlertCircle size={isMobile ? 18 : 20} /></div>
                                                <p style={{ margin: 0, fontWeight: '600', color: 'var(--text)', fontSize: isMobile ? '0.85rem' : '1rem' }}>{err}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className={isHighFidelity ? "grid grid-1" : "grid grid-1"} style={{ gap: isMobile ? '2.5rem' : '4rem' }}>
                        <motion.div
                            whileHover={isMobile ? {} : (isHighFidelity ? { scale: 1.01 } : {})}
                            className={isHighFidelity ? "glass-plus" : "glass"}
                            style={{ padding: isMobile ? '1.5rem' : '3rem', borderRadius: isMobile ? '1.5rem' : '2rem', background: isHighFidelity ? 'var(--primary-gradient)' : 'var(--surface)', color: isHighFidelity ? 'white' : 'var(--text)', border: '1px solid var(--border)' }}
                        >
                            <SectionTitle icon={isHighFidelity ? Rocket : Eye} title={isHighFidelity ? "Deliverables" : "Preview"} />
                            <div style={{ color: isHighFidelity ? 'white' : 'var(--text)', lineHeight: '1.6', fontSize: isMobile ? '0.95rem' : '1.2rem', fontWeight: '600' }}>
                                {getLines(project.usage || project.testing_and_output).map((line, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                                        {isHighFidelity ? <CheckCircle size={isMobile ? 16 : 18} style={{ marginTop: '3px' }} /> : <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '8px' }}></div>}
                                        <p style={{ margin: 0 }}>{line}</p>
                                    </div>
                                ))}
                                {(!project.usage && !project.testing_and_output) && <p style={{ margin: 0 }}>Monitoring telemetry logs and system behavior...</p>}
                            </div>
                        </motion.div>
                        {isHighFidelity && (
                            <div className="glass-plus" style={{ padding: isMobile ? '1.5rem' : '3rem', borderRadius: isMobile ? '1.5rem' : '2rem', border: '1px solid var(--border)', background: 'var(--surface)' }}>
                                <SectionTitle icon={Star} title="Mastery Level" />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1.5rem' : '2.5rem' }}>
                                    {project.improvements && (
                                        <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: isMobile ? '1rem' : '1.5rem' }}>
                                            <h4 style={{ fontSize: isMobile ? '0.85rem' : '1rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Scaling Up</h4>
                                            <div style={{ color: 'var(--text)', lineHeight: '1.6', fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: '600' }}>
                                                {getLines(project.improvements).map((imp, i) => (
                                                    <p key={i} style={{ marginBottom: '0.4rem' }}>{imp}</p>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {project.mini_challenge && (
                                        <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: isMobile ? '1rem' : '1.5rem' }}>
                                            <h4 style={{ fontSize: isMobile ? '0.85rem' : '1rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Learner Challenge</h4>
                                            <div style={{ background: 'var(--accent-gradient)', padding: isMobile ? '1rem' : '1.5rem', borderRadius: isMobile ? '1rem' : '1.5rem', color: 'white' }}>
                                                <p style={{ margin: 0, lineHeight: '1.6', fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: '700' }}>{project.mini_challenge}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Footer Actions */}
                    <div style={{
                        marginTop: isMobile ? '4rem' : '8rem',
                        padding: isMobile ? '2.5rem 0 1rem' : '5rem 0',
                        borderTop: '1px solid var(--border)',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: isMobile ? 'center' : 'flex-end',
                        textAlign: isMobile ? 'center' : 'left',
                        gap: isMobile ? '2.5rem' : '2rem'
                    }}>
                        <div>
                            <h3 style={{ fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: '950', marginBottom: '0.75rem', color: 'var(--text)', letterSpacing: '-0.04em' }}>Build This System</h3>
                            <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', color: 'var(--text-muted)', fontWeight: '500', maxWidth: '500px', lineHeight: '1.5' }}>
                                Access high-density firmware and industrial documentation to accelerate your IoT deployment.
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', width: isMobile ? '100%' : 'auto' }}>
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={downloadCode}
                                className="btn btn-primary-shiny"
                                style={{
                                    padding: isMobile ? '1.25rem 2rem' : '1.5rem 3.5rem',
                                    borderRadius: '1.25rem',
                                    fontSize: isMobile ? '1rem' : '1.1rem',
                                    fontWeight: '900',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    boxShadow: 'var(--shadow-glow)',
                                    width: isMobile ? '100%' : 'auto'
                                }}
                            >
                                <Download size={isMobile ? 20 : 24} /> Get Firmware
                            </motion.button>
                            <div style={{ display: 'flex', gap: '0.75rem', width: isMobile ? '100%' : 'auto' }}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    onClick={handlePrint}
                                    style={{
                                        background: 'var(--glass)',
                                        border: '1px solid var(--border)',
                                        color: 'var(--text)',
                                        width: isMobile ? '100%' : '64px',
                                        height: '64px',
                                        borderRadius: '1.25rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    }}
                                    title="Export PDF"
                                >
                                    <Printer size={22} />
                                    {isMobile && <span style={{ marginLeft: '0.75rem', fontWeight: 800 }}>Export</span>}
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => {
                                        if (navigator.share) {
                                            navigator.share({
                                                title: project.title,
                                                text: project.description,
                                                url: window.location.href
                                            });
                                        }
                                    }}
                                    style={{
                                        background: 'var(--glass)',
                                        border: '1px solid var(--border)',
                                        color: 'var(--text)',
                                        width: isMobile ? '100%' : '64px',
                                        height: '64px',
                                        borderRadius: '1.25rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    }}
                                    title="Share Repository"
                                >
                                    <Share2 size={22} />
                                    {isMobile && <span style={{ marginLeft: '0.75rem', fontWeight: 800 }}>Share</span>}
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <style dangerouslySetInnerHTML={{
                    __html: `
@media print {
    .nav-container, .btn, .footer, .ai-assistant-fab, .back-to-top { display: none!important; }
    body { background: white!important; color: black!important; }
    .glass-plus, .glass {
        background: white!important;
        border: 1px solid #ddd!important;
        box-shadow: none!important;
        color: black!important;
    }
    .text-gradient {
        background: none!important;
        -webkit-text-fill-color: black!important;
        color: black!important;
        font-weight: 900!important;
    }
    .badge { border: 1px solid #000!important; color: black!important; }
    .container { width: 100%!important; max-width: 100%!important; padding: 0!important; }
    pre { border: 1px solid #ddd!important; background: #f9f9f9!important; color: #333!important; }
    code { color: #333!important; }
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .4; }
}
`}} />
            </div>
        </>
    );
}
