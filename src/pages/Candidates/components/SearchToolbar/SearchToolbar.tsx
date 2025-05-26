import React from 'react';
import { Box, Icon, IconButton, Input } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { EColor, EIconName, EIconSize } from '@src/enums';
import { EViewType, ViewToogle } from '@components/ViewToogle';

interface IProps {
    onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeViewType: (value: EViewType) => void;
    searchValue: string;
    selectedViewType: EViewType;
}

export const SearchToolbar: React.FC<IProps> = ({
    onChangeSearchValue,
    onChangeViewType,
    searchValue,
    selectedViewType,
}) => {
    return (
        <Box className={styles.container}>
            <Box>
                <Box className={styles.inputWrapper}>
                    <Input
                        placeholder="Поиск"
                        variant="filled"
                        adornment={
                            <IconButton type="submit">
                                <Icon name={EIconName.SEARCH} size={EIconSize.SMALL} color={EColor.DARK_GRAY} />
                            </IconButton>
                        }
                        adornmentPosition="end"
                        autoComplete="off"
                        onChange={onChangeSearchValue}
                        value={searchValue}
                    />
                </Box>
            </Box>
            <ViewToogle onChange={onChangeViewType} selectedValue={selectedViewType} />
        </Box>
    );
};
