import React from 'react';
import { Box, Typography, Icon } from '@components/common/ui-kit';
import { IVacancy } from '@src/types/api';
import { workFormatMap, vacancyStatusMap } from '../../constans/mapping';
import { pluralizeCandidates } from '@src/utils/pluralize';
import styles from './styles.module.less';
import { EColor, EIconName, EIconSize, EVacancyStatus } from '@src/enums';
import cn from 'clsx';

interface IProps {
    vacancies: IVacancy[];
    onVacancyClick: (id: string) => void;
}

export const VacanciesList: React.FC<IProps> = ({ vacancies, onVacancyClick }) => {
    return (
        <Box className={styles.container}>
            {vacancies.map((vacancy) => {
                const statusClassName = cn(styles.status, {
                    [styles.open]: EVacancyStatus.OPEN === 'OPEN',
                    [styles.closed]: EVacancyStatus.CLOSED === 'CLOSED',
                });

                return (
                    <Box key={vacancy.id} className={styles.row} onClick={() => onVacancyClick(vacancy.id)}>
                        <Box className={styles.leftContent}>
                            <Typography className={styles.title}>{vacancy.title}</Typography>
                            <Box className={styles.infoRow}>
                                <Box className={styles.infoItem}>
                                    <Icon name={EIconName.PROFILE} size={EIconSize.MINI} color={EColor.DARK_GRAY} />
                                    <Typography className={styles.infoText}>
                                        {workFormatMap[vacancy.workFormat]}
                                    </Typography>
                                </Box>
                                <Box className={styles.infoItem}>
                                    <Icon name={EIconName.STAR} size={EIconSize.MINI} color={EColor.DARK_GRAY} />
                                    <Typography className={styles.infoText}>{vacancy.maxPositions} позиций</Typography>
                                </Box>
                                <Box className={styles.infoItem}>
                                    <Icon
                                        name={EIconName.CARD_PROFILE}
                                        size={EIconSize.MINI}
                                        color={EColor.DARK_GRAY}
                                    />
                                    <Typography className={styles.infoText}>
                                        {pluralizeCandidates(vacancy.candidatesCount ?? 0)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={statusClassName}>{vacancyStatusMap[vacancy.status]}</Box>
                    </Box>
                );
            })}
        </Box>
    );
};
