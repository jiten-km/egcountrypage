import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import TimePeriodSelector from '../ui/TimePeriodSelector';

const data = [
    { month: 'Jan', export: 45, import: 30 },
    { month: 'Feb', export: 52, import: 32 },
    { month: 'Mar', export: 48, import: 28 },
    { month: 'Apr', export: 61, import: 35 },
    { month: 'May', export: 55, import: 31 },
    { month: 'Jun', export: 67, import: 38 },
    { month: 'Jul', export: 72, import: 40 },
    { month: 'Aug', export: 65, import: 36 },
    { month: 'Sep', export: 58, import: 33 },
    { month: 'Oct', export: 75, import: 42 },
    { month: 'Nov', export: 82, import: 45 },
    { month: 'Dec', export: 88, import: 48 },
];

export default function CompanyTrendChart() {
    const [period, setPeriod] = useState('1Y');
    return (
        <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--grey-200)', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--grey-900)', marginBottom: '12px' }}>Trade Trends</h3>
                <div style={{ transform: 'scale(0.9)', transformOrigin: 'left' }}>
                    <TimePeriodSelector activePeriod={period} onPeriodChange={setPeriod} />
                </div>
            </div>

            <div style={{ height: '220px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorExport" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorImport" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#64748b', fontWeight: 500 }}
                            dy={5}
                            minTickGap={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#64748b', fontWeight: 500 }}
                            tickFormatter={(value) => `$${value}M`}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="export"
                            stroke="#3B82F6"
                            strokeWidth={2.5}
                            fillOpacity={1}
                            fill="url(#colorExport)"
                            name="Export"
                        />
                        <Area
                            type="monotone"
                            dataKey="import"
                            stroke="#F59E0B"
                            strokeWidth={2.5}
                            fillOpacity={1}
                            fill="url(#colorImport)"
                            name="Import"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '16px', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '10px', height: '3px', borderRadius: '10px', background: '#3B82F6' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#475569' }}>Exports</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '10px', height: '3px', borderRadius: '10px', background: '#F59E0B' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#475569' }}>Imports</span>
                </div>
            </div>
        </div>
    );
}
