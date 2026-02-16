import React from 'react';
import { Activity, ShieldCheck, Zap, Globe, TrendingUp, AlertCircle } from 'lucide-react';

export default function TradePulseWidget() {
    return (
        <div style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid var(--grey-200)',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
            fontFamily: 'var(--font-inter)'
        }}>
            {/* Header with Live Status */}
            <div style={{
                padding: '24px',
                background: 'linear-gradient(to right, #f8fafc, #ffffff)',
                borderBottom: '1px solid var(--grey-100)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: '#eff6ff',
                        color: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Activity size={18} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: 0 }}>Trade Intelligence Pulse</h3>
                        <p style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, margin: 0 }}>Real-time analytical signals</p>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#f0fdf4',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    border: '1px solid #dcfce7'
                }}>
                    <div className="animate-pulse-green" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#10b981', textTransform: 'uppercase' }}>Live</span>
                </div>
            </div>

            <div style={{ padding: '24px' }}>
                {/* Main Score Area */}
                <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Trust & Compliance</span>
                        <span style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a' }}>100<span style={{ fontSize: '14px', color: '#94a3b8' }}>/100</span></span>
                    </div>
                    <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '100px', overflow: 'hidden' }}>
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to right, #3b82f6, #10b981)', borderRadius: '100px' }} />
                    </div>
                </div>

                {/* Quick Intelligence Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                        <div style={{ color: '#3b82f6', marginBottom: '4px' }}><TrendingUp size={16} /></div>
                        <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Velocity</div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>VHigh</div>
                    </div>
                    <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                        <div style={{ color: '#10b981', marginBottom: '4px' }}><ShieldCheck size={16} /></div>
                        <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Resilience</div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>94%</div>
                    </div>
                </div>

                {/* Smart Insight Feed */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ marginTop: '2px' }}><Zap size={14} color="#f59e0b" fill="#f59e0b" /></div>
                        <p style={{ fontSize: '12px', color: '#445569', lineHeight: '1.5', margin: 0 }}>
                            <strong>Strategic Surge:</strong> 15% increase in high-purity gas imports detected in the last 30 days.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ marginTop: '2px' }}><Globe size={14} color="#3b82f6" /></div>
                        <p style={{ fontSize: '12px', color: '#445569', lineHeight: '1.5', margin: 0 }}>
                            <strong>Supply Chain:</strong> Diversification into EU raw material providers is currently at a 2-year peak.
                        </p>
                    </div>
                </div>

                {/* Bottom CTA Overlay link */}
                <button style={{
                    width: '100%',
                    marginTop: '24px',
                    padding: '12px',
                    borderRadius: '10px',
                    background: '#0f172a',
                    color: 'white',
                    fontSize: '13px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s',
                    border: 'none',
                    cursor: 'pointer'
                }}>
                    Full Strategic Audit <Zap size={14} fill="white" />
                </button>
            </div>
        </div>
    );
}
