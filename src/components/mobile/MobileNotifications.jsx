import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Star, BookOpen, Info, CheckCircle, Cpu, Maximize } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import localProjects from '../../data/projects.json';

const NotificationItem = ({ type, data, delay }) => {
    let icon, title, desc, color, bg;

    if (type === 'review') {
        icon = <Star size={16} fill="currentColor" stroke="none" />;
        title = "New 5-Star Review";
        desc = `${data.user} says: "${data.text.substring(0, 40)}..."`;
        color = '#fbbf24';
        bg = 'rgba(251, 191, 36, 0.1)';
    } else if (type === 'project') {
        icon = <BookOpen size={16} />;
        title = "New Project Added";
        desc = `${data.title} (${data.level})`;
        color = '#3b82f6';
        bg = 'rgba(59, 130, 246, 0.1)';
    } else if (type === 'sensor') {
        icon = <Cpu size={16} />;
        title = "New Sensor Available";
        desc = `${data.name} added to Registry.`;
        color = '#10b981';
        bg = 'rgba(16, 185, 129, 0.1)';
    } else if (type === 'board') {
        icon = <Maximize size={16} />;
        title = "New Hardware Board";
        desc = `${data.name} pinout is live.`;
        color = '#8b5cf6';
        bg = 'rgba(139, 92, 246, 0.1)';
    } else {
        icon = <Info size={16} />;
        title = "System Update";
        desc = "Welcome back! All databases synced.";
        color = '#f43f5e';
        bg = 'rgba(244, 63, 94, 0.1)';
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay * 0.1 }}
            style={{
                background: 'var(--surface)', padding: '1rem',
                borderRadius: '1rem', marginBottom: '0.75rem',
                display: 'flex', gap: '1rem',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
            }}
        >
            <div style={{
                width: '40px', height: '40px', borderRadius: '12px',
                background: bg, color: color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
            }}>
                {icon}
            </div>
            <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.1rem', color: 'var(--text)' }}>
                    {title} <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500' }}>• Just now</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    {desc}
                </div>
            </div>
        </motion.div>
    );
};

export default function MobileNotifications({ onClose, theme }) {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLive = async () => {
            setLoading(true);
            const feed = [];

            // 1. Fetch Latest Reviews
            const { data: reviews } = await supabase.from('reviews').select('*').order('created_at', { ascending: false }).limit(2);
            if (reviews) reviews.forEach(r => feed.push({ type: 'review', data: r, id: `rev - ${r.id} ` }));

            // 2. Fetch Latest Sensors
            const { data: sensors } = await supabase.from('sensors').select('id, name, type').order('id', { ascending: false }).limit(2);
            if (sensors) sensors.forEach(s => feed.push({ type: 'sensor', data: s, id: `sens - ${s.id} ` }));

            // 3. Simulated "New" Projects (Highest IDs)
            const newProjects = [...localProjects].sort((a, b) => b.id - a.id).slice(0, 2);
            newProjects.forEach(p => feed.push({ type: 'project', data: p, id: `proj - ${p.id} ` }));

            // 4. Simulated "New" Boards (Just picking from a static list since we don't have a DB for boards yet)
            const newBoards = [
                { name: 'ESP32 S3', id: 'b1' },
                { name: 'Raspberry Pi Pico W', id: 'b2' }
            ];
            newBoards.forEach(b => feed.push({ type: 'board', data: b, id: `board - ${b.id} ` }));

            // Shuffle reasonably or sort to mix them up to look like a timeline
            // Since we don't have real dates for all, we'll interleave them
            const mixedFeed = [];
            const maxLength = Math.max(feed.length, 6); // visual cap
            for (let i = 0; i < maxLength; i++) {
                if (feed[i]) mixedFeed.push(feed[i]);
            }

            // Add system msg at top
            mixedFeed.unshift({ type: 'system', id: 'sys-welcome' });

            setNotifications(mixedFeed);
            setLoading(false);
        };
        fetchLive();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed', inset: 0, zIndex: 2000,
                background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                padding: '2rem 1rem 1rem 1rem', display: 'flex', flexDirection: 'column'
            }}
        >
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{
                    background: 'var(--background)',
                    borderRadius: '2rem',
                    display: 'flex', flexDirection: 'column',
                    maxHeight: '85vh',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    border: '1px solid var(--border)'
                }}
            >
                {/* Header */}
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Bell size={24} color="var(--primary)" />
                            <span style={{ position: 'absolute', top: -2, right: -2, width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }} />
                        </div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0 }}>Live Updates</h2>
                    </div>
                    <button onClick={onClose} style={{ background: 'var(--surface)', border: 'none', padding: '0.5rem', borderRadius: '50%', color: 'var(--text)' }}>
                        <X size={20} />
                    </button>
                </div>

                {/* List */}
                <div style={{ padding: '1rem', overflowY: 'auto' }}>
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>Syncing with cloud...</div>
                    ) : (
                        notifications.map((item, i) => (
                            <NotificationItem key={item.id} type={item.type} data={item.data} delay={i} />
                        ))
                    )}

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <div style={{ width: '40px', height: '4px', background: 'var(--border)', borderRadius: '2px', margin: '0 auto 1rem auto' }} />
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>That's all for today.</p>
                    </div>
                </div>

                {/* Footer Action */}
                <div style={{ padding: '1rem', borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
                    <button
                        onClick={onClose}
                        style={{
                            width: '100%', padding: '1rem', background: 'var(--primary)', color: 'white',
                            border: 'none', borderRadius: '1rem', fontWeight: '800', fontSize: '1rem'
                        }}
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}
