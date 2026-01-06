import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Cpu, Book, Zap, Command } from 'lucide-react';
import { projects } from '../data/projects';
import { BOARDS } from '../data/boards';
import { sensors } from '../data/sensors';

const SearchPalette = ({ isOpen, onClose, setView, onSelectProject }) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);

    // Prepare unified dataset
    const allData = [
        ...projects.map(p => ({ ...p, type: 'Project', icon: <Book size={16} /> })),
        ...Object.entries(BOARDS).map(([id, b]) => ({ ...b, id, type: 'Board', icon: <Cpu size={16} /> })),
        ...sensors.map(s => ({ ...s, type: 'Sensor', icon: <Zap size={16} /> }))
    ];

    const filtered = query.trim() === '' ? [] : allData.filter(item =>
        (item.title || item.name || '').toLowerCase().includes(query.toLowerCase()) ||
        (item.category || '').toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);

    useEffect(() => {
        if (isOpen) {
            setQuery('');
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleSelect = (item) => {
        if (item.type === 'Project') {
            onSelectProject(item);
        } else if (item.type === 'Board') {
            window.location.hash = `pinout`;
            localStorage.setItem('selectedBoardId', item.id);
            setView('pinout');
        } else if (item.type === 'Sensor') {
            setView('sensors');
        }
        onClose();
    };

    const onKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setSelectedIndex(prev => Math.min(prev + 1, filtered.length - 1));
        } else if (e.key === 'ArrowUp') {
            setSelectedIndex(prev => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter' && filtered[selectedIndex]) {
            handleSelect(filtered[selectedIndex]);
        } else if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    onClick={onClose}
                    style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '15vh' }}>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: '90%',
                            maxWidth: '650px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '2.5rem',
                            border: '1px solid rgba(0,0,0,0.05)',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
                            color: '#1e293b'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', background: 'white' }}>
                            <Search size={22} style={{ color: '#64748b', marginRight: '1.25rem' }} />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search the IoT Ecosystem..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={onKeyDown}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#1e293b',
                                    fontSize: '1.25rem',
                                    outline: 'none',
                                    flex: 1,
                                    fontWeight: '600'
                                }}
                            />
                            <div
                                onClick={onClose}
                                style={{
                                    background: '#f1f5f9',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '1rem',
                                    cursor: 'pointer',
                                    color: '#64748b',
                                    fontSize: '0.8rem',
                                    fontWeight: '800'
                                }}
                            >
                                CLOSE
                            </div>
                        </div>

                        <div style={{ maxHeight: '450px', overflowY: 'auto', padding: '1rem' }}>
                            {filtered.length > 0 ? (
                                filtered.map((item, index) => (
                                    <div
                                        key={`${item.type}-${item.id}`}
                                        onClick={() => handleSelect(item)}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        style={{
                                            padding: '1.25rem',
                                            borderRadius: '1.5rem',
                                            cursor: 'pointer',
                                            background: selectedIndex === index ? '#f8fafc' : 'transparent',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            transition: 'all 0.2s ease',
                                            border: selectedIndex === index ? '1px solid #e2e8f0' : '1px solid transparent'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '12px',
                                                background: selectedIndex === index ? 'white' : '#f1f5f9',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--primary)',
                                                transition: 'all 0.2s'
                                            }}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#1e293b' }}>{item.title || item.name}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>{item.category}</div>
                                            </div>
                                        </div>
                                        <div style={{
                                            fontSize: '0.65rem',
                                            fontWeight: 900,
                                            textTransform: 'uppercase',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '0.6rem',
                                            background: '#f1f5f9',
                                            color: '#64748b',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {item.type}
                                        </div>
                                    </div>
                                ))
                            ) : query.trim() !== '' ? (
                                <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#64748b' }}>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Protocol Mismatch</h4>
                                    <p style={{ fontWeight: 500 }}>No entities found for "{query}"</p>
                                </div>
                            ) : (
                                <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '2rem' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', color: 'var(--primary)' }}>
                                                <Cpu size={24} />
                                            </div>
                                            <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#1e293b' }}>BOARDS</div>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', color: 'var(--primary)' }}>
                                                <Book size={24} />
                                            </div>
                                            <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#1e293b' }}>PROJECTS</div>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', color: 'var(--primary)' }}>
                                                <Zap size={24} />
                                            </div>
                                            <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#1e293b' }}>SENSORS</div>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '1rem', color: '#64748b', fontWeight: '500' }}>Efficiently traverse the industrial grid.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SearchPalette;
