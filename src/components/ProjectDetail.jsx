import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft, Cpu, Shield, Zap, BookOpen, Terminal, Settings,
    ExternalLink, CheckCircle, AlertCircle, ShoppingCart, Clock,
    Lightbulb, Layers, PlayCircle, Eye, Rocket, Download, List, Share2, Sparkles,
    Building2, Wallet, FileText, Globe, Star, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export default function ProjectDetail({ project, onBack, onAddToBuild, onRemoveFromBuild, isInBuild, onNext, onPrev }) {
    const { addToast } = useToast();

    if (!project) return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', background: 'var(--background)' }}>
            <div className="iot-loader">
                <div className="iot-loader-inner"></div>
            </div>
            <p style={{ fontWeight: 800, letterSpacing: '0.1em', color: 'var(--primary)' }}>DECODING PROJECT...</p>
        </div>
    );

    const SectionTitle = ({ icon: Icon, title }) => (
        <h2 style={{
            fontSize: '1.75rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: 'var(--text)',
            fontWeight: '900',
            letterSpacing: '-0.02em'
        }}>
            <div style={{ background: 'var(--primary-gradient)', padding: '0.6rem', borderRadius: '12px', color: 'white', boxShadow: 'var(--shadow-glow)' }}>
                {Icon ? <Icon size={20} /> : <Layers size={20} />}
            </div>
            {title}
        </h2>
    );

    const [selectedBoard, setSelectedBoard] = React.useState('arduino');

    const downloadCode = () => {
        if (!project || !project.code) {
            addToast("Firmware data not found", "error");
            return;
        }
        const element = document.createElement("a");
        const file = new Blob([project.code], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${(project.title || 'project').replace(/\s+/g, '_')}.ino`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        addToast("Firmware Project Initialized (.INO)", "success");
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="container" style={{ padding: '4rem 0', position: 'relative' }}>
            {/* Desktop Navigation Arrows (Floating) */}
            <div className="desktop-flex" style={{
                position: 'fixed',
                top: '50%',
                left: '2rem',
                right: '2rem',
                transform: 'translateY(-50%)',
                display: 'flex',
                justifyContent: 'space-between',
                pointerEvents: 'none',
                zIndex: 100,
                opacity: 0.6
            }}>
                <motion.button
                    whileHover={{ scale: 1.1, opacity: 1, x: -5 }}
                    onClick={onPrev}
                    style={{
                        pointerEvents: 'auto',
                        background: 'var(--glass)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <ChevronLeft size={24} />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1, opacity: 1, x: 5 }}
                    onClick={onNext}
                    style={{
                        pointerEvents: 'auto',
                        background: 'var(--glass)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <ChevronRight size={24} />
                </motion.button>
            </div>

            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={onBack}
                className="btn btn-outline hover-lift"
                style={{ marginBottom: '3rem', padding: '0.75rem 1.5rem', borderRadius: '1rem', fontWeight: '700' }}
            >
                <ArrowLeft size={18} /> Back to Repository
            </motion.button>

            <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.98, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -20 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                onPanEnd={(e, info) => {
                    const threshold = 100;
                    if (info.offset.x > threshold) {
                        onPrev();
                    } else if (info.offset.x < -threshold) {
                        onNext();
                    }
                }}
                className="glass-plus"
                style={{
                    padding: '4rem',
                    borderRadius: '2rem',
                    border: '1px solid var(--border)',
                    cursor: 'grab',
                    userSelect: 'none'
                }}
            >
                {/* Header Section */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem', flexWrap: 'wrap', gap: '3rem' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '2rem' }}>
                            <span className={`badge badge-${(project.level || 'Beginner').toLowerCase()}`} style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {(project.level || 'Beginner')} Level
                            </span>
                            {project.estimatedTime && (
                                <span className="badge glass" style={{ fontSize: '0.85rem', fontWeight: '700' }}>
                                    <Clock size={14} style={{ marginRight: '6px' }} /> {project.estimatedTime}
                                </span>
                            )}
                            <span className="badge glass" style={{ fontSize: '0.85rem', fontWeight: '700' }}>
                                <Shield size={14} style={{ marginRight: '6px' }} /> {project.category}
                            </span>
                        </div>
                        <h1 style={{ fontSize: '4rem', fontWeight: '950', marginBottom: '0.5rem', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
                            {(project.title || 'Project').split(' ').map((word, i) => i === 0 ? word + ' ' : <span key={i} className="text-gradient">{word} </span>)}
                        </h1>
                        <p style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Architected by <span style={{ color: 'var(--text)' }}>{project.author_name || 'Antigravity'}</span>
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '900px', lineHeight: '1.7', marginBottom: '2.5rem', fontWeight: '500' }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                            <button
                                className="btn btn-primary btn-primary-shiny"
                                style={{ padding: '1.1rem 2rem', borderRadius: '1.25rem', fontWeight: '800', fontSize: '1rem' }}
                                onClick={downloadCode}
                            >
                                <Download size={20} /> Deploy Source (.INO)
                            </button>

                            <button
                                className="btn btn-outline hover-lift"
                                style={{ padding: '1.1rem 2rem', borderRadius: '1.25rem', fontWeight: '800', fontSize: '1rem' }}
                                onClick={() => {
                                    navigator.clipboard.writeText(window.location.href);
                                    addToast("Project Link Secured to Clipboard", "success");
                                }}
                            >
                                <Share2 size={20} /> Share Project
                            </button>

                            <button
                                className="btn btn-outline hover-lift"
                                style={{ padding: '1.1rem 2rem', borderRadius: '1.25rem', fontWeight: '800', fontSize: '1rem' }}
                                onClick={handlePrint}
                            >
                                <FileText size={20} /> Generate PDF
                            </button>

                            <button
                                className={`btn ${isInBuild ? 'btn-primary' : 'btn-outline'} hover-lift`}
                                style={{
                                    padding: '1.1rem 2rem',
                                    borderRadius: '1.25rem',
                                    fontWeight: '800',
                                    fontSize: '1rem',
                                    background: isInBuild ? 'var(--primary-gradient)' : 'transparent',
                                    color: isInBuild ? 'white' : 'var(--text)',
                                    borderColor: isInBuild ? 'transparent' : 'var(--border)',
                                    gap: '0.75rem',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                onClick={() => isInBuild ? onRemoveFromBuild(project.id) : onAddToBuild(project.id)}
                            >
                                <Star size={20} fill={isInBuild ? 'white' : 'none'} /> {isInBuild ? 'Saved to Labs' : 'Star Project'}
                            </button>

                            {project.downloads && project.downloads.length > 0 && (
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {project.downloads.map((dl, i) => (
                                        dl.link !== '#' && (
                                            <button
                                                key={i}
                                                className="btn btn-outline hover-lift"
                                                style={{ padding: '1.1rem 2rem', borderRadius: '1.25rem', fontWeight: '800' }}
                                                onClick={() => window.open(dl.link, '_blank')}
                                            >
                                                <Download size={20} /> {dl.label}
                                            </button>
                                        )
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-2" style={{ gap: '4rem', marginBottom: '5rem' }}>
                    {/* Left Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        <div>
                            <SectionTitle icon={List} title="Components Required" />
                            <div className="glass" style={{ padding: '2.5rem', borderRadius: '2rem', background: 'rgba(var(--primary-rgb), 0.02)', border: '1px solid var(--border)' }}>
                                {Array.isArray(project.components) ? (
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {project.components.map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text)', fontWeight: '600' }}>
                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-gradient)' }}></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p style={{ color: 'var(--text)', lineHeight: '1.9', fontSize: '1.1rem', whiteSpace: 'pre-line', fontWeight: '500' }}>{project.components}</p>
                                )}
                            </div>
                        </div>

                        {project.circuit_diagram && (
                            <div>
                                <SectionTitle icon={Eye} title="Schematic Diagram" />
                                <div className="glass" style={{
                                    padding: project.circuit_diagram.match(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i) || project.circuit_diagram.startsWith('http') ? '1rem' : '2.5rem',
                                    borderRadius: '2rem',
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    overflow: 'hidden'
                                }}>
                                    {project.circuit_diagram.match(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i) || project.circuit_diagram.startsWith('http') ? (
                                        <img
                                            src={project.circuit_diagram}
                                            alt="Circuit Schematic"
                                            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '1rem' }}
                                        />
                                    ) : (
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                            <div style={{
                                                minWidth: '60px',
                                                height: '60px',
                                                background: 'rgba(var(--primary-rgb), 0.1)',
                                                borderRadius: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--primary)',
                                                boxShadow: 'inset 0 0 20px rgba(var(--primary-rgb), 0.05)'
                                            }}>
                                                <FileText size={28} />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hardware Wiring Guide</h4>
                                                <p style={{ color: 'var(--text)', lineHeight: '1.9', fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>
                                                    {project.circuit_diagram}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        <div>
                            <SectionTitle icon={Settings} title="Working Explanation" />
                            <div className="glass" style={{ padding: '2.5rem', borderRadius: '2rem', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.1rem', whiteSpace: 'pre-line', fontWeight: '500' }}>
                                    {project.working_principle}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <SectionTitle icon={Zap} title="Pin Configuration" />
                                {typeof project.pin_config === 'object' && project.pin_config !== null && (
                                    <div className="glass" style={{ display: 'flex', padding: '0.25rem', borderRadius: '12px', gap: '0.5rem' }}>
                                        {['arduino', 'esp32'].map(board => (
                                            <button
                                                key={board}
                                                onClick={() => setSelectedBoard(board)}
                                                style={{
                                                    padding: '0.5rem 1rem',
                                                    borderRadius: '8px',
                                                    border: 'none',
                                                    background: selectedBoard === board ? 'var(--primary-gradient)' : 'transparent',
                                                    color: selectedBoard === board ? 'white' : 'var(--text-muted)',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '800',
                                                    textTransform: 'uppercase',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {board}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="glass-plus" style={{
                                padding: '1.5rem',
                                borderRadius: '2rem',
                                border: '1px solid rgba(var(--secondary-rgb), 0.3)',
                                background: 'rgba(var(--secondary-rgb), 0.02)',
                                overflowX: 'auto'
                            }}>
                                {typeof project.pin_config === 'object' && project.pin_config !== null ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '600px' }}>
                                        {/* Header if new schema */}
                                        {(project.pin_config[selectedBoard] && project.pin_config[selectedBoard][0]?.module) && (
                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr 2fr',
                                                gap: '1rem',
                                                padding: '0.75rem',
                                                borderBottom: '2px solid var(--primary)',
                                                fontSize: '0.75rem',
                                                fontWeight: '900',
                                                textTransform: 'uppercase',
                                                color: 'var(--primary)'
                                            }}>
                                                <span>Module</span>
                                                <span>Pin Name</span>
                                                <span>MCU GPIO</span>
                                                <span>Direction</span>
                                                <span>Voltage</span>
                                                <span>Description</span>
                                            </div>
                                        )}

                                        {(project.pin_config[selectedBoard] || []).map((config, idx) => (
                                            config.module ? (
                                                <div key={idx} style={{
                                                    display: 'grid',
                                                    gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr 2fr',
                                                    gap: '1rem',
                                                    alignItems: 'center',
                                                    padding: '0.75rem',
                                                    borderBottom: '1px solid rgba(var(--primary-rgb), 0.1)',
                                                    fontSize: '0.85rem'
                                                }}>
                                                    <span style={{ fontWeight: '800', color: 'var(--text)' }}>{config.module}</span>
                                                    <span style={{ color: 'var(--text-muted)' }}>{config.pinName}</span>
                                                    <span style={{ color: 'var(--primary)', fontWeight: '900' }}>{config.mcuPin}</span>
                                                    <span style={{
                                                        color: config.direction === 'Output' ? 'var(--accent)' : 'var(--secondary)',
                                                        fontWeight: '700'
                                                    }}>{config.direction}</span>
                                                    <span style={{ color: 'var(--text-muted)' }}>{config.voltage}</span>
                                                    <span style={{ color: 'var(--text)', fontWeight: '500' }}>{config.description}</span>
                                                </div>
                                            ) : (
                                                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1.5rem', alignItems: 'center', padding: '0.75rem', borderBottom: '1px solid rgba(var(--primary-rgb), 0.1)' }}>
                                                    <span style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '0.9rem' }}>{config.pin}</span>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span style={{ color: 'var(--text)', fontWeight: '700', fontSize: '0.95rem' }}>{config.component}</span>
                                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{config.note}</span>
                                                    </div>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                ) : (
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.1rem', whiteSpace: 'pre-line', fontWeight: '600' }}>{project.pin_config || "Detailed peripheral mapping initialized..."}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <SectionTitle icon={Terminal} title="Source Code" />
                            <div style={{ background: '#0a0f1d', padding: '2rem', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden', border: '1px solid #1e293b', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40px', background: '#161e31', display: 'flex', alignItems: 'center', padding: '0 1.5rem', gap: '0.75rem', justifyContent: 'space-between', borderBottom: '1px solid #2d3b55' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                                    </div>
                                    <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: '900', letterSpacing: '0.1em' }}>MASTER_SKETCH.INO</span>
                                </div>
                                <pre style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '2.5rem', overflowX: 'auto', fontFamily: '"Fira Code", "JetBrains Mono", monospace', lineHeight: '1.8' }}>
                                    <code style={{ color: '#e2e8f0' }}>{project.code || "// Firmware stream initializing..."}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industrial Context Section */}
                {(project.industrial_use || project.bom_cost) && (
                    <div style={{ marginBottom: '5rem' }}>
                        <SectionTitle icon={Building2} title="Industrial Context" />
                        <div className="grid grid-2" style={{ gap: '2rem' }}>
                            {project.industrial_use && (
                                <div className="glass-plus" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--border)', background: 'rgba(var(--primary-rgb), 0.03)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        <Building2 size={16} /> Industrial Application
                                    </div>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', lineHeight: '1.6' }}>{project.industrial_use}</p>
                                </div>
                            )}
                            {project.bom_cost && (
                                <div className="glass-plus" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--border)', background: 'rgba(var(--accent-rgb), 0.03)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        <Wallet size={16} /> BOM Cost Estimate
                                    </div>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', lineHeight: '1.6' }}>{project.bom_cost}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Full Width Sections */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                    <div className="grid grid-2" style={{ gap: '4rem' }}>
                        <div>
                            <SectionTitle icon={CheckCircle} title="Strategic Advantages" />
                            <div className="glass" style={{ padding: '2.5rem', borderRadius: '2rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.1rem', whiteSpace: 'pre-line', fontWeight: '500' }}>{project.advantages}</p>
                            </div>
                        </div>
                        <div>
                            <SectionTitle icon={AlertCircle} title="Operational Constraints" />
                            <div className="glass" style={{ padding: '2.5rem', borderRadius: '2rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.1rem', whiteSpace: 'pre-line', fontWeight: '500' }}>{project.disadvantages}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-2" style={{ gap: '4rem' }}>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="glass-plus"
                            style={{ padding: '3.5rem', borderRadius: '2rem', background: 'var(--primary-gradient)', color: 'white' }}
                        >
                            <SectionTitle icon={Rocket} title="System Output" />
                            <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '2', fontSize: '1.2rem', whiteSpace: 'pre-line', fontWeight: '600' }}>{project.usage || "Monitoring system behavior and serial telemetry logs..."}</p>
                        </motion.div>
                        <div className="glass-plus" style={{ padding: '3.5rem', borderRadius: '2rem', border: '1px solid var(--border)', background: 'var(--surface)' }}>
                            <SectionTitle icon={Globe} title="Applications" />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--primary)', textTransform: 'uppercase' }}>Industrial Perspective</h4>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.1rem', fontWeight: '500' }}>{project.industrial_use || "This architecture is foundational for automated monitoring and predictive maintenance systems."}</p>
                                </div>
                                <div style={{ borderLeft: '4px solid var(--secondary)', paddingLeft: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--secondary)', textTransform: 'uppercase' }}>Project Mastery</h4>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.1rem', fontWeight: '500' }}>Essential module for understanding {(project.tech || []).join(' & ')} integration and real-time state management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Navigation Hint (Briefly overlays or sits below) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    textAlign: 'center',
                    marginTop: '2rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}
                className="mobile-flex"
            >
                <ChevronLeft size={16} className="animate-pulse" />
                <span>Swipe left/right to browse more projects</span>
                <ChevronRight size={16} className="animate-pulse" />
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
@media print {
                    .nav-container, .btn, .footer, .ai-assistant-fab, .back-to-top { display: none!important; }
                    body { background: white!important; color: black!important; }
                    .glass-plus, .glass {
                        background: white!important;
                        border: 1px solid #ddd!important;
                        box-shadow: none!important;
                        color: black!important;
                    }
                    .text-gradient {
                        background: none!important;
                        -webkit-text-fill-color: black!important;
                        color: black!important;
                        font-weight: 900!important;
                    }
                    .badge { border: 1px solid #000!important; color: black!important; }
                    .container { width: 100%!important; max-width: 100%!important; padding: 0!important; }
                    pre { border: 1px solid #ddd!important; background: #f9f9f9!important; color: #333!important; }
                    code { color: #333!important; }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .4; }
}
`}} />
        </div>
    );
}
