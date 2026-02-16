import React, { useState } from 'react';

const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'shipments', label: 'Shipment Records' },
    { id: 'commodities', label: 'Top Commodities' },
    { id: 'partners', label: 'Trading Partners' },
    { id: 'ports', label: 'Active Ports' },
    { id: 'network', label: 'Supply Chain Network' },
    { id: 'similar', label: 'Similar Companies' },
    { id: 'reviews', label: 'Reviews & FAQ' }
];

export default function ProfileTabs() {
    const [activeTab, setActiveTab] = useState('overview');

    const handleTabClick = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div style={{
            background: 'white',
            borderBottom: '1px solid var(--grey-200)',
            position: 'sticky',
            top: '0',
            zIndex: 100,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }}>
            <div className="container" style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 24px',
                display: 'flex',
                gap: '32px',
                overflowX: 'auto',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
            }}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        style={{
                            padding: '20px 0',
                            fontSize: '15px',
                            fontWeight: activeTab === tab.id ? 700 : 500,
                            color: activeTab === tab.id ? 'var(--primary)' : 'var(--grey-600)',
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderBottom: `3px solid ${activeTab === tab.id ? 'var(--primary)' : 'transparent'}`,
                            transition: 'all 0.2s ease',
                            whiteSpace: 'nowrap',
                            background: 'none',
                            cursor: 'pointer',
                            outline: 'none'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
