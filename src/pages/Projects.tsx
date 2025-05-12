import React from 'react';
import { Box, Typography } from '@mui/material';

export const ProjectsPage: React.FC = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Проекты
            </Typography>
            <Typography variant="body1">Управление проектами компании</Typography>
        </Box>
    );
};
