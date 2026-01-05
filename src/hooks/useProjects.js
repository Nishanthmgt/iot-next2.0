import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { projects as localProjects } from '../data/projects';

export function useProjects(onlyPublished = true) {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                let query = supabase
                    .from('projects')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (onlyPublished) {
                    query = query.eq('status', 'Published');
                }

                const { data, error } = await query;

                // Merge strategy: Start with local projects as the foundation
                // Use a Map to avoid duplicates by title or ID
                const projectMap = new Map();
                localProjects.forEach(lp => projectMap.set(lp.title, lp));

                if (data && data.length > 0) {
                    // Overwrite local placeholders with Supabase data if titles match
                    // or add new projects from Supabase
                    data.forEach(rp => {
                        if (rp && rp.title) {
                            projectMap.set(rp.title, rp);
                        }
                    });
                }

                const finalProjects = Array.from(projectMap.values());
                if (finalProjects.length === 0 && localProjects.length > 0) {
                    setProjects(localProjects);
                } else {
                    setProjects(finalProjects);
                }

                if (error) {
                    console.log('Supabase sync partial or failed, using local fallback foundation');
                    if (finalProjects.length === 0) setProjects(localProjects);
                }
            } catch (err) {
                console.error('Fetch error:', err);
                setProjects(localProjects);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [onlyPublished]);

    return { projects, loading, error };
}
