"use client";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'Cat Lai', value: 34500, share: '32%', color: '#2563EB' },
    { name: 'Hai Phong', value: 28200, share: '26%', color: '#3B82F6' },
    { name: 'Da Nang', value: 18500, share: '17%', color: '#60A5FA' },
    { name: 'Cai Mep', value: 12400, share: '11%', color: '#93C5FD' },
    { name: 'Quy Nhon', value: 8900, share: '8%', color: '#BFDBFE' },
    { name: 'Others', value: 6500, share: '6%', color: '#DBEAFE' },
];

interface CustomTooltipProps {
    active?: boolean;
    payload?: any[];
    label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#1F2937' }}>{label} Port</p>
                <div style={{ marginTop: '8px', fontSize: '13px', color: '#6B7280' }}>
                    Shipments: <span style={{ fontWeight: 600, color: '#2563EB' }}>{payload[0].value.toLocaleString()}</span>
                </div>
                <div style={{ marginTop: '4px', fontSize: '13px', color: '#6B7280' }}>
                    Market Share: <span style={{ fontWeight: 600, color: '#1F2937' }}>{payload[0].payload.share}</span>
                </div>
            </div>
        );
    }
    return null;
};

import MiniTable from '../ui/MiniTable';

const tableColumns = [
    { header: 'Port Name', key: 'name', align: 'left' as const },
    { header: 'Shipments', key: 'value', align: 'right' as const, render: (val: number) => val.toLocaleString() },
    {
        header: 'Market Share', key: 'share', align: 'right' as const, render: (val: string) => (
            <span style={{ fontWeight: 600 }}>{val}</span>
        )
    }
];

export default function PortChart() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '24px', alignItems: 'start' }}>
            <div style={{ width: '100%', height: 320, fontFamily: 'var(--font-inter)' }}>
                <ResponsiveContainer>
                    <BarChart
                        layout="vertical"
                        data={data}
                        margin={{ top: 0, right: 30, left: 20, bottom: 0 }}
                        barSize={24}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
                        <XAxis type="number" hide />
                        <YAxis
                            dataKey="name"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#374151', fontSize: 13, fontWeight: 500 }}
                            width={100}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={1500}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div>
                <MiniTable columns={tableColumns} data={data} />
            </div>
        </div>
    );
}
