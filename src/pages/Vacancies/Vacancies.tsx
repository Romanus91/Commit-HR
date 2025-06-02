import React from 'react';
import { Box, Typography } from '@components/common/ui-kit';
import { useGetVacanciesQuery } from '@src/api/vacancies';
import { PageLayout } from '@components/layout/PageLayout';
import { SearchToolbar } from './components/SearchToolbar';
import { EViewType } from '@components/ViewToogle';
import { workFormatMap, vacancyStatusMap } from './constans/mapping';
import styles from './styles.module.less';

export const VacanciesPage: React.FC = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [searchQuery, setSearchQuery] = React.useState('');
    const [viewType, setViewType] = React.useState<EViewType>(EViewType.GRID);

    const { data, isLoading, error } = useGetVacanciesQuery();

    // Фильтрация вакансий по поисковому запросу
    const filteredVacancies = React.useMemo(() => {
        if (!data?.vacancies || !searchQuery) {
            return data?.vacancies || [];
        }

        return data.vacancies.filter((vacancy) => vacancy.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [data?.vacancies, searchQuery]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = (): void => {
        setSearchQuery(searchValue);
    };

    if (isLoading) {
        return (
            <PageLayout>
                <Typography tag="h1" className={styles.title}>
                    Вакансии
                </Typography>
                <Typography>Загрузка вакансий...</Typography>
            </PageLayout>
        );
    }

    if (error) {
        return (
            <PageLayout>
                <Typography tag="h1" className={styles.title}>
                    Вакансии
                </Typography>
                <Typography>Ошибка загрузки вакансий</Typography>
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <Typography tag="h1" className={styles.title}>
                Вакансии
            </Typography>
            <SearchToolbar
                onChangeViewType={(newValue) => setViewType(newValue)}
                onChangeSearchValue={handleSearchChange}
                onSearchSubmit={handleSearchSubmit}
                selectedViewType={viewType}
                searchValue={searchValue}
            />

            {/* Временное отображение данных в зависимости от выбранного вида */}
            <Box className={styles.content}>
                {viewType === EViewType.GRID ? (
                    <Box className={styles.gridView}>
                        {filteredVacancies.map((vacancy) => (
                            <Box key={vacancy.id} className={styles.vacancyCard}>
                                <Typography className={styles.vacancyTitle}>{vacancy.title}</Typography>
                                <Typography className={styles.vacancyInfo}>
                                    Формат: {workFormatMap[vacancy.workFormat]}
                                </Typography>
                                <Typography className={styles.vacancyInfo}>Позиций: {vacancy.maxPositions}</Typography>
                                <Typography className={styles.vacancyInfo}>
                                    Кандидатов: {vacancy.candidatesCount ?? 0}
                                </Typography>
                                <Typography className={styles.vacancyInfo}>
                                    Статус: {vacancyStatusMap[vacancy.status]}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Box className={styles.listView}>
                        {filteredVacancies.map((vacancy) => (
                            <Box key={vacancy.id} className={styles.vacancyRow}>
                                <Typography className={styles.vacancyTitle}>{vacancy.title}</Typography>
                                <Typography className={styles.vacancyInfo}>
                                    {workFormatMap[vacancy.workFormat]} | {vacancy.maxPositions} позиций |{' '}
                                    {vacancy.candidatesCount ?? 0} кандидатов | {vacancyStatusMap[vacancy.status]}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                )}

                {filteredVacancies.length === 0 && (
                    <Typography className={styles.emptyState}>
                        {searchQuery ? 'Вакансии не найдены' : 'Нет доступных вакансий'}
                    </Typography>
                )}
            </Box>

            {data?.pagination && (
                <Typography className={styles.pagination}>
                    Страница {data.pagination.page} из {data.pagination.totalPages}
                </Typography>
            )}
        </PageLayout>
    );
};
