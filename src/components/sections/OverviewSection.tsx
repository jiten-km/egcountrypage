"use client";
import React from 'react';
import { TrendingUp, Package, Ship, Globe } from 'lucide-react';

export default function OverviewSection() {
    return (
        <div id="overview" style={{
            background: 'var(--white)',
            border: '1px solid var(--grey-200)',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '40px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            scrollMarginTop: '160px'
        }}>


            {/* Map placeholder on left, content on right */}
            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px', alignItems: 'start' }}>
                {/* Vietnam Map */}
                <div>
                    <div
                        style={{
                            width: '100%',
                            height: '400px',
                            background: 'linear-gradient(145deg, #4f46e5 0%, #7c3aed 100%)',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: '32px',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 25px 30px -5px rgba(79, 70, 229, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        {/* Decorative Background Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '200px',
                            height: '200px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '50%',
                            filter: 'blur(30px)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '-30px',
                            left: '-30px',
                            width: '150px',
                            height: '150px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '50%',
                            filter: 'blur(20px)'
                        }} />

                        <div>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(255,255,255,0.15)',
                                padding: '6px 12px',
                                borderRadius: '100px',
                                fontSize: '12px',
                                fontWeight: 600,
                                marginBottom: '20px',
                                backdropFilter: 'blur(4px)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <span style={{ width: '6px', height: '6px', background: '#34d399', borderRadius: '50%' }} />
                                Live Market Data
                            </div>
                            <h4 style={{ fontSize: '16px', opacity: 0.9, fontWeight: 500, marginBottom: '8px' }}>Total Import Value</h4>
                            <div style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '4px' }}>$486.95 Bn</div>
                            <div style={{ fontSize: '14px', color: '#a78bfa', fontWeight: 600 }}>Up +12.5% from last year</div>
                        </div>

                        <div style={{ zIndex: 1 }}>
                            <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '24px', lineHeight: 1.5, maxWidth: '220px' }}>
                                Access detailed shipment records and verified importer details for Vietnam.
                            </p>
                            <a
                                href="https://dashboard.exportgenius.in/sign-up"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    background: 'white',
                                    color: '#4f46e5',
                                    padding: '14px 24px',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    fontSize: '15px',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.02)';
                                    e.currentTarget.style.backgroundColor = '#f8fafc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.backgroundColor = 'white';
                                }}
                            >
                                Explore Full Data
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '25px',
                            fontSize: '120px',
                            opacity: 0.08,
                            fontWeight: 900,
                            userSelect: 'none',
                            pointerEvents: 'none'
                        }}>
                            VN
                        </div>
                    </div>
                </div>

                {/* Description Content */}
                <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--grey-900)' }}>
                        Vietnam Imports Overview
                    </h3>
                    <div style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--grey-700)' }}>
                        <p style={{ marginBottom: '16px' }}>
                            Vietnam import trade data provides comprehensive insights into the country's international trade activities.
                            With over <strong style={{ color: 'var(--primary)' }}>76 million+ shipment records</strong>, our database covers
                            detailed information about <strong style={{ color: 'var(--primary)' }}>94,948 active importers</strong> and their
                            trading patterns across various product categories.
                        </p>
                        <p style={{ marginBottom: '16px' }}>
                            The data includes critical information such as <strong>HS codes</strong>, product descriptions, importer and
                            exporter details, shipment quantities, values, ports of entry, and dates of arrival. Vietnam's import value
                            has grown by <strong style={{ color: 'var(--success)' }}>12.5% YoY</strong>, indicating a robust and expanding
                            trade ecosystem.
                        </p>
                        <p>
                            Major import partners include <strong>China (25.4%)</strong>, <strong>South Korea (10.8%)</strong>, and
                            <strong> Japan (3.9%)</strong>. Top imported commodities include electrical machinery, mechanical appliances,
                            textiles, and plastics, serving Vietnam's growing manufacturing and consumer sectors.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}
