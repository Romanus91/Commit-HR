import React from 'react';
import { useGetCandidatesQuery } from '@src/api/candidates';
import { Typography } from '@components/common/ui-kit';
import { PageLayout } from '@components/layout/PageLayout';
import { EDocumentType } from '@src/enums';
import styles from './styles.module.less';
import { SearchToolbar } from './components/SearchToolbar';
import { EViewType } from '@components/ViewToogle';
import { DataFilterView } from './components/DataFilterView';

export const CandidatesPage: React.FC = () => {
    const { data } = useGetCandidatesQuery({ documentType: EDocumentType.RESUME, page: 0, size: 20 });
    const [viewType, setViewType] = React.useState<EViewType>(EViewType.GRID);
    const [searchValue, setSearchValue] = React.useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.target.value);
    };

    return (
        <PageLayout>
            <Typography tag="h1" className={styles.title}>
                Кандидаты
            </Typography>
            <SearchToolbar
                onChangeViewType={(newValue) => setViewType(newValue)}
                onChangeSearchValue={handleSearchChange}
                selectedViewType={viewType}
                searchValue={searchValue}
            />
            <DataFilterView data={data} viewType={viewType} />
        </PageLayout>
    );
};
