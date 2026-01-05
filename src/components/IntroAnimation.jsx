import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(2), 200),   // Start directly with Logo Reveal
            setTimeout(() => setStep(3), 2200),  // Start fade out
            setTimeout(() => onComplete(), 3000) // Finished
        ];
        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#020617',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                overflow: 'hidden'
            }}
        >
            <AnimatePresence>
                {step === 2 && (
                    <motion.div
                        key="logo-reveal"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{
                            width: '120px',
                            height: '120px',
                            background: 'white',
                            borderRadius: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 2rem',
                            boxShadow: '0 0 60px rgba(79, 70, 229, 0.4)',
                            border: '4px solid #4f46e5',
                            overflow: 'hidden'
                        }}>
                            <img src="/logo.png" alt="IoTnext" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: 900,
                            color: 'white',
                            letterSpacing: '-2px',
                            marginBottom: '0.5rem'
                        }}>
                            IoT<span style={{ color: '#0ea5e9' }}>next</span>
                        </h1>
                        <p style={{
                            color: '#94a3b8',
                            fontSize: '1.2rem',
                            letterSpacing: '4px',
                            textTransform: 'uppercase'
                        }}>
                            Future of Connectivity
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Loading Progress Bar */}
            <div style={{
                position: 'absolute',
                bottom: '10%',
                width: '240px',
                height: '4px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2.8, ease: "linear" }}
                    style={{ height: '100%', background: 'linear-gradient(to right, var(--primary), var(--secondary))' }}
                />
            </div>
        </motion.div>
    );
};

export default IntroAnimation;
