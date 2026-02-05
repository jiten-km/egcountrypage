"use client";
import React, { useState } from 'react';
import ScrollableTable from '../ui/ScrollableTable';
import SectionContainer from '../ui/SectionContainer';
import { importersData, suppliersData } from '@/data/mockTradeData';

export default function TopImportersSection() {
    const [activeTab, setActiveTab] = useState('importers');
    const [timeRange, setTimeRange] = useState('1Y');

    const data = activeTab === 'importers' ? importersData : suppliersData;
    const maxValue = Math.max(...data.map(d => d.value));

    const tableColumns = [
        {
            header: activeTab === 'importers' ? 'Importer Name' : 'Supplier Name',
            key: 'name',
            align: 'left' as const,
            render: (val: string) => (
                <a href={`https://dashboard.exportgenius.in/search?q=${val}`} target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', fontWeight: 600, textDecoration: 'none' }}>
                    {val}
                </a>
            )
        },
        { header: 'Value ($M)', key: 'value', align: 'right' as const, render: (val: number) => Math.round(val).toLocaleString() },
        { header: 'Share', key: 'percent', align: 'right' as const, render: (val: number) => <span style={{ fontWeight: 700 }}>{val}%</span> }
    ];

    return (
        <SectionContainer
            id="top-importers"
            title="Top Importers and Foreign Suppliers of Vietnam"
            subtitle="Identify the key corporate entities and global organizations that dominate Vietnam's import ecosystem. This section provides shipment-level intelligence on 100+ major importers and their primary international suppliers, enabling detailed competitive analysis and supply chain verification."
            variant="transparent"
            fullWidth={true}
        >
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
                    gap: '32px'
                }}>
                    {[
                        { id: 'importers', label: 'Top 100 Importers' },
                        { id: 'suppliers', label: 'Top 100 Suppliers' }
                    ].map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    padding: '20px 0',
                                    fontSize: '15px',
                                    fontWeight: 700,
                                    color: isActive ? '#2563eb' : '#64748b',
                                    border: 'none',
                                    background: 'none',
                                    cursor: 'pointer',
                                    borderBottom: isActive ? '3px solid #2563eb' : '3px solid transparent',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                <div style={{ padding: '32px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                        <div>
                            <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                                Live Trade Analytics
                            </div>
                            <div style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>
                                {activeTab === 'importers' ? '100+ Major Import Companies' : '100+ Major Global Suppliers'}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px', background: '#F1F5F9', padding: '4px', borderRadius: '8px' }}>
                            {['1M', '3M', '6M', '1Y', '3Y', 'ALL'].map(range => (
                                <button
                                    key={range}
                                    onClick={() => setTimeRange(range)}
                                    style={{
                                        fontSize: '12px',
                                        padding: '6px 12px',
                                        borderRadius: '6px',
                                        fontWeight: 700,
                                        color: timeRange === range ? '#2563eb' : '#64748b',
                                        background: timeRange === range ? 'white' : 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        boxShadow: timeRange === range ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1.2fr', gap: '48px', alignItems: 'stretch' }}>
                        {/* Left: Bar Chart Visualization */}
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                background: '#F8FAFC',
                                borderRadius: '16px',
                                padding: '32px',
                                border: '1px solid #E2E8F0',
                                height: '100%'
                            }}>
                                <div style={{ marginBottom: '24px', fontSize: '14px', fontWeight: 600, color: '#475569' }}>
                                    Value Distribution by Top Entities
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                                    {data.slice(0, 8).map((d, i) => (
                                        <div key={i}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
                                                <span style={{ fontWeight: 700, color: '#1E293B' }}>{d.name.split(' ').slice(0, 3).join(' ')}</span>
                                                <span style={{ color: '#64748B' }}>${Math.round(d.value).toLocaleString()}M</span>
                                            </div>
                                            <div style={{ height: '10px', background: '#E2E8F0', borderRadius: '5px', overflow: 'hidden' }}>
                                                <div style={{
                                                    width: `${(d.value / maxValue) * 100}%`,
                                                    height: '100%',
                                                    background: 'linear-gradient(90deg, #2563EB 0%, #60A5FA 100%)',
                                                    borderRadius: '5px',
                                                    transition: 'width 1.5s ease-out'
                                                }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Sub-CTA */}
                                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                                    <a href="https://dashboard.exportgenius.in/sign-up" target="_blank" rel="noopener noreferrer" style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: '#0F172A',
                                        color: 'white',
                                        padding: '12px 24px',
                                        borderRadius: '12px',
                                        fontWeight: 700,
                                        fontSize: '14px',
                                        textDecoration: 'none'
                                    }}>
                                        Download Report
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right: Scrollable Table */}
                        <ScrollableTable columns={tableColumns} data={data} maxHeight="600px" />
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}


