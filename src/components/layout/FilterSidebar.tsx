"use client";
import React, { useState } from 'react';
import { Filter, Calendar, ChevronDown, ChevronRight, X, ChevronUp } from 'lucide-react';
import styles from './filter-sidebar.module.css';

const FilterSection = ({ title, children, defaultOpen = true }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader} onClick={() => setIsOpen(!isOpen)}>
                <span className={styles.sectionTitle}>{title}</span>
                {isOpen ? <ChevronUp size={16} color="#6B7280" /> : <ChevronDown size={16} color="#6B7280" />}
            </div>
            {isOpen && <div>{children}</div>}
        </div>
    );
};

export default function FilterSidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <Filter size={20} /> Filters
                </div>
                <button className={styles.resetBtn}>Reset All</button>
            </div>

            <FilterSection title="Date Range">
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <button style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #E5E7EB', fontSize: '12px', background: 'white' }}>Last 30D</button>
                    <button style={{ padding: '6px 12px', borderRadius: '6px', background: '#EFF6FF', color: '#2563EB', border: '1px solid #2563EB', fontSize: '12px' }}>Last Year</button>
                </div>
                <div style={{ position: 'relative' }}>
                    <Calendar size={16} style={{ position: 'absolute', left: '10px', top: '10px', color: '#9CA3AF' }} />
                    <input type="text" defaultValue="Jan 2023 - Dec 2023" className={styles.input} style={{ paddingLeft: '34px' }} />
                </div>
            </FilterSection>

            <FilterSection title="Product Categories">
                <div className={styles.checkboxLabel}>
                    <ChevronDown size={14} />
                    <input type="checkbox" className={styles.checkboxInput} />
                    <span>Machinery</span>
                    <span className={styles.count}>12,450</span>
                </div>
                <div className={styles.treeNode}>
                    <div className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkboxInput} defaultChecked />
                        <span>Electrical Machinery</span>
                        <span className={styles.count}>5,230</span>
                    </div>
                    <div className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkboxInput} />
                        <span>Mechanical Appl...</span>
                        <span className={styles.count}>7,220</span>
                    </div>
                </div>
                <div className={styles.checkboxLabel}>
                    <ChevronRight size={14} />
                    <input type="checkbox" className={styles.checkboxInput} />
                    <span>Textiles</span>
                    <span className={styles.count}>8,900</span>
                </div>
            </FilterSection>

            <FilterSection title="Import Partners">
                <input type="text" placeholder="Search country..." className={styles.input} style={{ marginBottom: '10px' }} />
                <div style={{ marginBottom: '10px' }}>
                    <div className={styles.chip}>China <X size={12} style={{ marginLeft: 4, cursor: 'pointer' }} /></div>
                    <div className={styles.chip}>S. Korea <X size={12} style={{ marginLeft: 4, cursor: 'pointer' }} /></div>
                </div>
                <div className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkboxInput} />
                    <span>Japan</span>
                    <span className={styles.count}>15%</span>
                </div>
                <div className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkboxInput} />
                    <span>Taiwan</span>
                    <span className={styles.count}>12%</span>
                </div>
            </FilterSection>

            <FilterSection title="Ports of Entry">
                <input type="text" placeholder="Search ports..." className={styles.input} style={{ marginBottom: '10px' }} />
                <div className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkboxInput} />
                    <span>Cat Lai (HCM)</span>
                </div>
                <div className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkboxInput} />
                    <span>Hai Phong</span>
                </div>
            </FilterSection>

            <FilterSection title="Value Range (USD)">
                <input type="range" style={{ width: '100%', marginBottom: '8px' }} />
                <div className={styles.rangeInputs}>
                    <input type="text" defaultValue="0" className={styles.input} placeholder="Min" />
                    <input type="text" defaultValue="Max" className={styles.input} placeholder="Max" />
                </div>
            </FilterSection>
        </aside>
    );
}
