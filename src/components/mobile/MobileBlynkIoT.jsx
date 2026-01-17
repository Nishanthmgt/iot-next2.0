import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu, Cloud, Smartphone, Code, ChevronRight, ExternalLink,
    Copy, Download, Layout, Activity, Terminal, Zap, CheckCircle2
} from 'lucide-react';

const MobileBlynkIoT = ({ setView }) => {
    const [activeTab, setActiveTab] = useState('getting-started');

    const tabs = [
        { id: 'getting-started', label: 'Start', icon: <Cpu size={16} /> },
        { id: 'console-setup', label: 'Console', icon: <Cloud size={16} /> },
        { id: 'app-config', label: 'App', icon: <Smartphone size={16} /> },
        { id: 'sample-code', label: 'Code', icon: <Code size={16} /> }
    ];

    const sampleCode = `
#define BLYNK_TEMPLATE_ID "TMPLxxxxxx"
#define BLYNK_DEVICE_NAME "Device"
#define BLYNK_AUTH_TOKEN "YourAuthToken"

#define BLYNK_PRINT Serial

#include <WiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleEsp32.h>

char auth[] = BLYNK_AUTH_TOKEN;
char ssid[] = "YourNetworkName";
char pass[] = "YourPassword";

BlynkTimer timer;

void myTimerEvent()
{
  Blynk.virtualWrite(V5, millis() / 1000);
}

void setup()
{
  Serial.begin(115200);
  Blynk.begin(auth, ssid, pass);
  timer.setInterval(1000L, myTimerEvent);
}

void loop()
{
  Blynk.run();
  timer.run();
}
`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(sampleCode);
        // Toast logic would go here
    };

    return (
        <div style={{ paddingBottom: '80px', minHeight: '100vh', background: 'var(--background)' }}>
            {/* Sticky Header */}
            <div style={{
                position: 'sticky',
                top: 0,
                zIndex: 40,
                background: 'rgba(var(--background-rgb), 0.9)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--border)',
                padding: '1rem 1rem 0.5rem 1rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-0.5px' }}>
                            Blynk <span style={{ color: '#10b981' }}>IoT</span>
                        </h1>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                            Cloud Deployment Guide
                        </p>
                    </div>
                </div>

                {/* Scrollable Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '0.75rem',
                    overflowX: 'auto',
                    paddingBottom: '0.5rem',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '0.6rem 1rem',
                                borderRadius: '2rem',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                background: activeTab === tab.id ? '#10b981' : 'var(--surface)',
                                color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                                border: activeTab === tab.id ? 'none' : '1px solid var(--border)',
                                whiteSpace: 'nowrap',
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.2s'
                            }}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div style={{ padding: '1rem' }}>
                <AnimatePresence mode="wait">
                    {activeTab === 'getting-started' && (
                        <motion.div
                            key="getting-started"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#10b981', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                                    Step 1: Preparation
                                </div>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
                                    Environment Setup
                                </h2>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                    Get your Arduino IDE ready for IoT development with these essential steps.
                                </p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { title: "Install Library", desc: "Search 'Blynk' in Library Manager" },
                                    { title: "Update Drivers", desc: "Update ESP32/ESP8266 board managers" },
                                    { title: "Get Token", desc: "Keep your Auth Token secure" }
                                ].map((step, i) => (
                                    <div key={i} style={{
                                        background: 'var(--surface)',
                                        padding: '1.25rem',
                                        borderRadius: '1.25rem',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    }}>
                                        <div style={{
                                            width: 32, height: 32, borderRadius: '50%',
                                            background: 'rgba(16, 185, 129, 0.1)', color: '#10b981',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontWeight: '800', flexShrink: 0
                                        }}>{i + 1}</div>
                                        <div>
                                            <h3 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '0.25rem' }}>{step.title}</h3>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--surface)', borderRadius: '1.5rem', border: '1px solid var(--border)', textAlign: 'center' }}>
                                <Download size={32} color="#10b981" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>Official Library</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                    Required for all Blynk projects.
                                </p>
                                <a href="https://github.com/blynkkk/blynk-library" target="_blank" rel="noopener noreferrer"
                                    style={{
                                        display: 'block',
                                        padding: '0.8rem',
                                        background: '#10b981',
                                        color: 'white',
                                        borderRadius: '1rem',
                                        fontWeight: '700',
                                        textDecoration: 'none'
                                    }}>
                                    Download from GitHub
                                </a>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'console-setup' && (
                        <motion.div
                            key="console-setup"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#10b981', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                                    Step 2: Cloud
                                </div>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
                                    Blynk.Cloud
                                </h2>
                            </div>

                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {[
                                    { title: "Create Template", icon: <Layout size={20} />, desc: "Define hardware & connection type" },
                                    { title: "DataStreams", icon: <Activity size={20} />, desc: "Setup Virtual Pins (V1, V2...)" },
                                    { title: "Web Dashboard", icon: <Terminal size={20} />, desc: "Drag & text widgets" }
                                ].map((item, i) => (
                                    <div key={i} style={{
                                        background: 'var(--surface)',
                                        padding: '1.25rem',
                                        borderRadius: '1.25rem',
                                        border: '1px solid var(--border)'
                                    }}>
                                        <div style={{ color: '#10b981', marginBottom: '0.75rem' }}>{item.icon}</div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>{item.title}</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <a href="https://blynk.cloud" target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    marginTop: '2rem',
                                    padding: '1rem',
                                    background: 'var(--surface)',
                                    color: 'var(--text)',
                                    borderRadius: '1rem',
                                    fontWeight: '700',
                                    textDecoration: 'none',
                                    border: '1px solid var(--border)'
                                }}>
                                Open Console <ExternalLink size={16} />
                            </a>
                        </motion.div>
                    )}

                    {activeTab === 'app-config' && (
                        <motion.div
                            key="app-config"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#10b981', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                                    Step 3: Mobile
                                </div>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
                                    App Setup
                                </h2>
                            </div>

                            <div style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: 0, margin: 0, listStyle: 'none' }}>
                                    {[
                                        "Download 'Blynk IoT' App",
                                        "Login with same credentials",
                                        "Enable Developer Mode",
                                        "Add Widgets linked to V-Pins"
                                    ].map((text, i) => (
                                        <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                            <CheckCircle2 color="#10b981" size={20} flexShrink={0} />
                                            <span style={{ fontSize: '1rem', fontWeight: 600 }}>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                <Smartphone size={64} color="var(--border)" style={{ opacity: 0.5 }} />
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                                    Available on iOS & Android
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'sample-code' && (
                        <motion.div
                            key="sample-code"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: '900' }}>Code</h2>
                                <button
                                    onClick={copyToClipboard}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '0.75rem',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: '#10b981',
                                        border: 'none',
                                        fontWeight: '700',
                                        fontSize: '0.85rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <Copy size={16} /> Copy
                                </button>
                            </div>

                            <div style={{
                                background: '#1e293b',
                                borderRadius: '1rem',
                                padding: '1rem',
                                overflowX: 'auto',
                                border: '1px solid var(--border)',
                                marginBottom: '2rem'
                            }}>
                                <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '0.85rem', lineHeight: '1.5', fontFamily: 'monospace' }}>
                                    {sampleCode}
                                </pre>
                            </div>

                            <div style={{ padding: '1rem', borderRadius: '1rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#10b981', fontWeight: '800' }}>
                                    <Zap size={18} /> Pro Tip
                                </h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    Avoid using <code>delay()</code> inside the loop. It blocks the processor and disconnects WiFi. Use <code>BlynkTimer</code> instead.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MobileBlynkIoT;
