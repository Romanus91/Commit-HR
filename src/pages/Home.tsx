import React from 'react';
import { Box, Typography } from '@mui/material';

export const HomePage: React.FC = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Главная страница
            </Typography>
            <Typography variant="body1">Добро пожаловать в систему управления персоналом CommitHR!</Typography>
        </Box>
    );
};
