import React from 'react';
import { ICandidate } from '@src/types/api';
import { Box } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { CandidateGridItem } from './components/CandidateGridItem';

interface IProps {
    list?: ICandidate[];
}

export const CandidatesGrid: React.FC<IProps> = ({ list }) => {
    if (!list) {
        return null;
    }

    return (
        <Box className={styles.container}>
            {list.map((item) => {
                return <CandidateGridItem key={item.id} item={item} />;
            })}
        </Box>
    );
};
