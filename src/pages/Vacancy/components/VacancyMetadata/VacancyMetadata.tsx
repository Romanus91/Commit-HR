import React from 'react';
import { Box } from '@components/common/ui-kit';
import { MainMetadata } from './components/MainMetadata';
import styles from './styles.module.less';
import { IVacancyDetailDTO } from '@src/types/api/vacancy';

interface IProps {
    data: IVacancyDetailDTO;
}

export const VacancyMetadata: React.FC<IProps> = ({ data }) => {
    return (
        <Box className={styles.container}>
            <MainMetadata data={data} />
        </Box>
    );
};
