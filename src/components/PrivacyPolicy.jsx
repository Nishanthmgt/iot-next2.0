import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy({ setView }) {
    return (
        <section className="container" style={{ padding: '4rem 0', maxWidth: '900px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: '3rem' }}
            >
                <button
                    onClick={() => setView('home')}
                    className="btn btn-outline"
                    style={{ marginBottom: '2rem' }}
                >
                    ← Back to Home
                </button>

                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.04em' }}>Privacy <span className="text-gradient">Protocol</span></h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 600 }}>Last Updated: January 2, 2026</p>
            </motion.div>

            <div className="glass" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '2.5rem', lineHeight: '1.8', border: '1px solid var(--border)', background: 'var(--surface)' }}>
                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>1. Data Sovereignty</h2>
                <p>IoTnext operates on a "Privacy by Design" architecture. We believe your data belongs to you. Most of your interactions, including learning progress and technical preferences, are stored exclusively on your local device via encrypted browser storage.</p>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>2. Intelligence Collection</h2>
                <p>We collect minimal telemetry to ensure platform stability and educational efficacy:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', display: 'grid', gap: '0.75rem' }}>
                    <li><strong>Technical Telemetry:</strong> Anonymous usage patterns and interaction logs for platform optimization.</li>
                    <li><strong>Communication Data:</strong> Valid email addresses only if you explicitly opt-in to our Newsletter or Support channels.</li>
                    <li><strong>Edge Metadata:</strong> Standard HTTP headers, IP addresses (for security logic only), and browser signatures.</li>
                </ul>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>3. Information Processing</h2>
                <p>Data processing is restricted to the following protocols:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', display: 'grid', gap: '0.75rem' }}>
                    <li>To deliver production-ready code snippets and schematics tailored to your hardware.</li>
                    <li>To secure the administrative backend against unauthorized access.</li>
                    <li>To facilitate technical support requests via our encrypted mail servers.</li>
                </ul>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>4. Third-Party Integration</h2>
                <p>We leverage industry-leading infrastructure to maintain high availability:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', display: 'grid', gap: '0.75rem' }}>
                    <li><strong>Supabase:</strong> Encrypted database management for shared community projects.</li>
                    <li><strong>GitHub Pages:</strong> Immutable deployment and global content delivery.</li>
                </ul>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>5. Security Framework</h2>
                <p>We implement a robust security stack, including full-site SSL encryption (TLS 1.3), automated threat detection, and strict sanitization of all user-contributed code snippets.</p>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>6. Your Digital Rights</h2>
                <p>Under global data protection standards (including GDPR and CCPA), you retain the right to access, rectify, or purge any personal identifiers stored in our systems. For data stored locally on your machine, you can execute a full wipe by clearing your browser's site data for <strong>iotnext.store</strong>.</p>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>7. Protocol Updates</h2>
                <p>This Privacy Protocol is subject to evolution. Continued use of the platform after an update constitutes acceptance of the new data handling standards.</p>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>8. Contact Engineering</h2>
                <p>For inquiries regarding data handling or technical security, contact us at <a href="mailto:circuitvibe0311@gmail.com" style={{ color: 'var(--primary)', fontWeight: '700' }}>circuitvibe0311@gmail.com</a>.</p>

                <div style={{
                    marginTop: '3rem',
                    padding: '1.5rem',
                    background: 'rgba(var(--primary-rgb), 0.1)',
                    borderRadius: '1.5rem',
                    borderLeft: '4px solid var(--primary)'
                }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 500 }}>
                        <strong>Transparency Commitment:</strong> We are committed to protecting your privacy and being transparent about our data practices. We collect only what's necessary to provide you with the best learning experience.
                    </p>
                </div>
            </div>
        </section>
    );
}
