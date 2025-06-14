import React from 'react';
import { Box } from '@components/common/ui-kit';
import { MetadataItem } from './components/MetadataItem';
import styles from './styles.module.less';
import { ICandidateDetailsDTO } from '@src/types/api';
import { formateDate } from '@utils/formateDate';
import { getFullName } from '@utils/getFullName';
import { generalStatusMap, recruiterRoleMap } from './data';

interface IProps {
    data: ICandidateDetailsDTO;
}

export const MainMetadata: React.FC<IProps> = ({ data }) => {
    const dateCreated = formateDate(data.createdAt);
    const dateUpdated = formateDate(data.updatedAt);
    const dateInfo = dateCreated === dateUpdated ? dateCreated : `${dateCreated} (изменен ${dateUpdated})`;
    const recruterFullName = getFullName(data.recruiter);
    const recruiterRole = recruiterRoleMap[data.recruiter.role];
    const recruiterInfo = `${recruterFullName} (${recruiterRole})`;

    return (
        <Box className={styles.container}>
            <MetadataItem title="Добавлен" value={dateInfo} />
            <Box className={styles.status}>{generalStatusMap[data.generalStatus]}</Box>
            <MetadataItem title="Кем добавлен" value={recruiterInfo} />
            {/* TODO: Remove the bottom line */}
            <MetadataItem title="Здесь будут еще поля" value="После того, как будет известно" />
        </Box>
    );
};
