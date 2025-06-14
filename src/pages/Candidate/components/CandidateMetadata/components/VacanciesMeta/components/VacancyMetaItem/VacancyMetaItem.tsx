import { Box, Typography } from '@components/common/ui-kit';
import { ICandidateVacancy } from '@src/types/api';
import React from 'react';
import styles from './styles.module.less';
import { Link } from '@tanstack/react-router';
import { ROUTES } from '@router/routes';

interface IProps {
    vacancy: ICandidateVacancy;
}

export const VacancyMetaItem: React.FC<IProps> = ({ vacancy }) => {
    const { title, status } = vacancy;
    const vacancyPath = `/${ROUTES.VACANCIES}/${vacancy.candidateVacancyId}`;

    return (
        <Box className={styles.container}>
            <Link to={vacancyPath} className={styles.title}>
                {title}
            </Link>
            <Typography className={styles.status}>{status}</Typography>
        </Box>
    );
};
