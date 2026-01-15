import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Send, CheckCircle, ArrowLeft, Cpu, Code as CodeIcon, Info, Layers } from 'lucide-react';

export default function ShareProject({ setView }) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Form States
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('Beginner');
    const [components, setComponents] = useState('');
    const [pinConfig, setPinConfig] = useState('');
    const [workingPrinciple, setWorkingPrinciple] = useState('');
    const [code, setCode] = useState('');
    const [usage, setUsage] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const projectData = {
            title,
            description,
            level,
            components,
            pin_config: pinConfig,
            working_principle: workingPrinciple,
            code,
            usage,
            author_name: author,
            status: 'Draft', // For admin to approve
            slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + '-' + Math.random().toString(36).substr(2, 5),
            created_at: new Date()
        };

        const { error } = await supabase.from('projects').insert([projectData]);

        if (error) {
            alert('Error submitting project: ' + error.message);
            setLoading(false);
        } else {
            setLoading(false);
            setSubmitted(true);
            setTimeout(() => setView('home'), 3000);
        }
    };

    if (submitted) {
        return (
            <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div style={{ background: 'var(--surface)', padding: '4rem', borderRadius: '2rem', border: '1px solid var(--primary)', boxShadow: '0 20px 40px rgba(var(--primary-rgb), 0.1)' }}>
                    <CheckCircle size={80} color="var(--primary)" style={{ marginBottom: '2rem' }} />
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Project Shared!</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '500px' }}>
                        Thank you for contributing to the IoT community. Your project is now pending review and will be live once approved by NISHANTH.
                    </p>
                    <button className="btn btn-primary" onClick={() => setView('home')} style={{ marginTop: '2rem' }}>Return Home</button>
                </div>
            </div>
        );
    }

    return (
        <section className="container" style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <button
                    onClick={() => setView('home')}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginBottom: '2rem', fontWeight: '600' }}
                >
                    <ArrowLeft size={18} /> Back to Hub
                </button>

                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-0.04em', background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Share Your Project
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                        Inspire others with your hardware innovations. Fill out the project details below.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
                    <div className="glass" style={{ padding: '2.5rem', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <FormField label="Project Title" icon={<Cpu size={18} />} description="Give your project a catchy name">
                                <input type="text" className="share-input" placeholder="e.g. Smart Plant Monitor" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </FormField>

                            <FormField label="Your Name" icon={<Info size={18} />} description="Credit where it's due!">
                                <input type="text" className="share-input" placeholder="e.g. Nishanth" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                            </FormField>

                            <FormField label="Difficulty" icon={<Layers size={18} />}>
                                <select className="share-input" value={level} onChange={(e) => setLevel(e.target.value)}>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </FormField>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '2.5rem', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                        <FormField label="Description" description="What does it do? Why is it cool?">
                            <textarea className="share-input" rows="4" placeholder="Tell the community about your project..." value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                        </FormField>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '2rem' }}>
                            <FormField label="Components" description="List your hardware">
                                <textarea className="share-input" rows="6" placeholder="• ESP32&#10;• DHT11&#10;• Breadboard" value={components} onChange={(e) => setComponents(e.target.value)} required></textarea>
                            </FormField>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '2rem' }}>
                            <FormField label="Pin Config" description="How to wire it up">
                                <textarea className="share-input" rows="6" placeholder="Pin 4 -> Sensor DATA&#10;VCC -> 3.3V" value={pinConfig} onChange={(e) => setPinConfig(e.target.value)} required></textarea>
                            </FormField>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '2.5rem', borderRadius: '2rem', border: '1px solid var(--primary-hover)' }}>
                        <FormField label="Code (.ino)" icon={<CodeIcon size={18} />} description="Share your logic with the world">
                            <textarea
                                className="share-input"
                                rows="12"
                                style={{ fontFamily: 'monospace', background: '#0f172a', color: '#818cf8', padding: '1.5rem' }}
                                placeholder="void setup() { ... }"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                required
                            ></textarea>
                        </FormField>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <button type="submit" className="btn btn-primary" style={{ padding: '1rem 3.5rem', fontSize: '1.1rem', borderRadius: '1.25rem' }} disabled={loading}>
                            {loading ? 'Submitting...' : (
                                <><Send size={20} /> Share Project</>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            <style>{`
                .share-input {
                    width: 100%;
                    padding: 1rem 1.25rem;
                    background: var(--surface-hover);
                    border: 1px solid var(--border);
                    border-radius: 1rem;
                    color: var(--text);
                    font-size: 1rem;
                    transition: var(--transition);
                }
                .share-input:focus {
                    outline: none;
                    border-color: var(--primary);
                    background: var(--surface);
                }
            `}</style>
        </section>
    );
}

function FormField({ label, description, icon, children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {icon && <span style={{ color: 'var(--primary)' }}>{icon}</span>}
                <label style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text)' }}>{label}</label>
            </div>
            {description && <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{description}</p>}
            {children}
        </div>
    );
}
