"use client";
import React, { useState } from 'react';
import {
    Database,
    Search,
    Star,
    MessageSquare,
    HelpCircle,
    CreditCard,
    FileText,
    Calendar,
    Clock,
    RefreshCcw,
    Ship,
    Globe,
    Users,
    Anchor,
    Zap,
    TrendingUp,
    ShieldCheck,
    ChevronDown
} from 'lucide-react';
import SubscriptionModal from '../ui/SubscriptionModal';
import DataFieldsModal from '../ui/DataFieldsModal';

export default function FactSheetSection() {
    const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
    const [isDataFieldsModalOpen, setIsDataFieldsModalOpen] = useState(false);
    const [showSubscribeDropdown, setShowSubscribeDropdown] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('single');

    return (
        <div id="fact-sheet" style={{ marginBottom: '80px', fontFamily: 'var(--font-inter)' }}>
            {/* Header Section */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                    Vietnam Trade Data - Factsheet
                </h2>

            </div>

            {/* Modern Dashboard Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: 'repeat(2, auto)',
                gap: '20px',
                marginBottom: '40px'
            }}>

                {/* Highlight Card: Data Coverage */}
                <div style={{
                    gridColumn: 'span 2',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                    borderRadius: '24px',
                    padding: '32px',
                    color: '#ffffff',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-10%',
                        opacity: 0.15,
                        color: '#38bdf8'
                    }}>
                        <Database size={240} />
                    </div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', marginBottom: '20px' }}>
                            <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '6px', borderRadius: '8px' }}>
                                <ShieldCheck size={20} />
                            </div>
                            <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em' }}>DATABASE STATUS</span>
                        </div>
                        <h3 style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                            100% Data Coverage
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '340px', lineHeight: 1.6, fontWeight: 500 }}>
                            Most comprehensive Vietnam import data source with detailed shipment-level tracking since Jan 2019.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '40px', marginTop: '32px', position: 'relative', zIndex: 1 }}>
                        <div>
                            <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.05em' }}>DATA STARTS FROM</div>
                            <div style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>11-Jan-2019</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.05em' }}>LAST SHIPMENT</div>
                            <div style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>31-Dec-2025</div>
                        </div>
                    </div>
                </div>

                {/* Info Card: Rating */}
                <div style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '24px',
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <div style={{ background: '#fef3c7', padding: '12px', borderRadius: '16px', color: '#d97706', marginBottom: '16px' }}>
                        <Star size={28} fill="#d97706" />
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a' }}>4.7<small style={{ fontSize: '14px', opacity: 0.5 }}>/5</small></div>
                    <div style={{ display: 'flex', gap: '2px', margin: '8px 0' }}>
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />)}
                    </div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>Rated by 25,624+ Users</div>
                </div>

                {/* Info Card: Update Freq */}
                <div style={{
                    background: '#eff6ff',
                    borderRadius: '24px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    border: '1px solid #dbeafe'
                }}>
                    <div style={{ background: 'white', padding: '12px', borderRadius: '16px', color: '#2563eb', marginBottom: '16px', boxShadow: '0 4px 10px rgba(37, 99, 235, 0.1)' }}>
                        <RefreshCcw size={28} />
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: '#1e3a8a' }}>Monthly Updates</div>
                    <div style={{ fontSize: '13px', color: '#60a5fa', marginTop: '4px', fontWeight: 500 }}>Latest Data Available</div>
                </div>

                {/* Stats Row */}
                <StatWidget icon={<Ship />} label="Total Shipments" value="368,425,280" trend="+12%" />
                <StatWidget icon={<Globe />} label="Trading Partners" value="240 Countries" />
                <StatWidget icon={<Users />} label="Active Importers" value="1,224,871" trend="+5.2%" />
                <StatWidget icon={<Anchor />} label="Active Ports" value="2,895" />

            </div>

            {/* Feature List Bar - Final row */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
                padding: '32px',
                background: 'white',
                borderRadius: '24px',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.03)',
                border: '1px solid #f1f5f9'
            }}>
                <div style={{ position: 'relative' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ color: '#2563eb', background: '#eff6ff', padding: '10px', borderRadius: '12px' }}>
                            <Calendar size={18} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '12px', color: '#64748b' }}>Available Plan</span>
                            <div
                                onClick={() => setShowSubscribeDropdown(!showSubscribeDropdown)}
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    color: '#2563eb',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}
                            >
                                Subscribe Now
                                <ChevronDown size={14} />
                            </div>
                        </div>
                    </div>

                    {showSubscribeDropdown && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            marginTop: '12px',
                            background: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '12px',
                            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                            padding: '16px',
                            zIndex: 50,
                            width: '260px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {[
                                    { id: 'single', name: 'Start Plan', price: '$2,400/yr' },
                                    { id: 'multi', name: 'Essential Plan', price: '$7,200/yr' },
                                    { id: 'corporate', name: 'Expert Plan', price: '$12,000/yr' }
                                ].map((plan) => (
                                    <div
                                        key={plan.id}
                                        onClick={() => setSelectedPlan(plan.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '8px 10px',
                                            borderRadius: '8px',
                                            border: selectedPlan === plan.id ? '1px solid #2563eb' : '1px solid #e2e8f0',
                                            background: selectedPlan === plan.id ? '#eff6ff' : 'white',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        <div style={{
                                            minWidth: '14px',
                                            height: '14px',
                                            borderRadius: '50%',
                                            border: selectedPlan === plan.id ? '4px solid #2563eb' : '1px solid #cbd5e1',
                                            marginRight: '10px'
                                        }} />
                                        <div style={{ flex: 1, textAlign: 'left' }}>
                                            <div style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>{plan.name}</div>
                                            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>{plan.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <a
                                href="https://dashboard.exportgenius.in/sign-up"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'block',
                                    background: '#2563eb',
                                    color: 'white',
                                    textAlign: 'center',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    transition: 'background 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#1d4ed8'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#2563eb'}
                            >
                                Start 7 Days Free Trial
                            </a>
                        </div>
                    )}
                </div>
                <FeatureItem
                    icon={<FileText size={18} />}
                    label="Data Fields"
                    value="View All Fields"
                    link
                    onClick={() => setIsDataFieldsModalOpen(true)}
                />
                <FeatureItem icon={<HelpCircle size={18} />} label="Support" value="24/7 Support Available" link href="https://www.exportgenius.in/company/contact-us.php" />
                <FeatureItem icon={<TrendingUp size={18} />} label="Trusted by" value="25K+ Clients " />
            </div>

            <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <span style={{ fontSize: '12px', color: '#94a3b8', background: '#f8fafc', padding: '6px 16px', borderRadius: '100px', border: '1px solid #f1f5f9' }}>
                    *Information updated on Feb 2026 • Verified by Export Genius
                </span>
            </div>

            {/* Subscription Modal */}
            <SubscriptionModal
                isOpen={isSubscriptionModalOpen}
                onClose={() => setIsSubscriptionModalOpen(false)}
            />

            {/* Data Fields Modal */}
            <DataFieldsModal
                isOpen={isDataFieldsModalOpen}
                onClose={() => setIsDataFieldsModalOpen(false)}
            />
        </div>
    );
}

function StatWidget({ icon, label, value, trend }: { icon: any, label: string, value: string, trend?: string }) {
    return (
        <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '24px',
            border: '1px solid #f1f5f9',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            transition: 'all 0.3s ease'
        }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(-4px)';
                target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.02)';
            }}
        >
            <div style={{ color: '#94a3b8', marginBottom: '16px' }}>{React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}</div>
            <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 500, marginBottom: '4px' }}>{label}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>{value}</div>
                {trend && (
                    <span style={{ fontSize: '11px', background: '#ecfdf5', color: '#059669', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                        {trend}
                    </span>
                )}
            </div>
        </div>
    );
}

function FeatureItem({ icon, label, value, link, href, onClick }: {
    icon: React.ReactNode,
    label: string,
    value: string,
    link?: boolean,
    href?: string,
    onClick?: () => void
}) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ color: '#2563eb', background: '#eff6ff', padding: '10px', borderRadius: '12px' }}>{icon}</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: '#64748b' }}>{label}</span>
                {link && href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#2563eb',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}>
                        {value}
                    </a>
                ) : link && onClick ? (
                    <span
                        onClick={onClick}
                        style={{
                            fontSize: '14px',
                            fontWeight: 700,
                            color: '#2563eb',
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }}
                    >
                        {value}
                    </span>
                ) : (
                    <span style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#1e293b',
                        textDecoration: 'none',
                        cursor: 'default'
                    }}>
                        {value}
                    </span>
                )}
            </div>
        </div>
    );
}
