import React from 'react';
import {
    CheckCircle2,
    PlayCircle,
    Calendar,
    ArrowRight,
    Mail,
    Phone,
    MessageCircle,
    QrCode,
    Verified
} from 'lucide-react';

export default function ProfileMiddleCTA() {
    return (
        <section style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px',
            gap: '24px',
            margin: '0 0 64px 0',
            fontFamily: 'var(--font-inter)'
        }}>
            {/* Left Strategic Card */}
            <div style={{
                background: 'white',
                borderRadius: '24px',
                padding: '48px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                gap: '48px',
                alignItems: 'center',
                boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ flex: 1, zIndex: 1 }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                        color: '#2563eb',
                        padding: '8px 18px',
                        borderRadius: '100px',
                        fontSize: '12px',
                        fontWeight: 800,
                        marginBottom: '28px',
                        border: '1px solid rgba(37, 99, 235, 0.15)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        <Verified size={14} /> 100% Verified Data
                    </div>

                    <h2 style={{
                        fontSize: '38px',
                        fontWeight: 900,
                        color: '#0f172a',
                        lineHeight: 1.15,
                        marginBottom: '20px',
                        letterSpacing: '-0.03em'
                    }}>
                        Unlock Samsung's Strategic <br />
                        <span style={{ background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Trade Blueprint</span>
                    </h2>

                    <p style={{
                        fontSize: '17px',
                        color: '#64748b',
                        lineHeight: '1.7',
                        marginBottom: '36px',
                        maxWidth: '520px'
                    }}>
                        Gain unrestricted access to <strong style={{ color: '#0f172a' }}>180,000+ validated shipment records</strong>. Analyze sourcing resilience, map global distribution, and track their high-value trade networks in real-time.
                    </p>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <button style={{
                            background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                            color: 'white',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            fontWeight: 800,
                            fontSize: '15px',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 10px 25px rgba(37, 99, 235, 0.25)',
                            transition: 'all 0.3s'
                        }}>
                            Get Full Access Now <ArrowRight size={18} strokeWidth={3} />
                        </button>
                        <button style={{
                            background: '#fff7ed',
                            color: '#c2410c',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            fontWeight: 800,
                            fontSize: '15px',
                            border: '1px solid #fed7aa',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s'
                        }}>
                            <Calendar size={18} /> Schedule Analysis
                        </button>
                    </div>
                </div>

                {/* Video Preview Mockup */}
                <div style={{
                    position: 'relative',
                    width: '340px',
                    height: '220px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
                    cursor: 'pointer',
                    zIndex: 1,
                    flexShrink: 0
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                        alt="Platform Demo"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(15, 23, 42, 0.4)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            background: 'white',
                            color: '#2563eb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '12px',
                            boxShadow: '0 0 20px rgba(255,255,255,0.3)'
                        }}>
                            <PlayCircle size={32} fill="currentColor" />
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: 800 }}>Platform Intelligence Tour</div>
                        <div style={{ fontSize: '12px', opacity: 0.8 }}>Watch how it works (1:20)</div>
                    </div>
                </div>

                {/* Decorative background element */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.03) 0%, transparent 70%)',
                    zIndex: 0
                }} />
            </div>

            {/* Right Contact Card */}
            <div style={{
                background: 'white',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid var(--grey-200)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
            }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 800,
                        fontSize: '20px',
                        border: '4px solid #eff6ff'
                    }}>
                        AC
                    </div>
                    <div>
                        <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>Alexander Chen</h4>
                        <p style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>Sr. Meta-Strategy Advisor</p>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#2563eb', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                        <Mail size={18} /> intelligence@exportgenius.in
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#0f172a', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                        <Phone size={18} /> +84 8003 8003 57
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#16a34a', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                        <MessageCircle size={18} /> Chat on WhatsApp
                    </div>
                </div>

                <div style={{
                    background: '#f8fafc',
                    borderRadius: '16px',
                    padding: '24px',
                    textAlign: 'center',
                    border: '1px solid #f1f5f9',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        background: 'white',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #e2e8f0',
                        color: '#0f172a'
                    }}>
                        <QrCode size={64} strokeWidth={1.5} />
                    </div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Scan to Access Manifest
                    </div>
                </div>
            </div>
        </section>
    );
}
