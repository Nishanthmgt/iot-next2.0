import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Shield, Zap, BookOpen, Terminal, Settings, ExternalLink, CheckCircle, AlertCircle, ShoppingCart } from 'lucide-react';

export default function ProjectDetail({ project, onBack }) {
    if (!project) return null;

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <button
                onClick={onBack}
                className="btn btn-outline"
                style={{ marginBottom: '2rem', padding: '0.4rem 1rem' }}
            >
                <ArrowLeft size={18} /> Back to Projects
            </button>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass"
                style={{ padding: '3rem', borderRadius: '2rem' }}
            >
                {/* Header Section */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <span className={`badge badge-${project.level.toLowerCase()}`} style={{ fontSize: '0.8rem', marginBottom: '1rem', display: 'inline-block' }}>
                            {project.level} Level
                        </span>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.title}</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px' }}>{project.description}</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'var(--primary)', borderRadius: '1.5rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Cpu size={56} />
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-3" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
                    <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', background: 'var(--surface-hover)' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}><Zap size={18} className="text-primary" /> Tech Stack</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} style={{ fontSize: '0.8rem', background: 'var(--surface)', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid var(--border)' }}>{t}</span>
                            ))}
                        </div>
                    </div>
                    <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', background: 'var(--surface-hover)' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}><Shield size={18} className="text-primary" /> Category</h4>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{project.category}</p>
                    </div>
                    <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', background: 'var(--surface-hover)' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}><Settings size={18} className="text-primary" /> Principle</h4>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{project.principle || "Standard IoT logic implementation."}</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-2" style={{ gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <BookOpen className="text-primary" /> The Concept
                        </h2>
                        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', background: 'var(--surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                            {project.concept}
                            <div style={{ marginTop: '2rem' }}>
                                <p style={{ fontWeight: 'bold', color: 'var(--text)', marginBottom: '1rem' }}>Real World Use Case:</p>
                                <div style={{ padding: '1rem', background: 'var(--surface-hover)', borderRadius: '0.5rem', fontSize: '0.9rem', borderLeft: '3px solid var(--primary)' }}>
                                    {project.useCase}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Terminal className="text-primary" /> Sample Coding
                        </h2>
                        <div style={{ background: '#1e1e1e', padding: '1.5rem', borderRadius: '1rem', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '30px', background: '#333', display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '0.5rem' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                            </div>
                            <pre style={{ color: '#dcdcdc', fontSize: '0.85rem', marginTop: '1.5rem', overflowX: 'auto', fontFamily: 'monospace' }}>
                                <code>{project.code || "// Code snippet coming soon..."}</code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Technical Details */}
                <div className="grid grid-2" style={{ gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Pin Configuration</h3>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {project.pins?.map((p, idx) => (
                                    <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
                                        <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>{p.from}</span>
                                        <ArrowLeft size={16} style={{ transform: 'rotate(180deg)', color: 'var(--primary)' }} />
                                        <span style={{ color: 'var(--text)', fontWeight: '600' }}>{p.to}</span>
                                    </li>
                                )) || <p style={{ color: 'var(--text-muted)' }}>Pin details available in setup guide.</p>}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Pros & Cons</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ background: 'rgba(0, 255, 127, 0.05)', padding: '1rem', borderRadius: '1rem', border: '1px solid rgba(0, 255, 127, 0.2)' }}>
                                <p style={{ fontWeight: 'bold', color: '#00ff7f', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} /> Advantages</p>
                                <ul style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    {project.advantages?.map((adv, idx) => <li key={idx}>• {adv}</li>) || <li>Reliable IoT implementation</li>}
                                </ul>
                            </div>
                            <div style={{ background: 'rgba(255, 95, 86, 0.05)', padding: '1rem', borderRadius: '1rem', border: '1px solid rgba(255, 95, 86, 0.2)' }}>
                                <p style={{ fontWeight: 'bold', color: '#ff5f56', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><AlertCircle size={16} /> Disadvantages</p>
                                <ul style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    {project.disadvantages?.map((dis, idx) => <li key={idx}>• {dis}</li>) || <li>Environmental noise susceptibility</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Parts Section */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>Required Hardware</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {project.parts?.map((part, idx) => (
                            <div key={idx} className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'var(--surface)', padding: '1rem', borderRadius: '1rem' }}>
                                    <ShoppingCart className="text-primary" />
                                </div>
                                <p style={{ fontWeight: '600' }}>{part.name}</p>
                                <button
                                    className="btn btn-outline"
                                    style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}
                                    onClick={() => window.open(part.buyLink, '_blank')}
                                >
                                    Order on Robu.in <ExternalLink size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}