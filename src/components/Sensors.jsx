import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { sensorCategories } from '../data/sensors';
import {
    Search, LayoutGrid, List, Settings, Cpu, Image as ImageIcon, Box, Edit, Plus, Filter, Info, Heart
} from 'lucide-react';
import SensorDetail from './SensorDetail';
import { useDashboardData } from '../hooks/useDashboardData';

// Specialized Component for Fail-Safe Hardware Visuals
function HardwareVisual({ src, name, viewMode, onClick, isSaved, onToggleSave }) {
    const [error, setError] = useState(false);
    const isMobile = window.innerWidth <= 820;

    return (
        <div
            onClick={onClick}
            style={{
                width: viewMode === 'grid' ? '100%' : (isMobile ? '120px' : '240px'),
                height: viewMode === 'grid' ? (isMobile ? '200px' : '200px') : (isMobile ? '120px' : '240px'),
                background: error ? 'rgba(var(--primary-rgb), 0.03)' : 'white',
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: viewMode === 'grid' ? '1px solid var(--border)' : 'none',
                borderRight: (viewMode === 'list' && !isMobile) ? '1px solid var(--border)' : 'none',
                transition: 'var(--transition)',
                cursor: 'pointer'
            }}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleSave();
                }}
                style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    background: isSaved ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255,255,255,0.8)',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '0.4rem',
                    cursor: 'pointer',
                    zIndex: 10,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
            >
                <Heart size={18} fill={isSaved ? '#ef4444' : 'none'} color={isSaved ? '#ef4444' : 'var(--text-muted)'} />
            </button>

            {!error ? (
                <img
                    src={src}
                    alt={name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '1.5rem'
                    }}
                    onError={() => setError(true)}
                />
            ) : (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    opacity: 0.4
                }}>
                    <Box size={48} strokeWidth={1} />
                    <span style={{ fontSize: '0.65rem', fontWeight: '800', letterSpacing: '0.05em' }}>IMAGE PENDING</span>
                </div>
            )}
        </div>
    );
}

const MobileSensorRow = ({ sensor, onClick, isSaved, onToggleSave }) => (
    <motion.div
        layout
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            padding: '1rem',
            borderBottom: '1px solid var(--border)',
            background: 'var(--surface)',
            borderRadius: '12px',
            marginBottom: '0.75rem'
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '10px',
                background: 'white',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
            }}>
                {sensor.image ? (
                    <img src={sensor.image} alt={sensor.name} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                ) : (
                    <Cpu size={24} color="var(--text-muted)" />
                )}
            </div>

            <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text)', marginBottom: '0.3rem' }}>{sensor.name}</h4>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '500' }}>{sensor.pins || 'N/A'}</span>
                    {sensor.level && (
                        <span style={{
                            fontSize: '0.7rem',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '0.5rem',
                            background: sensor.level === 'Beginner' ? 'rgba(34, 197, 94, 0.1)' :
                                sensor.level === 'Intermediate' ? 'rgba(251, 146, 60, 0.1)' :
                                    'rgba(239, 68, 68, 0.1)',
                            color: sensor.level === 'Beginner' ? 'rgb(34, 197, 94)' :
                                sensor.level === 'Intermediate' ? 'rgb(251, 146, 60)' :
                                    'rgb(239, 68, 68)',
                            fontWeight: '700'
                        }}>
                            {sensor.level}
                        </span>
                    )}
                </div>
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleSave();
                }}
                style={{
                    background: isSaved ? 'rgba(239, 68, 68, 0.1)' : 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    padding: '0.5rem',
                    cursor: 'pointer'
                }}
            >
                <Heart size={20} fill={isSaved ? '#ef4444' : 'none'} color={isSaved ? '#ef4444' : 'var(--text-muted)'} />
            </button>
        </div>

        <button
            onClick={onClick}
            style={{
                padding: '0.7rem',
                borderRadius: '8px',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
            }}
        >
            View More Details
            <Info size={16} />
        </button>
    </motion.div>
);

