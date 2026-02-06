"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function PremiumCTA() {
    return (
        <div style={{ margin: '40px 0', width: '100%' }}>
            <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                borderRadius: '24px',
                padding: '32px 48px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '40px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Background Element */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }} />

                {/* Left: Visual Asset */}
                <div style={{ flexShrink: 0, position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        width: '240px',
                        height: '160px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 12px 24px -8px rgba(0,0,0,0.15)',
                        border: '4px solid white',
                        background: '#f1f5f9'
                    }}>
                        <img
                            src="/assets/trade_dashboard_visual.png"
                            alt="Export Genius Dashboard"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>

                {/* Center: Message */}
                <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                    <h3 style={{
                        fontSize: '26px',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: '12px',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2'
                    }}>
                        Join <span style={{ color: '#2563eb' }}>Export Genius</span> Today
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        color: '#64748b',
                        lineHeight: '1.6',
                        fontWeight: 500,
                        maxWidth: '540px'
                    }}>
                        Access billions of trade records, global market trends, and competitive intelligence.
                        Empower your business with data-driven insights from 195+ countries.
                    </p>
                </div>

                {/* Right: Action */}
                <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                    <a
                        href="https://dashboard.exportgenius.in/sign-up"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: '#2563eb',
                            color: 'white',
                            padding: '16px 36px',
                            borderRadius: '100px',
                            fontWeight: 700,
                            fontSize: '16px',
                            textDecoration: 'none',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(37, 99, 235, 0.4)';
                            e.currentTarget.style.background = '#1d4ed8';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.3)';
                            e.currentTarget.style.background = '#2563eb';
                        }}
                    >
                        Get Started <ChevronRight size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}
