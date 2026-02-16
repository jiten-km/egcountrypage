import React, { useState } from 'react';
import { ExternalLink, Filter, TrendingUp, TrendingDown } from 'lucide-react';
import TimePeriodSelector from '../ui/TimePeriodSelector';

const exportShipments = [
    { date: '2024-02-10', exporter: 'SAMSUNG ELECTRONICS VIETNAM', importer: 'SAMSUNG ELECTRONICS AMERICA', product: 'Mobile Phones & Parts', quantity: '45,200 Units', value: '$12.4M', port: 'Hai Phong Port' },
    { date: '2024-02-08', exporter: 'SAMSUNG ELECTRONICS VIETNAM', importer: 'SAMSUNG ELECTRONICS UK', product: 'LED Display Panels', quantity: '12,500 Units', value: '$5.2M', port: 'Da Nang Port' },
    { date: '2024-02-05', exporter: 'SAMSUNG ELECTRONICS VIETNAM', importer: 'SAMSUNG ELECTRONICS GERMANY', product: 'Semiconductors', quantity: '85,000 Units', value: '$22.8M', port: 'Hai Phong Port' },
    { date: '2024-02-01', exporter: 'SAMSUNG ELECTRONICS VIETNAM', importer: 'SAMSUNG ELECTRONICS INDIA', product: 'Washing Machines', quantity: '5,000 Units', value: '$1.8M', port: 'Ho Chi Minh Port' },
    { date: '2024-01-28', exporter: 'SAMSUNG ELECTRONICS VIETNAM', importer: 'SAMSUNG ELECTRONICS BRAZIL', product: 'Mobile Accessories', quantity: '120,000 Units', value: '$3.5M', port: 'Hai Phong Port' },
];

const importShipments = [
    { date: '2024-02-12', importer: 'SAMSUNG ELECTRONICS VIETNAM', exporter: 'QUALCOMM TECHNOLOGIES INC', product: 'Electronic Processors', quantity: '210,000 Units', value: '$15.2M', port: 'Hai Phong Port' },
    { date: '2024-02-11', importer: 'SAMSUNG ELECTRONICS VIETNAM', exporter: 'CORNING GLASS TAIWAN', product: 'Display Glass Substrates', quantity: '45,000 Sheets', value: '$8.4M', port: 'Da Nang Port' },
    { date: '2024-02-09', importer: 'SAMSUNG ELECTRONICS VIETNAM', exporter: 'ASML NETHERLANDS', product: 'Lithography Equipment Parts', quantity: '12 Units', value: '$42.1M', port: 'Ho Chi Minh Port' },
    { date: '2024-02-07', importer: 'SAMSUNG ELECTRONICS VIETNAM', exporter: 'MURATA MANUFACTURING JAPAN', product: 'Capacitors & Resistors', quantity: '12.5M Units', value: '$4.2M', port: 'Hai Phong Port' },
    { date: '2024-02-04', importer: 'SAMSUNG ELECTRONICS VIETNAM', exporter: 'SAMSUNG ELECTROMECHANICS KOREA', product: 'Camera Modules', quantity: '350,000 Units', value: '$11.8M', port: 'Vung Tau Port' },
];

