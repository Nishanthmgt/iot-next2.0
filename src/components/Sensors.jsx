import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { extendedSensors as sensors } from '../data/sensors';
import { Search, ExternalLink, Filter, Cpu, Layers, ShoppingCart, Zap, Globe, Sparkles } from 'lucide-react';

export default function Sensors() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeLevel, setActiveLevel] = useState("All");

    const filteredSensors = useMemo(() => {
        return sensors.filter(s => {
            const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.category.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesLevel = activeLevel === "All" || s.level === activeLevel;
            return matchesSearch && matchesLevel;
        });
    }, [searchQuery, activeLevel]);

    const levels = ["All", "Beginner", "Intermediate", "Advanced"];

    return (
        <div className="sensors-page container" style={{ padding: '0 0 6rem' }}>
            {/* Premium Robu.in Partner Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass"
                style={{
                    padding: '2.5rem',
                    borderRadius: '2.5rem',
                    marginBottom: '4rem',
                    background: 'linear-gradient(135deg, var(--surface) 0%, rgba(var(--primary-rgb), 0.1) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '1.5rem',
                    border: '1px solid var(--primary)'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)', fontWeight: '800', letterSpacing: '1px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    <Sparkles size={14} /> Official Components Partner
                </div>
                <h1 style={{ fontSize: '2.8rem', fontWeight: '900', maxWidth: '800px', lineHeight: 1.1 }}>
                    Get Verified IoT Hardware <br /> from <span style={{ color: 'var(--primary)' }}>Robu.in</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px' }}>
                    We've curated 100+ components directly from India's leading maker store to ensure your project works on the first try.
                </p>
                <a
                    href="https://robu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '1rem 3rem', fontSize: '1.1rem', borderRadius: '1.25rem' }}
                >
                    Visit Robu.in Marketplace <Globe size={20} />
                </a>
            </motion.div>

            {/* Filter Bar */}
            <div className="glass" style={{ padding: '1.5rem', borderRadius: '1.5rem', marginBottom: '3rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
                    <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                    <input
                        type="text"
                        placeholder="Search 100+ sensors, actuators, controllers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)' }}
                    />
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--surface-hover)', padding: '0.4rem', borderRadius: '0.75rem' }}>
                    {levels.map(lvl => (
                        <button
                            key={lvl}
                            onClick={() => setActiveLevel(lvl)}
                            style={{
                                padding: '0.6rem 1.2rem',
                                borderRadius: '0.5rem',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                background: activeLevel === lvl ? 'var(--primary)' : 'transparent',
                                color: activeLevel === lvl ? 'white' : 'var(--text-muted)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {lvl}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sensors Grid */}
            <div className="grid grid-4" style={{ gap: '1.5rem' }}>
                <AnimatePresence mode="popLayout">
                    {filteredSensors.map((sensor) => (
                        <motion.div
                            layout
                            key={sensor.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="glass"
                            style={{
                                padding: '1.5rem',
                                borderRadius: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                position: 'relative',
                                background: 'var(--surface)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ padding: '0.5rem', background: 'var(--surface-hover)', borderRadius: '0.75rem', color: 'var(--primary)' }}>
                                    <Cpu size={24} />
                                </div>
                                <span className={`badge badge-${sensor.level.toLowerCase()}`} style={{ fontSize: '0.6rem' }}>
                                    {sensor.level}
                                </span>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.25rem' }}>{sensor.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: '600' }}>
                                    <Layers size={13} /> {sensor.category}
                                </div>
                            </div>

                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', flex: 1, lineHeight: '1.5' }}>
                                {sensor.description}
                            </p>

                            <a
                                href={sensor.buyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{ width: '100%', justifyContent: 'center', padding: '0.6rem', fontSize: '0.85rem', gap: '0.4rem', borderRadius: '0.75rem' }}
                            >
                                Get on Robu.in <ExternalLink size={14} />
                            </a>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredSensors.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                    <Search size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                    <h3>No components found</h3>
                    <p>Try adjusting your search or filters.</p>
                </div>
            )}
        </div>
    );
}