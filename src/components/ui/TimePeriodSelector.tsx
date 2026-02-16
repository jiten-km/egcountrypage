import React from 'react';

const periods = ['1M', '3M', '6M', '1Y', '3Y', 'ALL'];

interface TimePeriodSelectorProps {
    activePeriod: string;
    onPeriodChange: (period: string) => void;
}

export default function TimePeriodSelector({ activePeriod, onPeriodChange }: TimePeriodSelectorProps) {
    return (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {periods.map(period => (
                <button
                    key={period}
                    onClick={() => onPeriodChange(period)}
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: '4px 8px',
                        fontSize: '14px',
                        fontWeight: activePeriod === period ? 700 : 500,
                        color: activePeriod === period ? '#2563EB' : '#64748B',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        borderBottom: `2px solid ${activePeriod === period ? '#2563EB' : 'transparent'}`,
                        fontFamily: 'inherit'
                    }}
                >
                    {period}
                </button>
            ))}
        </div>
    );
}
