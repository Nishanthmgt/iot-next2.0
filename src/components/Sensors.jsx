import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';
import { sensorCategories, sensors } from '../data/sensors';
import {
    Search, LayoutGrid, List, Settings, Cpu, Image as ImageIcon, Box, Edit, Plus, Filter, Info, Heart, RefreshCw, AlertCircle, Target
} from 'lucide-react';
const SensorDetail = React.lazy(() => import('./SensorDetail'));
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
                    <img
                        src={sensor.image}
                        alt={sensor.name}
                        style={{ width: '85%', height: '85%', objectFit: 'contain' }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.children[1].style.display = 'block';
                        }}
                    />
                ) : null}
                <div style={{ display: sensor.image ? 'none' : 'block' }}>
                    <Cpu size={24} color="var(--text-muted)" />
                </div>
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
    const [visibleCount, setVisibleCount] = useState(24);
    const [dbSensors, setDbSensors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);
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
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from('sensors')
                    .select('*');

                if (error) throw error;
                if (data) setDbSensors(data);
                setFetchError(null);
            } catch (err) {
                console.error('Error fetching sensors:', err);
                setFetchError(err.message || 'Failed to connect to hardware database.');
            } finally {
                setLoading(false);
            }
        };
        fetchSensors();
    }, []);

    const filteredSensors = useMemo(() => {
        // Strictly Database-Driven: Only show sensors that exist in Supabase
        let result = (dbSensors || []).map(s => ({ ...s, isFromCloud: true }));

        // Filter by saved items if enabled
        if (showOnlySaved && savedSensors) {
            result = result.filter(s => (savedSensors || []).includes(s.id));
        }

        if (selectedCategory && selectedCategory !== "all") {
            const selectedCat = (sensorCategories || []).find(c => c.id === selectedCategory);
            result = result.filter(s => {
                const sCat = String(s.category || "").toLowerCase();
                const sCatId = String(s.categoryId || s.category_id || "").toLowerCase();
                const target = String(selectedCategory).toLowerCase();
                const targetName = String(selectedCat?.name || "").toLowerCase();

                return sCat === target || sCatId === target || sCat === targetName;
            });
        }

        if (selectedLevel && selectedLevel !== "all") {
            result = result.filter(s => s.level === selectedLevel);
        }

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter(s => {
                const name = String(s.name || "").toLowerCase();
                const desc = String(s.description || "").toLowerCase();
                const pins = String(s.pins || "").toLowerCase();
                return name.includes(q) || desc.includes(q) || pins.includes(q);
            });
        }

        // Sort Alphabetically, fallback to empty string if name missing
        return result.sort((a, b) => {
            const nameA = String(a.name || "").toLowerCase();
            const nameB = String(b.name || "").toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }, [dbSensors, selectedCategory, selectedLevel, searchQuery, showOnlySaved, savedSensors]);

    return (
        <section className="section-mesh" style={{ padding: isMobile ? '0' : '2rem 1rem', background: 'var(--background)' }}>
            <Helmet>
                <title>IoT Hardware Registry | 120+ Detailed Sensors & Modules | IoTNext</title>
                <meta name="description" content="Explore the definitive hardware documentation for IoT engineering. Pinouts, specifications, and working principles for 120+ sensors." />
                <link rel="canonical" href="https://iotnext.store/sensors" />
            </Helmet>
            {/* Technical Header Section */}
            <div style={{ padding: isMobile ? '1.5rem 1rem' : '4rem 0 2rem 0' }}>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: '1.5rem' }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <span className="badge badge-beginner" style={{ background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', border: '1px solid var(--primary)', fontSize: '0.7rem' }}>
                                Engineering Archive v4.0
                            </span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                {filteredSensors.length} {filteredSensors.length === 1 ? 'Archive' : 'Archives'} Loaded
                                {loading && <RefreshCw size={12} className="animate-spin" />}
                            </span>
                        </div>
                        <h1 style={{ fontSize: isMobile ? '2.5rem' : '4.5rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.5rem' }}>
                            Hardware <span className="text-gradient">Registry</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: '500', maxWidth: '600px', lineHeight: '1.4' }}>
                            A high-fidelity technical repository of {sensors?.length || 120}+ IoT sensors, actuators and modules.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', width: isMobile ? '100%' : 'auto' }}>
                        {isMobile ? (
                            <div className="glass" style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', padding: '0 1rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                                <Search size={18} color="var(--text-muted)" />
                                <input
                                    type="text"
                                    placeholder="Search keywords..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--text)',
                                        padding: '0.875rem 0.5rem',
                                        fontSize: '0.9rem',
                                        width: '100%',
                                        outline: 'none'
                                    }}
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)' }}>×</button>
                                )}
                            </div>
                        ) : (
                            <div className="glass" style={{ width: '300px', position: 'relative', display: 'flex', alignItems: 'center', padding: '0 1.25rem', borderRadius: '1.25rem', border: '1px solid var(--border)' }}>
                                <Search size={20} color="var(--primary)" />
                                <input
                                    type="text"
                                    placeholder="Search registry..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--text)',
                                        padding: '1rem 0.75rem',
                                        fontSize: '0.95rem',
                                        width: '100%',
                                        outline: 'none',
                                        fontWeight: '500'
                                    }}
                                />
                            </div>
                        )}
                        {isAdmin && !isMobile && (
                            <button
                                className="btn btn-primary btn-primary-shiny"
                                style={{ borderRadius: '1.25rem', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
                                onClick={() => { setEditingSensor(null); setView('admin-sensor-add'); }}
                            >
                                <Plus size={20} /> Add Hardware
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div style={{
                position: isMobile ? 'sticky' : 'relative',
                top: isMobile ? '64px' : '0',
                zIndex: 10,
                background: 'var(--background)',
                paddingTop: '0.5rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border)'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '0.75rem',
                    overflowX: 'auto',
                    padding: isMobile ? '0 1rem' : '0',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
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

            {loading ? (
                <div style={{ textAlign: 'center', padding: '10rem 0' }}>
                    <div className="iot-loader" style={{ margin: '0 auto 2rem' }}>
                        <div className="iot-loader-inner"></div>
                    </div>
                    <p style={{ letterSpacing: '0.1em', fontWeight: '800', color: 'var(--primary)', fontSize: '0.8rem' }}>FETCHING HARDWARE ARCHIVES...</p>
                </div>
            ) : fetchError ? (
                <div style={{ textAlign: 'center', padding: '10rem 1.5rem' }}>
                    <AlertCircle size={60} color="#ef4444" style={{ marginBottom: '1.5rem', opacity: 0.6 }} />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '900', mb: '1rem' }}>Connection Failed</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{fetchError}</p>
                    <button onClick={() => window.location.reload()} className="btn btn-primary">Retry Connection</button>
                </div>
            ) : filteredSensors.length === 0 ? (
                <div style={{ textAlign: 'center', padding: isMobile ? '5rem 1.5rem' : '10rem 0' }}>
                    <Search size={60} style={{ marginBottom: '1.5rem', opacity: 0.3 }} />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--text)', marginBottom: '0.5rem' }}>No Hardware Matches</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        {dbSensors.length === 0
                            ? "Your database appears to be empty or restricted."
                            : "Try searching for a different component or category."}
                    </p>

                    {isAdmin && dbSensors.length === 0 && (
                        <div className="glass" style={{ maxWidth: '500px', margin: '0 auto', padding: '2rem', border: '1px solid rgba(var(--primary-rgb), 0.2)', textAlign: 'left' }}>
                            <h4 style={{ color: 'var(--primary)', fontWeight: '900', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Target size={18} /> Admin Diagnostics
                            </h4>
                            <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>We found <b>0</b> sensors in the <code>sensors</code> table. If your table has data in the dashboard, check your <b>RLS (Row Level Security)</b> policies.</p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <a href="https://supabase.com/dashboard/project/nojxxrujgspvwopwfobq/editor/17608" target="_blank" className="btn btn-outline" style={{ fontSize: '0.7rem' }}>Open Editor</a>
                                <button onClick={() => setView('admin')} className="btn btn-outline" style={{ fontSize: '0.7rem' }}>Hardware Sync</button>
                            </div>
                        </div>
                    )}

                    {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all' || showOnlySaved) && (
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setSelectedLevel('all');
                                if (setShowOnlySaved) setShowOnlySaved(false);
                            }}
                            className="btn btn-outline"
                            style={{ borderRadius: '1rem', padding: '0.75rem 1.5rem' }}
                        >
                            Clear All Filters
                        </button>
                    )}
                </div>
            ) : isMobile ? (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '6rem',
                    minHeight: '60vh'
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

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedSensorForView && (
                    <React.Suspense fallback={<div style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.5)' }} />}>
                        <SensorDetail
                            sensor={selectedSensorForView}
                            onClose={() => setSelectedSensorForView(null)}
                        />
                    </React.Suspense>
                )}
            </AnimatePresence>
        </section >
    );
}
