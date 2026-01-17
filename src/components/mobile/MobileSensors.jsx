import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    Search, Filter, Heart, Scan, Grid, List as ListIcon, Zap, Target, Activity,
    Thermometer, Wifi, Cpu, Eye, ArrowLeft, SlidersHorizontal, RefreshCw
} from 'lucide-react';
import { sensorCategories } from '../../data/sensors';
import { useDashboardData } from '../../hooks/useDashboardData';
import { supabase } from '../../lib/supabase';

const MobileSensors = ({ onSelectSensor, setView }) => {
    const { savedSensors, toggleSaveItem } = useDashboardData();
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [viewMode, setViewMode] = useState('list'); // Default to 'list' for one-by-one view

    // Dynamic Data State
    const [sensors, setSensors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSensors = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from('sensors')
                    .select('*');

                if (error) throw error;
                if (data) setSensors(data);
            } catch (err) {
                console.error("Error fetching mobile sensors:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchSensors();
    }, []);

    // Filter Logic
    const filteredSensors = useMemo(() => {
        return sensors.filter(sensor => {
            const matchesSearch = String(sensor.name || "").toLowerCase().includes(search.toLowerCase()) ||
                String(sensor.id || "").toLowerCase().includes(search.toLowerCase());

            if (selectedCategory === 'All') return matchesSearch;

            // Loose matching for Category
            const sCat = String(sensor.category || "").toLowerCase();
            const sCatId = String(sensor.categoryId || sensor.category_id || "").toLowerCase();
            const target = selectedCategory.toLowerCase();
            const targetParts = target.split(' ')[0]; // Match "Environmental" from "Environmental Sensors"

            // Check exact, ID, or partial match (e.g. "Environmental" inside "Environmental Sensors")
            const matchesCategory =
                sCat === target ||
                sCatId === target ||
                sCat.includes(targetParts) ||
                target.includes(sCat);

            return matchesSearch && matchesCategory;
        }).sort((a, b) => a.name.localeCompare(b.name)); // A-Z Sorting
    }, [search, selectedCategory, sensors]);

    // Categories with Icons (Helper) - Uses Category ID
    const getCategoryIcon = (id) => {
        switch (id) {
            case 'environmental': return <Thermometer size={14} />;
            case 'communication': return <Wifi size={14} />;
            case 'actuators_drivers': return <Cpu size={14} />;
            case 'motion_presence': return <Activity size={14} />;
            case 'light_optical': return <Eye size={14} />;
            case 'sound_vibration': return <Activity size={14} />;
            case 'displays_hmi': return <Grid size={14} />;
            case 'water_agriculture': return <Zap size={14} />;
            case 'health_biomedical': return <Heart size={14} />;
            case 'imu_position': return <Target size={14} />;
            default: return <Zap size={14} />;
        }
    };

    // Handle sensor click
    const handleSensorClick = (sensor) => {
        if (onSelectSensor) {
            onSelectSensor(sensor);
        } else {
            console.warn("onSelectSensor prop missing");
        }
    }

    return (
        <div style={{ background: 'var(--background)', minHeight: '100vh', paddingBottom: '90px' }}>
            <Helmet><title>Sensors Hub | IoTNext</title></Helmet>

            {/* Sticky Native Header */}
            <div style={{
                position: 'sticky', top: 0, zIndex: 50,
                background: 'rgba(var(--background-rgb), 0.95)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--border)',
                padding: '0.75rem 1rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '36px', height: '36px', borderRadius: '10px',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'white'
                        }}>
                            <Scan size={20} />
                        </div>
                        <h1 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, letterSpacing: '-0.02em' }}>
                            Sensors Hub
                        </h1>
                    </div>
                </div>

                {/* Search Bar */}
                <div style={{ position: 'relative', marginBottom: '1rem' }}>
                    <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="text"
                        placeholder="Search sensors..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.8rem 1rem 0.8rem 3rem',
                            borderRadius: '1rem',
                            border: 'none',
                            background: 'var(--surface)',
                            color: 'var(--text)',
                            fontSize: '0.95rem',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                        }}
                    />
                    <div style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }}>
                    </div>
                </div>

                {/* Categories (Restored) */}
                <div style={{
                    display: 'flex', gap: '0.5rem', overflowX: 'auto',
                    padding: '0 0 1rem', scrollbarWidth: 'none', msOverflowStyle: 'none'
                }}>
                    <button
                        onClick={() => setSelectedCategory('All')}
                        style={{
                            padding: '0.4rem 0.8rem',
                            borderRadius: '2rem',
                            background: selectedCategory === 'All' ? 'var(--primary)' : 'var(--surface)',
                            color: selectedCategory === 'All' ? '#fff' : 'var(--text-muted)',
                            border: selectedCategory === 'All' ? 'none' : '1px solid var(--border)',
                            fontSize: '0.8rem', fontWeight: '600',
                            whiteSpace: 'nowrap', flexShrink: 0
                        }}>
                        All
                    </button>
                    {sensorCategories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)} // Use ID for correct filtering
                            style={{
                                padding: '0.4rem 0.8rem',
                                borderRadius: '2rem',
                                background: selectedCategory === cat.id ? 'var(--primary)' : 'var(--surface)',
                                color: selectedCategory === cat.id ? '#fff' : 'var(--text-muted)',
                                border: selectedCategory === cat.id ? 'none' : '1px solid var(--border)',
                                fontSize: '0.8rem', fontWeight: '600',
                                whiteSpace: 'nowrap', flexShrink: 0,
                                display: 'flex', alignItems: 'center', gap: '0.3rem'
                            }}>
                            <span>{cat.emoji}</span> {cat.name}
                        </button>
                    ))}
                </div>

                {/* Sensor Count Display */}
                <div style={{ padding: '0 0.5rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                        {filteredSensors.length} Sensors
                    </span>
                    {/* Category Display or Sort Option could go here */}
                </div>
            </div>

            {/* Content Grid/List */}
            <div style={{ padding: '1rem', display: viewMode === 'grid' ? 'grid' : 'flex', flexDirection: 'column', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

                {
                    loading ? (
                        // Loading Skeletons
                        Array(6).fill(0).map((_, i) => (
                            <div key={i} style={{
                                height: viewMode === 'grid' ? '200px' : '100px',
                                background: 'var(--surface)',
                                borderRadius: '1.25rem',
                                border: '1px solid var(--border)',
                                opacity: 0.5
                            }} />
                        ))
                    ) : (
                        <AnimatePresence mode='popLayout'>
                            {filteredSensors.map(sensor => (
                                <motion.div
                                    key={sensor.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    onClick={() => handleSensorClick(sensor)}
                                    style={{
                                        background: 'var(--surface)',
                                        borderRadius: '1.25rem',
                                        overflow: 'hidden',
                                        border: '1px solid var(--border)',
                                        position: 'relative',
                                        display: viewMode === 'list' ? 'flex' : 'block',
                                        alignItems: viewMode === 'list' ? 'center' : 'stretch',
                                        gap: viewMode === 'list' ? '1rem' : 0,
                                        padding: viewMode === 'list' ? '0.75rem' : 0,
                                        boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)'
                                    }}
                                >
                                    {/* Save Button */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); toggleSaveItem('sensors', sensor.id); }}
                                        style={{
                                            position: 'absolute', top: '0.75rem', right: '0.75rem',
                                            zIndex: 10, background: 'rgba(255,255,255,0.9)',
                                            borderRadius: '50%',
                                            width: '32px', height: '32px', border: '1px solid rgba(0,0,0,0.05)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        <Heart
                                            size={16}
                                            fill={savedSensors?.includes(sensor.id) ? '#ef4444' : 'none'}
                                            color={savedSensors?.includes(sensor.id) ? '#ef4444' : '#64748b'}
                                        />
                                    </button>

                                    {/* Image Area (Larger & Cleaner) */}
                                    <div style={{
                                        width: viewMode === 'list' ? '100px' : '100%',
                                        height: viewMode === 'list' ? '100px' : '150px',
                                        background: 'var(--surface-raised)', // Slightly different bg for contrast
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderRadius: viewMode === 'list' ? '1rem' : '0 0 0 0',
                                        padding: '1rem', position: 'relative'
                                    }}>
                                        <img
                                            src={sensor.image}
                                            alt={sensor.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))', zIndex: 2 }}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                const fallback = e.target.parentElement.querySelector('.fallback-icon');
                                                if (fallback) fallback.style.display = 'flex';
                                            }}
                                        />
                                        {/* Fallback Icon */}
                                        <div className="fallback-icon" style={{
                                            display: 'none', position: 'absolute', inset: 0,
                                            alignItems: 'center', justifyContent: 'center'
                                        }}>
                                            <Cpu size={28} color='var(--text-muted)' />
                                        </div>
                                    </div>

                                    {/* Info Area */}
                                    <div style={{
                                        padding: viewMode === 'list' ? '0 0 0 0.5rem' : '1.25rem',
                                        display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                        flex: 1
                                    }}>
                                        {/* Name */}
                                        <h3 style={{
                                            fontSize: '1rem', fontWeight: '700', color: 'var(--text)',
                                            margin: '0 0 0.35rem 0', lineHeight: '1.3'
                                        }}>
                                            {sensor.name}
                                        </h3>

                                        {/* Badges Row */}
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            {/* Level Badge (Restored) */}
                                            <span style={{
                                                fontSize: '0.65rem', fontWeight: '700', textTransform: 'uppercase',
                                                background: sensor.level === 'Beginner' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                                color: sensor.level === 'Beginner' ? '#22c55e' : '#3b82f6',
                                                padding: '2px 6px', borderRadius: '4px'
                                            }}>
                                                {sensor.level || 'Intermediate'}
                                            </span>

                                            {/* Category Name */}
                                            <span style={{
                                                fontSize: '0.65rem', fontWeight: '600',
                                                color: 'var(--text-muted)',
                                                display: 'flex', alignItems: 'center', gap: '2px'
                                            }}>
                                                {sensor.emoji} {sensor.category}
                                            </span>
                                        </div>

                                        {/* Pinout (Restored) */}
                                        <div style={{
                                            fontSize: '0.75rem', color: 'var(--text-muted)',
                                            display: 'flex', alignItems: 'center', gap: '0.4rem'
                                        }}>
                                            <Zap size={12} fill="currentColor" style={{ opacity: 0.7 }} />
                                            <span>
                                                {sensor.pins ? sensor.pins.replace('Pins', '').trim() + ' Pins' : 'Pinout N/A'}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    )}
            </div>

            {/* Empty State */}
            {
                !loading && filteredSensors.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}>
                        <p>No sensors found matching "{search}"</p>
                    </div>
                )
            }
        </div >
    );
};

export default MobileSensors;
