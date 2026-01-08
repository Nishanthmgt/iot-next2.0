import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { sensorCategories } from '../data/sensors';
import {
    Search, LayoutGrid, List, Settings, Cpu, Image as ImageIcon, Box, Edit, Plus, Filter, Info
} from 'lucide-react';
import SensorDetail from './SensorDetail';

// Specialized Component for Fail-Safe Hardware Visuals
function HardwareVisual({ src, name, viewMode, onClick }) {
    const [error, setError] = useState(false);

    return (
        <div
            onClick={onClick}
            style={{
                width: viewMode === 'grid' ? '100%' : '240px',
                height: viewMode === 'grid' ? '200px' : '240px',
                background: error ? 'rgba(var(--primary-rgb), 0.03)' : 'white',
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: viewMode === 'grid' ? '1px solid var(--border)' : 'none',
                borderRight: viewMode === 'list' ? '1px solid var(--border)' : 'none',
                transition: 'var(--transition)',
                cursor: 'pointer'
            }}
        >
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

export default function Sensors({ isAdmin, setEditingSensor, setView }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("grid"); // grid or list
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedLevel, setSelectedLevel] = useState("all");
    const [dbSensors, setDbSensors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSensorForView, setSelectedSensorForView] = useState(null);

    useEffect(() => {
        const fetchSensors = async () => {
            try {
                const { data, error } = await supabase
                    .from('sensors')
                    .select('*')
                    .order('name', { ascending: true });

                if (!error && data) {
                    setDbSensors(data);
                }
            } catch (err) {
                console.warn('Supabase sensor fetch failed, using static data');
            } finally {
                setLoading(false);
            }
        };
        fetchSensors();
    }, []);

    const sensors = useMemo(() => {
        // App is now purely dynamic based on Supabase
        return dbSensors;
    }, [dbSensors]);

    const filteredSensors = useMemo(() => {
        return sensors.filter(s => {
            const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (s.pins && s.pins.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()));

            // Improved category matching: check both categoryId and the older category name field
            const matchesCategory = selectedCategory === "all" ||
                s.categoryId === selectedCategory ||
                s.category?.toLowerCase() === selectedCategory;

            const matchesLevel = selectedLevel === "all" || s.level === selectedLevel;

            return matchesSearch && matchesCategory && matchesLevel;
        });
    }, [searchQuery, selectedCategory, selectedLevel, sensors]);

    const handleEdit = (sensor, e) => {
        e.stopPropagation();
        setEditingSensor(sensor);
        setView('admin-sensor-edit');
    };

    return (
        <div className="sensors-page section-mesh bg-dots" style={{ padding: '6rem 0 10rem' }}>
            <div className="container">
                {/* Ultra-Minimalist Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                background: 'rgba(var(--primary-rgb), 0.08)',
                                padding: '0.6rem 1.5rem',
                                borderRadius: '3rem',
                                marginBottom: '1.5rem',
                                color: 'var(--primary)',
                                fontWeight: '900',
                                letterSpacing: '0.1em',
                                fontSize: '0.65rem',
                                border: '1px solid rgba(var(--primary-rgb), 0.15)'
                            }}
                        >
                            <Settings className="animate-spin-slow" size={14} /> HARDWARE CATALOG
                        </motion.div>

                        <h1 style={{ fontSize: '3.5rem', fontWeight: '950', maxWidth: '900px', lineHeight: 1.1, margin: '0 auto 1.5rem', letterSpacing: '-0.04em' }}>
                            Visual <span className="text-gradient">Component Registry</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', fontWeight: '500', lineHeight: '1.6', marginBottom: isAdmin ? '2rem' : '0' }}>
                            Unified hardware identifiers for IoT engineering.
                        </p>

                        {isAdmin && (
                            <motion.button
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                onClick={() => { setEditingSensor(null); setView('admin-sensor-add'); }}
                                className="btn btn-primary btn-primary-shiny"
                                style={{ padding: '1rem 2.5rem', borderRadius: '3rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800' }}
                            >
                                <Plus size={20} /> REGISTER NEW HARDWARE
                            </motion.button>
                        )}
                    </div>
                </motion.div>

                {/* Category Filter Pills */}
                <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                    <button
                        onClick={() => setSelectedCategory("all")}
                        style={{
                            padding: '0.6rem 1.5rem',
                            borderRadius: '2rem',
                            border: '1px solid var(--border)',
                            background: selectedCategory === "all" ? 'var(--primary)' : 'rgba(var(--surface-rgb), 0.6)',
                            color: selectedCategory === "all" ? 'white' : 'var(--text)',
                            fontWeight: '800',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        All Categories
                    </button>
                    {sensorCategories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            style={{
                                padding: '0.6rem 1.5rem',
                                borderRadius: '2rem',
                                border: '1px solid var(--border)',
                                background: selectedCategory === cat.id ? 'var(--primary)' : 'rgba(var(--surface-rgb), 0.6)',
                                color: selectedCategory === cat.id ? 'white' : 'var(--text)',
                                fontWeight: '800',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <span>{cat.emoji}</span>
                            <span>{cat.name}</span>
                        </button>
                    ))}
                </div>

                {/* Streamlined Control Bar */}
                <div className="glass-plus" style={{
                    padding: '0.6rem',
                    borderRadius: '1.25rem',
                    marginBottom: '4rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    alignItems: 'center',
                    border: '1px solid var(--border)',
                    background: 'rgba(var(--surface-rgb), 0.6)',
                    maxWidth: '800px',
                    margin: '0 auto 4rem'
                }}>
                    <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
                        <Search style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)', opacity: 0.5 }} size={16} />
                        <input
                            type="text"
                            placeholder="Search hardware..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.8rem 1rem 0.8rem 3.2rem',
                                borderRadius: '1rem',
                                border: '1px solid var(--border)',
                                background: 'var(--background)',
                                color: 'var(--text)',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                outline: 'none'
                            }}
                        />
                    </div>

                    {/* Level Filter */}
                    <div style={{ display: 'flex', gap: '0.3rem', borderLeft: '1px solid var(--border)', paddingLeft: '0.75rem' }}>
                        {['all', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
                            <button
                                key={level}
                                onClick={() => setSelectedLevel(level)}
                                style={{
                                    padding: '0.6rem 1rem',
                                    borderRadius: '0.8rem',
                                    background: selectedLevel === level ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                                    color: selectedLevel === level ? 'var(--primary)' : 'var(--text-muted)',
                                    fontSize: '0.8rem',
                                    fontWeight: '700',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {level === 'all' ? 'All' : level}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '0.3rem', marginLeft: 'auto', borderLeft: '1px solid var(--border)', paddingLeft: '0.75rem' }}>
                        <button
                            onClick={() => setViewMode('grid')}
                            style={{
                                padding: '0.6rem',
                                borderRadius: '0.8rem',
                                background: viewMode === 'grid' ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                                color: viewMode === 'grid' ? 'var(--primary)' : 'var(--text-muted)'
                            }}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            style={{
                                padding: '0.6rem',
                                borderRadius: '0.8rem',
                                background: viewMode === 'list' ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                                color: viewMode === 'list' ? 'var(--primary)' : 'var(--text-muted)'
                            }}
                        >
                            <List size={18} />
                        </button>
                    </div>
                </div>

                {/* Minimalist Grid Display */}
                <div className={viewMode === 'grid' ? 'grid grid-3' : ''} style={{ gap: '2.5rem', display: viewMode === 'list' ? 'flex' : 'grid', flexDirection: 'column' }}>
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
                                    borderRadius: '1.5rem',
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

                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '0.4rem', letterSpacing: '-0.01em', color: 'var(--text)', paddingRight: isAdmin ? '2.5rem' : '0' }}>
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
                                        gap: '0.4rem',
                                        background: 'rgba(var(--primary-rgb), 0.05)',
                                        padding: '0.4rem 1.2rem',
                                        borderRadius: '2rem',
                                        fontSize: '0.75rem',
                                        fontWeight: '800',
                                        color: 'var(--primary)'
                                    }}>
                                        <Cpu size={12} strokeWidth={2.5} /> {sensor.pins || "N/A"}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredSensors.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '10rem 0', opacity: 0.5 }}>
                        <Search size={60} style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900' }}>No Hardware Matches</h3>
                        <p>Try searching for a different component or pin configuration.</p>
                    </div>
                )}

                {/* Detail Modal */}
                <AnimatePresence>
                    {selectedSensorForView && (
                        <SensorDetail
                            sensor={selectedSensorForView}
                            onClose={() => setSelectedSensorForView(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
