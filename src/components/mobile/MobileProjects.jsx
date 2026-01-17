import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, Filter, Heart, ChevronRight, Layers, Wifi, Bot,
    Brain, Cpu, Rocket, Sparkles, ArrowLeft, Star
} from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import { useDashboardData } from '../../hooks/useDashboardData';

const MobileProjects = ({ onSelectProject, onAddToBuild, onRemoveFromBuild, buildList = [], showOnlySaved, setShowOnlySaved }) => {
    const { projects, loading } = useProjects(true);
    const { savedProjects, toggleSaveItem } = useDashboardData();
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(showOnlySaved ? 'saved' : null);

    // Categories Data
    // Categories Data
    const categories = useMemo(() => {
        const getCount = (range) => {
            if (!projects) return 0;
            const [min, max] = range;
            return projects.filter(p => p.id >= min && p.id <= max).length;
        };

        return [
            { id: 'existing', label: 'Foundational IoT', icon: Layers, range: [1, 100], color: '#6366f1', count: getCount([1, 100]) },
            { id: 'iot', label: 'IoT Projects', icon: Wifi, range: [101, 200], color: '#8b5cf6', count: getCount([101, 200]) },
            { id: 'robotics', label: 'Robotics', icon: Bot, range: [201, 300], color: '#f59e0b', count: getCount([201, 300]) },
            { id: 'ai', label: 'AI + ML', icon: Brain, range: [301, 400], color: '#10b981', count: getCount([301, 400]) },
            { id: 'embedded', label: 'Embedded', icon: Cpu, range: [401, 600], color: '#ec4899', count: getCount([401, 600]) },
            { id: 'final', label: 'Final Year', icon: Rocket, range: [601, 700], color: '#ef4444', count: getCount([601, 700]) }
        ];
    }, [projects]);

    // Filter Logic
    const filteredProjects = useMemo(() => {
        let result = projects;

        // 1. Filter by Category
        if (selectedCategory === 'saved') {
            result = result.filter(p => (savedProjects || []).includes(p.id));
        } else if (selectedCategory) {
            const cat = categories.find(c => c.id === selectedCategory);
            if (cat && cat.range) {
                const [min, max] = cat.range;
                result = result.filter(p => p.id >= min && p.id <= max);
            }
        }

        // 2. Filter by Search (Global search if no category selected, else scoped)
        if (search) {
            const q = search.toLowerCase();
            result = result.filter(p =>
                (p.title || '').toLowerCase().includes(q) ||
                (p.description || '').toLowerCase().includes(q)
            );
        }

        return result;
    }, [projects, selectedCategory, search, savedProjects, categories]);

    // Handle Back Press
    const handleBack = () => {
        if (search) setSearch('');
        else setSelectedCategory(null);
    };

    // --- VIEW: CATEGORY SELECTION ---
    if (!selectedCategory && !search) {
        return (
            <div style={{ padding: '1rem 1rem 80px 1rem', background: 'var(--background)', minHeight: '100vh' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '0.2rem' }}>
                        Project <span className="text-gradient">Hub</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        Select a domain to start building
                    </p>
                </div>

                {/* Search Bar */}
                <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                    <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                        type="text"
                        placeholder="Search all projects..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            width: '100%', padding: '0.8rem 1rem 0.8rem 3rem',
                            borderRadius: '1rem', background: 'var(--surface)',
                            border: '1px solid var(--border)', color: 'var(--text)',
                            fontSize: '1rem', outline: 'none'
                        }}
                    />
                </div>

                {/* Show Saved Quick Link */}
                <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory('saved')}
                    style={{
                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                        borderRadius: '1.25rem', padding: '1.25rem',
                        marginBottom: '1.5rem', color: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        boxShadow: '0 8px 20px rgba(239, 68, 68, 0.25)'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '10px',
                            background: 'rgba(255,255,255,0.2)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Heart size={20} fill="white" />
                        </div>
                        <div>
                            <div style={{ fontWeight: '800', fontSize: '1rem' }}>Saved Projects</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>{savedProjects?.length || 0} items</div>
                        </div>
                    </div>
                    <ChevronRight size={20} />
                </motion.div>

                {/* Category Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedCategory(cat.id)}
                                style={{
                                    background: 'var(--surface)',
                                    borderRadius: '1.25rem',
                                    padding: '1.25rem',
                                    border: '1px solid var(--border)',
                                    display: 'flex', alignItems: 'center', gap: '1rem'
                                }}
                            >
                                <div style={{
                                    width: '50px', height: '50px', borderRadius: '14px',
                                    background: `${cat.color}15`, color: cat.color,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <Icon size={24} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.1rem', color: 'var(--text)' }}>
                                        {cat.label}
                                    </h3>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        {cat.count} Projects available
                                    </p>
                                </div>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '50%',
                                    background: 'var(--background)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <ChevronRight size={16} color="var(--text-muted)" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        );
    }

    // --- VIEW: PROJECT LIST ---
    const activeCat = categories.find(c => c.id === selectedCategory);
    const title = activeCat ? activeCat.label : (selectedCategory === 'saved' ? 'Saved Projects' : 'Search Results');
    const color = activeCat ? activeCat.color : '#ef4444';

    return (
        <div style={{ paddingBottom: '90px', minHeight: '100vh', background: 'var(--background)' }}>

            {/* Sticky Header */}
            <div style={{
                position: 'sticky', top: 0, zIndex: 40,
                background: 'rgba(var(--background-rgb), 0.95)',
                backdropFilter: 'blur(16px)',
                borderBottom: '1px solid var(--border)',
                padding: '1rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <button
                        onClick={() => setSelectedCategory(null)}
                        style={{
                            width: '40px', height: '40px', borderRadius: '12px',
                            background: 'var(--surface)', border: '1px solid var(--border)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--text)'
                        }}
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '900', lineHeight: 1.1 }}>{title}</h2>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{filteredProjects.length} Projects</p>
                    </div>
                </div>

                {/* Sub-Search within Category */}
                <div style={{ position: 'relative' }}>
                    <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                        type="text"
                        placeholder={`Search inside ${title}...`}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            width: '100%', padding: '0.7rem 1rem 0.7rem 2.8rem',
                            borderRadius: '0.8rem', background: 'var(--surface)',
                            border: '1px solid var(--border)', color: 'var(--text)',
                            fontSize: '0.9rem', outline: 'none'
                        }}
                    />
                </div>
            </div>

            {/* List Content */}
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>Loading...</div>
                ) : filteredProjects.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
                        <p style={{ fontWeight: '700' }}>No matching projects found.</p>
                    </div>
                ) : (
                    filteredProjects.map((project, index) => (
                        <MobileProjectTextCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={() => onSelectProject(project)}
                            isSaved={(savedProjects || []).includes(project.id)}
                            onToggleSave={(e) => {
                                e.stopPropagation();
                                toggleSaveItem('project', project.id);
                            }}
                            accentColor={color}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

// Text-Only Optimized Card (No Images)
const MobileProjectTextCard = ({ project, index, onClick, onToggleSave, isSaved, accentColor }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.03 }}
        whileTap={{ scale: 0.99 }}
        onClick={onClick}
        style={{
            background: 'var(--surface)',
            borderRadius: '1rem',
            padding: '1rem',
            border: '1px solid var(--border)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            gap: '1rem'
        }}
    >
        <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem', alignItems: 'center' }}>
                <span style={{
                    fontSize: '0.65rem', fontWeight: '800',
                    color: accentColor, background: `${accentColor}15`,
                    padding: '0.15rem 0.4rem', borderRadius: '4px',
                    textTransform: 'uppercase'
                }}>
                    {project.level}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>#{project.id}</span>
            </div>

            <h3 style={{
                fontSize: '1rem', fontWeight: '700', color: 'var(--text)',
                marginBottom: '0.3rem', lineHeight: 1.3
            }}>
                {project.title}
            </h3>

            <p style={{
                fontSize: '0.8rem', color: 'var(--text-muted)',
                display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden'
            }}>
                {project.description}
            </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
            <button
                onClick={onToggleSave}
                style={{
                    background: 'transparent',
                    border: 'none', padding: '0.4rem', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
            >
                <Heart size={18} fill={isSaved ? '#ef4444' : 'none'} color={isSaved ? '#ef4444' : 'var(--text-muted)'} />
            </button>
            <ChevronRight size={18} color="var(--text-muted)" />
        </div>
    </motion.div>
);

export default MobileProjects;
