import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Zap, Info, ShieldCheck, ShieldAlert, BadgeInfo, ExternalLink, IndianRupee, ListChecks, AlertTriangle, RefreshCw, Cable } from 'lucide-react';

export default function SensorDetail({ sensor, onClose }) {
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
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                background: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(10px)'
            }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: '1000px',
                    maxHeight: '90vh',
                    background: 'var(--surface)',
                    borderRadius: '2.5rem',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
                }}
            >
                {/* Header / Close */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,0.2)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                >
                    <X size={20} />
                </button>

                <div style={{ overflowY: 'auto', flex: 1 }}>
                    {/* Hero Section */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr',
                        background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.05) 0%, transparent 100%)',
                        borderBottom: '1px solid var(--border)'
                    }}>
                        <div style={{ padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
                            <img
                                src={sensor.image}
                                alt={sensor.name}
                                style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'contain' }}
                            />
                        </div>
                        <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                                <span style={{ padding: '0.4rem 1rem', borderRadius: '2rem', background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', fontWeight: '800', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    {sensor.emoji} {sensor.categoryId}
                                </span>
                                <span style={{ padding: '0.4rem 1rem', borderRadius: '2rem', background: sensor.level === 'Beginner' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: sensor.level === 'Beginner' ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)', fontWeight: '800', fontSize: '0.75rem' }}>
                                    {sensor.level}
                                </span>
                            </div>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: '950', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                                {sensor.name}
                            </h1>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: '500' }}>
                                {sensor.description}
                            </p>
                        </div>
                    </div>

                    <div style={{ padding: '3rem', display: 'grid', gap: '3rem' }}>
                        {/* 2-Column Specs */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            {/* Left Col: Pins & Voltage */}
                            <div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                                    <Cpu size={18} /> HARDWARE INTERFACE
                                </h3>

                                <div style={{ marginBottom: '2rem' }}>
                                    <p style={{ fontSize: '0.8rem', fontWeight: '800', opacity: 0.5, marginBottom: '0.75rem' }}>PIN ASSIGNMENTS</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {sensor.pins && sensor.pins.split('|').map((pin, i) => (
                                            <span key={i} style={{ padding: '0.5rem 1rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '0.75rem', fontSize: '0.85rem', fontWeight: '700' }}>
                                                {pin.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass-plus" style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid var(--border)', background: 'rgba(var(--primary-rgb), 0.03)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                        <Zap size={16} color="var(--primary)" />
                                        <span style={{ fontWeight: '800', fontSize: '0.9rem' }}>Voltage Compatibility</span>
                                    </div>
                                    <p style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--text)' }}>
                                        {sensor.voltage || "N/A V"}
                                    </p>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem', fontWeight: '500' }}>
                                        Check microcontroller logic levels (3.3V/5V) before connecting.
                                    </p>
                                </div>
                            </div>

                            {/* Right Col: Principle */}
                            <div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                                    <Info size={18} /> CONCEPT & WORKING
                                </h3>

                                <div style={{ marginBottom: '2rem' }}>
                                    <p style={{ fontSize: '0.8rem', fontWeight: '800', opacity: 0.5, marginBottom: '0.5rem' }}>WHAT IT DOES</p>
                                    <p style={{ lineHeight: 1.6, fontWeight: '500' }}>{sensor.what_it_does}</p>
                                </div>

                                <div>
                                    <p style={{ fontSize: '0.8rem', fontWeight: '800', opacity: 0.5, marginBottom: '0.5rem' }}>HOW IT WORKS</p>
                                    <p style={{ lineHeight: 1.6, fontWeight: '500' }}>{sensor.how_it_works}</p>
                                </div>
                            </div>
                        </div>

                        {/* Pros/Cons & Uses */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 2fr', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: '900', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>🧪 COMMON USES</h3>
                                <div style={{ display: 'grid', gap: '0.75rem' }}>
                                    {commonUses.map((use, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(var(--primary-rgb), 0.03)', borderRadius: '1rem', border: '1px solid var(--border)', fontSize: '0.85rem', fontWeight: '700' }}>
                                            <BadgeInfo size={14} color="var(--primary)" /> {use}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: '#10b981', marginBottom: '1.5rem' }}>✅ ADVANTAGES</h3>
                                    <div style={{ display: 'grid', gap: '1rem' }}>
                                        {advantages.map((adv, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', fontWeight: '600' }}>
                                                <ShieldCheck size={16} color="#10b981" style={{ flexShrink: 0 }} />
                                                <span>{adv}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: '#ef4444', marginBottom: '1.5rem' }}>❌ DISADVANTAGES</h3>
                                    <div style={{ display: 'grid', gap: '1rem' }}>
                                        {disadvantages.map((dis, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', fontWeight: '600' }}>
                                                <ShieldAlert size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                                                <span>{dis}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Technical Details */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            {/* Technical Specs */}
                            {technicalSpecs.length > 0 && (
                                <div>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                                        <ListChecks size={18} /> TECHNICAL SPECIFICATIONS
                                    </h3>
                                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                                        {technicalSpecs.map((spec, i) => (
                                            <div key={i} style={{ padding: '0.75rem 1rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '0.75rem', fontSize: '0.85rem', fontWeight: '600', display: 'flex', justifyContent: 'space-between' }}>
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
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                                        <Cable size={18} /> PIN DETAILED EXPLANATION
                                    </h3>
                                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                                        {pinDetails.map((detail, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', fontWeight: '600', lineHeight: 1.4 }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.4rem', flexShrink: 0 }} />
                                                <span>{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            {/* Tips / Mistakes */}
                            {mistakes.length > 0 && (
                                <div className="glass-plus" style={{ padding: '2rem', borderRadius: '1.5rem', background: 'rgba(245, 158, 11, 0.03)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                                        <AlertTriangle size={18} /> BEGINNER MISTAKES
                                    </h3>
                                    <div style={{ display: 'grid', gap: '0.8rem' }}>
                                        {mistakes.map((mistake, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text)' }}>
                                                <span style={{ color: '#f59e0b' }}>•</span>
                                                <span>{mistake}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Alternatives */}
                            {alternatives.length > 0 && (
                                <div className="glass-plus" style={{ padding: '2rem', borderRadius: '1.5rem', background: 'rgba(var(--primary-rgb), 0.03)', border: '1px solid var(--border)' }}>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                                        <RefreshCw size={18} /> ALTERNATIVES
                                    </h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                        {alternatives.map((alt, i) => (
                                            <span key={i} style={{ padding: '0.5rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: '800', color: 'var(--primary)' }}>
                                                {alt}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer Info */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(var(--accent-rgb), 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                    <IndianRupee size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.7rem', fontWeight: '800', opacity: 0.5, letterSpacing: '0.05em' }}>APPROX PRICE (INDIA)</p>
                                    <p style={{ fontSize: '1.2rem', fontWeight: '950' }}>{sensor.price_range || "N/A"}</p>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary"
                                style={{ borderRadius: '1rem', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '0.9rem' }}
                            >
                                <ExternalLink size={16} /> Buy on Amazon
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
