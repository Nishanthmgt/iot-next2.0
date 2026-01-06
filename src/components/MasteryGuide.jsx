import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MasteryGuide({ content, onBack }) {
    const [activeSection, setActiveSection] = useState(0);

    if (!content || !content.sections) {
        return (
            <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <h2>Content not available</h2>
                <button onClick={onBack} style={{ marginTop: '2rem', padding: '1rem 2rem', borderRadius: '1rem', background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <section className="section-mesh bg-dots" style={{ padding: '2rem 1rem', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                {/* Header */}
                <div style={{ marginBottom: '3rem' }}>
                    <button
                        onClick={onBack}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '1rem',
                            cursor: 'pointer',
                            color: 'var(--text)',
                            fontWeight: '700',
                            marginBottom: '2rem',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-4px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                    >
                        <ArrowLeft size={20} />
                        Back to Mastery Hub
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: 'rgba(var(--primary-rgb), 0.1)',
                            border: '1px solid var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary)'
                        }}>
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>{content.title}</h1>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{content.subtitle}</p>
                        </div>
                    </div>
                </div>

                <div className="mastery-guide-layout" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '3rem' }}>
                    {/* Sidebar Navigation */}
                    <div className="mastery-sidebar" style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                        <h3 style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                            TABLE OF CONTENTS
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {content.sections.map((section, idx) => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(idx)}
                                    style={{
                                        padding: '1rem',
                                        borderRadius: '1rem',
                                        background: activeSection === idx ? 'var(--primary)' : 'var(--surface)',
                                        color: activeSection === idx ? 'white' : 'var(--text)',
                                        border: '1px solid var(--border)',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        fontWeight: activeSection === idx ? '800' : '600',
                                        fontSize: '0.9rem',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <span>{section.title}</span>
                                    {activeSection === idx && <ChevronRight size={16} />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="glass-plus"
                        style={{
                            padding: '3rem',
                            borderRadius: '2rem',
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            minHeight: '600px'
                        }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem' }}>
                            {content.sections[activeSection].title}
                        </h2>

                        <div className="markdown-content" style={{ lineHeight: '1.8', color: 'var(--text)' }}>
                            <ReactMarkdown
                                components={{
                                    code({ node, inline, className, children, ...props }) {
                                        const match = /language-(\w+)/.exec(className || '');
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={vscDarkPlus}
                                                language={match[1]}
                                                PreTag="div"
                                                customStyle={{
                                                    borderRadius: '1rem',
                                                    padding: '1.5rem',
                                                    marginTop: '1rem',
                                                    marginBottom: '1rem',
                                                    fontSize: '0.9rem'
                                                }}
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code
                                                style={{
                                                    background: 'rgba(var(--primary-rgb), 0.1)',
                                                    padding: '0.2rem 0.5rem',
                                                    borderRadius: '0.4rem',
                                                    fontSize: '0.9em',
                                                    fontFamily: 'monospace',
                                                    color: 'var(--primary)'
                                                }}
                                                {...props}
                                            >
                                                {children}
                                            </code>
                                        );
                                    },
                                    h2: ({ children }) => (
                                        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--text)' }}>
                                            {children}
                                        </h3>
                                    ),
                                    p: ({ children }) => (
                                        <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>{children}</p>
                                    ),
                                    ul: ({ children }) => (
                                        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ul>
                                    ),
                                    ol: ({ children }) => (
                                        <ol style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ol>
                                    ),
                                    li: ({ children }) => (
                                        <li style={{ marginBottom: '0.5rem', fontSize: '1.05rem' }}>{children}</li>
                                    ),
                                    table: ({ children }) => (
                                        <div style={{
                                            overflowX: 'auto',
                                            marginTop: '1.5rem',
                                            marginBottom: '1.5rem',
                                            WebkitOverflowScrolling: 'touch',
                                            border: '1px solid var(--border)',
                                            borderRadius: '0.5rem'
                                        }}>
                                            <table style={{
                                                width: '100%',
                                                minWidth: '500px',
                                                borderCollapse: 'collapse'
                                            }}>
                                                {children}
                                            </table>
                                        </div>
                                    ),
                                    thead: ({ children }) => (
                                        <thead style={{ background: 'rgba(var(--primary-rgb), 0.1)' }}>{children}</thead>
                                    ),
                                    th: ({ children }) => (
                                        <th style={{
                                            padding: '0.75rem',
                                            textAlign: 'left',
                                            borderBottom: '2px solid var(--border)',
                                            fontWeight: '800',
                                            fontSize: '0.9rem',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {children}
                                        </th>
                                    ),
                                    td: ({ children }) => (
                                        <td style={{
                                            padding: '0.75rem',
                                            borderBottom: '1px solid var(--border)',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.5'
                                        }}>
                                            {children}
                                        </td>
                                    ),
                                    blockquote: ({ children }) => (
                                        <blockquote style={{
                                            borderLeft: '4px solid var(--primary)',
                                            paddingLeft: '1.5rem',
                                            marginLeft: 0,
                                            marginTop: '1.5rem',
                                            marginBottom: '1.5rem',
                                            fontStyle: 'italic',
                                            color: 'var(--text-muted)'
                                        }}>
                                            {children}
                                        </blockquote>
                                    ),
                                    hr: () => (
                                        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' }} />
                                    )
                                }}
                            >
                                {content.sections[activeSection].content}
                            </ReactMarkdown>
                        </div>

                        {/* Navigation Buttons */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                            <button
                                onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                                disabled={activeSection === 0}
                                style={{
                                    padding: '1rem 2rem',
                                    borderRadius: '1rem',
                                    background: activeSection === 0 ? 'var(--surface)' : 'var(--primary)',
                                    color: activeSection === 0 ? 'var(--text-muted)' : 'white',
                                    border: '1px solid var(--border)',
                                    cursor: activeSection === 0 ? 'not-allowed' : 'pointer',
                                    fontWeight: '700',
                                    opacity: activeSection === 0 ? 0.5 : 1
                                }}
                            >
                                ← Previous
                            </button>
                            <button
                                onClick={() => setActiveSection(Math.min(content.sections.length - 1, activeSection + 1))}
                                disabled={activeSection === content.sections.length - 1}
                                style={{
                                    padding: '1rem 2rem',
                                    borderRadius: '1rem',
                                    background: activeSection === content.sections.length - 1 ? 'var(--surface)' : 'var(--primary)',
                                    color: activeSection === content.sections.length - 1 ? 'var(--text-muted)' : 'white',
                                    border: '1px solid var(--border)',
                                    cursor: activeSection === content.sections.length - 1 ? 'not-allowed' : 'pointer',
                                    fontWeight: '700',
                                    opacity: activeSection === content.sections.length - 1 ? 0.5 : 1
                                }}
                            >
                                Next →
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
