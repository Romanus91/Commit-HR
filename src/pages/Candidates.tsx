import React from 'react';
import { Box, Typography } from '@mui/material';

export const CandidatesPage: React.FC = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Кандидаты
            </Typography>
            <Typography variant="body1">Управление базой кандидатов</Typography>
        </Box>
    );
};
