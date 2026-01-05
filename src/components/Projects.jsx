import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Search, Filter, ExternalLink, Star, ShoppingCart } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';

export default function Projects({ onSelectProject, onAddToBuild, onRemoveFromBuild, buildList = [], setView }) {
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    const { projects, loading, error } = useProjects(true);

    const filteredProjects = projects.filter(p => {
        if (!p) return false;
        const matchesFilter = filter === 'All' || (p.level || 'Beginner') === filter;
        const matchesSearch = (p.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (p.description || '').toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <section className="section-mesh bg-dots" id="projects" style={{ padding: '4rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'rgba(var(--primary-rgb), 0.1)',
                            padding: '0.6rem 1.75rem',
                            borderRadius: '2rem',
                            marginBottom: '2rem',
                            border: '1px solid var(--border)',
                            color: 'var(--primary)',
                            fontWeight: '700'
                        }}
                    >
                        <Sparkles size={18} />
                        <span style={{ fontSize: '0.9rem', letterSpacing: '0.05em' }}>INNOVATION LABORATORY</span>
                    </motion.div>

                    <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '-0.04em' }}>
                        Project <span className="text-gradient">Hub</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto', fontWeight: '500' }}>
                        Hands-on engineering with {projects.length}+ production-ready IoT implementations.
                    </p>
                </div>

                <div className="glass-plus" style={{ padding: '2.5rem', borderRadius: '2.5rem', marginBottom: '4rem', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '800px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
                                <Search style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} size={20} />
                                <input
                                    type="text"
                                    placeholder="Architectural search..."
                                    className="glass"
                                    style={{
                                        width: '100%',
                                        padding: '1.1rem 1.25rem 1.1rem 3.5rem',
                                        borderRadius: '1.5rem',
                                        border: '1px solid var(--border)',
                                        color: 'var(--text)',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        outline: 'none',
                                        transition: 'var(--transition)'
                                    }}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <button
                                onClick={() => setView('cartlist')}
                                className="btn btn-primary-shiny"
                                style={{
                                    padding: '0 2rem',
                                    borderRadius: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    fontWeight: '800',
                                    boxShadow: 'var(--neon-glow-primary)',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <ShoppingCart size={20} />
                                <span>Build List ({buildList.length})</span>
                            </button>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`btn ${filter === cat ? 'btn-primary btn-primary-shiny' : 'btn-outline hover-lift'}`}
                                    style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem', borderRadius: '1rem', fontWeight: '700' }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-3" style={{ gap: '2.5rem' }}>
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
                            <p style={{ color: 'var(--text-muted)' }}>Try refining your search or changing the difficulty level.</p>
                        </div>
                    ) : (
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-plus"
                                    style={{
                                        padding: '2.5rem',
                                        borderRadius: '2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        height: '100%',
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                    whileHover={{ y: -10, boxShadow: 'var(--shadow)', borderColor: 'var(--primary)' }}
                                >
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                            <span className={`badge badge-${(project.level || 'Beginner').toLowerCase()}`} style={{ fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                {(project.level || 'Beginner')}
                                            </span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const isInBuild = buildList.includes(project.id);
                                                    if (isInBuild) onRemoveFromBuild(project.id);
                                                    else onAddToBuild(project.id);
                                                }}
                                                style={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    color: buildList.includes(project.id) ? 'var(--primary)' : 'var(--text-muted)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    padding: '0.5rem',
                                                    borderRadius: '50%',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: buildList.includes(project.id) ? '0 0 15px rgba(var(--primary-rgb), 0.3)' : 'none'
                                                }}
                                                className="hover-lift"
                                            >
                                                <Star size={20} fill={buildList.includes(project.id) ? 'var(--primary)' : 'none'} />
                                            </button>
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: '900', letterSpacing: '-0.02em' }}>{project.title || 'Untitled Project'}</h3>
                                        <p style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '800', marginBottom: '1rem', textTransform: 'uppercase' }}>By {project.author_name || 'Antigravity'}</p>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: '1.6', fontWeight: '500' }}>
                                            {project.description}
                                        </p>
                                    </div>

                                    <button
                                        className="btn btn-outline btn-primary-shiny hover-lift"
                                        style={{ justifyContent: 'center', width: '100%', padding: '1.1rem', borderRadius: '1.25rem', fontWeight: '800' }}
                                        onClick={() => onSelectProject(project)}
                                    >
                                        Explore Project <ExternalLink size={18} />
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    )}
                </div>
            </div>
        </section>
    );
}
