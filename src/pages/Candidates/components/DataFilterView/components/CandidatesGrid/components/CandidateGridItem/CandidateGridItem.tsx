import React from 'react';
import { Box, Icon, IconButton, Typography } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { EColor, EIconName, EIconSize } from '@src/enums';
import { ICandidate } from '@src/types/api';
import { getFullName } from '@utils/getFullName';

interface IProps {
    item: ICandidate;
}

export const CandidateGridItem: React.FC<IProps> = ({ item }) => {
    return (
        <Box className={styles.container}>
            <Box className={styles.body}>
                <Box className={styles.header}>
                    <Box className={styles.avatarWrapper}>
                        <Icon color={EColor.BLACK} name={EIconName.PROFILE} size={EIconSize.SMALL} />
                    </Box>
                    <Typography className={styles.name}>{getFullName(item)}</Typography>
                </Box>
                <Typography className={styles.position}>
                    {item.position?.name ?? <span className={styles.placeholder} />}
                </Typography>
                <Typography className={styles.grade}>
                    {item.grade ?? <span className={styles.placeholder} />}
                </Typography>
            </Box>
            <Box className={styles.footer}>
                <IconButton>
                    <Icon color={EColor.BLACK} name={EIconName.CLIP} size={EIconSize.SMALL} />
                </IconButton>
            </Box>
        </Box>
    );
};
