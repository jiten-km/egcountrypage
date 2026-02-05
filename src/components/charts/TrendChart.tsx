"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ScrollableTable from '../ui/ScrollableTable';
import { trendsData } from '@/data/mockTradeData';

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
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
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

const tableColumns = [
    {
        header: 'Month',
        key: 'month',
        align: 'left' as const,
        render: (val: string) => (
            <a href={`https://dashboard.exportgenius.in/search?month=${val}`} target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', fontWeight: 600, textDecoration: 'none' }}>
                {val}
            </a>
        )
    },
    { header: 'Value', key: 'value', align: 'right' as const, render: (val: number) => `$${val} Bn` },
    {
        header: 'Growth', key: 'growth', align: 'right' as const, render: (val: string) => (
            <span style={{ color: val.includes('+') ? '#059669' : '#DC2626', fontWeight: 600 }}>{val}</span>
        )
    }
];

export default function TrendChart() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 450px', gap: '32px', alignItems: 'stretch' }}>
            <div style={{ position: 'relative', background: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <div style={{ width: '100%', height: 350, fontFamily: 'var(--font-inter)' }}>
                    <ResponsiveContainer>
                        <AreaChart
                            data={trendsData}
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
                                tick={{ fill: '#6B7280', fontSize: 11 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 11 }}
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

                {/* Impressive CTA Overlay */}
                <div style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px'
                }}>
                    <a
                        href="https://dashboard.exportgenius.in/sign-up"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: '#0F172A',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '50px',
                            fontWeight: 700,
                            fontSize: '13px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#2563EB';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#0F172A';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <span>Analyze Growth Trends</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            <ScrollableTable columns={tableColumns} data={trendsData} maxHeight="400px" />
        </div>
    );
}

