"use client";
import React from 'react';
import { Download, Share2, Filter, Calendar, MoreVertical } from 'lucide-react';

interface ActionButtonProps {
    icon?: React.ReactNode;
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md';
}

export function ActionButton({
    icon,
    label,
    onClick,
    variant = 'secondary',
    size = 'md'
}: ActionButtonProps) {

    const baseStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: size === 'sm' ? '6px 12px' : '8px 16px',
        borderRadius: '8px',
        fontSize: size === 'sm' ? '13px' : '14px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        border: '1px solid transparent'
    };

    const variantStyles = {
        primary: {
            background: 'var(--primary)',
            color: 'var(--white)',
            border: '1px solid var(--primary)'
        },
        secondary: {
            background: 'var(--white)',
            color: 'var(--grey-700)',
            border: '1px solid var(--grey-300)'
        },
        ghost: {
            background: 'transparent',
            color: 'var(--grey-600)',
            border: '1px solid transparent'
        }
    };

    return (
        <button
            onClick={onClick}
            style={{
                ...baseStyles,
                ...variantStyles[variant]
            }}
            onMouseEnter={(e) => {
                if (variant === 'primary') {
                    e.currentTarget.style.background = '#1d4ed8';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(37, 99, 235, 0.2)';
                } else if (variant === 'secondary') {
                    e.currentTarget.style.background = 'var(--grey-50)';
                    e.currentTarget.style.borderColor = 'var(--grey-400)';
                } else {
                    e.currentTarget.style.background = 'var(--grey-100)';
                }
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = variantStyles[variant].background;
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                if (variant === 'secondary') {
                    e.currentTarget.style.borderColor = 'var(--grey-300)';
                }
            }}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}

// Pre-built action button sets
export function StandardActions() {
    return (
        <>
            <ActionButton icon={<Filter size={16} />} label="Filter" size="sm" />
            <ActionButton icon={<Download size={16} />} label="Export" size="sm" />
            <ActionButton icon={<Share2 size={16} />} label="Share" size="sm" variant="ghost" />
        </>
    );
}

export function DateRangeActions() {
    return (
        <>
            <ActionButton icon={<Calendar size={16} />} label="Last Year" size="sm" />
            <ActionButton icon={<Download size={16} />} label="Export PNG" size="sm" />
        </>
    );
}

export function MoreActions() {
    return (
        <ActionButton icon={<MoreVertical size={16} />} label="" size="sm" variant="ghost" />
    );
}