export default function ShipmentRecordsTable() {
    const [activeTab, setActiveTab] = useState<'export' | 'import'>('export');
    const [period, setPeriod] = useState('1Y');
    const shipments = activeTab === 'export' ? exportShipments : importShipments;

    return (
        <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--grey-200)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ flex: 1, paddingRight: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--grey-900)' }}>Shipment Manifest Records</h3>
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '8px', lineHeight: '1.6' }}>Track individual shipment manifests and customs declarations across all {activeTab} transactions. This granular data enables precise verification of trade counterparties, product specifications, and real-time compliance monitoring against regulatory frameworks.</p>
                </div>
                <div style={{ display: 'flex', background: '#2563eb', padding: '4px', borderRadius: '10px', flexShrink: 0 }}>
                    <button
                        onClick={() => setActiveTab('export')}
                        style={{
                            padding: '10px 20px',
                            fontSize: '14px',
                            fontWeight: 700,
                            borderRadius: '8px',
                            background: activeTab === 'export' ? 'white' : 'transparent',
                            color: activeTab === 'export' ? '#2563eb' : 'white',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        Export
                    </button>
                    <button
                        onClick={() => setActiveTab('import')}
                        style={{
                            padding: '10px 20px',
                            fontSize: '14px',
                            fontWeight: 700,
                            borderRadius: '8px',
                            background: activeTab === 'import' ? 'white' : 'transparent',
                            color: activeTab === 'import' ? '#2563eb' : 'white',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        Import
                    </button>
                </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
                <TimePeriodSelector activePeriod={period} onPeriodChange={setPeriod} />
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '940px' }}>
                    <thead>
                        <tr style={{ background: 'var(--grey-25, #fafafa)', color: 'var(--grey-600)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            <th style={{ padding: '16px 24px', fontWeight: 700 }}>Date</th>
                            <th style={{ padding: '16px 24px', fontWeight: 700 }}>{activeTab === 'export' ? 'Importer' : 'Exporter'}</th>
                            <th style={{ padding: '16px 24px', fontWeight: 700 }}>Commodity Details</th>
                            <th style={{ padding: '16px 24px', fontWeight: 700 }}>Quantity</th>
                            <th style={{ padding: '16px 24px', fontWeight: 700 }}>Value (USD)</th>
                            <th style={{ padding: '16px 24px', fontWeight: 700 }}>Port of Transit</th>
                            <th style={{ padding: '16px 24px', fontWeight: 700 }}>Manifest</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shipments.map((s, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid var(--grey-50)', fontSize: '14px', transition: 'background 0.2s ease' }} onMouseOver={(e: React.MouseEvent<HTMLTableRowElement>) => e.currentTarget.style.background = 'var(--grey-25, #fafafa)'} onMouseOut={(e: React.MouseEvent<HTMLTableRowElement>) => e.currentTarget.style.background = 'transparent'}>
                                <td style={{ padding: '18px 24px', color: 'var(--grey-900)', fontWeight: 600 }}>{s.date}</td>
                                <td style={{ padding: '18px 24px' }}>
                                    <div style={{ color: 'var(--primary)', fontWeight: 700 }}>{activeTab === 'export' ? s.importer : s.exporter}</div>
                                    <div style={{ fontSize: '11px', color: 'var(--grey-400)', textTransform: 'uppercase', marginTop: '2px' }}>Verified Partner</div>
                                </td>
                                <td style={{ padding: '18px 24px' }}>
                                    <div style={{ fontWeight: 600, color: 'var(--grey-900)' }}>{s.product}</div>
                                    <div style={{ fontSize: '12px', color: 'var(--grey-500)', marginTop: '2px' }}>HS Code: 8517.13.00</div>
                                </td>
                                <td style={{ padding: '18px 24px', color: 'var(--grey-600)' }}>{s.quantity}</td>
                                <td style={{ padding: '18px 24px' }}>
                                    <span style={{
                                        color: activeTab === 'export' ? '#059669' : '#DC2626',
                                        fontWeight: 800,
                                        background: activeTab === 'export' ? '#ECFDF5' : '#FEF2F2',
                                        padding: '4px 10px',
                                        borderRadius: '6px',
                                        fontSize: '13px'
                                    }}>
                                        {s.value}
                                    </span>
                                </td>
                                <td style={{ padding: '18px 24px', color: 'var(--grey-600)' }}>{s.port}</td>
                                <td style={{ padding: '18px 24px' }}>
                                    <button style={{ color: 'var(--primary)', background: 'var(--primary-light, #EFF6FF)', border: 'none', padding: '6px', borderRadius: '6px', cursor: 'pointer' }}>
                                        <ExternalLink size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button style={{ color: '#2563eb', fontWeight: 700, fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', margin: '0 auto', padding: '10px 20px', borderRadius: '8px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#eff6ff'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    View All {shipments.length}+ Shipment Records <ExternalLink size={14} />
                </button>
            </div>
        </div>
    );
}
