"use client";
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function DirectorySection() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeLetter, setActiveLetter] = useState('A');

    const tabs = [
        {
            name: "Browse Vietnam Products",
            items: [
                "Coffee Import Data of Vietnam",
                "Palm Oil Import Data of Vietnam",
                "Plastic Import Data of Vietnam",
                "Steel Import Data of Vietnam",
                "Iron Import Data of Vietnam",
                "Toys Import Data of Vietnam",
                "Mobile Phone Import Data of Vietnam",
                "Notebook Import Data of Vietnam",
                "Pen Cover Import Data of Vietnam",
                "Bottle Import Data of Vietnam"
            ]
        },
        {
            name: "Browse Vietnam Companies",
            items: [
                "ABCD Limited",
                "XYX Limited",
                "Plastic Limited",
                "Steel Limited",
                "Iron Limited",
                "Toys Limited",
                "Samsung Limited",
                "Notebook Limited",
                "Pen Cover Limited",
                "Bottle Limited"
            ]
        },
        {
            name: "Browse Vietnam HS Code",
            items: [
                "HS Code 84212321 Import Data of Vietnam",
                "HS Code 39219096 Import Data of Vietnam",
                "HS Code 27090090 Import Data of Vietnam",
                "HS Code 20089985 Import Data of Vietnam",
                "HS Code 71094587 Import Data of Vietnam",
                "HS Code 87087032 Import Data of Vietnam",
                "HS Code 70133300 Import Data of Vietnam",
                "HS Code 22042117 Import Data of Vietnam",
                "HS Code 40169110 Import Data of Vietnam",
                "HS Code 11071099 Import Data of Vietnam"
            ]
        }
    ];

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <section style={{ padding: '20px 0 60px 0', background: '#f8fafc', fontFamily: 'var(--font-inter)' }}>
            <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '0 40px' }}>
                <div style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                        Explore More <span style={{ color: '#2563eb' }}>Vietnam Trade Data</span>
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '16px', fontWeight: 500, lineHeight: '1.6', maxWidth: '100%' }}>
                        Browse through our comprehensive directory of products, companies, and HS codes to uncover deep insights into Vietnam's import and export landscape. Effortlessly navigate the building blocks of trade.
                    </p>
                </div>

                {/* Tab Container */}
                <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>

                    {/* Tab Header */}
                    <div style={{ display: 'flex', background: '#d1d5db', borderBottom: '1px solid #e2e8f0' }}>
                        {tabs.map((tab, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                style={{
                                    padding: '16px 32px',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    border: 'none',
                                    background: activeTab === idx ? 'white' : 'transparent',
                                    color: activeTab === idx ? '#2563eb' : '#4b5563',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    position: 'relative',
                                    borderTop: activeTab === idx ? '3px solid #2563eb' : '3px solid transparent'
                                }}
                            >
                                {tab.name}
                            </button>
                        ))}
                        <div style={{ flex: 1, background: '#d1d5db' }}></div>
                    </div>

                    {/* Alphabet Nav */}
                    <div style={{
                        display: 'flex',
                        padding: '12px 20px',
                        borderBottom: '1px solid #f1f5f9',
                        gap: '4px',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}>
                        {alphabet.map(letter => (
                            <button
                                key={letter}
                                onClick={() => setActiveLetter(letter)}
                                style={{
                                    width: '28px',
                                    height: '28px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    background: activeLetter === letter ? '#2563eb' : 'transparent',
                                    color: activeLetter === letter ? 'white' : '#64748b',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.1s'
                                }}
                            >
                                {letter}
                            </button>
                        ))}
                    </div>

                    {/* Directory Grid */}
                    <div style={{ padding: '30px', background: 'white' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '24px'
                        }}>
                            {tabs[activeTab].items.map((item, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    style={{
                                        fontSize: '14px',
                                        color: '#2563eb',
                                        textDecoration: 'none',
                                        lineHeight: '1.5',
                                        fontWeight: 500,
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* View More Button */}
                        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                            <button style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#2563eb',
                                fontWeight: 700,
                                fontSize: '15px',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}>
                                View More <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
