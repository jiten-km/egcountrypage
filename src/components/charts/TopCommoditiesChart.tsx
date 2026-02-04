"use client";
import React from 'react';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Electrical Machinery', size: 89.2, code: '85', fill: '#FF6B6B', growth: '+14.2%' },
    { name: 'Mechanical Appliances', size: 45.4, code: '84', fill: '#4ECDC4', growth: '+8.1%' },
    { name: 'Textiles', size: 22.1, code: '60', fill: '#FFE66D', growth: '+5.3%' },
    { name: 'Plastics', size: 18.5, code: '39', fill: '#95E1D3', growth: '+3.2%' },
    { name: 'Iron & Steel', size: 15.2, code: '72', fill: '#F38181', growth: '-2.1%' },
    { name: 'Vehicles', size: 12.8, code: '87', fill: '#AA96DA', growth: '+12.5%' },
    { name: 'Mineral Fuels', size: 11.2, code: '27', fill: '#FCBAD3', growth: '+1.5%' },
    { name: 'Chemicals', size: 8.5, code: '28', fill: '#A8D8EA', growth: '+4.2%' },
];

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
    // Access data from the payload
    const name = props.name || props.payload?.name;
    const code = props.code || props.payload?.code;
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
                        <div style={{ fontWeight: 700, fontSize: width > 100 ? '14px' : '12px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{name}</div>
                        {width > 80 && <div style={{ fontSize: '12px', opacity: 0.8 }}>${value} Bn</div>}
                        {width > 100 && height > 80 && growth && (
                            <div style={{ fontSize: '11px', marginTop: '4px', color: growth.includes('+') ? '#065F46' : '#991B1B' }}>
                                {growth}
                            </div>
                        )}
                    </div>
                </foreignObject>
            )}
        </g>
    );
};

import MiniTable from '../ui/MiniTable';

const tableColumns = [
    { header: 'HS Code', key: 'code', align: 'left' as const },
    { header: 'Category', key: 'name', align: 'left' as const, render: (val: string) => <span style={{ fontWeight: 500 }}>{val}</span> },
    { header: 'Value', key: 'size', align: 'right' as const, render: (val: number) => `$${val} Bn` },
    {
        header: 'Growth', key: 'growth', align: 'right' as const, render: (val: string) => (
            <span style={{ color: val.includes('+') ? '#059669' : '#DC2626', fontWeight: 600 }}>{val}</span>
        )
    }
];

export default function TopCommoditiesChart() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '24px', alignItems: 'start' }}>
            <div style={{ width: '100%', height: 450, fontFamily: 'var(--font-inter)' }}>
                <ResponsiveContainer>
                    <Treemap
                        data={data}
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
                                        <div style={{ background: 'white', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
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
            <div>
                <MiniTable columns={tableColumns} data={data.slice(0, 7)} />
            </div>
        </div>
    );
}
