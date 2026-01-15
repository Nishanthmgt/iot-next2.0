import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Target, Cpu, Users, ArrowRight, Layers, Globe, Zap } from 'lucide-react';

export default function About({ setView }) {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 820);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const stats = [
        { label: "Engineering Projects", value: "200+" },
        { label: "Global Engineers", value: "10k+" },
        { label: "Technical Depth", value: "Advanced" },
        { label: "Platform Status", value: "v2.0" }
    ];

    return (
        <section className="container" style={{
            paddingTop: isMobile ? '1rem' : 'var(--app-py)',
            paddingBottom: isMobile ? '4rem' : 'var(--app-py)',
            paddingLeft: 'var(--app-px)',
            paddingRight: 'var(--app-px)'
        }}>
            <Helmet>
                <title>About IoTNext | Architecting the Engineers of Tomorrow</title>
                <meta name="description" content="IoTNext is the definitive repository for professional IoT documentation, high-fidelity projects, and industrial-grade hardware wisdom." />
                <meta property="og:title" content="About IoTNext - Professional IoT Learning" />
                <meta property="og:description" content="Architecting the engineers of tomorrow with high-performance documentation and verified projects." />
                <link rel="canonical" href="https://iotnext.store/about" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '6rem' }}
            >
                <span style={{
                    fontSize: isMobile ? '0.7rem' : '0.85rem',
                    fontWeight: '800',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    display: 'block',
                    marginBottom: isMobile ? '0.75rem' : '1.5rem'
                }}>Our DNA</span>
                <h1 style={{
                    fontSize: isMobile ? '2.5rem' : '4.5rem',
                    fontWeight: '950',
                    marginBottom: isMobile ? '1rem' : '1.5rem',
                    letterSpacing: 'var(--ls-tight)',
                    lineHeight: 'var(--lh-tight)'
                }}>
                    Architecting the <span className="text-gradient">Engineers of Tomorrow.</span>
                </h1>
                <p style={{
                    color: 'var(--text-muted)',
                    fontSize: isMobile ? '1.05rem' : '1.25rem',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: isMobile ? '1.5' : '1.6',
                    fontWeight: '500'
                }}>
                    IoTnext is the definitive repository for professional IoT documentation, high-fidelity projects, and industrial-grade hardware wisdom.
                </p>
            </motion.div>

            <div className={isMobile ? 'grid grid-2' : 'grid grid-4'} style={{ gap: isMobile ? '0.75rem' : '1.5rem', marginBottom: isMobile ? '4rem' : '8rem' }}>
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-plus"
                        style={{ padding: isMobile ? '1.25rem' : '2rem', borderRadius: isMobile ? '1rem' : '1.5rem', textAlign: 'center', border: '1px solid var(--border)' }}
                    >
                        <div style={{ fontSize: isMobile ? '1.5rem' : '2.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.25rem' }}>{stat.value}</div>
                        <div style={{ fontSize: isMobile ? '0.7rem' : '0.9rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className={isMobile ? 'flex flex-column' : 'grid grid-2'} style={{ gap: isMobile ? '3rem' : '5rem', alignItems: 'center', marginBottom: isMobile ? '4rem' : '8rem' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: '900', marginBottom: isMobile ? '1rem' : '2rem', letterSpacing: 'var(--ls-tight)' }}>Beyond Basic Prototyping.</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '1rem' : '1.1rem', lineHeight: isMobile ? '1.5' : '1.8', marginBottom: '2rem' }}>
                        The gap between a prototype and a product is massive. IoTnext exists to bridge that chasm. Our platform focuses on **Technical Density**—providing not just code, but the electrical constraints, firmware architecture, and industrial use-cases required to build real systems.
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.75rem' : '1rem' }}>
                        {[
                            { icon: <Shield size={isMobile ? 16 : 18} />, text: "Verified Schematics & Code" },
                            { icon: <Target size={isMobile ? 16 : 18} />, text: "Industrial Protocol Mastery" },
                            { icon: <Layers size={isMobile ? 16 : 18} />, text: "Scalable Hardware Logic" }
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '600', color: 'var(--text)', fontSize: isMobile ? '0.95rem' : '1rem' }}>
                                <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'var(--primary-gradient)', opacity: 0.1, filter: 'blur(80px)', borderRadius: '50%' }}></div>
                    <div className="glass-plus" style={{ padding: isMobile ? '2rem' : '3rem', borderRadius: isMobile ? '1.5rem' : '2.5rem', border: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
                        <Cpu size={isMobile ? 40 : 60} color="var(--primary)" style={{ marginBottom: isMobile ? '1rem' : '2rem' }} />
                        <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: '800', marginBottom: isMobile ? '0.75rem' : '1.5rem' }}>The High-Fidelity Promise</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: isMobile ? '1.5' : '1.7', fontSize: isMobile ? '0.95rem' : '1rem' }}>
                            We believe in the power of "High-Performance Documentation". Every project on IoTnext is a result of rigorous hardware testing on ESP32, STM32, and Arduino ecosystems, ensuring what you build works in the real world.
                        </p>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass"
                style={{ padding: isMobile ? '2.5rem 1.5rem' : '4rem', borderRadius: isMobile ? '1.75rem' : '2.5rem', textAlign: 'center', background: 'var(--primary-gradient)', color: 'white' }}
            >
                <h2 style={{ fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: '900', marginBottom: isMobile ? '1rem' : '1.5rem', letterSpacing: 'var(--ls-tight)' }}>Ready to Scale Your Knowledge?</h2>
                <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', marginBottom: isMobile ? '1.5rem' : '2.5rem', opacity: 0.9 }}>Join thousands of professional builders mastering the future of IoT.</p>
                <button
                    className="btn btn-primary"
                    style={{
                        background: 'white',
                        color: 'var(--primary)',
                        padding: isMobile ? '0.75rem 1.5rem' : '1.25rem 2.5rem',
                        borderRadius: isMobile ? '1rem' : '1.5rem',
                        fontWeight: '800',
                        fontSize: isMobile ? '1rem' : '1.1rem'
                    }}
                    onClick={() => setView('projects')}
                >
                    Explore Repository <ArrowRight size={isMobile ? 18 : 22} style={{ marginLeft: isMobile ? '5px' : '10px' }} />
                </button>
            </motion.div>
        </section>
    );
}
