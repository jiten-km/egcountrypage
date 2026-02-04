"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const importersData = [
    { id: 1, company: 'Samsung Electronics Vietnam', country: '🇰🇷', hsCode: '8517', product: 'Smartphones and Mobile Devices', shipments: 15234, quantity: '2.5M units', value: '$450.2M', port: 'Cat Lai' },
    { id: 2, company: 'LG Display Vietnam', country: '🇰🇷', hsCode: '8529', product: 'LCD Panels and Display Components', shipments: 8923, quantity: '1.8M units', value: '$320.5M', port: 'Hai Phong' },
    { id: 3, company: 'Intel Products Vietnam', country: '🇺🇸', hsCode: '8542', product: 'Integrated Circuits & Microprocessors', shipments: 6234, quantity: '950K units', value: '$280.3M', port: 'Tan Son Nhat' },
    { id: 4, company: 'Canon Vietnam', country: '🇯🇵', hsCode: '9006', product: 'Camera Equipment and Optical Devices', shipments: 4567, quantity: '780K units', value: '$195.7M', port: 'Da Nang' },
    { id: 5, company: 'Foxconn Vietnam', country: '🇨🇳', hsCode: '8473', product: 'Electronic Components and Parts', shipments: 12890, quantity: '3.2M units', value: '$410.8M', port: 'Cat Lai' },
    { id: 6, company: 'Panasonic Vietnam', country: '🇯🇵', hsCode: '8516', product: 'Home Appliances and Electronics', shipments: 3456, quantity: '620K units', value: '$145.2M', port: 'Hai Phong' },
    { id: 7, company: 'Nike Vietnam', country: '🇺🇸', hsCode: '6403', product: 'Footwear Components and Materials', shipments: 18900, quantity: '5.6M units', value: '$520.4M', port: 'Cat Lai' },
    { id: 8, company: 'Honda Vietnam', country: '🇯🇵', hsCode: '8714', product: 'Motorcycle Parts and Accessories', shipments: 5678, quantity: '1.2M units', value: '$215.6M', port: 'Ho Chi Minh' },
    { id: 9, company: 'Jabil Circuit Vietnam', country: '🇺🇸', hsCode: '8544', product: 'Insulated Wire and Cable', shipments: 4123, quantity: '890K units', value: '$178.9M', port: 'Hai Phong' },
    { id: 10, company: 'Bosch Vietnam', country: '🇩🇪', hsCode: '8501', product: 'Electric Motors and Generators', shipments: 3890, quantity: '670K units', value: '$165.3M', port: 'Da Nang' },
];

export default function ImportersTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(importersData.length / itemsPerPage);

    return (
        <div style={{ background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--grey-200)' }}>
            {/* Table Header */}
            <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '20px 24px',
                color: 'white'
            }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>Vietnam Top Leading Importers</h3>
                <p style={{ fontSize: '14px', opacity: 0.9 }}>Comprehensive list of major companies importing to Vietnam</p>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: 'var(--grey-50)', borderBottom: '2px solid var(--grey-200)' }}>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--grey-700)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>#</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--grey-700)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Importer</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--grey-700)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>HS Code</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--grey-700)', textTransform: 'uppercase', letterSpacing: '0.5px', minWidth: '250px' }}>Product Description</th>
                            <th style={{ padding: '12px 16px', textAlign: 'right', fontSize: '13px', fontWeight: 600, color: 'var(--grey-700)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Shipments</th>
                            <th style={{ padding: '12px 16px', textAlign: 'right', fontSize: '13px', fontWeight: 600, color: 'var(--grey-700)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quantity</th>
                            <th style={{ padding: '12px 16px', textAlign: 'right', fontSize: '13px', fontWeight: 600, color: 'var(--grey-700)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Value</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--grey-700)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Port</th>
                        </tr>
                    </thead>
                    <tbody>
                        {importersData.map((row, index) => (
                            <tr
                                key={row.id}
                                style={{
                                    borderBottom: '1px solid var(--grey-100)',
                                    transition: 'background 0.1s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--grey-50)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                                <td style={{ padding: '16px', fontSize: '14px', color: 'var(--grey-600)' }}>{index + 1}</td>
                                <td style={{ padding: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <span style={{ fontSize: '24px' }}>{row.country}</span>
                                        <div>
                                            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--grey-900)' }}>{row.company}</div>
                                            <div style={{ fontSize: '12px', color: 'var(--grey-500)' }}>Verified Importer</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{
                                        background: 'var(--primary)',
                                        color: 'white',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '12px',
                                        fontFamily: 'var(--font-roboto-mono)',
                                        fontWeight: 600
                                    }}>
                                        {row.hsCode}
                                    </span>
                                </td>
                                <td style={{ padding: '16px', fontSize: '14px', color: 'var(--grey-700)' }}>{row.product}</td>
                                <td style={{ padding: '16px', textAlign: 'right', fontSize: '14px', fontWeight: 500 }}>{row.shipments.toLocaleString()}</td>
                                <td style={{ padding: '16px', textAlign: 'right', fontSize: '14px', color: 'var(--grey-600)' }}>{row.quantity}</td>
                                <td style={{ padding: '16px', textAlign: 'right', fontSize: '14px', fontWeight: 600, color: 'var(--success)' }}>{row.value}</td>
                                <td style={{ padding: '16px', fontSize: '13px', color: 'var(--grey-600)' }}>{row.port}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div style={{
                padding: '16px 24px',
                borderTop: '1px solid var(--grey-200)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'var(--grey-50)'
            }}>
                <div style={{ fontSize: '14px', color: 'var(--grey-600)' }}>
                    Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, importersData.length)} of {importersData.length} importers
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                        disabled={currentPage === 1}
                        style={{
                            padding: '8px 12px',
                            border: '1px solid var(--grey-300)',
                            borderRadius: '6px',
                            background: 'white',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                            opacity: currentPage === 1 ? 0.5 : 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}
                    >
                        <ChevronLeft size={16} /> Previous
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            style={{
                                padding: '8px 14px',
                                border: '1px solid var(--grey-300)',
                                borderRadius: '6px',
                                background: currentPage === i + 1 ? 'var(--primary)' : 'white',
                                color: currentPage === i + 1 ? 'white' : 'var(--grey-700)',
                                fontWeight: currentPage === i + 1 ? 600 : 400,
                                cursor: 'pointer'
                            }}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        style={{
                            padding: '8px 12px',
                            border: '1px solid var(--grey-300)',
                            borderRadius: '6px',
                            background: 'white',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                            opacity: currentPage === totalPages ? 0.5 : 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}
                    >
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
