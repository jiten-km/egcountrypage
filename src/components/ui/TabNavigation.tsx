"use client";
import React, { useState, useEffect } from 'react';
import { FileText, TrendingUp, Package, Globe, Anchor, Building2, BookOpen, HelpCircle, Database, Ship } from 'lucide-react';

const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'fact-sheet', label: 'Factsheet', icon: Database },
    { id: 'commodities', label: 'Top Commodities', icon: Package },
    { id: 'partners', label: 'Import Partners', icon: Globe },
    { id: 'trends', label: 'Trend Analysis', icon: TrendingUp },
    { id: 'ports', label: 'Ports', icon: Anchor },
    { id: 'bill-of-lading', label: 'Sample Data', icon: Ship },
    { id: 'top-importers', label: 'Top Importers', icon: Building2 },
    { id: 'popular-countries', label: 'Related Data', icon: BookOpen },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
];

export default function TabNavigation() {
    const [activeTab, setActiveTab] = useState('overview');

    // Handle scroll to update active tab
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset for sticky header

            for (const tab of tabs) {
                const element = document.getElementById(tab.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveTab(tab.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 180; // Adjust based on header + tab nav height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div style={{
            marginBottom: '32px',
            position: 'sticky',
            top: '80px', // Matches NavigationHeader height
            background: 'var(--white)',
            zIndex: 99,
            borderBottom: '1px solid var(--grey-200)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            paddingTop: '30px' // Space for the search bar overlap
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 20px',
                overflowX: 'auto',
                scrollbarWidth: 'none', // Hide scrollbar for cleaner look
                msOverflowStyle: 'none'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    minWidth: 'max-content',
                    padding: '12px 0'
                }}>
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => scrollToSection(tab.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '10px 16px',
                                    background: isActive ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                                    color: isActive ? 'var(--primary)' : 'var(--grey-600)',
                                    border: isActive ? '1px solid var(--primary)' : '1px solid var(--grey-300)',
                                    borderRadius: '30px', // Pill shape
                                    fontWeight: isActive ? 600 : 500,
                                    fontSize: '14px',
                                    transition: 'all 0.2s ease',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.background = 'var(--grey-50)';
                                        e.currentTarget.style.borderColor = 'var(--grey-400)';
                                        e.currentTarget.style.color = 'var(--grey-900)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderColor = 'var(--grey-300)';
                                        e.currentTarget.style.color = 'var(--grey-600)';
                                    }
                                }}
                            >
                                <Icon size={16} />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
