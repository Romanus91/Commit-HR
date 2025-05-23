import { Box, Input } from '@components/common/ui-kit';
import React from 'react';
import styles from './styles.module.less';

export const SearchToolbar: React.FC = () => {
    return (
        <Box>
            <Box>
                <Box className={styles.inputWrapper}>
                    <Input placeholder="Поиск" className={styles.input} variant="filled" />
                </Box>
            </Box>
        </Box>
    );
};
