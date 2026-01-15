import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, Send, User, CheckCircle, Mail, Shield, Trash2, X, MoreVertical, Heart } from 'lucide-react';

import { supabase } from '../lib/supabase';

const seedReviews = [
    {
        id: 'seed-1',
        user: "Nishanth M",
        text: "The ESP32 pinout lab saved me hours of datasheet digging. Extremely professional tool.",
        rating: 5,
        type: 'verified',
        role: 'Embedded Architect',
        college: 'Sathyabama University',
        helpful: 12,
        date: 'Dec 23, 2025'
    },
    {
        id: 'seed-2',
        user: "Sarah Jenkins",
        text: "Systematic roadmap is exactly what I needed. Learning IoT finally feels manageable.",
        rating: 5,
        type: 'guest',
        role: 'IoT Beginner',
        college: 'Self-Taught',
        helpful: 5,
        date: 'Dec 24, 2025'
    },
    {
        id: 'seed-3',
        user: "Dr. Aris Thorne",
        text: "The high-fidelity UI makes complex architecture diagrams a joy to study. Best-in-class platform.",
        rating: 5,
        type: 'verified',
        role: 'Senior Researcher',
        college: 'MIT Labs',
        helpful: 28,
        isTop: true,
        date: 'Dec 25, 2025'
    }
];

