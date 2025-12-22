import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Youtube, MessageCircle, Instagram, Linkedin, ExternalLink, Send, Sparkles, Facebook } from 'lucide-react';

export default function Community() {
    const socialLinks = [
        { name: 'YouTube', icon: <Youtube size={20} />, url: 'https://www.youtube.com/@circuit_vibe', color: '#ff0000' },
        { name: 'WhatsApp', icon: <MessageCircle size={20} />, url: 'https://www.whatsapp.com/channel/0029VbBJS6EJUM2W5xihlu20', color: '#25d366' },
        { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://www.facebook.com/profile.php?id=100092265983756', color: '#1877f2' },
        { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/circuitvibetech/#', color: '#e1306c' },
        { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/m-nishanth-1193a332a', color: '#0077b5' },
    ];

    return (
        <section className="container" id="community" style={{ padding: '4rem 0' }}>
            <div style={{
                background: 'linear-gradient(135deg, var(--surface) 0%, rgba(var(--primary-rgb), 0.1) 100%)',
                borderRadius: '3rem',
                padding: '3rem',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '2rem', marginBottom: '1.2rem', fontSize: '0.75rem', fontWeight: '700' }}
                        >
                            <Sparkles size={12} /> Community Hub
                        </motion.div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', lineHeight: 1.1 }}>
                            Join the <span style={{ color: 'var(--primary)' }}>Circuit Vibe</span> Network
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            Connect with thousands of engineers. Access exclusive tutorials, project files, and live hardware debugging sessions.
                        </p>

                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                            {socialLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '12px',
                                        background: 'var(--surface-hover)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: link.color,
                                        border: '1px solid var(--border)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    title={link.name}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '2rem', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--primary)', padding: '0.8rem', borderRadius: '1rem', color: 'white' }}>
                                <Mail size={24} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Professional Mentorship</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>Get direct technical support for your industrial or academic projects.</p>
                                <a href="mailto:circuitvibe0311@gmail.com" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}>
                                    Contact Us <Send size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}