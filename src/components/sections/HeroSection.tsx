"use client";
import React from 'react';
import { ArrowUpRight, ShieldCheck, Search, Mic } from 'lucide-react';
import styles from './hero-section.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground} />

            <div className={styles.contentContainer}>
                <div className={styles.leftContent}>
                    <div className={styles.badge}>
                        <div className={styles.greenDot} />
                        Updated Daily
                    </div>

                    <h1 className={styles.title}>Vietnam Import Data</h1>
                    <p className={styles.subtitle}>
                        Access Real-Time Vietnam Imports to identify top & new suppliers, trading partners, and profitable commodities
                    </p>

                    <div className={styles.ctaGroup}>
                        <button className={styles.primaryButton}>
                            Get Free Sample Report
                        </button>
                        <button className={styles.secondaryButton}>
                            Schedule Demo
                        </button>
                    </div>

                    <div className={styles.trustText}>
                        <span>No credit card required</span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <ShieldCheck size={16} /> 100% data accuracy
                        </span>
                    </div>
                </div>

                <div className={styles.statsGrid}>
                    {/* Card 1 */}
                    <div className={styles.statCard}>
                        <div className={styles.statValue}>$486.95 Bn</div>
                        <div className={styles.statLabel}>Total Import Value</div>
                        <div className={`${styles.statGrowth} ${styles.growthPositive}`}>
                            <ArrowUpRight size={16} /> 12.5% YoY
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className={styles.statCard}>
                        <div className={styles.statValue}>76,222,840</div>
                        <div className={styles.statLabel}>Shipment Records</div>
                        <div className={styles.statGrowth} style={{ color: '#E5E7EB' }}>
                            Last 12 months
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className={styles.statCard}>
                        <div className={styles.statValue}>94,948</div>
                        <div className={styles.statLabel}>Active Importers</div>
                        <div className={`${styles.statGrowth} ${styles.growthPositive}`}>
                            <ShieldCheck size={16} /> Verified Companies
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.searchContainer}>
                {/* Advanced Search Bar */}
                <div style={{
                    background: 'white',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    height: '72px'
                }}>
                    <Search color="#9CA3AF" size={24} />
                    <input
                        type="text"
                        placeholder="Search by HS Code, Product, Company, or Port..."
                        style={{
                            flex: 1,
                            border: 'none',
                            fontSize: '16px',
                            outline: 'none',
                            height: '100%',
                            color: '#374151'
                        }}
                    />
                    <Mic color="#9CA3AF" size={24} style={{ cursor: 'pointer' }} />
                    <button style={{
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        height: '48px',
                        padding: '0 32px',
                        borderRadius: '8px',
                        fontWeight: 600,
                        fontSize: '16px'
                    }}>
                        Search
                    </button>
                </div>
                {/* Recent Searches Chips */}
                <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Recent:</span>
                    {['HS Code 8544', 'Samsung Electronics', 'Coffee Beans', 'Cat Lai Port'].map(tag => (
                        <span key={tag} style={{
                            background: 'rgba(255,255,255,0.15)',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '16px',
                            fontSize: '13px',
                            backdropFilter: 'blur(4px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
