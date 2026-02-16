"use client";
import React, { useState } from 'react';
import { Star, Plus, Minus, ThumbsUp, ThumbsDown, ChevronDown, ShieldCheck } from 'lucide-react';

export default function CustomerInsiteSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqs = [
        {
            q: "How is the company-specific trade data verified?",
            a: "Our company records are cross-referenced with official Vietnam Customs filings, port authority manifests, and verified Bill of Lading documents to ensure 100% accuracy for every shipment reported."
        },
        {
            q: "Can I identify the exact global buyers for this company?",
            a: "Yes, our database provides granular detail on consignees and buyers, including their business names, historical purchase volumes, and primary product categories sourced from Vietnam."
        },
        {
            q: "How often are these verified company profiles updated?",
            a: "Company profiles are updated daily. New shipment records and revised company metadata are processed within 24-48 hours of being declared at Vietnam's international gateways."
        },
        {
            q: "What granular fields are included in the company manifest?",
            a: "Profiles cover 25+ critical data points, including specific HS Codes (8-digit), detailed item descriptions, unit prices, shipment quantities, and the exact transit ports used."
        },
        {
            q: "Can I benchmark this company against its local competitors?",
            a: "Absolutely. Our platform allows you to compare shipment volumes, growth trends, and supplier networks across all major players in the same industry segment in Vietnam."
        },
        {
            q: "Do you provide contact intelligence for these companies?",
            a: "Yes, premium access includes key decision-maker profiles, verified corporate email formats, and LinkedIn connectivity to facilitate direct business outreach and partnership building."
        }
    ];

    const ratings = [
        { stars: 5, percent: 88, color: '#22c55e' },
        { stars: 4, percent: 3, color: '#a855f7' },
        { stars: 3, percent: 1, color: '#3b82f6' },
        { stars: 2, percent: 8, color: '#eab308' },
        { stars: 1, percent: 0, color: '#ef4444' },
        { stars: 0, percent: 0, color: '#94a3b8' }
    ];

    const reviews = [
        {
            name: "Ms Bella",
            initial: "M",
            date: "03 February 2026",
            rating: 5,
            comment: "The data accuracy is exceptional. I was able to find 5 new reliable suppliers for our electronics business in Hanoi within just one week of using the tool. Highly recommended for anyone serious about Vietnam trade.",
            helpful: 12
        },
        {
            name: "Rahul Sharma",
            initial: "R",
            date: "28 January 2026",
            rating: 5,
            comment: "Very intuitive dashboard. The filtering options by HS code and port allow us to track our competitors' shipments very closely. The pricing intelligence field is a game changer for us.",
            helpful: 8
        }
    ];

    return (
        <section id="faq" style={{ padding: '80px 0', background: '#f8fafc', fontFamily: 'var(--font-inter)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                {/* Review & Rating Section */}
                <div style={{ background: 'white', borderRadius: '24px', border: '1px solid #e2e8f0', overflow: 'hidden', marginBottom: '60px' }}>
                    <div style={{ padding: '32px', borderBottom: '1px solid #f1f5f9' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a' }}>
                            Customer Review & Rating (25,624)
                        </h2>
                    </div>

                    <div style={{ padding: '24px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'center' }}>
                            {/* Left: Overall Score */}
                            <div style={{
                                background: '#f8fafc',
                                padding: '24px',
                                borderRadius: '20px',
                                textAlign: 'center',
                                border: '1px solid #f1f5f9'
                            }}>
                                <div style={{ fontSize: '14px', fontWeight: 600, color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Overall Rating</div>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '16px' }}>
                                    {[1, 2, 3, 4].map(i => <Star key={i} size={20} fill="#fbaf00" color="#fbaf00" />)}
                                    <Star size={20} fill="#e2e8f0" color="#e2e8f0" />
                                </div>
                                <div style={{ fontSize: '64px', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>4.7</div>
                                <div style={{ height: '1px', background: '#e2e8f0', margin: '24px 0' }} />
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
                                    <div>
                                        <div style={{ fontWeight: 800, color: '#0f172a' }}>25,624</div>
                                        <div style={{ fontSize: '13px', color: '#64748b' }}>Ratings</div>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 800, color: '#0f172a' }}>1,594</div>
                                        <div style={{ fontSize: '13px', color: '#64748b' }}>Reviews</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Stars Breakdown */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {ratings.map((r) => (
                                    <div key={r.stars} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <div style={{ width: '12px', fontWeight: 700, color: '#475569', fontSize: '14px' }}>{r.stars}</div>
                                        <Star size={14} fill="#cbd5e1" color="#cbd5e1" />
                                        <div style={{ flex: 1, height: '8px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                                            <div style={{ width: `${r.percent}%`, height: '100%', background: r.color, borderRadius: '10px' }} />
                                        </div>
                                        <div style={{ width: '35px', fontWeight: 700, color: '#475569', fontSize: '14px', textAlign: 'right' }}>{r.percent}%</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Filters */}
                        <div style={{ display: 'flex', gap: '12px', marginTop: '48px', marginBottom: '32px', flexWrap: 'wrap' }}>
                            {['Most Recent', 'Most Relevant', 'Positive First', 'Negative First'].map((f, i) => (
                                <button key={f} style={{
                                    padding: '10px 24px',
                                    borderRadius: '100px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    border: i === 0 ? '1px solid #2563eb' : '1px solid #e2e8f0',
                                    background: i === 0 ? '#eff6ff' : 'white',
                                    color: i === 0 ? '#2563eb' : '#64748b',
                                    cursor: 'pointer'
                                }}>
                                    {f}
                                </button>
                            ))}
                        </div>

                        {/* User Reviews with Scrollbar */}
                        <div style={{
                            maxHeight: '400px',
                            overflowY: 'auto',
                            paddingRight: '12px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px'
                        }}>
                            {reviews.map((rev, idx) => (
                                <div key={idx} style={{ padding: '24px', background: '#f8fafc', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px' }}>
                                                {rev.initial}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 800, color: '#0f172a' }}>{rev.name}</div>
                                                <div style={{ fontSize: '13px', color: '#64748b' }}>{rev.date}</div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '2px' }}>
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#fbaf00" color="#fbaf00" />)}
                                        </div>
                                    </div>
                                    <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '15px' }}>{rev.comment}</p>
                                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '24px' }}>
                                        <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 500 }}>Was this review helpful?</span>
                                        <div style={{ display: 'flex', gap: '12px' }}>
                                            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer', color: '#64748b' }}>
                                                <ThumbsUp size={14} /> Yes ({idx === 0 ? 12 : 8})
                                            </button>
                                            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer', color: '#64748b' }}>
                                                <ThumbsDown size={14} /> No (0)
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div>
                    <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '40px', textAlign: 'center' }}>
                        Frequently Asked Questions
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    style={{
                                        background: 'white',
                                        borderRadius: '20px',
                                        border: '1px solid #e2e8f0',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        style={{
                                            width: '100%',
                                            padding: '24px 32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                                            <span style={{ fontSize: '24px', fontWeight: 800, color: '#e2e8f0', width: '32px' }}>
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <span style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b' }}>
                                                {faq.q}
                                            </span>
                                        </div>
                                        <div>
                                            {isOpen ? (
                                                <div style={{ width: '18px', height: '3px', background: '#f97316', borderRadius: '4px' }} />
                                            ) : (
                                                <Plus size={20} color="#64748b" />
                                            )}
                                        </div>
                                    </button>

                                    <div style={{
                                        maxHeight: isOpen ? '400px' : '0',
                                        opacity: isOpen ? 1 : 0,
                                        overflow: 'hidden',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        padding: isOpen ? '0 32px 32px 88px' : '0 32px'
                                    }}>
                                        <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '16px' }}>
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
