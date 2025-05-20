import React from 'react';
import { useGetCandidatesQuery } from '@src/api/candidates';
import { Box, Typography } from '@components/common/ui-kit';
import { PageLayout } from '@components/layout/PageLayout';

export const CandidatesPage: React.FC = () => {
    const { data } = useGetCandidatesQuery();

    return (
        <PageLayout>
            <Box>
                <Typography tag="h1">Кандидаты</Typography>
                <Typography tag="p">{JSON.stringify(data, null, 2)}</Typography>
            </Box>
        </PageLayout>
    );
};
