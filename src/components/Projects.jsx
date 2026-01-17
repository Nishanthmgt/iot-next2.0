import React, { useState, useMemo, useEffect } from 'react';
import { Sparkles, Search, Filter, ExternalLink, Star, ShoppingCart, Cpu, Wifi, Bot, Brain, Rocket, Layers, ArrowLeft, ChevronRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDashboardData } from '../hooks/useDashboardData';
import { useProjects } from '../hooks/useProjects';

const ProjectCard = React.memo(({ project, index, currentCategory, buildList, onAddToBuild, onRemoveFromBuild, onSelectProject }) => {
    const isMobile = window.innerWidth <= 768;
    const { savedProjects, toggleSaveItem } = useDashboardData();
    const isSaved = savedProjects.includes(project.id);

    return (
        <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
            whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
            className="glass-plus"
            style={{
                padding: '0',
                borderRadius: isMobile ? '1.25rem' : '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            {/* Gradient Top Bar */}
            <div style={{
                height: isMobile ? '3px' : '4px',
                background: `linear-gradient(90deg, ${currentCategory.color}dd, ${currentCategory.color}66)`,
                width: '100%'
            }} />

            <div style={{ padding: isMobile ? '1.25rem' : '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Header with badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: isMobile ? '0.75rem' : '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        <span
                            className={`badge badge-${(project.level || 'Beginner').toLowerCase()}`}
                            style={{
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                fontSize: isMobile ? '0.6rem' : '0.7rem',
                                padding: isMobile ? '0.25rem 0.6rem' : '0.4rem 0.8rem'
                            }}
                        >
                            {(project.level || 'Beginner')}
                        </span>
                        <span
                            className="badge glass"
                            style={{
                                fontWeight: '700',
                                fontSize: isMobile ? '0.6rem' : '0.7rem',
                                padding: isMobile ? '0.25rem 0.6rem' : '0.4rem 0.8rem',
                                background: `${currentCategory.color}15`,
                                color: currentCategory.color,
                                border: `1px solid ${currentCategory.color}30`
                            }}
                        >
                            #{project.id}
                        </span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleSaveItem('project', project.id);
                            }}
                            style={{
                                background: isSaved ? `${currentCategory.color}20` : 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: isSaved ? '#ef4444' : 'var(--text-muted)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: isMobile ? '0.4rem' : '0.5rem',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease'
                            }}
                            className="hover-lift"
                        >
                            <Heart size={isMobile ? 18 : 20} fill={isSaved ? '#ef4444' : 'none'} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const isInBuild = buildList.includes(project.id);
                                if (isInBuild) onRemoveFromBuild(project.id);
                                else onAddToBuild(project.id);
                            }}
                            style={{
                                background: buildList.includes(project.id) ? `${currentCategory.color}20` : 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: buildList.includes(project.id) ? currentCategory.color : 'var(--text-muted)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: isMobile ? '0.4rem' : '0.5rem',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease'
                            }}
                            className="hover-lift"
                        >
                            <Star size={isMobile ? 18 : 22} fill={buildList.includes(project.id) ? currentCategory.color : 'none'} />
                        </button>
                    </div>
                </div>

                {/* Title */}
                <h3 style={{
                    fontSize: isMobile ? '1.1rem' : '1.35rem',
                    marginBottom: isMobile ? '0.3rem' : '0.5rem',
                    fontWeight: '900',
                    letterSpacing: 'var(--ls-tight)',
                    lineHeight: 'var(--lh-tight)',
                    color: 'var(--text)'
                }}>
                    {project.title || 'Untitled Project'}
                </h3>

                {/* Author */}
                <p style={{
                    color: currentCategory.color,
                    fontSize: isMobile ? '0.65rem' : '0.7rem',
                    fontWeight: '800',
                    marginBottom: isMobile ? '0.75rem' : '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    By {project.author_name || 'NISHANTH'}
                </p>

                {/* Description */}
                <p style={{
                    color: 'var(--text-muted)',
                    fontSize: isMobile ? '0.9rem' : '0.95rem',
                    marginBottom: 'auto',
                    lineHeight: isMobile ? 1.4 : 1.6,
                    fontWeight: '500',
                    display: '-webkit-box',
                    WebkitLineClamp: isMobile ? 2 : 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {project.description}
                </p>

                {/* CTA Button */}
                <button
                    className="btn hover-lift"
                    style={{
                        justifyContent: 'center',
                        width: '100%',
                        padding: isMobile ? '0.75rem' : '1rem',
                        borderRadius: isMobile ? '0.75rem' : '1rem',
                        fontWeight: '800',
                        marginTop: isMobile ? '1rem' : '1.5rem',
                        background: `linear-gradient(135deg, ${currentCategory.color}dd, ${currentCategory.color}99)`,
                        color: 'white',
                        border: 'none',
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: `0 4px 15px ${currentCategory.color}30`
                    }}
                    onClick={() => onSelectProject(project)}
                >
                    Explore Project <ExternalLink size={isMobile ? 16 : 18} />
                </button>
            </div>
        </motion.div>
    );
});
const MobileProjectRow = ({ project, index, currentCategory, onSelectProject }) => {
    const { savedProjects, toggleSaveItem } = useDashboardData();
    const isSaved = (savedProjects || []).includes(project.id);
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelectProject(project)}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 0',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer'
            }}
        >
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: `${currentCategory.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: currentCategory.color,
                fontSize: '0.8rem',
                fontWeight: '700'
            }}>
                {project.id}
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <h4 style={{
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    marginBottom: '0.2rem',
                    color: 'var(--text)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {project.title}
                </h4>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span className={`badge badge-${(project.level || 'Beginner').toLowerCase()}`} style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
                        {project.level || 'Beginner'}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        • {project.author_name || 'Nishanth'}
                    </span>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleSaveItem('project', project.id);
                    }}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        padding: '0.25rem',
                        cursor: 'pointer'
                    }}
                >
                    <Heart size={18} fill={isSaved ? '#ef4444' : 'none'} color={isSaved ? '#ef4444' : 'var(--text-muted)'} />
                </button>
                <ChevronRight size={18} color="var(--text-muted)" />
            </div>
        </motion.div>
    );
};

const MobileCategoryRow = ({ cat, count, onClick }) => {
    const Icon = cat.icon;
    return (
        <div
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 0',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer'
            }}
        >
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: `${cat.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: cat.color
            }}>
                <Icon size={20} />
            </div>
            <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text)' }}>{cat.label}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{count} Projects</p>
            </div>
            <ChevronRight size={20} color="var(--text-muted)" />
        </div>
    );
};

