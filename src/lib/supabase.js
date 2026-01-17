import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Secure initialization with fallback to prevent white screen on missing credentials
const createFallbackClient = () => {
    const mockQuery = {
        order: () => mockQuery,
        limit: () => mockQuery,
        select: () => mockQuery,
        eq: () => mockQuery,
        single: () => ({ data: null, error: 'Supabase NOT configuration' }),
        then: (cb) => Promise.resolve({ data: [], error: null }).then(cb)
    };

    return {
        auth: {
            getSession: async () => ({ data: { session: null }, error: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
            signInWithPassword: async () => ({ data: { user: null }, error: new Error('Supabase NOT configured.') }),
            signOut: async () => ({ error: null })
        },
        from: () => mockQuery,
        rpc: () => mockQuery
    };
};

export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createFallbackClient();
