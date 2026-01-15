import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Share2, MessageCircle, Send } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export default function MobileShareSheet({ isOpen, onClose, title, url, description }) {
    const { addToast } = useToast();

    // Use Web Share API if available for System Share
    const handleSystemShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: description,
                    url: url
                });
                onClose();
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            handleCopyLink();
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url);
        addToast('Link copied to clipboard', 'success');
        onClose();
    };

    const handleWhatsApp = () => {
        const text = encodeURIComponent(`${title}\n${description}\n\n${url}`);
        window.open(`https://wa.me/?text=${text}`, '_blank');
        onClose();
    };

    const handleTelegram = () => {
        const text = encodeURIComponent(`${title}\n${description}`);
        window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.6)',
                            zIndex: 9998,
                            backdropFilter: 'blur(4px)'
                        }}
                    />

                    {/* Sheet */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'var(--surface)',
                            borderTopLeftRadius: '1.5rem',
                            borderTopRightRadius: '1.5rem',
                            padding: '1.5rem',
                            paddingBottom: '3rem', // Safety for bottom bar
                            zIndex: 9999,
                            boxShadow: '0 -10px 40px rgba(0,0,0,0.3)',
                            borderTop: '1px solid var(--border)'
                        }}
                    >
                        {/* Drag Handle */}
                        <div style={{
                            width: '40px',
                            height: '4px',
                            background: 'var(--border)',
                            borderRadius: '2px',
                            margin: '0 auto 1.5rem auto',
                            opacity: 0.5
                        }} />

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text)' }}>Share via</h3>
                            <button
                                onClick={onClose}
                                style={{
                                    background: 'rgba(var(--text-rgb), 0.05)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-muted)'
                                }}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                            <ShareButton
                                icon={MessageCircle}
                                label="WhatsApp"
                                color="#25D366"
                                onClick={handleWhatsApp}
                            />
                            <ShareButton
                                icon={Send}
                                label="Telegram"
                                color="#0088cc"
                                onClick={handleTelegram}
                            />
                            <ShareButton
                                icon={Copy}
                                label="Copy Link"
                                color="var(--text)"
                                onClick={handleCopyLink}
                                bg="var(--border)"
                            />
                            <ShareButton
                                icon={Share2}
                                label="More"
                                color="var(--primary)"
                                onClick={handleSystemShare}
                                bg="rgba(var(--primary-rgb), 0.1)"
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

const ShareButton = ({ icon: Icon, label, color, onClick, bg }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={onClick}>
        <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: bg || 'var(--surface)',
            border: bg ? 'none' : `1px solid ${color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color,
            fontSize: '1.5rem' // For emoji if needed, but we use icons
        }}>
            <Icon size={24} color={color} />
        </div>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textAlign: 'center' }}>{label}</span>
    </div>
);
