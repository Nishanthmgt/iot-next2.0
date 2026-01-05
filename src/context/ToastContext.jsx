import React, { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'success', duration = 3000) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, message, type, duration }]);

        if (duration !== Infinity) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }
        return id;
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <div style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                pointerEvents: 'none'
            }}>
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <ToastItem key={toast.id} {...toast} onRemove={() => removeToast(toast.id)} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ message, type, onRemove }) => {
    const icons = {
        success: <CheckCircle size={18} color="#10b981" />,
        error: <AlertCircle size={18} color="#ef4444" />,
        info: <Info size={18} color="#3b82f6" />
    };

    const colors = {
        success: 'rgba(16, 185, 129, 0.1)',
        error: 'rgba(239, 68, 68, 0.1)',
        info: 'rgba(59, 130, 246, 0.1)'
    };

    const borderColors = {
        success: 'rgba(16, 185, 129, 0.2)',
        error: 'rgba(239, 68, 68, 0.2)',
        info: 'rgba(59, 130, 246, 0.2)'
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            style={{
                pointerEvents: 'auto',
                background: 'var(--surface)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${borderColors[type]}`,
                padding: '0.75rem 1rem',
                borderRadius: '1rem',
                boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                minWidth: '280px',
                maxWidth: '400px'
            }}
        >
            <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '0.6rem',
                background: colors[type],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {icons[type]}
            </div>
            <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: '600', color: 'var(--text)' }}>
                    {message}
                </p>
            </div>
            <button
                onClick={onRemove}
                style={{
                    background: 'none',
                    border: 'none',
                    padding: '0.25rem',
                    cursor: 'pointer',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '0.4rem',
                    transition: 'var(--transition)'
                }}
                className="hover-surface"
            >
                <X size={14} />
            </button>
        </motion.div>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
