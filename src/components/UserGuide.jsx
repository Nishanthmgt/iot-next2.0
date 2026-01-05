import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Map, Zap, Cpu, Users, Rocket } from 'lucide-react';

const steps = [
    {
        title: "Welcome to iotnext.store",
        icon: <Rocket size={40} />,
        color: "var(--primary)",
        desc: "The world's most immersive platform for industrial-grade IoT education and high-fidelity hardware projects.",
        highlights: ["200+ Professional Projects", "Detailed Pinout Mapping", "Industrial Use Cases"]
    },
    {
        title: "Master the Roadmap",
        icon: <Map size={40} />,
        color: "var(--secondary)",
        desc: "Follow a systematic curriculum from basic electronics to advanced cloud integration and industrial automation.",
        highlights: ["Progress Tracking", "Knowledge Core Explanations", "Verified Mastery"]
    },
    {
        title: "Engineering Repositories",
        icon: <Zap size={40} />,
        color: "#f59e0b",
        desc: "Explore verified projects with professional documentation: components, schematics, and production-ready firmware.",
        highlights: ["One-Click Code Copy", "Full BOM (Bill of Materials)", "Circuit Diagrams"]
    },
    {
        title: "The Technical Lab",
        icon: <Cpu size={40} />,
        color: "#10b981",
        desc: "Access the Pinout Lab for precise interface mapping and the Sensor Registry for technical specifications.",
        highlights: ["Peripheral Mapping", "Cross-Platform Support", "Real-time Specs"]
    },
    {
        title: "Join the Network",
        icon: <Users size={40} />,
        color: "#ec4899",
        desc: "Connect with thousands of engineers, access mentorship, and stay updated with the latest architectural protocols.",
        highlights: ["Global Community Hub", "Direct Technical Support", "v2.0 Stable Build"]
    }
];

export default function UserGuide({ isOpen, onClose }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        }
    }, [isOpen]);

    const handleClose = () => {
        localStorage.setItem('iotnext_guide_seen', 'true');
        setIsVisible(false);
        if (onClose) onClose();
    };

    if (!isVisible) return null;

    const next = () => currentStep < steps.length - 1 ? setCurrentStep(c => c + 1) : handleClose();
    const prev = () => currentStep > 0 && setCurrentStep(c => c - 1);

    const step = steps[currentStep];

    return (
        <AnimatePresence>
            {isVisible && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 10000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    background: 'rgba(0,0,0,0.85)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        style={{
                            width: '95%',
                            maxWidth: '650px',
                            background: 'var(--surface)',
                            borderRadius: '2.5rem',
                            border: '1px solid var(--border)',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.5)',
                            maxHeight: '90vh',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Header Image/Pattern */}
                        <div style={{
                            height: '140px',
                            background: `linear-gradient(135deg, ${step.color}33 0%, transparent 100%)`,
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <button
                                onClick={handleClose}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    left: '1.5rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text-muted)',
                                    cursor: 'pointer',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.8rem',
                                    fontWeight: '700'
                                }}
                            >
                                Skip Guide
                            </button>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '24px',
                                background: step.color,
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: `0 15px 30px ${step.color}44`,
                                zIndex: 1
                            }}>
                                {step.icon}
                            </div>
                            <button
                                onClick={handleClose}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    color: 'var(--text)',
                                    cursor: 'pointer',
                                    padding: '0.4rem',
                                    borderRadius: '50%'
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div style={{ padding: '3rem', overflowY: 'auto' }}>
                            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                <h2 style={{ fontSize: '2.2rem', fontWeight: '950', marginBottom: '1rem', letterSpacing: '-0.02em' }}>{step.title}</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto', fontWeight: '500' }}>
                                    {step.desc}
                                </p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '3rem' }}>
                                {step.highlights.map((h, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1.2rem',
                                        background: 'var(--background)',
                                        borderRadius: '1.5rem',
                                        border: '1px solid var(--border)',
                                        fontWeight: '700',
                                        fontSize: '1rem'
                                    }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: step.color }}></div>
                                        {h}
                                    </div>
                                ))}
                            </div>

                            {/* Footer / Navigation */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {steps.map((_, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setCurrentStep(i)}
                                            style={{
                                                width: i === currentStep ? '24px' : '8px',
                                                height: '8px',
                                                borderRadius: '4px',
                                                background: i === currentStep ? step.color : 'var(--border)',
                                                transition: 'all 0.4s ease',
                                                cursor: 'pointer'
                                            }}
                                        />
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {currentStep > 0 && (
                                        <button
                                            onClick={prev}
                                            className="btn btn-outline"
                                            style={{ padding: '0.8rem 1.5rem', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                        >
                                            <ChevronLeft size={18} /> Back
                                        </button>
                                    )}
                                    <button
                                        onClick={next}
                                        className="btn btn-primary btn-primary-shiny"
                                        style={{ background: step.color, padding: '0.8rem 2rem', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', position: 'relative', overflow: 'hidden' }}
                                    >
                                        <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            {currentStep === steps.length - 1 ? "Start Engineering" : "Next Protocol"}
                                            <ChevronRight size={18} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