ProjectCard.displayName = 'ProjectCard';

export default function Projects({ onSelectProject, onAddToBuild, onRemoveFromBuild, buildList = [], setView, showOnlySaved = false, setShowOnlySaved }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [visibleCount, setVisibleCount] = useState(12);

    // Debounce search term to prevent lag while typing
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchTerm);
            setVisibleCount(12); // Reset pagination on search
        }, 300);
        return () => clearTimeout(handler);
    }, [searchTerm]);

    const categories = useMemo(() => [
        { id: 'existing', label: 'Foundational IoT', icon: Layers, range: [1, 100], color: '#6366f1', description: 'Existing verified projects and tutorials (100 projects)' },
        { id: 'iot', label: 'IoT Projects', icon: Wifi, range: [101, 200], color: '#8b5cf6', description: 'Cloud connectivity, MQTT, HTTP, wireless protocols' },
        { id: 'robotics', label: 'Robotics & Automation', icon: Bot, range: [201, 300], color: '#f59e0b', description: 'Motors, servos, sensors, autonomous systems' },
        { id: 'ai', label: 'AI + Embedded + ML', icon: Brain, range: [301, 400], color: '#10b981', description: 'TinyML, edge AI, computer vision, neural networks' },
        { id: 'embedded', label: 'Embedded Systems', icon: Cpu, range: [401, 600], color: '#ec4899', description: 'Core microcontroller programming, GPIO, timers, interrupts' },
        { id: 'final', label: 'Final Year Combo', icon: Rocket, range: [601, 700], color: '#ef4444', description: 'Industry-grade, multi-domain integration projects' }
    ], []);

    const { projects, loading: projectsLoading } = useProjects(true);
    const { savedProjects = [] } = useDashboardData();
    const loading = projectsLoading;

    const getCategoryProjects = (categoryId) => {
        const category = categories.find(c => c.id === categoryId);
        if (!category) return [];
        const [minId, maxId] = category.range;
        return projects.filter(p => p && p.id >= minId && p.id <= maxId);
    };

    // Auto-select category when filter is active and no category selected
    useEffect(() => {
        if (showOnlySaved && !selectedCategory && savedProjects && savedProjects.length > 0) {
            // Find first category that has saved projects
            for (const cat of categories) {
                const catProjects = getCategoryProjects(cat.id);
                const hasSavedInCategory = catProjects.some(p => savedProjects.includes(p.id));
                if (hasSavedInCategory) {
                    setSelectedCategory(cat.id);
                    break;
                }
            }
        }
    }, [showOnlySaved, selectedCategory, savedProjects, categories]);

    const filteredProjects = useMemo(() => {
        // When showing saved items, show across all categories
        if (showOnlySaved && savedProjects) {
            let allProjects = projects.filter(p => savedProjects.includes(p.id));

            if (debouncedSearch) {
                const term = debouncedSearch.toLowerCase();
                allProjects = allProjects.filter(p =>
                    (p.title || '').toLowerCase().includes(term) ||
                    (p.description || '').toLowerCase().includes(term) ||
                    (p.tech || []).some(t => t.toLowerCase().includes(term))
                );
            }

            return allProjects;
        }

        // Normal category-based filtering
        if (!selectedCategory) return [];
        let catProjects = getCategoryProjects(selectedCategory);

        if (!debouncedSearch) return catProjects;

        const term = debouncedSearch.toLowerCase();
        return catProjects.filter(p =>
            (p.title || '').toLowerCase().includes(term) ||
            (p.description || '').toLowerCase().includes(term) ||
            (p.tech || []).some(t => t.toLowerCase().includes(term))
        );
    }, [selectedCategory, debouncedSearch, projects, categories, showOnlySaved, savedProjects]);

    const displayedProjects = useMemo(() =>
        filteredProjects.slice(0, visibleCount),
        [filteredProjects, visibleCount]);

    // Category Landing Page - Compact 2-Column Layout
    if (!selectedCategory) {
        return (
            <section className="section-mesh bg-dots" id="projects" style={{ padding: isMobile ? '1rem 0' : 'var(--app-py) 0' }}>
                <div className="container" style={{ paddingLeft: 'var(--app-px)', paddingRight: 'var(--app-px)' }}>
                    <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                background: 'rgba(var(--primary-rgb), 0.1)',
                                padding: isMobile ? '0.4rem 1.25rem' : '0.6rem 1.75rem',
                                borderRadius: '2rem',
                                marginBottom: isMobile ? '1rem' : '1.5rem',
                                border: '1px solid var(--border)',
                                color: 'var(--primary)',
                                fontWeight: '700'
                            }}
                        >
                            <Sparkles size={isMobile ? 14 : 18} />
                            <span style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', letterSpacing: '0.05em' }}>500+ PROJECT REPOSITORY</span>
                        </motion.div>

                        <h2 style={{
                            fontSize: isMobile ? '2.2rem' : '3.5rem',
                            marginBottom: '0.5rem',
                            fontWeight: '900',
                            letterSpacing: 'var(--ls-tight)',
                            lineHeight: 'var(--lh-tight)'
                        }}>
                            Choose Your <span className="text-gradient">Domain</span>
                        </h2>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: isMobile ? '0.9rem' : '1.1rem',
                            maxWidth: '600px',
                            margin: '0 auto',
                            fontWeight: '500',
                            lineHeight: '1.4'
                        }}>
                            Select a track to explore production implementations.
                        </p>
                    </div>

                    {isMobile ? (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {categories.map((cat) => (
                                <MobileCategoryRow
                                    key={cat.id}
                                    cat={cat}
                                    count={getCategoryProjects(cat.id).length}
                                    onClick={() => setSelectedCategory(cat.id)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-2" style={{ gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                const categoryCount = getCategoryProjects(cat.id).length;

                                return (
                                    <motion.div
                                        key={cat.id}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08 }}
                                        whileHover={{ y: -5, borderColor: cat.color }}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className="glass-plus"
                                        style={{
                                            padding: '2rem',
                                            borderRadius: '1.25rem',
                                            background: 'var(--surface)',
                                            border: `1px solid var(--border)`,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: '1.5rem'
                                        }}
                                    >
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '12px',
                                            background: `linear-gradient(135deg, ${cat.color}dd, ${cat.color}99)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            boxShadow: `0 8px 20px ${cat.color}30`
                                        }}>
                                            <Icon size={28} color="white" strokeWidth={2.5} />
                                        </div>

                                        <div style={{ flex: 1 }}>
                                            <h3 style={{
                                                fontSize: '1.4rem',
                                                fontWeight: '900',
                                                marginBottom: '0.2rem',
                                                color: 'var(--text)',
                                                letterSpacing: '-0.01em'
                                            }}>
                                                {cat.label}
                                            </h3>
                                            <p style={{
                                                color: 'var(--text-muted)',
                                                fontSize: '0.9rem',
                                                lineHeight: '1.4',
                                                marginBottom: '0.4rem',
                                                fontWeight: '500'
                                            }}>
                                                {cat.description}
                                            </p>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                color: cat.color,
                                                fontWeight: '800',
                                                fontSize: '0.8rem'
                                            }}>
                                                <span>{categoryCount} Projects</span>
                                                <ChevronRight size={14} />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )
                    }
                </div >
            </section >
        );
    }

    // Project List View (when category is selected)
    const currentCategory = categories.find(c => c.id === selectedCategory);
    const Icon = currentCategory.icon;

    return (
        <section className="section-mesh bg-dots" id="projects" style={{ padding: isMobile ? '1rem 0' : 'var(--app-py) 0' }}>
            <div className="container" style={{ paddingLeft: 'var(--app-px)', paddingRight: 'var(--app-px)' }}>
                <div style={{ marginBottom: isMobile ? '2rem' : '4rem' }}>
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setSelectedCategory(null)}
                        className="btn btn-outline hover-lift"
                        style={{
                            marginBottom: isMobile ? '1.5rem' : '2rem',
                            padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
                            borderRadius: '1rem',
                            fontWeight: '700',
                            fontSize: isMobile ? '0.85rem' : '1rem'
                        }}
                    >
                        <ArrowLeft size={isMobile ? 16 : 18} /> Back to Categories
                    </motion.button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '1rem' : '1.5rem', marginBottom: isMobile ? '1.5rem' : '2rem' }}>
                        <div style={{
                            width: isMobile ? '48px' : '60px',
                            height: isMobile ? '48px' : '60px',
                            borderRadius: isMobile ? '12px' : '15px',
                            background: showOnlySaved ? 'linear-gradient(135deg, #ef4444dd, #ef444499)' : `linear-gradient(135deg, ${currentCategory.color}dd, ${currentCategory.color}99)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: showOnlySaved ? '0 10px 30px rgba(239, 68, 68, 0.4)' : `0 10px 30px ${currentCategory.color}40`
                        }}>
                            {showOnlySaved ? <Heart size={isMobile ? 24 : 30} color="white" fill="white" strokeWidth={2.5} /> : <Icon size={isMobile ? 24 : 30} color="white" strokeWidth={2.5} />}
                        </div>
                        <div>
                            <h2 style={{
                                fontSize: isMobile ? '1.8rem' : '3rem',
                                fontWeight: '900',
                                letterSpacing: 'var(--ls-tight)',
                                lineHeight: 'var(--lh-tight)',
                                marginBottom: isMobile ? '0.2rem' : '0.5rem'
                            }}>
                                {showOnlySaved ? 'All Saved Projects' : currentCategory.label}
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: '500' }}>
                                {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'} {showOnlySaved ? 'Saved' : 'Available'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className={isMobile ? "" : "glass-plus"} style={{
                    padding: isMobile ? '1rem 0' : '2.5rem',
                    borderRadius: isMobile ? '0' : '2.5rem',
                    marginBottom: isMobile ? '1rem' : '4rem',
                    border: isMobile ? 'none' : '1px solid var(--border)',
                    borderBottom: isMobile ? '1px solid var(--border)' : '1px solid var(--border)',
                    position: isMobile ? 'sticky' : 'relative',
                    top: isMobile ? '64px' : '0',
                    zIndex: 20,
                    background: isMobile ? 'var(--background)' : 'var(--surface)',
                    backdropFilter: isMobile ? 'blur(10px)' : 'none'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ position: 'relative', flex: 1, minWidth: isMobile ? '100%' : '300px' }}>
                            <Search style={{
                                position: 'absolute',
                                left: '1rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'var(--primary)',
                                pointerEvents: 'none',
                                zIndex: 2,
                                opacity: 0.6
                            }} size={18} />
                            <input
                                type="text"
                                placeholder="Search repository..."
                                className="glass"
                                style={{
                                    width: '100%',
                                    padding: '0.85rem 1rem 0.85rem 2.85rem',
                                    borderRadius: '1rem',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text)',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    outline: 'none',
                                    background: 'var(--background)'
                                }}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {setShowOnlySaved && (
                            <button
                                onClick={() => {
                                    // Clear ALL filters and return to category selection
                                    setShowOnlySaved(false);
                                    setSelectedCategory(null);
                                    setSearchTerm('');
                                }}
                                className={showOnlySaved ? "btn btn-primary" : "btn btn-outline"}
                                style={{
                                    padding: isMobile ? '0.75rem 1.25rem' : '0 1.5rem',
                                    height: isMobile ? 'auto' : '50px',
                                    borderRadius: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    fontWeight: '800',
                                    fontSize: '0.85rem',
                                    width: isMobile ? '100%' : 'auto',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <Heart size={18} fill={showOnlySaved ? 'currentColor' : 'none'} />
                                <span>{showOnlySaved ? 'Clear Filter' : 'Show Saved'}</span>
                            </button>
                        )}

                        <button
                            onClick={() => setView('cartlist')}
                            className="btn btn-primary-shiny"
                            style={{
                                padding: isMobile ? '0.75rem 1.25rem' : '0 2rem',
                                height: isMobile ? 'auto' : '50px',
                                borderRadius: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                background: 'var(--primary)',
                                color: 'white',
                                fontWeight: '800',
                                boxShadow: 'var(--neon-glow-primary)',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                width: isMobile ? '100%' : 'auto',
                                justifyContent: 'center'
                            }}
                        >
                            <ShoppingCart size={20} />
                            <span>Build List ({buildList.length})</span>
                        </button>
                    </div>
                </div>

                <div className={isMobile ? '' : 'grid grid-3'} style={{ gap: isMobile ? '0' : '2rem' }}>
                    {loading ? (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '10rem 0' }}>
                            <div className="iot-loader" style={{ margin: '0 auto 2rem' }}>
                                <div className="iot-loader-inner"></div>
                            </div>
                            <p style={{ letterSpacing: '0.1em', fontWeight: '600', color: 'var(--primary)' }}>INITIALIZING REPOSITORY...</p>
                        </div>
                    ) : filteredProjects.length === 0 ? (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '8rem 0' }}>
                            <Filter size={48} style={{ color: 'var(--border)', marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>No Matches Found</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Try refining your search or select a different category.</p>
                        </div>
                    ) : (
                        isMobile ? (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {displayedProjects.map((project, index) => (
                                    <MobileProjectRow
                                        key={project.id}
                                        project={project}
                                        index={index}
                                        currentCategory={currentCategory}
                                        onSelectProject={onSelectProject}
                                    />
                                ))}
                            </div>
                        ) : (
                            <AnimatePresence mode='popLayout'>
                                {displayedProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        index={index}
                                        currentCategory={currentCategory}
                                        buildList={buildList}
                                        onAddToBuild={onAddToBuild}
                                        onRemoveFromBuild={onRemoveFromBuild}
                                        onSelectProject={onSelectProject}
                                    />
                                ))}
                            </AnimatePresence>
                        )
                    )}
                </div>

                {/* Pagination / Load More */}
                {!loading && filteredProjects.length > visibleCount && (
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <button
                            onClick={() => setVisibleCount(prev => prev + 12)}
                            className="btn btn-primary-shiny"
                            style={{ padding: '1rem 3rem', borderRadius: '1.5rem', fontWeight: '800' }}
                        >
                            Load More Projects
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
