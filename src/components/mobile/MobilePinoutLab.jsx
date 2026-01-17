import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../../lib/supabase';
import {
    Search, ChevronLeft, ChevronRight, Cpu, Zap, Activity, Heart,
    Filter, X, ArrowLeft, Layers, Grid
} from 'lucide-react';
import { BOARDS } from '../../data/boards';
import { BOARD_FAMILIES } from '../../utils/boardFamilies';
import { useDashboardData } from '../../hooks/useDashboardData';

const PIN_COLORS = {
    power: '#fbbf24', // Yellow/Amber
    gnd: '#fbbf24',   // Yellow/Amber (Shared with power as per ref)
    reset: '#ef4444', // Red
    adc: '#4ade80',   // Green
    pwm: '#f472b6',   // Pink
    io: '#94a3b8',    // Grey (Digital)
    uart: '#fb923c',  // Orange
    i2c: '#818cf8',   // Indigo
    spi: '#a78bfa',   // Violet
    usb: '#3b82f6',   // Blue
    default: '#94a3b8'
};

const MobilePinoutLab = ({ initialFamily = 'all', showOnlySaved, setShowOnlySaved, setView }) => {
    const { savedBoards, toggleSaveItem } = useDashboardData();
    const [search, setSearch] = useState('');
    const [viewMode, setViewMode] = useState('families'); // 'families', 'list', 'detail'
    const [selectedFamily, setSelectedFamily] = useState(null);
    const [selectedBoard, setSelectedBoard] = useState(null);

    // Data Loading
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
                specs: (dynamicBoard.specs && Object.keys(dynamicBoard.specs).length > 0) ? dynamicBoard.specs : staticBoard.specs,
                pins: (dynamicBoard.pins && dynamicBoard.pins.length > 0) ? dynamicBoard.pins : staticBoard.pins,
                guidelines: (dynamicBoard.guidelines && Object.keys(dynamicBoard.guidelines).length > 0) ? dynamicBoard.guidelines : staticBoard.guidelines
            };
        });
        return merged;
    }, [dynamicBoards]);

    // Filtering
    const filteredBoards = Object.entries(mergedBoards)
        .filter(([id, b]) => {
            if (!b || !b.name) return false;
            if (showOnlySaved && savedBoards && !savedBoards.includes(id)) return false;

            // If in list mode, filter by selected family
            if (viewMode === 'list' && selectedFamily) {
                if (b.family !== selectedFamily.name && b.family !== selectedFamily.id) return false;
            }

            // Search override: if searching, show matches from ALL families
            if (search.length > 2) return b.name.toLowerCase().includes(search.toLowerCase());

            return true;
        });

    const handleFamilyClick = (family) => {
        setSelectedFamily(family);
        setViewMode('list');
        setSearch('');
    };

    const handleBoardClick = (board) => {
        setSelectedBoard(board);
        setViewMode('detail');
    };

    const handleBack = () => {
        if (viewMode === 'detail') {
            setViewMode('list');
            setSelectedBoard(null);
        } else if (viewMode === 'list') {
            if (search.length > 0) setSearch('');
            else {
                setViewMode('families');
                setSelectedFamily(null);
            }
        } else {
            setView('home'); // Exit to home
        }
    };

    // --- RENDER HELPERS ---

    const renderFamilies = () => (
        <div style={{ padding: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {BOARD_FAMILIES.filter(f => f.id !== 'all').map(family => (
                <motion.div
                    key={family.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleFamilyClick(family)}
                    style={{
                        background: 'var(--surface)',
                        borderRadius: '1.5rem',
                        padding: '1.5rem',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        border: '1px solid var(--border)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                        gap: '1rem', aspectRatio: '1/1'
                    }}
                >
                    <div style={{
                        width: '60px', height: '60px', borderRadius: '50%',
                        background: `linear-gradient(135deg, ${family.color}20, ${family.color}05)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: family.color, overflow: 'hidden', padding: '12px'
                    }}>
                        {family.logo ? (
                            <img
                                src={family.logo}
                                alt={family.name}
                                style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                            />
                        ) : null}
                        <Cpu size={32} style={{ display: family.logo ? 'none' : 'block' }} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '800', margin: 0 }}>{family.name}</h3>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Browse Boards</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );

    const renderList = () => (
        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>
                {search ? 'Search Results' : (selectedFamily?.name || 'All Boards')}
            </h2>
            {filteredBoards.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                    No boards found.
                </div>
            ) : (
                filteredBoards.map(([id, board]) => (
                    <motion.div
                        key={id}
                        layoutId={`board-${id}`}
                        onClick={() => handleBoardClick({ ...board, id })}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            background: 'var(--surface)', padding: '1rem', borderRadius: '1rem',
                            border: '1px solid var(--border)', display: 'flex', alignItems: 'center',
                            gap: '1rem', cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            width: '50px', height: '50px', borderRadius: '12px',
                            background: 'var(--background)', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', fontWeight: '800', color: 'var(--text-muted)',
                            fontSize: '0.8rem'
                        }}>
                            {board.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.2rem', color: 'var(--text)' }}>{board.name}</h4>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{board.family || 'Generic'}</p>
                        </div>
                        <ChevronRight size={20} color="var(--text-muted)" />
                    </motion.div>
                ))
            )}
        </div>
    );

    // If viewing full details, we essentially want the PinoutDetail view.
    // Since we don't have a standalone MobilePinoutDetail component yet, 
    // we can either create it or dangerously render PinoutLab's detail section.
    // For now, let's wrap the PinoutDetail component logic here or import if valid.
    // Assuming we can re-use the desktop logic but styled for mobile?
    // Actually, user said "pinout boards click correct ahh full data varala" meaning existing specific implementation was bad.
    // Let's render a proper detail view here.

    const renderDetail = () => {
        if (!selectedBoard) return null;
        return (
            <div style={{ paddingBottom: '100px', background: 'var(--background)', minHeight: '100vh' }}>
                {/* Pinout Diagram/Image Area */}
                <div style={{
                    height: '300px', background: 'var(--surface)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderBottom: '1px solid var(--border)', position: 'relative',
                    padding: '2rem'
                }}>
                    {/* Placeholder for SVG - ideally we reuse the SVG component */}
                    <div style={{
                        width: '100%', height: '100%',
                        background: 'url(https://via.placeholder.com/400x300?text=Pinout+Diagram)',
                        backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                        opacity: 0.5
                    }} />
                    <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontSize: '2rem', fontWeight: '900', color: 'var(--text)' }}>
                        {selectedBoard.name}
                    </div>
                </div>

                {/* Visual Pinout Diagram */}
                <div style={{ padding: '0 1.5rem 2rem 1.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Pinout Diagram</h3>

                    {selectedBoard.pins && selectedBoard.pins.length > 0 ? (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2rem',
                            background: '#000', // Black background for the diagram area
                            padding: '1.5rem 0.5rem',
                            borderRadius: '1.5rem',
                            border: '1px solid #333'
                        }}>
                            {/* Logic to split pins: usually Power/Analog (left) and Digital (right) 
                                but simplistic 50/50 split works for visual symmetry if data isn't strictly ordered. 
                                Adjust split point if needed. */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {/* Left Column: Label -> ID -> Color */}
                                {selectedBoard.pins.slice(0, Math.ceil(selectedBoard.pins.length / 2)).map((pin, idx) => {
                                    const color = PIN_COLORS[pin.type] || PIN_COLORS.default;
                                    return (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.8rem' }}>
                                            <span style={{ fontSize: '0.7rem', color: '#6b7280', textAlign: 'right' }}>
                                                {pin.label?.replace(pin.id, '').trim() || (pin.functions?.[0]) || 'PIN'}
                                            </span>
                                            <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#fff' }}>{pin.id}</span>
                                            <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: color, boxShadow: `0 0 8px ${color}60` }} />
                                        </div>
                                    );
                                })}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {/* Right Column: Color -> ID -> Label */}
                                {selectedBoard.pins.slice(Math.ceil(selectedBoard.pins.length / 2)).map((pin, idx) => {
                                    const color = PIN_COLORS[pin.type] || PIN_COLORS.default;
                                    return (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0.8rem' }}>
                                            <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: color, boxShadow: `0 0 8px ${color}60` }} />
                                            <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#fff' }}>{pin.id}</span>
                                            <span style={{ fontSize: '0.7rem', color: '#6b7280', textAlign: 'left' }}>
                                                {pin.label?.replace(pin.id, '').trim() || (pin.functions?.[0]) || 'PIN'}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', background: 'var(--surface)', borderRadius: '1rem' }}>
                            Pinout diagram data unavailable.
                        </div>
                    )}
                </div>

                {/* Specs */}
                <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1rem' }}>Technical Specs</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {selectedBoard.specs && Object.entries(selectedBoard.specs).map(([key, val]) => (
                            <div key={key} style={{ background: 'var(--surface)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{key}</div>
                                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text)' }}>{val}</div>
                            </div>
                        ))}
                        {!selectedBoard.specs && (
                            <div style={{ gridColumn: '1/-1', color: 'var(--text-muted)', fontStyle: 'italic' }}>Detailed specs coming soon for this board.</div>
                        )}
                    </div>
                </div>

                {/* Guidelines */}
                {selectedBoard.guidelines && (
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1rem' }}>Hardware Guidelines</h3>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            {Object.entries(selectedBoard.guidelines).map(([key, val]) => (
                                <div key={key} style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: '1rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#f59e0b', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>{key}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.4' }}>{val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}


            </div>
        );
    };

    return (
        <div style={{ background: 'var(--background)', minHeight: '100vh', paddingBottom: '80px' }}>
            <Helmet><title>Hardware | IoTNext</title></Helmet>

            {/* Header */}
            <div style={{
                position: 'sticky', top: 0, zIndex: 50,
                background: 'rgba(var(--background-rgb), 0.9)', backdropFilter: 'blur(16px)',
                borderBottom: '1px solid var(--border)',
                padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem'
            }}>
                {(viewMode !== 'families' || search.length > 0) ? (
                    <button onClick={handleBack} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 0, display: 'flex' }}>
                        <ArrowLeft size={24} />
                    </button>
                ) : (
                    <Layers size={24} color="var(--primary)" />
                )}

                {viewMode === 'detail' ? (
                    <h2 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0 }}>Board Details</h2>
                ) : (
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            placeholder="Search boards..."
                            value={search} onChange={e => { setSearch(e.target.value); if (e.target.value.length > 0) setViewMode('list'); }}
                            style={{
                                width: '100%', padding: '0.75rem 1rem 0.75rem 3rem',
                                borderRadius: '1rem', border: 'none', background: 'var(--surface)',
                                color: 'var(--text)', fontSize: '0.95rem', outline: 'none'
                            }}
                        />
                    </div>
                )}
            </div>

            {/* Content */}
            <div style={{ paddingTop: '1rem' }}>
                {viewMode === 'families' && !search && renderFamilies()}
                {viewMode === 'list' && renderList()}
                {viewMode === 'detail' && renderDetail()}
            </div>
        </div>
    );
};

export default MobilePinoutLab;
