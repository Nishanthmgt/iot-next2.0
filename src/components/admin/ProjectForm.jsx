import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Save, X, Plus, Trash2, ArrowLeft, Image as ImageIcon } from 'lucide-react';

export default function ProjectForm({ setView, project }) {
    const isEdit = !!project;
    const [loading, setLoading] = useState(false);

    // Form States
    // Form States - Robust Initialization
    // 10 Specific Fields Requested by User
    const [title, setTitle] = useState(project?.title || '');
    const [description, setDescription] = useState(project?.description || '');
    const [level, setLevel] = useState(project?.level || 'Beginner');

    // Components: Handle text or array
    const [components, setComponents] = useState(() => {
        if (!project?.components) return '';
        if (Array.isArray(project.components)) {
            // Check if it's an array of objects (new structure) or strings (old)
            return project.components.map(c => typeof c === 'object' ? `${c.pin || ''} ${c.component || ''} ${c.note || ''}`.trim() : c).join('\n');
        }
        return project.components;
    });

    // Pin Config: Handle text or object/json
    const [pinConfig, setPinConfig] = useState(() => {
        if (!project?.pin_config) return '';
        if (typeof project.pin_config === 'object') return JSON.stringify(project.pin_config, null, 2);
        return project.pin_config;
    });

    const [workingPrinciple, setWorkingPrinciple] = useState(project?.working_principle || '');
    const [code, setCode] = useState(project?.code || '');
    const [usage, setUsage] = useState(project?.usage || '');
    const [advantages, setAdvantages] = useState(project?.advantages || '');
    const [disadvantages, setDisadvantages] = useState(project?.disadvantages || '');

    // Circuit Diagram: Fallback to 'image' if 'circuit_diagram' is missing
    const [circuitDiagram, setCircuitDiagram] = useState(project?.circuit_diagram || project?.image || '');

    const [status, setStatus] = useState(project?.status || 'Draft');
    const [authorName, setAuthorName] = useState(project?.author_name || 'Antigravity');
    const [slug, setSlug] = useState(project?.slug || '');

    // No longer fetching from separate table for Point 5 simplification

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let finalPinConfig = pinConfig;
        try {
            // Attempt to parse if it looks like JSON
            if (pinConfig.trim().startsWith('{') || pinConfig.trim().startsWith('[')) {
                finalPinConfig = JSON.parse(pinConfig);
            }
        } catch (err) {
            alert('Invalid JSON in Pin Configuration. Please check your syntax.');
            setLoading(false);
            return;
        }

        const projectData = {
            title,
            description,
            level,
            components: components.split('\n').filter(line => line.trim() !== '').map(line => line.trim()),
            pin_config: finalPinConfig,
            working_principle: workingPrinciple,
            code,
            usage: usage,
            advantages: advantages,
            disadvantages: disadvantages,
            status,
            author_name: authorName,
            slug: slug || title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
            updated_at: new Date()
        };

        if (isEdit) {
            const { error } = await supabase.from('projects').update(projectData).eq('id', project.id);
            if (error) { alert(error.message); setLoading(false); return; }
        } else {
            const { error } = await supabase.from('projects').insert([projectData]);
            if (error) { alert(error.message); setLoading(false); return; }
        }

        setLoading(false);
        setView('admin-dashboard');
    };

    return (
        <section className="container" style={{ paddingBottom: '5rem', minHeight: '100vh', background: 'var(--background)' }}>
            {/* Header Area */}
            <div style={{
                padding: '3rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                borderBottom: '1px solid var(--border)',
                marginBottom: '4rem'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <button className="btn btn-outline" onClick={() => setView('admin-dashboard')} style={{ marginBottom: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', border: '1px solid var(--border)', padding: '0.6rem 1rem', fontSize: '0.85rem' }}>
                            <ArrowLeft size={16} /> Dashboard
                        </button>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {isEdit ? 'Refine Project' : 'Architect Project'}
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem' }}>Crafting high-quality IoT educational content</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                    {/* Core Identity Section */}
                    <div className="glass" style={{ padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(var(--primary-rgb), 0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <FormField label="1. Project Title" description="Clear, descriptive name for the experiment">
                                <input type="text" className="advanced-input" placeholder="e.g. Smart Irrigation System" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </FormField>

                            <FormField label="2. Description" description="A compelling hook for learners">
                                <textarea className="advanced-input" rows="3" placeholder="Briefly explain what this project achieves..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </FormField>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <FormField label="3. Level" description="Difficulty">
                                    <select className="advanced-input" value={level} onChange={(e) => setLevel(e.target.value)}>
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Advanced</option>
                                    </select>
                                </FormField>
                                <FormField label="Author" description="Credit for the project">
                                    <input type="text" className="advanced-input" placeholder="Antigravity" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                                </FormField>
                                <FormField label="Slug" description="URL path (Leave blank for auto-gen)">
                                    <input type="text" className="advanced-input" placeholder="smart-irrigation" value={slug} onChange={(e) => setSlug(e.target.value)} />
                                </FormField>
                            </div>
                        </div>
                    </div>

                    {/* Circuit Diagram Section */}
                    <div className="glass" style={{ padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(var(--secondary-rgb), 0.2)' }}>
                        <FormField label="Schematic Diagram" description="Visual circuit diagram (recommended)">
                            <div style={{
                                marginTop: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1.5rem',
                                padding: '2.5rem',
                                borderRadius: '1.5rem',
                                border: '2px dashed var(--border)',
                                background: 'rgba(var(--primary-rgb), 0.02)',
                                position: 'relative'
                            }}>
                                {circuitDiagram ? (
                                    <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                                        <img
                                            src={circuitDiagram}
                                            alt="Circuit Preview"
                                            style={{ width: '100%', height: 'auto', borderRadius: '1rem', border: '1px solid var(--border)' }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setCircuitDiagram('')}
                                            style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <ImageIcon size={48} style={{ color: 'var(--primary)', opacity: 0.5 }} />
                                        <div style={{ textAlign: 'center' }}>
                                            <p style={{ fontWeight: '700' }}>Upload Circuit Diagram</p>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Drag or click to choose file</p>
                                        </div>
                                    </>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}
                                    onChange={async (e) => {
                                        const file = e.target.files[0];
                                        if (!file) return;
                                        setLoading(true);
                                        try {
                                            const fileExt = file.name.split('.').pop();
                                            const fileName = `project-${Math.random()}.${fileExt}`;
                                            const filePath = `diagrams/${fileName}`;
                                            const { error: uploadError } = await supabase.storage.from('sensors').upload(filePath, file);
                                            if (uploadError) throw uploadError;
                                            const { data: { publicUrl } } = supabase.storage.from('sensors').getPublicUrl(filePath);
                                            setCircuitDiagram(publicUrl);
                                        } catch (err) {
                                            console.error(err);
                                            alert('Upload failed.');
                                        } finally {
                                            setLoading(false);
                                        }
                                    }}
                                />
                            </div>
                        </FormField>
                    </div>

                    {/* Technical Documents Section */}
                    <div className="grid grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '2rem' }}>
                            <FormField label="4. Components" icon="📦">
                                <textarea className="advanced-input" rows="8" placeholder="• ESP32 NodeMCU&#10;• DHT11 Sensor&#10;• 5V Relay Module" value={components} onChange={(e) => setComponents(e.target.value)}></textarea>
                            </FormField>
                        </div>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '2rem', border: '1px solid rgba(var(--secondary-rgb), 0.2)' }}>
                            <FormField label="5. Pin Configuration" icon="🔌" description="Define your wiring table/list exactly how you want it">
                                <textarea className="advanced-input" rows="8" placeholder="• VCC -> 5V&#10;• GND -> GND&#10;• DATA -> D4" value={pinConfig} onChange={(e) => setPinConfig(e.target.value)}></textarea>
                            </FormField>
                        </div>
                    </div>

                    {/* Principle & Code Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '1.5rem' }}>
                            <FormField label="6. Working Principle" icon="⚙️" description="The 'Why' and 'How'">
                                <textarea className="advanced-input" rows="6" placeholder="Explain the scientific or logical process..." value={workingPrinciple} onChange={(e) => setWorkingPrinciple(e.target.value)}></textarea>
                            </FormField>
                        </div>

                        <div style={{ background: '#0f172a', borderRadius: '2rem', border: '1px solid #1e293b', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                            <div style={{ background: '#1e293b', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '0.6rem' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                                </div>
                                <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: '900', letterSpacing: '0.1em' }}>7. SOURCE_CODE.INO</div>
                            </div>
                            <textarea
                                className="advanced-input"
                                rows="15"
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    padding: '2rem',
                                    fontFamily: '"Fira Code", monospace',
                                    color: '#e2e8f0',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    width: '100%',
                                    outline: 'none',
                                    resize: 'vertical'
                                }}
                                placeholder="// Write your Arduino code here..."
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    {/* Outcomes Section */}
                    <div className="glass" style={{ padding: '3rem', borderRadius: '2rem' }}>
                        <div style={{ display: 'grid', gap: '2.5rem' }}>
                            <FormField label="8. Usage" icon="🚀">
                                <textarea className="advanced-input" rows="3" placeholder="How to operate the finished project..." value={usage} onChange={(e) => setUsage(e.target.value)}></textarea>
                            </FormField>
                            <div className="grid grid-2" style={{ gap: '2rem' }}>
                                <FormField label="9. Advantages" icon="✅">
                                    <textarea className="advanced-input" rows="4" placeholder="Built-in security, low cost..." value={advantages} onChange={(e) => setAdvantages(e.target.value)}></textarea>
                                </FormField>
                                <FormField label="10. Disadvantages" icon="⚠️">
                                    <textarea className="advanced-input" rows="4" placeholder="High power consumption, limited range..." value={disadvantages} onChange={(e) => setDisadvantages(e.target.value)}></textarea>
                                </FormField>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Action Bar */}
                <div style={{ position: 'sticky', bottom: '1rem', marginTop: '3rem', zIndex: 100 }}>
                    <div className="glass" style={{ padding: '1rem 1.5rem', borderRadius: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid var(--primary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase' }}>State</span>
                            <select className="advanced-input" style={{ width: 'auto', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }} value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option>Draft</option>
                                <option>Published</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <button type="button" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', borderRadius: '0.75rem' }} onClick={() => setView('admin-dashboard')} disabled={loading}>Discard</button>
                            <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', borderRadius: '0.75rem' }} disabled={loading}>
                                {loading ? '...' : <><Save size={18} /> Deploy</>}
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            <style>{`
                .advanced-input {
                    width: 100%;
                    padding: 1.25rem;
                    background: rgba(var(--background-rgb), 0.3);
                    border: 1px solid var(--border);
                    border-radius: 1.25rem;
                    color: var(--text);
                    font-size: 1rem;
                    transition: var(--transition);
                }
                .advanced-input:focus {
                    outline: none;
                    border-color: var(--primary);
                    background: rgba(var(--primary-rgb), 0.05);
                    box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
                }
                .advanced-input::placeholder {
                    color: var(--text-muted);
                    opacity: 0.5;
                }
            `}</style>
        </section>
    );
}

// Internal Helper for cleaner JSX
function FormField({ label, description, icon, children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    {icon && <span style={{ fontSize: '1.2rem' }}>{icon}</span>}
                    <label style={{ fontWeight: '800', fontSize: '0.9rem', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</label>
                </div>
            </div>
            {description && <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{description}</p>}
            {children}
        </div>
    );
}
