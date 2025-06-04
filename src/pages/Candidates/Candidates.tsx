import React from 'react';
import { useGetCandidatesQuery } from '@src/api/candidates';
import { Typography } from '@components/common/ui-kit';
import { PageLayout } from '@components/layout/PageLayout';
import { EDocumentType, EPaginationSize } from '@src/enums';
import styles from './styles.module.less';
import { SearchToolbar } from './components/SearchToolbar';
import { EViewType } from '@components/ViewToogle';
import { DataFilterView } from './components/DataFilterView';
import { FormProvider, useForm } from 'react-hook-form';
import { IFilterFormValues } from './types';

export const CandidatesPage: React.FC = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [searchQuery, setSearchQuery] = React.useState('');
    const { data, isError, error } = useGetCandidatesQuery({
        documentType: EDocumentType.RESUME,
        page: 0,
        size: EPaginationSize.SIZE_20,
        ...(searchQuery && { search: searchQuery }),
    });
    const [viewType, setViewType] = React.useState<EViewType>(EViewType.GRID);

    const methods = useForm<IFilterFormValues>({
        defaultValues: {
            grade: null,
            workFormat: null,
        },
    });
    const { reset } = methods;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = (): void => {
        setSearchQuery(searchValue);

        if (searchValue) {
            reset();
        }
    };

    return (
        <PageLayout>
            <Typography tag="h1" className={styles.title}>
                Кандидаты
            </Typography>
            <SearchToolbar
                onChangeViewType={(newValue) => setViewType(newValue)}
                onChangeSearchValue={handleSearchChange}
                onSearchSubmit={handleSearchSubmit}
                selectedViewType={viewType}
                searchValue={searchValue}
            />
            <FormProvider {...methods}>
                <DataFilterView data={data} error={error} isError={isError} viewType={viewType} />
            </FormProvider>
        </PageLayout>
    );
};
