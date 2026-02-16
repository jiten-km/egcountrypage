import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Package } from 'lucide-react';
import TimePeriodSelector from '../ui/TimePeriodSelector';

const exportData = [
    { name: 'Mobile Phones', value: 450, growth: '+12%', color: '#3B82F6' },
    { name: 'LED Panels', value: 280, growth: '+8%', color: '#60A5FA' },
    { name: 'Processors', value: 190, growth: '+15%', color: '#93C5FD' },
    { name: 'Li-ion Batteries', value: 150, growth: '+5%', color: '#BFDBFE' },
    { name: 'Accessories', value: 120, growth: '-2%', color: '#DBEAFE' },
];

const importData = [
    { name: 'Rare Metals', value: 310, growth: '+4%', color: '#F59E0B' },
    { name: 'Silicon Wafers', value: 240, growth: '+10%', color: '#FBBF24' },
    { name: 'Chemicals', value: 180, growth: '+6%', color: '#FCD34D' },
    { name: 'Packaging', value: 140, growth: '+2%', color: '#FDE68A' },
    { name: 'Machinery', value: 90, growth: '+12%', color: '#FEF3C7' },
];

export default function TopCommoditiesModule() {
    const [activeTab, setActiveTab] = useState<'export' | 'import'>('export');
    const [period, setPeriod] = useState('1Y');
    const data = activeTab === 'export' ? exportData : importData;

    return (
        <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--grey-200)', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ flex: 1, paddingRight: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--grey-900)' }}>Top Traded Commodities</h3>
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '8px', lineHeight: '1.6' }}>Examine product-level performance and category concentration within Samsung's trade portfolio. This commodity breakdown reveals strategic sourcing priorities, value chain dependencies, and emerging shifts in product mix driven by technological innovation and market demand.</p>
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '40px' }}>
                <div style={{ height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} layout="vertical" margin={{ left: 40, right: 40 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                            <XAxis type="number" hide />
                            <YAxis
                                dataKey="name"
                                type="category"
                                tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                                width={100}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                cursor={{ fill: '#f8fafc' }}
                            />
                            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--grey-50)', border: '1px solid var(--grey-100)' }}>
                        <div style={{ fontSize: '13px', color: 'var(--grey-500)', fontWeight: 600, marginBottom: '4px' }}>Major Category</div>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--grey-900)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Package size={20} color="var(--primary)" /> Electronics & Parts
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {data.map((item, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--grey-50)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }} />
                                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--grey-700)' }}>{item.name}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--grey-900)' }}>${item.value}M</span>
                                    <span style={{ fontSize: '11px', fontWeight: 700, color: item.growth.startsWith('+') ? '#059669' : '#DC2626', display: 'flex', alignItems: 'center' }}>
                                        {item.growth.startsWith('+') ? <TrendingUp size={12} /> : <TrendingDown size={12} />} {item.growth}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}
