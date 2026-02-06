"use client";
import React, { useState } from 'react';
import { ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';

import ScrollableTable from '../ui/ScrollableTable';
import SectionContainer from '../ui/SectionContainer';
import { importersData, suppliersData } from '@/data/mockTradeData';

export default function TopImportersSection() {
    const [activeTab, setActiveTab] = useState('importers');
    const [timeRange, setTimeRange] = useState('1Y');
    const [submitted, setSubmitted] = useState(false);

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
                        { id: 'importers', label: 'Top Importers' },
                        { id: 'suppliers', label: 'Top Suppliers' }
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
                        {/* Left: Request Access Form */}
                        <div style={{
                            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
                            borderRadius: '16px',
                            padding: '40px',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '100%'
                        }}>
                            {/* Decorative Background */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
                                pointerEvents: 'none'
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(59, 130, 246, 0.2)',
                                    border: '1px solid rgba(59, 130, 246, 0.3)',
                                    padding: '6px 12px',
                                    borderRadius: '100px',
                                    color: '#93c5fd',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    marginBottom: '24px',
                                    backdropFilter: 'blur(4px)'
                                }}>
                                    <TrendingUp size={14} />
                                    PREMIUM ACCESS
                                </div>

                                <h3 style={{
                                    fontSize: '32px',
                                    fontWeight: 800,
                                    marginBottom: '16px',
                                    lineHeight: 1.2,
                                    background: 'linear-gradient(to right, #ffffff, #93c5fd)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Unlock Full Importer Details
                                </h3>

                                <p style={{
                                    fontSize: '15px',
                                    lineHeight: 1.6,
                                    color: '#cbd5e1',
                                    marginBottom: '32px'
                                }}>
                                    Get detailed profiles of 100,000+ companies including contact info, shipment volume, and trading partners.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {[
                                        'View Complete Company Profiles',
                                        'Track Competitor Shipments',
                                        'Direct Decision Maker Contacts'
                                    ].map((feature, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#e2e8f0' }}>
                                            <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '2px', borderRadius: '50%' }}>
                                                <ShieldCheck size={14} color="#34d399" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: '40px' }}>
                                    <a href="https://dashboard.exportgenius.in/sign-up" target="_blank" rel="noopener noreferrer" style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: '#3b82f6',
                                        color: 'white',
                                        padding: '14px 28px',
                                        borderRadius: '100px',
                                        fontWeight: 700,
                                        fontSize: '15px',
                                        textDecoration: 'none',
                                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
                                        transition: 'all 0.3s ease',
                                        width: 'fit-content'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.6)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.4)';
                                        }}
                                    >
                                        Access Full Database
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ScrollableTable columns={tableColumns} data={data} maxHeight="450px" />
                    </div>
                </div>

                {/* Data Source Footer */}
                <div style={{
                    padding: '16px 32px',
                    borderTop: '1px solid #f1f5f9',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: '#f8fafc'
                }}>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Data Source: <span style={{ color: '#1E293B' }}>Export Genius</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img
                            src="https://www.exportgenius.in/images/logo.png"
                            alt="Export Genius"
                            style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}


