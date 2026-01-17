import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star, MessageSquare, ArrowLeft, Heart, CheckCircle,
    X, Send, User, Filter, AlertCircle, Quote
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

// Seed data for fallback/demo
const seedReviews = [
    {
        id: 'seed-1', user: "Nishanth M", text: "The ESP32 pinout lab saved me hours of datasheet digging. Extremely professional tool.",
        rating: 5, type: 'verified', role: 'Embedded Architect', college: 'Sathyabama University', helpful: 12, date: 'Dec 23, 2025'
    },
    {
        id: 'seed-2', user: "Sarah Jenkins", text: "Systematic roadmap is exactly what I needed. Learning IoT finally feels manageable.",
        rating: 5, type: 'guest', role: 'IoT Beginner', college: 'Self-Taught', helpful: 5, date: 'Dec 24, 2025'
    }
];

const MobileReviews = ({ setView, isAdmin }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '', email: '', text: '', rating: 5, type: 'guest', role: '', college: ''
    });

    // --- Data Fetching ---
    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
                if (error) throw error;

                const liked = JSON.parse(localStorage.getItem('iotnext_likes') || '[]');
                const formatted = data.map(r => ({
                    ...r,
                    date: new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                    userLiked: liked.includes(r.id)
                }));
                // Merge seed data if DB empty or for demo
                const allReviews = formatted.length > 0 ? formatted : seedReviews;
                setReviews(allReviews);
            } catch (err) {
                console.error("Fetch error", err);
                setReviews(seedReviews);
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);

    // --- Actions ---
    const handleLike = async (id) => {
        const liked = JSON.parse(localStorage.getItem('iotnext_likes') || '[]');
        if (liked.includes(id)) return;

        // Optimistic UI Update
        const newHelper = reviews.find(r => r.id === id)?.helpful || 0;
        setReviews(prev => prev.map(r => r.id === id ? { ...r, helpful: newHelper + 1, userLiked: true } : r));

        localStorage.setItem('iotnext_likes', JSON.stringify([...liked, id]));
        await supabase.from('reviews').update({ helpful: newHelper + 1 }).eq('id', id);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            user: formData.name || 'Anonymous',
            text: formData.text,
            rating: Number(formData.rating),
            type: formData.email ? 'verified' : 'guest',
            email: formData.email,
            role: formData.role || 'Maker',
            college: formData.college || 'Community',
            helpful: 0
        };

        try {
            const { data, error } = await supabase.from('reviews').insert([payload]).select();
            if (error) throw error;

            if (data) {
                const newRev = { ...data[0], date: 'Just now', userLiked: false };
                setReviews([newRev, ...reviews]);
                setIsFormOpen(false);
                setFormData({ name: '', email: '', text: '', rating: 5, role: '', college: '' });
                // Show success toast/alert here if needed
            }
        } catch (err) {
            alert(`Error: ${err.message}. Showing local preview.`);
            setReviews([{ ...payload, id: Date.now(), date: 'Just now' }, ...reviews]);
            setIsFormOpen(false);
        }
    };

    // --- Stats Calculation ---
    const avgRating = reviews.length ? (reviews.reduce((a, b) => a + b.rating, 0) / reviews.length).toFixed(1) : 0;

    return (
        <div style={{ background: 'var(--background)', minHeight: '100vh', paddingBottom: '100px' }}>

            {/* Premium Header */}
            <div style={{
                position: 'sticky', top: 0, zIndex: 50,
                background: 'rgba(var(--background-rgb), 0.85)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(var(--border-rgb), 0.5)',
                padding: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>
                <button
                    onClick={() => setView('home')}
                    style={{
                        background: 'var(--surface)', border: '1px solid var(--border)',
                        borderRadius: '14px', width: '42px', height: '42px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--text)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                    }}
                >
                    <ArrowLeft size={20} />
                </button>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, background: 'linear-gradient(to right, var(--text), var(--text-muted))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Community
                </h2>
                <div style={{ width: '42px' }} /> {/* Spacer for balance */}
            </div>

            <div style={{ padding: '1rem' }}>

                {/* Hero Rating Card */}
                <div style={{
                    background: 'linear-gradient(145deg, var(--surface) 0%, rgba(var(--primary-rgb), 0.05) 100%)',
                    borderRadius: '1.5rem', padding: '1.5rem',
                    marginBottom: '2rem', border: '1px solid var(--border)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    position: 'relative', overflow: 'hidden'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                                Overall Rating
                            </div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text)', lineHeight: 1 }}>
                                {avgRating}
                                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '600' }}>/5</span>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '0.5rem' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill={i < Math.round(avgRating) ? "#fbbf24" : "rgba(251, 191, 36, 0.2)"} stroke="none" />
                                ))}
                            </div>
                            <div style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--primary)' }}>
                                Based on {reviews.length} reviews
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAB Write Button (Floating) */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsFormOpen(true)}
                    style={{
                        position: 'fixed', bottom: '6rem', right: '1.5rem', zIndex: 40,
                        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                        color: 'white', border: 'none', borderRadius: '2rem',
                        padding: '1rem 1.5rem', fontSize: '1rem', fontWeight: '700',
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        boxShadow: '0 8px 25px rgba(79, 70, 229, 0.4)'
                    }}
                >
                    <MessageSquare size={20} />
                    Write Review
                </motion.button>

                {/* Reviews List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text)', marginBottom: '0.5rem' }}>Recent Feedback</h3>

                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>Updating feed...</div>
                    ) : (
                        reviews.map((review, i) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                style={{
                                    background: 'var(--surface)', padding: '1.25rem', borderRadius: '1.25rem',
                                    border: '1px solid var(--border)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                                }}
                            >
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                    {/* Avatar */}
                                    <div style={{
                                        width: '44px', height: '44px', borderRadius: '12px',
                                        background: `linear-gradient(135deg, ${['#f43f5e', '#3b82f6', '#10b981', '#f59e0b'][i % 4]} 0%, rgba(255,255,255,0.1) 100%)`,
                                        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontWeight: '800', fontSize: '1.2rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                    }}>
                                        {review.user ? review.user.charAt(0) : 'A'}
                                    </div>

                                    {/* User Meta */}
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                    <h4 style={{ fontSize: '1rem', fontWeight: '700', margin: 0, color: 'var(--text)' }}>
                                                        {review.user}
                                                    </h4>
                                                    {review.type === 'verified' && (
                                                        <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '2px', borderRadius: '50%' }}>
                                                            <CheckCircle size={12} strokeWidth={3} />
                                                        </span>
                                                    )}
                                                </div>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                                                    {review.role || 'Member'} @ {review.college || 'Community'}
                                                </div>
                                            </div>
                                            <span style={{ fontSize: '0.7rem', fontWeight: '600', color: 'var(--text-muted)', background: 'var(--background)', padding: '0.2rem 0.6rem', borderRadius: '1rem' }}>
                                                {review.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{ marginBottom: '1rem', position: 'relative', paddingLeft: '0.5rem' }}>
                                    <div style={{ display: 'flex', gap: '2px', marginBottom: '0.5rem' }}>
                                        {[...Array(5)].map((_, idx) => (
                                            <Star key={idx} size={14} fill={idx < review.rating ? "#fbbf24" : "none"} stroke={idx < review.rating ? "none" : "var(--border)"} />
                                        ))}
                                    </div>
                                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text)', margin: 0 }}>
                                        {review.text}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                                    <button
                                        onClick={() => handleLike(review.id)}
                                        disabled={review.userLiked}
                                        style={{
                                            background: review.userLiked ? 'rgba(239, 68, 68, 0.1)' : 'transparent',
                                            border: 'none', borderRadius: '2rem',
                                            padding: '0.3rem 0.8rem',
                                            display: 'flex', alignItems: 'center', gap: '0.4rem',
                                            color: review.userLiked ? '#ef4444' : 'var(--text-muted)',
                                            fontSize: '0.8rem', fontWeight: '600',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        <Heart size={16} fill={review.userLiked ? "currentColor" : "none"} />
                                        {review.helpful || 0} Helpful
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>

            {/* Mobile Form Modal */}
            <AnimatePresence>
                {isFormOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsFormOpen(false)}
                            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 60, backdropFilter: 'blur(4px)' }}
                        />
                        <motion.div
                            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            style={{
                                position: 'fixed', bottom: 0, left: 0, right: 0,
                                background: 'var(--surface)', zIndex: 2500,
                                borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem',
                                padding: '1.5rem 1.5rem 4rem 1.5rem', maxHeight: '90vh', overflowY: 'auto',
                                boxShadow: '0 -10px 40px rgba(0,0,0,0.2)'
                            }}
                        >
                            <div style={{ width: '40px', height: '4px', background: 'var(--border)', borderRadius: '2px', margin: '0 auto 1.5rem auto' }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', margin: 0 }}>Share Feedback</h3>
                                <button onClick={() => setIsFormOpen(false)} style={{ background: 'rgba(var(--text-rgb), 0.05)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', color: 'var(--text)' }}><X size={18} /></button>
                            </div>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', background: 'var(--background)', padding: '1.25rem', borderRadius: '1.5rem' }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-muted)' }}>Tap to Rate</div>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <motion.button
                                                key={star} type="button"
                                                whileTap={{ scale: 0.8 }}
                                                onClick={() => setFormData({ ...formData, rating: star })}
                                                style={{ background: 'none', border: 'none', padding: '0.2rem', cursor: 'pointer' }}
                                            >
                                                <Star size={36} fill={star <= formData.rating ? "#fbbf24" : "rgba(251, 191, 36, 0.1)"} stroke="none" />
                                            </motion.button>
                                        ))}
                                    </div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#fbbf24' }}>
                                        {formData.rating === 5 ? 'Excellent!' : formData.rating === 4 ? 'Good' : formData.rating === 3 ? 'Average' : 'Needs Work'}
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gap: '1rem' }}>
                                    <input
                                        placeholder="Your Name"
                                        value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        style={{ padding: '1.25rem', borderRadius: '1rem', background: 'var(--background)', border: '1px solid var(--border)', fontSize: '1rem', color: 'var(--text)', outline: 'none' }}
                                    />
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <input
                                            placeholder="Role"
                                            value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })}
                                            style={{ padding: '1.25rem', borderRadius: '1rem', background: 'var(--background)', border: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--text)', outline: 'none' }}
                                        />
                                        <input
                                            placeholder="College/Org"
                                            value={formData.college} onChange={e => setFormData({ ...formData, college: e.target.value })}
                                            style={{ padding: '1.25rem', borderRadius: '1rem', background: 'var(--background)', border: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--text)', outline: 'none' }}
                                        />
                                    </div>
                                    <textarea
                                        placeholder="What did you like? What can we improve?"
                                        rows={4}
                                        value={formData.text} onChange={e => setFormData({ ...formData, text: e.target.value })}
                                        style={{ padding: '1.25rem', borderRadius: '1rem', background: 'var(--background)', border: '1px solid var(--border)', fontSize: '1rem', color: 'var(--text)', resize: 'none', outline: 'none', lineHeight: '1.5' }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
                                        color: 'white', border: 'none', padding: '1.25rem', borderRadius: '1.25rem',
                                        fontSize: '1.1rem', fontWeight: '800', marginTop: '0.5rem', title: 'Submit Review',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                                        boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)'
                                    }}
                                >
                                    Submit Review <Send size={20} />
                                </button>
                                {/* Safe Area Spacer */}
                                <div style={{ height: '2rem' }} />
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileReviews;
