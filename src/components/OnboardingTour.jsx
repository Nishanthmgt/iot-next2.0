import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Rocket, Zap, MousePointer2 } from 'lucide-react';

const steps = [
    {
        target: 'tour-logo',
        title: "Industrial Portal",
        content: "Welcome to IoTnext. This is your command center for high-fidelity industrial engineering.",
        position: 'bottom',
        image: "/assets/tour_portal.png"
    },
    {
        target: 'tour-search',
        title: "Global Intelligence Search",
        content: "Quickly locate projects, sensors, or technical documentation across our entire ecosystem.",
        position: 'bottom',
        image: "/assets/tour_portal.png"
    },
    {
        target: 'tour-nav-roadmap',
        title: "Technical Roadmap",
        content: "On mobile, follow your progress via the bottom navigation bar. A systematic approach to IoT mastery.",
        position: 'top',
        image: "/assets/tour_roadmap.png"
    },
    {
        target: 'tour-nav-projects',
        title: "Project Repository",
        content: "Access industrial-grade projects with full schematics, BOMs, and production-ready firmware.",
        position: 'top',
        image: "/assets/tour_projects.png"
    },
    {
        target: 'tour-nav-sensors',
        title: "Sensor Registry",
        content: "Deep technical specifications and interactive pinout data for industrial sensors.",
        position: 'top',
        image: "/assets/tour_sensors.png"
    },
    {
        target: 'tour-nav-pinout',
        title: "Pinout Technical Lab",
        content: "Precisely map MCU pins and explore hardware peripherals in real-time.",
        position: 'top',
        image: "/assets/tour_pinout.png"
    },
    {
        target: 'tour-theme',
        title: "Interface Customization",
        content: "Access your profile, settings, and high-contrast themes via the mobile side menu.",
        position: 'bottom',
        image: "/assets/tour_portal.png"
    },
    {
        target: 'tour-share',
        title: "Community Intelligence",
        content: "Contribute to the network by sharing your custom engineered solutions.",
        position: 'bottom',
        image: "/assets/tour_share.png"
    }
];

