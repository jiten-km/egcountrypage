"use client";
import React from 'react';
import { Mail, Phone, MessageCircle, Play, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

export default function CTASection() {
    return (
        <section style={{ padding: '40px 0', background: 'transparent', fontFamily: 'var(--font-inter)' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 340px',
                    gap: '24px',
                    alignItems: 'stretch'
                }}>

                    {/* Left Panel: Main CTA */}
                    <div style={{
                        background: 'white',
                        borderRadius: '24px',
                        padding: '48px',
                        border: '1px solid #f1f5f9',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.03)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '40px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ maxWidth: '600px', zIndex: 1 }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: '#eff6ff',
                                padding: '6px 16px',
                                borderRadius: '100px',
                                color: '#2563eb',
                                fontSize: '13px',
                                fontWeight: 700,
                                marginBottom: '24px',
                                border: '1px solid #dbeafe'
                            }}>
                                <CheckCircle2 size={16} />
                                <span>100% Authentic Customs Data</span>
                            </div>

                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: 800,
                                color: '#0f172a',
                                marginBottom: '20px',
                                lineHeight: 1.2,
                                letterSpacing: '-0.02em'
                            }}>
                                Unlock Vietnam's Import Market Potential
                            </h2>

                            <p style={{
                                fontSize: '17px',
                                color: '#64748b',
                                lineHeight: 1.6,
                                marginBottom: '40px'
                            }}>
                                Access <strong style={{ color: '#0f172a' }}>76M+ real-time shipment records</strong> to find reliable suppliers, track competitor activities, and identify profitable product niches with ease.
                            </p>

                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <button style={{
                                    background: 'linear-gradient(135deg, #2563eb 0%, #174ed8 100%)',
                                    color: 'white',
                                    padding: '16px 36px',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)',
                                    transition: 'transform 0.2s'
                                }}>
                                    Explore 7 Days Free Trial Now
                                    <ArrowRight size={20} />
                                </button>

                                <button style={{
                                    background: '#fff7ed',
                                    color: '#c2410c',
                                    padding: '16px 36px',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    transition: 'background 0.2s'
                                }}>
                                    <Calendar size={20} />
                                    Book a Demo
                                </button>
                            </div>
                        </div>

                        {/* Video Thumbnail Section */}
                        <div style={{
                            flexShrink: 0,
                            width: '300px',
                            height: '220px',
                            borderRadius: '20px',
                            position: 'relative',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                alt="Platform Demo"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.1), rgba(15, 23, 42, 0.7))',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px'
                            }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    background: 'rgba(255, 255, 255, 0.25)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backdropFilter: 'blur(12px)',
                                    border: '3px solid rgba(255, 255, 255, 0.8)',
                                    marginBottom: '16px',
                                    cursor: 'pointer'
                                }}>
                                    <Play size={28} fill="white" color="white" style={{ marginLeft: '4px' }} />
                                </div>
                                <div style={{ color: 'white', fontWeight: 800, fontSize: '15px' }}>Platform Demo</div>
                                <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', marginTop: '4px' }}>Watch how it works (1:20)</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Representative Card */}
                    <div style={{
                        background: 'white',
                        borderRadius: '24px',
                        padding: '32px',
                        border: '1px solid #f1f5f9',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                padding: '3px',
                                background: 'linear-gradient(135deg, #2563eb, #93c5fd)'
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
                                    alt="Liam Mark"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '2px solid white' }}
                                />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: 0 }}>Liam Mark</h3>
                                <p style={{ fontSize: '13px', color: '#64748b', margin: '2px 0 0' }}>Sr. Business Representative</p>
                            </div>
                        </div>

                        <div style={{ height: '1px', background: '#f1f5f9' }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <a href="mailto:info@exportgenius.in" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#2563eb', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                                <Mail size={18} />
                                info@exportgenius.in
                            </a>
                            <a href="tel:+918003800357" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#0f172a', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                                <Phone size={18} />
                                +91 8003 8003 57
                            </a>
                            <a href="https://wa.me/message/OKCCKPF3TCXXE1" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#10b981', textDecoration: 'none', fontSize: '14px', fontWeight: 700 }}>
                                <MessageCircle size={18} />
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Scanner Area */}
                        <div style={{
                            marginTop: 'auto',
                            background: '#f8fafc',
                            borderRadius: '16px',
                            padding: '24px',
                            textAlign: 'center',
                            border: '1px solid #f1f5f9'
                        }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                margin: '0 auto 12px',
                                background: 'white',
                                padding: '12px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                            }}>
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://exportgenius.in"
                                    alt="QR Code"
                                    style={{ width: '100%', height: '100%', opacity: 0.8 }}
                                />
                            </div>
                            <span style={{ fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scan to Contact</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
