"use client";

import React from 'react';
import NavigationHeader from "@/components/layout/NavigationHeader";
import Footer from "@/components/layout/Footer";
import MainLayout from "@/components/layout/MainLayout";
import SectionContainer from "@/components/ui/SectionContainer";
import ProfileHero from "@/components/profile/ProfileHero";
import ProfileTabs from "@/components/profile/ProfileTabs";
import CompanyFactSheet from "@/components/profile/CompanyFactSheet";
import TradeSummaryModule from "@/components/profile/TradeSummaryModule";
import ShipmentRecordsTable from "@/components/profile/ShipmentRecordsTable";
import TopCommoditiesModule from "@/components/profile/TopCommoditiesModule";
import TradingPartnersModule from "@/components/profile/TradingPartnersModule";
import PortAnalyticsModule from "@/components/profile/PortAnalyticsModule";
import SimilarCompanies from "@/components/profile/SimilarCompanies";
import CustomerInsiteSection from "@/components/sections/CustomerInsiteSection";
import DirectorySection from "@/components/sections/DirectorySection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { Globe, Users, ShieldCheck, ArrowRight, BarChart3, Anchor } from 'lucide-react';

import CompanyTrendChart from "@/components/profile/CompanyTrendChart";
import ExecutiveOverview from "@/components/profile/ExecutiveOverview";
import ProfileMiddleCTA from "@/components/profile/ProfileMiddleCTA";
import TradePulseWidget from "@/components/profile/TradePulseWidget";

export default function CompanyProfilePage() {
    return (
        <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
            <NavigationHeader />

            <ProfileHero />

            <ProfileTabs />

            <MainLayout style={{ paddingTop: '40px' }}>
                <ProfileMiddleCTA />
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 340px', gap: '48px', marginTop: '32px', alignItems: 'start' }}>

                    {/* Top Section: Overview & Metrics */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        <TradeSummaryModule />

                        <div id="overview">
                            <SectionContainer
                                title="Executive Trade Overview"
                                subtitle="Comprehensive analysis of Samsung Electronics Vietnam's global trade footprint, sourcing resilience, and distribution networks."
                            >
                                <ExecutiveOverview />
                            </SectionContainer>
                        </div>
                    </div>

                    {/* Sidebar Area: Fact Sheet & Sticky CTA */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div id="trends">
                            <CompanyTrendChart />
                        </div>
                        <CompanyFactSheet />

                        <div style={{
                            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                            borderRadius: '20px',
                            padding: '36px 28px',
                            color: 'white',
                            textAlign: 'center',
                            boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.5)',
                            position: 'sticky',
                            top: '100px',
                            border: '1px solid rgba(255,255,255,0.08)'
                        }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '18px',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 24px',
                                boxShadow: '0 12px 28px rgba(59, 130, 246, 0.4)'
                            }}>
                                <ShieldCheck size={32} strokeWidth={2.5} />
                            </div>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: 900,
                                marginBottom: '16px',
                                letterSpacing: '-0.02em',
                                color: '#ffffff',
                                lineHeight: 1.2
                            }}>Unlock Full Intelligence</h3>
                            <p style={{
                                fontSize: '15px',
                                opacity: 0.9,
                                marginBottom: '32px',
                                lineHeight: '1.7',
                                color: '#e2e8f0'
                            }}>Access 180K+ verified shipments, decision-maker contacts, and real-time competitive insights.</p>
                            <button style={{
                                background: 'white',
                                color: '#0f172a',
                                padding: '18px 32px',
                                borderRadius: '14px',
                                fontWeight: 900,
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                fontSize: '16px',
                                boxShadow: '0 8px 20px rgba(255,255,255,0.15)'
                            }}>
                                Start 7-Day Trial <ArrowRight size={20} strokeWidth={2.5} />
                            </button>
                            <p style={{
                                fontSize: '12px',
                                opacity: 0.75,
                                marginTop: '16px',
                                color: '#cbd5e1',
                                fontWeight: 600
                            }}>✓ No credit card required</p>
                        </div>

                        <TradePulseWidget />
                    </div>
                </div>

                {/* Full Width Modules Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '56px', marginTop: '56px' }}>


                    {/* Shipment Manifest Section */}
                    <div id="shipments">
                        <ShipmentRecordsTable />
                    </div>

                    {/* Commodities Breakdown */}
                    <div id="commodities">
                        <TopCommoditiesModule />
                    </div>

                    {/* Trading Partners */}
                    <div id="partners">
                        <TradingPartnersModule />
                    </div>

                    {/* Port Analytics */}
                    <div id="ports">
                        <PortAnalyticsModule />
                    </div>

                    {/* Full Width Visualization Area */}
                    <div id="network">
                        <SectionContainer
                            title="Strategic Supply Chain Visualization"
                            subtitle="Interactive map of Samsung Vietnam's upstream material providers and downstream global distribution channels."
                        >
                            <div style={{ height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '24px', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                {/* Animated Grid Background */}
                                <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle, #3B82F6 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }} />

                                {/* Radial Glow Effects */}
                                <div style={{ position: 'absolute', top: '20%', left: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
                                <div style={{ position: 'absolute', bottom: '10%', right: '20%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)', filter: 'blur(50px)' }} />

                                <div style={{ textAlign: 'center', color: 'white', zIndex: 1, maxWidth: '600px', padding: '0 24px' }}>
                                    <div style={{
                                        width: '96px',
                                        height: '96px',
                                        borderRadius: '24px',
                                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)',
                                        border: '1px solid rgba(59, 130, 246, 0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 32px',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)'
                                    }}>
                                        <Globe size={48} color="#3B82F6" strokeWidth={1.5} />
                                    </div>
                                    <h4 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.03em', lineHeight: 1.2 }}>Interactive Supply Network</h4>
                                    <p style={{ opacity: 0.75, fontSize: '16px', margin: '0 auto 40px', lineHeight: '1.7', color: '#cbd5e1' }}>Visualize real-time connections across <strong style={{ color: 'white' }}>450+ verified suppliers</strong> and global distribution partners spanning <strong style={{ color: 'white' }}>150+ countries</strong>.</p>
                                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                        <button style={{
                                            padding: '16px 32px',
                                            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                            border: 'none',
                                            borderRadius: '12px',
                                            color: 'white',
                                            fontWeight: 800,
                                            fontSize: '15px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}>
                                            <Anchor size={18} /> Launch Network Engine
                                        </button>
                                        <button style={{
                                            padding: '16px 32px',
                                            background: 'transparent',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            borderRadius: '12px',
                                            color: 'white',
                                            fontWeight: 700,
                                            fontSize: '15px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                            backdropFilter: 'blur(10px)'
                                        }}>
                                            Request Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SectionContainer>
                    </div>

                    <div id="similar">
                        <SimilarCompanies />
                    </div>

                    {/* Customer Insights (Reviews & FAQ) */}
                    <div id="reviews">
                        <CustomerInsiteSection />
                    </div>
                </div>
            </MainLayout>

            {/* Explore More (Directory) */}
            <div id="explore">
                <DirectorySection />
            </div>

            {/* Final CTA */}
            <FinalCTASection />

            <Footer />
        </main>
    );
}
