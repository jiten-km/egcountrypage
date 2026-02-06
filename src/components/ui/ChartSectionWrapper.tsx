"use client";
import React, { useState } from 'react';

interface ChartSectionWrapperProps {
    title: string;
    value: string;
    children: React.ReactNode;
}

const timeRanges = ['1M', '3M', '6M', '1Y', '3Y', 'ALL'];

export default function ChartSectionWrapper({ title, value, children }: ChartSectionWrapperProps) {
    const [activeTab, setActiveTab] = useState<'YOY' | 'MOM'>('YOY');
    const [activeRange, setActiveRange] = useState('1Y');

    return (
        <div style={{
            background: 'white',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
            overflow: 'hidden',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
        }}>
            {/* Tabs */}
            <div style={{ display: 'flex', padding: '0 20px', gap: '24px', background: '#F9FAFB', borderBottom: '1px solid #F3F4F6' }}>
                <button
                    onClick={() => setActiveTab('YOY')}
                    style={{
                        padding: '12px 0',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: activeTab === 'YOY' ? '#2563EB' : '#6B7280',
                        borderBottom: activeTab === 'YOY' ? '2px solid #2563EB' : '2px solid transparent',
                        background: 'transparent',
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                >
                    YOY comparison
                </button>
                <button
                    onClick={() => setActiveTab('MOM')}
                    style={{
                        padding: '12px 0',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: activeTab === 'MOM' ? '#2563EB' : '#6B7280',
                        borderBottom: activeTab === 'MOM' ? '2px solid #2563EB' : '2px solid transparent',
                        background: 'transparent',
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                >
                    MOM comparison
                </button>
            </div>

            {/* Sub-header with Count and Time Range */}
            <div style={{
                padding: '20px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px'
            }}>
                <div>
                    <div style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>{title}</div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#111827', marginTop: '4px' }}>{value}</div>
                </div>

                {/* Time Range Filter Links */}
                <div style={{ display: 'flex', gap: '8px' }}>
                    {timeRanges.map((range) => (
                        <a
                            key={range}
                            href="https://dashboard.exportgenius.in/sign-up"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                fontSize: '13px',
                                fontWeight: 500,
                                color: activeRange === range ? '#2563EB' : '#9CA3AF',
                                cursor: 'pointer',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                transition: 'color 0.2s'
                            }}
                        >
                            {range}
                        </a>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div style={{ padding: '0 20px 20px' }}>
                {children}
            </div>

            {/* Data Source Footer */}
            <div style={{
                padding: '12px 20px',
                borderTop: '1px solid #F3F4F6',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#FAFBFC'
            }}>
                <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Data Source: <span style={{ color: '#374151' }}>Export Genius</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <img
                        src="https://www.exportgenius.in/images/logo.png"
                        alt="Export Genius"
                        style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
                    />
                </div>
            </div>
        </div>
    );
}
