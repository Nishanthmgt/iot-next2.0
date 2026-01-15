import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import CustomReviews from './CustomReviews';

const ReviewsPage = ({ setView, isAdmin }) => {
    const isMobile = window.innerWidth <= 768;
    return (
        <div style={{
            paddingTop: isMobile ? '1rem' : 'var(--app-py)',
            paddingBottom: isMobile ? '3rem' : 'var(--app-py)',
            paddingLeft: isMobile ? '0' : 'var(--app-px)',
            paddingRight: isMobile ? '0' : 'var(--app-px)',
            minHeight: '100vh',
            background: 'var(--background)'
        }}>
            <div className="container">
                <button
                    onClick={() => setView('home')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        background: 'rgba(var(--primary-rgb), 0.05)',
                        color: 'var(--primary)',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '2rem',
                        border: '1px solid rgba(var(--primary-rgb), 0.1)',
                        fontWeight: 800,
                        marginBottom: isMobile ? '2rem' : '2.5rem',
                        cursor: 'pointer',
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        transition: 'all 0.2s ease',
                        boxShadow: 'var(--shadow-sm)'
                    }}
                >
                    <ArrowLeft size={isMobile ? 16 : 18} />
                    Back to Protocol
                </button>

                <div style={{ textAlign: isMobile ? 'left' : 'center', marginBottom: isMobile ? '2rem' : '3rem' }}>
                    <h2 style={{
                        fontSize: isMobile ? '1.8rem' : '2.5rem',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        color: 'var(--text)'
                    }}>
                        Reviews
                    </h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        maxWidth: '600px',
                        margin: isMobile ? '0' : '0 auto',
                        fontWeight: '500'
                    }}>
                        Community feedback and technical validation.
                    </p>
                </div>

                <div
                    className={isMobile ? "" : "glass"}
                    style={{
                        padding: isMobile ? '0 1.25rem' : '2rem',
                        borderRadius: isMobile ? '0' : '2.5rem',
                        background: isMobile ? 'transparent' : '',
                        border: isMobile ? 'none' : ''
                    }}
                >
                    <CustomReviews setView={setView} isAdmin={isAdmin} autoOpenForm={true} />
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;
