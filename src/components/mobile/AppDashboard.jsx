import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useDashboardData } from '../../hooks/useDashboardData';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Grid, Cpu, Edit2, Share2, Mail, Check, X, Shield, PlusCircle, Zap, ChevronRight, BookOpen } from 'lucide-react';
import AvatarSelector from '../AvatarSelector';
import { supabase } from '../../lib/supabase';
import { projects } from '../../data/projects';
import { sensors } from '../../data/sensors';
import { BOARDS } from '../../data/boards';
import SensorDetail from '../SensorDetail';

// Lazy load ProjectDetail to avoid bundle duplication
const ProjectDetail = lazy(() => import('../ProjectDetail'));

const SavedItemCard = ({ icon: Icon, label, count, color, onClick }) => (
    <motion.div
        whileTap={{ scale: 0.96 }}
        onClick={onClick}
        style={{
            background: 'var(--surface)',
            borderRadius: '1.25rem',
            padding: '1.25rem',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            boxShadow: 'var(--shadow-sm)',
            cursor: 'pointer',
            height: '100%'
        }}
    >
        <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: `${color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color
        }}>
            {Icon && <Icon size={22} fill={color} fillOpacity={0.2} />}
        </div>
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text)' }}>
                {count}
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                {label}
            </div>
        </div>
    </motion.div>
);

const SavedItemRow = ({ item, type, onClick }) => {
    const getIcon = () => {
        if (type === 'project') return <BookOpen size={18} color="#f43f5e" />;
        if (type === 'sensor') return <Cpu size={18} color="#6366f1" />;
        return <Zap size={18} color="#10b981" />;
    };

    const getTitle = () => {
        if (type === 'board') return item.name;
        return item.title || item.name;
    };

    const getSubtitle = () => {
        if (type === 'board') return item.family;
        return item.category || item.level;
    };

    return (
        <motion.div
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'var(--surface)',
                borderRadius: '1.25rem',
                border: '1px solid var(--border)',
                marginBottom: '0.75rem',
                cursor: 'pointer'
            }}
        >
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--background)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {getIcon()}
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {getTitle()}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                    {getSubtitle()}
                </div>
            </div>
            <ChevronRight size={18} color="var(--text-muted)" opacity={0.5} />
        </motion.div>
    );
};

const AppDashboard = ({ setView, isMobile }) => {
    // SAFE Data Extraction
    const dashboardData = useDashboardData();
    const userName = dashboardData?.userName || 'Engineer';
    const userRole = dashboardData?.userRole || 'User';
    const userAvatar = dashboardData?.userAvatar || null;
    const userLevel = dashboardData?.userLevel || 'Beginner';
    const updateName = dashboardData?.updateName || (() => { });
    const updateAvatar = dashboardData?.updateAvatar || (() => { });

    // Saved Items with Fallbacks
    const savedProjects = dashboardData?.savedProjects || [];
    const savedSensors = dashboardData?.savedSensors || [];
    const savedBoards = dashboardData?.savedBoards || [];

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingAvatar, setIsEditingAvatar] = useState(false);
    const [newName, setNewName] = useState(userName);
    const [filterType, setFilterType] = useState('all'); // NEW: track filtered category
    const [dbSensors, setDbSensors] = useState([]); // Fetch real sensor data

    // Detail modal states
    const [selectedSensor, setSelectedSensor] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedBoard, setSelectedBoard] = useState(null);

    // Sync local state when hook data changes
    useEffect(() => {
        setNewName(userName);

        // Fetch sensors to ensure IDs match
        const fetchSensors = async () => {
            const { data } = await supabase.from('sensors').select('*');
            if (data) setDbSensors(data);
        };
        fetchSensors();
    }, [userName]);

    // Format counts (e.g. 05)
    const formatCount = (count) => count < 10 ? `0${count}` : count;

    const savedStats = [
        { label: 'Saved Projects', count: formatCount(savedProjects.length), icon: Heart, color: '#f43f5e', link: 'projects' },
        { label: 'Saved Sensors', count: formatCount(savedSensors.length), icon: Cpu, color: '#6366f1', link: 'sensors' },
        { label: 'Saved Boards', count: formatCount(savedBoards.length), icon: Zap, color: '#10b981', link: 'pinout' }
    ];

    const handleSaveName = () => {
        if (newName.trim()) {
            updateName(newName);
            setIsEditingName(false);
        }
    };

    // Map IDs to actual data - Using loose equality or string conversion to avoid type mismatches
    const fullSavedProjects = savedProjects.map(id => projects.find(p => String(p.id) === String(id))).filter(Boolean);

    // Merge static sensors and DB sensors for robustness
    // Ensure unique sensors by ID
    const allAvailableSensorsMap = {};
    sensors.forEach(s => { allAvailableSensorsMap[String(s.id)] = s; });
    dbSensors.forEach(dbS => { allAvailableSensorsMap[String(dbS.id)] = dbS; });

    const allAvailableSensors = Object.values(allAvailableSensorsMap);

    const fullSavedSensors = savedSensors.map(id => {
        const sid = String(id);
        return allAvailableSensors.find(s => String(s.id) === sid);
    }).filter(Boolean);

    const fullSavedBoards = savedBoards.map(id => BOARDS[id]).filter(Boolean);

    const allSavedItems = [
        ...fullSavedProjects.map(item => ({ ...item, type: 'project' })),
        ...fullSavedSensors.map(item => ({ ...item, type: 'sensor' })),
        ...fullSavedBoards.map(item => ({ ...item, type: 'board' }))
    ].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    // Logic for filtering
    const displayedItems = filterType === 'all'
        ? allSavedItems
        : allSavedItems.filter(item => item.type === filterType);

    return (
        <div style={{ padding: isMobile ? '1rem 1.5rem 8rem' : '2rem 1.5rem 4rem', color: 'var(--text)' }}>

            {/* Header Section */}
            <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}
                >
                    {/* Avatar Image */}
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        margin: '0 auto',
                        border: '4px solid var(--surface)',
                        boxShadow: '0 0 0 2px var(--primary), 0 10px 30px rgba(0,0,0,0.2)',
                        background: 'var(--surface)' // Fallback
                    }}>
                        {userAvatar ? (
                            <img src={userAvatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ width: '100%', height: '100%', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'white' }}>
                                {userName.charAt(0)}
                            </div>
                        )}
                    </div>

                    {/* Edit Avatar Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsEditingAvatar(!isEditingAvatar)}
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            background: 'var(--primary)',
                            color: 'white',
                            border: '3px solid var(--background)',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
                        }}
                    >
                        <Edit2 size={14} />
                    </motion.button>
                </motion.div>

                {/* Avatar Selection Panel */}
                <AnimatePresence>
                    {isEditingAvatar && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden', marginBottom: '1.5rem' }}
                        >
                            <div style={{
                                background: 'var(--surface)',
                                borderRadius: '1.5rem',
                                padding: '1rem',
                                border: '1px solid var(--border)'
                            }}>
                                <AvatarSelector
                                    selectedAvatar={userAvatar}
                                    onSelect={(url) => {
                                        updateAvatar(url);
                                        setIsEditingAvatar(false);
                                    }}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* User Name & Role */}
                {isEditingName ? (
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            style={{
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.75rem',
                                color: 'var(--text)',
                                fontSize: '1.5rem',
                                fontWeight: '800',
                                textAlign: 'center',
                                width: '200px',
                                outline: 'none'
                            }}
                            autoFocus
                        />
                        <button
                            onClick={handleSaveName}
                            style={{
                                background: '#10b981', color: 'white', border: 'none', borderRadius: '0.75rem',
                                width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}
                        >
                            <Check size={20} />
                        </button>
                        <button
                            onClick={() => setIsEditingName(false)}
                            style={{
                                background: 'var(--border)', color: 'var(--text)', border: 'none', borderRadius: '0.75rem',
                                width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}
                        >
                            <X size={20} />
                        </button>
                    </div>
                ) : (
                    <div onClick={() => setIsEditingName(true)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--text)', margin: 0 }}>
                            {userName}
                        </h1>
                        <Edit2 size={16} color="var(--text-muted)" style={{ opacity: 0.5 }} />
                    </div>
                )}

                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    background: 'var(--surface)', padding: '0.4rem 0.8rem', borderRadius: '2rem',
                    marginTop: '0.75rem', border: '1px solid var(--border)'
                }}>
                    <Shield size={14} color="#a855f7" />
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#a855f7' }}>{userRole} • {userLevel}</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                marginBottom: '2rem'
            }}>
                {savedStats.map((stat, index) => (
                    <SavedItemCard
                        key={index}
                        {...stat}
                        onClick={() => {
                            const type = stat.link === 'pinout' ? 'board' : stat.link.slice(0, -1);
                            setFilterType(prev => prev === type ? 'all' : type);
                        }}
                    />
                ))}
            </div>

            {/* Saved Items List */}
            <div style={{ marginBottom: '2.5rem' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.25rem',
                    padding: '0 0.5rem'
                }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0 }}>
                        {filterType === 'all' ? 'Saved Modules' : `${filterType.charAt(0).toUpperCase() + filterType.slice(1)}s`}
                    </h2>
                    {filterType !== 'all' ? (
                        <button
                            onClick={() => setFilterType('all')}
                            style={{
                                fontSize: '0.8rem',
                                fontWeight: '700',
                                color: 'var(--primary)',
                                background: 'rgba(99, 102, 241, 0.1)',
                                border: 'none',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '0.75rem',
                                cursor: 'pointer'
                            }}
                        >
                            Clear Filter
                        </button>
                    ) : (
                        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)' }}>
                            {allSavedItems.length} Total
                        </span>
                    )}
                </div>

                <div style={{ display: 'grid', gap: '0.25rem' }}>
                    {displayedItems.length > 0 ? (
                        displayedItems.slice(0, filterType === 'all' ? (allSavedItems.length > 5 ? allSavedItems.length : 5) : 50).map((item, idx) => (
                            <SavedItemRow
                                key={`${item.type}-${item.id}`}
                                item={item}
                                type={item.type}
                                onClick={() => {
                                    // Open detail modal in dashboard, don't redirect
                                    if (item.type === 'project') {
                                        setSelectedProject(item);
                                    } else if (item.type === 'sensor') {
                                        setSelectedSensor(item);
                                    } else if (item.type === 'board') {
                                        setSelectedBoard(item);
                                    }
                                }}
                            />
                        ))
                    ) : (
                        <div style={{
                            textAlign: 'center',
                            padding: '3rem 1rem',
                            background: 'var(--surface)',
                            borderRadius: '1.5rem',
                            border: '1px dashed var(--border)',
                            color: 'var(--text-muted)'
                        }}>
                            <Heart size={32} style={{ marginBottom: '1rem', opacity: 0.3 }} />
                            <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>No saved items yet</div>
                            <div style={{ fontSize: '0.8rem' }}>Items you bookmark will appear here</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'grid', gap: '1rem' }}>
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={async () => {
                        await supabase.auth.signOut();
                        localStorage.removeItem('iotnext-user');
                        localStorage.removeItem('user_avatar');
                        window.location.href = '/';
                    }}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderRadius: '1rem',
                        color: '#ef4444',
                        fontWeight: '700',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                    }}
                >
                    Sign Out
                </motion.button>
            </div>


            {/* Detail Modals - Show in dashboard without redirecting */}
            {selectedSensor && (
                <SensorDetail
                    sensor={selectedSensor}
                    onClose={() => setSelectedSensor(null)}
                />
            )}

            {selectedProject && (
                <Suspense fallback={<div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}><div style={{ color: 'white', fontSize: '1.2rem' }}>Loading...</div></div>}>
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
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.8)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}
                    onClick={() => setSelectedBoard(null)}
                >
                    <div
                        style={{
                            background: 'var(--background)',
                            borderRadius: '1.5rem',
                            padding: '2rem',
                            maxWidth: '500px',
                            width: '100%',
                            maxHeight: '80vh',
                            overflow: 'auto'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', margin: 0 }}>{selectedBoard.name}</h2>
                            <button
                                onClick={() => setSelectedBoard(null)}
                                style={{
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{selectedBoard.description}</p>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            <strong>Family:</strong> {selectedBoard.family}
                        </div>
                        {selectedBoard.specs && (
                            <div style={{ marginTop: '1rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.75rem' }}>Specifications</h3>
                                {Object.entries(selectedBoard.specs).map(([key, value]) => (
                                    <div key={key} style={{ marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                                        <strong>{key.replace(/_/g, ' ')}:</strong> {value}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default AppDashboard;
