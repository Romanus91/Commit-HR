import { EQuery, useMediaQuery } from '@hooks/useMediaQuery';
import { MenuItem as MuiMenuItem, MenuItemProps } from '@mui/material';
import React from 'react';

export interface IProps extends Omit<MenuItemProps, 'onChange'> {
    onChange?: (value: MenuItemProps['value']) => void;
}

export const MenuItem: React.FC<IProps> = (props) => {
    const { onChange, onClick, ...itemProps } = props;
    const isMobile = useMediaQuery(EQuery.MOBILE);

    const onItemClick = (evt: React.MouseEvent<HTMLLIElement>) => {
        if (isMobile) {
            onChange?.(props.value);
        } else {
            onClick?.(evt);
        }
    };

    return <MuiMenuItem {...itemProps} onClick={onItemClick} />;
};
