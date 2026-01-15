import React, { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, Zap, ArrowUpRight } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const Footer = ({ setView }) => {

    useEffect(() => {
        // Define initialization function
        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
            }
        };

        // Inject script
        if (!document.querySelector('script[src*="translate.google.com"]')) {
            const script = document.createElement('script');
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.head.appendChild(script);
        } else if (window.googleTranslateElementInit) {
            window.googleTranslateElementInit();
        }
    }, []);

    return (
        <footer className="footer-container glass-plus" style={{
            borderTop: '1px solid var(--border)',
            padding: '4rem 2rem 2rem',
            color: 'var(--text)',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '4rem 4rem 0 0',
            marginTop: '4rem'
        }}>
            {/* Background Accent */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.08) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '5rem',
                    marginBottom: '5rem'
                }}>
                    {/* Brand Section */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                background: 'transparent',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                border: '1px solid var(--border)',
                            }}>
                                <img src="/logo.png" alt="IoTnext" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <span style={{ fontSize: '1.75rem', fontWeight: 950, letterSpacing: '-0.04em' }}>
                                IoT<span className="text-gradient">next</span>
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: '500' }}>
                            Architecting the future of connected intelligence. The world's most immersive platform for industrial-grade IoT education.
                        </p>
                        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }} className="social-group">
                            <a href="https://github.com/Nishanthmgt" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                <SocialIcon icon={<Github size={20} />} title="GitHub" />
                            </a>
                            <a href="https://x.com/circuitvibe0311" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                <SocialIcon
                                    icon={
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    }
                                    title="X (Twitter)"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/m-nishanth-1193a332a" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                <SocialIcon icon={<Linkedin size={20} />} title="LinkedIn" />
                            </a>
                            <a href="mailto:circuitvibe0311@gmail.com" className="social-icon-link">
                                <SocialIcon icon={<Mail size={20} />} title="Contact Us" highlight />
                            </a>
                        </div>
                    </div>


                    {/* Links Section 2 */}
                    <div>
                        <h4 style={{ marginBottom: '2rem', fontSize: '1.2rem', fontWeight: '900', letterSpacing: '-0.02em' }}>Governance & Logic</h4>
                        <ul style={{ display: 'grid', gap: '1.25rem' }}>
                            <FooterLink label="About Us" onClick={() => setView('about')} />
                            <FooterLink label="Q&A" onClick={() => setView('qa')} />
                            <FooterLink label="Support" onClick={() => window.location.href = 'mailto:circuitvibe0311@gmail.com'} />
                            <FooterLink label="Admin Portal" onClick={() => setView('admin-login')} />
                            <FooterLink label="Privacy Protocol" onClick={() => setView('privacy')} />
                            <FooterLink label="Terms of Access" onClick={() => setView('terms')} />
                        </ul>
                    </div>

                    {/* Newsfeed */}
                    <div>
                        <h4 style={{ marginBottom: '2rem', fontSize: '1.2rem', fontWeight: '900', letterSpacing: '-0.02em' }}>Stay Updated</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem', fontWeight: '500', lineHeight: '1.6' }}>
                            Join our network to receive automated notifications on new project drops and architectural updates.
                        </p>
                        <SubscribeForm />
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '3rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '2rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                }}>
                    <p>© 2026 iotnext.store. All protocols observed.</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <Zap size={16} className="text-secondary" />
                        <span>v2.0 Stable Build</span>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 820px) {
                    .footer-container {
                        display: none !important;
                    }
                }
                @media (max-width: 600px) {
                    .social-group {
                        justify-content: center;
                        width: 100%;
                        margin-top: 2rem;
                    }
                    .social-icon-link {
                        display: flex;
                        justify-content: center;
                    }
                }
                .social-icon:hover {
                    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3) !important;
                }
                @keyframes pulse-highlight {
                    0% { box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(var(--primary-rgb), 0); }
                    100% { box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0); }
                }
                .social-icon-highlight {
                    animation: pulse-highlight 2s infinite;
                }
            `}} />
        </footer>
    );
};

const SocialIcon = ({ icon, title, highlight }) => (
    <div
        title={title}
        style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: highlight ? 'var(--primary)' : 'var(--background)',
            border: highlight ? 'none' : '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: highlight ? 'white' : 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: highlight ? '0 8px 16px rgba(var(--primary-rgb), 0.25)' : 'none'
        }}
        className={`social-icon ${highlight ? 'social-icon-highlight' : ''}`}
        onMouseEnter={(e) => {
            if (!highlight) {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.transform = 'translateY(-3px)';
            } else {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            }
        }}
        onMouseLeave={(e) => {
            if (!highlight) {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-muted)';
            }
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
        }}
    >
        {icon}
    </div>
);

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const { addToast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('subscribing');
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            addToast("Newsletter Subscription Protocol Active", "success");
            setTimeout(() => setStatus('idle'), 3000);
        }, 800);
    };

    return (
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: '0.5rem',
            padding: '0.5rem',
            background: 'var(--background)',
            borderRadius: '12px',
            border: '1px solid var(--border)'
        }}>
            <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0.5rem',
                    color: 'var(--text)',
                    flex: 1,
                    outline: 'none'
                }}
            />
            <button
                type="submit"
                className="btn btn-primary"
                style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    minWidth: '100px',
                    background: status === 'success' ? '#10b981' : 'var(--primary)'
                }}
                disabled={status !== 'idle'}
            >
                {status === 'idle' ? 'Join' : status === 'subscribing' ? '...' : 'Subscribed!'}
            </button>
        </form>
    );
};

const FooterLink = ({ label, onClick }) => (
    <li
        onClick={onClick}
        style={{
            color: 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
        }}
        onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
        onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
    >
        {label}
        <ArrowUpRight size={12} opacity={0.5} />
    </li>
);

export default Footer;
