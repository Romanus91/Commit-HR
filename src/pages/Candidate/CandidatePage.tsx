import React from 'react';
import { useParams } from '@tanstack/react-router';
import { PageLayout } from '@components/layout/PageLayout';
import { useGetCandidateQuery } from '@src/api/candidates';
import { candidateDetailsRoute } from '@router/index';
import { Box } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { CandidateBreadcrumbs, CandidateMetadata, CandidateOverview } from './components';

export const CandidatePage: React.FC = () => {
    const { id } = useParams({ from: candidateDetailsRoute.id });
    const { data } = useGetCandidateQuery(id);

    if (!data) {
        return null;
    }

    return (
        <PageLayout>
            <Box className={styles.box}>
                <CandidateBreadcrumbs />
            </Box>
            <Box className={styles.info}>
                <CandidateOverview />
                <CandidateMetadata data={data} />
            </Box>
        </PageLayout>
    );
};
