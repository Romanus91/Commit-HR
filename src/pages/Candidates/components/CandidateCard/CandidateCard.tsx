import React from 'react';
import cn from 'clsx';
import { Box, Icon, IconButton, Typography } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { EColor, EIconName, EIconSize } from '@src/enums';
import { ICandidate } from '@src/types/api';
import { getFullName } from '@utils/getFullName';
import { ECandidateCardTheme } from './enums';

interface IProps {
    item: ICandidate;
    onClickCard: (id: string) => void;
    theme: ECandidateCardTheme;
}

export const CandidateCard: React.FC<IProps> = ({ item, onClickCard, theme }) => {
    const styledContainer = cn(styles.container, {
        [styles.dark]: theme === ECandidateCardTheme.DARK,
        [styles.light]: theme === ECandidateCardTheme.LIGHT,
    });

    const styledAvatarWrapper = cn(styles.avatarWrapper, {
        [styles.dark]: theme === ECandidateCardTheme.DARK,
        [styles.light]: theme === ECandidateCardTheme.LIGHT,
    });

    return (
        <Box className={styledContainer} onClick={() => onClickCard(item.id)}>
            <Box className={styles.body}>
                <Box className={styles.header}>
                    <Box className={styledAvatarWrapper}>
                        <Icon color={EColor.BLACK} name={EIconName.CARD_PROFILE} size={EIconSize.SMALL} />
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
