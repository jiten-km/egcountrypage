"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', value: 38.5, growth: '+2.4%' },
    { month: 'Feb', value: 41.2, growth: '+7.0%' },
    { month: 'Mar', value: 39.8, growth: '-3.4%' },
    { month: 'Apr', value: 42.5, growth: '+6.8%' },
    { month: 'May', value: 44.1, growth: '+3.8%' },
    { month: 'Jun', value: 43.6, growth: '-1.1%' },
    { month: 'Jul', value: 46.2, growth: '+6.0%' },
    { month: 'Aug', value: 48.9, growth: '+5.8%' },
    { month: 'Sep', value: 47.5, growth: '-2.9%' },
    { month: 'Oct', value: 50.2, growth: '+5.7%' },
    { month: 'Nov', value: 52.8, growth: '+5.2%' },
    { month: 'Dec', value: 55.4, growth: '+4.9%' },
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
                minWidth: '150px'
            }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#374151' }}>{label} 2024</p>
                <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', color: '#6B7280' }}>Import Value:</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#2563EB' }}>${payload[0].value} Bn</span>
                </div>
                <div style={{ marginTop: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', color: '#6B7280' }}>MoM Growth:</span>
                    <span style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: payload[0].payload.growth.startsWith('+') ? '#059669' : '#DC2626'
                    }}>
                        {payload[0].payload.growth}
                    </span>
                </div>
            </div>
        );
    }
    return null;
};

import MiniTable from '../ui/MiniTable';

const tableColumns = [
    { header: 'Month', key: 'month', align: 'left' as const },
    { header: 'Value', key: 'value', align: 'right' as const, render: (val: number) => `$${val} Bn` },
    {
        header: 'Growth', key: 'growth', align: 'right' as const, render: (val: string) => (
            <span style={{ color: val.includes('+') ? '#059669' : '#DC2626', fontWeight: 600 }}>{val}</span>
        )
    }
];

export default function TrendChart() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '24px', alignItems: 'start' }}>
            <div style={{ width: '100%', height: 350, fontFamily: 'var(--font-inter)' }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            tickFormatter={(value) => `$${value}B`}
                            dx={-10}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#2563EB"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                            activeDot={{ r: 6, strokeWidth: 0, fill: '#2563EB' }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div>
                <MiniTable columns={tableColumns} data={data.slice(-6).reverse()} />
            </div>
        </div>
    );
}
