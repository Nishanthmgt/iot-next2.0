import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu,
    Layers,
    MousePointer2,
    Plus,
    Save,
    Trash2,
    Play,
    Code2,
    Settings2,
    ChevronLeft,
    Box
} from 'lucide-react';
import ComponentLibrary from './ComponentLibrary';
import Workspace from './Workspace';

export default function Simulator({ setView }) {
    const [activeComponents, setActiveComponents] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [isLibraryOpen, setIsLibraryOpen] = useState(true);
    const [connections, setConnections] = useState([]);
    const [currentWiring, setCurrentWiring] = useState(null); // { fromCompId, fromPinIdx }
    const [simulationState, setSimulationState] = useState({}); // compId -> { pinStates: [] }

    const addComponent = (component) => {
        // Define pin layout for common categories
        let pins = [];
        if (component.categoryId === 'microcontroller') {
            // Mock pins for microcontrollers (VCC at 0, GND at 1, others IO)
            pins = Array.from({ length: 20 }, (_, i) => ({
                id: i,
                type: i === 0 ? 'VCC' : (i === 1 ? 'GND' : 'IO'),
                state: i === 0 ? 1 : 0
            }));
        } else {
            // Mock pins for sensors (VCC at 0, GND at 1, others IO)
            pins = Array.from({ length: 4 }, (_, i) => ({
                id: i,
                type: i === 0 ? 'VCC' : (i === 1 ? 'GND' : 'IO'),
                state: 0
            }));
        }

        const newInstance = {
            ...component,
            id: `comp-${Date.now()}`,
            x: 200,
            y: 200,
            rotation: 0,
            pins
        };
        setActiveComponents([...activeComponents, newInstance]);
    };

    const removeComponent = (id) => {
        setActiveComponents(activeComponents.filter(c => c.id !== id));
        setConnections(connections.filter(conn => conn.from.compId !== id && conn.to.compId !== id));
        if (selectedComponent?.id === id) setSelectedComponent(null);
    };

    const updateComponentPos = (id, x, y) => {
        setActiveComponents(activeComponents.map(c =>
            c.id === id ? { ...c, x, y } : c
        ));
    };

    // Propagate signals whenever connections or components change
    React.useEffect(() => {
        const propagate = () => {
            const newStates = {};
            activeComponents.forEach(c => {
                newStates[c.id] = c.pins.map(p => p.state);
            });

            // Start with power sources (Microcontrollers VCC)
            // For simplicity, we'll do 5 iterations to propagate HIGH signals
            for (let i = 0; i < 5; i++) {
                connections.forEach(conn => {
                    const fromState = newStates[conn.from.compId][conn.from.pinIdx];
                    const toState = newStates[conn.to.compId][conn.to.pinIdx];

                    // Power propagates if either side is HIGH
                    if (fromState === 1 || toState === 1) {
                        newStates[conn.from.compId][conn.from.pinIdx] = 1;
                        newStates[conn.to.compId][conn.to.pinIdx] = 1;
                    }
                });
            }
            setSimulationState(newStates);
        };
        propagate();
    }, [connections, activeComponents]);

    const handlePinClick = (compId, pinIdx, e) => {
        if (e) e.stopPropagation();
        if (!currentWiring) {
            // Start a connection
            setCurrentWiring({ fromCompId: compId, fromPinIdx: pinIdx });
        } else {
            // Check if we are connecting to a DIFFERENT component
            if (currentWiring.fromCompId !== compId) {
                const newConnection = {
                    id: `conn-${Date.now()}`,
                    from: { compId: currentWiring.fromCompId, pinIdx: currentWiring.fromPinIdx },
                    to: { compId, pinIdx },
                    color: `hsl(${Math.random() * 360}, 70%, 50%)`
                };
                setConnections([...connections, newConnection]);
            }
            setCurrentWiring(null);
        }
    };

    return (
        <div className="simulator-container glass-plus" style={{
            position: 'fixed',
            inset: '1rem',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            borderRadius: '2rem',
            border: '1px solid var(--border)',
            background: 'rgba(var(--surface-rgb), 0.8)',
            backdropFilter: 'blur(20px)'
        }}>
            {/* Top Toolbar */}
            <div style={{
                padding: '1rem 2rem',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(255,255,255,0.05)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <button
                        onClick={() => setView('home')}
                        className="btn-icon"
                        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            background: 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                        }}>
                            <Box size={20} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.1rem', fontWeight: '900', letterSpacing: '-0.02em' }}>
                                IoT <span className="text-gradient">SimLab</span>
                            </h2>
                            <p style={{ fontSize: '0.65rem', fontWeight: '800', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Virtual Hardware Engine v1.0
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '1rem', fontSize: '0.85rem' }}>
                        <Save size={16} /> SAVE LAB
                    </button>
                    <button className="btn btn-primary btn-primary-shiny" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '1rem', fontSize: '0.85rem' }}>
                        <Play size={16} /> RUN SIMULATION
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                {/* Side Navigation */}
                <div style={{
                    width: '64px',
                    borderRight: '1px solid var(--border)',
                    padding: '1.5rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    background: 'rgba(0,0,0,0.02)'
                }}>
                    <button
                        onClick={() => setIsLibraryOpen(!isLibraryOpen)}
                        style={{ color: isLibraryOpen ? 'var(--primary)' : 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        <Plus size={24} />
                    </button>
                    <button style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <MousePointer2 size={24} />
                    </button>
                    <button style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <Code2 size={24} />
                    </button>
                    <div style={{ marginTop: 'auto' }}>
                        <button style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
                            <Settings2 size={24} />
                        </button>
                    </div>
                </div>

                {/* Component Library Sidebar */}
                <AnimatePresence>
                    {isLibraryOpen && (
                        <ComponentLibrary onAdd={addComponent} />
                    )}
                </AnimatePresence>

                {/* Workspace Canvas */}
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#f8fafc' }}>
                    <Workspace
                        components={activeComponents}
                        onUpdatePos={updateComponentPos}
                        onSelect={setSelectedComponent}
                        selectedId={selectedComponent?.id}
                        onRemove={removeComponent}
                        connections={connections}
                        currentWiring={currentWiring}
                        onPinClick={handlePinClick}
                        simulationState={simulationState}
                    />

                    {/* Quick Labels Overlay */}
                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', pointerEvents: 'none' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div className="glass-plus" style={{ padding: '0.5rem 1rem', borderRadius: '0.75rem', fontSize: '0.75rem', fontWeight: '700' }}>
                                Components: {activeComponents.length}
                            </div>
                            <div className="glass-plus" style={{ padding: '0.5rem 1rem', borderRadius: '0.75rem', fontSize: '0.75rem', fontWeight: '700' }}>
                                FPS: 60
                            </div>
                        </div>
                    </div>
                </div>

                {/* Properties Sidebar (Optional - Placeholder) */}
                <AnimatePresence>
                    {selectedComponent && (
                        <motion.div
                            initial={{ x: 300 }}
                            animate={{ x: 0 }}
                            exit={{ x: 300 }}
                            style={{
                                width: '280px',
                                borderLeft: '1px solid var(--border)',
                                background: 'rgba(var(--surface-rgb), 0.95)',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: '900' }}>Properties</h3>
                                <button onClick={() => setSelectedComponent(null)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><Plus style={{ transform: 'rotate(45deg)' }} size={18} /></button>
                            </div>

                            <div style={{ textAlign: 'center', padding: '1.5rem', borderRadius: '1rem', background: 'rgba(var(--primary-rgb), 0.05)', border: '1px solid var(--border)' }}>
                                <img src={selectedComponent.image} alt={selectedComponent.name} style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '1rem' }} />
                                <p style={{ fontWeight: '800', fontSize: '0.9rem' }}>{selectedComponent.name}</p>
                            </div>

                            <div style={{ display: 'grid', gap: '1rem' }}>
                                <label style={{ fontSize: '0.7rem', fontWeight: '800', opacity: 0.5, textTransform: 'uppercase' }}>Position</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                    <div style={{ padding: '0.75rem', background: 'var(--background)', borderRadius: '0.5rem', fontSize: '0.8rem', fontWeight: '700' }}>X: {Math.round(selectedComponent.x)}</div>
                                    <div style={{ padding: '0.75rem', background: 'var(--background)', borderRadius: '0.5rem', fontSize: '0.8rem', fontWeight: '700' }}>Y: {Math.round(selectedComponent.y)}</div>
                                </div>
                            </div>

                            <button
                                onClick={() => removeComponent(selectedComponent.id)}
                                style={{
                                    marginTop: 'auto',
                                    padding: '1rem',
                                    borderRadius: '1rem',
                                    border: '1px solid rgba(239, 68, 68, 0.2)',
                                    background: 'rgba(239, 68, 68, 0.05)',
                                    color: '#ef4444',
                                    fontSize: '0.85rem',
                                    fontWeight: '800',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <Trash2 size={16} /> DELETE
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style>{`
                .simulator-container label {
                    user-select: none;
                }
                .btn-primary-shiny {
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }
                .btn-primary-shiny::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                    transform: rotate(45deg);
                    animation: shiny-button 3s infinite;
                    pointer-events: none;
                }
                @keyframes shiny-button {
                    0% { transform: translateX(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) rotate(45deg); }
                }
            `}</style>
        </div>
    );
}
