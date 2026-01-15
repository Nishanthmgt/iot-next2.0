import React from 'react';
import { motion } from 'framer-motion';

const AVATARS = [
    // Male-leaning styles
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Max',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    // Female-leaning styles
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Bella',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe'
];

export default function AvatarSelector({ selectedAvatar, onSelect }) {
    return (
        <div style={{ marginTop: '1rem' }}>
            <h4 style={{
                fontSize: '0.9rem',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                Choose Your Avatar <span style={{ fontSize: '0.8rem', fontWeight: '400', color: 'var(--text-muted)' }}>(Tap to select)</span>
            </h4>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '0.75rem',
                padding: '0.5rem',
                overflowX: 'auto', // Horizontal scroll on very small screens
                paddingBottom: '1rem' // Space for scrollbar or shadow
            }}>
                {AVATARS.map((url, index) => {
                    const isSelected = selectedAvatar === url;
                    return (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onSelect(url)}
                            style={{
                                width: '100%',
                                aspectRatio: '1/1',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                border: isSelected ? '3px solid var(--primary)' : '2px solid transparent',
                                boxShadow: isSelected ? '0 0 15px rgba(var(--primary-rgb), 0.5)' : 'none',
                                background: 'var(--surface)',
                                padding: '2px', // Inner spacing
                                transition: 'all 0.2s ease',
                                /** Glass effect for unselected */
                                opacity: isSelected ? 1 : 0.7
                            }}
                        >
                            <img
                                src={url}
                                alt={`Avatar ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    backgroundColor: '#f3f4f6' // Fallback bg
                                }}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
