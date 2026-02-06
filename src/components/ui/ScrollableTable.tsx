"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Column {
    header: string;
    key: string;
    align?: 'left' | 'right';
    render?: (value: any, row: any) => React.ReactNode;
}

interface ScrollableTableProps {
    columns: Column[];
    data: Record<string, any>[];
    maxHeight?: string;
}

export default function ScrollableTable({ columns, data, maxHeight = '400px' }: ScrollableTableProps) {
    return (
        <div style={{
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            overflow: 'hidden',
            background: 'white',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{ overflowY: 'auto', maxHeight }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                    <thead style={{ position: 'sticky', top: 0, zIndex: 10, background: '#F9FAFB', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        <tr>
                            {columns.map((col, i) => (
                                <th
                                    key={i}
                                    style={{
                                        padding: '12px 16px',
                                        textAlign: col.align || 'left',
                                        fontWeight: 700,
                                        color: '#374151',
                                        whiteSpace: 'nowrap',
                                        textTransform: 'uppercase',
                                        fontSize: '11px',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody style={{ background: 'white' }}>
                        {data.map((row, i) => (
                            <tr
                                key={i}
                                style={{
                                    borderBottom: i === data.length - 1 ? 'none' : '1px solid #F3F4F6',
                                    transition: 'background 0.2s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#F8FAFC'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                            >
                                {columns.map((col, j) => (
                                    <td
                                        key={j}
                                        style={{
                                            padding: '12px 16px',
                                            textAlign: col.align || 'left',
                                            color: '#111827',
                                            fontWeight: col.key === 'value' || col.key === 'size' ? 600 : 400
                                        }}
                                    >
                                        {col.render ? col.render(row[col.key], row) : row[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {data.length > 5 && (
                <div style={{
                    padding: '12px 16px',
                    background: '#F9FAFB',
                    borderTop: '1px solid #E5E7EB',
                    textAlign: 'center',
                }}>
                    <a
                        href="https://dashboard.exportgenius.in/search"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 24px',
                            background: '#eff6ff',
                            color: '#2563eb',
                            fontSize: '13px',
                            fontWeight: 600,
                            borderRadius: '100px',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                            border: '1px solid #dbeafe'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#dbeafe';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#eff6ff';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        View all {data.length} records
                        <ArrowRight size={14} />
                    </a>
                </div>
            )}
        </div>
    );
}
