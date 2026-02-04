import React from 'react';
import { Search, ShoppingCart, User, Menu, ChevronDown } from 'lucide-react';
import styles from './navigation-header.module.css';

export default function NavigationHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    ExportGenius
                </div>

                <nav className={styles.nav}>
                    <a href="#" className={styles.navItem}>Our Data</a>
                    <div className={styles.navItem} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Vietnam Import <ChevronDown size={14} />
                    </div>
                    <a href="#" className={styles.navItem}>Resources</a>
                    <a href="#" className={styles.navItem}>Pricing</a>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.iconButton} aria-label="Search">
                        <Search size={20} />
                    </button>

                    <button className={styles.iconButton} aria-label="Cart">
                        <ShoppingCart size={20} />
                    </button>

                    <a href="#" className={styles.signIn}>Sign In</a>
                    <a href="#" className={styles.tryFree}>Try Free</a>

                    <button className={styles.iconButton} style={{ display: 'none' }} aria-label="Menu">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}
