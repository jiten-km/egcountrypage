import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lock, CheckCircle2, ShieldCheck, Database, Users, FileText } from 'lucide-react';

export default function ExecutiveOverview() {
    const [openSections, setOpenSections] = useState({
        dataSource: true,
        dataFields: false,
        decisionMakers: false
    });

    const toggleSection = (section: 'dataSource' | 'dataFields' | 'decisionMakers') => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--grey-200)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ padding: '32px' }}>
                {/* Intro Summary */}
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', marginBottom: '32px' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'var(--grey-50)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--grey-100)',
                        flexShrink: 0
                    }}>
                        <ShieldCheck size={32} color="var(--primary)" />
                    </div>
                    <p style={{ fontSize: '16px', color: 'var(--grey-700)', lineHeight: '1.7' }}>
                        <strong>Samsung Electronics Vietnam (SEV)</strong> is a dominant global player in the electronics sector, operating as a dual-facing powerhouse. Currently, SEV maintains a massive trade portfolio with <strong>128,450 export shipments</strong> to <strong>452 verified buyers</strong> and <strong>52,882 import shipments</strong> from <strong>312 strategic suppliers</strong>.
                    </p>
                </div>

                {/* Exports Sub-section */}
                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--grey-900)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Exports:
                    </h3>
                    <div style={{ paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <p style={{ fontSize: '15px', color: 'var(--grey-600)', lineHeight: '1.6' }}>
                            According to <strong>Export Genius's</strong> premium trade intelligence:
                        </p>
                        <p style={{ fontSize: '15px', color: 'var(--grey-600)', lineHeight: '1.6' }}>
                            Samsung has successfully dispatched <strong>128,450 shipments</strong> to <strong>452 verified buyers</strong> across critical global markets, with high concentration in the <strong>United States</strong>, <strong>United Kingdom</strong>, and <strong>Germany</strong>.
                        </p>

                        <div style={{ marginTop: '8px' }}>
                            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--grey-900)', marginBottom: '8px' }}>Products exported primarily fall under:</div>
                            <ul style={{ paddingLeft: '20px', margin: '0', color: 'var(--primary)', fontWeight: 600, fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <li>• HS Code 8517 - Smartphones & Wireless Devices</li>
                                <li>• HS Code 8528 - OLED & LED Display Units</li>
                                <li>• HS Code 8542 - Integrated Electronic Circuits</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: '12px' }}>
                            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--grey-900)', marginBottom: '8px' }}>Top strategic buyers include:</div>
                            <ul style={{ paddingLeft: '20px', margin: '0', color: 'var(--primary)', fontWeight: 600, fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <li>• Samsung Electronics America Inc</li>
                                <li>• Samsung Electronics UK Ltd</li>
                                <li>• Global Logistics & Distribution Partners</li>
                            </ul>
                        </div>

                        <p style={{ fontSize: '14px', fontStyle: 'italic', color: 'var(--grey-500)', marginTop: '12px', background: 'var(--grey-50)', padding: '12px', borderRadius: '8px' }}>
                            These data-driven insights help exporters evaluate shipping frequencies, analyze product lifecycles, and identify high-value acquisition targets using our <strong>Opportunity Finder</strong> tool.
                        </p>
                    </div>
                </div>

                {/* Imports Sub-section */}
                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--grey-900)', marginBottom: '16px' }}>
                        Imports:
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <p style={{ fontSize: '15px', color: 'var(--grey-600)', lineHeight: '1.6' }}>
                            On the procurement side, Samsung sustains a highly resilient sourcing network, with <strong>52,882 shipments</strong> verified from <strong>312 reliable suppliers</strong>, predominantly located in <strong>South Korea</strong>, <strong>China</strong>, and <strong>Japan</strong>.
                        </p>

                        <div style={{ marginTop: '8px' }}>
                            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--grey-900)', marginBottom: '8px' }}>Key imported components fall under:</div>
                            <ul style={{ paddingLeft: '20px', margin: '0', color: 'var(--primary)', fontWeight: 600, fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <li>• HS Code 8541 - Semiconductor Wafers</li>
                                <li>• HS Code 7006 - Specialized Display Glass</li>
                                <li>• HS Code 2804 - High-Purity Gases for Manufacturing</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: '12px' }}>
                            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--grey-900)', marginBottom: '8px' }}>Primary global suppliers include:</div>
                            <ul style={{ paddingLeft: '20px', margin: '0', color: 'var(--primary)', fontWeight: 600, fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <li>• Qualcomm Technologies Inc</li>
                                <li>• Corning Glass Taiwan</li>
                                <li>• ASML Netherlands B.V.</li>
                            </ul>
                        </div>

                        <p style={{ fontSize: '14px', fontStyle: 'italic', color: 'var(--grey-500)', marginTop: '12px', background: 'var(--grey-50)', padding: '12px', borderRadius: '8px' }}>
                            These insights empower category managers to benchmark supplier lead times, mitigate supply chain risks, and discover alternative vendors using the <strong>Supplier Diversifier</strong> module.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <button style={{
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '16px 40px',
                        borderRadius: '100px',
                        fontWeight: 800,
                        fontSize: '16px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)',
                        transition: 'transform 0.2s'
                    }}>
                        Unlock All Strategic Partners <Lock size={18} />
                    </button>
                </div>

                {/* Collapsible Info Sections */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--grey-100)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--grey-100)' }}>

                    {/* Section 1: Data Source */}
                    <div style={{ background: 'white' }}>
                        <button
                            onClick={() => toggleSection('dataSource')}
                            style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Database size={20} color="var(--primary)" />
                                <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--grey-900)' }}>Data Source</span>
                            </div>
                            {openSections.dataSource ? <ChevronUp size={20} color="var(--grey-400)" /> : <ChevronDown size={20} color="var(--grey-400)" />}
                        </button>
                        {openSections.dataSource && (
                            <div style={{ padding: '0 24px 24px 56px', fontSize: '14px', color: 'var(--grey-600)', lineHeight: '1.6' }}>
                                The insights above are powered by <strong>Export Genius's Global Intelligence Engine</strong>, specifically utilizing verified <strong>Vietnam Export-Import Customs Data</strong>. This dataset is updated <strong>daily</strong> and covers 203 countries with unmatched accuracy, ensuring decision-makers have the most current market view.
                            </div>
                        )}
                    </div>

                    {/* Section 2: Data Fields */}
                    <div style={{ background: 'white' }}>
                        <button
                            onClick={() => toggleSection('dataFields')}
                            style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <FileText size={20} color="var(--primary)" />
                                <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--grey-900)' }}>Data Fields</span>
                            </div>
                            {openSections.dataFields ? <ChevronUp size={20} color="var(--grey-400)" /> : <ChevronDown size={20} color="var(--grey-400)" />}
                        </button>
                        {openSections.dataFields && (
                            <div style={{ padding: '0 24px 24px 56px', fontSize: '14px', color: 'var(--grey-600)', lineHeight: '1.6' }}>
                                <div style={{ marginBottom: '8px' }}>Each record in our database provides comprehensive granularity:</div>
                                <ul style={{ margin: '0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <li>• Declared Product Description & HS Codes</li>
                                    <li>• Shipment Timestamp, Weight, and Unit Metrics</li>
                                    <li>• Origin/Destination Countries & Logistics Hubs</li>
                                    <li>• Verified Legal Entities (Importers & Exporters)</li>
                                    <li>• Exclusive Decision Maker Contact Connectivity</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Section 3: Decision Makers */}
                    <div style={{ background: 'white' }}>
                        <button
                            onClick={() => toggleSection('decisionMakers')}
                            style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Users size={20} color="var(--primary)" />
                                <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--grey-900)' }}>Decision Makers</span>
                            </div>
                            {openSections.decisionMakers ? <ChevronUp size={20} color="var(--grey-400)" /> : <ChevronDown size={20} color="var(--grey-400)" />}
                        </button>
                        {openSections.decisionMakers && (
                            <div style={{ padding: '0 24px 24px 56px', fontSize: '14px', color: 'var(--grey-600)', lineHeight: '1.6' }}>
                                Our premium intelligence includes <strong>Decision Maker Profiles</strong> across major trading hubs. This includes verified LinkedIn profiles, direct corporate email addresses, and phone numbers for C-level executives and key logistics personnel.
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
