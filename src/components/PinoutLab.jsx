import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cpu, Search, Info, Target, Zap, Shield, ChevronLeft, ChevronRight, Box, ShieldAlert, Gauge, Activity, Heart } from 'lucide-react';

import { BOARDS } from '../data/boards';
import { BOARD_FAMILIES, getBoardCountByFamily } from '../utils/boardFamilies';
import BoardFamilySelector from './BoardFamilySelector';
import { useDashboardData } from '../hooks/useDashboardData';

const TYPE_COLORS = {
    power: '#facc15',
    io: '#94a3b8',
    pwm: '#f472b6',
    adc: '#4ade80',
    i2c: '#818cf8',
    uart: '#fb923c',
    control: '#ef4444',
    input: '#38bdf8',
    spi: '#6366f1',
    usb: '#06b6d4',
    dac: '#8b5cf6'
};

const CATEGORIES = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Special'];

const BoardCard = React.memo(({ id, b, onSelect, isMobile }) => {
    const { savedBoards, toggleSaveItem } = useDashboardData();
    const isSaved = (savedBoards || []).includes(id);

    return (
        <motion.div
            key={id}
            whileHover={{ y: -5 }}
            onClick={() => onSelect(id)}
            className="glass"
            style={{
                padding: isMobile ? '1.25rem' : '2rem',
                borderRadius: '1.25rem',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveItem('board', id);
                }}
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: isSaved ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border)',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.2s'
                }}
            >
                <Heart size={18} fill={isSaved ? '#ef4444' : 'none'} color={isSaved ? '#ef4444' : 'var(--text-muted)'} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '1rem' : '1.5rem', marginBottom: isMobile ? '1rem' : '1.5rem' }}>
                <div>
                    <h4 style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', fontWeight: 800 }}>{b.name}</h4>
                    <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{b.category}</div>
                </div>
            </div>
            <p style={{ fontSize: isMobile ? '0.8rem' : '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: isMobile ? '1rem' : '1.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {b.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 800, fontSize: '0.75rem' }}>
                EXPLORE REFERENCE <ChevronRight size={14} />
            </div>
        </motion.div>
    );
});

const MobileBoardCard = React.memo(({ id, b, onSelect }) => {
    const { savedBoards, toggleSaveItem } = useDashboardData();
    const isSaved = (savedBoards || []).includes(id);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => onSelect(id)}
            className="glass"
            style={{
                padding: '1.25rem',
                marginBottom: '1rem',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer',
                background: 'var(--surface)',
                position: 'relative'
            }}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveItem('board', id);
                }}
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'transparent',
                    border: 'none',
                    padding: '0.25rem',
                    cursor: 'pointer',
                    zIndex: 10
                }}
            >
                <Heart size={18} fill={isSaved ? '#ef4444' : 'none'} color={isSaved ? '#ef4444' : 'var(--text-muted)'} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(var(--primary-rgb), 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)'
                }}>
                    <Cpu size={24} />
                </div>
                <div style={{ flex: 1, paddingRight: '2rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.2rem', color: 'var(--text)' }}>{b.name}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: 'var(--text-muted)',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            border: '1px solid var(--border)'
                        }}>
                            {b.family || 'Microcontroller'}
                        </span>
                        {b.category && (
                            <span style={{
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                color: 'var(--primary)',
                                textTransform: 'uppercase'
                            }}>
                                {b.category}
                            </span>
                        )}
                    </div>
                </div>
                {/* Removed Chevron since we have heart, or keep it? Layout might get crowded. Removed for now as card click is obvious */}
            </div>
            <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
            }}>
                {b.description}
            </p>
        </motion.div>
    );
});

