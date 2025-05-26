// src/pages/Vacancies.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useGetVacanciesQuery } from '@src/api/vacancies';
import { PageLayout } from '@components/layout/PageLayout';

export const VacanciesPage: React.FC = () => {
    const { data, isLoading, error } = useGetVacanciesQuery();

    if (isLoading) {
        return (
            <PageLayout>
                <Typography>Загрузка вакансий...</Typography>
            </PageLayout>
        );
    }

    if (error) {
        return (
            <PageLayout>
                <Typography color="error">Ошибка загрузки вакансий</Typography>
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <Box sx={{ padding: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Вакансии ({data?.vacancies.length || 0})
                </Typography>

                {data?.vacancies.map((vacancy) => (
                    <Box
                        key={vacancy.id}
                        sx={{
                            border: '1px solid #e0e0e0',
                            borderRadius: 2,
                            padding: 2,
                            marginBottom: 2,
                            backgroundColor: 'white',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            {vacancy.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Формат работы: {vacancy.workFormat}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Максимальные позиции: {vacancy.maxPositions}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Статус: {vacancy.status}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Кандидатов: {vacancy.candidatesCount}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Дедлайн: {new Date(vacancy.deadline).toLocaleDateString('ru-RU')}
                        </Typography>
                    </Box>
                ))}

                {data?.pagination && (
                    <Typography variant="caption" color="text.secondary">
                        Страница {data.pagination.page} из {data.pagination.totalPages}
                    </Typography>
                )}
            </Box>
        </PageLayout>
    );
};
