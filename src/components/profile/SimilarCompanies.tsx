import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const companies = [
    { name: 'LG Electronics Vietnam', category: 'Electronics', shipments: '42,500', rating: 4.8 },
    { name: 'Foxconn Vietnam', category: 'Manufacturing', shipments: '38,200', rating: 4.5 },
    { name: 'Intel Products Vietnam', category: 'Semiconductors', shipments: '25,600', rating: 4.9 },
    { name: 'Canon Vietnam Co., Ltd', category: 'Optical Tech', shipments: '18,400', rating: 4.4 },
];

export default function SimilarCompanies() {
    return (
        <div style={{ marginTop: '48px', paddingBottom: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--grey-900)' }}>Top Strategic Competitors in Vietnam</h2>
                    <p style={{ color: 'var(--grey-600)', fontSize: '15px', marginTop: '4px' }}>Analyze direct market competitors and industry leaders operating within the same electronics and manufacturing segments.</p>
                </div>
                <button style={{ color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                    View Company Directory <ArrowRight size={16} />
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {companies.map((company, i) => (
                    <div key={i} style={{
                        background: 'white',
                        padding: '24px',
                        borderRadius: '12px',
                        border: '1px solid var(--grey-200)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                    }}
                        onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 12px 20px -5px rgba(0,0,0,0.1)';
                        }}
                        onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <div style={{ background: 'var(--grey-100)', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'var(--primary)', fontSize: '20px' }}>
                                {company.name.charAt(0)}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 700, color: '#F59E0B' }}>
                                <Star size={14} fill="#F59E0B" /> {company.rating}
                            </div>
                        </div>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px', color: 'var(--grey-900)' }}>{company.name}</h3>
                        <div style={{ fontSize: '13px', color: 'var(--grey-500)', marginBottom: '16px' }}>{company.category}</div>

                        <div style={{ padding: '12px', background: 'var(--grey-50)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '12px', color: 'var(--grey-600)' }}>Yearly Shipments</span>
                            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--grey-900)' }}>{company.shipments}+</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
