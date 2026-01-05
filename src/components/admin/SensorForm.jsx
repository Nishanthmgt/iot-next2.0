import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Save, X, Image as ImageIcon, Cpu, ChevronLeft, Settings } from 'lucide-react';

export default function SensorForm({ setView, sensor, onComplete }) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        pins: ''
    });

    useEffect(() => {
        if (sensor) {
            setFormData({
                name: sensor.name || '',
                image: sensor.image || '',
                pins: sensor.pins || ''
            });
        }
    }, [sensor]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (sensor?.id) {
                // Update
                const { error } = await supabase
                    .from('sensors')
                    .update(formData)
                    .eq('id', sensor.id);
                if (error) throw error;
            } else {
                // Create
                const { error } = await supabase
                    .from('sensors')
                    .insert([formData]);
                if (error) throw error;
            }

            if (onComplete) onComplete();
            setView('admin-dashboard');
        } catch (err) {
            console.error('Operation failed:', err);
            alert('Failed to save sensor. Ensure the "sensors" table exists in your Supabase project.');
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
                        {sensor ? 'Edit' : 'Register'} <span className="text-gradient">Hardware</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.9rem', marginTop: '0.5rem' }}>Define component parameters.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
                    {/* Name */}
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Cpu size={14} /> Component Name
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="e.g. DHT11 Temp & Humidity"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="input-field"
                            style={{
                                width: '100%',
                                padding: '1.2rem',
                                borderRadius: '1rem',
                                background: 'rgba(0,0,0,0.05)',
                                border: '1px solid var(--border)',
                                color: 'var(--text)',
                                fontSize: '1rem',
                                fontWeight: '600'
                            }}
                        />
                    </div>

                    {/* Pins */}
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Settings size={14} /> Pin Configuration
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="e.g. 3 Pins (VCC, GND, DATA)"
                            value={formData.pins}
                            onChange={(e) => setFormData({ ...formData, pins: e.target.value })}
                            className="input-field"
                            style={{
                                width: '100%',
                                padding: '1.2rem',
                                borderRadius: '1rem',
                                background: 'rgba(0,0,0,0.05)',
                                border: '1px solid var(--border)',
                                color: 'var(--text)',
                                fontSize: '1rem',
                                fontWeight: '600'
                            }}
                        />
                    </div>

                    {/* Image Management */}
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ImageIcon size={14} /> Hardware Visual
                        </label>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            padding: '2.5rem',
                            borderRadius: '1.5rem',
                            border: '2px dashed var(--border)',
                            background: 'rgba(var(--primary-rgb), 0.02)',
                            transition: 'var(--transition)',
                            position: 'relative'
                        }}>
                            {formData.image ? (
                                <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                                    <img
                                        src={formData.image}
                                        alt="Hardware"
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '1rem' }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, image: '' })}
                                        style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)' }}
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div style={{ width: '64px', height: '64px', borderRadius: '1rem', background: 'rgba(var(--primary-rgb), 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                        <ImageIcon size={32} strokeWidth={1.5} />
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ fontWeight: '700', marginBottom: '0.2rem' }}>Drop hardware image here</p>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>PNG, JPG or WebP (max 2MB)</p>
                                    </div>
                                </>
                            )}

                            <input
                                type="file"
                                accept="image/*"
                                onChange={async (e) => {
                                    const file = e.target.files[0];
                                    if (!file) return;

                                    if (file.size > 2 * 1024 * 1024) {
                                        alert("Image size must be less than 2MB");
                                        return;
                                    }

                                    setLoading(true);
                                    try {
                                        const fileExt = file.name.split('.').pop();
                                        const fileName = `${Math.random()}.${fileExt}`;
                                        const filePath = `sensor-images/${fileName}`;

                                        const { error: uploadError } = await supabase.storage
                                            .from('sensors')
                                            .upload(filePath, file);

                                        if (uploadError) throw uploadError;

                                        const { data: { publicUrl } } = supabase.storage
                                            .from('sensors')
                                            .getPublicUrl(filePath);

                                        setFormData({ ...formData, image: publicUrl });
                                    } catch (error) {
                                        console.error('Error uploading image:', error);
                                        alert('Error uploading image. Make sure you have created a "sensors" bucket in Supabase Storage with public access.');
                                    } finally {
                                        setLoading(false);
                                    }
                                }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    opacity: 0,
                                    cursor: 'pointer',
                                    width: '100%'
                                }}
                                disabled={loading}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary btn-primary-shiny"
                            style={{ flex: 2, minWidth: '160px', padding: '1rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
                        >
                            <Save size={18} /> {loading ? 'SAVING...' : 'REGISTER'}
                        </button>
                        <button
                            type="button"
                            onClick={() => setView('admin-dashboard')}
                            className="btn btn-outline"
                            style={{ flex: 1, minWidth: '100px', padding: '1rem', borderRadius: '1rem', fontSize: '0.9rem' }}
                        >
                            CANCEL
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