export default function Sensors({ isAdmin, setEditingSensor, setView, showOnlySaved = false, setShowOnlySaved }) {
    const isMobile = window.innerWidth <= 820;
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("grid"); // grid or list
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedLevel, setSelectedLevel] = useState("all");
    const [dbSensors, setDbSensors] = useState([]);
    const [loading, setLoading] = useState(true);
    const { savedSensors, toggleSaveItem } = useDashboardData();
    const [selectedSensorForView, setSelectedSensorForView] = useState(null);

    const handleEdit = (sensor, e) => {
        e.stopPropagation();
        if (setEditingSensor) {
            setEditingSensor(sensor);
            if (setView) setView('admin-edit-sensor');
        }
    };

    useEffect(() => {
        const fetchSensors = async () => {
            try {
                const { data, error } = await supabase
                    .from('sensors')
                    .select('*');

                if (error) throw error;
                if (data) setDbSensors(data);
            } catch (err) {
                console.error('Error fetching sensors:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchSensors();
    }, []);

    const filteredSensors = useMemo(() => {
        let result = dbSensors;

        // Filter by saved items if enabled
        if (showOnlySaved && savedSensors) {
            result = result.filter(s => savedSensors.includes(s.id));
        }

        if (selectedCategory !== "all") {
            const selectedCat = sensorCategories.find(c => c.id === selectedCategory);
            result = result.filter(s => {
                const sCat = String(s.category || "").toLowerCase();
                const sCatId = String(s.categoryId || s.category_id || "").toLowerCase();
                const target = String(selectedCategory).toLowerCase();
                const targetName = String(selectedCat?.name || "").toLowerCase();

                return sCat === target || sCatId === target || sCat === targetName;
            });
        }
        if (selectedLevel !== "all") {
            result = result.filter(s => s.level === selectedLevel);
        }
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter(s =>
                s.name.toLowerCase().includes(q) ||
                (s.pins && s.pins.toString().toLowerCase().includes(q))
            );
        }
        // Sort Alphabetically
        return result.sort((a, b) => a.name.localeCompare(b.name));
    }, [dbSensors, selectedCategory, selectedLevel, searchQuery, showOnlySaved, savedSensors]);

    return (
        <div className="sensors-page section-mesh bg-dots" style={{ padding: isMobile ? '1rem 0 8rem' : 'var(--app-py) 0 var(--app-py)' }}>
            {/* Technical App Header */}
            <div style={{ marginBottom: isMobile ? '2rem' : '1.5rem', textAlign: isMobile ? 'left' : 'center', paddingTop: isMobile ? '1rem' : '0' }}>
                <h2 style={{
                    fontSize: isMobile ? '2.25rem' : '2.5rem',
                    fontWeight: '900',
                    marginBottom: '0.6rem',
                    letterSpacing: '-0.04em',
                    color: 'var(--text)',
                    background: isMobile ? 'linear-gradient(135deg, var(--text) 0%, var(--primary) 100%)' : 'none',
                    WebkitBackgroundClip: isMobile ? 'text' : 'none',
                    WebkitTextFillColor: isMobile ? 'transparent' : 'inherit'
                }}>
                    {isMobile ? 'Hardware Registry' : 'Sensor Registry'}
                </h2>
                {isMobile && (
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5', fontWeight: '500', opacity: 0.9 }}>
                        The Definitive Guide to Industrial & Hobbyist Hardware.
                    </p>
                )}
            </div>

            <div style={{
                position: isMobile ? 'sticky' : 'relative',
                top: isMobile ? '64px' : '0',
                zIndex: 20,
                background: 'var(--background)',
                paddingTop: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid var(--border)'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    {/* Google Console Style Search */}
                    <div style={{ position: 'relative', width: '100%' }}>
                        <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Filter registry..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: isMobile ? '1rem 1rem 1rem 3rem' : '0.75rem 1rem 0.75rem 2.8rem',
                                borderRadius: isMobile ? '12px' : '8px',
                                border: '1px solid var(--border)',
                                background: 'var(--surface)',
                                color: 'var(--text)',
                                fontSize: isMobile ? '1.05rem' : '1rem',
                                fontWeight: isMobile ? '500' : 'normal',
                                outline: 'none',
                                boxShadow: 'none'
                            }}
                        />
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        overflowX: 'auto',
                        paddingBottom: '1rem',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        maskImage: isMobile ? 'linear-gradient(to right, black 85%, transparent 100%)' : 'none'
                    }}>
                        <button
                            onClick={() => setSelectedCategory("all")}
                            style={{
                                padding: isMobile ? '0.7rem 1.5rem' : '0.5rem 1.25rem',
                                borderRadius: isMobile ? '14px' : '12px',
                                border: selectedCategory === "all" ? '2px solid var(--primary)' : '1px solid var(--border)',
                                background: selectedCategory === "all" ? 'var(--primary)' : 'var(--surface)',
                                color: selectedCategory === "all" ? 'white' : 'var(--text-muted)',
                                fontWeight: '800',
                                fontSize: isMobile ? '0.9rem' : '0.8rem',
                                whiteSpace: 'nowrap',
                                flexShrink: 0,
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: selectedCategory === "all" ? '0 4px 12px rgba(var(--primary-rgb), 0.3)' : 'none'
                            }}
                        >
                            All
                        </button>
                        {sensorCategories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                style={{
                                    padding: isMobile ? '0.7rem 1.5rem' : '0.5rem 1.25rem',
                                    borderRadius: isMobile ? '14px' : '12px',
                                    border: selectedCategory === cat.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                                    background: selectedCategory === cat.id ? 'var(--primary)' : 'var(--surface)',
                                    color: selectedCategory === cat.id ? 'white' : 'var(--text-muted)',
                                    fontWeight: '800',
                                    fontSize: isMobile ? '0.9rem' : '0.8rem',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: selectedCategory === cat.id ? '0 4px 12px rgba(var(--primary-rgb), 0.3)' : 'none'
                                }}
                            >
                                <span style={{ fontSize: '1rem' }}>{cat.emoji}</span>
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Minimalist Grid Display */}
            {
                isMobile ? (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: '6rem', // Ensure bottom nav doesn't cover last item
                        minHeight: '60vh'      // Prevent collapse
                    }}>
                        <AnimatePresence mode="popLayout">
                            {filteredSensors.map((sensor) => (
                                <MobileSensorRow
                                    key={sensor.id || sensor.name}
                                    sensor={sensor}
                                    onClick={() => setSelectedSensorForView(sensor)}
                                    isSaved={(savedSensors || []).includes(sensor.id)}
                                    onToggleSave={() => toggleSaveItem('sensor', sensor.id)}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className={viewMode === 'grid' ? (isMobile ? 'grid grid-2-mobile' : 'grid grid-3') : ''} style={{ gap: isMobile ? '0.75rem' : '2.5rem', display: viewMode === 'list' ? 'flex' : 'grid', flexDirection: 'column' }}>
                        <AnimatePresence mode="popLayout">
                            {filteredSensors.map((sensor) => (
                                <motion.div
                                    layout
                                    key={sensor.id || sensor.name}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    className="glass-plus"
                                    style={{
                                        padding: '0',
                                        borderRadius: isMobile ? '1.25rem' : '1.5rem',
                                        display: 'flex',
                                        flexDirection: viewMode === 'grid' ? 'column' : 'row',
                                        alignItems: viewMode === 'grid' ? 'stretch' : 'center',
                                        background: 'rgba(var(--surface-rgb), 0.5)',
                                        border: '1px solid var(--border)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease'
                                    }}
                                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                >
                                    <HardwareVisual
                                        src={sensor.image}
                                        name={sensor.name}
                                        viewMode={viewMode}
                                        onClick={() => setSelectedSensorForView(sensor)}
                                        isSaved={(savedSensors || []).includes(sensor.id)}
                                        onToggleSave={() => toggleSaveItem('sensor', sensor.id)}
                                    />

                                    {/* Essential Info Section */}
                                    <div
                                        onClick={() => setSelectedSensorForView(sensor)}
                                        style={{
                                            flex: 1,
                                            padding: '1.5rem',
                                            textAlign: viewMode === 'grid' ? 'center' : 'left',
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {isAdmin && (
                                            <button
                                                onClick={(e) => handleEdit(sensor, e)}
                                                className="btn-icon hover-lift"
                                                style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'white', borderRadius: '0.75rem', width: '36px', height: '36px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}
                                            >
                                                <Edit size={16} />
                                            </button>
                                        )}

                                        <h3 style={{
                                            fontSize: isMobile ? '1rem' : '1.1rem',
                                            fontWeight: '900',
                                            marginBottom: '0.3rem',
                                            letterSpacing: 'var(--ls-tight)',
                                            color: 'var(--text)',
                                            paddingRight: isAdmin ? '2.5rem' : '0'
                                        }}>
                                            {sensor.name}
                                        </h3>

                                        {/* Category and Level Badges */}
                                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap', justifyContent: viewMode === 'grid' ? 'center' : 'flex-start' }}>
                                            {sensor.emoji && (
                                                <span style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.3rem',
                                                    background: 'rgba(var(--primary-rgb), 0.08)',
                                                    padding: '0.3rem 0.8rem',
                                                    borderRadius: '1.5rem',
                                                    fontSize: '0.7rem',
                                                    fontWeight: '800',
                                                    color: 'var(--primary)'
                                                }}>
                                                    {sensor.emoji}
                                                </span>
                                            )}
                                            {sensor.level && (
                                                <span style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    background: sensor.level === 'Beginner' ? 'rgba(34, 197, 94, 0.1)' :
                                                        sensor.level === 'Intermediate' ? 'rgba(59, 130, 246, 0.1)' :
                                                            'rgba(239, 68, 68, 0.1)',
                                                    color: sensor.level === 'Beginner' ? 'rgb(34, 197, 94)' :
                                                        sensor.level === 'Intermediate' ? 'rgb(59, 130, 246)' :
                                                            'rgb(239, 68, 68)',
                                                    padding: '0.3rem 0.8rem',
                                                    borderRadius: '1.5rem',
                                                    fontSize: '0.7rem',
                                                    fontWeight: '800'
                                                }}>
                                                    {sensor.level}
                                                </span>
                                            )}
                                        </div>

                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.3rem',
                                            background: 'rgba(var(--primary-rgb), 0.05)',
                                            padding: isMobile ? '0.25rem 0.75rem' : '0.4rem 1.2rem',
                                            borderRadius: '2rem',
                                            fontSize: '0.65rem',
                                            fontWeight: '800',
                                            color: 'var(--primary)',
                                            width: 'fit-content',
                                            margin: isMobile ? '0' : '0 auto'
                                        }}>
                                            <Cpu size={isMobile ? 10 : 12} strokeWidth={2.5} /> {sensor.pins || "N/A"}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )
            }

            {/* Empty State */}
            {
                filteredSensors.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '10rem 0', opacity: 0.5 }}>
                        <Search size={60} style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900' }}>No Hardware Matches</h3>
                        <p>Try searching for a different component or pin configuration.</p>
                    </div>
                )
            }

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedSensorForView && (
                    <SensorDetail
                        sensor={selectedSensorForView}
                        onClose={() => setSelectedSensorForView(null)}
                    />
                )}
            </AnimatePresence>
        </div >

    );
}
