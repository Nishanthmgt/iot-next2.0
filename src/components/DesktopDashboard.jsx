import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useDashboardData } from '../hooks/useDashboardData';
import { Heart, TrendingUp, Award, Target, ChevronRight, Zap, BookOpen, Cpu, X, Activity, Play, Clock, Settings, Bell, Shield, User, Box } from 'lucide-react';
import { projects } from '../data/projects';
import { sensors } from '../data/sensors';
import { BOARDS } from '../data/boards';
import { supabase } from '../lib/supabase';
// Lazy load SensorDetail to avoid bundle duplication
const SensorDetail = lazy(() => import('./SensorDetail'));

// Lazy load ProjectDetail to avoid bundle duplication
const ProjectDetail = lazy(() => import('./ProjectDetail'));

const DashboardCard = ({ icon: Icon, title, count, subtitle, action, color }) => (
    <motion.div
        whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        style={{
            background: 'var(--surface)',
            borderRadius: '1.5rem',
            padding: '1.5rem',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '1rem',
                background: `${color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: color
            }}>
                <Icon size={24} />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text)' }}>
                {count}
            </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.2rem' }}>{title}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{subtitle}</p>
        </div>

        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={action}
            style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.75rem',
                background: 'var(--bg)',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s'
            }}
        >
            View Details <ChevronRight size={16} />
        </motion.button>
    </motion.div>
);

const DesktopDashboard = ({ setView }) => {
    const {
        greeting,
        userName,
        userAvatar,
        stats,
        resumeData,
        savedProjects,
        savedSensors,
        savedBoards
    } = useDashboardData();

    const [dbSensors, setDbSensors] = useState([]);
    const [showAllSaved, setShowAllSaved] = useState(false);
    const [showAppBanner, setShowAppBanner] = useState(true);

    // Detail modal states
    const [selectedSensor, setSelectedSensor] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedBoard, setSelectedBoard] = useState(null);

    useEffect(() => {
        // Check if app banner was dismissed
        const dismissed = localStorage.getItem('appBannerDismissed');
        if (dismissed) {
            setShowAppBanner(false);
        }

        const fetchSensors = async () => {
            const { data } = await supabase.from('sensors').select('*');
            if (data) setDbSensors(data);
        };
        fetchSensors();
    }, []);

    const dismissAppBanner = () => {
        setShowAppBanner(false);
        localStorage.setItem('appBannerDismissed', 'true');
    };

    // Map IDs to actual data - Using string conversion to avoid type mismatches
    const fullSavedProjects = (savedProjects || []).map(id => projects.find(p => String(p.id) === String(id))).filter(Boolean);

    // Merge static sensors and DB sensors for robustness
    const allAvailableSensors = [...sensors];
    dbSensors.forEach(dbS => {
        if (!allAvailableSensors.find(s => String(s.id) === String(dbS.id))) {
            allAvailableSensors.push(dbS);
        }
    });

    const fullSavedSensors = (savedSensors || []).map(id => allAvailableSensors.find(s => String(s.id) === String(id))).filter(Boolean);
    const fullSavedBoards = (savedBoards || []).map(id => BOARDS[id]).filter(Boolean);

    const allSavedItems = [
        ...fullSavedProjects.map(item => ({ ...item, type: 'project' })),
        ...fullSavedSensors.map(item => ({ ...item, type: 'sensor' })),
        ...fullSavedBoards.map(item => ({ ...item, type: 'board' }))
    ];

    return (
        <div className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem', maxWidth: '1200px' }}>

            {/* Header Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '4px solid var(--surface)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        overflow: 'hidden'
                    }}>
                        <img src={userAvatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{greeting},</p>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', lineHeight: 1 }}>
                            {userName} <span style={{ animation: 'wave 2s infinite' }}>👋</span>
                        </h1>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    {/* Quick Stats or Actions could go here */}
                </div>
            </div>

            {/* App Install Banner */}
            {showAppBanner && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        borderRadius: '1.25rem',
                        padding: '1.25rem 1.5rem',
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1.5rem',
                        color: 'white',
                        boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem'
                        }}>
                            📱
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.25rem' }}>
                                Get IoTNext Mobile App
                            </div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.95 }}>
                                Install our Android app for better offline experience and native performance
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button
                            onClick={() => alert('Mobile-ல் பயன்படுத்த:\n1. உங்கள் Android/iOS போனில் Chrome/Safari-ல் iotnext.store-ஐத் திறக்கவும்.\n2. த்ரீ டாட்ஸ் (⋮) கிளிக் செய்து "Install App" அல்லது "Add to Home screen" கொடுக்கவும்.\n\nஇது உங்களுக்கு ஆப் போன்ற சிறப்பான அனுபவத்தைத் தரும்!')}
                            style={{
                                background: 'white',
                                color: '#10b981',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '0.75rem',
                                fontWeight: '800',
                                fontSize: '0.95rem',
                                border: 'none',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <Smartphone size={18} />
                            Install App
                        </button>
                        <button
                            onClick={dismissAppBanner}
                            style={{
                                background: 'rgba(255, 255, 255, 0.2)',
                                border: 'none',
                                borderRadius: '0.5rem',
                                padding: '0.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}
                        >
                            <X size={20} />
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Core Cards Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '3rem'
            }}>
                <DashboardCard
                    icon={Heart}
                    title="Saved Projects"
                    count={savedProjects.length}
                    subtitle="In Progress & Completed"
                    color="#f43f5e"
                    action={() => setView('projects')}
                />
                <DashboardCard
                    icon={Cpu}
                    title="Saved Sensors"
                    count={savedSensors.length}
                    subtitle="Components you bookmarked"
                    color="#3b82f6"
                    action={() => setView('sensors')}
                />
                <DashboardCard
                    icon={Zap}
                    title="Saved Boards"
                    count={savedBoards.length}
                    subtitle="Hardware configurations"
                    color="#eaa515" // yellow/orange
                    action={() => setView('pinout')}
                />
                <DashboardCard
                    icon={Activity}
                    title="Learning Progress"
                    count={`${resumeData ? resumeData.progress : 0}%`}
                    subtitle="Overall course completion"
                    color="#10b981"
                    action={() => setView('mastery')}
                />
            </div>

            {/* Resume Learning Section */}
            {resumeData && (
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Continue Learning</h2>
                    <motion.div
                        whileHover={{ y: -2 }}
                        onClick={() => setView('mastery')}
                        style={{
                            background: 'var(--surface)',
                            borderRadius: '1.5rem',
                            border: '1px solid var(--border)',
                            padding: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '1rem',
                            background: 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: 'white',
                            boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)'
                        }}>
                            <Play size={24} fill="currentColor" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Resume Course
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>{resumeData.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{resumeData.subtitle}</p>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>Progress</span>
                                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)' }}>{resumeData.progress}%</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: 'var(--bg)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: `${resumeData.progress}%`, height: '100%', background: 'var(--primary)', borderRadius: '4px' }} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Recently Saved Section */}
            {allSavedItems.length > 0 && (
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>
                            {showAllSaved ? 'All Saved Items' : 'Recently Saved'}
                        </h2>
                        <span
                            style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary)', cursor: 'pointer' }}
                            onClick={() => setShowAllSaved(!showAllSaved)}
                        >
                            {showAllSaved ? 'Show Less' : 'View All Saved'} <ChevronRight size={14} style={{ display: 'inline', verticalAlign: 'middle', transform: showAllSaved ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                        </span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1rem' }}>
                        {(showAllSaved ? allSavedItems : allSavedItems.slice(0, 3)).map((item, idx) => (
                            <motion.div
                                key={`${item.type}-${item.id}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ x: 5, background: 'var(--surface-hover)', borderColor: 'var(--primary)' }}
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
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.25rem',
                                    padding: '1.25rem',
                                    background: 'var(--surface)',
                                    borderRadius: '1.25rem',
                                    border: '1px solid var(--border)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'var(--bg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: item.type === 'project' ? '#f43f5e' : item.type === 'sensor' ? '#6366f1' : '#10b981'
                                }}>
                                    {item.type === 'project' ? <BookOpen size={22} /> : item.type === 'sensor' ? <Cpu size={22} /> : <Zap size={22} />}
                                </div>
                                <div style={{ flex: 1, overflow: 'hidden' }}>
                                    <div style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {item.title || item.name}
                                    </div>
                                    <div style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ textTransform: 'capitalize' }}>{item.type}</span>
                                        <span>•</span>
                                        <span>{item.category || item.family || item.level}</span>
                                    </div>
                                </div>
                                <ChevronRight size={18} color="var(--text-muted)" opacity={0.5} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Quick Links Row */}
            <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Explore Ecosystem</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                    {[
                        { label: 'Roadmap', icon: Target, view: 'roadmap', color: '#a855f7' },
                        { label: 'All Projects', icon: BookOpen, view: 'projects', color: '#6366f1' },
                        { label: 'Hardware', icon: Cpu, view: 'sensors', color: '#f43f5e' },
                        { label: 'Pinout Lab', icon: Zap, view: 'pinout', color: '#10b981' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -3, background: 'var(--surface)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setView(item.view)}
                            style={{
                                padding: '1.25rem',
                                borderRadius: '1rem',
                                border: '1px solid var(--border)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                background: 'transparent',
                                transition: 'all 0.2s'
                            }}
                        >
                            <div style={{ color: item.color }}><item.icon size={20} /></div>
                            <span style={{ fontWeight: '700', fontSize: '1rem' }}>{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Detail Modals */}
            {selectedSensor && (
                <Suspense fallback={null}>
                    <SensorDetail
                        sensor={selectedSensor}
                        onClose={() => setSelectedSensor(null)}
                    />
                </Suspense>
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
                        padding: '2rem'
                    }}
                    onClick={() => setSelectedBoard(null)}
                >
                    <div
                        style={{
                            background: 'var(--background)',
                            borderRadius: '2rem',
                            padding: '3rem',
                            maxWidth: '600px',
                            width: '100%',
                            maxHeight: '80vh',
                            overflow: 'auto'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: '900', margin: 0 }}>{selectedBoard.name}</h2>
                            <button
                                onClick={() => setSelectedBoard(null)}
                                style={{
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                ✕
                            </button>
                        </div>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{selectedBoard.description}</p>
                        <div style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            <strong>Family:</strong> {selectedBoard.family}
                        </div>
                        {selectedBoard.specs && (
                            <div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '1rem' }}>Specifications</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                    {Object.entries(selectedBoard.specs).map(([key, value]) => (
                                        <div key={key} style={{ padding: '1rem', background: 'var(--surface)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                                                {key.replace(/_/g, ' ')}
                                            </div>
                                            <div style={{ fontSize: '0.95rem', fontWeight: '700' }}>{value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default DesktopDashboard;
