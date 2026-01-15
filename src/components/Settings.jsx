import React from 'react';
import { motion } from 'framer-motion';
import {
    Moon, Sun, Shield, Info, FileText, Lock, MessageSquare, Sparkles,
    Github, Twitter, Linkedin, Youtube, ChevronRight, LogOut, LayoutGrid, Zap, BookOpen, Share2, User
} from 'lucide-react';

const SettingsItem = ({ icon: Icon, label, onClick, color = 'var(--text)', value }) => (
    <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            background: 'var(--surface)',
            borderRadius: '1rem',
            marginBottom: '0.75rem',
            border: '1px solid var(--border)',
            cursor: 'pointer'
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: `rgba(var(--primary-rgb), 0.05)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: color
            }}>
                <Icon size={20} />
            </div>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)' }}>{label}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {value && <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{value}</span>}
            <ChevronRight size={18} color="var(--text-muted)" />
        </div>
    </motion.div>
);

const SectionHeader = ({ title }) => (
    <h3 style={{
        fontSize: '0.85rem',
        fontWeight: 800,
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginTop: '2rem',
        marginBottom: '1rem',
        paddingLeft: '0.5rem',
        letterSpacing: '0.05em'
    }}>
        {title}
    </h3>
);

import MobileShareSheet from './mobile/MobileShareSheet';

export default function Settings({ theme, toggleTheme, setView, isAdmin }) {
    const isMobile = window.innerWidth <= 820;
    const [isShareOpen, setIsShareOpen] = React.useState(false);

    const socialLinks = [
        { icon: Github, label: 'GitHub', url: 'https://github.com/Start-hack' },
        { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/nishanth-m-853876295/' },
        { icon: Twitter, label: 'Twitter', url: 'https://x.com/Nishanth__M' },
        { icon: Youtube, label: 'YouTube', url: 'https://youtube.com/@techwithembedded?si=Fw0pXGjkMXRryS2U' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
                padding: isMobile ? '1.25rem' : '4rem',
                paddingTop: isMobile ? '80px' : '6rem',
                minHeight: '100vh',
                maxWidth: '800px',
                margin: '0 auto'
            }}
        >

            <SectionHeader title="Preferences" />
            <SettingsItem
                icon={theme === 'dark' ? Moon : Sun}
                label="App Theme"
                value={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                onClick={toggleTheme}
                color={theme === 'dark' ? '#fbbf24' : '#f59e0b'}
            />
            <SettingsItem
                icon={Sparkles}
                label="Nexus AI Assistant"
                onClick={() => setView('assistant')}
                color="#8b5cf6"
            />

            <SectionHeader title="Platform" />

            <SettingsItem
                icon={Zap}
                label="Share Your Project"
                onClick={() => setView('share-project')}
                color="#f59e0b"
            />

            <SettingsItem
                icon={Info}
                label="About Platform"
                onClick={() => setView('about')}
                color="#3b82f6"
            />
            <SettingsItem
                icon={BookOpen}
                label="Engineering Blog"
                onClick={() => setView('blog')}
                color="#10b981"
            />
            {isMobile && (
                <SettingsItem
                    icon={Share2}
                    label="Share Platform"
                    onClick={() => setIsShareOpen(true)}
                    color="#ec4899"
                />
            )}
            <SettingsItem
                icon={MessageSquare}
                label="User Reviews"
                onClick={() => setView('reviews-page')}
                color="#f43f5e"
            />

            <MobileShareSheet
                isOpen={isShareOpen}
                onClose={() => setIsShareOpen(false)}
                title="IoTNext Platform"
                description="Check out this High-Fidelity Engineering Repository for IoT enthusiasts!"
                url={window.location.origin}
            />

            {isAdmin && (
                <>
                    <SectionHeader title="Administration" />
                    <SettingsItem
                        icon={Shield}
                        label="Admin Dashboard"
                        onClick={() => setView('admin-dashboard')}
                        color="#ef4444"
                    />
                </>
            )}

            <SectionHeader title="Legal & Privacy" />
            <SettingsItem
                icon={FileText}
                label="Terms of Access"
                onClick={() => setView('terms')}
                color="#64748b"
            />


            <SettingsItem
                icon={Lock}
                label="Privacy Protocol"
                onClick={() => setView('privacy')}
                color="#64748b"
            />

            <SectionHeader title="Connect" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                        <motion.a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1rem',
                                background: 'var(--surface)',
                                borderRadius: '1rem',
                                border: '1px solid var(--border)',
                                color: 'var(--text)',
                                textDecoration: 'none'
                            }}
                        >
                            <Icon size={24} />
                            <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{social.label}</span>
                        </motion.a>
                    );
                })}
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    IoTNext v2.5.0 (Beta)
                </p>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', opacity: 0.6, marginTop: '0.2rem' }}>
                    Built with ❤️ by Nishanth
                </p>
            </div>

            {/* Safe area padding for bottom nav */}
            <div style={{ height: '40px' }} />
        </motion.div>
    );
}
