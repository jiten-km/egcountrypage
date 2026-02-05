"use client";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import ScrollableTable from '../ui/ScrollableTable';
import { portsData } from '@/data/mockTradeData';

const graphData = portsData.slice(0, 6);

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

const tableColumns = [
    {
        header: 'Port Name',
        key: 'name',
        align: 'left' as const,
        render: (val: string) => (
            <a href={`https://dashboard.exportgenius.in/search?port=${val}`} target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', fontWeight: 600, textDecoration: 'none' }}>
                {val}
            </a>
        )
    },
    { header: 'Shipments', key: 'value', align: 'right' as const, render: (val: number) => val.toLocaleString() },
    {
        header: 'Market Share', key: 'share', align: 'right' as const, render: (val: string) => (
            <span style={{ fontWeight: 600 }}>{val}</span>
        )
    }
];

export default function PortChart() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 450px', gap: '32px', alignItems: 'stretch' }}>
            <div style={{ position: 'relative', background: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <div style={{ width: '100%', height: 320, fontFamily: 'var(--font-inter)' }}>
                    <ResponsiveContainer>
                        <BarChart
                            layout="vertical"
                            data={graphData}
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
                                {graphData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Impressive CTA */}
                <div style={{ marginTop: '24px', borderTop: '1px solid #F1F5F9', paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
                    <a
                        href="https://dashboard.exportgenius.in/sign-up"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '12px',
                            fontWeight: 700,
                            fontSize: '14px',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(37, 99, 235, 0.2)';
                        }}
                    >
                        Explore All 2,800+ Active Ports
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            <ScrollableTable columns={tableColumns} data={portsData} maxHeight="450px" />
        </div>
    );
}

