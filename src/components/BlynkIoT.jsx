import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Smartphone,
    Cpu,
    Cloud,
    Zap,
    Code,
    ChevronRight,
    ExternalLink,
    Terminal,
    Layout,
    Activity,
    CheckCircle2,
    Copy,
    Download
} from 'lucide-react';

const BlynkIoT = () => {
    const [activeTab, setActiveTab] = useState('getting-started');

    const tabs = [
        { id: 'getting-started', label: '1. Getting Started', icon: <Cpu size={18} /> },
        { id: 'console-setup', label: '2. Console Setup', icon: <Cloud size={18} /> },
        { id: 'app-config', label: '3. Mobile App', icon: <Smartphone size={18} /> },
        { id: 'sample-code', label: '4. Sample Code', icon: <Code size={18} /> }
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

// This function sends Arduino's up time every second to Virtual Pin (5).
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
        // You could add a toast notification here if available
    };

    return (
        <div className="blynk-container" style={{ padding: '6rem 0' }}>
            <div className="container">
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="badge badge-advanced" style={{ marginBottom: '1rem' }}>Expert Guide</span>
                        <h1 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '1.5rem' }}>
                            Master <span className="text-gradient">Blynk IoT</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                            The most popular IoT platform to connect your hardware to the cloud and build professional mobile apps in minutes.
                        </p>
                    </motion.div>
                </div>

                {/* Main Content Area */}
                <div className="glass" style={{ borderRadius: '2.5rem', overflow: 'hidden', border: '1px solid var(--border)' }}>
                    {/* Tab Navigation */}
                    <div style={{
                        display: 'flex',
                        overflowX: 'auto',
                        background: 'var(--surface-hover)',
                        borderBottom: '1px solid var(--border)',
                        padding: '0.5rem'
                    }}>
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    flex: 1,
                                    minWidth: '180px',
                                    padding: '1.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    background: activeTab === tab.id ? 'var(--surface)' : 'transparent',
                                    color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)',
                                    fontWeight: '700',
                                    borderRadius: '1rem',
                                    borderBottom: activeTab === tab.id ? '3px solid var(--primary)' : '3px solid transparent',
                                    transition: 'all 0.3s ease',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div style={{ padding: '3rem' }}>
                        <AnimatePresence mode="wait">
                            {activeTab === 'getting-started' && (
                                <motion.div
                                    key="getting-started"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                                        <div>
                                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Environmental Prep</h2>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                                                Before writing a single line of code, ensure your development environment is ready for Blynk 2.0.
                                            </p>

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                                {[
                                                    { title: "Install Blynk Library", desc: "Open Arduino IDE -> Library Manager -> Search 'Blynk' -> Install latest." },
                                                    { title: "WiFi Driver Setup", desc: "Ensure your board (ESP32/ESP8266) cores are updated to latest versions." },
                                                    { title: "Secure Auth Token", desc: "Always keep your Auth Token private to prevent unauthorized access." }
                                                ].map((step, i) => (
                                                    <div key={i} style={{ display: 'flex', gap: '1.25rem' }}>
                                                        <div style={{
                                                            width: '32px', height: '32px', borderRadius: '50%',
                                                            background: 'var(--primary)', color: 'white',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            fontWeight: 'bold', flexShrink: 0
                                                        }}>{i + 1}</div>
                                                        <div>
                                                            <h4 style={{ marginBottom: '0.25rem' }}>{step.title}</h4>
                                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="glass-plus" style={{ padding: '2rem', borderRadius: '2rem', textAlign: 'center' }}>
                                            <div style={{
                                                width: '80px', height: '80px', borderRadius: '20px',
                                                background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                margin: '0 auto 1.5rem'
                                            }}>
                                                <Download size={40} />
                                            </div>
                                            <h3>Blynk Library</h3>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                                Download the official Blynk library to get all necessary headers and examples.
                                            </p>
                                            <a href="https://github.com/blynkkk/blynk-library" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                                                Github Repo <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'console-setup' && (
                                <motion.div
                                    key="console-setup"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Blynk Cloud Console</h2>
                                    <div className="grid grid-3" style={{ gap: '2rem' }}>
                                        {[
                                            {
                                                title: "1. Create Template",
                                                icon: <Layout />,
                                                desc: "Define your hardware (ESP32/ESP8266) and connection type (WiFi)."
                                            },
                                            {
                                                title: "2. DataStreams",
                                                icon: <Activity />,
                                                desc: "Create Virtual Pins to send and receive data between hardware and app."
                                            },
                                            {
                                                title: "3. Web Dashboard",
                                                icon: <Terminal />,
                                                desc: "Drag and drop widgets to visualize data on your web browser."
                                            }
                                        ].map((item, i) => (
                                            <div key={i} className="glass-plus" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
                                                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{item.icon}</div>
                                                <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                                        <a href="https://blynk.cloud" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                            Open Blynk Console <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'app-config' && (
                                <motion.div
                                    key="app-config"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div className="glass-plus" style={{
                                                aspectRatio: '9/19',
                                                width: '280px',
                                                margin: '0 auto',
                                                borderRadius: '3rem',
                                                border: '8px solid var(--surface-hover)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                padding: '1.5rem',
                                                gap: '1rem'
                                            }}>
                                                <div style={{ width: '60px', height: '6px', background: 'var(--border)', borderRadius: '3px', alignSelf: 'center', marginBottom: '1rem' }}></div>
                                                <div className="glass" style={{ height: '100px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Activity size={32} color="var(--primary)" />
                                                </div>
                                                <div className="glass" style={{ height: '40px', borderRadius: '0.5rem' }}></div>
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                                    <div className="glass" style={{ height: '60px', borderRadius: '0.5rem' }}></div>
                                                    <div className="glass" style={{ height: '60px', borderRadius: '0.5rem' }}></div>
                                                </div>
                                                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-around' }}>
                                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface-hover)' }}></div>
                                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface-hover)' }}></div>
                                                </div>
                                            </div>
                                            <div className="global-glow glow-1" style={{ width: '200px', height: '200px', top: '20%', left: '20%' }}></div>
                                        </div>
                                        <div>
                                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Mobile App Builder</h2>
                                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                                {[
                                                    "Download Blynk IoT from App Store or Play Store.",
                                                    "Login with the same credentials as the Console.",
                                                    "Select your Template and enter Developer Mode.",
                                                    "Add widgets (Buttons, Sliders, Gauges) and link them to DataStreams.",
                                                    "Control and Monitor your device instantly."
                                                ].map((text, i) => (
                                                    <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                        <CheckCircle2 color="var(--primary)" size={20} />
                                                        <span style={{ fontSize: '1.1rem' }}>{text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'sample-code' && (
                                <motion.div
                                    key="sample-code"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                        <h2 style={{ fontSize: '2.5rem' }}>ESP32 Basic Sketch</h2>
                                        <button
                                            onClick={copyToClipboard}
                                            className="btn btn-outline"
                                            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                                        >
                                            <Copy size={16} /> Copy Code
                                        </button>
                                    </div>
                                    <div className="glass" style={{
                                        background: '#0d1117',
                                        borderRadius: '1.5rem',
                                        padding: '1.5rem',
                                        maxHeight: '500px',
                                        overflowY: 'auto',
                                        fontFamily: 'monospace'
                                    }}>
                                        <pre style={{ margin: 0, color: '#e6edf3', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                            {sampleCode}
                                        </pre>
                                    </div>
                                    <div className="glass-plus" style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '1rem', background: 'rgba(var(--primary-rgb), 0.05)' }}>
                                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <Zap size={18} color="var(--primary)" /> Developer Tip
                                        </h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                            Always use the <code>BlynkTimer</code> instead of <code>delay()</code> in your <code>loop()</code>. Using delays will disconnect your device from the Blynk server.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .blynk-container {
                    min-height: 100vh;
                    background: radial-gradient(circle at top right, rgba(var(--primary-rgb), 0.05), transparent 40%),
                                radial-gradient(circle at bottom left, rgba(var(--secondary-rgb), 0.05), transparent 40%);
                }
                @media (max-width: 768px) {
                    .guide-content { padding: 1.5rem !important; }
                }
            `}} />
        </div>
    );
};

export default BlynkIoT;
