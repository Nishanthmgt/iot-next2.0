import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useDashboardData } from '../../hooks/useDashboardData';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart, Grid, Cpu, Edit2, Share2, Mail, Check, X, Shield, PlusCircle,
    Zap, ChevronRight, BookOpen, Clock, Settings, LogOut, Download, Activity, Layout
} from 'lucide-react';
import AvatarSelector from '../AvatarSelector';
import { supabase } from '../../lib/supabase';
import { projects } from '../../data/projects';
import { sensors } from '../../data/sensors';
import { BOARDS } from '../../data/boards';
// Lazy load SensorDetail to fix build warnings
const SensorDetail = lazy(() => import('../SensorDetail'));

// Lazy load ProjectDetail
const ProjectDetail = lazy(() => import('../ProjectDetail'));

const FuturisticCard = ({ item, type, onClick }) => {
    const getIcon = () => {
        if (type === 'project') return <BookOpen size={20} color="#f43f5e" />;
        if (type === 'sensor') return <Cpu size={20} color="#6366f1" />;
        return <Zap size={20} color="#10b981" />;
    };

    const getTitle = () => {
        return item.title || item.name;
    };

    const getSubtitle = () => {
        if (type === 'board') return item.family;
        return item.category || item.level;
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem',
                background: 'rgba(var(--surface-rgb), 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255,255,255,0.05)',
                marginBottom: '0.75rem',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Glow Effect */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '4px', height: '100%',
                background: type === 'project' ? '#f43f5e' : type === 'sensor' ? '#6366f1' : '#10b981',
                opacity: 0.5
            }} />

            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'var(--surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
                border: '1px solid var(--border)'
            }}>
                {getIcon()}
            </div>

            <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginBottom: '0.2rem'
                }}>
                    {getTitle()}
                </div>
                <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span style={{
                        display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%',
                        background: type === 'project' ? '#f43f5e' : type === 'sensor' ? '#6366f1' : '#10b981'
                    }} />
                    {getSubtitle()}
                </div>
            </div>

            <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'rgba(var(--text-rgb), 0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <ChevronRight size={16} color="var(--text-muted)" />
            </div>
        </motion.div>
    );
};

