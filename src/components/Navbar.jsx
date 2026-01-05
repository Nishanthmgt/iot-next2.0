import React, { useState, useEffect } from 'react';
import { Home, Map, Zap, Cpu, Search, Moon, Sun, ShoppingCart, Menu, X, PlusCircle, BookOpen, HelpCircle, Info, Activity, Shield, Layers, Github, Twitter, Linkedin, Mail, GraduationCap, Binary, Sparkles } from 'lucide-react';

const Navbar = ({ setView, currentView, theme, toggleTheme, setIsSearchOpen, buildList = [] }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
        { id: 'iot-builder', label: 'IoT Builder', icon: <Sparkles size={20} /> }
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
        height: '72px',
        background: isScrolled ? 'var(--glass)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
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
                    <div
                        id="tour-logo"
                        onClick={() => handleNavClick('home')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            cursor: 'pointer'
                        }}
                        className="nav-logo"
                    >
                        <div style={{
                            width: '36px',
                            height: '36px',
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
                            fontSize: '1.6rem',
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
                    </div>

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
                                    onClick={() => handleNavClick(item.id)}
                                    style={{
                                        fontSize: '0.85rem',
                                        fontWeight: safeCurrentView === item.id ? '700' : '500',
                                        cursor: 'pointer',
                                        color: safeCurrentView === item.id ? 'var(--primary)' : 'var(--text-muted)',
                                        transition: 'all 0.3s ease',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '12px',
                                        background: safeCurrentView === item.id ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (safeCurrentView !== item.id) {
                                            e.target.style.color = 'var(--text)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (safeCurrentView !== item.id) {
                                            e.target.style.color = 'var(--text-muted)';
                                        }
                                    }}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Actions Group */}
                    <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button
                            onClick={() => setView('cartlist')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.6rem 1.25rem',
                                background: 'transparent',
                                color: currentView === 'cartlist' ? 'var(--primary)' : 'var(--text-muted)',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <ShoppingCart size={18} />
                            <span>Cart</span>
                        </button>

                        <button
                            id="tour-search"
                            onClick={() => setIsSearchOpen?.(true)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.6rem 1.5rem',
                                background: 'var(--surface)',
                                color: 'var(--text)',
                                border: '1px solid var(--border)',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--primary)';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <Search size={18} />
                            <span>Search</span>
                        </button>

                        <button
                            onClick={() => setView('admin-login')}
                            style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-muted)',
                                border: '1px solid var(--border)',
                                background: 'var(--surface)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            title="Admin Portal"
                        >
                            <Shield size={20} />
                        </button>

                        <button
                            id="tour-theme"
                            onClick={toggleTheme}
                            style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-muted)',
                                border: '1px solid var(--border)',
                                background: 'var(--surface)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            id="tour-share"
                            onClick={() => setView('share-project')}
                            style={{
                                padding: '0.7rem 1.75rem',
                                borderRadius: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                color: 'white',
                                border: 'none',
                                background: 'var(--primary)',
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                fontWeight: '750',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 4px 15px rgba(var(--primary-rgb), 0.3)'
                            }}
                        >
                            <PlusCircle size={18} /> Share
                        </button>
                    </div>

                    <div className="mobile-only" style={{ gap: '0.8rem', alignItems: 'center' }}>
                        <button
                            id="tour-mobile-share"
                            onClick={() => setView('share-project')}
                            style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#6366f1',
                                color: 'white',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)'
                            }}
                        >
                            <PlusCircle size={26} />
                        </button>
                        <button
                            id="tour-mobile-search"
                            onClick={() => setIsSearchOpen?.(true)}
                            style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--surface)',
                                color: 'var(--primary)',
                                border: '1px solid var(--border)'
                            }}
                        >
                            <Search size={26} />
                        </button>
                        <button
                            id="tour-mobile-menu"
                            onClick={() => setMobileMenuOpen(true)}
                            style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--surface)',
                                color: 'var(--text)',
                                border: '1px solid var(--border)'
                            }}
                        >
                            <Menu size={26} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Navigation Bar */}
            <div className="bottom-nav mobile-only">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        id={`tour-mobile-nav-${item.id}`}
                        className={`bottom-nav-item ${safeCurrentView === item.id ? 'active' : ''}`}
                        onClick={() => handleNavClick(item.id)}
                    >
                        <div className="nav-icon-wrapper" style={{ height: '40px' }}>
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <span style={{ fontSize: '0.65rem' }}>{item.label}</span>
                    </div>
                ))}
            </div>

            {/* Mobile Menu Drawer Overlay */}
            <div
                className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} style={{ paddingBottom: 'calc(2rem + 70px)' }}>
                <div className="drawer-handle" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--text)', fontWeight: '900' }}>Settings & Logic</h3>
                        <X size={24} onClick={() => setMobileMenuOpen(false)} style={{ cursor: 'pointer', color: 'var(--text-muted)' }} />
                    </div>

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
            </div>
        </>
    );
};

export default Navbar;
