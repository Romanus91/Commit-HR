import React from 'react';
import styles from './styles.module.less';
import { Header } from '../header';
import { Outlet } from '@tanstack/react-router';
import { Box } from '@components/common/ui-kit';

export const AppLayout: React.FC = () => {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.header}>
                <Header />
            </Box>
            <Box className={styles.main} component="main">
                <Outlet />
            </Box>
        </Box>
    );
};
