import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import { Plus, Edit, Trash2, Eye, EyeOff, LayoutDashboard, LogOut, RefreshCw, Cpu, Box, Cloud, AlertCircle, Target } from 'lucide-react';
import { extendedSensors as staticSensors } from '../../data/sensors';
import { projects as localProjects } from '../../data/projects';
import { BOARDS } from '../../data/boards';

export default function AdminDashboard({ setView, setEditingProject, setEditingSensor, setEditingBoard }) {
    const [projects, setProjects] = useState([]);
    const [sensors, setSensors] = useState([]);
    const [boards, setBoards] = useState([]);
    const [activeTab, setActiveTab] = useState('projects'); // projects, sensors, or boards
    const [loading, setLoading] = useState(true);
    const [isSyncing, setIsSyncing] = useState(false);
    const [showAuditLog, setShowAuditLog] = useState(false);
    const [auditLogs] = useState([
        { id: 1, action: 'Primary Terminal Access', user: 'Nishanth M', time: '02:45:10 UTC', status: 'Authorized' },
        { id: 2, action: 'Supabase Cloud Sync', user: 'System-Auto', time: 'Yesterday', status: 'Complete' },
        { id: 3, action: 'Project Table Upsert', user: 'mnishanth279@gmail.com', time: '3h ago', status: 'Success' }
    ]);

    const fetchData = async (silent = false) => {
        if (!silent) setLoading(true);
        else setIsSyncing(true);

        try {
            if (activeTab === 'projects') {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .order('created_at', { ascending: false });
                if (!error) setProjects(data);
            } else if (activeTab === 'sensors') {
                const { data, error } = await supabase
                    .from('sensors')
                    .select('*')
                    .order('name', { ascending: true });
                if (!error) setSensors(data);
                else {
                    console.warn('Sensors table might not exist:', error);
                    setSensors([]);
                }
            } else if (activeTab === 'boards') {
                const { data, error } = await supabase
                    .from('boards')
                    .select('*')
                    .order('name', { ascending: true });
                if (!error) setBoards(data);
                else {
                    console.warn('Boards table might not exist:', error);
                    setBoards([]);
                }
            }
        } catch (err) {
            console.error('Fetch error:', err);
        } finally {
            setLoading(false);
            setIsSyncing(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const importStaticSensors = async () => {
        if (!window.confirm("This will import the 110+ sensors from the registry into your dynamic database, preserving categories and levels. Continue?")) return;

        setIsSyncing(true);
        let successCount = 0;
        let failCount = 0;

        for (const s of staticSensors) {
            // Check if already exists to avoid duplicates
            const { data: existing } = await supabase
                .from('sensors')
                .select('id')
                .eq('name', s.name)
                .single();

            if (!existing) {
                const { error } = await supabase
                    .from('sensors')
                    .insert([{
                        name: s.name,
                        pins: s.pins,
                        image: s.image,
                        categoryId: s.categoryId,
                        category: s.category, // Legacy support
                        level: s.level,
                        emoji: s.emoji,
                        description: s.description
                    }]);
                if (!error) {
                    successCount++;
                } else {
                    console.error('Insert error for', s.name, ':', error);
                    failCount++;
                }
            } else {
                // Update existing to fix missing metadata if needed
                const { error } = await supabase
                    .from('sensors')
                    .update({
                        categoryId: s.categoryId,
                        category: s.category,
                        level: s.level,
                        emoji: s.emoji,
                        description: s.description
                    })
                    .eq('name', s.name);

                if (!error) successCount++;
                else failCount++;
            }
        }

        alert(`Sync Complete!\n- ${successCount} sensors updated/imported.\n- ${failCount} failed.`);
        fetchData();
    };

    const syncBoards = async () => {
        try {
            setIsSyncing(true);

            // 1. Fetch existing boards from DB to preserve images
            const { data: dbBoards } = await supabase.from('boards').select('name, image');
            const dbImageMap = (dbBoards || []).reduce((acc, b) => {
                acc[b.name] = b.image;
                return acc;
            }, {});

            const boardList = Object.values(BOARDS).map(b => ({
                name: b.name,
                description: b.description,
                category: b.category,
                // Preserve DB image if it exists and looks like a cloud URL, otherwise use static placeholder
                image: (dbImageMap[b.name] && dbImageMap[b.name].startsWith('http'))
                    ? dbImageMap[b.name]
                    : b.image,
                pins: b.pins
            }));

            if (!window.confirm(`This will sync ${boardList.length} microcontrollers from static data to Supabase while preserving existing cloud-uploaded images. Continue?`)) return;

            // Batch upsert
            const { error } = await supabase.from('boards').upsert(boardList, { onConflict: 'name' });

            if (error) {
                console.error('Board sync error:', error);
                alert(`Sync Failed!\n\nError: ${error.message}`);
            } else {
                alert(`Sync Successful! ${boardList.length} boards updated. Existing images were preserved.`);
            }
        } catch (err) {
            console.error('Board sync critical error:', err);
            alert('A critical error occurred while importing board data.');
        } finally {
            setIsSyncing(false);
            fetchData();
        }
    };

    const syncProjects = async () => {
        setIsSyncing(true);
        try {
            // 1. Fetch current database state to preserve fields like status and circuit_diagram
            const { data: dbProjects } = await supabase.from('projects').select('title, status, circuit_diagram, components');
            const dbMap = (dbProjects || []).reduce((acc, p) => {
                acc[p.title] = p;
                return acc;
            }, {});

            if (!window.confirm(`This will sync ${localProjects.length} projects from the local repository while preserving existing cloud fields (status, images). Continue?`)) {
                setIsSyncing(false);
                return;
            }

            let successCount = 0;
            let failCount = 0;
            let missingColumns = false;

            // 2. Detect existing columns
            const { data: sample } = await supabase.from('projects').select('*').limit(1);
            const existingColumns = Object.keys(sample?.[0] || {
                title: '', level: '', description: '', category: '', estimatedTime: '',
                tech: '', concept: '', working_principle: '', code: '', usage: '',
                advantages: '', disadvantages: '', status: '', slug: '', pin_config: ''
            });

            if (!existingColumns.includes('circuit_diagram') || !existingColumns.includes('components')) {
                missingColumns = true;
            }

            // 3. Prepare projects with merge logic
            const projectsToSync = localProjects.map(p => {
                const synced = {};
                const item = {
                    ...p,
                    slug: p.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
                    tech: Array.isArray(p.tech) ? p.tech : [p.tech]
                };

                const existing = dbMap[p.title] || {};

                existingColumns.forEach(col => {
                    if (col !== 'id' && col !== 'created_at' && col !== 'updated_at') {
                        // Priority: DB (if cloud URL/status) > Local
                        if (col === 'status' && existing.status) {
                            synced[col] = existing.status;
                        } else if ((col === 'circuit_diagram' || col === 'image') && existing[col]?.startsWith('http')) {
                            synced[col] = existing[col];
                        } else if (col === 'components' && existing.components) {
                            synced[col] = existing.components;
                        } else {
                            synced[col] = item[col] || null;
                        }
                    }
                });
                return synced;
            });

            // 4. Batch process
            const chunkSize = 15;
            for (let i = 0; i < projectsToSync.length; i += chunkSize) {
                const chunk = projectsToSync.slice(i, i + chunkSize);
                const { error } = await supabase.from('projects').upsert(chunk, { onConflict: 'title' });

                if (error) {
                    console.error('Sync error in chunk:', error);
                    failCount += chunk.length;
                    alert(`Database Error: ${error.message}`);
                    return;
                } else {
                    successCount += chunk.length;
                }
            }

            let msg = `Sync Complete!\n- ${successCount} projects processed.\n- ${failCount} failed.`;
            if (missingColumns) {
                msg += `\n\n[!] NOTE: 'circuit_diagram' or 'components' columns were missing.`;
            }
            alert(msg);
            fetchData();
        } catch (err) {
            console.error('Sync failed:', err);
            alert('A critical error occurred during synchronization.');
        } finally {
            setIsSyncing(false);
        }
    };

    const toggleStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === 'Published' ? 'Draft' : 'Published';
        setProjects(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
        const { error } = await supabase.from('projects').update({ status: newStatus }).eq('id', id);
        if (error) {
            setProjects(prev => prev.map(p => p.id === id ? { ...p, status: currentStatus } : p));
            alert('Failed to update status.');
        }
    };

    const deleteItem = async (id, table) => {
        const itemType = table === 'projects' ? 'project' : 'sensor';
        if (window.confirm(`Are you sure you want to delete this ${itemType}?`)) {
            const originalItems = table === 'projects' ? [...projects] : [...sensors];
            if (table === 'projects') setProjects(prev => prev.filter(p => p.id !== id));
            else setSensors(prev => prev.filter(s => s.id !== id));

            const { error } = await supabase.from(table).delete().eq('id', id);

            if (error) {
                if (table === 'projects') setProjects(originalItems);
                else setSensors(originalItems);
                alert('Deletion failed.');
            }
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.hash = 'home';
        window.location.reload();
    };

    return (
        <section className="container" style={{ paddingBottom: '5rem', minHeight: '100vh' }}>
            <div style={{
                padding: '4rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                borderBottom: '1px solid var(--border)',
                marginBottom: '4rem'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <span className="badge badge-beginner" style={{ background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', border: '1px solid var(--primary)', fontSize: '0.7rem' }}>System Online</span>
                            {isSyncing && <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><RefreshCw size={12} className="animate-spin" /> Syncing...</span>}
                        </div>
                        <h1 style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1 }}>
                            Command <span className="text-gradient">Center</span>
                        </h1>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            className="glass"
                            style={{ borderRadius: '1rem', padding: '0.6rem 1.2rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border)' }}
                            onClick={() => setShowAuditLog(!showAuditLog)}
                        >
                            <Target size={16} /> Logs
                        </button>
                        <button className="btn btn-outline hover-lift" style={{ borderRadius: '1rem', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }} onClick={handleLogout}>
                            <LogOut size={16} /> Exit
                        </button>
                    </div>
                </div>

                {/* Audit Log Overlay */}
                <AnimatePresence>
                    {showAuditLog && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            style={{
                                position: 'fixed', right: '2rem', top: '15rem', bottom: '5rem', width: '300px',
                                zIndex: 100, display: 'flex', flexDirection: 'column', gap: '1rem'
                            }}
                        >
                            <div className="glass-plus" style={{ flex: 1, padding: '1.5rem', borderRadius: '2rem', border: '1px solid var(--border)', overflowY: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h4 style={{ fontSize: '0.8rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--primary)' }}>AUDIT LOG</h4>
                                    <button onClick={() => setShowAuditLog(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)' }}>×</button>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {auditLogs.map(log => (
                                        <div key={log.id} style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text)' }}>{log.action}</div>
                                            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                                                {log.user} • {log.time}
                                            </div>
                                            <div style={{ fontSize: '0.6rem', color: '#10b981', fontWeight: '800', marginTop: '0.4rem', textTransform: 'uppercase' }}>{log.status}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                        <button
                            onClick={() => setActiveTab('projects')}
                            style={{
                                background: 'none', border: 'none', padding: '0.5rem 0',
                                borderBottom: activeTab === 'projects' ? '3px solid var(--primary)' : '3px solid transparent',
                                color: activeTab === 'projects' ? 'var(--text)' : 'var(--text-muted)',
                                fontWeight: '800', cursor: 'pointer', transition: 'all 0.3s ease',
                                fontSize: '1rem', letterSpacing: '0.05em'
                            }}
                        >
                            PROJECTS
                        </button>
                        <button
                            onClick={() => setActiveTab('sensors')}
                            style={{
                                background: 'none', border: 'none', padding: '0.5rem 0',
                                borderBottom: activeTab === 'sensors' ? '3px solid var(--primary)' : '3px solid transparent',
                                color: activeTab === 'sensors' ? 'var(--text)' : 'var(--text-muted)',
                                fontWeight: '800', cursor: 'pointer', transition: 'all 0.3s ease',
                                fontSize: '0.9rem', letterSpacing: '0.05em'
                            }}
                        >
                            HARDWARE
                        </button>
                        <button
                            onClick={() => setActiveTab('boards')}
                            style={{
                                background: 'none', border: 'none', padding: '0.5rem 0',
                                borderBottom: activeTab === 'boards' ? '3px solid var(--primary)' : '3px solid transparent',
                                color: activeTab === 'boards' ? 'var(--text)' : 'var(--text-muted)',
                                fontWeight: '800', cursor: 'pointer', transition: 'all 0.3s ease',
                                fontSize: '0.9rem', letterSpacing: '0.05em'
                            }}
                        >
                            BOARDS
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {activeTab === 'projects' ? (
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <button className="btn btn-outline" style={{ padding: '0.75rem 1.25rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }} onClick={syncProjects}>
                                    <Cloud size={16} className={isSyncing ? "animate-spin" : ""} /> Cloud Sync
                                </button>
                                <button className="btn btn-primary btn-primary-shiny" style={{ padding: '0.75rem 1.5rem', borderRadius: '1rem', fontSize: '0.9rem' }} onClick={() => { setEditingProject(null); setView('admin-add'); }}>
                                    <Plus size={18} /> New Project
                                </button>
                            </div>
                        ) : activeTab === 'sensors' ? (
                            <>
                                <button className="btn btn-primary btn-primary-shiny" style={{ padding: '0.75rem 1.5rem', borderRadius: '1rem', fontSize: '0.9rem' }} onClick={() => { setEditingSensor(null); setView('admin-sensor-add'); }}>
                                    <Plus size={18} /> New Sensor
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-outline" style={{ padding: '0.75rem 1.25rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }} onClick={syncBoards}>
                                    <RefreshCw size={16} className={isSyncing ? "animate-spin" : ""} /> Sync
                                </button>
                                <button className="btn btn-primary btn-primary-shiny" style={{ padding: '0.75rem 1.5rem', borderRadius: '1rem', fontSize: '0.9rem' }} onClick={() => { setView('admin-board-add'); }}>
                                    <Plus size={18} /> New Board
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="glass-plus" style={{ borderRadius: '2.5rem', overflow: 'hidden' }}>
                {loading ? (
                    <div style={{ padding: '8rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                        <div className="iot-loader" style={{ margin: '0 auto 2rem' }}>
                            <div className="iot-loader-inner"></div>
                        </div>
                        <p style={{ letterSpacing: '0.1em', fontWeight: '600', fontSize: '0.8rem', color: 'var(--primary)' }}>SYNCHRONIZING...</p>
                    </div>
                ) : (activeTab === 'projects' ? projects : activeTab === 'sensors' ? sensors : boards).length === 0 ? (
                    <div style={{ padding: '8rem', textAlign: 'center' }}>
                        {activeTab === 'projects' ? <LayoutDashboard size={48} style={{ color: 'var(--border)', marginBottom: '1.5rem' }} /> : <Box size={48} style={{ color: 'var(--border)', marginBottom: '1.5rem' }} />}
                        <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.75rem' }}>No {activeTab} Found</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Your digital laboratory is empty.</p>
                    </div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead style={{ background: 'rgba(var(--surface-rgb), 0.5)', fontSize: '0.85rem' }}>
                                <tr>
                                    <th style={{ padding: '1.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                                        {activeTab === 'projects' ? 'Project Title' : activeTab === 'sensors' ? 'Component Name' : 'Board Name'}
                                    </th>
                                    <th style={{ padding: '1.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                                        {activeTab === 'projects' ? 'Level' : activeTab === 'sensors' ? 'Pins' : 'Category'}
                                    </th>
                                    {activeTab === 'projects' && (
                                        <th style={{ padding: '1.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Status</th>
                                    )}
                                    <th style={{ padding: '1.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(activeTab === 'projects' ? projects : activeTab === 'sensors' ? sensors : boards).map((item) => (
                                    <tr key={item.id} style={{ borderTop: '1px solid var(--border)', transition: 'var(--transition)' }} className="hover-row">
                                        <td style={{ padding: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <img src={item.image} style={{ width: '40px', height: '40px', objectFit: 'contain', background: 'white', borderRadius: '0.5rem', padding: '0.2rem' }} alt="" />
                                            <div>
                                                <div>{activeTab === 'projects' ? item.title : item.name}</div>
                                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                                                    {activeTab === 'sensors' ? (item.categoryId || item.category?.toLowerCase()) : activeTab === 'projects' ? item.category : 'Microcontroller'}
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ padding: '1.5rem' }}>
                                            <div style={{ display: 'grid', gap: '0.4rem' }}>
                                                <span className={`badge badge-${(item.level || 'beginner').toLowerCase()}`}>{item.level || 'Beginner'}</span>
                                                {activeTab === 'sensors' && (
                                                    <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--primary)' }}>
                                                        {Object.values(item).filter(v => v && v !== '').length}/15 Fields
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        {activeTab === 'projects' && (
                                            <td style={{ padding: '1.5rem' }}>
                                                <button
                                                    onClick={() => toggleStatus(item.id, item.status)}
                                                    style={{
                                                        display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(var(--surface-rgb), 0.5)',
                                                        padding: '0.5rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border)',
                                                        color: item.status === 'Published' ? '#10b981' : 'var(--text-muted)', cursor: 'pointer',
                                                        fontSize: '0.9rem', fontWeight: '700', transition: 'var(--transition)'
                                                    }}
                                                    className="status-btn"
                                                >
                                                    {item.status === 'Published' ? <Eye size={16} /> : <EyeOff size={16} />}
                                                    {item.status}
                                                </button>
                                            </td>
                                        )}
                                        <td style={{ padding: '1.5rem' }}>
                                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                                <button className="btn-icon hover-lift" onClick={() => {
                                                    if (activeTab === 'projects') { setEditingProject(item); setView('admin-edit'); }
                                                    else if (activeTab === 'sensors') { setEditingSensor(item); setView('admin-sensor-edit'); }
                                                    else { setEditingBoard(item); setView('admin-board-edit'); }
                                                }} title="Edit" style={{ width: '40px', height: '40px', borderRadius: '0.75rem', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Edit size={18} />
                                                </button>
                                                <button className="btn-icon text-accent hover-lift" onClick={() => deleteItem(item.id, activeTab === 'boards' ? 'boards' : activeTab === 'projects' ? 'projects' : 'sensors')} title="Delete" style={{ width: '40px', height: '40px', borderRadius: '0.75rem', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                .hover-row:hover { background: rgba(var(--primary-rgb), 0.02); }
                .status-btn:hover { border-color: var(--primary); transform: translateY(-1px); }
                .text-accent:hover { color: var(--accent) !important; border-color: var(--accent) !important; }
                
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 768px) {
                    th:nth-child(2), td:nth-child(2), 
                    th:nth-child(3), td:nth-child(3) { 
                        display: none; 
                    }
                    th, td { padding: 1rem !important; }
                    .badge { padding: 0.3rem 0.6rem !important; font-size: 0.7rem !important; }
                }
            `}} />
        </section>
    );
}
