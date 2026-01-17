import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import {
    ArrowLeft, Cpu, Info, Layers, Code as CodeIcon,
    Send, CheckCircle, Smartphone, AlertCircle
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';

const MobileShareProject = ({ setView }) => {
    const { addToast } = useToast();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Form States
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        level: 'Beginner',
        components: '',
        pinConfig: '',
        workingPrinciple: '',
        code: '',
        usage: ''
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        if (!formData.title || !formData.code) {
            addToast('Title and Code are required!', 'error');
            return;
        }

        setLoading(true);

        const projectData = {
            title: formData.title,
            description: formData.description,
            level: formData.level,
            components: formData.components,
            pin_config: formData.pinConfig,
            working_principle: formData.workingPrinciple,
            code: formData.code,
            usage: formData.usage,
            author_name: formData.author,
            status: 'Draft',
            slug: formData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + '-' + Math.random().toString(36).substr(2, 5),
            created_at: new Date()
        };

        const { error } = await supabase.from('projects').insert([projectData]);

        if (error) {
            addToast('Error submitting: ' + error.message, 'error');
            setLoading(false);
        } else {
            setLoading(false);
            setSubmitted(true);
            setTimeout(() => setView('home'), 3000);
        }
    };

    const nextStep = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    if (submitted) {
        return (
            <div style={{
                height: '100vh',
                background: 'var(--background)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                >
                    <CheckCircle size={80} color="#10b981" style={{ marginBottom: '1.5rem' }} />
                </motion.div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1rem', color: 'var(--text)' }}>Project Sent!</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Thanks for sharing your innovation. We'll review it shortly!
                </p>
                <button
                    onClick={() => setView('home')}
                    style={{
                        background: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '1rem',
                        fontWeight: '700',
                        fontSize: '1rem',
                        width: '100%'
                    }}
                >
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: '100vh',
            background: 'var(--background)',
            paddingBottom: '80px',
            position: 'relative'
        }}>
            {/* Header */}
            <div style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                background: 'rgba(15, 23, 42, 0.9)', // Using hardcoded dark color as base or var
                backgroundColor: 'var(--background)', // Fallback to theme
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--border)',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <button
                    onClick={() => step === 1 ? setView('home') : prevStep()}
                    style={{ background: 'none', border: 'none', color: 'var(--text)' }}
                >
                    <ArrowLeft size={24} />
                </button>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--text)' }}>
                    Share Project <span style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>({step}/{totalSteps})</span>
                </div>
                <div style={{ width: 24 }} /> {/* Spacer */}
            </div>

            {/* Progress Bar */}
            <div style={{ height: '4px', background: 'var(--border)', width: '100%' }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
                />
            </div>

            <div style={{ padding: '1.5rem' }}>
                <AnimatePresence mode="wait">
                    {/* Step 1: Basic Info */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.5rem', color: 'var(--text)' }}>The Basics</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Let's start with the name and details.</p>
                            </div>

                            <MobileInput
                                label="Project Title"
                                placeholder="e.g. Smart Plant Monitor"
                                value={formData.title}
                                onChange={(val) => handleChange('title', val)}
                                icon={Cpu}
                            />

                            <MobileInput
                                label="Your Name"
                                placeholder="Credit where due"
                                value={formData.author}
                                onChange={(val) => handleChange('author', val)}
                                icon={Info}
                            />

                            <div>
                                <label style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text)', marginBottom: '0.5rem', display: 'block' }}>Difficulty</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                                    {['Beginner', 'Intermediate', 'Advanced'].map(lvl => (
                                        <div
                                            key={lvl}
                                            onClick={() => handleChange('level', lvl)}
                                            style={{
                                                padding: '0.75rem',
                                                borderRadius: '0.75rem',
                                                background: formData.level === lvl ? 'var(--primary)' : 'var(--surface)',
                                                border: `1px solid ${formData.level === lvl ? 'var(--primary)' : 'var(--border)'}`,
                                                color: formData.level === lvl ? 'white' : 'var(--text-muted)',
                                                textAlign: 'center',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {lvl}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Description & Hardware */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.5rem', color: 'var(--text)' }}>Hardware & Story</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>What parts did you use?</p>
                            </div>

                            <MobileTextArea
                                label="Description"
                                placeholder="What does your project do?"
                                value={formData.description}
                                onChange={(val) => handleChange('description', val)}
                                rows={4}
                            />

                            <MobileTextArea
                                label="Components List"
                                placeholder="• ESP32&#10;• DHT11 Sensor"
                                value={formData.components}
                                onChange={(val) => handleChange('components', val)}
                                rows={5}
                            />
                        </motion.div>
                    )}

                    {/* Step 3: Circuit & Logic */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.5rem', color: 'var(--text)' }}>Wiring & Code</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>The brain of the project.</p>
                            </div>

                            <MobileTextArea
                                label="Pin Configuration"
                                placeholder="Pin 4 -> Data Pin&#10;VCC -> 3.3V"
                                value={formData.pinConfig}
                                onChange={(val) => handleChange('pinConfig', val)}
                                rows={4}
                            />

                            <MobileTextArea
                                label="Code (.ino)"
                                placeholder="Paste your Arduino code here..."
                                value={formData.code}
                                onChange={(val) => handleChange('code', val)}
                                rows={8}
                                isCode
                            />
                        </motion.div>
                    )}

                    {/* Step 4: Preview & Submit */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <div style={{
                                    width: 60, height: 60, background: 'var(--primary)',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', margin: '0 auto 1rem auto'
                                }}>
                                    <Send size={24} color="white" />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--text)' }}>Ready to Share?</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Review your details before publishing.</p>
                            </div>

                            <div style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                                <PreviewRow label="Project" value={formData.title} />
                                <PreviewRow label="Author" value={formData.author} />
                                <PreviewRow label="Level" value={formData.level} />
                                <PreviewRow label="Code Length" value={formData.code ? `${formData.code.length} chars` : 'Empty'} />
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                style={{
                                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '1.25rem',
                                    borderRadius: '1rem',
                                    fontWeight: '800',
                                    fontSize: '1.1rem',
                                    width: '100%',
                                    marginTop: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    opacity: loading ? 0.7 : 1
                                }}
                            >
                                {loading ? 'Publishing...' : <><Smartphone size={20} /> Publish Project</>}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom Action Bar */}
            {step < totalSteps && (
                <div style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.5rem',
                    background: 'var(--surface)',
                    borderTop: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    zIndex: 50
                }}>
                    <button
                        onClick={nextStep}
                        style={{
                            background: 'var(--primary)',
                            color: 'white',
                            border: 'none',
                            padding: '1rem 2rem',
                            borderRadius: '1rem',
                            fontWeight: '700',
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        Next Step <ArrowLeft size={18} style={{ transform: 'rotate(180deg)' }} />
                    </button>
                </div>
            )}
        </div>
    );
};

const MobileInput = ({ label, placeholder, value, onChange, icon: Icon }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text)' }}>{label}</label>
        <div style={{ position: 'relative' }}>
            {Icon && <Icon size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />}
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                style={{
                    width: '100%',
                    padding: '1rem',
                    paddingLeft: Icon ? '3rem' : '1rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '1rem',
                    color: 'var(--text)',
                    fontSize: '1rem',
                    outline: 'none'
                }}
            />
        </div>
    </div>
);

const MobileTextArea = ({ label, placeholder, value, onChange, rows, isCode }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text)' }}>{label}</label>
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            style={{
                width: '100%',
                padding: '1rem',
                background: isCode ? '#0f172a' : 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                color: isCode ? '#818cf8' : 'var(--text)',
                fontFamily: isCode ? 'monospace' : 'inherit',
                fontSize: '0.95rem',
                outline: 'none',
                resize: 'none'
            }}
        />
    </div>
);

const PreviewRow = ({ label, value }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{label}</span>
        <span style={{ fontWeight: '600', color: 'var(--text)', maxWidth: '60%', textAlign: 'right', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value || '-'}</span>
    </div>
);

export default MobileShareProject;
