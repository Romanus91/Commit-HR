import React from 'react';
import styles from './styles.module.less';
import { Box } from '@mui/material';
import { CandidatesGrid } from './components/CandidatesGrid';
import { FilterPanel } from './components/FilterPanel';
import { ICandidatesDTO } from '@src/types/api';
import { EViewType } from '@components/ViewToogle';
import { CandidatesList } from './components/CandidatesList';

interface IProps {
    data?: ICandidatesDTO;
    viewType: EViewType;
}

export const DataFilterView: React.FC<IProps> = ({ data, viewType }) => {
    return (
        <Box className={styles.box}>
            <FilterPanel />
            {viewType === EViewType.GRID ? <CandidatesGrid list={data?.candidates} /> : <CandidatesList />}
        </Box>
    );
};
