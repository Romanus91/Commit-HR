import React from 'react';
import { Box, Breadcrumbs, Typography } from '@components/common/ui-kit';
import { ROUTES } from '@router/routes';
import { Link } from '@tanstack/react-router';
import styles from './styles.module.less';

export const CandidateBreadcrumbs: React.FC = () => {
    return (
        <Box className={styles.box}>
            <Breadcrumbs separator="/" className={styles.breadcrumbs}>
                <Link to={`/${ROUTES.CANDIDATES}`} className={styles.link}>
                    Список кандидатов
                </Link>
                <Typography className={styles.number} tag="span">
                    Кандидат №
                </Typography>
            </Breadcrumbs>
        </Box>
    );
};
