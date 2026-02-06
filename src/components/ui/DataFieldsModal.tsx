"use client";
import React from 'react';
import { X, CheckCircle2, Circle } from 'lucide-react';

interface DataFieldsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DataFieldsModal({ isOpen, onClose }: DataFieldsModalProps) {
    if (!isOpen) return null;

    const fields = [
        { name: 'Date', included: true },
        { name: 'HS Code', included: true },
        { name: 'Origin Country', included: true },
        { name: 'Net Weight', included: true },
        { name: 'Importer Address', included: false },
        { name: 'Supplier Address', included: false },
        { name: 'Unit', included: false },
        { name: 'Unloading Port', included: false },
        { name: 'Importer Name', included: true },
        { name: 'Product Description', included: true },
        { name: 'Total Value USD', included: true },
        { name: 'Quantity', included: true },
        { name: 'Supplier', included: false },
        { name: 'Gross Weight', included: false },
        { name: 'Loading Port', included: false },
        { name: 'Mode Of Transport', included: false },
        { name: 'Destination Port', included: false },
        { name: 'Invoice Number', included: false },
        { name: 'Shipment ID', included: true },
        { name: 'Payment Terms', included: false }
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
        }}
            onClick={onClose}
        >
            <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '80vh',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column'
            }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div style={{
                    padding: '24px 32px',
                    borderBottom: '1px solid #E5E7EB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            color: '#111827',
                            marginBottom: '4px',
                            fontFamily: 'var(--font-inter)'
                        }}>
                            Available Data Fields
                        </h2>
                        <p style={{
                            fontSize: '14px',
                            color: '#6B7280',
                            margin: 0
                        }}>
                            Here is the list of fields covered in our Vietnam trade data
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            color: '#6B7280',
                            transition: 'color 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Fields Grid */}
                <div style={{
                    padding: '32px',
                    overflowY: 'auto',
                    flex: 1
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '16px'
                    }}>
                        {fields.map((field, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px 16px',
                                    borderRadius: '8px',
                                    background: field.included ? '#F0FDF4' : '#F9FAFB',
                                    border: field.included ? '1px solid #BBF7D0' : '1px solid #E5E7EB',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                {field.included ? (
                                    <CheckCircle2 size={20} color="#059669" style={{ flexShrink: 0 }} />
                                ) : (
                                    <Circle size={20} color="#D1D5DB" style={{ flexShrink: 0 }} />
                                )}
                                <span style={{
                                    fontSize: '15px',
                                    fontWeight: field.included ? 600 : 500,
                                    color: field.included ? '#065F46' : '#6B7280',
                                    fontFamily: 'var(--font-inter)'
                                }}>
                                    {field.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div style={{
                    padding: '20px 32px',
                    borderTop: '1px solid #E5E7EB',
                    background: '#F9FAFB',
                    borderRadius: '0 0 16px 16px'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            fontSize: '13px',
                            color: '#6B7280'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <CheckCircle2 size={16} color="#059669" />
                                <span>Included in free sample</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Circle size={16} color="#D1D5DB" />
                                <span>Premium fields</span>
                            </div>
                        </div>
                        <a
                            href="https://www.exportgenius.in/export-import-trade-data/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '10px 20px',
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'white',
                                background: '#059669',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#047857';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#059669';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
