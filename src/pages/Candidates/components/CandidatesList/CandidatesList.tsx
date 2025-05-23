import React from 'react';
import { ICandidate } from '@src/types/api';
import { Box } from '@components/common/ui-kit';
import styles from './styles.module.less';

interface IProps {
    list?: ICandidate[];
}

export const CandidatesList: React.FC<IProps> = ({ list }) => {
    if (!list) {
        return null;
    }

    return <Box className={styles.container}>CandidatesList</Box>;
};
