import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Cpu, Book, Zap, Command, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { BOARDS } from '../data/boards';
import { sensors } from '../data/sensors';

const SearchPalette = ({ isOpen, onClose, setView, onSelectProject }) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);

    // Unified Search Data
    const allData = [
        ...projects.map(p => ({ ...p, type: 'Project', icon: <Book size={18} /> })),
        ...Object.entries(BOARDS).map(([id, b]) => ({ ...b, id, type: 'Pinout', icon: <Cpu size={18} /> })),
        ...sensors.map(s => ({ ...s, type: 'Sensor', icon: <Zap size={18} /> })),
        // Core Pages
        { title: 'IoT Roadmap', type: 'Course', id: 'roadmap', route: 'roadmap', icon: <Command size={18} /> },
        { title: 'C Programming for IoT', type: 'Course', id: 'c-course', route: 'c-course', icon: <Command size={18} /> },
        { title: 'Blynk IoT Cloud', type: 'Course', id: 'blynk-iot', route: 'blynk-iot', icon: <Command size={18} /> },
        { title: 'Pinout Lab', type: 'Tool', id: 'pinout', route: 'pinout', icon: <Cpu size={18} /> }
    ];

    const filtered = query.trim() === '' ? [] : allData.filter(item =>
        (item.title || item.name || '').toLowerCase().includes(query.toLowerCase()) ||
        (item.category || '').toLowerCase().includes(query.toLowerCase())
    ).slice(0, 10);

    const handleSelect = (item) => {
        if (item.type === 'Project') {
            onSelectProject(item);
        } else if (item.type === 'Pinout') {
            onClose(); // Close search first
            // Navigate to Pinout
            window.history.pushState({ view: 'pinout' }, '', '/pinout');
            localStorage.setItem('selectedBoardId', item.id);
            setView('pinout');
        } else if (item.type === 'Sensor') {
            onClose();
            setView('sensors');
        } else if (item.route) {
            onClose();
            setView(item.route);
        }
        setQuery('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 2000,
                        background: 'var(--background)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {/* Google-Style Search Bar */}
                    <div style={{
                        padding: '0.75rem 1rem 0.5rem',
                        borderBottom: '1px solid var(--border)',
                        background: 'var(--surface)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                    }}>
                        <div onClick={onClose} style={{ cursor: 'pointer', padding: '0.5rem', marginLeft: '-0.5rem' }}>
                            <ArrowLeft size={24} color="var(--text)" />
                        </div>

                        <div style={{
                            flex: 1,
                            background: 'var(--background-secondary)',
                            borderRadius: '999px',
                            padding: '0.6rem 1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                            border: '1px solid var(--border)'
                        }}>
                            <Search size={18} color="var(--text-muted)" style={{ marginRight: '0.75rem' }} />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search projects, sensors, pinouts..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                style={{
                                    border: 'none',
                                    background: 'transparent',
                                    fontSize: '1rem',
                                    color: 'var(--text)',
                                    width: '100%',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    {/* Simple Vertical List Results */}
                    <div style={{ flex: 1, overflowY: 'auto', padding: '0.5rem 0' }}>
                        {filtered.length > 0 ? (
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {filtered.map((item, index) => (
                                    <li
                                        key={`${item.type}-${item.id}`}
                                        onClick={() => handleSelect(item)}
                                        style={{
                                            padding: '1rem 1.25rem',
                                            borderBottom: '1px solid var(--border)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Search size={16} color="var(--text-muted)" style={{ marginRight: '1rem', opacity: 0.7 }} />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text)' }}>
                                                {item.title || item.name}
                                            </div>
                                        </div>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--text-muted)',
                                            border: '1px solid var(--border)',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '6px'
                                        }}>
                                            {item.type}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : query.trim() !== '' ? (
                            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                No results found for "{query}"
                            </div>
                        ) : null}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchPalette;
