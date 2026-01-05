import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Lock, Users } from 'lucide-react';

export default function HomeDetails() {
    return (
        <div id="why">
            {/* What is IoTnext Section */}
            <section style={{ padding: '2rem 0', background: 'var(--background)' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            color: 'var(--primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>
                            THE VISION
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '900',
                            lineHeight: 1.2,
                            marginBottom: '1.5rem',
                            color: 'var(--text)'
                        }}>
                            What is <span style={{ color: 'var(--primary)' }}>IoTnext?</span>
                        </h2>
                        <p style={{
                            color: 'var(--text-muted)',
                            lineHeight: '1.8',
                            fontSize: '1.15rem',
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            IoTnext is not just a tutorial site—it's a <span style={{ color: 'var(--primary)', fontWeight: '600' }}>High-Fidelity Engineering Repository</span>. We bridge the gap between hobbyist tinkering and industrial deployment.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        marginTop: '3rem'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2rem',
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '16px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.borderColor = 'var(--primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                background: 'rgba(var(--primary-rgb), 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto'
                            }}>
                                <ShieldCheck size={28} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--text)' }}>
                                Verified Engineering
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                Every project is tested for industrial reliability and 24/7 uptime stability.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2rem',
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '16px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.borderColor = 'var(--primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                background: 'rgba(var(--primary-rgb), 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto'
                            }}>
                                <Layers size={28} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--text)' }}>
                                Scalable Architecture
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                Learn to build systems that scale from a single prototype to enterprise-wide deployments.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2rem',
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '16px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.borderColor = 'var(--primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                background: 'rgba(var(--primary-rgb), 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto'
                            }}>
                                <Lock size={28} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--text)' }}>
                                Security First Protocol
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                Deep dive into TLS 1.3, encrypted payloads, and secure OTA firmware updates.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2rem',
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '16px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.borderColor = 'var(--primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                background: 'rgba(var(--primary-rgb), 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto'
                            }}>
                                <Users size={28} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--text)' }}>
                                Community Validation
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                Open-source firmware repositories validated by a global network of IoT architects.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
