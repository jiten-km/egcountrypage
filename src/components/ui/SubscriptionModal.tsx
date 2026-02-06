"use client";
import React, { useState } from 'react';
import { X, Check, Users, Building2, Globe } from 'lucide-react';

interface SubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
    const [selectedPlan, setSelectedPlan] = useState<string>('multiple');

    if (!isOpen) return null;

    const plans = [
        {
            id: 'single',
            name: 'Single User',
            price: '4,950',
            icon: <Users size={20} />,
            features: ['1 User Access', 'Basic Support', 'Monthly Reports']
        },
        {
            id: 'multiple',
            name: 'Multiple License',
            price: '5,950',
            icon: <Building2 size={20} />,
            features: ['Up to 5 Users', 'Priority Support', 'Weekly Reports', 'API Access'],
            popular: true
        },
        {
            id: 'enterprise',
            name: 'Enterprise User',
            price: '7,250',
            icon: <Globe size={20} />,
            features: ['Unlimited Users', '24/7 Dedicated Support', 'Real-time Data', 'Custom Integration']
        }
    ];

    const handleSubscribe = () => {
        console.log('Selected plan:', selectedPlan);
        // Here you would redirect to checkout or handle subscription
        window.open('https://dashboard.exportgenius.in/sign-up', '_blank');
        onClose();
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
                borderRadius: '20px',
                maxWidth: '600px',
                width: '100%',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                overflow: 'hidden'
            }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div style={{
                    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                    padding: '32px',
                    color: 'white',
                    position: 'relative'
                }}>
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            borderRadius: '50%',
                            color: 'white',
                            transition: 'background 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                    >
                        <X size={24} />
                    </button>

                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: 800,
                        marginBottom: '8px',
                        fontFamily: 'var(--font-inter)'
                    }}>
                        Purchase Options
                    </h2>
                    <p style={{
                        fontSize: '16px',
                        opacity: 0.95
                    }}>
                        Choose the perfect plan for your business needs
                    </p>
                </div>

                {/* Plans */}
                <div style={{
                    padding: '32px'
                }}>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            onClick={() => setSelectedPlan(plan.id)}
                            style={{
                                border: selectedPlan === plan.id ? '2px solid #059669' : '2px solid #E5E7EB',
                                borderRadius: '12px',
                                padding: '20px',
                                marginBottom: '16px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                background: selectedPlan === plan.id ? '#F0FDF4' : 'white',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                if (selectedPlan !== plan.id) {
                                    e.currentTarget.style.borderColor = '#10B981';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectedPlan !== plan.id) {
                                    e.currentTarget.style.borderColor = '#E5E7EB';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }
                            }}
                        >
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    right: '20px',
                                    background: '#F59E0B',
                                    color: 'white',
                                    padding: '4px 12px',
                                    borderRadius: '12px',
                                    fontSize: '12px',
                                    fontWeight: 700
                                }}>
                                    POPULAR
                                </div>
                            )}

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px'
                            }}>
                                {/* Radio Button */}
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    border: selectedPlan === plan.id ? '6px solid #059669' : '2px solid #D1D5DB',
                                    transition: 'all 0.2s',
                                    flexShrink: 0
                                }} />

                                {/* Icon */}
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: selectedPlan === plan.id ? '#059669' : '#F3F4F6',
                                    color: selectedPlan === plan.id ? 'white' : '#6B7280',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s'
                                }}>
                                    {plan.icon}
                                </div>

                                {/* Plan Details */}
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        fontSize: '18px',
                                        fontWeight: 700,
                                        color: '#111827',
                                        marginBottom: '4px'
                                    }}>
                                        {plan.name}
                                    </div>
                                    <div style={{
                                        fontSize: '14px',
                                        color: '#6B7280',
                                        display: 'flex',
                                        gap: '8px',
                                        flexWrap: 'wrap'
                                    }}>
                                        {plan.features.slice(0, 2).map((feature, idx) => (
                                            <span key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '4px'
                                            }}>
                                                <Check size={14} color="#059669" />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Price */}
                                <div style={{
                                    textAlign: 'right'
                                }}>
                                    <div style={{
                                        fontSize: '24px',
                                        fontWeight: 800,
                                        color: '#059669'
                                    }}>
                                        ${plan.price}
                                    </div>
                                    <div style={{
                                        fontSize: '12px',
                                        color: '#9CA3AF'
                                    }}>
                                        per year
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Compare Link */}
                    <div style={{
                        textAlign: 'center',
                        marginTop: '24px',
                        marginBottom: '24px'
                    }}>
                        <a
                            href="https://www.exportgenius.in/pricing.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#2563EB',
                                fontSize: '14px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                borderBottom: '1px solid #2563EB'
                            }}
                        >
                            Compare License Plans
                        </a>
                    </div>

                    {/* Subscribe Button */}
                    <button
                        onClick={handleSubscribe}
                        style={{
                            width: '100%',
                            padding: '16px',
                            fontSize: '18px',
                            fontWeight: 700,
                            color: 'white',
                            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                            border: 'none',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            boxShadow: '0 4px 6px -1px rgba(5, 150, 105, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(5, 150, 105, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(5, 150, 105, 0.3)';
                        }}
                    >
                        Subscribe Now
                    </button>
                </div>
            </div>
        </div>
    );
}
