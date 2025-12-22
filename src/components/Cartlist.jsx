import React from 'react';
import { motion } from 'framer-motion';
import { kits } from '../data/sensors';
import { ShoppingBag, ChevronRight, Check, ListChecks, ArrowRight } from 'lucide-react';

export default function Cartlist() {
    return (
        <section className="container" id="kits" style={{ padding: '0 0 6rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem' }}>Essential Lab BOMs</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Curated hardware checklists to kickstart your journey at any level</p>
            </div>

            <div className="grid grid-3" style={{ gap: '2rem' }}>
                {kits.map((kit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass"
                        style={{
                            padding: '2.5rem',
                            borderRadius: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            border: '1px solid var(--border)',
                            background: 'var(--surface)'
                        }}
                    >
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <span className={`badge badge-${kit.level.toLowerCase()}`} style={{ fontSize: '0.7rem' }}>{kit.level}</span>
                                <ListChecks size={20} className="text-primary" />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.75rem' }}>{kit.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>{kit.description}</p>
                        </div>

                        <div style={{ flex: 1 }}>
                            <h4 style={{ fontSize: '0.9rem', color: 'var(--text)', marginBottom: '1.25rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>Required Components</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {kit.items.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: 'var(--text)' }}>
                                        <div style={{ background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', padding: '0.3rem', borderRadius: '0.5rem', display: 'flex' }}>
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                            <button
                                className="btn btn-primary"
                                style={{ width: '100%', justifyContent: 'center', padding: '1.2rem', borderRadius: '1rem', fontSize: '1.1rem' }}
                                onClick={() => window.open('https://robu.in', '_blank')}
                            >
                                Source on Robu.in <ArrowRight size={20} />
                            </button>
                            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                                High-quality parts for reliable builds
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ marginTop: '5rem', textAlign: 'center' }}
                className="glass"
            >
                <div style={{ padding: '3rem', borderRadius: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', background: 'linear-gradient(to right, transparent, rgba(var(--primary-rgb), 0.05), transparent)' }}>
                    <div style={{ padding: '1.5rem', background: 'var(--surface-hover)', borderRadius: '1.5rem', color: 'var(--primary)' }}>
                        <ShoppingBag size={40} />
                    </div>
                    <div style={{ maxWidth: '600px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Procurement Support</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                            All components listed are standard IoT curriculum parts. We recommend <strong>Robu.in</strong> for fast delivery and genuine parts. Prices vary based on demand and location.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}