import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Rocket, Cpu, Binary, Zap, ArrowRight, Play } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Import carousel assets as used this morning
import img1 from '../assets/iot_carousel_1.png';
import img2 from '../assets/iot_carousel_2.png';
import img3 from '../assets/iot_carousel_3.png';
import img4 from '../assets/iot_lab_hero.png';

const Hero = ({ setView, theme }) => {
    const [currentImg, setCurrentImg] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);
    const images = [img1, img2, img3, img4];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % images.length);
        }, 4000); // Faster 4-second interval for better engagement
        return () => {
            clearInterval(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, [images.length]);

    const features = [
        {
            label: "MASTER",
            title: "Step-by-Step Roadmaps",
            icon: <GraduationCap size={20} />,
            color: "#a855f7", // Purple
            delay: 0.1,
            action: () => setView('mastery')
        },
        {
            label: "BUILD",
            title: "230+ Verified Projects",
            icon: <Rocket size={20} />,
            color: "#6366f1", // Indigo
            delay: 0.2,
            action: () => setView('projects')
        },
        {
            label: "EXPLORE",
            title: "Hardware Registry",
            icon: <Cpu size={20} />,
            color: "#f43f5e", // Pink
            delay: 0.3,
            action: () => setView('sensors')
        },
        {
            label: "DEBUG",
            title: "Interactive Pinout Lab",
            icon: <Binary size={20} />,
            color: "#10b981", // Green
            delay: 0.4,
            action: () => setView('pinout')
        }
    ];

    return (
        <>
            <Helmet>
                <link rel="canonical" href="https://iotnext.store/" />
            </Helmet>
            <section className="hero-section" style={{
                padding: isMobile ? '2rem 0 4rem' : '100px 0 60px',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--background)',
                minHeight: isMobile ? '100vh' : 'auto',
                display: 'flex',
                alignItems: 'center'
            }}>
                {/* Background Effects matching Review Section style */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(99, 102, 241, 0.08) 50%, rgba(0, 0, 0, 0) 100%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}>
                    {/* Horizontal Glowing Line Divider */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, #6366f1, transparent)',
                        boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)',
                        opacity: 0.3
                    }} />
                </div>

                {/* Subtle Grid Background */}
                <div className="global-grid" style={{
                    opacity: 0.1,
                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)'
                }} />

                <div className="container" style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'stretch' : 'center',
                    gap: isMobile ? '2.5rem' : '4rem',
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1440px',
                    margin: '0 auto',
                    padding: isMobile ? '0 1.5rem' : '0 2rem'
                }}>
                    {/* Left Content */}
                    <div className="hero-content">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                fontSize: isMobile ? '2.75rem' : '4.5rem',
                                fontWeight: '950',
                                lineHeight: isMobile ? 1 : 1.1,
                                letterSpacing: '-0.04em',
                                marginBottom: '1rem',
                                color: 'var(--text)'
                            }}
                        >
                            Master <span className="text-gradient" style={{
                                background: 'linear-gradient(to right, #a855f7, #6366f1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>Industrial</span><br />
                            IoT Engineering.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontSize: isMobile ? '1.1rem' : '1.3rem',
                                color: 'var(--text)',
                                opacity: theme === 'light' ? 1 : 0.9,
                                lineHeight: isMobile ? '1.4' : '1.6',
                                marginBottom: isMobile ? '2.5rem' : '3.5rem',
                                maxWidth: isMobile ? '100%' : '700px',
                                fontWeight: '700',
                                letterSpacing: '-0.01em'
                            }}
                        >
                            Learn to build <span style={{ color: '#6366f1', fontWeight: '700' }}>Real-World IoT Projects</span> with professional engineering guides that bridge the gap from prototype to production.
                        </motion.p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1.25rem',
                            maxWidth: '500px'
                        }}>
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: feature.delay + 0.3, duration: 0.5 }}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03,
                                        boxShadow: `0 10px 30px ${feature.color}40`
                                    }}
                                    className="premium-card"
                                    onClick={feature.action}
                                    style={{
                                        padding: '1.25rem',
                                        borderRadius: '1rem',
                                        background: 'var(--surface)',
                                        border: `1px solid ${feature.color}20`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.8rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: `0 4px 15px ${feature.color}15`
                                    }}
                                >
                                    <div style={{
                                        width: '32px', // Shrunk icon container
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: `${feature.color}15`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: feature.color
                                    }}>
                                        {React.cloneElement(feature.icon, { size: 16 })}
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{
                                            fontSize: '0.66rem', // Minimalist label
                                            fontWeight: '950',
                                            letterSpacing: '0.15em',
                                            color: feature.color,
                                            marginBottom: '0.3rem'
                                        }}>
                                            {feature.label}
                                        </div>
                                        <div style={{
                                            fontSize: '0.94rem', // Smaller title
                                            fontWeight: '700',
                                            color: 'var(--text)'
                                        }}>
                                            {feature.title}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Visual Carousel */}
                    <div style={{ position: 'relative', width: isMobile ? '100%' : '55%' }} className="hero-visual">
                        <div style={{
                            borderRadius: isMobile ? '2rem' : '3rem',
                            overflow: 'hidden',
                            aspectRatio: isMobile ? '1.8' : '1.5',
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--shadow)',
                            position: 'relative',
                            width: '100%'
                        }}>
                            <AnimatePresence mode="popLayout" initial={false}>
                                <motion.img
                                    key={currentImg}
                                    src={images[currentImg]}
                                    initial={{ x: '100%', opacity: 1 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: '-100%', opacity: 1 }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        inset: 0
                                    }}
                                />
                            </AnimatePresence>

                            {/* Minimalist Progress Indicator */}
                            {/* Premium Glass Pill Indicator */}
                            <div style={{
                                position: 'absolute',
                                bottom: '2rem',
                                right: '2rem',
                                background: 'rgba(0, 0, 0, 0.4)',
                                backdropFilter: 'blur(12px)',
                                padding: '0.6rem 1.2rem',
                                borderRadius: '2rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                gap: '0.6rem',
                                zIndex: 10,
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                            }}>
                                {images.map((_, idx) => (
                                    <motion.div
                                        key={idx}
                                        animate={{
                                            width: idx === currentImg ? 24 : 6,
                                            backgroundColor: idx === currentImg ? '#ffffff' : 'rgba(255, 255, 255, 0.3)'
                                        }}
                                        transition={{ duration: 0.4 }}
                                        style={{
                                            height: '4px',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => setCurrentImg(idx)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