const PinoutLab = ({ initialFamily = 'all', showOnlySaved = false, setShowOnlySaved }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            // Clear selected board when going back to family selector
            if (initialFamily === 'all') {
                setSelectedBoardId(null);
                localStorage.removeItem('selectedBoardId');
            }
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

    const { savedBoards } = useDashboardData();

    const board = mergedBoards[selectedBoardId] || mergedBoards[Object.keys(mergedBoards)[0]];

    const filteredBoards = Object.entries(mergedBoards)
        .filter(([id, b]) => {
            if (!b || !b.name) return false;

            // Filter by saved items if enabled
            if (showOnlySaved && savedBoards) {
                if (!savedBoards.includes(id)) return false;
            }

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
        <section className="container" style={{ padding: isMobile ? '1rem 0rem 8rem' : '2rem 1rem 4rem' }}>
            <Helmet>
                <title>Pinout Lab - IoTNext</title>
                <meta name="description" content="Interactive pinout diagrams and technical specifications." />
            </Helmet>

            {selectedFamily === 'all' && !selectedBoardId ? (
                <div style={{ padding: isMobile ? '1rem 0' : '2rem 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
                        <h2 style={{
                            fontSize: isMobile ? '2.2rem' : '3.5rem',
                            fontWeight: '950',
                            marginBottom: '1rem',
                            letterSpacing: '--ls-tight',
                            lineHeight: 'var(--lh-tight)'
                        }}>
                            Hardware <span className="text-gradient">Registry</span>
                        </h2>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: isMobile ? '0.95rem' : '1.2rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.5'
                        }}>
                            Expert-level pinouts and technical specifications for the world's most popular microcontroller ecosystems.
                        </p>
                    </div>
                    <BoardFamilySelector onSelectFamily={setSelectedFamily} />
                </div>
            ) : !selectedBoardId ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ padding: isMobile ? '1rem 0' : '2rem' }}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'stretch' : 'center',
                        gap: '1.25rem',
                        marginBottom: isMobile ? '2rem' : '3rem'
                    }}>
                        <button
                            onClick={() => setSelectedFamily('all')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '0.7rem 1.25rem',
                                borderRadius: '0.85rem',
                                background: 'var(--surface)',
                                color: 'var(--text)',
                                cursor: 'pointer',
                                fontWeight: 800,
                                fontSize: '0.8rem',
                                border: '1px solid var(--border)'
                            }}
                        >
                            <ChevronLeft size={16} /> Back to Ecosystems
                        </button>
                        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                            <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 950 }}>{selectedFamily}</h3>
                        </div>
                    </div>

                    {/* Sticky Search & Filter Header */}
                    <div style={{
                        position: 'sticky',
                        top: isMobile ? '64px' : '0',
                        zIndex: 20,
                        background: 'var(--background)',
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                        borderBottom: '1px solid var(--border)',
                        marginBottom: '1rem',
                        paddingLeft: '1rem',
                        paddingRight: '1rem'
                    }}>
                        <div style={{ position: 'relative', marginBottom: '1rem' }}>
                            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="text"
                                placeholder="Search boards..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem 1rem 0.8rem 3rem',
                                    borderRadius: '0.75rem',
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text)',
                                    fontSize: '0.95rem',
                                    boxShadow: 'none',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: '0.5rem',
                            overflowX: 'auto',
                            paddingBottom: '0.5rem',
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                            whiteSpace: 'nowrap',
                            WebkitOverflowScrolling: 'touch'
                        }}>
                            <button
                                onClick={() => setSelectedFamily('all')}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '2rem',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    background: selectedFamily === 'all' ? 'var(--primary)' : 'var(--surface)',
                                    color: selectedFamily === 'all' ? 'white' : 'var(--text-muted)',
                                    border: '1px solid var(--border)',
                                    cursor: 'pointer'
                                }}
                            >
                                All
                            </button>
                            {setShowOnlySaved && (
                                <button
                                    onClick={() => {
                                        // Clear ALL filters
                                        setShowOnlySaved(false);
                                        setActiveCategory('All');
                                        setSearch('');
                                    }}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '2rem',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        background: showOnlySaved ? '#ef4444' : 'var(--surface)',
                                        color: showOnlySaved ? 'white' : 'var(--text-muted)',
                                        border: '1px solid var(--border)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem'
                                    }}
                                >
                                    <Heart size={14} fill={showOnlySaved ? 'currentColor' : 'none'} />
                                    <span>{showOnlySaved ? 'Clear Filter' : 'Show Saved'}</span>
                                </button>
                            )}
                            {/* We can map active families here if needed, or just categories */}
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        borderRadius: '2rem',
                                        border: '1px solid var(--border)',
                                        background: activeCategory === cat ? 'var(--text)' : 'var(--surface)',
                                        color: activeCategory === cat ? 'var(--background)' : 'var(--text-muted)',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {isMobile ? (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {filteredBoards.map(([id, b]) => (
                                <MobileBoardCard
                                    key={id}
                                    id={id}
                                    b={b}
                                    onSelect={(boardId) => {
                                        setSelectedBoardId(boardId);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                        localStorage.setItem('selectedBoardId', boardId);
                                    }}
                                />
                            ))}
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                            gap: '1rem'
                        }}>
                            {filteredBoards.map(([id, b]) => (
                                <BoardCard
                                    key={id}
                                    id={id}
                                    b={b}
                                    isMobile={isMobile}
                                    onSelect={(boardId) => {
                                        setSelectedBoardId(boardId);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                        localStorage.setItem('selectedBoardId', boardId);
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass"
                    style={{
                        padding: isMobile ? '1.25rem' : '3rem',
                        borderRadius: isMobile ? '1.5rem' : '2.5rem',
                        border: '1px solid var(--border)',
                        position: 'relative'
                    }}
                >
                    {/* Mobile Sticky Board Header */}
                    {isMobile && (
                        <div style={{
                            position: 'sticky',
                            top: '64px',
                            zIndex: 19,
                            background: 'rgba(var(--background-rgb), 0.95)',
                            padding: '1rem',
                            borderBottom: '1px solid var(--border)',
                            margin: '0 -1.25rem 1.5rem -1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <button
                                    onClick={() => {
                                        setSelectedBoardId(null);
                                        localStorage.removeItem('selectedBoardId');
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        border: '1px solid var(--border)',
                                        background: 'var(--surface)',
                                        color: 'var(--text)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <span style={{ fontWeight: 900, fontSize: '1.1rem' }}>{board.name}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button
                                    onClick={() => setBeginnerOnly(!beginnerOnly)}
                                    style={{
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '8px',
                                        border: '1px solid var(--border)',
                                        background: beginnerOnly ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                                        color: beginnerOnly ? 'var(--primary)' : 'var(--text-muted)',
                                        fontWeight: 800,
                                        fontSize: '0.7rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {beginnerOnly ? 'SAFE' : 'FULL'}
                                </button>
                            </div>
                        </div>
                    )}

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: isMobile ? '1rem' : '4rem',
                        gap: '1.5rem',
                        flexWrap: 'wrap'
                    }}>
                        {!isMobile && (
                            <div style={{ width: 'auto' }}>
                                <button
                                    onClick={() => {
                                        setSelectedBoardId(null);
                                        localStorage.removeItem('selectedBoardId');
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '0.75rem',
                                        border: '1px solid var(--border)',
                                        background: 'var(--surface)',
                                        color: 'var(--text-muted)',
                                        cursor: 'pointer',
                                        fontWeight: 700,
                                        fontSize: '0.75rem',
                                        marginBottom: '1rem'
                                    }}
                                >
                                    <ChevronLeft size={14} /> Back
                                </button>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                    <h3 style={{ fontSize: '2.5rem', fontWeight: 950 }}>{board.name}</h3>
                                    {board.datasheet && (
                                        <a href={board.datasheet} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.3rem 0.6rem', fontSize: '0.65rem', borderRadius: '0.5rem' }}>
                                            Datasheet
                                        </a>
                                    )}
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.4' }}>{board.description}</p>
                            </div>
                        )}

                        {!isMobile && (
                            <div style={{
                                display: 'flex',
                                gap: '0.75rem',
                                alignItems: 'center',
                                width: 'auto',
                                justifyContent: 'flex-end'
                            }}>
                                <div style={{ position: 'relative', minWidth: '220px' }}>
                                    <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                    <input
                                        type="text"
                                        placeholder="Find pin..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '0.65rem 1rem 0.65rem 2.8rem',
                                            borderRadius: '0.85rem',
                                            background: 'var(--background)',
                                            border: '1px solid var(--border)',
                                            color: 'var(--text)',
                                            fontSize: '0.85rem'
                                        }}
                                    />
                                </div>
                                <button
                                    onClick={() => setBeginnerOnly(!beginnerOnly)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.65rem 1rem',
                                        borderRadius: '0.85rem',
                                        border: '1px solid var(--border)',
                                        background: beginnerOnly ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                                        color: beginnerOnly ? 'var(--primary)' : 'var(--text-muted)',
                                        fontWeight: 800,
                                        fontSize: '0.75rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Zap size={14} fill={beginnerOnly ? 'currentColor' : 'none'} /> {beginnerOnly ? 'SAFE' : 'FULL'}
                                </button>
                            </div>
                        )}
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr',
                            gap: isMobile ? '0.5rem' : '4rem',
                            alignItems: 'start'
                        }}>
                            {/* Left Side Pins */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.2rem' : '0.4rem' }}>
                                {filteredPins.slice(0, Math.ceil(filteredPins.length / 2)).map((p, i) => (
                                    <PinRow key={i} pin={p} side="left" isHighlighted={search && (p.id.toLowerCase().includes(search.toLowerCase()) || p.label.toLowerCase().includes(search.toLowerCase()))} onHover={setHoveredPin} isMobile={isMobile} />
                                ))}
                            </div>

                            {/* Right Side Pins */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.2rem' : '0.4rem' }}>
                                {filteredPins.slice(Math.ceil(filteredPins.length / 2)).map((p, i) => (
                                    <PinRow key={i} pin={p} side="right" isHighlighted={search && (p.id.toLowerCase().includes(search.toLowerCase()) || p.label.toLowerCase().includes(search.toLowerCase()))} onHover={setHoveredPin} isMobile={isMobile} />
                                ))}
                            </div>
                        </div>

                        {/* Persistent Bottom Tooltip for Mobile instead of Floating */}
                        {isMobile ? (
                            <AnimatePresence>
                                {hoveredPin && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 100 }}
                                        style={{
                                            position: 'fixed',
                                            bottom: 'calc(var(--bottom-nav-height) + 1rem)',
                                            left: '1rem',
                                            right: '1rem',
                                            padding: '1.25rem',
                                            background: 'var(--surface)',
                                            borderRadius: '1.25rem',
                                            border: `2px solid ${TYPE_COLORS[hoveredPin.type]}`,
                                            boxShadow: '0 -10px 40px rgba(0,0,0,0.4)',
                                            backdropFilter: 'blur(20px)',
                                            zIndex: 2000
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <div style={{ textTransform: 'uppercase', fontSize: '0.65rem', color: TYPE_COLORS[hoveredPin.type], fontWeight: 900 }}>{hoveredPin.type}</div>
                                            <button
                                                onClick={() => setHoveredPin(null)}
                                                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                                            >
                                                ✕
                                            </button>
                                        </div>
                                        <div style={{ fontSize: '1.25rem', fontWeight: 950, marginBottom: '0.2rem' }}>{hoveredPin.id}</div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', opacity: 0.8 }}>{hoveredPin.label}</div>
                                        {hoveredPin.functions && (
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                                {hoveredPin.functions.map(f => (
                                                    <span key={f} style={{ fontSize: '0.6rem', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border)' }}>{f}</span>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        ) : (
                            /* Floating Tooltip - Absolute Center for Desktop */
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
                        )}
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: isMobile ? '0.5rem' : '0.75rem',
                        marginTop: isMobile ? '1.5rem' : '4rem',
                        justifyContent: isMobile ? 'flex-start' : 'center',
                        padding: isMobile ? '0.75rem' : '2rem',
                        background: 'rgba(var(--primary-rgb), 0.02)',
                        borderRadius: '1.25rem'
                    }}>
                        {Object.entries(TYPE_COLORS).map(([type, color]) => (
                            <div key={type} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontSize: '0.65rem',
                                fontWeight: 800,
                                background: isMobile ? 'var(--surface)' : 'transparent',
                                padding: isMobile ? '0.3rem 0.6rem' : '0',
                                borderRadius: isMobile ? '6px' : '0',
                                border: isMobile ? '1px solid var(--border)' : 'none'
                            }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: color }} />
                                <span style={{ textTransform: 'uppercase', opacity: 0.8, color: 'var(--text-muted)' }}>{type}</span>
                            </div>
                        ))}
                    </div>

                    {/* Specs Grid */}
                    <div style={{ marginTop: isMobile ? '3rem' : '4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <Target size={20} color="var(--primary)" />
                            <h4 style={{ fontSize: isMobile ? '1.25rem' : '1.4rem', fontWeight: 950 }}>Specifications</h4>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                            gap: '0.75rem'
                        }}>
                            {board.specs && Object.entries(board.specs).map(([key, value]) => (
                                <div key={key} className="glass" style={{ padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                                    <div style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.3rem', opacity: 0.6 }}>{key.replace(/_/g, ' ')}</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 900 }}>{value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Guidelines */}
                    {board.guidelines && (
                        <div style={{
                            marginTop: isMobile ? '2rem' : '3rem',
                            padding: isMobile ? '1.5rem' : '2.5rem',
                            background: 'rgba(var(--primary-rgb), 0.05)',
                            borderRadius: '1.5rem',
                            border: '1px solid rgba(var(--primary-rgb), 0.1)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <ShieldAlert size={20} color="var(--primary)" />
                                <h4 style={{ fontSize: isMobile ? '1.25rem' : '1.4rem', fontWeight: 950, color: 'var(--text)' }}>Guidelines</h4>
                            </div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                                gap: '1rem'
                            }}>
                                {Object.entries(board.guidelines).map(([key, value]) => (
                                    <div key={key} style={{ padding: '1rem', borderRadius: '1rem', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.3rem' }}>{key}</div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.4, color: 'var(--text-muted)' }}>{value}</div>
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

const PinRow = React.memo(({ pin, side, isHighlighted, onHover, isMobile }) => {
    const isLeft = side === 'left';

    return (
        <div
            onMouseEnter={() => onHover(pin)}
            onMouseLeave={() => onHover(null)}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '0.4rem' : '1rem',
                flexDirection: isLeft ? 'row-reverse' : 'row',
                padding: isMobile ? '0.4rem 0.25rem' : '0.4rem',
                borderRadius: '0.5rem',
                background: isHighlighted ? 'rgba(var(--primary-rgb), 0.15)' : 'transparent',
                border: isHighlighted ? '1px solid var(--primary)' : '1px solid transparent',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'help',
                opacity: pin.isBeginnerSafe === false ? 0.7 : 1,
            }}
        >
            <div style={{
                width: isMobile ? '10px' : '12px',
                height: isMobile ? '10px' : '12px',
                borderRadius: '3px',
                background: TYPE_COLORS[pin.type] || 'var(--text-muted)',
                boxShadow: `0 0 8px ${TYPE_COLORS[pin.type] || '#ccc'}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
            }}>
                {pin.isBeginnerSafe && <Zap size={isMobile ? 7 : 8} fill="white" color="white" />}
            </div>

            <div style={{
                fontSize: isMobile ? '0.75rem' : '0.85rem',
                fontWeight: 900,
                color: isHighlighted ? 'var(--primary)' : (pin.isBeginnerSafe === false ? 'var(--text-muted)' : 'var(--text)'),
                minWidth: isMobile ? '35px' : '40px',
                textAlign: isLeft ? 'right' : 'left',
                fontFamily: 'monospace',
                letterSpacing: '-0.02em',
                lineHeight: 1
            }}>{pin.id}</div>

            <div style={{
                fontSize: isMobile ? '0.65rem' : '0.7rem',
                color: isHighlighted ? 'var(--text)' : 'var(--text-muted)',
                flex: 1,
                textAlign: isLeft ? 'right' : 'left',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontWeight: 600,
                opacity: 0.8,
                lineHeight: 1
            }}>
                {pin.label}
            </div>
        </div>
    );
});

export default PinoutLab;
