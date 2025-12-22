import React from 'react';
import { motion } from 'framer-motion';
import { beginnerExplanations } from '../data/projects';
import { BookOpen, HelpCircle, AlertCircle, Lightbulb, ChevronDown } from 'lucide-react';

export default function Basics() {
    const commonMistakes = [
        { title: "Power Mismatch", desc: "Using 5V on 3.3V sensors can permanently fry them. Always verify GPIO levels." },
        { title: "Floating Inputs", desc: "Missing pull-up/down resistors cause unpredictable 'ghost' triggers on buttons." },
        { title: "Resistor-less LEDs", desc: "Driving an LED without a current-limiting resistor leads to short-circuiting the MCU." },
        { title: "Common Ground", desc: "Multiple power sources (External 12V + USB) must share a common GND connection." },
        { title: "Loose Wiring", desc: "Oxidized jumper wires or poor breadboard connections are the #1 source of 'magic' bugs." }
    ];

    return (
        <section className="container" id="basics" style={{ paddingBottom: '8rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>IoT Fundamentals</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    Everything you need to know before you write your first line of code.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '4rem' }} className="basics-grid">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    {beginnerExplanations.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{ padding: '2.5rem', borderRadius: '2rem', border: '1px solid var(--border)' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ background: 'var(--primary)', color: 'white', padding: '0.75rem', borderRadius: '1rem' }}>
                                    <BookOpen size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: '700' }}>{item.title}</h3>
                            </div>

                            <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                {item.content}
                            </p>

                            <div style={{ background: 'var(--surface-hover)', padding: '1.5rem', borderRadius: '1rem', borderLeft: '4px solid var(--primary)' }}>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                                    <strong>Deep Dive:</strong> {item.deepDive}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <div className="glass" style={{ padding: '2rem', borderRadius: '2rem', borderLeft: '6px solid var(--accent)', border: '1px solid var(--border)', borderLeftColor: 'var(--accent)' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                            <AlertCircle size={24} className="text-accent" /> Critical Pitfalls
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {commonMistakes.map((m, i) => (
                                <div key={i}>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--text)' }}>{m.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass"
                        style={{ padding: '2rem', borderRadius: '2rem', background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)', color: 'white' }}
                    >
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontSize: '1.4rem' }}>
                            <Lightbulb size={24} /> Engineer's Tip
                        </h3>
                        <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.9 }}>
                            "Never trust a circuit you haven't measured with a multimeter. Oscilloscopes are for fine-tuning; Multi-meters are for staying alive."
                        </p>
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @media (max-width: 1100px) {
          .basics-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
        </section>
    );
}