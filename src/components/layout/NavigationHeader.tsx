import React from 'react';
import { Search, ShoppingCart, User, Menu, ChevronDown, Globe } from 'lucide-react';
import styles from './navigation-header.module.css';

export default function NavigationHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Globe size={24} color="white" />
                    </div>
                    <span className={styles.logoText}>Export<span>Genius</span></span>
                </div>

                <nav className={styles.nav}>
                    <div className={styles.navItemContainer}>
                        <span className={styles.navItem}>Solutions <ChevronDown size={14} /></span>
                    </div>
                    <div className={styles.navItemContainer}>
                        <span className={`${styles.navItem} ${styles.active}`}>Vietnam Import <ChevronDown size={14} /></span>
                    </div>
                    <div className={styles.navItemContainer}>
                        <span className={styles.navItem}>Data <ChevronDown size={14} /></span>
                    </div>
                    <a href="#" className={styles.navItem}>Pricing</a>
                    <a href="#" className={styles.navItem}>Resources</a>
                </nav>

                <div className={styles.actions}>
                    <div className={styles.searchShortcut}>
                        <Search size={18} />
                        <span>Search Data...</span>
                        <kbd>⌘K</kbd>
                    </div>

                    <div className={styles.verticalDivider} />

                    <a href="#" className={styles.signIn}>Login</a>
                    <a href="#" className={styles.tryFree}>Start Free Trial</a>

                    <button className={styles.menuButton} aria-label="Menu">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}
