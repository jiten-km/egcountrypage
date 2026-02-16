import React from 'react';
import {
    Globe,
    MapPin,
    Phone,
    Mail,
    Share2,
    Printer,
    CheckCircle,
    TrendingUp,
    Package,
    Shield,
    ArrowRight,
    Award,
    Download,
    Star,
    Zap,
    Briefcase
} from 'lucide-react';

export default function ProfileHero() {
    return (
        <section style={{
            background: '#020617', // Deep Midnight Blue
            color: 'white',
            padding: '80px 0 60px 0',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: 'var(--font-inter)'
        }}>
            {/* Advanced Background Decoration */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '5%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-5%',
                left: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
            }} />

            {/* Subtle Grid Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.3,
                zIndex: 0
            }} />

            <div className="container" style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 24px',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Breadcrumbs - Styled more subtly */}
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    fontSize: '12px',
                    marginBottom: '40px',
                    color: '#94a3b8',
                    alignItems: 'center',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Home</span>
                    <span style={{ opacity: 0.3 }}>/</span>
                    <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Directory</span>
                    <span style={{ opacity: 0.3 }}>/</span>
                    <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Vietnam</span>
                    <span style={{ opacity: 0.3 }}>/</span>
                    <span style={{ color: '#3b82f6' }}>Samsung Electronics Vietnam</span>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '48px',
                    flexWrap: 'wrap'
                }}>
                    {/* Left: Premium Company Info */}
                    <div style={{ flex: '1', minWidth: '350px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                            <div style={{
                                background: 'rgba(16, 185, 129, 0.1)',
                                border: '1px solid rgba(16, 185, 129, 0.2)',
                                padding: '6px 16px',
                                borderRadius: '100px',
                                fontSize: '12px',
                                fontWeight: 800,
                                color: '#10b981',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                backdropFilter: 'blur(4px)'
                            }}>
                                <Shield size={14} /> PLATINUM VERIFIED
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#94a3b8' }}>
                                <div className="animate-pulse-green" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                                Active Account
                            </div>
                        </div>

                        <h1 style={{
                            fontSize: '56px',
                            fontWeight: 900,
                            lineHeight: 1.05,
                            marginBottom: '24px',
                            letterSpacing: '-0.03em',
                            background: 'linear-gradient(to bottom right, #ffffff 60%, #94a3b8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            SAMSUNG ELECTRONICS <br />
                            <span style={{ color: '#ffffff', opacity: 0.8 }}>VIETNAM CO., LTD</span>
                        </h1>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            marginBottom: '40px',
                            color: '#94a3b8'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                                <MapPin size={18} color="#3b82f6" />
                                <span>Yen Phong I Industrial Park, Bac Ninh, Vietnam</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                                <Globe size={18} color="#3b82f6" />
                                <a href="https://www.samsung.com/vn" style={{ color: 'inherit', textDecoration: 'none' }}>www.samsung.com/vn</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <button style={{
                                background: '#2563eb',
                                color: 'white',
                                padding: '16px 36px',
                                borderRadius: '12px',
                                fontWeight: 700,
                                fontSize: '16px',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.4)',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(37, 99, 235, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(37, 99, 235, 0.4)';
                                }}
                            >
                                <Zap size={20} fill="white" /> Get Company's Full Intelligence
                            </button>

                        </div>
                    </div>

                    {/* Right: Floating Stats Terminal */}
                    <div className="animate-float" style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '24px',
                        padding: '32px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        width: '380px',
                        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)',
                        position: 'relative'
                    }}>
                        {/* Status Light */}
                        <div style={{ position: 'absolute', top: '24px', right: '24px', display: 'flex', gap: '4px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fbbf24' }} />
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                        </div>

                        <div style={{ marginBottom: '32px' }}>
                            <div style={{ fontSize: '12px', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Market Authority</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                                <span style={{ fontSize: '40px', fontWeight: 900 }}>98</span>
                                <span style={{ fontSize: '20px', fontWeight: 700, color: '#94a3b8' }}>/100</span>
                                <div style={{ marginLeft: 'auto', background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 800 }}>
                                    EXCELLENT
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                            <div>
                                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Total Shipments</div>
                                <div style={{ fontSize: '20px', fontWeight: 800 }}>128,450+</div>
                                <div style={{ fontSize: '11px', color: '#10b981', fontWeight: 700, marginTop: '4px' }}>↑ 12% Yearly</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Annual Trade</div>
                                <div style={{ fontSize: '20px', fontWeight: 800 }}>$1.2B+</div>
                                <div style={{ fontSize: '11px', color: '#10b981', fontWeight: 700, marginTop: '4px' }}>Verified</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Global Rank</div>
                                <div style={{ fontSize: '20px', fontWeight: 800 }}>#12</div>
                                <div style={{ fontSize: '11px', color: '#3b82f6', fontWeight: 700, marginTop: '4px' }}>Electronics</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Strategic Partners</div>
                                <div style={{ fontSize: '20px', fontWeight: 800 }}>452</div>
                                <div style={{ fontSize: '11px', color: '#3b82f6', fontWeight: 700, marginTop: '4px' }}>Global Tier</div>
                            </div>
                        </div>

                        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Award size={20} color="#3b82f6" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '13px', fontWeight: 700 }}>Top Verified Importer</div>
                                    <div style={{ fontSize: '11px', color: '#64748b' }}>Awarded by Vietnam Trade Bureau</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), transparent)' }} />
        </section>
    );
}
