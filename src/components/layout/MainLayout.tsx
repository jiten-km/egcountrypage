import React from 'react';
import styles from './main-layout.module.css';

export default function MainLayout({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) {
    return (
        <div className={styles.container} style={style}>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
}
