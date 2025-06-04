import React from 'react';
import { useParams } from '@tanstack/react-router';
import { PageLayout } from '@components/layout/PageLayout';
import { useGetVacancyQuery } from '@src/api/vacancies';
import { vacancyDetailsRoute } from '@router/index';
import { Box } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { VacancyBreadcrumbs, VacancyMetadata, VacancyOverview } from './components';

export const VacancyPage: React.FC = () => {
    const { id } = useParams({ from: vacancyDetailsRoute.id });
    const { data } = useGetVacancyQuery(id);

    if (!data) {
        return null;
    }

    return (
        <PageLayout>
            <Box className={styles.box}>
                <VacancyBreadcrumbs title={data.title} />
            </Box>
            <Box className={styles.info}>
                <VacancyOverview data={data} />
                <VacancyMetadata data={data} />
            </Box>
        </PageLayout>
    );
};
