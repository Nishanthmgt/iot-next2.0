import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight } from 'lucide-react';
import { sensors } from '../../data/sensors';
import { BOARDS } from '../../data/boards';

export default function ComponentLibrary({ onAdd }) {
    const [searchQuery, setSearchQuery] = useState("");

    // Combine sensors and boards, filter by search
    const allItems = [
        ...Object.values(BOARDS).map(b => ({ ...b, categoryId: 'microcontroller', level: 'N/A' })),
        ...sensors
    ];

    const libraryItems = allItems.filter(s =>
        (s.name || "").toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 60);

    return (
        <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '320px', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            style={{
                borderRight: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
            }}
        >
            <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '900', marginBottom: '1.2rem' }}>Hardware Library</h3>

                <div style={{ position: 'relative' }}>
                    <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
                    <input
                        type="text"
                        placeholder="Search parts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem 0.75rem 2.75rem',
                            borderRadius: '0.8rem',
                            border: '1px solid var(--border)',
                            background: 'rgba(0,0,0,0.05)',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            outline: 'none'
                        }}
                    />
                </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '0 1.5rem 1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {libraryItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => onAdd(item)}
                            className="library-item"
                            style={{
                                padding: '1rem',
                                borderRadius: '1rem',
                                background: 'white',
                                border: '1px solid var(--border)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: '#f8fafc',
                                borderRadius: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '0.5rem'
                            }}>
                                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <div style={{ flex: 1, overflow: 'hidden' }}>
                                <p style={{ fontSize: '0.85rem', fontWeight: '800', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</p>
                                <span style={{ fontSize: '0.65rem', fontWeight: '700', opacity: 0.5, textTransform: 'uppercase' }}>{item.categoryId}</span>
                            </div>
                            <ChevronRight size={14} style={{ opacity: 0.3 }} />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .library-item:hover {
                    transform: translateX(4px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                    border-color: var(--primary);
                }
            `}</style>
        </motion.div>
    );
}
