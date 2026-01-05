import React, { useState, useEffect, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cpu, Search, Info, Target, Zap, Shield, ChevronLeft, ChevronRight, Box, ShieldAlert, Gauge, Activity } from 'lucide-react';

import { BOARDS } from '../data/boards';
import { BOARD_FAMILIES, getBoardCountByFamily } from '../utils/boardFamilies';
import BoardFamilySelector from './BoardFamilySelector';

const TYPE_COLORS = {
    power: '#facc15',
    io: '#94a3b8',
    pwm: '#f472b6',
    adc: '#4ade80',
    i2c: '#818cf8',
    uart: '#fb923c',
    control: '#ef4444',
    input: '#38bdf8'
};

const CATEGORIES = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Special'];

export default function PinoutLab({ initialFamily = 'all' }) {
    const [selectedBoardId, setSelectedBoardId] = useState(() => {
        return localStorage.getItem('selectedBoardId') || null;
    });
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedFamily, setSelectedFamily] = useState(initialFamily);
    const [hoveredPin, setHoveredPin] = useState(null);
    const [showAdvanced, setShowAdvanced] = useState(false);

    // Sync selectedFamily with initialFamily prop
    useEffect(() => {
        if (initialFamily) {
            setSelectedFamily(initialFamily);
        }
    }, [initialFamily]);
    const [beginnerOnly, setBeginnerOnly] = useState(false);
    const [dynamicBoards, setDynamicBoards] = useState(null);

    useEffect(() => {
        const fetchBoards = async () => {
            const { data, error } = await supabase.from('boards').select('*');
            if (!error && data?.length > 0) {
                const boardMap = {};
                data.forEach(b => {
                    const staticKey = Object.keys(BOARDS).find(key =>
                        BOARDS[key].name === b.name || BOARDS[key].id === b.id
                    );
                    const id = staticKey || b.id || b.name.toLowerCase().replace(/ /g, '_');
                    boardMap[id] = b;
                });
                setDynamicBoards(boardMap);
            }
        };
        fetchBoards();

        const handleStorageChange = () => {
            const sid = localStorage.getItem('selectedBoardId');
            if (sid) setSelectedBoardId(sid);
        };
        window.addEventListener('storage', handleStorageChange);
        handleStorageChange();
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const mergedBoards = useMemo(() => {
        const merged = {};
        const staticIds = Object.keys(BOARDS);
        const dynamicIds = Object.keys(dynamicBoards || {});
        const allIds = Array.from(new Set([...staticIds, ...dynamicIds]));

        allIds.forEach(id => {
            const staticBoard = BOARDS[id] || {};
            const dynamicBoard = dynamicBoards?.[id] || {};
            if (!staticBoard.name && !dynamicBoard.name) return;
            merged[id] = {
                ...staticBoard,
                ...dynamicBoard,
                specs: (dynamicBoard.specs && Object.entries(dynamicBoard.specs).length > 0)
                    ? dynamicBoard.specs
                    : staticBoard.specs
            };
        });
        return merged;
    }, [dynamicBoards]);

    const board = mergedBoards[selectedBoardId] || mergedBoards[Object.keys(mergedBoards)[0]];

    const filteredBoards = Object.entries(mergedBoards)
        .filter(([id, b]) => {
            if (!b || !b.name) return false;
            const matchesCategory = activeCategory === 'All' || b.category === activeCategory;
            const matchesFamily = selectedFamily === 'all' || b.family === selectedFamily;
            const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase());
            return matchesCategory && matchesFamily && matchesSearch;
        });

    const filteredPins = (board.pins || []).filter(p => {
        const matchesSearch = p.id.toLowerCase().includes(search.toLowerCase()) ||
            p.label.toLowerCase().includes(search.toLowerCase()) ||
            (p.functions && p.functions.some(f => f.toLowerCase().includes(search.toLowerCase())));
        const matchesBeginner = !beginnerOnly || p.isBeginnerSafe;
        return matchesSearch && matchesBeginner;
    });

    useEffect(() => {
        if (filteredBoards.length > 0 && selectedBoardId) {
            const isSelectedStillVisible = filteredBoards.some(([id]) => id === selectedBoardId);
            // Don't auto-switch if we are deep in a view but the board is still valid
            // But if the board is NOT visible, we might want to reset? 
            // Actually, in 3-level nav, we usually select a family first.
        }
    }, [selectedFamily, activeCategory, search, beginnerOnly, mergedBoards]);



    return (
        <section className="container" style={{ padding: '2rem 1rem 4rem' }}>
            {selectedFamily === 'all' && !selectedBoardId ? (
                <div style={{ padding: '2rem 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
                            Hardware <span className="text-gradient">Reference Lab</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                            Expert-level pinouts and technical specifications for the world's most popular microcontroller ecosystems.
                        </p>
                    </div>
                    <BoardFamilySelector onSelectFamily={setSelectedFamily} />
                </div>
            ) : !selectedBoardId ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ padding: '2rem' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                        <button
                            onClick={() => setSelectedFamily('all')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.75rem 1.25rem',
                                borderRadius: '1rem',
                                background: 'var(--surface)',
                                color: 'var(--text)',
                                cursor: 'pointer',
                                fontWeight: 800,
                                fontSize: '0.9rem'
                            }}
                        >
                            <ChevronLeft size={18} /> Back to Ecosystem
                        </button>
                        <div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 900 }}>{selectedFamily} Ecosystem</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{filteredBoards.length} boards available</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        padding: '0.6rem 1.25rem',
                                        fontSize: '0.8rem',
                                        fontWeight: 800,
                                        borderRadius: '0.85rem',
                                        border: '1px solid var(--border)',
                                        background: activeCategory === cat ? 'var(--primary)' : 'var(--surface)',
                                        color: activeCategory === cat ? 'white' : 'var(--text-muted)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div style={{ position: 'relative', width: '300px' }}>
                            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="text"
                                placeholder={`Search ${selectedFamily} boards...`}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem 0.75rem 3rem',
                                    borderRadius: '1rem',
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text)',
                                    fontSize: '0.9rem'
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                        {filteredBoards.map(([id, b]) => (
                            <motion.div
                                key={id}
                                whileHover={{ y: -5 }}
                                onClick={() => {
                                    setSelectedBoardId(id);
                                    localStorage.setItem('selectedBoardId', id);
                                }}
                                className="glass"
                                style={{
                                    padding: '2rem',
                                    borderRadius: '1.5rem',
                                    border: '1px solid var(--border)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>

                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{b.name}</h4>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>{b.category}</div>
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {b.description}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem' }}>
                                    EXPLORE PINOUT <ChevronRight size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass"
                    style={{ padding: '3rem', borderRadius: '2.5rem', border: '1px solid var(--border)', position: 'relative' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem', gap: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <button
                                onClick={() => {
                                    setSelectedBoardId(null);
                                    localStorage.removeItem('selectedBoardId');
                                }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.75rem',
                                    border: '1px solid var(--border)',
                                    background: 'var(--surface)',
                                    color: 'var(--text-muted)',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    fontSize: '0.8rem',
                                    marginBottom: '1.5rem'
                                }}
                            >
                                <ChevronLeft size={16} /> Back to {selectedFamily === 'all' ? 'All Boards' : selectedFamily}
                            </button>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: 900 }}>{board.name}</h3>
                                {board.datasheet && (
                                    <a href={board.datasheet} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem' }}>
                                        Datasheet
                                    </a>
                                )}
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px' }}>{board.description}</p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ position: 'relative', width: '250px' }}>
                                <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    type="text"
                                    placeholder="Search pins..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', borderRadius: '1rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--text)' }}
                                />
                            </div>
                            <button
                                onClick={() => setBeginnerOnly(!beginnerOnly)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    padding: '0.75rem 1.25rem',
                                    borderRadius: '1rem',
                                    border: '1px solid var(--border)',
                                    background: beginnerOnly ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                                    color: beginnerOnly ? 'var(--primary)' : 'var(--text-muted)',
                                    fontWeight: 800,
                                    fontSize: '0.8rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <Zap size={14} fill={beginnerOnly ? 'currentColor' : 'none'} /> {beginnerOnly ? 'Beginner' : 'Expert'}
                            </button>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', minHeight: '600px' }}>
                            {/* Left Side Pins */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {filteredPins.slice(0, Math.ceil(filteredPins.length / 2)).map((p, i) => (
                                    <PinRow key={i} pin={p} side="left" isHighlighted={search && (p.id.toLowerCase().includes(search.toLowerCase()) || p.label.toLowerCase().includes(search.toLowerCase()))} onHover={setHoveredPin} />
                                ))}
                            </div>

                            {/* Right Side Pins */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {filteredPins.slice(Math.ceil(filteredPins.length / 2)).map((p, i) => (
                                    <PinRow key={i} pin={p} side="right" isHighlighted={search && (p.id.toLowerCase().includes(search.toLowerCase()) || p.label.toLowerCase().includes(search.toLowerCase()))} onHover={setHoveredPin} />
                                ))}
                            </div>
                        </div>

                        {/* Floating Tooltip - Absolute Center */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 100 }}>
                            <AnimatePresence>
                                {hoveredPin && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                        style={{
                                            width: '300px',
                                            padding: '1.5rem',
                                            background: 'var(--surface)',
                                            borderRadius: '1.5rem',
                                            border: `2px solid ${TYPE_COLORS[hoveredPin.type]}`,
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        <div style={{ textTransform: 'uppercase', fontSize: '0.7rem', color: TYPE_COLORS[hoveredPin.type], fontWeight: 800, marginBottom: '0.5rem' }}>{hoveredPin.type}</div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>{hoveredPin.id}</div>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>{hoveredPin.label}</div>
                                        {hoveredPin.functions && (
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                                {hoveredPin.functions.map(f => (
                                                    <span key={f} style={{ fontSize: '0.65rem', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border)' }}>{f}</span>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '4rem', justifyContent: 'center', padding: '2rem', background: 'rgba(var(--primary-rgb), 0.02)', borderRadius: '1.5rem' }}>
                        {Object.entries(TYPE_COLORS).map(([type, color]) => (
                            <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 800 }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: color }} />
                                <span style={{ textTransform: 'uppercase', opacity: 0.6 }}>{type}</span>
                            </div>
                        ))}
                    </div>

                    {/* Specs Grid */}
                    <div style={{ marginTop: '4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                            <Target size={22} color="var(--primary)" />
                            <h4 style={{ fontSize: '1.4rem', fontWeight: 900 }}>Technical Specifications</h4>
                        </div>
                        <div className="grid grid-4" style={{ gap: '1.5rem' }}>
                            {board.specs && Object.entries(board.specs).map(([key, value]) => (
                                <div key={key} className="glass" style={{ padding: '1.5rem', borderRadius: '1.25rem', border: '1px solid var(--border)' }}>
                                    <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem', opacity: 0.7 }}>{key.replace(/_/g, ' ')}</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 900 }}>{value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Guidelines */}
                    {board.guidelines && (
                        <div style={{
                            marginTop: '3rem',
                            padding: '2.5rem',
                            background: 'rgba(var(--primary-rgb), 0.05)',
                            borderRadius: '2rem',
                            border: '1px solid rgba(var(--primary-rgb), 0.1)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <ShieldAlert size={22} color="var(--primary)" />
                                <h4 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text)' }}>Hardware Guidelines</h4>
                            </div>
                            <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                                {Object.entries(board.guidelines).map(([key, value]) => (
                                    <div key={key} style={{ padding: '1.5rem', borderRadius: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>{key}</div>
                                        <div style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.5, color: 'var(--text-muted)' }}>{value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
                .pin-visualizer-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2.5rem;
                }
                .pin-column {
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                }
                @media (max-width: 1024px) {
                    .pinout-header {
                        flex-direction: column;
                        align-items: flex-start !important;
                    }
                    .pinout-actions {
                        width: 100% !important;
                        flex-direction: column;
                    }
                    .pinout-actions > div {
                        width: 100% !important;
                    }
                    .pinout-tips-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .expert-mode-text {
                        display: inline !important;
                    }
                }
                @media (max-width: 480px) {
                    .pin-visualizer-container {
                        padding: 1rem !important;
                        gap: 1.5rem !important;
                        grid-template-columns: 1fr !important;
                    }
                }
            `}} />
        </section>
    );
}

function PinRow({ pin, side, isHighlighted, onHover }) {
    return (
        <div
            onMouseEnter={() => onHover(pin)}
            onMouseLeave={() => onHover(null)}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexDirection: side === 'left' ? 'row-reverse' : 'row',
                padding: '0.4rem',
                borderRadius: '0.5rem',
                background: isHighlighted ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                border: isHighlighted ? '1px solid var(--primary)' : '1px solid transparent',
                transition: 'all 0.2s ease',
                cursor: 'help',
                opacity: pin.isBeginnerSafe === false ? 0.7 : 1
            }}
        >
            <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '3px',
                background: TYPE_COLORS[pin.type],
                boxShadow: `0 0 10px ${TYPE_COLORS[pin.type]}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8px',
                color: 'white',
                fontWeight: 900
            }}>
                {pin.isBeginnerSafe && <Zap size={8} fill="currentColor" />}
            </div>
            <div style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: isHighlighted ? 'var(--primary)' : (pin.isBeginnerSafe === false ? 'var(--text-muted)' : 'var(--text)'),
                minWidth: '40px',
                textAlign: side === 'left' ? 'right' : 'left'
            }}>{pin.id}</div>
            <div style={{
                fontSize: '0.7rem',
                color: pin.isBeginnerSafe === false ? 'var(--text-muted)' : 'var(--text-muted)',
                flex: 1,
                textAlign: side === 'left' ? 'right' : 'left',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontWeight: pin.isBeginnerSafe ? 600 : 400
            }}>
                {pin.label}
            </div>
        </div>
    );
}
