import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ChevronRight, Gauge, Radio, Zap, Activity } from 'lucide-react';
import { BOARD_FAMILIES, getBoardCountByFamily } from '../utils/boardFamilies';

export default function BoardFamilySelector({ setView, onSelectFamily }) {
    // Filter out "All Boards" for the grid view
    const families = BOARD_FAMILIES.filter(f => f.id !== 'all');

    const handleFamilyClick = (familyId) => {
        if (onSelectFamily) {
            onSelectFamily(familyId);
        } else {
            window.location.hash = `pinout/family/${familyId}`;
        }
    };

    return (
        <div className="container" style={{ padding: '0 1rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '2rem', background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}
                >
                    Hardware Ecosystem
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}
                >
                    Explore <span className="text-gradient">Board Families</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}
                >
                    Choose an architecture to view detailed pinouts and specifications.
                </motion.p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 2
            }}>
                {families.map((family, index) => {
                    const count = getBoardCountByFamily(family.id);
                    return (
                        <motion.div
                            key={family.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            onClick={() => handleFamilyClick(family.id)}
                            className="glass"
                            style={{
                                padding: '2rem',
                                borderRadius: '1.75rem',
                                cursor: 'pointer',
                                border: '1px solid var(--border)',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '1.25rem',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                background: 'rgba(var(--primary-rgb), 0.02)'
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '1rem',
                                background: 'var(--board-icon-bg)',
                                padding: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: `0 8px 20px ${family.color}30`,
                                border: `1px solid ${family.color}20`,
                                position: 'relative',
                                zIndex: 2
                            }}>
                                <img
                                    src={family.logo}
                                    alt={family.name}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter: family.id === 'all' ? 'grayscale(1)' : 'none'
                                    }}
                                />
                            </div>

                            <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '0.4rem' }}>{family.name}</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {family.description}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', width: '100%' }}>
                                    <div style={{
                                        padding: '4px 10px',
                                        borderRadius: '6px',
                                        background: 'rgba(var(--primary-rgb), 0.05)',
                                        fontSize: '0.7rem',
                                        fontWeight: 800,
                                        border: '1px solid var(--border)'
                                    }}>
                                        {count} {count === 1 ? 'Board' : 'Boards'}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: family.color, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        View <ChevronRight size={12} />
                                    </div>
                                </div>
                            </div>

                            {/* Abstract Background Glow */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-20%',
                                right: '-10%',
                                width: '120px',
                                height: '120px',
                                borderRadius: '100%',
                                background: family.color,
                                filter: 'blur(60px)',
                                opacity: 0.08,
                                zIndex: 1
                            }} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
