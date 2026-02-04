"use client";
import React, { useState } from 'react';
import {
    FileText,
    Calendar,
    Globe,
    Box,
    Truck,
    User,
    MapPin,
    ShieldCheck,
    ArrowRight,
    Phone,
    Anchor,
    Weight,
    DollarSign,
    Layers,
    ChevronDown
} from 'lucide-react';

export default function BillOfLadingSection() {
    const [submitted, setSubmitted] = useState(false);
    return (
        <section id="bill-of-lading" style={{ marginTop: '100px', marginBottom: '100px', fontFamily: 'var(--font-inter)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '60px', alignItems: 'flex-start' }}>

                {/* Left Side: Summary & Action */}
                <div style={{ position: 'sticky', top: '100px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#eff6ff',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        color: '#2563eb',
                        fontSize: '13px',
                        fontWeight: 700,
                        marginBottom: '24px'
                    }}>
                        <ShieldCheck size={16} />
                        DETAILED SHIPMENT PREVIEW
                    </div>
                    <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0f172a', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                        Complete <span style={{ color: '#2563eb' }}>Data Transparency</span> for Vietnam Imports
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '17px', lineHeight: 1.6, marginBottom: '32px' }}>
                        Our database provides an exhaustive list of 25+ fields for every transaction. Understand your competition with precise details on pricing, quantities, logistics, and company contact information.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
                        <QuickFeature label="Company Profiles" />
                        <QuickFeature label="Pricing Intelligence" />
                        <QuickFeature label="Logistics Routes" />
                        <QuickFeature label="HS Code Analysis" />
                    </div>

                    {/* Request Access Form */}
                    <div style={{
                        marginTop: '0px',
                        background: 'white',
                        borderRadius: '32px',
                        padding: '40px',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)',
                        border: '1px solid #f1f5f9'
                    }}>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '20px 0' }}>
                                <div style={{ width: '60px', height: '60px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#16a34a' }}>
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Thank You!</h3>
                                <p style={{ color: '#64748b', fontSize: '15px' }}>Our team will contact you shortly.</p>
                                <button onClick={() => setSubmitted(false)} style={{ marginTop: '24px', background: 'none', border: '1px solid #cbd5e1', padding: '8px 20px', borderRadius: '100px', fontSize: '14px', fontWeight: 600, color: '#64748b', cursor: 'pointer' }}>Send another</button>
                            </div>
                        ) : (
                            <>
                                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#004a8b', marginBottom: '24px' }}>Request to Access Full Database</h3>
                                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <input
                                            type="text"
                                            placeholder="First Name*"
                                            required
                                            style={{
                                                padding: '14px 18px',
                                                borderRadius: '10px',
                                                border: 'none',
                                                background: '#f0f4f8',
                                                fontSize: '14px',
                                                outline: 'none',
                                                color: '#1e293b'
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name*"
                                            required
                                            style={{
                                                padding: '14px 18px',
                                                borderRadius: '10px',
                                                border: 'none',
                                                background: '#f0f4f8',
                                                fontSize: '14px',
                                                outline: 'none',
                                                color: '#1e293b'
                                            }}
                                        />
                                    </div>

                                    <input
                                        type="email"
                                        placeholder="Email Id*"
                                        required
                                        style={{
                                            padding: '14px 18px',
                                            borderRadius: '10px',
                                            border: 'none',
                                            background: '#f0f4f8',
                                            fontSize: '14px',
                                            outline: 'none',
                                            width: '100%',
                                            color: '#1e293b'
                                        }}
                                    />

                                    <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '12px' }}>
                                        <div style={{ position: 'relative' }}>
                                            <select style={{
                                                padding: '14px 18px',
                                                borderRadius: '10px',
                                                border: 'none',
                                                background: '#f0f4f8',
                                                fontSize: '14px',
                                                outline: 'none',
                                                width: '100%',
                                                appearance: 'none',
                                                cursor: 'pointer',
                                                fontWeight: 600,
                                                color: '#1e293b'
                                            }}>
                                                <option>+91</option>
                                                <option value="+84">+84</option>
                                                <option value="+1">+1</option>
                                            </select>
                                            <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                                <ChevronDown size={16} color="#64748b" />
                                            </div>
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="Contact No.*"
                                            required
                                            style={{
                                                padding: '14px 18px',
                                                borderRadius: '10px',
                                                border: 'none',
                                                background: '#f0f4f8',
                                                fontSize: '14px',
                                                outline: 'none',
                                                color: '#1e293b'
                                            }}
                                        />
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Company Name*"
                                        required
                                        style={{
                                            padding: '14px 18px',
                                            borderRadius: '10px',
                                            border: 'none',
                                            background: '#f0f4f8',
                                            fontSize: '14px',
                                            outline: 'none',
                                            color: '#1e293b'
                                        }}
                                    />

                                    <textarea
                                        placeholder="Message*"
                                        rows={4}
                                        required
                                        style={{
                                            padding: '14px 18px',
                                            borderRadius: '10px',
                                            border: 'none',
                                            background: '#f0f4f8',
                                            fontSize: '14px',
                                            outline: 'none',
                                            resize: 'none',
                                            fontFamily: 'inherit',
                                            color: '#1e293b'
                                        }}
                                    />

                                    <button
                                        type="submit"
                                        style={{
                                            background: '#003e7e',
                                            color: 'white',
                                            padding: '16px',
                                            borderRadius: '100px',
                                            fontSize: '16px',
                                            fontWeight: 700,
                                            border: 'none',
                                            cursor: 'pointer',
                                            marginTop: '8px',
                                            transition: 'all 0.2s',
                                            boxShadow: '0 10px 15px -3px rgba(0, 62, 126, 0.2)'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        Submit Now
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Side: High-Fidelity Record View */}
                <div style={{ position: 'relative' }}>

                    {/* The Document View */}
                    <div style={{
                        background: 'white',
                        borderRadius: '32px',
                        border: '1px solid #f1f5f9',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.06)',
                        overflow: 'hidden'
                    }}>
                        {/* Status Bar */}
                        <div style={{
                            background: '#0f172a',
                            padding: '20px 32px',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
                                <span style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '0.05em' }}>VIETNAM IMPORT SHIPMENT RECORD</span>
                            </div>
                            <div style={{ fontSize: '12px', fontWeight: 600, color: '#94a3b8' }}>368,425,280 Shipments</div>
                        </div>

                        {/* Top Context Section */}
                        <div style={{ padding: '32px', borderBottom: '1px solid #f1f5f9', background: 'linear-gradient(to right, #f8fafc, white)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                                <DataContextItem icon={<Calendar size={16} />} label="DATE" value="31-May-2023" />
                                <DataContextItem icon={<Globe size={16} />} label="ORIGIN COUNTRY" value="Viet Nam" />
                                <DataContextItem icon={<Layers size={16} />} label="HS CODE" value="39031920" />
                            </div>
                        </div>

                        {/* Company Details Segment */}
                        <div style={{ padding: '32px' }}>
                            <div style={{ display: 'grid', gap: '24px' }}>
                                <CompanyBox
                                    type="IMPORTER"
                                    name="Tenma (Hcm) Vietnam Company Limited Hanoi Branch"
                                    address="Lot 88 (Area A), Noi Bai Industrial Park - Quang Tien Commune - Soc Son District - Hanoi"
                                    color="#2563eb"
                                />
                                <CompanyBox
                                    type="EXPORTER"
                                    name="Tiee Ing Viet Nam Rubber Rubber Company Limited"
                                    address="Km5 Quoc Lo 18 Khu Cong Nghiep, Que Vo Phuong Phuong Lieu Thi Xa Que Vo, Tinh Bac Ninh Vn"
                                    color="#f59e0b"
                                />
                            </div>
                        </div>

                        {/* Product Segment */}
                        <div style={{ padding: '0 32px 32px' }}>
                            <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '24px', border: '1px solid #f1f5f9' }}>
                                <SectionTitle icon={<Box size={18} />} title="Product Details" />
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginTop: '16px' }}>
                                    <DataField label="Product Description" value="Colored GPPS plastic beads. 100% brand new, 25kg/bag" fullWidth />
                                </div>
                            </div>
                        </div>

                        {/* Value & Quantity Segment */}
                        <div style={{ padding: '0 32px 32px' }}>
                            <div style={{ background: '#eff6ff', borderRadius: '24px', padding: '24px', border: '1px solid #dbeafe' }}>
                                <SectionTitle icon={<DollarSign size={18} />} title="Pricing Intelligence" color="#1e40af" />
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px', marginTop: '16px' }}>
                                    <HighlightField label="Net Weight" value="504" />
                                    <HighlightField label="Quantity" value="20.16" />
                                    <HighlightField label="Unit" value="Kilograms" />
                                    <HighlightField label="Total Value USD" value="$ 798.05" />
                                </div>

                            </div>
                        </div>

                        {/* Logistics Segment */}
                        <div style={{ padding: '0 32px 32px' }}>
                            <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '24px', border: '1px solid #f1f5f9' }}>
                                <SectionTitle icon={<Box size={18} />} title="Logistics Intelligence" />
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginTop: '16px' }}>
                                    <DataField label="Import Port" value="Noi Bai Port" />
                                    <DataField label="Foreign Port" value="Tiee Ing Vn" />
                                    <DataField label="Mode of Transport" value="Sea" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </section>
    );
}

