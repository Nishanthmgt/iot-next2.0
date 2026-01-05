import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import CustomReviews from './CustomReviews';

const ReviewsPage = ({ setView, isAdmin }) => {
    return (
        <div style={{ padding: '4rem 2rem', minHeight: '100vh', background: 'var(--background)' }}>
            <div className="container">
                <button
                    onClick={() => setView('home')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'transparent',
                        color: 'var(--primary)',
                        fontWeight: 700,
                        marginBottom: '2rem',
                        cursor: 'pointer'
                    }}
                >
                    <ArrowLeft size={20} />
                    Back to Protocol
                </button>

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'rgba(var(--primary-rgb), 0.1)',
                            padding: '0.6rem 1.75rem',
                            borderRadius: '2rem',
                            marginBottom: '1.5rem',
                            border: '1px solid var(--border)',
                            color: 'var(--primary)',
                            fontWeight: '700'
                        }}
                    >
                        <MessageSquare size={18} />
                        <span style={{ fontSize: '0.9rem', letterSpacing: '0.02em' }}>GLOBAL COMMUNITY FEEDBACK</span>
                    </motion.div>

                    <h2 style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '1rem', letterSpacing: '-0.04em' }}>
                        Community <span className="text-gradient">Protocol Reviews</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', fontWeight: '500' }}>
                        Browse all engineering insights and technical feedback from our global network.
                    </p>
                </div>

                <div className="glass" style={{ padding: '2rem', borderRadius: '2.5rem' }}>
                    <CustomReviews setView={setView} isAdmin={isAdmin} />
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;
