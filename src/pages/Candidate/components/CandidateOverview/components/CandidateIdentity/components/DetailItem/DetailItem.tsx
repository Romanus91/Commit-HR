import { Box, Typography } from '@components/common/ui-kit';
import React from 'react';
import styles from './styles.module.less';

interface IProps {
    title: string;
    description: string;
}

export const DetailItem: React.FC<IProps> = ({ title, description }) => {
    return (
        <Box className={styles.container}>
            <Typography className={styles.title}>{title}</Typography>
            <Typography className={styles.description}>{description}</Typography>
        </Box>
    );
};
