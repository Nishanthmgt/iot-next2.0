import React, { useState } from 'react';
import { BookOpen, Calendar, User, ArrowRight, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);

    if (selectedPost) {
        return (
            <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
                <button
                    onClick={() => setSelectedPost(null)}
                    className="btn btn-outline"
                    style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <ArrowLeft size={18} /> Back to Blog
                </button>

                <article style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <img
                        src={selectedPost.image}
                        alt={selectedPost.title}
                        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '2rem', marginBottom: '3rem' }}
                    />

                    <div className="glass" style={{ padding: '3rem', borderRadius: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={16} /> {selectedPost.date}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={16} /> {selectedPost.author}</span>
                        </div>

                        <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem', lineHeight: 1.2 }}>{selectedPost.title}</h1>

                        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                            {selectedPost.tags.map(tag => (
                                <span key={tag} className="glass" style={{ padding: '0.4rem 1rem', borderRadius: '1rem', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600' }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                            {selectedPost.content}
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <div className="glass" style={{
                    display: 'inline-flex',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '2rem',
                    marginBottom: '1.5rem',
                    color: 'var(--primary)',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    gap: '0.5rem',
                    alignItems: 'center'
                }}>
                    <BookOpen size={18} />
                    <span>Technical Insights</span>
                </div>
                <h1 style={{ fontSize: '4rem', fontWeight: '950', marginBottom: '1.5rem' }}>IoTnext <span className="text-gradient">Blog</span></h1>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Deep dives into industrial automation, embedded architectures, and the future of connected systems.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
                {blogPosts.map(post => (
                    <div
                        key={post.id}
                        className="glass card-hover"
                        style={{ borderRadius: '2rem', overflow: 'hidden', cursor: 'pointer' }}
                        onClick={() => setSelectedPost(post)}
                    >
                        <div style={{ height: '220px', overflow: 'hidden' }}>
                            <img
                                src={post.image}
                                alt={post.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={14} /> {post.date}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><User size={14} /> {post.author}</span>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1rem', lineHeight: 1.4 }}>{post.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{post.excerpt}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {post.tags.slice(0, 2).map(tag => (
                                        <span key={tag} style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '700' }}>#{tag}</span>
                                    ))}
                                </div>
                                <span style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: '700', fontSize: '0.9rem' }}>
                                    Read More <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
