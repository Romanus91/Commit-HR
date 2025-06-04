import React from 'react';
import cn from 'clsx';
import { Box, Icon, Typography } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { EColor, EIconName, EIconSize, EVacancyStatus } from '@src/enums';
import { IVacancy } from '@src/types/api';
import { workFormatMap, vacancyStatusMap } from '../../constans/mapping';

interface IProps {
    item: IVacancy;
    onClickCard: (id: string) => void;
}

export const VacancyCard: React.FC<IProps> = ({ item, onClickCard }) => {
    const statusClassName = cn(styles.status, {
        [styles.open]: EVacancyStatus.OPEN === 'OPEN',
        [styles.closed]: EVacancyStatus.CLOSED === 'CLOSED',
    });

    return (
        <Box className={styles.container} onClick={() => onClickCard(item.id)}>
            <Box className={styles.header}>
                <Typography className={styles.title}>{item.title}</Typography>
                <Box className={statusClassName}>{vacancyStatusMap[item.status]}</Box>
            </Box>

            <Box className={styles.body}>
                <Box className={styles.infoRow}>
                    <Icon name={EIconName.PROFILE} size={EIconSize.MINI} color={EColor.DARK_GRAY} />
                    <Typography className={styles.infoText}>{workFormatMap[item.workFormat]}</Typography>
                </Box>

                <Box className={styles.infoRow}>
                    <Icon name={EIconName.STAR} size={EIconSize.MINI} color={EColor.DARK_GRAY} />
                    <Typography className={styles.infoText}>Позиций: {item.maxPositions}</Typography>
                </Box>

                <Box className={styles.infoRow}>
                    <Icon name={EIconName.CARD_PROFILE} size={EIconSize.MINI} color={EColor.DARK_GRAY} />
                    <Typography className={styles.infoText}>Кандидатов: {item.candidatesCount ?? 0}</Typography>
                </Box>
            </Box>
        </Box>
    );
};
