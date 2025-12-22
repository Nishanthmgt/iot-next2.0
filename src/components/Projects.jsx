import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Tag, Search } from 'lucide-react';

export default function Projects({ onSelectProject }) {
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    console.log('Projects component loaded, projects count:', projects?.length);

    const filteredProjects = projects.filter(p => {
        const matchesFilter = filter === 'All' || p.level === filter;
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (p.tech && p.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())));
        return matchesFilter && matchesSearch;
    });

    console.log('Filtered projects count:', filteredProjects.length);

    return (
        <section className="container" id="projects">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Project Hub</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Hands-on learning with {projects.length}+ real-world IoT projects</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                        <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
                        <input
                            type="text"
                            placeholder="Search projects or tech..."
                            className="glass"
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem 0.75rem 2.5rem',
                                borderRadius: '2rem',
                                border: '1px solid var(--border)',
                                color: 'var(--text)',
                                background: 'var(--surface)'
                            }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                                style={{ padding: '0.4rem 1.2rem', fontSize: '0.9rem' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-3">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="glass"
                            style={{
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%'
                            }}
                        >
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span className={`badge badge-${project.level.toLowerCase()}`}>
                                        {project.level}
                                    </span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.category}</span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', background: 'var(--surface-hover)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                                            <Tag size={12} /> {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="btn btn-outline"
                                style={{ justifyContent: 'center', width: '100%' }}
                                onClick={() => onSelectProject(project)}
                            >
                                View Concept <ExternalLink size={16} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}