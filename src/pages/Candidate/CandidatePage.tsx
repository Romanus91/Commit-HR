import React from 'react';
import { useParams } from '@tanstack/react-router';
import { PageLayout } from '@components/layout/PageLayout';
import { useGetCandidateCommentsQuery, useGetCandidateQuery } from '@src/api/candidates';
import { candidateDetailsRoute } from '@router/index';
import { Box } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { CandidateBreadcrumbs, CandidateMetadata, CandidateOverview } from './components';

export const CandidatePage: React.FC = () => {
    const { id } = useParams({ from: candidateDetailsRoute.id });
    const { data: candidateData } = useGetCandidateQuery(id);
    const { data: commentsData } = useGetCandidateCommentsQuery(id);

    if (!candidateData) {
        return null;
    }

    return (
        <PageLayout>
            <Box className={styles.box}>
                <CandidateBreadcrumbs />
            </Box>
            <Box className={styles.info}>
                <CandidateOverview candidateId={id} commentsData={commentsData} />
                <CandidateMetadata data={candidateData} />
            </Box>
        </PageLayout>
    );
};
