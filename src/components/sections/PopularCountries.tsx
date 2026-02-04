"use client";
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Ship, TrendingUp, DollarSign, Globe } from 'lucide-react';

const countriesData: Record<string, any[]> = {
    'Asia': [
        { name: 'Vietnam', code: 'VN/VNM', iso: 'vn', value: '$486.9 Bn', growth: '+12.5%', isPositive: true, shipments: '76M+', importers: '94,948', flag: '🇻🇳', color: '#DA251D' },
        { name: 'Philippines', code: 'PH/PHL', iso: 'ph', value: '$137.2 Bn', growth: '+7.5%', isPositive: true, shipments: '18M+', importers: '15,200+', flag: '🇵🇭', color: '#0038A8' },
        { name: 'Indonesia', code: 'ID/IDN', iso: 'id', value: '$237.4 Bn', growth: '+6.1%', isPositive: true, shipments: '38M+', importers: '26,700+', flag: '🇮🇩', color: '#FF0000' },
        { name: 'Pakistan', code: 'PK/PAK', iso: 'pk', value: '$72.5 Bn', growth: '-4.8%', isPositive: false, shipments: '12M+', importers: '9,800+', flag: '🇵🇰', color: '#00401A' },
        { name: 'Thailand', code: 'TH/THA', iso: 'th', value: '$289.1 Bn', growth: '+3.2%', isPositive: true, shipments: '45M+', importers: '31,400+', flag: '🇹🇭', color: '#ED1C24' },
        { name: 'South Korea', code: 'KR/KOR', iso: 'kr', value: '$631.2 Bn', growth: '+5.4%', isPositive: true, shipments: '92M+', importers: '54,000+', flag: '🇰🇷', color: '#0047A0' },
    ],
    'America': [
        { name: 'USA', code: 'US/USA', iso: 'us', value: '$3,100 Bn', growth: '+4.1%', isPositive: true, shipments: '450M+', importers: '380,000+', flag: '🇺🇸', color: '#B22234' },
        { name: 'Brazil', code: 'BR/BRA', iso: 'br', value: '$252.8 Bn', growth: '-2.1%', isPositive: false, shipments: '31M+', importers: '22,900+', flag: '🇧🇷', color: '#009739' },
        { name: 'Mexico', code: 'MX/MEX', iso: 'mx', value: '$593.1 Bn', growth: '+8.4%', isPositive: true, shipments: '88M+', importers: '42,600+', flag: '🇲🇽', color: '#006341' },
        { name: 'Argentina', code: 'AR/ARG', iso: 'ar', value: '$81.5 Bn', growth: '-3.2%', isPositive: false, shipments: '14M+', importers: '11,200+', flag: '🇦🇷', color: '#75AADB' },
        { name: 'Canada', code: 'CA/CAN', iso: 'ca', value: '$560.4 Bn', growth: '+2.8%', isPositive: true, shipments: '65M+', importers: '48,000+', flag: '🇨🇦', color: '#FF0000' },
    ],
    'Europe': [
        { name: 'Turkey', code: 'TR/TUR', iso: 'tr', value: '$363.7 Bn', growth: '+4.2%', isPositive: true, shipments: '42M+', importers: '28,400+', flag: '🇹🇷', color: '#E30A17' },
        { name: 'Russia', code: 'RU/RUS', iso: 'ru', value: '$304.0 Bn', growth: '-12.4%', isPositive: false, shipments: '55M+', importers: '35,000+', flag: '🇷🇺', color: '#0033A0' },
        { name: 'Germany', code: 'DE/DEU', iso: 'de', value: '$1,500 Bn', growth: '+1.5%', isPositive: true, shipments: '210M+', importers: '120,000+', flag: '🇩🇪', color: '#000000' },
        { name: 'France', code: 'FR/FRA', iso: 'fr', value: '$812.0 Bn', growth: '+2.1%', isPositive: true, shipments: '115M+', importers: '78,000+', flag: '🇫🇷', color: '#002395' },
        { name: 'UK', code: 'GB/GBR', iso: 'gb', value: '$820.5 Bn', growth: '+1.8%', isPositive: true, shipments: '125M+', importers: '82,000+', flag: '🇬🇧', color: '#012169' },
    ],
    'Africa': [
        { name: 'Egypt', code: 'EG/EGY', iso: 'eg', value: '$83.2 Bn', growth: '+5.1%', isPositive: true, shipments: '15M+', importers: '12,400+', flag: '🇪🇬', color: '#C8102E' },
        { name: 'South Africa', code: 'ZA/ZAF', iso: 'za', value: '$112.0 Bn', growth: '+2.4%', isPositive: true, shipments: '22M+', importers: '18,600+', flag: '🇿🇦', color: '#007A4D' },
        { name: 'Nigeria', code: 'NG/NGA', iso: 'ng', value: '$53.5 Bn', growth: '-4.2%', isPositive: false, shipments: '9M+', importers: '7,200+', flag: '🇳🇬', color: '#008751' },
        { name: 'Ethiopia', code: 'ET/ETH', iso: 'et', value: '$18.2 Bn', growth: '+6.8%', isPositive: true, shipments: '4M+', importers: '3,800+', flag: '🇪🇹', color: '#078930' },
    ]
};