const StatCard = ({ label, count, icon: Icon, color, onClick, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        style={{
            background: `linear-gradient(145deg, ${color}15, var(--surface))`,
            borderRadius: '1.5rem',
            padding: '1.25rem',
            border: `1px solid ${color}20`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        <div style={{
            position: 'absolute', top: '-20%', right: '-20%',
            width: '80px', height: '80px', borderRadius: '50%',
            background: color, filter: 'blur(40px)', opacity: 0.2
        }} />

        <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: `${color}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color,
            marginBottom: '0.25rem'
        }}>
            <Icon size={20} />
        </div>
        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--text)', lineHeight: 1 }}>
            {count}
        </div>
        <div style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {label}
        </div>
    </motion.div>
);

const AppDashboard = ({ setView, isMobile }) => {
    // Data Loading
    const dashboardData = useDashboardData();
    const userName = dashboardData?.userName || 'Engineer';
    const userRole = dashboardData?.userRole || 'User';
    const userAvatar = dashboardData?.userAvatar || null;
    const userLevel = dashboardData?.userLevel || 'Beginner';
    const updateName = dashboardData?.updateName || (() => { });
    const updateAvatar = dashboardData?.updateAvatar || (() => { });

    // Saved Items
    const savedProjects = dashboardData?.savedProjects || [];
    const savedSensors = dashboardData?.savedSensors || [];
    const savedBoards = dashboardData?.savedBoards || [];

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingAvatar, setIsEditingAvatar] = useState(false);
    const [newName, setNewName] = useState(userName);
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'project', 'sensor', 'board'
    const [dbSensors, setDbSensors] = useState([]);
    const [greeting, setGreeting] = useState('Welcome back');

    // Modals
    const [selectedSensor, setSelectedSensor] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedBoard, setSelectedBoard] = useState(null);

    const handleProjectClick = (project) => {
        if (setView) {
            window.history.pushState({ view: 'project-detail', id: project.id }, '', `/project/${project.id}`);
            window.dispatchEvent(new PopStateEvent('popstate'));
        }
    };

    useEffect(() => {
        setNewName(userName);
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');

        const fetchSensors = async () => {
            const { data } = await supabase.from('sensors').select('*');
            if (data) setDbSensors(data);
        };
        fetchSensors();
    }, [userName]);

    // Data Processing matches existing logic
    const fullSavedProjects = (savedProjects || []).map(id => projects.find(p => p && String(p.id) === String(id))).filter(Boolean);
    const allAvailableSensorsMap = {};
    (sensors || []).forEach(s => { if (s) allAvailableSensorsMap[String(s.id)] = s; });
    (dbSensors || []).forEach(dbS => { if (dbS) allAvailableSensorsMap[String(dbS.id)] = dbS; });
    const fullSavedSensors = (savedSensors || []).map(id => allAvailableSensorsMap[String(id)]).filter(Boolean);
    const fullSavedBoards = (savedBoards || []).map(id => BOARDS[id]).filter(Boolean);

    const allSavedItems = [
        ...fullSavedProjects.map(item => ({ ...item, type: 'project' })),
        ...fullSavedSensors.map(item => ({ ...item, type: 'sensor' })),
        ...fullSavedBoards.map(item => ({ ...item, type: 'board' }))
    ].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    const displayedItems = activeTab === 'all'
        ? allSavedItems
        : allSavedItems.filter(item => item.type === activeTab);

    // Format Counts
    const formatCount = (n) => n < 10 ? `0${n}` : n;

    return (
        <div style={{ padding: isMobile ? '0 0 8rem 0' : '2rem', color: 'var(--text)', minHeight: '100vh', background: 'var(--background)' }}>

            {/* HER0 Header with Glass Blur */}
            <div style={{
                padding: '2rem 1.5rem 1.5rem',
                background: 'linear-gradient(180deg, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--background-rgb), 0) 100%)',
                borderRadius: '0 0 2.5rem 2.5rem',
                marginBottom: '2rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Elements */}
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.15 }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', position: 'relative' }}>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '0.25rem' }}
                        >
                            {greeting},
                        </motion.div>
                        {isEditingName ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    value={newName}
                                    onChange={e => setNewName(e.target.value)}
                                    autoFocus
                                    style={{
                                        background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '8px',
                                        padding: '0.25rem 0.5rem', color: 'var(--text)', fontSize: '1.5rem', fontWeight: 900,
                                        width: '180px', outline: 'none'
                                    }}
                                />
                                <button onClick={() => { updateName(newName); setIsEditingName(false); }} style={{ background: '#10b981', border: 'none', borderRadius: '6px', padding: '4px', cursor: 'pointer' }}><Check size={16} color="white" /></button>
                            </div>
                        ) : (
                            <motion.h1
                                layoutId="userName"
                                onClick={() => setIsEditingName(true)}
                                style={{ fontSize: '2rem', fontWeight: '900', margin: 0, lineHeight: 1.1, cursor: 'pointer' }}
                            >
                                {userName}
                            </motion.h1>
                        )}
                    </div>

                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        style={{ position: 'relative' }}
                        onClick={() => setIsEditingAvatar(!isEditingAvatar)}
                    >
                        <div style={{
                            width: '64px', height: '64px', borderRadius: '50%',
                            padding: '3px',
                            background: 'linear-gradient(135deg, var(--primary), #a855f7)',
                            boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.4)'
                        }}>
                            <div style={{
                                width: '100%', height: '100%', borderRadius: '50%',
                                overflow: 'hidden', background: 'var(--background)',
                                border: '3px solid var(--background)'
                            }}>
                                {userAvatar ? (
                                    <img src={userAvatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.5rem', color: 'var(--primary)' }}>
                                        {userName.charAt(0)}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div style={{
                            position: 'absolute', bottom: 0, right: 0,
                            background: 'var(--surface)', border: '2px solid var(--background)',
                            borderRadius: '50%', padding: '4px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                        }}>
                            <Edit2 size={12} color="var(--text)" />
                        </div>
                    </motion.div>
                </div>

                {/* Avatar Selector Panel */}
                <AnimatePresence>
                    {isEditingAvatar && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden', marginBottom: '1.5rem' }}
                        >
                            <AvatarSelector selectedAvatar={userAvatar} onSelect={(url) => { updateAvatar(url); setIsEditingAvatar(false); }} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Futuristic Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                    <StatCard
                        label="Projects"
                        count={formatCount(savedProjects.length)}
                        icon={BookOpen}
                        color="#f43f5e"
                        onClick={() => setActiveTab(activeTab === 'project' ? 'all' : 'project')}
                        delay={0.1}
                    />
                    <StatCard
                        label="Sensors"
                        count={formatCount(savedSensors.length)}
                        icon={Cpu}
                        color="#6366f1"
                        onClick={() => setActiveTab(activeTab === 'sensor' ? 'all' : 'sensor')}
                        delay={0.2}
                    />
                    <StatCard
                        label="Boards"
                        count={formatCount(savedBoards.length)}
                        icon={Zap}
                        color="#10b981"
                        onClick={() => setActiveTab(activeTab === 'board' ? 'all' : 'board')}
                        delay={0.3}
                    />
                </div>
            </div>

            {/* Main Content Area */}
            <div style={{ padding: '0 1.5rem' }}>
                {/* Tabs Filter */}
                <div style={{
                    display: 'flex',
                    padding: '0.4rem',
                    background: 'var(--surface)',
                    borderRadius: '1rem',
                    marginBottom: '1.5rem',
                    gap: '0.5rem',
                    overflowX: 'auto',
                    scrollbarWidth: 'none'
                }}>
                    {['all', 'project', 'sensor', 'board'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                flex: 1,
                                padding: '0.6rem 0',
                                borderRadius: '0.75rem',
                                border: 'none',
                                background: activeTab === tab ? 'var(--background)' : 'transparent',
                                color: activeTab === tab ? 'var(--text)' : 'var(--text-muted)',
                                fontWeight: activeTab === tab ? '800' : '600',
                                fontSize: '0.8rem',
                                textTransform: 'capitalize',
                                boxShadow: activeTab === tab ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                                transition: 'all 0.2s',
                                minWidth: '70px'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* List Items */}
                <div style={{ minHeight: '300px' }}>
                    <AnimatePresence mode="popLayout">
                        {displayedItems.length > 0 ? (
                            displayedItems.map((item, idx) => <FuturisticCard
                                key={item.id}
                                item={item}
                                type={item.type}
                                onClick={() => {
                                    if (item.type === 'sensor') setSelectedSensor(item);
                                    else if (item.type === 'project') handleProjectClick(item);
                                    else if (item.type === 'board') setSelectedBoard(item); // Needs board modal/logic
                                }}
                            />
                            )) : (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}
                            >
                                <Heart size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                <p style={{ fontWeight: '600' }}>No {activeTab === 'all' ? 'saved items' : `${activeTab}s`} yet</p>
                                <button
                                    onClick={() => setView(activeTab === 'all' ? 'projects' : activeTab === 'board' ? 'pinout' : `${activeTab}s`)}
                                    style={{ marginTop: '1rem', padding: '0.6rem 1.2rem', borderRadius: '2rem', background: 'var(--primary)', color: 'white', border: 'none', fontWeight: '700' }}
                                >
                                    Explore {activeTab === 'all' ? 'Now' : activeTab}
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Sign Out Button */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={async () => {
                        await supabase.auth.signOut();
                        localStorage.removeItem('iotnext-user');
                        window.location.href = '/';
                    }}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        marginTop: '2rem',
                        borderRadius: '1.25rem',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        color: '#ef4444',
                        fontWeight: '800',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <LogOut size={18} /> Sign Out
                </motion.button>
            </div>

            {/* Detail Modals (Reused Logic) */}
            {selectedSensor && (
                <Suspense fallback={null}>
                    <SensorDetail sensor={selectedSensor} onClose={() => setSelectedSensor(null)} />
                </Suspense>
            )}

            {selectedProject && (
                <Suspense fallback={null}>
                    <ProjectDetail
                        project={selectedProject}
                        onBack={() => setSelectedProject(null)}
                        onAddToBuild={() => { }}
                        onRemoveFromBuild={() => { }}
                        buildList={[]}
                    />
                </Suspense>
            )}

            {selectedBoard && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', zIndex: 9999, padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setSelectedBoard(null)}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{ background: 'var(--background)', borderRadius: '2rem', padding: '2rem', width: '100%', maxWidth: '400px', position: 'relative', border: '1px solid var(--border)' }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button onClick={() => setSelectedBoard(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--surface)', border: 'none', borderRadius: '50%', padding: '0.5rem' }}><X size={18} /></button>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>{selectedBoard.name}</h2>
                        <div style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontSize: '0.75rem', fontWeight: '700', marginBottom: '1rem' }}>{selectedBoard.family}</div>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{selectedBoard.description}</p>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default AppDashboard;
