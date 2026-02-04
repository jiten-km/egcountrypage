"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';

const relatedSearches = [
    'Vietnam Electronics Import Data',
    'Vietnam Textile Import Statistics',
    'Vietnam Machinery Imports',
    'Vietnam Import Data by HS Code',
    'Vietnam Top Importers List',
    'Vietnam Import Trends 2024',
    'Vietnam Trade Partners',
    'Vietnam Port-wise Import Data',
    'Vietnam Monthly Import Report',
    'Vietnam Custom Import Data',
    'Vietnam Shipment Records',
    'Vietnam Import Suppliers'
];

const relatedProducts = [
    { code: '8517', name: 'Smartphones & Telecom Equipment' },
    { code: '8542', name: 'Integrated Circuits' },
    { code: '8471', name: 'Computer & Parts' },
    { code: '8529', name: 'LCD Panels & Components' },
    { code: '6403', name: 'Footwear' },
    { code: '8473', name: 'Electronic Parts' },
];

export default function RelatedSection() {
    return (
        <div style={{ marginTop: '60px', marginBottom: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                {/* Related Searches */}
                <div style={{
                    background: 'var(--white)',
                    border: '1px solid var(--grey-200)',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: 'var(--grey-900)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>🔍</span> Related Searches
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {relatedSearches.map((search, i) => (
                            <a
                                key={i}
                                href="#"
                                style={{
                                    background: 'var(--grey-50)',
                                    padding: '8px 14px',
                                    borderRadius: '20px',
                                    fontSize: '13px',
                                    color: 'var(--grey-700)',
                                    border: '1px solid var(--grey-200)',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--primary)';
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.borderColor = 'var(--primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--grey-50)';
                                    e.currentTarget.style.color = 'var(--grey-700)';
                                    e.currentTarget.style.borderColor = 'var(--grey-200)';
                                }}
                            >
                                {search}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Related Products by HS Code */}
                <div style={{
                    background: 'var(--white)',
                    border: '1px solid var(--grey-200)',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: 'var(--grey-900)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>📦</span> Popular Products by HS Code
                    </h3>
                    <div style={{ display: 'grid', gap: '12px' }}>
                        {relatedProducts.map((product, i) => (
                            <a
                                key={i}
                                href="#"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '12px 16px',
                                    background: 'var(--grey-50)',
                                    borderRadius: '8px',
                                    border: '1px solid var(--grey-200)',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--info-light)';
                                    e.currentTarget.style.borderColor = 'var(--info)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--grey-50)';
                                    e.currentTarget.style.borderColor = 'var(--grey-200)';
                                    e.currentTarget.style.transform = 'none';
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{
                                        background: 'var(--primary)',
                                        color: 'white',
                                        padding: '6px 10px',
                                        borderRadius: '6px',
                                        fontSize: '12px',
                                        fontFamily: 'var(--font-roboto-mono)',
                                        fontWeight: 600
                                    }}>
                                        {product.code}
                                    </span>
                                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--grey-900)' }}>{product.name}</span>
                                </div>
                                <ExternalLink size={16} color="var(--grey-400)" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
