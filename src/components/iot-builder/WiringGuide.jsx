import React from 'react';
import { motion } from 'framer-motion';
import { Cable, ChevronRight, Share2 } from 'lucide-react';

export default function WiringGuide({ config }) {
    if (!config || !config.sensors || config.sensors.length === 0) {
        return (
            <div className="glass" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No hardware configured yet.
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass"
            style={{ padding: '2rem', borderRadius: '1.5rem' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Cable size={24} color="var(--primary)" />
                    Wiring Logic: {config.boardId.toUpperCase()}
                </h4>
                <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                    <Share2 size={16} /> Share Diagram
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {config.sensors.map((sensor, idx) => (
                    <div key={idx} className="glass" style={{ padding: '1.5rem', borderRadius: '1.25rem', background: 'rgba(255,255,255,0.02)' }}>
                        <div style={{ fontWeight: 800, marginBottom: '1rem', color: 'var(--primary)', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                            Connector: {sensor.name}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            {Object.entries(sensor.pinMapping || {}).map(([label, pin], pIdx) => (
                                <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--surface)', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                                    <div style={{ background: 'var(--primary)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 900 }}>{label}</div>
                                    <ChevronRight size={14} opacity={0.5} />
                                    <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{pin}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(var(--primary-rgb), 0.05)', borderRadius: '1rem', border: '1px solid rgba(var(--primary-rgb), 0.1)', fontSize: '0.85rem' }}>
                <strong>Pro Tip:</strong> Always double-check your connections before powering up the board!
            </div>
        </motion.div>
    );
}
