import React, { useState } from 'react';
import { Anchor, Ship, Plane } from 'lucide-react';
import TimePeriodSelector from '../ui/TimePeriodSelector';

const exportPorts = [
    { name: 'Hai Phong Port', share: 45, volume: 'High', color: '#3B82F6', type: 'sea' },
    { name: 'Noi Bai Airport', share: 28, volume: 'Critical', color: '#6366F1', type: 'air' },
    { name: 'Ho Chi Minh Port', share: 15, volume: 'Moderate', color: '#10B981', type: 'sea' },
    { name: 'Da Nang Port', share: 12, volume: 'Stable', color: '#F59E0B', type: 'sea' },
];

const importPorts = [
    { name: 'Cat Lai Port', share: 38, volume: 'High', color: '#B45309', type: 'sea' },
    { name: 'Tan Son Nhat', share: 32, volume: 'Critical', color: '#F59E0B', type: 'air' },
    { name: 'Hai Phong Port', share: 22, volume: 'High', color: '#FBBF24', type: 'sea' },
    { name: 'Cai Mep Port', share: 8, volume: 'Moderate', color: '#FCD34D', type: 'sea' },
];

export default function PortAnalyticsModule() {
    const [activeTab, setActiveTab] = useState<'export' | 'import'>('export');
    const [period, setPeriod] = useState('1Y');
    const ports = activeTab === 'export' ? exportPorts : importPorts;

    return (
        <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--grey-200)', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ flex: 1, paddingRight: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--grey-900)' }}>Major Transit Ports</h3>
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '8px', lineHeight: '1.6' }}>Analyze logistics infrastructure utilization and gateway dependencies across Samsung's {activeTab} operations. This port-level visibility reveals supply chain bottlenecks, transit route optimization opportunities, and vulnerability exposure to regional geopolitical or natural disruptions.</p>
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                {ports.map((port, i) => (
                    <div key={i} style={{
                        padding: '24px',
                        background: 'var(--grey-25, #fafafa)',
                        borderRadius: '16px',
                        border: '1px solid var(--grey-100)',
                        textAlign: 'center',
                        transition: 'transform 0.2s'
                    }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: `${port.color}15`,
                            color: port.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 16px'
                        }}>
                            {port.type === 'sea' ? <Ship size={24} /> : <Plane size={24} />}
                        </div>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{port.name}</h4>
                        <div style={{ fontSize: '24px', fontWeight: 800, color: port.color }}>{port.share}%</div>
                        <div style={{ fontSize: '12px', color: 'var(--grey-500)', marginTop: '4px', fontWeight: 600 }}>Volume: {port.volume}</div>
                    </div>
                ))}
            </div>
        </div >
    );
}
