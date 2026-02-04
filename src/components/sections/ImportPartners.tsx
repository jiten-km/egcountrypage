"use client";
import React from 'react';
import ChartSectionWrapper from '../ui/ChartSectionWrapper';

const partnersData = [
    { rank: 1, country: 'China 🇨🇳', value: '$123.5 Bn', share: '25.4%', growth: '+8.2%', isPositive: true },
    { rank: 2, country: 'South Korea 🇰🇷', value: '$52.3 Bn', share: '10.8%', growth: '+12.5%', isPositive: true },
    { rank: 3, country: 'Japan 🇯🇵', value: '$18.9 Bn', share: '3.9%', growth: '-2.1%', isPositive: false },
    { rank: 4, country: 'Taiwan 🇹🇼', value: '$15.2 Bn', share: '3.1%', growth: '+4.5%', isPositive: true },
    { rank: 5, country: 'USA 🇺🇸', value: '$12.1 Bn', share: '2.5%', growth: '+1.2%', isPositive: true },
];

export default function ImportPartners() {
    return (
        <ChartSectionWrapper
            title="Import Trading Partners of Vietnam"
            value="233"
        >
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '24px', alignItems: 'start' }}>
                {/* Visual Map Placeholder */}
                <div style={{
                    height: '100%',
                    minHeight: '300px',
                    background: '#F8FAFC',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #E5E7EB',
                    backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}>
                    <div style={{ textAlign: 'center', opacity: 0.7 }}>
                        <div style={{ fontSize: '48px', marginBottom: '8px' }}>🗺️</div>
                        <span style={{ color: '#64748B', fontWeight: 500 }}>Global Trade Map</span>
                    </div>
                </div>

                {/* Styled Table */}
                <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                        <thead style={{ background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                            <tr>
                                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Rank</th>
                                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Country</th>
                                <th style={{ padding: '16px', textAlign: 'right', fontWeight: 600, color: '#374151' }}>Value</th>
                                <th style={{ padding: '16px', textAlign: 'right', fontWeight: 600, color: '#374151' }}>Share</th>
                                <th style={{ padding: '16px', textAlign: 'right', fontWeight: 600, color: '#374151' }}>Growth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {partnersData.map((row, i) => (
                                <tr
                                    key={i}
                                    style={{
                                        borderBottom: i === partnersData.length - 1 ? 'none' : '1px solid #F3F4F6',
                                        transition: 'background 0.2s',
                                        cursor: 'default'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = '#F9FAFB'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                                >
                                    <td style={{ padding: '16px', color: '#6B7280' }}>#{row.rank}</td>
                                    <td style={{ padding: '16px', fontWeight: 500, color: '#111827' }}>{row.country}</td>
                                    <td style={{ padding: '16px', textAlign: 'right', fontWeight: 600 }}>{row.value}</td>
                                    <td style={{ padding: '16px', textAlign: 'right', color: '#6B7280' }}>{row.share}</td>
                                    <td style={{
                                        padding: '16px',
                                        textAlign: 'right',
                                        fontWeight: 600,
                                        color: row.isPositive ? '#059669' : '#DC2626'
                                    }}>
                                        {row.growth}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ChartSectionWrapper>
    );
}
