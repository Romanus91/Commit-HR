import React from 'react';
import { Box, Icon, IconButton, usePopup } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { EColor, EIconName, EIconSize } from '@src/enums';
import { darken, lighten } from '@mui/material';
import { AddActionsPopup } from './components/AddActionsPopup';

export const UserActions: React.FC = () => {
    const { popupId, isOpen, onClick, onClose, anchor } = usePopup();

    return (
        <Box className={styles.container}>
            <IconButton
                aria-label="Добавить"
                title="Добавить"
                onClick={onClick}
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
                aria-label="Избранное"
                title="Избранное"
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
            <AddActionsPopup id={popupId} isOpen={isOpen} anchor={anchor} onClose={onClose} />
        </Box>
    );
};
