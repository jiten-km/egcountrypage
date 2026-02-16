import React, { useState } from 'react';
import { Globe, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';
import TimePeriodSelector from '../ui/TimePeriodSelector';

const exportPartners = [
    { country: 'United States', percentage: 32, value: '$269.6M', color: '#1E40AF' },
    { country: 'United Kingdom', percentage: 18, value: '$151.6M', color: '#3B82F6' },
    { country: 'Germany', percentage: 14, value: '$117.9M', color: '#60A5FA' },
    { country: 'India', percentage: 12, value: '$101.1M', color: '#93C5FD' },
    { country: 'Australia', percentage: 10, value: '$84.2M', color: '#BFDBFE' },
];

const importPartners = [
    { country: 'South Korea', percentage: 42, value: '$150.4M', color: '#B45309' },
    { country: 'China', percentage: 28, value: '$100.3M', color: '#F59E0B' },
    { country: 'Japan', percentage: 15, value: '$53.7M', color: '#FBBF24' },
    { country: 'Taiwan', percentage: 8, value: '$28.6M', color: '#FCD34D' },
    { country: 'Singapore', percentage: 7, value: '$25.1M', color: '#FDE68A' },
];

export default function TradingPartnersModule() {
    const [activeTab, setActiveTab] = useState<'export' | 'import'>('export');
    const [period, setPeriod] = useState('1Y');
    const partners = activeTab === 'export' ? exportPartners : importPartners;

    return (
        <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--grey-200)', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ flex: 1, paddingRight: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--grey-900)' }}>Top Strategic Partners</h3>
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '8px', lineHeight: '1.6' }}>Discover geographic diversification and reliance patterns across Samsung's major {activeTab} trading nations. This partner analysis highlights market concentration risks, trade relationship strength, and opportunities for strategic expansion into emerging high-growth territories.</p>
                </div>
                <div style={{ display: 'flex', background: '#2563eb', padding: '4px', borderRadius: '10px', flexShrink: 0 }}>
                    <button
                        onClick={() => setActiveTab('export')}
                        style={{
                            padding: '10px 20px',
                            fontSize: '14px',
                            fontWeight: 700,
                            borderRadius: '8px',
                            background: activeTab === 'export' ? 'white' : 'transparent',
                            color: activeTab === 'export' ? '#2563eb' : 'white',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        Export
                    </button>
                    <button
                        onClick={() => setActiveTab('import')}
                        style={{
                            padding: '10px 20px',
                            fontSize: '14px',
                            fontWeight: 700,
                            borderRadius: '8px',
                            background: activeTab === 'import' ? 'white' : 'transparent',
                            color: activeTab === 'import' ? '#2563eb' : 'white',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        Import
                    </button>
                </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
                <TimePeriodSelector activePeriod={period} onPeriodChange={setPeriod} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {partners.map((partner, i) => (
                    <div key={i} style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--grey-100)', background: 'var(--grey-25, #fafafa)', transition: 'transform 0.2s' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'white', border: '1px solid var(--grey-200)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Globe size={18} color={partner.color} />
                            </div>
                            <span style={{ fontSize: '13px', fontWeight: 800, color: partner.color }}>{partner.percentage}%</span>
                        </div>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--grey-900)', marginBottom: '4px' }}>{partner.country}</h4>
                        <div style={{ fontSize: '13px', color: 'var(--grey-500)', fontWeight: 500 }}>Trade Value: <strong>{partner.value}</strong></div>
                        <div style={{ height: '4px', background: 'var(--grey-100)', borderRadius: '2px', marginTop: '16px', overflow: 'hidden' }}>
                            <div style={{ width: `${partner.percentage}%`, height: '100%', background: partner.color, borderRadius: '2px' }} />
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '24px', padding: '18px 20px', borderRadius: '12px', background: '#eff6ff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #dbeafe' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ShieldCheck size={20} color="#2563eb" strokeWidth={2} />
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#1e40af' }}>Analyze detailed buyer-seller connections in {activeTab} markets.</span>
                </div>
                <button style={{ background: 'white', border: '1px solid #3b82f6', color: '#2563eb', padding: '10px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', transition: 'all 0.2s' }}>
                    View Market Analysis <ArrowRight size={14} strokeWidth={2.5} />
                </button>
            </div>
        </div >
    );
}
