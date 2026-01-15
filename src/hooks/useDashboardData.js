import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { sensors } from '../data/sensors';
import { supabase } from '../lib/supabase';

import { BOARDS } from '../data/boards';

export const useDashboardData = () => {
    const [greeting, setGreeting] = useState('');
    const [userName, setUserName] = useState('Engineer');
    const [userRole, setUserRole] = useState('User'); // Added userRole
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Missing states restored
    const [resumeData, setResumeData] = useState(null);
    const [stats, setStats] = useState({ projects: 0, sensors: 0, boards: 0 });
    const [recentActivity, setRecentActivity] = useState([]);
    const [userAvatar, setUserAvatar] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'); // Default
    const [userLevel, setUserLevel] = useState('Beginner'); // Default

    useEffect(() => {
        // 1. Calculate Greeting
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');

        // 2. Fetch User Name & Role from Supabase
        const fetchUser = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                if (session?.user) {
                    const fullName = session.user.user_metadata?.full_name || session.user.user_metadata?.name;
                    if (fullName) setUserName(fullName);
                    setIsAuthenticated(true);

                    // Fetch Avatar from Metadata or Local Storage
                    const storedAvatar = localStorage.getItem('user_avatar');
                    if (storedAvatar) setUserAvatar(storedAvatar);
                    else if (session.user.user_metadata?.avatar_url) setUserAvatar(session.user.user_metadata.avatar_url);


                    // Simple role check based on email (placeholder logic) or metadata
                    const email = session.user.email;
                    if (email === 'nishanth@iotnext.com') setUserRole('Admin'); // Example logic
                } else {
                    // Fallback to local storage if no auth session (legacy support)
                    const storedUser = localStorage.getItem('iotnext-user');
                    if (storedUser) {
                        const parsed = JSON.parse(storedUser);
                        if (parsed.name) setUserName(parsed.name);
                        setIsAuthenticated(true); // Allow local storage login
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
                // Fallback
                const storedName = localStorage.getItem('user_name');
                if (storedName) setUserName(storedName);
                const storedAvatar = localStorage.getItem('user_avatar');
                if (storedAvatar) setUserAvatar(storedAvatar);
            }
        };
        fetchUser();

        // 3. Fetch Resume Data
        const lastCourse = JSON.parse(localStorage.getItem('last_course') || 'null');
        setResumeData(lastCourse);

        // 4. Calculate Stats & Level
        const projectCount = projects.length;
        const sensorsCount = sensors.length;
        setStats({
            projects: projectCount,
            sensors: sensorsCount,
            boards: Object.keys(BOARDS).length
        });

        // Level Logic
        // Simple example: 0-5 projects = Beginner, 5-15 = Intermediate, 15+ = Pro
        // Just using stats provided (which seem to be total available content, not user progress, but acts as a placeholder)
        // Ideally checking 'completed_projects' from user profile.
        // For now, let's just base it on activity or fixed logic.
        // If user has 'resumeData', they are at least Active.
        if (projectCount > 5) setUserLevel('Intermediate');

        // 5. Fetch Activity
        const activity = JSON.parse(localStorage.getItem('iot_activity') || '[]');
        setRecentActivity(activity);

    }, []);

    const updateAvatar = (newAvatarUrl) => {
        setUserAvatar(newAvatarUrl);
        localStorage.setItem('user_avatar', newAvatarUrl);
        // Ideally also push to Supabase user_metadata if logged in
    };

    const updateName = (newName) => {
        setUserName(newName);
        localStorage.setItem('user_name', newName); // Local persistence
        const storedUser = localStorage.getItem('iotnext-user');
        if (storedUser) {
            const parsed = JSON.parse(storedUser);
            parsed.name = newName;
            localStorage.setItem('iotnext-user', JSON.stringify(parsed));
        }
    };

    // Saved Items State
    const [savedProjects, setSavedProjects] = useState([]);
    const [savedSensors, setSavedSensors] = useState([]);
    const [savedBoards, setSavedBoards] = useState([]);

    useEffect(() => {
        // ... (existing simplified fetchUser logic) ...
        const loadSavedItems = () => {
            try {
                setSavedProjects(JSON.parse(localStorage.getItem('saved_projects') || '[]') || []);
                setSavedSensors(JSON.parse(localStorage.getItem('saved_sensors') || '[]') || []);
                setSavedBoards(JSON.parse(localStorage.getItem('saved_boards') || '[]') || []);
            } catch (e) {
                console.error("Error parsing saved items", e);
                setSavedProjects([]);
                setSavedSensors([]);
                setSavedBoards([]);
            }
        };
        loadSavedItems();
        // ... (rest of simple fetchUser) ...
    }, []);

    // ... (keep existing useEffect logic for Greeting, User Fetch, Resume, Activity) ...

    // Update Stats to use REAL saved counts + Total available
    const projectCount = projects.length;
    // ...

    const toggleSaveItem = (type, id) => {
        let currentList = [];
        let key = '';
        let setter = null;

        if (type === 'project') {
            currentList = savedProjects;
            key = 'saved_projects';
            setter = setSavedProjects;
        } else if (type === 'sensor') {
            currentList = savedSensors;
            key = 'saved_sensors';
            setter = setSavedSensors;
        } else if (type === 'board') {
            currentList = savedBoards;
            key = 'saved_boards';
            setter = setSavedBoards;
        }

        const index = currentList.indexOf(id);
        let newList;
        if (index > -1) {
            newList = currentList.filter(item => item !== id);
        } else {
            newList = [...currentList, id];
        }

        setter(newList);
        localStorage.setItem(key, JSON.stringify(newList));
    };

    return {
        greeting,
        userName,
        userRole,
        resumeData,
        stats: {
            ...stats,
            savedProjects: savedProjects.length,
            savedSensors: savedSensors.length,
            savedBoards: savedBoards.length
        },
        recentActivity,
        isAuthenticated,
        userAvatar,
        userLevel,
        updateAvatar,
        updateName,
        savedProjects,
        savedSensors,
        savedBoards,
        toggleSaveItem
    };
};

// Helper: Format relative time (e.g., "2 hours ago")
export const formatTimeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    const intervals = {
        year: 31536000,
        month: 2592000,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
        }
    }
    return 'Just now';
};

// Helper to log activity
export const logActivity = (text) => {
    const activity = JSON.parse(localStorage.getItem('iot_activity') || '[]');
    const newEntry = {
        text,
        timestamp: Date.now()
    };
    const updated = [newEntry, ...activity].slice(0, 20); // Keep last 20
    localStorage.setItem('iot_activity', JSON.stringify(updated));
};

// Helper to set current course
export const setResumeCourse = (title, subtitle, progress) => {
    const data = { title, subtitle, progress, timestamp: Date.now() };
    localStorage.setItem('last_course', JSON.stringify(data));
};
