import React from 'react';
import { Box, Typography } from '@components/common/ui-kit';
import { MetadataItem } from './components/MetadataItem';
import styles from './styles.module.less';
import { IVacancyDetailDTO } from '@src/types/api/vacancy';
import { formateDate } from '@utils/formateDate';
import { getFullName } from '@utils/getFullName';
import { vacancyStatusMap } from '@pages/Vacancies/constans/mapping';
import dayjs from 'dayjs';
import { pluralizeDays } from '@utils/pluralize';

interface IProps {
    data: IVacancyDetailDTO;
}

export const MainMetadata: React.FC<IProps> = ({ data }) => {
    const dateCreated = formateDate(data.createdAt);
    const dateUpdated = formateDate(data.updatedAt);
    const dateInfo = dateCreated === dateUpdated ? dateCreated : `${dateCreated} (изменен ${dateUpdated})`;

    const employerFullName = getFullName(data.employer);
    const employerInfo = `${employerFullName}`;

    const deadlineDate = dayjs(data.deadline).format('D MMMM YYYY');
    const daysLeft = dayjs(data.deadline).diff(dayjs(), 'day');
    const deadlineInfo = `${deadlineDate} (осталось ${daysLeft} ${pluralizeDays(daysLeft)})`;

    const recruitersInfo = data.recruiters.map((recruiter) => getFullName(recruiter)).join(', ') || 'Не назначены';

    return (
        <Box className={styles.container}>
            <Typography className={styles.title}>{data.title}</Typography>
            <Box className={styles.status}>{vacancyStatusMap[data.status]}</Box>
            <MetadataItem title="Добавлена" value={dateInfo} />
            <MetadataItem title="Работодатель" value={employerInfo} />
            <MetadataItem title="Дедлайн" value={deadlineInfo} />
            <MetadataItem title="Количество позиций" value={`${data.maxPositions}`} />
            <MetadataItem title="Откликнулось кандидатов" value={`${data.candidatesCount}`} />
            <MetadataItem title="Рекрутеры" value={recruitersInfo} />
        </Box>
    );
};
