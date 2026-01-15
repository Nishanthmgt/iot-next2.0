import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Home, Map, Zap, Cpu, Search, Moon, Sun, ShoppingCart, Menu, X, PlusCircle, BookOpen, HelpCircle, Info, Activity, Shield, Layers, Mail, Github, Linkedin,
    Sparkles, Box, User, Heart, Settings as SettingsIcon, LogOut, Grid, Bookmark
} from 'lucide-react';
import { useDashboardData } from '../hooks/useDashboardData';

const Navbar = ({ setView, currentView, theme, toggleTheme, setIsSearchOpen, buildList = [] }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);
    // FIX 1: Destructure userAvatar
    const { isAuthenticated, userName, userAvatar } = useDashboardData();

    // FIX 2: Ensure userName is safe
    const safeUserName = userName || 'Engineer';

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleToggle = (e) => {
            setMobileMenuOpen(e.detail?.open ?? !mobileMenuOpen);
        };
        window.addEventListener('iotnext-menu-toggle', handleToggle);
        return () => window.removeEventListener('iotnext-menu-toggle', handleToggle);
    }, [mobileMenuOpen]);

    const navItems = [
        { id: 'home', label: 'Home', icon: <Home size={20} /> },
        { id: 'roadmap', label: 'Roadmap', icon: <Map size={20} /> },
        { id: 'projects', label: 'Projects', icon: <Layers size={20} /> },
        { id: 'sensors', label: 'Sensors', icon: <Cpu size={20} /> },
        { id: 'pinout', label: 'Pinout Lab', icon: <Activity size={20} /> },
    ];

    const handleNavClick = (id) => {
        setView(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: isScrolled ? (isMobile ? '52px' : '56px') : '64px',
        paddingTop: 'env(safe-area-inset-top)',
        background: isScrolled
            ? (theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'var(--glass)')
            : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: isScrolled
            ? (theme === 'light' ? '1px solid rgba(0,0,0,0.05)' : '1px solid var(--border)')
            : '1px solid transparent',
        boxShadow: isScrolled
            ? (theme === 'light' ? '0 4px 20px rgba(0,0,0,0.06)' : 'none')
            : 'none',
        transition: 'all 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
    };

    const safeCurrentView = currentView || 'home';

    return (
        <>
            <nav style={navStyle}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                    {/* Logo Section */}
                    <motion.div
                        id="tour-logo"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            if (isMobile && isAuthenticated && currentView === 'home') {
                                setView('dashboard');
                            } else {
                                handleNavClick('home');
                            }
                        }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            cursor: 'pointer'
                        }}
                        className="nav-logo"
                    >
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '10px',
                            background: 'white',
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(99, 102, 241, 0.1)',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="/logo.png"
                                alt="IoTNext Logo"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    padding: '2px'
                                }}
                            />
                        </div>
                        <span style={{
                            fontSize: isMobile ? '1.2rem' : '1.4rem',
                            fontWeight: '800',
                            color: 'var(--text)',
                            letterSpacing: '-0.03em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1px'
                        }}>
                            IoT<span style={{
                                color: 'var(--primary)'
                            }}>next</span>
                        </span>
                    </motion.div>

                    {/* Desktop Menu - Hidden on Mobile */}
                    <div className="desktop-only" style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <ul style={{
                            display: 'flex',
                            gap: '1.5rem',
                            alignItems: 'center',
                            background: 'var(--surface)',
                            padding: '0.4rem 1.5rem',
                            borderRadius: '50px',
                            border: '1px solid var(--border)',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                        }}>
                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    id={`tour-nav-${item.id}`}
                                    className={item.desktopOnly ? 'desktop-only' : ''}
                                    onClick={() => handleNavClick(item.id)}
                                    style={{
                                        cursor: 'pointer',
                                        color: safeCurrentView === item.id
                                            ? (theme === 'light' ? 'var(--primary)' : 'white')
                                            : 'var(--text-muted)',
                                        background: safeCurrentView === item.id
                                            ? (theme === 'light' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.1)')
                                            : 'transparent',
                                        padding: '0.35rem 0.85rem',
                                        borderRadius: '50px',
                                        fontSize: '0.8rem',
                                        fontWeight: '750',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Actions Group */}
                    <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <button
                            onClick={() => setView('cartlist')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                background: 'transparent',
                                color: theme === 'light' ? 'var(--text)' : 'white',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: '600'
                            }}
                        >
                            <ShoppingCart size={20} />
                            <span>Cart</span>
                        </button>

                        <button
                            id="tour-search"
                            onClick={() => setIsSearchOpen?.(true)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.5rem 1.25rem',
                                background: theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
                                color: theme === 'light' ? 'var(--text)' : 'white',
                                border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                fontWeight: '700'
                            }}
                        >
                            <Search size={18} />
                            <span>Search</span>
                        </button>

                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', alignItems: 'center' }}>
                            <Shield size={20} style={{ cursor: 'pointer' }} onClick={() => setView('admin-login')} />
                            {theme === 'dark' ? (
                                <Sun size={20} style={{ cursor: 'pointer' }} onClick={toggleTheme} />
                            ) : (
                                <Moon size={20} style={{ cursor: 'pointer' }} onClick={toggleTheme} />
                            )}
                        </div>

                        <button
                            id="tour-share"
                            onClick={() => setView('share-project')}
                            style={{
                                padding: '0.6rem 1.5rem',
                                borderRadius: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                color: 'white',
                                border: 'none',
                                background: '#6366f1',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                fontWeight: '750',
                                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                            }}
                        >
                            <PlusCircle size={18} /> Share
                        </button>

                        {!isAuthenticated ? (
                            <>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setView('login')}
                                    style={{
                                        background: 'var(--primary)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '0.75rem',
                                        padding: '0.5rem 1rem',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    Login
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setView('login')}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '12px',
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-muted)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <img
                                        src="/logo.png"
                                        alt="IoTNext"
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </motion.button>
                            </>
                        ) : (
                            <div style={{ position: 'relative' }}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => isMobile ? setView('settings') : setIsProfileOpen(!isProfileOpen)}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'var(--surface)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        border: '2px solid var(--border)',
                                        cursor: 'pointer',
                                        overflow: 'hidden',
                                        padding: 0
                                    }}
                                >
                                    {/* FIX 3: Safe usage of userAvatar */}
                                    {userAvatar ? (
                                        <img src={userAvatar} alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text)' }}>
                                            {(safeUserName || 'U').charAt(0)}
                                        </div>
                                    )}
                                </motion.button>

                                {/* Desktop Profile Dropdown */}
                                {!isMobile && isProfileOpen && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '120%',
                                        right: 0,
                                        width: '220px',
                                        background: 'var(--surface)',
                                        borderRadius: '1rem',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                                        border: '1px solid var(--border)',
                                        overflow: 'hidden',
                                        zIndex: 1000
                                    }}>
                                        <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>
                                            <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{safeUserName}</div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Signed In</div>
                                        </div>
                                        <div style={{ padding: '0.5rem' }}>
                                            {[
                                                { label: 'My Dashboard', icon: Grid, action: () => setView('dashboard') },
                                                { label: 'Saved Projects', icon: Heart, action: () => setView('projects') },
                                                { label: 'Settings', icon: SettingsIcon, action: () => setView('settings') },
                                            ].map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    onClick={() => { item.action(); setIsProfileOpen(false); }}
                                                    className="dropdown-item"
                                                    style={{
                                                        padding: '0.75rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.75rem',
                                                        cursor: 'pointer',
                                                        borderRadius: '0.5rem',
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text)',
                                                        transition: 'background 0.2s'
                                                    }}
                                                    onMouseEnter={(e) => e.target.style.background = 'var(--bg)'}
                                                    onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                                >
                                                    <item.icon size={16} color="var(--text-muted)" />
                                                    {item.label}
                                                </div>
                                            ))}
                                            <div style={{ borderTop: '1px solid var(--border)', margin: '0.5rem 0' }} />
                                            <div
                                                onClick={() => { setView('settings'); setIsProfileOpen(false); }}
                                                style={{
                                                    padding: '0.75rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.75rem',
                                                    cursor: 'pointer',
                                                    borderRadius: '0.5rem',
                                                    fontSize: '0.85rem',
                                                    color: '#ef4444'
                                                }}
                                                onMouseEnter={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.1)'}
                                                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                            >
                                                <LogOut size={16} />
                                                Sign Out
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="mobile-only" style={{ gap: '0.8rem', alignItems: 'center' }}>
                        <button
                            id="tour-mobile-search"
                            onClick={() => setIsSearchOpen?.(true)}
                            style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--surface)',
                                color: 'var(--primary)',
                                border: '1px solid var(--border)',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}
                        >
                            <Search size={22} />
                        </button>
                        <button
                            id="tour-mobile-menu"
                            onClick={() => setMobileMenuOpen(true)}
                            style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--surface)',
                                color: 'var(--text)',
                                border: '1px solid var(--border)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </nav >

            {/* Mobile Bottom Navigation Bar */}
            < div className="bottom-nav mobile-only" >
                {
                    navItems.map((item) => (
                        <div
                            key={item.id}
                            id={`tour-mobile-nav-${item.id}`}
                            className={`bottom-nav-item ${safeCurrentView === item.id ? 'active' : ''}`}
                            onClick={() => handleNavClick(item.id)}
                        >
                            <div className="nav-icon-wrapper" style={{ transition: 'none' }}>
                                {React.cloneElement(item.icon, { size: 22 })}
                            </div>
                            <span style={{ fontSize: '0.65rem', marginTop: '4px' }}>{item.label}</span>
                        </div>
                    ))
                }
            </div >

            {/* Mobile Menu Drawer Overlay */}
            < div
                className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            < div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} style={{ paddingBottom: 'calc(2rem + 70px)' }}>
                <div className="drawer-handle" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--text)', fontWeight: '900' }}>Settings & Logic</h3>
                        <X size={24} onClick={() => setMobileMenuOpen(false)} style={{ cursor: 'pointer', color: 'var(--text-muted)' }} />
                    </div>


                    {/* Mobile Auth & Dashboard */}
                    {isAuthenticated ? (
                        <div
                            onClick={() => { setView('dashboard'); setMobileMenuOpen(false); }}
                            style={{
                                padding: '1rem',
                                borderRadius: '1rem',
                                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between', // Space for arrow/icon
                                gap: '0.75rem',
                                cursor: 'pointer',
                                marginBottom: '0.5rem',
                                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                {/* User Avatar Small */}
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                                    {userAvatar ? <img src={userAvatar} style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> : (safeUserName || 'U').charAt(0)}
                                </div>
                                <span style={{ fontSize: '1rem', fontWeight: '700' }}>My Dashboard</span>
                            </div>
                            <Grid size={20} />
                        </div>
                    ) : (
                        <div
                            onClick={() => { setView('login'); setMobileMenuOpen(false); }}
                            style={{
                                padding: '1rem',
                                borderRadius: '1rem',
                                background: 'var(--primary)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                cursor: 'pointer',
                                marginBottom: '0.5rem',
                                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                            }}
                        >
                            <span style={{ fontSize: '1rem', fontWeight: '700' }}>Login / Sign Up</span>
                            <User size={20} />
                        </div>
                    )}

                    {/* Quick Toggles */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div
                            onClick={() => { toggleTheme(); }}
                            style={{
                                padding: '1.25rem',
                                borderRadius: '1.25rem',
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                alignItems: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            {theme === 'dark' ? <Sun size={24} color="var(--primary)" /> : <Moon size={24} color="var(--primary)" />}
                            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text)' }}>Theme</span>
                        </div>

                        <div
                            onClick={() => { setView('admin-login'); setMobileMenuOpen(false); }}
                            style={{
                                padding: '1.25rem',
                                borderRadius: '1.25rem',
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                alignItems: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            <Shield size={24} color="#ef4444" />
                            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text)' }}>Admin</span>
                        </div>
                    </div>


                    {/* Governance & Logic Section */}
                    <div style={{ marginTop: '0.5rem' }}>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: '900', letterSpacing: '0.05em' }}>GOVERNANCE & LOGIC</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                            {[
                                { id: 'mastery', label: 'Mastery Hub', icon: <Sparkles size={18} /> },
                                { id: 'about', label: 'About Us', icon: <Info size={18} /> },
                                { id: 'qa', label: 'Q&A', icon: <HelpCircle size={18} /> },
                                { id: 'blog', label: 'Blog', icon: <BookOpen size={18} /> },
                                { id: 'support', label: 'Support', icon: <Mail size={18} />, action: () => window.location.href = 'mailto:circuitvibe0311@gmail.com' }
                            ].map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => { item.action ? item.action() : setView(item.id); setMobileMenuOpen(false); }}
                                    style={{
                                        padding: '1rem',
                                        borderRadius: '1rem',
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text)' }}>{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', padding: '0.5rem 0' }}>
                            <span
                                onClick={() => { setView('privacy'); setMobileMenuOpen(false); }}
                                style={{ fontSize: '0.8rem', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: '600' }}
                            >
                                Privacy Protocol
                            </span>
                            <span
                                onClick={() => { setView('terms'); setMobileMenuOpen(false); }}
                                style={{ fontSize: '0.8rem', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: '600' }}
                            >
                                Terms of Access
                            </span>
                        </div>
                    </div>

                    {/* Socials & Brand */}
                    <div style={{
                        marginTop: '1rem',
                        paddingTop: '1.5rem',
                        borderTop: '1px solid var(--border)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.25rem'
                    }}>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <a href="https://github.com/Nishanthmgt" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}><Github size={22} /></a>
                            <a href="https://x.com/circuitvibe0311" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/m-nishanth-1193a332a" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}><Linkedin size={22} /></a>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '0.5rem' }}>
                                © 2026 iotnext.store. All protocols observed.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '800' }}>
                                <Zap size={12} />
                                <span>v2.1 Stable Build</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Navbar;
