import React from 'react';
import { Box, Typography } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { IVacancyDetailDTO } from '@src/types/api/vacancy';
import { employmentTypeMap, gradeMap } from './data';
import { workFormatMap } from '@pages/Vacancies/constans/mapping';

interface IProps {
    data: IVacancyDetailDTO;
}

export const VacancyOverview: React.FC<IProps> = ({ data }) => {
    const formatSalary = () => {
        if (data.salaryFrom && data.salaryTo) {
            return `${data.salaryFrom.toLocaleString('ru-RU')} - ${data.salaryTo.toLocaleString('ru-RU')} ${data.currencyCode}`;
        } else if (data.salaryFrom) {
            return `от ${data.salaryFrom.toLocaleString('ru-RU')} ${data.currencyCode}`;
        } else if (data.salaryTo) {
            return `до ${data.salaryTo.toLocaleString('ru-RU')} ${data.currencyCode}`;
        }

        return 'Не указана';
    };

    return (
        <Box className={styles.container}>
            <Box className={styles.header}>
                <Typography tag="h1" className={styles.title}>
                    {data.title}
                </Typography>
                <Typography className={styles.department}>
                    {data.department.name} • {data.city.name}
                </Typography>
            </Box>

            <Box className={styles.infoBlock}>
                <Box className={styles.infoRow}>
                    <Typography className={styles.label}>Зарплата:</Typography>
                    <Typography className={styles.value}>{formatSalary()}</Typography>
                </Box>
                <Box className={styles.infoRow}>
                    <Typography className={styles.label}>Тип занятости:</Typography>
                    <Typography className={styles.value}>{employmentTypeMap[data.employmentType]}</Typography>
                </Box>
                <Box className={styles.infoRow}>
                    <Typography className={styles.label}>Формат работы:</Typography>
                    <Typography className={styles.value}>{workFormatMap[data.workFormat]}</Typography>
                </Box>
                <Box className={styles.infoRow}>
                    <Typography className={styles.label}>Уровень:</Typography>
                    <Typography className={styles.value}>{gradeMap[data.grade]}</Typography>
                </Box>
                <Box className={styles.infoRow}>
                    <Typography className={styles.label}>Опыт:</Typography>
                    <Typography className={styles.value}>{data.experience || 'Не указан'}</Typography>
                </Box>
            </Box>

            {data.description && (
                <Box className={styles.section}>
                    <Typography className={styles.sectionTitle}>Описание</Typography>
                    <Typography className={styles.sectionContent}>{data.description}</Typography>
                </Box>
            )}

            {data.responsibilities && (
                <Box className={styles.section}>
                    <Typography className={styles.sectionTitle}>Обязанности</Typography>
                    <Typography className={styles.sectionContent}>{data.responsibilities}</Typography>
                </Box>
            )}

            {data.candidates && data.candidates.length > 0 && (
                <Box className={styles.section}>
                    <Typography className={styles.sectionTitle}>Кандидаты ({data.candidatesCount})</Typography>
                    <Box className={styles.candidatesList}>
                        {data.candidates.map((candidate) => (
                            <Box key={candidate.id} className={styles.candidateItem}>
                                <Typography className={styles.candidateName}>{candidate.fullName}</Typography>
                                <Typography className={styles.candidateContact}>
                                    {candidate.email} • {candidate.phone}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    );
};
