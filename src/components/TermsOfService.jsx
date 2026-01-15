import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function TermsOfService({ setView }) {
    const isMobile = window.innerWidth <= 820;

    return (
        <section className="container" style={{ paddingTop: isMobile ? '1rem' : 'var(--app-py)', paddingBottom: isMobile ? '4rem' : 'var(--app-py)', maxWidth: '900px' }}>
            <Helmet>
                <title>Terms of Service | Usage Guidelines & Liability | IoTNext</title>
                <meta name="description" content="Technical responsibility, liability disclaimers, and usage protocols for the IoTNext professional registry." />
                <link rel="canonical" href="https://iotnext.store/terms" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: isMobile ? '2rem' : '3rem' }}
            >
                <button
                    onClick={() => setView('home')}
                    className="btn btn-outline"
                    style={{ marginBottom: isMobile ? '1.5rem' : '2rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                >
                    ← Back to Home
                </button>

                <h1 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.04em' }}>Terms of <span className="text-gradient">Access</span></h1>
                <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: 600 }}>Last Updated: January 2, 2026</p>
            </motion.div>

            <div className="glass" style={{ padding: isMobile ? '1.5rem' : '3rem', borderRadius: isMobile ? '1.5rem' : '2.5rem', lineHeight: '1.8', border: '1px solid var(--border)', background: 'var(--surface)' }}>
                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>1. Agreement to Terms</h2>
                <p>By interacting with the IoTnext ecosystem ("the Platform"), you agree to abide by these Terms of Access. These terms constitute a binding agreement between you and the Platform administrators.</p>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>2. Scope of Service</h2>
                <p>IoTnext is a technical research and educational hub offering automated project logic, interactive pinout schematics, and industrial-grade software repositories. All services are provided "for educational research" and should not be deployed in critical infrastructure without professional auditing.</p>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>3. Technical Responsibility</h2>
                <p>Users are solely responsible for for the implementation of any schematics or code provided on the Platform. This includes:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', display: 'grid', gap: '0.75rem' }}>
                    <li>Verifying electrical compatibility before hardware assembly.</li>
                    <li>Ensuring firmware security before deployment to edge devices.</li>
                    <li>Adherence to local electrical standards and regulations.</li>
                </ul>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>4. IP & Intelligence Sharing</h2>
                <p><strong>Platform IP:</strong> All proprietary logic, CSS design architectures, and compiled data structures remain the intellectual property of IoTnext.</p>
                <p style={{ marginTop: '1rem' }}><strong>Community Contributions:</strong> Project submissions grant the Platform a perpetual, global, royalty-free license to display and refine the submitted intelligence for the benefit of the community.</p>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>5. No-Warranty Protocol</h2>
                <p>The Platform makes no guarantees regarding the accuracy of pinout data or the stability of the featured firmware. Technical edge cases or MCU-specific errata are the responsibility of the user to identify.</p>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>6. Critical Liability Disclaimer</h2>
                <p style={{ fontWeight: 'bold', color: 'var(--accent)' }}>⚠️ HIGH VOLTAGE PROTOCOL: Implementation of power electronics or AC-mains logic involves extreme risk. IoTnext and its contributors accept ZERO liability for hardware failure, data loss, or personal injury resulting from the usage of Platform data.</p>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>7. Operational Continuity</h2>
                <p>We reserve the right to modify API endpoints, deprecate legacy hardware definitions, or restrict access to specific research labs without advanced notice to ensure the overall integrity of the ecosystem.</p>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>8. Governing Law</h2>
                <p>This agreement shall be governed by international digital commerce standards. Any resolution of technical disputes shall be handled through the designated support channels.</p>

                <h2 style={{ marginTop: '2rem', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 900 }}>9. Support Intelligence</h2>
                <p>For technical inquiries or protocol clarification, contact us at <a href="mailto:circuitvibe0311@gmail.com" style={{ color: 'var(--primary)', fontWeight: '700' }}>circuitvibe0311@gmail.com</a>.</p>

                <div style={{
                    marginTop: '3rem',
                    padding: '1.5rem',
                    background: 'rgba(var(--secondary-rgb), 0.1)',
                    borderRadius: '1.5rem',
                    borderLeft: '4px solid var(--secondary)'
                }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 500 }}>
                        <strong>Educational Mandate:</strong> IoTnext is committed to providing quality IoT education. These terms ensure a safe, respectful, and productive learning environment for all users. By using our platform, you're joining a community of makers and learners!
                    </p>
                </div>
            </div>
        </section>
    );
}
