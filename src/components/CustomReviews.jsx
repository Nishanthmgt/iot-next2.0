import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, Send, User, CheckCircle, Mail, Shield, Trash2, X } from 'lucide-react';

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
        <div className="glass" style={{ padding: '2rem', borderRadius: '2rem', marginBottom: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, 1fr) 2fr', gap: '3rem', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', borderRight: '1px solid var(--border)', paddingRight: '2rem' }}>
                    <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>{averageRating}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem', margin: '1rem 0' }}>
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={20}
                                fill={i < Math.round(averageRating) ? "var(--secondary)" : "none"}
                                stroke={i < Math.round(averageRating) ? "var(--secondary)" : "var(--text-muted)"}
                            />
                        ))}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{total} Global Reviews</div>
                </div>

                <div style={{ display: 'grid', gap: '0.8rem' }}>
                    {stats.map(({ star, count, percentage }) => (
                        <div key={star} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem', fontWeight: 700 }}>
                                {star} <Star size={12} fill="var(--text-muted)" stroke="none" />
                            </div>
                            <div style={{ flex: 1, height: '8px', background: 'rgba(var(--primary-rgb), 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percentage}%` }}
                                    style={{ height: '100%', background: 'var(--primary)', borderRadius: '4px' }}
                                />
                            </div>
                            <div style={{ width: '40px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                                {count}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function CustomReviews({ limit, setView, isAdmin }) {
    const [reviews, setReviews] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);
    const [replyTo, setReplyTo] = useState(null);
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

    const fetchReviews = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            const likedReviews = JSON.parse(localStorage.getItem('iotnext_likes') || '[]');
            const liveReviews = data.map(r => ({
                ...r,
                date: new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                userLiked: likedReviews.includes(r.id)
            }));
            setReviews([...liveReviews, ...seedReviews]);
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

    const displayedReviews = limit
        ? reviews.filter(r => !r.parent_id).slice(0, limit)
        : reviews.filter(r => !r.parent_id);

    return (
        <section id="reviews-system" aria-labelledby="community-experience-title" style={{ marginTop: limit <= 1 ? '1rem' : '2.5rem' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: limit <= 1 ? '1.5rem' : '3.5rem'
            }}>
                <div style={{ textAlign: 'left' }}>
                    <h3 id="community-experience-title" style={{
                        fontSize: limit <= 1 ? '1.5rem' : '2.5rem',
                        fontWeight: 950,
                        letterSpacing: '-0.03em',
                        marginBottom: '0.5rem'
                    }}>
                        Community <span className="text-gradient">Experience</span>
                    </h3>
                    {limit > 1 && (
                        <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '1.1rem' }}>
                            Verified feedback from our global network of engineers.
                        </p>
                    )}
                </div>
                <button
                    onClick={() => setIsFormOpen(true)}
                    aria-label="Leave a Community Review"
                    className="btn btn-primary"
                    style={{ borderRadius: '1rem', padding: '0.8rem 1.75rem' }}
                >
                    Leave a Review
                </button>
            </div>

            {limit > 1 && <RatingSummary reviews={reviews} />}

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {displayedReviews.map((review) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={review.id}
                        className="glass"
                        style={{ padding: '2rem', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden' }}
                    >
                        {review.isTop && (
                            <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--primary)', color: 'white', padding: '0.4rem 1.2rem', fontSize: '0.65rem', fontWeight: '900', borderRadius: '0 0 0 1rem', letterSpacing: '0.05em' }}>
                                MOST HELPFUL
                            </div>
                        )}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div
                                    aria-label={`Avatar for ${review.user}`}
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: 'rgba(var(--primary-rgb), 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--primary)'
                                    }}
                                >
                                    <User size={24} />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{review.user}</span>
                                        {review.type === 'verified' && (
                                            <div title="Verified Architect" style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                <Shield size={16} fill="#10b981" fillOpacity={0.2} />
                                                <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'rgba(16, 185, 129, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>VERIFIED STUDENT</span>
                                            </div>
                                        )}
                                        {review.type === 'email' && (
                                            <div title="Verified via Email" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
                                                <CheckCircle size={16} />
                                            </div>
                                        )}
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {review.role} • {review.college}
                                    </div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500', marginTop: '0.2rem', opacity: 0.7 }}>
                                        {review.date}
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.2rem' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill={i < review.rating ? "var(--secondary)" : "none"} stroke={i < review.rating ? "var(--secondary)" : "var(--text-muted)"} />
                                    ))}
                                </div>
                                {review.helpful > 0 && (
                                    <div style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: '800' }}>
                                        {review.helpful} engineers found this helpful
                                    </div>
                                )}
                                {isAdmin && review.id !== 'seed-1' && review.id !== 'seed-2' && review.id !== 'seed-3' && (
                                    <button
                                        onClick={() => handleDeleteReview(review.id)}
                                        disabled={deletingId === review.id}
                                        style={{
                                            marginTop: '0.5rem',
                                            color: '#ef4444',
                                            background: 'rgba(239, 68, 68, 0.1)',
                                            border: 'none',
                                            padding: '0.4rem',
                                            borderRadius: '0.5rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.3rem',
                                            fontSize: '0.7rem',
                                            fontWeight: 800
                                        }}
                                    >
                                        <Trash2 size={12} /> {deletingId === review.id ? 'Deleting...' : 'Delete'}
                                    </button>
                                )}
                            </div>
                        </div>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-muted)', fontWeight: '500', marginBottom: '1.5rem' }}>
                            "{review.text}"
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                            <button
                                onClick={() => handleHelpful(review.id)}
                                disabled={review.userLiked}
                                style={{ background: 'none', border: 'none', color: review.userLiked ? 'var(--primary)' : 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <CheckCircle size={14} /> {review.userLiked ? 'Helpful!' : 'Helpful?'}
                            </button>
                            <button
                                onClick={() => {
                                    setReplyTo(review);
                                    setIsFormOpen(true);
                                }}
                                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <MessageSquare size={14} /> Reply
                            </button>
                        </div>

                        {/* Recursive Replies Rendering */}
                        {reviews.filter(r => r.parent_id === review.id).map(reply => (
                            <div key={reply.id} style={{ marginLeft: '2rem', marginTop: '1rem', borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                                    <div style={{ padding: '0.4rem', borderRadius: '50%', background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)' }}>
                                        <User size={12} />
                                    </div>
                                    <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>{reply.user}</span>
                                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{reply.date}</span>
                                </div>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{reply.text}</p>
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>

            {limit && reviews.length > limit && (
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <button
                        onClick={() => setView('reviews-page')}
                        className="btn glass"
                        style={{ padding: '1rem 3rem', borderRadius: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}
                    >
                        View All {reviews.length} Reviews
                    </button>
                </div>
            )}

            <AnimatePresence>
                {isFormOpen && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10001,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
                        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="glass"
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                maxHeight: '90vh',
                                overflowY: 'auto',
                                padding: '2.5rem',
                                borderRadius: '2.5rem',
                                position: 'relative'
                            }}
                        >
                            <button
                                onClick={() => setIsFormOpen(false)}
                                aria-label="Close Review Form"
                                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', color: 'var(--text-muted)' }}
                            >
                                <X size={24} />
                            </button>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 950, marginBottom: '2rem' }}>
                                {replyTo ? `Reply to ${replyTo.user}` : 'Submit Protocol'}
                            </h2>

                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)' }}>NAME (OPTIONAL)</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Anonymous Architect"
                                        style={{ background: 'var(--background)', border: '1px solid var(--border)', padding: '1rem', borderRadius: '1rem', color: 'var(--text)', outline: 'none' }}
                                    />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)' }}>ROLE</label>
                                        <input
                                            type="text"
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            placeholder="Student / Engineer"
                                            style={{ background: 'var(--background)', border: '1px solid var(--border)', padding: '1rem', borderRadius: '1rem', color: 'var(--text)', outline: 'none' }}
                                        />
                                    </div>
                                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)' }}>COLLEGE / ORG</label>
                                        <input
                                            type="text"
                                            value={formData.college}
                                            onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                            placeholder="Global Institute"
                                            style={{ background: 'var(--background)', border: '1px solid var(--border)', padding: '1rem', borderRadius: '1rem', color: 'var(--text)', outline: 'none' }}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)' }}>EMAIL (FOR VERIFIED BADGE)</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="engineer@protocol.com"
                                        style={{ background: 'var(--background)', border: '1px solid var(--border)', padding: '1rem', borderRadius: '1rem', color: 'var(--text)', outline: 'none' }}
                                    />
                                </div>
                                <div style={{ display: 'grid', gap: '0.8rem', marginBottom: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)' }}>RATING</label>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, rating: star })}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem', transition: 'transform 0.2s ease' }}
                                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                            >
                                                <Star
                                                    size={28}
                                                    fill={star <= formData.rating ? "var(--secondary)" : "none"}
                                                    stroke={star <= formData.rating ? "var(--secondary)" : "var(--text-muted)"}
                                                    style={{ transition: 'all 0.3s ease' }}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)' }}>REVIEW</label>
                                    <textarea
                                        required
                                        value={formData.text}
                                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                                        rows="4"
                                        placeholder="Share your technical experience..."
                                        style={{ background: 'var(--background)', border: '1px solid var(--border)', padding: '1rem', borderRadius: '1rem', color: 'var(--text)', outline: 'none', resize: 'none' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ flex: 1, padding: '1rem', borderRadius: '1rem', fontWeight: 800 }}
                                    >
                                        Log Review
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
