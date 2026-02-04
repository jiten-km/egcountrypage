"use client";
import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ background: '#1e3a8a', color: 'white', marginTop: '80px' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                    {/* About */}
                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>About Us</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Our Story', 'Team', 'Careers', 'Press', 'Contact'].map(item => (
                                <li key={item} style={{ marginBottom: '10px' }}>
                                    <a href="#" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                                    >{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Data */}
                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Our Data</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Import Data', 'Export Data', 'Customs Data', 'B/L Data', 'Supplier Directory'].map(item => (
                                <li key={item} style={{ marginBottom: '10px' }}>
                                    <a href="#" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                                    >{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Resources</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Blog', 'Help Center', 'API Docs', 'Trade Guides', 'HS Code Lookup'].map(item => (
                                <li key={item} style={{ marginBottom: '10px' }}>
                                    <a href="#" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                                    >{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contact</h4>
                        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                            <p style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Mail size={16} /> support@exportgenius.com
                            </p>
                            <p style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Phone size={16} /> +84 123 456 789
                            </p>
                            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                                {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" style={{
                                        background: 'rgba(255,255,255,0.1)',
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.6)',
                    flexWrap: 'wrap',
                    gap: '16px'
                }}>
                    <div>© 2024 ExportGenius. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Terms of Service</a>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