export default function PopularCountries() {
    const [activeContinent, setActiveContinent] = useState('Asia');
    const scrollRef = useRef<HTMLDivElement>(null);

    const continents = Object.keys(countriesData);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section id="popular-countries" style={{ marginTop: '80px', marginBottom: '80px', fontFamily: 'var(--font-inter)' }}>
            {/* Header Section */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '32px'
            }}>
                <div>
                    <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                        Interested in other <span style={{ color: '#2563eb' }}>Popular Countries?</span>
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '16px', fontWeight: 500 }}>
                        Explore detailed trade intelligence across multiple continents.
                    </p>
                </div>

                {/* Control Icons for Scroller */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                        onClick={() => scroll('left')}
                        style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            border: '1px solid #e2e8f0',
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#64748b',
                            transition: 'all 0.2s'
                        }}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            border: '1px solid #e2e8f0',
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#64748b',
                            transition: 'all 0.2s'
                        }}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Continent Tabs */}
            <div style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '32px',
                paddingBottom: '8px',
                borderBottom: '1px solid #f1f5f9',
                overflowX: 'auto'
            }}>
                {continents.map((continent) => (
                    <button
                        key={continent}
                        onClick={() => setActiveContinent(continent)}
                        style={{
                            padding: '10px 24px',
                            borderRadius: '100px',
                            fontSize: '14px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            whiteSpace: 'nowrap',
                            border: '1px solid',
                            background: activeContinent === continent ? '#2563eb' : 'white',
                            color: activeContinent === continent ? 'white' : '#64748b',
                            borderColor: activeContinent === continent ? '#2563eb' : '#e2e8f0'
                        }}
                    >
                        {continent}
                    </button>
                ))}
            </div>

            {/* Scroller Container */}
            <div
                ref={scrollRef}
                style={{
                    display: 'flex',
                    gap: '24px',
                    overflowX: 'hidden',
                    padding: '8px 4px 20px',
                    scrollSnapType: 'x mandatory'
                }}
            >
                {countriesData[activeContinent].map((country, i) => (
                    <div
                        key={i}
                        style={{
                            minWidth: '380px',
                            maxWidth: '380px',
                            scrollSnapAlign: 'start',
                            background: 'white',
                            borderRadius: '24px',
                            padding: '32px',
                            border: '1px solid #f1f5f9',
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.05)';
                            e.currentTarget.style.borderColor = (country.color || '#2563eb') + '44';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.02)';
                            e.currentTarget.style.borderColor = '#f1f5f9';
                        }}
                    >
                        {/* Header: Flag + Name */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '64px',
                                    height: '48px',
                                    borderRadius: '8px',
                                    background: '#f8fafc',
                                    overflow: 'hidden',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src={`https://flagcdn.com/w160/${country.iso}.png`}
                                        alt={country.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '2px' }}>{country.name}</h3>
                                    <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.05em' }}>ISO: {country.code}</div>
                                </div>
                            </div>
                            <div style={{
                                padding: '6px 12px',
                                borderRadius: '100px',
                                background: country.isPositive ? '#ecfdf5' : '#fef2f2',
                                color: country.isPositive ? '#059669' : '#dc2626',
                                fontSize: '12px',
                                fontWeight: 700,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}>
                                <TrendingUp size={14} /> {country.growth}
                            </div>
                        </div>

                        {/* Main Stats: Value + Shipments */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '16px' }}>
                            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '11px', fontWeight: 600, marginBottom: '8px' }}>
                                    <DollarSign size={13} /> TOTAL IMPORT VALUE
                                </div>
                                <div style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a' }}>{country.value}</div>
                            </div>
                            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '11px', fontWeight: 600, marginBottom: '8px' }}>
                                    <Ship size={13} /> SHIPMENTS
                                </div>
                                <div style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a' }}>{country.shipments}</div>
                            </div>
                        </div>

                        {/* Secondary Stats: Importers */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Globe size={18} color="#94a3b8" />
                                <div style={{ fontSize: '14px', color: '#475569', fontWeight: 500 }}>
                                    <strong style={{ color: '#0f172a' }}>{country.importers}</strong> Active Importers
                                </div>
                            </div>
                            <a
                                href="https://dashboard.exportgenius.in/sign-up"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    color: '#2563eb',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    padding: '4px 8px',
                                    borderRadius: '8px',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Explore Data <ChevronRight size={16} />
                            </a>
                        </div>

                        {/* Background Decor Watermark */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            right: '20px',
                            fontSize: '100px',
                            opacity: 0.03,
                            fontWeight: 900,
                            userSelect: 'none',
                            pointerEvents: 'none'
                        }}>
                            {country.flag}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
