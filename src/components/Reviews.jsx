import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import CustomReviews from './CustomReviews';

const Reviews = ({ theme, setView }) => {
    return (
        <section id="reviews" className="section-bg-2" style={{ padding: '2rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'rgba(var(--primary-rgb), 0.1)',
                            padding: '0.4rem 1.25rem',
                            borderRadius: '2rem',
                            marginBottom: '1.5rem',
                            border: '1px solid var(--border)',
                            color: 'var(--primary)',
                            fontWeight: '700'
                        }}
                    >
                        <MessageSquare size={16} />
                        <span style={{ fontSize: '0.8rem', letterSpacing: '0.02em' }}>COMMUNITY VOICE</span>
                    </motion.div>

                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.04em' }}>
                        Architect <span className="text-gradient">Opinions</span>
                    </h2>
                </div>

                {/* Minimized Review System (Home Page) */}
                <CustomReviews limit={3} setView={setView} />
            </div>
        </section>
    );
};

export default Reviews;
