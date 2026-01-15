import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Zap, Info, ShieldCheck, ShieldAlert, BadgeInfo, ExternalLink, IndianRupee, ListChecks, AlertTriangle, RefreshCw, Cable } from 'lucide-react';

export default function SensorDetail({ sensor, onClose }) {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 820);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    if (!sensor) return null;

    const commonUses = sensor.common_uses ? sensor.common_uses.split('\n').filter(u => u.trim()) : [];
    const advantages = sensor.advantages ? sensor.advantages.split('\n').filter(a => a.trim()) : [];
    const disadvantages = sensor.disadvantages ? sensor.disadvantages.split('\n').filter(d => d.trim()) : [];
    const technicalSpecs = sensor.technical_specs ? sensor.technical_specs.split('\n').filter(s => s.trim()) : [];
    const pinDetails = sensor.pinout_detail ? sensor.pinout_detail.split('\n').filter(p => p.trim()) : [];
    const mistakes = sensor.beginner_mistakes ? sensor.beginner_mistakes.split('\n').filter(m => m.trim()) : [];
    const alternatives = sensor.alternatives ? sensor.alternatives.split('\n').filter(a => a.trim()) : [];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1000,
                display: 'flex',
                alignItems: isMobile ? 'flex-end' : 'center',
                justifyContent: 'center',
                padding: isMobile ? '0' : '2rem',
                background: 'rgba(0,0,0,0.85)',
                backdropFilter: 'blur(10px)'
            }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: isMobile ? 1 : 0.9, y: isMobile ? '100%' : 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: isMobile ? 1 : 0.9, y: isMobile ? '100%' : 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: isMobile ? 'none' : '1000px',
                    maxHeight: isMobile ? '92vh' : '90vh',
                    background: 'var(--surface)',
                    borderRadius: isMobile ? '2rem 2rem 0 0' : '2.5rem',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    boxShadow: '0 -25px 50px -12px rgba(0,0,0,0.5)'
                }}
            >
                {/* Header / Close */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: isMobile ? '1rem' : '1.5rem',
                        right: isMobile ? '1rem' : '1.5rem',
                        width: isMobile ? '32px' : '40px',
                        height: isMobile ? '32px' : '40px',
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                >
                    <X size={isMobile ? 18 : 20} />
                </button>

                <div style={{ overflowY: 'auto', flex: 1, paddingBottom: isMobile ? 'env(safe-area-inset-bottom)' : '0' }}>
                    {/* Hero Section */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'minmax(300px, 1fr) 1.5fr',
                        background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.05) 0%, transparent 100%)',
                        borderBottom: '1px solid var(--border)'
                    }}>
                        <div style={{ padding: isMobile ? '2rem' : '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
                            <img
                                src={sensor.image}
                                alt={sensor.name}
                                style={{ width: '100%', height: 'auto', maxHeight: isMobile ? '180px' : '300px', objectFit: 'contain' }}
                            />
                        </div>
                        <div style={{ padding: isMobile ? '1.5rem' : '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                <span style={{ padding: '0.3rem 0.8rem', borderRadius: '2rem', background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', fontWeight: '800', fontSize: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.3rem', textTransform: 'uppercase' }}>
                                    {sensor.emoji} {sensor.categoryId}
                                </span>
                                <span style={{ padding: '0.3rem 0.8rem', borderRadius: '2rem', background: sensor.level === 'Beginner' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: sensor.level === 'Beginner' ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)', fontWeight: '800', fontSize: '0.65rem', textTransform: 'uppercase' }}>
                                    {sensor.level}
                                </span>
                            </div>
                            <h1 style={{
                                fontSize: isMobile ? '1.75rem' : '2.5rem',
                                fontWeight: '950',
                                letterSpacing: 'var(--ls-tight)',
                                lineHeight: 'var(--lh-tight)',
                                marginBottom: isMobile ? '0.75rem' : '1.5rem'
                            }}>
                                {sensor.name}
                            </h1>
                            <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', color: 'var(--text-muted)', lineHeight: 1.5, fontWeight: '500' }}>
                                {sensor.description}
                            </p>
                        </div>
                    </div>

                    <div style={{ padding: isMobile ? '1.5rem' : '3rem', display: 'grid', gap: isMobile ? '2rem' : '3rem' }}>
                        {/* 2-Column Specs */}
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '3rem' }}>
                            {/* Left Col: Pins & Voltage */}
                            <div>
                                <h3 style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: isMobile ? '1rem' : '1.5rem' }}>
                                    <Cpu size={isMobile ? 16 : 18} /> HARDWARE INTERFACE
                                </h3>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <p style={{ fontSize: '0.7rem', fontWeight: '800', opacity: 0.5, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>PIN ASSIGNMENTS</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                        {sensor.pins && sensor.pins.split('|').map((pin, i) => (
                                            <span key={i} style={{ padding: isMobile ? '0.4rem 0.75rem' : '0.5rem 1rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '0.6rem', fontSize: isMobile ? '0.75rem' : '0.85rem', fontWeight: '700' }}>
                                                {pin.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass-plus" style={{ padding: isMobile ? '1.25rem' : '1.5rem', borderRadius: '1.25rem', border: '1px solid var(--border)', background: 'rgba(var(--primary-rgb), 0.03)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                                        <Zap size={isMobile ? 14 : 16} color="var(--primary)" />
                                        <span style={{ fontWeight: '800', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Voltage Compatibility</span>
                                    </div>
                                    <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: '900', color: 'var(--text)' }}>
                                        {sensor.voltage || "N/A V"}
                                    </p>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.3rem', fontWeight: '500', lineHeight: 1.4 }}>
                                        Check microcontroller logic levels (3.3V/5V) before connecting.
                                    </p>
                                </div>
                            </div>

                            {/* Right Col: Principle */}
                            <div>
                                <h3 style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: isMobile ? '1rem' : '1.5rem' }}>
                                    <Info size={isMobile ? 16 : 18} /> CONCEPT & WORKING
                                </h3>

                                <div style={{ marginBottom: isMobile ? '1rem' : '2rem' }}>
                                    <p style={{ fontSize: '0.7rem', fontWeight: '800', opacity: 0.5, marginBottom: '0.4rem', letterSpacing: '0.05em' }}>WHAT IT DOES</p>
                                    <p style={{ lineHeight: 1.5, fontWeight: '500', fontSize: isMobile ? '0.9rem' : '1rem' }}>{sensor.what_it_does}</p>
                                </div>

                                <div>
                                    <p style={{ fontSize: '0.7rem', fontWeight: '800', opacity: 0.5, marginBottom: '0.4rem', letterSpacing: '0.05em' }}>HOW IT WORKS</p>
                                    <p style={{ lineHeight: 1.5, fontWeight: '500', fontSize: isMobile ? '0.9rem' : '1rem' }}>{sensor.how_it_works}</p>
                                </div>
                            </div>
                        </div>

                        {/* Pros/Cons & Uses */}
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) 2fr', gap: isMobile ? '2rem' : '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: '900', letterSpacing: '0.1em', marginBottom: isMobile ? '1rem' : '1.5rem' }}>🧪 COMMON USES</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr', gap: isMobile ? '0.6rem' : '0.75rem' }}>
                                    {commonUses.map((use, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: isMobile ? '0.6rem 0.8rem' : '0.75rem 1rem', background: 'rgba(var(--primary-rgb), 0.03)', borderRadius: '0.8rem', border: '1px solid var(--border)', fontSize: isMobile ? '0.75rem' : '0.85rem', fontWeight: '700' }}>
                                            <BadgeInfo size={12} color="var(--primary)" style={{ flexShrink: 0 }} /> {use}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1rem' : '1.5rem' }}>
                                <div className="glass-plus" style={{ padding: isMobile ? '1.25rem' : '1.5rem', borderRadius: '1.25rem', background: 'rgba(16, 185, 129, 0.02)', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                                    <h3 style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: '#10b981', marginBottom: isMobile ? '1rem' : '1.5rem' }}>✅ ADVANTAGES</h3>
                                    <div style={{ display: 'grid', gap: isMobile ? '0.6rem' : '1rem' }}>
                                        {advantages.map((adv, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: isMobile ? '0.8rem' : '0.85rem', fontWeight: '600', lineHeight: 1.4 }}>
                                                <ShieldCheck size={isMobile ? 14 : 16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <span>{adv}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="glass-plus" style={{ padding: isMobile ? '1.25rem' : '1.5rem', borderRadius: '1.25rem', background: 'rgba(239, 68, 68, 0.02)', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                                    <h3 style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: '#ef4444', marginBottom: isMobile ? '1rem' : '1.5rem' }}>❌ DISADVANTAGES</h3>
                                    <div style={{ display: 'grid', gap: isMobile ? '0.6rem' : '1rem' }}>
                                        {disadvantages.map((dis, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: isMobile ? '0.8rem' : '0.85rem', fontWeight: '600', lineHeight: 1.4 }}>
                                                <ShieldAlert size={isMobile ? 14 : 16} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <span>{dis}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Technical Details */}
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '3rem' }}>
                            {/* Technical Specs */}
                            {technicalSpecs.length > 0 && (
                                <div>
                                    <h3 style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: isMobile ? '1rem' : '1.5rem' }}>
                                        <ListChecks size={isMobile ? 16 : 18} /> TECHNICAL SPECS
                                    </h3>
                                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                                        {technicalSpecs.map((spec, i) => (
                                            <div key={i} style={{ padding: isMobile ? '0.6rem 0.8rem' : '0.75rem 1rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '0.7rem', fontSize: isMobile ? '0.75rem' : '0.85rem', fontWeight: '600', display: 'flex', justifyContent: 'space-between' }}>
                                                {spec.includes(':') ? (
                                                    <>
                                                        <span style={{ opacity: 0.6 }}>{spec.split(':')[0]}</span>
                                                        <span style={{ fontWeight: '800' }}>{spec.split(':')[1]}</span>
                                                    </>
                                                ) : (
                                                    <span>{spec}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Pin Detail Explanation */}
                            {pinDetails.length > 0 && (
                                <div>
                                    <h3 style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: isMobile ? '1rem' : '1.5rem' }}>
                                        <Cable size={isMobile ? 16 : 18} /> PIN EXPLANATION
                                    </h3>
                                    <div style={{ display: 'grid', gap: isMobile ? '0.6rem' : '0.75rem' }}>
                                        {pinDetails.map((detail, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: isMobile ? '0.8rem' : '0.85rem', fontWeight: '600', lineHeight: 1.4 }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.4rem', flexShrink: 0 }} />
                                                <span>{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1rem' : '3rem' }}>
                            {/* Tips / Mistakes */}
                            {mistakes.length > 0 && (
                                <div className="glass-plus" style={{ padding: isMobile ? '1.25rem' : '2rem', borderRadius: '1.25rem', background: 'rgba(245, 158, 11, 0.03)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                                    <h3 style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: isMobile ? '0.75rem' : '1.2rem' }}>
                                        <AlertTriangle size={isMobile ? 16 : 18} /> BEGINNER MISTAKES
                                    </h3>
                                    <div style={{ display: 'grid', gap: isMobile ? '0.5rem' : '0.8rem' }}>
                                        {mistakes.map((mistake, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: isMobile ? '0.8rem' : '0.85rem', fontWeight: '600', color: 'var(--text)', lineHeight: 1.4 }}>
                                                <span style={{ color: '#f59e0b', fontWeight: 900 }}>•</span>
                                                <span>{mistake}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Alternatives */}
                            {alternatives.length > 0 && (
                                <div className="glass-plus" style={{ padding: isMobile ? '1.25rem' : '2rem', borderRadius: '1.25rem', background: 'rgba(var(--primary-rgb), 0.03)', border: '1px solid var(--border)' }}>
                                    <h3 style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: isMobile ? '0.75rem' : '1.2rem' }}>
                                        <RefreshCw size={isMobile ? 16 : 18} /> ALTERNATIVES
                                    </h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {alternatives.map((alt, i) => (
                                            <span key={i} style={{ padding: '0.4rem 0.8rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '2rem', fontSize: isMobile ? '0.7rem' : '0.8rem', fontWeight: '800', color: 'var(--primary)' }}>
                                                {alt}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer Info */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: isMobile ? '1.25rem' : '2rem',
                            borderTop: '1px solid var(--border)',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: isMobile ? '1.25rem' : '0'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1rem', width: isMobile ? '100%' : 'auto' }}>
                                <div style={{ width: isMobile ? '36px' : '40px', height: isMobile ? '36px' : '40px', borderRadius: '10px', background: 'rgba(var(--accent-rgb), 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                    <IndianRupee size={isMobile ? 18 : 20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.65rem', fontWeight: '800', opacity: 0.5, letterSpacing: '0.05em' }}>APPROX PRICE (INDIA)</p>
                                    <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: '950' }}>{sensor.price_range || "N/A"}</p>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary btn-primary-shiny"
                                style={{
                                    borderRadius: '1rem',
                                    padding: isMobile ? '0.75rem 1.25rem' : '0.75rem 1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: '800',
                                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                                    width: isMobile ? '100%' : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                <ExternalLink size={isMobile ? 16 : 18} /> Buy on Amazon
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
