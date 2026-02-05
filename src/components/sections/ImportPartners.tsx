"use client";
import React from 'react';
import ChartSectionWrapper from '../ui/ChartSectionWrapper';
import ScrollableTable from '../ui/ScrollableTable';
import { partnersData } from '@/data/mockTradeData';

const tableColumns = [
    { header: 'Rank', key: 'rank', align: 'left' as const, render: (val: number) => `#${val}` },
    {
        header: 'Country',
        key: 'country',
        align: 'left' as const,
        render: (val: string) => (
            <a href={`https://dashboard.exportgenius.in/search?country=${val}`} target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', fontWeight: 600, textDecoration: 'none' }}>
                {val}
            </a>
        )
    },
    { header: 'Value', key: 'value', align: 'right' as const },
    { header: 'Share', key: 'share', align: 'right' as const },
    {
        header: 'Growth', key: 'growth', align: 'right' as const, render: (val: string, row: any) => (
            <span style={{ color: row.isPositive ? '#059669' : '#DC2626', fontWeight: 600 }}>{val}</span>
        )
    }
];

export default function ImportPartners() {
    return (
        <ChartSectionWrapper
            title="Import Trading Partners of Vietnam"
            value="233 Countries"
        >
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', gap: '32px', alignItems: 'stretch' }}>
                {/* Visual Map Placeholder with CTA */}
                <div style={{
                    position: 'relative',
                    height: '100%',
                    minHeight: '400px',
                    background: '#F8FAFC',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #E5E7EB',
                    backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    overflow: 'hidden'
                }}>
                    <div style={{ textAlign: 'center', opacity: 0.7, marginBottom: '24px' }}>
                        <div style={{ fontSize: '64px', marginBottom: '16px' }}>🗺️</div>
                        <span style={{ color: '#64748B', fontWeight: 600, fontSize: '18px' }}>Global Trade Distribution</span>
                        <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '8px' }}>Vietnam imports from 233+ countries</p>
                    </div>

                    <a
                        href="https://dashboard.exportgenius.in/sign-up"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: '#0F172A',
                            color: 'white',
                            padding: '14px 24px',
                            borderRadius: '12px',
                            fontWeight: 700,
                            fontSize: '14px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.background = '#2563EB';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.background = '#0F172A';
                        }}
                    >
                        View Interactive Map
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <ScrollableTable columns={tableColumns} data={partnersData} maxHeight="500px" />
            </div>
        </ChartSectionWrapper>
    );
}

