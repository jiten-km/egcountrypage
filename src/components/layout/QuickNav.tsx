import React from 'react';
import styles from './quick-nav.module.css';

export default function QuickNav() {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'commodities', label: 'Top Commodities' },
        { id: 'partners', label: 'Import Partners' },
        { id: 'trends', label: 'Trend Analysis' },
        { id: 'ports', label: 'Ports Distribution' },
        { id: 'importers', label: 'Top Importers' },
        { id: 'shipments', label: 'Shipment Records' },
        { id: 'market-intel', label: 'Market Intelligence' },
        { id: 'faq', label: 'FAQ' }
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.title}>On this page</div>
            <ul className={styles.list}>
                {sections.map((section, index) => (
                    <li key={section.id} className={`${styles.item} ${index === 0 ? styles.active : ''}`}>
                        <a href={`#${section.id}`}>{section.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
