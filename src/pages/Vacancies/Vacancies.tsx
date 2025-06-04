import React from 'react';
import { Box, Typography } from '@components/common/ui-kit';
import { useGetVacanciesQuery } from '@src/api/vacancies';
import { PageLayout } from '@components/layout/PageLayout';
import { SearchToolbar } from './components/SearchToolbar';
import { VacancyCard } from './components/VacancyCard';
import { VacanciesList } from './components/VacanciesList';
import { EViewType } from '@components/ViewToogle';
import styles from './styles.module.less';
import { useRouter } from '@tanstack/react-router';
import { ROUTES } from '@router/routes';

export const VacanciesPage: React.FC = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [searchQuery, setSearchQuery] = React.useState('');
    const [viewType, setViewType] = React.useState<EViewType>(EViewType.GRID);
    const router = useRouter();

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

    const handleVacancyClick = (id: string): void => {
        router.navigate({
            to: `/${ROUTES.VACANCIES}/${id}`,
            params: { id },
        });
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
                            <VacancyCard key={vacancy.id} item={vacancy} onClickCard={handleVacancyClick} />
                        ))}
                    </Box>
                ) : (
                    <VacanciesList vacancies={filteredVacancies} onVacancyClick={handleVacancyClick} />
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
