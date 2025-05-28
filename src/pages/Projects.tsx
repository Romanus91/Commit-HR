import React from 'react';
import { PageLayout } from '@components/layout/PageLayout';
import { Box, Typography } from '@components/common/ui-kit';

export const ProjectsPage: React.FC = () => {
    return (
        <PageLayout>
            <Box>
                <Typography>Проекты</Typography>
                <Typography>Управление проектами компании</Typography>
            </Box>
        </PageLayout>
    );
};
