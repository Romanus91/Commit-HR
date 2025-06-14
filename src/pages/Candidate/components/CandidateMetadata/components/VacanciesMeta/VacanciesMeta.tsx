import React from 'react';
import styles from './styles.module.less';
import { Box, Typography } from '@components/common/ui-kit';
import { ICandidateVacancy } from '@src/types/api';
import { VacancyMetaItem } from './components/VacancyMetaItem';

interface IProps {
    vacancies: ICandidateVacancy[];
}

export const VacanciesMeta: React.FC<IProps> = ({ vacancies }) => {
    return (
        <Box className={styles.container}>
            <Typography className={styles.title}>Вакансии</Typography>
            <Box className={styles.vacancies}>
                {vacancies.length === 0 ? (
                    <Typography className={styles.noVacancies}>Нет вакансий</Typography>
                ) : (
                    vacancies.map((vacancy) => <VacancyMetaItem key={vacancy.candidateVacancyId} vacancy={vacancy} />)
                )}
            </Box>
        </Box>
    );
};
