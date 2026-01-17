import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Capacitor } from '@capacitor/core';

// Dynamically import App plugin only if available
let App;
if (Capacitor.isNativePlatform()) {
    try {
        App = require('@capacitor/app').App;
    } catch (e) {
        console.log('App plugin not available');
    }
}

export default function Login() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Listen for deep link callback on native apps
        if (Capacitor.isNativePlatform() && App) {
            const handleDeepLink = App.addListener('appUrlOpen', async (event) => {
                const url = event.url;
                console.log('Deep link received:', url);

                // TEST: Show alert immediately when ANY deep link is received
                alert('Deep link received: ' + url);

                if (url && url.includes('/auth/callback')) {
                    setLoading(true);
                    try {
                        // Extract tokens from URL hash
                        const hashPart = url.split('#')[1];
                        if (hashPart) {
                            const params = new URLSearchParams(hashPart);
                            const access_token = params.get('access_token');
                            const refresh_token = params.get('refresh_token');

                            if (access_token) {
                                const { error } = await supabase.auth.setSession({
                                    access_token,
                                    refresh_token
                                });

                                if (error) {
                                    alert('Session error: ' + error.message);
                                    setLoading(false);
                                    return;
                                }
                                setLoading(false);
                                // Navigate to home instead of reload
                                window.location.href = '/';
                            } else {
                                alert('No access token found');
                                setLoading(false);
                            }
                        }
                    } catch (error) {
                        console.error('Error handling deep link:', error);
                        setLoading(false);
                    }
                }
            });

            return () => {
                handleDeepLink.remove();
            };
        }

        // Check for OAuth callback in URL hash (for web and fallback)
        const handleAuthCallback = async () => {
            const hash = window.location.hash;
            const path = window.location.pathname;
            const search = window.location.search;

            console.log('🔍 Checking auth callback:', { path, hasHash: !!hash, hasSearch: !!search });

            // Handle both /auth/callback route and hash-based callback (standard for Supabase)
            if (
                (hash && hash.includes('access_token')) ||
                path.includes('/auth/callback') ||
                (search && search.includes('access_token'))
            ) {
                setLoading(true);
                try {
                    // Force refresh session to catch the new tokens
                    const { data, error } = await supabase.auth.getSession();

                    if (error) {
                        console.error('Session error:', error);
                        // If hash is present but getSession fails, try setSession manually
                        if (hash) {
                            const params = new URLSearchParams(hash.replace('#', '?'));
                            const access_token = params.get('access_token');
                            const refresh_token = params.get('refresh_token');
                            if (access_token) {
                                await supabase.auth.setSession({ access_token, refresh_token });
                            }
                        }
                    }

                    const { data: { session } } = await supabase.auth.getSession();

                    if (session) {
                        console.log('✅ Auth successful, redirecting...');
                        setLoading(false);
                        // Clear hash and redirect
                        window.location.hash = '';
                        window.location.href = '/';
                    } else {
                        console.log('⚠️ No session found yet, waiting...');
                        // Don't flip loading off immediately to avoid flash of login screen
                        setTimeout(() => setLoading(false), 2000);
                    }
                } catch (error) {
                    console.error('Auth callback error:', error);
                    setLoading(false);
                }
            }
        };

        handleAuthCallback();
    }, []);

    const handleGoogleLogin = async () => {
        setLoading(true);

        try {
            const isNative = Capacitor.isNativePlatform();
            const redirectTo = isNative
                ? 'https://iotnext.store/auth/callback'
                : window.location.origin;

            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: redirectTo
                }
            });

            if (error) throw error;

            // OAuth redirect happens automatically
        } catch (error) {
            console.error('Login error:', error);
            alert('Error logging in: ' + error.message);
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass"
                style={{
                    padding: '2.5rem',
                    borderRadius: '1.5rem',
                    textAlign: 'center',
                    maxWidth: '400px',
                    width: '100%',
                    border: '1px solid var(--border)'
                }}
            >
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'var(--primary)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem auto',
                        fontSize: '2rem'
                    }}>
                        🚀
                    </div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem' }}>Welcome Back</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Sign in to access your projects and progress</p>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '1rem',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        fontWeight: '600',
                        cursor: loading ? 'wait' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        fontSize: '1rem',
                        transition: 'all 0.2s ease'
                    }}
                >
                    {loading ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : (
                        <>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </>
                    )}
                </button>

                <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </motion.div>
        </div>
    );
}
