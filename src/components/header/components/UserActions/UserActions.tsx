import React from 'react';
import { Box, Icon, IconButton } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { EColor, EIconName, EIconSize } from '@src/enums';
import { darken, lighten } from '@mui/material';

export const UserActions: React.FC = () => {
    return (
        <Box className={styles.container}>
            <IconButton
                aria-label="Избранное"
                title="Избранное"
                sx={{
                    backgroundColor: EColor.PURPLE,
                    '&:hover': {
                        backgroundColor: darken(EColor.PURPLE, 0.4),
                    },
                }}
            >
                <Icon name={EIconName.PLUS} color={EColor.WHITE} size={EIconSize.SMALL} />
            </IconButton>
            <IconButton
                aria-label="Добавить вакансию"
                title="Добавить вакансию"
                sx={{
                    backgroundColor: EColor.WHITE,
                    '&:hover': {
                        backgroundColor: lighten(EColor.WHITE, 1),
                    },
                }}
            >
                <Icon name={EIconName.STAR} color={EColor.PURPLE} size={EIconSize.SMALL} />
            </IconButton>
            <IconButton
                color="primary"
                aria-label="Профиль"
                title="Профиль"
                sx={{
                    backgroundColor: EColor.WHITE,
                    '&:hover': {
                        backgroundColor: lighten(EColor.WHITE, 1),
                    },
                }}
            >
                <Icon name={EIconName.PROFILE} color={EColor.PURPLE} size={EIconSize.SMALL} />
            </IconButton>
        </Box>
    );
};
