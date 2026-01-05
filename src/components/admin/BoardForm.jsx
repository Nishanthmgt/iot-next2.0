import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Save, X, Image as ImageIcon, Cpu, ChevronLeft, Layout, Terminal } from 'lucide-react';

export default function BoardForm({ setView, board, onComplete }) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: 'Beginner',
        image: '',
        pins: '[]'
    });

    useEffect(() => {
        if (board) {
            setFormData({
                name: board.name || '',
                description: board.description || '',
                category: board.category || 'Beginner',
                image: board.image || '',
                pins: typeof board.pins === 'string' ? board.pins : JSON.stringify(board.pins, null, 2)
            });
        }
    }, [board]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let parsedPins = [];
            try {
                parsedPins = JSON.parse(formData.pins);
            } catch (pErr) {
                alert("Invalid PIN JSON format. Please check your configuration.");
                setLoading(false);
                return;
            }

            const dataToSave = {
                ...formData,
                pins: parsedPins
            };

            if (board?.id) {
                // Update
                const { error } = await supabase
                    .from('boards')
                    .update(dataToSave)
                    .eq('id', board.id);
                if (error) throw error;
            } else {
                // Create
                const { error } = await supabase
                    .from('boards')
                    .insert([dataToSave]);
                if (error) throw error;
            }

            if (onComplete) onComplete();
            setView('admin-dashboard');
        } catch (err) {
            console.error('Operation failed:', err);
            alert('Failed to save board. Ensure the "boards" table exists in your Supabase project.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container" style={{ padding: '4rem 0' }}>
            <button
                onClick={() => setView('admin-dashboard')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginBottom: '1.5rem', fontWeight: '700', fontSize: '0.8rem' }}
            >
                <ChevronLeft size={16} /> BACK
            </button>

            <div className="glass-plus" style={{ padding: '3rem', borderRadius: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        {board ? 'Edit' : 'Register'} <span className="text-gradient">Board</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.9rem', marginTop: '0.5rem' }}>Configure Pinout Lab hardware.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
                    <div className="grid grid-2" style={{ gap: '2rem' }}>
                        {/* Name */}
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Cpu size={14} /> Board Name
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="e.g. Arduino Uno R3"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="input-field"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '0.75rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text)',
                                    fontSize: '0.9rem',
                                    fontWeight: '600'
                                }}
                            />
                        </div>

                        {/* Category */}
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Layout size={14} /> Category
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '0.75rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text)',
                                    fontSize: '0.9rem',
                                    fontWeight: '600'
                                }}
                            >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Special">Special</option>
                            </select>
                        </div>
                    </div>

                    {/* Description */}
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <label style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>Description</label>
                        <textarea
                            placeholder="Briefly describe this board..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border)',
                                color: 'var(--text)',
                                minHeight: '80px',
                                resize: 'vertical'
                            }}
                        />
                    </div>

                    {/* Image Management */}
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <label style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ImageIcon size={14} /> Board Visual
                        </label>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            padding: '2rem',
                            borderRadius: '1.5rem',
                            border: '2px dashed var(--border)',
                            background: 'rgba(var(--primary-rgb), 0.02)',
                            position: 'relative'
                        }}>
                            {formData.image ? (
                                <div style={{ position: 'relative', width: '180px', height: '180px' }}>
                                    <img
                                        src={formData.image}
                                        alt="Board"
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '1rem' }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, image: '' })}
                                        style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ fontWeight: '700', fontSize: '0.9rem' }}>Click or drop to upload image</p>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PNG, JPG or WebP supported</p>
                                </div>
                            )}

                            <input
                                type="file"
                                accept="image/*"
                                onChange={async (e) => {
                                    const file = e.target.files[0];
                                    if (!file) return;
                                    setLoading(true);
                                    try {
                                        const fileExt = file.name.split('.').pop();
                                        const fileName = `${Date.now()}.${fileExt}`;
                                        const filePath = `board-images/${fileName}`;

                                        const { error: uploadError } = await supabase.storage
                                            .from('sensors') // Using existing bucket for simplicity
                                            .upload(filePath, file);

                                        if (uploadError) throw uploadError;

                                        const { data: { publicUrl } } = supabase.storage
                                            .from('sensors')
                                            .getPublicUrl(filePath);

                                        setFormData({ ...formData, image: publicUrl });
                                    } catch (error) {
                                        console.error('Upload failed:', error);
                                        alert('Upload failed. Check Supabase Storage.');
                                    } finally {
                                        setLoading(false);
                                    }
                                }}
                                style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}
                                disabled={loading}
                            />
                        </div>
                    </div>

                    {/* Pins JSON */}
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <label style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Terminal size={14} /> Pin Configuration (JSON)
                        </label>
                        <textarea
                            required
                            placeholder='[ { "id": "VCC", "type": "power", "label": "VCC" } ]'
                            value={formData.pins}
                            onChange={(e) => setFormData({ ...formData, pins: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border)',
                                color: 'var(--text)',
                                minHeight: '200px',
                                fontFamily: 'monospace',
                                fontSize: '0.8rem',
                                whiteSpace: 'pre'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary btn-primary-shiny"
                            style={{ flex: 1, padding: '1rem', borderRadius: '1rem' }}
                        >
                            {loading ? 'SAVING...' : 'SAVE BOARD'}
                        </button>
                        <button
                            type="button"
                            onClick={() => setView('admin-dashboard')}
                            className="btn btn-outline"
                            style={{ flex: 1, padding: '1rem', borderRadius: '1rem' }}
                        >
                            CANCEL
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
