"use client";
import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, MessageCircle, ShieldCheck } from 'lucide-react';

export default function FinalCTASection() {
    return (
        <section style={{
            padding: '80px 20px',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
            fontFamily: 'var(--font-inter)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1.2fr) 0.8fr',
                gap: '80px',
                alignItems: 'center'
            }}>
                {/* Left: Text Content */}
                <div>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(59, 130, 246, 0.2)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        color: '#93c5fd',
                        fontSize: '13px',
                        fontWeight: 700,
                        marginBottom: '32px',
                        backdropFilter: 'blur(4px)'
                    }}>
                        <TrendingUp size={16} />
                        VIETNAM TRADE INTELLIGENCE PLATFORM
                    </div>

                    <h2 style={{
                        fontSize: '48px',
                        fontWeight: 800,
                        marginBottom: '24px',
                        lineHeight: 1.1,
                        background: 'linear-gradient(to right, #ffffff, #93c5fd)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Ready to Dominate the Vietnam Market?
                    </h2>

                    <p style={{
                        fontSize: '18px',
                        lineHeight: 1.6,
                        color: '#cbd5e1',
                        marginBottom: '40px',
                        maxWidth: '600px'
                    }}>
                        Get immediate access to 368M+ shipment records. Verify suppliers, track competitors, and uncover high-growth opportunities with the most accurate trade data available.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <a href="https://dashboard.exportgenius.in/sign-up" target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: '#3b82f6',
                            color: 'white',
                            padding: '16px 36px',
                            borderRadius: '100px',
                            fontWeight: 700,
                            fontSize: '16px',
                            textDecoration: 'none',
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
                            transition: 'all 0.3s ease',
                            border: '1px solid #3b82f6'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.6)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.4)';
                            }}
                        >
                            Start A Free Trial
                            <ArrowRight size={20} />
                        </a>

                        <a href="https://www.exportgenius.in/company/contact-us.php" target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: 'white',
                            padding: '16px 36px',
                            borderRadius: '100px',
                            fontWeight: 600,
                            fontSize: '16px',
                            textDecoration: 'none',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.borderColor = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            <MessageCircle size={20} />
                            Ask to Expert
                        </a>
                    </div>

                    <div style={{ marginTop: '48px', display: 'flex', gap: '32px', color: '#94a3b8', fontSize: '14px', fontWeight: 600 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle2 size={18} color="#10b981" /> Daily Updates
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle2 size={18} color="#10b981" /> 100% Verified Sources
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle2 size={18} color="#10b981" /> Instant Access
                        </div>
                    </div>
                </div>

                {/* Right: Abstract Card Representation */}
                <div style={{ position: 'relative' }}>
                    {/* Floating Cards Effect */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '32px',
                        backdropFilter: 'blur(10px)',
                        transform: 'rotate(-3deg) translateX(20px)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <div style={{ width: '40px', height: '40px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ShieldCheck size={20} color="#60a5fa" />
                            </div>
                            <div style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '100px' }}>
                                +24.5% Growth
                            </div>
                        </div>
                        <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>Top Competitor Analysis</div>
                        <div style={{ fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: '24px' }}>Verify Suppliers Instantly</div>

                        <div style={{ display: 'grid', gap: '12px' }}>
                            {[1, 2, 3].map((i) => (
                                <div key={i} style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    padding: '16px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px'
                                }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 1 ? '#ef4444' : i === 2 ? '#fbbf24' : '#10b981' }} />
                                    <div style={{ flex: 1, height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px' }} />
                                    <div style={{ width: '20%', height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
