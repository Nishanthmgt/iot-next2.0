import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Cpu, Cloud, Smartphone, ChevronRight, Terminal, Globe, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function SetupGuides() {
    const [activeTab, setActiveTab] = useState('arduino');

    const guides = {
        arduino: {
            title: "Arduino IDE 2.0",
            icon: <Cpu size={32} />,
            desc: "The universal editor for every Arduino board. Perfect for coding, debugging, and uploading to hardware.",
            steps: [
                "Download Arduino IDE from the official website (arduino.cc).",
                "Install the software and launch it.",
                "Select your Board: Tools > Board > Arduino Uno (or your board).",
                "Connect your hardware via USB and select the Port.",
                "Write your code and click 'Upload' (Arrow icon)."
            ],
            link: "https://www.arduino.cc/en/software"
        },
        blynk: {
            title: "Blynk IoT App",
            icon: <Smartphone size={32} />,
            desc: "Build professional mobile apps for your IoT devices without writing any mobile-side code.",
            steps: [
                "Create an account on the Blynk Cloud Console.",
                "Create a New Template and define your DataStreams.",
                "Download the Blynk IoT app on your iOS or Android device.",
                "Use the 'Blynk.Edgent' examples to connect your ESP32/ESP8266.",
                "Copy your Auth Token and paste it into your Arduino sketch."
            ],
            link: "https://blynk.io/"
        },
        cloud: {
            title: "Arduino IoT Cloud",
            icon: <Cloud size={32} />,
            desc: "Securely connect devices, store data, and create web dashboards with zero server configuration.",
            steps: [
                "Go to the Arduino Cloud website and sign in.",
                "Install the 'Arduino Create Agent' on your PC.",
                "Register your device (ESP32/MKR) in the 'Devices' tab.",
                "Define your variables (Things) and let Cloud auto-generate the code.",
                "Build a Web Dashboard using the built-in widget editor."
            ],
            link: "https://cloud.arduino.cc/"
        }
    };

    return (
        <section className="container" id="setup" style={{ padding: '6rem 0' }}>
            <Helmet>
                <title>Environment Setup & Installation | Getting Started with IoT | IoTNext</title>
                <meta name="description" content="Step-by-step guides to setting up your IoT development environment. Install Arduino IDE, Blynk IoT, and Arduino Cloud with ease." />
                <meta property="og:title" content="IoT Setup & Installation Guides - IoTNext" />
                <meta property="og:description" content="Get your development environment ready in minutes with our technical setup guides." />
                <link rel="canonical" href="https://iotnext.store/setup" />
            </Helmet>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Installation & Setup</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Get your development environment ready in minutes.</p>
            </div>

            <div className="glass" style={{ borderRadius: '2.5rem', overflow: 'hidden', padding: '0.5rem' }}>
                <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
                    {Object.keys(guides).map(key => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            style={{
                                flex: 1,
                                padding: '1.5rem',
                                background: activeTab === key ? 'var(--surface)' : 'transparent',
                                color: activeTab === key ? 'var(--primary)' : 'var(--text-muted)',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                borderBottom: activeTab === key ? '3px solid var(--primary)' : 'none',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {guides[key].icon}
                            <span className="hide-mobile">{guides[key].title}</span>
                        </button>
                    ))}
                </div>

                <div style={{ padding: '3rem' }} className="guide-content">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{guides[activeTab].title} Setup</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                                    {guides[activeTab].desc}
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    {guides[activeTab].steps.map((step, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                            <div style={{ background: 'var(--primary)', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>
                                                {i + 1}
                                            </div>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass" style={{ padding: '2.5rem', borderRadius: '2rem', background: 'var(--surface-hover)', textAlign: 'center' }}>
                                <div style={{ width: '80px', height: '80px', background: 'rgba(var(--primary-rgb), 0.1)', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                                    <Download size={40} />
                                </div>
                                <h4 style={{ marginBottom: '1rem' }}>Official Installer</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>
                                    Download the latest version directly from the vendor to ensure security and compatibility.
                                </p>
                                <a href={guides[activeTab].link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                                    Go to Download <Globe size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @media (max-width: 820px) {
          .hide-mobile { display: none; }
          .guide-content { padding: 1.5rem !important; }
        }
      `}} />
        </section>
    );
}