function QuickFeature({ label }: { label: string }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#475569', fontWeight: 600 }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }}></div>
            {label}
        </div>
    );
}

function DataContextItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.05em' }}>
                {icon} {label}
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>{value}</div>
        </div>
    );
}

interface CompanyBoxProps {
    type: string;
    name: string;
    address?: string;
    phone?: string;
    province?: string;
    color: string;
}

function CompanyBox({ type, name, address, phone, province, color }: CompanyBoxProps) {
    return (
        <div style={{ position: 'relative' }}>
            <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                background: color,
                color: 'white',
                fontSize: '10px',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '100px',
                letterSpacing: '0.05em',
                zIndex: 1
            }}>
                {type}
            </div>
            <div style={{ padding: '24px', border: `1px solid ${color}22`, borderRadius: '20px', background: `${color}05` }}>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{name}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {address && (
                        <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                            <MapPin size={14} style={{ flexShrink: 0, marginTop: '2px' }} /> {address}
                        </div>
                    )}
                    <div style={{ display: 'flex', gap: '24px' }}>
                        {province && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748b' }}>
                                <Anchor size={14} /> <strong style={{ color: '#475569' }}>Province:</strong> {province}
                            </div>
                        )}
                        {phone && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748b' }}>
                                <Phone size={14} /> <strong style={{ color: '#475569' }}>Phone:</strong> {phone}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function SectionTitle({ icon, title, color = '#0f172a' }: { icon: React.ReactNode, title: string, color?: string }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 800, color: color, marginBottom: '4px' }}>
            {icon} {title}
        </div>
    );
}

function DataField({ label, value, fullWidth = false }: { label: string, value: string, fullWidth?: boolean }) {
    return (
        <div style={{ gridColumn: fullWidth ? 'span 2' : 'span 1' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#334155', lineHeight: 1.4 }}>{value}</div>
        </div>
    );
}

function HighlightField({ label, value }: { label: string, value: string }) {
    return (
        <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', marginBottom: '4px', textTransform: 'uppercase' }}>{label}</div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#1e40af' }}>{value}</div>
        </div>
    );
}

function MiniField({ label, value }: { label: string, value: string }) {
    return (
        <div>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', marginBottom: '4px' }}>{label}</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569' }}>{value}</div>
        </div>
    );
}
