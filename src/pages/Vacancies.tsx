import React from 'react';
import { Box, Typography } from '@mui/material';

export const VacanciesPage: React.FC = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Вакансии
            </Typography>
            <Typography variant="body1">Управление вакансиями компании</Typography>
        </Box>
    );
};
