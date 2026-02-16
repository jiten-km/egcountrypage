import React from 'react';
import { ArrowUpRight, ArrowDownRight, Box, Truck, TrendingUp, BarChart3, PieChart } from 'lucide-react';

export default function TradeSummaryModule() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Export Metric */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '20px', border: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', transition: 'all 0.3s' }}>
                <div style={{ position: 'absolute', top: '-15px', right: '-15px', opacity: 0.03, transform: 'rotate(-15deg)' }}>
                    <Truck size={140} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                    <div style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #2563eb 100%)', color: 'white', padding: '14px', borderRadius: '14px', boxShadow: '0 8px 16px rgba(59, 130, 246, 0.25)' }}>
                        <Truck size={26} strokeWidth={2} />
                    </div>
                    <span style={{ fontSize: '13px', color: '#059669', background: '#ecfdf5', padding: '6px 12px', borderRadius: '100px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #d1fae5' }}>
                        +12.5% <ArrowUpRight size={14} strokeWidth={3} />
                    </span>
                </div>
                <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Export Value</div>
                <div style={{ fontSize: '36px', fontWeight: 900, color: '#0F172A', marginTop: '12px', letterSpacing: '-0.03em', lineHeight: 1 }}>$842.5M</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
                    <div style={{ flex: 1, height: '6px', background: 'linear-gradient(to right, #3B82F6, #60a5fa)', borderRadius: '100px', boxShadow: '0 2px 8px rgba(59, 130, 246, 0.2)' }} />
                    <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>High Activity</div>
                </div>
            </div>

            {/* Import Metric */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '20px', border: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', transition: 'all 0.3s' }}>
                <div style={{ position: 'absolute', top: '-15px', right: '-15px', opacity: 0.03, transform: 'rotate(-15deg)' }}>
                    <Box size={140} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                    <div style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #d97706 100%)', color: 'white', padding: '14px', borderRadius: '14px', boxShadow: '0 8px 16px rgba(245, 158, 11, 0.25)' }}>
                        <Box size={26} strokeWidth={2} />
                    </div>
                    <span style={{ fontSize: '13px', color: '#059669', background: '#ecfdf5', padding: '6px 12px', borderRadius: '100px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #d1fae5' }}>
                        +8.2% <ArrowUpRight size={14} strokeWidth={3} />
                    </span>
                </div>
                <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Import Value</div>
                <div style={{ fontSize: '36px', fontWeight: 900, color: '#0F172A', marginTop: '12px', letterSpacing: '-0.03em', lineHeight: 1 }}>$358.2M</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
                    <div style={{ flex: 1, height: '6px', background: 'linear-gradient(to right, #F59E0B, #fbbf24)', borderRadius: '100px', boxShadow: '0 2px 8px rgba(245, 158, 11, 0.2)' }} />
                    <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>Steady Flow</div>
                </div>
            </div>

            {/* Total Trade Activity */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '20px', border: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', transition: 'all 0.3s' }}>
                <div style={{ position: 'absolute', top: '-15px', right: '-15px', opacity: 0.03, transform: 'rotate(-15deg)' }}>
                    <TrendingUp size={140} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                    <div style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', padding: '14px', borderRadius: '14px', boxShadow: '0 8px 16px rgba(16, 185, 129, 0.25)' }}>
                        <TrendingUp size={26} strokeWidth={2} />
                    </div>
                    <span style={{ fontSize: '13px', color: '#059669', background: '#d1fae5', padding: '6px 12px', borderRadius: '100px', fontWeight: 800, border: '1px solid #a7f3d0' }}>
                        Surplus
                    </span>
                </div>
                <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Net Trade Balance</div>
                <div style={{ fontSize: '36px', fontWeight: 900, color: '#0F172A', marginTop: '12px', letterSpacing: '-0.03em', lineHeight: 1 }}>+$484.3M</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
                    <div style={{ flex: 1, height: '6px', background: 'linear-gradient(to right, #10B981, #34d399)', borderRadius: '100px', boxShadow: '0 2px 8px rgba(16, 185, 129, 0.2)' }} />
                    <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>Strong Balance</div>
                </div>
            </div>
        </div>
    );
}
