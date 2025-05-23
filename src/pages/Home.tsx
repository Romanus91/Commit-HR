import React from 'react';
import { PageLayout } from '@components/layout/PageLayout';
import { Box, Typography } from '@components/common/ui-kit';

export const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <Box>
                <Typography tag="h1">Главная страница</Typography>
                <Typography tag="p">Добро пожаловать в систему управления персоналом CommitHR!</Typography>
            </Box>
        </PageLayout>
    );
};
