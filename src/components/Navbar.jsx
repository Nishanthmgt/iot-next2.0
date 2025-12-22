import React from 'react';
import { Cpu, BookOpen, Layers, Zap, Menu, X, Users, Sun, Moon, ShoppingBag, Info, MessageSquare } from 'lucide-react';

export default function Navbar({ currentView, setView, theme, toggleTheme, isScrolled }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const navItems = [
        { id: 'home', label: 'Home', icon: <Cpu size={18} /> },
        { id: 'basics', label: 'Basics', icon: <BookOpen size={18} /> },
        { id: 'roadmap', label: 'Roadmap', icon: <Layers size={18} /> },
        { id: 'projects', label: 'Projects', icon: <Zap size={18} /> },
        { id: 'sensors', label: 'Sensors', icon: <BookOpen size={18} /> },
        { id: 'cartlist', label: 'Cartlist', icon: <ShoppingBag size={18} /> },
    ];

    const handleNavClick = (id) => {
        if (id === 'community') {
            const element = document.getElementById('community');
            if (element && currentView === 'home') {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                setView('home');
                setTimeout(() => {
                    document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (id === 'about') {
            const element = document.getElementById('why');
            if (element && currentView === 'home') {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                setView('home');
                setTimeout(() => {
                    document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            setView(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const navStyle = {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.6rem 0' : '1rem 0',
        background: isScrolled ? 'var(--glass)' : 'rgba(var(--background-rgb), 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        width: '100%'
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                    onClick={() => handleNavClick('home')}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '1.6rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '-1px' }}
                >
                    <div style={{ background: 'var(--primary)', color: 'white', padding: '0.4rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Cpu size={24} />
                    </div>
                    <span style={{ color: 'var(--text)' }}>IoT<span style={{ color: 'var(--primary)' }}>next</span></span>
                </div>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-flex">
                    <ul style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }} className="desktop-nav">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    cursor: 'pointer',
                                    color: currentView === item.id ? 'var(--primary)' : 'var(--text-muted)',
                                    fontWeight: currentView === item.id ? '700' : '500',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.85rem',
                                    position: 'relative',
                                    padding: '0.4rem 0'
                                }}
                            >
                                {item.label}
                                {currentView === item.id && (
                                    <span style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'var(--primary)', borderRadius: '2px' }} />
                                )}
                            </li>
                        ))}

                        {/* Separator */}
                        <div style={{ width: '1px', height: '1.5rem', background: 'var(--border)', margin: '0 0.5rem' }}></div>

                        <li
                            onClick={() => handleNavClick('about')}
                            style={{ cursor: 'pointer', color: 'var(--text-muted)', fontWeight: '600', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', borderRadius: '0.5rem', transition: 'var(--transition)' }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                            <Info size={16} /> About
                        </li>
                        <li
                            onClick={() => handleNavClick('community')}
                            style={{ cursor: 'pointer', color: 'var(--text-muted)', fontWeight: '600', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', borderRadius: '0.5rem', transition: 'var(--transition)' }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                            <MessageSquare size={16} /> Community
                        </li>
                    </ul>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                            onClick={toggleTheme}
                            style={{
                                padding: '0.6rem',
                                borderRadius: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text)',
                                border: '1px solid var(--border)',
                                background: 'var(--surface-hover)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle Group */}
                <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="mobile-flex">
                    <button
                        onClick={toggleTheme}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '0.6rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text)',
                            border: '1px solid var(--border)',
                            background: 'var(--surface-hover)'
                        }}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', color: 'var(--text)', background: 'var(--surface-hover)', padding: '0.5rem', borderRadius: '0.60rem', border: '1px solid var(--border)' }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, padding: '1.5rem', background: 'var(--surface)', borderBottom: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', animation: 'slideIn 0.3s ease' }}>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    fontSize: '1.1rem',
                                    color: currentView === item.id ? 'var(--primary)' : 'var(--text)',
                                    fontWeight: currentView === item.id ? '700' : '500'
                                }}
                            >
                                <span style={{ color: 'var(--primary)' }}>{item.icon}</span>
                                {item.label}
                            </li>
                        ))}
                        <li onClick={() => handleNavClick('about')} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Info size={18} color="var(--primary)" /> About
                        </li>
                        <li onClick={() => handleNavClick('community')} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <MessageSquare size={18} color="var(--primary)" /> Community
                        </li>
                    </ul>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1100px) {
          .desktop-flex { display: none !important; }
          .mobile-flex { display: flex !important; }
        }
      `}} />
        </nav>
    );
}