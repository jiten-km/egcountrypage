"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DownloadSampleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DownloadSampleModal({ isOpen, onClose }: DownloadSampleModalProps) {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Here you would typically send the email to your backend
        console.log('Email submitted:', email);

        setIsSubmitting(false);
        setEmail('');
        onClose();

        // Show success message or trigger download
        alert('Sample dataset access sent to your email!');
    };

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
                padding: '32px',
                maxWidth: '500px',
                width: '100%',
                position: 'relative',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        color: '#6B7280',
                        transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
                >
                    <X size={24} />
                </button>

                {/* Title */}
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#0e0d0dff',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-inter)'
                }}>
                    Download Sample
                </h2>

                {/* Description */}
                <p style={{
                    fontSize: '16px',
                    color: '#4B5563',
                    marginBottom: '24px',
                    lineHeight: '1.6'
                }}>
                    Enter your email to receive access to the sample dataset.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '14px 16px',
                            fontSize: '16px',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            outline: 'none',
                            marginBottom: '24px',
                            transition: 'border-color 0.2s',
                            fontFamily: 'var(--font-inter)'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#2563EB'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
                    />

                    {/* Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        justifyContent: 'flex-end'
                    }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                padding: '12px 24px',
                                fontSize: '16px',
                                fontWeight: 600,
                                color: '#4B5563',
                                background: 'transparent',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                padding: '12px 32px',
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'white',
                                background: isSubmitting ? '#757e8dff' : '#145b36ff',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: '0 4px 6px -1px rgba(14, 135, 62, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                if (!isSubmitting) {
                                    e.currentTarget.style.background = '#145b36ff';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isSubmitting) {
                                    e.currentTarget.style.background = '#145b36ff';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }
                            }}
                        >
                            {isSubmitting ? 'Sending...' : 'Download'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
