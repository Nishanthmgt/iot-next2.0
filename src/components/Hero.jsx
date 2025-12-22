import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Cpu, Wifi, Zap, Globe } from 'lucide-react';

export default function Hero({ setView }) {
    const floatingIcons = [
        { Icon: Wifi, x: '-15%', y: '10%', delay: 0 },
        { Icon: Cpu, x: '20%', y: '-15%', delay: 0.5 },
        { Icon: Zap, x: '-20%', y: '-20%', delay: 1 },
        { Icon: Globe, x: '15%', y: '20%', delay: 1.5 }
    ];

    return (
        <section className="container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Elements */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden' }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    style={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-10%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        borderRadius: '50%'
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -45, 0],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '-10%',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        borderRadius: '50%'
                    }}
                />
            </div>

            <div style={{ maxWidth: '850px', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="badge badge-beginner"
                        style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '0.5rem 1.2rem', fontSize: '0.9rem', background: 'var(--surface-hover)', border: '1px solid var(--primary)' }}
                    >
                        🚀 Empowering 10,000+ IoT Students
                    </motion.span>

                    <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 5.5rem)', lineHeight: 1, fontWeight: '800', marginBottom: '2rem', letterSpacing: '-2px' }}>
                        The Future of <br />
                        <span style={{
                            background: 'linear-gradient(to right, var(--primary), var(--accent))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}>
                            IoT Education
                        </span>
                    </h1>

                    <p style={{ fontSize: '1.35rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '650px', lineHeight: '1.6' }}>
                        Build everything from a simple blinking LED to high-performance AI Edge systems.
                        <strong> 200+ projects</strong>, <strong>75+ sensors</strong>, and a <strong>zero-to-hero roadmap</strong>.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '1rem' }} onClick={() => setView('roadmap')}>
                            Start Learning Path <ArrowRight size={22} />
                        </button>
                        <button className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '1rem' }} onClick={() => setView('projects')}>
                            Explore Projects <Play size={22} />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Tech Nodes */}
            <div className="hero-visual" style={{ flex: 1, position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {floatingIcons.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            y: [0, -30, 0],
                            x: [0, 10, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: "easeInOut"
                        }}
                        style={{
                            position: 'absolute',
                            left: `calc(50% + ${item.x})`,
                            top: `calc(50% + ${item.y})`,
                            padding: '1.5rem',
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: '1.5rem',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 2
                        }}
                    >
                        <item.Icon size={32} className="text-primary" />
                    </motion.div>
                ))}

                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '2rem',
                        border: '2px dashed var(--primary)',
                        opacity: 0.2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Cpu size={120} style={{ opacity: 0.3 }} />
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @media (max-width: 1100px) {
          .hero-visual { display: none !important; }
        }
      `}} />
        </section>
    );
}