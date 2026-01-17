import React from 'react';
import { Home, Compass, FolderKanban, User, LayoutGrid, Sparkles, Cpu } from 'lucide-react';

const MobileBottomNav = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'roadmap', label: 'Roadmap', icon: Compass },
        { id: 'sensors', label: 'Sensors', icon: Cpu },
        { id: 'projects', label: 'Projects', icon: FolderKanban },
        { id: 'pinout', label: 'Pinout', icon: LayoutGrid },
    ];

    return (
        <div className="mobile-bottom-nav glass" style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: 'calc(64px + env(safe-area-inset-bottom))',
            paddingBottom: 'env(safe-area-inset-bottom)',
            background: 'rgba(var(--background-rgb), 0.9)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 1000
        }}>
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id || (activeTab.startsWith(tab.id + '/') && tab.id !== 'home');
                const Icon = tab.icon;

                return (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        style={{
                            flex: 1,
                            background: 'none',
                            border: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.3rem',
                            padding: '0.5rem',
                            cursor: 'pointer',
                            color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <div style={{
                            position: 'relative'
                        }}>
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                            {isActive && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-8px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '4px',
                                    height: '4px',
                                    borderRadius: '50%',
                                    background: 'var(--primary)',
                                    boxShadow: '0 0 8px var(--primary)'
                                }} />
                            )}
                        </div>
                        <span style={{
                            fontSize: '0.7rem',
                            fontWeight: isActive ? '700' : '500',
                            letterSpacing: '-0.01em'
                        }}>
                            {tab.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default MobileBottomNav;
