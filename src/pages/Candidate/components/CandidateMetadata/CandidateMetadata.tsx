import React from 'react';
import { Box } from '@components/common/ui-kit';
import { MainMetadata } from './components/MainMetadata';
import styles from './styles.module.less';
import { ICandidateDetailsDTO } from '@src/types/api';
import { VacanciesMeta } from './components/VacanciesMeta';
import { ActionButtons } from './components/ActionButtons';

interface IProps {
    data: ICandidateDetailsDTO;
}

export const CandidateMetadata: React.FC<IProps> = ({ data }) => {
    return (
        <Box className={styles.container}>
            <MainMetadata data={data} />
            <VacanciesMeta vacancies={data?.vacancies ?? []} />
            <ActionButtons />
        </Box>
    );
};
