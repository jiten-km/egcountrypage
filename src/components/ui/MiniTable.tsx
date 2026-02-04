"use client";
import React from 'react';

interface Column {
    header: string;
    key: string;
    align?: 'left' | 'right';
    render?: (value: any, row: any) => React.ReactNode;
}

interface MiniTableProps {
    columns: Column[];
    data: Record<string, any>[];
}

export default function MiniTable({ columns, data }: MiniTableProps) {
    return (
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead style={{ background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                    <tr>
                        {columns.map((col, i) => (
                            <th
                                key={i}
                                style={{
                                    padding: '16px',
                                    textAlign: col.align || 'left',
                                    fontWeight: 600,
                                    color: '#374151',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr
                            key={i}
                            style={{
                                borderBottom: i === data.length - 1 ? 'none' : '1px solid #F3F4F6',
                                transition: 'background 0.2s',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#F9FAFB'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                        >
                            {columns.map((col, j) => (
                                <td
                                    key={j}
                                    style={{
                                        padding: '16px',
                                        textAlign: col.align || 'left',
                                        color: j === 0 ? '#6B7280' : '#111827',
                                        fontWeight: j === 2 ? 600 : 400
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
    );
}
