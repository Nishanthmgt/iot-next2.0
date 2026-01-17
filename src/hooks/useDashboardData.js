import { useState, useEffect, useCallback } from 'react';
import { projects } from '../data/projects';
import { sensors } from '../data/sensors';
import { supabase } from '../lib/supabase';
import { BOARDS } from '../data/boards';

export const useDashboardData = () => {
    const [greeting, setGreeting] = useState('');
    const [userName, setUserName] = useState('Engineer');
    const [userRole, setUserRole] = useState('User');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userAvatar, setUserAvatar] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=Felix');
    const [userLevel, setUserLevel] = useState('Beginner');
    const [resumeData, setResumeData] = useState(null);
    const [recentActivity, setRecentActivity] = useState([]);

    // Saved Items State
    const [savedProjects, setSavedProjects] = useState([]);
    const [savedSensors, setSavedSensors] = useState([]);
    const [savedBoards, setSavedBoards] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadSavedItems = useCallback(() => {
        try {
            setSavedProjects(JSON.parse(localStorage.getItem('saved_projects') || '[]'));
            setSavedSensors(JSON.parse(localStorage.getItem('saved_sensors') || '[]'));
            setSavedBoards(JSON.parse(localStorage.getItem('saved_boards') || '[]'));
        } catch (e) {
            console.error("Error parsing saved items", e);
        }
    }, []);

    useEffect(() => {
        // 1. Calculate Greeting
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');

        // 2. Fetch User Data
        const fetchUser = async () => {
            setLoading(true);
            try {
                const { data: { session } } = await supabase.auth.getSession();

                if (session?.user) {
                    setIsAuthenticated(true);
                    const metadata = session.user.user_metadata;
                    const name = metadata?.full_name || metadata?.name || session.user.email?.split('@')[0];
                    if (name) setUserName(name);

                    const avatar = metadata?.avatar_url || localStorage.getItem('user_avatar');
                    if (avatar) setUserAvatar(avatar);

                    if (session.user.email === 'nishanth@iotnext.com') setUserRole('Admin');
                } else {
                    const storedUser = localStorage.getItem('iotnext-user');
                    if (storedUser) {
                        const parsed = JSON.parse(storedUser);
                        if (parsed.name) setUserName(parsed.name);
                        setIsAuthenticated(true);
                    } else {
                        const storedName = localStorage.getItem('user_name');
                        if (storedName) {
                            setUserName(storedName);
                            setIsAuthenticated(true);
                        }
                    }
                    const storedAvatar = localStorage.getItem('user_avatar');
                    if (storedAvatar) setUserAvatar(storedAvatar);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
        loadSavedItems();

        // 3. Activity & Resume
        setResumeData(JSON.parse(localStorage.getItem('last_course') || 'null'));
        setRecentActivity(JSON.parse(localStorage.getItem('iot_activity') || '[]'));
    }, [loadSavedItems]);

    // Update User Level based on saved projects
    useEffect(() => {
        const count = savedProjects.length;
        if (count >= 10) setUserLevel('Pro');
        else if (count >= 3) setUserLevel('Intermediate');
        else setUserLevel('Beginner');
    }, [savedProjects]);

    const updateAvatar = async (newAvatarUrl) => {
        setUserAvatar(newAvatarUrl);
        localStorage.setItem('user_avatar', newAvatarUrl);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                await supabase.auth.updateUser({ data: { avatar_url: newAvatarUrl } });
            }
        } catch (e) { console.error(e); }
    };

    const updateName = async (newName) => {
        if (!newName.trim()) return;
        setUserName(newName);
        localStorage.setItem('user_name', newName);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                await supabase.auth.updateUser({ data: { full_name: newName, name: newName } });
            }
        } catch (e) { console.error(e); }
    };

    const toggleSaveItem = (type, id) => {
        let key = '';
        let currentList = [];
        let setter = null;

        if (type === 'project') { key = 'saved_projects'; currentList = savedProjects; setter = setSavedProjects; }
        else if (type === 'sensor') { key = 'saved_sensors'; currentList = savedSensors; setter = setSavedSensors; }
        else if (type === 'board') { key = 'saved_boards'; currentList = savedBoards; setter = setSavedBoards; }

        if (!key) return;

        const newList = currentList.includes(id)
            ? currentList.filter(i => i !== id)
            : [...currentList, id];

        setter(newList);
        localStorage.setItem(key, JSON.stringify(newList));
    };

    return {
        greeting,
        userName,
        userRole,
        isAuthenticated,
        userAvatar,
        userLevel,
        resumeData,
        recentActivity,
        loading,
        savedProjects,
        savedSensors,
        savedBoards,
        updateAvatar,
        updateName,
        toggleSaveItem,
        stats: {
            projects: projects.length,
            sensors: sensors.length,
            boards: Object.keys(BOARDS).length,
            savedProjects: savedProjects.length,
            savedSensors: savedSensors.length,
            savedBoards: savedBoards.length
        }
    };
};

export const formatTimeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    const intervals = { year: 31536000, month: 2592000, day: 86400, hour: 3600, minute: 60 };
    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
    }
    return 'Just now';
};

export const logActivity = (text) => {
    const activity = JSON.parse(localStorage.getItem('iot_activity') || '[]');
    const updated = [{ text, timestamp: Date.now() }, ...activity].slice(0, 20);
    localStorage.setItem('iot_activity', JSON.stringify(updated));
};