export default function OnboardingTour({ isOpen, onComplete }) {
    const [currentStep, setCurrentStep] = useState(-1);
    const [spotlightCoords, setSpotlightCoords] = useState(null);

    const handleComplete = () => {
        localStorage.setItem('iotnext_tour_complete', 'true');
        window.dispatchEvent(new CustomEvent('iotnext-menu-toggle', { detail: { open: false } }));
        onComplete();
    };

    const updateSpotlight = useCallback(() => {
        if (currentStep < 0 || currentStep >= steps.length) return;

        const current = steps[currentStep];
        let attempts = 0;
        const isMobile = window.innerWidth <= 820;

        const findElement = () => {
            let targetId = current.target;

            if (isMobile) {
                // Mobile specific mapping
                if (targetId.includes('nav-')) {
                    // map 'tour-nav-xxx' to 'tour-mobile-nav-xxx'
                    targetId = targetId.replace('tour-nav-', 'tour-mobile-nav-');
                } else if (targetId === 'tour-theme') {
                    targetId = 'tour-mobile-menu';
                } else if (targetId === 'tour-share') {
                    targetId = 'tour-mobile-share';
                } else if (targetId === 'tour-search') {
                    targetId = 'tour-mobile-search';
                }
            }

            const element = document.getElementById(targetId);

            if (element) {
                const rect = element.getBoundingClientRect();
                setSpotlightCoords({
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height,
                    id: targetId,
                    windowWidth: window.innerWidth,
                    windowHeight: window.innerHeight,
                    isMobile: isMobile
                });

                // Smooth scroll with offset - adjust for nav bars
                const offset = isMobile ? 180 : 100;
                window.scrollTo({
                    top: rect.top + window.scrollY - (window.innerHeight / 2) + (rect.height / 2) - 50,
                    behavior: 'smooth'
                });
            } else if (attempts < 8) {
                attempts++;
                setTimeout(findElement, 250);
            }
        };

        findElement();
    }, [currentStep]);

    useEffect(() => {
        if (isOpen && currentStep === -1) {
            setCurrentStep(0);
        }
    }, [isOpen, currentStep]);

    useEffect(() => {
        updateSpotlight();
        window.addEventListener('resize', updateSpotlight);
        return () => window.removeEventListener('resize', updateSpotlight);
    }, [currentStep, updateSpotlight]);

    if (!isOpen || currentStep === -1) return null;

    const isMobile = window.innerWidth <= 820;
    const current = steps[currentStep];

    const next = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            handleComplete();
        }
    };

    const prev = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10000, pointerEvents: 'none' }}>
            {/* Dark Overlay with Spotlight Cutout */}
            <svg
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: spotlightCoords?.id?.includes('nav') ? 'none' : 'auto'
                }}
                onClick={handleComplete}
            >
                <defs>
                    <mask id="spotlight-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        {spotlightCoords && (
                            <motion.rect
                                animate={{
                                    x: spotlightCoords.left - 10,
                                    y: spotlightCoords.top - 10,
                                    width: spotlightCoords.width + 20,
                                    height: spotlightCoords.height + 20,
                                    rx: 12
                                }}
                                fill="black"
                            />
                        )}
                    </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0.8)" mask="url(#spotlight-mask)" style={{ backdropFilter: 'blur(5px)' }} />
            </svg>

            {/* Active Spotlight Border */}
            <AnimatePresence>
                {spotlightCoords && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            top: spotlightCoords.top - 10,
                            left: spotlightCoords.left - 10,
                            width: spotlightCoords.width + 20,
                            height: spotlightCoords.height + 20,
                        }}
                        style={{
                            position: 'absolute',
                            border: '2px solid var(--primary)',
                            borderRadius: '14px',
                            boxShadow: '0 0 30px rgba(var(--primary-rgb), 0.6)',
                            pointerEvents: 'none',
                            zIndex: 10001
                        }}
                    >
                        <motion.div
                            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                                position: 'absolute',
                                inset: -6,
                                border: '2px solid var(--primary)',
                                borderRadius: '18px',
                                opacity: 0.4
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Tooltip Content */}
            <AnimatePresence>
                {spotlightCoords && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            top: isMobile
                                ? (spotlightCoords.top > window.innerHeight / 2 ? 'auto' : spotlightCoords.top + spotlightCoords.height + 30)
                                : ((spotlightCoords.top + spotlightCoords.height + 30) > (window.innerHeight + window.scrollY - 300) ? (spotlightCoords.top - 340) : (spotlightCoords.top + spotlightCoords.height + 30)),
                            bottom: isMobile && spotlightCoords.top > window.innerHeight / 2 ? 'var(--tour-safe-bottom)' : 'auto',
                            left: isMobile ? '50%' : Math.max(20, Math.min(window.innerWidth - 410, spotlightCoords.left)),
                            x: isMobile ? '-50%' : 0
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="glass-plus"
                        style={{
                            position: 'absolute',
                            width: isMobile ? 'calc(100% - 40px)' : '380px',
                            maxWidth: isMobile ? '500px' : '380px',
                            padding: isMobile ? '1.8rem' : '2.2rem',
                            borderRadius: '2rem',
                            pointerEvents: 'auto',
                            zIndex: 10002,
                            background: 'rgba(var(--surface-rgb), 0.98)',
                            border: '1px solid rgba(var(--primary-rgb), 0.5)',
                            boxShadow: '0 25px 80px rgba(0,0,0,0.6)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <div style={{
                                background: 'rgba(var(--primary-rgb), 0.1)',
                                padding: '0.6rem 1rem',
                                borderRadius: '0.9rem',
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <Rocket size={20} />
                                <span style={{ fontSize: '0.8rem', fontWeight: '900', letterSpacing: '0.1em' }}>PROTOCOL {currentStep + 1}/{steps.length}</span>
                            </div>
                            <button onClick={handleComplete} style={{ background: 'transparent', color: 'var(--text-muted)' }}>
                                <X size={20} />
                            </button>
                        </div>

                        {current.image && (
                            <div style={{
                                width: '100%',
                                height: '200px',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(var(--primary-rgb), 0.2)',
                                background: 'var(--background)'
                            }}>
                                <img
                                    src={current.image}
                                    alt={current.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        )}

                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.8rem', color: 'var(--text)' }}>{current.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2.5rem', fontWeight: '500' }}>
                            {current.content}
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '0.3rem' }}>
                                {steps.map((_, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            width: i === currentStep ? '20px' : '6px',
                                            height: '6px',
                                            borderRadius: '3px',
                                            background: i === currentStep ? 'var(--primary)' : 'var(--border)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                {currentStep > 0 && (
                                    <button
                                        onClick={prev}
                                        className="btn btn-outline"
                                        style={{ padding: '0.6rem 1rem', borderRadius: '0.8rem', fontSize: '0.85rem' }}
                                    >
                                        <ChevronLeft size={16} />
                                    </button>
                                )}
                                <button
                                    onClick={next}
                                    className="btn btn-primary btn-primary-shiny"
                                    style={{ padding: '0.6rem 1.5rem', borderRadius: '0.8rem', fontSize: '0.85rem', fontWeight: '800' }}
                                >
                                    {currentStep === steps.length - 1 ? 'Finish' : 'Next Protocol'} <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Pointer Arrow */}
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            left: '30px',
                            width: '20px',
                            height: '20px',
                            background: 'rgba(var(--surface-rgb), 0.9)',
                            borderLeft: '1px solid rgba(var(--primary-rgb), 0.3)',
                            borderTop: '1px solid rgba(var(--primary-rgb), 0.3)',
                            transform: 'rotate(45deg)'
                        }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