const RatingSummary = ({ reviews }) => {
    const isMobile = window.innerWidth <= 768;
    const total = reviews.length;
    const stats = [5, 4, 3, 2, 1].map(star => {
        const count = reviews.filter(r => Math.round(r.rating) === star).length;
        const percentage = total > 0 ? (count / total) * 100 : 0;
        return { star, count, percentage };
    });

    const averageRating = total > 0
        ? (reviews.reduce((acc, r) => acc + r.rating, 0) / total).toFixed(1)
        : 0;

    return (
        <div style={{
            padding: isMobile ? '1rem 0' : '2rem 0',
            marginBottom: isMobile ? '1.5rem' : '3rem',
            borderBottom: '1px solid var(--border)'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr',
                gap: isMobile ? '1.5rem' : '4rem',
                alignItems: 'center'
            }}>
                <div style={{ textAlign: 'center', minWidth: '150px' }}>
                    <div style={{
                        fontSize: isMobile ? '3.5rem' : '5rem',
                        fontWeight: 800,
                        color: 'var(--text)',
                        lineHeight: 1
                    }}>
                        {averageRating}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.1rem', margin: '0.5rem 0' }}>
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={isMobile ? 18 : 24}
                                fill={i < Math.round(averageRating) ? "var(--secondary)" : "none"}
                                stroke={i < Math.round(averageRating) ? "var(--secondary)" : "var(--border)"}
                            />
                        ))}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>
                        {total} reviews
                    </div>
                </div>

                <div style={{ display: 'grid', gap: '0.5rem', flex: 1 }}>
                    {stats.map(({ star, count, percentage }) => (
                        <div key={star} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '30px', fontSize: '0.85rem', fontWeight: 700 }}>{star}</div>
                            <div style={{
                                flex: 1,
                                height: '8px',
                                background: 'rgba(var(--text-rgb), 0.05)',
                                borderRadius: '4px',
                                overflow: 'hidden'
                            }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percentage}%` }}
                                    style={{ height: '100%', background: 'var(--primary)', borderRadius: '4px' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function CustomReviews({ limit, setView, isAdmin, autoOpenForm }) {
    const isMobile = window.innerWidth <= 768;
    const [reviews, setReviews] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);
    const [replyTo, setReplyTo] = useState(null);
    const [sortBy, setSortBy] = useState('recent'); // recent, highest, lowest
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: '',
        rating: 5,
        type: 'guest',
        role: '',
        college: ''
    });

    useEffect(() => {
        fetchReviews();
    }, []);

    // Auto-open form if autoOpenForm prop is true
    useEffect(() => {
        if (autoOpenForm) {
            setIsFormOpen(true);
        }
    }, [autoOpenForm]);

    const fetchReviews = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('reviews')
                .select('*');

            if (error) throw error;

            // Client-side sort initial processing
            const likedReviews = JSON.parse(localStorage.getItem('iotnext_likes') || '[]');
            const liveReviews = data.map(r => ({
                ...r,
                date: new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                timestamp: new Date(r.created_at).getTime(), // For sorting
                userLiked: likedReviews.includes(r.id)
            }));
            const allReviews = [...liveReviews, ...seedReviews.map(r => ({ ...r, timestamp: new Date(r.date).getTime() }))];

            setReviews(allReviews);
        } catch (err) {
            console.error('Core protocol error fetching reviews:', err);
            setReviews(seedReviews);
        } finally {
            setIsLoading(false);
        }
    };

    const handleHelpful = async (id) => {
        // 1. Update localStorage to prevent double-voting
        const likedReviews = JSON.parse(localStorage.getItem('iotnext_likes') || '[]');
        if (likedReviews.includes(id)) return;

        likedReviews.push(id);
        localStorage.setItem('iotnext_likes', JSON.stringify(likedReviews));

        // 2. Update local UI state
        setReviews(prev => prev.map(r =>
            r.id === id ? { ...r, helpful: (r.helpful || 0) + 1, userLiked: true } : r
        ));

        // 3. Update Supabase Database
        try {
            const reviewToUpdate = reviews.find(r => r.id === id);
            if (!reviewToUpdate || typeof id === 'string' && id.startsWith('seed-')) return;

            const { error } = await supabase
                .from('reviews')
                .update({ helpful: (reviewToUpdate.helpful || 0) + 1 })
                .eq('id', id);

            if (error) throw error;
        } catch (err) {
            console.error('Helpful sync failed:', err);
        }
    };

    const handleDeleteReview = async (id) => {
        if (!window.confirm('Protocol Override: Are you sure you want to permanently delete this review?')) return;

        setDeletingId(id);
        try {
            const { error } = await supabase
                .from('reviews')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setReviews(prev => prev.filter(r => r.id !== id));
        } catch (err) {
            console.error('Core error deleting review:', err);
            alert(`Protocol Error: ${err.message || 'Access Denied'}. \n\nSecurity Rule: Only the system administrator (mnishanth279@gmail.com) can permanently remove community feedback.`);
        } finally {
            setDeletingId(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            user: formData.name || (formData.email ? formData.email.split('@')[0] : 'Anonymous Architect'),
            text: formData.text || "No content provided",
            rating: Number(formData.rating) || 5,
            type: formData.email ? 'verified' : 'guest',
            email: formData.email || '',
            role: formData.role || 'Contributor',
            college: formData.college || 'Engineering Wing',
            helpful: 0,
            parent_id: replyTo ? replyTo.id : null
        };

        try {
            const { data, error } = await supabase
                .from('reviews')
                .insert([payload])
                .select();

            if (error) throw error;

            if (data) {
                const newReview = {
                    ...data[0],
                    date: new Date(data[0].created_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
                };
                setReviews([newReview, ...reviews]);
            }
        } catch (err) {
            console.error('Transmission error logging review:', err);

            // User-friendly error with technical fallback
            const errorMsg = err.message || (typeof err === 'string' ? err : 'Unknown Connectivity Error');
            alert(`Submit Protocol Failure: ${errorMsg}\n\nPlease check:\n1. Did you run the 'Fresh Start' SQL script in Supabase?\n2. Ensure the "reviews" table structure matches the latest schema.`);

            const fallbackReview = {
                ...payload,
                id: Date.now().toString(), // Ensure string ID for consistency
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
            };
            setReviews([fallbackReview, ...reviews]);
        }

        setIsFormOpen(false);
        setReplyTo(null);
        setFormData({ name: '', email: '', text: '', rating: 5, type: 'guest', role: '', college: '' });
    };

    const sortedReviews = [...reviews].sort((a, b) => {
        if (sortBy === 'highest') return b.rating - a.rating;
        if (sortBy === 'lowest') return a.rating - b.rating;
        return b.timestamp - a.timestamp; // default recent
    });

    const displayedReviews = limit
        ? sortedReviews.filter(r => !r.parent_id).slice(0, limit)
        : sortedReviews.filter(r => !r.parent_id);

    return (
        <section id="reviews-system" aria-labelledby="community-experience-title" style={{ marginTop: limit <= 1 ? '1rem' : '1rem' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '1rem' : '0',
                marginBottom: isMobile ? '1.5rem' : '2.5rem'
            }}>
                <div style={{ textAlign: 'left' }}>
                    <h3 id="community-experience-title" style={{
                        fontSize: isMobile ? '1.25rem' : '2rem',
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        marginBottom: '0.2rem',
                        color: 'var(--text)'
                    }}>
                        Ratings and reviews
                    </h3>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {!limit && (
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--primary)',
                                fontWeight: '700',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                outline: 'none'
                            }}
                        >
                            <option value="recent">Most Recent</option>
                            <option value="highest">Highest Rating</option>
                            <option value="lowest">Lowest Rating</option>
                        </select>
                    )}
                    <button
                        onClick={() => setIsFormOpen(!isFormOpen)} // Toggle behavior
                        className="btn btn-primary"
                        style={{ borderRadius: '2rem', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
                    >
                        {isFormOpen ? 'Cancel' : 'Write a review'}
                    </button>
                </div>
            </div>

            {/* Integrated Inline Review Form - Moved directly under the header/button */}
            <AnimatePresence mode="wait">
                {isFormOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            overflow: 'hidden',
                            marginBottom: '2rem',
                            border: '1px solid var(--border)',
                            borderRadius: '1rem',
                            background: 'var(--surface)',
                            color: 'var(--text)'
                        }}
                    >
                        <div style={{ padding: isMobile ? '1.5rem' : '2.5rem', position: 'relative' }}>
                            <button
                                onClick={() => setIsFormOpen(false)}
                                aria-label="Close Review Form"
                                style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'transparent', color: 'var(--text-muted)', border: 'none', cursor: 'pointer' }}
                            >
                                <X size={24} />
                            </button>
                            <h2 style={{ fontSize: isMobile ? '1.5rem' : '1.75rem', fontWeight: 950, marginBottom: isMobile ? '1.5rem' : '2rem', letterSpacing: 'var(--ls-tight)' }}>
                                {replyTo ? `Reply to ${replyTo.user}` : 'Submit Review'}
                            </h2>

                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: isMobile ? '1.25rem' : '1.75rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.25rem' }}>
                                    <div style={{ display: 'grid', gap: '0.6rem' }}>
                                        <label style={{ fontSize: '0.7rem', fontWeight: 850, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="e.g. Alex"
                                            style={{
                                                background: 'rgba(var(--text-rgb), 0.05)',
                                                border: '1px solid var(--border)',
                                                padding: '1rem',
                                                borderRadius: '0.75rem',
                                                color: 'var(--text)',
                                                outline: 'none',
                                                fontSize: '1rem',
                                                fontWeight: '500',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                                        />
                                    </div>
                                    <div style={{ display: 'grid', gap: '0.6rem' }}>
                                        <label style={{ fontSize: '0.7rem', fontWeight: 850, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Email ID (Optional)</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="e.g. alex@example.com"
                                            style={{
                                                background: 'rgba(var(--text-rgb), 0.05)',
                                                border: '1px solid var(--border)',
                                                padding: '1rem',
                                                borderRadius: '0.75rem',
                                                color: 'var(--text)',
                                                outline: 'none',
                                                fontSize: '1rem',
                                                fontWeight: '500',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.25rem' }}>
                                    <div style={{ display: 'grid', gap: '0.6rem' }}>
                                        <label style={{ fontSize: '0.7rem', fontWeight: 850, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Role</label>
                                        <input
                                            type="text"
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            placeholder="e.g. Developer / Student"
                                            style={{
                                                background: 'rgba(var(--text-rgb), 0.05)',
                                                border: '1px solid var(--border)',
                                                padding: '1rem',
                                                borderRadius: '0.75rem',
                                                color: 'var(--text)',
                                                outline: 'none',
                                                fontSize: '1rem',
                                                fontWeight: '500'
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: 'grid', gap: '0.6rem' }}>
                                        <label style={{ fontSize: '0.7rem', fontWeight: 850, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>College / Org</label>
                                        <input
                                            type="text"
                                            value={formData.college}
                                            onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                            placeholder="e.g. Sathyabama Univ"
                                            style={{
                                                background: 'rgba(var(--text-rgb), 0.05)',
                                                border: '1px solid var(--border)',
                                                padding: '1rem',
                                                borderRadius: '0.75rem',
                                                color: 'var(--text)',
                                                outline: 'none',
                                                fontSize: '1rem',
                                                fontWeight: '500'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gap: '0.8rem', padding: '1rem', background: 'rgba(var(--secondary-rgb), 0.05)', borderRadius: '1.25rem', border: '1px solid rgba(var(--secondary-rgb), 0.1)' }}>
                                    <label style={{ fontSize: '0.7rem', fontWeight: 850, color: 'var(--secondary)', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center' }}>Validation Rating</label>
                                    <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center' }}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <motion.button
                                                key={star}
                                                type="button"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => setFormData({ ...formData, rating: star })}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem' }}
                                            >
                                                <Star
                                                    size={isMobile ? 32 : 36}
                                                    fill={star <= formData.rating ? "var(--secondary)" : "none"}
                                                    stroke={star <= formData.rating ? "var(--secondary)" : "var(--border)"}
                                                    strokeWidth={2.5}
                                                />
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gap: '0.6rem' }}>
                                    <label style={{ fontSize: '0.7rem', fontWeight: 850, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Technical Feedback</label>
                                    <textarea
                                        required
                                        value={formData.text}
                                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                                        rows={isMobile ? 4 : 5}
                                        placeholder="Share your data-driven experience..."
                                        style={{
                                            background: 'rgba(var(--text-rgb), 0.05)',
                                            border: '1px solid var(--border)',
                                            padding: '1rem',
                                            borderRadius: '0.75rem',
                                            color: 'var(--text)',
                                            outline: 'none',
                                            resize: 'none',
                                            fontSize: '1rem',
                                            fontWeight: '500',
                                            lineHeight: '1.6'
                                        }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-primary-shiny"
                                    style={{
                                        padding: '1.25rem',
                                        borderRadius: '1.25rem',
                                        fontWeight: 900,
                                        marginTop: '0.5rem',
                                        fontSize: '1rem',
                                        letterSpacing: '0.02em'
                                    }}
                                >
                                    Verify & Post Feedback
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {(!limit || limit > 1) && <RatingSummary reviews={reviews} />}

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {displayedReviews.map((review) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={review.id}
                        style={{
                            padding: '1.5rem 0',
                            borderBottom: '1px solid var(--border)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}
                    >
                        {/* Header: Avatar + User Info */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'var(--primary)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '700',
                                fontSize: '1rem',
                                flexShrink: 0
                            }}>
                                {review.user.charAt(0)}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text)' }}>
                                    {review.user}
                                    {review.type === 'verified' && <CheckCircle size={12} color="var(--primary)" style={{ marginLeft: '4px' }} />}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1px' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={12} fill={i < review.rating ? "var(--secondary)" : "none"} stroke={i < review.rating ? "var(--secondary)" : "var(--border)"} />
                                        ))}
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{review.date}</span>
                                </div>
                            </div>
                        </div>

                        {/* Review Content */}
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--text)', margin: 0 }}>
                            {review.text}
                        </p>

                        <div style={{
                            fontSize: '0.75rem',
                            color: 'var(--text-muted)',
                            fontWeight: '600',
                            marginTop: '0.2rem'
                        }}>
                            {review.role} • {review.college}
                        </div>

                        {/* Footer: Helpful */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Was this helpful?</span>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button
                                    onClick={() => handleHelpful(review.id)}
                                    disabled={review.userLiked}
                                    style={{
                                        background: 'none',
                                        border: '1px solid var(--border)',
                                        borderRadius: '12px',
                                        padding: '0.25rem 0.8rem',
                                        fontSize: '0.75rem',
                                        color: review.userLiked ? 'var(--primary)' : 'var(--text)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.3rem'
                                    }}
                                >
                                    <Heart size={12} fill={review.userLiked ? 'var(--primary)' : 'none'} />
                                    Yes {review.helpful > 0 && `(${review.helpful})`}
                                </button>
                                <button
                                    onClick={() => {
                                        setReplyTo(review);
                                        setIsFormOpen(true);
                                    }}
                                    style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '12px', padding: '0.25rem 0.8rem', fontSize: '0.75rem', color: 'var(--text)', cursor: 'pointer' }}
                                >
                                    Reply
                                </button>
                                {isAdmin && (
                                    <button onClick={() => handleDeleteReview(review.id)} style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '0.75rem', cursor: 'pointer' }}>Delete</button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {limit && reviews.length > limit && (
                <div style={{ textAlign: 'center', marginTop: isMobile ? '2rem' : '3rem' }}>
                    <button
                        onClick={() => setView('reviews-page')}
                        className="btn glass"
                        style={{ padding: isMobile ? '0.75rem 2rem' : '1rem 3rem', borderRadius: '1.5rem', fontWeight: 800, color: 'var(--primary)', fontSize: isMobile ? '0.85rem' : '1rem' }}
                    >
                        View All {reviews.length} Reviews
                    </button>
                </div>
            )}

        </section>
    );
}
