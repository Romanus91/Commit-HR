import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import type { AppBarProps } from '@mui/material/AppBar';

type AppBarBaseProps = Omit<AppBarProps, 'classes' | 'style'>;

interface IProps extends AppBarBaseProps {
    ref?: React.Ref<HTMLElement>;
    children?: React.ReactNode;
}

export const AppBar: React.FC<React.PropsWithChildren<IProps>> = ({ ref, children, ...restProps }) => {
    return (
        <MuiAppBar position="static" ref={ref} {...restProps}>
            {children}
        </MuiAppBar>
    );
};
