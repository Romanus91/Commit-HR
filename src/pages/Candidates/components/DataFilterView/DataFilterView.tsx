import React from 'react';
import styles from './styles.module.less';
import { Box } from '@mui/material';
import { CandidatesGrid } from './components/CandidatesGrid';
import { FilterPanel } from './components/FilterPanel';
import { ICandidatesDTO } from '@src/types/api';
import { EViewType } from '@components/ViewToogle';
import { CandidatesList } from './components/CandidatesList';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ApiError } from '@services/api/models';
import { Typography } from '@components/common/ui-kit';

interface IProps {
    data?: ICandidatesDTO;
    error?: FetchBaseQueryError | SerializedError;
    isError: boolean;
    viewType: EViewType;
}

export const DataFilterView: React.FC<IProps> = ({ data, error, isError, viewType }) => {
    const is404Error = error && 'status' in error && error.status === 404;

    return (
        <Box className={styles.box}>
            <FilterPanel />
            {isError && (
                <Typography className={styles.error}>
                    {is404Error
                        ? (error as ApiError).data?.message || 'Нет подходящих кандидатов'
                        : 'Произошла ошибка при загрузке данных'}
                </Typography>
            )}
            {viewType === EViewType.GRID ? <CandidatesGrid list={data?.candidates} /> : <CandidatesList />}
        </Box>
    );
};
