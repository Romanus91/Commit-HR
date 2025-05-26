import React from 'react';
import { Box, Icon, IconButton, Input, usePopup } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { EColor, EDocumentType, EIconName, EIconSize } from '@src/enums';
import { darken, lighten } from '@mui/material';
import { AddActionsPopup } from './components/AddActionsPopup';
import { useLazyGetCandidatesQuery } from '@src/api/candidates';

export const UserActions: React.FC = () => {
    const { popupId, isOpen, onClick, onClose, anchor } = usePopup();
    const [isSearchOpened, setSearchOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [trigger, { isLoading }] = useLazyGetCandidatesQuery();

    const inputSearchIconColor = searchValue ? EColor.BLACK : EColor.DARK_GRAY;

    const handleInputBlur = (event: React.FocusEvent<HTMLDivElement>): void => {
        if (event.currentTarget.contains(event.relatedTarget as Node)) {
            return;
        }

        setSearchOpened(false);
    };

    const handleSearchSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const result = await trigger({
                search: searchValue,
                documentType: EDocumentType.RESUME,
            }).unwrap();

            return result;
        } catch (err) {
            console.error('UserActions', err);
        }
    };

    return (
        <Box className={styles.container}>
            {isSearchOpened ? (
                <Box className={styles.inputWrapper} onBlur={handleInputBlur}>
                    <form onSubmit={handleSearchSubmit}>
                        <Input
                            adornment={
                                <IconButton disableRipple disabled={!searchValue || isLoading} type="submit">
                                    <Icon name={EIconName.SEARCH} size={EIconSize.SMALL} color={inputSearchIconColor} />
                                </IconButton>
                            }
                            adornmentPosition="end"
                            autoComplete="off"
                            autoFocus
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Поиск"
                            value={searchValue}
                        />
                    </form>
                </Box>
            ) : (
                <IconButton aria-label="Добавить" title="Добавить" onClick={() => setSearchOpened(true)}>
                    <Icon name={EIconName.SEARCH} color={EColor.PURPLE} size={EIconSize.SMALL} />
                </IconButton>
            )}
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
