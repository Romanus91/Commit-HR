import React from 'react';
import { Box, Breadcrumbs, Typography } from '@components/common/ui-kit';
import { ROUTES } from '@router/routes';
import { Link } from '@tanstack/react-router';
import styles from './styles.module.less';

interface IProps {
    title: string;
}

export const VacancyBreadcrumbs: React.FC<IProps> = ({ title }) => {
    return (
        <Box className={styles.box}>
            <Breadcrumbs separator="/" className={styles.breadcrumbs}>
                <Link to={`/${ROUTES.VACANCIES}`} className={styles.link}>
                    Список вакансий
                </Link>
                <Typography className={styles.title} tag="span">
                    {title}
                </Typography>
            </Breadcrumbs>
        </Box>
    );
};
