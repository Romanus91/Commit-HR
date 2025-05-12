// src/components/layout/AppLayout.tsx
import { Box } from '@mui/material';
import React from 'react';
import styles from './styles.module.less';
import { Header } from '../header';

interface AppLayoutProps {
    children?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.header}>
                <Header />
            </Box>
            <Box className={styles.main} component="main">
                {children}
            </Box>
        </Box>
    );
};
