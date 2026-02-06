"use client";
import React from 'react';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import ScrollableTable from '../ui/ScrollableTable';
import { commoditiesData } from '@/data/mockTradeData';

const graphData = commoditiesData.slice(0, 10);

interface CustomContentProps {
    root?: any;
    depth?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    index?: number;
    fill?: string;
    name?: string;
    code?: string;
    payload?: any;
    value?: number;
    growth?: string;
}

const CustomContent = (props: CustomContentProps) => {
    const { depth = 0, x = 0, y = 0, width = 0, height = 0, fill } = props;
    const name = props.name || props.payload?.name;
    const value = props.value || props.payload?.size;
    const growth = props.growth || props.payload?.growth || '';

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: fill,
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
            />
            {width > 50 && height > 50 && (
                <foreignObject x={x} y={y} width={width} height={height}>
                    <div style={{ padding: '8px', color: '#1F2937', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ fontWeight: 700, fontSize: width > 100 ? '14px' : '11px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{name}</div>
                        {width > 80 && <div style={{ fontSize: '11px', opacity: 0.8 }}>${value} Bn</div>}
                        {width > 100 && height > 80 && growth && (
                            <div style={{ fontSize: '10px', marginTop: '2px', color: growth.includes('+') ? '#065F46' : '#991B1B' }}>
                                {growth}
                            </div>
                        )}
                    </div>
                </foreignObject>
            )}
        </g>
    );
};

const tableColumns = [
    { header: 'HS Code', key: 'code', align: 'left' as const },
    {
        header: 'Commodity',
        key: 'name',
        align: 'left' as const,
        render: (val: string) => (
            <a href={`https://dashboard.exportgenius.in/search?hs_code=${val}`} target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', fontWeight: 600, textDecoration: 'none' }}>
                {val}
            </a>
        )
    },
    { header: 'Value', key: 'size', align: 'right' as const, render: (val: number) => `$${val} Bn` },
    {
        header: 'Growth', key: 'growth', align: 'right' as const, render: (val: string) => (
            <span style={{ color: val.includes('+') ? '#059669' : '#DC2626', fontWeight: 600 }}>{val}</span>
        )
    }
];

export default function TopCommoditiesChart() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) 450px', gap: '32px', alignItems: 'stretch' }}>
            <div style={{ position: 'relative', background: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <div style={{ width: '100%', height: 450, fontFamily: 'var(--font-inter)' }}>
                    <ResponsiveContainer>
                        <Treemap
                            data={graphData}
                            dataKey="size"
                            aspectRatio={4 / 3}
                            stroke="#fff"
                            content={<CustomContent />}
                        >
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        const d = payload[0].payload;
                                        return (
                                            <div style={{ background: 'white', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                                <div style={{ fontWeight: 700 }}>{d.name}</div>
                                                <div style={{ fontSize: '13px', color: '#6B7280' }}>HS Code: {d.code}</div>
                                                <div style={{ marginTop: '8px', fontSize: '14px' }}>Value: <b>${d.size} Bn</b></div>
                                                <div style={{ fontSize: '13px', color: d.growth.includes('+') ? '#059669' : '#DC2626' }}>Growth: {d.growth}</div>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                        </Treemap>
                    </ResponsiveContainer>
                </div>

                {/* Impressive CTA Overlay */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 20
                }}>
                    <a
                        href="https://dashboard.exportgenius.in/sign-up"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: 'rgba(15, 23, 42, 0.9)',
                            backdropFilter: 'blur(8px)',
                            padding: '14px 28px',
                            borderRadius: '100px',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '15px',
                            textDecoration: 'none',
                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.background = '#2563EB';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = 'rgba(15, 23, 42, 0.9)';
                        }}
                    >
                        <span>Unlock Comprehensive HS Code Data</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            <ScrollableTable columns={tableColumns} data={commoditiesData} maxHeight="500px" />
        </div>
    );
}

