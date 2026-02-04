import React from 'react';
import styles from './main-layout.module.css';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
}
