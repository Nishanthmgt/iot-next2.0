import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Save, X, Image as ImageIcon, Cpu, ChevronLeft, Settings, Tag, Zap, Info, ListChecks, DollarSign } from 'lucide-react';
import { sensorCategories } from '../../data/sensors';

export default function SensorForm({ setView, sensor, onComplete }) {
    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        pins: '',
        categoryId: '',
        level: 'Beginner',
        description: '',
        voltage: '',
        what_it_does: '',
        how_it_works: '',
        common_uses: '',
        advantages: '',
        disadvantages: '',
        price_range: '',
        technical_specs: '',
        pinout_detail: '',
        beginner_mistakes: '',
        alternatives: ''
    });

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 820);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (sensor) {
            setFormData({
                name: sensor.name || '',
                image: sensor.image || '',
                pins: sensor.pins || '',
                categoryId: sensor.categoryId || '',
                level: sensor.level || 'Beginner',
                description: sensor.description || '',
                voltage: sensor.voltage || '',
                what_it_does: sensor.what_it_does || '',
                how_it_works: sensor.how_it_works || '',
                common_uses: sensor.common_uses || '',
                advantages: sensor.advantages || '',
                disadvantages: sensor.disadvantages || '',
                price_range: sensor.price_range || '',
                technical_specs: sensor.technical_specs || '',
                pinout_detail: sensor.pinout_detail || '',
                beginner_mistakes: sensor.beginner_mistakes || '',
                alternatives: sensor.alternatives || ''
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

            <div className="glass-plus" style={{ padding: isMobile ? '1.5rem' : '3rem', borderRadius: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        {sensor ? 'Edit' : 'Register'} <span className="text-gradient">Hardware</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontWeight: '500', fontSize: isMobile ? '0.8rem' : '0.9rem', marginTop: '0.5rem' }}>Define component parameters.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(200px, 1fr) 1fr', gap: '1.5rem' }}>
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
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Settings size={14} /> Pin Configuration
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="VCC | GND | SDA | SCL"
                                value={formData.pins}
                                onChange={(e) => setFormData({ ...formData, pins: e.target.value })}
                                className="input-field"
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600' }}
                            />
                        </div>
                    </div>

                    {/* Metadata Group */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Tag size={14} /> Category
                            </label>
                            <select
                                required
                                value={formData.categoryId}
                                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', appearance: 'none' }}
                            >
                                <option value="">Select Category</option>
                                {sensorCategories.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.emoji} {cat.name}</option>
                                ))}
                            </select>
                        </div>

                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Zap size={14} /> Voltage / Power
                            </label>
                            <input
                                type="text"
                                placeholder="3.3V - 5V"
                                value={formData.voltage}
                                onChange={(e) => setFormData({ ...formData, voltage: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600' }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <ListChecks size={14} /> Difficulty Level
                            </label>
                            <select
                                value={formData.level}
                                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', appearance: 'none' }}
                            >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>

                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <DollarSign size={14} /> India Price Range
                            </label>
                            <input
                                type="text"
                                placeholder="₹120 – ₹250"
                                value={formData.price_range}
                                onChange={(e) => setFormData({ ...formData, price_range: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600' }}
                            />
                        </div>
                    </div>

                    {/* Detailed Content */}
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Info size={14} /> Short Description
                        </label>
                        <textarea
                            placeholder="Briefly state what this component is..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', minHeight: '80px', resize: 'vertical' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>
                                🧠 WHAT IT DOES
                            </label>
                            <textarea
                                placeholder="Describe function..."
                                value={formData.what_it_does}
                                onChange={(e) => setFormData({ ...formData, what_it_does: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', minHeight: '120px' }}
                            />
                        </div>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>
                                ⚙️ HOW IT WORKS
                            </label>
                            <textarea
                                placeholder="Explain principle..."
                                value={formData.how_it_works}
                                onChange={(e) => setFormData({ ...formData, how_it_works: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', minHeight: '120px' }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>
                            🧪 COMMON USES (ONE PER LINE)
                        </label>
                        <textarea
                            placeholder="IoT dashboards&#10;Wearable devices..."
                            value={formData.common_uses}
                            onChange={(e) => setFormData({ ...formData, common_uses: e.target.value })}
                            style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', minHeight: '100px' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, color: '#10b981' }}>
                                ✅ ADVANTAGES
                            </label>
                            <textarea
                                placeholder="High contrast..."
                                value={formData.advantages}
                                onChange={(e) => setFormData({ ...formData, advantages: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(var(--primary-rgb), 0.02)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', minHeight: '100px' }}
                            />
                        </div>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, color: '#ef4444' }}>
                                ❌ DISADVANTAGES
                            </label>
                            <textarea
                                placeholder="Low resolution..."
                                value={formData.disadvantages}
                                onChange={(e) => setFormData({ ...formData, disadvantages: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(239, 68, 68, 0.02)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', minHeight: '100px' }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>
                                📋 TECHNICAL SPECIFICATIONS (NEWLINE SEPARATED)
                            </label>
                            <textarea
                                placeholder="Operating Temp: -40 to 85°C&#10;Accuracy: ±2%&#10;Interface: I2C..."
                                value={formData.technical_specs}
                                onChange={(e) => setFormData({ ...formData, technical_specs: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', minHeight: '120px' }}
                            />
                        </div>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>
                                🔌 PIN DETAILED EXPLANATION
                            </label>
                            <textarea
                                placeholder="VCC: 3.3V to 5V power supply&#10;GND: Ground connection&#10;SDA: I2C Data Line..."
                                value={formData.pinout_detail}
                                onChange={(e) => setFormData({ ...formData, pinout_detail: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', minHeight: '120px' }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, color: '#f59e0b' }}>
                                ⚠️ COMMON BEGINNER MISTAKES
                            </label>
                            <textarea
                                placeholder="Reversing polarity...&#10;Exceeding voltage limits...&#10;Incorrect I2C addressing..."
                                value={formData.beginner_mistakes}
                                onChange={(e) => setFormData({ ...formData, beginner_mistakes: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(245, 158, 11, 0.02)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', minHeight: '100px' }}
                            />
                        </div>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, color: 'var(--primary)' }}>
                                🔄 ALTERNATIVES / EQUIVALENTS
                            </label>
                            <textarea
                                placeholder="DHT22 (Higher accuracy)&#10;SHT31-D (Industrial grade)..."
                                value={formData.alternatives}
                                onChange={(e) => setFormData({ ...formData, alternatives: e.target.value })}
                                style={{ width: '100%', padding: '1.2rem', borderRadius: '1rem', background: 'rgba(var(--primary-rgb), 0.02)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '600', minHeight: '100px' }}
                            />
                        </div>
                    </div>

                    {/* Image Management */}
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ImageIcon size={14} /> Hardware Visual
                        </label>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '2.5rem', borderRadius: '1.5rem', border: '2px dashed var(--border)', background: 'rgba(var(--primary-rgb), 0.02)', transition: 'var(--transition)', position: 'relative' }}>
                            {formData.image ? (
                                <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                                    <img src={formData.image} alt="Hardware" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '1rem' }} />
                                    <button type="button" onClick={() => setFormData({ ...formData, image: '' })} style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)' }}><X size={14} /></button>
                                </div>
                            ) : (
                                <>
                                    <div style={{ width: '64px', height: '64px', borderRadius: '1rem', background: 'rgba(var(--primary-rgb), 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}><ImageIcon size={32} strokeWidth={1.5} /></div>
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ fontWeight: '700', marginBottom: '0.2rem' }}>Drop hardware image here</p>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>PNG, JPG or WebP (max 2MB)</p>
                                    </div>
                                </>
                            )}
                            <input type="file" accept="image/*" onChange={async (e) => {
                                const file = e.target.files[0];
                                if (!file) return;
                                if (file.size > 2 * 1024 * 1024) { alert("Image size must be less than 2MB"); return; }
                                setLoading(true);
                                try {
                                    const fileExt = file.name.split('.').pop();
                                    const fileName = `${Math.random()}.${fileExt}`;
                                    const filePath = `sensor-images/${fileName}`;
                                    const { error: uploadError } = await supabase.storage.from('sensors').upload(filePath, file);
                                    if (uploadError) throw uploadError;
                                    const { data: { publicUrl } } = supabase.storage.from('sensors').getPublicUrl(filePath);
                                    setFormData({ ...formData, image: publicUrl });
                                } catch (error) {
                                    console.error('Error uploading image:', error);
                                    alert('Error uploading image.');
                                } finally { setLoading(false); }
                            }} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%' }} disabled={loading} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                        <button type="submit" disabled={loading} className="btn btn-primary btn-primary-shiny" style={{ flex: 2, minWidth: '160px', padding: '1rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                            <Save size={18} /> {loading ? 'SAVING...' : sensor ? 'SAVE CHANGES' : 'REGISTER HARDWARE'}
                        </button>
                        <button type="button" onClick={() => setView('admin-dashboard')} className="btn btn-outline" style={{ flex: 1, minWidth: '100px', padding: '1rem', borderRadius: '1rem', fontSize: '0.9rem' }}>CANCEL</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
