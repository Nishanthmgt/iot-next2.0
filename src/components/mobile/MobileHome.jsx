import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen, Cpu, Zap, Target, TrendingUp, Award, ChevronRight, Play, LogIn,
    Bell, Search, Plus, Sparkles, Star, Layers, Activity
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../../lib/supabase';
import localProjects from '../../data/projects.json';

const MobileHome = ({ setView, userName, isAuthenticated, onSelectProject }) => {
    const [timeGreeting, setTimeGreeting] = useState('');
    const [popularProjects, setPopularProjects] = useState([]);
    const [popularSensors, setPopularSensors] = useState([]);

    // Determine greeting based on time
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setTimeGreeting('Good Morning');
        else if (hour < 18) setTimeGreeting('Good Afternoon');
        else setTimeGreeting('Good Evening');
    }, []);

    // Trending Image Mapping
    const getProjectImage = (category, id) => {
        // Defined curated images to ensure high quality and valid links
        const images = {
            'Smart Agriculture': [
                'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80', // 1. Farm (Original) - KEEP
                'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80'  // 2. Plant (Original) - KEEP
            ],
            'IoT & Systems': [
                'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', // Chip
                'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', // Tech
                'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80', // New: Blue Circuit
                'https://images.unsplash.com/photo-1555664424-778a69032054?auto=format&fit=crop&w=800&q=80'  // Electronics
            ],
            'Robotics': [
                'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80', // Robot
                'https://images.unsplash.com/photo-1561144215-6c710d0f5072?auto=format&fit=crop&w=800&q=80'  // Arm
            ],
            'Home Automation': [
                'https://images.unsplash.com/photo-1558002038-1091773817a0?auto=format&fit=crop&w=800&q=80', // Smart Home
                'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80'  // Wall
            ]
        };

        const catImages = images[category] || images['IoT & Systems'];
        // Use modulus to cycle through available images safely
        return catImages[id % catImages.length];
    };

    const [homeReviews, setHomeReviews] = useState([]);

    // Load Data
    useEffect(() => {
        // Explicitly Curated Images for Top 5 Trending Projects
        const trendingImages = [
            'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80', // 1. Smart Ag (Farm) - Correct
            'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80', // 2. Smart Ag (Plant) - Correct
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', // 3. IoT (Chip)
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', // 4. IoT (Tech)
            'https://images.unsplash.com/photo-1555664424-778a69032054?auto=format&fit=crop&w=800&q=80'  // 5. Electronics
        ];

        setPopularProjects(localProjects.slice(0, 5).map((p, index) => ({
            ...p,
            image: trendingImages[index] || trendingImages[0]
        })));

        // Sensors: Fetch a few
        const fetchSensors = async () => {
            const { data } = await supabase.from('sensors').select('id, name, category').limit(5);
            if (data) setPopularSensors(data);
            else {
                setPopularSensors([
                    { id: 1, name: 'DHT22', category: 'Temperature' },
                    { id: 2, name: 'HC-SR04', category: 'Distance' },
                    { id: 3, name: 'MPU6050', category: 'Motion' }
                ]);
            }
        };

        // Reviews: Fetch latest 3
        const fetchReviews = async () => {
            const { data } = await supabase
                .from('reviews')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(3);

            if (data && data.length > 0) {
                setHomeReviews(data);
            } else {
                setHomeReviews([
                    { id: 'd1', user: 'Rajesh K.', role: 'Student', text: 'Best platform for IoT basics!', rating: 5 },
                    { id: 'd2', user: 'Sarah M.', role: 'Maker', text: 'Love the pinout diagrams.', rating: 5 }
                ]);
            }
        };

        fetchSensors();
        fetchReviews();
    }, []);

    const QuickAction = ({ icon: Icon, label, color, onClick, badge }) => (
        <motion.div
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
                cursor: 'pointer'
            }}
        >
            <div style={{
                width: '60px', height: '60px', borderRadius: '18px',
                background: `linear-gradient(135deg, ${color}15, ${color}05)`,
                border: `1px solid ${color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: color,
                boxShadow: `0 8px 16px ${color}15`,
                position: 'relative'
            }}>
                <Icon size={26} strokeWidth={2} />
                {badge && (
                    <span style={{
                        position: 'absolute', top: -5, right: -5,
                        background: '#ef4444', color: 'white',
                        fontSize: '0.65rem', fontWeight: '800',
                        padding: '0.15rem 0.4rem', borderRadius: '1rem',
                        boxShadow: '0 2px 5px rgba(239, 68, 68, 0.4)'
                    }}>{badge}</span>
                )}
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text)', whiteSpace: 'nowrap' }}>
                {label}
            </span>
        </motion.div>
    );

    const FeaturedCard = ({ project }) => (
        <motion.div
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectProject(project)}
            style={{
                minWidth: '260px',
                height: '180px',
                borderRadius: '1.25rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                position: 'relative',
                marginRight: '1rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}
        >
            <img
                src={project.image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)'
            }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '1rem', width: '100%' }}>
                <span style={{
                    fontSize: '0.65rem', fontWeight: '700',
                    color: '#6366f1', background: 'white',
                    padding: '0.2rem 0.5rem', borderRadius: '4px',
                    marginBottom: '0.4rem', display: 'inline-block'
                }}>
                    {project.level}
                </span>
                <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: '800', lineHeight: 1.2, marginBottom: '0.2rem' }}>
                    {project.title.substring(0, 40)}{project.title.length > 40 ? '...' : ''}
                </h4>
            </div>
        </motion.div>
    );

    return (
        <div style={{ paddingBottom: '90px', background: 'var(--background)', minHeight: '100vh', overflowX: 'hidden' }}>
            <Helmet>
                <title>Home | IoTNext Mobile</title>
            </Helmet>

            {/* Install App / Dashboard Banner */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    borderRadius: '1rem',
                    padding: '1rem 1.25rem',
                    marginBottom: '1.5rem',
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'white',
                    boxShadow: '0 8px 20px rgba(16, 185, 129, 0.25)'
                }}
            >
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '0.25rem' }}>
                        📱 {isAuthenticated ? 'My Dashboard' : 'Get Our App'}
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.9, fontWeight: '500' }}>
                        {isAuthenticated ? 'Track your progress & projects' : 'Install for better offline experience'}
                    </div>
                </div>
                <button
                    onClick={() => isAuthenticated ? setView('dashboard') : alert('To install as an app:\n1. Open Chrome on your phone\n2. Click three dots (⋮) top right\n3. Click "Install app" or "Add to Home screen"')}
                    style={{
                        background: 'white', color: '#10b981', padding: '0.6rem 1rem', borderRadius: '0.75rem',
                        fontWeight: '800', fontSize: '0.8rem', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}
                >
                    {isAuthenticated ? 'Go to Dashboard' : 'Install App'}
                </button>
            </motion.div>

            <div style={{ padding: '0 0.5rem' }}>

                {/* Hero / Continue Learning */}
                <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setView('roadmap')}
                    style={{
                        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                        borderRadius: '1.5rem', padding: '1.5rem',
                        color: 'white', position: 'relative', overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(79, 70, 229, 0.3)',
                        marginBottom: '2rem'
                    }}
                >
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                            background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem',
                            borderRadius: '1rem', fontSize: '0.75rem', fontWeight: '700', marginBottom: '0.75rem'
                        }}>
                            <Target size={12} fill="white" />
                            {isAuthenticated ? 'Resume Path' : 'Start Here'}
                        </div>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '0.5rem', lineHeight: 1.1 }}>
                            Master Industrial IoT
                        </h2>
                        <p style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '1.25rem', maxWidth: '85%' }}>
                            From bare-metal C to cloud deployment in 12 levels.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <button style={{
                                background: 'white', color: '#4f46e5', border: 'none',
                                padding: '0.75rem 1.25rem', borderRadius: '1rem',
                                fontSize: '0.9rem', fontWeight: '800',
                                display: 'flex', alignItems: 'center', gap: '0.5rem'
                            }}>
                                <Play size={16} fill="currentColor" />
                                {isAuthenticated ? 'Continue' : 'Start Learning'}
                            </button>
                            {/* Sign In Button for Guests */}
                            {!isAuthenticated && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent card click
                                        setView('login');
                                    }}
                                    style={{
                                        background: 'rgba(255,255,255,0.2)',
                                        color: 'white',
                                        padding: '0.75rem 1.25rem',
                                        borderRadius: '1rem',
                                        fontWeight: '800',
                                        fontSize: '0.9rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        border: '1px solid rgba(255,255,255,0.3)'
                                    }}
                                >
                                    <LogIn size={16} />
                                    Sign In
                                </button>
                            )}
                        </div>
                    </div>
                    {/* Background Decor */}
                    <div style={{
                        position: 'absolute', right: -20, bottom: -20,
                        width: '140px', height: '140px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)'
                    }} />
                </motion.div>

                {/* Quick Actions Grid */}
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1rem', marginBottom: '2.5rem'
                }}>
                    <QuickAction
                        icon={BookOpen} label="Projects" color="#f43f5e"
                        onClick={() => setView('projects')} badge="New"
                    />
                    <QuickAction
                        icon={Cpu} label="Sensors" color="#10b981"
                        onClick={() => setView('sensors')}
                    />
                    <QuickAction
                        icon={Zap} label="Pinout" color="#f59e0b"
                        onClick={() => setView('pinout')}
                    />
                    <QuickAction
                        icon={Layers} label="Roadmap" color="#8b5cf6"
                        onClick={() => setView('roadmap')}
                    />
                </div>

                {/* Trending Projects Carousel */}
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text)' }}>Trending Now</h3>
                        <span onClick={() => setView('projects')} style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', cursor: 'pointer' }}>View All</span>
                    </div>
                    <div style={{
                        display: 'flex', overflowX: 'auto', paddingBottom: '1rem',
                        marginRight: '-1.25rem', paddingRight: '1rem', // Allow bleed
                        scrollbarWidth: 'none', msOverflowStyle: 'none'
                    }}>
                        {popularProjects.map(p => (
                            <FeaturedCard key={p.id} project={p} />
                        ))}
                    </div>
                </div>

                {/* Recent Boards List (Compact) */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text)', marginBottom: '1rem' }}>Essential Boards</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {[
                            { name: 'ESP32 DevKit V1', icons: 'Wifi, Bluetooth', family: 'Espressif' },
                            { name: 'Arduino Uno R4', icons: 'Standard', family: 'Arduino' },
                            { name: 'STM32 Blue Pill', icons: 'ARM Cortex', family: 'STM32' }
                        ].map((board, idx) => (
                            <div
                                key={idx}
                                onClick={() => setView('pinout')}
                                style={{
                                    background: 'var(--surface)', padding: '1rem', borderRadius: '1rem',
                                    border: '1px solid var(--border)', display: 'flex', alignItems: 'center',
                                    gap: '1rem', cursor: 'pointer'
                                }}
                            >
                                <div style={{
                                    width: '44px', height: '44px', borderRadius: '12px',
                                    background: 'var(--background)', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontWeight: '800', color: 'var(--text-muted)',
                                    fontSize: '0.8rem'
                                }}>
                                    {board.name.substring(0, 2).toUpperCase()}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.1rem' }}>{board.name}</h4>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{board.family}</p>
                                </div>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '50%',
                                    background: 'var(--background)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <ChevronRight size={16} color="var(--text-muted)" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* User Reviews Section */}
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text)' }}>User Reviews</h3>
                        <span onClick={() => setView('reviews-page')} style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', cursor: 'pointer' }}>See All</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {homeReviews.map((rev) => (
                            <div key={rev.id} style={{
                                background: 'var(--surface)', padding: '1rem', borderRadius: '1rem',
                                border: '1px solid var(--border)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold' }}>
                                            {(rev.user || 'A').charAt(0)}
                                        </div>
                                        <span style={{ fontWeight: '700', color: 'var(--text)', fontSize: '0.9rem' }}>{rev.user}</span>
                                    </div>
                                    <div style={{ display: 'flex', color: '#fbbf24' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={12} fill={i < (rev.rating || 5) ? "currentColor" : "none"} stroke="none" />
                                        ))}
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: '1.4' }}>"{rev.text}"</p>
                            </div>
                        ))}

                        <button
                            onClick={() => setView('reviews-page')}
                            style={{
                                width: '100%', padding: '1rem', borderRadius: '1rem',
                                background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
                                color: 'white', fontWeight: '800', border: 'none',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                            }}
                        >
                            ✍️ Write a Review
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MobileHome;
