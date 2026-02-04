"use client";
import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

const importersData = [
    { name: "Samsung Electronics Vietnam Thai Nguyen Branch Of Ho Chi Minh City", value: 15557.54, percent: 3.16 },
    { name: "Intel Products Vietnam Company Limited", value: 10533.25, percent: 2.14 },
    { name: "Ms Samsung Electronics Vietnam Company Limited", value: 10305.32, percent: 2.09 },
    { name: "Samsung Display Vietnam Company Limited", value: 10036.41, percent: 2.04 },
    { name: "Hanyang Digitech Vina Company Limited", value: 9434.80, percent: 1.91 },
    { name: "Ms Fuyu Company Limited", value: 7627.35, percent: 1.55 },
    { name: "Fukang Technology Company Limited", value: 7426.36, percent: 1.51 },
    { name: "Compal Vietnam Limited", value: 6423.26, percent: 1.30 },
    { name: "Company Limited Lg Display Vietnam Hai Phong", value: 6228.81, percent: 1.26 },
    { name: "Nghi Son Refinery & Petrochemical Company Limited", value: 5718.39, percent: 1.16 }
];

export default function TopImportersSection() {
    const [view, setView] = useState('importers');
    const [comparison, setComparison] = useState('yoy');
    const [timeRange, setTimeRange] = useState('1Y');

    const maxValue = Math.max(...importersData.map(d => d.value));

    return (
        <section id="top-importers" style={{ padding: '80px 0', background: 'transparent', fontFamily: 'var(--font-inter)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                {/* Header Area */}
                <div style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                        Top Importers and Foreign Suppliers of Vietnam
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '16px', lineHeight: 1.6 }}>
                        Highest value of shipments are imported by these companies
                    </p>
                </div>

                {/* Dashboard Card Container */}
                <div style={{
                    background: 'white',
                    borderRadius: '12px',
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.04)',
                    overflow: 'hidden'
                }}>
                    {/* Comparison Tabs */}
                    <div style={{
                        display: 'flex',
                        background: '#f8fafc',
                        padding: '0 24px',
                        borderBottom: '1px solid #f1f5f9',
                        gap: '24px'
                    }}>
                        {['List of Top Importers', 'List of ForeignSuppliers'].map((tab, i) => {
                            const id = i === 0 ? 'yoy' : 'mom';
                            const isActive = comparison === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => setComparison(id)}
                                    style={{
                                        padding: '16px 0',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: isActive ? '#2563eb' : '#64748b',
                                        border: 'none',
                                        background: 'none',
                                        cursor: 'pointer',
                                        borderBottom: isActive ? '2px solid #2563eb' : '2px solid transparent',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>

                    <div style={{ padding: '32px' }}>
                        {/* Inner Header with Time Filters */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                            <div>
                                <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                                    Top Importers Tracking
                                </div>
                                <div style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>
                                    10 Major Import Companies of Vietnam
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '16px' }}>
                                {['1M', '3M', '6M', '1Y', '3Y', 'ALL'].map(range => (
                                    <button
                                        key={range}
                                        onClick={() => setTimeRange(range)}
                                        style={{
                                            fontSize: '13px',
                                            fontWeight: 700,
                                            color: timeRange === range ? '#2563eb' : '#94a3b8',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            transition: 'color 0.2s'
                                        }}
                                    >
                                        {range}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '48px' }}>
                            {/* Left: Bar Chart */}
                            <div style={{ flex: 1.2, position: 'relative' }}>
                                {/* Horizontal grid lines */}
                                <div style={{
                                    position: 'absolute',
                                    inset: '0 0 0 140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    pointerEvents: 'none',
                                    zIndex: 0
                                }}>
                                    {[0, 1, 2, 3, 4].map(i => (
                                        <div key={i} style={{ width: '1px', borderLeft: '1px dashed #f1f5f9' }} />
                                    ))}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', zIndex: 1 }}>
                                    {importersData.slice(0, 6).map((d, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <div style={{
                                                width: '120px',
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: '#64748b',
                                                textAlign: 'right',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}>
                                                {d.name.split(' ')[0]} {d.name.split(' ')[1] || ''}
                                            </div>
                                            <div style={{ flex: 1, height: '24px', background: '#f8fafc', borderRadius: '4px', overflow: 'hidden' }}>
                                                <div style={{
                                                    width: `${(d.value / maxValue) * 100}%`,
                                                    height: '100%',
                                                    background: `linear-gradient(90deg, #2563eb ${100 - i * 15}%, #60a5fa 100%)`,
                                                    borderRadius: '4px',
                                                    transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    opacity: 1 - (i * 0.12)
                                                }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Table */}
                            <div style={{ flex: 0.8 }}>
                                <div style={{
                                    border: '1px solid #f1f5f9',
                                    borderRadius: '12px',
                                    overflow: 'hidden'
                                }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                        <thead>
                                            <tr style={{ borderBottom: '1px solid #f1f5f9', background: '#fcfdfe' }}>
                                                <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', color: '#64748b', fontWeight: 700 }}>Importer Name</th>
                                                <th style={{ padding: '16px', textAlign: 'right', fontSize: '12px', color: '#64748b', fontWeight: 700 }}>Value ($M)</th>
                                                <th style={{ padding: '16px', textAlign: 'right', fontSize: '12px', color: '#64748b', fontWeight: 700 }}>Share</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {importersData.slice(0, 6).map((row, idx) => (
                                                <tr key={idx} style={{ borderBottom: idx === 5 ? 'none' : '1px solid #f8fafc' }}>
                                                    <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>
                                                        {row.name.substring(0, 20)}...
                                                    </td>
                                                    <td style={{ padding: '14px 16px', textAlign: 'right', fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>
                                                        {Math.round(row.value).toLocaleString()}
                                                    </td>
                                                    <td style={{ padding: '14px 16px', textAlign: 'right', fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>
                                                        {row.percent}%
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr style={{ background: '#f8fafc' }}>
                                                <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 700, color: '#2563eb' }}>Others</td>
                                                <td style={{ padding: '14px 16px', textAlign: 'right', fontSize: '13px', fontWeight: 700, color: '#2563eb' }}>12,450</td>
                                                <td style={{ padding: '14px 16px', textAlign: 'right', fontSize: '13px', fontWeight: 800, color: '#2563eb' }}>18%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
