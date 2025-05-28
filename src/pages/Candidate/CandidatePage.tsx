import React from 'react';
import { useParams } from '@tanstack/react-router';
import { PageLayout } from '@components/layout/PageLayout';
import { useGetCandidateQuery } from '@src/api/candidates';
import { candidateDetailsRoute } from '@router/index';

export const CandidatePage: React.FC = () => {
    const { id } = useParams({ from: candidateDetailsRoute.id });
    const { data } = useGetCandidateQuery(id);

    return <PageLayout>CandidatePage: {JSON.stringify(data)}</PageLayout>;
};
