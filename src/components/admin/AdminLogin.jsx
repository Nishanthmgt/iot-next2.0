import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Lock, Mail, ShieldAlert } from 'lucide-react';

export default function AdminLogin({ setView, setIsAdmin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error: authError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (authError) throw authError;

            // Role-based Access Control (RBAC)
            // Check user metadata for 'admin' role OR specific authorized email
            const userRole = data.user?.user_metadata?.role;
            const userEmail = data.user?.email;

            if (userRole === 'admin' || userEmail === 'mnishanth279@gmail.com') {
                setIsAdmin(true);
                setView('admin-dashboard');
                // Persistence is handled in App.jsx via onAuthStateChange
            } else {
                // If not admin, sign them out immediately for security
                await supabase.auth.signOut();
                throw new Error('Access Denied: Administrative privileges required');
            }
        } catch (err) {
            setError(err.message);
            setIsAdmin(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.5rem 1rem', borderRadius: '1rem', border: '1px solid rgba(239, 68, 68, 0.2)', backdropFilter: 'blur(5px)' }}>
                <ShieldAlert size={16} color="#ef4444" />
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#ef4444', letterSpacing: '0.1em' }}>RESTRICTED ACCESS AREA</span>
            </div>
            <div className="glass-plus" style={{ padding: '3.5rem', borderRadius: '2.5rem', width: '100%', maxWidth: '450px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }}></div>
                    <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--text-muted)' }}>2FA PROTECTED</span>
                </div>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div className="animate-float" style={{
                        background: 'var(--primary-gradient)',
                        width: '72px',
                        height: '72px',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 2rem',
                        boxShadow: 'var(--shadow-glow)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <Lock color="white" size={36} />
                    </div>
                    <h2 style={{ fontSize: '2.75rem', fontWeight: '950', letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>
                        Admin <span className="text-gradient">Portal</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontWeight: '600', opacity: 0.8 }}>Secure Neural Command Center</p>
                </div>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    <div style={{ position: 'relative' }}>
                        <Mail style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)', opacity: 0.7 }} size={22} />
                        <input
                            type="email"
                            placeholder="Authorized Email"
                            className="glass"
                            style={{ width: '100%', padding: '1.25rem 1.5rem 1.25rem 4rem', borderRadius: '1.5rem', border: '1px solid var(--border)', color: 'var(--text)', outline: 'none', fontSize: '1.1rem', fontWeight: '500' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Lock style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)', opacity: 0.7 }} size={22} />
                        <input
                            type="password"
                            placeholder="Security Key"
                            className="glass"
                            style={{ width: '100%', padding: '1.25rem 1.5rem 1.25rem 4rem', borderRadius: '1.5rem', border: '1px solid var(--border)', color: 'var(--text)', outline: 'none', fontSize: '1.1rem', fontWeight: '500' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && (
                        <div style={{
                            background: 'rgba(239, 68, 68, 0.08)',
                            padding: '1.25rem',
                            borderRadius: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            border: '1px solid rgba(239, 68, 68, 0.2)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <ShieldAlert size={20} style={{ color: '#ef4444' }} />
                                <p style={{ color: '#ef4444', fontSize: '1rem', fontWeight: '800' }}>Authentication Fault</p>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '500', marginLeft: '2.25rem' }}>
                                {error}. <br /> Ensure your user metadata has 'admin' privileges.
                            </p>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary btn-primary-shiny"
                        style={{ width: '100%', justifyContent: 'center', padding: '1.25rem', borderRadius: '1.5rem', fontSize: '1.1rem', fontWeight: '900', gap: '0.75rem' }}
                        disabled={loading}
                    >
                        {loading ? 'Decrypting Credentials...' : (
                            <>
                                <span>Authorize Terminal</span>
                                <span style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: '600' }}>[OTP REQ]</span>
                            </>
                        )}
                    </button>
                </form>

                <button
                    className="btn btn-outline hover-lift"
                    style={{ width: '100%', marginTop: '1.25rem', justifyContent: 'center', borderRadius: '1.25rem', padding: '1.1rem' }}
                    onClick={() => setView('home')}
                >
                    Return to Home
                </button>
            </div>
        </section>
    );
}
