import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Calendar, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 820);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (selectedPost) {
        return (
            <div className="container" style={{
                paddingTop: isMobile ? '6rem' : '4rem',
                paddingBottom: isMobile ? '2rem' : '4rem'
            }}>
                <button
                    onClick={() => setSelectedPost(null)}
                    className="btn btn-outline"
                    style={{
                        marginBottom: isMobile ? '1.5rem' : '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
                        fontSize: isMobile ? '0.85rem' : '1rem'
                    }}
                >
                    <ArrowLeft size={isMobile ? 16 : 18} /> Back to Blog
                </button>

                <article style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <img
                        src={selectedPost.image}
                        alt={selectedPost.title}
                        style={{
                            width: '100%',
                            height: isMobile ? '220px' : '400px',
                            objectFit: 'cover',
                            borderRadius: isMobile ? '1.25rem' : '2rem',
                            marginBottom: isMobile ? '1.5rem' : '3rem'
                        }}
                    />

                    <div className="glass" style={{
                        padding: isMobile ? '1.5rem' : '3rem',
                        borderRadius: isMobile ? '1.5rem' : '2rem'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: isMobile ? '1rem' : '1.5rem',
                            marginBottom: '1rem',
                            color: 'var(--text-muted)',
                            fontSize: isMobile ? '0.75rem' : '0.9rem'
                        }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={isMobile ? 14 : 16} /> {selectedPost.date}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={isMobile ? 14 : 16} /> {selectedPost.author}</span>
                        </div>

                        <h1 style={{
                            fontSize: isMobile ? '1.75rem' : '3rem',
                            fontWeight: '900',
                            marginBottom: isMobile ? '1rem' : '2rem',
                            lineHeight: 1.2
                        }}>{selectedPost.title}</h1>

                        <div style={{
                            display: 'flex',
                            gap: '0.6rem',
                            marginBottom: isMobile ? '1.5rem' : '2.5rem',
                            flexWrap: 'wrap'
                        }}>
                            {selectedPost.tags.map(tag => (
                                <span key={tag} className="glass" style={{
                                    padding: isMobile ? '0.3rem 0.8rem' : '0.4rem 1rem',
                                    borderRadius: '0.8rem',
                                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                                    color: 'var(--primary)',
                                    fontWeight: '600'
                                }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div style={{
                            color: 'var(--text)',
                            lineHeight: isMobile ? 1.6 : 1.8,
                            fontSize: isMobile ? '1rem' : '1.1rem'
                        }}>
                            {selectedPost.content}
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    return (
        <section className="container" style={{ paddingTop: isMobile ? '1rem' : 'var(--app-py)', paddingBottom: isMobile ? '6rem' : 'var(--app-py)' }}>
            <Helmet>
                <title>IoT Engineering Blog | Insights, Trends & Tutorials | IoTNext</title>
                <meta name="description" content="Stay updated with the latest in IoT engineering, embedded systems trends, and deep-dive technical tutorials on our professional blog." />
                <meta property="og:title" content="IoT Engineering Blog - IoTNext" />
                <meta property="og:description" content="Technical insights and industry trends for the modern embedded engineer." />
                <link rel="canonical" href="https://iotnext.store/blog" />
            </Helmet>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5rem' }}>
                <div className="glass" style={{
                    display: 'inline-flex',
                    padding: isMobile ? '0.4rem 1rem' : '0.5rem 1.5rem',
                    borderRadius: '2rem',
                    marginBottom: '1rem',
                    color: 'var(--primary)',
                    fontWeight: '700',
                    fontSize: isMobile ? '0.75rem' : '0.9rem',
                    gap: '0.5rem',
                    alignItems: 'center'
                }}>
                    <BookOpen size={isMobile ? 16 : 18} />
                    <span>Technical Insights</span>
                </div>
                <h1 style={{
                    fontSize: isMobile ? '2.5rem' : '4rem',
                    fontWeight: '950',
                    marginBottom: isMobile ? '1rem' : '1.5rem'
                }}>IoTnext <span className="text-gradient">Blog</span></h1>
                <p style={{
                    color: 'var(--text-muted)',
                    maxWidth: '600px',
                    margin: '0 auto',
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    lineHeight: 1.4
                }}>
                    Deep dives into industrial automation, embedded architectures, and the future of connected systems.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: isMobile ? '1.25rem' : '2.5rem'
            }}>
                {blogPosts.map(post => (
                    <div
                        key={post.id}
                        className="glass card-hover"
                        style={{
                            borderRadius: isMobile ? '1.5rem' : '2rem',
                            overflow: 'hidden',
                            cursor: 'pointer'
                        }}
                        onClick={() => setSelectedPost(post)}
                    >
                        <div style={{ height: isMobile ? '180px' : '220px', overflow: 'hidden' }}>
                            <img
                                src={post.image}
                                alt={post.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{ padding: isMobile ? '1.25rem' : '2rem' }}>
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                marginBottom: '0.75rem',
                                color: 'var(--text-muted)',
                                fontSize: isMobile ? '0.7rem' : '0.8rem'
                            }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={isMobile ? 12 : 14} /> {post.date}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><User size={12} /> {post.author}</span>
                            </div>
                            <h3 style={{
                                fontSize: isMobile ? '1.2rem' : '1.4rem',
                                fontWeight: '800',
                                marginBottom: '0.75rem',
                                lineHeight: 1.3
                            }}>{post.title}</h3>
                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: isMobile ? '0.85rem' : '0.95rem',
                                marginBottom: '1.25rem',
                                lineHeight: 1.5
                            }}>{post.excerpt}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {post.tags.slice(0, 2).map(tag => (
                                        <span key={tag} style={{ color: 'var(--primary)', fontSize: '0.7rem', fontWeight: '700' }}>#{tag}</span>
                                    ))}
                                </div>
                                <span style={{
                                    color: 'var(--primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.3rem',
                                    fontWeight: '700',
                                    fontSize: isMobile ? '0.8rem' : '0.9rem'
                                }}>
                                    Read More <ArrowRight size={isMobile ? 14 : 16} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
