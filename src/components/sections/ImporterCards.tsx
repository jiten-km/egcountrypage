"use client";
import React from 'react';

const importersData = [
    { id: 1, name: 'Importer Co. 1', industry: 'Electronics', shipments: '12,450', value: '$125.6M' },
    { id: 2, name: 'Importer Co. 2', industry: 'Electronics', shipments: '8,230', value: '$89.3M' },
    { id: 3, name: 'Importer Co. 3', industry: 'Electronics', shipments: '6,890', value: '$72.1M' },
    { id: 4, name: 'Importer Co. 4', industry: 'Electronics', shipments: '5,120', value: '$58.4M' },
];

export default function ImporterCards() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {importersData.map((importer) => (
                <div
                    key={importer.id}
                    style={{
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        padding: '20px',
                        transition: 'all 0.2s',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.transform = 'none';
                    }}
                >
                    <div style={{ width: '60px', height: '60px', background: '#F3F4F6', borderRadius: '8px', marginBottom: '16px' }}></div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>{importer.name}</h3>
                    <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {importer.industry}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                        <span style={{ color: '#6B7280' }}>Shipments</span>
                        <span style={{ fontWeight: 600 }}>{importer.shipments}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                        <span style={{ color: '#6B7280' }}>Value</span>
                        <span style={{ fontWeight: 600 }}>{importer.value}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
