import React from 'react';
import MuiToolbar from '@mui/material/Toolbar';
import type { ToolbarProps as MuiToolbarProps } from '@mui/material/Toolbar';

type ToolbarBaseProps = Omit<MuiToolbarProps, 'classes' | 'style'>;

interface IProps extends ToolbarBaseProps {
    ref?: React.Ref<HTMLDivElement>;
    children?: React.ReactNode;
}

export const Toolbar: React.FC<React.PropsWithChildren<IProps>> = ({ ref, children, ...restProps }) => {
    return (
        <MuiToolbar ref={ref} {...restProps}>
            {children}
        </MuiToolbar>
    );
};
