import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Secure initialization with fallback to prevent white screen on missing credentials
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        auth: {
            getSession: async () => ({ data: { session: null }, error: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
            signInWithPassword: async () => ({ data: { user: null }, error: new Error('Supabase NOT configured. Please add VITE_SUPABASE_URL to Vercel.') }),
            signOut: async () => ({ error: null })
        },
        from: () => ({
            select: () => ({ order: () => ({ data: [], error: null }) }),
            insert: () => ({ select: () => ({ single: () => ({ data: null, error: 'Supabase not configured' }) }) }),
            update: () => ({ eq: () => ({ data: [], error: 'Supabase not configured' }) }),
            delete: () => ({ eq: () => ({ data: [], error: 'Supabase not configured' }) })
        })
    };
