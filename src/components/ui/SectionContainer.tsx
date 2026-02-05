import React from 'react';

interface SectionContainerProps {
    id?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    actions?: React.ReactNode;
    variant?: 'default' | 'bordered' | 'elevated' | 'transparent';
    fullWidth?: boolean;
}

export default function SectionContainer({
    id,
    title,
    subtitle,
    children,
    actions,
    variant = 'default',
    fullWidth = false
}: SectionContainerProps) {

    const getVariantStyles = () => {
        switch (variant) {
            case 'bordered':
                return {
                    background: 'transparent',
                    border: '2px solid var(--grey-200)',
                    boxShadow: 'none'
                };
            case 'elevated':
                return {
                    background: 'var(--white)',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                };
            case 'transparent':
                return {
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none'
                };
            default:
                return {
                    background: 'var(--white)',
                    border: '1px solid var(--grey-200)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                };
        }
    };

    return (
        <section
            id={id}
            style={{
                marginBottom: '48px',
                scrollMarginTop: '120px'
            }}
        >
            {/* Header */}
            <div style={{
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '16px'
            }}>
                <div style={{ flex: fullWidth ? '1' : 'none', minWidth: '0' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '6px',
                        color: 'var(--grey-900)',
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em'
                    }}>
                        {title}
                    </h2>
                    {subtitle && (
                        <p style={{
                            color: 'var(--grey-600)',
                            fontSize: '15px',
                            lineHeight: 1.6,
                            maxWidth: fullWidth ? '100%' : '800px'
                        }}>
                            {subtitle}
                        </p>
                    )}
                </div>
                {actions && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        flexShrink: 0
                    }}>
                        {actions}
                    </div>
                )}
            </div>

            {/* Content Card */}
            <div style={{
                ...getVariantStyles(),
                borderRadius: '12px',
                padding: fullWidth ? '0' : '32px',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                overflow: 'hidden'
            }}>
                {children}
            </div>
        </section>
    );
}
