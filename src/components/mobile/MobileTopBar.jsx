import React from 'react';
import { ChevronLeft, Bell, Settings, Search, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileTopBar = ({ title = "Dashboard", showBack = false, onBack, onSettings, onSearch, onNotifications, onShare, onLogoClick, userAvatar }) => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mobile-top-bar glass"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: 'calc(56px + env(safe-area-inset-top))',
                paddingTop: 'env(safe-area-inset-top)',
                paddingLeft: '1.25rem',
                paddingRight: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 1000,
                borderBottom: '1px solid var(--border)',
                background: 'rgba(var(--background-rgb), 0.85)',
                backdropFilter: 'blur(12px)'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                {showBack ? (
                    <button
                        onClick={onBack}
                        style={{
                            background: 'none',
                            border: 'none',
                            padding: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text)',
                            cursor: 'pointer'
                        }}
                    >
                        <ChevronLeft size={24} />
                    </button>
                ) : (
                    <div
                        onClick={onLogoClick}
                        style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: '800',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            zIndex: 1002, // Boosting z-index
                            pointerEvents: 'auto' // Forcing pointer events
                        }}>
                        {userAvatar ? (
                            <img src={userAvatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            "IN"
                        )}
                    </div>
                )}

                <h1 style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    margin: 0,
                    letterSpacing: '-0.02em',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}>
                    {title}
                </h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {onShare && (
                    <Share2
                        size={22}
                        color="var(--text)"
                        style={{ opacity: 0.8, cursor: 'pointer' }}
                        onClick={onShare}
                    />
                )}
                <Search
                    size={22}
                    color="var(--text)"
                    style={{ opacity: 0.8, cursor: 'pointer' }}
                    onClick={onSearch}
                />
                <Settings
                    size={22}
                    color="var(--text)"
                    style={{ opacity: 0.8, cursor: 'pointer' }}
                    onClick={onSettings}
                />
                <Bell
                    size={22}
                    color="var(--text)"
                    style={{ opacity: 0.8, cursor: 'pointer' }}
                    onClick={onNotifications}
                />
            </div>
        </motion.div>
    );
};

export default MobileTopBar;
