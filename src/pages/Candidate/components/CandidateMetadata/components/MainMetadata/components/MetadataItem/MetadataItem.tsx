import React from 'react';
import { Box, Typography } from '@components/common/ui-kit';
import styles from './styles.module.less';

interface IProps {
    title: string;
    value: string;
}

export const MetadataItem: React.FC<IProps> = ({ title, value }) => {
    return (
        <Box className={styles.container}>
            <Typography className={styles.title}>{title}</Typography>
            <Typography className={styles.value}>{value}</Typography>
        </Box>
    );
};
