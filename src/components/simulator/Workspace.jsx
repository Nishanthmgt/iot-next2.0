import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Power } from 'lucide-react';

export default function Workspace({
    components,
    onUpdatePos,
    onSelect,
    selectedId,
    onRemove,
    connections = [],
    currentWiring = null,
    onPinClick
}) {
    const constraintsRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!currentWiring || !constraintsRef.current) return;
        const rect = constraintsRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    // Helper to get pin coordinates relative to workspace
    const getPinCoords = (compId, pinIdx) => {
        const comp = components.find(c => c.id === compId);
        if (!comp) return { x: 0, y: 0 };

        // Horizontal distribution of pins at the bottom
        const pinSpacing = 120 / (comp.pinCount + 1);
        const pinX = comp.x + (pinIdx + 1) * pinSpacing;
        const pinY = comp.y + 115; // Bottom of the component card
        return { x: pinX, y: pinY };
    };

    const drawWire = (start, end, color = 'var(--primary)', isTemp = false) => {
        const dx = Math.abs(end.x - start.x);
        const dy = Math.abs(end.y - start.y);
        const controlX = start.x;
        const controlY = start.y + Math.max(dy, 50); // Drop down then curve

        return (
            <path
                key={`${start.x}-${start.y}-${end.x}-${end.y}`}
                d={`M ${start.x} ${start.y} C ${start.x} ${controlY} ${end.x} ${controlY} ${end.x} ${end.y}`}
                fill="none"
                stroke={color}
                strokeWidth={isTemp ? 2 : 3}
                strokeDasharray={isTemp ? "5,5" : "none"}
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
        );
    };

    return (
        <div
            ref={constraintsRef}
            onMouseMove={handleMouseMove}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                background: 'var(--workspace-bg, #f1f5f9)',
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
                backgroundSize: '40px 40px',
                overflow: 'hidden'
            }}
            onClick={() => onSelect(null)}
        >
            {/* SVG Layer for Wires */}
            <svg style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 5
            }}>
                {connections.map(conn => {
                    const start = getPinCoords(conn.from.compId, conn.from.pinIdx);
                    const end = getPinCoords(conn.to.compId, conn.to.pinIdx);
                    return drawWire(start, end, conn.color);
                })}
                {currentWiring && (
                    drawWire(getPinCoords(currentWiring.fromCompId, currentWiring.fromPinIdx), mousePos, 'var(--primary)', true)
                )}
            </svg>

            {components.map((comp) => (
                <motion.div
                    key={comp.id}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0}
                    dragMomentum={false}
                    onDragEnd={(e, info) => {
                        onUpdatePos(comp.id, comp.x + info.offset.x, comp.y + info.offset.y);
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        onSelect(comp);
                    }}
                    style={{
                        position: 'absolute',
                        left: comp.x,
                        top: comp.y,
                        width: '120px',
                        cursor: 'grab',
                        zIndex: selectedId === comp.id ? 10 : 2
                    }}
                    whileTap={{ cursor: 'grabbing', scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        rotate: comp.rotation || 0,
                        border: selectedId === comp.id ? '2px solid var(--primary)' : '2px solid transparent'
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <div style={{
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '1rem',
                        boxShadow: selectedId === comp.id
                            ? '0 20px 40px rgba(var(--primary-rgb), 0.2)'
                            : '0 10px 25px rgba(0,0,0,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.75rem',
                        position: 'relative'
                    }}>
                        <img
                            src={comp.image}
                            alt={comp.name}
                            style={{
                                width: '100%',
                                height: '80px',
                                objectFit: 'contain',
                                pointerEvents: 'none'
                            }}
                        />
                        <div style={{ textAlign: 'center' }}>
                            <p style={{
                                fontSize: '0.65rem',
                                fontWeight: '900',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: '100px',
                                color: 'var(--text)'
                            }}>
                                {comp.name}
                            </p>
                        </div>

                        {/* Connection Nodes */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-5px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '4px',
                            zIndex: 20
                        }}>
                            {Array.from({ length: comp.pinCount || 4 }).map((_, idx) => (
                                <div
                                    key={idx}
                                    onClick={(e) => onPinClick(comp.id, idx, e)}
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        background: currentWiring?.fromCompId === comp.id && currentWiring?.fromPinIdx === idx
                                            ? 'var(--primary)'
                                            : '#64748b',
                                        border: '2px solid white',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.4)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* Empty State Instructions */}
            {components.length === 0 && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    opacity: 0.2,
                    pointerEvents: 'none'
                }}>
                    <Power size={80} strokeWidth={1} style={{ marginBottom: '1.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '900' }}>Workspace Empty</h3>
                    <p style={{ fontWeight: '600' }}>Add components from the library to start simulating</p>
                </div>
            )}
        </div>
    );
}
