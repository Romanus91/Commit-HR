import React from 'react';
import { useGetCandidatesQuery } from '@src/api/candidates';
import { Box, Typography } from '@components/common/ui-kit';
import { PageLayout } from '@components/layout/PageLayout';
import { EDocumentType } from '@src/enums';
import styles from './styles.module.less';
import { SearchToolbar } from './components/SearchToolbar';

export const CandidatesPage: React.FC = () => {
    const { data } = useGetCandidatesQuery({ documentType: EDocumentType.RESUME });

    return (
        <PageLayout>
            <Box className={styles.box}>
                <Typography tag="h1" className={styles.title}>
                    Кандидаты
                </Typography>
                <Typography tag="p">Количество кандидатов: {data?.candidates.length}</Typography>
            </Box>
            <SearchToolbar />
        </PageLayout>
    );
};
