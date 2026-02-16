import React from 'react';
import { Info, Tag, Phone, Mail, Calendar, User, Map, Database, ShieldCheck } from 'lucide-react';

const facts = [
    { icon: <Info size={18} />, label: 'Brand Name', value: 'Samsung' },
    { icon: <Phone size={18} />, label: 'Contact', value: '+84 222 3696 111' },
    { icon: <Mail size={18} />, label: 'Company Email', value: 'support.vn@samsung.com' },
    { icon: <Calendar size={18} />, label: 'Year Established', value: '2008' },
    { icon: <Map size={18} />, label: 'Industry', value: 'Electronics Manufacturing' }
];

export default function CompanyFactSheet() {
    return (
        <div style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid var(--grey-200)',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
            <div style={{
                padding: '20px 24px',
                borderBottom: '1px solid var(--grey-100)',
                background: 'var(--grey-50)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Database size={18} style={{ color: 'var(--primary)' }} />
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--grey-900)' }}>Quick Fact Sheet</h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#10B981', textTransform: 'uppercase' }}>Live Data</span>
                </div>
            </div>

            <div style={{ padding: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                    {facts.map((fact, index) => (
                        <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: 'var(--grey-50)',
                                border: '1px solid var(--grey-100)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--grey-600)',
                                flexShrink: 0
                            }}>
                                {fact.icon}
                            </div>
                            <div>
                                <div style={{ fontSize: '11px', color: 'var(--grey-400)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{fact.label}</div>
                                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--grey-900)', marginTop: '2px' }}>{fact.value}</div>
                                {fact.label2 && <div style={{ fontSize: '11px', color: 'var(--grey-400)', marginTop: '1px' }}>{fact.label2}</div>}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '32px',
                    padding: '20px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)',
                    color: 'white',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <ShieldCheck size={18} />
                        <span style={{ fontSize: '13px', fontWeight: 700 }}>Profile Completeness</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', marginBottom: '8px', overflow: 'hidden' }}>
                        <div style={{ width: '92%', height: '100%', background: 'white', borderRadius: '3px' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600 }}>
                        <span>92% Analyzed</span>
                        <span>High Accuracy</span>
                    </div>
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', color: 'var(--grey-400)' }}>Last synced: Feb 16, 2026</div>
                </div>
            </div>
        </div>
    );
}
